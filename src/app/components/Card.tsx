"use client"

import { Button } from "@/components/ui/button";
import { Storage } from "@prisma/client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Card = ({storage}: {storage: Storage}) => {

    const router = useRouter();

    const handleClick = (storage: Storage) => {
        const params = new URLSearchParams({
            data: JSON.stringify({
                store: {storage}
            })
        })
        router.push(`/book?${params.toString()}`);
    }

    return <div className="flex bg-gray-100 p-4 rounded-md items-center justify-between">
        <div className="text-2xl font-semibold text-gray-600">{storage.name}</div>
        <div className="text-lg text0gray-500">{storage.location}</div>
        <div className="text-lg text-gray-500">{storage.distance} kms away</div>
        <div className="text-lg text-gray-500">{storage.pricePerDay} Rs / day</div>
        <Button 
            variant={"ghost"} 
            className="bg-gray-150 hover:bg-gray-200"
            onClick={() => handleClick(storage)}
        >
            Book Now <ArrowRight className='h-4 w-4 ml-1.5' />
        </Button>
    </div>
}

export default Card;