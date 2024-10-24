import React, { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild = () => {} }) {
  // 狀態是元件內部私有的變數，其它元件無法得知
  const [cData, setCData] = useState('child-b data')

  // 錯誤寫法: 直接呼叫由父母傳來的設定狀態的函式
  // 因為對react應用來說有副作用，而且有可能會造成無窮渲染的迴圈
  // setDataFromChild(cData)

  // 正確使用方式-2: (自動地同步化工作)可以處理有react中副作用的程式碼
  useEffect(() => {
    // 元件初次渲染之後，執行一次這裡的程式碼
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>ChildB(子女元件)</h3>
      <button
        onClick={() => {
          // 正確使用方式-1. (手動地觸發事件)在事件處理函式中呼叫，可以處理有react中副作用的程式碼
          // setDataFromChild(cData)
        }}
      >
        送資料回子女ChildA
      </button>
    </>
  )
}
