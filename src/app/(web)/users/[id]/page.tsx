"use client";

import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";
import axios from "axios";
import Image from "next/image";
import useSWR from "swr";
import LoadingSpinner from "../../loading";

const UserDetails = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;

  const fetchUserBooking = async () => getUserBookings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userBookings,
    error,
    isLoading,
  } = useSWR("/api/userbooking", fetchUserBooking);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorGettingUserData) throw new Error("Cannot fetch data");
  if (typeof userBookings === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (typeof userData === "undefined" && !loadingUserData)
    throw new Error("Cannot fetch data");

  if (loadingUserData) return <LoadingSpinner />;
  if (!userData) throw new Error("Cannot fetch data");

  return (
    <div className="container mx-auto px-2 md:px-4 py-10">
      <div className="grid md:grid-cols-12 gap-10">
        <div className=" hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4 ">
          <div className="md:w-[143px] w-38 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden">
            <Image
              src={userData?.image}
              alt={userData.name}
              width={243}
              height={143}
              className="img scale-animation rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
