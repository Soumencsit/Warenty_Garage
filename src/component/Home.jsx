import bgimg from './bgimg.jpg';

function Home(){
        return (
            <div className=' h-screen w-full  flex flex-wrap justify-around items-center'>
                <div className=' h-3/5 w-2/5 flex flex-col justify-around'>
                    <div className=' flex flex-col justify-around' >
                    <p className=' font-mono text-5xl'>Simple, profitable & sustainable warranty management</p>
                    <p className=''>Connect with your customers, improve efficiency, generate more revenue and reduce carbon emissions - all at once with iWarranty, an AI and machine learning powered warranty management system.</p>
                    </div>

                    <div></div>
                    
                    <button className=' h-12 w-3/5 rounded-md  bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-800'>SignUp</button>
                </div>
              
                <div className=' h-2/5  flex shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '> <img src={bgimg} alt="My Image Description" className=' rounded-md'/></div>
               
            </div>
        );
}
export default Home