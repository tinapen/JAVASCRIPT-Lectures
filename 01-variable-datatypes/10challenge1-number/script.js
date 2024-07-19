/* 
# Capitalize Challenge

**Instructions**:

Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about during our discussions. Put the result in a variable called `myNewString`.

Create multiple solutions if you would like.

**Expected Result:**

```JavaScript
const myString = 'developer';

console.log(myNewString); // 'Developer'
```
**Hints:**

1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
2. The `.toUpperCase()` method will make the entire string uppercase
3. `substring()` or `slice()` will return a specific portion of a string */

// ==== TINAPEN'S ANSWER =====

const myString = "developer";

//Solution1:
x = myString.charAt(0).toUpperCase();

//Solution2: instead of using charAt(0) we will use string[0]
x = myString[0].toUpperCase();

//Solution3: using slice and template literals
x = myString.slice(0, 1).toUpperCase();

myNewString = `${x}eveloper`;

console.log(myNewString);
