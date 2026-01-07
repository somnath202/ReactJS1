import React from 'react'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div className='parent'>
      <Cart user='bob' age={18} img='https://plus.unsplash.com/premium_photo-1692029229621-48f5f10a874e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxkaWFtb25kfGVufDB8fDB8fHww' />
      <Cart user='Alice' age={20} img='https://images.unsplash.com/photo-1737498205272-37d699f09424?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHxkaWFtb25kfGVufDB8fDB8fHww' />
      <Cart user='Somnath' age={21} img='https://images.unsplash.com/photo-1766512433799-3dbbb38130d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D' />
     
    </div>
  )
}

export default App
