import React from 'react'
import Input from './Input.tsx'
import Textarea from './Textarea.tsx'

function Contact() {
  return (
    <div className="mt-24 mb-10 contacts">
      <h1 className="mt-24 mb-12 ml-24 text-3xl font-bold">Contact Me</h1>
      <div className="w-1/3 px-3 ml-24">
        <form className="flex flex-col items-center mx-auto width-full">
          <Input
            id="id"
            name="name"
            placeholder="abc"
            label="Your Name"
            className="mt-1 mb-4 rounded-md"
          />
          <Input
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            label="Your Email"
            className="mt-1 mb-4 rounded-md"
          />
          <Textarea
            id="message"
            name="message"
            placeholder="Write your commnet here..."
            label="Your Message"
            className="mt-1 rounded-md"
          />
          <button
            className="w-full py-2 mt-6 text-lg text-white bg-purple-600 rounded-md outline-none active:bg-purple-700 focus:ring-2 focus:ring-purple-400 disabled:bg-opacity-50 disabled:cursor-not-allowed"
            type="submit"
            // disabled={true}
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <img src="" />
      </div>
    </div>
  )
}

export default Contact
