getHaversineDistance = (firstLocation, secondLocation) => {
    const earthRadius = 6371; // km 

    const diffLat = (secondLocation.lat-firstLocation.lat) * Math.PI / 180;  
    const diffLng = (secondLocation.lng-firstLocation.lng) * Math.PI / 180;  

    const arc = Math.cos(
                    firstLocation.lat * Math.PI / 180) * Math.cos(secondLocation.lat * Math.PI / 180) 
                    * Math.sin(diffLng/2) * Math.sin(diffLng/2)
                    + Math.sin(diffLat/2) * Math.sin(diffLat/2);
    const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1-arc));

    const distance = earthRadius * line; 

    return distance;
}

const fix = { lat: -15.168899, lng: -48.283567 }
const movel = { lat: latitude, lng: -48.289784 } 
//const losAngeles = { lat: 34.0522, lng: -118.2437 }

console.log(getHaversineDistance(fix, movel)) //129.61277152662188
//console.log(getHaversineDistance(philly, losAngeles)) //3843.4534005980404