

import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa'

const PaymentLogo = () => {
  return (
    <div className='w-full flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center p-5 lg:px-10 xl:px-12'>
        <div className="flex justify-center items-center">
            {/* Text */}
            <h1 className="font-figtree font-normal text-xs md:text-sm leading-[18.9px] opacity-60">Fkm © 2024-2025, All Rights Reserved</h1>
        </div>

        <div  className='flex justify-center items-center gap-4'>
            {/* Logos */}
            <div>
                {/* VISA */}
                <FaCcVisa className='text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-md' />
            </div>

            <div>
                {/* Master Card */}
                <FaCcMastercard className='text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-md' />
            </div>


            <div>
                {/* Paypal */}
                <FaCcPaypal className='text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-md' />
            </div>
        </div>
      
    </div>
  )
}

export default PaymentLogo
