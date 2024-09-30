import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Delivery = () => {
  return (
    <div className="bg-[#DFDFDF]">
      <div className=" relative w-[87%] m-auto ">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          Доставка и оплата
        </div>
        <div className="flex flex-col">
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[50px]">
            В компании "Строй сити" мы стремимся сделать процесс покупки
            строительных товаров максимально удобным для наших клиентов. Наша
            цель — обеспечить быструю и надежную доставку, а также предложить
            различные способы оплаты, чтобы каждый наш покупатель мог выбрать
            тот вариант, который подходит именно ему.
          </h2>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9">
            Мы осуществляем доставку с помощью надежной транспортной компании
            СДЭК. Вы можете не беспокоиться о сроках — доставка занимает всего
            1-5 рабочих дней в зависимости от вашего региона. Вы сможете
            отслеживать свой заказ на всем этапе его доставки, чтобы всегда быть
            в курсе его статуса.
          </h2>
          <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-20 ">
            Способы оплаты:
          </h>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[150px]">
            <p className="mb-5">
              <span className="font-medium">Онлайн-оплата:</span> Вы можете
              легко и безопасно оплатить свой заказ с помощью банковской карты
              на нашем сайте. Мы обеспечиваем высокую степень защиты ваших
              данных.
            </p>
            <p className="mb-5">
              <span className="font-medium">Банковский перевод:</span> Для
              крупных заказов доступны банковские переводы, что позволяет вам
              выполнить оплату в удобное для вас время.{" "}
            </p>
            <p className="mb-5">
              <span className="font-medium">Наложенный платеж:</span> Если вы
              предпочитаете оплачивать заказ при получении, мы предоставляем
              возможность наложенного платежа. Вы просто платите курьеру при
              доставке.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
