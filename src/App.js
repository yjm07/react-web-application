import PropTypes from 'prop-types';

const movieList = [
    {
        id: 1,
        name: 'Homes',
        type: 'comedy',
        rating: 8.9
    },
    {
        id: 2,
        name: 'Avengers',
        type: 'action',
        rating: 9.4
    }, 
    {
        id: 3,
        name: 'Avatar',
        type: 'SF',
        rating: 9.6 
    },
    {
        id: 4,
        name: '',
        type: '',
        rating: 0.0
    }
];

function Movie({name, type, rating}) {
    console.log(name, type);
    return (
        <div>
            <h3>I love {name}</h3>
            <h4>rating: {rating}/10</h4>
            type: {type}
        </div>
    );
}

Movie.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
       <h1>hello!!</h1>
       {movieList.map(movie => (
       <Movie key={movie.id} name={movie.name} type={movie.type} rating={movie.rating}/>
       ))}
    </div>
  );
}

export default App;
