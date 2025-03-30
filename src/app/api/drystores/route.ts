import { db } from "@/lib/db"
import { Storage } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET () {
    
    let dryStorages: Storage[] = []
    dryStorages = await db.storage.findMany({
        where: {
            type: "dry",
        },
        orderBy: {
            distance: "asc",
        }
    })

    return NextResponse.json({
        storages: dryStorages
    })
}