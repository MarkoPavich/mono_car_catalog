import { makeObservable, observable, action, computed } from 'mobx';
import i18n from '../i18n';

class UIStore {
  constructor() {
    this.availableTranslations = {
      hr: 'hr',
      en: 'en',
      de: 'de',
    };

    this.lang =
      localStorage.getItem('i18nextLng') || this.availableTranslations.hr;

    this.screenWidth = window.innerWidth;

    makeObservable(this, {
      lang: observable,
      screenWidth: observable,

      switchLocale: action,
      setScreenWidth: action,

      carsGridSmallScreen: computed,
      navbarSmallScreen: computed,
    });
  }

  switchLocale = (lang) => {
    const locale =
      this.availableTranslations[lang] || this.availableTranslations.hr;
    this.lang = locale;
    i18n.changeLanguage(locale);
    localStorage.setItem('i18nextLng', locale);
  };

  setScreenWidth = (width) => {
    this.screenWidth = width;
  };

  get carsGridSmallScreen() {
    return this.screenWidth < 950;
  }

  get navbarSmallScreen() {
    return this.screenWidth < 1500;
  }
}

export default UIStore;
