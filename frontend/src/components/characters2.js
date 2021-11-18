import './Characters.css'
import Character from './Character'

const Characters = (props)=>{

    const arrByName = props.characters && props.characters.characters.filter((character)=>{
        return character.name === props.characters.characters.name
    })

    const resultArr = props.characters && props.characters.characters
    if (arrByName.length > 0){
        resultArr = arrByName
    }

    const charArr = resultArr.map((character)=>{
        return(
            <Character character={character}/>
        )
    })
    return(
        <div className='characters'>
            {charArr}
        </div>
    )
}

export default Characters;