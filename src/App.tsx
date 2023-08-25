import './App.css'
import Navbar from './components/navbar/Navbar';
import MainScreen from './components/mainScreen/MainScreen';
import Portfolio from './components/portfolio/Portfolio';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
const  App = ():any => {
  
  const array:any =  [
    {
      image:'/images/case-1.png',
      title:'Poteryashki',
      subTitle:'Большой сайт благотворительного фонда помощи животным. ',
      tegs:['Next js', 'Typescript'],
      link:'https://poteryashki-react.vercel.app/',
      type:2
    },
    {
      image:'/images/case-2.jpg',
      title:'Task-manager',
      subTitle:'Приложение для отслеживания целей, с подключённым API для прогноза погоды.',
      tegs:['Vanila', 'PWA'],
      link:'https://tasks-vanila-x5mn.vercel.app/',
      type:1
    },
    {
      image:'/images/case-3.jpg',
      title:'SandBox',
      subTitle:'Песочница, на основе three js, где пользователь может создавать различные фигуры, с возможностью сохранения',
      tegs:['Three js'],
      link:'https://three-js-lemon.vercel.app/',
      type:1
    },
    {
      image:'/images/case-4.jpg',
      title:'React study case',
      subTitle:'Просто проект на закрепление React, с кучей логики, но без дизайна.',
      tegs:['React JS'],
      link:'https://firststep-6nwb.vercel.app',
      type:1
    },
  ]
  return (
    <>
    <a id="top"></a>
      <Navbar/>
      <MainScreen/>
      <Portfolio array={array}  />
       <a id="about_me"></a>
      <AboutMe/>
       <a id="skills"></a>
      <Skills/>
       <a id="contacts"></a>
      <Contact/>
      <Footer/>
  </>
  )
}

export default App
