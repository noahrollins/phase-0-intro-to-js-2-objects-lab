
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = { ...employee };

    updateEmployee[key] = value;
    
    return updateEmployee;
}

const updateEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Noah"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
  
    return employee;
  }

  const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Noah");

  function deleteFromEmployeeByKey (employee, key) {
    const newObject = { ...employee };
    delete newObject[key]
    return newObject
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }