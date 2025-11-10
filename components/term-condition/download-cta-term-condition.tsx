"use client";

import Image from "next/image";

// Mengimpor gambar dari direktori /public
import PunpunHello from "@/public/images/punpun/Hello.png";
import AndroidLogo from "@/public/images/download/android-cta-logo.png";
import IosLogo from "@/public/images/download/ios-cta-logo.png";

const DownloadCtaTermCondition = () => {
  // OneLink URLs
  const androidOneLinkUrl = "https://adapundi.onelink.me/cN17/em5uj56b"; // media source: website_gp
  const iosOneLinkUrl = "https://adapundi.onelink.me/cN17/szh8qiwc"; // media source: website_ios

  return (
    <section className="relative bg-custom-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Content Side */}
          <div className="w-full md:w-4xl py-6 my-6 text-center md:text-left">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6">
                Hidupkan Mimpi, <br />
                Jadi Inspirasi Bersama Adapundi
              </h2>
              <p className="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8">
                Download aplikasi Adapundi sekarang!
              </p>

              {/* Button */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={androidOneLinkUrl}
                  className="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                >
                  <Image
                    src={AndroidLogo}
                    className="w-[150px] h-[29px]"
                    alt="Android Download"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={iosOneLinkUrl}
                  className="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                >
                  <Image
                    src={IosLogo}
                    className="w-[150px] h-[29px]"
                    alt="iOS Download"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="hidden md:flex w-full md:w-1/2 justify-end items-end">
            <Image
              src={PunpunHello}
              alt="Icon punpun"
              className="h-[20rem] w-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCtaTermCondition;
