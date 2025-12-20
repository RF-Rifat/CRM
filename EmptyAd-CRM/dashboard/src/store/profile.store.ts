import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Profile, ProfileSettings } from '~/models/Profile'
import ProfileService from '~/services/profile.service'

export const useProfileStore = defineStore('Profile', () => {
  const userProfile = ref<Profile>({} as Profile)
  const userSettings = ref<ProfileSettings>({} as ProfileSettings)
  const isLoading = ref(false)

  async function loadUserProfile() {
    isLoading.value = true

    try {
      const profile = await ProfileService.getUserProfile()
      userProfile.value = profile
    } finally {
      isLoading.value = false
    }
  }

  async function loadSettings() {
    const settings = await ProfileService.getUserSettings()
    userSettings.value = settings
  }

  async function saveProfile() {
    isLoading.value = true
    try {
      await ProfileService.updateMyProfile({
        phone: userProfile.value.phone,
        location: userProfile.value.location,
        companyBio: userProfile.value.bio,
      })
    } finally {
      isLoading.value = false
    }
  }

  async function changePassword(oldPassword: string, newPassword: string) {
    isLoading.value = true
    try {
      return await ProfileService.changeMyPassword({
        oldPassword,
        newPassword,
      })
    } finally {
      isLoading.value = false
    }
  }

  return {
    userProfile,
    loadUserProfile,
    isLoading,
    loadSettings,
    userSettings,
    saveProfile,
    changePassword,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProfileStore, import.meta.hot))
