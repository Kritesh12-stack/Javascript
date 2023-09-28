const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "Kritesh";
tinderUser.email = "kritesh@google.com";
tinderUser.age = 20;
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

tinderUser.fullName = {
    userName : {
        firstName : `${tinderUser.name}`,
        SirName : "Shrivastava"
    }
}

// console.log(tinderUser);
// console.log(tinderUser.fullName.userName.firstName);
// console.log(tinderUser.hasOwnProperty("fullName"));

const obj1 = {1:"a",2:"b"};
const obj2 = {2:"c",3:"d"};
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users = [
    {
        id :1,
        name :"one"
    },
    {
        id:2,
        name :"two"

    },
    {
        id:3,
        name : "three"
    }
]
// console.log(users[1].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// object destructuring

const course = {
    courseName : "Master JS",
    coursePrice : 999,
    courseInstructor :"Kritesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

const {courseInstructor : instructor} = course;
console.log(instructor);

// API(JSON)
// can be of two types objects and array
// {
//     "name":"kri",
//     "a":"1",
//     "b":2
// }
