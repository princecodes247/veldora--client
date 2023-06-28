import Lottie, { Action, InteractivityProps, LottiePlayer, useLottie } from "lottie-react";
import { LegacyRef, useEffect, useRef } from "react";

export default function AnimatedIcon({lottieFile, isPlaying, className}:{lottieFile: any; isPlaying?:boolean; className?: string}) {
  
  const options = {
    animationData: lottieFile,
    loop: false,
    autoplay: false,
    className
    
  };

  const { View, play, stop } = useLottie(options);

    const handleHover = () => {
    // Perform some action when hovered
    play()
  };
   const handleLeave = () => {
    // Perform some action when hovered
    stop()
  };

  useEffect(() => {
    if (isPlaying) {
        handleHover()
    } else {
        handleLeave()
    }
  }, [isPlaying])


  return <div>
      {View}
    </div>

};