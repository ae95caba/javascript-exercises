const getTheTitles = function(arrayOfObjets) {
   
    var titles = arrayOfObjets.map(object => object.title);
    //return arrayOfObjets[0].title;
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
