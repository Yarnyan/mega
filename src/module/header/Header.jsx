import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.Header__container}>
        <div className={styles.Header__container_items}>
          <img src="/image/logo2.png" alt="" />
          {isMobile ? (
            <div className={styles.Header__burger} onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className={styles.closeIcon} onClick={closeMenu}></div> 
              ) : (
                <>
                  <div className={styles.burger}></div>
                  <div className={styles.burger}></div>
                  <div className={styles.burger}></div>
                </>
              )}
            </div>
          ) : (
            <div className={styles.Header__items_nav}>
              <Link to={'/'} target='_blank'>Юридическим лицам</Link>
              <a href='#company'>О компании</a>
            </div>
          )}
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={closeMenu}></div>
          <Link to={'/'} target='_blank' className={styles.first__link} onClick={closeMenu}>Юридическим лицам</Link>
          <a href='#company' onClick={closeMenu}>О компании</a>
          <a onClick={closeMenu} href="#social">Все контакты</a>
        </div>
      )}
    </div>
  );
}
