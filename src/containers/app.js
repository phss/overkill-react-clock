import React from "react";
import TickingClock from "./tickingClock";
import PartOfDayContainer from "./partOfDayContainer";

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
