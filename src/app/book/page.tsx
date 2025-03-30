"use client"

import { useSearchParams } from "next/navigation"
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const page = () => {
    const searchParams = useSearchParams();
    const dataParam = searchParams.get('data');
    const data = dataParam ? JSON.parse(dataParam) : null;

    const storage = data.store.storage;

    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();
    const [amount, setAmount] = React.useState(0);
    
    // let amount = 0;

    React.useEffect(() => {
        if(startDate!==undefined && endDate!==undefined){
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            const pricePerDay = storage.pricePerDay;
            setAmount(days*pricePerDay);
        }
    }, [startDate, endDate, setStartDate, setEndDate])

    return <div className="absolute">
        <MaxWidthWrapper>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-3xl md:text-4xl mb-2">
                Booking for {storage.name}, {storage.location} 
            </h1>
            <p className="text-lg lg:pr-10 max-w-screen text-center lg:text-left text-balance md:text-wrap md:text-xl text-gray-600">
                    at {storage.pricePerDay} Rs / Day
            </p>

            <div className="flex flex-col items-center justify-between space-y-6">
            <h1 className="relative w-fit tracking-tight text-balance mt-16 !leading-tight text-gray-900 text-2xl md:text-2xl mb-2 text-gray-500">
                Select the checkin date : 
            </h1>
            <Popover>
                <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                    )}
                >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>




            <h1 className="relative w-fit tracking-tight text-balance mt-5 !leading-tight text-gray-900 text-2xl md:text-2xl mb-2 text-gray-500">
                Select the checkout date : 
            </h1>
            <Popover>
                <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                    )}
                >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>


            <Button 
                className="bg-green-600 hover:bg-green-500" 
                disabled={amount===0}
            >
                Checkout for {amount} Rs
            </Button>
            </div>

        </MaxWidthWrapper>
    </div>
}

export default page;