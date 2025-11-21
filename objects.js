//1.Create an object for a student with name, age, marks.

/*let student = {
    name: "vanshika kathpal",
    age: 22,
    marks : "92%" 
};
console.log(student);*/

//2. Access and update object properties.\

/*let record = {
    name : "vanshika kathpal",
    currentstatus : "unmarried",
    goal: "to Become a full stack developer",
    age: 22,
    car : "defender",
    education : "done BSC STATISTICS FROM UNIVERSITY OF DELHI",
    Community : "Punjabi"
}

console.log(record.Community); // dot notation
console.log(record["car"]); //bracket notation*/



//3. Delete a property from an object.*/
  
 /*let record = {
    name: "vanshika kathpal",
    currentstatus: "unmarried",
    goal: "to Become a full stack developer",
    age: 22,
    education: "done BSC STATISTICS FROM UNIVERSITY OF DELHI",
    Car: "defender",
    Community: "Punjabi"
 }
 delete record["Car"];
 console.log(record);*/

 //4.Loop through all keys of an object.
 
 /*let obj = {
    name: "vanshika kathpal",
    age: 22,
    brand: "sumit",
    goal: "to become a full stack developer"
 }
  for (let key in obj){
    console.log(key)
  };*/

  //5.Add a method inside an object and call it.

  let student = {
    name : "vanshika kathpal",
    age : 22,
    marks : 92,
    checkstatus : function() {
        if (this.marks === 99){
            console.log("Excellent student")
        } else if (this.marks >= 92){
            console.log("good student")
        } else {
            "nEED TO DO HARD WORK"
        }
        }
  };

  console.log(student.checkstatus());
