import React, { useEffect, useState } from "react";
import HomeCollection from "./HomeCollection/HomeCollection";


const HomeCollections = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCollections")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <>
     

      <div className="row text-center text-white home-collections-top">
        <p className="mt-4  mb-0 pb-0 top-sub-title">COLLECTIONS</p>
        <p className=" py-0 mt-3 fs-1 fw-bold">Find Your Dream Car Here</p>
      
      </div>

      <div className="row  pb-5 collections ">
        <div className="row collection-container pb-5">
          <div className="row g-4 collection ">
            {collections.slice(0,6).map((collection) => (
              <HomeCollection
                collection={collection}
                key={collection._id}
              ></HomeCollection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCollections;
