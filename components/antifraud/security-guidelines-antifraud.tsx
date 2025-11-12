import {
  IoCloseCircle,
  IoLockClosed,
  IoKey,
  IoAlertCircle,
  IoPersonCircle,
  IoCheckmarkCircle,
  IoDownload,
  IoReceipt,
  IoCall,
  IoShieldCheckmark,
} from "react-icons/io5";

const SecurityGuidelinesAntifraud = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto px-2">
        <div className="pb-12 md:pb-20">
          <div className="p-6 rounded-lg py-12">
            <h2 className="text-3xl font-bold text-center mb-8 pt-8">
              Jaga Diri, Bersama Kita Sikapi
            </h2>
            <p className="text-center mb-8">
              Pastikan kamu mengikuti pedoman keamanan di bawah ini:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* JANGAN Bagikan */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <IoCloseCircle className="mr-2" size={24} />
                  JANGAN Bagikan:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <IoLockClosed
                      className="mt-1 mr-3 text-red-500 shrink-0"
                      size={18}
                    />
                    <span>Password aplikasi Adapundi</span>
                  </li>
                  <li className="flex items-start">
                    <IoKey
                      className="mt-1 mr-3 text-red-500 shrink-0"
                      size={18}
                    />
                    <span>Kode One Time Password (OTP)</span>
                  </li>
                  <li className="flex items-start">
                    <IoAlertCircle
                      className="mt-1 mr-3 text-red-500 shrink-0"
                      size={18}
                    />
                    <span>Nomor KTP dan Identitas resmi</span>
                  </li>
                  <li className="flex items-start">
                    <IoPersonCircle
                      className="mt-1 mr-3 text-red-500 shrink-0"
                      size={18}
                    />
                    <span>Nama ibu kandung dan info pribadi</span>
                  </li>
                </ul>
              </div>

              {/* SELALU Pastikan */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <IoCheckmarkCircle className="mr-2" size={24} />
                  SELALU Pastikan:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <IoDownload
                      className="mt-1 mr-3 text-green-500 shrink-0"
                      size={18}
                    />
                    <span>Download Aplikasi dari halaman resmi</span>
                  </li>
                  <li className="flex items-start">
                    <IoReceipt
                      className="mt-1 mr-3 text-green-500 shrink-0"
                      size={18}
                    />
                    <span>Menggunakan Kode VA dari aplikasi</span>
                  </li>
                  <li className="flex items-start">
                    <IoCall
                      className="mt-1 mr-3 text-green-500 shrink-0"
                      size={18}
                    />
                    <span>Cek kebenaran info melalui CS Resmi</span>
                  </li>
                  <li className="flex items-start">
                    <IoShieldCheckmark
                      className="mt-1 mr-3 text-green-500 shrink-0"
                      size={18}
                    />
                    <span>Follow akun sosial media terverifikasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityGuidelinesAntifraud;
