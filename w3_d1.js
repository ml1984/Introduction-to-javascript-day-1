$(document).ready(function(){
  function newCounter() {
    var counter = 0;
    return {
      more: function () {
      counter += 1;
      return counter;
    },
      less: function() {
        counter -= 1;
        return counter;
      },
      restart: function() {
        // counter === 0;
        return 0;
      }
  }
}
  var btn = $('#inc_btn');
  var result = $('#counter');
  var dec =$('#dec_btn');
  var dec_result =$('#counter');
  var reset =$('#reset_btn');
  var reset_result =$('#counter');
  var add = $('#add_Counter');
  var add_tb =$("#tb_Counter");
  var cnt = newCounter();

  btn.click(function(event){
      result.html(cnt.more());
    })
  dec.click(function(event){
      dec_result.html(cnt.less());
    })
  reset.click(function(event){
      reset_result.html(cnt.restart());
    })
  add.click(function(event){
        add_tb.html();
    })




});
