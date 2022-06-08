import React, { useState } from "react";

// UNDER CONSTRUCTION
function LoginForm({ LoginForm, errorParam }) {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);
  }

  const Logout =()=>{
    console.log("Logout")
  }



    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e =>{
      e.preventDefault();

      Login(details)
    }


    return (
      <div>
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <Login Login={Login} error={error}/>
      )}
      <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2> Login </h2>
        {/* ERROR */}
        <div className="form-group">
          <label htmlFor="name"> Name </label>
          <input type="text" name="name" id="name" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email: </label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password: </label>
          <input type="password" name="password" id="password"/>
        </div>
        <input type="submit" value="Submit"/>
      </div>
    </form>
    </div>
    )
    
}

export default LoginForm;
