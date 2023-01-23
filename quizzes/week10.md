# C# Fundamentals


**1.** What is the purpose of a `namespace`?
<!-- enter you answer in the space below -->
```
Namespaces are used to organize code into logical groups and to prevent name collisions that can occur especially when your code base includes multiple libraries.
```
**2.** What is the difference between a `class` and a `struct`?
<!-- enter you answer in the space below -->
```
Structs are value types while classes are reference types.
```
**3.** What is the method that returns an instance of a class, yet it has no return type?
<!-- enter you answer in the space below -->
```
void 
```
## Example 1
```c#
abstract class Car
{
  ...
  public virtual string Start()
  {
    return "Vroooom";
  }
}
```
**5.** In the example what is the access modifier of the `Start()` method?
<!-- enter you answer in the space below -->
```
virtual
```
**6.** In the example what is `string` an indication of?
<!-- enter you answer in the space below -->
```
type
```
**7.** In the example what is `abstract` preventing?
<!-- enter you answer in the space below -->
```
restricted class that cannot be used to create objects
```
**8.** In the example what is the purpose of `virtual`?
<!-- enter you answer in the space below -->
```
In C#, a virtual method has an implementation in a base class as well as derived the class.

```
**9.** Name four access modifiers:
<!-- enter you answer in the space below -->
```
public private protected internal
```
**10.** If you set a class or method to private, what can access it?
<!-- enter you answer in the space below -->
```
In c#, the private modifier is used to specify that access is limited to the containing type, so the defined type or member can only be accessed by the code in the same class or structure. 
```