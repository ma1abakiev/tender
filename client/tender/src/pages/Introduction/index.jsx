import React, { useState, useEffect } from 'react'
import './index.css'
import timeIcon from '../../assets/img/time.png'

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
        <div className="container">
          <div className="header__content">
            <a href="#" className="header__logo">
              OPEN <span>BIT</span>
            </a>
            <nav className="header__nav">
              <a href="#" className="header__link">
                Тендеры
              </a>
              <a href="#" className="header__link">
                О платформе
              </a>
              <a href="#" className="header__link">
                Контакты
              </a>
            </nav>
            <div>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="filter">
          <div className="container">
            <div className="filter__content"></div>
          </div>
        </section>
        <section className="tenders">
          <div className="container">
            <div className="tenders__content">
              <div className="tender">
                <img
                  src="https://tender-smart.com/icon/privateLogo.svg"
                  alt=""
                  className="tender__logo"
                />
                <div className="tender__info">
                  <div className="tender__header">
                    <span className="tender__title">Lorem ipsum</span>
                  </div>
                  <p className="tender__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo harum excepturi neque totam pariatur iusto optio
                    beatae cupiditate sapiente vel.
                  </p>
                  <div className="tender__bottom">
                    <div className="tender__time">
                      <img
                        width={25}
                        height={25}
                        src={timeIcon}
                        alt=""
                        className="tender__time-logo"
                      />
                      <span className="tender__time-text">
                        Завершается {currentTime.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="tender__money">
                      <img src="" alt="" className="tender__money-logo" />
                      <span className="tender__money-text">5135124343 сом</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Introduction
