import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className=' bg-qverylitegray font-lato'>
          <Main />
          <NextScript />
          <div id='modal-root'></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument