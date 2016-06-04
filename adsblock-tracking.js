setTimeout(function() {
  if(typeof adsbygoogle !== "undefined") {
    window.addEventListener('load', function() {
      if(typeof ga !== "undefined") {
        if(typeof adsbygoogle.loaded === "undefined") {
          ga('send', 'event', 'AdSense', 'Bad, Ads blocked', {
            "nonInteraction": 1
          });
        }
        else {
          ga('send', 'event', 'AdSense', 'Goood, Ads not blocked', {
            "nonInteraction": 1
          });
        }
      }
    }, false);
  }
}, 500);
