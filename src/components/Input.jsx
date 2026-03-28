import { useLocation } from "react-router-dom";

const Input = ({ label, type, placeholder, name, register, errors }) => {
  const location = useLocation();
  return (
    <div className="w-full">
      <div className="relative w-full font-rubik mt-[22px]">
        <label className="absolute opacity-95 text-[13px] text-[#6C25FF] -top-2 left-[11px] bg-[#f7f8f9] px-2">
          {label}
          {name === "company" || location.pathname === "/signin" ? (
            ""
          ) : (
            <span className="text-[#DD4A3D]">*</span>
          )}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(
            name,
            name !== "company" ? { required: `${label} is required` } : {},
          )}
          className="w-full p-[11px] outline-none text-sm rounded-[7px] border-[1.9px] border-[#CBCBCB] focus:bg-transparent placeholder-[#919191]"
        />
        {errors[name] && (
          <p className="text-red-600 text-[13px] mt-1 ms-[3px]">
            {errors[name].message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
