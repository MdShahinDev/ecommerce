
import SectionTitle from '../ReusableComponent/SectionTitle'
import truck from '../assets/truck.png'
import gurantee from '../assets/gurantee.png'
import support from '../assets/support.png'
import award from '../assets/award.png'
const OfferBox = () => {
  return (
    <>
    <SectionTitle title="What Shopex Offer!"/>
    <div className="offerbox container mx-auto sm:flex-wrap flex justify-center gap-4 pb-20">
        <div className="item-1 p-6 shadow-md  text-center w-80 border-b-2 transition-all cursor-pointer hover:border-b-2 hover:border-Primary">
            <img src={truck} alt="" className='mx-auto py-6' />
            <h2 className='font-Crimson text-2xl font-semibold pb-6'>Free Delivery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        <div className="item-2 p-6 shadow-md  text-center w-80 border-b-2 transition-all cursor-pointer hover:border-b-2 hover:border-Primary">
            <img src={gurantee} alt="" className='mx-auto py-6' />
            <h2 className='font-Crimson text-2xl font-semibold pb-6'>100% Cash Back</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        <div className="item-3 p-6 shadow-md  text-center w-80 border-b-2 transition-all cursor-pointer hover:border-b-2 hover:border-Primary">
            <img src={award} alt="" className='mx-auto py-6' />
            <h2 className='font-Crimson text-2xl font-semibold pb-6'>Quality Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        <div className="item-4 p-6 shadow-md  text-center w-80 border-b-2 transition-all cursor-pointer hover:border-b-2 hover:border-Primary">
            <img src={support} alt="" className='mx-auto py-6' />
            <h2 className='font-Crimson text-2xl font-semibold pb-6'>24/7 Support</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        
    </div>
    </>
  )
}

export default OfferBox