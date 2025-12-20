<script setup lang='ts'>
import { Add24Filled as PlusIcon } from '@vicons/fluent'
import type { FormInst, FormRules } from 'naive-ui/es/form'
import type { TreeSelectOption } from 'naive-ui/es/tree-select/src/interface'
import type { UploadFileInfo } from 'naive-ui/es/upload'
import { storeToRefs } from 'pinia'
import type { Brand } from '~/models/Brand'
import type { Category } from '~/models/Category'
import type { ProductCreateModel } from '~/models/Product'

const emits = defineEmits(['close'])
const { t } = useI18n()
const productStore = useProductStore()
const { isLoading } = storeToRefs(productStore)
const formRef = ref<FormInst | null>(null)

const previewImageUrl = ref('')
const showModal = ref(false)
const showModalRef = ref(false)
const previewImageUrlRef = ref('')
const productItem = ref<ProductCreateModel>({
  name: '',
  code: '',
  description: '',
  price: 0,
  bestPrice: 0,
  stock: true,
  status: 1,
  categoryId: '',
  brandId: '',
  tags: [],
  image: null as any,
})

// Debug logging
watch(
  productItem,
  (newVal) => {
    console.log('Product item changed:', newVal)
  },
  { deep: true },
)

const categoryStore = useCategoryStore()
const brandStore = useBrandStore()
const { categories } = storeToRefs(categoryStore)
const { brands } = storeToRefs(brandStore)
const categoryOptions = ref<any[]>([])
const brandOptions = ref<any[]>([])

const rules: FormRules = {
  name: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: t('products.validations.nameRequired'),
      validator: (rule: any, value: any) => {
        if (!value || value.trim() === '') {
          return new Error(t('products.validations.nameRequired'))
        }
        return true
      },
    },
  ],
  code: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: t('products.validations.codeRequired'),
      validator: (rule: any, value: any) => {
        if (!value || value.trim() === '') {
          return new Error(t('products.validations.codeRequired'))
        }
        return true
      },
    },
  ],
  price: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: t('products.validations.priceRequired'),
      validator: (rule: any, value: any) => {
        if (value === null || value === undefined || value <= 0) {
          return new Error(t('products.validations.priceRequired'))
        }
        return true
      },
    },
  ],
  categoryId: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: t('products.validations.categoryRequired'),
      validator: (rule: any, value: any) => {
        if (!value || value === '') {
          return new Error(t('products.validations.categoryRequired'))
        }
        return true
      },
    },
  ],
  brandId: [
    {
      required: true,
      trigger: ['blur', 'change'],
      message: t('products.validations.brandRequired'),
      validator: (rule: any, value: any) => {
        if (!value || value === '') {
          return new Error(t('products.validations.brandRequired'))
        }
        return true
      },
    },
  ],
  // image: [
  //   {
  //     required: true,
  //     trigger: ['change'],
  //     message: t('products.validations.imageRequired'),
  //   },
  // ],
}

// Debug logging for validation
function logValidationErrors(errors: any) {
  console.log('Validation errors:', errors)
  console.log('Current product item:', productItem.value)
}

// Test function to verify form data
function testFormData() {
  console.log('=== TESTING FORM DATA ===')
  console.log('Product item:', productItem.value)
  console.log('Product item type:', typeof productItem.value)
  console.log('Product item keys:', Object.keys(productItem.value))
  console.log('Name:', productItem.value.name)
  console.log('Price:', productItem.value.price)
  console.log('Category ID:', productItem.value.categoryId)
  console.log('Brand ID:', productItem.value.brandId)
}

onMounted(async () => {
  await categoryStore.getCategories()
  await brandStore.getBrands()
  categoryOptions.value = categories.value.map(mapCategoryToOptions)
  brandOptions.value = brands.value.map(mapBrandToOptions)
})

function mapCategoryToOptions(item: Category): TreeSelectOption {
  return {
    key: item.id,
    label: item.name,
    children: item.children?.map(mapCategoryToOptions),
  }
}

function mapBrandToOptions(item: Brand) {
  return {
    value: item.id,
    label: item.name,
  }
}

function handlePreview(file: UploadFileInfo) {
  const { url } = file
  previewImageUrlRef.value = url as string
  showModalRef.value = true
}

async function createProduct() {
  console.log('=== PRODUCT CREATION DEBUG ===')
  console.log(
    'Product item before validation:',
    JSON.stringify(productItem.value, null, 2),
  )
  console.log('Form ref exists:', !!formRef.value)

  // Manual validation check
  const hasName = productItem.value.name && productItem.value.name.trim() !== ''
  const hasCode = productItem.value.code && productItem.value.code.trim() !== ''
  const hasPrice =
    productItem.value.price !== null &&
    productItem.value.price !== undefined &&
    productItem.value.price > 0
  const hasCategory =
    productItem.value.categoryId && productItem.value.categoryId !== ''
  const hasBrand = productItem.value.brandId && productItem.value.brandId !== ''

  console.log('Manual validation results:')
  console.log('- Name valid:', hasName, 'Value:', productItem.value.name)
  console.log('- Code valid:', hasCode, 'Value:', productItem.value.code)
  console.log('- Price valid:', hasPrice, 'Value:', productItem.value.price)
  console.log(
    '- Category valid:',
    hasCategory,
    'Value:',
    productItem.value.categoryId,
  )
  console.log('- Brand valid:', hasBrand, 'Value:', productItem.value.brandId)

  formRef.value?.validate(async (errors: any) => {
    if (errors) {
      console.log('Form validation failed:', errors)
      logValidationErrors(errors)
      return
    }

    try {
      console.log('Validation passed, creating product...')
      await productStore.createProduct(productItem.value)
      useNotifyStore().success(t('products.createdSucceed'))
      emits('close')
    } catch (error) {
      console.error('Product creation failed:', error)
      useNotifyStore().error(t('products.createFailed'))
    }
  })
}

function handleImageUpload(options: {
  file: UploadFileInfo
  fileList: UploadFileInfo[]
}) {
  console.log('Image upload options:', options)
  if (options.fileList && options.fileList.length > 0) {
    productItem.value.image = options.fileList[0].file
    console.log('Image set:', productItem.value.image)
  }
}

function handleImageRemove() {
  productItem.value.image = null
}
</script>

<template>
  <n-form ref="formRef" :model="productItem" :rules="rules" @submit.prevent="createProduct()">
    <!-- Debug info -->
    <div style="display: none;">
      <p>Debug: {{ JSON.stringify(productItem) }}</p>
    </div>
    <n-flex>
      <div class="w-full lg:w-3/4">
        <Card size="small" :title="t('products.create.productInformation')" class="mb-3">
          <n-form-item path="name" :label="t('products.create.name')">
            <n-input
              v-model:value="productItem.name"
              :placeholder="t('products.create.name')"
              size="large"
                              @update:value="(val) => { productItem.value.name = val; console.log('Name updated:', val) }"
            />
          </n-form-item>
          <n-space justify="start">
            <n-form-item path="code" :label="t('products.create.sku')">
              <n-input
                v-model:value="productItem.code"
                :placeholder="t('products.create.sku')"
                size="large"
                @update:value="(val) => { productItem.value.code = val; console.log('Code updated:', val) }"
              />
            </n-form-item>

            <n-form-item path="barcode" :label="t('products.create.barcode')">
              <n-input v-model:value="productItem.code" :placeholder="t('products.create.barcode')" size="large" />
            </n-form-item>
          </n-space>

          <n-form-item path="description" :label="t('products.create.description')">
            <Editor
              v-model="productItem.description"
              :placeholder="t('products.create.productInformation')"
                              @update:value="(val) => { productItem.value.description = val; console.log('Description updated:', val) }"
            />
          </n-form-item>
        </Card>
        <Card size="small" :title="t('products.create.media')">
          <div class="form-control">
            <n-form-item class="mb-5" path="image" :label="t('brands.create.image')">
              <n-upload
                list-type="image-card"
                accept="image/png, image/jpeg"
                :max="1"
                @preview="handlePreview"
                @change="handleImageUpload"
                @remove="handleImageRemove"
                :default-upload="false"
              />
              <n-modal v-model:show="showModalRef" preset="card" style="width: 600px"
                :title="t('products.create.imageName')">
                <img :src="previewImageUrlRef" style="width: 100%">
              </n-modal>
            </n-form-item>
          </div>
        </Card>
      </div>

      <div class="w-full lg:flex-1">
        <Card size="small" :title="t('products.create.pricing')" class="mb-2">
          <n-space vertical>
            <n-form-item path="price" :label="t('products.create.price')">
              <n-input-number
                v-model:value="productItem.price"
                size="large"
                :placeholder="t('products.create.price')"
                                  @update:value="(val) => { productItem.value.price = val || 0; console.log('Price updated:', val) }"
              />
            </n-form-item>
            <n-form-item path="bestPrice" :label="t('products.create.discountedPrice')">
              <n-input-number
                v-model:value="productItem.bestPrice"
                size="large"
                :placeholder="t('products.create.discountedPrice')"
                                  @update:value="(val) => { productItem.value.bestPrice = val || 0; console.log('Best price updated:', val) }"
              />
            </n-form-item>
            <hr>
            <n-form-item path="stock" :label="t('products.create.inStock')">
              <n-switch
                v-model:value="productItem.stock"
                                  @update:value="(val) => { productItem.value.stock = val; console.log('Stock updated:', val) }"
              />
            </n-form-item>
          </n-space>
        </Card>

        <Card size="small" :title="t('products.create.category')">
          <n-space vertical>
            <n-form-item path="categoryId" :label="t('products.create.category')">
              <n-tree-select
                v-model:value="productItem.categoryId"
                key-field="key"
                :options="categoryOptions"
                :placeholder="t('products.create.category')"
                @update:value="(val) => {
                  console.log('Category update event triggered with value:', val);
                  productItem.value.categoryId = val;
                  console.log('Category selected:', val);
                  console.log('Product item after category update:', productItem.value);
                }"
              />
            </n-form-item>
            <n-form-item path="brandId" :label="t('products.create.brand')">
              <n-select
                v-model:value="productItem.brandId"
                :options="brandOptions"
                :placeholder="t('products.create.brand')"
                @update:value="(val) => {
                  console.log('Brand update event triggered with value:', val);
                  productItem.value.brandId = val;
                  console.log('Brand selected:', val);
                  console.log('Product item after brand update:', productItem.value);
                }"
              />
            </n-form-item>
            <n-form-item path="tags" :label="t('products.create.keywords')">
              <n-dynamic-tags
                v-model:value="productItem.tags"
                :max="10"
                @update:value="(val) => { productItem.value.tags = val; console.log('Tags updated:', val) }"
              >
                <template #trigger="{ activate, disabled }">
                  <n-button size="small" type="primary" dashed :disabled="disabled" @click="activate()">
                    <template #icon>
                      <n-icon>
                        <PlusIcon />
                      </n-icon>
                    </template>
                    {{ t('products.create.newKeyword') }}
                  </n-button>
                </template>
              </n-dynamic-tags>
            </n-form-item>
          </n-space>
        </Card>
      </div>
    </n-flex>

    <!-- Debug and Save Buttons -->
    <div class="mt-6 flex justify-between">
      <n-button
        type="info"
        size="medium"
        @click="testFormData()"
      >
        Test Form Data
      </n-button>

      <n-button
        type="primary"
        size="large"
        :loading="isLoading"
        @click="createProduct()"
      >
        {{ t('products.create.saveButton') }}
      </n-button>
    </div>
  </n-form>
</template>

<style lang='scss'>
.n-card>.n-card-header .n-card-header__main {
  font-weight: bold;
}
</style>
