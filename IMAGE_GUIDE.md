# UWCC Website Image Guide

## 📁 Where to Add Images

### 1. **Public Images (Recommended)**
Create a `public/images/` folder for static images:
```
uwcc-website/
├── public/
│   ├── images/
│   │   ├── events/
│   │   │   ├── sushi-night.jpg
│   │   │   ├── pasta-party.jpg
│   │   │   └── baking-workshop.jpg
│   │   ├── execs/
│   │   │   ├── alice-kim.jpg
│   │   │   ├── ben-lee.jpg
│   │   │   └── carmen-tran.jpg
│   │   ├── banner/
│   │   │   └── hero-banner.jpg
│   │   └── about/
│   │       └── club-photo.jpg
│   └── favicon.ico
```

### 2. **Current Image Locations**

#### **Home Page Images:**
- **Banner**: `app/routes/home.tsx` (line ~25)
  ```tsx
  backgroundImage="https://source.unsplash.com/1200x400/?cooking,kitchen"
  ```
- **Most Recent Event**: `app/routes/home.tsx` (line ~8)
  ```tsx
  image: "https://source.unsplash.com/600x400/?sushi"
  ```

#### **Events Page Images:**
- **Event Cards**: `app/routes/events.tsx` (lines ~6-20)
  ```tsx
  image: "https://source.unsplash.com/400x300/?sushi"
  ```

#### **Event Detail Images:**
- **Event Photos**: `app/routes/events.$id.tsx` (lines ~8-10)
  ```tsx
  images: ["https://source.unsplash.com/600x400/?sushi", "https://source.unsplash.com/600x400/?japanese-food"]
  ```

#### **Execs Page Images:**
- **Exec Portraits**: `app/routes/execs.tsx` (lines ~8-30)
  ```tsx
  image: "https://source.unsplash.com/200x200/?portrait,woman,asian"
  ```

#### **About Page Images:**
- **Club Banner**: `app/routes/about.tsx` (line ~6)
  ```tsx
  src="https://source.unsplash.com/1200x300/?cooking,club"
  ```

## 🖼️ How to Replace Images

### **Option 1: Use Local Images (Recommended)**
1. Add your images to `public/images/`
2. Update the image paths in the code:

```tsx
// Instead of:
image: "https://source.unsplash.com/400x300/?sushi"

// Use:
image: "/images/events/sushi-night.jpg"
```

### **Option 2: Use External URLs**
Replace Unsplash URLs with your own image URLs:
```tsx
image: "https://your-domain.com/images/sushi-event.jpg"
```

### **Option 3: Use Different Unsplash Images**
Change the search terms in Unsplash URLs:
```tsx
// From:
"https://source.unsplash.com/400x300/?sushi"

// To:
"https://source.unsplash.com/400x300/?japanese-cooking"
```

## 📐 Image Sizes & Recommendations

### **Banner Images:**
- **Size**: 1200x400px
- **Format**: JPG/PNG
- **Purpose**: Hero sections, page headers

### **Event Images:**
- **Size**: 400x300px (cards), 600x400px (details)
- **Format**: JPG
- **Purpose**: Event previews and galleries

### **Exec Portraits:**
- **Size**: 200x200px
- **Format**: JPG
- **Purpose**: Team member photos (circular display)

### **About Page:**
- **Size**: 1200x300px
- **Format**: JPG
- **Purpose**: Club banner/group photo

## 🔧 Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Use descriptive filenames** (e.g., `sushi-night-2024.jpg`)
3. **Keep file sizes under 500KB** for web performance
4. **Use consistent aspect ratios** for each image type
5. **Add alt text** for accessibility

## 🚀 Quick Start

1. **Create the images folder:**
   ```bash
   mkdir -p public/images/{events,execs,banner,about}
   ```

2. **Add your images** to the appropriate folders

3. **Update the code** to reference your local images

4. **Test the website** to ensure images load correctly

## 📝 Example Updates

### **Update Event Images:**
```tsx
// In app/routes/events.tsx
const events = [
  {
    id: 1,
    title: "Sushi Night",
    date: "2024-03-15",
    image: "/images/events/sushi-night.jpg", // Your local image
    description: "Learned to roll sushi and make miso soup!",
    tags: ["Beginner", "Japanese", "1.5h"],
  },
  // ... more events
];
```

### **Update Exec Images:**
```tsx
// In app/routes/execs.tsx
{
  name: "Alice Kim", 
  role: "Marketing Lead", 
  bio: "Loves food photography and spicy ramen.",
  image: "/images/execs/alice-kim.jpg" // Your local image
}
```

This guide will help you easily manage and update all images on the UWCC website! 