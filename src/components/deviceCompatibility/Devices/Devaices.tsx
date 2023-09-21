import { DevicesProps } from "../../../interfaces";


export const Devices = ({wid, deviceKey, path}:DevicesProps) =>
<aside>
        <div className={`w-[${wid}px] flex items-center p-2`}>
            <img key={deviceKey} src={`public/${path}`} alt="" />
        </div>
</aside>