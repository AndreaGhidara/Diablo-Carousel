import { DevicesProps } from "../../../interfaces";


export const Devices = ({wid, key, path}:DevicesProps) =>
<aside>
        <div className={`w-[${wid}px] flex items-center p-2`}>
            <img key={key} src={`public/${path}`} alt="" />
        </div>
</aside>