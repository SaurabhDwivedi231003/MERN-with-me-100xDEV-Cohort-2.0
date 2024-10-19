import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from 'react';
import { SignupType } from "@saurabh_dwivedi/validation";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Auth({type} : {type : "signup" | "signin"}) {
  const [postInput, setPostInputs] = useState<SignupType>({
     name : "",
     email : "",
     password :""
  });


  const navigate = useNavigate();  // Use the navigate hook here

  async function sendRequest() {
    const input = type === "signup" ? { email: postInput.email, password: postInput.password, name: postInput.name } : { email: postInput.email, password: postInput.password };
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, input);
      const jwt = response.data.jwt;  // JWT is inside `data.jwt`
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log("Error details:", e);  // Log more details
      alert("Error while signing up or signing in!");
    }
  }
  
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div>
              <div className="px-10"> 
                    <div className="text-3xl font-extrabold"> Create an account </div>
                    <div className="text-slate-400 ">
                        { type === "signin" ? "Don't have an account?" : "Already have an account ?"} 
                    <Link to={type === "signin" ? "/signup" : "/signin"} className="text-blue-500 pl-2 underline underline-offset-4">{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
              </div>
        <div className="pt-4">
          { type==="signup" ? <LabelledInput label="Name" placeholder="Saurabh Dwivedi..." onChange={(e)=>{ setPostInputs(c =>({ ...c , name : e.target.value}))}}/> : null }
          <LabelledInput label="Email" placeholder="xyz@mail.com" onChange={(e)=>{ setPostInputs(c =>({ ...c , email: e.target.value}))}}/>
          <LabelledInput label="Password" placeholder="Password" type={"password"} onChange={(e)=>{ setPostInputs(c =>({ ...c , password : e.target.value}))}}/>
          <button type="button" onClick={sendRequest} className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"} </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabelledInput({label ,placeholder,type, onChange} : LabelledInputType){
      return (
           <div>
            <label className="block mb-2 text-sm font-bold text-black dark:text-white pt-3">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   placeholder={placeholder} required />
        </div>
      )
}
