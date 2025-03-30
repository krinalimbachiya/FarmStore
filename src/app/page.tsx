import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-3 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
              <img 
                  src="/snake-3.png" 
                  alt=""
                  className="w-full" 
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Smart & Secure Storage: <span className="bg-green-600 px-2 text-white">Hassle-Free Solutions</span> for Your Produce!</h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-screen text-center lg:text-left text-balance md:text-wrap">
              Easily find and book nearby storage facilities with just a few clicks. <span className="font-semibold text-white bg-green-600 px-1">FarmStore</span> allows you choose between dry or cold storage and pay online or at the facility.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Preserves Freshness & Quality
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Reduces Waste & Losses
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Protects from Pests & Rodents
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600"/>
                    Regulates Temperature & Humidity
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img 
                    src="/users/user-1.png" 
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img 
                    src="/users/user-2.png" 
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img 
                    src="/users/user-3.png" 
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img 
                    src="/users/user-4.jpg" 
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                  <img 
                    src="/users/user-5.jpg" 
                    alt="user image" 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  </div>

                  <p>
                    <span className="font-semibold">10,000 + </span> happy customers
                  </p>

                </div>

              </div>

            </div>

            <div className='flex justify-center mt-5'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8 bg-green-600 text-xl',
                })}
                href='/find'>
                Find your store now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>

          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
