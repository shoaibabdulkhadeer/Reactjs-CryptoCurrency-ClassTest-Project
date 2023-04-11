import React from 'react'
import '../styles/Coins.css'


const CoinsItem = ({coins}) => {

  return (
    <div className='CoinsItem'>

   <div className='main'>
       <h2 className='bluehead'>SECURLY BUY,SELL,STORE,SEND and TRACK</h2>
        <h1> Buy crypto at true cost </h1>
        <p className='para'>Buy add sell 250+ cryptocurrencies with 20+ list cryptocurrencies
            using bank transfer to your credit/debit card
        </p>

</div>   
        <table className=''>
        <tbody >
           {coins.map((coin) => {
           
            return (
                <>
              <tr className='row'>
                 
               <td><img src={coin.iconUrl} alt="" width={35}  style={{marginTop:"10px"}}/></td>  
              <td style={{color:coin.color}}>{coin.name}</td>
              <td className='symbol'>{coin.symbol}</td>
              <td className='number'>${Number(coin.price).toFixed(2)}</td>
              <td style={coin.change > 0 ? {color:"green"} : {color : "red"}}>{coin.change}%</td>
              <td>${Number(coin.marketCap).toLocaleString()} </td>
             
              <td><button>Trade</button></td>
              </tr>
            
         
              </>
            )
           }) }
        </tbody>
      </table>
        
     </div>
  )
}

export default CoinsItem