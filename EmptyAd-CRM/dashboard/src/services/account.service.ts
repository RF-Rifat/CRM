import { ApiService } from '~/common/api/api-service'
import type {
  ForgetPasswordResponse,
  LoginResponse,
  LoginViewModel,
} from '~/models/Account'

const authApi = new ApiService('auth')
class AccountService {
  async login(loginInfo: LoginViewModel): Promise<LoginResponse> {
    const payload = { email: loginInfo.email, password: loginInfo.password }
    const result = await authApi.post<{ data: { access_token: string } }>(
      'login',
      payload,
    )
    return { access: result.data.access_token, refresh: '' }
  }

  async forgetPassword(
    _forgetPasswordModel: LoginViewModel,
  ): Promise<ForgetPasswordResponse> {
    return { isSucceed: false }
  }
}

export default new AccountService()
