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
    path: "/",
    name: <RiLinkedinFill className="hover:text-blue-600" />,
  },
  {
    path: "/",
    name: <RiGithubFill className="hover:text-blue-900" />,
  },
  {
    path: "/",
    name: <RiFacebookFill className="hover:text-blue-600" />,
  },
  {
    path: "/",
    name: <RiInstagramFill className="hover:text-pink-600" />,
  },
  {
    path: "/",
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
