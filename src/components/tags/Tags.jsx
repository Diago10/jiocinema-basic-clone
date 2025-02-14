import { useState } from 'react';

const Tags = () => {
    let [tags, setTags] = useState([
        "For You",
        "Action",
        "Romantic Comedy",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Fantasy",
        "Documentary",
        "Crime",
        "Adventure",
        "Mystery",
        "Horror",
        "Animated",
        "Historical",
        "Superhero",
    ]);

    return (
        <>
            <div className="w-full h-[40px] md:h-[60px] lg:h-[75px] gap-4  bg-black flex items-center overflow-x-auto whitespace-nowrap p-4 lg:py-4 lg:px-2 scrollable">
                {
                    tags.map((tag) => {
                        return (
                            <p key={tag} className="inline-block text-[10px] md:text-[13px] lg:text-[17px]  p-2 md:p-3.5 rounded-full bg-gray-600/50 text-white transition-0.3s cursor-pointer font-semibold hover:bg-white hover:text-black">
                                {tag}
                            </p>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Tags;