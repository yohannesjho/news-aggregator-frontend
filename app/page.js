import Image from "next/image";
import ImageWithNews from "./components/ImageWithNews";
import Tech from "./components/Tech";
import Sport from "./components/Sport";

export default function Home() {
  const newsTitles = [
    {
      title: "NewBreakings:",
      description: "  Global Economy Takes a Turn",
    },
    {
      title: "Technology:",
      description: " New Innovations in AI",
    },
    {
      title: "sports",
      description: "Local Team Wins Championship"
    }
  ];

  const tech = [
    {
      title: "NewBreakings:",
      description: "  Global Economy Takes a Turn",
      imgUrl: "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-22.jpg"
    },
    {
      title: "Technology:",
      description: " New Innovations in AI",
      imgUrl: "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-11.jpg"
    },
    {
      title: "sports",
      description: "Local Team Wins Championship",
      imgUrl: "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-03.jpg"
    },

  ]
  const imageUrls = ["https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-01.jpg", "https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-post-featured-img-09.jpg"]
  return (
    <div>
      <ImageWithNews
       
        imageUrls={imageUrls}
        newsTitles={newsTitles}

      />
      <Tech tech={tech}/>
      <Sport tech={tech}/>
    </div>
  )
}