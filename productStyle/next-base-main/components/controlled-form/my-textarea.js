import React, { useState, useEffect } from 'react'

export default function MyTextarea(props) {
  const [text, setText] = useState('')
  return (
    <>
      <h2>文字輸入區域(textarea)</h2>
       {/* 在HTML中原本是有開頭與結尾的語法(使用props.children)，在react(JSX)中被改為單個標記，類型input-tex的語法 */}
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </>
  )
}
