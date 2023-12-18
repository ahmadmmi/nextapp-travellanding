import Image from "next/image";

const Navbar = () => {
  return (
    <div className='flex h-[175px] items-center justify-between'>
      <div className='flex justify-between ml-4 space-x-28 text-white text-xl font-semibold'>
        <p className='m-2 ml-10'>Home</p>
        <p className='m-2'>Destination</p>
        <p className='m-2'>Contact Us</p>
        <p className='m-2'>Blog</p>
      </div>
      <div className='flex justify-end items-center'>
        <input className='text-black rounded-full w-[400px] h-[65px] mr-14'></input>
        <div className='flex justify-start items-center bg-[#00605f] w-[275px] h-[75px] rounded-l-full'>
          <Image
            src={"/profil-trans.png"}
            alt='profil'
            width={"50"}
            height={"50"}
            className='ml-6 rounded-full border border-white p-1'
          />
          <p className='ml-6 text-xl  font-semibold'>Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
