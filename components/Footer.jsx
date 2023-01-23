import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/footer.module.css'
function Footer() {
  return (
    <div className={style.container}>
    <div className={style.cardL}>
      <h1 className={style.title}>Agency CREATIVES.</h1>
      <h1 className={style.linkTitle}>
        <Link href="/contact" className={style.link} passHref>
          <>
            <span className={style.linkText}>WORK WITH US</span>
            <Image
              src={ "/img/link.png"}
              width={40}
              height={40}
              alt=""
            />
          </>
        </Link>
      </h1>
    </div>
    <div className={style.cardS}>
      <div className={style.cardItem}>
        15-Elmatryia Cairo,Eg
      </div>
      <div className={style.cardItem}>
      mahmoudwardany18@gmail.com
        <br /> 01011562926
      </div>
    </div>
    <div className={style.cardS}>
      <div className={style.cardItem}>
        FOLLOW US:
        <br /> __FB __IN __BE __TW
      </div>
      <div className={style.cardItem}>
        © 2022 Mahmoud Wardany,
        <br />
        ALL RIGHTS RESERVED
      </div>
    </div>
  </div>
  )
}

export default Footer