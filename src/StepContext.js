import {React, useState, createContext} from 'react'
import App from "./App"

export const MultiStepContext = createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])
    const [value, setValue] = useState()

    const submitData = () => {
        setFinalData(finalData=>[...finalData, userData])
        setUserData('');
        setValue('')
        console.log(userData)
        setStep(1)
    }
  return (
    <div>
        <MultiStepContext.Provider value={{currentStep, setStep, userData, 
        setUserData, finalData, setFinalData, submitData, value,
        setValue
        
        }}>
            <App />
        </MultiStepContext.Provider>
    </div>
  )
}

export default StepContext