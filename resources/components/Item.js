import { h, Component } from 'preact';

let getDomain = (url) =>
  url && (url.split('/')[url.indexOf('://') > -1 ? 2 : 0]).replace(/^www\./, '') || null;

export default class Item extends Component {
  render({ item }) {
    if (!item) {
      return null; // Returns null if item is undefined
    }

    const { score, descendants, url, title } = item;
    const domain = getDomain(url);

    return (
      <div class="item">
        <div class="vitals flex items-center mb-2">
          <div class="score mr-2">{score}</div>
          <div class="comments">
            <a
              target="_blank"
              href={`https://news.ycombinator.com/item?id=${item.id}`}
            >
              {descendants}
            </a>
          </div>
        </div>
        <div class="content">
          <div class="title">
            <a target="_blank" href={url}>
              {title}
            </a>
            <span class="domain text-gray-500 ml-1">({domain})</span>
          </div>
        </div>
      </div>
    );
  }
}
