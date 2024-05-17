# Color token to hex object

## Description

## Examples

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

