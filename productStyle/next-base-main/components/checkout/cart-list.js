import React from 'react'
import styles from './cart.module.css'
import { useCart } from '@/hooks/use-cart'
// 需要安裝套件 `npm i sweetalert2 sweetalert2-react-content`
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartList() {
  const {
    items = [],
    totalPrice = 0,
    totalQty = 0,
    onDecrease = () => {},
    onIncrease = () => {},
    onRemove = () => {},
  } = useCart()

  const confirmAndRemove = (itemName, itemId) => {
    // react中要使用MySwal取代原本Swal
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: '你確定要刪除嗎？',
      text: '這個動作無法復原',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消',
      confirmButtonText: '確認刪除',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '已成功刪除!',
          text: itemName + ' 已成功從購物車中刪除!',
          icon: 'success',
        })
        // 刪除商品
        onRemove(itemId)
      }
    })
  }

  return (
    <>
      <h1>購物車</h1>
      <div>
        總數量: {totalQty} / 總金額: {totalPrice}
      </div>
      <div className={styles['cart']}>
        <ul className={styles['list']}>
          {items.map((item) => {
            return (
              <li key={item.id} className={styles['item']}>
                <div className={styles['w-400']}>{item.name}</div>
                <div>{item.price}</div>
                <div>
                  <button
                    onClick={() => {
                      onIncrease(item.id)
                    }}
                  >
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => {
                      // 預先計算，如果使用者按下減按鈕，數量如果減少會是多少
                      const nextQty = item.qty - 1
                      // 如果按了後商品數量<=0，則進行刪除
                      if (nextQty <= 0) {
                        confirmAndRemove(item.name, item.id)
                      } else {
                        onDecrease(item.id)
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      confirmAndRemove(item.name, item.id)
                    }}
                  >
                    移除
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
        <hr />
      </div>
    </>
  )
}