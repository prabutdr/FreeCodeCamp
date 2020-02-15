let student = {first: 'Raj', 
  last: 'Govind', 
  height: 170,
  age: 60,

  studentInfo: function() {
    return this.first + '\n' + this.last;
  }
};

console.log(student.first);
console.log(student['last']);
student.first = 'Chid'; // change value
console.log(student.first);
console.log(student.studentInfo());