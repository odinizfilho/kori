import { h, Component } from 'preact';
import Item from './Item';

export default class TopItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
  }

  sortByScore() {
    const items = [...this.state.items]; // Crie uma cópia do array de items
    items.sort((a, b) => b.score - a.score);
    this.setState({ items });
  }

  render({ items }) {
    return (
      <div>
        <SortButton sortByScore={() => this.sortByScore()} />
        <div class="top-stories space-y-4">
          {items.map((item, i) => (
            <Item key={item.id} rank={i} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const SortButton = ({ sortByScore }) => (
<div class="topitems mb-4"> 
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sortByScore}>
      Sort!
    </button>
  </div>
);
