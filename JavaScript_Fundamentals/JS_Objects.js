
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.


let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function getStudentCohort(students) {
  for(let i in students){
    let name = students[i].name;
    let cohort = students[i].cohort;

     console.log(`Name:  ${name}, Cohort: ${cohort}`);
  }
  return;
}

getStudentCohort(students);

// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 function getEmployees(users) {
    for(let i in users) {
       let lineNumber = 1;
       console.log(i.toUpperCase());

       for (let j in users[i]) {
           let firstName = users[i][j].first_name
           let lastName = users[i][j].last_name;
           let nameLength = firstName.length + lastName.length;
           console.log(`${lineNumber} - ${firstName} ${lastName} - ${nameLength}`);
           lineNumber++;
       }
     }

   }



getEmployees(users);

//  EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

