import "./global.scss"
import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { colors } from "../theme"

delete Wordpress2016.googleFonts
Wordpress2016.googleFonts = [
  {
    name: "DM Sans",
    styles: ["400", "400i", "500", "700", "700i", "900", "900i"],
  },
]

Wordpress2016.headerFontFamily = ["DM Sans", "sans-serif"]
Wordpress2016.bodyFontFamily = ["DM Sans", "sans-serif"]
Wordpress2016.headerWeight = 700
Wordpress2016.bodyColor = colors.white;
Wordpress2016.bgColor = "black"

Wordpress2016.overrideThemeStyles = () => ({
  body: {
    background: colors.navy,
  },
  h1: {
    fontFamily: "inherit",
    color: colors.green,
  },
  "h3 a": {
    color: colors.green,
  },
  h2: {
    color: colors.yellow,
  },
  h4: {
    textTransform: "none",
    letterSpacing: "default",
    "font-weight": "bold",
  },
  a: {
    color: colors.blue,
  },
  blockquote: {
    "font-size": "16px",
    color: colors.lightGrey,
    "border-left-color": colors.yellow,
    "border-left-width": "4px",
    "margin-left": 0,
  },
  "ul,ol": {
    marginLeft: "rhythm(1)",
  },
})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
