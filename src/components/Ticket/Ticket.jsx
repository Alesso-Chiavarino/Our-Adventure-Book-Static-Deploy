import './Ticket.scss';
import { useRef } from 'react';

const Ticket = () => {
    const wrapper = useRef(null);
    const ticket = useRef(null);
    const { width, height } = wrapper.current
      ? wrapper.current.getBoundingClientRect()
      : { width: 0, height: 0 };
  
    const halfWidth = width / 2;
    const halfHeight = height / 2;
  
    return (
      <div className="flex justify-center my-10">
        <div
          className="wrapper"
          ref={wrapper}
          onMouseMove={(e) => {
            const { offsetX } = e.nativeEvent;
            const { offsetY } = e.nativeEvent;
  
            const rotationX = ((offsetY - halfHeight) / halfHeight) * -10;
  
            const rotationY = ((offsetX - halfWidth) / halfWidth) * 10;
  
            const depth = ((offsetY - halfHeight) / halfHeight) * 10;
  
            ticket.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${depth}px)`;
            // ticket.current.style.transition = `none`;
          }}
          onMouseLeave={() => {
            ticket.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
            // ticket.current.style.transition = `all 0.5s ease`;
          }}
          onTouchMove={
            window.innerWidth <= 767
              ? (e) => {
                  const { clientX } = e.touches[0];
                  const { clientY } = e.touches[0];
  
                  const rotationX = ((clientY - halfHeight) / halfHeight) * -10;
                  const rotationY = ((clientX - halfWidth) / halfWidth) * 10;
                  const depth = ((clientY - halfHeight) / halfHeight) * 10;
  
                  ticket.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${depth}px)`;
                }
              : null
          }
          onTouchEnd={() => {
            ticket.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
          }}
        >
          <div className="ticket" ref={ticket}>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Ticket;


//   podrias hacer que cuando mantenga presionado en mobil solo se mueva el ticket y no el scroll
