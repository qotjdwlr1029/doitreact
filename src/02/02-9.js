let queryString = 'banana=10&apple=20&orange=30';

/*function parce(qs){
    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {}

    for( var i = 0; i<chunks.length; i++ ){
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = parts[1];
        result[key] = value;
    }
    return result;
}*/

/*function parce(qs){
    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {}

    for( var i = 0; i<chunks.length; i++ ){
        var parts = chunks[i].split('=');
        var key = parts[0];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    }
    return result;
}*/

/*function parce(qs){
    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    var result = {}

    chunks.forEach((chunk) => {
        var parts = chunk.split('=');
        var key = parts[0];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    })
        
    return result;
}*/

function parce(qs){
    var queryString = qs.substr(1);
    var chunks = qs.split('&');
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split('=');
        return { key , value };
    })
        
    return result;
}

console.log(parce(queryString));