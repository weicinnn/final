import { useRef } from 'react'

export default function InputRefs() {
  // 1. 宣告一個ref物件(可變的mutable)
  // 執行後`inputRef = { current: null }`
  // 對比的是document.getElementById(或querySelector)方法
  // 所以初始值會使用null值(得不到元素時的預設值)
  const inputRef = useRef(null)

  return (
    <>
      <h2>input-text使用refs</h2>
      <hr />
      {/* 2. 在要使用的表單元素上加入ref屬性 */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          //3. 使用時用inputRef.current來呼叫元素可用的api或屬性。因為在套用的表單元素，在虛擬dom渲染為真實dom後，react會在內部把此元素的實體物件引用，綁定到current屬性上
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        模糊(blur)
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
