import React from "react"
import styles from './About.module.css'
const AboutMe:React.FC = () => {
  return (
    <div className={styles.about}>
        <img src="/images/face.png" className={styles.about_image}></img>
        <div className={styles.about_text}>
            <div className={styles.tag_aboutMe}>
                <h1 className={styles.tag_aboutMe_text}>🧐 About me</h1>
            </div>
            <h1 className={styles.about_text_text}>👋 Привет! Меня зовут Иван, мне 19 лет, я Frontend-
разработчик, рад приветствовать тебя на своём веб-сайте</h1>

<h1  className={styles.about_text_text}>👨‍💻 С 2022 года я  разрабатываю современные web-
приложения. </h1>

<h1 className={styles.about_text_text}>🎓 Я студент второго курса СПБГЭУ на направлении
 "Прикладная информатика"</h1>

 <h1 className={styles.about_text_text}>🚀 Я просто пытаюсь каждый день быть немного лучше</h1>
        </div>
    </div>
    
  )
};

export default AboutMe;
