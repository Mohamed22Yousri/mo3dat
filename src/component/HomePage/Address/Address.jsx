import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

export default function Address() {
  const { lang } = useContext(LanguageContext);

  const content = {
    ar: {
      title: "موقعنا",
      desc: "تقدر تزورنا في أي وقت ✨",
      addressTitle: "📍 العنوان",
      city: "القاهرة - مصر",
      street: "شارع التحرير، وسط البلد، بجوار المترو",
      phone: "📞 +20 100 000 0000",
      email: "✉️ example@gmail.com",
    },

    en: {
      title: "Our Location",
      desc: "You can visit us anytime ✨",
      addressTitle: "📍 Address",
      city: "Cairo - Egypt",
      street: "Tahrir Street, Downtown, Near Metro Station",
      phone: "📞 +20 100 000 0000",
      email: "✉️ example@gmail.com",
    },
  };

  const t = content[lang];

  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        {/* Title */}

        <div className="text-center mb-5">
          <h1 className="fw-bold display-4">{t.title}</h1>

          <p className="text-secondary fs-5">{t.desc}</p>
        </div>

        {/* Content */}

        <div className="row align-items-center g-5">
          {/* Address Info */}

          <div className="col-lg-6">
            <div className="bg-white shadow-lg rounded-4 p-5 h-100">
              <h2 className="fw-bold mb-4">{t.addressTitle}</h2>

              <p className="fs-4 text-dark mb-3">{t.city}</p>

              <p className="text-secondary fs-5">{t.street}</p>

              <hr className="my-4" />

              <p className="fs-5">{t.phone}</p>

              <p className="fs-5">{t.email}</p>
            </div>
          </div>

          {/* Map */}

          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27640.696807572855!2d31.168921607765288!3d30.00565528271077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smacdonald!5e0!3m2!1sar!2seg!4v1778875919173!5m2!1sar!2seg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
