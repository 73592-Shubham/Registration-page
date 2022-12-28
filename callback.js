//creating a post

const post=[
    {name:'shubham',work:'frontend-developer',createdpost:new Date().getTime()},
    {name:'yash',work:'data-scientist',createdpost:new Date().getTime()}

]

//function to show post on our webpage
let intervalId=0;
function getpost(){

    clearInterval(intervalId)

intervalId=setInterval(() => {


    setTimeout(() => {

       

            let output="";
            post.forEach((obj)=>{
              let li=`<li>${obj.name} ${obj.work} updated on ${(new Date().getTime()-obj.createdpost)/1000} seconds ago`
                output=output+ li
            })
            document.body.innerHTML=output;
            
     
        
    }, 2000);
    
}, 1000);
}

getpost()

//function to create a new post and push it into the posts array

function createpost(newpost,callback) {

    setTimeout(() => {
        post.push({...newpost,createdpost:new Date().getTime()})
            callback()
        
    }, 6000);
    
}

createpost({name:'nandani',work:'model'},getpost)
