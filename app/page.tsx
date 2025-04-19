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
import Mansory from  "./components/Masonry/Masonry";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";
import { useState } from "react";





const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C/C++", "Java", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "REST API", "OGL (WebGL)"],
  },
  {
    title: "UI/UX & Design Tools",
    skills: ["Figma", "Canva", "Responsive Design", "CSS Animation", "Custom Shader UI"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "VS Code", "npm / yarn", "Vite", "Postman"],
  },
  {
    title: "Computer Science Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Networking Basics",
      "Database Design",
      "Artificial Intelligence",
    ],
  },
  {
    title: "Office & Productivity",
    skills: ["Microsoft Excel", "Word", "PowerPoint", "Google Workspace"],
  },
];

const data = [
  { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
  { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
  { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
  { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
  { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
  { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
  { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
  { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
  { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
  { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 400 }
];

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Certificate", href: "#certificate" },
  { label: "Skill", href: "#skill" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

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
        return (
          <div className="section">
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
                  <div key="2" className="p-4 text-sm text-gray-700">
                    Catatan tambahan
                  </div>,
                  <div key="3" className="p-4 text-sm text-gray-700">
                    Informasi lainnya
                  </div>,
                ]}
              />
            </section>
          </div>
        );
      case "certificate":
        return <div className="section">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl">
              <Mansory data={data} />
            </div>
          </div>
        </div>;
      case "skill":
        return <div className="section">
         <section id="skill" className="py-16 px-4 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">
        💡 My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <SpotlightCard
            key={category.title}
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
                {category.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
        </div>;
      case "gallery":
        return (
          <div className="section">
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-full max-w-5xl">
                <CircularGallery
                  images={[
                    "https://picsum.photos/id/10/200/300",
                    "https://picsum.photos/id/14/200/300",
                    "https://picsum.photos/id/15/200/300",
                    "https://picsum.photos/id/16/200/300",
                    "https://picsum.photos/id/17/200/300",
                    "https://picsum.photos/id/19/200/300",
                  ]}
                />
              </div>
            </div>
          </div>
        );
      case "contact":
        return <div className="section">
          <div className="section min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        📬 Contact Me
      </h2>

      <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        Got a project, opportunity, or just want to say hi? Let’s connect!
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Pesan berhasil dikirim! (belum terhubung ke backend)");
          // Di sini kamu bisa hubungkan ke EmailJS atau Formspree
          setName("");
          setEmail("");
          setMessage("");
        }}
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Nama"
          className="w-full p-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Pesan"
          className="w-full p-3 h-32 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
          <div className="text-center space-y-4">
  <p className="text-lg text-gray-700 dark:text-gray-300">
    Got a project, opportunity, or just want to say hi? Let’s connect!
  </p>
  <div className="space-y-2">
    <p>
      📧 Email: <a href="mailto:irsan.dev@example.com" className="text-blue-500 hover:underline">irsan.dev@example.com</a>
    </p>
    <p>
      🔗 LinkedIn: <a href="https://linkedin.com/in/muhammadirsan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/muhammadirsan</a>
    </p>
    <p>
      💻 GitHub: <a href="https://github.com/irsan-dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/irsan-dev</a>
    </p>
  </div>
</div>

        </div>;
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
