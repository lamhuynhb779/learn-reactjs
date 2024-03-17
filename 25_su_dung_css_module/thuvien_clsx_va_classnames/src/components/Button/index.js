import clsx from 'clsx';

import styles from './Button.module.scss';

// Cách trình bày `${styles.btn} ${styles.active}` rất là xấu
// Nên thưc tế sẽ dùng thư viện:
// 1. classnames
// 2. clsx

function Button({primary, disabled}) {

    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
    });

    return (
        // <>
        //     <button className={styles.btn}>Click me!</button>
        //     {/* <button className={clsx(styles.btn, styles.active)}>Click me!</button> */}
        //     <button className={clsx(styles.btn, {
        //         [styles.active]: true
        //     })}>Click me!</button>
        // </>
        <button className={classes}>
            Click me !
        </button>
    );
}

export default Button;