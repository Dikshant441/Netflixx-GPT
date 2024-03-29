import Body from "./Components/Body";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body />
      </Provider>
    </div>
  );
}
export default App;
