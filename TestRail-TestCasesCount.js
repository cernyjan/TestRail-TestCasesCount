$( document ).ready(function() {
	var urlSearch = window.location.search;
	var html = $("body").html();
	if (urlSearch.indexOf("/suites/") >= 0 && urlSearch.indexOf("/view/") >= 0 && html.indexOf("About TestRail") >= 0)
	{
		console.log("TestRail TestCasesCount is Online");

		function iteration() {
		    myVar = setInterval(checkFilter, 1000);
		}

		function checkFilter() {
		    if ($('#filterByEmpty[style*="display: none;"]').length > 0 || $('#filterByEmpty:not([style])').length > 0)
			{
				var count = $('#groups').find('table').find('tr:not(.header.sectionRow.caseDroppable)').length;
				var content = "<p id='tcCount'>Found by filter: <strong>" + count + "</strong></p>";
				if ($('#tcCount').length == 0)
				{
					$('#sidebarInfo').append(content);
				}
				else
				{
					$('#tcCount').remove();
					$('#sidebarInfo').append(content);
				}
			}
			else
			{
				if ($('#tcCount').length > 0)
				{
					$('#tcCount').remove()
				}
			}
		}

		iteration();	
	}
});