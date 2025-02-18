import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import events from './events'
import projects from './projects'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    events,
    projects
  ]),
})
