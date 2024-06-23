// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  let employees = [];

  // repeat data entry prompts for each employee
  let addEmployee = true;

  while (addEmployee) {
    const employee = {
      firstName: "",
      lastName: "",
      salary: 0,
    }

    // ask user to enter first name
    let first = prompt("Enter employee's first name", 'John');

    // repeat prompt until input is not empty
    while (first === "") {
      alert('Please enter a first name.');
      first = prompt("Enter employee's first name", 'John');
    } 
    
    // af user presses cancel end function, , else store first name
    if (!first) {
      return;
    } else {
      employee.firstName = first.toUpperCase();
    }

    // ask user to enter last name
    let last = prompt("Enter employee's last name", 'Doe')

    // repeat prompt until input is not empty
    while (last === "") {
      alert('Please enter a last name.');
      last = prompt("Enter employee's last name", 'Doe');
    } 
    
    // if user presses cancel end function, else store last name
    if (!last) {
      return;
    } else {
      employee.lastName = last.toUpperCase();
    }
    
    // ask user to enter salary
    let salary = prompt("Enter employee's salary", '60000');
    salary = Number(salary);

    // repeat prompt until input is not empty
    while (salary === "") {
      alert('Please enter a salary.');
      salary = prompt("Enter employee's salary", '60000');
    }

    // repeat prompt until input is a number
    while (isNaN(salary)) {
      alert('Please enter a salary.');
      salary = prompt("Enter employee's salary", '60000');
      salary = Number(salary);
    }

    // if user presses cancel end function, , else store salary
    if (!salary) {
      return;
    } else {
      employee.salary = salary;
    }

    // push employee data to array
    employees.push(employee);

    // Ask if user wants to add another employee
    addEmployee = confirm('Press OK to add another employee.');
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  let averageSalary = 0;

  // find total salary: add each employee salary together
  for (let i = 0; i < employeesArray.length; i++) {
    let currentSalary = employeesArray[i].salary;
    totalSalary = totalSalary + currentSalary;
  }

  // find average salary: divide by total number of employees
  averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // generate random index from array of employees
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  // select employee from random index
  let randomEmployee = employeesArray[randomIndex];
  console.log(`The randomly selected employee is: ${randomEmployee.firstName} ${randomEmployee.lastName}, who makes $${randomEmployee.salary}.`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
