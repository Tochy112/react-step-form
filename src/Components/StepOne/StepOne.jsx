import {React, useContext} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {MultiStepContext}  from '../../StepContext';

const StepOne = () => {
    const {setStep,  userData, setUserData, phone, setPhone } = useContext(MultiStepContext)
    const handleStep = () => {
        setStep(2)
    }

  return (
    <div className='step-one'>
        <div className="container">
            <div className="form-div">
                <h2>Sign Up</h2>
                <h4>Start your journey with us today</h4>
                <form onSubmit={handleStep}>
                    <div>
                        <TextField
                        placeholder="First name"
                        onChange={(e)=> setUserData({...userData, "firstName" : e.target.value})}
                        value={userData['firstName']}
                        id="firstname"
                        required
                        className='textfield'
                        sx={{width:300}}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                    </div>
                  
                    <div>
                        <TextField
                        placeholder="Last name"
                        sx={{width:300}}
                        required
                        onChange={(e)=> setUserData({...userData, "lastName" : e.target.value})}
                        value={userData['lastName']}
                        id="lastname"
                        className='textfield'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                    </div>

                    <div>
                        <TextField
                        placeholder="Email"
                        sx={{width:300}}
                        required
                        type="email"
                        onChange={(e)=> setUserData({...userData, "email" : e.target.value})}
                        value={userData['email']}
                        id="email"
                        className='textfield'
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <EmailIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                        />
                    </div>

                    <div>
                        <PhoneInput 
                        className='phone'
                        id="phone"
                        required
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="NG"   
                        value={phone}
                        onChange={setPhone}                     
                        />
                    </div>

                    <div>
                        <Button variant="contained" 
                            color="error"
                            className='btn'
                            sx={{width:300}}
                            onClick={handleStep}
                            >Create Account
                        </Button>
                    </div>

                    <div>
                        <Button variant="outlined" 
                            color="error"
                            className='btn'
                            sx={{width:300}}
                            >
                                Sign up with Google
                        </Button>
                    </div>
{/*                     
                    {
                        finalData ? finalData.map((data => {
                             return (
                                <div key={data.email}>
                                    <div>
                                        <p>{data.firstname}</p>
                                    </div>
                                    <div>
                                        <p>{data.lastname}</p>
                                    </div>
                                    <div>
                                        <p>{data.phone}</p>
                                    </div>
                                </div>
                             )
                            
                        })):console.log("no data")
                    } */}
                        
                    <p>Already have an account? <a href="/">Login</a></p>

                       
                </form>
           
            </div>
        </div>
    </div>
  )
}

export default StepOne