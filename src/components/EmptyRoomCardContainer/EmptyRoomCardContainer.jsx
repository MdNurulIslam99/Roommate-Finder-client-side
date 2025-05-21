import React from "react";
import RoomEmptyCard from "../RoomEmptyCard/RoomEmptyCard";

const EmptyRoomCardContainer = ({ emptyRooms }) => {
  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {emptyRooms.map((data) => (
          <RoomEmptyCard key={data._id} data={data}></RoomEmptyCard>
        ))}
      </div>
    </div>
  );
};

export default EmptyRoomCardContainer;
