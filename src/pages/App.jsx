import Me from '../images/app/me.webp';
import ShinyText from '../components/ShinyText';
import RotatingText from '../components/RotatingText';
import Comments from '../components/Comments';
import { commentsData } from '../hooks/Comments';
import { images } from '../hooks/image';
import { getRandomAnimationStyle } from '../helpers/randomUtils';

function App() {
  const fullComments = [...commentsData, ...commentsData];

  return (
    <>
      <main className="w-full h-svh flex flex-col items-center justify-center overflow-hidden relative">
        {/* banner container */}
        <section className='w-full h-1/2 custom-gradient'>
          <article className='w-full h-full flex flex-col-reverse items-center justify-center md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row'>
            {/* first box banner container */}
            <div className='w-full h-1/2 relative flex items-center justify-center md:w-1/2 md:h-full lg:w-1/2 lg:h-full xl:w-1/2 xl:h-full 2xl:w-1/2 2xl:h-full'>
              <img className='absolute bottom-0 w-60 h-auto z-10 md:w-auto lg:w-auto xl:w-auto 2xl:w-auto' src={Me} alt="me banner" />
            </div>
            {/* second box banner container */}
            <div className='w-full h-1/2 flex flex-col gap-4 items-center justify-end overflow-hidden md:w-1/2 md:h-full md:justify-center md:relative md:gap-8 lg:w-1/2 lg:h-full lg:justify-center lg:relative lg:gap-8 xl:w-1/2 xl:h-full xl:justify-center xl:relative xl:gap-8 2xl:w-1/2 2xl:h-full 2xl:justify-center 2xl:relative 2xl:gap-8'>
              <div className='w-full h-auto flex gap-3 items-center justify-center'>
                {/* icons container */}
                {Object.entries(images).map(([key, src], index) => (
                  <img
                    key={index}
                    src={src}
                    alt={key}
                    className='w-8 h-8 object-contain pointer-events-none'
                    style={getRandomAnimationStyle()}
                  />
                ))}
                <h1 className='text-4xl text-white z-1'>JadeDev</h1>
                <RotatingText
                  texts={['FullStack', 'Web', 'Development', '👻']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#e63946] text-white text-center overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0 sm:pb-0 md:pb-0"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              <div className='w-full h-auto flex items-center justify-center gap-4'>
                <ShinyText text="Developer" disabled={false} speed={2} className='custom-class z-1' />
                <ShinyText text="Designer" disabled={false} speed={2} className='custom-class z-1' />
              </div>
            </div>
          </article>
        </section>

        {/* comments container */}
        <section className="w-full h-1/2 flex items-center justify-center bg-white relative">
          <article className="slider w-full h-full flex flex-col items-center justify-center text-center">
            {/* carousel 1 - left slow */}
            <h1 className='text-2xl my-4 font-bold xl:text-3xl xl:my-7'>Testimonials</h1>
            <div className="items-center justify-center relative overflow-hidden w-full h-1/2">
              <div className="slider-track animate-scroll-left-slow">
                {fullComments.map((comment, index) => (
                  <div key={`top-${index}`} className="slide w-auto xl:w-2/5 2xl:w-1/4">
                    <Comments {...comment} />
                  </div>
                ))}
              </div>
            </div>

            {/* carousel 2 - right fast */}
            <div className="items-center justify-center relative overflow-hidden w-full h-1/2">
              <div className="slider-track animate-scroll-right-fast">
                {fullComments.map((comment, index) => (
                  <div key={`bottom-${index}`} className="slide w-auto xl:w-2/5 2xl:max-w-1/4">
                    <Comments {...comment} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default App