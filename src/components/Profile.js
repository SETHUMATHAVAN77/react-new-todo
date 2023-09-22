import React from "react";

const Profile = () => {
  return (
    <div className="h-min-screen w-[13rem] shadow-lg bg-white">
      <div className="flex m-4 space-x-3 ml-5">
        <h3 className="ml-5 mt-3 font-bold">HI, User!</h3>
        <a href="#" className="relative block">
          <img
            alt="profil"
            src="https://img.freepik.com/free-photo/cute-rat-posing-studio_23-2150702573.jpg?t=st=1695296194~exp=1695299794~hmac=3a3f9bf47e08b27678cf5f55cdbd83bd1fce4b5dff866ffa57681d6aebf95e41&w=826"
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
      </div>
    </div>
  );
};

export default Profile;
