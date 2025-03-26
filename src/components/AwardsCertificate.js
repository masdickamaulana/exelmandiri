import { useState } from "react";
import Image from "next/image";

const awardsData = [
  { src: "/images/awards/1.png", alt: "Certificate 1" },
  { src: "/images/awards/2.png", alt: "Certificate 2" },
  { src: "/images/awards/3.png", alt: "Certificate 3" },
  { src: "/images/awards/4.png", alt: "Certificate 4" },
  { src: "/images/awards/5.png", alt: "Certificate 5" },
  { src: "/images/awards/6.png", alt: "Certificate 6" },
  { src: "/images/awards/7.png", alt: "Certificate 7" },
  { src: "/images/awards/8.png", alt: "Certificate 8" },
  { src: "/images/awards/9.png", alt: "Certificate 9" },
  { src: "/images/awards/10.png", alt: "Certificate 10" },
  { src: "/images/awards/s1.png", alt: "Certificate 11" },
  { src: "/images/awards/s2.png", alt: "Certificate 12" },
  { src: "/images/awards/s3.png", alt: "Certificate 13" },
  { src: "/images/awards/s4.png", alt: "Certificate 14" },
];

export default function AwardsCertificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  // ✅ Row component
  const Row = ({ items }) => (
    <div className="flex justify-center flex-wrap gap-8 mb-12">
      {items.map((award, index) => (
        <div
          key={index}
          onClick={() => openImage(award.src)}
          className="cursor-pointer transition-transform hover:scale-105"
        >
          <Image
            src={award.src}
            alt={award.alt}
            width={900} // ✅ Lebih besar dan tajam
            height={900}
            className="object-contain w-auto h-auto max-w-full max-h-[550px]" // ✅ Ukuran lebih besar
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="awards-certificate" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Awards & Certificates
        </h2>

        {/* ✅ Baris sesuai keinginan */}
        <Row items={awardsData.slice(0, 4)} />
        <Row items={awardsData.slice(4, 7)} />
        <Row items={awardsData.slice(7, 10)} />
        <Row items={awardsData.slice(10, 14)} />

        {/* ✅ Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] mx-auto p-4"
              onClick={(e) => e.stopPropagation()} // Biar klik gambar ga nutup modal
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={900}
                className="object-contain rounded-lg w-full h-full"
              />
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-4xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
