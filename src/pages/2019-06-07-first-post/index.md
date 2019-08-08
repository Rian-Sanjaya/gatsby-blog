---
path: "/first-post"
date: "2019-06-07 11:01"
title: "Generate Random Object Data"
tags: ["javascript", "array", "fill", "map"]
excerpt: "Generating random object data."
---

```javascript
import faker from 'faker';

export const generateRandomData = ({ amount }) =>
  Array(amount).fill({}).map(() => (
    {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      addressLines: [
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.country(),
      ],
    }
  ));
```