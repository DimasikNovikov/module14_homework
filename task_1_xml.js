// Принять и обработать запрос XML

const xmlString = `<list>
    <student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

const result = {
    list:
        []
};

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNodes = xmlDOM.querySelectorAll("student");

function toStudentObject(studentNode) {
    const studentFirstName = studentNode.querySelector("first").textContent;
    const studentSecondName = studentNode.querySelector("second").textContent;
    const studentName = studentFirstName + " " + studentSecondName;
    const studentLang = studentNode.querySelector("name[lang]").getAttribute("lang");
    const studentAge = studentNode.querySelector("age").textContent;
    const studentProf = studentNode.querySelector("prof").textContent;


    let obj = {
        name: studentName,
        age: +studentAge,
        prof: studentProf,
        lang: studentLang
    }

    return obj;
}

for(let item of studentNodes) 
    result.list.push(toStudentObject(item));



