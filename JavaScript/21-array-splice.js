/*
 
The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the array it is called on and returns an array containing the deleted elements, if any.

Here's the syntax:

javascript

array.splice(start, deleteCount, item1, item2, ...)

    start: The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. If negative, it will begin that many elements from the end of the array (with -1 being the last element).

    deleteCount: An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. If deleteCount is omitted, or if its value is equal to or larger than array.length - start, then all the elements from start to the end of the array will be deleted.

    item1, item2, ...: The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.

The splice() method directly modifies the original array and returns an array containing the deleted elements, if any.

Here's an example:

javascript

*/
let fruits = ["apple", "banana", "cherry", "date"];

// Remove one element from index 2
let deletedElement = fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'date']
console.log(deletedElement); // Output: ['cherry']

// Add elements at index 2
fruits.splice(2, 0, "grape", "kiwi");
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'date']

// Replace 2 elements at index 1
fruits.splice(1, 2, "orange", "peach");
console.log(fruits); // Output: ['apple', 'orange', 'peach', 'kiwi', 'date']

/*
In this example:

    We start with an array of fruits.
    We remove one element (the element at index 2) using splice().
    We add two elements ('grape' and 'kiwi') at index 2 using splice().
    We replace two elements (the elements at index 1 and 2) with 'orange' and 'peach' using splice().

 */
