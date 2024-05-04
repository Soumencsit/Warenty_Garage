function Demo(){
    return (
        <div className=" h-60 w-full flex justify-center bg-sky-300">
            <div className=" w-4/5 flex justify-between items-center">
                <p className=" text-4xl">Ready to get started?</p>
                <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-sky-600 border-2 border-sky-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span className="absolute left-0 block w-full h-0 transition-all bg-sky-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Request a Demo</span>
                </a>
             
            </div>
        </div>
    );
}

export default Demo