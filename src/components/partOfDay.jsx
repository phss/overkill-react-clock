import React from "react";

const partAt = (time) => {
    const hour = time.getHours();

    if (hour >= 5 && hour < 12) {
        return "morning";
    } else if (hour >= 12 && hour < 17) {
        return "afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "evening";
    }
    return "night";
};

const PartOfDay = (props) => {
    return <p className="partOfDay">It is {partAt(props.time)}</p>;
};

export default PartOfDay;
