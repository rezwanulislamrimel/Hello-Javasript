// function TotalAverage(assingment1, assingment2, assingment3) {
//     const total = assingment1 + assingment2 + assingment3;
//     const average = total / 3;
//     return average;
    
// }
// const assingment1Marks = 60;
// const assingment2Marks = 55;
// const assingment3Marks = 59.4;
// const myAverage = TotalAverage(assingment1Marks, assingment2Marks, assingment3Marks);
// console.log(`My Average is ${myAverage}`);

// second practice section

function TotalAverage(assingment1, assingment2, assingment3) {
    const total = assingment1 + assingment2 + assingment3;
    const average = total / 3;
    return average;
    
}

const assingment1Marks = 60;
const assingment2Marks = 45;
const assingment3Marks = 50;
const totalMarks = TotalAverage(assingment1Marks, assingment2Marks, assingment3Marks);
console.log(`The student's average is ${totalMarks}`);