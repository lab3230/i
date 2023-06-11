import './App.css'

function App() {

  const func = {
    onclick: {
      gridLayout: () => alert('工事中です!'),
      handWriting: () => alert('工事中です!'),
    },
    onClickCapture: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { e.stopPropagation(); func.onclick.gridLayout },
  }

  return (
    <div className="background">
      <div className='buttons'>
        <a href='./repositories/UI-GridLayout' onClickCapture={func.onClickCapture}>グリッドレイアウトコントロール</a>
        {/* <a onClickCapture={func.onclick.gridLayout}>グリッドレイアウトコントロール</a> */}
        <a href='./repositories/UI-HandWriting' onClickCapture={func.onClickCapture}>手書きコントロール</a>
        {/* <a onClickCapture={func.onclick.gridLayout}>手書きコントロール</a> */}
      </div>
    </div >
  )
}

export default App
