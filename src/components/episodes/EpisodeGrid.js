import React from 'react'
import Spinner from '../ui/Spinner'
import EpisodeItem from './EpisodeItem'


const EpisodeGrid = ({episodes,isLoading}) => {
    return isLoading ? (
        <Spinner />
        ) : (
         <section 
            className="cards-episodes"
            id="cards-episodes"
            data-testid="episode-data"
         >
            {episodes.map((episode) => (
                <EpisodeItem key={episode.episode_id} episode={episode}></EpisodeItem>
            ))}
        </section>)
}

export default EpisodeGrid
