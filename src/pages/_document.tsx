import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-zink-200 text-zink-950 selection:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
