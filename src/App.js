import React from "react";
import { Button, Icon } from "react-materialize";

function App() {
   const getStarPlanet = () => {
      fetch("https://swapi.dev/api/planets/")
         .then((data) => data.json())
         .then((d) => d.results)
         .then((planets) => getAsArray(planets));
   };

   const getAsArray = (loopObject) => {
      for (const prop of loopObject) {
         console.log(prop.name);
      }
   };

   return (
      <div>
         <Button
            className="red"
            floating
            icon={<Icon>add</Icon>}
            large
            node="button"
            waves="light"
            onClick={getStarPlanet}
         />
      </div>
   );
}

export default App;
