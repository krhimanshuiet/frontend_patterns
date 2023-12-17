import React,{memo} from 'react';
import Input from './Input';
import { useTheme } from '../ProviderPattern/ThemeProvider';

export function Kelvin ({ value }) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  );
}

export const  Fahrenheit = memo(({ value }) =>  {
  const {theme} = useTheme()
  console.log("farenhite rendering");
  return (
    <div className="temp-card" style={{backgroundColor:theme === "dark" ? "lightpink" : ""}}>
      The temperature in Fahrenheit is:
      <span className="temp">{value}°F</span>
    </div>
  );
})

function TemperatureConverter(props) {
  const [value, setValue] = React.useState(0);
  console.log("temp rendering");
  return (
    <div className="card">
      <Input setValue={setValue}/>
      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
}


export default memo(TemperatureConverter)