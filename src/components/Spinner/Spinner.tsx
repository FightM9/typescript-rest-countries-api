import styles from  './Spinner.module.css';

/**
 * Loading indicator in the center of the screen
 */

function Spinner() {
  return (
    <div className={styles.spinner_ripple}>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
