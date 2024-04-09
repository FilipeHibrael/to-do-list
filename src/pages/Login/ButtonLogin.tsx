import { ComponentProps } from "react"
import style from "./ButtonLogin.module.css"

interface ButtonLoginProps extends ComponentProps<"button">{
    type: "submit"
    title: string
}

export function ButtonLogin(props: ButtonLoginProps){
    return(
        <div className={style.container}>
            <button className={style.button} {...props}> {props.title}</button>
        </div>
    )
}