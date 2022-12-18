import { Link } from "react-router-dom";
import hotAugustBook from "../assets/hotAugustBook.jpeg";
import safetyBookWtGrass from "../assets/safetyWtGrass.jpeg";
import prettyPleaseWtGrass from "../assets/prettyPleaseWtGrass.jpeg";
import { IconContext } from "react-icons";
import { AiOutlineRight, AiOutlineAmazon } from "react-icons/ai";
function Order() {
  return (
    <>
      {/* autoPlay={true} */}
      {/* <img
            className="h-full"
            src="https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg"
            alt=""
          /> */}
      <div className="h-full  md:mt-[88px]  mt-[82px] py-[5%] bg-[url('https://windows10spotlight.com/wp-content/uploads/2016/12/87df4d5fc9a63e774b7d62a05279aa84.jpg')] bg-no-repeat bg-cover flex">
        <div className="m-auto lg:w-[60%] w-[90%]">
          <div className="border-2 ">
            <div className="text-left bg-black text-white font-bold text-4xl p-4 ">
              <span className="backdrop-blur-lg">Hot in August</span>
            </div>
            <div className="border-2">
              <img
                className="lg:max-w-[60%] mx-auto"
                src={safetyBookWtGrass}
                alt=""
              />
            </div>
            <div className="space-y-4 text-white mx-auto bg-black">
              <div className="rounded-lg text-lg px-5 md:py-2.5 py-3.5 mx-auto">
                <div className="flex xl:flex-row flex-col flex-wrap justify-center xl:space-x-8 my-auto text-white">
                  <div>
                    <div class="min-w-md rounded-lg ">
                      <div class="p-5">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                          Kindle
                        </h5>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                          $0.00
                        </h5>
                        <div class="mb-3 font-normal space-y-4">
                          <div>Print length : 36 pages</div>
                          <div> Language: English </div>
                          <div> File size : 1038 KB</div>
                        </div>
                        <a
                          href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti-ebook/dp/B00CHVBARM/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                          target="_blank"
                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          rel="noreferrer"
                        >
                          BUY NOW ON
                          <div>
                            <IconContext.Provider
                              value={{ color: "white", size: "2em" }}
                            >
                              <AiOutlineAmazon />
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="min-w-md rounded-lg ">
                      <div class="p-5">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                          Paperback
                        </h5>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                          $15.25
                        </h5>

                        <div class="mb-3 font-normal space-y-4">
                          <div> Print length : 438 pages</div>
                          <div> Language: English </div>
                          <div> ISBN-10 : 0615701272</div>
                          <div> ISBN-13 : 978-0615701271</div>
                        </div>
                        <a
                          href="https://www.amazon.com/Big-Trains-Backyard-Edmund-Fischetti/dp/0615701272/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                          target="_blank"
                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          rel="noreferrer"
                        >
                          BUY NOW ON
                          <div>
                            <IconContext.Provider
                              value={{ color: "white", size: "2em" }}
                            >
                              <AiOutlineAmazon />
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full py-[5%] bg-black flex">
        <div className="m-auto lg:w-[60%] w-[90%]">
          <div className="border-2">
            <div className="text-left   text-white font-bold text-4xl p-4 ">
              <span className="backdrop-blur-lg">Miss Pretty Please</span>
            </div>
            <div className="border-2">
              <img
                className="lg:max-w-[60%] mx-auto"
                src={prettyPleaseWtGrass}
                alt=""
              />
            </div>
            <div className="space-y-4 text-white mx-auto">
              <div className="rounded-lg text-lg px-5 md:py-2.5 py-3.5 mx-auto">
                <div className="flex xl:flex-row flex-col flex-wrap justify-center xl:space-x-8 my-auto text-white">
                  <div>
                    <div class="min-w-md rounded-lg ">
                      <div class="p-5">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                          Kindle
                        </h5>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                          $5.83
                        </h5>
                        <div class="mb-3 font-normal space-y-4">
                          <div>Print length : 429 pages</div>
                          <div> Language: English </div>
                          <div> File size : 605 KB</div>
                        </div>
                        <a
                          href="https://www.amazon.com/Miss-Pretty-Please-P-Fischetti-ebook/dp/B08P3LYP9F/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="
                          target="_blank"
                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          rel="noreferrer"
                        >
                          BUY NOW ON
                          <div>
                            <IconContext.Provider
                              value={{ color: "white", size: "2em" }}
                            >
                              <AiOutlineAmazon />
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="min-w-md rounded-lg ">
                      <div class="p-5">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                          Hardcover
                        </h5>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                          $5.83
                        </h5>

                        <div class="mb-3 font-normal space-y-4">
                          <div> Print length : 282 pages</div>
                          <div> Language: English </div>
                          <div> ISBN-10 : 1646106814</div>
                          <div> ISBN-13 : 978-1646106813</div>
                        </div>
                        <a
                          href="https://www.amazon.com/Miss-Pretty-Please-P-Fischetti/dp/1646106814/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="
                          target="_blank"
                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          rel="noreferrer"
                        >
                          BUY NOW ON
                          <div>
                            <IconContext.Provider
                              value={{ color: "white", size: "2em" }}
                            >
                              <AiOutlineAmazon />
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="min-w-md rounded-lg ">
                      <div class="p-5">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                          Paperback
                        </h5>
                        <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                          $6.43
                        </h5>

                        <div class="mb-3 font-normal space-y-4">
                          <div> Print length : 282 pages</div>
                          <div> Language: English </div>
                          <div> ISBN-10 : 1646106717</div>
                          <div> ISBN-13 : 978-1646106714</div>
                        </div>
                        <a
                          href="https://www.amazon.com/Miss-Pretty-Please-P-Fischetti/dp/1646106717/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                          target="_blank"
                          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                          rel="noreferrer"
                        >
                          BUY NOW ON
                          <div>
                            <IconContext.Provider
                              value={{ color: "white", size: "2em" }}
                            >
                              <AiOutlineAmazon />
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full py-[5%] bg-[url('https://media.architecturaldigest.com/photos/58dbe50c78266a4438076739/4:3/w_4212,h_3159,c_limit/Secrets%20from%20Baseball%20Stadiums%201.jpg')] bg-no-repeat bg-cover bg-bottom flex">
        <div className="m-auto lg:w-[60%] w-[90%]">
          <div className="border-2">
            <div className="text-left   text-white font-bold text-4xl p-4 ">
              <span className="backdrop-blur-lg">The Safety</span>
            </div>
            <div className="border-2">
              <img
                className="lg:max-w-[60%] mx-auto"
                src={safetyBookWtGrass}
                alt=""
              />
            </div>
            <div className="space-y-4 text-white mx-auto">
              <div className="space-y-4 text-white mx-auto bg-black">
                <div className="rounded-lg text-lg px-5 md:py-2.5 py-3.5 mx-auto">
                  <div className="flex xl:flex-row flex-col flex-wrap justify-center xl:space-x-8 my-auto text-white">
                    <div>
                      <div class="min-w-md rounded-lg ">
                        <div class="p-5">
                          <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                            Kindle
                          </h5>
                          <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                            $0.00
                          </h5>
                          <div class="mb-3 font-normal space-y-4">
                            <div>Print length : 333 pages</div>
                            <div> Language: English </div>
                            <div> File size : 4016 KB</div>
                          </div>
                          <a
                            href="https://www.amazon.com/Safety-P-Fischetti-ebook/dp/B010QZ12OQ?ref_=ast_sto_dp"
                            target="_blank"
                            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                            rel="noreferrer"
                          >
                            BUY NOW ON
                            <div>
                              <IconContext.Provider
                                value={{ color: "white", size: "2em" }}
                              >
                                <AiOutlineAmazon />
                              </IconContext.Provider>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="min-w-md rounded-lg ">
                        <div class="p-5">
                          <h5 class="mb-2 text-5xl font-bold tracking-tight #2A4C9A">
                            Paperback
                          </h5>
                          <h5 class="mb-2 text-4xl font-bold tracking-tight ">
                            $17.95
                          </h5>

                          <div class="mb-3 font-normal space-y-4">
                            <div> Print length : 322 pages</div>
                            <div> Language: English </div>
                            <div> ISBN-10 : 150758556X</div>
                            <div> ISBN-13 : 978-1507585566</div>
                          </div>
                          <a
                            href="https://www.amazon.com/Safety-P-Edmund-Fischetti/dp/150758556X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                            target="_blank"
                            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FF9900] hover:bg-[#000000] hover:border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                            rel="noreferrer"
                          >
                            BUY NOW ON
                            <div>
                              <IconContext.Provider
                                value={{ color: "white", size: "2em" }}
                              >
                                <AiOutlineAmazon />
                              </IconContext.Provider>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
