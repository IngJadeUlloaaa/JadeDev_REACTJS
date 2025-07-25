

function Mockup({ imgSrc, title, description, refSee, refDemo }) {
    return (
        <>
            <div className='w-96 h-auto flex flex-col items-center justify-center gap-4'>
                <div className='w-full h-auto overflow-hidden'>
                    <img className='w-auto h-auto' src={imgSrc} alt="ampm-mockup" />
                </div>
                <span className='text-2xl text-white font-bold'>{title}</span>
                <p className='text-base text-gray-400'>{description}</p>
                <div className="flex gap-4">
                    <a href={refSee} target="_blank" rel="noopener noreferrer">
                        <button className="w-20 h-auto px-4 py-2 bg-purple-500 hover:shadow-sm hover:shadow-purple-500 rounded text-white">See</button>
                    </a>
                    <a href={refDemo} target="_blank" rel="noopener noreferrer">
                        <button className="w-20 h-auto px-4 py-2 bg-gray-700 rounded text-white">Demo</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Mockup