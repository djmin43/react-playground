import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/layout-b')({
  component: () => <div>Hello /_layout/layout-b!</div>
})