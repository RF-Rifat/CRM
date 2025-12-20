<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const store = useProfileStore()
const { userProfile, isLoading } = storeToRefs(store)

async function editProfile() {
  await store.saveProfile()
  useNotifyStore().success('Profile updated')
}
</script>

<template>
  <section>
    <div class="p-8 w-full md:w-3/4 mx-auto">
      <n-form size="large" :model="userProfile" @submit.prevent="editProfile()">
        <n-grid :span="24" :x-gap="42" :y-gap="18">
          <n-form-item-gi :span="24" class="mb-1" path="email" :label="t('profile.email')">
            <n-input id="email" v-model:value="userProfile.email" type="email" disabled />
          </n-form-item-gi>

          <n-form-item-gi :span="12" class="mb-1" path="location" :label="t('profile.location')">
            <n-input
              id="location"
              v-model:value="userProfile.location" type="text"
              :placeholder="t('profile.location')"
            />
          </n-form-item-gi>

          <n-form-item-gi :span="12" class="mb-1" path="phone" :label="t('profile.phone')">
            <n-input
              id="phone"
              v-model:value="userProfile.phone" type="text"
              :placeholder="t('profile.phone')"
            />
          </n-form-item-gi>

          <n-form-item-gi :span="24" class="mb-1" path="bio" label="Bio">
            <n-input
              id="bio"
              v-model:value="userProfile.bio"
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 6 }"
              placeholder="Bio"
            />
          </n-form-item-gi>

          <n-gi :span="24">
            <div flex justify-start>
              <n-button attr-type="submit" size="large" type="primary" :loading="isLoading">
                {{ t('profile.save') }}
              </n-button>
            </div>
          </n-gi>
        </n-grid>
      </n-form>
    </div>
  </section>
</template>
