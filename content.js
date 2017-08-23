// alert("Hello from your Chrome extension!")

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// alert(firstHref);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) 
  {
    if( request.message === "clicked_browser_action" ) 
    {
		var firstHref = $("a[href^='http']").eq(0).attr("href");
		var posts = document.getElementsByClassName("_4ikz");
		
		for(var i = 0; i < posts.length ;i++)
		{
			// console.log(eachPost.innerHTML);
			// console.log("found");

			var content = posts[i].innerHTML;
			// console.log(content);
			// if(content.includes("Game"))
			// {
			if(content.includes("GOT") || content.includes("got") || content.includes("game") || content.includes("Game"))
			{
				console.log("found GOT");
				posts[i].style.display = "none";;
			}
			else
			{
				// console.log("Not found");
			}
			// 	console.log("found an instance of got");
			// }
		}
		// alert(posts.length);
		// console.log(firstHref);
    }
  }
);