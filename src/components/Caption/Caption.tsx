import { CaptionProps } from "../../interfaces";

export const Caption = ({ title, description }: CaptionProps) => 
<aside>
    <div>
        <h1 className="text-5xl font-Diablo">{ title }</h1>
        <p className="pt-4 text-2xl">{ description }</p>
    </div>
</aside>
