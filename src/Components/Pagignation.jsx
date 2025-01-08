import React from 'react'

const Pagignation = () => {
  return (
    <>
    <div className="container mx-auto flex justify-center gap-8 py-20">
        <div className="prev-button p-4 border cursor-pointer">
            Previus
        </div>
        <div className="number">
            <ul className='flex gap-4'>
                <li className='p-4 border cursor-pointer'>1</li>
                <li className='p-4 border cursor-pointer'>2</li>
                <li className='p-4 border cursor-pointer'>3</li>
                <li className='p-4 border cursor-pointer'>4</li>
                <li className='p-4 border cursor-pointer'>5</li>
                <li className='p-4 border cursor-pointer'>6</li>
            </ul>
        </div>
        <div className="next p-4 border cursor-pointer">
            Next
        </div>
    </div>
    </>
  )
}

export default Pagignation