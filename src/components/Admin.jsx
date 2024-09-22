import ProductAdmin from "./ProductAdmin";
import { Link } from "react-router-dom";

const CreateProduct = () => {
    return ( 
    <div className="w-[87%] m-auto">
       <div className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Список товаров
        </div>
        <Link to="/CreateProduct">Добавть товар</Link>
        <Link>Вывести средства</Link>
<ProductAdmin/>
    </div> 
    );
}
 
export default CreateProduct;