/* eslint-disable brace-style */
/*
What types of objects do you need?

List out nouns and verbs involved in cdreating TODO lists.
Decide which nouns and verbs you want/need to model.
The nouns will be your objects and the values the functions.

Write simple functions that work on a few number of well-defined objects.

Keep the responsibilities separated as best you can:

1. Representing a real-life todo list as in-memory objects
2. Manipulating those in-memory objects
3. Reading and writing from the todos.txt file
4. Displaying information to the user
5. Rather user input and taking the appropriate actions
*/

let process = require('process');

let commandWord = process.argv[2];

// 1. commandWord 'list'
if (commandWord === 'list') {
  let fs = require('fs');

  let toDoList = fs.readFileSync('todos.txt', 'utf-8');

  console.log(toDoList.trimEnd());
}

// 2. commandWord 'add'
else if (commandWord === 'add') {
  let fs = require('fs');

  let commandContent = process.argv[3];

  fs.appendFileSync('todos.txt', commandContent + '\n');

  console.log(`Appending "${commandContent}" to the TODO list`);
}
// 3. commandWord 'delete'
// SOURCE: https://stackoverflow.com/questions/52938329/find-string-and-delete-line-node-js
// SOURCE: https://stackoverflow.com/questions/38843016/how-to-remove-one-line-from-a-txt-file

else if (commandWord === 'delete') {
  let fs = require('fs');

  fs.readFile('todos.txt', 'utf8', (err, data) => {
    if (err) throw err;

    let dataArray = data.split('\n');

    let commandContent = process.argv[3] - 1;
    let newDataArray = [];
    let task = '';

    for (let i = 0; i <= dataArray.length; i++) {
      if (i !== parseInt(commandContent)) {
        newDataArray.push(dataArray[i]);
      } else {
        task = dataArray[i];
      }
    }

    let newData = newDataArray.join('\n');

    fs.writeFileSync('todos.txt', newData);
    console.log(`Deleted "${task}" from the TODO list`);
  });
}

// 4. commandWord is not list/add/delete
else {
  console.log('Error, please enter a command word: list, add, or delete');
}
