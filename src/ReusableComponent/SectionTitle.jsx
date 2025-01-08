import React from 'react'

const SectionTitle = (props) => {
  return (
    <>
    <div className="featureproduct container mx-auto text-center text-5xl font-semibold py-5">
        <h2 className='pb-2 font-Crimson'>{props.title}</h2>
    </div>
    </>
  )
}

export default SectionTitle