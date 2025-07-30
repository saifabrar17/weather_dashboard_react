const data = [
    {
        location: "London",
        latitude: 51.5074,
        longitude: -0.1278,
    },
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
    },
    {
        location: "New York",
        latitude: 40.7128,
        longitude: -74.0060,
    },
    {
        location: "Tokyo",
        latitude: 35.6762,
        longitude: 139.6503,
    },
    {
        location: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        location: "Dubai",
        latitude: 25.2048,
        longitude: 55.2708,
    },
    {
        location: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
    },
    {
        location: "Beijing",
        latitude: 39.9042,
        longitude: 116.4074,
    },
    {
        location: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
    },
    {
        location: "Cape Town",
        latitude: -33.9249,
        longitude: 18.4241,
    },
    {
        location: "Rothera Point",
        latitude: 67.5678,
        longitude: 68.1267,
    },
    {
        location: "Reykjavik",
        latitude: 64.1466,
        longitude: -21.9426,
    }
];

function getLocations(){
    return data; 
}
function getLocationByName(location){
    if(!location) return null;

    const filtered = data.filter((item) => item.location === location);
    if(filtered.length > 0){
        return filtered[0];
    }else{
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export {getLocationByName,getLocations};