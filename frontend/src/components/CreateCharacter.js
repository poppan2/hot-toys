import { useState } from "react";


const CreateCharacter = ()=>{

    const [char, setChar] = useState({
        name: '', 
        movie: '',
        series: ''
    })

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setChar({ ...char, [name]: value });
        //   const copy = Object.assign({}, vinyl);
        //   copy[name] = value;
        //   setVinyl(copy);
        console.log(char);
      };

    return(
        <div>
            <form>
            <input type='text' placeholder='Character Name' name='name' onChange={handleChange} value={char.name}/>
            <input type='text' placeholder='Movie' name='movie' onChange={handleChange} value={char.name} />
            <input type='text' placeholder='Series' name='series' onChange={handleChange} value={char.name} />
            <button type='submit'>Add Character</button>
            </form>
        </div>
    )
}

export default CreateCharacter;