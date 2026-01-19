//1 Create an Array Containing Objects and print all Names.//

let details = [
    {
        name : "Vanshika Kathpal",
        country : "India",
        maritalStatus : "unmarried",
        Profession : "Developer",
    },

    {
        name : "Diya Kathpal",
        country : "India",
        maritalStatus : "unmarried",
        Profession : "GST Inspector",
    },

    { name : "Hardik Kathpal",
        country : "India",
        maritalStatus : "unmarried",
        Profession : "Doctor",
    }
]

for(let person of details){
    console.log(person.name)
}