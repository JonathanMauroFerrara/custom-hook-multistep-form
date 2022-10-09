import { FormWrapper } from "./FormWrapper";

type AddressFormProps = {
  state: string
  city: string
  postalCode: string
  address: string
}

export function AddressForm({state, city, postalCode, address}: AddressFormProps){
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