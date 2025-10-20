import Link from "next/link";
import React from "react";

const CuratedLearning = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="h2 font-heading pb-6">Curated Learning Library</h2>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          {/* Large card */}
          <Link
            href="https://youtu.be/3PWBvy4DNPY?si=VaReXIWMJu1irFcf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#D4B5A0] rounded-2xl overflow-hidden h-64 relative group"
          >
            <iframe
              src="https://www.youtube.com/embed/3PWBvy4DNPY?rel=0"
              className="w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video"
            />
            <div className="absolute bottom-6 left-6">
              <button className="text-white underline bg-black bg-opacity-50 px-4 py-2 rounded pointer-events-none">
                Get started
              </button>
            </div>
          </Link>

          {/* Bottom left card */}
          <Link
            href="https://youtu.be/U9d5qkAnSj0?si=xQ1SC0IcE5Pd9fZo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A894] block overflow-hidden rounded-2xl h-24 relative group"
          >
            <h3 className="text-white bg-black text-sm font-medium absolute bottom-0 left-6 px-2">
              Simple red lip tutorial
            </h3>
            <iframe
              src="https://www.youtube.com/embed/U9d5qkAnSj0?rel=0"
              className="w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video"
            />
          </Link>
        </div>

        {/* Right column with stacked cards */}
        <div className="flex flex-col gap-4">
          <Link
            href="https://youtu.be/-PGnmeqzt4E?si=1l6sfWQlId1vHV1d"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A894] block overflow-hidden rounded-2xl h-24 relative group"
          >
            <h3 className="text-white bg-black text-sm font-medium absolute bottom-0 left-6 px-2">
              Detailed brow tutorial
            </h3>
            <iframe
              src="https://www.youtube.com/embed/-PGnmeqzt4E?rel=0"
              className="w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video"
            />
          </Link>

           <Link
            href="https://youtu.be/bhEWBsEzmwI?si=I9WqK06eq_p8Frfs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A894] block overflow-hidden rounded-2xl h-24 relative group"
          >
            <h3 className="text-white bg-black text-sm font-medium absolute bottom-0 left-3 px-2">
              Create a flawless bridal look
            </h3>
            <iframe
              src="https://www.youtube.com/embed/bhEWBsEzmwI?rel=0"
              className="w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video"
            />
          </Link>
         <Link
            href="https://youtu.be/yEP-JtXkogE?si=rlxaObQ-TjCei9uU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A894] block overflow-hidden rounded-2xl h-24 relative group"
          >
            <h3 className="text-white bg-black text-sm font-medium absolute bottom-0 left-3 px-2">
              Daily makeup for beginners
            </h3>
            <iframe
              src="https://www.youtube.com/embed/yEP-JtXkogE?rel=0"
              className="w-full h-full object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CuratedLearning;
