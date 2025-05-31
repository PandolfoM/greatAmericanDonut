import Image from "next/image";
import hero from "@/app/assets/hero.png";
import dunkin from "@/app/assets/dunkin.svg";

export default function Home() {
  return (
    <div>
      <nav className="h-14 flex items-center justify-center md:h-24 md:justify-start md:px-10">
        <Image src={dunkin} alt="dunkin" className="w-40 md:w-60" />
      </nav>
      <section>
        <Image src={hero} alt="Great American Donut" width={10000} />
      </section>
      <section className="bg-[#c63663] text-white text-center p-5 mb-5 md:p-10">
        <h1 className="font-bold text-2xl">Great American Donut</h1>
        <p className="text-sm">
          You are applying for work with a franchisee of Dunkin’ Donuts, not
          Dunkin’ Brands, Inc. or any of its affiliates. Any application or
          information you submit will be provided solely to the franchisee. If
          hired, the franchisee will be your only employer. Franchisees are
          independent business owners who are solely responsible for their own
          employees and set their own wage and benefit programs that can vary
          among franchisees.
        </p>
      </section>
      <section className="flex justify-center py-5 md:py-10">
        <a
          href="https://gadct.com"
          target="_blank"
          className="bg-[#c63663] text-white text-center py-3 px-6 rounded-full font-bold cursor-pointer">
          APPLY NOW
        </a>
      </section>
    </div>
  );
}
