/* eslint-disable import/no-anonymous-default-export */
export default {
  projectLink: 'https://github.com/kdy1/devmap',
  docsRepositoryBase: 'https://github.com/kdy1/devmap/blob/main',
  titleSuffix: ' – Dev Map',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © kdy1.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>개발자 로드맵 </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
}