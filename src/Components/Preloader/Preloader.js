import React, { useState , useEffect } from 'react'
import "./Preloader.css"
export default function Preloader() {
  
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1000); 
      
          return () => clearTimeout(timer);
        }, []);
    
    return (
        <div className={`loader ${loading ? 'active' : 'hide'}`}>
            <div className='loader-inner'>
                <div className='circle'>

                </div>
            </div>
        </div>
    )
}
