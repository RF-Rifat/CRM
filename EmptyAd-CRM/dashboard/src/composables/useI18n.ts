export function useI18n() {
  function t(key: string) {
    return key
  }
  const availableLocales = ['en']
  return { t, availableLocales }
}