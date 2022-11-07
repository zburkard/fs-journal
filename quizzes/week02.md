# Intro to JavaScript

**1.** Which keywords are used to declare a variable in JavaScript?
<!-- enter you answer in the space below -->
```
let, const, var
```
**2.** What is the definition of a function?
<!-- enter you answer in the space below -->
```
A function is a subprogram designed to perform a particular task.
```
**3.** What are the `SOLID` principles?
<!-- enter you answer in the space below -->
```
S: Single Responsibility Principle
O: Open-Closed Principle
L: Liskov-Substitution Principle
I: Interface Segregation Principle
D: Dependency Inversion Principle

```
**4.** Given this array: 
```js
let fruit = ['apple', 'banana', 'pineapple',  'orange', 'strawberry']
``` 
What index is the pineapple's current position? How do you know?
<!-- enter you answer in the space below -->
```
It position is 2. position 0 would be apple, banana would be at position 1.
```
**5.** With these two objects: 
```js
let you = { name:"You", hair: true, friends: [] }
let them = { name:"Them", hair: false, friends: [] }
```
how would you .push the `them` object into the `you` object's array of friends?
<!-- enter you answer in the space below -->
```
them.push(you.friends[])

```

**6.** Give an example of a JavaScript `Conditional`:
<!-- enter you answer in the space below -->
```
if(materials >= price){
  materials -= price
  product += 1
}
else{
  console.log("Get out my store!")
}

```
**7.** In the `for loop` below, what is the name of the piece belongs inside the empty "______" space? What would you put here to increase `i` by one on every iteration?
```js
for ( let i = 0; i < arr.length; _______ ) {
  //...
```
<!-- enter you answer in the space below -->
```
Expression 3? 
If you wanted to increase i by 1 every iteration you could write i++ or i += 1
```
**8.** What does the `DOM` acronym stand for? Which file is first accessed to render the `DOM`?
<!-- enter you answer in the space below -->
```
Document Object Model
HTML is accessed first.

```

**9.** What are the `9` ECMAScript types as defined by MDN?
<!-- enter you answer in the space below -->
```
Boolean, String, Object, Number, Symbol, BigInt, null, undefined,?

```
**10.** When it comes to functions or methods, what is the difference between a `parameter` and an `argument`?
<!-- enter you answer in the space below -->
```
Parameters are used when defining a function and arguments are the values the function receives from each parameter when the function is executed.

```
**11.** What is the difference between a `primitive` value and a `reference` value?
<!-- enter you answer in the space below -->
```
If the value is a number , string , boolean , undefined , null , or symbol , it's a primitive value.
If its anything else like an object, its a reference value.

```