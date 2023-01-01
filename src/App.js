import React, {useContext} from 'react'
import FirstStep from "./Components/StepOne/StepOne";
import SecondStep from "./Components/StepTwo/StepTwo";
import ThirdStep from "./Components/StepThree/StepThree";
import { Stepper, StepLabel, Step } from "@mui/material";
import { MultiStepContext } from "./StepContext";
import "./App.css";


function App() {

  const {currentStep} = useContext(MultiStepContext)

  const showStep = (step) => {
    
    switch(step) {
        case 1 : 
            return <FirstStep />
        case 2: 
            return <SecondStep />
        case 3 :
            return <ThirdStep />
        default: 
        return <FirstStep />
    }
}
  return (
    <div className="App">
      <div className="wrapper">
        <div className="write-div">
          <h1>Take charge of your <span>investment portfolio </span> </h1>
          <h3>
            Create a free account and gain full access to all our features today
            <br />
            No credit card needed. <br /> Trusted by over 4,000 enterprenuers
            and VC's.
          </h3>
        </div>

        <div>
          <div>
            <Stepper
              style={{ width: "350px", margin: "30px auto" }}
              activeStep={currentStep - 1}
            >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>

            {/* display different step forms */}
          {showStep(currentStep)}
        </div>
      </div>
    </div>
  );
}

export default App;
