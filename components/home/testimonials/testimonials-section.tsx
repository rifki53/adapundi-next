// components/testimonials/TestimonialsSection.tsx

import React from "react";
import TestimonialCard from "./testimonial-card"; // Impor komponen kartu

// Impor gambar dan video thumbnail
import videothumb1 from "@/public/images/videothumb/videothumb-1.png";
import videothumb2 from "@/public/images/videothumb/videothumb-2.png";
import videothumb3 from "@/public/images/videothumb/videothumb-3.png";
import cevyimage from "@/public/images/testimonial/cevy.png";
import shuharti from "@/public/images/testimonial/suharti.png";
import bahrudin from "@/public/images/testimonial/bahrudin.png";

// Data testimoni
const testimonials = [
  {
    img: shuharti,
    name: "Suharti",
    date: "13 September 2023",
    content: "“Dana yang cepat cairnya sangat membantu usaha saya, terima kasih Adapundi”",
    videoThumb: videothumb1,
    videoUrl: "https://assets.adapundi.com/adapundi/media/AP+-+1309+30+sec.mp4",
  },
  {
    img: bahrudin,
    name: "Bahrudin",
    date: "22 August 2023",
    content: "“Usaha saya terbantu karena pinjamannya, berlimit tinggi dan tenornya panjang”",
    videoThumb: videothumb2,
    videoUrl: "https://assets.adapundi.com/adapundi/media/AP+-+2208+15+sec.mp4",
  },
  {
    img: cevyimage,
    name: "Cevy",
    date: "9 April 2023",
    content: "“Aplikasi Adapundi limitnya besar dan pencairan cepat, sehingga bisa mendukung usaha saya”",
    videoThumb: videothumb3,
    videoUrl: "https://assets.adapundi.com/adapundi/media/0920+60sec-App-landscape.mp4",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Sahabat Perjalanan Keuangan Anda
            </h2>
          </div>

          {/* Grid Testimoni */}
          <div className="grid items-start gap-4 sm:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name} // Gunakan nama atau id unik sebagai key
                className={`group ${index > 0 ? "hidden sm:block" : ""}`}
              >
                <TestimonialCard testimonial={testimonial} className="w-full">
                  {testimonial.content}
                </TestimonialCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
