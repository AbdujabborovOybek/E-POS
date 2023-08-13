import React from "react";
import "./Profile.css";
import { PatternFormat } from "react-number-format";

export const Profile = () => {
  return (
    <div className="profile">
      <form>
        <h1>Your Profile</h1>
        <label>
          <span>Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Oybek Abdujabborov"
            required
            autoComplete="off"
            defaultValue={profile.name}
          />
        </label>

        <label>
          <span>Telephone Number</span>
          <PatternFormat
            format="+998 ## ### ####"
            allowEmptyFormatting
            mask="_"
            name="phone"
            defaultValue={profile.phone}
          />
        </label>

        <label>
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder="@oybek_abdujabborov"
            required
            autoComplete="off"
            defaultValue={profile.username}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="********"
            required
            autoComplete="off"
            defaultValue={profile.password}
          />
        </label>
        <label>
          <input type="submit" value="Save" />
        </label>
      </form>
    </div>
  );
};

const profile = {
  name: "Oybek Abdujabborov",
  phone: "+998 95 027 0496",
  username: "@oybek_abdujabborov",
  password: "admin",
};
