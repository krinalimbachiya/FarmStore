"use client"

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const findColdStores = async () => {
        try{
            const coldStorages = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/coldstores`);
            const params = new URLSearchParams({
                data: JSON.stringify({
                    storages: {coldStorages},
                    type: "cold"
                })
            });
            router.push(`/storages?${params.toString()}`)
        }catch(error: any) {
            console.log(error);
        }
    }

    const findDryStores = async () => {
        try{
            const dryStorages = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/drystores`);
            const params = new URLSearchParams({
                data: JSON.stringify({
                    storages: {dryStorages},
                    type: "dry"
                })
            });
            router.push(`/storages?${params.toString()}`)
        }catch(error: any){
            console.log(error);
        }
    }

    return <div className="">
        <MaxWidthWrapper>
            <div className="absolute">
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-3xl md:text-4xl lg:text-5xl">Choose the <span className="bg-green-600 px-2 text-white">Perfect Storage</span> for your produce</h1>
                <p className="mt-2 text-lg lg:pr-10 max-w-screen text-center lg:text-left text-balance md:text-wrap md:text-xl text-gray-600">
                    Select whether your goods need a dry storage or cold storage and we will find the nearest one for you.
                </p>

                <div className="mt-10 md:flex md:items-center md:space-x-4">
                    <Button
                        size = {"lg"}
                        className ='mt-8 bg-gray-100 text-xl hover:bg-gray-200 text-gray-700'
                        variant = "ghost"
                        onClick={findColdStores}
                    >
                        Find a cold store <ArrowRight className='h-4 w-4 ml-1.5' />
                    </Button>


                    <Button
                        size = {"lg"}
                        className ='mt-8 bg-gray-100 text-xl hover:bg-gray-200 text-gray-700'
                        variant = "ghost"
                        onClick={findDryStores}
                    >
                        Find a dry store <ArrowRight className='h-4 w-4 ml-1.5' />
                    </Button>
                </div>

            </div>
        </MaxWidthWrapper>
    </div>
}

export default page;
