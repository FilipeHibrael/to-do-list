import { ButtonLogin } from "./ButtonLogin";
import { FormInput } from "./FormInput";
import style from "./Login.module.css"
import imagem from "../../assets/design-todo-list.png"

export function Login() {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <h1 className={style.heading}>Login</h1>
                
                <form action="submit">
                    <FormInput type="email" label="Email" placeholder="email..."/>
                    
                    <FormInput type="password" label="Senha" placeholder="********"/>
                    
                    <ButtonLogin type="submit" title="ENTRAR"/>
                </form>

                <p className={style.p}>Não tem uma conta? <a href="" className={style.a}>Crie uma.</a></p>
            </div>

            <div className={style.containerRight}>
                <img src={imagem} alt="to do list" className={style.imagem}/>
                
                <p className={style.logo}>LOGO</p>
            </div>
        </div>
    )
}