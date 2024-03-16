function printStatements(message, delay, nextStatement) {
   setTimeout(() => {
      console.log(message);
      nextStatement && nextStatement();
   }, delay);
}

printStatements("1 sec", 1000, () => {
   printStatements("2 sec", 1000, () => {
      printStatements("3 sec", 1000, () => {
         printStatements("4 sec", 1000, () => {
            printStatements("5 sec", 1000);
         });
      });
   });
});
