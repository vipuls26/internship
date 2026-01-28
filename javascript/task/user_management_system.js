//user profile 

const User_Data = 
[
    { ID: 1 , Name: "vipul" , Age: 20, Email: "vipul@gmail.com"},
    { ID: 2 , Name: "jhon" , Age: 10, Email: "jhon@gmail.com"},
    { ID: 3 , Name: "doe" , Age:20, Email: "doe@gmail.com"}
];

console.log(User_Data);


//functions


function addUser(ID,name,age,email)
{
    console.log("call of adduser function");

    let newID = ID;
    let newname = name;
    let newage = age;
    let newemail = email;

    User_Data.push({Id: newID , Name: newname, Age: newage, Email: newemail});

    console.log(User_Data);
    
}



function getUserByID(UserID)
{   
    //console.log(UserID);
    console.log("call of get user by id function");
    const search = User_Data.filter(x => x.ID == UserID );
    console.log(search);
    return UserID;
}

function getAdult()
{
    console.log("call of get adult function ");
    const getadult = User_Data.filter(x => x.Age >= 18)
    console.log(getadult);

    return ;
}

    
function getAverageAge()
{
console.log("call of averaage function");

  
    let newAge = User_Data.map(x =>x.Age);
    let leng = newAge.length;
    console.log(newAge);

    let average = newAge.reduce(getsum);

    function getsum(total , num )
    {

        return total + num;
    }
        console.log(average/leng);
      
}

console.log("---------------------------------------------------------------------");
/* 
console output =>
[
  { ID: 1, Name: 'vipul', Age: 20, Email: 'vipul@gmail.com' },
  { ID: 2, Name: 'jhon', Age: 10, Email: 'jhon@gmail.com' },
  { ID: 3, Name: 'doe', Age: 20, Email: 'doe@gmail.com' }
]
*/
console.log("---------------------------------------------------------------------");

addUser(4,"billiy",30,"billiy@gmail.com");
/* 
console output =>
[
  { ID: 1, Name: 'vipul', Age: 20, Email: 'vipul@gmail.com' },
  { ID: 2, Name: 'jhon', Age: 10, Email: 'jhon@gmail.com' },
  { ID: 3, Name: 'doe', Age: 20, Email: 'doe@gmail.com' },
  { Id: 4, Name: 'billiy', Age: 30, Email: 'billiy@gmail.com' }
]
*/
console.log("---------------------------------------------------------------------");

getUserByID(1); 
/*   
console output =>
[ { ID: 1, Name: 'vipul', Age: 20, Email: 'vipul@gmail.com' } ]
*/
console.log("---------------------------------------------------------------------");

getAdult();

/* 
console output =>
[
  { ID: 1, Name: 'vipul', Age: 20, Email: 'vipul@gmail.com' },
  { ID: 3, Name: 'doe', Age: 20, Email: 'doe@gmail.com' },
  { Id: 4, Name: 'billiy', Age: 30, Email: 'billiy@gmail.com' }
]
*/

getAverageAge();
console.log("---------------------------------------------------------------------");

/* 
console output =>
[ 20, 10, 20, 30 ]
20
 */



