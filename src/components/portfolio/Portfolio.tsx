import { useState } from "react"
import styles from './Portfolio.module.css'
import Swiper from "../swiper/Swiper"
export type Cases = {
    array:{image:string,
        title:string,
        subTitle:string,
        type:number,
        tegs:string[],
        link:string
        }[]
}
const Portfolio = ({array}:Cases) => {
    const [sortedArray,setSortedArray] = useState<any>(array);
    const [states,setStates] = useState<boolean[]>([false,false]);
    const studentCaseClick = ():void => {
        if(sortedArray.length===array.length || states[1]){
            let result:any = [];
            array.map((el)=>
        {
            if(el.type===1)
            result.push(el);
        })
        setStates([true,false]);
        setSortedArray(result)
        }
        else{
       
        setSortedArray(array);
         setStates([false,false]);
         
        }
    }
    const forkClick = () =>{
        if(sortedArray.length===array.length || states[0]){
            let result:any = [];
        array.map((el)=>
        {
            if(el.type===2)
            result.push(el);
        })
        setStates([false,true]);
        setSortedArray(result)
        }
        else{
                setSortedArray(array);
                setStates([false,false])
        }
    }

  return (
    <>
    <div className={styles.portfolio_Screen}>
    <div className={styles.tag_portfolio}>
        <h1 className={styles.tag_portfolio_text}>🔗 Portfolio</h1>
    </div>
    <h1 className={styles.title}>Мои проекты</h1>
    <div className={styles.sorted_tegs}>
        <button onClick={()=>{studentCaseClick()}} className={states[0] ?`${styles.studentCase} ${styles.btn_focus}` : `${styles.studentCase}`}>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="13.25" r="12.5" fill="#7B4AE2" fillOpacity="0.2"/>
                <path d="M8 17.6667V9.13333C8 8.3866 8 8.01323 8.14533 7.72801C8.27315 7.47713 8.47713 7.27315 8.72801 7.14533C9.01323 7 9.3866 7 10.1333 7H15.2C15.9467 7 16.3201 7 16.6053 7.14533C16.8562 7.27315 17.0602 7.47713 17.188 7.72801C17.3333 8.01323 17.3333 8.3866 17.3333 9.13333V16.3333H9.33333C8.59695 16.3333 8 16.9303 8 17.6667ZM8 17.6667C8 18.4031 8.59695 19 9.33333 19H17.3333M16.6667 16.3333V19M14.3333 10.3333V10.2778C14.3333 9.57208 13.7613 9 13.0555 9H12.3333C11.5969 9 11 9.59695 11 10.3333C11 11.0697 11.5969 11.6667 12.3333 11.6667H13C13.7364 11.6667 14.3333 12.2636 14.3333 13C14.3333 13.7364 13.7364 14.3333 13 14.3333H12.3055C11.5845 14.3333 11 13.7488 11 13.0278V13" stroke="#7B4AE2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className={styles.studentCase_text}>Student case</h1>    
        </button>
        <button onClick={()=>{forkClick()}} className={states[1] ?`${styles.fork} ${styles.btn_focus}` : `${styles.fork}`}>
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="13.25" r="12.5" fill="#7B4AE2" fillOpacity="0.2"/>
                <path d="M7.00044 18.008C7.00044 17.368 7.18178 16.792 7.54444 16.28C7.90711 15.768 8.39244 15.4053 9.00044 15.192V10.824C8.40311 10.6213 7.91778 10.264 7.54444 9.752C7.17111 9.24 6.98978 8.65867 7.00044 8.008C7.00044 7.176 7.28844 6.46667 7.86444 5.88C8.44044 5.29333 9.14978 5 9.99244 5C10.8351 5 11.5444 5.29333 12.1204 5.88C12.6964 6.46667 12.9898 7.176 13.0004 8.008C13.0004 8.648 12.8138 9.22933 12.4404 9.752C12.0671 10.2747 11.5871 10.632 11.0004 10.824V13.192C11.3311 13.064 11.6618 13 11.9924 13H15.9924C16.2698 13 16.5044 12.904 16.6964 12.712C16.8884 12.52 16.9898 12.2853 17.0004 12.008V11.832C16.4031 11.6293 15.9178 11.2667 15.5444 10.744C15.1711 10.2213 14.9898 9.64533 15.0004 9.016C15.0004 8.184 15.2884 7.47467 15.8644 6.888C16.4404 6.30133 17.1498 6.008 17.9924 6.008C18.8351 6.008 19.5444 6.30133 20.1204 6.888C20.6964 7.47467 20.9898 8.184 21.0004 9.016C21.0004 9.656 20.8138 10.232 20.4404 10.744C20.0671 11.256 19.5871 11.6187 19.0004 11.832V12.008C19.0004 12.84 18.7071 13.5493 18.1204 14.136C17.5338 14.7227 16.8244 15.016 15.9924 15.016H11.9924C11.7044 15.016 11.4644 15.1173 11.2724 15.32C11.7844 15.5653 12.2004 15.928 12.5204 16.408C12.8404 16.888 13.0004 17.4213 13.0004 18.008C13.0004 18.84 12.7071 19.5493 12.1204 20.136C11.5338 20.7227 10.8244 21.016 9.99244 21.016C9.16044 21.016 8.45111 20.7227 7.86444 20.136C7.27778 19.5493 6.98978 18.84 7.00044 18.008ZM9.00044 18.008C9.00044 18.2853 9.09644 18.5253 9.28844 18.728C9.48044 18.9307 9.71511 19.0267 9.99244 19.016C10.2698 19.0053 10.5044 18.9093 10.6964 18.728C10.8884 18.5467 10.9898 18.3067 11.0004 18.008C11.0111 17.7093 10.9098 17.4747 10.6964 17.304C10.4831 17.1333 10.2484 17.0373 9.99244 17.016C9.73644 16.9947 9.50178 17.0907 9.28844 17.304C9.07511 17.5173 8.97911 17.752 9.00044 18.008ZM9.00044 8.008C9.00044 8.28533 9.09644 8.52533 9.28844 8.728C9.48044 8.93067 9.71511 9.02667 9.99244 9.016C10.2698 9.00533 10.5044 8.90933 10.6964 8.728C10.8884 8.54667 10.9898 8.30667 11.0004 8.008C11.0111 7.70933 10.9098 7.47467 10.6964 7.304C10.4831 7.13333 10.2484 7.03733 9.99244 7.016C9.73644 6.99467 9.50178 7.09067 9.28844 7.304C9.07511 7.51733 8.97911 7.752 9.00044 8.008ZM17.0004 9.016C17.0004 9.29333 17.0964 9.528 17.2884 9.72C17.4804 9.912 17.7151 10.008 17.9924 10.008C18.2698 10.008 18.5044 9.912 18.6964 9.72C18.8884 9.528 18.9898 9.29333 19.0004 9.016C19.0111 8.73867 18.9098 8.504 18.6964 8.312C18.4831 8.12 18.2484 8.01867 17.9924 8.008C17.7364 7.99733 17.5018 8.09867 17.2884 8.312C17.0751 8.52533 16.9791 8.76 17.0004 9.016Z" fill="#7B4AE2"/>
            </svg>
            <h1 className={styles.fork_text}>Forks</h1>    
        </button> 
    </div>
    {window.innerWidth>400 
    ?<div className={styles.case_container}>
        {sortedArray.map((el:{image:string,title:string,subTitle:string,type:number,tegs:string[],link:string
        })=>
        <div key={el.title} className={styles.case}>
            <h1 className={styles.case_title}>{el.title}</h1>
            <h3 className={styles.case_subTitle}>{el.subTitle}</h3>
            <div className={styles.tegs_container}>
            {el.tegs.map((teg:string)=>
            <div key={el.title+teg} className={styles.teg}>
                <h1 className={styles.teg_text}>{teg}</h1>
            </div>
            )}
            </div>
            <a href={el.link} target="_blank_">
            <img className={styles.case_image} src={el.image} alt="Problem"/>
            </a>
        </div>
        )}

    </div>
    :<Swiper array={sortedArray}/>
}
    </div>
    </>
  )
};

export default Portfolio;
