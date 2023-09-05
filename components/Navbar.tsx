import { UserButton } from "@clerk/nextjs";
import React from "react";
import MainNav from "@/components/main.nav";
const Navbar = () => {
  return (
    <div className="flex px-4 border-b">
      <div className="flex h-16 items-center px-4 -ml-4">
        <div>Stor Switcher</div>
      </div>
      <MainNav className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
