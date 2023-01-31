import no from "./lan/no.json" assert {type: 'json'};
import en_uk from "./lan/en-uk.json" assert {type: 'json'};

export const SUPPORTED_LANGUAGES = {
    'no': {
        title: 'NB',
        content: no,
    },
    'en_uk': {
        title: 'EN-US',
        content: en_uk,
    }
};

function Dictionary2() {
    this.language = "NB";
    this.dictionary = null;

    this.setLanguage = function(newLanguage) {
        this.language = newLanguage.title;
        this.dictionary = newLanguage.content;
    }

    this.getWord = function(key) {
        return this.dictionary[key]
    }
}

export default Dictionary2;