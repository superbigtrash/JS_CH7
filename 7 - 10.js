var extendClass2 = (function () {
    var Bridge = function () {};
    return function (SuperClass, SubClass, subMethods) {
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if (subMethods) {
            for (var method in subMethods) {
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Square.prototype = Object.create(Rectangle.prototype);
        Object.freeze(Sqaure.prototype);
        Object.freeze(SubClass.prototype);
        return SubClass;
    };
})();