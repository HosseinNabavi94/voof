"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "./product-card";

const products = [
  {
    id: "silk-evening-coat",
    name: "پالتو آتلیه",
    price: 2450,
    image: "/luxury-wool-coat-front-view-editorial-fashion-phot.jpg",
    hoverImage: "/luxury-wool-coat-back-view-editorial-fashion-photo.jpg",
    category: "پوشاک بیرونی",
  },
  {
    id: "cashmere-wrap-dress",
    name: "پیراهن مجلسی ابریشمی",
    price: 1890,
    image: "/elegant-silk-evening-dress-front-view-editorial-fa.jpg",
    hoverImage: "/elegant-silk-evening-dress-detail-view-editorial-f.jpg",
    category: "پیراهن",
  },
  {
    id: "merino-turtleneck",
    name: "بافت کشمیری",
    price: 890,
    image: "/luxury-cashmere-sweater-front-view-editorial-fashi.jpg",
    hoverImage: "/luxury-cashmere-sweater-texture-detail-editorial-f.jpg",
    category: "بافتنی",
  },
  {
    id: "linen-trousers",
    name: "شلوار دوخت‌خورده",
    price: 680,
    image: "/luxury-tailored-trousers-front-view-editorial-fash.jpg",
    hoverImage: "/luxury-tailored-trousers-side-view-editorial-fashi.jpg",
    category: "شلوار",
  },
  {
    id: "structured-handbag",
    name: "کیف چرمی توت",
    price: 1650,
    image: "/luxury-leather-tote-bag-front-view-editorial-produ.jpg",
    hoverImage: "/luxury-leather-tote-bag-interior-view-editorial-pr.jpg",
    category: "اکسسوری",
  },
  {
    id: "leather-belt",
    name: "ساعت میراث",
    price: 4200,
    image: "/luxury-minimalist-watch-face-view-editorial-produc.jpg",
    hoverImage: "/luxury-minimalist-watch-side-profile-editorial-pro.jpg",
    category: "ساعت",
  },
];

export function CollectionGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">انتخاب محصول</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
             ووف عطر مازندران را در خاطرت زنده می‌کند
          </p>
        </motion.div>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First row - offset layout */}
          <div className="lg:pt-12">
            <ProductCard {...products[0]} index={0} />
          </div>
          <div>
            <ProductCard {...products[1]} index={1} />
          </div>
          <div className="lg:pt-24">
            <ProductCard {...products[2]} index={2} />
          </div>

          {/* Second row - different offset */}
          <div>
            <ProductCard {...products[3]} index={3} />
          </div>
          <div className="lg:pt-16">
            <ProductCard {...products[4]} index={4} />
          </div>
          <div className="lg:-mt-8">
            <ProductCard {...products[5]} index={5} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            href="/shop"
            className="inline-flex items-center text-sm border-b border-foreground pb-1 hover:border-transparent transition-colors duration-300"
          >
            مشاهده همه‌ محصولات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
