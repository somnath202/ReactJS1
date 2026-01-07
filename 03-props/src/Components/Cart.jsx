import React from 'react'

const Cart = (probs) => {
    console.log('user :',probs)
  return (
    
      <div className="cart">
        <img src={probs.img} alt="" />
        <h1>{probs.user},{probs.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, corrupti!</p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Cart
