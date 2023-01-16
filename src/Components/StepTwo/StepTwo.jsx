import {React, useContext} from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {MultiStepContext}  from '../../StepContext';

const StepTwo = () => {
    const {setStep, currentStep,setUserBio, userBio, dob, setDob} = useContext(MultiStepContext)

    const API = "http://localhost:5010/user-service/api/v1/user/:id/update/bio"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const res =  fetch(
            API, {
                method: 'PUT',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                    userBio, dob
                }),
            }
            )
            .then(res => res.json())
            setStep(3)
            if(res.status === 200){
                console.log(userBio)
            }
        }catch(error){
            console.log(error)
        }
        
    }
   
   
  return (
    <div className='container'>
            <div className="form-div">
                <h2>Fill Biodata</h2>
                <h4>Basic information to help us <br /> know you better</h4>
                <form onSubmit={handleSubmit}>
                    <div style={{width: '300px', margin:'auto'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date Of Birth"
                            className='dob'
                            id="dob"
                            value={dob}
                            onChange={(newdob) => {
                                setDob(newdob)
                              }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </div>

                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Gender</InputLabel>
                        <Select
                        required
                        sx={{width: 300}}
                        label='Gender'
                        id="gender"
                        variant="standard"
                        onChange={(e) => setUserBio({...userBio, "gender": e.target.value})} 
                        value={userBio.gender}
                        >
                        <MenuItem value='Male'>Male</MenuItem>
                        <MenuItem value='Female'>Female</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                        </Select>
                    </div>

                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Marital status</InputLabel>
                        <Select
                        required
                        id="status"
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e) => setUserBio({...userBio, "marital_status": e.target.value})} 
                        value={userBio.marital_status}
                        >
                        <MenuItem value='single'>Single</MenuItem>
                        <MenuItem value='married'>Married</MenuItem>
                        <MenuItem value='divorced'>Divorced</MenuItem>
                        </Select>
                    </div>

                    <div>
                        <TextField
                        placeholder="Country"
                        sx={{width:300}}
                        required
                        className='textfield'                        
                        variant="standard"
                        onChange={(e) => setUserBio({...userBio, "country": e.target.value})} 
                        value={userBio.country}
                        />
                    </div>

                    <div>
                        <TextField
                        placeholder="City"
                        sx={{width:300}}
                        required
                        id="answer"
                        className='textfield'                        
                        variant="standard"
                        onChange={(e) => setUserBio({...userBio, "city": e.target.value})} 
                        value={userBio.city}
                        />
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <Button variant="contained" 
                            color="error"
                            className='btn'
                            sx={{width:300}}
                            type="submit"
                            >Continue
                        </Button>
                    </div>

                    
                    <div>
                        <Button variant="outlined" 
                            color="error"
                            className='btn'
                            sx={{width:300}}
                            onClick={() => setStep(currentStep - 1)}
                            >
                                Back
                        </Button>
                    </div>
                </form>
           
            </div>
        </div>
  
  )
}

export default StepTwo