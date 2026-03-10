# #UI — hash-ui

![npm version](https://img.shields.io/npm/v/@thetinycode/hash-ui)
![license](https://img.shields.io/npm/l/@thetinycode/hash-ui)
![react](https://img.shields.io/badge/react-18%2B-blue)
![tailwind](https://img.shields.io/badge/tailwind-v4-38BDF8)
![build](https://img.shields.io/badge/build-tsup-orange)

**hash-ui** is a lightweight collection of composable React UI primitives built with Tailwind CSS. It provides layout components, forms, overlays, navigation, and marketing blocks to help you build modern interfaces quickly — without locking you into a rigid design system.

---

## Features

- React component primitives with full TypeScript support
- Tailwind CSS v4 powered styling — fully customisable
- Composable architecture — mix and match freely
- Works with Next.js, Vite, and any React framework
- Tree-shakable package build

---

## Requirements

- React 18+
- Tailwind CSS v4
- Node.js 18+

---

## Installation

```bash
# pnpm
pnpm add @thetinycode/hash-ui

# npm
npm install @thetinycode/hash-ui

# yarn
yarn add @thetinycode/hash-ui
```

---

## Setup

### 1. Tailwind Configuration

hash-ui uses Tailwind CSS utilities internally. Add the library as a source in your global CSS file so Tailwind can detect its classes:

```css
@import "tailwindcss";
@source "../node_modules/@thetinycode/hash-ui";
```

### 2. Import Styles

Import the library stylesheet in your app root. For Next.js App Router, add this to your root layout:

```ts
import "@thetinycode/hash-ui/styles.css"
import "./globals.css"
```

---

## Basic Usage

```tsx
import {
  Section,
  Container,
  Stack,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Button,
  Grid
} from "@thetinycode/hash-ui"

export default function Demo() {
  return (
    <Section>
      <Container>
        <Stack gap="lg">

          <Badge variant="success">hash-ui works</Badge>

          <Card>
            <CardHeader>
              <CardTitle>Hello from #UI</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Input placeholder="Type something..." />
                <Button>Click me</Button>
              </Stack>
            </CardContent>
          </Card>

          <Grid cols={3}>
            <Card className="p-4">One</Card>
            <Card className="p-4">Two</Card>
            <Card className="p-4">Three</Card>
          </Grid>

        </Stack>
      </Container>
    </Section>
  )
}
```

---

## Components

|     Category    |                         Components                               |
|-----------------|------------------------------------------------------------------|
| **Layout**      |     `Box` `Container` `Stack` `Grid` `Section` `Divider`         |
| **Forms**       | `Button` `Input` `Textarea` `Select` `Checkbox` `Switch` `Label` |
| **Display**     |       `Card` `Badge` `Avatar` `Alert` `Stat` `EmptyState`        |
| **Navigation**  |   `Header` `Tabs` `Breadcrumb` `Pagination`                      |
| **Overlays**    |   `Modal` `Drawer` `Dropdown` `Tooltip` `Toast`                  |
| **Marketing**   |   `Hero`                                                         |

---

## Project Structure

```path
hash-ui/
├── src/
│   ├── components/
│   │   ├── primitives/     # Layout components
│   │   ├── forms/          # Form inputs & controls
│   │   ├── display/        # Data & content display
│   │   ├── navigation/     # Nav elements
│   │   ├── overlays/       # Modals, drawers & tooltips
│   │   └── marketing/      # Landing page blocks
│   ├── lib/
│   │   └── cn.ts           # Class utility helper
│   ├── index.ts            # Package entry point
│   └── styles.css          # Exported stylesheet
├── dist/
├── package.json
└── tsconfig.json
```

---

## Development

```bash
# Clone and install
git clone https://github.com/thetinycode/hash-ui
cd hash-ui
pnpm install

# Build — output written to dist/
pnpm build

# Preview package tarball
npm pack

# Publish to npm
pnpm publish --access public
```

---

## Roadmap

|  Version |   Status   |                                    Planned                                    |
|----------|------------|-------------------------------------------------------------------------------|
| **v0.1** | ✅ Current |          Core primitives, Forms, Display, Navigation, Overlays                |
| **v0.2** | 🔜 Planned | `IconButton`, `ButtonGroup`, `InputGroup`, `AvatarGroup`, Notification system |
| **v0.3** | 🔜 Planned |      `Navbar`, `Sidebar`, `Accordion`, Command palette, Theme support         |
| **v1.0** | 🎯 Future  |      Full docs, Demo site, Storybook, Accessibility, Animation utilities      |

---

## License

MIT — Created by [Mawunya](https://github.com/Mawunya3)
