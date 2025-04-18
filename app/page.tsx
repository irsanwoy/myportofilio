import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import Particles from "./components/Particles/Particles";

export default function Home() {
  return (
    
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="container border mx-auto h-screen
        style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
      ">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">I'm Ready For Jobs</h1>
              <RotatingText
                texts={["Tech Generalist", "Fast Learner", "Flexible Developer", "IT All-Rounder"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 
                justify-center rounded-lg text-2xl font-bold inline-flex transition-all duration-300 ease-in-out"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <div>
            <SplitText
              text="Hello, I'm Muhammad Irsan"
              className="text-2xl font-semibold text-start"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
                />
            </div>
            <div>
            <SplitText
              text="I'm FULL SPECTRUM IT SPECIALIST"
              className="text-2xl font-semibold text-start text-[#C6F10E]"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
                />
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
