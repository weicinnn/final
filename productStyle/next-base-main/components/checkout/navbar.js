import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from '@/components/checkout/cart.module.css'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'
import { useRouter } from 'next/router'

export default function Navbar() {
  // 宣告路由器
  const router = useRouter()
  // 從context取得共同的購物車狀態
  const { totalQty } = useCart()

  const menuItems = [
    {
      id: 1,
      title: '商品列表',
      href: '/1011/checkout/product',
    },
    {
      id: 2,
      title: '購物車',
      href: '/1011/checkout/cart',
    },
  ]

  return (
    <>
      <div className={styles['navbar']}>
        <div className={styles['logo']}>網站Logo</div>
        <div className={styles['header']}>
          <h2>購物車範例</h2>
          <div className={styles['menu']}>
            <ul>
              {menuItems.map((v, i) => {
                return (
                  <li key={v.id}>
                    <Link
                      className={
                        // 驗証選單項目的網址路徑是否和路由器目前的一致(套用點亮樣式)
                        router.pathname === v.href ? styles['active'] : ''
                      }
                      href={v.href}
                    >
                      {v.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={styles['badge']}>
          <div className={styles['button']}>
            <FaShoppingCart />
            <span className={styles['button__badge']}>{totalQty}</span>
          </div>
        </div>
      </div>
    </>
  )
}