import logoHeader from '../assets/LOGO-IMAR-SON/2.png'
import vid from '../assets/images/1.mp4'

const Header = () => {
  return (
    <header className='relative flex justify-center py-24 bg-center bg-cover'>
      <video src={vid} autoPlay loop muted className='w-full h-full absolute inset-0 -z-10 object-cover ' aria-hidden draggable={false}/>
      <div className='bg-black bg-opacity-50 absolute inset-0 z-10' aria-hidden="true"></div>
      <div class="max-w-4xl mx-auto px-4 py-32 z-20">
        <div class="flex flex-col items-center">
          <div className="w-[200px] h-[4px] bg-[#6484CD] mb-12"></div>
          <img src={logoHeader} className='w-[450px] drop-shadow-lg opacity-40' aria-hidden draggable={false}/>
        </div>
      </div>
    </header>

  );
};

export default Header;
