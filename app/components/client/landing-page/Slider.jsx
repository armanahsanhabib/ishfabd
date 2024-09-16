const Slider = () => {
  return (
    <div className="slider my-3 sm:my-4 md:my-6">
      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        <div className="item flex h-[250px] w-full flex-col items-center justify-center gap-3 rounded-lg bg-gradient-radial from-gray-50 to-green-100 text-center shadow-inner sm:h-[450px]">
          <h1 className={`text-3xl font-bold text-gray-800 sm:text-5xl`}>
            আপনাকে <span className="text-red-600">ইশ'ফা বিডি ডট কম</span>-এ
            স্বাগত!
          </h1>
          <p className={`font-medium text-gray-800 sm:text-xl`}>
            এখানে পাবেন দেশি-বিদেশী সকল ধরণের ড্রাই ফ্রুটস, মধু এবং ভেষজ পণ্য!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
