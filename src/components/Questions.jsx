import React from 'react'

export default function Questions({questions}) {

    const displayQuestions = questions.map((item, index) =>{
        return <div key={index}>
            <p><b>{index+1}. {item.question}</b></p>
            <p>{item.answer}</p>
        </div>
    })

    return ( 
        <div className='frequently-asked-questions'>
        <div className='frequently-ask-questions-title bold montserrat' style={{fontSize: '20px'}}>Frequently Asked Questions</div>
        <div className='questions-container'>
            {displayQuestions}
        </div>
    </div>
      )
}
    