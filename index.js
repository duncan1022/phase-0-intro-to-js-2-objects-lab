const employee = {
    name: `Sam`,
    streetAdress: '11 Broadway'
}





function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const newObj = Object.assign({}, employeeObject, {[key]: value});
    return newObj;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employeeObject;
  }
  
  function deleteFromEmployeeByKey(employeeObject, key) {
    const newObj = Object.assign({}, employeeObject);
    delete newObj[key];
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
  }