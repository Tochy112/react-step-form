import {React, useState, createContext} from 'react'
import App from "./App"

export const MultiStepContext = createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])
    const [phone, setPhone] = useState()
    const [dob, setDob] = useState()

    
    const submitData = () => {
        setFinalData(finalData=>[...finalData, {userData, phone, dob}])
    }

    const API = "http://localhost:5010/user-service/api/v1/user/create"

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(finalData)
        try {
           const res =  fetch(
            API, {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify({
                    finalData
                }),
            }
            )
            .then(res => res.json())
            .then(result => console.log(result))
            // let resjson = await res.json()
            if(res.status === 200){
                // console.log(finalData)
                setStep(1)
                setPhone('')
                setDob('')
                setUserData('');
                // console.log(resjson)
                alert("User created successfully")
            }else{
                alert("Error occured")
            }
        }catch(error){
            console.log(error)
        }
        
    }

  return (
    <div>
        <MultiStepContext.Provider value={{currentStep, setStep, userData, 
        setUserData, finalData, setFinalData, submitData, phone,
        setPhone, dob, setDob, handleSubmit
        
        }}>
            <App />
        </MultiStepContext.Provider>
    </div>
  )
}

export default StepContext