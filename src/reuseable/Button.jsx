import React from 'react'

const Button = ({title, bgcolor, textcolor, }) => {
  return (
    <div className='tablet:block hidden'>
        <button 
        style={{
            color: `${textcolor}`,
            background: `${bgcolor}`,
        }}
        className=' border-transparent px-9 py-3 rounded-xl flex items-center w-max'>
            {title}
        </button>
    </div>
  )
}

export default Button