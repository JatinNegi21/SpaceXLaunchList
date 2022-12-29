import React, {useState, useEffect} from 'react';
import './App.css';
import SpaceMission from "./graphql";
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBContainer,MDBRow} from "mdb-react-ui-kit";

function SpaceXLaunchList() {
  const [data, setData] = useState([]);
  const loadSpaceMission = async () =>{
    const spaceMissions = await SpaceMission.getSpaceMission(1000);
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, [])

  console.log("data",data);

  return (
    <MDBContainer 
      style={{
        margin:"auto",
        padding: "15px",
        maxWidth: "720px",
        alignContent: "center",
    }}>

    <MDBRow>
   
    <h1 className="display-4 text-center my-5 pt-5" id  > SpaceX Launch List</h1>
    {data.map((item,index) => (
     <>
      <MDBCard 
        key={index} 
        style={{maxWidth: "100rem" , maxHeight: "100rem"}}>
        <MDBCardImage src={ item && item.ships[0] && item.ships[0].image ? item.ships[0].image: "https://media.istockphoto.com/id/1203121939/photo/rocket-starts-in-the-night-starry-sky-a-spaceship-flies-into-outer-space-concept-of-travel-to.jpg?s=612x612&w=0&k=20&c=HDbPVYfvI4wmRSgzY7CXuX5NZwt7FVKBv1JXdGbeuog="} 
          position="top"
          alt={item.mission_name}
        />
        <MDBCardBody>
          <MDBCardTitle>{item.mission_name}</MDBCardTitle>
          <MDBCardTitle>{item.launch_site.site_name_long}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
     </> 

    ))}
    </MDBRow>
    
    </MDBContainer>
  );
}

export default SpaceXLaunchList;