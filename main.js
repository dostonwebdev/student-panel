// const tbody=document.querySelector("tbody")

// const students=[
//   {
//     id:1,
//     lastname:"jon",
//     firstname:"alex",
//     age:32,
//     curs:2,
//   },
//    {
//     id:122,
//     lastname:"jon",
//     firstname:"alex",
//     age:32,
//     curs:1,
//   },
//    {
//     id:81,
//     lastname:"jon",
//     firstname:"alex",
//     age:32,
//     curs:3
//   },
//   {
//     id:22,
//     lastname:"jon",
//     firstname:"alex",
//     age:32,
//     curs:4
//   }, 
// ]
// function Add(){
//   students.forEach(student=>{
//     tbody.innerHTML+=`
//     <tr>
//       <td>${student.id}</td>
//       <td>${student.lastname}</td>
//       <td>${student.firstname}</td>
//       <td>${student.age}</td>
//     </tr>`
//   })
// }
// Add()

// const add_btn=document.querySelector("add-btn")

// function btn(){


//   const person= {
//       id:students.length+1,
//       lastname:lastname,
//       firstname:firstname,
//       age:age,
//       curs:curs,
//     }
  
//   students.push(person)
//   Add()
// }
// add_btn.addEventListener("click",btn)
// console.log(btn);






const tbody = document.querySelector("tbody");

let sevIndex=null
const students = [
  {
    id: 1,
    lastname: "jon",
    firstname: "alex",
    age: 32,
    curs: 2,
  },
  {
    id: 122,
    lastname: "alibek",
    firstname: "hasanov",
    age: 13,
    curs: 1,
  },
  {
    id: 81,
    lastname: "johon",
    firstname: "alexsanov",
    age: 22,
    curs: 3,
  },
  {
    id: 22,
    lastname: "mardon",
    firstname: "valiyev",
    age: 42,
    curs: 4,
  },
];

function Add() {
  tbody.innerHTML = ''; // Jadvalni tozalash
if(students.length==0){
  tbody.innerHTML=`<tr>
  <td colspan="6" class="text-center p-4">Malimot topilmadi</td>
  </tr>
  `
}

  students.forEach((student, index) => {
    tbody.innerHTML += `
    <tr>
      <td>${student.id}</td>
      <td>${student.lastname}</td>
      <td>${student.firstname}</td>
      <td>${student.age}</td>
      <th><div class="d-flex gap-3">
        <button onclick="remove(${index})" class="btn btn-danger">Delete</button>
        <button onclick="Edit(${index})" class="btn btn-warning">Edit</button>
      </div></th>
    </tr>`;
  });
}
Add();

const add_btn = document.querySelector("#add-btn");

function btn() {
  tbody.innerHTML=""
 const firstname=document.forms["formStudent"]["firstname"].value
 const lastname=document.forms["formStudent"]["lastname"].value
 const age=document.forms["formStudent"]["age"].value
 const curs=document.forms["formStudent"]["curs"].value
 

  const person = {
    id: students.length+1,
    lastname: lastname,
    firstname: firstname,
    age: age,
    curs: curs,
  };

  if(sevIndex!==null){
    students[sevIndex]=person
    add_btn.innerText="Add student"
    add_btn.classList.remove("btn-warning")
  }else{

    students.push(person);
  }
 document.forms["formStudent"].reset()
  Add();
  sevIndex=null
}
const remove=(index)=>{
  students.splice(index, 1)
    Add()
}

// add_btn.addEventListener("click", btn);
 
const Edit=(index)=>{
  document.forms["formStudent"]["firstname"].value=students[index].firstname
 document.forms["formStudent"]["lastname"].value=students[index].lastname
document.forms["formStudent"]["age"].value=students[index].age
document.forms["formStudent"]["curs"].value=students[index].curs
  add_btn.innerText="Edit student"
  add_btn.classList.add("btn-warning")
  sevIndex=index
}