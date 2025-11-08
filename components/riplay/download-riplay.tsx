import Image from "next/image";

// Import BaseButton component (pastikan path ini benar)
import BaseButton from "@/components/base-button";

// Import image from the public directory
import PunpunHello from "@/public/images/punpun/Hello.png";

const DownloadRiplay = () => {
  return (
    <section className="relative bg-custom-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Content Side */}
          <div className="w-full md:w-1/2 py-6 my-6 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download RIPLAY
              </h2>
              <p className="text-base md:text-lg font-normal font-roboto text-white mb-8">
                Download pdf untuk info selengkapnya.
              </p>

              <BaseButton
                to="/docs/riplay.pdf"
                title="DOWNLOAD RIPLAY"
                external={true}
                marginClass=""
              />
            </div>
          </div>

          {/* Right Image Side */}
          <div className="hidden md:flex w-full md:w-1/2 justify-end items-end">
            <Image
              src={PunpunHello}
              alt="Icon punpun"
              className="h-[20rem] w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadRiplay;
