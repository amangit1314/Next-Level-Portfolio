import React from 'react'
import Input from './Input.tsx'
import Textarea from './Textarea.tsx'

function Contact() {
  return (
    <section id="contact" className="flex items-center justify-between mt-24 mb-10 contacts">

      {/* From + Heading */}
      <div className="flex flex-col items-start w-1/2 h-full px-3 ml-24 xl:w-1/2 ">
        <h1 className="mt-24 mb-12 text-3xl font-bold">Contact Me</h1>
        
        <form className="flex flex-col w-full ">
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
            placeholder="Write your coment here..."
            label="Your Message"
            className="mt-1 mb-4 rounded-md"
          />
          <div
            type="submit"
            className="w-8/12 py-2 mt-2 text-lg text-center text-white bg-purple-600 rounded-md outline-none xl:w-1/2 active:bg-purple-700 focus:ring-2 focus:ring-purple-400 disabled:bg-opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </div>
        </form>

      </div>
      {/* Image */}
      <div className='w-1/2'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483601-2912018.png" alt="" />
      </div>
    </section>
  )
}

export default Contact
