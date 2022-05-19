// Components
import Header from '../components/Header'
import PortfolioChart from '../components/PortfolioChart'
import BuyTokens from '../components/BuyTokens'
import Notice from '../components/Notice'
import Assets from '../components/Assets'
//Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
// Depenencies
import axios from 'axios'
import {useState, useContext } from 'react'
import { CosineContext } from '../context/CosineContext'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  mainContainer: 'w-8/10 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full  p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col ',
  portfolioAmount: 'text-white text-4xl',
  portfolioPercent: 'text-white font-bold text-sm',
  pastHour: 'text-gray-400',
  chartContainer:
    'text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-11',
  buyingPowerContainer:
    'w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between items-center p-4',
  buyingPowerTitle: 'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white font-bolder text-xl',
  notice: 'flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
  rightMain:
    'flex flex-col flex-90 h-7/9 bg-[#1E2123] mt-5 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-3 border-b border-[#30363b]',
  ItemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pointer text-xl',
}

export default function Home({coins}) {

  const[myCoins] = useState([...coins.slice(0,15)])
  const { balance } = useContext(CosineContext)

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.portfolioAmount}> {balance} 0.2279 ETH
              <div className={styles.portfolioPercent}>
                +0.0008 (+0.57%)
                <span className= {styles.pastHour}> Past Hour </span>
              </div>
            </div>  
          </div>
          <div>
            <div className={styles.chartContainer}>
              <PortfolioChart /> 
            </div>
          </div>
          <div className={styles.buyingPowerContainer}>
            <div className={styles.buyingPowerTitle}>Buying Power</div>
            <div className={styles.buyingPowerAmount}>{ balance }0.2279 ETH</div>
          </div>
          <div className={styles.notice}>
            <div className={styles.noticeContainer}>
              <div className={styles.noticeTitle}>Send Funds</div>
                <div className={styles.noticeMessage}>
                  Transfer your funds here .
                </div>
                <BuyTokens/>
              </div>
            </div>
            <Notice />
          </div>
        <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>Crypto Currencies</div>

            <BiDotsHorizontalRounded className={styles.moreOptions} />
            </div>
            {myCoins.map(coin => {
              let price = parseFloat(coin.price)
              price = price.toFixed(2)

              return <Assets key = {coin.uuid} coin = {coin} price = {price} />
            })}
          
          <div className={styles.rightMainItem }>
            <div className={styles.ItemTitle}>Lists</div>
            <AiOutlinePlus className={styles.moreOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.coinranking.com/v2/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-access-token': 'coinranking48bb8f933dbc175b46c3ccf9e982a0f380bb2b1e7f492be8'
    }
  };

  const res = await axios.request(options)
  const coins = res.data.data.coins

  return {
    props: { coins },
  } 
}
