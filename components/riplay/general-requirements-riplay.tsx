import Image from "next/image";
import Link from "next/link";

// Import image from the public directory
import AdapundiLogo from "@/public/images/logo/AP-logo.png";

const GeneralRequirementsRiplay = () => {
  return (
    <section className="relative bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Content Container with responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-center md:text-left text-gray-800 text-3xl sm:text-4xl font-bold font-montserrat mb-8">
              Persyaratan Umum
            </h2>

            <div className="text-black">
              <p className="text-lg sm:text-xl font-bold font-montserrat mb-6">
                Persyaratan yang harus dipenuhi
              </p>

              <ul className="space-y-2 text-lg sm:text-xl font-medium font-montserrat mb-8 list-disc ml-6">
                <li>Berusia 18 tahun</li>
                <li>Warga Negara Indonesia</li>
                <li>Memiliki nomor HP tetap dan aktif</li>
                <li>Mempunyai pekerjaan/penghasilan tetap</li>
                <li>Memiliki rekening Bank</li>
              </ul>

              <p className="text-lg sm:text-xl font-medium font-montserrat mt-6">
                Selengkapnya dapat dilihat di: <br />
                <Link
                  href="/term-condition"
                  className="text-blue-600 hover:underline"
                >
                  https://www.adapundi.com/term-condition
                </Link>
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] overflow-hidden">
              <Image
                className="w-full h-auto object-cover"
                src={AdapundiLogo}
                alt="Adapundi Logo"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralRequirementsRiplay;
