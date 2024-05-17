For tokens of the type 'color' (not other tokens), transform $value into an object with a 'hex' key, where the value remains the same as the previous $value

### Before

```json
{
  "interactive": {
    "100": {
      "$value": "<some string>",
      "$type": "color"
    }
  },
  "someOtherColorToken": {
    "$value": "#DBF0FF",
    "$type": "color"
  }
}


```

### After

```json
{
  "interactive": {
    "100": {
      "$value": {
        "hex": "<some string>"
      },
      "$type": "color"
    }
  },
  "someOtherColorToken": {
    "$value": {
      "hex": "#DBF0FF"
    },
    "$type": "color"
  }
}

```

