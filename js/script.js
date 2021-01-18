// ナビゲーションレスポンシブ　ボタン変化
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

// ナビゲーションレスポンシブ　表示
$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());
$(function(){
  $('.btn-trigger').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

// $(function(){
//   //よこすかぐらすマップ フェードイン
// $('#map').waypoint(function(){
//   if($('#map').css('visibility') == 'visible') {
//   }
//   else {
//     $('#map').css('visibility','visible');
//     $('#map').toggleClass('animated pulse');
//   }
// },{offset: '50%'}
// );
// });

// $(function(){
//   //VT フェードイン
// $('#vt').waypoint(function(){
//   if($('#vt').css('visibility') == 'visible') {
//   }
//   else {
//     $('#vt').css('visibility','visible');
//     $('#vt').toggleClass('animated fadeInLeft');
//   }
// },{offset: '80%'}
// );
// });

// $(function(){
//   //AR フェードイン
// $('#ar').waypoint(function(){
//   if($('#ar').css('visibility') == 'visible') {
//   }
//   else {
//     $('#ar').css('visibility','visible');
//     $('#ar').toggleClass('animated fadeInRight');
//   }
// },{offset: '50%'}
// );
// });

$(function(){
  //info フェードイン
$('.infoinner').waypoint(function(){
  if($('.infoinner').css('visibility') == 'visible') {
  }
  else {
    $('.infoinner').css('visibility','visible');
    $('.infoinner').toggleClass('animated fadeInLeft');
  }
},{offset: '50%'}
);
});

$(function(){
  //link フェードイン
$('#link').waypoint(function(){
  if($('#link').css('visibility') == 'visible') {
  }
  else {
    $('#link').css('visibility','visible');
    $('#link').toggleClass('animated fadeInRight');
  }
},{offset: '50%'}
);
});

$(".radio").on("click", function(){
  $('.radio').prop('checked', false);  //  全部のチェックを外す
  $(this).prop('checked', true);  //  押したやつだけチェックつける
});

$(".radio2").on("click", function(){
  $('.radio2').prop('checked', false);  //  全部のチェックを外す
  $(this).prop('checked', true);  //  押したやつだけチェックつける
});

