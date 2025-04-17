import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
          <div className="container border mx-auto h-screen">
            <div className="grid grid-cols-12">
              <div className="col-span-6">A</div>
              <div className="col-span-6">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
    </div>
  );
}
