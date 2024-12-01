import { useDark } from '@/hooks/use-dark'
import { Button } from './ui/button'

export function DarkModeToggle() {
  const { toggleDark } = useDark()

  return (
    <Button aria-label="toggle dark mode" size="icon" variant="outline" onClick={toggleDark}>
      <span className="sun i-carbon-sun size-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <span className="moon i-carbon-moon absolute size-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
