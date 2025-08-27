// src/components/BackgroundVideo.tsx
"use client";

export default function BackgroundVideo() {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      autoPlay
      loop
      muted
      playsInline
      poster="/Hero-mobile.png"
    >
      <source src="/Hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
