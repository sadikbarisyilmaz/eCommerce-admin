import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/ui/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="flex px-4 border-b">
      <div className="flex h-16 items-center px-4 -ml-4">
        <StoreSwitcher items={stores} />
      </div>
      <MainNav className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
