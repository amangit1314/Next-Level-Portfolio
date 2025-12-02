import { type SchemaTypeDefinition } from 'sanity'
import { experience } from './experience'
import { project } from './project'
import { testimonial } from './testimonial'
import { skill } from './skill'
import { profile } from './profile'
import component from './component'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, project, testimonial, skill, profile, component, blog],
}
