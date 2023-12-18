import Image from "next/image";

const Content = () => {
  return (
    <div className='flex w-full h-full items-center'>
      {/* left content */}
      <div className='flex flex-col w-2/5 h-full justify-between items-center pl-20 pb-40'>
        <div className='flex justify-end w-full mt-10 mr-10'>
          <div className='flex-col space-y-8'>
            <div className='flex space-x-8'>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
            </div>
            <div className='flex space-x-8'>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
            </div>
            <div className='flex space-x-8'>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
            </div>
            <div className='flex space-x-8 '>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
              <div className='border rounded-full w-3 h-3 bg-white'></div>
            </div>
          </div>
        </div>
        <div className='flex justify-start w-full'>
          <p className='text-9xl font-bold'>EXPLORE DREAM</p>
        </div>
        <div className='flex justify-start w-full'>
          <p className='text-6xl font-semibold'>DESTINATION</p>
        </div>
        <div className='flex justify-start w-full'>
          <div className='flex justify-start w-4/6'>
            <p className='italic'>
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
        <div className='flex mb-10 w-full'>
          <button className='flex justify-center space-x-6 items-center p-4 bg-[#00605f] w-1/2 '>
            <p className='text-xl font-bold'>BOOK NOW</p>
            <div className=' border rounded-full p-2 bg-white'>
              <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
            </div>
          </button>
          <div className='flex w-1/2 justify-center items-center'>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
            <div className='w-0 h-0 border-t-[15px] border-t-transparent border-r-[30px] border-r-white border-b-[15px] border-b-transparent'></div>
          </div>
        </div>
      </div>
      {/* right content */}
      <div className='flex flex-col w-3/5 h-full justify-between pl-20 pr-20 pb-40'>
        <div className='flex justify-end items-end mr-6 mb-14 space-x-2 h-[220px]'>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
          <div className='w-0 h-0 border-t-[20px] border-t-transparent border-r-[40px] border-r-white border-b-[20px] border-b-transparent'></div>
        </div>

        {/* post */}
        <div className='flex justify-between'>
          <div className='flex flex-col w-[365px] h-[700px] justify-between bg-white'>
            <Image
              src={"/postimage.jpg"}
              alt='postimage'
              width={"8000"}
              height={"5333"}
              className=''
            />
            <p className='text-gray-600 text-2xl font-bold mx-4'>
              Lorem Ipsum Dolor Sit Amet
            </p>
            <p className='line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
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
            <button className='flex justify-center space-x-6 items-center p-4 bg-[#00605f] m-4'>
              <p className='text-lg font-bold'>READ MORE</p>
              <div className=' border rounded-full p-2 bg-white'>
                <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
              </div>
            </button>
          </div>
          <div className='flex flex-col w-[365px] h-[700px] justify-between bg-white'>
            <Image
              src={"/postimage.jpg"}
              alt='postimage'
              width={"8000"}
              height={"5333"}
              className=''
            />
            <p className='text-gray-600 text-2xl font-bold mx-4'>
              Lorem Ipsum Dolor Sit Amet
            </p>
            <p className='line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
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
            <button className='flex justify-center space-x-6 items-center p-4 bg-[#00605f] m-4'>
              <p className='text-lg font-bold'>READ MORE</p>
              <div className=' border rounded-full p-2 bg-white'>
                <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
              </div>
            </button>
          </div>
          <div className='flex flex-col w-[365px] h-[700px] justify-between bg-white'>
            <Image
              src={"/postimage.jpg"}
              alt='postimage'
              width={"8000"}
              height={"5333"}
              className=''
            />
            <p className='text-gray-600 text-2xl font-bold mx-4'>
              Lorem Ipsum Dolor Sit Amet
            </p>
            <p className='line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
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
            <button className='flex justify-center space-x-6 items-center p-4 bg-[#00605f] m-4'>
              <p className='text-lg font-bold'>READ MORE</p>
              <div className=' border rounded-full p-2 bg-white'>
                <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;