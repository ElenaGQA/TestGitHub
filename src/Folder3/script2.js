const user={
    name:"John",
    age:30
}

user.friend={
    name:"Pete",
    age:20
}

// console.log(user)

for(let key in user){
    console.log(`${key}:${user[key]}`)
}

// obj=10
// console.log(obj)