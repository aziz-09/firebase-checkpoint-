function makebold()
{ if(document.getElementById("txt").style.fontWeight=="normal")
document.getElementById("txt").style.fontWeight="bold"
else{ document.getElementById("txt").style.fontWeight="normal"}
}

function makeitalic(){
 if(document.getElementById("txt").style.fontStyle=="normal")
 document.getElementById("txt").style.fontStyle="italic"
 else{document.getElementById("txt").style.fontStyle="normal"}
}

function makeunder(){
    if(document.getElementById("txt").style.textDecoration=="none")
    document.getElementById("txt").style.textDecoration="underline"
    else{document.getElementById("txt").style.textDecoration="none"}

}

function changeFontSize(fontSize){
    document.getElementById("txt").style.fontSize=fontSize.value+"px"
}
function changeFontFamily(fontFamily){
    document.getElementById("txt").style.fontFamily=fontFamily.value
}
$(".ttimg").hover(function(){
    $(this).css("opacity",0.5);
    $(this).find("button").show();
},function(){
    $(this).css("opacity",1);
    $(this).find("button").hide();
})


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMuJpsMrKer-Qg-BZB6YHIN3cduBhTm44",
    authDomain: "fir-check-f0cd4.firebaseapp.com",
    databaseURL: "https://fir-check-f0cd4.firebaseio.com",
    projectId: "fir-check-f0cd4",
    storageBucket: "fir-check-f0cd4.appspot.com",
    messagingSenderId: "1011873479154",
    appId: "1:1011873479154:web:ea573b0a0d132ce85b936b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database().ref('contact')


  $('#submit').click(function(){
      var name = $('#name').val()
      var email = $("#emaill").val()
      var tel = $("#number").val()
      var track = $("#track").val()

      var newMsg = db.push();
      newMsg.set({
          name:name,
          email:email,
          phone:tel,
          track:track,
      })
  })




 

  