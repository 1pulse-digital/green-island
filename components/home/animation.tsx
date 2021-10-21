import Lottie from "lottie-react";
import homeopathAnimation from "./homeopathAnimation.json";
 
export const MedicalAnimation = () => {
  return (
  <div>
     <Lottie className={"w-96 mt-40 sm:mt-0"} animationData={homeopathAnimation} />
     </div>)
};