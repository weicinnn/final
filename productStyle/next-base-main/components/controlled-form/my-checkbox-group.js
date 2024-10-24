import React, { useState, useEffect } from 'react'

export default function MyCheckboxGroup(props) {
  // 選項陣列
  const petOptions = ['狗', '貓', '金魚', '倉鼠']
  // 轉換選項為物件陣列，作為狀態初始值
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })
  // 狀態
  const [pets, setPets] = useState(initState)

  // 處理checked屬性布林值切換的函式
  const handleToggleChecked = (petId) => {
    const nextPets = pets.map((v, i) => {
      // 這裡判斷id值是否等於petId，如果是就反相(切換)checked布林值
      if (v.id === petId) {
        return { ...v, checked: !v.checked }
      } else {
        return v
      }
    })

    setPets(nextPets)
  }

  // 處理全選
  const handleCheckboxGroupAll = (e) => {
    // 強制讓所有的選項的checked屬性，和e.target.checked一致
    const nextPets = pets.map((v, i) => {
      return { ...v, checked: e.target.checked }
    })

    setPets(nextPets)
  }

  return (
    <>
      <h2>核取方塊(checkbox-group)</h2>
      <div>
        <input
          type="checkbox"
          // 全選是否有勾選，是依照所有myPets狀態裡記錄與所有選項的比對，當pets成員中的checked屬性都是true，就是true
          // every會測試陣列中所有成員，當每個成員都能通過測試的回調函式，才會回傳true
          checked={pets.every((v) => v.checked)}
          onChange={handleCheckboxGroupAll}
        />{' '}
        全選
      </div>
      <hr />
      {pets.map((v, i) => {
        return (
          <div key={v.id}>
            <input
              type="checkbox"
              checked={v.checked}
              onChange={() => {
                handleToggleChecked(v.id)
              }}
            />
            {v.label}
          </div>
        )
      })}
    </>
  )
}
