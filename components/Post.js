import Image from "next/image";

const Post = () => {
  return (
    <div className='flex flex-wrap justify-between md:space-x-2'>
      <div className='flex flex-col w-[150px] h-[200px] md:w-[250px] md:h-[500px] justify-between bg-white m-2 md:m-0'>
        <Image
          src={"/postimage.jpg"}
          alt='postimage'
          width={"8000"}
          height={"5333"}
          className=''
        />
        <p className='text-gray-600 text-sm md:text-2xl font-bold mx-4'>
          Lorem Ipsum Dolor Sit Amet
        </p>
        <p className='hidden md:flex line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button className='flex justify-center space-x-6 items-center md:p-4 bg-[#00605f] md:m-4'>
          <p className='text-lg font-bold'>READ MORE</p>
          <div className='hidden md:flex border rounded-full p-2 bg-white'>
            <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
          </div>
        </button>
      </div>
      <div className='flex flex-col w-[150px] h-[200px] md:w-[250px] md:h-[500px] justify-between bg-white m-2 md:m-0'>
        <Image
          src={"/postimage.jpg"}
          alt='postimage'
          width={"8000"}
          height={"5333"}
          className=''
        />
        <p className='text-gray-600 text-sm md:text-2xl font-bold mx-4'>
          Lorem Ipsum Dolor Sit Amet
        </p>
        <p className='hidden md:flex line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button className='flex justify-center space-x-6 items-center md:p-4 bg-[#00605f] md:m-4'>
          <p className='text-lg font-bold'>READ MORE</p>
          <div className='hidden md:flex border rounded-full p-2 bg-white'>
            <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
          </div>
        </button>
      </div>
      <div className='flex flex-col w-[150px] h-[200px] md:w-[250px] md:h-[500px] justify-between bg-white m-2 md:m-0'>
        <Image
          src={"/postimage.jpg"}
          alt='postimage'
          width={"8000"}
          height={"5333"}
          className=''
        />
        <p className='text-gray-600 text-sm md:text-2xl font-bold mx-4'>
          Lorem Ipsum Dolor Sit Amet
        </p>
        <p className='hidden md:flex line-clamp-6 text-justify text-gray-400 text-xs h-full font-medium mx-4'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <button className='flex justify-center space-x-6 items-center md:p-4 bg-[#00605f] md:m-4'>
          <p className='text-lg font-bold'>READ MORE</p>
          <div className='hidden md:flex border rounded-full p-2 bg-white'>
            <div className='w-0 h-0 border-t-[7px] border-t-transparent border-l-[14px] border-l-[#00605f] border-b-[7px] border-b-transparent'></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Post;
