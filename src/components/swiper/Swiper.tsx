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
          </li>
        ))}
      </ul>
    </section>
  )
};

export default Swiper;

