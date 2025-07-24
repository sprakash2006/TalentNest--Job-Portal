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
import companies from "../data/companies.json";
import Autoplay from 'embla-carousel-autoplay';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-[50vw] pt-[7vw]">
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

      <section className="w-[75vw] mt-[15vw]">
        <p className="pb-[5vw] text-center font-sans text-2xl font-semibold underline decoration-double decoration-2 ">Get Hired in :</p>
        <Carousel plugins={[Autoplay({delay:900, dragFree: true,})]} className="w-full gap-5">
          <CarouselContent>
            {companies.map(({name, id, path}) => {
              return(
              <CarouselItem key={id} className="basis-1/4">
                <img src={path} alt={name} className="h-[4vw] object-contain px-5  hover:opacity-100 opacity-80 hover:grayscale-0 grayscale-100 cursor-pointer" />
              </CarouselItem>
            );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center mt-[10vw] gap-[2vw]">
          <div className="flex flex-row justify-center items-center gap-[2vw]">
              <Card className="w-[33vw] h-[12vw] gap-3">
                <CardHeader>
                  <CardTitle className="text-[21px]">🤖 AI-Powered Candidate Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px]">Our intelligent algorithm evaluates candidates not just on keywords, but also on their experience, soft skills, and cultural compatibility with your organization. This ensures you spend less time screening and more time engaging with the right people—those who are most likely to thrive in your team and role.</p>
                </CardContent>
              </Card>
              <Card className="w-[33vw] h-[12vw] gap-3">
                <CardHeader>
                  <CardTitle className="text-[21px]">⚙️ End-to-End Hiring Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px]">From the moment a job is posted to the final offer letter, automate repetitive tasks like resume screening, interview scheduling, and candidate tracking. Our platform streamlines the entire hiring process, reducing manual work and letting your team focus on building meaningful connections with top talent.</p>
                </CardContent>
              </Card>
          </div>
          <div className="flex flex-row justify-center items-center gap-[2vw]">
              <Card className="w-[33vw] h-[12vw] gap-3">
                <CardHeader>
                  <CardTitle className="text-[21px]">🌐 Post Jobs Everywhere, Instantly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px]">Maximize your reach with one-click job posting to major job boards, your company’s careers page, and social media platforms like LinkedIn, Facebook, and Twitter. This unified system helps attract diverse candidates faster, saving time and effort across the board.</p>
                </CardContent>
              </Card>
              <Card className="w-[33vw] h-[12vw] gap-3">
                <CardHeader>
                  <CardTitle className="text-[21px]">📊 Real-Time Hiring Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px]">Get a clear, visual understanding of your recruitment pipeline. Analyze candidate flow, identify bottlenecks, track engagement metrics, and make smarter hiring decisions backed by real-time data. Our analytics dashboard gives you full control and transparency at every stage.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage;
