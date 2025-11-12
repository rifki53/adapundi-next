"use client";

import { IoCall, IoMail, IoLogoInstagram, IoInformationCircle } from "react-icons/io5";

const ReportFraudAntifraud = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Laporkan Penipuan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Adapundi menolak keras segala tindak penipuan dan mendukung
                undang-undang nomor 27 Tahun 2022 tentang Pelindungan Data
                Pribadi (UU PDP).
              </p>
              <p className="text-gray-600 font-medium">
                Jika ada hal mencurigakan, Sobat Pundi bisa mengkonfirmasi
                informasi tersebut melalui kanal di bawah ini:
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Call Center Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-custom-green3 rounded-full mx-auto">
                    <IoCall className="text-gray-900" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Call Center
                    </h3>
                    <a
                      href="tel:02150860666"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      (021) 50860666
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-custom-green3 rounded-full mx-auto">
                    <IoMail className="text-gray-900" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Email Resmi
                    </h3>
                    <a
                      href="mailto:cs@adapundi.com"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      cs@adapundi.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-custom-green3 rounded-full mx-auto">
                    <IoLogoInstagram className="text-gray-900" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Sosial Media Resmi
                    </h3>
                    <a
                      href="https://instagram.com/adapundi_official_id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      @adapundi_official_id
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-custom-orange border border-gray-200 rounded-lg p-4 mt-8">
              <div className="flex items-start space-x-3">
                <IoInformationCircle className="text-blue-600 mt-1 shrink-0" size={16} />
                <p className="text-sm text-gray-600">
                  Pastikan Anda selalu berkomunikasi melalui kanal resmi
                  Adapundi yang tercantum di atas. Kami tidak bertanggung jawab
                  atas komunikasi yang dilakukan melalui kanal tidak resmi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFraudAntifraud;
