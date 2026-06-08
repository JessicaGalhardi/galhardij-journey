import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const layers = document.querySelectorAll<HTMLElement>(".layer");
          const ultimaSecao = document.querySelector<HTMLElement>(".ultima-secao");
  
        const limiteScroll = ultimaSecao ? ultimaSecao.offsetTop : Infinity;
 
        const scrollAtual = Math.min(window.scrollY, limiteScroll);

          layers.forEach((layer) => { 
            const depth = Number(layer.dataset.depth || 0); 

            const move = scrollAtual * depth; 
            
            layer.style.transform = `translate3d(0, ${move}px, 0)`; });
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}