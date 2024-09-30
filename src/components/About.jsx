import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="bg-[#DFDFDF]">
      <div className=" relative w-[87%] m-auto ">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          О Компании
        </div>
        <div className="flex flex-col">
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[50px]">
            Добро пожаловать в "Строй сити" — инновационный маркетплейс,
            созданный специально для удовлетворения потребностей строительной
            отрасли. Мы понимаем, как важно для наших клиентов находить
            качественные строительные материалы и инструменты, поэтому нашей
            главной целью является предложение максимально удобного и
            эффективного способа закупки.
          </h2>
          <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-10 ">
            Наша миссия
          </h>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9">
            Мы стремимся стать ведущей платформой для профессионалов и любителей
            строительства, предоставляя им доступ к широчайшему ассортименту
            товаров, от строительных материалов до специализированного
            оборудования. Наша миссия — сделать процесс выбора и покупки
            максимально простым и выгодным.
          </h2>
          <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-20 ">
            Наши ценности
          </h>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9">
            <p className="mb-5">
              <span className="font-medium">Качество:</span> Мы отбираем только
              проверенных производителей и высококачественные товары, чтобы наши
              клиенты могли быть уверены в надежности всего, что они покупают.
            </p>
            <p className="mb-5">
              <span className="font-medium"> Доступность: </span>
              Мы стремимся предложить конкурентные цены, чтобы каждый мог без
              труда найти нужные продукты, независимо от бюджета.
            </p>
            <p className="mb-5">
              <span className="font-medium">Удобство: </span> Наш интерфейс и
              система навигации разработаны с учетом потребностей пользователей,
              чтобы сделать процесс покупки максимально комфортным.
            </p>
            <p className="mb-5">
              <span className="font-medium">Поддержка клиентов:</span> Наша
              команда всегда готова помочь вам выбрать нужные товары,
              предоставить советы по их использованию или решить любые вопросы,
              которые могут возникнуть.
            </p>
          </h2>
          <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 mt-20 ">
            Почему выбирают "Строй сити"?
          </h>
          <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[150px]">
            <p className="mb-5">
              <span className="font-medium"> Широкий выбор: </span>
              Мы сотрудничаем с различными поставщиками и производителями, чтобы
              предложить нашим клиентам широкий спектр продуктов.
            </p>
            <p className="mb-5">
              <span className="font-medium">Безопасные покупки: </span> Мы
              гарантируем защиту ваших данных и безопасность сделок на нашей
              платформе.
            </p>
            <p className="mb-5">
              <span className="font-medium">Доставка:</span> Мы обеспечиваем
              быструю и надежную доставку по всей стране, так что вы можете быть
              уверены, что ваш заказ будет доставлен вовремя.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
