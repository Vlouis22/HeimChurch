import React from 'react'

export default function YouthQuestions() {
  return ( 
    <div className='frequently-asked-questions'>
    <div className='frequently-ask-questions-title bold montserrat' style={{fontSize: '20px'}}>Frequently Asked Questions</div>
    <div className='questions-container'>
        <div>
          <p><b>1. How do I join?</b></p>
          <p>Simply connect with one of our youth leaders after church, and we’ll be happy to discuss how you can get involved!</p>
        </div>
        <div>
          <p><b>2. Can I invite a friend?</b></p>
          <p>Of course! Invite as many friends as you'd like.</p>
        </div>
        <div>
          <p><b>3. When do you meet?</b></p>
          <p>We meet every second Sunday of the month after our church service.</p>
        </div>
    </div>
</div>
  )
}
