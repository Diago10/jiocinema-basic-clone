import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectMovies } from "../redux/moviesSlice"; // Adjust the import path
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";

export default function Home() {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);

    const images = [
        "https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2017/08/LandOfMine_CCWebsite_1600x900-1.jpg",
        "https://posterspy.com/wp-content/uploads/2020/04/DuneFINAL-1200x609.jpg",
        "https://pursuitofitall.com/wp-content/uploads/2016/02/the-revenant-movie-poster-horizontal.jpg",
    ];

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    // Filter movies into categories
    const featuredMovies = movies.filter(movie => movie.featured).slice(0, 5);
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama")).slice(0, 10);
    const englishMovies = movies.filter(movie => movie.language === "English").slice(0, 10);
    const topMovies = movies.filter(movie => movie.imdb >= 8.5).slice(0, 10);
    const japaneseMovies = movies.filter(movie => movie.country === "Japan").slice(0, 10);
    const animationMovies = movies.filter(movie => movie.genre.includes("Animation")).slice(0, 10);
    const scifiMovies = movies.filter(movie => movie.genre.includes("Sci-Fi")).slice(0, 10);

    return (
        <>
            <Header movies={movies} />
            <Tags />
            <Carousel images={images} />
            <Channels />
            <Featured movies={featuredMovies} />
            <Shows title="Drama Movies" movies={dramaMovies} />
            <Shows title="English Language Movies" movies={englishMovies} />
            <Shows title="Highly Rated Movies" movies={topMovies} />
            <Shows title="Japanese Movies" movies={japaneseMovies} />
            <Shows title="Animation Movies" movies={animationMovies} />
            <Shows title="Sci-fi Movies" movies={scifiMovies} />
        </>
    );
}