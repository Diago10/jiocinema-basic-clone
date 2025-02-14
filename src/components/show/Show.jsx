
const Show = (props) => {
  return (
    <div className="w-[150px] h-[200px] md:w-[200px] md:h-[300px] lg:w-[16%] lg:h-[400px] bg-black relative flex-shrink-0">
      <img
        src={props.movie.imageUrl}
        alt="poster"
        className="w-full h-full object-cover"
      />
      <div className="hidden lg:flex w-full h-[50px] lg:h-[100px] bg-black/50 absolute bottom-0 lg:text-lg font-semibold p-[20px] pointer hover:lg:h-[200px] hover:h-[100px]">
        {props.movie.name}
      </div>
    </div>
  );
};

export default Show