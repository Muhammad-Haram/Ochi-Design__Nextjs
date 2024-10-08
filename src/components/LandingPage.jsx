import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">

            <div className="textStructure mt-28 px-16">
                {["We create", "eye-opening", "presentations"].map((item, index) => {
                    return <div key={index} className="masker">

                        <div className='w-fit gap-3 flex items-end overflow-hidden'>

                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: "130px" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='w-[130px] h-[83px] rounded-md overflow-hidden'>
                                    <Image
                                        src="/img/text-image.jpg"
                                        className='w-[100%] h-[100%]'
                                        width={100}
                                        height={100}
                                        alt="Picture"
                                    />
                                </motion.div>
                            )}

                            <h1 className="uppercase text-9xl pt-[2vw] leading-[100px] font-founder font-semibold">
                                {item}
                            </h1>
                        </div>

                    </div>
                })}
            </div>

            <div className="border-t-[1px] border-zinc-700 mt-14 flex items-center justify-between py-5 px-16">
                {["For public and private companies", "From the first pitch to IPO"].map((e, index) => (
                    <p key={index} className='text-md font-light font-montreal leading-none'>{e}</p>
                ))}

                <div className='startBtn flex items-center gap-2'>
                    <div className='uppercase font-montreal rounded-full px-4 py-1 border-[1px] border-zinc-500'>Start the project</div>
                    <div className='rounded-full w-9 h-9 flex items-center justify-center border-[1px] border-zinc-500'><GoArrowUpRight />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage
