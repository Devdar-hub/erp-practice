import React, { useState } from 'react'
// function Set(){
// const [Email,setEmail]=useState("");
// const [Password,setPassword]=useState("");
// use 
// }

const Login = (props) => {
    function login(e) {
        e.preventDefault();
        var email = document.getElementById("email").value;
        console.log(email);
        var password = document.getElementById("password").value;
        console.log(password);
        
        fetch('https://projects.parthvi.tech/api/v1/auth/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status_code === 200) {
                    console.log("login")
                    document.getElementById("status").innerHTML = data.data.email;
                    localStorage.setItem('token',data.data.token);
                    window.location="/admin";
                }
                else {
                    console.log("error")
                    document.getElementById("status").innerHTML = "Enter correct credential";
                }
            });
    
            
    
    }
    

    return (
        <div>
            <h1>Login </h1>
            <form action="post" onSubmit={login}>
                Email : <input type="Email" placeholder="E-mail" name="email" id="email" required /><br /><br />
                Password : <input type="Password" name="password" id="password" required /><br /><br />
                <button> Login</button>
            </form>
            <div><h1 id="status"></h1></div>
            
           
        </div>

        
    )

}

export default Login


