import React from 'react'
import RegularButton from '../components/RegularButton';
import { database } from '../data/ChurchDatabase.js';


export default function LiveError() {
  return (
    <div style={{width: '50%', backgroundColor: 'green'}}>
        <div>If you're experiencing issues watching the live stream, please visit our YouTube page to watch it there.</div>
        <div>
            <RegularButton color='white' bgcolor='red' text='Youtube' width={135} height={54} to='Calendar'/>
        </div>
    </div>
  )
}
