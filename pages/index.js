import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <main className='font-sans'>
      <Image
        src={"/home-bg.jpg"}
        alt='home-bg'
        className='object-cover object-center absolute -z-10'
        fill
      />
      <div className='flex bg-gradient-to-t from-[#014755]'>
        <div className='border flex flex-col h-screen w-1/12 justify-between items-center'>
          <Image
            src={"/airplane.png"}
            alt='home'
            width={"200"}
            height={"200"}
            className='mt-10'
          />
          <div>Garis</div>

          <div className='flex flex-col justify-around items-center space-y-10 mb-10'>
            <Image
              src={"/twitter.png"}
              alt='twitter'
              width={"70"}
              height={"70"}
              className=''
            />
            <Image
              src={"/facebook.png"}
              alt='facebook'
              width={"25"}
              height={"25"}
              className=''
            />
            <Image
              src={"/instagram.png"}
              alt='instagram'
              width={"50"}
              height={"50"}
              className=''
            />
            <Image
              src={"/youtube.png"}
              alt='youtube'
              width={"50"}
              height={"50"}
              className=''
            />
          </div>
        </div>
        <div className='flex flex-col w-full '>
          <div className='border flex h-32 items-center justify-between'>
            <div className='flex justify-around space-x-20 text-white text-md font-normal'>
              <p className='m-2 ml-10'>Home</p>
              <p className='m-2'>Destination</p>
              <p className='m-2'>Contact Us</p>
              <p className='m-2'>Blog</p>
            </div>
            <div>Search</div>
            <div className='flex justify-start items-center bg-[#00605f] w-48 h-16 rounded-l-full'>
              <Image
                src={"/profil-trans.png"}
                alt='profil'
                width={"40"}
                height={"40"}
                className='ml-6 rounded-full border border-white p-1'
              />
              <p className='ml-8 text-md font-bold'>Log In</p>
            </div>
          </div>
          <div className='border flex w-full h-full items-center'>
            <div className='border flex flex-col w-2/5 h-full justify-between items-center'>
              <div>Shape</div>
              <div className='flex justify-start w-full'>
                <p className='text-9xl font-bold'>EXPLORE DREAM</p>
              </div>
              <div className='flex justify-start w-full'>
                <p className='text-6xl font-semibold'>DESTINATION</p>
              </div>
              <div className='flex justify-start w-full'>
                <div className='flex justify-start w-4/6'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for lorem ipsum will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
              <div className='flex'>
                <p>BOOK NOW</p>
                <p>Shape</p>
              </div>
            </div>
            <div className='border w-3/5 h-full'>Content 2</div>
          </div>
        </div>
      </div>
    </main>
  );
}
