/**
 * Enter "list" to show all tasks
 * Enter "add" to add a task
 * Enter "delete" to remove a task
 * Enter "quit" to quit the todo
 */

/**
 * Create a loop.
 * It will run till a user gives a command "quit". use break.
 * 2nd condition, if "list", so all todos
 * 3rd condition, if "add", take another prompt and add task to array
 * 4th condition, if "delete",
 */

let todo = [];
// let req = prompt("please enter your request");

while (true) {
   let req = prompt("please enter your request");
   if (req === "quit") {
      console.log("Closing App");
      break;
   }

   if (req === "list") {
      console.log(`Todo List`);
      console.log(`---------`);

      for (let i = 0; i < todo.length; i++) {
         console.log(i, todo[i]);
      }

      console.log(`---------`);
   } else if (req === "add") {
      let task = prompt("Enter a Task");
      todo.push(task);
   } else if (req === "delete") {
      let deleteIndex = prompt("Which task index to delete?");

      todo.splice(deleteIndex, 1);
   }
}
