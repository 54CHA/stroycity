import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Что такое "Строй сити"?',
      answer:
        "Строй Сити — это онлайн-платформа, предлагающая широкий выбор строительных товаров и услуг.",
    },
    {
      question: "Как осуществляется доставка?",
      answer:
        "Мы предлагаем доставку по всей России через наши партнерские службы доставки.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем оплату картами Visa, Mastercard, и электронные кошельки.",
    },
    {
      question: "Предоставляете ли вы гарантии на товары?",
      answer:
        "Да, мы предоставляем гарантию на все товары в течение 12 месяцев.",
    },
    {
      question: "Как мне связаться с вашей службой поддержки?",
      answer:
        "Вы можете связаться с нами по телефону или через электронную почту support@stroysiti.ru.",
    },
    {
      question: "Как я могу вернуть товар, если он мне не подошел?",
      answer:
        "Вы можете вернуть товар в течение 30 дней с момента покупки, если товар не был использован.",
    },
    {
      question: "Могу ли я стать поставщиком на платформе 'Строй сити'?",
      answer:
        "Да, для этого вы можете заполнить заявку на нашем сайте в разделе 'Поставщикам'.",
    },
  ];

  return (
    <div className="bg-[#DFDFDF] pb-20 ">
      <div className=" relative w-[87%] m-auto">
        <div className="flex items-center text-[18px] pt-[4rem] mb-10">
          <span className="text-gray-400">Главная </span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-400 mx-1"
          />{" "}
          Вопросы и ответы
        </div>
        <h1 className="text-center text-4xl xl:text-5xl  font-bold mb-6">
          Ответы на часто задаваемые вопросы
        </h1>
        <div className="w-full max-w-4xl mx-auto mt-[50px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-500 mb-8">
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-medium bg-[#DFDFDF] text-gray-500 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-orange-500 text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#DFDFDF] text-gray-500">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="bg-[#DFDFDF]">
    //   <div className=" relative w-[87%] m-auto ">
    //     <div className="flex items-center text-[18px] pt-[4rem] mb-10">
    //       <span className="text-gray-400">Главная </span>
    //       <FontAwesomeIcon
    //         icon={faArrowRight}
    //         className="text-gray-400 mx-1"
    //       />{" "}
    //       Вопросы и ответы
    //     </div>
    //     <div className="flex flex-col ">
    //       <h className="text-[#363636] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-10 text-center">
    //         Ответы на часто-задаваемые вопросы
    //       </h>
    //       <h2 className="text-base lg:text-[35px] font-normal text-[#363636] leading-9 mb-[150px]">
    //         Нужен текст к каждому вопросу
    //       </h2>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FAQ;
