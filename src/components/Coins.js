import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'

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
            <CoinItem coins={coins} key={coins.id}/>
        )
    }
  )}
    </div>
  )
}
