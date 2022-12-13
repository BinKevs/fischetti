import aroundTheWorld from "../assets/aroundTheWorldWithBG.jpg";
import aroundTheWorldWithBG2 from "../assets/aroundTheWorldWithBG2.jpg";
import { Outlet, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hotAugustBook from "../assets/hotAugustBook.jpeg";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
function Book() {
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
        swipeable={true}
      >
        {/* autoPlay={true} */}
        <div className=" relative md:mt-[88px] mt-[82px]">
          <img
            className="h-full"
            src="https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg"
            alt=""
          />
          <div className="mx-auto max-w-[60%] absolute top-[65%] -translate-x-1/2 -translate-y-[65%] left-1/2">
            <div className="border-2">
              <div className="text-left   text-white font-bold text-4xl p-4 ">
                <span className="backdrop-blur-lg">Big Train's Backyard</span>
              </div>
              <div className="border-2">
                <img className="max-w-[70%]" src={hotAugustBook} alt="" />
              </div>
              <div className="space-y-4 text-white mx-auto">
                <div className="rounded-lg text-lg px-5 md:py-2.5 py-3.5 mx-auto">
                  <div className="backdrop-blur-lg">
                    A Great Baseball Story - "Big Train's Backyard" transports
                    you to a hot July pennant race where veteran former all-star
                    3rd baseman, Alex Santucci, is playing for the Kansas City
                    Crowns.
                    <Link
                      to="reviews"
                      className="text-white underline flex justify-center my-4"
                    >
                      Read More{" "}
                      <IconContext.Provider
                        value={{
                          size: "2.1em",
                        }}
                      >
                        <AiOutlineRight />
                      </IconContext.Provider>
                    </Link>
                  </div>
                  <div className=" bg-white max-w-[250px] my-2 p-2 rounded-xl hover:bg-[#FF9900] mx-auto">
                    <div className="text-xs font-semibold text-black">
                      BUY "HOT IN AUGUST"
                    </div>
                    <a
                      href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                      target="_blank"
                      class="outline-none text-white font-medium text-md"
                      rel="noreferrer"
                    >
                      <img
                        className="pt-2 "
                        src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="h-screen"
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701940582.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
            className="h-screen"
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701940582.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* <div className="xl:h-screen h-full bg-black relative flex font-Montserrat">
        <div className=" pt-[110px] pb-[30px] m-auto text-white w-[80%] space-y-6">
          <div className="text-5xl font-bold md:hidden block ">
            <Typewriter
              options={{
                strings: [
                  "Around The World In Five Lines",
                  "By James B. Anstead",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex flex-col xl:flex-row">
            <Carousel showStatus={false} showArrows={false} autoPlay={true}>
              <div className=" ">
                <img className="max-w-[1600px]" src={aroundTheWorld} alt="" />
              </div>
              <div className="">
                <img
                  className="max-w-[1600px]"
                  src={aroundTheWorldWithBG2}
                  alt=""
                />
              </div>
            </Carousel>

            <div className="md:text-xl text-sm md:space-y-1 space-y-3 flex flex-col justify-evenly  md:ml-16 ">
              <div className="text-5xl font-bold md:block hidden">
                <Typewriter
                  options={{
                    strings: [
                      "Around The World In Five Lines",
                      "By James B. Anstead",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="font-light">Released Date: April 7, 2021</div>
              <div className="font-medium">
                Around the World in Five Lines is a fun and whimsical collection
                of limericks inspired by countries all over the world! An avid
                traveler and dreamer, author James B. Anstead brings to us this
                fun and silly collection of fascination with the limerick and
                its special wordplay. Enjoy!
              </div>
              <div className=" text-gray-400">
                BUY "Around The World In Five Lines"
              </div>
              <a
                href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                target="_blank"
                class="focus:outline-none text-white bg-[white] hover:bg-[#FF9900] font-medium rounded-lg text-md px-5 md:py-2.5 py-3.5 max-w-[220px]"
              >
                <img
                  className="pt-2 "
                  src="https://jamesanstead.com/wp-content/uploads/2021/02/580b57fcd9996e24bc43c518-1-300x60.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Book;
