import Listings from "./components/PresentationalPattern/Listings";
import "./App.css";
import { StyledButton, StyledText } from "./components/HocPattern/Text";
import ListingsContainerComponent from "./components/containerPattern/Listing";
import TemperatureConverter, {
  Kelvin,
  Fahrenheit,
} from "./components/RenderPropsPattern/TemperatreConverter";
import HooksListing from "./components/HooksPattern/HooksListing";
import { useTheme } from "./components/ProviderPattern/ThemeProvider";
import ThemeToggleButton from "./components/ProviderPattern/ThemeToggleButton";
import { useCallback } from "react";
import Input from "./components/ProviderPattern/Input";
import FlyOutInput from "./components/CompoundPattern/FlyOutInput";
function App() {
  const {theme} = useTheme();
  const customTextStyle = {
    fontWeight: "bold",
    fontStyle: "italic",
    textDecoration: "underline",
  };
  const renderKelvin = useCallback(({value}) => <Kelvin value={value}/>,[])
  const renderFahrenheit = useCallback(({value}) => <Fahrenheit value={value}/>,[])
  return (
    <div style={{padding:"50px",backgroundColor: theme === "light"  ? "white" : "black"}}>
      <ThemeToggleButton/>
      <Input/>
      <FlyOutInput/>
      <Listings />
      <ListingsContainerComponent />
      <HooksListing/>
      <StyledText style={customTextStyle} />
      <StyledButton />
      <TemperatureConverter
        renderKelvin={renderKelvin}
        renderFahrenheit={renderFahrenheit}
      />
    </div>
  );
}

export default App;
