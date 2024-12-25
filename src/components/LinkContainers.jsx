import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LinkContainers({title, isIcons, icons, links, to}) {

    let items;
    const navigate = useNavigate();

    if(isIcons){
        items = links.map((item, i) =>{
            let full_url = to[i];
            return <a href={full_url} target='_blank' style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>
                <div className='link-container-items' onClick={handleClick(i)}>{icons[i]} <span className='underlined' style={{marginTop: '-5px'}}>{item}</span></div>
                </a>
        }
        )
    } else {
        items = links.map((item, i) =>{
            return <div className='link-container-items' style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>{icons[i]} <span className='underlined padding-bottom-10' onClick={() => handleClick(i)}>{item}</span></div>
        }
        )
    }

    function handleClick(i) {
        let navigation = `/` + to[i];
        navigate(navigation);
      }

  return (
    <div className='link-containers grey-background black-text rounded-border'>
        <div className='link-container-holder'>
        <h1 style={{paddingBottom: '7px', paddingTop: '8px'}}>{title}</h1>
        <div style={{textAlign: 'center', alignItems: 'center'}}>{items}</div>
        </div>
    </div>
  )
}
