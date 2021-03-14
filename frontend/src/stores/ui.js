import { makeObservable, observable, action, computed } from 'mobx';
import i18n from '../i18n';

class UIStore {
  constructor() {
    // TODO - maybe define this programmatically
    this.availableTranslations = {
      hr: 'hr',
      en: 'en',
      de: 'de',
    };

    // get lang setup from localStorage (either user selection or browser detected)
    // or default to hr
    this.lang =
      localStorage.getItem('i18nextLng') || this.availableTranslations.hr;

    // init screenWidth, used for some layout triggers
    this.screenWidth = window.innerWidth;

    // MOBX decorators
    makeObservable(this, {
      lang: observable,
      screenWidth: observable,

      switchLocale: action,
      setScreenWidth: action,

      carsGridSmallScreen: computed,
      navbarSmallScreen: computed,
    });
  }

  // Handle language switching, fallback to hr just in case..
  switchLocale = (lang) => {
    const locale =
      this.availableTranslations[lang] || this.availableTranslations.hr;
    this.lang = locale;
    i18n.changeLanguage(locale);
    localStorage.setItem('i18nextLng', locale); // store lang preference
  };

  setScreenWidth = (width) => {
    this.screenWidth = width;
  };

  // TODO - maybe define these values in some config, instead of hardcoding
  get carsGridSmallScreen() {
    return this.screenWidth < 950;
  }

  get navbarSmallScreen() {
    return this.screenWidth < 1500;
  }
}

export default UIStore;
