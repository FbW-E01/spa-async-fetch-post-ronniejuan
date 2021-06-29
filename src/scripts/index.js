// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

//POSTING DATA

const user = {
    name:"Juan",
    email:"Juan@lobo.cl",
    password:"****", 
    message:"",
    checkbox:"",
}

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    body:JSON.stringify(user)
})

.then(responsive =>responsive.json())
.then(result=> console.log(result))


