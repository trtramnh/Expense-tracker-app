import React from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-7xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl tracking-tight">
            Manager Your Expense
            <strong className="font-extrabold text-indigo-600 sm:block">
              Control your Money
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            Start Creating your budget and save ton of money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/sign-in">
              <Button className="h-12 px-10 text-base bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all sm:w-auto w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Cái ảnh phải nằm ở đây - Ngoài div chứa chữ nhưng trong section */}
      <Image
        src={"/dashboard2.svg"}
        alt="dashboard"
        width={1300}
        height={600}
        // Thêm -mt-9 để ảnh lấn lên trên một chút, rounded-2xl và shadow-2xl để nhìn nó nổi khối
        className="-mt-9 rounded-2xl border-2 shadow-2xl mb-10"
      />
    </section>
  );
}

export default Hero;
