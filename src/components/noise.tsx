export const Noise = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full opacity-[0.05] pointer-events-none z-10"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "250px 250px",
      }}
    ></div>
  );
};

