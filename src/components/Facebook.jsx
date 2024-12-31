import React from 'react'
import { LuFacebook } from "react-icons/lu";

export default function Facebook({color, size}) {

  let fontSize = size + 'px';
  const faceBookLink = 'https://www.facebook.com/people/HEIM-Church-LIVE/61553576407518/?mibextid=wwXIfr&rdid=cex9k3X5IaFQuv5Y&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EGnJNCVKr%2F%3Fmibextid%3DwwXIfr';

  return (
    <span>
      <a href={faceBookLink} target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}>
          <LuFacebook/>
      </a>
    </span>
  )
}
