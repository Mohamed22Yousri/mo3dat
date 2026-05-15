import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import mfk from "../../../assets/1141272130140-2_410x.jpg";

export default function Products() {
  const { lang } = useContext(LanguageContext);

  const products = {
    ar: [
      {
        id: 1,
        name: "مفك عادي",
        price: "1200",
        image: mfk,
      },

      {
        id: 2,
        name: "مفك عادي",
        price: "150",
        image: mfk,
      },

      {
        id: 3,
        name: "مفك عادي",
        price: "80",
        image: mfk,
      },

      {
        id: 4,
        name: "مفك عادي",
        price: "40",
        image: mfk,
      },

      {
        id: 5,
        name: "مفك عادي",
        price: "500",
        image: mfk,
      },

      {
        id: 6,
        name: "مفك عادي",
        price: "900",
        image: mfk,
      },
    ],

    en: [
      {
        id: 1,
        name: "Flathead Screwdriver",
        price: "1200",
        image: mfk,
      },

      {
        id: 2,
        name: "Flathead Screwdriver",
        price: "150",
        image: mfk,
      },

      {
        id: 3,
        name: "Flathead Screwdriver",
        price: "80",
        image: mfk,
      },

      {
        id: 4,
        name: "Flathead Screwdriver",
        price: "40",
        image: mfk,
      },

      {
        id: 5,
        name: "Flathead Screwdriver",
        price: "500",
        image: mfk,
      },

      {
        id: 6,
        name: "Flathead Screwdriver",
        price: "900",
        image: mfk,
      },
    ],
  };

  const t = {
    ar: {
      title: "منتجاتنا",
      btn: "اشتري الآن",
    },

    en: {
      title: "Our Products",
      btn: "Buy Now",
    },
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">{t[lang].title}</h1>

      <div className="row g-4">
        {products[lang].map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow border-0 h-100 text-center">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>

                <p className="text-primary fw-bold fs-5">
                  {" "}
                  <span>EGP</span>:{product.price}
                </p>

                <button className="btn btn-dark">{t[lang].btn}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
