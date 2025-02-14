
const FeaturedShow = (props) => {
  return (
    <>
        <div className="w-[200px] h-[300px] lg:w-auto md:h-[400px] md:w-[300px] lg:h-[500px] flex justify-center align-center relative flex-shrink-0">
            <img src={props.movie.imageUrl} alt="poster" />
            <div className="hidden lg:flex w-full lg:h-[100px] bg-black/30 p-[20px] font-semibold text-lg absolute bottom-0 hover:lg:h-[200px]">
             {props.movie.name}
            </div>
        </div>
    </>
  )
}

export default FeaturedShow