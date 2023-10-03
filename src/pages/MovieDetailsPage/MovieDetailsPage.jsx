import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const {idMovie} = useParams();
console.log(idMovie);
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails