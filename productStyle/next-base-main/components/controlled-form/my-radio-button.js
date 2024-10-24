import React, { useState, useEffect, Fragment } from 'react'

export default function MyRadioButton(props) {
  // 選項陣列
  const petOptions = ['狗', '貓', '金魚', '倉鼠']
  // 狀態值(單選後得到的值)
  const [pet, setPet] = useState('')
  return (
    <>
      <h2>選項按鈕群組(radio-button-group)</h2>
      {petOptions.map((v, i) => {
        // 因為使用<>...</>無法加上key值，所以要改用原來的元件寫法
        return (
          // 兩種方式呈現
          // 第一種
          // checked 項目值要跟 const [pet, setPet] = useState('') 做比較 是true or false 狀態才會更動
          <Fragment key={i}>
            <input
              type="radio"
              // 每個radio選項用自己本身的v值和狀態pet相比
              // 相符是true(代表選中),反之 false
              value={v}
              checked={v === pet}
              onChange={(e) => {
                // 第一種寫法
                setPet(e.target.value)
                // 第二種寫法(map時可以得到每個選項的v值 v=petOptions)
                setPet(v)
              }}
            />
            {v}
          </Fragment>
          // 第二種
          //   <div key={i}>
          //     <input type="radio" /> {v}
          //   </div>
        )
      })}
    </>
  )
}
