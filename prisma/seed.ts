import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "scalping" },
      update: {},
      create: {
        name: "Scalping EA",
        slug: "scalping",
        icon: "zap",
        description: "EA untuk strategi scalping cepat",
        order: 1,
      },
    }),
    prisma.category.upsert({
      where: { slug: "auto-trading" },
      update: {},
      create: {
        name: "Auto Trading",
        slug: "auto-trading",
        icon: "bot",
        description: "EA otomatis full autopilot",
        order: 2,
      },
    }),
    prisma.category.upsert({
      where: { slug: "indicator" },
      update: {},
      create: {
        name: "Indicator",
        slug: "indicator",
        icon: "bar-chart",
        description: "Indicator analisis teknikal",
        order: 3,
      },
    }),
    prisma.category.upsert({
      where: { slug: "tools" },
      update: {},
      create: {
        name: "Tools Trading",
        slug: "tools",
        icon: "settings",
        description: "Utility dan tools pendukung",
        order: 4,
      },
    }),
  ]);

  console.log("Created categories:", categories.length);

  // Create sample products
  const products = [
    {
      name: "Gold Scalper Pro",
      slug: "gold-scalper-pro",
      description: "EA scalping khusus untuk trading XAUUSD (Gold). Profit konsisten dengan drawdown rendah. Cocok untuk pemula dan profesional.",
      type: "ea",
      platform: "mt4",
      strategy: "scalping",
      isHot: true,
      isFree: true,
      downloads: 1500,
      rating: 4.8,
      ratingCount: 120,
      categoryId: categories[0].id,
    },
    {
      name: "Forex Auto Pilot",
      slug: "forex-auto-pilot",
      description: "EA auto trading full autopilot untuk pair mayor. Tinggal pasang, biarkan EA bekerja untuk lo. No ribet, auto cuan!",
      type: "ea",
      platform: "mt5",
      strategy: "trend",
      isHot: true,
      isFree: true,
      downloads: 2300,
      rating: 4.9,
      ratingCount: 230,
      categoryId: categories[1].id,
    },
    {
      name: "Smart Grid EA",
      slug: "smart-grid-ea",
      description: "EA dengan strategi grid yang smart. Dilengkapi dengan money management dan auto lot sizing. Profit stabil setiap bulan.",
      type: "ea",
      platform: "both",
      strategy: "grid",
      isHot: false,
      isFree: true,
      downloads: 980,
      rating: 4.5,
      ratingCount: 85,
      categoryId: categories[1].id,
    },
    {
      name: "Trend Master Indicator",
      slug: "trend-master-indicator",
      description: "Indicator untuk mendeteksi trend dengan akurat. Entry dan exit point sudah dikasih signal. Tinggal ikuti aja!",
      type: "indicator",
      platform: "mt4",
      strategy: null,
      isHot: true,
      isFree: true,
      downloads: 3200,
      rating: 4.7,
      ratingCount: 310,
      categoryId: categories[2].id,
    },
    {
      name: "Support Resistance Pro",
      slug: "support-resistance-pro",
      description: "Indicator automatic support resistance. Gambar garis SR otomatis, tinggal trade di area strategis!",
      type: "indicator",
      platform: "both",
      strategy: null,
      isHot: false,
      isFree: true,
      downloads: 1800,
      rating: 4.6,
      ratingCount: 150,
      categoryId: categories[2].id,
    },
    {
      name: "Risk Calculator Tool",
      slug: "risk-calculator-tool",
      description: "Tool untuk menghitung risk dan lot size dengan mudah. Manajemen risiko jadi gampang, profit jadi stabil!",
      type: "indicator",
      platform: "both",
      strategy: null,
      isHot: false,
      isFree: true,
      downloads: 2100,
      rating: 4.8,
      ratingCount: 180,
      categoryId: categories[3].id,
    },
    {
      name: "Martingale Recovery EA",
      slug: "martingale-recovery-ea",
      description: "EA dengan strategi martingale yang aman. Dilengkapi dengan recovery system untuk minimize loss. Gunakan dengan bijak!",
      type: "ea",
      platform: "mt4",
      strategy: "martingale",
      isHot: false,
      isFree: true,
      downloads: 750,
      rating: 4.3,
      ratingCount: 65,
      categoryId: categories[1].id,
    },
    {
      name: "Breakout Hunter",
      slug: "breakout-hunter",
      description: "EA khusus untuk trading breakout. Deteksi breakout dengan akurat dan auto entry. Profit besar dari momentum market!",
      type: "ea",
      platform: "mt5",
      strategy: "breakout",
      isHot: true,
      isFree: true,
      downloads: 1100,
      rating: 4.6,
      ratingCount: 95,
      categoryId: categories[0].id,
    },
    {
      name: "MACD Pro Indicator",
      slug: "macd-pro-indicator",
      description: "Indicator MACD enhanced dengan signal yang lebih jelas. Divergence auto detect, entry point lebih akurat!",
      type: "indicator",
      platform: "both",
      strategy: null,
      isHot: false,
      isFree: true,
      downloads: 2800,
      rating: 4.5,
      ratingCount: 220,
      categoryId: categories[2].id,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: {
        ...product,
        fileUrl: "/uploads/files/sample.ex4",
        fileName: `${product.slug}.ex4`,
        fileSize: 50000,
        imageUrl: null,
      },
    });
  }

  console.log("Created products:", products.length);

  // Create testimonials
  const testimonials = [
    {
      name: "Rizky Trader",
      comment: "EA nya work bro! Profit konsisten tiap bulan 🔥",
      rating: 5,
      isActive: true,
    },
    {
      name: "Andi Forex",
      comment: "Gratis tapi kualitas premium, recommended banget!",
      rating: 5,
      isActive: true,
    },
    {
      name: "Dewi Invest",
      comment: "Auto cuan! Gak perlu ribet analisa manual lagi",
      rating: 5,
      isActive: true,
    },
    {
      name: "Budi Pro",
      comment: "Platform terbaik untuk cari EA gratis. No ribet!",
      rating: 5,
      isActive: true,
    },
    {
      name: "Sari Investor",
      comment: "Awalnya skeptis, tapi setelah coba ternyata beneran profit!",
      rating: 5,
      isActive: true,
    },
    {
      name: "Donk Trader",
      comment: "Support responsif, EA nya juga berkualitas. Mantap jiwa! 💪",
      rating: 5,
      isActive: true,
    },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.create({
      data: t,
    });
  }

  console.log("Created testimonials:", testimonials.length);

  // Create default admin
  const admin = await prisma.user.upsert({
    where: { email: "admin@eaplatform.com" },
    update: {},
    create: {
      email: "admin@eaplatform.com",
      password: "240be518fabd2724ddb6f04eeb9d5b048ce94ea3d7fd7b8b1e1c2d2d4b8c8e1a", // hash of "admin123"
      name: "Admin",
      role: "admin",
    },
  });

  console.log("Created admin:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
