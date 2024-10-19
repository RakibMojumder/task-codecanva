const Banner = () => {
  return (
    <div className="w-full lg:w-[900px] h-[calc(100vh_-_350px)] lg:h-[calc(100vh_-_150px)] text-white">
      <div className="flex flex-col justify-center items-center gap-y-4 h-full">
        <h3 className="text-primary text-lg lg:text-2xl">
          Tech meets Marketing
        </h3>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          <span className="text-primary">Bart Warrot</span> Professional Service
        </h1>
        <p className="lg:w-[700px] mx-auto text-center text-sm lg:text-base">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual{" "}
        </p>
        <button className="bg-primary text-white w-[180px] lg:w-[238px] py-2 rounded-lg lg:rounded-2xl text-xs lg:text-base">
          Book on Consultancy
        </button>
      </div>
    </div>
  );
};

export default Banner;
