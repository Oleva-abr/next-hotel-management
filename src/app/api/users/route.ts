import { checkReviewExist, getUserData } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse('Authentification Required', { status: 500 })
    }
    const userId = session.user.id
    try {
        const data = await getUserData(userId)
        return NextResponse.json(data, { status: 200, statusText: "Successful" })
    } catch (error) {
        return new NextResponse("Unable to fetch", { status: 400 })
    }
}


export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return new NextResponse('Authentification Required', { status: 500 })
    }

    const { roomId, reviewText, ratingValue } = await req.json()


    if (!roomId || !reviewText || !ratingValue) {
        return new NextResponse('All fields ate required', { status: 400 })
    }
    const userId = session.user.id


    try {
        //Check if already exist
        const alreadyExist = await checkReviewExist(userId, roomId)
        let data
        if (alreadyExist) {

        } else {

        }

    } catch (error: any) {
        console.log("Error Updating", error)
        return new NextResponse("Unable to create review", { status: 400 })
    }
}