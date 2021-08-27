# YAML Merge

## The Problem

The merging of YAML files typically happens after both files have been converted to JSON.

The conversion of JSON processes the anchor and aliases. This prevents the modification of anchors and aliases.

Example:

```yaml
# main.yaml
colors:
  primary: &primary-color "black"

body:
  color: *primary-color
```

```yaml
# overrides.yaml
colors:
  primary: "orange"
```

Expected output is incorrect because `body.color` was not replaced.

```javascript
const merged = deepmerge(yaml, overrides);
/**
 * {
 *   "colors": {
 *     "primary": "orange"
 *   },
 *   "body": {
 *     "color": "black"
 *   }
 * }
 */
```

## The Solution

The solution is to merge the YAML files before converting them into JSON.
