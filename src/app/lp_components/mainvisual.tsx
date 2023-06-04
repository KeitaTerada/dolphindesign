import style from './mainvisual.module.css'
import Image from 'next/image'

export function Mainvisual(){
    return (
        <section className={style.container}>
            <div className={style.maincopy}>
                <h2>
                魅力的なウェブ体験を創造する<br/>
                あなたのビジネスのための<br/>
                デジタルソリューション<br/>
                </h2>
            </div>
        </section>
    )
}