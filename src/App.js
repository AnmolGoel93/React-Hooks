import UseContext from "./UseContext/UseContext";
import UseDeferredValue from "./UseDeferredValue/UseDeferredValue";
import UseEffect from "./UseEffect/UseEffect";
import Buttons from "./UseImperativeHandleHook/Buttons";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseReducer from "./UseReducer/UseReducer";
import UseTransition from "./UseTransition/UseTransition";

function App() {
  return (
    <div>
      <h1>Hooks Examples</h1>
      <Buttons />
      <br />
      <hr />
      <br />
      <UseTransition />
      <br />
      <hr />
      <br />
      <UseLayoutEffect />
      <br />
      <hr />
      <br />
      <UseEffect />
      <br />
      <hr />
      <br />
      <UseContext />
      <br />
      <hr />
      <br />
      <UseReducer />
      <br />
      <hr />
      <br />
      <UseDeferredValue />
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
