import Banner from "./components/Banner";
import imageOne from "./assets/image-1.png";
import imageTwo from "./assets/image-2.png";
import imageThree from "./assets/image-3.png";
import imageFour from "./assets/image-4.png";

const App = () => {
  return (
    <div className="bg-[#000811] min-h-screen w-full font-montserrat bg-circle-img relative overflow-hidden">
      <div className="size-[270px] bg-primary blur-3xl rounded-full absolute -top-44 -left-32 lg:-left-0"></div>
      <div className="size-[270px] bg-primary blur-3xl rounded-full absolute -bottom-10 -right-32 hidden lg:block"></div>
      <div className="max-w-[1440px] mx-auto px-5 flex justify-center items-center">
        <div className="h-full">
          <Banner />
          <div className="text-white grid grid-cols-4 gap-1 lg:gap-10 w-full lg:w-[750px] mx-auto">
            <div className="flex justify-center items-center flex-col gap-y-3 text-center">
              <img src={imageOne} alt="icon" className="size-6 lg:size-12" />
              <h5 className="text-[10px] lg:text-base">
                Up to 30% more conversions
              </h5>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-3 text-center">
              <img src={imageTwo} alt="icon" className="size-6 lg:size-12" />
              <h5 className="text-[10px] lg:text-base">
                Competitive <br /> Advantage
              </h5>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-3 text-center">
              <img src={imageThree} alt="icon" className="size-6 lg:size-12" />
              <h5 className="text-[10px] lg:text-base">
                GDRP <br /> Compliant
              </h5>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-3 text-center">
              <img src={imageFour} alt="icon" className="size-6 lg:size-12" />
              <h5 className="text-[10px] lg:text-base">
                Faster <br /> website
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
