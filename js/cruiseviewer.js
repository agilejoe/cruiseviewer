$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "http://cruisecontrolrb.thoughtworks.com/XmlStatusReport.aspx",
      dataType: "html",
      success: function(xml) { 
        $("#parentDiv").empty();
        $(xml).find("Project").each(function()
        {
          var name = $(this).attr("name");
          var buildStatus = $(this).attr("lastBuildStatus");
          $("<div class='"+buildStatus+"'>"+name+"</div>").appendTo("#parentDiv");
        });
      }
    });
});
