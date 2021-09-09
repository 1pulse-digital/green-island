import Lottie from "lottie-react";
import homeopathAnimation from "./homeopathAnimation.json";
 
export const MedicalAnimation = () => {
  return (
  <div className={""}>
     <Lottie className={"w-96"} animationData={homeopathAnimation} />
     </div>)
};