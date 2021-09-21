import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "App info",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "Author info",
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
};
export default SinglePage;
