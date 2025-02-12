import { useRouter } from 'next/router';
import { useState } from 'react';

function JoinUs()
{
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleItemClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  return(
  <div className="flex flex-col items-center text-center">
    <section className="w-full flex flex-col items-center">
      <img
        src="joinus-banner.png"
        className="mb-24 w-full hidden"
      />
      <div className="w-[6000px] translate-x-[0px] self-end animate-[infinislide_16s_linear_infinite]">
        <img src="joinais-long.png"
          className="mb-24 w-[6000px] object-contain"
        />
      </div>
      <div className="mb-10 max-h-[20rem] h-[calc(3*90vw)] w-[calc(100%-2rem)]
        bg-[url('/joinus-steps.png')] bg-no-repeat bg-contain bg-center
      "/>
      <div className="relative w-[162px] h-[48px] bg-[#3E6EFF] rounded-[57px] mb-10 [cursor:pointer]"
        onClick={() => handleItemClick('/join')}
      >
        <div className="bg-[#3E6EFF] text-[white] relative w-[154px] h-[38px] top-[5px] left-[4px] rounded-[45px] border-[3px] border-solid border-[color:var(--variable-collection-bg-duplicate)] flex flex-col place-content-center">
          <div className="top-[3px] font-bold text-[16px] leading-none text-center">
            Learn More
          </div>
        </div>
      </div>
    </section>
    <section className="w-full hidden lg:block">
      <img
          src="joinus-bg.png"
          className="w-full"
        />
    </section>
    <section className="bg-ais-new-darker-blue h-36 w-full z-20 hidden lg:block">
      <img className="md:py-8 md:float-left md:translate-x-72 md:-translate-y-40 hidden md:block" src="/star1.png" alt="star1" width="230"/>
      <img className="md:py-8 md:float-left md:translate-x-72 md:translate-y-4 hidden md:block" src="/star3.png" alt="star3" width="160"/>
    </section>
    <section className="bg-ais-new-darker-blue w-full hidden lg:block">
      <div className="flex justify-start">
        <img
          src="stay_connected.png"
          className="mr-10 h-auto"
          alt="stay connected"
        />
        <div className="z-10 flex bg-ais-new-beige w-full rounded-l-xl">
          <img src="post1.PNG" onClick={() => {window.open('https://www.instagram.com/p/Cz9uuuZvYQp/?img_index=1', '_blank')}} className="ml-20 w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
          <img src="post3.PNG" onClick={() => {window.open('https://www.instagram.com/p/CzmUWVDuDmp/', '_blank')}} className="w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
          <img src="post4.PNG" onClick={() => {window.open('https://www.instagram.com/p/CzUnM2ULIKf/', '_blank')}} className="w-96 h-96 mx-10 my-auto rounded-2xl cursor-pointer"/>
        </div>
      </div>
      <img className="md:py-8 md:float-right md:-translate-x-32 md:-translate-y-32 hidden md:block" src="/star2.png" alt="star2" width="190"/>
      <img className="md:py-8 md:float-right md:-translate-x-16 md:-translate-y-32 hidden md:block" src="/star4.png" alt="star4" width="260"/> 
    </section>
  </div>
  )
}

export default JoinUs;