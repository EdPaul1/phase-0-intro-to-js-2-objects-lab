// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "11 Broadway",
};

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["streetAddress"] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmp = {...employee};
    delete newEmp.name;
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newName = {...employee};
    newName.name = "Sam";
    newName.streetAddress = "11 Broadway";
    return newName;
}