import React from "react";
import ProfileCard from "./ProfileCard";
import AddressCard from "./AddressCard";
import ContactCard from "./ContactCard";

const Profile = () => {
  const profile = {
    first_name: "Awet",
    last_name: "Thon",
    username: "awetthon",
    email: "awetthon@gmail.com",
    mobile_number: "211 925 360 800",
    role: "Co-Founder",
    date_created: "14-02-2024",
    image: "/awet.jpg",
    address_street: "House No.175 Block C Gudele",
    address_city: "Juba",
    address_state: "Central Equatoria",
    is_verified: true,
  };
  return (
    <div className="w-75 mt-3">
      <ProfileCard profile={profile}></ProfileCard>

      <ContactCard
        username={profile.username}
        email={profile.email}
        mobile_number={profile.mobile_number}
      ></ContactCard>
      <AddressCard
        address_street={profile.address_street}
        address_city={profile.address_city}
        address_state={profile.address_state}
      ></AddressCard>
      {/* <button type="button" className="btn btn-primary">
        Edit Details
      </button> */}
    </div>
  );
};

export default Profile;
