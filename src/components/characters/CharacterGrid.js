import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'



const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
    <Spinner />
    ) : (
     <section  id="cards-id" className="cards"  data-testid="item-data">
        {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>)
}

export default CharacterGrid
