import React from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../data/data";

// Helper to extract a YouTube video ID from a URL
const getYoutubeId = (url) => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtube.com")) {
      // Example: https://www.youtube.com/watch?v=TC6N1zHvXpU&list=...
      return parsedUrl.searchParams.get("v");
    } else if (
      parsedUrl.hostname === "youtu.be" ||
      parsedUrl.hostname.includes("youtu.be")
    ) {
      // Example: https://youtu.be/q3fa-OIsBvU
      return parsedUrl.pathname.slice(1);
    }
  } catch (error) {
    console.error("Invalid URL:", error);
  }
  return null;
};

const Showcase = () => {
  // Get the dish ID from the URL, e.g. /showcase/2
  const { id } = useParams();
  
  const dish = dishes.find(
    (d) => d.line2.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (!dish) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-center font-tradegothic text-xs uppercase">404 Page does not exist</p>
      </section>
    );
  }

  // Extract the YouTube video ID from the dish.link property
  const videoId = getYoutubeId(dish.link);

  return (
    <section id="menu" className="py-6 bg-white-100">
      <div className="py-[20px] ml-4 lg:max-w-[1000px] md:max-w-[700px] max-w-[400px] sm:max-w-[500px] sm:ml-[124px] md:ml-[198px]">
        {/* Embed the YouTube video if a valid ID is found */}
        {videoId ? (
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-center">Invalid or missing video link.</p>
        )}

        {/* Text beneath the video */}
        <div className="mt-8 text-left">
            <h2 className="font-tradegothicbd text-l uppercase leading-[1.1]">
              {dish.line1}
              <br />
              {dish.line2}
            </h2>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line3}
            </p>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line4}
            </p>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line5}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;