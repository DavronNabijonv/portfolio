# FrontendDeveloper (FD) - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode toggle, multi-language support (English & Uzbek), and integrated contact form with Telegram bot notifications.

## 🎯 Features

- ✨ **Modern & Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode Toggle** - Smooth theme switching with persistent storage
- 🌍 **Multi-Language Support** - English and Uzbek with language switcher
- 🎬 **Smooth Animations** - Powered by Framer Motion for elegant transitions
- 📧 **Contact Form** - Integrated with Telegram bot for instant notifications
- ♿ **Accessible** - WCAG compliant with semantic HTML
- ⚡ **Performance** - Optimized with Next.js 16 and Turbopack
- 🎨 **Beautiful Typography** - Professional and readable design

## 🏗️ Project Structure

```
app/
├── components/
│   ├── common/
│   │   ├── Navbar.tsx          # Navigation with language & theme toggle
│   │   └── Footer.tsx          # Footer with social links
│   └── sections/
│       ├── HeroSection.tsx      # Hero with name, title, and CTAs
│       ├── AboutSection.tsx     # About me with stats
│       ├── SkillsSection.tsx    # Skills categorized by type
│       ├── ExperienceSection.tsx # Work experience timeline
│       ├── ProjectsSection.tsx  # Portfolio projects
│       └── ContactSection.tsx   # Contact form and info
├── context/
│   ├── ThemeContext.tsx         # Dark/light mode state
│   └── LanguageContext.tsx      # Language selection state
├── i18n/
│   ├── config.ts                # i18n configuration
│   └── useTranslation.ts        # Custom translation hook
├── locales/
│   ├── en.json                  # English translations
│   └── uz.json                  # Uzbek translations
├── api/
│   └── contact/
│       └── route.ts             # Contact form API endpoint
├── layout.tsx                   # Root layout with providers
├── page.tsx                     # Home page
└── globals.css                  # Global styles

public/
└── images/                      # Image assets

.env.example                      # Environment variables template
.env.local                        # Local environment config (not committed)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- npm or yarn package manager

### Installation

1. **Navigate to the project:**
```bash
cd /home/zero/Projects/knowladge/portfolio/fd
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in your Telegram bot credentials

4. **Run development server:**
```bash
npm run dev
```

5. **Open your browser:**
```
http://localhost:3000
```

## 🔧 Configuration

### Telegram Bot Setup

To enable contact form notifications via Telegram:

1. **Create a Telegram Bot:**
   - Open Telegram and message [@BotFather](https://t.me/botfather)
   - Type `/newbot` and follow instructions
   - Copy your bot token

2. **Get Your Chat ID:**
   - Message your bot with any text
   - Visit: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
   - Copy the `chat_id` from the response

3. **Set Environment Variables:**
   - Open `.env.local` and add:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

### Personalize Content

Edit `/app/locales/` JSON files to update:
- Personal information (name, title, location)
- Bio and about section
- Skills and expertise
- Work experience
- Portfolio projects
- Contact information

## 📝 Available Scripts

```bash
# Development server (auto-reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎨 Customization

### Colors & Theme

Edit `app/globals.css` and Tailwind CSS classes in components to customize colors:
- Primary: Purple (`from-purple-500 to-pink-500`)
- Dark mode: Gray-900 background
- Light mode: White background

### Typography

The project uses Google Fonts (Geist) configured in `app/layout.tsx`.

### Animations

Framer Motion animations are configured in each section component. Adjust timing and values in the `variants` objects.

## 🌐 Multi-Language Support

The app includes built-in translations for:
- **English** - Default language
- **Uzbek (Cyrillic)** - Secondary language

Language preference is stored in localStorage and persists across sessions.

## 📱 Responsiveness

The design is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## 🤝 Contact Information

- **Name:** Davronbek Nabijonov
- **Email:** nabijonovdavronbek619@gmail.com
- **Phone:** +998 91 741 29 20
- **Telegram:** [@ndx_09](https://t.me/ndx_09)
- **GitHub:** [DavronNabijonv](https://github.com/DavronNabijonv)
- **Location:** Uzbekistan, Fergana

## 📚 Technologies Used

- **Framework:** Next.js 16.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Icons:** Lucide React
- **Internationalization:** Custom i18n
- **Build Tool:** Turbopack

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Portfolio Projects

- [Dezburxoro](https://www.dezbuxoro.uz/) - E-commerce platform
- [Nippon](https://www.nippon.com.uz/) - Business website
- [Limsa](https://www.limsa.uz/) - Web application platform
- [Fatvo](https://fatvo.uz/lat) - Legal services platform

---

Built with ❤️ using Next.js and modern web technologies
# portfolio
