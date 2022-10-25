import { FC } from "react";

import styles from './header.module.css';

interface IHeaderProps {
    className?: string;
}

const Header: FC<IHeaderProps> = (props) => {
    const { className } = props;

    return (
        <header className={styles['header']}>
            Header component
        </header>
    );
}

export default Header;