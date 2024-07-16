import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

import "./infoBox.css";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1561553590-267fc716698a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGF6YSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.webp?b=1&s=170667a&w=0&k=20&c=Zrx6fhLi6mYYJylYQsbYr09ozyNsgAYfNolc_pUgmMY=";
  const COLD_URL =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
  return (
    <div className="infoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                 info.humidity > 80 
                 ?  <ThunderstormIcon/>
                 : info.temp > 15
                 ? <LightModeIcon/>
                 : <AcUnitIcon/> 
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity} </p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>max Temp = {info.tempMax}&deg;C</p>
              <p>
                {" "}
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
