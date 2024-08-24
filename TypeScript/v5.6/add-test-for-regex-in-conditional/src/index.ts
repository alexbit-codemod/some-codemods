export default function transform(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirtyFlag = false;

  // Find all if statements
  root.find(j.IfStatement).forEach((path) => {
    const test = path.value.test;

    // Check if the test condition is a regular expression literal
    if (j.Literal.check(test) && test.regex) {
      // Replace the test condition with regex.test('')
      path.value.test = j.callExpression(
        j.memberExpression(test, j.identifier('test')),
        [j.literal('')],
      );
      dirtyFlag = true;
    }
  });

  return dirtyFlag ? root.toSource() : undefined;
}