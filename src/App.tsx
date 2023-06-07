import './App.css'

function App() {

  const func = {
    onclick: {
      gridLayout: () => alert('工事中です!'),
      handWriting: () => alert('工事中です!'),
    }
  }

  return (
    <div className="background">
      <div className='buttons'>
        {/* <a href='./repositories/UI-GridLayout'>グリッドレイアウトコントロール</a> */}
        <a onClickCapture={func.onclick.gridLayout}>グリッドレイアウトコントロール</a>
        <a href='./repositories/UI-HandWriting' onClickCapture={e => { e.stopPropagation(); func.onclick.gridLayout }}>手書きコントロール</a>
        {/* <a onClickCapture={func.onclick.gridLayout}>手書きコントロール</a> */}
      </div>
    </div >
  )
}

export default App
