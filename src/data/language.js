export function getLanguage() {
    let language = localStorage.getItem("language");
    if (language == null) {
        return "Creole";
    } else {
        return language;
    }
}

export function changeLanguage(language) {
    localStorage.setItem("language", language);
}