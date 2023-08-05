import { Devices } from "./Devices/Devaices";


export const DeviceComp = ({device}: any | null) =>
    <aside>
            if ({device}.xboxOne) {
                <Devices wid={150} key={"xboxOne"} path={"logo_XboxOne.png"} />
            }
            if ({device}.xboxSeriesXorS) {
                <Devices wid={130} key={"xboxSeriesXorS"} path={"logo-Xbox-SeriesXorS.png"} />
            }
            if ({device}.playstation4) {

                <Devices wid={130} key={"playstation4"} path={"logo_playStation4.svg"} />
            }
            if ({device}.playstation5) {
                <Devices wid={130} key={"playstation5"} path={"logo_playStation5.svg"} />
            }
            if ({device}.windows) {
                <Devices wid={130} key={"windows"} path={"logo-windows.png"} />
            }
    </aside>
