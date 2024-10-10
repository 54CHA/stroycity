import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate("/catalog", { state: { selectedCategory: categoryId } });
  };

  return (
    <div className="bg-[#DFDFDF] pb-40 pt-20 z-0">
      <section className="w-[87%] m-auto">
        <h1 className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-20 pt-10 ">
          ПОПУЛЯРНЫЕ КАТЕГОРИИ
        </h1>
        <div className="relative z-0">
          <div className="m-auto flex flex-wrap justify-center gap-7 pt-20 pb-40 bg-white rounded-md">
            {/* Materials category */}
            <div className="z-10" onClick={() => handleCategoryClick("9")}>
              <img
                src="images/materials.jpg"
                alt="Material Image"
                className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] bg-[#DFDFDF] z-5 mb-4 rounded-xl hover:scale-[1.01] transition-all duration-200"
              />
              <h2 className="text-[#363636] text-3xl lg:text-5xl font-bold text-center">
                МАТЕРИАЛЫ
              </h2>
            </div>

            {/* Tools category */}
            <div className="z-10" onClick={() => handleCategoryClick("10")}>
              <img
                src="images/tools.jpg"
                alt="Instrument Image"
                className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] bg-[#DFDFDF] z-5 mb-4 rounded-xl hover:scale-[1.01] transition-all duration-200"
              />
              <h2 className="text-[#363636] text-3xl lg:text-5xl font-bold text-center">
                ИНСТРУМЕНТЫ
              </h2>
            </div>

            {/* Sanitary category */}
            <div className="z-10" onClick={() => handleCategoryClick("11")}>
              <img
                src="images/plumbing.jpg"
                alt="Sanitary Image"
                className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] bg-[#DFDFDF] z-5  mb-4 rounded-xl hover:scale-[1.01] transition-all duration-200"
              />
              <h2 className="text-[#363636] text-3xl lg:text-5xl font-bold text-center">
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
