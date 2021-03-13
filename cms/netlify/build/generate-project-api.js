import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateProjectApi = () => {
  const contentDir = `${rootDir}/content/projects`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/project.json`
  const metaFile = `${apiDir}/projectss-meta.json`
  const pages = siteConfig.projects.perPage
  const doneMessage = `{totalNumber} projects generated in projects API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/projects`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateProjectApi
