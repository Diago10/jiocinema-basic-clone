import channel1 from '../../assets/channel1.jpg'
import channel2 from '../../assets/channel2.png'
import channel3 from '../../assets/channel3.jpg'
import channel4 from '../../assets/channel4.jpg'
import channel5 from '../../assets/channel5.jpg'
import channel6 from '../../assets/channel6.jpg'
import channel7 from '../../assets/channel7.jpg'
const Channels = () => {
  return (
    <>
        <div className='w-100% h-30 md:h-50 lg:h-full flex bg-black p-[30px] gap-4 overflow-x-auto whitespace-nowrap scrollable'>

            <img src={channel1} className='rounded-2xl' alt="channel"  />
            <img src={channel2} className='rounded-2xl' alt="channel" />
            <img src={channel3} className='rounded-2xl' alt="channel" />
            <img src={channel4} className='rounded-2xl' alt="channel" />
            <img src={channel5} className='rounded-2xl' alt="channel" />
            <img src={channel6} className='rounded-2xl' alt="channel" />
            <img src={channel7} className='rounded-2xl' alt="channel" />

        </div>
    </>
  )
}

export default Channels