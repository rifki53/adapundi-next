// Data for financial statements
const financialStatements = [
  { year: 2024, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2024.pdf" },
  { year: 2023, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2023.pdf" },
  { year: 2022, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2022.pdf" },
  { year: 2021, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2021.pdf" },
  { year: 2020, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2020.pdf" },
];

// PDF Icon Component
const PdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.658-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.22.25.21.646.01.884-.202.238-.529.333-.924.372a6.456 6.456 0 0 1-1.43.007a.903.903 0 0 1-.825-.67c-.08-.264-.043-.546.09-.795.134-.248.355-.45.645-.563.29-.113.63-.194.998-.194a.5.5 0 0 0 .042-.003.5.5 0 0 0 .488-.543a.5.5 0 0 0-.543-.488c-.281-.05-.635-.047-.974.042a5.46 5.46 0 0 0-1.287.538 6.023 6.023 0 0 0-.918 1.063 10.724 10.724 0 0 0-.918-1.063 5.46 5.46 0 0 0-1.287-.538c-.339-.09-.693-.093-.974-.042a.5.5 0 0 0-.488.543.5.5 0 0 0 .543.488.5.5 0 0 0 .042.003c.363 0 .708.08.998.194.29.113.511.315.645.563.133.248.17.53.09.794a.902.902 0 0 1-.825.67 6.456 6.456 0 0 1-1.43-.007c-.395-.04-.722-.134-.924-.372a.81.81 0 0 1 .01-.884c.226-.27.596-.4.96-.465a5.753 5.753 0 0 1 1.334-.05 10.954 10.954 0 0 0 .98-1.686c-.25-.66-.436-1.284-.52-1.794-.035-.218-.054-.426-.047-.614a.7.7 0 0 1 .127-.538.7.7 0 0 1 .477-.365c.202-.043.41.004.602.077.384.151.583.469.658.823.073.34-.007.75-.046 1.136a7.269 7.269 0 0 1-.43 1.295c-.216.516-.497 1.02-.82 1.462l.062.052a19.697 19.697 0 0 0 1.062 2.227 7.68 7.68 0 0 1 1.482.645c.37.219.7.48.897.787.21.326.275.714.08 1.102a.81.81 0 0 1-.438.42c-.2.1-.458.158-.712.158-.254 0-.512-.058-.712-.158z"/>
  </svg>
);

export default function FinancialReports() {
  return (
    <section className="bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Title in Indonesian */}
        <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-8">
          Pernyataan Keuangan
        </h2>

        {/* Links Container */}
        <div className="bg-white shadow-md overflow-hidden">
          {/* Header in Indonesian */}
          <div className="bg-custom-green3 px-6 py-3">
            <span className="text-sm font-medium font-sans text-gray-900">
              Download Pernyataan Keuangan
            </span>
          </div>
          <div className="flex flex-col">
            {/* Financial Statement Links */}
            {financialStatements.map((statement) => (
              <a
                key={statement.year}
                href={statement.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 hover:bg-[#e2e7f0] transition-colors duration-200 text-gray-500 hover:text-gray-900 border-b border-gray-200 last:border-b-0"
              >
                <PdfIcon />
                {/* Link text in Indonesian */}
                <span className="text-sm font-medium font-sans">
                  Pernyataan Keuangan {statement.year}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
