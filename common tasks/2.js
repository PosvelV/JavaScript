const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }];
function getWorthyWorkers(a) {
  var salary = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].salary > 1000) {
      salary.push(a[i].name);
    }
  }
  return salary;
}
console.log(getWorthyWorkers(workers));