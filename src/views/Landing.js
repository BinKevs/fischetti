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
function Landing() {
  return (
    <>
      {/* <div className=" h-screen  bg-black relative"></div> */}
      <div className="h-screen bg-[url('https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg')] md:mt-[88px] mt-[82px] bg-no-repeat bg-cover flex">
        <div className="m-auto !w-[80%] ">
          <div className="text-white text-7xl pl-4 backdrop-blur-lg w-[40%]">
            Paul Fischetti
          </div>
          <div className="">
            <Carousel
              infiniteLoop={true}
              showStatus={false}
              showArrows={false}
              autoPlay={true}
              showIndicators={false}
              showThumbs={false}
            >
              <div className="mx-auto max-w-[600px] ">
                <div className="text-left backdrop-blur-lg  text-white font-bold text-5xl py-4">
                  HOT IN AUGUST
                </div>
                <img className="" src={hotAugustBook} alt="" />
                <div className="my-4 space-y-4 backdrop-blur-xl  w-[60%] mx-auto">
                  <div className="mx-auto  text-white max-w-[300px] my-auto text-xl font-semibold">
                    BUY "HOT IN AUGUST"
                  </div>
                  <div className="bg-[white] hover:bg-[#FF9900] rounded-lg px-5 md:py-2.5 py-3.5 max-w-[200px] mx-auto">
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
              <div className="mx-auto max-w-[600px] ">
                <div className="text-left backdrop-blur-lg text-white font-bold text-5xl py-4">
                  THE SAFETY BOOK
                </div>
                <img className="" src={safetyBook} alt="" />
                <div className="my-4 space-y-4 backdrop-blur-xl  w-[60%] mx-auto">
                  <div className="mx-auto text-white max-w-[300px] my-auto text-xl font-semibold">
                    BUY "THE SAFETY BOOK"
                  </div>
                  <div className="bg-[white] hover:bg-[#FF9900] rounded-lg px-5 md:py-2.5 py-3.5 max-w-[200px] mx-auto">
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
              <div className="mx-auto max-w-[600px] ">
                <div className="text-left backdrop-blur-lg text-white font-bold text-5xl py-4">
                  PRETTY PLEASE
                </div>
                <img className="" src={prettyPleaseBook} alt="" />
                <div className="my-4 space-y-4 backdrop-blur-xl  w-[60%] mx-auto">
                  <div className="mx-auto text-white max-w-[300px] my-auto text-xl font-semibold">
                    BUY "PRETTY PLEASE"
                  </div>
                  <div className="bg-[white] hover:bg-[#FF9900] rounded-lg px-5 md:py-2.5 py-3.5 max-w-[200px] mx-auto">
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
            </Carousel>
          </div>
        </div>
      </div>

      <div className=" bg-black">
        <div className="text-white w-[75%] mx-auto pt-[80px]">
          <div className="lg:text-7xl md:text-5xl text-4xl  pl-2 pb-4">
            Paul Edmund Fischetti
          </div>
          <div className="flex md:flex-row flex-col">
            <div className=" md:min-w-[380px] min-w-[180px] max-w-[380px] mx-auto">
              <img
                className=""
                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/jrp2e8rjck0vf86if1boqanc2f._SX450_.jpg"
                alt=""
              />
            </div>
            <div className="md:text-4xl sm:text-2xl text-lg md:text-start text-center flex flex-col justify-center">
              <div className="p-8 border-2 border-white rounded-lg">
                P. E. Fischetti, born and raised in the suburbs of Washington
                DC, attended Walter Johnson High School and the University of
                Maryland, where he earned a B.A. in Criminology and a M.S. in
                Marriage and Family Therapy. He currently lives in Silver
                Spring, MD with his wife of 34 years. They have two young adult
                children who live locally.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%]">
            <div className="py-6 uppercase ">
              <img
                className="w-[550px]"
                src="https://d1fd687oe6a92y.cloudfront.net/img/kir_images/logo/kirkus-nav-logo.svg"
                alt=""
              />
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#13699B] ml-8">
              A book of poetry that works a classic form for all it’s worth. “Do
              not try to do everything. Do one thing well.” So said the late
              Steve Jobs, giving advice that debut poet Anstead seems to have
              taken quite seriously. The latter’s new collection does one thing
              and one thing only: the limerick.
            </div>

            <Link to="reviews" className="text-xl my-4 text-blue-400 flex">
              Read More{" "}
              <IconContext.Provider value={{ size: "1.8em" }}>
                <AiOutlineRight />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%] md:ml-auto">
            <div className="py-6 uppercase ">
              <img
                className="w-[550px]"
                src="https://www.pacificbookreview.com/wp-content/uploads/2016/02/pbr-logo-long-transparent-23.png"
                alt=""
              />
            </div>
            <div className="text-gray-300 text-lg text-right border-r-4 pr-4 border-[#54447F] mr-8">
              One of life’s greatest adventures which people strive to have in
              their lives at one point or another is the ability to travel.
              Growing up in a specific country and learning about the world
              around us, many people have the desire, and for some the need, to
              travel and visit these faraway lands which make up our planet.
              Whether it is to immerse ourselves in a different culture, see
              historical landscapes, or meet new friends, travel has a way of
              giving us a well-rounded picture of what makes up our planet.
            </div>
            <Link
              to="reviews"
              className="text-xl my-4 text-blue-400 flex justify-end"
            >
              Read More{" "}
              <IconContext.Provider value={{ size: "1.8em" }}>
                <AiOutlineRight />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="md:w-[50%] ">
            <div className="py-6 uppercase ">
              <img className="w-[550px]" src={HollywoodBookReviewLogo} alt="" />
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#FFFE98] ml-8">
              Limericks have long held a spot in the hearts of children and
              adults alike for their playful themes and strict structure, which
              makes them all the more joyful to read, and poet James B.
              Anstead’s collection is no exception. Anstead’s collection of
              limericks, titled Around the World in Five Lines, is a fun and
              funny assembly.
            </div>
            <Link to="reviews" className="text-xl py-4 text-blue-400 flex">
              Read More{" "}
              <IconContext.Provider value={{ size: "1.8em" }}>
                <AiOutlineRight />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
