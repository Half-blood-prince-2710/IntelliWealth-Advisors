"use client";

import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashBoardHeader";
import { db } from "@/db/dbConfig";
import { Budgets } from "@/db/schema";
import { useUser  } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode; // Define children prop type
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useUser ();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  const checkUserBudgets = async () => {
    const email = user?.primaryEmailAddress?.emailAddress; // Get the user's email

    if (!email) {
      console.error("User  email is not available, redirecting to home.");
      router.replace("/"); // Redirect to home if email is not available
      return; // Early return if email is not available
    }

    // Query the Budgets table to check if the user has any budgets
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, email));

    console.log(result);
    if (result.length === 0) {
      router.replace("/dashboard/budgets"); // Redirect to budgets page if none found
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64 flex-grow">
        <DashboardHeader />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;