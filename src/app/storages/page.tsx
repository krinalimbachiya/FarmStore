"use client"

import { useSearchParams } from "next/navigation"
import { Storage } from "@prisma/client"
import Card from "../components/Card";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Storages() {

    const searchParams = useSearchParams();
    const dataParam = searchParams.get('data');
    const data = dataParam ? JSON.parse(dataParam) : null;

    const type: String = data.type;
    const storagesToDisplay: Storage[] = type==="cold" ? data.storages.coldStorages.data.storages : data.storages.dryStorages.data.storages;

    const storageType = type==="cold" ? "Cold" : "Dry"

    return <div className="absolute">
        <MaxWidthWrapper>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-3xl md:text-4xl lg:text-5xl mb-5">
                We have found the following <span className="bg-green-600 text-white px-1 rounded-sm">{storageType} storages</span> near your location
            </h1>
            {storagesToDisplay.map((eachStorage) => <div key={eachStorage.id} className="my-5">
                <Card storage={eachStorage}/>
            </div>) }
        </MaxWidthWrapper>
    </div>
}