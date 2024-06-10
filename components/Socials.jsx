"use client";

import React from "react";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiStackOverflowFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/samir-pandey-330222201/",
    name: <RiLinkedinFill className="hover:text-blue-600" />,
  },
  {
    path: "https://github.com/venawm",
    name: <RiGithubFill className="hover:text-blue-900" />,
  },
  {
    path: "/",
    name: <RiFacebookFill className="hover:text-blue-600" />,
  },
  {
    path: "https://www.instagram.com/pandesamir3/",
    name: <RiInstagramFill className="hover:text-pink-600" />,
  },
  {
    path: "https://stackoverflow.com/users/18856385/samir-pandey",
    name: <RiStackOverflowFill className="hover:text-orange-500" />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={iconStyles}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
