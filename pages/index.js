import Image from "next/image";
import { Montserrat } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className='font-sans'>
      {/* background */}
      <Image
        src={"/home-bg.jpg"}
        alt='home-bg'
        className='object-cover object-center absolute -z-10'
        fill
      />
      {/* background gradient */}
      <div className='flex bg-gradient-to-t from-[#014755] w-screen h-screen'>
        <Sidebar />
        <div className='flex flex-col w-10/12 sm:w-11/12 h-full'>
          <Navbar />
          <Content />
        </div>
      </div>
    </main>
  );
}
