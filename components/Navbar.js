import Image from "next/image";

const Navbar = () => {
  return (
    <div className='flex h-[80px] md:h-[175px] items-center justify-between'>
      <div className='flex justify-between ml-0 md:ml-20 space-x-2 md:space-x-28 text-white text-sm md:text-xl font-semibold'>
        <p className='m-2'>Home</p>
        <p className='m-2'>Destination</p>
        <p className='m-2'>Contact Us</p>
        <p className='m-2'>Blog</p>
      </div>
      <div className='flex justify-end items-center'>
        <input className='text-black rounded-full hidden md:flex md:w-[400px] h-[65px] mr-14'></input>
        <div className='flex justify-start items-center bg-[#00605f] w-[70px] md:w-[275px] h-[35px] md:h-[75px] rounded-l-full'>
          <Image
            src={"/profil-trans.png"}
            alt='profil'
            width={"50"}
            height={"50"}
            className='ml-4 sm:ml-6 rounded-full border border-white p-1 w-[25px] md:w-[50px]'
          />
          <p className='hidden md:flex ml-1 md:ml-6 text-xs md:text-xl font-semibold'>
            Log In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
