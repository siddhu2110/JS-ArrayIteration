// let a=[1,2,3,4,5]
// a.forEach((item)=>{
//     console.log(item)
// })


// let a=[1,2,3,4,5]
// let data=a.map((item)=>{
//     return item
// })

// console.log(data)


// let a=[1,2,3,4,5]
// let data=a.map((item)=>{
//     return item*3
// })

// console.log(data)


// let a=[1,2,3,4,5,6,7,8,9,10]
// let data=a.filter((item)=>{
//     return item%2==0
// })

// console.log(data)


// let a=[100,200,300,400,500,600]
// let data=a.reduce((acc,value)=>{
//     return acc+value
// },0)

// console.log(data)


// let a=[100,200,300,400,500,600]
// let data=a.find((item)=>{
//     return item>200   // retrieves first matched element only
// })

// console.log(data)


// let a=[100,200,300,400,500,600]
// let data=a.find((item)=>{
//     return item>600   // greater than the highest available data means retrieves undefined
// })

// console.log(data)


// let a=[100,200,300,400,500,600]
// let data=a.some((item)=>{  //some= logical OR
//     return item>600   
// },0)

// console.log(data)


// let a=[100,200,300,400,500,600]
// let data=a.every((item)=>{    //every= logical AND
//     return item>50
// },0)

// console.log(data)


// let a=[1100,2200,3700,400,500,1600]
// a.sort((a,b)=>a-b)
// console.log(a)


let employee=[
    {name:"Siddhartha",
     age:22,
     role:"Developer",   
     location:"Karimnagar",
     salary:50000,
     id:1
    },
    {name:"Saketh",
     age:21,
     role:"Developer",   
     location:"Mancherial",
     salary:60000,
     id:2
    },
    {name:"Ajay",
     age:21,
     role:"HR",   
     location:"Mancherial",
     salary:60000,
     id:3
    },
    {name:"Revanth",
     age:22,
     role:"Designer",   
     location:"Khammam",
     salary:55000,
     id:4
    },
    {name:"Laxman",
     age:23,
     role:"Manager",   
     location:"Karimnagar",
     salary:100000,
     id:5
    },
    {name:"Praveen",
     age:20,
     role:"DevOps",   
     location:"New York",
     salary:80000,
     id:6
    },
]

// let a=employee.filter((employee)=>{
//     return employee.location === "New York"  && employee.salary > 70000 
// },0)
// console.log(a)


// let a=employee.map((employee)=>{
//     return `${employee.name}-${employee.role}`
// })
// console.log(a)


// let a=employee.reduce((name,employee)=>name+employee.salary,0)
// console.log(a)


// let a=employee.sort((a,b)=>b.salary-a.salary);
// console.log(a)


let a=employee.filter((employee)=>{
    return employee.role === "DevOps" 
},0)
console.log(a)



