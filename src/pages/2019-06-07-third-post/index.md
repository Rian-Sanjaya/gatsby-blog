---
path: "/third-post"
date: "2019-06-07 14:50"
title: "Javascript Rest Parameter and Spread Operator"
tags: ["javascript"]
excerpt: "Javascript Rest Parameter and Spread Operator"
---

```javascript
function f(para1, ...rest) {
  console.log(para1)
  console.log(rest)
}

f('satu', 'dua', 'tiga')
// expected:
// satu
// ['dua', 'tiga']


const ob = {a: 'satu', b: 'dua', c: 'tiga'}

function fo({a, ...rest}) {
  console.log(a)
  console.log(rest)
}

fo(ob)
// expected:
// satu
// {b: 'dua', c: 'tiga'}
```