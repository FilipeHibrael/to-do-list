import { ButtonLogin } from "./ButtonLogin";
import { FormInput } from "./FormInput";
import { Logo } from "./Logo"
import style from "../../styles/Login.module.css"

interface LoginProps {
    toggleScreen: () => void
  }
  
  export function Login({ toggleScreen }: LoginProps) {   
    return (
        <div className={style.container}>
            <div className={style.login}>
                
                <h1 className={style.heading}>Login</h1>
                
                <form action="submit">
                    <FormInput type="email" label="Email" placeholder="email..."/>
                    
                    <FormInput type="password" label="Senha" placeholder="********"/>
                    
                    <ButtonLogin type="submit" title="ENTRAR"/>
                </form>

                <p className={style.p}>Não tem uma conta? <a href="#" className={style.a} onClick={toggleScreen}>Crie uma.</a></p>
            </div>

            <Logo />
        </div>
    )
}