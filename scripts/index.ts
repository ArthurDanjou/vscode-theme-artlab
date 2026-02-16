import fs from 'fs-extra'
import { getXtermTheme } from './extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/artlab-light.json',
      getTheme({
        color: 'light',
        name: 'ArtLab Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/artlab-dark.json',
      getTheme({
        color: 'dark',
        name: 'ArtLab Dark',
      }),
      { spaces: 2 },
    ),
  ]))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-vitesse-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Vitesse Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-black.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
