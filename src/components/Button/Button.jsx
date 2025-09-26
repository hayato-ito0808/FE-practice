import styles from "./Button.module.css";
export default function Button(props) {
  //プロップス：親から子へデータを受け取る
  const { children, onClick } = props;
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span className={styles.buttonInner}>{children}</span>
    </button>
  );
}
