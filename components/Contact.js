import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section class="my-24 p-8 mx-auto text-gray-800 max-w-7xl">
        {/* Contact Text */}
        <h1 className="text-3xl font-bold text-white ">Contact Me</h1>
        {/* Contact Section description */}
        <h3 className="w-auto pt-12 text-white xl:w-7/12">
          Send a mail to me for contacting, or you can use below social handles
        </h3>
        <div
          class="relative overflow-hidden mt-20 bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/284.jpg")',
            height: "300px",
          }}
        />
        <div class="container text-gray-800 px-4 md:px-12">
          <div
            class="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 backdrop-blur-xl"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div class="flex flex-wrap">
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                <form>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block
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
                  <div class="form-group mb-6">
                    <input
                      type="email"
                      class="form-control block
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
                  <div class="form-group mb-6">
                    <textarea
                      class="
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
                  <div class="form-group form-check text-center mb-6">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87"
                      checked
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck87"
                    >
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="
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
              <div class="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div class="flex flex-wrap">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-purple-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <AiOutlineMail className="text-white" />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Contact Mail</p>
                        <p class="text-gray-500">gitaman8481@gmail.com</p>
                        <p class="text-gray-500">+91 964977393</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-purple-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdLocationPin className="text-white" />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">Location</p>
                        <p class="text-gray-500">Rajasthan, India</p>
                        <p class="text-gray-500">PIN-331001</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-purple-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <AiFillLinkedin className="text-white" />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">LinkedIn</p>
                        <p class="text-gray-500">Aman Soni</p>
                        <p class="text-gray-500">4500+ connections</p>
                      </div>
                    </div>
                  </div>
                  <div class="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <div class="p-4 bg-purple-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <AiFillGithub className="text-white" />
                        </div>
                      </div>
                      <div class="grow ml-6">
                        <p class="font-bold mb-1">GitHub</p>
                        <p class="text-gray-500">amangit1314</p>
                        <p class="text-gray-500">114+ Repositories</p>
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
