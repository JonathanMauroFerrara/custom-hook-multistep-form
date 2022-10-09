import { FormWrapper } from "./FormWrapper"

type UserData = {
  username: string,
  password: string,
  interests: string,
}

type AccountFormProps = UserData & {
  updateFields: (fields: Partial <UserData>) => void
}

export function AccountForm({username, password, interests, updateFields}: AccountFormProps){
    return(
          <FormWrapper title="Account Information">
            <label>Username</label>
            <input autoFocus type="state" value={username} onChange={e => updateFields({username: e.target.value})}required></input>  
            <label>Password</label>
            <input type="city" value={password} onChange={e => updateFields({password: e.target.value})} required></input> 
            <label>Interests</label>
            <select value={interests} onChange={e => updateFields({interests: e.target.value})} required>
              <option defaultValue={"select"} disabled>Select a interest</option>
              <option value="games">Games</option>
              <option value="travels">Travels</option>
              <option value="food">Food</option>
            </select> 
          </FormWrapper>
    )
}