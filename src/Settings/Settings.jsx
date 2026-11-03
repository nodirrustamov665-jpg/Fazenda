import React, { useState, useEffect } from "react";
import "./Settings.css";
import { useLanguage } from "../LanguageContext";
import { useSettings } from "../SettingsContext";

const translations = {
  uz: {
    title: "Sozlamalar",
    subtitle: "Fazenda sayti sozlamalarini boshqaring",
    language: "Til sozlamalari",
    profile: "Profil ma’lumotlari",
    notifications: "Bildirishnomalar",
    appearance: "Ko‘rinish va dizayn",
    location: "Manzil va xarita",
    social: "Ijtimoiy tarmoqlar",
    restaurant: "Restoran ma’lumotlari",
    privacy: "Maxfiylik va xavfsizlik",
    support: "Yordam markazi",
    name: "Ismingiz",
    phone: "Telefon raqami",
    email: "Elektron pochta",
    save: "O‘zgarishlarni saqlash",
    currency: "Valyuta",
    hours: "Ish vaqti",
    address: "Restoran manzili",
    dark: "Tungi rejim",
    offers: "Aksiyalar haqida xabarlar",
    orders: "Buyurtmalar haqida xabarlar",
    news: "Yangi taomlar haqida xabarlar",
    map: "Xaritada ochish",
    telegram: "Telegram",
    instagram: "Instagram",
    saved: "Sozlamalar muvaffaqiyatli saqlandi!",
    help: "Savol yoki taklifingiz bormi?",
    contact: "Biz bilan bog‘laning",
    selectLanguage: "Sayt tilini tanlang",
    selectCurrency: "Narxlar valyutasini tanlang",
    open: "07:00 – 23:00",
    privacyText: "Shaxsiy ma’lumotlaringizni himoya qiling.",
    account: "Hisob sozlamalari",
    clear: "Maydonlarni tozalash",
    notificationDesc: "Xabarlarni boshqaring",
    appearanceDesc: "Sayt ko‘rinishini sozlang",
    findUs: "Bizni toping",
    followUs: "Bizni kuzatib boring",
    replaceLinks: "Ijtimoiy tarmoq havolalarini o‘zingizning haqiqiy sahifalaringizga almashtiring.",
    profileLocal: "Mahalliy",
    security: "Ma’lumotlaringiz xavfsizligi",
    demo: "Bu demo sahifa. Haqiqiy hisob himoyasi uchun backend va autentifikatsiya kerak.",
    contactText: "Savollaringiz bo‘lsa, biz bilan bog‘laning.",
    on: "Yoqilgan",
    off: "O‘chirilgan",
    service: "Buyurtma xizmati",
    serviceDesc: "Buyurtmani qanday qabul qilishni tanlang",
    pickup: "Olib ketish",
    pickupDesc: "Buyurtmani restorandan o‘zingiz olib keting",
    delivery: "Yetkazib berish",
    deliveryDesc: "Buyurtmangizni ko‘rsatilgan manzilga yetkazamiz",
    selected: "Tanlandi"
  },

  ru: {
    title: "Настройки",
    subtitle: "Управляйте настройками сайта Fazenda",
    language: "Настройки языка",
    profile: "Данные профиля",
    notifications: "Уведомления",
    appearance: "Внешний вид",
    location: "Адрес и карта",
    social: "Социальные сети",
    restaurant: "Информация о ресторане",
    privacy: "Конфиденциальность и безопасность",
    support: "Центр помощи",
    name: "Ваше имя",
    phone: "Номер телефона",
    email: "Электронная почта",
    save: "Сохранить изменения",
    currency: "Валюта",
    hours: "Часы работы",
    address: "Адрес ресторана",
    dark: "Тёмный режим",
    offers: "Уведомления об акциях",
    orders: "Уведомления о заказах",
    news: "Уведомления о новых блюдах",
    map: "Открыть на карте",
    telegram: "Telegram",
    instagram: "Instagram",
    saved: "Настройки успешно сохранены!",
    help: "Есть вопросы или предложения?",
    contact: "Связаться с нами",
    selectLanguage: "Выберите язык сайта",
    selectCurrency: "Выберите валюту",
    open: "07:00 – 23:00",
    privacyText: "Защищайте свои личные данные.",
    account: "Настройки аккаунта",
    clear: "Очистить поля",
    notificationDesc: "Управление уведомлениями",
    appearanceDesc: "Настройте внешний вид сайта",
    findUs: "Найдите нас",
    followUs: "Следите за нами",
    replaceLinks: "Замените ссылки на ваши официальные страницы.",
    profileLocal: "Локально",
    security: "Безопасность ваших данных",
    demo: "Это демонстрационная страница. Для реальной защиты нужны сервер и авторизация.",
    contactText: "Если у вас есть вопросы, свяжитесь с нами.",
    on: "Включено",
    off: "Выключено",
    service: "Способ получения заказа",
    serviceDesc: "Выберите способ получения заказа",
    pickup: "Самовывоз",
    pickupDesc: "Заберите заказ самостоятельно из ресторана",
    delivery: "Доставка",
    deliveryDesc: "Мы доставим ваш заказ по указанному адресу",
    selected: "Выбрано"
  },

  en: {
    title: "Settings",
    subtitle: "Manage your Fazenda website settings",
    language: "Language settings",
    profile: "Profile information",
    notifications: "Notifications",
    appearance: "Appearance and design",
    location: "Location and map",
    social: "Social media",
    restaurant: "Restaurant information",
    privacy: "Privacy and security",
    support: "Help center",
    name: "Your name",
    phone: "Phone number",
    email: "Email address",
    save: "Save changes",
    currency: "Currency",
    hours: "Opening hours",
    address: "Restaurant address",
    dark: "Dark mode",
    offers: "Promotional notifications",
    orders: "Order notifications",
    news: "New dishes notifications",
    map: "Open in maps",
    telegram: "Telegram",
    instagram: "Instagram",
    saved: "Settings successfully saved!",
    help: "Have a question or suggestion?",
    contact: "Contact us",
    selectLanguage: "Choose website language",
    selectCurrency: "Choose currency",
    open: "07:00 – 23:00",
    privacyText: "Keep your personal information protected.",
    account: "Account settings",
    clear: "Clear fields",
    notificationDesc: "Manage your alerts",
    appearanceDesc: "Customize website appearance",
    findUs: "Find our restaurant",
    followUs: "Follow Fazenda online",
    replaceLinks: "Replace these links with your official social media pages.",
    profileLocal: "Local",
    security: "Your information security",
    demo: "This is a demo page. Real account security requires a backend and authentication.",
    contactText: "If you have questions, contact our team.",
    on: "Enabled",
    off: "Disabled",
    service: "Order service",
    serviceDesc: "Choose how you want to receive your order",
    pickup: "Pickup",
    pickupDesc: "Pick up your order from the restaurant",
    delivery: "Delivery",
    deliveryDesc: "We will deliver your order to your address",
    selected: "Selected"
  }
};

const defaultNotifications = {
  offers: true,
  orders: true,
  news: false
};

function readSavedSettings() {
  try {
    return JSON.parse(localStorage.getItem("fazenda-settings")) || {};
  } catch {
    return {};
  }
}

function Settings() {
  const { lang, setLang } = useLanguage();

  const {
    currency,
    setCurrency,
    darkMode,
    setDarkMode,
    notifications,
    setNotifications
  } = useSettings();

  const [profile, setProfile] = useState(() => {
    const saved = readSavedSettings();
    return saved.profile || { name: "", phone: "", email: "" };
  });

  const [address, setAddress] = useState(
    () => readSavedSettings().address || ""
  );

  const [hours, setHours] = useState(
    () => readSavedSettings().hours || "07:00 – 23:00"
  );

  const [serviceMode, setServiceMode] = useState(
    () => readSavedSettings().serviceMode || "pickup"
  );

  const [message, setMessage] = useState("");

  const t = translations[lang] || translations.uz;

  useEffect(() => {
    const saved = readSavedSettings();

    if (saved.lang && saved.lang !== lang) {
      setLang(saved.lang);
    }

    if (saved.currency && saved.currency !== currency) {
      setCurrency(saved.currency);
    }

    if (
      typeof saved.darkMode === "boolean" &&
      saved.darkMode !== darkMode
    ) {
      setDarkMode(saved.darkMode);
    }

    if (saved.notifications) {
      setNotifications({
        ...defaultNotifications,
        ...saved.notifications
      });
    }

    if (saved.address) setAddress(saved.address);
    if (saved.hours) setHours(saved.hours);
    if (saved.profile) setProfile(saved.profile);
    if (saved.serviceMode) setServiceMode(saved.serviceMode);
  }, []);

  const updateProfile = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const saveSettings = (e) => {
    e.preventDefault();

    const data = {
      lang,
      currency,
      darkMode,
      notifications,
      profile,
      address,
      hours,
      serviceMode
    };

    try {
      localStorage.setItem("fazenda-settings", JSON.stringify(data));
      setMessage(t.saved);
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Sozlamalarni saqlashda xatolik yuz berdi");
    }
  };

  const clearFields = () => {
    setProfile({
      name: "",
      phone: "",
      email: ""
    });

    setMessage("");
  };

  const languageOptions = [
    { value: "uz", label: "O‘zbekcha", sub: "O‘zbekiston" },
    { value: "ru", label: "Русский", sub: "Русский язык" },
    { value: "en", label: "English", sub: "English language" }
  ];

  return (
    <main className={`settings-page ${darkMode ? "dark" : "light"}`}>
      <div className="settings-heading">
        <div>
          <span className="settings-label">FAZENDA RESTORANI</span>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="settings-avatar">
          <img
            style={{ width: "50px", borderRadius: "10px" }}
            src="/8d6eaf7e-084b-4ce3-aa68-d5e0de6e0771_removalai_preview.png"
            alt="Fazenda"
          />
        </div>
      </div>

      {message && (
        <div className="settings-message" role="status">
          ✓ {message}
        </div>
      )}

      <form onSubmit={saveSettings}>
        <div className="settings-grid">

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/translation.png" alt="" />
              </span>

              <div>
                <h2>{t.language}</h2>
                <p>{t.selectLanguage}</p>
              </div>
            </div>

            <div className="settings-language-list">
              {languageOptions.map((item) => (
                <button
                  type="button"
                  key={item.value}
                  className={`language-option ${lang === item.value ? "active" : ""}`}
                  onClick={() => setLang(item.value)}
                >
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.sub}</small>
                  </span>

                  <span className="language-check">
                    {lang === item.value ? "✓" : ""}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/information.png" alt="" />
              </span>

              <div>
                <h2>{t.profile}</h2>
                <p>{t.account}</p>
              </div>
            </div>

            <div className="settings-field">
              <label htmlFor="profile-name">{t.name}</label>
              <input
                id="profile-name"
                name="name"
                value={profile.name}
                onChange={updateProfile}
                placeholder={t.name}
              />
            </div>

            <div className="settings-field">
              <label htmlFor="profile-phone">{t.phone}</label>
              <input
                id="profile-phone"
                name="phone"
                type="tel"
                value={profile.phone}
                onChange={updateProfile}
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div className="settings-field">
              <label htmlFor="profile-email">{t.email}</label>
              <input
                id="profile-email"
                name="email"
                type="email"
                value={profile.email}
                onChange={updateProfile}
                placeholder="example@email.com"
              />
            </div>

            <button
              type="button"
              className="settings-secondary-button"
              onClick={clearFields}
            >
              {t.clear}
            </button>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/ringing.png" alt="" />
              </span>

              <div>
                <h2>{t.notifications}</h2>
                <p>{t.notificationDesc}</p>
              </div>
            </div>

            {[
              ["offers", t.offers],
              ["orders", t.orders],
              ["news", t.news]
            ].map(([key, label]) => (
              <div className="settings-toggle-row" key={key}>
                <span>{label}</span>

                <button
                  type="button"
                  role="switch"
                  aria-checked={Boolean(notifications[key])}
                  className={`settings-switch ${notifications[key] ? "on" : ""}`}
                  onClick={() => toggleNotification(key)}
                  aria-label={label}
                >
                  <span />
                </button>
              </div>
            ))}
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/color-palette.png" alt="" />
              </span>

              <div>
                <h2>{t.appearance}</h2>
                <p>{t.appearanceDesc}</p>
              </div>
            </div>

            <div className="settings-toggle-row">
              <span>{t.dark}</span>

              <button
                type="button"
                role="switch"
                aria-checked={Boolean(darkMode)}
                className={`settings-switch ${darkMode ? "on" : ""}`}
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label={t.dark}
              >
                <span />
              </button>
            </div>

            <div className="settings-field">
              <label htmlFor="settings-currency">{t.currency}</label>

              <select
                id="settings-currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="UZS">UZS — So‘m</option>
                <option value="USD">USD — Dollar</option>
                <option value="RUB">RUB — Rubl</option>
              </select>
            </div>
          </section>


          <section className="settings-card settings-service-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/management-service.png" alt="" />
              </span>

              <div>
                <h2>{t.service}</h2>
                <p>{t.serviceDesc}</p>
              </div>
            </div>

            <div className="settings-service-options">
              <button
                type="button"
                className={`settings-service-option ${serviceMode === "pickup" ? "active" : ""}`}
                onClick={() => setServiceMode("pickup")}
                aria-pressed={serviceMode === "pickup"}
              >
                <span className="service-icon"><img src="/take-away.png" alt="" /></span>

                <span className="service-content">
                  <strong>{t.pickup}</strong>
                  <small>{t.pickupDesc}</small>
                </span>

                <span className="service-check">
                  {serviceMode === "pickup" ? "✓" : ""}
                </span>
              </button>

              <button
                type="button"
                className={`settings-service-option ${serviceMode === "delivery" ? "active" : ""}`}
                onClick={() => setServiceMode("delivery")}
                aria-pressed={serviceMode === "delivery"}
              >
                <span className="service-icon"><img src="/motorbike.png" alt="" /></span>

                <span className="service-content">
                  <strong>{t.delivery}</strong>
                  <small>{t.deliveryDesc}</small>
                </span>

                <span className="service-check">
                  {serviceMode === "delivery" ? "✓" : ""}
                </span>
              </button>
            </div>

            <div className="settings-service-status">
              <span className="service-status-dot" />
              {t.selected}:{" "}
              <strong>
                {serviceMode === "pickup" ? t.pickup : t.delivery}
              </strong>
            </div>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/maps-and-flags.png" alt="" />
              </span>

              <div>
                <h2>{t.location}</h2>
                <p>{t.findUs}</p>
              </div>
            </div>

            <div className="settings-field">
              <label htmlFor="restaurant-address">{t.address}</label>
              <input
                id="restaurant-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t.address}
              />
            </div>

            <div className="settings-field">
              <label htmlFor="restaurant-hours">{t.hours}</label>
              <input
                id="restaurant-hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder={t.open}
              />
            </div>

            <a
              className="settings-link-button"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || "Fazenda restaurant Uzbekistan")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.map} ↗
            </a>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/advertising.png" alt="" />
              </span>

              <div>
                <h2>{t.social}</h2>
                <p>{t.followUs}</p>
              </div>
            </div>

            <a
              className="settings-social-link"
              href="https://t.me/ego_bekzod"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-letter">
                <img src="/round (1).png" alt="" />
              </span>

              <span>
                {t.telegram}
                <small>@fazenda</small>
              </span>

              <b>↗</b>
            </a>

            <a
              className="settings-social-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-letter">
                <img src="/instagram (4).png" alt="" />
              </span>

              <span>
                {t.instagram}
                <small>@fazenda</small>
              </span>

              <b>↗</b>
            </a>

            <div className="settings-note">{t.replaceLinks}</div>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/information (1).png" alt="" />
              </span>

              <div>
                <h2>{t.restaurant}</h2>
                <p>FAZENDA RESTORANI</p>
              </div>
            </div>

            <div className="settings-info-row">
              <span>{t.hours}</span>
              <strong>{hours || t.open}</strong>
            </div>

            <div className="settings-info-row">
              <span>{t.currency}</span>
              <strong>{currency}</strong>
            </div>

            <div className="settings-info-row">
              <span>{t.language}</span>
              <strong>{lang.toUpperCase()}</strong>
            </div>

            <div className="settings-info-row">
              <span>{t.service}</span>
              <strong>
                {serviceMode === "pickup" ? t.pickup : t.delivery}
              </strong>
            </div>
          </section>

          <section className="settings-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/privacy-policy.png" alt="" />
              </span>

              <div>
                <h2>{t.privacy}</h2>
                <p>{t.security}</p>
              </div>
            </div>

            <p className="settings-privacy-text">{t.privacyText}</p>

            <div className="settings-info-row">
              <span>{t.profile}</span>
              <strong>{t.profileLocal}</strong>
            </div>

            <div className="settings-note">{t.demo}</div>
          </section>

          <section className="settings-card settings-support-card">
            <div className="settings-card-heading">
              <span className="settings-symbol">
                <img src="/customer-service.png" alt="" />
              </span>

              <div>
                <h2>{t.support}</h2>
                <p>{t.help}</p>
              </div>
            </div>

            <p className="settings-privacy-text">{t.contactText}</p>

            <a
              className="settings-link-button"
              href="mailto:info@fazenda.uz"
            >
              {t.contact} ↗
            </a>
          </section>

        </div>

        <div className="settings-save-area">
          <button type="submit" className="settings-save-button">
            {t.save} <span>✓</span>
          </button>
        </div>
      </form>
    </main>
  );
}

export default Settings;