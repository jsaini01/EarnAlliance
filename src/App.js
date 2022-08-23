import React from "react";

import NavBar from "./components/NavBar";
import SecImages from "./components/SecImages";

import { BgHeader, Div } from "./styled/HeaderStyle";

function App() {
  return (
    <Div>
      <BgHeader>
        <NavBar />
        <SecImages />
      </BgHeader>
    </Div>
  );
}

export default App;
