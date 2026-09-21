import React from 'react';
import Image from 'next/image';
import BannerPic from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="py-5">
      <div className="flex bg-slate-300  container mx-auto flex-col-reverse lg:flex-row items-center justify-between gap-8 p-10 lg:p-16">
        
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
            Books to freshen up your bookshelf
          </h1>
          <p className="text-base-content/70 text-lg max-w-md mx-auto lg:mx-0">
            Discover our curated collection of must-read titles to upgrade your library today.
          </p>
          <div>
            <button className="btn btn-success text-white px-8 font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
              View The List
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-none">
          <Image 
            src={BannerPic} 
            alt="Bookshelf Banner Image"
            className="w-full max-w-sm lg:max-w-md h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;