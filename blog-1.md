# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

TypeScript এর সবচেয়ে বড় সুবিধা হলো **Type Safety**। অর্থাৎ, কোড লেখার সময়ই TypeScript আমাদের ভুল ধরতে সাহায্য করে।  
কিন্তু `any` ব্যবহার করলে এই সুবিধা অনেকটাই নষ্ট হয়ে যায়। এজন্য `any` কে বলা হয় **"Type Safety Hole"**।

অন্যদিকে `unknown` আমাদেরকে safer way তে unpredictable data handle করতে সাহায্য করে।

এই ব্লগে explain করবো:

- কেন `any` dangerous
- কেন `unknown` safer
- Type Narrowing কী
- বাস্তব উদাহরণ

---

## `any` কেন Type Safety Hole?

`any` ব্যবহার করলে TypeScript ওই variable এর type checking বন্ধ করে দেয়।

```ts
let value: any = "Hello";

value.toUpperCase();
value.nonExistentMethod();
value();

```

এখানে TypeScript কোনো error দেখাবে না, যদিও `nonExistentMethod()` বা `value()` invalid হতে পারে।

এতে runtime এ crash হওয়ার chance বেড়ে যায়।

### Problem Example

``` ts
const getLength = (value: any) => {
  return value.length;
};

console.log(getLength(10)); 
```

এখানে number এর কোনো `length` property নেই।

কিন্তু TypeScript error দিবে না কারণ আমরা any ব্যবহার করেছি।

Runtime এ error আসবে।

## `unknown` কেন Safe?

unknown হলো safer version of any।

এতে data যেকোনো কিছু হতে পারে, কিন্তু ব্যবহার করার আগে type check করতে হবে।

``` ts
let value: unknown = "TypeScript";

console.log(value.toUpperCase());

```

এখানে error আসবে কারণ TypeScript জানে না value string কিনা।

## Type Narrowing কী?

Type Narrowing মানে হলো check করে actual type বের করা।

``` ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে:

`typeof value === "string"`

এই check এর মাধ্যমে TypeScript বুঝতে পারে value আসলে string।

এটাকেই বলে Type Narrowing।

আরেকটি Example

```ts
const printValue = (value: unknown) => {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log("Not a number");
  }
};

printValue(10);
printValue("Hello");
```

Output:

```ts
10.00
Not a number
```

এখানে narrowing এর মাধ্যমে safely number method ব্যবহার করা হয়েছে।

### কখন unknown ব্যবহার করা ভালো?

যখন external source থেকে data আসে:

- API Response
- User Input
- JSON Data
- Third-party Library

তখন unknown safer choice।

### Conclusion

`any` TypeScript এর type checking bypass করে দেয়, তাই এটাকে "Type Safety Hole" বলা হয়।

অন্যদিকে `unknown` আমাদেরকে type check করতে বাধ্য করে, ফলে code বেশি safe এবং reliable হয়।

আর Type Narrowing ব্যবহার করে আমরা safely actual type identify করতে পারি।

তাই production-level TypeScript project এ সম্ভব হলে any avoid করে unknown ব্যবহার করা উচিত।