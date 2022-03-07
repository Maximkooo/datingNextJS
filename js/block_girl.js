'use strict';
/*
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#block_girl');
ReactDOM.render(e(LikeButton), domContainer);
*/
/*
document.body.onload = addElement;
  var my_div = null;
  var newDiv = null;

function addElement() {


  var newDiv = document.createElement("div");
      
  newDiv.classList.add('test');
  console.log(newDiv)
  // Добавляем только что созданный элемент в дерево DOM

  my_div = document.getElementById("block_girl");
  document.body.insertBefore(newDiv, my_div);
}
*/





const list =
  React.createElement('div', {className:'col-sm-12 col-md-4 col-lg-3 mt-20'},
    React.createElement('a', {className:'link-post-classic', href:'profile.html'},
      React.createElement('div', {className:'row'},
        React.createElement('div', {className:'col-6 col-md-12 pad-r-0'},
          React.createElement('article', {className:'post-classic post-classic-figure'},
            React.createElement('img', {className:'post-classic-image', src:"images/main/user-1.png", width:"339", height:"251"},
            ),),),
            React.createElement('div', {className:'col-6 col-md-12 post-wrapper'},
              React.createElement('div', {className:'post-classic-options-first'},
                React.createElement('div', {className:'w-50'},
                React.createElement('p', {className:'post-classic-height'}, 'Height'),
                React.createElement('p', {className:'post-classic-height-value'}, '170 cm'),
                ),),),
            ),),);

                   

ReactDOM.render(
  list,
  document.getElementById('block_girl')
);
