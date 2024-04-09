import { ButtonLogin } from "./ButtonLogin";
import { FormInput } from "./FormInput";
import style from "./Login.module.css"

export function Login() {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.heading}>Login</h1>
                
                <form action="submit">
                    <FormInput type="email" label="Email" placeholder="email..."/>
                    
                    <FormInput type="password" label="Senha" placeholder="********"/>
                    
                    <ButtonLogin type="submit" title="ENTRAR"/>
                </form>

                <p className={style.p}>Não tem uma conta? <a href="" className={style.a}>Crie uma.</a></p>
            </div>
        </div>
    )
}