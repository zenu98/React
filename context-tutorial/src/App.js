import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
