const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://react-next-movie.herokuapp.com' : 'http://localhost:3000'
}