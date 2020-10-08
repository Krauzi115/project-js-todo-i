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
// TODO: Figure out how to append todo item to a new line in txt file
else if (commandWord === 'add') {
  let fs = require('fs');

  let commandContent = process.argv[3];

  fs.appendFileSync('todos.txt', commandContent + '\n');

  console.log(`Appending "${commandContent}" to the TODO list`);

  // let toDoList = fs.readFileSync('todos.txt', 'utf-8');

  // console.log(toDoList.trimEnd());
}

// 3. commandWord 'delete'
// SOURCE: https://stackoverflow.com/questions/52938329/find-string-and-delete-line-node-js
// SOURCE: https://stackoverflow.com/questions/38843016/how-to-remove-one-line-from-a-txt-file

else if (commandWord === 'delete') {

  let commandContent = process.argv[3];

  console.log(commandContent);

  let fs = require('fs');

  fs.readFile('todos.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // check and handle err
    // data is the file contents as a single unified string
    // .split('\n') splits it at each new-line character and all splits are aggregated into an array (i.e. turns it into an array of lines)
    // .slice(1) returns a view into that array starting at the second entry from the front (i.e. the first element, but slice is zero-indexed so the "first" is really the "second")
    // .join() takes that array and re-concatenates it into a string
    let dataArray = data.split('\n');

    console.log(dataArray);
    console.log(dataArray[commandContent]);
    console.log(dataArray.length);

    for (let i = 0; i <= dataArray.length; i++) {
      if (i === commandContent) {
        dataArray.splice(i, 0);
        console.log(dataArray.splice(i, 1))
        console.log(i);
      }
    }

    let newData = dataArray.join('\n');

    fs.writeFileSync('todos.txt', newData);
    console.log(`Deleted "${commandContent}" from the TODO list`);
  });
}


// // 4. commandWord is not list/add/delete
// else {
//     console.log('Error, please enter a command word (list, add, or delete)');
// }










  // fs.readFileSync('todos.txt', {encoding: 'utf-8'}, function(err, data) {
  //   if (err) throw err;

  //   let dataArray = data.split('\n');
  //   let deleteIndex = process.argv[3];
  //   let lastIndex = -1;
  //   let task = '';

  //   for (i = 0; i < dataArray.length; i++) {
  //     if (i === deleteIndex) {
  //       lastIndex = i;
  //       task = dataArray[i];
  //       console.log(dataArray[i]);
  //     }
  //   }

  //   dataArray.splice(lastIndex, 1);

  //   let updatedData = dataArray.join('\n');
  //   fs.writeFile('todos.txt', updatedData, (err) => {
  //     if (err) throw err;
  //     console.log(`Deleted "${task}" from the TODO list`);
  //   });
  // });
