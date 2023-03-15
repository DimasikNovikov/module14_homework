// Принять и обработать запрос JSON

const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

const obj = JSON.parse(jsonString);

for(let item of obj.list)
   item.age = Number(item.age);

console.log(obj)   