import Image from "next/image";

const Navbar = () => {
  return (
    <div className='flex h-56 items-center justify-between'>
      <div className='flex justify-around ml-8 space-x-40 text-white text-2xl font-semibold'>
        <p className='m-2 ml-10'>Home</p>
        <p className='m-2'>Destination</p>
        <p className='m-2'>Contact Us</p>
        <p className='m-2'>Blog</p>
      </div>
      <div className='flex justify-end w-1/2 items-center'>
        <input className='text-black rounded-full w-[550px] h-20 mr-14'></input>
        <div className='flex justify-start items-center bg-[#00605f] w-80 h-24 rounded-l-full'>
          <Image
            src={"/profil-trans.png"}
            alt='profil'
            width={"70"}
            height={"70"}
            className='ml-8 rounded-full border border-white p-1'
          />
          <p className='ml-10 text-2xl  font-semibold'>Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
