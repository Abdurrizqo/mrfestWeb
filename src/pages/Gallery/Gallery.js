import React, { useEffect, useState } from "react";
import AfterMovie from "../../assets/aftermovie.png";
import ListGallery from "./GalleryList.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
function Gallery() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  let indents = [];

  for (let i = 0; i < 5; i++) {
    indents.push(
      <div
        className="w-32 h-32 lg:w-60 lg:h-60 rounded bg-gray-300"
        key={ListGallery[i].id}
      >
        <img
          src={ListGallery[i].gambar}
          alt="gallery 5"
          className="w-full h-full object-cover rounded"
        />
      </div>
    );
  }

  const [load, setLoad] = useState(false);

  return (
    <div className="w-full bg-[#1E1A1D] pt-32">
      <div className="w-full bg-gray-300 h-[400px] relative mx-auto lg:w-[95%] lg:rounded-md mb-10">
        <img
          src={AfterMovie}
          alt="after movie"
          className="w-full h-full object-cover lg:rounded-md"
        />
        <div className="bg-white rounded p-5 w-2/5 absolute bottom-5 left-5 hidden md:block overflow-hidden">
          <h1 className="font-bold text-xl mb-4">Latest MRFEST Offline</h1>
          <p className="mb-3">
            Retrouvailles is a beautiful term to describe the happinesss of
            meeting someone that is very dear to you after a long time.
          </p>
          <a
            href="https://www.youtube.com/watch?v=gK3dLYL1a1g"
            className="border rounded border-black px-6 py-1"
          >
            Watch
          </a>
          <h1 className="text-6xl font-extrabold text-gray-200 absolute right-3 -bottom-3">
            After Movie
          </h1>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 justify-items-center px-5 pb-10">
        {load
          ? ListGallery.map((item) => {
              return (
                <div
                  className="w-32 h-32 lg:w-60 lg:h-60 rounded"
                  key={item.id}
                >
                  <img
                    src={item.gambar}
                    alt="gallery 5"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              );
            })
          : indents}
      </div>

      <button
        className="text-white mx-auto text-2xl flex gap-3 items-end"
        onClick={() => {
          load ? setLoad(false) : setLoad(true);
        }}
      >
        {load ? (
          <>
            Less <FiChevronUp />
          </>
        ) : (
          <>
            Load More
            <FiChevronDown />
          </>
        )}
      </button>
    </div>
  );
}

export default Gallery;
