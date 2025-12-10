//convert CSV into 2D array 
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cell = "";
let row = [];
let table = [];

for (i = 0; i < csv.length; i++) {
  char = csv[i];
  if (char === ",") {
    row.push(cell);
    cell = "";
    continue;
  }
  if (char == "\n") {
    row.push(cell);
    table.push(row);
    cell = "";
    row = [];
    continue;
  }
  cell += char;
}

console.log(table);

//transform 2d array into object 
let headers = table[0];
let objectsArray = [];
for(let i = 1; i<table.length;i++){
    let row = table[i];
    let obj = {};

    for( let j = 0; j < headers.length; j++){
        let key = headers[j].toLowerCase();
        obj[key] = row[j];
    }

    objectsArray.push(obj);
}

console.log(objectsArray)

//manipulate data 
objectsArray.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25" })
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(objectsArray)

//back to csv 
let csvheaders = Object.keys(objectsArray[0]);
let csvString = csvheaders.join(',')+'\n';
for (let obj of objectsArray) {
    let row = csvheaders.map(key => obj[key]);
    csvString += row.join(',') + '\n';
}

console.log(csvString)