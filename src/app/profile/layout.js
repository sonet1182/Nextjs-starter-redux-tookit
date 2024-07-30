"use client";
import ProfileNavbar from "@/components/ProfileNavbar";
import React from "react";


function Layout({ children }) {

  return (
    <div>
      <ProfileNavbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
