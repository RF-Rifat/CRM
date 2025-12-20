import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLayoutStore = defineStore(
  'layout',
  () => {
    // i18n removed: fixed English locale
    const collapsed = ref(false)
    const forceCollapsed = ref(false)
    const mobileMenuClosed = ref(true)
    const mobileMode = ref(false)
    const activeLanguage = ref('en')
    const isRtl = ref(false)
    const themeColor = ref('#00ad4c')
    const isDark = ref(false)
    const isWelcomeShown = ref(false)
    const isFluid = ref(false)
    const flatDesign = ref(true)

    const dialogPlacement = computed(() => (isRtl.value ? 'left' : 'right'))

    watch(
      () => useWindowSize().width.value,
      (newValue: number) => {
        forceCollapsed.value = newValue <= 1024
        mobileMode.value = newValue < 600
      },
      { immediate: true },
    )

    function toggleSidebar() {
      if (mobileMode.value) mobileMenuClosed.value = false
      else collapsed.value = !collapsed.value

      window.umami?.track('ToggleSidebar')
    }

    function closeSidebar() {
      mobileMenuClosed.value = true
    }

    function setDarkTheme(state: boolean) {
      isDark.value = state
    }

    function toggleTheme() {
      isDark.value = !isDark.value
      window.umami?.track('ToggleDarkMode', {
        theme: isDark.value ? 'Dark' : 'Light',
      })
    }

    function changeLanguage(lang: string) {
      activeLanguage.value = 'en'
      isRtl.value = false
      window.umami?.track('LanguageChange', { language: 'en' })
      showWelcome()
    }

    function setThemeColor(color: string) {
      themeColor.value = color
      window.umami?.track('ChangeTheme', { color })
    }

    function showWelcome() {
      useNotifyStore().clear()
      setTimeout(() => {
        useNotifyStore().notify({ body: 'Welcome', type: 'success', duration: 10000 })
        isWelcomeShown.value = true
      }, 1500)
    }

    function resetWelcomeState() {
      isWelcomeShown.value = false
    }

    function $reset() {
      mobileMode.value = false
    }

    return {
      collapsed,
      forceCollapsed,
      mobileMode,
      toggleSidebar,
      toggleTheme,
      isRtl,
      activeLanguage,
      changeLanguage,
      isDark,
      setThemeColor,
      themeColor,
      dialogPlacement,
      isWelcomeShown,
      showWelcome,
      resetWelcomeState,
      closeSidebar,
      $reset,
      mobileMenuClosed,
      isFluid,
      flatDesign,
      setDarkTheme,
    }
  },
  {
    persist: {
      omit: ['mobileMode', 'forceCollapsed'],
    },
  },
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
