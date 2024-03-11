'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href='/' className={styles.logo}>
          <Image
            className={styles.img}
            src='/logo.png'
            width={28}
            height={28}
          />
          <span className={styles.logoTitle}>MyRealEstate</span>
        </Link>
        <Link href='/' className={styles.link}>
          Home
        </Link>
        <Link href='/' className={styles.link}>
          About
        </Link>
        <Link href='/' className={styles.link}>
          Contact
        </Link>
        <Link href='/' className={styles.link}>
          Agents
        </Link>
      </div>
      <div className={styles.right}>
        <Link href='/' className={styles.login}>
          Sign In
        </Link>
        <Link href='/' className={styles.register}>
          Sign Up
        </Link>{' '}
        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
          <Image
            className={styles.img}
            src='/menu.png'
            alt=''
            width={36}
            height={36}
          />
        </div>
        <div
          className={
            open ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          <Link href='/' className={styles.link}>
            Home
          </Link>
          <Link href='/' className={styles.link}>
            About
          </Link>
          <Link href='/' className={styles.link}>
            Contact
          </Link>
          <Link href='/' className={styles.link}>
            Agents
          </Link>
          <Link href='/' className={styles.link}>
            Sign In
          </Link>
          <Link href='/' className={styles.link}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
