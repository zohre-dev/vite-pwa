import logoImg from "../public/assets/images/logo.png";

function App() {
  return (
    <main className="h-screen flex flex-col  items-center relative">
      <div className="w-full border border-blue-300 h-[150px] shadow-outerBoxShadow bg-gradient-to-r from-[#37B160] to-[#174B29]">
        <div className="h-full -mt-4  pt-8 flex flex-col items-center justify-center gap-[11px] shadow-innerBoxShadow">
          <span className="text-white text-xl">Hello</span>
          <span className="text-white">Welcome Back!</span>
        </div>
      </div>
      <div className="flex justify-center items-center w-[200px] h-[250px]">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="border border-blue-400 flex justify-center items-center absolute bottom-0 text-center">
        <div className="bg-[linear-gradient(344.1deg,#236F3D_29.16%,#43D575_121.36%)] h-full rounded-t-[50%] ">
          <div className="bg-[linear-gradient(344.1deg,#236F3D_29.16%,#43D575_121.36%)]  rounded-t-[50%] flex items-center flex-col mt-5 mx-4 px-[22px] shadow-[0px_-4px_11.3px_-1px_#FFFFFF40]">
            <span className="mt-[70px] mb-[55px] text-xl text-white">
              Login Page
            </span>
            <form className="flex flex-col">
              <input
                placeholder="Username"
                type="string"
                className="outline-none text-[15px] w-full pt-[13px] pb-[9px] border-r-0 border-l-0 border-t-0 border-b border-b-white bg-transparent text-white "
              />
              <input
                placeholder="Password"
                type="password"
                className="outline-none text-[15px]  pt-[13px] pb-[9px] border-r-0 border-l-0 border-t-0 border-b border-b-white bg-transparent text-white mt-[26px] mb-[53px]"
              />
              <button className="text-xl text-white py-[11px] px-[63px] bg-[#18433D] shadow-[0px_2px_2.1px_0px_#00000040] rounded-2xl">
                Login
              </button>
            </form>
            <span className="text-xs text-white mt-[79px]">
              Design in Fara LLC
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

// outer : box-shadow: 0px 16px 23.5px -1px #00000040;
//inner :  box-shadow: 0px 3px 9.4px -1px #1616157D;
//box-shadow: 0px -4px 11.3px var(--sds-size-blur-100) #FFFFFF40;
//shadow-[0px_-4px_11.3px_-1px_#FFFFFF40]

//background: linear-gradient(344.1deg, #236F3D 29.16%, #43D575 121.36%);
//background: linear-gradient(344.1deg, #236F3D 29.16%, #43D575 121.36%);
