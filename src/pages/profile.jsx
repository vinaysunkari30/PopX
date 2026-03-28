
const Profile = () => {
  return (
    <div className="h-[100%] flex flex-col justify-between items-center">
      <div className="h-[812px] bg-[#f7f8f9] w-[375px] border-[1.9px] border-slate-200 flex flex-col justify-between">
        <div className="font-rubik pb-8 border-b-[1.5px] border-dashed border-[#CBCBCB]">
          <div className="w-full bg-white h-[68px] flex justify-start items-center px-3">
            <h1 className="text-black font-rubik text-[#1D2226] text-[21px] px-2 font-normal">
              Account Settings
            </h1>
          </div>
          <div className="flex">
            <div className="relative pt-7 px-5">
              <div>
                <img src="/profile.png" className="w-22" alt="profile" />
              </div>
              <div className="absolute bottom-1 left-22">
                <img src="/camera.png" className="w-6" alt="camera" />
              </div>
            </div>
            <div className="py-[23px] px-1">
              <h1 className="font-medium text-lg font-rubik mb-1">
                Marry Doe
              </h1>
              <p className="font-rubik text-md">
                Marry@Gmail.Com
              </p>
            </div>
          </div>
          <p className="ps-5 pr-2 font-rubik text-[14px] text-left text-[#1D2226] capitalize mt-7">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="border-t-[1.5px] border-dashed border-[#CBCBCB] mb-10"></div>
      </div>
    </div>
  );
};

export default Profile;
