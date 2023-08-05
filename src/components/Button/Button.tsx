import './Button.css'
import { ButtonProps } from "../../interfaces";

export const Button = ({text}:ButtonProps )=> 
    <aside>
        <div>
            <button className='buttonCustom shadow-2xl hover:shadow-red-800 hover:text-red-700 '>
                <p>{text}</p>
            </button>
        </div>
    </aside>
    


// import { CaptionProps } from "../../interfaces";

// export const Caption = ({ title, description }: CaptionProps) => 
// <aside>
//     <div>
//         <h1 className="text-5xl font-Diablo">{ title }</h1>
//         <p className="pt-4 text-2xl">{ description }</p>
//     </div>
// </aside>
