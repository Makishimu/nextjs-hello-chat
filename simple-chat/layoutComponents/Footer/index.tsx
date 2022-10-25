import { FC } from "react";

import styles from './footer.module.css';

interface IFooterProps {
    className?: string;
}

const Footer: FC<IFooterProps> = (props) => {
    const { className } = props;

    return (
        <footer className={styles['footer']}>
            footer component
        </footer>
    );
}

export default Footer;