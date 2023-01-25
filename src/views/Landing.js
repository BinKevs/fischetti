import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";

import hotAugustBook from "../assets/hotAugustBook.jpeg";
import safetyBook from "../assets/safetyBook.jpeg";
import prettyPleaseBook from "../assets/prettyPleaseBook.jpeg";
import paulCollectionImages from "../assets/paulCollectionImages.jpg";
import amazonCom from "../assets/amazonCom.png";

function Landing() {
  return (
    <>
      <div className="landingDiv md:mt-[88px] mt-[82px] bg-[url('https://media.architecturaldigest.com/photos/58dbe50c78266a4438076739/4:3/w_4212,h_3159,c_limit/Secrets%20from%20Baseball%20Stadiums%201.jpg')] bg-no-repeat bg-cover bg-bottom flex">
        <div className="m-auto !w-[80%] ">
          <div className="flex flex-wrap justify-center space lg:space-y-0 space-y-8">
            <div className="mx-auto max-w-[450px] ">
              <div className="">
                <div className="text-left text-white font-bold md:text-4xl text-2xl p-4">
                  <span className=" backdrop-blur-3xl bg-black/20">
                    Big Train's Backyard
                  </span>
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] ml-4"
                  src={hotAugustBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div className=" backdrop-blur-3xl bg-black/20 p-4 rounded-lg">
                      A Great Baseball Story - "Big Train's Backyard" transports
                      you to a hot July pennant race where veteran former
                      all-star 3rd baseman ...
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900] ">
                      <div className="text-xs font-semibold text-black">
                        BUY "Big Train's Backyard"
                      </div>
                      <a
                        href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti-ebook/dp/B00CHVBARM?ref_=ast_sto_dp"
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
              <div className=" ">
                <div className="text-left text-white font-bold md:text-4xl text-2xl p-4">
                  <span className="  backdrop-blur-3xl bg-black/20">
                    {" "}
                    THE SAFETY BOOK
                  </span>
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] ml-4"
                  src={safetyBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div className=" backdrop-blur-3xl bg-black/20 p-4 rounded-lg">
                      The murder of Washington All-Pro Safety Sean Taylor in
                      2007 devastates Guy Finelli at the age of thirteen,
                      dreaming to become a football athlete like Taylor.
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900]">
                      <div className="text-xs font-semibold text-black">
                        BUY "THE SAFETY BOOK"
                      </div>
                      <a
                        href="https://www.amazon.com/Safety-P-Fischetti-ebook/dp/B010QZ12OQ?ref_=ast_sto_dp"
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
              <div className="">
                <div className="text-left text-white font-bold md:text-4xl text-2xl p-4">
                  <span className=" backdrop-blur-3xl bg-black/20">
                    {" "}
                    MISS PRETTY PLEASE
                  </span>
                </div>

                <img
                  className="max-w-[400px] md:w-auto w-[300px] ml-4"
                  src={prettyPleaseBook}
                  alt=""
                />

                <div className=" text-white ">
                  <div className="rounded-lg md:text-xl text-sm px-5 md:py-2.5 py-3.5 mx-auto">
                    <div className=" backdrop-blur-3xl bg-black/20 p-4 rounded-lg">
                      While celebrating her fifteenth birthday, Annie Finelli, a
                      girl ahead of her age in smarts, talent, and maturity,
                      again meets Russell ...
                    </div>
                    <div className=" bg-white shadow-lg shadow-black/80 max-w-[250px] lg:w-auto w-[180px] my-2 p-2 rounded-xl hover:bg-[#FF9900]">
                      <div className="text-xs font-semibold text-black">
                        BUY "PRETTY PLEASE"
                      </div>
                      <a
                        href="https://www.amazon.com/Miss-Pretty-Please-P-Fischetti/dp/1646106717"
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

      <div className=" bg-black ">
        <div className="text-white w-[90%] mx-auto pt-[80px] gridLandingDivParent ">
          <div className="gridLandingDiv m-auto grid grid-cols-3 space-x-8 ">
            <div className=" md:min-w-[45%] flex collectionDiv mx-auto">
              <img
                className="shadow-lg shadow-white/60 my-auto"
                src={paulCollectionImages}
                alt=""
              />
            </div>

            <div className="md:text-lg sm:text-sm text-lg md:text-start text-center flex flex-col justify-center">
              <div className="lg:text-4xl md:text-2xl pb-4 font-semibold">
                P.E. Fischetti
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

            <div className=" md:min-w-[25%]  mx-auto flex">
              <img
                className="shadow-lg shadow-white/60 my-auto"
                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/jrp2e8rjck0vf86if1boqanc2f._SX450_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center h-[60vh]">
          <div className="flex flex-col justify-center w-[75%]">
            <div className="space-y-8">
              <div className=" text-white sm:text-7xl text-5xl">
                Book talks on <span className="text-[#1DB954]">Spotify</span>{" "}
              </div>{" "}
              <iframe
                className=""
                src="https://open.spotify.com/embed/episode/5hdoHPPcDxcAyqHFG1rCbS?utm_source=generator"
                width="100%"
                height="280"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto">
          <div className="grid grid-cols-2 gap-8  glimpseReviewDiv">
            <div className="">
              <div className="py-8 uppercase text-white text-3xl font-semibold">
                Let the Wonders of Second Chances Captivate You in P.E.
                Fischetti’s Book “The Safety”
              </div>
              <div className="py-4 text-gray-400 text-xl font-semibold">
                Silver Spring, MD – WEBWIRE – Friday, December 9, 2022
              </div>
              <div className="text-gray-400 text-md text-justify">
                The narrative, which takes place in the year 2029 and beyond,
                centers on Annie Finelli, a fifteen-year-old football star and
                Russell Santucci, a twenty-six-year-old pianist and baseball
                hero Alex Santucci’s nephew. Twenty years early in his midlife
                crisis, Russell only discovers meaning in his life by playing
                the piano. He battles in managing his desire for sex, drug use,
                and alcohol consumption.
              </div>
              <Link to="reviews" className="text-lg py-12 text-white flex ">
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
              <div className="py-8 uppercase text-white text-3xl font-semibold">
                Explore Intriguing Lives in “Miss Pretty Please” by P.E.
                Fischetti
              </div>
              <div className="py-4 text-gray-400 text-xl font-semibold">
                Oro Valley, AZ and Silver Spring, MD – WEBWIRE – Monday,
                December 5, 2022
              </div>
              <div className="text-gray-400 text-md text-justify">
                The narrative, which takes place in the year 2029 and beyond,
                centers on Annie Finelli, a fifteen-year-old football star and
                Russell Santucci, a twenty-six-year-old pianist and baseball
                hero Alex Santucci’s nephew. Twenty years early in his midlife
                crisis, Russell only discovers meaning in his life by playing
                the piano. He battles in managing his desire for sex, drug use,
                and alcohol consumption.
              </div>
              <Link to="reviews" className="text-lg py-12 text-white flex ">
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
