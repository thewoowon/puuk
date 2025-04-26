const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundImage: "url('/assets/images/puuk_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "transform 0.5s ease-in-out",
        willChange: "transform",
        pointerEvents: "none",
        // Optional: Add a slight animation effect
        // Optional: og image
      }}
    ></div>
  );
};

export default Background;
