const MainPage = () => {
  return (
    <div className="h-screen relative w-[87%] m-auto">
      <div className=" h-full left-0 top-0 absolute " />
      <div className=" text-[#363636] text-[7vw] font-bold w-7/12 mt-20">
        LOREM IPSUM ODOR AMET, CONSECTETUER
      </div>
      <div />
      <button className="ml-[40%] w-2.5/12 text-white text-[2vw] bg-[#FF8900] py-5 px-7 hover:bg-[#ff6a00] hover:scale-[1.01] transition-all duration-200">
        Открыть каталог
      </button>
      <div className="w-[3%] h-[5%] left-[92.5%] top-[35%] absolute transition-colors hover:bg-[#ff5a00]/50">
        <button className="w-full h-full left-0 top-0 absolute bg-[#ff8800]/50" />
        <img
          src="/arrowRight.svg"
          className="absolute top-1 left-3.5"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default MainPage;
