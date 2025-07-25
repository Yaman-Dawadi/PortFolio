import React from 'react'

const Footer = () => {
    const handleScroll = (sectionid) => {
        const section=document.getElementById(sectionid);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    };
  return (
    <div>
      <footer className="text-white bg-gray-700 py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <div className="text-center container mx-auto">
            <h2 className="text-xl font-semibold text-red-200">Sumit 
                <span className="text-red-400">Poudel</span>
            </h2>
            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                {[
                    {name:"About",id:"about"},
                    {name:"Skills",id:"skills"},
                    {name:"Projects",id:"projects"},
                    {name:"Contact",id:"contact"},

                ].map((item,index)=>(
                    <button key={index} onClick={()=>handleScroll(item.id)} className='hover:text-green-300 text-sm sm:text-base my-1 font-bold cursor-pointer'>{item.name}</button>
                ))}
            </nav>
            <p className="text-sm text-gray-400 mt-6">&copy; 2025 Sumit Poudel.All Right reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer