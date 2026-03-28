const RadioInput = ({ type, name, value, register }) => {
  return (
    <div className="font-rubik flex flex-col px-1">
      <div className="flex gap-4 mt-2 flex items-center">
        <div className="flex gap-3">
          <label className="flex items-center text-[15px] gap-3 cursor-pointer">
            <input
              type={type}
              name={name}
              value={value}
              {...register(name, { required: true })}
              className="accent-[#6C25FF] w-5 h-5 cursor-pointer"
            />
            {value}
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
