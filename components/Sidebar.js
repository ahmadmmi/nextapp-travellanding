import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full w-2/12 sm:w-1/12 justify-between items-center'>
      <Image
        src={"/braga.png"}
        alt='home'
        width={"100"}
        height={"100"}
        className='mt-5 sm:mt-10 w-[50px] sm:w-[100px]'
      />

      <div className='border-x-4 border-white h-52 sm:h-80'></div>

      <div className='flex flex-col justify-around items-center space-y-10 mb-8 md:mb-20'>
        <Image
          src={"/twitter.png"}
          alt='twitter'
          width={"60"}
          height={"60"}
          className=''
        />
        <Image
          src={"/facebook.png"}
          alt='facebook'
          width={"20"}
          height={"20"}
          className=''
        />
        <Image
          src={"/instagram.png"}
          alt='instagram'
          width={"35"}
          height={"35"}
          className=''
        />
        <Image
          src={"/youtube.png"}
          alt='youtube'
          width={"35"}
          height={"35"}
          className=''
        />
      </div>
    </div>
  );
};

export default Sidebar;
