import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState('')

    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }


    return (
        <section className='search'>
            <h1 className='center message'>Look for your favorite character!!</h1>
            <form>
                <input type='text' className='form-control'
                 placeholder='Search characters'
                 value={text}
                 onChange={(e) => onChange(e.target.value)}
                 autoFocus/>
            </form>
        </section>
    )
}

export default Search
