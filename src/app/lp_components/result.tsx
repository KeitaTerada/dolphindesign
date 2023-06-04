import style from './result.module.css'
import Image from 'next/image'
import Link from 'next/link';


export function Result(){
    return (
        <section className={style.container}>
            <h1>Result</h1>
            <div className={style.wrapper}>
                <div className={style.slide}>
                    <Link href="/">
                        <Image src="/images/result01.png" width={330} height={250} alt=""/>
                        <div className={style.content}>
                            <p>Recipe Diary</p>
                            <small>ウェブサイト</small>
                        </div>
                    </Link>
                </div>
                <div className={style.slide}>
                    <Link href="/">
                        <Image src="/images/result02.png" width={330} height={250} alt=""/>
                        <div className={style.content}>
                            <p>Recipe pad</p>
                            <small>レシピサイト</small>
                        </div>
                    </Link>
                </div>
                <div className={style.slide}>
                    <Link href="/">
                        <Image src="/images/result03.png" width={330} height={250} alt=""/>
                        <div className={style.content}>
                            <p>Wooden Jewelry</p>
                            <small>ECサイト</small>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </section>
        
    )
}