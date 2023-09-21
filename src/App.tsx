import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Caption } from "./components/Caption/Caption";
import { DeviceComp } from "./components/deviceCompatibility/DeviceComp";
import  games  from "./games.json";

function App() {

  const game = games;

  const [counter, setCount] = useState(3);

  function increment() {
    
    if (counter == game.length - 1) {
      setCount(0)
      
    } else {
      setCount(counter + 1)
    }
    console.log(counter);
    
  }

  function decremente() {
    
    if (counter <= 0) {
      setCount(3)
      
    } else {
      setCount(counter - 1);
    }
    console.log(counter);
  }

  function setSecondCard(){
    switch (counter) {
      case 0:
        return 3
      case 3:
        return 2
      case 2:
        return 1
      default:
        return 0
    }
  }

  function setThirdCard(){
    switch (counter) {
      case 0:
        return 2
      case 3:
        return 1
      case 2:
        return 0
      default:
        return 3
    }
  }

  const whoDevice = () => {
    const supportedDevices = [];

    if (game[counter].device.xboxOne) {
      supportedDevices.push(
        <div className="w-[150px] flex items-center p-2">
          <img key="xboxOne" src="public/logo_XboxOne.png" alt="" />
        </div>
      );
    }
    if (game[counter].device.xboxSeriesXorS) {
      supportedDevices.push(
      <div className="w-[130px] flex items-center p-2">
        <img key="xboxSeriesXorS" src="public/logo-Xbox-SeriesXorS.png" alt="" />
      </div>
      );
    }
    if (game[counter].device.playstation4) {
      supportedDevices.push(
      <div className="w-[130px] flex items-center p-2">
        <img className="invert" key="playstation4" src="public/logo_playStation4.svg" alt="" />
      </div>
      );
    }
    if (game[counter].device.playstation5) {
      supportedDevices.push(
      <div className="w-[130px] flex items-center p-2">
        <img className="invert" key="playstation5" src="public/logo_playStation5.svg" alt="" />
      </div>
      );
    }
    if (game[counter].device.windows) {
      supportedDevices.push(
      <div className="w-[150px] flex items-center pt-2">
        <img key="windows" src="public/logo-windows.png" alt="" />
      </div>
      );
    }

    return supportedDevices;
  };
  

  return (
    <>
      <div className="relative">
        <img className="w-full  z-10" src={game[counter].ulrBackground} alt="" />
        <div className="title z-20 text-white absolute top-[15%] left-[30px] w-[800px]">
          <div className="mb-5">
            <img className="w-[100px]" src={game[counter].urlLogo} alt="" />
          </div>
          <Caption key={counter} title={game[counter].title} description={game[counter].description} />
          {/* <h1 className="text-6xl font-Diablo ">{game[counter].title}</h1> */}
          {/* Description */}
          {/* <p className="pt-4 text-2xl">
            {game[counter].description}
          </p> */}
          <div className="flex p-5">
            <Button text={"BuyNow!"}/>
            <button className="w-[140px] text-lg border-rose-900 hover:font-extrabold shadow-2xl ms-4 p-2 hover:text-xl text-bold hover:flex hover:items-end hover:justify-center hover:shadow-red-500/50 hover:text-red-800 hover:border-b">
              <span className="shadow-2xl hover:shadow-red-500/50">
                Read More
              </span>
            </button>
          </div>
          <div className="w-[300px]">
            <div className="flex items-center">
              {/* {whoDevice()} */}
              <DeviceComp device={game[counter].device}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-[20%] right-[0px] text-white">
          {/* Top */}
          <div className="flex items-end relative left-[280px] ">
            <div className="w-[230px] h-[280px] shadow-2xl shadow-red-700 hover:shadow-red-500/50 rounded-xl me-4">
              <img className="w-full h-full object-cover rounded-xl" src={game[counter].ulrCoverCard} alt="" />
            </div>
            <div className="w-[170px] h-[200px] shadow-2xl shadow-red-800 rounded-xl me-4 ">
              <img className="w-full h-full object-cover rounded-xl" src={game[setSecondCard()].ulrCoverCard} alt="" />
            </div>
            <div className="w-[170px] h-[200px] shadow-2xl shadow-red-800 rounded-xl me-4 ">
              <img className="w-full h-full object-cover rounded-xl" src={game[setThirdCard()].ulrCoverCard} alt="" />
            </div>
            <div className="w-[170px] h-[200px] shadow-2xl shadow-red-800 rounded-xl me-4 ">
              <img className="w-full h-full object-cover rounded-xl" src={game[setThirdCard().ulrCoverCard]} alt="" />
            </div>
          </div>
          {/* Bottom */}
          <div className="flex relative left-[122px]">
            <div>
              <button onClick={increment} className="rounded-full border  border-red-800 shadow-xl hover:shadow-red-700/50 text-lg py-4 px-6 me-2">
                &#8828;
              </button>
              <button onClick={decremente} className="rounded-full border border-red-800 shadow-xl hover:shadow-red-700/50 text-lg py-4 px-6">
                &#8829;
              </button>
            </div>
            <div className="flex items-center ms-4">
              <p className="w-[250px] h-0.5 bg-white"></p>
              <small className="ms-5 text-xl">
                {game[counter].version}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
