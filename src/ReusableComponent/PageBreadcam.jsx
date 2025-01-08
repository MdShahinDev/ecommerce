import React from 'react'

const PageBreadcam = (props) => {
  return (
    <>
    <div className="pageHeader py-16 bg-[#f6f5ff] ">
    <div className="container mx-auto">
        <h2 className='text-4xl font-semibold font-Crimson pb-4'>{props.title}</h2>
        <ul>
            <li className='font-semibold '>Home . Pages . <span className='text-Primary'>{props.pagename}</span> </li>
        </ul>
    </div>
    </div>
    
    </>
  )
}

export default PageBreadcam