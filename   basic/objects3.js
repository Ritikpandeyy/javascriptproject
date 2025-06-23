// objects de-structure and json api

const course = {
    coursename:"js in hindi",
    courseprice:999,
    courseInstructor:"Ritik Pandey"
}
// course.courseInstructor;
const{courseInstructor:instructor} = course
console.log(instructor)
