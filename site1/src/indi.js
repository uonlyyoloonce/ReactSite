var request=require('request');
var _pageNumber=1;
const _maxPage=2;
var _url='https://www.chapters.indigo.ca/api/v1/search?facetIds=528241|321133&searchKeys=&searchTerms=&section=2&pageNumber='+_pageNumber+'&sortKey=ReleaseDate&sortDirection=1&categoryIds=';
  var options={}; 
var buildUrl=()=>{
  options = {
     url: _url,
     method: 'GET',
     headers: {
       
       'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0'
     }
     
   }
}
   var  getInfo=()=>{  
    buildUrl();   
    request(options, function(err, res, body) {
     if (res && (res.statusCode === 200 || res.statusCode === 201)) {
       var json=JSON.parse(body);
       json.Products.forEach((elm)=>
        {
            if(elm.IsAvailableOnline==true)
            console.log(elm.AdjustedPrice);
        
        })
         _pageNumber++;
        if(_pageNumber<=_maxPage)
            {
                _url='https://www.chapters.indigo.ca/api/v1/search?facetIds=528241|321133&searchKeys=&searchTerms=&section=2&pageNumber='+_pageNumber+'&sortKey=ReleaseDate&sortDirection=1&categoryIds=';
                getInfo();
            }
     }
   });
    };
;

getInfo();