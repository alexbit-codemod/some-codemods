import type { FileInfo, API, Options } from 'jscodeshift';

export default function transform(
  file: FileInfo,
  api: API,
  options ? : Options,
): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);
  ROOT.FIND(J.CLASSDECLARATION).FOREACH((PATH) => {
    CONST CLASSNAME = PATH.VALUE.ID.NAME;
    LET HASINTERNALDEPENDENCY = FALSE;

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