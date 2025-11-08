import Image from "next/image";

async function getStats() {
  try {
    // Fetch data from the external API
    const res = await fetch("https://ap-api.adapundi.com/web-app/data", {
      // Using no-cache to get fresh data on every request,
      // or you can use next: { revalidate: 3600 } to revalidate every hour
      cache: "no-store",
    });

    if (!res.ok) {
      // This will be caught by the error boundary
      throw new Error("Failed to fetch stats data");
    }

    const json = await res.json();

    if (json.success && Array.isArray(json.data)) {
      return json.data;
    } else {
      return [];
    }
  } catch (e) {
    console.error("Failed to fetch stats:", e);
    // In case of an error, return an empty array to prevent the page from crashing
    return [];
  }
}

export default async function FundingStatisticsAbout() {
  const stats = await getStats();

  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-12 text-center sm:text-left">
          Statistik Pendanaan
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Static Image Column */}
          <div className="hidden sm:block rounded-3xl border-2 border-white overflow-hidden row-span-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/punpun/Tips.png"
                alt="Statistics"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 0vw, 25vw"
              />
            </div>
          </div>

          {/* Loop through data from the API */}
          {stats.map((item: any) => (
            <div
              key={item.dataId}
              className="rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="flex flex-col">
                <div className="bg-custom-green3 p-4 text-center">
                  <div className="text-xl font-bold font-inter text-white">
                    {item.value}
                  </div>
                </div>
                <div className="p-4 h-full">
                  <div className="px-2 text-center">
                    <p className="text-base text-gray-800 font-medium font-montserrat">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
