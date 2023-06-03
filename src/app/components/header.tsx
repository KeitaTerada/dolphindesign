import style from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header className={style.wrapper}>
            <h1 className={style.logo}>
                <Link href="/">
                    <Image src="/images/dd_logo.png" width={150} height={98} alt="" />
                </Link>
            </h1>
            <ul className={style.nav}>
                <li><Link href="">Result</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Service/Profile</Link></li>
                <li><Link href="">Company</Link></li>
            </ul>
        </header>
    )
}