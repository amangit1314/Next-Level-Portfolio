"use client";

import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid Gmail address i.e (username@gmail.com).",
  }),
  message: z.string().max(250, {
    message: "Message cannot be longer than 250 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <section className="p-8 mx-auto my-24 text-gray-800 max-w-7xl w-full">
        {/* sub-title, title */}
        <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
          <p className="mt-12 text-base font-normal text-center text-gray-300 ">
            Send a mail to me for contacting, or you can use below social
            handles
          </p>
          <p className="mt-2 text-3xl font-semibold text-center xl:text-4xl text-white">
            Contact Me
          </p>
        </div>

        {/*  bg image*/}
        <div
          className="relative mt-20 overflow-hidden bg-no-repeat bg-cover rounded-t-lg"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/284.jpg")',
            height: "300px",
          }}
        />

        {/* blue container */}
        <div className="container px-4 text-gray-800 md:px-6">
          <div
            className="block px-2 py-10 rounded-lg shadow-lg md:py-12 md:px-6 backdrop-blur-xl"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex flex-wrap">
              {/* form */}
              <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-5/12 lg:px-6 xl:mb-0 space-y-6">
                {/* form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="block w-full px-3 py-1.5 text-sm font-normal text-zinc-800  bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                              placeholder="Your Name"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please enter your full name here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="form-control block w-full px-3 py-1.5 text-sm font-normal text-zinc-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                              placeholder="Your Email ..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please enter your email address here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              className="form-control block w-full px-3 py-1.5 text-sm font-normal text-zinc-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                              placeholder="Enter your message ..."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please enter your message here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* message */}
                    {/* <div className="mb-6 form-group">
                      <Textarea
                        className="form-control block w-full px-3 py-1.5 text-sm font-normal text-zinc-800 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                        rows={3}
                        placeholder="Message"
                      />
                    </div> */}

                    {/* checkbox */}
                    {/* <div className="mb-6 text-center htmlForm-group htmlForm-check">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer htmlForm-check-input checked:bg-purple-600 checked:border-purple-600 focus:outline-none"
                      id="exampleCheck87"
                      checked
                    />

                    
                    <label
                      className="inline-block text-gray-800 htmlForm-check-label"
                      htmlFor="exampleCheck87"
                    >
                      Send me a copy of this message
                    </label>
                  </div> */}

                    {/* submit button */}
                    <button
                      type="submit"
                      className="w-full  px-6  py-2.5 bg-purple-600 text-white
              font-medium  text-xs leading-tight  uppercase rounded  shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg
              transition duration-150 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </Form>
              </div>

              {/* social contact info */}
              <div className="w-full grow-0 shrink-0 basis-auto md:w-7/12">
                {/* md:grid md:grid-cols-2 md:gap-x-16 */}
                <div className="flex flex-wrap ">
                  {/* mail item */}
                  <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-2 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiOutlineMail className="text-white" />
                        </div>
                      </div>

                      {/* contact mail */}
                      <div className="ml-4 grow">
                        <p className="mb-1 text-md text-base font-semibold tracking-tight">
                          Contact Mail
                        </p>
                        <p className="w-[2rem] text-sm tracking-tight">
                          gitaman8481@gmail.com
                        </p>
                        <p className="text-sm">+91 964977393</p>
                      </div>
                    </div>
                  </div>

                  {/* location */}
                  <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-2 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <MdLocationPin className="text-white" />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-1 text-md text-base font-semibold tracking-tight">
                          Location
                        </p>
                        <p className="text-ellipsis text-sm overflow-clip tracking-tight">
                          Rajasthan, India
                        </p>
                        <p className="text-sm">PIN-331001</p>
                      </div>
                    </div>
                  </div>

                  {/* linked in */}
                  <div className="w-full px-3 mb-12 md:mb-0 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-2 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiFillLinkedin className="text-white" />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-1 font-semibold tracking-tight text-md text-base">
                          LinkedIn
                        </p>
                        <p className="tracking-tight text-sm">Aman Soni</p>
                        <p className="text-sm">4500+ connections</p>
                      </div>
                    </div>
                  </div>

                  {/* github */}
                  <div className="w-full px-3 mb-12 md:mb-0 grow-0 shrink-0 basis-auto md:w-6/12 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center p-2 bg-purple-600 rounded-md shadow-md w-14 h-14">
                          <AiFillGithub className="text-white" />
                        </div>
                      </div>
                      <div className="ml-4 grow">
                        <p className="mb-1 font-semibold tracking-tight text-md text-base">
                          GitHub
                        </p>
                        <p className="tracking-tight text-sm">amangit1314</p>
                        <p className="text-sm">114+ Repositories</p>
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
