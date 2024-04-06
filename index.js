
//Clousers example
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i)

//             }, i * 1000);

//         }
//         close(i)


//     }


// }

// x()

//Call back functions

// function x() {



//     let count = 0;

//     document.getElementById("clickMe").addEventListener("click", function xyz() {

//         console.log("button clicked", ++count)

//     })

// }

// x()


const users=[
    {firstName:"Akshay",lastName:'Saini',age:26},
    {firstName:"Kalyan",lastName:'Utti',age:22},
    {firstName:"Mahindra",lastName:'Javayavaram',age:48},
    {firstName:"Nani",lastName:'Narasimha',age:28}
]

const output=users.reduce(function(acc,cur){

    if(cur.age>22){
        acc.push(cur.firstName)
    }
    
    // console.log(cur)
    // console.log(acc)
    return acc



},[])

console.log(output)