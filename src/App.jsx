import './index.css';
import mobile from "./images/image-hero-mobile.png"
import desktop from "./images/image-hero-desktop.png"


function App() {
  return (
    
<>
<section className="grid grid-cols-1 gap-10 md:grid-cols-2 md:place-items-center max-w-5xl lg:max-w-4xl md:mx-auto">
  <article>
    <h1 className="font-bold text-4xl lg:text-6xl mb-5">Make remote work</h1>
    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
    <button className="bg-black shadow text-white rounded-lg font-bold hover:opacity-75 transition-all duration-150 pt-2 pb-2 px-6 cursor-pointer">Learn more</button>
  </article>

  <article>
    <picture>
      <source media="(min-width:768px)" srcSet={desktop}/>
      <img src={mobile} alt="main image" />
    </picture>
  </article>
</section>
</>
  );
}

export default App
