import { LegacyRef, useRef, useState } from "react";
import AnimatedIcon from "./AnimatedIcon";
import { FeatureData } from "@/interfaces";



const FeatureCard = ({feature}:{feature: FeatureData}) => {
const [isPlaying, setIsPlaying] = useState(false)
const handleHoverOutside = () => {
  setIsPlaying(true)
}

const handleLeaveOutside = () => {
  setIsPlaying(false)
}

  return <div onMouseEnter={handleHoverOutside} onMouseLeave={handleLeaveOutside} className="mt-4">
                  <AnimatedIcon isPlaying={isPlaying} className="w-10" lottieFile={feature.icon} />
                  <h4 className="mb-2 text-lg md:text-lg">{feature.title}</h4>
                  <p className="max-w-[400px] text-sm text-gray-300">{feature.description}</p>
                </div>
  

};

export default FeatureCard;