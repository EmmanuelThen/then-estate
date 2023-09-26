import React from 'react'

type Props = {}

const MortgageRates = (props: Props) => {
    return (
        <div id="mtg-container">
            <div id="mtg-wrapper" className='transition duration-150 ease-in-out inline-block py-3'>
                <span id="rates"></span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    30-year fixed: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    20-year fixed: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    15-year fixed: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    10-year fixed: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    Refinance: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    7-year ARM: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    5-year ARM: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    3-year ARM: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    VA: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    FHA: <strong className="text-primary">x.xx%</strong>
                </span>
                <span className="text-xs md:text-sm inline-block border border-mint11 rounded-full py-2 px-3 mr-5 md:mr-20 shadow-blackA9 shadow-[0px_4px_7px] transition duration-150 hover:opacity-80 ease-in-out hover:cursor-pointer">
                    Jumbo: <strong className="text-primary">x.xx%</strong>
                </span>
            </div>
        </div>
    )
}

export default MortgageRates