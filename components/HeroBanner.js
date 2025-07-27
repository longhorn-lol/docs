import Image from "next/image";

export function HeroBanner({ src, width, height, className }) {
  return (
    <Image
      src={src}
      alt=""
      className={`w-full h-64 object-cover mt-4 mb-6 rounded-lg ${className}`}
      width={width}
      height={height}
      priority
    />
  );
}
