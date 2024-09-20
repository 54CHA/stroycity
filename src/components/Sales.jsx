import ProductCard from "./ProductCard";

const Sales = () => {
  return (
    <>
      <div className="bg-[#DFDFDF] pb-40">
        <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 pt-10 w-[87%] m-auto">
          ТОВАРЫ СО СКИДКОЙ
        </div>
        <ProductCard />
      </div>
    </>
  );
};

export default Sales;
