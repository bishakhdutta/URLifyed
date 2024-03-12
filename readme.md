# URLifyed

URLifyed is a lightweight npm package that simplifies the process of extracting URLs from plain text and converting them into clickable anchor tags. Whether you're working on a blog, chat application, or any other project, URLifyed has got you covered!

## Installation

Install URLifyed using npm:

```bash
npm install urlifyed
```

## Usage

1. Import URLifyed into your project:

```javascript
const urlifyed = require('urlifyed');
```

2. Extract URLs from a string:
```javascript
const inputText = 'Check out this awesome website: https://example.com and also visit https://another-site.org';
const extractedUrls = urlifyed.extractUrls(inputText);
console.log(extractedUrls);
```
```javascript
//Output: 
[
  { url: 'https://example.com', startIndex: 32, endIndex: 51 },
  { url: 'https://another-site.org', startIndex: 67, endIndex: 91 }
]

```

3. Convert URLs to anchor tags:
```javascript
const formattedText = urlifyed.formatWithAnchors(inputText);
console.log(formattedText);
```
```javascript
// Output: 'Check out this awesome website: <a href="https://example.com">example.com</a> and also visit <a href="https://another-site.org">another-site.org</a>'

```

## That’s it! URLifyed makes handling URLs a breeze. Happy coding! 🚀