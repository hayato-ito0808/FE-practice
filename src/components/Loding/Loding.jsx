import styles from "./Loding.module.css";

export default function Loding({ active }) {
    
    return (
        <div className={`${styles.loding} ${active ? styles.isActive : ""}`}>
            <span>~結果発表~</span>
        </div>
  )
}
