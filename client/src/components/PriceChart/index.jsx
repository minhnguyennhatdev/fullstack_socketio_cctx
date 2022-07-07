import React, { useState } from 'react'
import moment from 'moment'

const PriceChart = ({ socket }) => {
  const [data, setData] = useState(null)
  socket.on('returnBinancePrice', (data) => {
    setData(data)
  })

  return (
    <>
      {data?.map(e => {
        return (
          <div key={Math.random()}>
            <div>{moment(e[0]).format('DD MM yyyy hh:mm')}</div>
            <div>Open: {e[1]} USD</div>
            <div>High: {e[2]} USD</div>
            <div>Low: {e[3]} USD</div>
            <div>Close: {e[4]} USD</div>
            <div>Volumn: {e[5]} USD</div>
            <div>------------------</div>
          </div>
        )
      })}
    </>
  )
}

export default PriceChart