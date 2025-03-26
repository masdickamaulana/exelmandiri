import { useRef } from "react";
import useInView from "../hooks/useInView";
import Image from "next/image";
import heroImage from "../images/las.jpg"; // Pastikan path sesuai

export default function Home() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef); // Deteksi apakah section terlihat

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Gambar background full screen */}
      <Image
        src={heroImage}
        alt="PT. EXEL MANDIRI INOVASI"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
      />

      {/* Overlay & Animated Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center z-10">
        {/* Judul dengan animasi */}
        <h1
          className={`text-white text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out drop-shadow-lg
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"}`}
        >
          PT. EXEL MANDIRI INOVASI
        </h1>

        {/* Garis bawah */}
        <div
          className={`w-32 md:w-48 h-1 bg-white my-4 transition-all duration-1000 ease-out delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"}`}
        ></div>

        {/* Deskripsi dengan animasi */}
        <p
          className={`text-white text-sm md:text-lg max-w-3xl leading-relaxed transition-all duration-1000 ease-out delay-300 drop-shadow-md
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"}`}
        >
          PT Exel Mandiri Inovasi is a company operating in mechanical engineering services / contractors which includes installation, manufacturing, and fabrication works.
        </p>
      </div>
    </section>
  );
}
