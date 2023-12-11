import styles  from '../styles.module.css';
const Loading = () => {
  return (
    <div className="fixed z-50 bg-main top-0 left-0 w-full h-screen flex items-center justify-center">
    <span className={styles.loader}></span>      
    </div>
  );
}

export default Loading;
