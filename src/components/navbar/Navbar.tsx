import React from 'react';
import styles from './Navbar.module.css'
const Navbar:React.FC = () => {
  return (
   
     <div className={styles.navbar}>
      
      <svg className={styles.ico} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M18.6667 21.3333L8 32L18.6667 42.6667" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45.3333 21.3333L56 32L45.3333 42.6667" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M37.3333 10.6667L26.2904 51.8795" stroke="#7B4AE2" strokeWidth="2" strokeLinejoin="round"/>
      </svg>     
      <a href='#top'> <h1 className={styles.navbar_text}>Home</h1> </a>
      <a href='#about_me'><h1 className={styles.navbar_text}>About me</h1> </a>
      <a href='#skills'><h1 className={styles.navbar_text}>Skills</h1> </a>
      <a href='#contacts'><h1 className={styles.navbar_text}>Contacts</h1> </a>
      </div>
      
   
  )
};

export default Navbar;