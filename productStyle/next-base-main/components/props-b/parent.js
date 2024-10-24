import React, { useState, useEffect } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent(props) {
  // 狀態是元件內部私有的變數，其它元件無法得知
  // const [pData, setPData] = useState('parent data')

  // 定義一組特別給ChildB回傳資料用的狀態(將設定狀態的方法傳給ChildB)
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent(父母元件)</h2>
      {/* P->C: 將pData狀態以屬性的方式傳遞給子女元件 */}
      {/* 屬性在很多情況下，是父母元件的狀態的延伸 */}
      {/* 建議屬性名稱與要傳入的狀態(或變數)名要盡可能一致 */}
      {/* <ChildA pData={pData} /> */}
      {/* C->P: 要傳遞一個可以用來送回資料的函式給子女 */}
      <ChildB setDataFromChild={setDataFromChild} />
      {/* C->C: 得到父母元件的狀態值，剛好對應另個子女設定狀態的方法 */}
      <ChildA dataFromChild={dataFromChild} />
    </>
  )
}