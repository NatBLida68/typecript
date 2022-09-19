let count:number = 0;
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
document.getElementById("pPrice").innerHTML= '999';
document.getElementById("pAvailable").innerHTML=isAvailable(count);
