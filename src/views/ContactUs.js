import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";
function ContactUs() {
  return (
    <>
      <div className="bg-black md:mt-[88px] mt-[82px]">
        <div class="container  px-6  mx-auto">
          <section class=" text-gray-800 text-center">
            <div class="px-6 py-12 md:px-12 ">
              <div class="container mx-auto xl:px-32 border-2">
                <div class="grid lg:grid-cols-2 flex items-center">
                  <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0 ">
                    <div class="block rounded-lg shadow-lg  py-12 px-12 p-8 border-2 mr-4 border-black bg-white">
                      <h2 class="text-3xl font-bold mb-12">Contact us</h2>
                      <form
                        action="https://formsubmit.co/kevinbryanbuenaseda@gmail.com"
                        method="POST"
                        target="_blank"
                      >
                        <div class="form-group mb-6">
                          <input
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group mb-6">
                          <input
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                          />
                        </div>
                        <div class="form-group mb-6">
                          <textarea
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="md:mb-12 lg:mb-0 p-8 border-2 border-black shadow-lg rounded-lg">
                    <div class="h-[700px] relative shadow-lg rounded-lg ">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.5254364073903!2d-110.94634338482673!3d32.43186778107766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d60dce73ac8bab%3A0x87ded41bbd072dd7!2s1846%20E%20Innovation%20Park%20Dr%20STE%20100%2C%20Oro%20Valley%2C%20AZ%2085755%2C%20USA!5e0!3m2!1sen!2sph!4v1673444138407!5m2!1sen!2sph"
                        class="left-0 top-0 h-full w-full absolute rounded-lg"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
