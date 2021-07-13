import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EpisodeGrid from '../episodes/EpisodeGrid';



const Episodes = () => {

    const [episodes, setEpisode] = useState([])
    const [isLoading, setIsLoading] = useState(true)
 
  
    useEffect(() =>{
      const fetchItems = async () =>{
        const result = await axios(`https://www.breakingbadapi.com/api/episodes`)
  
        // console.log(result.data)
        setEpisode(result.data)
        setIsLoading(false)
      }
  
      fetchItems()
      
    }, [])

    return(
        <EpisodeGrid isLoading={isLoading} episodes={episodes} />
    )
  
}

export default Episodes
