import { StyleguidedPackageJson } from './StyleguidedPackageJson';

const getOverviewdataFrom = (pJson: StyleguidedPackageJson) => ({
  name: pJson.name,
  description: pJson.description,
  tags: pJson.keywords,
  category: pJson.bioStyleguide ? pJson.bioStyleguide.category : ''
})

export default getOverviewdataFrom;
