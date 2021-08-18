//////// Button //////
// var animateButton = function(e) {

//   e.preventDefault;
//   //reset animation
//   e.target.classList.remove('animate');
  
//   e.target.classList.add('animate');
//   setTimeout(function(){
//     e.target.classList.remove('animate');
//   },700);
// };

// var bubblyButtons = document.getElementsByClassName("bubbly-button");

// for (var i = 0; i < bubblyButtons.length; i++) {
//   bubblyButtons[i].addEventListener('click', animateButton, false);
// }
//////////////////
new Vue({
  el: '#click',
  data: {
    show: false,
    heart: false,          
    source:'',
    image: false
  },
  methods: {
    clickMe: function() {
      this.show = true;
      this.heart = true;
      var self = this;
      setTimeout(function(){
      
       var answer = prompt('Do You Love Me? Yes or No?');
        if(answer == 'yes' || answer == 'Yes') {
          self.source = 'https://image.flaticon.com/icons/svg/1530/1530831.svg';
          self.image = true;
        } else if(answer == 'no' || answer == 'No') {
          self.source = 'https://image.flaticon.com/icons/svg/677/677778.svg';
   self.image = true;
        }
      }, 2000);
    }
  }
});