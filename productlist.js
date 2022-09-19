var count = 0;
function isAvailable(n) {
    var available = 'available';
    if (n <= 0) {
        available = 'Not available';
    }
    return available;
}
document.getElementById("pName").innerHTML = 'Samsug Galaxy s22';
document.getElementById("pPrice").innerHTML = '999';
document.getElementById("pAvailable").innerHTML = isAvailable(count);
