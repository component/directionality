
# directionality

  Determines the writing system's 
  [directionality](http://en.wikipedia.org/wiki/Writing_system#Directionality) based on characters tests.

## Installation

```
$ component install component/directionality
```

## Example

```js
var dir = require('directionality');
dir('الولايات المتحدة الأمريكية'); // 'rtl'
dir('Hello world'); // 'ltr'
```

## Methodology

The decision is made based on the first character of the input string,
testing for a range of unicode characters that belong to rtl or ltr
languages (see API to learn how to access the regular expressions).

## API

### directionality(str)

  Returns `'rtl'` for right-to-left text, and `'ltr'` for
  left-to-right text.

### directionality.regex.ltr

  Access the regular expression of ltr charecters.

### directionality.regex.rtl

  Access the regular expression of rtl charecters.

## License

MIT
