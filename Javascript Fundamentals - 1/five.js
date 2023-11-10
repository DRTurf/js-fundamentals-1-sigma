let typeOfDelivery="standard";

switch(typeOfDelivery)
{
        case "standard":
        console.log("Standard might take 3-5 days");
        break;
        case "express":
        console.log("Express might take 1-2 days");
        break;
        case "overnight":
        console.log("Overnight would be delivered the next day");
        break; 
        default:
        console.log("Please select a type of delivery");
}