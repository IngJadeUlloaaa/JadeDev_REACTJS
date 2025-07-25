import ScrollFloat from '../components/ScrollFloat.jsx';
import BlurText from "../components/BlurText.jsx";
import DotGrid from "../components/DotGrid.jsx";
import AMPMMockup from "../images/designer/ampm-mockup.webp";
import Mockup from '../components/Mockup.jsx';
import VEMockup from "../images/designer/virtualenvironment-mockup.webp";
import ALMIRMockup from "../images/designer/almir-mockup.webp";
import JimboAppMockup from "../images/designer/jimboApp-mockup.webp";

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

                <section className="relative w-full h-auto overflow-hidden">
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
                        <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl my-12 font-extrabold">Designer Section</h2>
                        <article className='w-full h-full flex flex-wrap items-center justify-center gap-8'>
                            {/* ampm */}
                            <Mockup
                                imgSrc={AMPMMockup}
                                title="AMPM Desktop System Design"
                                description="This design aims to improve the current systems for the warehouse storage area."
                                refSee={"https://www.figma.com/design/J7lS6MAzZ8y4XPihk0HYvf/Untitled?node-id=0-1&t=978ewaJoxmYa4Ikb-1"}
                                refDemo={"https://www.figma.com/proto/J7lS6MAzZ8y4XPihk0HYvf/Untitled?node-id=22-2&p=f&t=978ewaJoxmYa4Ikb-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"}
                            />
                            {/* udem */}
                            <Mockup
                                imgSrc={VEMockup}
                                title="Virtual Environment Design"
                                description="Reengineering of UdeM's Virtual Environment and
                                 Mobile Application."
                                refSee={"https://www.figma.com/design/n7ds70Gz3lvFGDqMgCuvax/Untitled?node-id=0-1&t=2OpHLJPabVgduvmz-1"}
                                refDemo={"https://www.figma.com/proto/n7ds70Gz3lvFGDqMgCuvax/Untitled?node-id=5-2&p=f&t=xKdEchmUIrJ44hKr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2&show-proto-sidebar=1"}
                            />
                            {/* almir */}
                            <Mockup
                                imgSrc={ALMIRMockup}
                                title="Almir Web System Design"
                                description="CRM Web Design for Inventory Control with Database Included."
                                refSee={"https://www.figma.com/design/am4dw9nXIp8W8chw3ZJ05x/Untitled?node-id=0-1&t=OYUlg2W8YHPTFUkt-1"}
                                refDemo={"https://www.figma.com/proto/am4dw9nXIp8W8chw3ZJ05x/Untitled?node-id=164-3&p=f&t=0tBZ46RmFCygSIaF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=164%3A3&show-proto-sidebar=1"}
                            />
                            {/* 4 */}
                            <Mockup
                                imgSrc={JimboAppMockup}
                                title="JimboApp Desktop Design"
                                description="Desktop Application to Improve and Practice Early Childhood Learning."
                                refSee={"https://www.figma.com/design/MmFEeF9kJ9L26qHKlT0aGQ/Untitled?node-id=0-1&t=xKP922ONEDLY2qsS-1"}
                                refDemo={"https://www.figma.com/proto/MmFEeF9kJ9L26qHKlT0aGQ/Untitled?node-id=3-2&p=f&t=g7Cn8rjiwcIzCJyx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2"}
                            />
                        </article>
                    </div>
                </section>
            </main >
        </>
    )
}

export default Designer