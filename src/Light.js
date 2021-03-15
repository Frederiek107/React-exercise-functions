import React from "react";

function App() {
    const [light, toggleLight] = useState({true});

    function handleEvent(e) {
        toggleLight(!light);
    }

    return(
    <div>
        <button
            type="button"
            value={light}
            onClick={handleEvent}
        />
    </div>
    )
}
