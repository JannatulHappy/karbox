import React, { useEffect, useState } from "react";
import Menubar from "../Shared/Header/Menubar/Menubar";
import Collection from "./Collection/Collection";
import "./Collections.css";
const Collections = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch("/../test2.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <>
      <Menubar></Menubar>

      <div className="row text-center text-white collections-top">
        <p className="mt-4 pt-4 mb-0 pb-0 top-sub-title">COLLECTIONS</p>
        <p className="my-4 py-0 fs-1 fw-bold">Find Your Dream Car Here</p>
        <p className="mt-2 py-0  bottom-sub-title fw-bold">
          We're Proud to Represent the World's most Prestigious Car Brands at
          over 140 Dealerships Nationwide
        </p>
        <hr className="text-white mt-5"/>
      </div>

      <div className="row  pb-5 collections ">
        <div className="row collection-container pb-5">
          <div className="row g-4 collection ">
            {collections.map((collection) => (
              <Collection
                collection={collection}
                key={collection.id}
              ></Collection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
