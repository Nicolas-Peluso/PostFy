import Header from "./components/Header/Header";
import "../src/App.css"
import {ContextGlobal, context} from "./usercontext/context"

function App() {
  return (
    <>
    <ContextGlobal>
        <div>
          <Header/>
          
        </div>
      </ContextGlobal>
    </>
  );
}

export default App;
