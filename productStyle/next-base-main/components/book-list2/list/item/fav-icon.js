// 因為要使用導入的圖片，只能用Image元件
import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

// 根據"最少權限原則"與"子女元件渲染最佳化"作法，傳入本元件只需要的兩個屬性值isbn, fav，相較於傳入整個book物件來說是比較理想的作法，參考以下討論區貼文:
// https://github.com/orgs/mfee-react/discussions/111
export default function FavIcon({
  isbn = '',
  fav = false,
  handleToggleFav = () => {},
}) {
  return (
    <>
      <Image
        onClick={() => {
          handleToggleFav(isbn)
        }}
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}