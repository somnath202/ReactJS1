import React from 'react'
import { Bookmark } from 'lucide-react'

const Cart = (probs) => {
  console.log(probs.logo);
  
  return (
    <div>
      <div className="cart">
       <div> <div className="top">
          <img src={probs.logo} alt="" />
          <button>Save <Bookmark size={20} /></button>
        </div>
        <div className="center">
          <h3>{probs.companyName} <span>{probs.days}</span></h3>
          <h2>{probs.post}</h2>
          <div className='role'>
            <h4>{probs.role1}</h4>
            <h4>{probs.role2}</h4>
          </div>
        </div></div>
        <div className="bottom">
          <div>
            <div>
              <h3>${probs.salary}/hr</h3>
              <p>{probs.location}</p>
            </div>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
