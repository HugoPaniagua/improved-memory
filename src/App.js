import React from 'react'
import Banner from './components/Banner';
import Navigator from './components/Navigator'
require('../src/styles/app.css')

const App = () => {
  return(
    <>
    <Navigator />
    <Banner />
    </>
  )
}

export default App;
