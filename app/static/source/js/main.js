(function(){
  'use strict';

  function initialize(){
    $('.flexslider').flexslider({
      controlsContainer : ".flexslider-container",
      manualControls    : ".flex-control-nav li"
    });
    $('.imgLiquidFill').imgLiquid();
    $('#searchForm').on('submit', function(e){
      e.preventDefault();
      searchData($('#quickSearch').val());
    });
  }

  function searchData(data){
    console.log(data);
    window.open("searchResults.html","_self")
    var newSearch = $('#quickSearch');
    newSearch.val(data);
  }

  $(document).ready(initialize);
})();
