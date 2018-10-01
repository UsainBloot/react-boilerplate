import ReactDOMServer from 'react-dom/server';
import buildHTML from '../builders/html';
import App from '../containers/App';

export default function requestHandler(req, res) {
  const title = 'React Boilerplate';
  const body = ReactDOMServer.renderToString(<App />);
  const html = buildHTML({ body, title });

  res.send(html);
}