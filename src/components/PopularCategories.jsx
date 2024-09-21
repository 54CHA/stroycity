const PopularCategories = () => {
  return (
    <div className="bg-[#DFDFDF] pb-40 pt-20 z-0">
      <div className="w-[87%] m-auto">
        <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20 pt-10 ">
          ПОПУЛЯРНЫЕ КАТЕГОРИИ
        </div>
        <div className="relative z-0">
          <div className="w-full h-[800px] bg-white absolute top-0 left-0 z-0"></div>
          <div className="w-[95%] m-auto flex flex-wrap justify-between pt-20">
            <div className="relative z-10">
              <div className="w-full sm:w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <p className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                МАТЕРИАЛЫ
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full sm:w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <p className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-Bebas-Neue">
                ИНСТРУМЕНТЫ
              </p>
            </div>
            <div className="relative z-10">
              <div className="w-full sm:w-[500px] h-[500px] bg-[#DFDFDF] z-5 relative mb-4 sm:mb-0" />
              <p className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                САНТЕХНИКА
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
