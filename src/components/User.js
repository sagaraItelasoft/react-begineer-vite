import React from 'react'

const User = ({name,age}) => {
  return (
    <h1>
        {name}: <span style={{color: 'red'}}>{age}</span>
    </h1>
  )
}

export default User

/**
 * 
 * folowing is imperadive way of creeating components.
 * using compnents with jsx is declarative way.
 */
// create H!
const h1 = document.createElement('h1')
// put name in h1
h1.innerText = name
//create span in h1 that is red
const span = document.createElement('span')
span.style.color = 'red'
h1.append(span)
span.innerText = age