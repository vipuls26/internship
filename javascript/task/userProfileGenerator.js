const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("enter your name: ",(firstName) =>{
  rl.question("tell me your age: ",(age)=> {
    rl.question("tell me your email: ",(email => {
   

     function randomnumber(max , min)
     {
        return Math.floor(Math.random() * (max - min +1 )) + min;
     }   

    console.log(`--------------------------`);
    console.log(`     profile summary      `);

    console.log("User Id:",randomnumber(100,1));
    
    let newFirstName = firstName.toUpperCase();
    console.log(`Name: ${firstName}`);

    let newAge = parseInt(age); 
    if(!/^[0-9]/.test(newAge))
    {   
        if(age >= 0)
        {
            console.log("age can not be zero or negative");
            console.log("enter proper age");
        }
       
    }
    else
    {
        console.log(`Age:  ${newAge}`);

    }
    let newEmail = email;

    if(!/^[a-zA-z0-9.]+@[a-zA-z0-9]+[a-zA-z]{2,}/.test(newEmail))
    {
        console.log("enter proper email");

    }
    else
    {
        console.log(`Email: ${newEmail}`)
    }
    console.log(`--------------------------`);
   
    rl.close();
}));
});
});





/*


console output:




enter your name: vipul
tell me your age: 22
tell me your email: vipul@gmail.com
--------------------------
     profile summary      
User Id:  7
Name: vipul
Age:  22
Email: vipul@gmail.com
--------------------------

*/