import React from 'react';
import Group from './Group.svg'
import Group1 from './Group1.svg'
import Group2 from './Group2.svg'
import Group3 from './Group3.svg'
import Arrow from './rightArrow.svg'

function Service(){
    return (
        <div className=" h-full w-screen py-20  bg-blue-50 flex flex-wrap items-center  justify-around ">
            <div className=" h-80 w-1/5 rounded-md   flex flex-col justify-around items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div>
                        <img src={Group} alt="" />
                    </div>
                    <div className=' text-center'>
                       
                        <p className='font-serif text-2xl'>Digital warranty registration </p>
                       
                        
                    </div>
                    <div className=' w-full p-3 text-center'>
                    <p>Instant QR code-enabled warranty registration for your consumers on our mobile app</p>
                    </div>
                    <button className=' flex underline'>Learn More</button>
            </div>
            <div className=" h-80 w-1/5 rounded-md   flex flex-col justify-around items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div>
                        <img src={Group1} alt="" />
                    </div>
                    <div className=' text-center'>
                       
                        <p className='font-serif text-2xl'>Warranty management </p>
                      
                        
                    </div>
                    <div className=' w-full p-3 text-center'>
                    <p>Integrated manufacturer, consumer, and repairer platform for accelerated warranty management</p>
                    </div>
                    <button className=' flex underline'>Learn More</button>
            </div>
            <div className=" h-80 w-1/5 rounded-md   flex flex-col justify-around items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div>
                        <img src={Group2} alt="" />
                    </div>
                    <div className=' text-center'>
                       
                        <p className='font-serif text-2xl'>Claims management and verification</p>
                       
                        
                    </div>
                    <div className=' w-full p-3 text-center'>
                    <p>Automated claim verification and management for rapid claim resolution</p>
                    </div>
                    <button className=' flex underline'>Learn More</button>
            </div>
            <div className=" h-80 w-1/5 rounded-md  flex flex-col justify-around items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div>
                        <img src={Group3} alt="" />
                    </div>
                    <div className=' text-center'>
                       
                        <p className='font-serif text-2xl'>Sustainable CRM</p>
                       
                        
                    </div>
                    <div className=' w-full p-3 text-center'>
                    <p>Enhanced after-sales experience for improved customer satisfaction</p>
                    </div>
                    <button className=' flex underline'>Learn More</button>
            </div>
        </div>
    );
}

export default  Service