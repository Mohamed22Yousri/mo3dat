import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import hero from "../../../assets/Hero.png";

export default function LandingPage() {
  const { lang } = useContext(LanguageContext);

  const content = {
    ar: {
      title: "اسم المحل",
      desc: "لبيع و ايجار المعدات",
      btn1: "ابدأ الآن",
      btn2: "اعرف أكثر",
    },

    en: {
      title: "Start Your Programming Journey 🚀",
      desc: "Learn React and build modern websites easily and fast.",
      btn1: "Get Started",
      btn2: "Learn More",
    },
  };

  const t = content[lang];

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Text */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-2 fw-bold mb-4">{t.title}</h1>

            <p className="lead text-secondary mb-4">{t.desc}</p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-primary btn-lg px-4">{t.btn1}</button>

              <button className="btn btn-outline-dark btn-lg px-4">
                {t.btn2}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img src={hero} alt="coding" className="img-fluid hero-float" />
          </div>
        </div>
      </div>
    </div>
  );
}
