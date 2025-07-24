import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";
import feature from "../data/feature.json";
import Autoplay from 'embla-carousel-autoplay';


const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[7vw]">
      <section className="flex flex-col justify-center items-center">
          <img className="h-[65%] w-[65%]" src="./Job-Interview.png" alt="" />
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <p className="font-bold text-7xl font-serif">Find the Job You've Been <br></br> Dreaming Of !</p>
          <p className="font-serif">Apply for job In Just 1 Click !</p>
        </div>
      </section>



      <section className="flex gap-[6vw] mt-[10vw]">
        <button className="border-2 px-15 py-4 radius rounded-[10px] hover:rounded-[50px] cursor-pointer duration-200 bg-green-700 border-none text-[20px] font-semibold">Find a Job</button>
        <button className="border-2 px-15 py-4 radius rounded-[10px] hover:rounded-[50px] cursor-pointer duration-200 bg-purple-700 border-none text-[20px] font-semibold">Post a Job</button>
      </section>



      <section className="flex flex-col justify-center items-center w-[98vw] pt-[10vw] mt-[5vw] pb-[15vw] bg-[rgba(0,0,0,0.75)]">
        <p className="pb-[5vw] text-center font-sans text-2xl font-semibold underline decoration-double decoration-2 ">Get Hired in :</p>
        <Carousel plugins={[Autoplay({delay:900, dragFree: true,})]} className="w-[60vw] gap-5">
          <CarouselContent>
            {companies.map(({name, id, path}) => {
              return(
              <CarouselItem key={id} className="basis-1/4">
                <img src={path} alt={name} className="h-[4vw] object-contain px-5  hover:opacity-100 opacity-80 cursor-pointer" />
              </CarouselItem>
            );
            })}
          </CarouselContent>
        </Carousel>
      </section>



      

    </div>
  )
}

export default LandingPage;
