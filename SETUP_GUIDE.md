# FD Portfolio - Complete Setup Guide

## ✅ Project Status: COMPLETE

Your modern personal portfolio website is fully built and ready to use!

## 📦 What's Included

### ✨ Core Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle with persistent storage
- ✅ Multi-language support (English & Uzbek)
- ✅ Smooth animations with Framer Motion
- ✅ Professional layout and typography
- ✅ Contact form with Telegram integration
- ✅ SEO-friendly structure

### 📄 Pages & Sections

1. **Hero Section** - Name, title, and call-to-action buttons
2. **About Section** - Bio with statistics cards
3. **Skills Section** - Categorized skills (Frontend, Backend, Databases, Languages)
4. **Experience Section** - Work experience timeline
5. **Projects Section** - Portfolio projects with links
6. **Contact Section** - Contact form and information
7. **Navigation Bar** - Language switcher, theme toggle
8. **Footer** - Social links and quick navigation

### 🛠️ Technology Stack

- Next.js 16.1.2 with Turbopack
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Zustand for state management
- Lucide React for icons
- Custom i18n for translations

## 🚀 Quick Start

### 1. Development Server

Start the development server:

```bash
cd /home/zero/Projects/knowladge/portfolio/fd
npm run dev
```

The app will be available at: **http://localhost:3000**

### 2. Configure Telegram Bot (Optional)

To enable contact form notifications:

1. Create a bot: Message [@BotFather](https://t.me/botfather) with `/newbot`
2. Get your Chat ID: Message your bot, then check `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Update `.env.local`:

```
TELEGRAM_BOT_TOKEN=your_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### 3. Customize Your Information

Edit `/app/locales/en.json` and `/app/locales/uz.json` to update:

- Your name and title
- Bio and about section
- Skills and expertise
- Work experience
- Portfolio projects
- Contact information

## 📂 Project Structure

```
app/
├── components/
│   ├── common/
│   │   ├── Navbar.tsx       # Navigation & theme toggle
│   │   └── Footer.tsx       # Footer with links
│   └── sections/            # All page sections
├── context/                 # Zustand stores for theme & language
├── i18n/                    # Translation system
├── locales/                 # en.json & uz.json
├── api/
│   └── contact/route.ts     # Contact form endpoint
├── layout.tsx               # Root layout
├── page.tsx                 # Home page
└── globals.css              # Global styles
```

## 🎨 Customization Guide

### Change Colors

Edit Tailwind classes in components:

- Primary gradient: `from-purple-500 to-pink-500`
- Update in: Navbar, Hero, buttons, etc.

Example:

```tsx
// Change from purple to blue
className = "from-blue-500 to-cyan-500";
```

### Add More Languages

1. Create `/app/locales/fr.json` (example)
2. Update `useLanguageStore` in `/app/context/LanguageContext.tsx`
3. Add button to Navbar

### Update Skills

Edit `/app/locales/en.json`:

```json
"skills": {
  "frontendSkills": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  // Add or remove skills
}
```

### Add Portfolio Projects

Edit `/app/locales/en.json`:

```json
"portfolio": [
  {
    "name": "Your Project",
    "description": "Description here",
    "link": "https://example.com",
    "tags": ["React", "Node.js"]
  }
]
```

## 🌐 Deploy Your Portfolio

### Deploy to Vercel (Recommended)

1. Push to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/your-repo.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
5. Deploy!

### Deploy to Other Platforms

- Netlify, AWS Amplify, Docker, or self-hosted servers
- All support Next.js deployment

## 📝 Available Commands

```bash
# Development (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## 🎯 Next Steps

1. **Personalize Content** - Update locales with your info
2. **Setup Telegram Bot** - Get notifications for contact form
3. **Add Images** - Place images in `/public/images/`
4. **Test Features**:
   - Toggle dark/light mode
   - Switch languages
   - Submit contact form
   - Test responsiveness on mobile
5. **Deploy** - Push to production

## 🔗 Important Links

- **Your Portfolio:** http://localhost:3000
- **GitHub:** [DavronNabijonv](https://github.com/DavronNabijonv)
- **Email:** nabijonovdavronbek619@gmail.com
- **Telegram:** [@ndx_09](https://t.me/ndx_09)

## 📞 Support

### Common Issues

**Issue:** Translations not showing?

- Clear browser cache (Ctrl+F5)
- Check localStorage in DevTools

**Issue:** Dark mode not persisting?

- Check browser localStorage is enabled
- Verify Zustand middleware is working

**Issue:** Contact form not sending?

- Verify Telegram bot token and chat ID
- Check `.env.local` has correct values
- Look at browser console for errors

## 💡 Pro Tips

1. **Smooth Scrolling** - Click navigation items to scroll to sections
2. **Mobile First** - Test on mobile first, then desktop
3. **Language Switching** - Users can switch EN/UZ anytime
4. **Dark Mode** - Automatically respects system preference on first visit
5. **Social Links** - Update in `Footer.tsx` and `HeroSection.tsx`

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Ready to Launch?

Your portfolio is production-ready! Time to:

1. ✏️ Customize with your information
2. 🤖 Setup Telegram bot
3. 🚀 Deploy to Vercel
4. 📢 Share with the world!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Happy coding! 🎉
