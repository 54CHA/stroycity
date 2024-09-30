const PopularCategories = () => {
  return (
    <div className="bg-[#DFDFDF] pb-40 pt-20 z-0">
      <section className="w-[87%] m-auto">
        <h1 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20 pt-10 ">
          ПОПУЛЯРНЫЕ КАТЕГОРИИ
        </h1>
        <div className="relative z-0">
          <div className="w-full h-[800px] bg-white absolute top-0 left-0 z-0"></div>
          <div className="w-[95%] m-auto flex flex-wrap justify-between pt-20">
            <div className="relative z-10">
              <div className="w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <h2 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                МАТЕРИАЛЫ
              </h2>
            </div>
            <div className="relative z-10">
              <div className=" w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <h2 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
                ИНСТРУМЕНТЫ
              </h2>
            </div>
            <div className="relative z-10">
              <div className="w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <h2 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                САНТЕХНИКА
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
