import {makeObservable, observable, action} from 'mobx'
import i18n from '../i18n'

class UIStore {
    constructor(){
        this.availableTranslations = {
            hr: "hr",
            en: "en",
            de: "de"
        }

        this.lang = localStorage.getItem("i18nextLng") || this.availableTranslations.hr;

        makeObservable(this, {
            lang: observable,
            switchLocale: action
        })
    }


    switchLocale = (lang) => {
        const locale = this.availableTranslations[lang] || this.availableTranslations.hr;
        this.lang = locale;
        i18n.changeLanguage(locale);
        localStorage.setItem("i18nextLng", locale);
    }
}


export default UIStore;