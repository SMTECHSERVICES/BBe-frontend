
import video from "../../../assets/ai.mp4";

import hero3 from "../../../assets/videos/hero3.mp4";


const HiddenVideo = () => {
  return (

<section className="relative">

  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    <video
      src={hero3}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="hidden md:flex relative z-10 w-full h-[90vh] flex-col justify-center px-6 md:px-10">
    <div className="h-[50vh]">
   
    </div>
  </div>

  <div className="relative z-10 md:hidden h-[50vh] flex items-center px-6">
    <div className="max-w-xl text-white">
      
    </div>
  </div>

</section>


  );
};

export default HiddenVideo;

