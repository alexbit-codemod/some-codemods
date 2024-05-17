export default function transform(
  file: FileInfo,
  api: API,
  options ? : Options,
): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);

  function replaceWithComments(path, newNode) {
    if (path.node.comments) {
      newNode.comments = path.node.comments;
    }
    j(path).replaceWith(newNode);
  }

  // Find all object properties with key $value and $type
  root.find(j.ObjectProperty).forEach((path) => {
    if (path.node.key.name === '$value') {
      const siblingPath = path.parentPath.value.find(
        (property) => property.key.name === '$type',
      );
      if (siblingPath && siblingPath.value.value === 'color') {
        // Create a new object expression with key "hex" and value as the original $value
        const newObjectExpression = j.objectExpression([
          j.objectProperty(j.identifier('hex'), path.node.value),
        ]);
        replaceWithComments(
          path,
          j.objectProperty(
            j.identifier('$value'),
            newObjectExpression,
          ),
        );
      }
    }
  });

  return root.toSource();
}