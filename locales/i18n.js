import uk from './uk.json'

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'uk',
    messages: {
      uk
    }
  }
})