import {React, useState, createContext} from 'react'
import App from "./App"

export const MultiStepContext = createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [userBio, setUserBio] = useState([])
    const [secureUser, setSecureUser] = useState([])
    const [dob, setDob] = useState("")


  return (
    <div>
        <MultiStepContext.Provider value={{currentStep, setStep, userData, setUserData 
            ,userBio,setUserBio,secureUser,setSecureUser, dob, setDob
            
        }}>
            <App />
        </MultiStepContext.Provider>
    </div>
  )
}

export default StepContext