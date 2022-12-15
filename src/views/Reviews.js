import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Reviews() {
  const [review, setReview] = useState([
    {
      message:
        "Fun, witty and creative! What a clever idea for a book. What an awesome teacher!",
      creator: "Angela V",
    },
    {
      message:
        "Fabulous limerick writing! Anyone can enjoy this lovely written book, giggles galore.",
      creator: "Meredith Jo",
    },
    {
      message:
        "The book Around the World in Five Lines takes you on an adventure. I bought this book for my grandchildren. When we read a limerick we google the location to find out more about the place. They love learning about different spots in the world.",
      creator: "GrannyBeBe",
    },
    {
      message:
        "Limerick writing is very precise, and follows regimented discipline. In just five lines, the author has to write a beginning middle and end to to this particular type of poetry. This book takes the reader on a journey not only around the world by naming new places, stating a predicament. and finally. a playful solution all in just fine lines. If you like to read different kinds of poetry, this is a great book.",
      creator: "Helena Graves",
    },
    {
      message:
        "Mr. Anstead's Around the World in 5 Lines is a treat for all lovers of the written word. He takes you to many unknown places around the world! It is humor mixed with geography a treat for the entire family!",
      creator: "Amazon Customer",
    },
    {
      message:
        "James is a very gifted gentleman who has used limericks to expose his love for language and the world. James has created vivid imagery in five lines. If you love traveling and language, this is a definite purchase.",
      creator: "Celeste Hill Brockett",
    },
    {
      message:
        "Around the World in Five Lines......loved it! Very sophisticated, showing a great deal of worldly experiences! The limericks in this book make you chuckle! Great read! Dawn",
      creator: "Dawn",
    },
    {
      message:
        "Reviewed in the United States on November 24, 2018 These limericks made me want to find out exactly where the cities and towns were located. It was alot of fun to share with family and friends.",
      creator: "Cullen",
    },
    {
      message:
        "A really fun gift I received this year the Adventures and the places you go in this book I love reading them to my kids",
      creator: "january",
    },
    {
      message:
        "Witty and fun. Must read. These five lines will take you to the corners of the world with excitement and comedy.",
      creator: "josh jones",
    },
    {
      message: "Very enjoyable read. Funny and smart!",
      creator: "Roger franxman",
    },
    {
      message: "Eclectic samples of life in five lines.",
      creator: "Timothy Mercer",
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
