import { FormWrapper } from "./FormWrapper";

type UserData = {
  state: string
  city: string
  postalCode: string
  address: string
}

type AddressFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function AddressForm({state, city, postalCode, address, updateFields}: AddressFormProps){
    return(
        <FormWrapper title="Address Information">
          <label>State/Province</label>
          <input autoFocus type="state" required></input>  
          <label>City</label>
          <input type="city" required></input> 
          <label>Zip/Postal Code</label>
          <input type="postalCode" required></input> 
          <label>Address Line</label>
          <input type="address" required></input> 
        </FormWrapper>
    )
}