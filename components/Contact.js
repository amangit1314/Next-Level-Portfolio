import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section className="p-8 mx-auto my-24 text-gray-800 max-w-7xl">
        {/* Contact Text */}
        <h1 className="text-3xl font-bold text-white ">Contact Me</h1>
        {/* Contact Section description */}
        <h3 className="w-auto pt-12 text-white xl:w-7/12">
          Send a mail to me for contacting, or you can use below social handles
        </h3>
        <div
          className="relative mt-20 overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/284.jpg")',
            height: "300px",
          }}
        />
        <div className="container px-4 text-gray-800 md:px-12">
          <div
            className="block px-2 py-10 rounded-lg shadow-lg md:py-12 md:px-6 backdrop-blur-xl"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex flex-wrap">
              <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto xl:w-5/12 lg:px-6 xl:mb-0">
                <form>
                  <div className="mb-6 form-group">
                    <input
                      type="text"
                      className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-6 form-group">
                    <input
                      type="email"
                      className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="mb-6 form-group">
                    <textarea
                      className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
              "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mb-6 text-center form-group form-check">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-purple-600 checked:border-purple-600 focus:outline-none"
                      id="exampleCheck87"
                      checked
                    />
                    <label
                      className="inline-block text-gray-800 form-check-label"
                      for="exampleCheck87"
                    >
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="
              w-full
              px-6
              py-2.5
              bg-purple-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full grow-0 shrink-0 basis-auto xl:w-7/12">
                <div className="flex flex-wrap">
                  <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-4 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiOutlineMail className="text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">Contact Mail</p>
                        <p className="text-gray-500">gitaman8481@gmail.com</p>
                        <p className="text-gray-500">+91 964977393</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-4 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <MdLocationPin className="text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">Location</p>
                        <p className="text-gray-500">Rajasthan, India</p>
                        <p className="text-gray-500">PIN-331001</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 mb-12 md:mb-0 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-4 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiFillLinkedin className="text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">LinkedIn</p>
                        <p className="text-gray-500">Aman Soni</p>
                        <p className="text-gray-500">4500+ connections</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-4 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiFillGithub className="text-white" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-1 font-bold">GitHub</p>
                        <p className="text-gray-500">amangit1314</p>
                        <p className="text-gray-500">114+ Repositories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
