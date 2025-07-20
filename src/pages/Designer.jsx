import ScrollFloat from '../components/ScrollFloat.jsx';
import BlurText from "../components/BlurText.jsx";
import DotGrid from "../components/DotGrid.jsx";
import AMPMMockup from "../images/designer/ampm-mockup.webp";
import Mockup from '../components/Mockup.jsx';

function Designer() {

    return (
        <>
            <main className="w-full h-full flex flex-col bg-black">
                <section className='w-full h-min-[200vh] flex flex-col items-center justify-center'>
                    <div className="w-full h-[100vh] flex items-center justify-center">
                        <h1 className=""></h1>
                        <BlurText
                            text="Scroll hacia abajo ↓"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="mb-8 text-xl text-gray-300 lg:text-4xl xl:text-4xl 2xl:text-4xl"
                        />
                    </div>

                    <div className="w-full h-[100vh] flex items-center justify-center">
                        <ScrollFloat
                            animationDuration={1}
                            ease="back.inOut(2)"
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                        >
                            Designer ui/ux
                        </ScrollFloat>
                    </div>

                    <div className="w-full h-[100vh] flex items-center justify-center">
                    </div>
                </section>

                <section className="relative w-full h-screen overflow-hidden">
                    <div className="absolute inset-0 z-10">
                        <DotGrid
                            dotSize={10}
                            gap={15}
                            baseColor="#271E37"
                            activeColor="#5227FF"
                            proximity={120}
                            shockRadius={250}
                            shockStrength={5}
                            resistance={750}
                            returnDuration={1.5}
                        />
                    </div>

                    {/* Contenido encima */}
                    <div className="w-full h-auto flex flex-col items-center justify-center relative z-10 px-8 py-12 text-white">
                        <h2 className="text-8xl my-12 font-extrabold">Designer Section</h2>
                        <article className='w-full h-full flex flex-wrap items-center justify-center gap-8'>
                            {/* 1 */}
                            <Mockup
                                imgSrc={AMPMMockup}
                                title="AMPM System Design"
                                description="This design aims to improve the current systems for the warehouse storage area."
                            />
                            {/* 2 */}
                            <Mockup
                                imgSrc={AMPMMockup}
                                title="AMPM System Design"
                                description="This design aims to improve the current systems for the warehouse storage area."
                            />
                            {/* 3 */}
                            <Mockup
                                imgSrc={AMPMMockup}
                                title="AMPM System Design"
                                description="This design aims to improve the current systems for the warehouse storage area."
                            />
                            {/* 4 */}
                            <Mockup
                                imgSrc={AMPMMockup}
                                title="AMPM System Design"
                                description="This design aims to improve the current systems for the warehouse storage area."
                            />
                        </article>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Designer