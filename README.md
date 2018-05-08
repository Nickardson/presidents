# presidents

A data structure of United States presidents.

## Usage

```bash
npm install --save presidents
```

```javascript
var presidents = require('presidents').presidents;

presidents.forEach(function (president) {
  console.log(president)
});

// {
//   order: 1,
//   name: 'George Washington',
//   term: { startYear: 1789, endYear: 1797 },
//   party: 'Federalist',
//   life: { birthYear: 1732, deathYear: 1799 }
// }

// {
//   order: 2,
//   name: 'John Adams',
//   term: { startYear: 1797, endYear: 1801 },
//   party: 'Federalist',
//   life: { birthYear: 1735, deathYear: 1826 }
// }

// ...
```
