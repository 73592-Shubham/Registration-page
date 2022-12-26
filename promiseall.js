const promise1= Promise.resolve('value 1')

const promise2= 10;

const promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'value 3')
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value)
})
