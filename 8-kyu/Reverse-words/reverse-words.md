function textArray(text)
    -The textArray function takes a text argument and uses the split(' ') method to convert that text string into an array of words, separated by spaces.
    -The split(' ') method splits the string where it finds whitespace (' '), creating an array where each element is a word of the text.
Text variable
    -text is simply a text string with the words: "Hello world, this is an example."
Convert text to an array
    -The function textoArray(text) is called, passing the text "Hello world, this is an example."
    -The returned value is the array ["Hello", "world", "this", "is", "a", "example"], which is assigned to the array variable.
for loop
    This is a loop that iterates over the elements of the array, starting from the last element (array.length - 1) and decreasing the index i in each iteration until it reaches 1 (i > 0).

    -Explanation of each part:
        -let i = (array.length - 1): Initializes i with the value of the last index of the array. The last element of an array has an index that is equal to its length minus 1 (in this case, 5 because the array has 6 elements and the indices start from 0).
        -i > 0: The condition of the loop is that the value of i must be greater than 0. This means that the loop will not print the first element (array[0]).
        -i--: After each iteration, i decrements by 1, traversing the array from the last element to the first.
Printing with console.log(array[i])
    -In each iteration, the loop prints the element corresponding to index i of the array.
    -The array is traversed from the last to the second element (due to the condition i > 0), that is, the first element array[0] will not be printed (which is "Hello").