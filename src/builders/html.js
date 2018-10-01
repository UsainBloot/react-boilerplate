export default function html({ body, title }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script crossorigin src="https://unpkg.com/react@16.15.2/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16.15.2/umd/react-dom.production.min.js"></script>
      </head>
      <body>
        <div id="app">${body}</div>
        <script type="text/javascript" src="/app.bundle.js"></script>
      </body>
    </html>
  `;
}