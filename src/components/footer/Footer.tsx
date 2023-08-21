import styles from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h1 className={styles.copyright}>Copyright © Mitrofanov Ivan · 2023</h1>
        
        <a className={styles.git_container} href="https://github.com/Codebuller" target="_blank">
            <svg className={styles.git}   xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path  fillRule="evenodd" clipRule="evenodd" d="M16.4047 0C7.3411 0 0 7.3411 0 16.4047C0 23.6638 4.69585 29.795 11.2167 31.9687C12.0369 32.1122 12.3445 31.6201 12.3445 31.1894C12.3445 30.7998 12.324 29.508 12.324 28.1341C8.20235 28.8928 7.13605 27.1293 6.80795 26.2065C6.6234 25.7349 5.82367 24.279 5.12647 23.8893C4.5523 23.5818 3.73207 22.823 5.10596 22.8025C6.39783 22.782 7.3206 23.9919 7.62819 24.484C9.10461 26.9652 11.4628 26.268 12.4061 25.8374C12.5496 24.7711 12.9802 24.0534 13.4519 23.6433C9.80181 23.2332 5.98772 21.8183 5.98772 15.5435C5.98772 13.7594 6.6234 12.283 7.6692 11.1347C7.50515 10.7246 6.93099 9.04309 7.83325 6.78744C7.83325 6.78744 9.20714 6.35682 12.3445 8.46893C13.6569 8.09982 15.0513 7.91527 16.4457 7.91527C17.8401 7.91527 19.2345 8.09982 20.5469 8.46893C23.6843 6.33632 25.0582 6.78744 25.0582 6.78744C25.9604 9.04309 25.3863 10.7246 25.2222 11.1347C26.268 12.283 26.9037 13.7389 26.9037 15.5435C26.9037 21.8388 23.0691 23.2332 19.4191 23.6433C20.0137 24.1559 20.5264 25.1402 20.5264 26.6781C20.5264 28.8723 20.5059 30.6358 20.5059 31.1894C20.5059 31.6201 20.8135 32.1327 21.6337 31.9687C28.1136 29.795 32.8094 23.6433 32.8094 16.4047C32.8094 7.3411 25.4683 0 16.4047 0Z" />
            </svg>
        </a>
    </footer>
  )
};

export default Footer;
