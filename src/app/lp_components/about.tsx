import style from './about.module.css'

export function About(){
    return (
        <section className={style.container}>
            <h1>About</h1>
            <h3>Dolphin Design について</h3>
            <p>
                当社は、魅力的なウェブデザインやレスポンシブ対応、カスタム開発、CMS導入、
                eコマースソリューション、SEO対策、そしてメンテナンスとサポートなど、広いサービスを提供しています。<br/>
                お客様のニーズに合わせて最適なWebサイトを制作します。
            </p>
        </section>
    )
}