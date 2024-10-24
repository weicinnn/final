import React, { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'

// 1. 建立(與導出)Context
// 傳入參數為defaultValue，是在套用context時錯誤或失敗才會得到的值。
// 可以使用有意義的預設值，或使用null(通常目的是為了除錯)
const AuthContext = createContext(null)
// 可以設定displayName，這是搭配react devtools開發時用的
AuthContext.displayName = 'AuthContext'

// 2. 建立Provider(供應者)元件
// 使用有開頭/結尾的特殊元件，共用狀態在其中進行集中管理
// 提供在MyApp(_app.js)階層最上層元件中套用的context
// props.children指的是包裹在其中的所有子女元件
export function AuthProvider({ children }) {
  // 宣告路由器狀態
  const router = useRouter()

  // 會員認証授權狀態
  const [auth, setAuth] = useState({
    // 代表會員是否有登入的布林值
    isAuth: false,
    // 會員的資料物件
    userData: {
      id: 0,
      name: '',
      email: '',
      username: '',
    },
  })

  const login = (username, password) => {
    if (username === 'herry' && password === '12345') {
      setAuth({
        isAuth: true,
        userData: {
          id: 1,
          name: '哈利',
          email: 'herry@test.com',
          username: username,
        },
      })

      // 歡迎訊息與導至個人資料頁
      if (confirm('歡迎你，是否要前往個人資料頁?')) {
        router.push('/1011/user/profile')
      }
    } else {
      alert('帳號密碼錯誤，無法登入!')
    }
  }

  const logout = () => {
    // 設定回原本的初始值
    setAuth({
      isAuth: false,
      userData: {
        id: 0,
        name: '',
        email: '',
        username: '',
      },
    })
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// 3. 建立一個包裝useContext的專用名稱勾子
// 提高閱讀性(專屬名稱)，簡化使用context的程式語法
export const useAuth = () => useContext(AuthContext)