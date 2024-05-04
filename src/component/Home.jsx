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
                    {/* <a href="#_" className="relative inline-flex items-center px-5 py-3 overflow-hidden text-lg font-medium text-sky-600 border-2 border-sky-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-sky-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">SignUp</span>
                    </a> */}
                    <button className=' h-12 w-3/5 rounded-md  bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-800'>SignUp</button>
                </div>
              
                <div className=' h-2/5  flex shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] '> <img src={bgimg} alt="My Image Description" className=' rounded-md'/></div>
               
            </div>
        );
}
export default Home