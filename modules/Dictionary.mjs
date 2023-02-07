function Dictionary2() {
    let language = null;
    let dictionary = null;

    // Had to change json files to js files with default export to support dynamically import them. Cant assert type json on dynamic import.
    this.setLanguage = async function(newLanguage) {
        await import(`./lan/${newLanguage}`).then(module => {
            dictionary = module.default;
            language = newLanguage.replace('.js', '');
        });
    }

    //Does not work as setLanguage is async or some bullshit
    this.getWord = function(key) {
        if(!dictionary) {
            console.log("not done loading the fucking language file");
        } else {
            return this.dictionary[key]
        }
    }
}

export default Dictionary2;