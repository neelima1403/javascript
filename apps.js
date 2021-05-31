//if-else
let time = -25;
let wishMessage= '';
if(time >=0 && time <= 12)
{
    wishMessage = 'Good Morning';

}
else if(time > 12 && time <= 17)
{
    wishMessage = 'Good Aternoon';

}
else if(time >17 && time <= 23)
{
    wishMessage = 'Good evening';
}
else{
    wishMessage = 'Enter a Proper Time';
}
console.log(wishMessage);

//Switch Statement
let day = new Date(). getDay();
let today = '';
switch(day)
{
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;    
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 5:
        today = 'Sturday';
        break;            
                
}
console.log(today);
