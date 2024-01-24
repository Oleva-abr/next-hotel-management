
import { NextResponse } from "next/server";
import Stripe from "stripe";

const checkout_session_completed = "checkout.session.completed"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
})

export async function POST(req: Request, res: Response) {
    const reqBody = await req.text()
    const sig = req.headers.get('stripe-signature')
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    let event: Stripe.Event;
    try {
        if (!sig || !webhookSecret) return
        event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret)
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 5000 })
    }


    //load aur events

    switch (event.type) {
        case checkout_session_completed:
            const session = event.data.object;
            break;
            console.log(session)
            //Create a booking
            return NextResponse.json("Booking successful", {
                status: 200,
                statusText: "Booking successful"
            })
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json("Booking successful", {
        status: 200,
        statusText: "Event reseived"
    })
} 