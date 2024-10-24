import { useEffect, useState } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

// 討論區收集整理參考:
// https://github.com/orgs/mfee-react/discussions/60
export default function Star({
  //initValue = 0, // 初始評分，一開始點亮幾個星星
  value = 0, // 代表父母元件如果提供value(狀態)，則要進行完全同步
  max = 5, // 最多可評分數(幾個星星)
  onRatingClick = () => {},
  fillColor = 'gold',
  emptyColor = 'gray',
  icon = <>&#9733;</>,
}) {
  // 點按星星按鈕的評分，一開始是0代表沒評分
  const [rating, setRating] = useState(0)

  // 滑鼠游標懸停(hover)評分，一開始是0代表沒評分
  const [hoverRating, setHoverRating] = useState(0)

  // 使用useEffect作完全綁定父母元件傳入狀態
  // 監聽傳入的value屬性值的更動，一旦有更動就設定本元件的rating狀態的評分，達成完全綁定同步
  // 這種元件在官網文件中稱為controlled component(可控的/受控的 元件)
  useEffect(() => {
    setRating(value)
  }, [value])
  // ^^^^^^^ 這裡的[value]是useEffect的第二個參數(相依變數陣列)，代表只有value屬性值有更動才會執行useEffect內的程式碼

  // 簡單的針對傳入屬性值的檢查
  // if (initValue > max) {
  //   console.warn('initValue 不可以超過 max 的值')
  // }

  return (
    <>
      <div>
        {/* 簡易建立5個有1...N數字成員陣列的語法
         參考: https://github.com/orgs/mfee-react/discussions/50
       */}
        {Array(max)
          .fill(1)
          .map((v, i) => {
            // 每個星星按鈕的分數，相當於索引值+1
            const score = i + 1

            return (
              <button
                key={i + 1}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)
                  // 回送分數回父母元件
                  onRatingClick(score)
                }}
                onMouseEnter={() => {
                  // 滑鼠游標移入設定分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 滑鼠游標移入設定分數回預設值0
                  setHoverRating(0)
                }}
                className={styles.starBtn}
              >
                <span
                  // style屬性需要協助css module套用顏色動態屬性到CSS變數中
                  style={{
                    '--fill-color': fillColor,
                    '--empty-color': emptyColor,
                  }}
                  // 判斷如果此星星的分數(score)小於等於目前點按評分(rating)或是游標懸停評分(hoverRating)，則套用點亮樣式(on)，否則套用無點亮樣式(off)
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
      <style jsx>
        {`
          .on {
            color: ${fillColor};
          }

          .off {
            color: ${emptyColor};
          }
        `}
      </style>
    </>
  )
}