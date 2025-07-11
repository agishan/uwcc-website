# UWCC Website - University Cooking Club

A modern, responsive website for the University Cooking Club built with React, TypeScript, and Tailwind CSS.

## 🏗️ Architecture Overview

```
uwcc-website/
├── app/
│   ├── components/          # Reusable React components
│   ├── routes/             # Page components and routing
│   ├── root.tsx            # Root layout component
│   ├── app.css             # Global styles and design system
│   └── routes.ts           # Route configuration
├── public/
│   ├── images/             # Static image assets
│   └── favicon.ico         # Site favicon
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: `#00897b` (Teal) - Used for buttons, highlights, and footer
- **Background**: `#ffffff` (White) - Main background color
- **Accent**: `#e0e0e0` (Light Gray) - Search bars and section dividers
- **Text**: 
  - Black (`#000000`) for headings
  - Gray (`#374151`) for body text
  - White (`#ffffff`) on teal backgrounds

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, black text
- **Body**: Regular weight, gray text
- **Buttons**: Semibold, white text on teal background

### **Layout Principles**
- **Mobile-first**: Responsive design starting from mobile
- **Grid System**: Tailwind's responsive grid with `grid-cols-3`
- **Spacing**: Consistent padding and margins using Tailwind utilities
- **Cards**: White background, rounded corners, drop shadows

## 🧩 Components

### **Core Components**

#### `<Banner />` - Hero Section Component
**Location**: `app/components/Banner.tsx`

**Purpose**: Creates hero sections with background images and call-to-action buttons.

**Props**:
```tsx
type BannerProps = {
  title: string;           // Main heading
  subtitle?: string;       // Optional subtitle
  backgroundImage: string; // Background image URL
  ctaText?: string;       // Call-to-action button text
  ctaLink?: string;       // Call-to-action button link
};
```

**Usage**:
```tsx
<Banner
  title="UW Cooking Club"
  subtitle="Bringing people together, one recipe at a time."
  backgroundImage="/images/banner/hero.jpg"
  ctaText="Join Our Next Event"
  ctaLink="/events"
/>
```

**Features**:
- Semi-transparent white overlay for text readability
- Responsive design with mobile-first approach
- Hover effects on CTA buttons
- Background image with overlay for contrast

---

#### `<Card />` - Reusable Card Component
**Location**: `app/components/Card.tsx`

**Purpose**: Provides consistent card styling across the application.

**Props**:
```tsx
type CardProps = {
  children: ReactNode;     // Card content
  className?: string;      // Additional CSS classes
  onClick?: () => void;    // Optional click handler
};
```

**Usage**:
```tsx
<Card className="p-6">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

**Features**:
- White background with rounded corners
- Drop shadow for depth
- Hover effects when clickable
- Flexible content area

---

#### `<SearchBar />` - Search Input Component
**Location**: `app/components/SearchBar.tsx`

**Purpose**: Provides a styled search input with icon and functionality.

**Props**:
```tsx
type SearchBarProps = {
  placeholder?: string;    // Input placeholder text
  onSearch?: (query: string) => void; // Search callback
  className?: string;      // Additional CSS classes
};
```

**Usage**:
```tsx
<SearchBar 
  placeholder="Search events..." 
  onSearch={(query) => console.log(query)}
  className="max-w-md"
/>
```

**Features**:
- Rounded gray background
- Search icon
- Focus states with teal ring
- Form submission handling

---

#### `<Navbar />` - Navigation Component
**Location**: `app/components/Navbar.tsx`

**Purpose**: Main navigation bar with links and social icons.

**Features**:
- Fixed positioning at top
- Responsive design (mobile menu)
- Active link highlighting
- Social media icons (Discord, Instagram)
- Teal primary color branding

**Navigation Links**:
- Home (`/`)
- Events (`/events`)
- About Us (`/about`)
- Execs (`/execs`)

---

#### `<Footer />` - Footer Component
**Location**: `app/components/Footer.tsx`

**Purpose**: Site footer with contact info and social links.

**Features**:
- Teal background with white text
- Fixed to bottom on large screens
- Contact information
- Social media icons
- Responsive layout

---

#### `<EventCard />` - Event Display Component
**Location**: `app/components/EventCard.tsx`

**Purpose**: Displays event information in a card format.

**Props**:
```tsx
type Event = {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
};
```

**Features**:
- Event image with error fallback
- Event title and date
- Description text
- Tag system for categorization
- Links to event detail pages
- Responsive design

---

#### `<ExecCard />` - Executive Member Component
**Location**: `app/components/ExecCard.tsx`

**Purpose**: Displays team member information in a card format.

**Props**:
```tsx
type ExecMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};
```

**Features**:
- Circular portrait image with fallback initials
- Member name and role
- Short bio
- Error handling for missing images
- Consistent styling with other cards

## 🛣️ Routes & Pages

### **Route Configuration**
**Location**: `app/routes.ts`

```tsx
export default [
  index("routes/home.tsx"),           // Home page (/)
  route("events", "routes/events.tsx"), // Events listing (/events)
  route("events/:id", "routes/events.$id.tsx"), // Event details (/events/1)
  route("about", "routes/about.tsx"), // About page (/about)
  route("execs", "routes/execs.tsx"), // Execs page (/execs)
] satisfies RouteConfig;
```

### **Page Components**

#### **Home Page** (`/`)
**Location**: `app/routes/home.tsx`

**Features**:
- Hero banner with background image
- "Who are we?" section
- Most recent event preview
- Call-to-action buttons
- Social media integration

**Sections**:
1. **Hero Banner**: Large banner with club name and CTA
2. **About Section**: Brief club description
3. **Recent Event**: Preview of latest event with image and link

---

#### **Events Page** (`/events`)
**Location**: `app/routes/events.tsx`

**Features**:
- Grid layout of event cards
- Search functionality
- Responsive design (1-3 columns)
- Event filtering capabilities

**Data Structure**:
```tsx
const events = [
  {
    id: 1,
    title: "Sushi Night",
    date: "2024-03-15",
    image: "/images/events/sushi-night.jpg",
    description: "Learned to roll sushi and make miso soup!",
    tags: ["Beginner", "Japanese", "1.5h"],
  },
  // ... more events
];
```

---

#### **Event Detail Page** (`/events/:id`)
**Location**: `app/routes/events.$id.tsx`

**Features**:
- Event images gallery
- Detailed event description
- Complete recipe with ingredients and steps
- Event tags and metadata
- Responsive image layout

**Data Structure**:
```tsx
const eventDetails = {
  1: {
    title: "Sushi Night",
    date: "2024-03-15",
    images: ["/images/events/sushi-1.jpg", "/images/events/sushi-2.jpg"],
    description: "We learned to roll sushi and make miso soup!",
    recipe: {
      ingredients: ["2 cups sushi rice", "Nori sheets", ...],
      steps: ["Cook sushi rice...", "Lay out nori...", ...],
    },
    tags: ["Beginner", "Japanese", "1.5h"],
  },
  // ... more events
};
```

---

#### **Execs Page** (`/execs`)
**Location**: `app/routes/execs.tsx`

**Features**:
- Team members organized by department
- Portrait images with fallback initials
- Role and bio information
- Responsive card layout

**Data Structure**:
```tsx
const execTeams = [
  {
    team: "Marketing",
    members: [
      {
        name: "Alice Kim",
        role: "Marketing Lead",
        bio: "Loves food photography and spicy ramen.",
        image: "/images/execs/alice-kim.jpg"
      },
      // ... more members
    ],
  },
  // ... more teams
];
```

---

#### **About Page** (`/about`)
**Location**: `app/routes/about.tsx`

**Features**:
- Club banner image
- Mission statement
- Club description
- Contact information

## 🖼️ Image Management

### **Image Directory Structure**
```
public/images/
├── events/     # Event photos (400x300px, 600x400px)
├── execs/      # Team portraits (200x200px)
├── banner/     # Hero images (1200x400px)
└── about/      # Club photos (1200x300px)
```

### **Image Guidelines**
- **Format**: JPG/PNG recommended
- **Size**: Keep under 500KB for performance
- **Aspect Ratios**: Maintain consistent ratios per image type
- **Alt Text**: Always include descriptive alt text
- **Fallbacks**: Error handling for missing images

### **Adding Images**
1. **Place images** in appropriate folders under `public/images/`
2. **Update image paths** in component files
3. **Test loading** to ensure proper display

**Example**:
```tsx
// Change from:
image: "https://source.unsplash.com/400x300/?sushi"

// To:
image: "/images/events/sushi-night.jpg"
```

## 🎯 Key Features

### **Responsive Design**
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Flexible grid layouts
- Touch-friendly interactions

### **Performance**
- Image optimization with fallbacks
- Lazy loading for images
- Minimal bundle size
- Fast page transitions

### **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly

### **SEO**
- Meta tags for each page
- Descriptive page titles
- Structured content
- Fast loading times

## 🚀 Development

### **Getting Started**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck
```

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript checks

### **Technology Stack**
- **Framework**: React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Package Manager**: npm

### **File Structure**
```
app/
├── components/     # Reusable UI components
├── routes/         # Page components
├── root.tsx        # Root layout
├── app.css         # Global styles
└── routes.ts       # Route configuration
```

## 🔧 Customization

### **Adding New Pages**
1. Create new route file in `app/routes/`
2. Add route to `app/routes.ts`
3. Update navigation in `Navbar.tsx`

### **Modifying Styles**
- Update `app/app.css` for global styles
- Use Tailwind utilities for component styles
- Custom colors defined in CSS layers

### **Adding New Components**
1. Create component file in `app/components/`
2. Export as default function
3. Import and use in pages

### **Data Management**
- Event data stored in component files
- Consider moving to external data source for larger applications
- Image paths can be centralized in configuration

## 📱 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 🐛 Troubleshooting

### **Common Issues**
1. **Images not loading**: Check file paths and permissions
2. **Styling issues**: Verify Tailwind classes and CSS imports
3. **Routing problems**: Check route configuration in `routes.ts`
4. **Type errors**: Run `npm run typecheck` for TypeScript issues

### **Development Tips**
- Use browser dev tools for debugging
- Check console for error messages
- Verify image paths are correct
- Test responsive design on different screen sizes

## 📄 License
This project is for the University Cooking Club. All rights reserved.

---

**Built with ❤️ for the UWCC community**

## 📚 How to Upload a New Class (Event) with Recipes and Images

### 1. Add Event Images
- Place all event images in a new folder under `public/images/events/`.
  - Example: `public/images/events/asian-foods-2025/`
- Name your group photos and recipe images clearly:
  - `group1.jpg`, `group2.jpg`, `group3.jpg` (for group/event photos)
  - `spring-rolls-1.jpg`, `pad-kra-pao-1.jpg`, etc. (for recipe images)

### 2. Update the Events Data
- Open `app/data/events.ts`.
- Add a new event object with:
  - `id`: Unique number (increment from previous)
  - `title`: Name of the class/event
  - `date`: Date of the event (YYYY-MM-DD)
  - `description`: Short summary of the event
  - `groupPhotos`: Array of 3 group photo paths (see above)
  - `albumUrl`: Link to the Google Photos album for the event
  - `recipeIds`: Array of recipe IDs (see next step)
  - `tags`: Any tags you want (e.g., cuisine, year)

### 3. Add Recipes
- Open `app/data/recipes.ts`.
- For each recipe in the class, add a new object with:
  - `id`: Unique number (increment from previous)
  - `eventId`: The event's ID
  - `sequence`: The order in which the recipe was made in the class
  - `name`: Recipe name
  - `servings` or `makes`: How much it makes/serves
  - `images`: Array of image paths (from the event folder)
  - `ingredients`: Array of ingredient strings
  - `instructions`: Array of step-by-step instructions
  - (Optional) `pairing`, `note`, etc.

### 4. Update Recipe IDs in the Event
- Make sure the `recipeIds` array in your event matches the IDs of the recipes you just added.

### 5. (Optional) Update Google Photos Album
- Upload all your event photos to Google Photos.
- Get the shareable album link and paste it in the `albumUrl` field for the event.

### 6. Check Your Work
- Start your dev server (`npm run dev`).
- Visit the Events and Recipes pages to make sure everything displays correctly.
- Click into the event and recipe detail pages to verify images and instructions show up.

### 📝 Summary Checklist
- [ ] Add images to `public/images/events/<event-folder>/`
- [ ] Add event object to `app/data/events.ts`
- [ ] Add recipe objects to `app/data/recipes.ts`
- [ ] Link recipes to event via `recipeIds`
- [ ] Add Google Photos album link
- [ ] Test in browser
