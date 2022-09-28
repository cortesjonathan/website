import Navtop from "./Head/Navtop";
import Header from "./Head/Header";
import Cardsl from "./Card/Cardsl";

export default function App() {
  return (
    <>
      <div className="header">
        <Navtop/>
        <Header/>
      </div>
      <Cardsl/>
      <div>
        
      </div>
    </>
  );
}