import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Account, LoginViewModel } from '~/models/Account'
import AccountService from '~/services/account.service'

export const useAccountStore = defineStore(
  'account',
  () => {
    const user = ref<Account | null>()
    const isLoading = ref(false)
    const loginFailed = ref(false)

    async function login(loginInfo: LoginViewModel): Promise<boolean> {
      isLoading.value = true
      try {
        const response = await AccountService.login(loginInfo)
        if (response.access) {
          user.value = {
            token: response.access,
          }
          localStorage.setItem(
            'user',
            JSON.stringify({
              accessToken: response.access,
              refreshToken: response.refresh,
            }),
          )
          return true
        }

        return false
      } catch (error) {
        console.error('Login error:', error)
        return false
      } finally {
        isLoading.value = false
      }
    }

    function logout() {
      user.value = null
    }

    async function register(_registerInfo: any) {
      return false
    }

    function resetPassword(forgetInfo: any) {
      return Promise.resolve(forgetInfo)
    }

    function isAuthenticated() {
      return (user.value?.token && user.value.token !== null) ?? false
    }

    return {
      user,
      isLoading,
      loginFailed,
      login,
      logout,
      isAuthenticated,
      resetPassword,
      register,
    }
  },
  {
    persist: {
      omit: ['isLoading', 'loginFailed'],
    },
  },
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAccountStore, import.meta.hot))
