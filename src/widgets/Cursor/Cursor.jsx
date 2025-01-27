import React,{useEffect,useRef} from 'react'
import './Cursor.css'

const Cursor = ({count=15}) => {
  // const followerRef = useRef([null,null,null,null,null,null,null,null,]);
  const followerRefs = useRef(Array.from({ length: count }, () => React.createRef()));


  useEffect(() => {
    // const follower = followerRef.current;
    const followers = followerRefs.current.map(ref => ref.current);

    const handleMouseMove = (e) => {
      
      requestAnimationFrame(() => {
        followerRefs.current.forEach((ref) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const offsetX = rect.width / 2;
            const offsetY = rect.height / 2;
            ref.current.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
          }
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <div className='cursor_trail_holder'>
      {followerRefs.current.map((ref, index) => (
        <div
        className={`cursor_circles ${index === count-1 ? 'cursor_with_border' : ''}`}
          key={index}
          ref={ref}
          style={{
            width: `${14*(index/8)}px`,
            height: `${14*(index/8)}px`,
            transition: `transform ${0.1+(0.1*(count-index))}s cubic-bezier(0.075, 0.82, 0.165, 1)`, // Optional: add transition for smooth movement
          }}
        />
      ))}
     </div>
  )
}

export default Cursor