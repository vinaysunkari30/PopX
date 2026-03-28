import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import RadioInput from "../components/radioInput";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      agency: "Yes",
    },
  });
  const onSubmit = (data) => {
    navigate("/profile");
  };
  return (
    <div className="h-[100%] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[812px] bg-[#f7f8f9] w-[375px] border-2 border-slate-200 px-5 pt-10 pb-6 flex flex-col justify-between items-center rounded-sm"
      >
        <div className="font-rubik w-[335px]">
          <h1 className="text-black text-[#1D2226] w-[232px] text-[28px] font-medium mb-2">
            Create your PopX account
          </h1>
          <Input
            label="Full Name"
            name="name"
            type="text"
            register={register}
            errors={errors}
            placeholder="Marry Doe"
          />
          <Input
            label="Phone number"
            name="number"
            type="text"
            register={register}
            errors={errors}
            placeholder="Marry Doe"
          />
          <Input
            label="Email Address"
            name="email"
            type="text"
            register={register}
            errors={errors}
            placeholder="Marry Doe"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="Marry Doe"
          />
          <Input
            label="Company name"
            name="company"
            type="text"
            register={register}
            errors={errors}
            placeholder="Marry Doe"
          />
          <div className="mt-4 font-rubik flex flex-col ">
            <label className="opacity-95 text-[16px]">
              Are you an Agency?<span className="text-[#DD4A3D]">*</span>
            </label>
            <div className="flex gap-4 mt-1 flex items-center">
              <div className="flex gap-3">
                <RadioInput
                  type="radio"
                  value="Yes"
                  name="agency"
                  register={register}
                  errors={errors}
                />
                <RadioInput
                  type="radio"
                  value="No"
                  name="agency"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            {errors["agency"] && (
              <p className="text-red-600 text-[13px] mt-1 ms-[3px]">
                Please select an option
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            type="submit"
            className="cursor-pointer font-rubik rounded-[7px] p-3 w-full bg-[#6C25FF] text-white font-medium"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
