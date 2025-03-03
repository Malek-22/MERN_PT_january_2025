import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function PeoplePage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState(null)
    const [homeworld, setHomeworld] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchCharacter() {
            setError(false)

            try {
                const response = await fetch(`https://swapi.dev/api/people/${id}/`)

                if (!response.ok) {
                    setError(true)
                    setCharacter(null)
                    return
                }

                const data = await response.json()
                setCharacter(data)

                // Fetch homeworld separately
                if (data.homeworld) {
                    const homeworldResponse = await fetch(data.homeworld)
                    const homeworldData = await homeworldResponse.json()
                    setHomeworld({ name: homeworldData.name, id: extractIdFromUrl(data.homeworld) })
                }
            } catch (err) {
                setError(true)
                setCharacter(null)
            }
        }

        fetchCharacter()
    }, [id])

    function extractIdFromUrl(url) {
        const parts = url.split('/')
        return parts[parts.length - 2]
    }

    if (error) {
        return (
            <div>
                <p>These aren't the droids you're looking for.</p>
                <img
                    src="https://i.imgur.com/8QZ4F5u.jpeg"
                    alt="Obi-Wan Kenobi"
                    style={{ width: '300px', height: '300px' }}
                />
            </div>
        )
    }

    if (!character) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height} cm</p>
            <p>Mass: {character.mass} kg</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>

            {homeworld && (
                <p>
                    Homeworld: 
                    <button onClick={() => navigate(`/planets/${homeworld.id}`)}>
                        {homeworld.name}
                    </button>
                </p>
            )}
        </div>
    )
}

export default PeoplePage
