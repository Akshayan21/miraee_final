# Miraee Website --- Project Source of Truth

**Status:** Canonical implementation specification\
**Project:** Miraee Website\
**Primary stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui\
**Primary purpose:** Production-ready marketing website for Miraee\
**Rule:** Read this document before making architectural, UI, SEO,
analytics, content, or launch-related changes.

------------------------------------------------------------------------

# 1. Executive Summary

Miraee is positioned as an **AI-native employee travel platform**.

## Positioning north star

-   **Category:** AI-native employee travel platform
-   **Core promise:** Your employee talks. Miraee does the work.
-   **Technology story:** A workforce of specialized AI agents operating
    inside policy, permissions, payment and travel context.
-   **Experience story:** Voice, text and avatar access to one
    continuous travel assistant.
-   **Enterprise story:** Personal for employees. Autonomous for routine
    work. Controlled by the business.
-   **Brand line:** Where employee intent becomes action.

The website must communicate Miraee as:

-   Intelligent
-   Calm
-   Premium
-   Modern
-   Human
-   Product-first rather than marketing-heavy
-   Enterprise credible without looking like legacy enterprise software

Motion should demonstrate work happening rather than decorative
spectacle.

------------------------------------------------------------------------

# 2. Launch Restrictions --- Non-Negotiable

The launch website must not include:

-   Customer logo walls
-   Testimonials
-   Anonymous quotes
-   Fabricated ratings
-   "Loved by employees" claims
-   Implied customer proof unless verified
-   Unverified numeric claims
-   Unsupported security claims
-   Unsupported supply claims
-   Unsupported product capability claims
-   Unsupported certifications or badges
-   An avatar described as autonomous beyond documented product behavior
-   Real personal information in demonstrations

Credibility should come from:

-   Product evidence
-   Architecture
-   Controls
-   Economics
-   Operational detail
-   Supply depth
-   Demonstrable workflows

Where a claim is not verified, do not invent it.

------------------------------------------------------------------------

# 3. Mandatory Frontend Technology Stack

This project is a **React + Vite + TypeScript** application.

The project must use:

-   React
-   Vite
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   CSS variables for Miraee design tokens

Use React Router if routing is required by the existing application
architecture.

Use ESLint for code quality and Prettier where already configured or
adopted by the repository.

## Technology responsibilities

  Technology      Responsibility
  --------------- ------------------------------------------------------
  React           Component composition and UI behavior
  Vite            Development server and build tooling
  TypeScript      Type safety
  Tailwind CSS    Layout, responsive styling and visual implementation
  shadcn/ui       Accessible UI primitives
  CSS variables   Semantic Miraee design tokens
  React Router    Route composition when required

Do not migrate to another frontend framework without explicit approval.

Do not migrate the project from Vite without explicit approval.

Do not introduce another styling framework.

------------------------------------------------------------------------

# 4. Frontend Architecture

The implementation must follow this hierarchy:

``` text
Miraee Design Tokens
        ↓
Tailwind Configuration
        ↓
shadcn/ui + UI Primitives
        ↓
Miraee Domain Components
        ↓
Composite Sections
        ↓
Page Templates
        ↓
Route Pages
```

Dependency direction:

``` text
Pages
  ↓
Templates
  ↓
Sections
  ↓
Domain Components
  ↓
shadcn/ui / UI Primitives
  ↓
Design Tokens
```

Dependencies flow downward.

Avoid circular dependencies.

## Core architectural principle

> **Pages compose components. Components do not become pages.**

Build once. Compose everywhere.

A page should primarily:

1.  Resolve content.
2.  Resolve metadata.
3.  Select a template.
4.  Pass structured data into components.
5.  Render the page.

Do not build large pages as monolithic components.

------------------------------------------------------------------------

# 5. Component-Based Architecture --- Mandatory

Every meaningful repeated UI pattern must be implemented as a reusable
component.

Before creating a component:

1.  Search the existing component library.
2.  Determine whether an existing component can be reused.
3.  Determine whether an existing component can support the requirement
    through a semantic variant.
4.  Create a new component only when the existing abstraction is
    genuinely unsuitable.

Do not duplicate components because a different page needs different
content.

## Avoid page-specific duplication

Do not create:

``` text
HomepageHero
PlatformHero
TravelHero
```

when a shared hero component can handle the content.

Do not create:

``` text
HomepageAgentCard
PlatformAgentCard
TravelAgentCard
```

when one `AgentCard` can represent the component.

Do not create:

``` text
ButtonV2
ButtonV4
HomepageButton
FinalButton
NewButton
```

Use one semantic component with controlled variants.

------------------------------------------------------------------------

# 6. Recommended Project Structure

``` text
src/
├── app/
│   ├── routes/
│   └── router.tsx
│
├── components/
│   ├── ui/
│   ├── navigation/
│   ├── hero/
│   ├── demo/
│   ├── avatar/
│   ├── agents/
│   ├── workflow/
│   ├── cards/
│   ├── comparison/
│   ├── architecture/
│   ├── security/
│   ├── faq/
│   ├── forms/
│   ├── resources/
│   ├── cta/
│   ├── footer/
│   ├── shared/
│   ├── sections/
│   └── templates/
│
├── content/
├── config/
├── lib/
├── styles/
│   ├── tokens.css
│   └── globals.css
│
├── types/
└── tests/
```

The exact structure can adapt to the existing repository, but
responsibilities must remain separated.

------------------------------------------------------------------------

# 7. Component Layer Responsibilities

## UI primitives

`src/components/ui/`

Examples:

-   Button
-   Link
-   Icon
-   Badge
-   Eyebrow
-   Heading
-   Text
-   Container
-   Section
-   Divider
-   Input
-   Textarea
-   Select
-   Tooltip

shadcn/ui should be used as the foundation for appropriate interactive
primitives.

## Navigation

`src/components/navigation/`

-   Sticky navigation
-   Desktop mega menu
-   Mobile drawer
-   Navigation item

## Hero

`src/components/hero/`

-   Hero split
-   Hero product demo
-   Hero media

## Demo

`src/components/demo/`

-   Conversation demo
-   Demo controls
-   Demo transcript
-   Demo state

## Avatar

`src/components/avatar/`

-   Avatar
-   Avatar state
-   Avatar demo
-   Voice waveform

## Agents

`src/components/agents/`

-   Agent card
-   Agent grid
-   Agent architecture

## Workflow

`src/components/workflow/`

-   Workflow timeline
-   Travel lifecycle
-   Workflow step

## Cards

`src/components/cards/`

-   Metric card
-   Role card
-   Use-case card
-   Integration card
-   Benefit card

## Comparison

`src/components/comparison/`

-   Comparison matrix

## Architecture

`src/components/architecture/`

-   Architecture diagram
-   Control matrix
-   Policy/action matrix

## Security

`src/components/security/`

-   Security control grid
-   Audit log
-   Governance matrix

## FAQ

`src/components/faq/`

-   FAQ accordion

## Forms

`src/components/forms/`

-   Demo form
-   Form field
-   Form validation
-   Form success

## Resources

`src/components/resources/`

-   Resource card
-   Resource grid
-   Resource metadata
-   Related resources

## CTA

`src/components/cta/`

-   CTA banner
-   CTA button

## Footer

`src/components/footer/`

-   Footer mega-grid

## Shared

`src/components/shared/`

-   Related pages
-   Section heading
-   Responsive media

------------------------------------------------------------------------

# 8. React Rules

Use functional React components.

Use TypeScript for all application and component code.

Avoid monolithic components.

Avoid unnecessary client-side state.

Avoid page context inside reusable components.

Components receive data and configuration; they should not know which
page is rendering them.

Repeated content should be data-driven.

Example:

``` tsx
{agents.map((agent) => (
  <AgentCard key={agent.id} {...agent} />
))}
```

Do not manually duplicate repeated markup.

------------------------------------------------------------------------

# 9. TypeScript Rules

TypeScript is mandatory.

Avoid `any` unless there is a documented technical reason.

Component props must have explicit types.

Prefer semantic interfaces/types:

``` ts
type Agent = {
  id: string;
  name: string;
  description: string;
};
```

Avoid overengineering types.

Use the simplest type system that accurately models the data.

------------------------------------------------------------------------

# 10. Tailwind CSS Rules

Tailwind CSS is the primary styling system.

Use Tailwind for:

-   Layout
-   Spacing
-   Typography
-   Responsive behavior
-   Borders
-   Radius
-   Shadows
-   Positioning
-   Flex/grid
-   State styling
-   Transitions
-   Visibility
-   Responsive variants

Avoid creating custom CSS classes for styling that Tailwind can express
cleanly.

## Avoid arbitrary values unnecessarily

Avoid excessive patterns such as:

``` tsx
className="mt-[37px] text-[47px]"
```

Prefer design-system values.

Arbitrary values are acceptable when a genuine design requirement cannot
be represented by the established token system.

Repeated arbitrary values should become design tokens.

------------------------------------------------------------------------

# 11. Tailwind + Miraee Design Tokens

Tailwind must consume the Miraee semantic token system.

Do not create an independent hard-coded color system inside components.

Canonical semantic tokens include:

``` text
--color-background
--color-surface
--color-surface-muted
--color-text
--color-text-muted
--color-brand-dark
--color-brand
--color-brand-strong
--color-border
--color-background-dark
--layout-container
--radius-panel
--shadow-panel
--motion-ease
--font-heading
--font-body
```

Tailwind should map to these variables.

Components should consume semantic utilities rather than
implementation-history names.

------------------------------------------------------------------------

# 12. shadcn/ui Rules

shadcn/ui is the preferred foundation for reusable interactive UI
primitives.

Use it where an appropriate primitive already exists.

Examples:

-   Button
-   Dialog
-   Sheet
-   Dropdown Menu
-   Accordion
-   Tabs
-   Tooltip
-   Select
-   Input
-   Textarea
-   Checkbox
-   Radio Group
-   Form primitives

Do not rebuild established interactive primitives unnecessarily.

shadcn/ui is the implementation foundation, not the Miraee brand system.

Miraee's own:

-   Colors
-   Typography
-   Spacing
-   Radius
-   Shadows
-   Motion
-   States

must be applied through the Miraee design-token system.

## Extending shadcn/ui

When customization is required:

1.  Start from the shadcn primitive.
2.  Preserve accessibility behavior.
3.  Apply Miraee tokens.
4.  Add only the necessary variant/behavior.
5.  Keep the API semantic.
6.  Reuse the result throughout the application.

Do not fork components into page-specific versions.

------------------------------------------------------------------------

# 13. Avoid Boolean Explosion

Avoid APIs such as:

``` tsx
<Card
  isDark
  isLarge
  isCompact
  isHero
  isHomepage
  isAnimated
  isMobile
  hasBorder
/>
```

Prefer semantic variants:

``` tsx
<Card variant="featured" />
```

Use separate components when behaviors are genuinely different.

------------------------------------------------------------------------

# 14. Component API Rules

Component APIs must be:

-   Explicit
-   Minimal
-   Typed
-   Semantic
-   Reusable
-   Independent of page context

Avoid:

``` text
homepageMode
platformMode
v4Mode
travelPage
specialCase
```

Prefer:

``` text
variant
size
tone
state
items
content
```

------------------------------------------------------------------------

# 15. Component State Rules

Interactive components must have explicit meaningful states.

## Avatar

``` text
idle
listening
thinking
speaking
complete
```

## Product demo

``` text
idle
playing
paused
complete
fallback
```

## Form

``` text
idle
editing
submitting
success
error
```

------------------------------------------------------------------------

# 16. CSS Rules

Tailwind is the default styling mechanism.

Custom CSS is allowed only when genuinely necessary, such as:

-   Complex animations
-   Advanced pseudo-elements
-   Complex visual effects
-   Complex background patterns
-   Third-party integration requirements
-   Browser-specific behavior
-   Styles that cannot reasonably be expressed with Tailwind

Do not create large page-specific CSS files for styling Tailwind can
handle.

Do not modify global styles to solve a local component problem without
justification.

------------------------------------------------------------------------

# 17. Global CSS Rules

Global CSS should primarily contain:

-   CSS variables
-   Design tokens
-   Base styles
-   Typography defaults
-   Accessibility foundations
-   Required resets
-   Required global animations

Do not place page-specific styles in global CSS.

Do not introduce global selectors that can leak into unrelated
components.

------------------------------------------------------------------------

# 18. Final Miraee Design System

The supplied design system is being normalized from legacy
implementation names into semantic tokens.

## 18.1 Color tokens

  ---------------------------------------------------------------------------------------------------
  Canonical token             Legacy/root source                              Value Usage
  --------------------------- -------------------------- -------------------------- -----------------
  `--color-background`        `--section-canvas`                          `#FFFFFF` Page background

  `--color-surface`           `--section-surface`                         `#FFFFFF` Cards / panels

  `--color-surface-muted`     `--section-tint`                            `#FFFFFF` Tinted sections

  `--color-text`              `--section-ink`                             `#0F0407` Body text

  `--color-text-muted`        `--section-muted`                           `#786C69` Secondary/muted
                                                                                    text

  `--color-brand-dark`        `--section-dark`                            `#450E14` Headings /
                                                                                    primary dark
                                                                                    accent

  `--color-brand`             `--section-brand`                           `#E55602` Brand orange

  `--color-brand-strong`      `--section-brand-strong`                    `#C74400` Links, CTAs,
                                                                                    eyebrows, active
                                                                                    states

  `--color-border`            `--section-line`             `rgba(69, 14, 20, 0.14)` Borders /
                                                                                    hairlines

  `--color-background-dark`   Legacy `--m-dark-bg`                        `#110E09` Dark CTA bands

  `--color-background-deep`   `--section-dark-deep`                       `#0F0407` Deepest dark
                                                                                    background
  ---------------------------------------------------------------------------------------------------

### Color rules

-   Semantic tokens are canonical.
-   Legacy aliases may remain temporarily for compatibility.
-   New components must not introduce `--m-*` or `--v4-*` tokens.
-   Theme changes should propagate through the semantic token layer.
-   Token overrides must be scoped appropriately to the Miraee
    site/application rather than leaking into unrelated site versions.

------------------------------------------------------------------------

# 19. Final Typography System

Typography is now finalized.

## Heading typeface

**Geist**

Use Geist for:

-   H1
-   H2
-   H3
-   Display typography
-   Major headings
-   Primary UI headings where heading treatment applies

## Body typeface

**Inter**

Use Inter for:

-   Paragraphs
-   Body copy
-   Navigation
-   Labels
-   Forms
-   Supporting UI text
-   Descriptions

## Canonical typography tokens

``` css
--font-heading: "Geist", system-ui, sans-serif;
--font-body: "Inter", system-ui, sans-serif;
```

Tailwind should consume these tokens.

Example:

``` tsx
<h1 className="font-heading">
  Your employee's travel assistant.
</h1>

<p className="font-body">
  Miraee turns a simple request into a complete trip.
</p>
```

### Typography rules

-   Geist is the canonical Miraee heading typeface.
-   Inter is the canonical Miraee body typeface.
-   Sora and Plus Jakarta Sans are legacy implementation fonts.
-   Do not use Sora or Plus Jakarta Sans in new components.
-   Do not reintroduce legacy fonts during refactoring.
-   Do not hard-code font families throughout components when semantic
    tokens can be used.
-   Final font loading must be optimized responsibly.

------------------------------------------------------------------------

# 20. Layout and Motion Tokens

  -------------------------------------------------------------------------------------------------------------------
  Token                                                                         Canonical value Usage
  ---------------------- ---------------------------------------------------------------------- ---------------------
  `--layout-container`                                                                 `1200px` Primary page
                                                                                                max-width

  Legacy V2 max-width                                                                  `1160px` Historical reference
                                                                                                only

  `--motion-ease`                                               `cubic-bezier(0.16, 1, 0.3, 1)` Miraee easing

  `--radius-panel`                                                                       `18px` Panel radius

  `--shadow-panel`         `0 24px 60px rgba(69,14,20,.14), 0 1px 0 rgba(255,255,255,.6) inset` Panel shadow
  -------------------------------------------------------------------------------------------------------------------

Do not create new version-specific equivalents such as `--v4-shell` for
new implementation.

------------------------------------------------------------------------

# 21. Naming Conventions

Files/directories use kebab-case:

``` text
travel-assistant.tsx
hero-product-demo/
```

Components use PascalCase:

``` text
TravelAssistant
AgentCard
```

Variables/functions use camelCase.

Types use PascalCase.

Global immutable configuration may use UPPER_SNAKE_CASE when
appropriate.

Avoid:

``` text
TravelAssistant.tsx
travel_assistant.tsx
travelAssistant.tsx
```

Do not create names such as:

``` text
AgentCardV2
AgentCardV4
AgentCardNew
AgentCardFinal
HomepageAgentCard
```

------------------------------------------------------------------------

# 22. Component File Convention

For substantial components:

``` text
component-name/
├── component.tsx
├── component.types.ts
├── component.test.tsx
└── index.ts
```

Tiny components may use a single file.

Do not create unnecessary files for trivial components.

------------------------------------------------------------------------

# 23. Global Navigation / Information Architecture

## Top navigation

### Product

-   Platform
-   Travel Assistant
-   Business Travel
-   Expense Management
-   Travel Policy & Controls
-   Disruption & Duty of Care
-   Integrations
-   Implementation

### AI Agentic Travel

-   AI Travel Assistant
-   Avatar Experience
-   Agent Architecture
-   AI Governance & Security

### Solutions

-   For Employees
-   For Finance
-   For Travel Teams
-   For HR & People
-   For Managers
-   For IT & Administrators

### Travel

-   Corporate Travel
-   Executive Travel
-   MICE & Group Travel
-   Bleisure & Personal Travel
-   Global Mobility
-   Travel Disruption

### Why Miraee

-   Why Miraee
-   Economics & Savings
-   Supply Network
-   Miraee vs Traditional T&E

### Resources

-   Insights
-   Guides
-   AI in Business Travel
-   Corporate Travel
-   News

### Company

-   About
-   Austin
-   Careers
-   Security
-   Contact / Demo

## CTA system

Primary CTA:

**See Miraee in Action**

Secondary CTA:

**Explore the Platform**

## Header behavior

-   Sticky header
-   Desktop mega-nav on hover/focus
-   Mobile drawer
-   Primary CTA remains visible on desktop
-   Compact sticky CTA on mobile

## Footer

Include:

-   Product
-   AI
-   Solutions
-   Travel
-   Why Miraee
-   Resources
-   Company
-   Security
-   Privacy
-   Terms
-   Contact

------------------------------------------------------------------------

# 24. Core Visual Motifs

  -----------------------------------------------------------------------
  Motif                   Use                     Avoid
  ----------------------- ----------------------- -----------------------
  Conversation thread     Hero demonstrations, AI Fake chat screenshots
                          pages, avatar pages     that cannot be
                                                  reproduced

  Agent orbit / workforce AI architecture         Overly sci-fi
  architecture                                    neural-network visuals

  Travel timeline         Plan → book → pay →     Generic journey stock
                          travel → expense        imagery

  Control layer           Policy, approvals,      Vague security lock
                          audit                   imagery

  Live-state dashboard    Finance, travel ops,    Static dashboard
                          duty of care            wallpaper

  Avatar presence         Employee assistant      Avatar as decoration
                          experience              without action context
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 25. Motion System

Normal UI transitions should generally be **200--500ms**.

Animate meaningful product states:

``` text
request → agent → action → result
```

Rules:

-   Respect `prefers-reduced-motion`.
-   Never make text unreadable because of animation timing.
-   Do not use motion merely for spectacle.
-   Lazy-load heavy video, 3D and canvas content.
-   Reduced-motion users must receive a usable static/state-based
    fallback.

------------------------------------------------------------------------

# 26. Responsive System

  -----------------------------------------------------------------------
  Breakpoint                          Requirement
  ----------------------------------- -----------------------------------
  Mobile `<768px`                     Single column, sticky CTA,
                                      accordion navigation, simplified
                                      diagrams

  Tablet `768–1199px`                 Two columns where useful, preserve
                                      hierarchy

  Desktop `1200–1599px`               Full component system

  Wide `1600px+`                      Cap content width, do not stretch
                                      copy
  -----------------------------------------------------------------------

Do not simply shrink desktop layouts.

Responsive behavior must be intentionally designed.

------------------------------------------------------------------------

# 27. Accessibility

Target **WCAG 2.2 AA**.

Required:

-   Keyboard navigation
-   Visible focus
-   Correct semantic landmarks
-   Correct heading hierarchy
-   Accessible names
-   Correct link/button semantics
-   Appropriate ARIA
-   Accessible forms
-   Accessible errors
-   Accessible accordion behavior
-   Accessible tabs/dialogs where used
-   Reduced-motion support
-   Video captions/transcripts

Prefer semantic HTML.

Use shadcn/ui primitives where they provide established accessibility
behavior.

Do not remove focus states for visual reasons.

------------------------------------------------------------------------

# 28. Images and Video

Images must:

-   Be responsive
-   Use modern formats where practical
-   Have explicit dimensions
-   Use descriptive alt text when informative
-   Be marked decorative when appropriate
-   Be lazy-loaded below the fold

Video must:

-   Have captions
-   Provide transcripts where required
-   Avoid blocking the page
-   Support reduced motion
-   Be lazy-loaded when heavy

Hero LCP assets must be optimized.

Avatar and video assets should not be loaded before interaction when
unnecessary.

------------------------------------------------------------------------

# 29. Performance

Primary landing pages should target green Core Web Vitals.

Requirements:

-   Optimize hero LCP assets.
-   Subset/preload fonts responsibly.
-   Lazy-load below-fold media.
-   Avoid blocking third-party scripts without need.
-   Keep avatar demos deterministic and lightweight.
-   Benchmark mobile performance.
-   Avoid unnecessary dependencies.
-   Avoid excessive client-side JavaScript.
-   Avoid unnecessary re-renders.
-   Avoid heavy assets before interaction.

------------------------------------------------------------------------

# 30. SEO Architecture

Every canonical page must have:

-   One canonical URL
-   Unique SEO title
-   Unique meta description
-   One H1
-   Semantic H2/H3 hierarchy
-   Internal links
-   Open Graph metadata
-   Twitter/X card metadata
-   XML sitemap inclusion where appropriate
-   Correct robots behavior

Also:

-   Do not accidentally add `noindex`.
-   Test Open Graph previews.
-   Prepare the 301 redirect map from the prior site.
-   Submit the XML sitemap.

------------------------------------------------------------------------

# 31. SEO Content Rules

Use the target keyword naturally.

Do not keyword-stuff.

For use-case pages, place the page-specific SEO keyword naturally in:

-   H1
-   First 100 words

Do not make unsupported claims for SEO purposes.

Do not create duplicate pages targeting the same intent without a clear
architectural reason.

------------------------------------------------------------------------

# 32. Canonical Route Architecture

## Homepage

`/`

SEO title:

**AI Employee Travel Platform \| Corporate Travel & Expense \| Miraee**

Meta:

**Miraee is an AI-native employee travel platform that plans, books,
changes and expenses business travel through intelligent agents and an
AI travel assistant.**

## Product

`/platform`

SEO title:

**AI Employee Travel Platform \| Plan, Book, Change & Expense \|
Miraee**

`/product/travel-assistant`

SEO title:

**AI Travel Assistant for Employees \| Miraee**

`/product/expense-management`

SEO title:

**Business Travel Expense Management \| Miraee**

`/product/travel-policy`

SEO title:

**Corporate Travel Policy Automation \| Miraee**

`/product/disruption-duty-of-care`

SEO title:

**Travel Disruption Management & Duty of Care \| Miraee**

`/product/integrations`

SEO title:

**Travel Platform Integrations \| SSO, HRIS, ERP, Cards \| Miraee**

`/product/implementation`

SEO title:

**Employee Travel Platform Implementation \| Miraee**

## AI

`/ai/avatar-travel-assistant`

SEO title:

**AI Avatar Travel Assistant for Employees \| Miraee**

`/ai/agentic-travel`

SEO title:

**Agentic AI for Corporate Travel \| Miraee**

`/ai/governance`

SEO title:

**AI Travel Governance & Security \| Agent Controls \| Miraee**

## Solutions

`/solutions`

SEO title:

**Employee Travel Solutions by Role \| Miraee**

`/solutions/employees`

SEO title:

**Employee Travel Assistant \| Business Travel Experience \| Miraee**

`/solutions/finance`

SEO title:

**Corporate Travel Spend & Expense Automation \| Miraee**

`/solutions/travel-teams`

SEO title:

**Corporate Travel Management for Travel Teams \| Miraee**

`/solutions/hr-people`

SEO title:

**Employee Travel Experience & Duty of Care \| Miraee**

`/solutions/managers`

SEO title:

**Business Travel Approvals for Managers \| Miraee**

`/solutions/it-admins`

SEO title:

**Travel Platform Administration & AI Controls \| Miraee**

## Travel

`/travel/corporate-travel`

SEO title:

**Corporate Business Travel Management \| Miraee**

`/travel/executive-travel`

SEO title:

**Executive Travel Management with AI Assistant \| Miraee**

`/travel/mice-group`

SEO title:

**MICE, Offsite & Group Travel Management \| Miraee**

`/travel/bleisure-personal`

SEO title:

**Bleisure & Personal Travel for Employees \| Miraee**

`/travel/global-mobility`

SEO title:

**Global Business Travel & Mobility Platform \| Miraee**

`/travel/disruption`

SEO title:

**Business Travel Disruption & Rebooking \| Miraee**

## Why Miraee

`/why-miraee`

SEO title:

**Why Miraee \| A Different Operating Model for Business Travel**

`/why-miraee/economics`

SEO title:

**Corporate Travel Savings Analysis \| Miraee**

`/why-miraee/supply`

SEO title:

**Travel Supply & Wholesale Economics \| Miraee**

`/why-miraee/compare`

SEO title:

**Miraee vs Traditional Travel & Expense Platforms**

## Company

`/company`

SEO title:

**Miraee \| AI-Native Employee Travel Company**

`/austin`

SEO title:

**AI Travel Platform in Austin, Texas \| Miraee**

`/security`

SEO title:

**Enterprise Security & AI Controls for Travel \| Miraee**

`/careers`

SEO title:

**Careers at Miraee \| Build the Future of Travel**

`/contact`

SEO title:

**See Miraee in Action \| AI Employee Travel Demo**

## Resources

`/resources`

SEO title:

**AI, Corporate Travel & Expense Insights \| Miraee**

------------------------------------------------------------------------

# 33. Homepage Specification

## URL

`/`

## Primary intent

Category discovery + demo conversion

## Primary audience

Finance, travel, HR, IT, executives

## Hero

Eyebrow:

**THE AI-NATIVE EMPLOYEE TRAVEL PLATFORM**

H1:

**Your employee's travel assistant. Their company's travel platform.**

Body:

Miraee turns a simple request into a complete trip. Employees can plan,
book, change and expense travel through conversation, voice or an AI
avatar---while companies keep policy, spend and control in one place.

CTA:

**See Miraee in Action**

Secondary:

**Explore the Platform**

UI:

-   Split layout
-   Copy left
-   Live conversation/avatar demo right
-   Product UI should feel real, not illustrative

Interaction:

-   Short scripted auto-play sequence
-   Manual replay

Fallback:

-   Static state/image for reduced motion and slow connections

Assets:

-   Avatar visual
-   Conversation UI
-   Lightweight dashboard preview

## Problem framing

H2:

**Business travel still makes people do the work.**

Copy:

Employees search. Managers approve. Travel teams coordinate. Finance
reconciles. HR monitors. And when something goes wrong, everyone starts
again.

Closing:

Miraee turns those disconnected tasks into one continuous travel
experience.

Before/after:

``` text
Search → Book → Email → Approve → Expense → Reconcile

vs.

Intent → Agent → Trip → Expense
```

Use SVG/CSS and accessible labels.

No auto-scroll.

## AI workforce

H2:

**One employee. One conversation. Six specialized agents.**

Intro:

Miraee does not ask one general-purpose chatbot to run a travel program.
Specialized agents handle the work behind every journey.

Agents:

-   Booking
-   Policy
-   Negotiation
-   Rebooking
-   Expense
-   Support

Use structured data.

Cards reveal responsibilities on hover/focus.

## Avatar experience

H2:

**Meet the face of your company's travel program.**

Body:

Travel software has spent decades asking people to learn interfaces.
Miraee starts somewhere else. Talk to your travel assistant, type a
request, use your voice, or interact with the Miraee avatar.

UI:

Avatar centered over live trip state timeline.

Interaction:

Click prompts trigger prebuilt conversations.

Launch demo must be deterministic; do not depend on live LLM calls.

## Enterprise control

H2:

**Personal for employees. Controlled by the business.**

Controls:

-   Policy
-   Spend
-   Permissions
-   Auditability
-   Human escalation

Use a plain-language control matrix.

No unsupported certification badges.

## Product lifecycle

H2:

**One platform for the entire employee travel lifecycle.**

Steps:

1.  Plan
2.  Book
3.  Pay
4.  Change
5.  Expense
6.  Understand

Desktop:

Horizontal timeline.

Mobile:

Stacked steps.

Each step links to the relevant product page.

## Economics

H2:

**Prove the economics before you switch.**

Body:

Miraee can model where savings may come from across fare economics,
policy adherence, unused travel, expense automation and traveler
behavior.

Use:

-   Metric cards
-   Savings Audit CTA

CTA destination:

`/why-miraee/economics`

Do not publish a savings number unless verified.

## Austin

H2:

**Built in Austin for the way companies travel now.**

Body:

Miraee is building a different model for enterprise travel: software
that acts on intent rather than asking employees to operate another
system.

Use Austin visual/abstract city-tech image rather than generic skyline
stock.

Optional parallax on desktop only.

Lazy-load optimized image.

## FAQ

Questions:

-   What is Miraee?
-   How does agentic travel work?
-   Can employees use an avatar?
-   Can companies control what agents do?
-   What happens during disruption?
-   Does Miraee handle expenses?

Use accordion.

Deep-link where useful.

Only output FAQ schema when visible FAQ content is actually rendered.

## Final CTA

H2:

**Bring us a real trip.**

Body:

We'll show you what Miraee does with it.

CTA:

**See Miraee in Action**

No exit-intent popup at launch.

Track `cta_demo_click`.

------------------------------------------------------------------------

# 34. Platform Page

## URL

`/platform`

## SEO title

**AI Employee Travel Platform \| Plan, Book, Change & Expense \|
Miraee**

## Meta

Explore Miraee's AI-native employee travel platform for planning,
booking, payments, disruption, expense and program intelligence.

## Primary intent

Platform evaluation

## Audience

Travel, finance, IT

## Hero

H1:

**One platform for the entire employee travel lifecycle.**

Body:

Plan, book, pay, change and expense travel through one intelligent
layer---without forcing employees and finance teams to stitch systems
together.

CTA:

**Explore the Platform**

UI:

Dashboard + travel thread split.

## Six capabilities

Plan / Book / Pay / Change / Expense / Understand

Use interactive capability selector with persistent trip object.

## Two views

H2:

**Two access points. One experience.**

Web console:

Policy, approvals, spend, duty of care, reporting.

Employee experience:

Ask, book, change, support, receipts, personal travel.

Use desktop + mobile device frames.

## Supply

H2:

**Travel supply built into the operating model.**

Body:

Flights, hotels, rail and car content can be sourced through connected
travel supply and negotiated / wholesale economics.

Use supply architecture visual.

Click supply type to reveal examples.

## Connected systems

H2:

**Fits the systems you already run.**

Categories:

-   Identity
-   People
-   Finance
-   Work

Cards link to integrations.

## FAQ

Use 8--10 questions around:

-   Implementation
-   Agent boundaries
-   Policy
-   Personal travel
-   Expense
-   Disruption

------------------------------------------------------------------------

# 35. Avatar Experience Page

## URL

`/ai/avatar-travel-assistant`

## SEO title

**AI Avatar Travel Assistant for Employees \| Miraee**

## Meta

Meet an AI travel assistant employees can use through conversation,
voice or avatar to plan and manage business travel.

## Hero

H1:

**Meet the face of your company's travel program.**

Body:

Travel software has spent decades asking people to learn interfaces.
Miraee starts somewhere else. Talk to your travel assistant. Type a
request. Use your voice. Or interact with your Miraee avatar.

UI:

Large avatar / conversation experience with live travel state.

Prompt chips:

-   Plan a trip
-   Change a flight
-   Find my receipt
-   What's next?

Use deterministic scripted demo.

Provide accessible transcript below interaction.

## Conversation examples

-   Plan with me: "Take me to Chicago Monday morning."
-   Change with me: "My flight was cancelled."
-   Help me decide: "Can I take the earlier flight?"
-   Finish with me: "Where's my receipt?"

Use four interactive scenario cards.

Each opens a 3--5 step conversation.

Pre-render states to keep page fast.

## Personalization

H2:

**It remembers the things that make travel yours.**

Copy:

Preferred airlines, seats, hotels, timing and relevant traveler context
can shape the next recommendation.

Use:

-   Preference chips
-   Profile preview

Hover can reveal why a recommendation was made.

Never display real PII in demos.

## Enterprise boundary

H2:

**Friendly on the surface. Controlled underneath.**

Copy:

The same interaction sits on company policy, permissions and approval
rules.

Layers:

Avatar / Policy / Approvals / Audit

Provide Employee view / Company view toggle.

------------------------------------------------------------------------

# 36. Agentic Travel Page

## URL

`/ai/agentic-travel`

## SEO title

**Agentic AI for Corporate Travel \| Miraee**

## Meta

Miraee uses specialized AI agents to plan, book, change and reconcile
employee travel within defined policy and permissions.

## Hero

H1:

**Travel AI that does the work.**

Body:

Most travel AI helps people search. Miraee agents can interpret intent,
apply policy, execute bookings, manage changes and close the
expense---within permissions defined by the company.

Use assistant-vs-agent comparison animation.

## Assistant vs agent

Traditional assistant:

-   Answers
-   Suggests
-   Waits
-   Hands work back

Miraee:

-   Plans
-   Executes
-   Monitors
-   Completes

Use comparison table.

## Agent workforce

Agents:

-   Booking
-   Policy
-   Negotiation
-   Rebooking
-   Expense
-   Support

Use agent architecture diagram.

Prefer SVG/HTML labels over rasterized diagrams.

## Shared trip thread

H2:

**Every agent works from the same trip context.**

Body:

The traveler should not have to restate the journey every time the task
changes.

Use persistent trip object.

## Governance

H2:

**Autonomy with guardrails.**

Controls:

-   Policy
-   Budget
-   Human in loop
-   Audit trail
-   Role-based permissions

Use guardrail cards.

------------------------------------------------------------------------

# 37. AI Governance & Security Page

## URL

`/ai/governance`

## SEO title

**AI Travel Governance & Security \| Agent Controls \| Miraee**

## Meta

See how Miraee bounds AI travel actions with policy, permissions,
approvals and auditable activity.

## Hero

H1:

**Autonomy needs boundaries.**

Body:

Miraee's agents operate inside clearly defined permissions. They do not
receive unlimited authority simply because they are AI.

## Action matrix

-   Search and assemble: always permitted.
-   Book in-policy: permitted; approval optional.
-   Rebook within fare band: permitted; traveler notified.
-   Rebook above fare band: named approver.
-   Code/post expense: permitted; sign-off optional.
-   Book out of policy: never without approval.

Use table with agent/human decision column.

Rows may expand for rationale.

## Hard limits

Do not:

-   Move money outside authorized rails
-   Change policy/limits
-   Book excluded suppliers
-   Mix personal and company funds
-   Act beyond trip context
-   Alter audit records
-   Take unlogged action

## Audit trail

H2:

**Every action has an owner, rule, time and cost.**

Use fake audit-log data.

## Data lifecycle

Describe:

-   Tenant scope
-   Retention/deletion documentation
-   Supplier-required data sharing
-   No-training claims only when supported by contract/security policy

Do not invent security commitments.

------------------------------------------------------------------------

# 38. Travel Assistant Page

## URL

`/product/travel-assistant`

## SEO title

**AI Travel Assistant for Employees \| Miraee**

## Meta

An AI travel assistant that can plan, book, change and support business
travel through natural language, voice or avatar.

## Hero

H1:

**Give every employee their own travel assistant.**

Body:

No portal to learn. No forms to remember. Tell Miraee where you need to
go. It takes care of the rest.

UI:

Conversation-first hero.

## How it works

1.  Ask.
2.  Miraee handles the work.
3.  You stay in control.

Use three-step timeline.

## Personalization

Airline, seat, hotel, timing and traveler context.

Use preference UI.

## Use cases

-   Planning
-   Booking
-   Changes
-   Receipts
-   Support

------------------------------------------------------------------------

# 39. Corporate Business Travel Page

## URL

`/travel/corporate-travel`

## SEO title

**Corporate Business Travel Management \| Miraee**

## Meta

Corporate travel management powered by AI agents for planning, policy,
booking, changes and expenses.

## Hero

H1:

**The everyday business trip, made effortless.**

Body:

Describe where you need to be and Miraee builds a policy-safe trip
without forms or back-and-forth.

UI:

Trip brief + itinerary UI.

## Workflow

Request → Policy → Search → Booking → Payment → Travel → Expense

## Program visibility

Show:

-   Spend
-   Savings
-   Policy
-   Active trips

in one program view.

------------------------------------------------------------------------

# 40. Expense Management Page

## URL

`/product/expense-management`

## SEO title

**Business Travel Expense Management \| Miraee**

## Meta

Automate travel receipts, expense coding, matching and reconciliation
with an AI-native travel platform.

## Hero

H1:

**Travel expenses that close themselves.**

Body:

Capture receipts, match them to trips, code spend and prepare
reconciliation without manual report chasing.

UI:

Receipt-to-ledger animation.

## Lifecycle

Transaction → Receipt → Match → Code → Review → Post

## Exception handling

Only ambiguous or policy-sensitive cases require human review.

------------------------------------------------------------------------

# 41. Travel Policy & Controls Page

## URL

`/product/travel-policy`

## SEO title

**Corporate Travel Policy Automation \| Miraee**

## Meta

Apply travel policy before booking with configurable rules for route,
grade, trip type, entity and approval.

## Hero

H1:

**Put policy before the booking.**

Body:

Make the compliant choice the easiest choice by applying rules before
employees see options.

UI:

Policy builder preview.

## Rule model

-   Route
-   Grade
-   Trip type
-   Entity
-   Approval thresholds

Use rule matrix with fake data.

## Approval model

Routine travel can be automated; exceptions can route to named approvers
with context.

------------------------------------------------------------------------

# 42. Disruption & Duty of Care Page

## URL

`/product/disruption-duty-of-care`

## SEO title

**Travel Disruption Management & Duty of Care \| Miraee**

## Meta

Monitor trips, identify disruption and support rebooking with traveler
context, policy and human escalation.

## Hero

H1:

**When plans break, one thread holds.**

Body:

Monitor the trip, identify disruption, find alternatives and escalate
with the entire journey attached.

## Disruption example

Cancelled → Alternatives → Policy check → Rebook → Notify → Audit

## Duty of care

Use itinerary-based traveler context rather than invasive GPS claims.

------------------------------------------------------------------------

# 43. Integrations Page

## URL

`/product/integrations`

## SEO title

**Travel Platform Integrations \| SSO, HRIS, ERP, Cards \| Miraee**

## Meta

Connect identity, people, finance and workplace systems without
replacing the stack you already run.

## Hero

H1:

**Your travel stack doesn't have to start over.**

Body:

Connect identity, people, finance and workplace systems once, then keep
them synchronized.

## Categories

### Identity

SSO / SAML / OIDC / SCIM / Okta / Microsoft Entra

### People

HRIS / grades / entities / cost centers / managers

### Finance

ERP / accounting / corporate card networks

### Work

Calendar / email / chat

## Developer layer

Unified API and sandbox CTA.

Publish documentation only when endpoint details are final.

------------------------------------------------------------------------

# 44. Implementation Page

## URL

`/product/implementation`

## SEO title

**Employee Travel Platform Implementation \| Miraee**

## Meta

Configure policy, connect systems, pilot the program and roll out with a
guided implementation path.

## Hero

H1:

**Go live with a guided path, not a transformation project.**

Body:

Configure policy, connect systems, pilot with one entity or team, then
expand.

## Four stages

### Stage 01 --- Set up

Guided setup wizard, progress, admin console.

### Stage 02 --- Connect

Domain, SSO, HRIS, finance and card systems.

### Stage 03 --- Pilot

One entity or region; benchmark against baseline.

### Stage 04 --- Roll out

Expand using pilot results and validated controls.

------------------------------------------------------------------------

# 45. Solutions Hub

## URL

`/solutions`

## SEO title

**Employee Travel Solutions by Role \| Miraee**

## Meta

See how Miraee changes travel for employees, finance, travel teams,
managers, HR and IT.

## Hero

H1:

**One travel platform. Different outcomes for every team.**

Six role cards.

### Employees

A personal assistant instead of another portal.

### Finance

Visibility and control before travel becomes expense.

### Travel Teams

Run a program, not a booking desk.

### HR & People

A meaningful employee travel experience with duty of care.

### Managers

Routine travel books itself; exceptions arrive with context.

### IT & Admins

Central control, connected systems and governed AI.

------------------------------------------------------------------------

# 46. Role Solution Pages

All role pages follow the reusable structure:

-   Hero
-   2--4 pain/answer pairs
-   3 measurable outcome categories without unsupported metrics
-   Full-width demo CTA

Metric placeholders may be added later if verified.

## Employees

URL:

`/solutions/employees`

SEO title:

**Employee Travel Assistant \| Business Travel Experience \| Miraee**

Meta:

Give employees a hands-free AI travel assistant for planning, booking,
changes and support.

H1:

**Give every employee their own travel assistant.**

UI:

Avatar/conversation hero.

CTA:

**See Miraee in Action**

## Finance

URL:

`/solutions/finance`

SEO title:

**Corporate Travel Spend & Expense Automation \| Miraee**

Meta:

Give finance teams visibility into travel spend, policy, savings and
automated expense workflows.

H1:

**See travel spend before it becomes expense.**

UI:

Finance dashboard hero.

CTA:

**See Miraee in Action**

## Travel Teams

URL:

`/solutions/travel-teams`

SEO title:

**Corporate Travel Management for Travel Teams \| Miraee**

Meta:

Run travel by exception with live trips, booking queues, policy and
program analytics.

H1:

**Run the travel program, not the bookings.**

UI:

Queue + live traveler view.

CTA:

**See Miraee in Action**

## HR & People

URL:

`/solutions/hr-people`

SEO title:

**Employee Travel Experience & Duty of Care \| Miraee**

Meta:

Turn corporate travel into a personalized employee benefit with modern
duty of care.

H1:

**Travel is an employee benefit. Treat it like one.**

UI:

Employee journey visualization.

CTA:

**See Miraee in Action**

## Managers

URL:

`/solutions/managers`

SEO title:

**Business Travel Approvals for Managers \| Miraee**

Meta:

Reduce approval overload with policy-safe routine travel and
context-rich exceptions.

H1:

**Run the team, not the paperwork.**

UI:

Approval queue with only exceptions.

CTA:

**See Miraee in Action**

## IT & Administrators

URL:

`/solutions/it-admins`

SEO title:

**Travel Platform Administration & AI Controls \| Miraee**

Meta:

Connect identity, HRIS and finance systems while governing employee
travel and AI actions.

H1:

**Connect the stack. Govern the agents.**

UI:

Architecture + permissions.

CTA:

**See Miraee in Action**

------------------------------------------------------------------------

# 47. Travel Use-Case Template

Use the same structure for:

-   Executive Travel
-   MICE & Group Travel
-   Bleisure & Personal Travel
-   Global Mobility
-   Travel Disruption

Each page must contain:

1.  Hero
2.  Scenario
3.  Workflow
4.  Controls
5.  CTA

Scenario data must use fictional travelers and synthetic data.

Workflow:

Request → Agent → Decision → Outcome

Controls:

-   Policy
-   Approvals
-   Spend
-   Personal separation where relevant

CTA:

**Bring a real trip. See what Miraee does with it.**

Use the page-specific SEO keyword naturally in the H1 and first 100
words.

------------------------------------------------------------------------

# 48. Executive Travel

URL:

`/travel/executive-travel`

SEO title:

**Executive Travel Management with AI Assistant \| Miraee**

Meta:

Personalized executive travel with remembered preferences, context and
human support when needed.

Use realistic fictional traveler scenario and synthetic data.

------------------------------------------------------------------------

# 49. MICE & Group Travel

URL:

`/travel/mice-group`

SEO title:

**MICE, Offsite & Group Travel Management \| Miraee**

Meta:

Plan meetings, incentives, conferences, exhibitions and group travel
from one coordinated workflow.

------------------------------------------------------------------------

# 50. Bleisure & Personal Travel

URL:

`/travel/bleisure-personal`

SEO title:

**Bleisure & Personal Travel for Employees \| Miraee**

Meta:

Keep business and personal travel in one employee experience while
separating company and personal spend.

------------------------------------------------------------------------

# 51. Global Mobility

URL:

`/travel/global-mobility`

SEO title:

**Global Business Travel & Mobility Platform \| Miraee**

Meta:

Manage travel across entities, offices, currencies and policy frameworks
with one platform.

------------------------------------------------------------------------

# 52. Travel Disruption

URL:

`/travel/disruption`

SEO title:

**Business Travel Disruption & Rebooking \| Miraee**

Meta:

Monitor business travel disruption and help employees rebook with policy
and context intact.

------------------------------------------------------------------------

# 53. Why Miraee

## URL

`/why-miraee`

## SEO title

**Why Miraee \| A Different Operating Model for Business Travel**

## Meta

See how Miraee differs from portal-first travel and disconnected T&E
systems.

## Hero

H1:

**Your travel program needs a unified framework.**

## Comparison

Be factual and fair.

Do not name competitors unless legal/marketing approves.

Compare operating models rather than unsupported competitor claims.

## Proof model

Replace testimonials with evidence:

-   Architecture
-   Controls
-   Economics
-   Operational workflow
-   Supply depth

CTA:

**Bring a real trip, policy and route. See Miraee end to end.**

------------------------------------------------------------------------

# 54. Economics & Savings

## URL

`/why-miraee/economics`

## SEO title

**Corporate Travel Savings Analysis \| Miraee**

## Meta

Model your travel savings potential before you commit using booking and
expense data.

## Hero

H1:

**Prove the economics before you switch.**

Use the same factual comparison/proof model.

Do not publish unverified savings numbers.

CTA:

**Bring a real trip, policy and route. See Miraee end to end.**

------------------------------------------------------------------------

# 55. Supply Network

## URL

`/why-miraee/supply`

## SEO title

**Travel Supply & Wholesale Economics \| Miraee**

## Meta

Understand the travel supply model behind Miraee's employee travel
platform.

## Hero

H1:

**Better travel economics start with better supply.**

Compare operating models.

Do not make unsupported supply claims.

CTA:

**Bring a real trip, policy and route. See Miraee end to end.**

------------------------------------------------------------------------

# 56. Miraee vs Traditional T&E

## URL

`/why-miraee/compare`

## SEO title

**Miraee vs Traditional Travel & Expense Platforms**

## Meta

Compare agentic employee travel with portal-first booking and fragmented
expense workflows.

## Hero

H1:

**Same trip. Different operating model.**

Be factual and fair.

Avoid naming competitors without legal/marketing approval.

------------------------------------------------------------------------

# 57. Company

## URL

`/company`

## SEO title

**Miraee \| AI-Native Employee Travel Company**

## Meta

Miraee is building an AI-native employee travel platform around intent,
agents, travel supply and enterprise control.

## Hero

H1:

**We are rebuilding employee travel around intent.**

## Foundation

A business trip touches booking, policy, payment, support and expense;
employees experience one journey, so the system should too.

## Build philosophy

-   Complete the work
-   Autonomy inside limits
-   A person when it matters
-   The traveler is the test

------------------------------------------------------------------------

# 58. Austin

## URL

`/austin`

## SEO title

**AI Travel Platform in Austin, Texas \| Miraee**

## Meta

Miraee is an Austin-built AI-native employee travel platform focused on
agentic enterprise travel.

## Hero

H1:

**Built in Austin for the way companies travel now.**

Use Austin as a product story, not a tourist page.

Point of view:

Miraee is building software that acts on intent rather than asking
employees to operate another system.

Use only approved company/location facts.

Avoid unsupported claims about the Austin ecosystem.

------------------------------------------------------------------------

# 59. Security

## URL

`/security`

## SEO title

**Enterprise Security & AI Controls for Travel \| Miraee**

## Meta

See how Miraee approaches data protection, agent permissions,
auditability and traveler privacy.

## Hero

H1:

**AI autonomy. Enterprise control.**

Controls:

-   Data separation
-   Role-based permissions
-   Auditability
-   Human escalation
-   Documented lifecycle

Use the same governance/action table as the AI Governance page.

Keep one canonical version in CMS to avoid content drift.

------------------------------------------------------------------------

# 60. Careers

## URL

`/careers`

## SEO title

**Careers at Miraee \| Build the Future of Travel**

## Meta

Join Miraee to build AI-native software for the future of employee
travel.

## Hero

H1:

**Build the future of global travel.**

Culture:

Engineering-led, AI-forward.

Avoid generic startup clichés.

Open roles:

-   Dynamic job list
-   Filter by function and location
-   Each role has canonical application URL

------------------------------------------------------------------------

# 61. Contact / Demo

## URL

`/contact`

## SEO title

**See Miraee in Action \| AI Employee Travel Demo**

## Meta

Book a Miraee demo to see AI-native employee travel, agentic booking,
disruption and expense workflows.

## Hero

H1:

**Bring us a real trip.**

## Demo process

1.  Demo
2.  Mutual NDA if needed
3.  Optional savings analysis

Use three-step horizontal flow.

## Form

Fields:

-   First name
-   Last name
-   Work email
-   Company
-   Optional role
-   Optional company size
-   Optional message

Requirements:

-   Inline validation
-   Success state
-   Server-side validation
-   Spam protection
-   CRM handoff
-   Consent logging
-   Clear error states

------------------------------------------------------------------------

# 62. Resources Hub

## URL

`/resources`

## SEO title

**AI, Corporate Travel & Expense Insights \| Miraee**

## Meta

Research, guides and practical insights for teams building AI-native
employee travel programs.

## Hero

H1:

**Insights for the agentic era.**

Intro:

Research and practical guidance for teams rebuilding how their companies
travel.

UI:

-   Search
-   Category filters

Featured content:

Start with 3--5 flagship guides rather than a large empty archive.

UI:

-   One large card
-   Two smaller cards

## Topic clusters

-   AI corporate travel
-   Agentic AI
-   Corporate travel management
-   Travel policy automation
-   Travel expense management
-   Duty of care
-   Corporate travel savings

------------------------------------------------------------------------

# 63. SEO Resource Backlog

## P0

### What Is Agentic AI in Corporate Travel?

URL:

`/resources/agentic-ai-corporate-travel`

Intent:

Educational / category

### AI Travel Assistant vs Corporate Booking Tool

URL:

`/resources/ai-travel-assistant-vs-booking-tool`

Intent:

Comparison

### How AI Can Automate Business Travel Expenses

URL:

`/resources/ai-business-travel-expenses`

Intent:

Educational

### What Should an AI Travel Policy Engine Do?

URL:

`/resources/ai-travel-policy-engine`

Intent:

Educational

## P1

### How Autonomous Travel Rebooking Works

URL:

`/resources/automated-travel-rebooking`

Intent:

Educational

### Corporate Travel Automation: What to Automate First

URL:

`/resources/corporate-travel-automation`

Intent:

Practical guide

### How to Evaluate an AI Employee Travel Platform

URL:

`/resources/evaluate-ai-travel-platform`

Intent:

BOFU

### Corporate Travel Savings: Where Leakage Usually Happens

URL:

`/resources/corporate-travel-savings-leakage`

Intent:

Problem research

### Travel Duty of Care in an AI-Native Program

URL:

`/resources/travel-duty-of-care-ai`

Intent:

Educational

## P2

### Business Travel Policy: A Practical Framework

URL:

`/resources/business-travel-policy-framework`

Intent:

Educational

------------------------------------------------------------------------

# 64. Resource Article Template

Every resource article should contain:

1.  Hero
    -   Title
    -   One-sentence answer
2.  Author/date/category
3.  Jump links
4.  Main argument
5.  Evidence/examples
6.  FAQ
7.  Related product page
8.  Related articles
9.  Demo CTA

Resource CMS fields:

-   Type
-   Title
-   Author
-   Date
-   Category
-   Excerpt
-   Body
-   CTA
-   Related resources

------------------------------------------------------------------------

# 65. Master FAQ

## What is Miraee?

Miraee is an AI-native employee travel platform that can plan, book,
change and support business travel while connecting policy, payment and
expense workflows.

## How is Miraee different from a travel management company?

Miraee is software designed around continuous travel workflows. Human
specialists remain available for cases that need judgment or
intervention.

## What does "agentic AI" mean in travel?

It means software can complete bounded tasks instead of only suggesting
the next action. Miraee uses specialized agents for booking, policy,
negotiation, rebooking, expense and support.

## Can employees use an avatar?

Miraee is designed to support conversation, voice and avatar-based
interaction. The launch experience should demonstrate only the
interactions that are actually supported in the product.

## Can companies control what the agents can do?

Yes. Agent behavior should operate inside policy, permission, budget and
approval boundaries defined by the program.

## What happens during disruption?

Miraee can monitor trip context, identify alternatives and route
rebooking decisions according to configured limits and human approval
rules.

## Does Miraee handle expenses?

The platform is designed to connect the booking and expense lifecycle so
receipts, categorization, matching and reconciliation can be automated.

## Can business and personal travel coexist?

The intended experience supports both while keeping company and personal
payment/reporting boundaries separate.

## Which systems can Miraee connect to?

The current architecture includes identity, HRIS, ERP/accounting, card
networks, calendar, email and chat integrations; exact supported vendors
should be listed only when validated.

## How long does implementation take?

Use the current approved implementation statement only after
product/implementation leadership verifies the exact deployment
timeline.

------------------------------------------------------------------------

# 66. CMS / Content Model

## Page

Fields:

-   slug
-   title
-   H1
-   intro
-   SEO title
-   meta
-   OG image
-   sections
-   related pages

## Resource

Fields:

-   type
-   title
-   author
-   date
-   category
-   excerpt
-   body
-   CTA
-   related resources

## FAQ

Fields:

-   question
-   answer
-   category
-   sort order

## Job

Fields:

-   title
-   location
-   department
-   description
-   external application URL

## Integration

Fields:

-   category
-   name
-   description
-   icon
-   URL
-   status

------------------------------------------------------------------------

# 67. Canonical Internal Linking Map

  From               Link to             Anchor / CTA
  ------------------ ------------------- --------------------------------------
  Homepage           Platform            Explore the Platform
  Homepage           Avatar              Meet the face of your travel program
  Homepage           Agentic Travel      See how the agents work
  Homepage           Governance          Autonomy needs boundaries
  Platform           Integrations        Fits your existing stack
  Platform           Implementation      See how implementation works
  AI Governance      Security            See the control model
  AI Avatar          Avatar experience   Meet the AI travel assistant
  Solutions hub      Role pages          Explore your role
  Role pages         Demo                See Miraee in Action
  Travel use cases   Platform            See the underlying platform
  Economics          Demo                Prove the economics
  Resources          Product pages       Explore the product
  Austin             Company             Meet the company
  Security           Governance          Explore AI governance

------------------------------------------------------------------------

# 68. Canonical CTA System

  -------------------------------------------------------------------------------
  CTA                     Use case                Destination
  ----------------------- ----------------------- -------------------------------
  See Miraee in Action    Primary conversion      `/contact`

  Explore the Platform    Product exploration     `/platform`

  Meet the AI Assistant   Avatar/employee         `/ai/avatar-travel-assistant`
                          experience              

  See the Agents Work     AI architecture         `/ai/agentic-travel`

  Explore Integrations    Technical buyer         `/product/integrations`

  Prove the Economics     Commercial evaluation   `/why-miraee/economics`

  Read the Security Model Security evaluation     `/security`
  -------------------------------------------------------------------------------

Do not hard-code duplicate CTA URLs in unrelated components.

Use centralized route/configuration data where practical.

------------------------------------------------------------------------

# 69. Analytics

Track:

-   Page views
-   CTA clicks
-   Demo starts
-   Form starts
-   Form completion
-   Video engagement
-   Key product-demo interactions

## Canonical event names

  Event                    Trigger
  ------------------------ -------------------------------------
  `cta_demo_click`         Any demo CTA click
  `cta_platform_click`     Platform exploration CTA
  `nav_primary_click`      Top-nav item click
  `avatar_demo_start`      Avatar demo starts
  `avatar_demo_complete`   Avatar demo reaches terminal state
  `video_play`             Video starts
  `video_50`               50% video progress
  `video_complete`         Video completes
  `form_start`             Demo/contact form first interaction
  `form_submit`            Successful form submission
  `faq_open`               FAQ expanded
  `pricing_audit_click`    Savings audit CTA click

Do not rename these without updating this source of truth and the
implementation.

Do not create page-specific duplicates unless an explicit analytics
requirement demands them.

Never send sensitive personal data in analytics events.

------------------------------------------------------------------------

# 70. Analytics Architecture

Analytics should be attached at reusable component boundaries where
practical.

For example:

-   Shared CTA component → CTA analytics
-   Navigation component → nav analytics
-   Avatar component → avatar analytics
-   Video component → video analytics
-   FAQ component → FAQ analytics
-   Form component → form analytics

Avoid scattering duplicated tracking logic across page files.

------------------------------------------------------------------------

# 71. Forms

Forms require:

-   Client-side feedback
-   Server-side validation
-   Spam protection
-   CRM handoff
-   Consent logging
-   Accessible errors
-   Success state
-   Failure state
-   UTM attribution preservation where applicable

Never rely exclusively on client-side validation.

Never expose sensitive information through analytics.

------------------------------------------------------------------------

# 72. Security

Use:

-   Content Security Policy where practical
-   Secure headers
-   Form abuse protection
-   Server-side validation
-   No sensitive data in analytics

Do not claim certifications unless verified.

Do not claim specific security architecture unless approved.

Do not add vague security lock imagery as a substitute for evidence.

------------------------------------------------------------------------

# 73. 404

Create a custom 404 page containing:

-   Useful navigation
-   Search where appropriate
-   CTA to the platform

Test direct access and common broken/legacy paths.

------------------------------------------------------------------------

# 74. Redirects

Prepare 301 redirects from the previous website structure.

When changing a route:

1.  Update this source of truth.
2.  Update canonical metadata.
3.  Update internal links.
4.  Add a 301 redirect.
5.  Check sitemap impact.
6.  Check analytics.
7.  Check SEO impact.

Never casually rename a canonical route.

------------------------------------------------------------------------

# 75. Data / Demo Rules

All marketing demos must use:

-   Deterministic scripted states
-   Synthetic data
-   Fake audit records where required
-   No live personal data
-   No real PII
-   No unnecessary live LLM dependency

The marketing demo should be fast, reproducible and stable.

------------------------------------------------------------------------

# 76. Agent Architecture Rules

The six-agent model is:

1.  Booking
2.  Policy
3.  Negotiation
4.  Rebooking
5.  Expense
6.  Support

Use structured data.

Agent diagrams should prefer:

-   SVG
-   HTML labels
-   Accessible text

Avoid rasterized diagrams when the information needs to remain
interactive or accessible.

------------------------------------------------------------------------

# 77. Governance Rules

The governance model must communicate:

-   Policy
-   Permissions
-   Budget
-   Approvals
-   Human-in-the-loop
-   Audit trail
-   Role-based permissions

The website must not imply unlimited AI autonomy.

Use the concept:

> Autonomy with guardrails.

------------------------------------------------------------------------

# 78. Page Templates

Recommended templates:

``` text
ProductPageTemplate
AIPagesTemplate
SolutionPageTemplate
TravelUseCaseTemplate
WhyMiraeePageTemplate
ResourcePageTemplate
CompanyPageTemplate
```

Templates should compose shared sections and domain components.

They should not contain page-specific product claims that belong in
content data.

------------------------------------------------------------------------

# 79. Reusable Global Component Library

The production handoff defines these reusable components:

-   Announcement bar
-   Sticky nav
-   Hero split
-   Hero product demo
-   Conversation demo
-   Logo-free proof strip
-   Metric cards
-   3/4-card benefit grid
-   Agent card grid
-   Workflow timeline
-   Comparison matrix
-   Role cards
-   Use-case cards
-   Feature deep dive
-   Interface tabs
-   Interactive architecture diagram
-   Policy/action matrix
-   Security control grid
-   FAQ accordion
-   Related pages rail
-   CTA banner
-   Footer mega-grid

These should be implemented as reusable components rather than
page-specific markup.

------------------------------------------------------------------------

# 80. Accessibility Contracts by Component

## Navigation

-   Keyboard accessible
-   Focusable
-   Visible focus
-   Correct expanded state
-   Mobile drawer accessible

## Hero

-   Correct heading hierarchy
-   Accessible CTA
-   Media alternative where required

## Demo

-   Keyboard controls
-   Transcript
-   Reset/replay
-   Reduced-motion fallback

## Avatar

-   State communicated accessibly
-   Transcript
-   No real PII

## Agent cards

-   Keyboard/focus state
-   State changes accessible

## Comparison

-   Semantic table
-   Horizontal scroll on mobile where needed

## FAQ

-   Keyboard accessible
-   `aria-expanded`
-   Correct button semantics
-   Optional deep links

## Form

-   Labels
-   Error associations
-   Keyboard navigation
-   Success/error announcements as appropriate

------------------------------------------------------------------------

# 81. Responsive Component Rules

Every reusable component must be reviewed at:

-   Mobile
-   Tablet
-   Desktop
-   Wide desktop

Components must not assume desktop-only interaction.

Hover interactions must have an equivalent accessible focus/touch
interaction where appropriate.

Do not rely exclusively on hover for important information.

------------------------------------------------------------------------

# 82. Performance Rules for Components

Each component must avoid unnecessary:

-   State
-   Effects
-   Re-renders
-   Large dependencies
-   Heavy assets
-   Client-side computation

Do not import large libraries for trivial behavior.

Lazy-load expensive experiences.

Prefer CSS/SVG for lightweight visual interaction when appropriate.

------------------------------------------------------------------------

# 83. Dependency Rules

Before adding a dependency:

1.  Check whether React can solve the requirement.
2.  Check whether Tailwind can solve the styling.
3.  Check whether shadcn/ui already provides the primitive.
4.  Check whether the project already has an equivalent.
5.  Add a dependency only when justified.

Do not introduce duplicate libraries for the same responsibility.

------------------------------------------------------------------------

# 84. AI Coding Agent Operating Rules

## Before coding

The AI coding agent must:

1.  Read this document.
2.  Inspect the existing repository.
3.  Inspect existing components.
4.  Inspect existing shadcn/ui components.
5.  Inspect Tailwind configuration.
6.  Inspect design tokens.
7.  Inspect routes.
8.  Inspect content/data structures.
9.  Reuse existing abstractions before creating new ones.

## During coding

The agent must:

-   Use React.
-   Use TypeScript.
-   Use Vite.
-   Use Tailwind.
-   Use shadcn/ui where appropriate.
-   Use Miraee semantic tokens.
-   Use Geist for headings.
-   Use Inter for body copy.
-   Follow component boundaries.
-   Keep repeated UI data-driven.
-   Preserve accessibility.
-   Preserve responsive behavior.
-   Preserve reduced-motion behavior.
-   Preserve analytics.
-   Preserve SEO.
-   Avoid unnecessary dependencies.
-   Avoid fake claims.
-   Avoid real PII.

## After coding

Run relevant:

-   TypeScript checks
-   Linting
-   Tests
-   Production build
-   Responsive checks
-   Accessibility checks

A task is not complete merely because the page renders visually.

------------------------------------------------------------------------

# 85. Prohibited AI Coding Patterns

The AI coding agent must not:

-   Migrate away from React/Vite without approval.
-   Introduce another styling framework.
-   Create a second design-token system.
-   Introduce version-specific design tokens.
-   Use Sora or Plus Jakarta Sans in new components.
-   Hard-code font families unnecessarily.
-   Create page-specific duplicate components.
-   Copy/paste repeated UI.
-   Build giant monolithic pages.
-   Create boolean-explosion APIs.
-   Rebuild shadcn primitives unnecessarily.
-   Remove accessibility behavior.
-   Remove focus states.
-   Remove reduced-motion behavior.
-   Use global CSS hacks for local problems.
-   Add unnecessary dependencies.
-   Add fake testimonials.
-   Add fake customer logos.
-   Add fabricated ratings.
-   Add unsupported certifications.
-   Add unsupported numeric claims.
-   Add real PII to demos.
-   Rename canonical URLs without updating this document.
-   Rename analytics events without updating this document.
-   Introduce `noindex` without explicit justification.
-   Remove internal links without checking SEO impact.
-   Bypass server-side form validation.
-   Invent unsupported product capabilities.

------------------------------------------------------------------------

# 86. Change Management

Any change to the following requires updating this source of truth:

-   Route
-   Canonical URL
-   SEO title
-   Meta description
-   Navigation
-   CTA destination
-   Analytics event
-   Component architecture
-   CMS model
-   Product claim
-   Security claim
-   Supply claim
-   Accessibility behavior
-   Performance requirement
-   Design tokens
-   Typography
-   Technology stack

The implementation and this document must not drift.

------------------------------------------------------------------------

# 87. Definition of Done

A page/component is complete only when the applicable requirements below
are satisfied.

## Content

-   H1 approved
-   Copy aligned with approved capabilities
-   Claims verified
-   No fabricated proof
-   Terminology consistent

## Design

-   Desktop reviewed
-   Tablet reviewed
-   Mobile reviewed
-   Hover reviewed
-   Focus reviewed
-   Empty state defined where applicable
-   Loading state defined where applicable
-   Error state defined where applicable
-   Reduced-motion state defined
-   Avatar fallback defined where applicable
-   Long-form visual rhythm preserved

## Engineering

-   URL resolves
-   Canonical configured
-   Metadata configured
-   Sitemap impact checked
-   robots impact checked
-   OG configured
-   Structured data validated where applicable
-   Forms tested
-   Analytics tested
-   404 tested
-   Redirects tested

## Accessibility

-   Keyboard navigation works
-   Focus is visible
-   Contrast passes
-   Images have appropriate alt treatment
-   Decorative images are ignored by assistive technology
-   Video has captions
-   Reduced-motion support works
-   Accordion buttons expose expanded state

## Performance

-   Hero LCP optimized
-   Fonts responsibly loaded
-   Below-fold media lazy-loaded
-   No unnecessary blocking third-party scripts
-   Avatar demo lightweight
-   Mobile performance benchmarked

## SEO

-   Unique title
-   Unique meta
-   One H1
-   Internal links
-   OG previews
-   XML sitemap
-   No accidental noindex
-   Redirect map prepared

## Conversion

-   Primary CTA above fold
-   Demo/contact form tested
-   Success state defined
-   CRM handoff verified
-   UTM attribution preserved
-   No broken CTA links

------------------------------------------------------------------------

# 88. Launch Checklist

## Content

-   Every page has one clear H1.
-   All copy reviewed against approved product capabilities.
-   All numeric/security/supply claims verified.
-   No fabricated customer proof.
-   Terminology is consistent:
    -   AI-native
    -   agentic
    -   avatar
    -   travel assistant
    -   employee travel platform
-   FAQ answers do not contradict product behavior.

## Design

-   Desktop approved.
-   Tablet approved.
-   Mobile approved.
-   Hover states defined.
-   Focus states defined.
-   Empty/loading/error states defined.
-   Avatar fallback defined.
-   Reduced-motion state defined.
-   Long-form pages have visual rhythm.
-   No section depends on stock customer logos/testimonials.

## Engineering

-   All URLs resolve.
-   Canonicals set.
-   Sitemap generated.
-   robots.txt correct.
-   OG images configured.
-   Structured data validates.
-   Forms submit and route correctly.
-   Analytics events verified.
-   404 tested.
-   Redirects tested.

## Accessibility

-   Keyboard-only navigation works.
-   Focus is visible.
-   Contrast passes.
-   Images have appropriate alt text.
-   Decorative images are ignored.
-   Video has captions.
-   Reduced motion works.
-   Accordion buttons expose expanded state.

## Performance

-   Hero LCP optimized.
-   Fonts subset/preloaded responsibly.
-   Below-fold media lazy-loaded.
-   No unnecessary blocking third-party scripts.
-   Avatar demo deterministic and lightweight.
-   Mobile performance benchmarked.

## SEO

-   Title/meta unique per page.
-   One H1 per canonical page.
-   Internal linking implemented.
-   OG previews tested.
-   XML sitemap submitted.
-   No accidental noindex.
-   Previous-site redirect map prepared.

## Conversion

-   Primary CTA visible above fold.
-   Contact/demo form tested.
-   Success state defined.
-   CRM handoff verified.
-   UTM attribution preserved.
-   No broken CTA links.

------------------------------------------------------------------------

# 89. Component-Level Development Tickets

## NAV-001

**Definition:** Responsive global navigation, mega menu, keyboard
navigation, sticky behavior and analytics events.

**Done when:**

-   Desktop mega menu works on hover/focus.
-   Mobile drawer works.
-   Sticky behavior works.
-   Keyboard navigation works.
-   CTA is persistent as specified.
-   `nav_primary_click` is tracked.

## HERO-001

**Definition:** Reusable split hero with eyebrow, H1, body, CTA and
media slot.

**Done when:**

-   Props are semantic and typed.
-   Media slot is reusable.
-   Responsive behavior works.
-   Accessibility is correct.

## DEMO-001

**Definition:** Deterministic product conversation demo.

**Must include:**

-   Reset
-   Pause
-   Replay
-   Transcript
-   Reduced-motion fallback

## AVATAR-001

**Definition:** Avatar component.

**States:**

-   Idle
-   Listening
-   Thinking
-   Speaking
-   Complete

**Restrictions:**

-   No live personal data.
-   Deterministic marketing behavior.

## AGENT-001

**Definition:** Six-agent card/diagram component.

**Done when:**

-   Agent states are accessible.
-   Structured data drives cards.
-   Hover/focus reveals responsibilities.

## COMPARE-001

**Definition:** Accessible responsive comparison table.

**Done when:**

-   Semantic table structure.
-   Mobile horizontal scroll.
-   Keyboard accessible.

## FAQ-001

**Definition:** Accessible FAQ accordion.

**Done when:**

-   Keyboard accessible.
-   `aria-expanded` works.
-   Optional deep-link support.
-   Schema only reflects visible FAQ content.

## FORM-001

**Definition:** Lead form.

**Done when:**

-   Validation works.
-   Spam protection works.
-   Success/error states work.
-   CRM integration works.
-   Consent is handled.

## SEO-001

**Definition:** Metadata layer.

**Must include:**

-   Canonical
-   Open Graph
-   Sitemap
-   robots.txt
-   Unique metadata

## ANALYTICS-001

**Definition:** Event schema and primary-funnel dashboard
instrumentation.

## CONTENT-001

**Definition:** CMS schemas for:

-   Pages
-   Resources
-   FAQs
-   Roles
-   Integrations

## A11Y-001

**Definition:** Accessibility pass.

Must include:

-   Keyboard audit
-   Screen-reader audit

## QA-001

**Definition:** Cross-browser and responsive regression suite.

------------------------------------------------------------------------

# 90. Testing Strategy

Tests should cover the reusable component contract.

For applicable components test:

-   Rendering
-   Interaction
-   Keyboard behavior
-   Responsive behavior
-   State transitions
-   Accessibility
-   Analytics
-   Reduced-motion fallback

Priority components:

-   Navigation
-   Hero
-   Demo
-   Avatar
-   Agent card
-   Workflow
-   Comparison
-   FAQ
-   Form
-   CTA

------------------------------------------------------------------------

# 91. Data-Driven Content Rules

Repeated content must be represented as structured data.

Examples:

-   Navigation items
-   Agents
-   Role cards
-   Use cases
-   Integrations
-   FAQs
-   Resources
-   Workflow steps
-   Comparison rows

Do not duplicate content in multiple component files when
CMS/configuration can be the source.

Security/governance action matrices should have one canonical data
source to avoid drift between `/ai/governance` and `/security`.

------------------------------------------------------------------------

# 92. Product Capability Rules

The website must distinguish between:

1.  Current verified capabilities
2.  Planned concepts
3.  Recommended UI/SEO architecture

Do not turn a recommended design/architecture addition into a claim that
the current product already supports that functionality.

The supplied handoff's UI, SEO, architecture and launch additions are
recommendations unless separately verified.

------------------------------------------------------------------------

# 93. Terminology Rules

Use consistently:

-   AI-native
-   Agentic AI
-   AI agents
-   AI travel assistant
-   Avatar
-   Employee travel platform
-   Travel lifecycle
-   Policy
-   Permissions
-   Approvals
-   Auditability
-   Human escalation

Avoid unnecessary terminology drift.

Do not use "autonomous" in a way that implies unlimited authority.

------------------------------------------------------------------------

# 94. Visual Quality Rules

Miraee should feel:

-   Premium
-   Calm
-   Intelligent
-   Modern
-   Human
-   Product-first

Avoid:

-   Generic SaaS gradients
-   Overly sci-fi AI imagery
-   Fake product screenshots
-   Generic travel stock photography
-   Decorative avatars
-   Static dashboard wallpaper
-   Vague security imagery
-   Marketing-heavy visual noise

The UI should demonstrate the product rather than merely describe it.

------------------------------------------------------------------------

# 95. Marketing Demo Rules

Marketing demos must show actual concepts through reproducible states.

Do not fake:

-   Live customer activity
-   Live customer data
-   Real traveler PII
-   Unsupported product interactions
-   Unsupported agent autonomy
-   Unsupported security controls

Use synthetic data and deterministic state transitions.

------------------------------------------------------------------------

# 96. Final Architecture Decision Record

The final frontend architecture is:

``` text
React
+
Vite
+
TypeScript
+
Tailwind CSS
+
shadcn/ui
+
Miraee Semantic Design Tokens
+
Data-Driven Content
+
Reusable Components
+
Page Templates
+
Canonical Route/SEO System
```

### Responsibility model

``` text
React
→ composition and behavior

Vite
→ build/development environment

TypeScript
→ type safety

Tailwind
→ styling/layout/responsive system

shadcn/ui
→ accessible interaction primitives

Miraee tokens
→ brand visual language

Domain components
→ reusable product-specific UI

Templates
→ page composition

Routes
→ URL/content/metadata resolution
```

------------------------------------------------------------------------

# 97. Final AI Agent Rulebook

Before making any change, the AI coding agent must ask:

### Architecture

-   Does this belong in an existing component?
-   Am I duplicating something?
-   Does the dependency direction remain correct?

### Styling

-   Can Tailwind handle this?
-   Am I using a semantic Miraee token?
-   Am I introducing an unnecessary arbitrary value?
-   Am I creating legacy/version-specific tokens?

### UI primitives

-   Does shadcn/ui already solve this?
-   Can an existing shadcn component be extended?

### Typography

-   Is this heading using Geist?
-   Is this body copy using Inter?
-   Am I accidentally reintroducing Sora or Plus Jakarta Sans?

### Accessibility

-   Is it keyboard accessible?
-   Is focus visible?
-   Are semantic elements used?
-   Are state changes accessible?
-   Does reduced motion work?

### SEO

-   Does this change affect a canonical URL?
-   Does it affect metadata?
-   Does it affect internal linking?
-   Does it affect sitemap/indexing?

### Analytics

-   Does this interaction need an existing canonical event?
-   Am I creating duplicate tracking?

### Product truth

-   Is this capability verified?
-   Am I making a claim that has not been approved?
-   Am I accidentally implying unlimited AI autonomy?

### Performance

-   Is this adding unnecessary JavaScript?
-   Is this adding a dependency?
-   Is this loading heavy media too early?

### Final principle

> **Do not optimize for making the current task work at the expense of
> the system. Build reusable, accessible, semantic, token-driven
> components that can be composed throughout Miraee.**

------------------------------------------------------------------------

# 98. Source / Editorial Basis

This project source of truth is based on the supplied **Miraee Website
Production Handoff \| Launch specification** and the finalized
architectural decisions made for this project.

The supplied handoff covers:

-   UI/UX
-   Content
-   SEO
-   Engineering
-   Analytics
-   Accessibility
-   Performance
-   Security
-   CMS
-   Launch QA
-   Page architecture
-   Product messaging
-   Agent architecture
-   Integrations
-   Security concepts
-   Use cases
-   Company story
-   Resource strategy

The supplied handoff explicitly states that engineering should treat
URLs, metadata, interactions, event names, accessibility, schema and
performance requirements as implementation requirements.

It also states that the page sections are component-ready content
specifications and that product claims must be validated before
publication.

Where the handoff expands source material into UI, SEO, architecture or
launch structure, those additions must be treated as implementation
recommendations rather than proof that the current product already
supports every described behavior.

------------------------------------------------------------------------

# 99. Source of Truth Hierarchy

When sources conflict, use this hierarchy:

1.  **Explicitly approved current product capability**
2.  **This `PROJECT_SOURCE_OF_TRUTH.md`**
3.  **Approved CMS/content data**
4.  **Existing implementation**
5.  **Legacy implementation conventions**

Existing code does not automatically override this document.

Legacy code must not be copied merely because it exists.

If a legacy implementation conflicts with a finalized semantic token,
architecture rule, typography decision or canonical route, the finalized
system takes precedence unless explicitly superseded.

------------------------------------------------------------------------

# 100. Final Non-Negotiable Rule

> **Build once. Compose everywhere.**

Miraee's website must remain:

-   React-based
-   Vite-based
-   TypeScript-based
-   Tailwind-based
-   shadcn/ui-based
-   Token-driven
-   Component-based
-   Data-driven
-   Accessible
-   Responsive
-   Performant
-   SEO-aware
-   Analytics-aware
-   Product-truthful

**Geist is the canonical heading font.**

**Inter is the canonical body font.**

**Tailwind is the primary styling system.**

**shadcn/ui is the preferred accessible UI foundation.**

**Miraee semantic design tokens are the visual source of truth.**

**Pages compose components; components do not become pages.**

**Never create a new abstraction when an appropriate existing
abstraction can be reused.**

**Never invent product capabilities, customer proof, security claims,
numeric claims or unsupported AI autonomy.**

**Any architectural, route, SEO, analytics, content, accessibility,
performance, typography or design-system change must be reflected in
this source of truth.**

## Terms & Conditions page (2026-09-15)

- Route: `/terms-and-conditions`, linked from the shared footer.
- SEO title: `Terms & Conditions | Miraee`.
- Meta description: `Read the terms governing access to and use of the Miraee Platform, travel services, AI features, payments and related services.`
- Source: `src/content/terms-of-use.txt`, preserving supplied copy dated 07/07/2026.
- `src/content/terms.ts` groups the source under navigable editorial headings, retaining the Section 6 and Section 10 references.
- Reusable `LegalPage` template provides responsive long-form reading, a collapsible section index, anchor navigation and visible keyboard focus using existing theme tokens, Geist headings and Inter body text.
- Supplied arbitration opt-out and dispute-notice URLs still point to localhost:5175; production form destinations must be supplied before launch.

### Terms page visual update (2026-09-15)
- Reference-led white page with subtle 108px background grid, oversized `Miraee Terms of Use` heading, and a centered 1248px reading column.
- Introduction precedes a collapsed, full-width section index; section links expand into two columns on desktop and one on mobile.
- Body copy uses the existing muted text token for readable contrast; legal wording is unchanged.
- Shared navigation uses its filled background on this route so links remain legible above the white canvas.

### Terms typography refinement (2026-09-15)
- Reduced the title to a responsive 32–64px scale, body copy to 16px, date to 14px, section headings to 20–22px, and index summary to 16–18px.
- Tightened hero, paragraph and section spacing while preserving the white grid layout and supplied legal content.

### Legal document theme support (2026-09-15)
- `legal-page.css` scopes semantic color overrides to the legal template, following the existing default-dark / `.light` theme convention.
- Light mode retains the white grid canvas; dark mode uses the site dark canvas with warm light headings, readable muted body copy and a subtly raised index panel.
- Grid, borders, summary marker, links and keyboard focus use theme-aware tokens. Orange links use darker orange in light mode and lighter orange in dark mode for contrast.
- The reduced type scale and legal wording remain unchanged.

### Photography delivery optimization (2026-09-15)
- Six generated PNG photos are delivered as WebP variants at 480, 800, 1200 and up to 1600 pixels (never upscaled). PNG originals remain editing sources and are not imported into the application.
- `scripts/optimize-photography.py` reproducibly generates quality-80 WebP assets and `src/content/photography.ts` with intrinsic dimensions and srcsets.
- Photo usages declare responsive sizes and async decoding. Only the home and platform hero images are explicitly eager/high-priority on their respective routes; remaining section imagery is lazy-loaded, including the platform screenshots.
- Largest variants total 477,198 bytes versus 11,606,988 source bytes (95.9% reduction). Browsers select one appropriate variant per image.

### Legal intake form alignment (2026-09-15)
- Dispute Notice and Arbitration Opt Out import the same `legal-intake-form.css` theme layer and render the same `LegalIntakeForm` component, ensuring identical field, control, panel, spacing, and responsive behavior.
- Theme detection follows the app convention: default dark mode uses `:root:not(.light)` and light mode uses `.light`, so both routes remain correct before and after the toggle.
