var count = 0;
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["Black"] = 250] = "Black";
    MobilePrice[MobilePrice["Gold"] = 280] = "Gold";
    MobilePrice[MobilePrice["White"] = 300] = "White";
})(MobilePrice || (MobilePrice = {}));
;
var MobileCount;
(function (MobileCount) {
    MobileCount[MobileCount["Black"] = 10] = "Black";
    MobileCount[MobileCount["Gold"] = 0] = "Gold";
    MobileCount[MobileCount["White"] = 4] = "White";
})(MobileCount || (MobileCount = {}));
;
var MobileDiscount;
(function (MobileDiscount) {
    MobileDiscount[MobileDiscount["Black"] = 5] = "Black";
    MobileDiscount[MobileDiscount["Gold"] = 10] = "Gold";
    MobileDiscount[MobileDiscount["White"] = 5] = "White";
})(MobileDiscount || (MobileDiscount = {}));
;
function getPrice(color) {
    document.getElementById("pPrice").innerHTML = MobilePrice[color];
    document.getElementById("pAvailable").innerHTML = isAvailable(MobileCount[color]);
    document.getElementById("pDiscount").innerHTML = MobileDiscount[color];
    return MobilePrice[color];
}
function isAvailable(n) {
    var available = 'available';
    if (n <= 0) {
        available = 'Not available';
    }
    return available;
}
document.getElementById("pName").innerHTML = 'Samsug Galaxy s22';
document.getElementById("Black").innerHTML = getPrice('Black');
document.getElementById("Gold").innerHTML = getPrice('Gold');
document.getElementById("White").innerHTML = getPrice('White');
