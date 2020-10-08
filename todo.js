/*
What types of objects do you need?

List out nouns and verbs involved in creating TODO lists.
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

  console.log(toDoList);
}

// 2. commandWord 'add'
// TODO: Figure out how to append todo item to a new line in txt file
else if (commandWord === 'add') {
  let fs = require('fs');

  let commandContent = process.argv[3];

  fs.appendFile('todos.txt', commandContent);

  console.log(`Appending "${commandContent}" to the TODO list`);

  let toDoList = fs.readFileSync('todos.txt', 'utf-8');

  console.log(toDoList);
}

// 3. commandWord 'delete'
// SOURCE: https://stackoverflow.com/questions/52938329/find-string-and-delete-line-node-js
else if (commandWord === 'delete') {
  let fs = require('fs');

  let commandContent = process.argv[3];

  fs.readFile('todos.txt', {encoding: 'utf-8'}, function(err, data) {
    if (err) throw err;

    let dataArray = data.split('\n');
    let deleteIndex = process.argv[3];
    let lastIndex = -1;
    let task = '';

    for (i = 0; i < dataArray.length; i++) {
      if (i === deleteIndex) {
        lastIndex = i;
        task = dataArray[i];
        console.log(dataArray[i]);
      }
    }

  dataArray.splice(lastIndex, 1);

  let updatedData = dataArray.join('\n');
  fs.writeFile('todos.txt', updatedData, (err) => {
    if (err) throw err;
    console.log(`Deleted "${task}" from the TODO list`);
  });
});

let toDoList = fs.readFileSync('todos.txt', 'utf-8');

console.log(toDoList);

};


// // 4. commandWord is not list/add/delete
// else {
//     console.log('Error, please enter a command word (list, add, or delete)');
// }
