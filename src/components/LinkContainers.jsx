import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LinkContainers({title, isIcons, icons, links, to}) {

    let items;
    const navigate = useNavigate();

    if(isIcons){
        items = links.map((item, i) =>{
            let full_url = to[i];
            return <div key={i} style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                    <span>
                    {icons[i]}
                    </span>
                    <a 
                        href={full_url}
                        target='_blank'
                        style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>
                        <div 
                            className='link-container-items' 
                            onClick={handleClick(i)}>
                            <span className='underlined' style={{marginTop: '-5px'}}>{item}</span>
                        </div>
                    </a>
                </div>
        }
        )
    } else {
        items = links.map((item, i) =>{
            return <div className='link-container-items' style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}} key={i}>{icons[i]} <span className='underlined padding-bottom-10' onClick={() => handleClick(i)}>{item}</span></div>
        }
        )
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handleClick(i) {
        if (!to[i].startsWith('http')) {
            let navigation = `/` + to[i];
            await sleep(250);
            navigate(navigation);
            window.location.reload();
        }
    }

  return (
    <div className='link-containers grey-background black-text rounded-border'>
        <div className='link-container-holder' style={{ width: '100%'}}>
        <h1 style={{paddingBottom: '7px', paddingTop: '8px'}}>{title}</h1>
        <div style={{textAlign: 'center', alignItems: 'center', lineHeight: '2rem', overflow: 'scroll'}}>{items}</div>
        </div>
    </div>
  )
}
