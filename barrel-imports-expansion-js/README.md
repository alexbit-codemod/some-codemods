
# Barrel imports expansion

## Description

## Examples

### Before

```ts
import { A, B, C } from './barrel';

function Component() {
  const [name, setName] = useState < string > ('React');
}
```

### After

```ts
import A from './barrel/A'
import B from './barrel/B'
import C from './barrel/C'

function Component() {
  const [name, setName] = useState < string > ('React');
}
```

