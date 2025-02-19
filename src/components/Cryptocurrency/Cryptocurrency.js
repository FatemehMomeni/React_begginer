// import React, {useEffect, useState} from "react";
// import axios from "axios";


// const Cryptocurrency = () => {
//     const [coins, setCoins] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const holdings = useMemo(() => holdingsData, []);
//     const api_key = ""

//     const loadDocument = async () => {
//         // const response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=6XQFMHS4ZSH8KDW1');
//         axios.get(
//             `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${holdings.map(holding => holding.id).join(',')}`, 
//             {
//                 headers: {
//                 'X-CoinAPI-Key': api_key
//                 }
//             }
//         ).then(response => {
//             const updatedHoldings = holdings.map(holding => {
//               const coin = response.data.find(coin => coin.id === holding.id);
//               return {
//                 ...holding,
//                 name: coin.name,
//                 current_price: coin.current_price,
//                 price_change_24h: coin.price_change_24h,
//                 price_change_percentage_24h: coin.price_change_percentage_24h
//               };
//             });
//             setCoins(updatedHoldings);
//             setLoading(false);
//           })
//           .catch(error => {
//             console.error('Error fetching data', error);
//           });
//     }

//     useEffect(() => {
//         loadDocument();
//     }, [holdings])

//     return (
//         <div className="Crypto">
//         </div>
//     )
// }

// export default Cryptocurrency;
