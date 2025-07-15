import { Button, Link, Switch } from '@heroui/react'
import { useTheme } from '@heroui/use-theme'

export function App() {
  return (
    <div className="font-sans antialiased relative">
      <div className="flex flex-col items-center justify-center min-h-svh">
        <div className="flex items-center gap-4">
          <Button
            color="primary"
            variant="shadow"
            showAnchorIcon
            as={Link}
            href="https://github.com/mancuoj-collective/react-tmpl-lite"
          >
            GitHub
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      color="primary"
      isSelected={theme === 'dark'}
      onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}
