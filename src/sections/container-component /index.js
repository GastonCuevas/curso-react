import React, { Component } from 'react';
import BitCoinPrice from './presentational';

class BitCoinPriceContainer extends Component {
  state = { bpi: {}}

  componentDidMount () {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp')
      .then(res => res.json())
      .then(data => {
        // Transformamos la respuesta de CoinGecko al formato esperado
        const bpi = {
          USD: { rate: data.bitcoin.usd, code: 'USD' },
          EUR: { rate: data.bitcoin.eur, code: 'EUR' },
          GBP: { rate: data.bitcoin.gbp, code: 'GBP' }
        }
        this.setState({ bpi })
      })
  }

  render () {
    return (
      <BitCoinPrice bpi={this.state.bpi} />
    )
  }
}

export default BitCoinPriceContainer