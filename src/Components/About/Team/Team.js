import React from 'react'
import { team } from '../../../DataProducts/Data'
import "./Team.css"
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Team() {
    useEffect(() => {
        new WOW.WOW({
          live: false 
        }).init();
      },[])
    let teamMap = team
    return (
        <div className='Team'>
            <div className='container'>
                <div className='Title-Product'>
                    <h3><span>Our </span>Team</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br /> itaque eveniet beatae optio.</p>
                </div>
                <div className='flex-team'>
                    {
                        teamMap.map((team) => {
                            return (
                                <div key={team.id} className='team-div wow animate__animated animate__fadeInDown'>
                                    <div style={{ backgroundImage: `url(${team.src})` }} className='team-bg'>

                                        <ul>
                                            <li className='icon-facebook'></li>
                                            <li className='icon-twitter'></li>
                                            <li className='icon-instagram'></li>
                                        </ul>

                                    </div>
                                    <h4>
                                        {team.name} <br />
                                        <span>{team.job}</span>
                                    </h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
