import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherReactElement = (
  <a href="https://google.com" target="_blank">click me to visit google </a> 
   )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(

  // anotherReactElement
  reactElement

)
