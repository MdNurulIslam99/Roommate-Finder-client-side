import React from "react";
import RoomEmptyCard from "../RoomEmptyCard/RoomEmptyCard";

const EmptyRoomCardContainer = ({ emptyRooms }) => {
  const availableRooms = emptyRooms
    .filter((room) => room.availability === "available")
    .slice(0, 8);

  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {availableRooms.map((data) => (
          <RoomEmptyCard key={data._id} data={data}></RoomEmptyCard>
        ))}
      </div>
    </div>
  );
};

export default EmptyRoomCardContainer;
