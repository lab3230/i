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
        {/* <a href='./repositories/'>FlutteアプリにReactアプリを全て埋め込みインストーラーだけで配布する</a> */}
        <a onClickCapture={func.alert}>FlutteアプリにReactアプリを全部埋め込みインストーラーだけで配布する<br />（Reactアプリをホストする外部サーバーは不要です！）</a>
      </div>
    </div >
  )
}

export default App
