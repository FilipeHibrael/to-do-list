import { ComponentProps } from "react"
import style from "./FormInput.module.css"

interface FormInputProps extends ComponentProps<"input">{
    type: "email" | "password" | "text"
    placeholder: string
    label: string
}

export function FormInput(props: FormInputProps) {
    return (
        <div className={style.container}>
            <label className={style.label}>{props.label}
                <input className={style.input} {...props} type={props.type} placeholder={props.placeholder}/>
            </label>
        </div>
    )
}