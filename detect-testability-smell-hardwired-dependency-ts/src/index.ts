import type { FileInfo, API, Options } from 'jscodeshift';

export default function transform(
  file: FileInfo,
  api: API,
  options ? : Options,
): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.ClassDeclaration).forEach((path) => {
    const className = path.value.id.name;
    let hasInternalDependency = false;

    j(path)
      .find(j.NewExpression)
      .forEach((newPath) => {
        const calleeName = newPath.value.callee.name;
        if (calleeName !== className) {
          hasInternalDependency = true;
        }
      });

    if (hasInternalDependency) {
      path.value.comments = [
        j.commentBlock(
          ' This class creates instances of its dependencies internally',
        ),
      ];
    }
  });

  return root.toSource();
}