import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import hotAugustWtStyle from "../assets/hotAugustWtStyle.jpeg";

import safetyWtStyle from "../assets/safetyWtStyle.jpeg";

import React, { useState } from "react";
function Book() {
  const [firstBookHidden, setFirstBook] = useState(false);
  const [secondBookHidden, setSecondBook] = useState(false);
  const [thirdBookHidden, setThirdBook] = useState(false);
  return (
    <>
      <section class="text-white body-font bg-black">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hot in August
              {/* <br class="hidden lg:inline-block" />
              readymade gluten */}
            </h1>
            <p
              className={`mb-8 leading-relaxed ${
                !firstBookHidden ? "h-[200px]" : "h-auto"
              } overflow-hidden`}
            >
              Alex Santucci is a 14-year veteran, former All-Star 3rd baseman
              for the Kansas City Crowns. The slugger has spent his entire
              Baseball career playing in the Midwest and is in the last year of
              a 6-year, $55 million contract. Just before the All-Star break,
              rumors start about Alex being traded to the Washington Presidents
              after their Superstar infielder Bruce Hammersly goes down with an
              injury. Alex grew up in Bethesda, Maryland, a suburb of Washington
              DC and lived on Johnson Avenue, a couple of Backyards from the
              house of his baseball idol, Walter Johnson, "The Big Train".
              Ironically, his emotional world changes when his team Doctor
              introduces a new pain medication. He decides to take his
              girlfriend of five years, Sally Keegan PhD, an Associate Professor
              at nearby Park University, home to Bethesda during the four day
              All-Star break. Physically Alex finds his power stroke and becomes
              Baseball's hottest hitter. As his feelings for Sally reach new
              heights, Alex starts to come to grips with many new emotions about
              his past family history. As the trade deadline approaches, the
              young Kansas City Crowns are surging towards first place. Crowns
              owner Larry Garson, who treats Alex as a son he never had, refuses
              to consider trading him and his big contract. Crowns General
              Manager Frank Fellows knows that he could use the ten million in
              savings for veteran pitching talent and young prospects in a trade
              for Santucci. Will Alex's future be now in Kansas City or will his
              destiny be fulfilled in "Big Train's Backyard" of Washington DC!
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setFirstBook(!firstBookHidden)}
                class="inline-flex text-white bg-[#FC0519] border-0 py-2 px-6 focus:outline-none hover:bg-[#FC0519]/50 rounded text-lg"
              >
                {!firstBookHidden ? "See more" : "See less"}
              </button>
              <a
                target="_blank"
                href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti-ebook/dp/B00CHVBARM?ref_=ast_sto_dp"
                class="ml-4 inline-flex text-white bg-[#FF9900] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={hotAugustWtStyle}
            />
          </div>
        </div>
      </section>
      <section class="text-balck body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={safetyWtStyle}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Miss Pretty Please
            </h1>
            <p
              className={`mb-8 leading-relaxed ${
                !secondBookHidden ? "h-[200px]" : "h-auto"
              } overflow-hidden`}
            >
              While celebrating her fifteenth birthday, Annie Finelli, a girl
              ahead of her age in smarts, talent, and maturity, again meets
              Russell Santucci, a mid-twenties, talented pianist already amidst
              a mid-life crisis, and the attraction is near instantaneous. After
              just two short conversations, love blossoms-but can it be true,
              with such a startling age difference between them? Learning to
              trust their feelings is only half the battle; good thing they have
              supportive families. Miss Pretty Please is the last novel of a
              trilogy involving the Finellis and the Santuccis in upper class,
              suburban Maryland. Each of the books involves a story of athletic
              greatness and emotional growth within two supportive but unusually
              connected families. About the Author P. E. FISCHETTI was born in
              Washington, D.C., and raised in Kensington and Bethesda, Maryland.
              He currently lives in Silver Spring, Maryland, with his wife of
              thirty-four years, and together, they have a son and a daughter,
              both in their mid-twenties living in the D.C. area. Fischetti is
              the youngest of four brothers who all played sports growing up. He
              is still very athletic and enjoys watching sports and cheers for
              any D.C. area team. Fischetti has a B.A. in Criminology and a M.S.
              in Marriage and Family Therapy from the University of Maryland. He
              spent twenty years in counseling work and then twenty years
              running two different businesses. Fischetti has finished a fourth
              novel, which he plans to publish in 2022. He started writing
              full-time in 2011 after retiring and published his first novel,
              Big Train's Backyard, in 2013, followed by The Safety in 2015.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setSecondBook(!secondBookHidden)}
                class="inline-flex text-white bg-[#1D1D1D] border-0 py-2 px-6 focus:outline-none hover:bg-[#1D1D1D]/50 rounded text-lg"
              >
                {!firstBookHidden ? "See more" : "See less"}
              </button>
              <a
                target="_blank"
                href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti-ebook/dp/B00CHVBARM?ref_=ast_sto_dp"
                class="ml-4 inline-flex text-white bg-[#FF9900] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font bg-black">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              The Safety
            </h1>
            <p
              className={`mb-8 leading-relaxed ${
                !thirdBookHidden ? "h-[200px]" : "h-auto"
              } overflow-hidden`}
            >
              P. Edmund Fischetti was born in Washington DC and raised in the
              suburb of Kensington, MD. He attended Walter Johnson High School
              and the University of Maryland. He earned a BA in Criminology and
              a MS in Family Studies. He currently lives in Silver Spring, MD,
              just east of Kensington, with his wife of 29 years and two young
              adult children. He still is very active in sports, playing
              softball and swinging golf clubs. Washington area professional
              sports teams and the University of Maryland teams are his
              favorites to follow intently since the early sixties. His first
              book Big Train's Backyard was written in 2012 and published in
              March 2013. His current book The Safety was written in 2012-14 and
              published in July 2015. Both are based on the fictional Finelli
              family and the athletic greatness of half-brothers Alex in
              baseball and Guy in football. The Author had three distinct
              careers before entering full-time writing in 2012. The first was a
              seventeen period that included being a youth counselor out of
              college, and then becoming a clinical psychotherapist after
              graduate school, working mainly in family therapy. The second
              career involved a ten year period of co-owning and managing a
              supply business of finishing products to cabinet makers and
              furniture refinishers. The third career was a ten year period in
              the real estate business selling and rebuilding houses. He has
              spent most of the past four winters in their condo on the beach in
              Cape Canaveral, Florida walking on the sand, swimming in the
              ocean, playing golf, going to spring training games and watching
              the occasional space lift-off. Each day finding inspiration seeing
              the sun rising, hearing the crashing waves, feeling the storms
              rolling through and smelling the night air as moon crosses the
              sky.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setThirdBook(!thirdBookHidden)}
                class="inline-flex text-white bg-[#B6AD74] border-0 py-2 px-6 focus:outline-none hover:bg-[#B6AD74]/50 rounded text-lg"
              >
                {!thirdBookHidden ? "See more" : "See less"}
              </button>
              <a
                target="_blank"
                href="https://www.amazon.com/Safety-P-Fischetti-ebook/dp/B010QZ12OQ?ref_=ast_sto_dp"
                class="ml-4 inline-flex text-white bg-[#FF9900] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg font-semibold"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={safetyWtStyle}
            />
          </div>
        </div>
      </section>
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
