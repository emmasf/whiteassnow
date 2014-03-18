<!-- Page slider, maybeee --->
<script>
function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}

  $(document).ready(function(){
    $(".next").click(function(){
      $(".page").animate({right:768}, 500);    
      });
    $(".previous").click(function(){
      $(".page").animate({left:768}, 500);    
      });
  });
</script>

<!-- Page transition / modal fader  -->
 <script type="text/javascript">

 function delayModal (URL) {
  setTimeout( function() { window.location = URL }, 500 );
  }

 $(document).ready(function() { 
     $("#coverup").css("display","none");
     $(".page").fadeIn(0); 
     $("a.center").click(function(event){
         $("#coverup").fadeIn(500);  
      });         
 });
 </script>

<!-- Icon Fact Toggle -->
<script>
  $( "#icon-button" ).click(function() {
    $( ".hideshow" ).toggle();
  });
</script>

<!-- Factoid Toggle Bar -->
<script>
  $(document).ready(function(){
    $("#factoid").click(function(){
      if($(this).hasClass('hide')) {
        $(this).animate({height:400},200).removeClass('hide');
      } else { 
        $(this).animate({height:32},200).addClass('hide');
      }
    });
  });
</script>
 
<!-- Modal -->
<!--
<script src="scripts/jquery.modal.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  $(function() {
    $('a[href="#story-modal-11"]').click(function(event) {
      event.preventDefault();
      $(this).modal({
      });
    });
  });
</script> 
-->