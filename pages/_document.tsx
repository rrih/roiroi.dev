import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag';

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang='ja'>
                <Head>
                    {/* Google Analytics */}
                    {GA_TRACKING_ID && (
                        <>
                        <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                        <script
                            dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });`,
                            }}
                        />
                        </>
                    )}
                    <link rel="shortcut icon" href="https://github.com/rrih.png" />
                    <style>{`html,body { margin: 0; padding: 0; }`}</style>
                </Head>
                <body style={{fontFamily: "MS Pゴシック"}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;