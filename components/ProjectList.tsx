import CaseItem from './CaseItem'
import Container from './Container'

export default function ProjectList() {
  return (
    <Container>
      <section className="px-12 mt-[16vh]">
      <CaseItem title="Brand Systems" />
      <CaseItem title="Digital Platforms" />
      <CaseItem title="Creative Technology" />
    </section>
    </Container>
  )
}
