import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import component from './component'
import experience from './experience'
import profile from './profile'
import project from './project'
import skill from './skill'
import testimonial from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, experience, project, skill, testimonial, component, blog],
}
