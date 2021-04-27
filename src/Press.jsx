import PressReleases from "./PressReleases"
import MobilePressReleases from "./MobilePressReleases";
import { useState, useEffect } from "react";

function Press(){
  const size = useWindowSize();

  return (
    <div>
      {size.width <= 990 ? <MobilePressReleases /> : <PressReleases /> }
    </div>
  )
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default Press;