# adsblock-tracking

On sites where you employ both Google AdSense and Analytics, here's one simple method to find out how often ads are blocked: 
Add it just before </body>. This will send an "Ad blocker active" event to Analytics whenever the AdSense ads are prevented from loading. 

As soon as you have some data, there are several ways to analyze it, but I find it easiest to create a new segment on the Audience > Overview page. Give it a descriptive name, then select "Conditions" under "Advanced", find "Event Action" in the dropdown menu, enter "Ads blocked" in the textfield (assuming you haven't renamed it in the code above) and click "Save". The segment will now be active. Optionally click the + button next to it and select the "All Sessions" segment for a basic comparison of ad blocked sessions vs. total sessions, bounce rate differences, etc. 
*  Events count towards your collection limits [developers.google.com]. 
* You need to be using analytics.js (current library) rather than ga.js (legacy library), or events won't be registered. 

Update: 
I should add that this assumes you use Analytics and AdSense on most, if not all, your pages. If you don't, you could consider also logging an event when AdSense ads are loaded, so that you can more accurately gauge the ad blocker share: 

(This will obviously further increase the number of events counting towards your collection limits)

Credit : 
* https://www.webmasterworld.com/google_adsense/4777452-2-30.htm
* http://pastebin.com/raw/hWaHb3ct (erwin solihin)

