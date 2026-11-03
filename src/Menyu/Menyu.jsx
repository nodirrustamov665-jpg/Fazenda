import React, { useMemo, useState } from "react";
import "./Menyu.css";
import { useLanguage } from "../LanguageContext";
import { useSettings } from "../SettingsContext";

const translations = {
  uz: {
    title: "Fazenda Restoranti",
    subtitle: "Mazali taomlarimizni tanlang",
    searchPlaceholder: "Menyudan qidirish...",
    categories: {
      food: "Taomlar",
      salads: "Salatlar",
      drinks: "Ichimliklar",
      desserts: "Shirinliklar",
    },
    addOn: "Qo‘shish",
    order: "Buyurtma",
    total: "Jami",
    empty: "Taom topilmadi",
    cartEmpty: "Savatingiz hozircha bo‘sh",
    remove: "O‘chirish",
    clear: "Tozalash",
    cartTitle: "Buyurtmalar",
    count: "Mahsulotlar",
    products: "ta mahsulot",
    currency: "so‘m",
    decrease: "Kamaytirish",
    increase: "Ko‘paytirish",
  },

  ru: {
    title: "Ресторан Fazenda",
    subtitle: "Выберите наши вкусные блюда",
    searchPlaceholder: "Поиск по меню...",
    categories: {
      food: "Блюда",
      salads: "Салаты",
      drinks: "Напитки",
      desserts: "Десерты",
    },
    addOn: "Добавить",
    order: "Заказ",
    total: "Итого",
    empty: "Блюдо не найдено",
    cartEmpty: "Ваша корзина пока пуста",
    remove: "Удалить",
    clear: "Очистить",
    cartTitle: "Заказы",
    count: "Товары",
    products: "товаров",
    currency: "сум",
    decrease: "Уменьшить",
    increase: "Увеличить",
  },

  en: {
    title: "Fazenda Restaurant",
    subtitle: "Choose our delicious meals",
    searchPlaceholder: "Search menu...",
    categories: {
      food: "Food",
      salads: "Salads",
      drinks: "Drinks",
      desserts: "Desserts",
    },
    addOn: "Add",
    order: "Order",
    total: "Total",
    empty: "No food found",
    cartEmpty: "Your cart is empty",
    remove: "Remove",
    clear: "Clear",
    cartTitle: "Orders",
    count: "Products",
    products: "products",
    currency: "UZS",
    decrease: "Decrease",
    increase: "Increase",
  },
};

const foodsData = [
  {
    id: 2,
    name: "Plov",
    price: 55000,
    category: "food",
    image:
      "https://adrastravel.com/wp-content/uploads/2021/12/plov-na-lyagane.jpg",
  },
  {
    id: 3,
    name: "Shashlik",
    price: 15000,
    category: "food",
    image:
      "https://nutriscan.app/calories-nutrition/images/shashlik-59baf.webp",
  },
  {
    id: 4,
    name: "Somsa",
    price: 8000,
    category: "food",
    image:
      "https://media.istockphoto.com/id/876663348/photo/puff-pastries-with-meat-traditional-uzbek-and-indian-pasrty.jpg?s=612x612&w=0&k=20&c=fglFPwzec2uxxuZWa0QcpXEhtlZdclj_lxIUc0Q1uIM=",
  },
  {
    id: 5,
    name: "Sho'rva",
    price: 25000,
    category: "food",
    image:
      "https://i.ytimg.com/vi/elGPAxwa7SA/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "norin",
    price: 250000,
    category: "food",
    image:
      "https://novotours.uz/wp-content/uploads/2017/11/norin.jpg",
  },
  {
    id: 7,
    name: "Tovuq go'shti",
    price: 40000,
    category: "food",
    image:
      "https://i.ytimg.com/vi/w6OUwG46kLA/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Lag'mon",
    price: 30000,
    category: "food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0jIyZZXTEvjv_geBC9TaBPXOsUhqQhjjIxNzZMJLGQ7UUSMzS3_Aq0I_&s=10",
  },
  {
    id: 9,
    name: "Achichuk Salati",
    price: 18000,
    category: "salads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE2N1Rg8qWRGpFjFL1MyQlshqyqZWjKmwu7SeeOI2wua6BuBl1zds84&s=10",
  },
  {
    id: 10,
    name: "Sezar Salati",
    price: 20000,
    category: "salads",
    image:
      "https://makepedia.uz/wp-content/uploads/2018/12/sezar-salati.jpg",
  },
  {
    id: 11,
    name: "oliviya ",
    price: 15000,
    category: "salads",
    image:
      "https://www.allrecipes.com/thmb/tjR3Pu92VFnZsvGUi3suFQRRHyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-234949-Authentic-Russian-Salad-Olivye-DDMFS-4x3-053676ad68d545d28396360573e0f9d0.jpg",
  },
  {
    id: 11,
    name: "Coca Cola Zero",
    price: 12500,
    category: "drinks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGDxV-mL59Du9euf0krl6shVDW7_BoseFg7dbAQv7wBSruaLp77YzvOk&s=10",
  },
  {
    id: 12,
    name: "Mineral Water",
    price: 6000,
    category: "drinks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwz1csqt-VsS2me6npItJIVE23lcqZqsxAr-pDBEaK8cCqq_fK4p7CRh7&s=10",
  },
  {
    id: 13,
    name: "Orange Juice",
    price: 20000,
    category: "drinks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2wgBPetcG8PVcEbDeK-m0Ut9EmYFJFW2V8LobCbCW5R8F0Eygf7_LZ4&s=10",
  },
  {
    id: 131,
    name: "Red Bull",
    price: 28000,
    category: "drinks",
    image:
      "https://geekygorevan.co.uk/wp-content/uploads/2026/09/red-bull.jpg",
  },
  {
    id: 331,
    name: "Ko'k Choy",
    price: 12000,
    category: "drinks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjKuhv_aT1cWX9qjmz7_vKRbQoY9xAzoxzLeG8AmLEB-lIK7E_eo4RZg&s=10",
  },
   {
    id: 431,
    name: "Qora Choy",
    price: 12000,
    category: "drinks",
    image:
      "https://arteamony.com/cdn/shop/articles/preparing-black-tea_6487c24d-9783-4747-a2cf-8ecd2c75728e.jpg?v=1770129830&width=960",
  },
  {
    id: 231,
    name: "Kofe",
    price: 16000,
    category: "drinks",
    image:
      "https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/05/coffee.jpg?w=900",
  },
  {
    id: 451,
    name: "Sprite",
    price: 16000,
    category: "drinks",
    image:
      "https://thedieline.com/wp-content/uploads/2026/03/Sprite-Can-Blue-Background-scaled.jpg",
  },
  {
    id: 14,
    name: "Medovik",
    price: 58500,
    category: "desserts",
    image:
      "https://madguru.dk/assets/opskrifter/ukrainsk-medovik-honningkage-med-crome.jpg",
  },
  {
    id: 15,
    name: "Napoleon",
    price: 18000,
    category: "desserts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJU2TqiF-uUWc2dEGBMt8ZihTGWWwaOdV51JoEPVZXagpxcEfqe3aNoo&s=10",
  },
  {
    id: 17,
    name: "Shokoladli Tort",
    price: 23000,
    category: "desserts",
    image:
      "https://cdn.jwplayer.com/v2/media/W4yH8741/thumbnails/8Mhboqg7.jpg?width=1280",
  },
];

const categoriesList = [
  { id: "food" },
  { id: "salads" },
  { id: "drinks" },
  { id: "desserts" },
];

const exchangeRates = {
  UZS: 1,
  USD: 12900,
  RUB: 145,
};

const Menyu = () => {
  const { lang } = useLanguage();
  const { darkMode, currency } = useSettings();

  const t = translations[lang] || translations.uz;

  const selectedCurrency = exchangeRates[currency] ? currency : "UZS";

  const [selectedCategory, setSelectedCategory] = useState("food");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const formatPrice = (price) => {
    const convertedPrice = price / exchangeRates[selectedCurrency];

    const locales = {
      UZS: "uz-UZ",
      USD: "en-US",
      RUB: "ru-RU",
    };

    return new Intl.NumberFormat(locales[selectedCurrency], {
      style: "currency",
      currency: selectedCurrency,
      minimumFractionDigits: selectedCurrency === "UZS" ? 0 : 2,
      maximumFractionDigits: selectedCurrency === "UZS" ? 0 : 2,
    }).format(
      selectedCurrency === "UZS"
        ? Math.round(convertedPrice)
        : convertedPrice
    );
  };

  const filteredFoods = useMemo(() => {
    return foodsData.filter((food) => {
      const categoryMatch = food.category === selectedCategory;

      const searchMatch = food.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);

      if (existing) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`menu-page ${darkMode ? "dark" : "light"}`}>
      <div
        className="header-bar"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80')",
        }}
      >
        <div className="header-title">
          <span className="menu-label">FAZENDA MENU</span>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="search-wrapper">
          <span className="search-icon">⌕</span>

          <input
            className="search-input"
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="categories-bar">
        {categoriesList.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`cat-btn ${
              selectedCategory === cat.id ? "active" : ""
            }`}
          >
            <span>{t.categories[cat.id]}</span>
          </button>
        ))}
      </div>

      <div className="food-section-heading">
        <h2>{t.categories[selectedCategory]}</h2>

        <div className="heading-right">
          <button
            type="button"
            className="cart-trigger-btn"
            onClick={() => setIsCartOpen(true)}
          >
            🛒 {t.cartTitle}

            {totalCount > 0 && (
              <span className="cart-badge">{totalCount}</span>
            )}
          </button>

          <span className="products-count">
            {filteredFoods.length} {t.products}
          </span>
        </div>
      </div>

      <div className="food-cards-grid">
        {filteredFoods.map((food) => (
          <div className="card-item" key={food.id}>
            <div className="card-image-wrapper">
              <img
                className="card-img"
                src={food.image}
                alt={food.name}
                loading="lazy"
              />
            </div>

            <div className="card-content">
              <h3 className="card-title">{food.name}</h3>

              <div className="card-bottom">
                <span className="card-price">
                  {formatPrice(food.price)}
                </span>

                <button
                  type="button"
                  className="add-food-btn"
                  onClick={() => addToCart(food)}
                >
                  <span>+</span> {t.addOn}
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredFoods.length === 0 && (
          <div className="empty-foods">
            <span>🍽️</span>
            <p>{t.empty}</p>
          </div>
        )}
      </div>

      <div
        className={`cart-modal-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      >
        <div
          className="cart-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cart-header">
            <div>
              <h2>{t.cartTitle}</h2>
              <p>
                {t.count}: {totalCount}
              </p>
            </div>

            <div className="cart-header-actions">
              {cart.length > 0 && (
                <button
                  type="button"
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  {t.clear}
                </button>
              )}

              <button
                type="button"
                className="close-modal-btn"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p>{t.cartEmpty}</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{formatPrice(item.price)}</p>
                  </div>

                  <div className="cart-quantity-controls">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label={t.decrease}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      aria-label={t.increase}
                    >
                      +
                    </button>
                  </div>

                  <strong className="cart-item-price">
                    {formatPrice(item.price * item.quantity)}
                  </strong>

                  <button
                    type="button"
                    className="remove-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={t.remove}
                    title={t.remove}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="cart-total">
            <span>
              {t.order}: {totalCount}
            </span>

            <strong>
              {t.total}: {formatPrice(total)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menyu;