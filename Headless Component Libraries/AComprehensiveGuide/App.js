// App.js
    
    import React from "react";
    // Export the SimpleCOuntdown component, we have to build this component :)
    import SimpleCountdown from "./components/simple-countdown";
    
    function App() {
      // Create a future date and pass in to the SimpleCountdown
      const date = new Date("2021-01-01"); // New year - Another 3xx days more :)
    
      return (
        <div className="App">
          <SimpleCountdown date={date} />
          <hr />
        </div>
      );
    }
    
    export default App;
