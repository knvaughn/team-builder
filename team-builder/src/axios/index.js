import { v4 as uuid } from 'uuid'

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'Kristin Vaughn',
    email: 'vaughn.kristin.n@gmail.com',
    role: 'Software Engineer',
  },
]

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMembers })
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}
