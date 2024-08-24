Short description

Detailed description

## Example

### Before

```ts
if (/^[0-9]+$/) {
  console.log('This will always run');
}
```

### After

```ts
if (/^[0-9]+$/.test('')) {
  console.log('This will always run');
}
```
,
### Before

```ts
if (/^[a-z]+$/) {
  console.log('This will always run');
}
```

### After

```ts
if (/^[a-z]+$/.test('')) {
  console.log('This will always run');
}
```
,
### Before

```ts
if (/^\d{4}-\d{2}-\d{2}$/) {
  console.log('This will always run');
}
```

### After

```ts
if (/^\d{4}-\d{2}-\d{2}$/.test('')) {
  console.log('This will always run');
}
```

