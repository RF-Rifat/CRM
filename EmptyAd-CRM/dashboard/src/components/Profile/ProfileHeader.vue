<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useProfileStore()
const { userProfile } = storeToRefs(store)

const displayName = computed(() => {
  const name = `${userProfile.value.firstName ?? ''} ${
    userProfile.value.lastName ?? ''
  }`.trim()
  return name || userProfile.value.email || 'User'
})
</script>

<template>
  <div class="profile-header flex flex-col items-center pb-8">
    <NAvatar class="my-3" round :size="75" :src="userProfile.avatar" alt="avatar" />
    <div class="profile-section__info">
      <h4 text-center font-bold text-5>
        {{ displayName }}
      </h4>
      <div class="flex items-center justify-center mt-1">
        <NTag type="success" :bordered="false" size="small">{{ userProfile.role }}</NTag>
      </div>
      <p font-light text-center mt-1>
        {{ userProfile.location }}
      </p>
    </div>
  </div>
</template>
