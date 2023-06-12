import './App.css'

function App() {

  const func = {
    alert: () => { alert('工事中です!'); },
    stopPropagation: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { e.stopPropagation(); },
  }

  return (
    <div className="background">
      <div className='buttons'>
        <a href='./repositories/UI-GridLayout'>グリッドレイアウトコントロール</a>
        {/* <a onClickCapture={func.onclick.gridLayout}>グリッドレイアウトコントロール</a> */}
        <a href='./repositories/UI-HandWriting'>手書きコントロール</a>
        {/* <a onClickCapture={func.onclick.gridLayout}>手書きコントロール</a> */}
        {/* <a href='./repositories/'>Flutteアプリ内にReactアプリを完全に埋め込む（ガワアプリでありません）</a> */}
        <a onClickCapture={func.alert}>Flutteアプリ内にReactアプリを完全に埋め込む<br />（ガワアプリでは無いので外部サーバーは不要）</a>
      </div>
    </div >
  )
}

export default App
