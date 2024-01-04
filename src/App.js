import './App.css';
import './index.css'

import { Footer,Blog,Possibility,Features,WhatGPT,Header } from './containers';
import {Brand,Navbar,CTA} from './components'
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
