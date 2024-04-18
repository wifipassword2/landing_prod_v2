import Image from '@/node_modules/next/image';
import logo from '/public/favicon.ico'
import email from '/public/email.svg'
import phone from '/public/phone.svg'
import telegram from '/public/telegram.svg'
import whatsapp from '/public/whatsapp.svg'
import messenger from '/public/messenger2.svg'



export default function Home() {
  return (
    <main className=''>
      <div className='absolute overflow-auto inset-0 h-[100lvh] bg-gradient-to-tl via-15% lg:via-10% to 90% from-[#FF6347]  via-[#1C1C1E] to-[#404044]'>
        <nav className='flex text-[#FFFFFF] text-base h-12 font-pf-duza '>
        <Image className='w-[1.2rem] h-[1.2rem] mx-[2rem] my-[1rem]' src={logo} alt='company logo'/>
        <h1 className=' p-1.5 overflow-hidden'>
        <p className='text-[#FFFFFF] text-xs font-pf-logo2 max-w-[100%] '>The Computer Repair and Tech Support <span className='sr-only'>drop-off in Toronto, York or on-site anywhere in GTA</span></p><p className='text-[#FF6347] custom drop-shadow-2xl shadow-black'> Service №8</p></h1>
        </nav>
      <div className='h-px w-[95%] bg-[#5A5A5E] mx-auto '></div>
      {/* about us card */}
      <div  className="min-h-screen  p-2 font-pf-duza relative z-10 text-[#989899] text-shadow-lg text-[18px] lg:grid lg:grid-cols-3 gap-4  lg:grid-flow-col lg:flex-shrink">
        <div className='bg-[#1E1E1F] bg-opacity-100 rounded-sm p-[20px] pt-[28px] shadow-xl m-4 min-w-[250px] max-w-[340px] mx-auto h-fit lg:row-span lg:order-2'>
          <h2 className='sr-only'>About Us</h2>
          <p className='mb-4'>I specialize in <span className='text-[#FFFFFF]'>solving common computer and laptop problems</span>. With years of hands-on experience, I can offer quick and efficient solutions, whether it's <span className='text-[#FFFFFF]'>software or hardware</span> issues.</p> 
        <p className='mb-4'>You can <span className='text-[#FFFFFF]'>drop off</span> your computer at my location, and I'll have it fixed for you to pick up later. Additionally, I provide <span className='text-[#FFFFFF]'>on-site repairs</span> at your home or office (GTA area).</p>
        <p className='mb-3'>Two month warranty included with all repairs.</p>

        <p>No-fix no-charge policy.</p>
        
        </div>

        {/* services card */}
        <div className='bg-[#1E1E1F] bg-opacity-100 rounded-sm p-[20px] pt-[28px] pb-1 shadow-xl mt-[4rem] lg:mt-4 m-4 min-w-[250px] max-w-[380px] mx-auto h-fit lg:row-span-2  lg:order-3'><ul className='list-disc  justify-center mb-4 ml-5 '><h2 className='text-[#FFFFFF] text-2xl m-[2rem] mt-1 ml-0 text-center '> List of services & problems i can solve:</h2>
        <li>Diagnostics, cleaning, maintenance</li>
        <li>Tech support (mostly windows systems)</li>
        <li>Operating system installation</li>
        <li>Malware/viruses removal</li>
        <li>Hard drive data transfer/recovery/hard formatting/backups</li>
        <li>Building/upgrading computer</li>
        <li>Modular repair of laptops(swapping screen, motherboard, battery etc.)</li>
        <li>Basic soldering(like swapping switches on your mice or keyboard)</li>
        <li className='mt-6'>Device not turning on/blank screen/ reboot cycle</li>
        <li>Overheating</li>
        <li>Sudden shut down</li>
        <li>Weird noises/rattling</li>
        <li>System slowed down/became laggy</li>
        <li>Most software problems</li>
        <li className='list-noned'>And probably some more…</li>

        <li className='mt-6 list-none	'>Please note: While my skills may cover a range of technical services, my expertise in networking is more limited.</li>
        </ul>

        
        </div>
        {/* pricing card */}
        <div className='bg-[#1E1E1F] bg-opacity-100 rounded-sm p-[20px] pt-[28px] pb-6 shadow-xl mt-[4rem] lg:mt-4 m-4 min-w-[250px] max-w-[340px] mx-auto h-fit lg:order-4'><h2 className='text-[#FFFFFF] text-2xl m-[2rem] mb-[1rem] mt-1 text-center '>Pricing:</h2>
        <p className='ml-3'>First hour: <span className='line-through text-red-500'>$90</span><span className='text-[#caced2]'>  $45</span><span className='text-sm'> (launch sale)</span></p>
        <p className='mt-4 ml-3'>Each subsequent hour: <span className='text-[#caced2]'>$50</span></p>
        {/* <p className='mt-4 ml-3'>The rate won't go below $30/h for additional hours. </p> */}
        {/* <p className='mt-4 ml-3'>This billing strategy encourages me to work honesty, quickly and effectively.</p> */}
        <p className='mt-4 ml-3'> plus there is a <span className='text-[#caced2]'>$40</span> flat fee for any on-site repairs (to cover travel time, fuel etc.)</p>
          <ul className='mt-6 ml-6'>Possible payment methods: <li className='ml-6 list-disc'>cash</li> 
          <li className='ml-6 list-disc'>e-transfer</li>
          <li className='ml-6 list-disc'>personal cheque</li>
          </ul>
          
        </div>

        {/* contacts card */}
        <div className='mt-[4rem] lg:mt-[-4rem] bg-[#1E1E1F] bg-opacity-100 rounded-sm p-[20px] pt-[28px] pb-6 shadow-xl  m-4 min-w-[250px] max-w-[320px] mx-auto h-fit lg:order-5'><h2 className='text-[#FFFFFF] text-2xl m-[2rem] mb-[1rem] mt-1 text-center ml-0 '>My contacts:</h2>
        <address className=' '>
          <span className='flex '><a href='mailto:help@service8.ca' className=' text-[#237CC9] font-sans underline text-lg hover:no-underline flex'><Image src={email} className='align-middle w-[1.5rem] h-[1.5rem] m-1.5 mr-4' alt="email icon" />support@service8.ca</a><span className='text-xl black'></span> 
          <button></button>
        </span>
        
        <span className='flex '>
        
          <a href={`tel:${12894005289}`} className='text-[#caced2] text-lg flex'><Image src={phone} className='align-middle w-[1.5rem] h-[1.5rem] m-1.5 mr-3' alt="phone icon" />+1 (289) 400-5289
          </a>
        </span>
  
        <div className='flex justify-center '>{/* Socials */}
          <a target="_blank" href='https://t.me/ComputerRepairsAndTechSupport/' ><Image className='m-3 w-[2.5rem] h-[2.5rem]' src={telegram} alt="Telegram logo" /></a>
          <a target="_blank" href='https://www.wa.me/+12894005289/'><Image className='m-3 w-[2.5rem] h-[2.5rem]' src={whatsapp} alt="Whatsapp logo" /></a>
          <a target="_blank" href='https://m.me/whitesandpaper/'><Image className='m-3 w-[2.5rem] h-[2.5rem]' src={messenger} alt="Facebook Messenger logo" /></a>
        </div>
        </address>
        <div className='mt-4 font-sans text-sm tracking-tighter ml-3'>Sun - Fri: 11am - 8pm</div>
        </div>


        {/* location card */}
        <div className='bg-[#1E1E1F] bg-opacity-100 rounded-sm p-[20px] pt-[28px] pb-6 shadow-xl mt-[4rem] mb-1 m-4 min-w-[250px] max-w-[380px] mx-auto h-fit lg:order-2 lg:-mt-[1rem]'><h2 className='text-[#FFFFFF] text-2xl m-[2rem] mt-0 mb-6 text-center'>Location:</h2>
        <iframe width="100%" height='300' src="https://www.openstreetmap.org/export/embed.html?bbox=-79.64504241943361%2C43.62191038020048%2C-79.26395416259767%2C43.767374953697235&amp;layer=mapnik&amp;marker=43.69468677385367%2C-79.45449829101562" className='border-black border-2 border-solid '></iframe><br/><small></small>
        <p className='mb-4'>2000 Eglinton Ave W, ON M6E 2J9</p>
        <p className='text-xs mt-[-1rem]'>(back entrance)</p>
        <p className="text-[#237CC9] font-sans underline hover:no-underline mt-1">
        <a target="_blank" href="https://maps.app.goo.gl/MueQFqBF82TwtYFG6">google maps<span className='font-black '> ➢</span></a>
        </p>
        </div>
        

      </div>
      
      </div>
    </main>
  )
}
