function square(x) {
    var sum = 0;
    for (var i = 0; i < x; i++) {
        var p1 = x / 2;
        var p2 = x / 2 + 1;

        var a = 2 + 2;
        var b = 2 + 3;
        var c = 2 + 4;

        sum += p1 + p2;
        // console.log("p1: " + p1 + ", p2: " + p2);
    }
    return sum;
}

console.log("power of 2(8): " + square(8));