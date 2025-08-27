// src/components/BackgroundVideo.tsx
"use client";

export default function BackgroundVideo() {
  return (
    <>
      {/* Desktop Video */}
      <video
        className="hidden md:block fixed inset-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        poster="/Hero-mobile.png"
      >
        <source src="/Hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Image */}
      <div className="md:hidden fixed inset-0 w-full h-full overflow-hidden z-[-1]">
        <img
          src="/Hero-mobile.png"
          alt="Hero Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
