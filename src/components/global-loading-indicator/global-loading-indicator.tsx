import "./global-loading-indicator.scss";

import * as React from "react";
import AnimatedButton from "../animated/animated-button";
import AnimatedProgressBar from "../animated/animated-progress-bar";
import AnimatedHackerIcon from "../animated/animated-hacker-icon";
import LoadingContext from "../../context/loading-context";

const GlobalLoadingIndicator = () => {
  const { isLoadingContent } = React.useContext(LoadingContext);
  
  return (
    <section className="global-loading-indicator">
      <AnimatedHackerIcon />
      <AnimatedProgressBar text="Loading hacker news " numberToIncrementTo={100} timeoutInMs={55}/>
      {
        !isLoadingContent && (
          <AnimatedButton
            text="Click to continue"
            onClick={() => console.log("on click")}
          />
        )
      }
    </section>
  );
};

export default GlobalLoadingIndicator;
