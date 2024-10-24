import FavIcon from './fav-icon'

// 根據"最少權限原則"與"子女元件渲染最佳化"作法，傳入本元件如果所需的屬性值不多的情況下, 打散後傳入每一個屬性值，相較於傳入整個book物件來說，可能是比較理想的作法，參考以下討論區貼文:
// https://github.com/orgs/mfee-react/discussions/111
export default function Item({ book = {}, handleToggleFav = () => {} }) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <FavIcon
            isbn={book.isbn}
            fav={book.fav}
            handleToggleFav={handleToggleFav}
          />
        </td>
      </tr>
    </>
  )
}