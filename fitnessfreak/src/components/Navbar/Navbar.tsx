"use client";
import React from "react";
import logo from "@/assests/logo.png";
import { IoIosBody } from "react-icons/io";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import AuthPopUp from "../AuthPopup/AuthPopUp";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const [showPopUp, setShowPopUp] = React.useState<boolean>(false);

  return (
    <nav>
      <Image src={logo} alt="Logo" />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">
        <IoIosBody />
      </Link>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          Login
        </button>
      )}

      {showPopUp && <AuthPopUp setShowPopUp={setShowPopUp} />}
    </nav>
  );
};

export default Navbar;
