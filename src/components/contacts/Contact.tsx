import React from "react"
import styles from './Contact.module.css'
const Contact = () => {
    const copyTextArea = (event:any) =>{
      navigator.clipboard.writeText('ivan_1337_qwerty_339@mail.com')
        if(document.getElementById('cpd')!==null)
        return undefined;
        event.target.parentNode.lastChild.insertAdjacentHTML('afterend', '<div style="justify-content: center;display:flex;left:0;right:0;margin-left:auto;margin-right:auto;position:absolute;color:#5c5656;" id="cpd">Скопировано в буфер обмена</div>');  
        setTimeout(()=> document.getElementById('cpd').remove(), 1000);
    }
  return (
    <div className={styles.contact}>
        <div className={styles.tag_contact}>
            <h1 className={styles.tag_contact_text}>📬 Contacts</h1>
        </div>
        <h1 className={styles.contact_title}>Свяжись со мной!</h1>
        <div className={styles.contact_tg_email}>
            <a href="https://t.me/mainMIG" target="_blank"><div className={styles.tg}>
                <div className={styles.tg_rectangle}>
                    <svg style={{justifySelf:'flex-start',margin:'7'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clipPath="url(#clip0_929_133)">
                            <path d="M22.8357 9.33169C22.8418 9.33169 22.8501 9.33169 22.8584 9.33169C23.0741 9.33169 23.2744 9.39878 23.4385 9.51439L23.4354 9.51233C23.5551 9.61659 23.6357 9.76317 23.6553 9.92833V9.93143C23.6759 10.0574 23.6873 10.2019 23.6873 10.3495C23.6873 10.4166 23.6852 10.4827 23.68 10.5487V10.5394C23.4478 12.9848 22.4403 18.9152 21.9283 21.6527C21.7115 22.8119 21.2852 23.2001 20.8723 23.2372C19.9753 23.3208 19.294 22.6447 18.4248 22.0749C17.0643 21.182 16.2953 20.6267 14.975 19.7565C13.4483 18.7521 14.4382 18.1977 15.3074 17.2956C15.5355 17.0581 19.4901 13.4607 19.5675 13.1345C19.5717 13.1149 19.5737 13.0932 19.5737 13.0705C19.5737 12.99 19.5438 12.9167 19.4953 12.861C19.4416 12.8259 19.3745 12.8063 19.3043 12.8063C19.2578 12.8063 19.2135 12.8156 19.1722 12.831L19.1742 12.83C19.038 12.861 16.8647 14.2972 12.6545 17.1387C12.1951 17.501 11.615 17.7301 10.9833 17.757H10.9771C10.0821 17.6486 9.26972 17.4494 8.49862 17.1655L8.57501 17.1903C7.60675 16.8744 6.83772 16.7082 6.90378 16.1735C6.93888 15.8955 7.32219 15.6109 8.05372 15.3198C12.5599 13.3565 15.5648 12.0624 17.0684 11.4375C18.7273 10.557 20.6504 9.83233 22.6726 9.36265L22.8346 9.33065L22.8357 9.33169ZM16.4439 0.0258789C7.87411 0.0465241 0.934235 6.99878 0.934235 15.5717C0.934235 24.157 7.89372 31.1175 16.48 31.1175C25.0664 31.1175 32.0258 24.158 32.0258 15.5717C32.0258 6.99878 25.086 0.0465241 16.5182 0.0258789H16.5162C16.4921 0.0258789 16.468 0.0258789 16.4439 0.0258789Z" fill="#7B4AE2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_929_133">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className={styles.tg_text}>Связаться со мною</h1>
                </div>
            </div>
            </a>
            <div className={styles.email}>
                <svg style={{ display: "flex", margin:'auto'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 18.416L12.684 15.667L1.11499 27.51H30.591L19.235 15.647L16 18.416ZM20.89 14.39L31.892 25.829C31.955 25.607 32 25.377 32 25.134V5.362L20.89 14.39ZM0 5.31601V25.134C0 25.377 0.0450017 25.607 0.108002 25.829L11.147 14.427L0 5.31601ZM31 3.5H1L16 15.519L31 3.5Z" fill="#7B4AE2"/>
                </svg>
                <h1 className={styles.email_title}>E-mail:</h1>
                <h1 onClick={(event)=>copyTextArea(event)} className={styles.email_adress}>ivan_1337_qwerty_339@mail.com</h1>
                <svg onClick={(event)=>copyTextArea(event)} className={styles.copy_ico} style={{ display: "flex", margin:'auto'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M27 23V5H9" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 9H5V27H23V9Z" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        <a href="#top" className={styles.toTop}>
            <h1 className={styles.toTop_text}>На главную</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 27V5" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 14L16 5L25 14" stroke="#7B4AE2" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>

    </div>
    
  )
};

export default Contact;
