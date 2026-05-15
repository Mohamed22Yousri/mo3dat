import emailjs from "@emailjs/browser";
import { useRef, useState, useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

export default function Contact() {

  const form = useRef();
  const { lang } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const content = {
    ar: {
      title: "تواصل معنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      btn: "إرسال",
      sending: "جاري الإرسال...",
      success: "تم الإرسال بنجاح ✅",
    },
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      btn: "Send",
      sending: "Sending...",
      success: "Message sent successfully ✅",
    },
  };

  const t = content[lang];

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    emailjs.sendForm(
      "service_mql54fr",
      "template_gchwoeg",
      form.current,
      "4sQ7LOGYObNKqlJyF"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      form.current.reset();
    })
    .catch(() => {
      setLoading(false);
      alert("Error sending message ❌");
    });
  };

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-4">
        {t.title}
      </h1>

      <div className="row justify-content-center">

        <div className="col-lg-6">

          <form ref={form} onSubmit={sendEmail} className="shadow p-4 rounded bg-white">

            <input
              type="text"
              name="user_name"
              className="form-control mb-3"
              placeholder={t.name}
              required
            />

            <input
              type="email"
              name="user_email"
              className="form-control mb-3"
              placeholder={t.email}
              required
            />

            <textarea
              name="message"
              className="form-control mb-3"
              rows="5"
              placeholder={t.message}
              required
            ></textarea>

            <button
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? t.sending : t.btn}
            </button>

            {success && (
              <p className="text-success text-center mt-3">
                {t.success}
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
}