import Dictionary2, { SUPPORTED_LANGUAGES } from "./modules/Dictionary.mjs";

let currentLanguage = new Dictionary2();
currentLanguage.setLanguage(SUPPORTED_LANGUAGES.no);
currentLanguage.getWord("end");

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