
import './App.css'

function App() {

/* https://tailwindcss.com/docs */

// use : https://storybook.js.org/ for starting a UI of a project.

  return (
    <> 
        {/* grid : making responsive when children are of diffrent width */}

      {/* <div className='grid grid-cols-10'>
        <div className='bg-indigo-800	col-span-5'>HELLO</div>
        <div className='bg-red-200 col-span-3'>Hello</div>
        <div className='bg-green-600 col-span-2'>Hello</div>
      </div> */}

      {/* flex */}
      
      {/* <div className='flex'>
        <div className='bg-indigo-800	w-[50%]'>HELLO</div>
        <div className='bg-red-200 w-[30%]'>Hello</div>
        <div className='bg-green-600 w-[20%]'>Hello</div>
      </div> */}

      {/* Responsiveness : https://tailwindcss.com/docs/responsive-design , Thoda ulta lgega but understand*/}
      {/* <div className='bg-red-500 md:bg-slate-400'> */}   { /* bg-red-500 for mobile and bg-slate-400 for medium and above */}
        {/* Hello
      </div> */}

      {/* Tailwind Responsiveness is MOBILE FIRST , Jo b design h phle mobile k liye than size greater than mobile k liye */}

      <div className='border-cyan-700 border-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5'> 
        <div className='bg-red-500 '>Hello Seenu</div>
        <div className='bg-yellow-200 '>Hello Seenu</div>
        <div className='bg-violet-300'>Hello Seenu</div>
        <div className='bg-red-500 '>Hello Seenu</div>
        <div className='bg-yellow-200 '>Hello Seenu</div>
        <div className='bg-violet-300'>Hello Seenu</div>
        <div className='bg-yellow-200 '>Hello Seenu</div>
        <div className='bg-violet-300'>Hello Seenu</div>
        
      </div>

    </>
  )
}

export default App
