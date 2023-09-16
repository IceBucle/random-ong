import { useEffect } from 'react'

export const Colors = () => {
  // set theme when visitor returns
  const setTheme = (colorThemes) => {
    let activeTheme = window.localStorage.getItem('theme')
    if (activeTheme === null) {
      activeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true
      }
    })
    // fallback for no :has() support
    document.documentElement.className = activeTheme
  }

  // store theme and add click
  const storeTheme = (colorThemes) => {
    colorThemes.forEach((themeOption) => {
      themeOption.addEventListener('click', () => {
        window.localStorage.setItem('theme', themeOption.id)
        // fallback for no :has() support
        document.documentElement.className = themeOption.id
      })
    })
  }

  // like ngOnInit
  useEffect(() => {
    const colorThemes = document.querySelectorAll('[name="theme"]')
    setTheme(colorThemes)
    storeTheme(colorThemes)
  })

  return (
    <form className='color-picker'>
      <fieldset>
        <legend className='visually-hidden'>Pick a color scheme</legend>
        <label htmlFor='light' className='visually-hidden'>
          Light
        </label>
        <input type='radio' id='light' name='theme' />

        <label htmlFor='pink' className='visually-hidden'>
          Pink theme
        </label>
        <input type='radio' id='pink' name='theme' />

        <label htmlFor='blue' className='visually-hidden'>
          Blue theme
        </label>
        <input type='radio' id='blue' name='theme' />

        <label htmlFor='green' className='visually-hidden'>
          Green theme
        </label>
        <input type='radio' id='green' name='theme' />

        <label htmlFor='dark' className='visually-hidden'>
          Dark theme
        </label>
        <input type='radio' id='dark' name='theme' />
      </fieldset>
    </form>
  )
}
