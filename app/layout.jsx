import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import "../globals.css";

export const metadata = {
  title: "Longhorn LoL Docs",
  description: "Documentation for projects related to Longhorn LoL",
};

// const banner = <Banner storageKey="some-key">Banner Text Here 🎉</Banner>;
const navbar = (
  <Navbar logo={<Image src="/club-logo.png" alt="" width={40} height={40} />} />
);
// const footer = <Footer>MIT {new Date().getFullYear()} © Longhorn LoL</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Kickblip/longhorn-lol-docs/blob/main"
          // footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
