// let PlayerName="munir";
// console.log(PlayerName);

//  PlayerName=32;
// console.log(PlayerName);

let a: number[]=[];
a.push(7);

//union 

let b: (string | number)[]=[];
b.push("munir",7)


//object 

let c:{
    name:string,
    age:number,
    adult:boolean
}

c={
    name:"munir",
    age:8,
    adult:true
}


// type any


//function

const myFunction =(a:string, b:string ,c?:string)=>{
    console.log(` ${a} and ${b}`)
}

myFunction("munir","jak");



//Alice 

type StringOrNum=string |number;
type UserType={name:string,age:number};

const UserDetails=(id:StringOrNum, user:UserType)=>{
    console.log(`userId:${id} and Name is :${user.name}  age is ${user.age}`)
}



// function signature

let calculation: (x:number ,y:number,z:string)=>number;  // its called function signature

calculation=(a:number,b:number,c:string)=>{
    if(c==="add"){
        return a+b;
    }
    else{
        return a-b;
    }
}

console.log(calculation(5,6,"add"));

