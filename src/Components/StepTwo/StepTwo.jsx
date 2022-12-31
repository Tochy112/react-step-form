import {React, useContext} from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button';
import {MultiStepContext}  from '../../StepContext';

const StepTwo = () => {
    const {setStep, currentStep, userData, setUserData } = useContext(MultiStepContext)


  return (
    <div className='container'>
            <div className="form-div">
                <h2>Fill Biodata</h2>
                <h4>Basic information to help us know you better</h4>
                <form action="">
                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Gender</InputLabel>
                        <Select
                        sx={{width: 300}}
                        label='Gender'
                        id="gender"
                        variant="standard"
                        onChange={(e)=> setUserData({...userData, "gender" : e.target.value})}
                        value={userData['gender']}
                        >
                        <MenuItem value='Male'>Male</MenuItem>
                        <MenuItem value='Female'>Female</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                        
                        </Select>
                    </div>
                  
                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Age</InputLabel>
                        <Select
                        id="age"
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e)=> setUserData({...userData, "age" : e.target.value})}
                        value={userData['age']}
                        >
                        <MenuItem value='20-30'>20-25</MenuItem>
                        <MenuItem value='30-40'>30-40</MenuItem>
                        <MenuItem value='40-60'>40-60</MenuItem>
                        </Select>
                    </div>

                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Marital status</InputLabel>
                        <Select
                        id="status"
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e)=> setUserData({...userData, "marital_status" : e.target.value})}
                        value={userData['marital_status']}
                        >
                        <MenuItem value='single'>Single</MenuItem>
                        <MenuItem value='married'>Married</MenuItem>
                        <MenuItem value='divorced'>Divorced</MenuItem>
                        </Select>
                    </div>

                    <div style={{width: '300px', margin:'auto'}}>
                        <InputLabel id="select-label">Country</InputLabel>
                        <Select
                        id="country"
                        disabled={false}
                        variant="standard"
                        sx={{width: 300}}
                        onChange={(e)=> setUserData({...userData, "country" : e.target.value})}
                        value={userData['country']}
                        >
                        <MenuItem value='Nigeria'>Nigeria</MenuItem>
                        <MenuItem value='United states'>United states</MenuItem>
                        </Select>
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <Button variant="contained" 
                            color="error"
                            className='btn'
                            sx={{width:300}}
                            onClick={() => setStep(3)}
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