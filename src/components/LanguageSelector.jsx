import React from 'react'
import { database } from '../data/ChurchDatabase'
import { changeLanguage, getLanguage } from '../data/language'

export default function LanguageSelector() {

    let language = getLanguage()
    let kreyolCSS = language == "Creole" ? 'kreyol-button selected-language' : 'kreyol-button' 
    let englishCSS = language != "Creole" ? 'english-button selected-language' : 'english-button'


    function changeDatabaseLanguage(language){
        console.log(`changing database language to ${language}`)
        changeLanguage(language)
        window.location.reload(true);
    }

  return (
    <div className='language-selector-container'>
        <div className={englishCSS} onClick={() => changeDatabaseLanguage("English")}> 
            English
        </div>
        <div className={kreyolCSS} onClick={() => changeDatabaseLanguage("Creole")}>
            Kreyol
        </div>
    </div>
  )
}
