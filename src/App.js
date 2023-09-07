import { BrowserRouter as Routers } from "react-router-dom";
import { RenderRouter } from "./router";
import { useDispatch } from "react-redux";
import { getInitData } from "./store/auth";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  dispatch(getInitData());

  return (
    <>
      <Routers>
        <RenderRouter />
      </Routers>
    </>
  );
}

export default App;
