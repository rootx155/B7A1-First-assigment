# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

TypeScript এর সবচেয়ে powerful feature গুলোর মধ্যে একটি হলো **Generics**।

Generics ব্যবহার করে আমরা এমন function বা component তৈরি করতে পারি যেগুলো:

- Reusable
- Flexible
- Strictly Typed

একই function বিভিন্ন ধরনের data এর সাথে কাজ করতে পারে type safety না হারিয়েই।

---

# Generics ছাড়া Problem

ধরি আমরা একটি function বানাতে চাই যা value return করবে।

```ts
const returnValue = (value: string): string => {
  return value;
};

```

এখন যদি number পাঠাতে চাই?

`returnValue(10);`

Error আসবে।

তাহলে number এর জন্য আবার নতুন function লিখতে হবে।

এতে code duplication হয়।

```ts
Generics Solution
const returnValue = <T>(value: T): T => {
  return value;
};
```

এখানে T হলো generic type।

এখন function যেকোনো type handle করতে পারবে।

```ts
Example
console.log(returnValue<string>("Hello"));
console.log(returnValue<number>(100));
console.log(returnValue<boolean>(true));
```

```ts
Output:
Hello
100
true
```

একই function different type এর data handle করছে।

Array Example

```ts
const getFirstElement = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(getFirstElement<number>([1, 2, 3]));
console.log(getFirstElement<string>(["A", "B", "C"]));
```

এখানে function automatically বুঝতে পারছে array তে কোন type আছে।

Object Example
```ts
interface User {
  name: string;
  age: number;
}

const userData = <T>(data: T): T => {
  return data;
};

const user = userData<User>({
  name: "Romana",
  age: 22,
});

console.log(user.name);
```
এখানে object এর type safety পুরোপুরি বজায় আছে।

Generics এর সুবিধা:

1. Code Reusability - একই function বারবার ব্যবহার করা যায়।

2. Type Safety - ভুল type ব্যবহার করলে TypeScript error দেখায়।

3. Clean Code - একই logic বারবার লিখতে হয় না।

4. Better Developer Experience - IDE auto suggestion এবং autocomplete ভালো কাজ করে।

Real-Life Use Case

`Generics React, API handling, custom hooks, utility functions` — সব জায়গায় অনেক বেশি ব্যবহার হয়।

Example:
```ts
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.json();
};
```
এখানে different API response safely handle করা যায়।

### Conclusion

Generics TypeScript এর একটি powerful feature যা reusable এবং flexible code তৈরি করতে সাহায্য করে।

এটি type safety বজায় রেখে একই function বা component বিভিন্ন ধরনের data এর সাথে কাজ করতে দেয়।

তাই scalable এবং clean TypeScript project তৈরিতে Generics খুবই গুরুত্বপূর্ণ।