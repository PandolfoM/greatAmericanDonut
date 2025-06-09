import Image from "next/image";
import hero from "@/app/assets/hero.jpg";
import dunkin from "@/app/assets/dunkin.svg";

const year = new Date().getFullYear();

export default function Home() {
  return (
    <div>
      <nav className="h-14 flex items-center justify-center fixed w-full bg-white md:h-24 md:justify-start md:px-10">
        <Image src={dunkin} alt="dunkin" className="w-40 md:w-60" />
      </nav>
      <section className="pt-14 md:pt-24">
        <Image
          src={hero}
          alt="Great American Donut"
          className="object-cover w-full max-h-[41rem]"
        />
      </section>
      <section className="bg-black text-white text-center flex justify-center items-center flex-col p-5 mb-5 md:p-10">
        <h1 className="font-bold text-2xl">Great American Donut</h1>
        <p className="text-sm md:w-[60rem]">
          You are applying for work with a franchisee of Dunkin', not Dunkin'
          Brands, Inc. or any of its affiliates. Any application or information
          you submit will be provided solely to the franchisee. If hired, the
          franchisee will be your only employer. Franchisees are independent
          business owners who are solely responsible for their own employees and
          set their own wage and benefit programs that can vary among
          franchisees.
        </p>
      </section>
      <section className="text-center m-auto md:w-[60rem]">
        <h3 className="font-bold text-2xl">Career Path</h3>
        <p className="text-sm">
          Our company vision is to provide opportunities for each crew member to
          stretch their limits and grow their job into a possible career. As
          Connecticut's largest Dunkin' franchisee, we operate over 45
          locations, so consider joining our team and taking the next step.{" "}
        </p>
      </section>
      <section className="flex justify-center py-10 m-auto md:py-10 md:w-[60rem]">
        <a
          href="https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883d096d0d55a01970292f7d70c43"
          target="_blank"
          className="bg-black text-white text-center py-3 px-6 rounded-sm font-bold cursor-pointer">
          JOIN NOW
        </a>
      </section>
      <footer className="text-center w-[90%] m-auto pb-5 md:w-[60rem]">
        <p className="text-xs">
          By selecting your communications preferences and clicking “Join Now”
          you agree and consent via your electronic signature to receive calls
          at the number(s) you provided, which may deliver autodialed, live
          and/or prerecorded messages and/or text messages by or on behalf of
          Great American Donut. You agree that calls and text messages may
          include, but are not limited to, promotional, advertising, and/or
          marketing content regarding Great American Donut's goods, services,
          and job openings. You acknowledge that message and data rates may
          apply. Your consent is not a condition of Great American Donut
          providing goods or services to you or considering your application.
        </p>
        <hr className="my-4 opacity-100 bg-zinc-900 border-0 h-0.5" />
        <a
          className="!underline text-sm/tight"
          href="https://www.dunkindonuts.com/en"
          target="_blank">
          CLICK HERE TO VISIT THE OFFICIAL DUNKIN' WEB SITE FOR NUTRITION
          INFORMATION, ENROLLMENT IN DD PERKS, CUSTOMER FEEDBACK AND MORE!
        </a>
        <p className="text-sm pt-4 pb-10">
          © {year} Great American Donut. The Dunkin' trademarks, logos and
          designs are trademarks of DD IP Holder, LLC. Used under license.
        </p>
        <a
          href="https://www.mjpwebsolutions.com/"
          target="_blank"
          className="text-xs flex justify-center items-center">
          Built by MJP Web Solutions
        </a>
      </footer>
    </div>
  );
}
