import { useRef } from "react";

const SearchCharacter = (props) => {

    const input = useRef()

    const handleClick = (event)=>{
        event.preventDefault()
        props.handleSubmit(input.current.value)
        input.current.value = ''
    }
    
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Character"
          ref={input}
        />
        <button type="submit" onClick={handleClick}>Search</button>
      </form>
    </div>
  );
};

export default SearchCharacter;
