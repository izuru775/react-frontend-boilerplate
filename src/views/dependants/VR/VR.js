
import "aframe";
import { useState, useEffect } from "react";
import { Scene } from "aframe-react";
import "aframe-environment-component";

export const VR =()=> {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "http://ec2-3-26-220-121.ap-southeast-2.compute.amazonaws.com:3001/api"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data[0].vrObject[0]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const url =
      "https://foresthouse.s3.ap-southeast-2.amazonaws.com/forest_house/house.gltf";
    return (
      <Scene
        id="mainScene"
        environment="preset:forest"
      >
        <a-assets>
          <a-asset-item  id="tree" src={url}></a-asset-item>
        </a-assets>
        <a-gltf-model position={items.position} scale={items.scale} rotation ={items.rotation} src="#tree"></a-gltf-model>
      </Scene>
      //this is sdsd
    );
  }
};



