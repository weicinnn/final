import React, { useState, useEffect } from 'react'
import InputIME from './input-ime'

export default function MyInputText(props) {
  // 文字輸入框 使用狀態
  const [text, setText] = useState('')
  // 數字輸入框 input-number
  const [digital, setDigital] = useState(10)
  // 日期輸入框input-date 格式為`YYYY-MM-DD` ex.""1995-10-05""
  const [birth, setBirth] = useState('')
  // 密碼輸入框
  const [password, setPassword] = useState('')
  // 顯示密碼的核取方塊
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>文字輸入框(input-text)</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h2>文字輸入框(input-text)-修正中文輸入法</h2>
      {/* 修正中文輸入法組字期間略過設定到狀態中 */}
      <InputIME
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <h2>數字輸入框(input-number)</h2>
      <input
        type="number"
        // 最小值是10 所以初始值也要對應成10
        min={10}
        max={100}
        step={2}
        // 把狀態render到網頁上 value={digital}
        value={digital}
        // onChange 把網頁上輸入值(必定是字串資料類型),設定回狀態(注意資料類型)
        onChange={(e) => {
          // e.target.value 是字串值,用`+`或`Number()`來轉換資料類型
          const nextDigital = Number(e.target.value)
          setDigital(nextDigital)
        }}
      />
      <h2>日期輸入框(input-date)</h2>
      <input
        type="date"
        value={birth}
        onChange={(e) => {
          setBirth(e.target.value)
        }}
      />
      <h2>密碼輸入框(input-password)</h2>
      <input
        type={show ? 'text' : 'password'}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => {
          //   console.log(e.target.checked, typeof e.target.checked)
          // 第一種寫法，使用事件觸發對象的checked值(布林值)
          setShow(e.target.checked)
        }}
      />
      顯示密碼
      <button
        onClick={() => {
          // 要反向 像是登入登出一樣 登入中顯示登出
          // 第二種寫法，使用布林值切換
          setShow(!show)
        }}
      >
        {show ? '隱藏' : '呈現'}
      </button>
    </>
  )
}
