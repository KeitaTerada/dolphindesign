import style from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image';

export function Footer(){
    return (
        <footer className={style.container}>
            <div className={style.wrapper}>
                <div className={style.wrapperimg}> 
                    <Image src="/images/dd_logo_white.png" layout="responsive" width={120} height={78} alt=""/>
                </div>
                <h1>Dolphin Design</h1>     
            </div>
            <ul className={style.nav}>
                <li><Link href="">Result</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Service/Profile</Link></li> 
                <li><Link href="">Company</Link></li>
            </ul>
            <div className={style.border}></div>
            <p className={style.center}>© 2023 dolphindesign</p>
        </footer>
    )
}