import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image';

export function Footer(){
    return (
        <footer className={style.container}>
            <div className={style.wrapper}>
                <Image src="/images/dd_logo_white.png" width={120} height={78} alt=""/>
                <h1>Dolphin Design</h1>     
            </div>
            <div></div>
            <ul className={style.nav}>
                <li><Link href="">Result</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Service/Profile</Link></li>
                <li><Link href="">Company</Link></li>
            </ul>
            <p className={style.center}>© 2023 dolphindesign</p>
        </footer>
    )
}