import { useState, useEffect } from "react";
import vid1 from "../../assets/vid-1.mp4";
import "../Loader/Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // بدل event listener على window load، استخدم timeout بسيط
    const timer = setTimeout(() => setLoading(false), 2000); // 2 ثانية مثلاً

    // تنظيف بعد المكون يتشال
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader vh-100 d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 end-0 start-0 bg-white">
      <video autoPlay loop muted playsInline className="loader-video">
        <source src={vid1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
