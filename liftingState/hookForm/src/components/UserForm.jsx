import React, { useState } from 'react';

const UserForm = (props) => {
     const [firstname, setFirstname] = useState("");
     const [firstnameError, setFirstnameError] = useState("")
     const [lastname, setLastname] = useState("");
     const [lastnameError, setLastnameError] = useState("")
     const [email, setEmail] = useState("");
     const [emailError, setEmailError] = useState("")
     const [password, setPassword] = useState("");
     const [passwordError, setPasswordError] = useState("")
     const [confirmpass, setConfirmpassowrd] = useState("");
     const [confirmpassError, setConfirmpasswordError] = useState("")

     const handleFirstName= (e)=>{
          setFirstname(e.target.value);
          if(e.target.value.length <2){
               setFirstnameError("First Name must be atleast 2 characters")
          }
          else{
          setFirstnameError("")}
     }
     const handleLastName= (e)=>{
          setLastname(e.target.value);
          if(e.target.value.length <2){
               setLastnameError("Last Name must be atleast 2 characters")
          }
          else{
          setLastnameError("")
          }
     }
     const handleEmail=(e)=>{
          setEmail(e.target.value)
          if(e.target.value.length < 5){
               setEmailError("Email must be atleast 5 characters")
          }
          else{
          setEmailError("")
          }
     }
     const handlePassword=(e)=>{
          setPassword(e.target.value)
          
          if(e.target.value.length < 8 ){
               setPasswordError("Password must be at least 8 characters")
          }
          else{
               setPasswordError("")
          }
     }
     const handleConformPassword=(e)=>{
          setConfirmpassowrd(e.target.value)
          if(e.target.value != password){
               setConfirmpasswordError("Passwords must match")
               
               }
               else{
                    setConfirmpasswordError("")
               }

     }

     const createUser = (e) => {
          // we must prevent the default refresh of the browser to keep our state from being reset
          e.preventDefault();

          // shorthand ES6 syntax for building an object - see notes above
          const newUser = { firstname, lastname, email, password, confirmpass };
          console.log("Welcome", newUser);
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
          setConfirmpassowrd("");
     };

     return (
          <>
          <form onSubmit={createUser}>
               <div>
                    <label>first Name: </label>
                    <input type="text" value={firstname} onChange={handleFirstName}  />
                    {
                         firstnameError?
                         <p>{firstnameError}</p>:
                         ''
                    }
               </div>
               <div>
                    <label>last Name: </label>
                    <input type="text" value={lastname} onChange={handleLastName} />
                    {
                         lastnameError?
                         <p>{lastnameError}</p>:
                         ''
                    }
               </div>
               <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {
                         emailError?
                         <p>{emailError}</p>:
                         ''
                    }
               </div>
               <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={handlePassword} />
                    {
                         passwordError ?
                         <p>{passwordError}</p>:
                         ''
                    }
                    
               </div>
               <div>
                    <label>Confirm password: </label>
                    <input type="text" value={confirmpass} onChange={handleConformPassword} />
                    {
                         confirmpassError?
                         <p>{confirmpassError}</p>:
                         ''
                    }
                    <input type="submit" value="Create User" />
               </div>
          </form>

          <div>
               <h3>your first name: {firstname}</h3>
               <h3>your last name: {lastname}</h3>
               <h3>eamil: {email}</h3>
               <h3>password: {password}</h3>
               <h3>Confirm password: {confirmpass}</h3>
          </div>
          </>
     );

};

export default UserForm;


