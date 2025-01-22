const images = [
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75",
    rotate: "-rotate-2",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75",
    rotate: "rotate-2",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75",
    rotate: "-rotate-2",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75",
    rotate: "rotate-2",
  },
  {
    src: "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=384&q=75",
    rotate: "-rotate-2",
  },
];

export function PictureBar() {
  return (
    <div className="grid grid-cols-5 gap-8 py-5">
      {images.map((image) => (
        <img
          src={image.src}
          alt="a"
          className={`object-cover aspect-[3/4] rounded-lg ${image.rotate}`}
        />
      ))}
    </div>
  );
}
