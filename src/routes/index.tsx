import { Input } from '@/components/ui/input'
import { Layout } from './layout'

export function App() {
  return (
    <Layout>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Input className="w-20" />
      </div>
    </Layout>
  )
}
