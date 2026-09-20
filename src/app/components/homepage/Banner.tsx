import bannerImg from "@/app/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      {/* <section className="container mx-auto mt-10"> 
        <div className="bg-slate-100 rounded-2xl"> 
          <div className="grid grid-cols-2 items-center p-20"> 
            <div className=""> 
              <h1 className="text-6xl font-bold"> 
                Books to freshen up your bookshelf 
              </h1> 
              <button className="btn btn-success mt-19">View The List</button> 
            </div> 
            <div className=""> 
              <Image 
                src={bannerImg} 
                width={400} 
                height={400} 
                alt="Banner Img" 
              /> 
            </div> 
          </div> 
        </div> 
      </section> */}

      <section className="container mx-auto mt-10 px-4">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 via-white to-slate-200 shadow-lg">
          <div className="grid min-h-125 grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2 md:px-16 lg:px-20">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl lg:text-6xl">
                Books to freshen up your{" "}
                <span className="text-green-600">bookshelf</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-slate-500">
                Discover amazing books and find your next favorite story. Build
                a bookshelf that truly represents you.
              </p>

              <button className="rounded-full bg-green-600 px-7 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg">
                View The List →
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={bannerImg}
                width={400}
                height={400}
                alt="Books Banner"
                className="drop-shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
