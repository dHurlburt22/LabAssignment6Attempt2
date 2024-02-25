function buttonClick(){
    alert("hiiiii");
  }

    window.onload = function() {

    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
      buttonClick();
  });
};