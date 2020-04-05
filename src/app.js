import React from "react";
import { TickingClock, PartOfDayContainer } from "./containers";

const App = () => {
  return (
    <div>
      <h1>Overkill React Clock</h1>
      <TickingClock />
      <PartOfDayContainer />
    </div>
  );
};

export default App;
