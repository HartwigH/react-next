import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'
import Link from 'next/link'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/')
        })
    }

    return (
        <div className="container">
            <div className="jumbotron">
            <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1 className="display-4">{ movie.name } </h1>
                    <p className="lead">{ movie.description}</p>
                </div>
                <div className="col-sm">
                    <img className="card-img-top" src={movie.image} alt="" />
                </div>
            </div>
            </div>
                
                <hr className="my-4" />
                <p>{ movie.genre }</p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
                <button onClick={() => handleDeleteMovie (id)} className="btn btn-danger btn-lg mr-1" href="#" role="button">Delete</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button className="btn btn-warning btn-lg" href="#" role="button">Edit</button>
                </Link>
            </div>
            <img className="card-img-top" src={movie.cover} alt="" />
            <p className="desc-text">
                { movie.longDesc}
            </p>
        </div>
    )
}

// Call getMoviesById("2")
Movie.getInitialProps = async (context) => {
    const id = context.query.id
    const movie = await getMovieById(id)

    return { movie }
}

export default Movie