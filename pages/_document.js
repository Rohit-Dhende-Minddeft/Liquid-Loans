import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
 
                <body>
                
                <noscript
                  dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54H8XPB"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
                    `,
                  }}
                />

                </body>

          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
