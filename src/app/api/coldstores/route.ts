import { db } from "@/lib/db"
import { Storage } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET () {
    
    let coldStorages: Storage[] = []
    coldStorages = await db.storage.findMany({
        where: {
            type: "cold",
        },
        orderBy: {
            distance: "asc",
        }
    })

    return NextResponse.json({
        storages: coldStorages
    })
}