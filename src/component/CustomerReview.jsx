import customer1 from './customer1.jpg'
import customer2 from './customer2.jpg'
import customer3 from './customer3.jpg'


function CustomerReview(){
    return(
        <div className=" w-screen flex flex-col items-center justify-around ">
            <div className=" w-4/5 my-20 text-center font-serif text-4xl"><p>Read our latest posts on warranty management, customer satisfaction, and sustainable practices</p></div>
            <div className=' h-4/5 w-4/5 my-3 flex flex-col items-center justify-around bg-sky-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <div className='w-4/5 h-2/4 rounded-md'> <img src={customer1} alt="" className='w-full h-full rounded-md' /></div>
                <div className='w-4/5 h-1/5 flex flex-col justify-around '>
                    <p className=' text-3xl'><a>Embracing Industry 4.0: Unlock...</a></p>
                    <p className='text-1xl'>In the realm of modern manufacturing, the advent of Industry 4.0 has ushered in a new era of unprecedented innovation...</p>
                    <p><button className=' underline'>Learn More </button></p>
                  
                </div>
                
               
            </div>


            <div className=' h-4/5 w-4/5 my-3  flex flex-col items-center justify-around bg-sky-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <div className='w-4/5 h-2/4 rounded-md'> <img src={customer2} alt="" className='w-full h-full rounded-md' /></div>
                <div className='w-4/5 h-1/5 flex flex-col justify-around '>
                    <p className=' text-3xl'><a>Leveraging AI-Powered Digital ...</a></p>
                    <p className='text-1xl'>Companies across industries are constantly seeking ways to streamline operations and reduce costs while maintaining or...</p>
                    <p><button className=' underline'>Learn More </button></p>
                  
                </div>
                
               
            </div>

            <div className=' h-4/5 w-4/5 my-3  flex flex-col items-center justify-around bg-sky-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] '>
                <div className='w-4/5 h-2/4 rounded-md'> <img src={customer3} alt="" className='w-full h-full rounded-md' /></div>
                <div className='w-4/5 h-1/5 flex flex-col justify-around '>
                    <p className=' text-3xl'><a>Unlocking Customer Loyalty: Th...</a></p>
                    <p className='text-1xl'>In a marketplace flooded with choices, businesses are constantly striving to build lasting connections with their...</p>
                    <p><button className=' underline'>Learn More </button></p>
                  
                </div>
                
               
            </div>
           
           
        </div>
    );
}
export default CustomerReview