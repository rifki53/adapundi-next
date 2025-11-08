// Data for events and activities
const activities = [
  {
    no: "25",
    date: "25 September 2025",
    name: "Fintech Regular Goes to Campus 2025",
    venue: "UIN Raden Fatah, Palembang",
  },
  {
    no: "24",
    date: "17 Juni 2025",
    name: "Remaja Cemerlang Ahli Fintech",
    venue: "Universitas Nahdlatul Wathan, Lombok",
  },
  {
    no: "23",
    date: "25 April 2025",
    name: "Fintech Regular Goes to Campus 2025",
    venue: "Politeknik Negeri Banyuwangi, Banyuwangi",
  },
  {
    no: "22",
    date: "27 September 2024",
    name: "Pengusaha Kreatif Fintech",
    venue: "Malang Creative Center, Malang",
  },
  {
    no: "21",
    date: "31 Juli 2024",
    name: "Fintech Regular Goes to Campus 2024",
    venue: "Universitas Negeri Padang, Padang",
  },
  {
    no: "20",
    date: "26 Juni 2024",
    name: "Fintech Regular Goes To Campus 2024",
    venue: "Universitas Muhammadiyah Yogyakarta, DI Yogyakarta",
  },
  {
    no: "19",
    date: "20 - 25 Oktober 2023",
    name: "Muda Paham Fintech",
    venue: "Universitas Palangkaraya, Kalimantan Tengah",
  },
  {
    no: "18",
    date: "17 Juli 2023",
    name: "Cerdas Pakai FinTech: Maksimalkan Potensi Keuangan Digital",
    venue: "Politeknik eLBajo Commodus, Labuan Bajo, Nusa Tenggara",
  },
  {
    no: "17",
    date: "8 Juni 2023",
    name: "Muda Paham FinTech: Kiat Paham Penggunaan Inovasi Teknologi",
    venue: "Kepulauan Bangka Belitung",
  },
  {
    no: "16",
    date: "23 - 25 Juni 2022",
    name: "FinTech Socialization",
    venue: "Online, Makassar",
  },
  {
    no: "15",
    date: "26 November 2021",
    name: "FinTech Socialization",
    venue: "Online, Malang",
  },
  {
    no: "14",
    date: "28 Oktober 2021",
    name: "FinTech Socialization",
    venue: "IAIN Bukit Tinggi, Bukit Tinggi",
  },
  {
    no: "13",
    date: "26 Oktober 2021",
    name: "FinTech Lending Sebagai Inovasi dan Solusi Keuangan di Masa Pandemi",
    venue: "Universitas Maritim Raja Ali Haji, Tanjung Pinang",
  },
  {
    no: "12",
    date: "26 - 27 Februari 2020",
    name: "FIN EAST : Cerdas di Era Industri 4.0",
    venue: "Aston Hotel Kupang, Nusa Tenggara Timur",
  },
  {
    no: "11",
    date: "18 Februari 2020",
    name: "Legal FinTech and Entrepeneurship",
    venue: "University of Jambi, Jambi",
  },
  {
    no: "10",
    date: "14 Februari 2020",
    name: "Financial Innovation and FinTech",
    venue: "Bengkulu University, Bengkulu",
  },
  {
    no: "09",
    date: "22 Januari 2020",
    name: "Smart Utilization of FinTech",
    venue: "Universal University, Batam",
  },
  {
    no: "08",
    date: "22 Januari 2020",
    name: "Smart Utilization of FinTech",
    venue: "Cambridge City Square, Medan, Sumatera Utara",
  },
  {
    no: "07",
    date: "17 Januari 2020",
    name: "Challenge and Possibilities: Entrepeneurship and FinTech",
    venue: "Sam Ratulangi University, Manado, Sulawesi Utara",
  },
  {
    no: "06",
    date: "15 Januari 2020",
    name: "Challenge and Possibilities: Entrepeneurship and FinTech",
    venue: "State University of Gorontalo, Sulawesi Utara",
  },
  {
    no: "05",
    date: "13 Januari 2020",
    name: "Challenge and Possibilities: Entrepeneurship and FinTech",
    venue: "Hansanuddin University of Makassar, Sulawesi Selatan",
  },
  {
    no: "04",
    date: "14 Desember 2019",
    name: "Modern Financial Solutions with FinTech",
    venue: "STIE YKP Yogyakarta, Yogyakarta",
  },
  {
    no: "03",
    date: "13 Desember 2019",
    name: "Legal FinTech Socialization & Education",
    venue: "Trisco TAM Factory, Bandung, Jawa Barat",
  },
  {
    no: "02",
    date: "11 Desember 2019",
    name: "FinTech: Now or Never",
    venue: "Sebelas Maret University, Solo/Surakarta, Jawa Tengah",
  },
  {
    no: "01",
    date: "26 November 2019",
    name: "Yang Muda Yang Berbisnis (Youth & Entrepeneurship)",
    venue: "Telkom University, Bandung, Jawa Barat",
  },
  {
    no: "00",
    date: "01 November 2019",
    name: "Financial Technology Progress in Indonesia",
    venue: "El Bajo, Commodus Polytechnic, Labuan Bajo, Nusa Tenggara Timur",
  },
];

export default function EventsAndActivitiesAbout() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Title in Indonesian */}
        <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-8">
          Acara dan Kegiatan
        </h2>

        {/* Table Container */}
        <div className="overflow-x-auto shadow-md max-h-[70vh] sm:max-h-[70vh] overflow-y-auto">
          <table className="w-full table-auto border-collapse min-w-full">
            <thead className="sticky top-0 z-10">
              <tr className="bg-custom-green3 text-left">
                {/* Table headers in Indonesian */}
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Tanggal
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Nama Kegiatan
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Tempat
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {activities.map((activity) => (
                <tr
                  key={activity.no}
                  className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors last:border-b-0"
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                    {activity.date}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">
                    {activity.name}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">
                    {activity.venue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
