"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function PremiumFooter() {
  const footerLinks = {
    shop: [
      { label: "تازه‌رسیده‌ها", href: "/shop/new" },
      { label: "زنانه", href: "/shop/women" },
      { label: "مردانه", href: "/shop/men" },
      { label: "اکسسوری", href: "/shop/accessories" },
      { label: "ساعت", href: "/shop/timepieces" },
    ],
    about: [
      { label: "میراث ما", href: "/heritage" },
      { label: "صنعتگری", href: "/craftsmanship" },
      { label: "پایداری", href: "/sustainability" },
      { label: "فرصت‌های شغلی", href: "/careers" },
    ],
    support: [
      { label: "تماس با ما", href: "/contact" },
      { label: "ارسال و مرجوعی", href: "/shipping" },
      { label: "راهنمای سایز", href: "/size-guide" },
      { label: "دستورالعمل نگهداری", href: "/care" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-xl mb-4">در ارتباط بمانید</h3>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              برای دسترسی اختصاصی به مجموعه‌های جدید و رویدادهای خصوصی عضو شوید.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full bg-transparent border-0 border-b border-background/30 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
              />
              <button className="absolute left-0 top-1/2 -translate-y-1/2 text-xs hover:opacity-60 transition-opacity">
                عضویت
              </button>
            </div>
          </motion.div>

          {/* Shop links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs mb-6 text-background/60">فروشگاه</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs mb-6 text-background/60">درباره</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs mb-6 text-background/60">پشتیبانی</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-serif text-lg">
              ووف
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="اینستاگرام"
              >
                <Instagram className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="https://facebook.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="فیسبوک"
              >
                <Facebook className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:opacity-60 transition-opacity"
                aria-label="توییتر"
              >
                <Twitter className="h-4 w-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-background/50">
            <Link
              href="/privacy"
              className="hover:text-background/80 transition-colors"
            >
              سیاست حریم خصوصی
            </Link>
            <Link
              href="/terms"
              className="hover:text-background/80 transition-colors"
            >
              شرایط استفاده از خدمات
            </Link>
            <span>© ۱۴۰۴ ووف. تمامی حقوق محفوظ است.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
