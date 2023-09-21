import { Devices } from "./Devices/Devaices";


export const DeviceComp = ({ device }: any | null) =>
    <>
        {device.xboxOne && (
            <div>
                <Devices wid={150} deviceKey={"xboxOne"} path={"logo_XboxOne.png"} />
            </div>
        )}
        {device.xboxSeriesXorS && (
            <Devices wid={130} deviceKey={"xboxSeriesXorS"} path={"logo-Xbox-SeriesXorS.png"} />
        )}
        {device.playstation4 && (
            <Devices wid={130} deviceKey={"playstation4"} path={"logo_playStation4.svg"} />
        )}
        {device.playstation5 && (
            <Devices wid={130} deviceKey={"playstation5"} path={"logo_playStation5.svg"} />
        )}
        {device.windows && (
            <Devices wid={130} deviceKey={"windows"} path={"logo-windows.png"} />
        )}
    </>
