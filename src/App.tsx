import { FormEvent, useState } from "react"
import { AccountForm } from "./components/AccountForm"
import { AddressForm } from "./components/AddressForm"
import { UserForm } from "./components/userForm"
import "./style.css"
import { useMultiStepForm } from "./useMultiStepForm"

type FormData = {
  name: string,
  surname: string,
  email: string,
  phone: string,
  state: string,
  city: string,
  postalCode: string,
  address: string,
  username: string,
  password: string,
  interests: string,
}

const initialData: FormData = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  postalCode: '',
  address: '',
  username: '',
  password: '',
  interests: '',
}

function App() {
  const [userData, setUserData] = useState(initialData);
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, nextStep, prevStep, goTo} = useMultiStepForm([
  <UserForm {...initialData} updateFields={updateFields} />,
  <AddressForm {...initialData} updateFields={updateFields} />,
  <AccountForm {...initialData} updateFields={updateFields} />])
  
  function updateFields(fields: Partial<FormData>){
    setUserData(prev =>{
      return{...prev, ...fields}
    })   
  }
  function handleSubmit(e: FormEvent){
    e.preventDefault();
    nextStep()
  }

  return (
    <div className="form__section">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form__steps-counter">
          {`${currentStepIndex + 1} / ${steps.length}`}
        </div>

        
        {steps[currentStepIndex]}

        <div className="form__buttons-container">
          {!isFirstStep &&
            <button className="pre-button" type="button" onClick={prevStep}>
              Back
            </button>
          }
          
          <button className="next-button" type="submit">
            {isLastStep ? 'Send' : 'Next '}
          </button>
          
        </div>
      </form>
    </div>
  )
}

export default App
