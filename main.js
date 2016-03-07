function go() {  
        var halfurl = document.getElementById("search").value;
    if(halfurl == 'time' || halfurl == 'Time') { 
      var my_time = new Date();
        alert(my_time); 
    }else if(halfurl == 'quote' || halfurl == 'quotes' || halfurl == 'Quote' || halfurl == 'Quotes'){
      var quotes=new Array()
      
      quotes[0]='There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other. -By Douglas Everett'

      quotes[1]='Whether you think you can or whether you think you can\'t, you\'re right! -Henry Ford'

      quotes[2]='I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor. -Henry David Thoreau'

      quotes[3]='Do not let what you cannot do interfere with what you can do. -John Wooden'

      quotes[4]='Accept everything about yourself - I mean everything, You are you and that is the beginning and the end - no apologies, no regrets. -Clark Moustakas'

      quotes[5]='We must accept life for what it actually is - a challenge to our quality without which we should never know of what stuff we are made, or grow to our full stature. -Ida R. Wylie'

      quotes[6]='High achievement always takes place in the framework of high expectation. -Jack Kinder'

      quotes[7]='The measure of a man is the way he bears up under misfortune. -Plutarch'

      quotes[8]='Don\'t wait for your ship to come in, swim out to it. -Anon'

      quotes[9]='As I grow older, I pay less attention to what men say. I just watch what they do. -Andrew Carnegie'

      quotes[10]='No steam or gas ever drives anything until it is confined. No Niagara is ever turned into light and power until it is tunneled. No life ever grows until it is focused, dedicated, disciplined. -Harry Emerson Fosdick'

      quotes[11]='The words printed here are concepts. You must go through the experiences. -Carl Frederick'

      quotes[12]='Man cannot discover new oceans unless he has the courage to lose sight of the shore. -Andre Gide'

      quotes[13]='The wise man does at once what the fool does finally. -Baltasar Gracian'

      quotes[14]='The world has the habit of making room for the man whose actions show that he knows where he is going. -Napoleon Hill'

      quotes[15]='Success seems to be connected with action. Successful men keep moving. They make mistakes, but they don\'t quit. -Conrad Hilton'

      quotes[16]='Do the things you know, and you shall learn the truth you need to know. -George Macdonald'

      quotes[17]='I have never heard anything about the resolutions of the apostles, but a good deal about their acts. -Horace Mann'

      quotes[18]='Let us not be content to wait and see what will happen, but give us the determination to make the right things happen. -Peter Marshall'

      quotes[19]='I hear and I forget, I see and I remember. I do and I understand. -Chinese Proverb'

      quotes[20]='One may walk over the highest mountain one step at a time. -John Wanamaker'

      quotes[21]='Every action is either strong or weak, and when every action is strong we are successful. -Wallace D. Wattles'

      quotes[22]='If we do what is necessary, all the odds are in our favor. -Henry Kissinger'

      quotes[23]='Little minds are tamed and subdued by misfortune; but great minds rise above them. -Washington Irving'

      quotes[24]='When an affliction happens to you, you either let it defeat you, or you defeat it... -Rosalind Russell'

      quotes[25]='There\'s a basic human weakness inherent in all people which tempts them to want what they can\'t have and not want what is readily available to them. -Robert J. Ringer'

      quotes[26]='If there is something to gain and nothing to lose by asking, by all means ask! -W. Clement Stone'

      quotes[27]='It\'s not the situation ... It\'s your reaction to the situation -Robert Conklin'

      quotes[28]='Life at any time can become difficult: life at any time can become easy.  It all depends upon how one adjusts oneself to life. -Morarji Desai'

      quotes[29]='What happens is not as important as how you react to what happens. -Thaddeus Golas'

      quotes[30]='To hell with circumstances; I create opportunities. -Bruce Lee'

      var whichquote=Math.floor(Math.random()*(quotes.length))
  alert(quotes[whichquote])  
    }else if(halfurl == 'type' || halfurl == 'Type'){
      if (document.all)
  var version=/MSIE \d+.\d+/
if (!document.all)
          alert("You are using "+navigator.appName+" "+navigator.userAgent)
          else
            alert("You are using "+navigator.appName+" "+navigator.appVersion.match(version))
}else if(halfurl == "history" || halfurl == "History"){
var hist = history.length
alert("You have been to " + hist + " sites!")
}else if(halfurl== "lv" || halfurl == "LV"){
  var days = 999;
  var lastvisit=new Object();
  var firstvisitmsg="This is your first visit to this page. Welcome!"; 
  lastvisit.subsequentvisitmsg="Welcome back visitor! Your last visit was on [displaydate]";

  lastvisit.getCookie=function(Name){ 
    var re=new RegExp(Name+"=[^;]+", "i"); 
    if (document.cookie.match(re)) 
      return document.cookie.match(re)[0].split("=")[1];
    return''; 
  }

  lastvisit.setCookie=function(name, value, days){ 
    var expireDate = new Date();

    var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days));
    document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
  }

  lastvisit.showmessage = function() {
    var wh = new Date();
    if (lastvisit.getCookie("visitc") == "") { 
      lastvisit.setCookie("visitc", wh, days); 
      alert(firstvisitmsg);
    }

    else {
      var lv = lastvisit.getCookie("visitc");
      var lvp = Date.parse(lv);
      var now = new Date();
      now.setTime(lvp);
      var day = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
      var month = new Array ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
      var dd = now.getDate();
      var dy = now.getDay();
      dy = day[dy];
      var mn = now.getMonth();
      mn = month[mn];
      yy = now.getFullYear();
      var hh = now.getHours();
      var ampm = "AM";
      if (hh >= 12) {ampm = "PM"}
      if (hh >12){hh = hh - 12};
      if (hh == 0) {hh = 12}
      if (hh < 10) {hh = "0" + hh};
      var mins = now.getMinutes();
      if (mins < 10) {mins = "0"+ mins}
      var secs = now.getSeconds();
      if (secs < 10) {secs = "0" + secs}
      var dispDate = dy + ", " + mn + " " + dd + ", " + yy + " " + hh + ":" + mins + ":" + secs + " " + ampm
      alert(lastvisit.subsequentvisitmsg.replace("\[displaydate\]", dispDate))
    }

    lastvisit.setCookie("visitc", wh, days);

  }

  lastvisit.showmessage();  
}else if(halfurl == "mr wilson" || halfurl == "Mr Wilson" || halfurl == "Mr.Wilson"){
alert("YAY!")  
}else{
        var url = "http://www." + halfurl
        window.open(url, "_blank")
      }
      }
      function log() {
    window.open("http://www.authpro.com/auth/cha020/?action=logout")  
      }
      function search() {
        var query = document.getElementById('search').value;
        var engine = prompt('Choose your search engine:\n1 for Google\n2 for Bing\n3 for Ask Jeeves\n4 for Yahoo\n5 for Wolfram Alpha\n6 for Wikipedia\n7 for Youtube\n8 for Mamma\n9 for DuckDuckGo\n10 for BBC!')
        if(engine == '1'){
          var google = 'https://www.google.co.uk/search?q=' + query + '&oq=' + query + '&aqs=chrome..69i57j0l5.1415j0j8&sourceid=chrome&es_sm=93&ie=UTF-8'
          window.open(google)
        }else if(engine == '2') {
          var bing = 'https://www.bing.com/search?q=' + query + '&go=Submit&qs=n&form=QBLH&pq=' + query + '&sc=9-6&sp=-1&sk=&cvid=727B1F508AE0472D96EA9EF8FC8BD990'
          window.open(bing)
        }else if(engine == '3') {
          var askje = 'http://uk.ask.com/web?q=' + query + '&qsrc=0&o=10181&l=dir&qo=homepageSearchBox'
          window.open(askje)
        }else if(engine == '4') {
          var yahoo = 'https://uk.search.yahoo.com/search?p=' + query + '&fr=yfp-t-405'
          window.open(yahoo)
        }else if(engine == '5') {
          var wolf = 'http://www.wolframalpha.com/input/?i=' + query  
          window.open(wolf)
        }else if(engine == '6') {
          var wiki = 'https://en.wikipedia.org/wiki/' + query
        window.open(wiki)
        }else if(engine == '7') {
          var youtube = 'https://www.youtube.com/results?search_query=' + query
          window.open(youtube)
        }else if(engine == '8') {
          var mamma = 'https://mamma.com/result/' + query + '/web'
          window.open(mamma)
        }else if(engine == '9') {
          var ddg = 'https://duckduckgo.com/?q=' + query + '&ia=about'
        window.open(ddg)
        }else if(engine == '10')
          var bbc = 'http://www.bbc.co.uk/search?q=' + query
          window.open(bbc)
      }
      window.addEventListener("keydown", spress, false)

      function spress(s) {
        if(s.keyCode == "83") {
          var query = document.getElementById('search').value;
          var engine = prompt('Choose your search engine:\n1 for Google\n2 for Bing\n3 for Ask Jeeves\n4 for Yahoo\n5 for Wolfram Alpha\n6 for Wikipedia\n7 for Youtube\n8 for Mamma\n9 for DuckDuckGo\n10 for BBC!')
          if(engine == '1'){
            var google = 'https://www.google.co.uk/search?q=' + query + '&oq=' + query + '&aqs=chrome..69i57j0l5.1415j0j8&sourceid=chrome&es_sm=93&ie=UTF-8'
            window.open(google)
          }else if(engine == '2') {
            var bing = 'https://www.bing.com/search?q=' + query + '&go=Submit&qs=n&form=QBLH&pq=' + query + '&sc=9-6&sp=-1&sk=&cvid=727B1F508AE0472D96EA9EF8FC8BD990'
            window.open(bing)
          }else if(engine == '3') {
            var askje = 'http://uk.ask.com/web?q=' + query + '&qsrc=0&o=10181&l=dir&qo=homepageSearchBox'
            window.open(askje)
          }else if(engine == '4') {
            var yahoo = 'https://uk.search.yahoo.com/search?p=' + query + '&fr=yfp-t-405'
            window.open(yahoo)
          }else if(engine == '5') {
            var wolf = 'http://www.wolframalpha.com/input/?i=' + query  
            window.open(wolf)
          }else if(engine == '6') {
            var wiki = 'https://en.wikipedia.org/wiki/' + query
            window.open(wiki)
          }else if(engine == '7') {
            var youtube = 'https://www.youtube.com/results?search_query=' + query
            window.open(youtube)
          }else if(engine == '8') {
            var mamma = 'https://mamma.com/result/' + query + '/web'
            window.open(mamma)
          }else if(engine == '9') {
            var ddg = 'https://duckduckgo.com/?q=' + query + '&ia=about'
            window.open(ddg)
          }else if(engine == '10')
            var bbc = 'http://www.bbc.co.uk/search?q=' + query
            window.open(bbc)
        }
        }
      }
      window.addEventListener("keydown", gpress, false)

      function gpress(g) {
        if(g.keyCode == "71") {
          var halfurl = document.getElementById("search").value;
          if(halfurl == 'time' || halfurl == 'Time') { 
            var my_time = new Date();
            alert(my_time); 
          }else if(halfurl == 'quote' || halfurl == 'quotes' || halfurl == 'Quote' || halfurl == 'Quotes'){
            var quotes=new Array()

            quotes[0]='There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other. -By Douglas Everett'

            quotes[1]='Whether you think you can or whether you think you can\'t, you\'re right! -Henry Ford'

            quotes[2]='I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor. -Henry David Thoreau'

            quotes[3]='Do not let what you cannot do interfere with what you can do. -John Wooden'

            quotes[4]='Accept everything about yourself - I mean everything, You are you and that is the beginning and the end - no apologies, no regrets. -Clark Moustakas'

            quotes[5]='We must accept life for what it actually is - a challenge to our quality without which we should never know of what stuff we are made, or grow to our full stature. -Ida R. Wylie'

            quotes[6]='High achievement always takes place in the framework of high expectation. -Jack Kinder'

            quotes[7]='The measure of a man is the way he bears up under misfortune. -Plutarch'

            quotes[8]='Don\'t wait for your ship to come in, swim out to it. -Anon'

            quotes[9]='As I grow older, I pay less attention to what men say. I just watch what they do. -Andrew Carnegie'

            quotes[10]='No steam or gas ever drives anything until it is confined. No Niagara is ever turned into light and power until it is tunneled. No life ever grows until it is focused, dedicated, disciplined. -Harry Emerson Fosdick'

            quotes[11]='The words printed here are concepts. You must go through the experiences. -Carl Frederick'

            quotes[12]='Man cannot discover new oceans unless he has the courage to lose sight of the shore. -Andre Gide'

            quotes[13]='The wise man does at once what the fool does finally. -Baltasar Gracian'

            quotes[14]='The world has the habit of making room for the man whose actions show that he knows where he is going. -Napoleon Hill'

            quotes[15]='Success seems to be connected with action. Successful men keep moving. They make mistakes, but they don\'t quit. -Conrad Hilton'

            quotes[16]='Do the things you know, and you shall learn the truth you need to know. -George Macdonald'

            quotes[17]='I have never heard anything about the resolutions of the apostles, but a good deal about their acts. -Horace Mann'

            quotes[18]='Let us not be content to wait and see what will happen, but give us the determination to make the right things happen. -Peter Marshall'

            quotes[19]='I hear and I forget, I see and I remember. I do and I understand. -Chinese Proverb'

            quotes[20]='One may walk over the highest mountain one step at a time. -John Wanamaker'

            quotes[21]='Every action is either strong or weak, and when every action is strong we are successful. -Wallace D. Wattles'

            quotes[22]='If we do what is necessary, all the odds are in our favor. -Henry Kissinger'

            quotes[23]='Little minds are tamed and subdued by misfortune; but great minds rise above them. -Washington Irving'

            quotes[24]='When an affliction happens to you, you either let it defeat you, or you defeat it... -Rosalind Russell'

            quotes[25]='There\'s a basic human weakness inherent in all people which tempts them to want what they can\'t have and not want what is readily available to them. -Robert J. Ringer'

            quotes[26]='If there is something to gain and nothing to lose by asking, by all means ask! -W. Clement Stone'

            quotes[27]='It\'s not the situation ... It\'s your reaction to the situation -Robert Conklin'

            quotes[28]='Life at any time can become difficult: life at any time can become easy.  It all depends upon how one adjusts oneself to life. -Morarji Desai'

            quotes[29]='What happens is not as important as how you react to what happens. -Thaddeus Golas'

            quotes[30]='To hell with circumstances; I create opportunities. -Bruce Lee'

            var whichquote=Math.floor(Math.random()*(quotes.length))
            alert(quotes[whichquote])  
          }else if(halfurl == 'type' || halfurl == 'Type'){
            if (document.all)
              var version=/MSIE \d+.\d+/
              if (!document.all)
                alert("You are using "+navigator.appName+" "+navigator.userAgent)
                else
                  alert("You are using "+navigator.appName+" "+navigator.appVersion.match(version))
                  }else if(halfurl == "history" || halfurl == "History"){
                    var hist = history.length
                    alert("You have been to " + hist + " sites!")
                  }else if(halfurl== "lv" || halfurl == "LV"){
                    var days = 999;
                    var lastvisit=new Object();
                    var firstvisitmsg="This is your first visit to this page. Welcome!"; 
                    lastvisit.subsequentvisitmsg="Welcome back visitor! Your last visit was on [displaydate]";

                    lastvisit.getCookie=function(Name){ 
                      var re=new RegExp(Name+"=[^;]+", "i"); 
                      if (document.cookie.match(re)) 
                        return document.cookie.match(re)[0].split("=")[1];
                      return''; 
                    }

                    lastvisit.setCookie=function(name, value, days){ 
                      var expireDate = new Date();

                      var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days));
                      document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
                    }

                    lastvisit.showmessage = function() {
                      var wh = new Date();
                      if (lastvisit.getCookie("visitc") == "") { 
                        lastvisit.setCookie("visitc", wh, days); 
                        alert(firstvisitmsg);
                      }

                      else {
                        var lv = lastvisit.getCookie("visitc");
                        var lvp = Date.parse(lv);
                        var now = new Date();
                        now.setTime(lvp);
                        var day = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
                        var month = new Array ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
                        var dd = now.getDate();
                        var dy = now.getDay();
                        dy = day[dy];
                        var mn = now.getMonth();
                        mn = month[mn];
                        yy = now.getFullYear();
                        var hh = now.getHours();
                        var ampm = "AM";
                        if (hh >= 12) {ampm = "PM"}
                        if (hh >12){hh = hh - 12};
                        if (hh == 0) {hh = 12}
                        if (hh < 10) {hh = "0" + hh};
                        var mins = now.getMinutes();
                        if (mins < 10) {mins = "0"+ mins}
                        var secs = now.getSeconds();
                        if (secs < 10) {secs = "0" + secs}
                        var dispDate = dy + ", " + mn + " " + dd + ", " + yy + " " + hh + ":" + mins + ":" + secs + " " + ampm
                        alert(lastvisit.subsequentvisitmsg.replace("\[displaydate\]", dispDate))
                      }

                      lastvisit.setCookie("visitc", wh, days);

                    }

                    lastvisit.showmessage();  
                  }else if(halfurl == "mr wilson" || halfurl == "Mr Wilson" || halfurl == "Mr.Wilson"){
                    alert("YAY!")  
                  }else{
                    var url = "http://www." + halfurl
                    window.open(url, "_blank") 
        }
      }