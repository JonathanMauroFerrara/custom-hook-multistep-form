import { FormWrapper } from "./FormWrapper";

type UserFormProps = {
  name: string,
  surname: string,
  email: string,
  phone: string
}

export function UserForm({name, surname, email, phone}: UserFormProps){
    return(
        <FormWrapper title="User Information">
          <label>Name</label>
          <input autoFocus type="name" required></input>  
          <label>Surname</label>
          <input type="surname" required></input> 
          <label>Email</label>
          <input type="email" required></input> 
          <label>Phone</label>
          <input type="phone" required></input> 
        </FormWrapper>
    )
}