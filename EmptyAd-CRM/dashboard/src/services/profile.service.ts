import { ApiService } from '~/common/api/api-service'
import type { Profile, ProfileSettings } from '~/models/Profile'

const authApi = new ApiService('auth')
const usersApi = new ApiService('users')
class ProfileService {
  async getUserProfile(): Promise<Profile> {
    const envelope = await authApi.get<{
      data: { sub: number; email: string; role: string }
    }>('profile')
    const p = envelope.data
    return {
      id: p.sub,
      username: p.email,
      email: p.email,
      firstName: '',
      lastName: '',
      role: p.role,
      location: '',
      socials: [],
      avatar: '',
      bio: '',
      phone: '',
      address: { country: '', city: '', postalCode: '' },
    }
  }

  async updateMyProfile(data: {
    phone?: string
    location?: string
    companyBio?: string
  }): Promise<boolean> {
    const r = await usersApi.patch<{ data: unknown }>('me/profile', data)
    return !!r.data
  }

  async changeMyPassword(data: {
    oldPassword: string
    newPassword: string
  }): Promise<boolean> {
    const r = await usersApi.patch<{ data: { ok: boolean } }>(
      'me/password',
      data,
    )
    return !!r.data?.ok
  }

  async getUserSettings(): Promise<ProfileSettings> {
    const response = { notifications: [] }
    return response as ProfileSettings
  }
}
export default new ProfileService()
