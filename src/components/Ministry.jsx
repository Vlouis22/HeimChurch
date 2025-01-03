import React from 'react'
import Footer from './Footer'

export default function Ministry({name, picture1, picture2, picture3, picture4, descriptionTitle1, description1, descriptionTitle2, description2, descriptionTitle3, description3, questions}) {
  return (
    <>
    <div className='ministry--container maximum-height'>
      <div style={{width: '100%', textAlign: 'center', fontSize: '38px', paddingBottom: '1rem'}} className='blue-text bold'>Welcome to the {name} ministry page</div>

      <div style={{marginTop: '35px', marginBottom: '10px'}} className='ministry--subcontainer-1'>
        {picture1 && <img className='rounded-border ministry-picture' width='50%' height='100%' src={picture1} style={{minWidth: '300px'}}></img>}
        <div>
          <div className='blue-text bold size-medium'>{descriptionTitle1}</div>
          <div className='ministry-paragraphs'>{description1}</div>
        </div>
      </div>

      <div style={{marginTop: '35px', marginBottom: '10px'}} className='ministry--subcontainer-1'>
        <div>
          <div className='blue-text bold size-medium'>{descriptionTitle2}</div>
          <div className='ministry-paragraphs'>{description2}</div>
        </div>
        {picture2 && <img className='rounded-border ministry-picture' width='50%' height='100%' src={picture2} style={{minWidth: '300px', minHeight: 'auto'}}></img>}
      </div>

      <div style={{marginTop: '35px', marginBottom: '10px'}} className='ministry--subcontainer-1'>
        {picture3 && <img className='rounded-border ministry-picture' width='50%' height='100%' src={picture3} style={{minWidth: '300px'}}></img>}
        <div>
          <div className='blue-text bold size-medium'>{descriptionTitle3}</div>
          <div className='ministry-paragraphs'>{description3}</div>
        </div>
      </div>

      <div style={{marginTop: '50px', marginBottom: '10px'}} className='ministry--subcontainer-1 ministry-subcontainer-leaders'>
        {picture4 && <img className='rounded-border ministry-picture'  src={picture4}  style={{minWidth: '300px', maxWidth: '90vw', maxHeight: '50vh'}}></img>}
      </div>
      {questions}
    </div>
    <Footer/>
    </>
  )
}

