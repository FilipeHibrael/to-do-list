import { ButtonLogin } from "../Login/ButtonLogin"
import { FormInput } from "../Login/FormInput"
import { Logo } from "../Login/Logo"
import style from "./CriarConta.module.css"

interface CriarContaProps {
    toggleScreen: () => void
  }
  
  export function CriarConta({ toggleScreen }: CriarContaProps) {
    return (
        <div className={style.container}>
            <div className={style.criarConta}>
                <h1 className={style.heading}>Criar Conta</h1>

                <form action="submit">
                    <div className={style.nomeSobrenome}>
                        <FormInput type="text" label="Nome" placeholder="nome..." className={style.nomeInput}/>
                        <FormInput type="text" label="Sobrenome" placeholder="sobrenome..." className={style.nomeInput}/>
                    </div>
                    
                    <FormInput type="email" label="Email" placeholder="email..."/>

                    <FormInput type="password" label="Senha" placeholder="********"/>

                    <ButtonLogin type="submit" title="CRIAR CONTA"/>
                </form>

                <p className={style.p}>Já tem uma conta? <a href="#" className={style.a} onClick={toggleScreen}>Entre.</a></p>
                
            </div>

            <Logo/>
        </div>
    )
}