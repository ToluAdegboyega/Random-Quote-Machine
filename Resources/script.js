$(document).ready(function(){
  var colors = ["#2ecc71", "#3498db", "#8e44ad", "#2c3e50", "#e74c3c", "#d35400", "#7f8c8d", "#c0392b", "#34495e", "#16a085", "#27ae60"];
  var quotes = [
    {
      word : "Please do not twist yourself into shapes to please. Don’t do it. If someone likes that version of you, that version of you that is false and holds back, then they actually just like that twisted shape, and not you. And the world is such a gloriously multifaceted, diverse place that there are people in the world who will like you, the real you, as you are.",
      name : "Chimamnda Adichie"
    },
    {
      word : "At the end of the day, we can endure much more than we think we can.",
      name : "Frida Kahlo"
    },
    {
      word : "Remember, no one can make you feel inferior without your consent.",
      name : "Eleanor Roosevelt"
    },
    {
      word : "We must not allow other people’s limited perceptions to define us.",
      name : "Virginia Satir"
    },
    {
      word : "Always aim high, work hard, and care deeply about what you believe in. And, when you stumble, keep faith. And, when you’re knocked down, get right back up and never listen to anyone who says you can’t or shouldn’t go on.",
      name : "Hilary Clinton"
    },
    {
      word : "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.",
      name : "Rosa Parks"
    },
    {
      word : "If you’re always trying to be normal, you will never know how amazing you can be.",
      name : "Maya Angelou"
    },
    {
      word : "There’s power in allowing yourself to be known and heard, in owning your unique story, in using your authentic voice.",
      name : "Michelle Obama"
    },
    {
      word : "Fight for the things that you care about, but do it in a way that will lead others to join you.",
      name : "Ruth Bader Ginsburg"
    },
    {
      word : "Passion is the log that keeps the fire of purpose blazing",
      name : "Oprah Winfrey"
    },
    {
      word : "Aging is not “lost youth” but a new stage of opportunity and strength.",
      name : "Betty Friedan"
    }
  ];
  
  $("#new-quote").click(function(){
    var random = Math.floor((Math.random() * quotes.length) + 1); 
    var randomColor = Math.floor((Math.random() * colors.length) + 1); 
    
    var tweetText = "https://twitter.com/intent/tweet?hashtags=quotes&text=\"";
    
    tweetText += quotes[random].word;
    tweetText += "\" ";
    tweetText += quotes[random].name;
    
    $("#text").html("\""+quotes[random].word+"\"");
    $("#author").html("- "+quotes[random].name);
    
    $("#tweet-quote").attr("href", tweetText);
    
    $("body, #tweet-quote, #new-quote").css("backgroundColor",colors[randomColor]);
    $("#text, #author").css("color", colors[randomColor]);
  });
  
});






