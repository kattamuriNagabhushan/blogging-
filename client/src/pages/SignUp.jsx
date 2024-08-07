import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'

export default function SignUp() {

  const [formdata , setFormData] = useState({})
  const [errorMessage , setErrorMessage] = useState(null)
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{


      setFormData({...formdata , [e.target.id]: e.target.value})
      
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!formdata.username || !formdata.email || !formdata.password){
      return setErrorMessage("Please fill out all fields")
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('api/auth/signup',{
        method : 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body : JSON.stringify(formdata)
      })
      const data = await res.json()
      
      if(data.success === false){
        console.log(data);
        
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/sign-in')
      }
        

    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }

  }
  
  return (
    <div className='min-h-screen mt-20'>

      <div className='flex flex-1 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>

        <div>

        <Link to="/" className='font-bold font-semibold 
        dark:text-white text-4xl'>

        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
        via-purple-500 to-pink-500 rounded-lg text-white'>Blog</span>App

        </Link>

        <p className='text-sm mt-5 '>
          this is a demo project
        </p>

        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>

            <div>

              <Label value = "Your username" />
              <TextInput type = "text" placeholder = "Username" id="username" onChange={handleChange} />             
            </div>

            <div>

              <Label value = "Your Email" />
              <TextInput type = "email" placeholder = "name@gmail.com" id="email" onChange={handleChange} />           
            </div>

            <div>

              <Label value = "Your Password" />
              <TextInput type = "password" placeholder = "Password" id="password" onChange={handleChange} />              
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit" disabled = {loading}>
              {
                loading ? (
                    <>

                    <Spinner size = "sm" />
                    <span className='pl-3'>Loading...</span>
                    
                    </>
                ) : ('Sign Up')
              }
            </Button>

          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account?
            </span>

            <Link to="/sign-in" className='text-blue-500'>
            Sign In
            </Link>

          </div>

          
            {
              errorMessage && (
              <Alert className='mt-5' color="failure">
             
                {errorMessage}
              
              </Alert>
              )
            }
          
        </div>

      </div>
    </div>
  )
}
