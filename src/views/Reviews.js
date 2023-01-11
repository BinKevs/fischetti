import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Reviews() {
  const [reviewSafety, setReviewSafety] = useState([
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
  const [reviewMissPretty, setReviewMissPretty] = useState([
    {
      message: "A thoughtful book that was fun to read",
      creator: "Christian Boesen",
    },
    {
      message: "A story with a futuristic touch.",
      creator: "	Shobana Gomes",
    },
    {
      message: "P. E. Fischetti’s Best Novel To Date",
      creator: "Amazon Customer",
    },
  ]);
  const [reviewHotInAugust, setReviewHotInAugust] = useState([
    {
      message:
        "A Stimulating, Immersive Read! It's about ordinary lives and a love for baseball.",
      creator: "Shobana Gomes",
    },
    {
      message: "Trilogy! Trilogy! Trilogy!",
      creator: "Annie",
    },
    {
      message: "Big Train's Backyard is a winner",
      creator: "Edmund Matthew S",
    },
    {
      message: "A thoughtful book that was fun to read",
      creator: "Richard Murphy",
    },
    {
      message: "Big Train's Back Yard",
      creator: "MarianPhilly",
    },
    {
      message: "Fischetti Writes A Winner!",
      creator: "Art in RI",
    },
    {
      message:
        "If you enjoy the varieties of family relationships, baseball, history, and a little statistics, this book is for you!!",
      creator: "Bill Giuliani",
    },
    {
      message: "Fun book with a baseball setting.",
      creator: "Jill Steier",
    },
    {
      message: "Good read for baseball lovers",
      creator: "PMH",
    },
    {
      message: "I was very into this book and looked forward each ...",
      creator: "Ed Danberry",
    },
    {
      message: "Must Read for DC Baseball Fans",
      creator: "JN",
    },
    {
      message: "Big Train Backyard",
      creator: "Amazon Customer",
    },
    {
      message: "A can't put it down read",
      creator: "Christian Boesen",
    },
    {
      message:
        "When I saw the title and Iconic baseball player taking his power stroke full cut,I knew it was about my childhood sport Dad taught me to love.",
      creator: "RMIII",
    },
    {
      message:
        "Big Train's backyard - refreshing novel with an easy to read story line",
      creator: "Stacy Ciano",
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
                  “The Safety” depicts Guy Finelli’s rise to superstardom after
                  his youthful drug battle and his ongoing harassment from the
                  elusive Baltimore drug lord, “The Turk.” His stratospheric
                  ascent to fame as the best Safety to ever play football had to
                  overcome the murder of his football hero Sean Taylor when he
                  was thirteen. The image of the invincible Taylor being killed
                  while defending his girlfriend and daughter was a severe blow
                  to young Guy as he wonders if this could happen to him as
                  well. Guy Finelli reaches super-hero status as he battles
                  senseless murderers, and drug dealers and rescues regular
                  people in the streets from trauma. A personal tragedy and the
                  birth of his daughter make him turn to his half-brother, Alex
                  Santucci, and sister-in-law, Sally Keegan, for help. Alex is
                  fifteen years older and shares Phillip Finelli as his father.
                  He was a superstar baseball hero for Washington DC but now
                  retired he turns his attention to supporting Guy’s career and
                  safety. He is the main character in P. E. Fischetti’s first
                  book “Hot in August.” Guy Finelli is an inspiration to those
                  who believe in the wonders of second chances because of his
                  dedication and family support as he has a son and is
                  reconnected to his daughter. His career reaches a level never
                  achieved before and has a chance to reach immortality in the
                  Sports world and the real world as his battle with “The Turk”
                  reaches a final battle. P. E. Fischetti’s second book, “The
                  Safety,” was released originally in 2015. After “Hot in
                  August,” in 2013, he authored two of the most powerfully
                  written sports narratives that has to captivate his readers’
                  attention and hearts. P. E. Fischetti was born in Washington
                  D.C. next to the U. S. Capitol and raised in the suburbs and
                  attended Walter Johnson High School, arguably the greatest
                  baseball pitcher of all time. He has a B.A. in Criminology and
                  an M.S. in Marital and Family Therapy from the University of
                  Maryland. He and his wife of thirty-six years currently reside
                  in Bethesda, Maryland. He started writing full-time in 2011.
                  His third book, “Miss Pretty Please,” came out in 2020 and
                  ends the trilogy of Sports Hero Romance Novels he authored. He
                  plans to a fourth book published in 2023, a political thriller
                  in Florida. Fischetti is the youngest of four brothers and
                  grew up as a good athlete along with his brothers. He loves to
                  spend lots of time in Cocoa Beach, Florida writing and walking
                  the Beach and keeping warm in the Winter. He is an avid sports
                  fan of all Washington D.C. area teams and the University of
                  Maryland.
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
                <div>
                  <div className="text-5xl font-bold text-white">Amazon</div>
                  <div className="text-4xl font-bold py-6 text-white text-center">
                    “The Safety”
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {reviewSafety.map((item, index) => {
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
                            <span className="text-[#FF9900]">
                              Amazon Reviews
                            </span>{" "}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
                  centers on Annie Finelli, a fifteen-year-old football star,
                  and Russell Santucci, a twenty-six-year-old pianist and
                  baseball hero Alex Santucci’s nephew. Twenty years early in
                  his midlife crisis, Russell only discovers meaning in his life
                  by playing the piano. He battles in managing his desire for
                  sex, drug use, and alcohol consumption. Given that their
                  families are well-known for their grandeur and successes, the
                  two major characters in the story, Russell, who is in his
                  mid-twenties, and Annie, who is still a teenager, encounter
                  obstacles as they pursue their individual abilities and
                  ambitions to become known. The ambitious and affluent families
                  of Russell and Annie have lofty aspirations for them to
                  succeed in their respective fields. Russell is also forbidden
                  from engaging in sexual relations with anyone younger than the
                  age of eighteen. When they first meet, they are immediately
                  attracted to one another. They later fall in love after being
                  sensually aware of one another at Annie’s fifteenth birthday
                  bash. Fischetti has achieved in portraying the characters in
                  “Miss Pretty Please” in a clear and succinct manner, helping
                  the reader see all the details and events described in his
                  novel with vivid clarity. It’s fascinating to read about the
                  manner of life of these families with mixed-race connections
                  from the 1960s that Fischetti has deftly managed to depict in
                  his novel. It’s also commendable how creatively he put the
                  plot in the far-future year of 2029 and beyond while
                  describing the advanced technology of the era. He
                  authentically added a futuristic element to the narrative.
                  “Miss Pretty Please” is a brilliantly written, intriguing, and
                  engaging novel. P. E. Fischetti, born and raised in the
                  suburbs of Washington DC, attended Walter Johnson High School
                  and the University of Maryland, where he earned a B.A. in
                  Criminology and an M.S. in Marriage and Family Therapy. He
                  currently lives in Silver Spring, MD with his wife of 34
                  years. They have two young adult children who live locally. P.
                  E. Fischetti had two distinct careers before entering
                  full-time writing in 2012. While in college he started a
                  twenty-year period, first as a youth counselor and then as a
                  certified, clinical Marriage & Family Therapist. He then
                  entered the business world for the next twenty years, first as
                  an owner and manager of a supply business for Cabinet Makers
                  and Furniture Refinishers and then representing clients in
                  residential Real Estate as well as remodeling houses and
                  re-selling them. Since Oct. 2016, he has lost fifty-five
                  pounds and survived a five-way, open-heart surgery in Oct.
                  2019. He has recovered beautifully and stays physically
                  active. Since he was a youngster, he has played many different
                  sports and followed fervently, DC area professional sports &
                  UMD teams. He has spent parts of the past eight winters in
                  their condo on the beach in Cape Canaveral, Florida walking on
                  the sand, swimming in the ocean, and watching the occasional
                  Space X lift-offs. Each day finding inspiration seeing the sun
                  rising, hearing the crashing waves, feeling the storms rolling
                  through, and smelling the night air as the moon crosses the
                  sky.
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
              “Miss Pretty Please”
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {reviewMissPretty.map((item, index) => {
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
          <div className="">
            <div className="py-8 uppercase text-white text-3xl font-semibold">
              P.E. Fischetti’s “Hot In August” is Here to Enthrall Us With an
              Intriguing Story That You Should Not Miss
            </div>
            <div className="py-4 text-gray-400 text-xl font-semibold">
              Arizona – WEBWIRE – Tuesday, January 10, 2023
            </div>
            <div className="text-gray-400 text-md text-justify">
              “Hot In August” is the first of P.E. Fischetti’s books, leading to
              a trilogy, “The Safety” (2015) and “Miss Pretty Please” (2020).
              The Finelli and Santucci families of Kensington and Bethesda,
              Maryland, are shown in this story for the first time. By merging
              his enthusiasm for the game with his well-written, perceptive use
              of words and descriptive depiction of locations and events in “Hot
              In August,” P.E. Fischetti has managed to evoke undiluted
              excitement in baseball. This extraordinary synthesis makes it an
              invaluable read. He has authored books that are both immersive and
              educative. The mind is stimulated by “Hot In August.” Readers will
              gain true knowledge of what it requires to succeed in a game that
              is as explosive as it is endearing from the book. This is the
              story of baseball player Alex Santucci, who rose to fame after
              winning the World Series for the Presidents of Washington, DC, and
              earned the title of “greatest baseball talent on earth.” He is the
              person who declared his mission. a mission to put an end to the
              period of suffering and loss, and that it was time to set free the
              emotions of optimism to once again embrace baseball in Washington.
              The 14-year veteran, All-Star third baseman had a difficult
              decision to make with the transfer because he had previously been
              under contract to Kansas City Crowns. There was no question about
              his devotion to his home team. But his heart drew him to Walter
              Johnson’s garden in Washington, DC, the home of his idol. Alex
              Santucci has had physical pain throughout his career and has been
              given prescription medicines and medication for it. He is later
              identified as having an adrenal and pancreatic enlargement.
              Despite the medical emergency, he has surgery, yet his dedication
              to his game is unwavering. Sally Keegan, his true love and devoted
              supporter, becomes his wife. His connections to his family’s group
              bestow upon his love, support, and respect as they proudly regard
              him as a true leader in his industry. In his efforts to keep his
              position as one of baseball’s pillars, he is also known as the
              “sweetheart” of reporters. He exhibits patience and a trustworthy
              manner when speaking with them. Readers will appreciate Alex
              Santucci’s vulnerability. He is not embarrassed to talk about his
              emotional swings. He wants confession in order to find inner
              healing, and this is a crucial moment. Baseball legends hail Alex
              Santucci for leading the Presidents to heights never before
              achieved. And it’s fitting that the legacy of Walter Johnson
              continues via his home runs and achievements.
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
          <div>
            <div className="text-5xl font-bold text-white">Amazon</div>
            <div className="text-4xl font-bold py-6 text-white text-center">
              “Hot in August”
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {reviewHotInAugust.map((item, index) => {
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
