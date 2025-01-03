import React from 'react'

export default function Questions({questions, bgColor}) {

    const displayQuestions = questions.map((item, index) =>{
        return <div className="faq-item" key={index}>
            <p><b className='faq-question'>{index+1}. {item.question}</b></p>
            <p className="faq-answer">{item.answer}</p>
        </div>
    })

    const classnames = bgColor ? 'faq-section'  :  'frequently-asked-questions faq-section'
    const containerClassnames = bgColor ?  'bold montserrat faq-title' : 'frequently-ask-questions-title bold montserrat faq-title'

    return ( 
        <div className={classnames}>
        <div className={containerClassnames} style={{fontSize: '20px'}}>Frequently Asked Questions</div>
        <div className='questions-container faq-container'>
            {displayQuestions}
        </div>
    </div>
      )
}
    