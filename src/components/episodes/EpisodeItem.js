import React from 'react'

const EpisodeItem = ({episode}) => {
    return (
        
            <div className='episodes-container'>
                <div className='episode-title'>
                    <h2>{episode.title}</h2>
                </div>
                <div className='episode-rightBox'>
                    <ul>
                        <li>
                            <strong>Episode:</strong> {episode.episode}
                        </li>
                        <li>
                            <strong>Series:</strong> {episode.series}
                        </li>
                        <li>
                            <strong>Air Date:</strong> {episode.air_date}
                        </li>
                        <li>
                            <strong>Season:</strong> {episode.season}
                        </li>
                    </ul>
                </div>
          </div>
       
    )
}

export default EpisodeItem
 