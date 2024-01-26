// $(document).ready(function(){

//   // $('#item_wrap li').each(function(index){
//   //   $(this).attr('data-a',index);
//   // });

//   // $('#item_wrap li').click(function(){
//   //     var i = $(this).attr('data-a');
//   //     console.log(i);
//   // });


//   // $('#item_wrap li').click(function(){
    
//   //   var i = 0;
//   //   if(i = 0){
//   //     $('#main_img_wrap').css({
//   //       opacity: '1',
//   //     });
//   //   }

//   // });

// });//end

const itemLiEl = document.querySelectorAll('.item');

const itemHandler = () => {
  console.log(itemHandler);
}

for(let i = 0; i < itemLiEl.length; i++){
  itemLiEl[i].addEventListener('click',itemHandler);
}

