import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/profile");
  };
  return (
    <div className="h-[100%] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[812px] bg-[#f7f8f9] w-[375px] border-2 border-gray-200 px-5 pt-10 flex justify-center rounded-sm"
      >
        <div className="font-rubik w-[335px]">
          <h1 className="text-black text-[#1D2226] w-[232px] text-[28px] font-medium mb-2">
            Signin to your PopX account
          </h1>
          <p className="opacity-50 text-[18px] text-[#1D2226] w-[232px] h-[48px] mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Input
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            placeholder="Enter email address"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="Enter Password"
          />
          <div className="w-full flex justify-center mt-4">
            <button
              type="submit"
              className={`${isValid ? "bg-[#6C25FF]" : "bg-[#CBCBCB]"} cursor-pointer rounded-[7px] p-3 w-full text-white font-medium`}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
