// TODO
// Create Grocery List component
var App = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={groceryItems}/>
  </div>
)

var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
  );
}

class GroceryListItem extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      done: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onListItemHover.bind(this)}
      onMouseLeave={this.onListItemHover.bind(this)}>
        {this.props.item}</li>
    )
  }
}

var groceryItems = ['Cucumbers', 'Kale'];

ReactDOM.render(<App />, document.getElementById('app'));