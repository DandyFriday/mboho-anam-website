import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"
import { FC } from "react"


export const Button:FC <button> = ({text , navigateTo, className, scrollTo, icon}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
            if(navigateTo){
                navigate(`/${navigateTo}`)
            }else{ 
                document.querySelector(`#${scrollTo}`)?.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }}
       className={`${className} p-2 text-sm px-6 rounded-t-xl rounded-br-xl`}>
        {text}
        {icon}
       </button>
    )
}