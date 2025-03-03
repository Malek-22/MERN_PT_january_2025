import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm'
import ErrorMessage from '../components/ErrorMessage'

function PlanetPage() {
    const { id } = useParams()
    const [planet, setPlanet] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then((res) => {
                if (!res.ok) throw new Error()
                return res.json()
            })
            .then(setPlanet)
            .catch(() => setError(true))
    }, [id])

    if (error) return <ErrorMessage />

    return (
        <div>
            <SearchForm />
            {planet && (
                <div>
                    <h2>{planet.name}</h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Gravity: {planet.gravity}</p>
                </div>
            )}
        </div>
    )
}

export default PlanetPage
