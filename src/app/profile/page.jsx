import React from "react";
import Link from "next/link";
const ProfileHomePage = () => {
  return (
    <div className="container text-center">
      <div className="alert alert-primary">
        <h3>No profile available now</h3>
      </div>
      <Link href="/profile/awet" className="btn btn-primary w-100">
        View Default Profile
      </Link>
    </div>
  );
};

export default ProfileHomePage;
