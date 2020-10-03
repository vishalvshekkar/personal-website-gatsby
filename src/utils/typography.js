import Typography from "typography"
import githubTheme from 'typography-theme-github'

githubTheme.baseFontSize = '22px'

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    color: 'var(--textNormal)'
  },
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  blockquote: {
    color: 'var(--textSubTitle)',
  },
  code: {
    fontFamily: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
  },
  pre: {
    fontFamily: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
  },
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
