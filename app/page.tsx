"use client";
import Particles from "./components/Particles/Particles";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Lanyard from "./components/Lanyard/Lanyard";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat"; // Komponen ini belum dipakai, pastikan kamu pakai atau hapus
import RotatingText from "./components/RotatingText/RotatingText";
import FallingText from "./components/FallingText/FallingText";
import Folder from "./components/Folder/Folder";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import { useState } from "react";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Certificate", href: "#certificate" },
  { label: "Skill", href: "#skill" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Me", href: "#contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <div className="w-full h-screen flex items-center justify-center relative">
              <div className="w-full px-4">
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              </div>
            </div>

            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <h1 className="text-white text-3xl text-center font-bold mb-4">
                My Name is Muhammad Irsan
              </h1>
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-2">
                  <h1 className="text-xl text-white font-bold">I'm a</h1>
                  <RotatingText
                    texts={[
                      "Tech Generalist",
                      "Fast Learner",
                      "Flexible Developer",
                      "IT All-Rounder",
                    ]}
                    mainClassName="rotating-text"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="rotating-text-line"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </div>
            </AnimatedContent>
          </>
        );
      case "about":
        return (
          <div className="section relative z-50 overflow-visible min-h-screen pb-[500px] border border-red-500">
            <FallingText
              text={`I’m an Informatics student with a strong passion for technology and problem-solving. My interests and skills span across multiple IT domains, including web development, artificial-intelligence, networking, and office software proficiency. I enjoy learning new technologies and continuously improving my capabilities to adapt in various environments. With a solid foundation and a flexible mindset, I aim to contribute to innovative projects and grow in the dynamic world of information technology.`}
              highlightWords={[
                "Informatics",
                "problem-solving",
                "multiple",
                "including",
                "artificial-intelligence",
                "technologies",
                "networking",
                "innovative",
                "world",
              ]}
              // highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        );
      case "project":
        return <div className="section">
           <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16">
      <Folder
        color="#00d8ff"
        size={1.5}
        items={[
          <FallingText
            key="1"
            text="Klik untuk melihat animasi teks jatuh yang interaktif!"
            highlightWords={["animasi", "interaktif"]}
            trigger="auto"
            gravity={0.8}
            fontSize="0.9rem"
          />,
          <div key="2" className="p-4 text-sm text-gray-700">Catatan tambahan</div>,
          <div key="3" className="p-4 text-sm text-gray-700">Informasi lainnya</div>,
        ]}
      />
    </section>
        </div>;
      case "certificate":
        return <div className="section">Certificate</div>;
      case "skill":
        return <div className="section">Skill</div>;
      case "gallery":
        return <div className="section">
          <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>

        </div>;
      case "contact":
        return <div className="section">Contact</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen ">
      <Particles
        className="absolute inset-0 particles-container"
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 flex justify-center px-4 py-2">
        <div className="w-full max-w-5xl">
          <GooeyNav
            items={items}
            animationTime={600}
            particleCount={15}
            particleDistances={[42, 20]}
            particleR={75}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            timeVariance={300}
            onItemClick={(item) => {
              const section = item.label.toLowerCase().replace(/\s+/g, "");
              setActiveSection(section);
            }}
          />
        </div>
      </div>

      {/* Section Renderer */}
      <div className="relative z-10">{renderSection()}</div>
    </div>
  );
}

export default App;
