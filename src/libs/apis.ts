
import axios from "axios";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries"
import { CreateBookingDto, Room } from '@/models/room';

export async function getFeaturedRoom() {
    const result = await sanityClient.fetch<Room>(
        queries.getFeaturedRoomQuery,
        {},
        { cache: "no-cache" }
    )
    return result
}


export async function getRooms() {
    const result = await sanityClient.fetch<Room[]>(queries.getRoomsQuery, {}, { cache: "no-cache" });
    return result;
}


export async function getRoom(slug: string) {
    const result = await sanityClient.fetch<Room>(queries.getRoom, { slug }, { cache: "no-cache" })
    return result
}

export const createBooking = async ({
    adults,
    checkinDate,
    checkoutDate,
    children,
    discount,
    hotelRoom,
    numberOfdays,
    totalPrice,
    user
}: CreateBookingDto) => {
    const mutation = {
        mutations: [
            {
                create: {
                    _type: "booking",
                    user: { _type: 'reference', _ref: user },
                    hotelRoom: { _type: 'reference', _ref: hotelRoom },
                    checkinDate,
                    checkoutDate,
                    numberOfdays,
                    adults,
                    children,
                    totalPrice,
                    discount
                }
            }
        ]
    }
    const { data } = await axios.post(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        mutation,
        { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } },
    )
    return data
}