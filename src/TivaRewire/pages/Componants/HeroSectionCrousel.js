import { Carousel } from "flowbite-react";
import hero1 from "../../Assets/HeroSection/tiva_rewire_hero1.jpg";
import hero2 from "../../Assets/HeroSection/tiva_rewire_hero2.jpg";

export function Crousel() {
  return (
    <div className="relative h-56 sm:h-64 lg:h-[90vh] w-full">
      <Carousel slideInterval={4000}>
        <img src={hero1} alt="..." />
        <img src={hero2} alt="..." />
      </Carousel>
    </div>
  );
}
