"use client"

import style from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";


export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuFunction = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <React.Fragment>
            <header>
                <nav className={style.nav}>
                    <div className={style.logo}>
                        <Link href="/">
                            <Image src="/images/dd_logo.png" layout="responsive" width={150} height={100} alt="" />
                        </Link>
                    </div>
                    <ul className={style.navlinks}>
                        <li><Link href="/">Result</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Service/Profile</Link></li>
                        <li><Link href="/">Company</Link></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}