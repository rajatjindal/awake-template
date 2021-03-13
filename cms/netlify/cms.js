import Post from './post'
import Category from './category'
import Project from './project'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.project = new Project(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
