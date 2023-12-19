import Image from "next/image";
import Post from "@/components/Post";

const Content = () => {
  return (
    <div className='flex flex-col md:flex-row justify justify-between items-center h-full mb-4 md:mb-16'>
      {/* left content */}
      <div className='flex flex-col space-y-2 w-full md:w-2/5 h-full justify-between items-center pl-2 md:pl-20'>
        <div className='hidden md:flex justify-end w-full mr-10'>
          <div className='flex-col space-y-6'>
            <div className='flex space-x-6'>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
            </div>
            <div className='flex space-x-6'>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
            </div>
            <div className='flex space-x-6'>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
            </div>
            <div className='flex space-x-6'>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
              <div className='border rounded-full w-2 h-2 bg-white'></div>
            </div>
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <p className='text-4xl md:text-6xl font-bold'>EXPLORE DREAM</p>
        </div>
        <div className='flex justify-start w-full'>
          <p className='text-4xl md:text-6xl font-semibold'>DESTINATION</p>
        </div>
        <div className='flex justify-start w-full'>
          <div className='flex justify-start w-4/6'>
            <p className='text-xs md:text-lg italic'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className='flex w-full items-center justify-between'>
          <button className='flex justify-center space-x-6 items-center p-4 bg-[#00605f] w-1/2 h-10 md:h-20'>
            <p className='text-md md:text-xl font-bold'>BOOK NOW</p>
            <div className='hidden md:flex border rounded-full p-2 bg-white'>
              <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
            </div>
          </button>
          <div className='hidden md:flex w-1/2 justify-center items-center'>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
          </div>
        </div>
      </div>
      {/* right content */}
      <div className='flex flex-col w-full md:w-3/5 h-full justify-between pl-2 md:pl-20 pr-2 md:pr-20 mt-4 md:mt-0'>
        <div className='hidden md:flex justify-end items-center space-x-2 mt-32'>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
        </div>

        <Post />
      </div>
    </div>
  );
};

export default Content;
