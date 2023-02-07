import Dictionary2 from "./modules/Dictionary.mjs";

const SUPPORTED_LANGUAGES = {
    'NO_NB': "no-nb.js",
    'EN_UK': "en-uk.js"
}

let dictionary = new Dictionary2();
dictionary.setLanguage(SUPPORTED_LANGUAGES.EN_UK);
dictionary.getWord("end");

/*

import Dictionary from "./test/Dictionary.mjs";
const DICTIONARY_KEYS = {
    end: "end",
}

//runTests();

//Burde ikke flyte
let dictionary = new Dictionary("./lan/no.json");
console.log(dictionary);
dictionary.setLanguage("no");
console.log(dictionary.keys());
console.log(dictionary.get(DICTIONARY_KEYS.end));

*/