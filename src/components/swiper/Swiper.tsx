import { useState } from 'react';
import styles from './Swiper.module.css'
import { Cases } from "../portfolio/Portfolio";

const Swiper = ({array}:Cases) => {
    const [activeIndex, setActiveIndex] = useState(0);
    let touchStartX:number;
  // Логика для прокрутки карточек
  const handleSwipeLeft = () => {
    if (activeIndex < array.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <section className={styles.case_container}>
        <ul
        className={styles.list}
        onTouchStart={(e) => {
          touchStartX = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const touchEndX = e.changedTouches[0].clientX;
          const deltaX = touchEndX - touchStartX;
          if (deltaX >= 50) {
            handleSwipeRight();
          } else if (deltaX < -50) {
            handleSwipeLeft();
          }
        }}
      >
        {array.map((el, index) => (
          <li
            key={index}
            className={`${styles.case} ${index === activeIndex ? styles.active : ''}`}
          >
            <h1 className={styles.case_title}>{el.title}</h1>
            <h3 className={styles.case_subTitle}>{el.subTitle}</h3>
            <div className={styles.tegs_container}>
              {el.tegs.map((teg, i) => (
                <div key={i} className={styles.teg}>
                  <h1 className={styles.teg_text}>{teg}</h1>
                </div>
              ))}
            </div>
            <a href={el.link} target="_blank_">
              <img className={styles.case_image} src={el.image} alt="Problem" />
            </a>
            <svg onClick={()=>{handleSwipeRight()}} className={ activeIndex===0 ? `${styles.left_arrow}  ${styles.disable_arrow}` :`${styles.left_arrow}`} width="33" height="32" viewBox="0 0 33 32"  xmlns="http://www.w3.org/2000/svg">
              <g id="Desktop" clip-path="url(#clip0_0_1)">
             
              <g id="WorkCadsList">
              <path id="Vector" d="M0.650024 28L20.5419 16L0.650024 3.73333L6.70408 0L32.65 16L6.70408 32L0.650024 28Z" />
              </g>
              </g>
            </svg>
            <svg onClick={()=>{handleSwipeLeft()}} className={ activeIndex===array.length-1 ?  `${styles.right_arrow} а${styles.disable_arrow} ` : `${styles.right_arrow}`} width="33" height="32" viewBox="0 0 33 32"  xmlns="http://www.w3.org/2000/svg">
              <g id="Desktop" clip-path="url(#clip0_0_1)">
             
              <g id="WorkCadsList">
              <path id="Vector" d="M0.650024 28L20.5419 16L0.650024 3.73333L6.70408 0L32.65 16L6.70408 32L0.650024 28Z" />
              </g>
              </g>
            </svg>
          </li>
        ))}
        

      </ul>
      

    </section>
  )
};

export default Swiper;

