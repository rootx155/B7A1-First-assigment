// Problem 1
const filterEvenNumbers = (numbersArray: number[]) => {
  return numbersArray.filter((number) => number % 2 === 0);
};

// Problem 2
const reverseString = (text: string) => {
  return text.split("").reverse().join("");
};

// Problem 3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithReadStatus => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7

const getIntersection = (array1: number[], array2: number[]) =>
  array1.filter((number) => array2.includes(number));
