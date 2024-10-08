import Image from "next/image";
import {
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import { ServiceImage, Book, TestimonialImage } from "./assetexport";

import { serviceContent, testimonials } from "./_constants";

import ServiceCard from "./_components/serviceCard";
import CustumButton from "./_components/custumButton";
import InputField from "./_components/inputField";
import CenteredImageGride from "./_components/centeredImageGrid";
import TestimonialCard from "./_components/testimonialCard";
import PyscologistsGrid from "./_components/psycologistGrid";

export default function Home() {
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
      <section className=" px-20 py-12  mt-16" >
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

      </main>

