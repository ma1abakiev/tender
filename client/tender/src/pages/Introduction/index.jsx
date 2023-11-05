import React, { useState, useEffect } from 'react'
import './index.css'
import userIcon from '../../assets/img/user.svg'
import heartIcon from '../../assets/img/heart.svg'
import commentIcon from '../../assets/img/ChatCircle.svg'
import logoIcon from '../../assets/img/OpenBid.svg'
import IntroImg from '../../assets/img/intro.png'
import kyrgyzstanImg from '../../assets/img/kyrgyzstan.png'
import gerbImg from '../../assets/img/gerb.png'
import ratingIcon from '../../assets/img/Rating.svg'
import geoIcon from '../../assets/img/geo.svg'
import walletIcon from '../../assets/img/./Icon/Wallet.svg'
import usersIcon from '../../assets/img/./Icon/Users.svg'
import footerIcon from '../../assets/img/footerLogo.svg'

const Introduction = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="container">
            <div className="header__top">
              <div></div>
              <div className="header__top-right">
                <img src={userIcon} alt="" className="header__icon" />
                <img src={heartIcon} alt="" className="header__icon" />
                <img src={commentIcon} alt="" className="header__icon" />
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="header__bottom">
              <img src={logoIcon} alt="" className="header__logo" />
              <nav className="header__nav">
                <a href="" className="header__link">
                  О платформе
                </a>
                <a href="" className="header__link">
                  Предпринимателям
                </a>
                <a href="" className="header__link">
                  Гражданам
                </a>
                <a href="" className="header__link">
                  Тендеры
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="intro">
          <div className="container">
            <div className="intro__content">
              <div className="intro__left">
                <h1 className="intro__title">Государственные закупки</h1>
                <p className="intro__text">
                  Соединяем <span>государство и предпринимателей </span>
                  Обсуждение, оценка прозрачности <span> здесь и сейчас</span>
                </p>
              </div>
              <div className="intro__right">
                <img src={IntroImg} alt="" className="intro__img" />
              </div>
            </div>
          </div>
        </section>
        <section className="kyrgyzstan">
          <div className="container">
            <img src={kyrgyzstanImg} alt="" />
          </div>
        </section>
        <section className="last">
          <div className="container">
            <h2 className="last__title">
              Последние <span>добавленные</span>
            </h2>
            <div className="last__content">
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-block">
              <button className="more">Показать еще 18</button>
            </div>
          </div>
        </section>
        <section className="last">
          <div className="container">
            <h2 className="last__title">
              Недавно <span>Завершённые</span>
            </h2>
            <div className="last__content">
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={gerbImg} alt="Card Image" />
                <div className="card-text">
                  <h2>Каракольское муниципальное предприятие "Водоканал"</h2>
                  <div className="rating">
                    {/* Здесь вы можете использовать компонент рейтинга с звёздочками */}
                    <img src={ratingIcon} alt="" />
                    <span>(23)</span>
                  </div>
                  <div className="card__box">
                    <div>
                      <div className="info">
                        <img src={geoIcon} alt="" />
                        <span>Каракол 5 мин пешком</span>
                      </div>
                      <div className="participants">
                        <img src={usersIcon} alt="" />

                        <span>10</span>
                      </div>
                      <div className="money">
                        <img src={walletIcon} alt="" />
                        <span>1000$</span>
                      </div>
                    </div>
                    <button>Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-block">
              <button className="more">Показать еще 18</button>
            </div>
          </div>
        </section>
        <section className="fast">
          <div className="container">
            <div className="fast__content">
              <p className="fast__text">
                Для быстрого поиска Вы можете пользоваться всеми вариантами
                <span> одновременно.</span>
              </p>
              <p className="fast__subtext">
                <span>GP Платформа </span> позволяет общаться напрямую здесь и
                сейчас. Мы за «прозрачные отношения»
              </p>
            </div>
          </div>
        </section>
      </main>
      <hr />
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <img src={footerIcon} alt="" />
              <span className="footer__logo-text">Интерактивная платформа</span>
            </div>

            <nav className="footer__nav">
              <a href="#" className="footer__link">
                О проекте
              </a>
              <a href="#" className="footer__link">
                Площадкам
              </a>
              <a href="#" className="footer__link">
                Гостям
              </a>
              <a href="#" className="footer__link">
                Контакты
              </a>
              <a href="#" className="footer__link">
                Помощь
              </a>
              <a href="#" className="footer__link">
                Вакансии
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Introduction
