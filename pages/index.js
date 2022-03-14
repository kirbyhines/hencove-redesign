/** @format */

import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import OfferCard from './components/OfferCard';

export default function Home() {
  return (
    <div className="font-body">
      <Nav />

      {/* Intro */}
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://media.istockphoto.com/vectors/boston-architecture-line-skyline-illustration-linear-vector-cityscape-vector-id1199905636?k=20&m=1199905636&s=612x612&w=0&h=kd6pOFqZukrnI_Vv4vCJfVBQogMFM0Qzy4Tt1kRjqAc="
          alt=""
          className="mt-10 mx-auto  lg:w-3/5 xl:w-4/6"
        />
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl font-extralight mb-2 text-blue">
            We Build Brands.
          </h1>
          <h1 className="text-4xl font-extralight mb-5 text-blue">
            We Share Their Stories
          </h1>
          <button className="text-[#fff] font-semibold tracking-widest text-sm py-3 px-3 bg-orange rounded-md shadow-md  hover:scale-105">
            BRAND SERVICES
          </button>
          <div className="mt-5 w-[90vw] border-2 border-blue border-opacity-50" />
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl mx-3 font-semibold mb-5 text-blue text-center">
          Our Latest Projects
        </h1>

        <div className="flex flex-col justify-center items-center text-center mx-5 ">
          <p className=" text-sm font-extralight text-blue mb-5 w-4/6">
            Specializing in healthcare, finance, tech & professional services,
            and the oddball stuff
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mb-10">
          <OfferCard
            title="Trust Banking"
            description="All in one solution for your personal banking."
            image={
              'https://cdn.dribbble.com/users/4532032/screenshots/17409666/media/543de8cccccc4341ca2649ce9a09aac0.jpg?compress=1&resize=1200x900&vertical=top'
            }
          />
          <OfferCard
            title="Mass Medical"
            description="Find and book your appointments with a couple of clicks."
            image={
              'https://cdn.dribbble.com/users/4189231/screenshots/17107840/media/fa9491955239bc3f849d7838e76a8750.png?compress=1&resize=1200x900&vertical=top'
            }
          />
          <OfferCard
            title="Utility"
            description="Complete branding overhaul"
            image={
              'https://cdn.dribbble.com/users/14268/screenshots/15890756/media/511f84415144cd4a0dc622a618d18370.png?compress=1&resize=1200x900&vertical=top'
            }
          />
          <OfferCard
            title="VOXO"
            description="Hope you all enjoy!"
            image={
              'https://cdn.dribbble.com/users/946315/screenshots/16794649/media/c67824ddae459165f59f5a52f1861dfa.png?compress=1&resize=1200x900&vertical=top'
            }
          />
        </div>
        <button className="text-[#fff] font-semibold tracking-widest text-sm py-3 px-3 mb-5 bg-orange rounded-md shadow-md  hover:scale-105">
          SEE MORE
        </button>
        <div className="mt-5 w-[90vw] border-2 border-blue border-opacity-50" />
      </div>

      {/* About Us */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}
