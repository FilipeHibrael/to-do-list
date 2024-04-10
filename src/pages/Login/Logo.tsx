import image from "../../assets/design-todo-list.png"
import style from "../../styles/Logo.module.css"

export function Logo(){
    return(
        <div className={style.containerRight}>
                <img src={image} alt="to do list" className={style.image}/>
                
                <p className={style.logo}>LOGO</p>
            </div>
    )
}