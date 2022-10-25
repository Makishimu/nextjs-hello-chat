import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";

import styles from './layout.module.css';

interface ILayoutProps {
    children: any;
    className?: string;
    noHeader?: boolean;
    noFooter?: boolean;
}

const Layout: FC<ILayoutProps> = (props) => {
    const { children, className, noHeader, noFooter } = props;

    return (
        <div className={styles['layout']}>
             {noHeader ? null : <Header />}
             <main>
                main part:<br />
                {children}
             </main>
            {noFooter ? null : <Footer />}
        </div>
    );
}

export default Layout;