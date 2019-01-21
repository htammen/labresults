import VueI18n from "vue-i18n";
import Vue from "vue";
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from "@/constants/trans";
import en from "@/lang/en.json";

const dateTimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  },
  fr: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric"
    }
  },
  de: {
    short: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric"
    }
  }
};

const numberFormats = {
  en: {
    decimal: {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    decimal_1: {
      useGrouping: true,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }
  },
  de: {
    decimal: {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    },
    decimal_1: {
      useGrouping: true,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }
  }
};

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { en }, // set locale messages
  dateTimeFormats,
  numberFormats
});
