import Image from 'next/image'

function AboutSection() {
  return (
    <div>
      <p className="about-txt ml-24 mb-24 text-4xl text-center font-semibold">
        About Me
      </p>
      <section
        id="aboutSect"
        className="about mb-24 flex align-middle justify-between items-center"
      >
        <div className="ml-60 align-middle">
          <Image
            className="about-left overflow-hidden bg-gray-900 rounded-lg left-img shadow-lg z-1 object-cover"
            src="/images/about-left.jpg"
            alt=""
            width={200}
            height={200}
            objectFit="contain"
          />
        </div>
        <div className="about-right text-white w-6/12 flex-1">
          <div className="bg-gray-700 flex h-auto w-6/12 ml-24 rounded-lg mb-10">
            <div className="bg-gray-600 text-blue-600 h-30 w-55 rounded-lg m-2 p-2">
              <img src="" />
              <div>Experience</div>
              <div>2+ Years Working</div>
            </div>
            <div className="bg-gray-600 text-blue-600 h-30 w-55 rounded-lg m-2 p-2">
              <div>icon</div>
              <div>Experience</div>
              <div>2+ Years Working</div>
            </div>
            <div className="bg-gray-600 text-blue-600 h-30 w-55 rounded-lg m-2 p-2">
              <div>icon</div>
              <div>Experience</div>
              <div>2+ Years Working</div>
            </div>
          </div>

          <p className="ml-24 mr-24 w-6/12">
            Frontend developer, i create web pages with UI / UX user interface.
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <button
            className=" bg-pink-600 mt-12 ml-24 hover:bg-pink-700 text-white py-2 px-4 rounded-lg
          "
          >
            Contact Me
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
