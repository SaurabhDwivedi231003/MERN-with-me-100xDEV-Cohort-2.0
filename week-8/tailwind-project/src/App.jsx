import './App.css'
import RevenueCard from './components/RevenueCard'

// use : https://storybook.js.org/ for starting a UI of a project.
// https://dashboard-clone-dukaan.vercel.app/

function App() {

  return (
    <div className='grid grid-cols-3'> 
      <RevenueCard title={'Today Revenue'} amount={"92,653.00"} orderCount={10} />
    </div>
  )
}

export default App
