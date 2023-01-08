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
    const {setStep, currentStep, userData, setUserData, submitData, handleSubmit } = useContext(MultiStepContext)
    

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
                        // required
                        sx={{width:300}}
                        onChange={(e)=> setUserData({...userData, "password" : e.target.value})}
                        value={userData['password']}
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
                        // required
                        className='textfield'
                        type="password"
                        onChange={(e)=> setUserData({...userData, "confirm_password" : e.target.value})}
                        value={userData['confirm_password']}
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
                        // required
                        id="question"
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e)=> setUserData({...userData, "question" : e.target.value})}
                        value={userData['question']}
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
                        // required
                        id="answer"
                        className='textfield'                        
                        variant="standard"
                        onChange={(e)=> setUserData({...userData, "answer" : e.target.value})}
                        value={userData['answer']}
                        />
                    </div>


                    <div>
                        <Button variant="contained" 
                            color="error"
                            className='btn'
                            sx={{width:250}}
                            type="submit"
                            onClick={() => submitData()}
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