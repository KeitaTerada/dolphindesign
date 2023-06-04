import style from './info.module.css'

export function Info(){
    return (
        <section className={style.container}>
            <h1>Infomation</h1>
            <div className={style.wrapper}>
                <div>
                    <p>2023.4.1</p>
                    <p>ホームページの更新しました。</p>
                </div>
                <div>
                    <p>2023.4.1</p>
                    <p>ホームページの更新しました。</p>
                </div>
                <div>
                    <p>2023.4.1</p>
                    <p>ホームページの更新しました。</p>
                </div>
            </div>
        </section>
    )
}