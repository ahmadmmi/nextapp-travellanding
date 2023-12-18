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

      <div className='border-x-4 border-white h-96'></div>

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
  );
};

export default Sidebar;
