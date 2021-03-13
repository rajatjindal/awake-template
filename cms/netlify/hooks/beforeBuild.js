import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import copyStaticToDist from '../build/copy-static-to-dist'
import generateProjectApi from '../build/generate-project-api'

export default () => {
  generatePostApi()
  generateCategoryApi()
  generateProjectApi()
  copyStaticToDist()
}
