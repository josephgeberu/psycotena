import Image from "next/image";
import {
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import { ServiceImage, Book, TestimonialImage } from "./_assetexport";

import { serviceContent, testimonials } from "./_constants";

import ServiceCard from "./components/serviceCard";
import CustumButton from "./components/custumButton";
import InputField from "./components/inputField";
import CenteredImageGride from "./components/centeredImageGrid";
import TestimonialCard from "./components/testimonialCard";
import PyscologistsGrid from "./components/";

const Home = () => {
  const services = serviceContent.map((service) => (
    <ServiceCard
      key={service.title}
      title={service.title}
      body={service.body}
      iconUrl={service.iconUrl}
    />
  ));
  const allTestimonials = testimonials.map((testimonial) => (
    <TestimonialCard
      key={testimonial.autor}
      rating={testimonial.rating}
      body={testimonial.body}
      autor={testimonial.autor}
    />
  ));

  return (
    <main className="home">
      <section className=" px-20 py-12 h-[740px] mt-16" id="service">
        <CenteredImageGride
          topLeft={services[0]}
          middleImage={ServiceImage}
          topRight={services[1]}
          bottomLeft={services[2]}
          bottomRight={services[3]}
        />
      </section>
      <section className=" px-20 py-12  mt-16">
        <PyscologistsGrid />
      </section>
      <section className="px-20 py-12 h-[740px] mt-16">
        <CenteredImageGride
          topLeft={allTestimonials[0]}
          middleImage={TestimonialImage}
          topRight={allTestimonials[1]}
          bottomLeft={allTestimonials[2]}
          bottomRight={allTestimonials[3]}
        />
      </section>
      <section className=" callto  px-20 py-12 mt-12 text-white  ">
        <div className="flex flex-col gap-8 w-[700px] py-12">
          <h2 className="text-white text-heading_2 uppercase font-bold ">
            transform Your Life with Expert Guidance.
          </h2>
          <div>
            {" "}
            <CustumButton className="flex bg-custum-primary_100 px-12 py-5  text-white gap-x-5 items-center text-heading_4 font-bold rounded-full">
              <Image src={Book} width={40} alt="Book" />
              <p>Book Now</p>
            </CustumButton>
          </div>
        </div>
      </section>
      <section className="contact px-20 py-12  text-center" id="contact ">
        <h1 className="py-9 text-white text-heading_1 uppercase font-bold ">
          Get in Touch
        </h1>
        <div className="flex justify-between ">
          <form
            action=" "
            className="flex flex-col  gap-7 px-12 py-12  bg-custum-secondary_50 text-custum-gray_50 h-[540px]"
          >
            <h4 className="text-white text-heading_4 uppercase pb-2">
              Send Us Your Comments
            </h4>
            <InputField
              placeholder="Write Your Name"
              type="text"
              className="px-36 py-3 block rounded-lg text-center "
            />
            <InputField
              placeholder="Write Your Email"
              type="text"
              className="px-36 py-3 block rounded-lg text-center"
            />

            <textarea
              placeholder="Write Your Comment ...."
              className="px-36 py-7   rounded-lg text-center"
            ></textarea>
            <CustumButton className="py-3 mt-4 bg-custum-primary_75  text-white  w-full    text-heading_6 font-bold rounded-full">
              <p>Send</p>
            </CustumButton>
          </form>

          <div className="flex  items-center justify-center   bg-custum-primary_50 h-[540px] w-[650px]  ">
            <div className="flex flex-col gap-4 text-white">
              <div className="flex gap-4">
                <MapPinIcon width={30} />
                <h6 className="text-heading_6">Addis Ababa, Ethiopia</h6>
              </div>
              <div className="flex gap-4">
                <PhoneIcon width={30} />
                <h6 className="text-heading_6">+251 912 345 678</h6>
              </div>

              <div className="flex gap-4">
                <EnvelopeIcon width={30} />
                <h6 className="text-heading_6">psycotena@psycotena.et</h6>
              </div>

              <div className="flex gap-4">
                <GlobeAltIcon width={30} />
                <h6 className="text-heading_6">www.pyscotena.et</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
