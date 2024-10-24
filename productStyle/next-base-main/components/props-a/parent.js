import React, { useState, useEffect } from 'react'
import Child from './child'

export default function Parent(props) {
  return (
    <>
      <h2>parent(父母元件)</h2>
      {/* 建立P到C關係,由誰渲染(render)誰決定,父母元件渲染子女元件 */}
      {/* 父母元件可以利用類似HTML給定屬性值的方式,傳遞各種值到子女元件 */}
      {/* 產品列表卡片元件 類似這樣製作 */}
      <Child title={100} price={true} isConnected={456} />
    </>
  )
}
