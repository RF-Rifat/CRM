import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PagedAndSortedRequest } from '~/models/PagedAndSortedRequest'
import type { Product, ProductCreateModel } from '~/models/Product'
import productService from '~/services/product.service'

export const useProductStore = defineStore('Product', () => {
  const products = ref<Product[]>([])
  const trendingProducts = ref<Product[]>([])
  const productItem = ref<Product>()
  const isLoading = ref(false)
  const isSaving = ref(false)

  async function getProducts(options: PagedAndSortedRequest) {
    isLoading.value = true
    try {
      console.log('Getting products with options:', options)
      const response = await productService.getPagedList(options)
      console.log('Products response:', response)
      console.log('Response items:', response.items)
      console.log('Response totalCount:', response.totalCount)

      if (response.items && Array.isArray(response.items)) {
        products.value = response.items
        console.log('Products array set:', products.value)
        console.log('Products length:', products.value.length)
      } else {
        console.error('Response items is not an array:', response.items)
        products.value = []
      }

      if (response.totalCount) {
        options.pageCount = Math.ceil(
          response.totalCount / options.itemsPerPage!,
        )
      }

      console.log('Final products state:', products.value)
    } catch (error) {
      console.error('Error loading products:', error)
      products.value = []
    } finally {
      isLoading.value = false
    }
  }

  async function getTrendingProducts(itemsPerPage = 5) {
    isLoading.value = true
    try {
      const response = await productService.getPagedList({
        page: 1,
        itemsPerPage,
      })
      trendingProducts.value = response.items
    } finally {
      isLoading.value = false
    }
  }

  async function createProduct(product: ProductCreateModel) {
    isLoading.value = true
    try {
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('name', product.name)
      formData.append('code', product.code)
      formData.append('description', product.description)
      formData.append('price', product.price.toString())
      formData.append('bestPrice', product.bestPrice.toString())
      formData.append('stock', product.stock.toString())
      formData.append('status', product.status.toString())
      formData.append('categoryId', product.categoryId.toString())
      formData.append('brandId', product.brandId.toString())
      formData.append('tags', JSON.stringify(product.tags))

      if (product.image) {
        formData.append('image', product.image)
      }

      console.log('FormData created:', formData)
      console.log('Product data:', product)

      await productService.createFormData(formData)
    } finally {
      isLoading.value = false
    }
  }

  async function deleteProduct(id: number) {
    await productService.delete(id)
  }

  function editProduct() {}

  return {
    isLoading,
    isSaving,
    products,
    trendingProducts,
    productItem,
    getProducts,
    createProduct,
    deleteProduct,
    editProduct,
    getTrendingProducts,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
