let count:number = 0;

enum MobilePrice {Black= 250, Gold= 280, White= 300};
enum MobileCount {Black= 10, Gold= 0, White= 4};
enum MobileDiscount {Black= 5, Gold= 10, White= 5};


function getPrice(color:string)
{
document.getElementById("pPrice").innerHTML= MobilePrice[color];
document.getElementById("pAvailable").innerHTML=isAvailable(MobileCount[color]);
document.getElementById("pDiscount").innerHTML=MobileDiscount[color];

return MobilePrice[color];
}

function isAvailable(n:number):string
{
    let available:string= 'available';
    if(n<=0)
    {
        available ='Not available';
    }
    return available;
}

document.getElementById("pName").innerHTML='Samsug Galaxy s22';

document.getElementById("Black").innerHTML=getPrice('Black');
document.getElementById("Gold").innerHTML=getPrice('Gold');
document.getElementById("White").innerHTML=getPrice('White');

