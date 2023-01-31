import Dictionary from "../modules/Dictionary.mjs";

(function runTests() {
    testCreatingLanguageInterface();
    testSupportingLanguageFiles();
})

function testCreatingLanguageInterface() {
    const dictionary = new Dictionary();
    test(dictionary != undefined, "Creating instance of Language support module");
}

function testSupportingLanguageFiles() {
    const languages = ['.lan/no.json', './lan/en-uk.json'];
    const dictionary = new Dictionary(...languages);
    test(dictionary.languageFiles === languages, "Tetsting setting of languages");
}

function test(test, description) {
    if(test) {
        console.log(`Grønn ${description}`);
    } else {
        console.log(`Rød ${description}`);
    }
}