import logo from './logo.svg';
import './App.css';
import { customColorMatrix } from './CustomColorMatrix'

function App() {
  let data = [
    {
      item: 'item1',
      count: 2,
      percentage: 10
    },
    {
      item: 'item2',
      count: 2,
      percentage: 30
    },
    {
      item: 'item3',
      count: 4,
      percentage: 33
    },
  ];
  const customColorMatrixOptions = [
    {
      style: 'gradient',
      range: '0-20',
      fromColor: '#8B0000',
      toColor: '#FFCCCB'
    },
    {
      color: '#FFFF00',
      style: 'constant',
      range: '21-40'
    },
    {
      style: 'gradient',
      range: '41-100',
      fromColor: '#0000ff',
      toColor: '#ADD8E6'
    }
  ]
  let a = customColorMatrix(customColorMatrixOptions)
  console.log("rrr", a)
  const rows = [];
  // for (let i = 0; i < 100; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(<div key={i} style={{ backgroundColor: a[i] }}>sony</div>);
  // }
  return (
    <div className="App">
      <div>
        {rows}
      </div>
      {data.map((value, i) => (
        <div key={i + 10}>
          <div key={i}>
            <h4>{value.item}</h4>
          </div>
          <div key={i + 1}>
            <h4>{value.count}</h4>
          </div>
          <div key={i + 2} style={{ backgroundColor: a[value.percentage]}}>
            <h4>{value.percentage}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
