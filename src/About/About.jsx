import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useSettings } from "../SettingsContext";

const translations = {
  uz: {
    headingStart: "Milliy ta’m va",
    headingEnd: "samimiy mehmondo‘stlik",
    intro:
      "Fazenda — milliy taomlar, betakror ta’m va samimiy xizmat birlashgan maskan. Sizni unutilmas taassurotlar kutmoqda.",
    mainCaption: "Har bir ta’mda o‘ziga xoslik",
    bottomTitle: "Fazenda — ta’m va mehmondo‘stlik manzili",
    bottomText: "Sizni mazali taomlarimiz bilan kutib qolamiz!",
    menu: "Menyuni ko‘rish",
    cards: [
      {
        title: "Milliy taomlar",
        text: "An’anaviy retseptlar asosida tayyorlangan mazali taomlar."
      },
      {
        title: "Samimiy xizmat",
        text: "Har bir mehmonimizga hurmat va e’tibor bilan xizmat qilamiz."
      },
      {
        title: "Shinam muhit",
        text: "Oila va do‘stlar bilan vaqt o‘tkazish uchun yoqimli muhit."
      }
    ]
  },

  ru: {
    headingStart: "Национальный вкус и",
    headingEnd: "искреннее гостеприимство",
    intro:
      "Fazenda — место, где сочетаются национальная кухня, неповторимый вкус и внимательное обслуживание. Вас ждут незабываемые впечатления.",
    mainCaption: "Уникальность в каждом вкусе",
    bottomTitle: "Fazenda — место вкуса и гостеприимства",
    bottomText: "Будем рады видеть вас и угощать нашими блюдами!",
    menu: "Посмотреть меню",
    cards: [
      {
        title: "Национальные блюда",
        text: "Вкусные блюда, приготовленные по традиционным рецептам."
      },
      {
        title: "Искренний сервис",
        text: "Мы относимся к каждому гостю с уважением и вниманием."
      },
      {
        title: "Уютная атмосфера",
        text: "Приятное место для отдыха с семьёй и друзьями."
      }
    ]
  },

  en: {
    headingStart: "Traditional taste and",
    headingEnd: "genuine hospitality",
    intro:
      "Fazenda is a place where traditional cuisine, distinctive flavors, and friendly service come together. Unforgettable experiences await you.",
    mainCaption: "Something special in every flavor",
    bottomTitle: "Fazenda — a destination for taste and hospitality",
    bottomText: "We look forward to welcoming you and serving our delicious food!",
    menu: "View menu",
    cards: [
      {
        title: "Traditional Dishes",
        text: "Delicious meals prepared using traditional recipes."
      },
      {
        title: "Friendly Service",
        text: "We treat every guest with care, respect, and attention."
      },
      {
        title: "Cozy Atmosphere",
        text: "A welcoming place to spend time with family and friends."
      }
    ]
  }
};

const images = [
  "https://en.polaristravel.uz/thumb/2/VxLA0udARngKaxE78Xizmw/r/d/kuhnya_uzb.png",
  "https://cdn.gofoodservice.com/cms/how-to-start-a-food-delivery-business.69a0f38738cd3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBEu8ABouzdtzjZ6JPV3Qlf6ebH6Toq3E_8LssQHjAcsCAyAgM-CP8t4K&s=10"
];

function About() {
  const { lang } = useLanguage();
  const { darkMode } = useSettings();

  const t = translations[lang] || translations.uz;

  return (
    <section
      className={`about-page ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="about-hero">
        <div className="about-hero-text">
          <span className="about-label">FAZENDA RESTORANI</span>

          <h1>
            {t.headingStart} <span>{t.headingEnd}</span>
          </h1>

          <p>{t.intro}</p>
        </div>

        <div className="about-main-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekl4-s61fl7zDGMQTnyl1txACTrc7PqhO7jddduwJE6IrDmPezQ8RS4I&s=10"
            alt="Fazenda"
          />

          <div className="about-main-overlay">
            <h2>Fazenda</h2>
            <p>{t.mainCaption}</p>
          </div>
        </div>
      </div>

      <div className="about-cards">
        {t.cards.map((item, index) => (
          <article className="about-card" key={images[index]}>
            <div className="about-card-image">
              <img src={images[index]} alt={item.title} />
            </div>

            <div className="about-card-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="about-bottom">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY7D9XN_9ux7y0IsmIlWmhQzU_M-i4xjR2qnpOcZ9-ICUoJdFnFOX6sY&s=10"
          alt="Fazenda restaurant"
        />

        <div className="about-bottom-text">
          <h2>{t.bottomTitle}</h2>
          <p>{t.bottomText}</p>

          <Link to="/">
            {t.menu}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;