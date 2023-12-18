import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen w-1/12 justify-between items-center'>
      <Image
        src={"/braga.png"}
        alt='home'
        width={"100"}
        height={"100"}
        className='mt-10'
      />

      <div className='border-x-4 border-white h-80'></div>

      <div className='flex flex-col justify-around items-center space-y-10 mb-12'>
        <Image
          src={"/twitter.png"}
          alt='twitter'
          width={"50"}
          height={"50"}
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
