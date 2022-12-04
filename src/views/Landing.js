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
			<div className="h-full bg-[url('https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg')] md:mt-[88px] mt-[82px] bg-no-repeat bg-cover flex">
				<div className="mt-[10%] mx-auto !w-[80%] ">
					<div className="flex flex-wrap justify-center space-x-8">
						<div className="mx-auto max-w-[450px] ">
							<div className="backdrop-blur-lg">
								<div className="text-left   text-white font-bold text-4xl p-4">
									HOT IN
									AUGUST
								</div>
								<img
									className="max-w-[400px] mx-auto"
									src={
										hotAugustBook
									}
									alt=""
								/>
								<div className="space-y-4 text-white mx-auto">
									<div className="rounded-lg px-5 md:py-2.5 py-3.5 mx-auto">
										<div>
											A
											Great
											Baseball
											Story
											-
											"Big
											Train's
											Backyard"
											transports
											you
											to
											a
											hot
											July
											pennant
											race
											where
											veteran
											former
											all-star
											3rd
											baseman
											...
										</div>
										<div className="border-2 bg-white border-black max-w-[250px] my-2 p-2 rounded-xl hover:bg-[#FF9900] mx-auto">
											<div className="text-xs font-semibold text-black">
												BUY
												"HOT
												IN
												AUGUST"
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
						<div className="mx-auto max-w-[500px] ">
							<div className="backdrop-blur-lg">
								<div className="text-left   text-white font-bold text-4xl p-4">
									THE
									SAFETY
									BOOK
								</div>
								<img
									className="max-w-[400px] mx-auto "
									src={
										safetyBook
									}
									alt=""
								/>
								<div className="space-y-4 text-white mx-auto">
									<div className="rounded-lg px-5 md:py-2.5 py-3.5 mx-auto">
										<div>
											The
											murder
											of
											Washington
											All-Pro
											Safety
											Sean
											Taylor
											in
											2007
											devastates
											Guy
											Finelli
											at
											the
											age
											of
											thirteen,
											dreaming
											to
											become
											a
											football
											athlete
											like
											Taylor.
										</div>
										<div className="border-2 bg-white border-black max-w-[250px] my-2 p-2 rounded-xl hover:bg-[#FF9900] mx-auto">
											<div className="text-xs font-semibold text-black">
												BUY
												"THE
												SAFETY
												BOOK"
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
						<div className="mx-auto max-w-[450px] my-[5%]">
							<div className="backdrop-blur-lg">
								<div className="text-left   text-white font-bold text-4xl p-4">
									Miss
									Pretty
									Please
								</div>
								<img
									className="max-w-[400px] mx-auto"
									src={
										prettyPleaseBook
									}
									alt=""
								/>
								<div className="space-y-4 text-white mx-auto">
									<div className="rounded-lg px-5 md:py-2.5 py-3.5 mx-auto">
										<div>
											While
											celebrating
											her
											fifteenth
											birthday,
											Annie
											Finelli,
											a
											girl
											ahead
											of
											her
											age
											in
											smarts,
											talent,
											and
											maturity,
											again
											meets
											Russell
											Santucci,
											a
											mid-twenties,
											talented
											pianist
											already
											amidst
											a
											mid-life
											crisis,
											and
											the
											attraction
											is
											near
											instantaneous
										</div>
										<div className="border-2 bg-white border-black max-w-[250px] my-2 p-2 rounded-xl hover:bg-[#FF9900] mx-auto">
											<div className="text-xs font-semibold text-black">
												BUY
												"PRETTY
												PLEASE"
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
				</div>
			</div>

			<div className=" bg-black">
				<div className="text-white w-[75%] mx-auto pt-[80px]">
					<div className="lg:text-7xl md:text-5xl text-4xl  pl-2 pb-4">
						Paul Edmund Fischetti
					</div>
					<div className="flex md:flex-row flex-col space-x-8">
						<div className=" md:min-w-[380px] min-w-[180px] max-w-[380px] mx-auto">
							<img
								className=""
								src="https://m.media-amazon.com/images/S/amzn-author-media-prod/jrp2e8rjck0vf86if1boqanc2f._SX450_.jpg"
								alt=""
							/>
						</div>
						<div className="md:text-4xl sm:text-2xl text-lg md:text-start text-center flex flex-col justify-end">
							<div className="text-justify">
								P. E. Fischetti,
								born and raised
								in the suburbs
								of Washington
								DC, attended
								Walter Johnson
								High School and
								the University
								of Maryland,
								where he earned
								a B.A. in
								Criminology and
								a M.S. in
								Marriage and
								Family Therapy.
								He currently
								lives in Silver
								Spring, MD with
								his wife of 34
								years. They have
								two young adult
								children who
								live locally.
							</div>
						</div>
					</div>
					<Link
						to="reviews"
						className="text-2xl my-6 text-white underline flex justify-center"
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

				<div className="w-[75%] mx-auto">
					<div className="">
						<div className="py-6 uppercase ">
							<img
								className="w-[550px]"
								src={
									HollywoodBookReviewLogo
								}
								alt=""
							/>
						</div>
						<div className="text-gray-300 text-lg  pl-4  ml-8">
							Limericks have long held
							a spot in the hearts of
							children and adults
							alike for their playful
							themes and strict
							structure, which makes
							them all the more joyful
							to read, and poet James
							B. Anstead’s collection
							is no exception.
							Anstead’s collection of
							limericks, titled Around
							the World in Five Lines,
							is a fun and funny
							assembly.
						</div>
						<Link
							to="reviews"
							className="text-xl py-4 text-white flex justify-center"
						>
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
		</>
	);
}

export default Landing;
