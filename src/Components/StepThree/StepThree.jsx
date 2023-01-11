import React, {useContext} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {MultiStepContext}  from '../../StepContext';


const StepThree = () => {
    const {setStep, currentStep,setSecureUser, secureUser, setUserBio, setUserData} = useContext(MultiStepContext)
    const API = "http://localhost:5010/user-service/api/v1/user/:user_id/secure/account"
    

    // const handleSubmit = () => {
    //     try{
    //          fetch(API, {
    //             method: "POST",
    //             body: {secureUser}
    //         })
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    //         setStep(1)
    //         setUserData("")
    //         setUserBio("")
    //         console.log(secureUser)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const res =  fetch(
            API, {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                    secureUser
                }),
            }
            )
            .then(res => res.json())
            // let resjson = await res.json()
            if(res.status === 200){
                console.log(secureUser)
                setStep(1)
                setUserData("")
                setUserBio("")
                alert("Account created successfully")
            }else{
                alert("Could not connect to server")
            }
        }catch(error){
            console.log(error)
        }
        
    }

  return (
    <div>
         <div className="container">
            <div className="form-div">
                <h2>Secure Your Account</h2>
                <h4>Add a question and a password to <br /> protect your account</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                        placeholder="Password"
                        id="pass1"
                        className='textfield'
                        type="password"
                        required
                        sx={{width:300}}
                        onChange={(e) => setSecureUser({...secureUser, "password": e.target.value})} 
                        value={secureUser.password}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LockIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                    </div>

                    <div>
                        <TextField
                        placeholder="Confirm password"
                        sx={{width:300}}
                        id="pass2"
                        required
                        className='textfield'
                        type="password"
                        onChange={(e) => setSecureUser({...secureUser, "confirm_password": e.target.value})} 
                        value={secureUser.confirm_password}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <LockIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                    </div>

                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Pick a question</InputLabel>
                        <Select
                        label="Age"
                        required
                        id="question"
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e) => setSecureUser({...secureUser, "question": e.target.value})} 
                        value={secureUser.question}
                        >
                        <MenuItem value='Favourite dish'>The name of your favourite dish</MenuItem>
                        <MenuItem value='The name of your favourite cousin'>The name of your eldest cousin</MenuItem>
                        <MenuItem value='The name of your favourite colour'>The name of your favourite colour</MenuItem>
                        <MenuItem value='First city'>What is your birth place</MenuItem>
                        </Select>
                    </div>

                    <div>
                        <TextField
                        placeholder="Enter an answer"
                        sx={{width:300}}
                        required
                        id="answer"
                        className='textfield'                        
                        variant="standard"
                        onChange={(e) => setSecureUser({...secureUser, "answer": e.target.value})} 
                        value={secureUser.answer}
                        />
                    </div>


                    <div>
                        <Button variant="contained" 
                            color="error"
                            className='btn'
                            sx={{width:250}}
                            type="submit"
                            >Finish
                        </Button>
                    </div>

                    <div>
                        <Button variant="outlined" 
                            color="error"
                            className='btn'
                            sx={{width:250}}
                            onClick={() => setStep(currentStep - 1)}
                            >
                                Back
                        </Button>
                    </div>
                    
                </form>
           
            </div>
        </div>
    </div>
  )
}

export default StepThree