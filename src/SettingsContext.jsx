
import React, { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

const defaultNotifications = {
  offers: true,
  orders: true,
  news: false,
};

function getSavedSettings() {
  try {
    return JSON.parse(localStorage.getItem("fazenda-settings")) || {};
  } catch {
    return {};
  }
}

export function SettingsProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = getSavedSettings();

    if (typeof saved.darkMode === "boolean") {
      return saved.darkMode;
    }

    const oldValue = localStorage.getItem("fazenda-dark-mode");

    return oldValue === null ? true : oldValue === "true";
  });

  const [currency, setCurrency] = useState(() => {
    const saved = getSavedSettings();
    const oldCurrency = localStorage.getItem("fazenda-currency");
    const selectedCurrency = saved.currency || oldCurrency || "UZS";

    return ["UZS", "USD", "RUB"].includes(selectedCurrency)
      ? selectedCurrency
      : "UZS";
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = getSavedSettings();
    let oldNotifications = {};

    try {
      oldNotifications = JSON.parse(
        localStorage.getItem("fazenda-notifications")
      ) || {};
    } catch {
      oldNotifications = {};
    }

    return {
      ...defaultNotifications,
      ...oldNotifications,
      ...(saved.notifications || {}),
    };
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    localStorage.setItem("fazenda-dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("fazenda-currency", currency);

    try {
      const saved = getSavedSettings();

      localStorage.setItem(
        "fazenda-settings",
        JSON.stringify({
          ...saved,
          currency,
        })
      );
    } catch {
      console.error("Valyutani saqlashda xatolik yuz berdi");
    }
  }, [currency]);

  useEffect(() => {
    localStorage.setItem(
      "fazenda-notifications",
      JSON.stringify(notifications)
    );

    try {
      const saved = getSavedSettings();

      localStorage.setItem(
        "fazenda-settings",
        JSON.stringify({
          ...saved,
          notifications,
        })
      );
    } catch {
      console.error("Bildirishnomalarni saqlashda xatolik yuz berdi");
    }
  }, [notifications]);

  useEffect(() => {
    try {
      const saved = getSavedSettings();

      localStorage.setItem(
        "fazenda-settings",
        JSON.stringify({
          ...saved,
          darkMode,
          currency,
          notifications,
        })
      );
    } catch {
      console.error("Sozlamalarni saqlashda xatolik yuz berdi");
    }
  }, [darkMode, currency, notifications]);

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        currency,
        setCurrency,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings SettingsProvider ichida ishlatilishi kerak"
    );
  }

  return context;
}
