"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { useUser } from "@clerk/nextjs";

import { useRouter } from "next/navigation";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  //nếu user đã đăng nhập thì mới check xem user đó đã có budget nào chưa,
  //nếu chưa có thì push nó đến trang tạo budget
  useEffect(() => {
    if (user) {
      checkUserBudgets();
    }
  }, [user]);

  //hàm này sẽ gọi api để lấy tất cả budget của user hiện tại, 
  //nếu không có budget nào thì sẽ push user đến trang tạo budget
  const checkUserBudgets = async () => {
    const res = await fetch("/api/budgets");
    const result = await res.json();

    console.log(result);

    if (result?.length === 0) {
      router.push("/dashboard/budgets");
    }
  };
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
