export default function InputId() {
  return (
    <>
      <h2>input-text使用id</h2>
      <hr />
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').blur()
        }}
      >
        模糊(blur)
      </button>
      <button
        onClick={() => {
          alert(document.querySelector('#my-input').value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
