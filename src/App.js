//import React from "react"
import Linia from "./Linia"
import Textos from "./textos.json"

export default () => {
    const textComponent = Textos.map(linia=> <Linia text = {linia} />)
    return (
        <div>
            {textComponent}
       </div>
    );
};