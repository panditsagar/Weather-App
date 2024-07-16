import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function Weather(){
    const[WeatherInfo,setWeatherInfo]=useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
    });
    let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sagar</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}