import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs';
import TabsNav from './components/TabsNav';
import Button from './ui/Button';
import GradientBlur from './components/GradientBlur';
import MortgageRates from './ui/MortgageRates';
import LandingPageSection from './components/LandingPageSection';
import OppositeLandingPageSection from './components/OppositeLandingPageSection';


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='flex justify-center items-center p-20'>
        {/* Heading and Button */}
        <div className='xl:px-[500px]'>
          <h1 className='z-[999] flex justify-center py-2 font-bold mt-5 tracking-[-0.03em] md:leading-[1.10] md:text-[55px] bg-clip-text text-center text-4xl text-mint11'>
            Home for all of your
            real <br /> estate needs.
          </h1>
          <h2 className='flex justify-center items-center text-slate10 mt-10 md:text-xl font-light mx-10 text-center'>
            Experience Real Estate at its Best – Welcome to ThenEstate.
          </h2>
          <div className='flex flex-col justify-center md:flex-row gap-3 mt-5 md:mt-10 mx-20 md:mx-0'>
            <Button
              text={`Get started`}
              bgColor='bg-sky12'
            />
            <Button
              text={`Pricing`}
              bgColor='bg-mint11'
            />
          </div>
          <div className='flex isolate justify-center mt-10'>
            <GradientBlur />
          </div>
        </div>
      </div>
      {/* Dashboard Image */}
      <div className='flex justify-center'>
        <div className='bg-slate4 rounded flex justify-center items-center absolute top-[500px] md:top-[600px] border border-sky12 w-[400px] h-[300px] md:w-[800px] md:h-[500px]'>
          Dashboard Image
        </div>
      </div>
      {/* Mortgage rates */}
      <div className="mt-[100px] md:mt-[300px] mb-[100px]">
        <h1 id="mtg-heading" className="flex items-center gap-2 font-semibold px-3">
          <span className='capitalize text-slate10'>Average mortgage rates</span>
          {/* Arrow trending up svg */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 text-mint11">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </h1>
        <MortgageRates />
      </div>
      {/* Features */}
      <div className='flex flex-col gap-[250px]'>
        <LandingPageSection
          title={`property search`}
          description={`Looking for your dream property has never been easier. Explore an extensive database of homes,

                        apartments, and real estate listings, tailored to your preferences. Whether you're searching

                        for a cozy family home, a trendy city apartment, or an investment opportunity, our Property Search Feature

                        is your one-stop solution.`}
        />
        <OppositeLandingPageSection
          title={`investment analysis`}
          description={`Investing wisely requires data-driven decisions, and that's exactly what our

                        Investment Analysis Feature delivers. Whether you're a seasoned investor or just

                        starting your journey, our powerful tools and insights will empower you to make informed

                        choices that drive success.`}

        />
        <LandingPageSection
          title={`personal portfolio`}
          description={`We put the power of your investments in your hands. 

                        Our user-friendly platform allows you to access, manage, and monitor all your real estate holdings from one 

                        centralized location.`}
        />
        <OppositeLandingPageSection
          title={`mortgage & finance tools`}
          description={`Investing wisely requires data-driven decisions, and that's exactly what our

                        Investment Analysis Feature delivers. Whether you're a seasoned investor or just

                        starting your journey, our powerful tools and insights will empower you to make informed

                        choices that drive success.`}

        />
      </div>
    </main>
  )
}
