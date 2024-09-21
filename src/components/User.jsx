const User = () => {
  return (
    <div className="bg-[#DFDFDF] ">
      <div className="w-[87%] m-auto py-20">
        <div className="w-5.5/12 bg-white">
          <h1>Имя</h1>
          <img src="/avatar.png" alt="Аватар" />
          <h1>
            Телефон
            {"+7 999 999-99-99"}
          </h1>
          <a>Выйти</a>
        </div>
      </div>
    </div>
  );
};

export default User;
