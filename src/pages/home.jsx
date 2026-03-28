import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100%] flex justify-center items-center">
      <div className="h-[812px] bg-[#f7f8f9] w-[375px] border-2 border-slate-200 px-3 py-6 flex justify-center items-end rounded-sm">
        <div className="py-3 font-rubik w-[335px]">
          <h1 className="text-black text-[#1D2226] w-[232px] text-[28px] font-medium">
            Welcome to PopX
          </h1>
          <p className="opacity-60 text-[16px] text-[#1D2226] w-[232px] h-[48px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Link to='/signup'>
            <button className="w-[335px] h-[46px] text-[16px] text-center text-white font-medium rounded-[6px] bg-[#6C25FF] cursor-pointer mb-3">
              Create Account
            </button>
          </Link>
          <Link to='/signin'>
            <button className="bg-[#6C25FF4B] text-[16px] w-[335px] h-[46px] text-center font-medium rounded-[6px] cursor-pointer">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
