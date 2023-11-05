import React from 'react'
import gerbImg from '../../assets/img/gerb.png'
import ratingIcon from '../../assets/img/Rating.svg'
import geoIcon from '../../assets/img/geo.svg'
import walletIcon from '../../assets/img/./Icon/Wallet.svg'
import usersIcon from '../../assets/img/./Icon/Users.svg'

const Card = (item) => {
  console.log(item)
  return (
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
  )
}

export default Card
