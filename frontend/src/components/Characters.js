import './Characters.css'
import Character from './Character'

const Characters = (props)=>{

    const charArr = props.characters && props.characters.characters.map((character)=>{
        return (
            <ul>
                <li><span>Name: </span>{character.name}</li>
                <li><span>Movie: </span>{character.movie}</li>
                <li><span>Series: </span>{character.series}</li>
            </ul>
        )
    })
    return(
        <div className='characters'>
            {charArr}
        </div>
    )
}

export default Characters;