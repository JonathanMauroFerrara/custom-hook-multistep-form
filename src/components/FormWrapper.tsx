import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps){
    return(
        <>
            <h1 className="form__title">{title}</h1>
            <div className="form__container">
                {children}
            </div>
        </>
    )
}