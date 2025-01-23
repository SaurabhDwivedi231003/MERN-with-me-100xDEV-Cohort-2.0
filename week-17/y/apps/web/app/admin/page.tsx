import Admin from '@repo/ui/admin'
import Inputbox from '@repo/ui/inputbox'
import React from 'react'

function page() {
  return (
    <div className='flex align-center justify-center'>
        <Admin/>
        <Inputbox/>
    </div>
  )
}

export default page