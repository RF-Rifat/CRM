import { ApiService } from '~/common/api/api-service'
import type { Brand } from '~/models/Brand'
import GenericService from './generic.service'

const apiService = new ApiService('brand')
class BrandService extends GenericService<Brand, string> {
  constructor() {
    super(apiService)
  }

  async createFormData(formData: FormData): Promise<Brand> {
    const response = await apiService.postFormData<Brand>('', formData)
    return response
  }
}
export default new BrandService()
