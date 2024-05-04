

function About(){
    return(
        <div className=" h-96 w-screen bg-blue-100 flex flex-col  items-center justify-around ">
            <div className=" w-4/5 font-serif font text-5xl  flex items-center flex-col ">
                <p>Efficient, sustainable and affordableb Product</p> 
                <p> Lifecycle Management</p>
            </div>

            <div className=" w-4/5 flex flex-wrap justify-around">
                <div>
                    <p className=" font-serif text-4xl">80%</p>
                    <p>Efficiency Increase</p>
                </div>
                <div>
                    <p className=" font-serif text-4xl">60%</p>
                    <p>Cost Seving</p>
                </div>
                <div>
                    <p className="font-serif text-4xl">15-25%</p>
                    <p>New Revenue Opportunities</p>
                </div>
            </div>
            
        </div>
    );
}

export default About