import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

export default function NavBar() {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand" href="#">
        {lang === "ar" ? "موقعي" : "My App"}
      </a>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link">
              {lang === "ar" ? "الصفحه الرئيسية" : "Home"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {lang === "ar" ? " المعدات" : "Equipment"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">{lang === "ar" ? " العنوان" : "Address"}</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">{lang === "ar" ? "عننا" : "About"}</a>
          </li>

          <li className="nav-item">
            <a className="nav-link">{lang === "ar" ? "التواصل" : "Contact"}</a>
          </li>
        </ul>

        <button onClick={toggleLang} className="btn btn-warning">
          {lang === "ar" ? "EN" : "AR"}
        </button>
      </div>
    </nav>
  );
}
