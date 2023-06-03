import style from './service.module.css'
import Image from 'next/image'
import Link from 'next/link';

export function Service(){
    return (
        <section className={style.container}>
            <h1>Service</h1>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <p>私たちはデザイン、価格、SEOの三つの要素を徹底的に充実させたサービスをご提供しています。</p>
                    <p>
                        魅力的なデザインはブランドの個性を際立たせ、競争力のある価格はお客様の予算にフィットします。
                        さらに、高度なSEO対策によってオンライン上での存在感を向上させ、ターゲットオーディエンスに届けます。<br/>
                        私たちのチームはクリエイティビティと専門知識を結集し、最高の結果を追求します。
                    </p>
                </div>
                <div className={style.right}>
                    <Image src="/images/ddimage.png" layout='responsive' width={471} height={402} alt=""/>
                </div>
            </div>
            <div className={style.button}>
                <Link href="/">View more</Link>
            </div>
        </section>
    )
}