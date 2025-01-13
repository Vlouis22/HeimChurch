import React, { useState } from 'react';
import Footer from './Footer';
import { database } from '../data/ChurchDatabase';

export default function Ministry({
  name,
  picture1,
  picture2,
  picture3,
  picture4,
  descriptionTitle1,
  description1,
  descriptionTitle2,
  description2,
  descriptionTitle3,
  description3,
  questions,
}) {

  let language = database

  const [isLoading1, setIsLoading1] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [isLoading4, setIsLoading4] = useState(true);

  const loader = (
    <div className=''>
    <div className="loader--2">
    </div>
    </div>
  );

  return (
    <>
      <div className="ministry--container maximum-height">
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: '38px',
            paddingBottom: '1rem',
          }}
          className="blue-text bold"
        >
          {language.ministries.ministry['text-1']} {name} {language.ministries.ministry['text-2']}
        </div>

        <div style={{ marginTop: '35px', marginBottom: '10px' }} className="ministry--subcontainer-1">
          {picture1 && (
            <div style={{ position: 'relative', width: '50%' }}>
              {isLoading1 && loader}
              <img
                className="rounded-border ministry-picture"
                width="100%"
                height="100%"
                src={picture1}
                style={{ minWidth: '300px', display: isLoading1 ? 'none' : 'block' }}
                onLoad={() => setIsLoading1(false)}
                onError={() => setIsLoading1(false)} 
                alt="Ministry visual 1"
              />
            </div>
          )}
          <div>
            <div className="blue-text bold size-medium">{descriptionTitle1}</div>
            <div className="ministry-paragraphs">{description1}</div>
          </div>
        </div>

        <div style={{ marginTop: '35px', marginBottom: '10px' }} className="ministry--subcontainer-1">
          <div>
            <div className="blue-text bold size-medium">{descriptionTitle2}</div>
            <div className="ministry-paragraphs">{description2}</div>
          </div>
          {picture2 && (
            <div style={{ position: 'relative', width: '50%' }}>
              {isLoading2 && loader}
              <img
                className="rounded-border ministry-picture"
                width="100%"
                height="100%"
                src={picture2}
                style={{ minWidth: '300px', minHeight: 'auto', display: isLoading2 ? 'none' : 'block' }}
                onLoad={() => setIsLoading2(false)}
                onError={() => setIsLoading2(false)}
                alt="Ministry visual 2"
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: '35px', marginBottom: '10px' }} className="ministry--subcontainer-1">
          {picture3 && (
            <div style={{ position: 'relative', width: '50%' }}>
              {isLoading3 && loader}
              <img
                className="rounded-border ministry-picture"
                width="100%"
                height="100%"
                src={picture3}
                style={{ minWidth: '300px', display: isLoading3 ? 'none' : 'block' }}
                onLoad={() => setIsLoading3(false)}
                onError={() => setIsLoading3(false)}
                alt="Ministry visual 3"
              />
            </div>
          )}
          <div>
            <div className="blue-text bold size-medium">{descriptionTitle3}</div>
            <div className="ministry-paragraphs">{description3}</div>
          </div>
        </div>

        <div
          style={{ marginTop: '50px', marginBottom: '10px' }}
          className="ministry--subcontainer-1 ministry-subcontainer-leaders"
        >
          {picture4 && (
            <div style={{ position: 'relative', width: '50%' }}>
              {isLoading4 && loader}
              <img
                className="rounded-border ministry-picture"
                src={picture4}
                style={{
                  minWidth: '300px',
                  maxWidth: '90vw',
                  maxHeight: '80vh',
                  display: isLoading4 ? 'none' : 'block',
                }}
                onLoad={() => setIsLoading4(false)}
                onError={() => setIsLoading4(false)}
                alt="Ministry visual 4"
              />
            </div>
          )}
        </div>

        {questions}
      </div>
      <Footer />
    </>
  );
}
