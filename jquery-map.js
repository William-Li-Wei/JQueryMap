var Person = function(name) {
    this.name = name;
}

Person.prototype = {
    sayHello: function () {
        console.log(this.name + " says hello");
    },
    fireEvent: function () {
        setTimeout(
            function() {
                $( document ).trigger( "myCustomEvent", {name: 'jasmin'} );
            }, 3000
        );
    }
}


var JQMap = function(mapId) {
    this.mapId = mapId;
    this.init();
}

JQMap.prototype = {
    init: function() {
        // L.mapbox.accessToken = '<your access token here>';
        var map = L.mapbox.map(this.mapId, 'examples.map-i86nkdio').setView([40, -74.50], 9);
        return map;
        // var mapId = this.mapId;
        // setTimeout(
        //     function() {
        //         // L.mapbox.accessToken = '<your access token here>';
        //         var map = L.mapbox.map(mapId, 'examples.map-i86nkdio').setView([40, -74.50], 9);
        //         return map;
        //     },
        //     1000
        // )
    }
}