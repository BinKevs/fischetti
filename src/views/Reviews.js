import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";

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
          <div>
            <div className="text-7xl font-bold py-6 uppercase text-[#13699B]">
              Kirkus
            </div>
            <div className="text-gray-400 text-md ">
              <div>Release Date: June 28, 2018</div>
              <div>ISBN: 978-1-4809-5936-1</div>
              <div>Page Count: 46</div>
              <div>Publisher: Dorrance Publishing Co.</div>
              <div>Review Posted Online: Dec. 18, 2018</div>
            </div>
            <div className="text-gray-300 text-xl my-4 ">
              {" "}
              " A book of poetry that works a classic form for all it’s worth."
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#13699B] ml-8">
              “Do not try to do everything. Do one thing well.” So said the late
              Steve Jobs, giving advice that debut poet Anstead seems to have
              taken quite seriously. The latter’s new collection does one thing
              and one thing only: the limerick. This, of course, is the most
              homespun of poetic forms, and the best-known example has arguably
              the most famous first line in all literature: “There once was a
              man from Nantucket…” This chestnut isn’t as old as one might
              think; it appeared in the Princeton Tiger in 1902, attributed to
              one Dayton Voorhees. Not to be outdone, Anstead offers roughly 200
              more here. Like Voorhees’ original, each opens in a particular
              locale (hence the volume’s title). For example: “An eccentric
              young man from Toledo / Adopted “total self-expression” as his
              credo. / So every day, exactly at noon, / He would cause his
              neighbors to swoon / When he circled the block in his Speedo.”{" "}
              <br /> <br /> If you’re not a fan of the domestic setting, the
              poet is also quite happy to take you abroad: “An inventive
              short-order cook from Swaziland / Thought the soup du jour was
              rather bland. / But in his zeal to improve the corn chowder, / He
              hastily added so much curry powder, / That one taste was all
              anyone could stand.” Anstead can go on—and does—and it’s a model
              that may feel repetitive. However, this compilation offers more
              smiles than one might anticipate. The only problem is that the
              author has a bad habit of trying to cram too many words into a
              line. The third and fourth lines of a limerick, combined,
              traditionally skip by in 12 syllables, but Anstead’s too often
              push past 20. (Take the Swaziland entry above as just one example
              of this.) Fortunately, at the end of the day, this tic doesn’t
              ruin the fun. Anstead packs lots of joy into tiny packages in this
              slim but playful collection.
            </div>
            <div className="text-lg my-4">
              Source :{" "}
              <a
                className=" cursor-pointer text-blue-600 font-bold"
                target="_Blank"
                href="https://www.kirkusreviews.com/book-reviews/james-b-anstead/around-the-world-in-five-lines/"
                rel="noreferrer"
              >
                www.kirkusreviews.com
              </a>
            </div>
          </div>

          <div>
            <div className="text-7xl font-bold py-6 text-white text-right">
              Amazon
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {review.map((item, index) => {
                return (
                  <div
                    className="border-r-2 border-b-2 rounded-lg p-6 italic "
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
