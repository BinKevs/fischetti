import aroundTheWorldVideo from "../assets/spaceEarthTemplate.mp4";
import HollywoodBookReviewLogo from "../assets/HollywoodBookReviewLogo.png";
import authorJames from "../assets/authorJamesRemoveBg.png";
import { Outlet, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import hotAugustBook from "../assets/hotAugustBook.jpeg";
import safetyBook from "../assets/safetyBook.jpeg";
import prettyPleaseBook from "../assets/prettyPleaseBook.jpeg";
import paulCollectionImages from "../assets/paulCollectionImages.jpg";
import amazonCom from "../assets/amazonCom.png";
function Landing() {
  return (
    <>
      <div className="hidden h-full bg-[url('https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg')] md:mt-[88px] mt-[82px] bg-no-repeat bg-cover flex">
        <div className="my-[10%] mx-auto !w-[80%] ">
          <div className="flex flex-wrap justify-center lg:space-y-0 space-y-8">
            <div className="mx-auto max-w-[450px] ">
              <div className="backdrop-blur-lg  ">
                <div className="text-left  text-white font-bold md:text-4xl text-2xl p-4">
                  HOT IN AUGUST
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] mx-auto"
                  src={hotAugustBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div>
                      A Great Baseball Story - "Big Train's Backyard" transports
                      you to a hot July pennant race where veteran former
                      all-star 3rd baseman ...
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900] lg:mx-auto mx-0">
                      <div className="text-xs font-semibold text-black">
                        BUY "HOT IN AUGUST"
                      </div>
                      <a
                        href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                        target="_blank"
                        class="outline-none text-white font-medium text-md "
                        rel="noreferrer"
                      >
                        <img className="pt-2 " src={amazonCom} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[450px] ">
              <div className="backdrop-blur-lg ">
                <div className="text-left  text-white font-bold md:text-4xl text-2xl p-4">
                  THE SAFETY BOOK
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] mx-auto"
                  src={safetyBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div>
                      The murder of Washington All-Pro Safety Sean Taylor in
                      2007 devastates Guy Finelli at the age of thirteen,
                      dreaming to become a football athlete like Taylor.
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900] lg:mx-auto mx-0">
                      <div className="text-xs font-semibold text-black">
                        BUY "THE SAFETY BOOK"
                      </div>
                      <a
                        href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                        target="_blank"
                        class="outline-none text-white font-medium text-md "
                        rel="noreferrer"
                      >
                        <img className="pt-2 " src={amazonCom} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[450px] ">
              <div className="backdrop-blur-lg  ">
                <div className="text-left  text-white font-bold md:text-4xl text-2xl p-4">
                  Miss Pretty Please
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] mx-auto"
                  src={prettyPleaseBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div>
                      While celebrating her fifteenth birthday, Annie Finelli, a
                      girl ahead of her age in smarts, talent, and maturity,
                      again meets Russell ...
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900] lg:mx-auto mx-0">
                      <div className="text-xs font-semibold text-black">
                        BUY "PRETTY PLEASE"
                      </div>
                      <a
                        href="https://www.amazon.com/Around-World-Lines-James-Anstead-ebook/dp/B09FRY2XMD/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1617999145&sr=1-1"
                        target="_blank"
                        class="outline-none text-white font-medium text-md "
                        rel="noreferrer"
                      >
                        <img className="pt-2 " src={amazonCom} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black md:mt-[88px]">
        <div className="text-white w-[75%] mx-auto pt-[80px]">
          <div className="flex md:flex-row flex-col space-x-8">
            <div className=" md:min-w-[600px]  max-w-[380px] mx-auto">
              <img
                className="shadow-lg shadow-white/60"
                src={paulCollectionImages}
                alt=""
              />
            </div>
            <div className=" md:min-w-[380px] min-w-[180px] max-w-[380px] mx-auto">
              <img
                className="shadow-lg shadow-white/60"
                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/jrp2e8rjck0vf86if1boqanc2f._SX450_.jpg"
                alt=""
              />
            </div>
            <div className="md:text-lg sm:text-sm text-lg md:text-start text-center flex flex-col justify-center">
              <div className="lg:text-4xl md:text-2xl pb-4 font-semibold">
                Paul Edmund Fischetti
              </div>
              <div className="text-justify">
                P. E. Fischetti, born and raised in the suburbs of Washington
                DC, attended Walter Johnson High School and the University of
                Maryland, where he earned a B.A. in Criminology and a M.S. in
                Marriage and Family Therapy. He currently lives in Silver
                Spring, MD with his wife of 34 years. They have two young adult
                children who live locally.
              </div>
              <Link to="reviews" className="text-lg my-6 text-white flex">
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
          </div>
        </div>

        <div className="w-[75%] mx-auto">
          <div className="grid grid-cols-2 space-x-16">
            <div className="">
              <div className="py-20 uppercase text-white text-3xl font-semibold">
                Sample
              </div>
              <div className="text-gray-400 text-md text-justify">
                Limericks have long held a spot in the hearts of children and
                adults alike for their playful themes and strict structure,
                which makes them all the more joyful to read, and poet James B.
                Anstead’s collection is no exception. Anstead’s collection of
                limericks, titled Around the World in Five Lines, is a fun and
                funny assembly.
              </div>
              <Link to="reviews" className="text-lg py-20 text-white flex ">
                Read More{" "}
                <IconContext.Provider
                  value={{
                    size: "1.8em",
                  }}
                >
                  <AiOutlineRight />
                </IconContext.Provider>
              </Link>
            </div>
            <div className="">
              <div className="py-20 uppercase text-white text-3xl font-semibold">
                Sample
              </div>
              <div className="text-gray-400 text-md text-justify">
                Limericks have long held a spot in the hearts of children and
                adults alike for their playful themes and strict structure,
                which makes them all the more joyful to read, and poet James B.
                Anstead’s collection is no exception. Anstead’s collection of
                limericks, titled Around the World in Five Lines, is a fun and
                funny assembly.
              </div>
              <Link to="reviews" className="text-lg py-20 text-white flex ">
                Read More{" "}
                <IconContext.Provider
                  value={{
                    size: "1.8em",
                  }}
                >
                  <AiOutlineRight />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
