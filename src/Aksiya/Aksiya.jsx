import React from "react";
import "./Aksiya.css";
import { useLanguage } from "../LanguageContext";
import { useSettings } from "../SettingsContext";

const translations = {
  uz: {
    heading: "Maxsus",
    headingBold: "aksiyalar",
    subtitle: "Siz uchun tayyorlangan mazali takliflar.",
    bannerLabel: "FAZENDA MAXSUS TAKLIFLARI",
    bannerTitle: "Ko‘proq lazzat, ko‘proq taassurot!",
    bannerText: "O‘zingizga mos taklifni tanlang.",
    menu: "Menyuni ko‘rish",
    offers: [
      {
        title: "Burger",
        discount: "20% chegirma",
        text: "Mazali burgerlar uchun maxsus taklif."
      },
      {
        title: "Milliy taomlar",
        discount: "15% chegirma",
        text: "Milliy taomlarimizdan bahramand bo‘ling."
      },
      {
        title: "Oilaviy dasturxon",
        discount: "Maxsus taklif",
        text: "Oilangiz bilan yoqimli vaqt o‘tkazing."
      },
      {
        title: "Ichimliklar",
        discount: "Bonus",
        text: "Tanlangan to‘plamlar uchun maxsus taklif."
      },
      {
        title: "Tug‘ilgan kun",
        discount: "10% chegirma",
        text: "Bayramingizni Fazenda bilan nishonlang."
      },
      {
        title: "Do‘stlar davrasi",
        discount: "Maxsus taklif",
        text: "Do‘stlaringiz bilan mazali taomlardan zavqlaning."
      }
    ]
  },

  ru: {
    heading: "Специальные",
    headingBold: "акции",
    subtitle: "Вкусные предложения, подготовленные для вас.",
    bannerLabel: "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ FAZENDA",
    bannerTitle: "Больше вкуса, больше впечатлений!",
    bannerText: "Выберите подходящее предложение.",
    menu: "Посмотреть меню",
    offers: [
      {
        title: "Бургер",
        discount: "Скидка 20%",
        text: "Специальное предложение для любителей бургеров."
      },
      {
        title: "Национальные блюда",
        discount: "Скидка 15%",
        text: "Насладитесь нашими национальными блюдами."
      },
      {
        title: "Семейный стол",
        discount: "Специальное предложение",
        text: "Проведите приятное время всей семьёй."
      },
      {
        title: "Напитки",
        discount: "Бонус",
        text: "Специальное предложение на выбранные наборы."
      },
      {
        title: "День рождения",
        discount: "Скидка 10%",
        text: "Отпразднуйте свой праздник вместе с Fazenda."
      },
      {
        title: "Встреча с друзьями",
        discount: "Специальное предложение",
        text: "Наслаждайтесь вкусными блюдами в компании друзей."
      }
    ]
  },

  en: {
    heading: "Special",
    headingBold: "offers",
    subtitle: "Delicious deals prepared just for you.",
    bannerLabel: "FAZENDA SPECIAL OFFERS",
    bannerTitle: "More flavor, more memorable moments!",
    bannerText: "Choose the offer that suits you.",
    menu: "View menu",
    offers: [
      {
        title: "Burger",
        discount: "20% off",
        text: "A special offer for delicious burgers."
      },
      {
        title: "National Dishes",
        discount: "15% off",
        text: "Enjoy our traditional national dishes."
      },
      {
        title: "Family Dining",
        discount: "Special offer",
        text: "Spend a wonderful time with your family."
      },
      {
        title: "Drinks",
        discount: "Bonus",
        text: "Special deals on selected drink bundles."
      },
      {
        title: "Birthday",
        discount: "10% off",
        text: "Celebrate your special day with Fazenda."
      },
      {
        title: "Friends Gathering",
        discount: "Special offer",
        text: "Enjoy delicious food with your friends."
      }
    ]
  }
};

const images = [
  "https://media-cdn.tripadvisor.com/media/photo-s/1a/f5/d3/4b/burger-rosti-savoyard.jpg",
  "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/uzb%20kuhny-0-0-0-0-1606719883.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10nWfia13D-7gfY_zHwBfoSzvx2ms6Z1y4_M_hmihJrCMnozWs73jlW51&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iwG2gnAxP_PfR3RxJgQ6haButL7zA4bF7qPbDt8A3rB713fekwrYdqxh&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMrDMxegV1iVhaIHYsHLpAo3yADUAPC-FmRCkxkSWyA&s=10",
  "https://media.istockphoto.com/id/1128671609/photo/a-midsection-people-sitting-at-a-table-on-a-indoor-party-clinking-glasses-top-view.jpg?s=612x612&w=0&k=20&c=VxUsRDEQ3kkMYDCLKN6mThThqtONAUerHjKlZlE8pTQ="
];

function Aksiya() {
  const { lang } = useLanguage();
  const { darkMode } = useSettings();

  const t = translations[lang] || translations.uz;
  const isDark = darkMode !== false;

  return (
    <section
      className={`aksiyalar-page ${isDark ? "dark" : "light"}`}
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="aksiya-heading">
        <span>FAZENDA RESTORANI</span>

        <h1>
          {t.heading} <b>{t.headingBold}</b>
        </h1>

        <p>{t.subtitle}</p>
      </div>

      <div className="aksiya-banner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIX9e00L1pjPcY8bphHFD5ccOuTWsGnKkB1xvFklAg6S2n_2Lf-YOc4Bw&s=10"
          alt={t.bannerLabel}
        />

        <div className="aksiya-banner-text">
          <span>{t.bannerLabel}</span>
          <h2>{t.bannerTitle}</h2>
          <p>{t.bannerText}</p>
        </div>
      </div>

      <div className="aksiya-grid">
        {t.offers.map((item, index) => (
          <article className="aksiya-card" key={item.title}>
            <div className="aksiya-card-image">
              <img
                src={images[index]}
                alt={item.title}
                loading="lazy"
              />

              <div className="aksiya-image-text">
                <span>{item.discount}</span>
                <h2>{item.title}</h2>
              </div>
            </div>

            <div className="aksiya-card-body">
              <p>{item.text}</p>
              <a href="/">{t.menu}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Aksiya;