---
path: "/second-post"
date: "2019-06-07 13:10"
title: "Create and Initialize Array with Array.from() and Array(n).fill()"
tags: ["javascript", "array"]
excerpt: "Create and Initialize Array with Array.from() and Array(n).fill()"
---

## Syntax

### Array.from(arrayLike[, mapFn[, thisArg]])

```javascript
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

const count = 3
Array.from({length: count}).map((_, i) => ({
  id: i + 1,
  username: `CoolCat${i + 1}`,
  content: `Some really great content here (${i + 1})...`,
}))
// expected output: 
// [
//   {id: 1, username: "CoolCat1", content: "Some really great content here (1)..."}
//   {id: 2, username: "CoolCat2", content: "Some really great content here (2)..."}
//   {id: 3, username: "CoolCat3", content: "Some really great content here (3)..."}
// ]
```

## Syntax

### 

```javascript
Array(3).fill({}).map((_, i) => ({
  id: i + 1,
  username: `CoolCat${i + 1}`,
  content: `Some really great content here (${i + 1})...`,
}))
// expected output: 
// [
//   {id: 1, username: "CoolCat1", content: "Some really great content here (1)..."}
//   {id: 2, username: "CoolCat2", content: "Some really great content here (2)..."}
//   {id: 3, username: "CoolCat3", content: "Some really great content here (3)..."}
// ]
```