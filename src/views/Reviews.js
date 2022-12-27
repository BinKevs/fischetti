import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Reviews() {
  const [review, setReview] = useState([
    {
      message:
        "Guy Finelli as The Safety, is an emulation to those who believe in the miracles of second chances.",
      creator: "Shobana Gomes",
    },
    {
      message: "He was always good in school",
      creator: "Jay M",
    },
    {
      message: "A Job Well Done",
      creator: "Barbara Walker",
    },
    {
      message: "The SAFETY is an undisputed WINNER!!",
      creator: "Bill Giuliani",
    },
    {
      message: "A Win-Win for P. Edmund Fischetti",
      creator: "Annie",
    },
    {
      message: "Another Winner",
      creator: "Richard Murphy",
    },
    {
      message: " The past and now of football , suspense and drama .",
      creator: "MarianPhilly",
    },
    {
      message:
        "5.0 out of 5 stars I was anxious to get to the end to read the conclusion and I was not disappointed. If you enjoyed The Big Trains Back Yard",
      creator: "willy23",
    },
    {
      message:
        "5.0 out of 5 stars The author's second novel is as good as, if not better",
      creator: "Joseph A. Ciano",
    },
    {
      message: "Fischetti Creates a Superhero!",
      creator: "kevin bonner",
    },
    {
      message: "You win with defense; or do you?",
      creator: "JN",
    },
    {
      message:
        "Edmund Fischetti proves again he is a master of excellent sports, family and compassion novels",
      creator: "RMIII",
    },
    {
      message: "I fell in love with the family",
      creator: "	Kathi",
    },
    {
      message: "The Safety - Taking Chances and Making A Difference",
      creator: "Jill Steier",
    },
  ]);
  return (
    <>
      <div className="h-full bg-black relative flex md:mt-[88px] mt-[82px] ">
        <div className="m-auto w-[80%] text-white">
          <div className="">
            <div className="grid grid-cols-1 gap-8  glimpseReviewDiv">
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
                  the piano. He battles in managing his desire for sex, drug
                  use, and alcohol consumption.
                </div>
                <Link to="reviews" className="text-lg py-12 text-white flex ">
                  Source{" "}
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
                  the piano. He battles in managing his desire for sex, drug
                  use, and alcohol consumption.
                </div>
                <Link to="reviews" className="text-lg py-12 text-white flex ">
                  Source{" "}
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

          <div>
            <div className="text-5xl font-bold text-white">Amazon</div>
            <div className="text-4xl font-bold py-6 text-white text-center">
              “The Safety”
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {review.map((item, index) => {
                return (
                  <div
                    className={`${
                      index % 2 === 0 ? "border-r-2" : "border-l-2"
                    } border-b-2 p-6 italic`}
                    key={index}
                  >
                    <div className="flex">
                      {" "}
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>

                    <div className="text-gray-300 ">"{item.message}"</div>
                    <div className="font-semibold">
                      -{item.creator}{" "}
                      <span className="text-[#FF9900]">Amazon Reviews</span>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
