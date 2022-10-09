import { FormWrapper } from "./FormWrapper"

type AccountFormProps = {
  username: string,
  password: string,
  interests: string,
}

export function AccountForm({username, password, interests}: AccountFormProps){
    return(
          <FormWrapper title="Account Information">
            <label>Username</label>
            <input autoFocus type="state" required></input>  
            <label>Password</label>
            <input type="city" required></input> 
            <label>Interests</label>
            <select required>
              <option defaultValue={"select"} disabled>Select a interest</option>
              <option value="games">Games</option>
              <option value="travels">Travels</option>
              <option value="food">Food</option>
            </select> 
          </FormWrapper>
    )
}