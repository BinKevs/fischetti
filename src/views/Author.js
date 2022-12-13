import authorPaulSafety from "../assets/safetyWtAuthor.jpeg";
import authorPaulPrettyPlease from "../assets/prettyPleaseWthAuthor.jpeg";

function Author() {
  return (
    <>
      <div className="bg-black relative flex font-Montserrat md:mt-[88px] mt-[82px]">
        <div className="m-auto text-white w-[80%] space-y-6 ">
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
            <div className="flex justify-start ">
              <img
                className="border-b-4 border-r-4 border-white p-4 "
                src={authorPaulSafety}
                alt=""
              />
            </div>
            <div className="md:text-md text-sm flex flex-col justify-center text-start ">
              <div className="text-4xl md:text-2xl font-bold mb-16">
                Paul Edmund Fischetti
              </div>
              <div className=" pl-4">
                P. E. Fischetti, born and raised in the suburbs of Washington
                DC, attended Walter Johnson High School and the University of
                Maryland, where he earned a B.A. in Criminology and a M.S. in
                Marriage and Family Therapy. He currently lives in Silver
                Spring, MD with his wife of 34 years. They have two young adult
                children who live locally.
                <br />
                <br />
                His soon to be available, third novel "Miss Pretty Please", ends
                the trilogy about the Finelli & Santucci families. Set in 2029
                and beyond, fifteen year-old, Annie Finelli & twenty-six,
                year-old, Russell Santucci, are the main characters who meet and
                learn to manage their future stardoms.
                <br />
                <br />
                His fourth novel, "Sunshine Uprising" set in Florida's Space
                Coast in 2022 and beyond, follows twenty-eight year-old Peg
                Patterson and her challenges, living in the fictional town of
                Cape Atlantic. Publishing is planned for 2022.
                <br />
                <br />
                His first novel, "Big Train's Backyard", follows the career of
                an aging and struggling, former All-Star, Alex Santucci, who as
                a slugging third baseman, suddenly finds his power stroke in the
                middle of the 2012 baseball season. Published in March 2013.
                <br />
                <br />
                His second novel, "The Safety", follows a young superstar
                football player, Guy Finelli, and his ascension to greatness.
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 md:space-x-6">
            <div className="md:text-md text-sm flex flex-col justify-center text-end ">
              <div className=" pr-4">
                Eighteen years younger than his half-brother, Alex Santucci, he
                hopes to continue three generations of athletic greatness in his
                family to become a super hero by 2020. Published in June 2015.
                The Author has had two distinct careers before entering
                full-time writing in 2012. While in college he started a
                twenty-year period, first as a youth counselor and then as
                certified, clinical Marriage & Family Therapist. He then entered
                the business world for the next twenty-years, first as an owner
                and manager of a supply business for Cabinet Makers and
                Furniture Refinishers and then representing clients in
                residential Real Estate as well as re-modeling houses and
                re-selling them.
                <br />
                <br />
                Since Oct. 2016, he has lost fifty-five pounds and survived a
                five-way, open-heart surgery in Oct. 2019. He has recovered
                beautifully and stays physically active. Since he was a
                youngster, he has played many different sports and followed
                fervently, DC area professional sports & UMD teams. He attended
                his first professional sports game in 1961 at Griffith Stadium
                in DC, watching the eventual World Series Champion, NY Yankees,
                with Mickey Mantle & Roger Maris. The Senators won 4-1.
                <br />
                <br />
                He has spent parts of the past eight winters in their condo on
                the beach in Cape Canaveral, Florida walking on the sand,
                swimming in the ocean, watching the occasional Space X
                lift-offs. Each day finding inspiration seeing the sun rising,
                hearing the crashing waves, feeling the storms rolling through
                and smelling the night air as the moon crosses the sky.
                <br />
                <br />
              </div>
            </div>
            <div className="flex justify-start ">
              <img
                className="border-t-4 border-l-4 border-white p-4  min-w-[500px]"
                src={authorPaulPrettyPlease}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
