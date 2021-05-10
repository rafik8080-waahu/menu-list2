import React from "react";
import Logo from "./component/Logo";
import Mains from "./component/Mains";
import Extras from "./component/Extras";
import Total from "./component/Total";
import { Provider } from "./Context";
import { mains, sides, drinks } from "./data";
import {} from "./App"
import "./styles.css";

export default function App() {
  return (
    <>
    <login/>
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
    </>
    
  );
}