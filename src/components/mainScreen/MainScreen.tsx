import React from "react"
import styles from './MainScreen.module.css'
const MainScreen: React.FC = () => {
  
  return (                
    <div>
      
    <div className={styles.mainScreen}>
    
        <div className={styles.welcome}>
          <div className={styles.tag_hi}>
            <h1 className={styles.tag_hi_text}>👋 Hello! </h1>
          </div>
          <h1 className={styles.welcome_main}>Митрофанов Иван</h1>
          <h1 className={styles.welcome_sub_text}>Front-end developer</h1>     
          <a href="https://github.com/Codebuller" target="_blank">
            <svg className={styles.git}   xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path  fillRule="evenodd" clipRule="evenodd" d="M16.4047 0C7.3411 0 0 7.3411 0 16.4047C0 23.6638 4.69585 29.795 11.2167 31.9687C12.0369 32.1122 12.3445 31.6201 12.3445 31.1894C12.3445 30.7998 12.324 29.508 12.324 28.1341C8.20235 28.8928 7.13605 27.1293 6.80795 26.2065C6.6234 25.7349 5.82367 24.279 5.12647 23.8893C4.5523 23.5818 3.73207 22.823 5.10596 22.8025C6.39783 22.782 7.3206 23.9919 7.62819 24.484C9.10461 26.9652 11.4628 26.268 12.4061 25.8374C12.5496 24.7711 12.9802 24.0534 13.4519 23.6433C9.80181 23.2332 5.98772 21.8183 5.98772 15.5435C5.98772 13.7594 6.6234 12.283 7.6692 11.1347C7.50515 10.7246 6.93099 9.04309 7.83325 6.78744C7.83325 6.78744 9.20714 6.35682 12.3445 8.46893C13.6569 8.09982 15.0513 7.91527 16.4457 7.91527C17.8401 7.91527 19.2345 8.09982 20.5469 8.46893C23.6843 6.33632 25.0582 6.78744 25.0582 6.78744C25.9604 9.04309 25.3863 10.7246 25.2222 11.1347C26.268 12.283 26.9037 13.7389 26.9037 15.5435C26.9037 21.8388 23.0691 23.2332 19.4191 23.6433C20.0137 24.1559 20.5264 25.1402 20.5264 26.6781C20.5264 28.8723 20.5059 30.6358 20.5059 31.1894C20.5059 31.6201 20.8135 32.1327 21.6337 31.9687C28.1136 29.795 32.8094 23.6433 32.8094 16.4047C32.8094 7.3411 25.4683 0 16.4047 0Z" />
            </svg>
          </a>
        </div>
        <div className={styles.me_avatar}>
          <img className={styles.avatar} alt="Something wrong" src="/images/avatar.png"/>
        </div>
        
        <div className={styles.firstScreen_rigth}>
          <div className={styles.firstScreen_rigth_download_sv}>
            <a download='/CV.pdf' href="/CV.pdf"><h1 className={styles.firstScreen_rigth_download_sv_text}>Скачать резюме</h1></a>
            <a download='/CV.pdf' href="/CV.pdf"><svg style={{minHeight: "16px",minWidth:"16px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2V11.5" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 7L8 11.5L12.5 7" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 13.5H13.5" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg></a>
           
          </div>
          <a href="https://t.me/mainMIG" target="_blank">
            <div className={styles.firstScreen_rigth_contact}>
          <svg style={{marginLeft: '7px',
          minWidth: '32px',
          minHeight: '32px'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clipPath="url(#clip0_927_113)">
              <path d="M22.8356 9.33161C22.8418 9.33161 22.8501 9.33161 22.8583 9.33161C23.0741 9.33161 23.2743 9.39871 23.4385 9.51432L23.4354 9.51226C23.5551 9.61652 23.6356 9.7631 23.6552 9.92826V9.93136C23.6759 10.0573 23.6872 10.2018 23.6872 10.3494C23.6872 10.4165 23.6852 10.4826 23.68 10.5486V10.5394C23.4478 12.9848 22.4403 18.9151 21.9283 21.6526C21.7115 22.8119 21.2852 23.2 20.8723 23.2372C19.9752 23.3208 19.2939 22.6446 18.4248 22.0748C17.0643 21.1819 16.2952 20.6266 14.975 19.7564C13.4483 18.752 14.4382 18.1977 15.3074 17.2955C15.5355 17.0581 19.4901 13.4606 19.5675 13.1345C19.5716 13.1148 19.5737 13.0932 19.5737 13.0705C19.5737 12.9899 19.5438 12.9166 19.4952 12.8609C19.4416 12.8258 19.3745 12.8062 19.3043 12.8062C19.2578 12.8062 19.2134 12.8155 19.1721 12.831L19.1742 12.8299C19.0379 12.8609 16.8647 14.2971 12.6545 17.1386C12.1951 17.5009 11.615 17.7301 10.9832 17.7569H10.977C10.0821 17.6485 9.26969 17.4493 8.49859 17.1654L8.57498 17.1902C7.60672 16.8743 6.83769 16.7081 6.90375 16.1734C6.93885 15.8954 7.32216 15.6108 8.05369 15.3197C12.5598 13.3564 15.5647 12.0623 17.0684 11.4374C18.7272 10.5569 20.6503 9.83226 22.6725 9.36258L22.8346 9.33058L22.8356 9.33161ZM16.4439 0.0258064C7.87408 0.0464516 0.934204 6.99871 0.934204 15.5716C0.934204 24.1569 7.89369 31.1174 16.48 31.1174C25.0663 31.1174 32.0258 24.1579 32.0258 15.5716C32.0258 6.99871 25.0859 0.0464516 16.5182 0.0258064H16.5161C16.4921 0.0258064 16.468 0.0258064 16.4439 0.0258064Z" fill="#7B4AE2"/>
            </g>
            <defs>
              <clipPath id="clip0_927_113">
                <rect width="32" height="32" fill="white"/>
              </clipPath>
            </defs>
          </svg>
            <h1 className={styles.firstScreen_rigth_contact_text}>Связаться со мною</h1>

            </div>
          </a>
         
        </div>



      </div>
    
    
    </div>
  )
};

export default MainScreen;
