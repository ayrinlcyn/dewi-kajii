function ImageCard({ title, image, deskripsi }) {
  return (
    <div className="container">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 w-[236px] h-[278px]">
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125"
            src={image}
            alt={title}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-Poppins-Regular text-3xl font-bold text-white">
            {title}
          </h1>
          <p className="mb-3 text-lg font-Poppins-Bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {deskripsi}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
