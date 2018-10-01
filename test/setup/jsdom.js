import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const reactBundle = fs.readFileSync(path.resolve(__dirname, '../../node_modules/react/umd/react.production.min.js'), 'utf8');
const reactDomBundle = fs.readFileSync(path.resolve(__dirname, '../../node_modules/react-dom/umd/react-dom.production.min.js'), 'utf8');
const bundle = fs.readFileSync(`${__dirname}/../../public/app.bundle.js`, 'utf8');

const markup = `
<body>
  <div id="app"></div>
</body>
`;

export default async function buildJSDom() {
  const dom = new JSDOM(markup, { runScripts: 'outside-only' });

  dom.window.requestAnimationFrame = () => {};
  dom.window.cancelAnimationFrame = () => {};

  dom.window.eval(reactBundle);
  dom.window.eval(reactDomBundle);
  dom.window.eval(bundle);

  return {
    dom
  };
}