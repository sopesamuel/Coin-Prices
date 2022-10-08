import React from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'
import './Coins.css'
import CoinInfo from './Routes/CoinInfo'

export default function Coins({coins}) {
  return (
    <div className='container'>
        <div className='heading'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
         
        </div>
  {coins.map(
    coins => {
        return (
          <Link to={`/coin/${coins.id}`} element={<CoinInfo />} key={coins.id}>
          <CoinItem coins={coins}/>
          </Link>
        )
    }
  )}
    </div>
  )
}
