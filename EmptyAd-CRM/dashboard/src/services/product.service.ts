import { ApiService } from '~/common/api/api-service'
import type { Product } from '~/models/Product'
import GenericService from './generic.service'

const apiService = new ApiService('product')
class ProductService extends GenericService<Product, number> {
  constructor() {
    super(apiService)
  }

  async createFormData(formData: FormData): Promise<Product> {
    const response = await apiService.postFormData<Product>('', formData)
    return response
  }
}
export default new ProductService()
