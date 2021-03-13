import { getMixins } from './mixins'

class Project {
  constructor(axios) {
    this.slug = 'project'
    this.slugPlural = 'projects'
    this.pretty = 'Project'
    this.plural = 'Projects'
    this.axios = axios
  }
}

// Mixins
Object.assign(Project.prototype, getMixins)
export default Project
