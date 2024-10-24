import React, { useState, useEffect } from 'react'
import TWZipCode from './tw-zipcode'

export default function MySelect(props) {
  // 下拉清單的選項
  const cityOptions = ['台北市', '新北市', '桃園市']
  // 宣告記錄下拉清單選中的字串值，初始值為空白字串代表"請選擇"這個選項
  const [city, setCity] = useState('')

  // 郵遞區號元件使用
  const [data, setData] = useState({
    country: '高雄市',
    township: '鳳山區',
    postcode: '830',
  })

  return (
    <>
      <h2>下拉清單(select)</h2>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value)
        }}
      >
        {/* 對應狀態初始值的選項 */}
        <option value="">請選擇城市</option>
        {/* 城市選項 */}
        {cityOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <hr />
      <h3>郵遞區號元件</h3>
      {/* 與本元件state相接與初始化 */}
      <TWZipCode
        initPostcode={data.postcode}
        onPostcodeChange={(country, township, postcode) => {
          setData({
            country,
            township,
            postcode,
          })
        }}
      />
    </>
  )
}
