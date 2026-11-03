console.log("KG coding is the best YT Channel.");


const { log } = require('console');
const fs = require('fs');


fs.writeFile("output.txt" , "Writing File", (err) => {
  if(err) console.log('Error occured');
  else console.log('File Written Succesfull');
  
  
})
