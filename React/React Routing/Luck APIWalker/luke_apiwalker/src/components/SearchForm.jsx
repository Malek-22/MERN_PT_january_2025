import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchForm() {
    const [resource, setResource] = useState('people')
    const [id, setId] = useState('1')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${resource}/${id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={resource} onChange={(e) => setResource(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
            </select>

            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                min="1"
            />

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm
