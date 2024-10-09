import TextContainer from './text-container';

export default function HeroLayer({ mixBlend }) {
  return (
    <div
      className={`absolute top-0 left-0 flex flex-col justify-between w-full h-screen pt-[10vh] md:pt-24 pb-4 px-[3vw] uppercase ${
        mixBlend && 'mix-blend-difference'
      }`}
    >
      <div className='flex justify-start'>
        <TextContainer
          bigText='arcane'
          smallText={
            <span className='flex items-center gap-2'>
              league <span className='text-xs'>of</span> legends
            </span>
          }
        />
      </div>

      <div className='flex justify-end'>
        <TextContainer
          bigText='season 2'
          smallText='coming november'
          smallTextEnd
        />
      </div>
    </div>
  );
}
