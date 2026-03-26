"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/galleryImg1.jpg",
  "/galleryImg2.jpg",
  "/galleryImg3.jpg",
  "/galleryImg4.jpg",
  "/galleryImg5.jpg",
  "/galleryImg6.jpg",
  "/galleryExtra.jpg",
  "/galleryExtra1.jpg",
  "/galleryExtra2.jpg",
  "/galleryImg10.jpg",
  "/galleryImg11.jpg",
  "/galleryImg12.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="px-4 py-10">
      
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-xl h-90"
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt=""
              width={500}
              height={400}
              className="w-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        styles={{
          container: { padding: "40px" }, // spacing from edges
        }}
      />
    </div>
  );
}