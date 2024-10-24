import React, { useState, useEffect } from 'react'

export default function ChildA({ dataFromChild = '' }) {
  return (
    <>
      <h3>ChildA(子女元件)</h3>
      <p>從ChildB送來的資料: {dataFromChild}</p>
    </>
  )
}
