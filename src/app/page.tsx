"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Search,
  TrendingUp,
  Zap,
  Bot,
  BarChart3,
  Settings,
  Star,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  RefreshCw,
  Users,
  Sparkles,
  Shield,
  Mail,
  Send,
  MessageSquare,
  Trash2,
  Edit,
  Plus,
  Coffee,
  Heart,
  Gift,
  ExternalLink,
  Award,
  Building2,
  Globe,
  ThumbsUp,
  Image as ImageIcon,
  Video,
  Play,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  type: string;
  platform: string;
  strategy: string | null;
  imageUrl: string | null;
  fileUrl: string | null;
  fileName: string | null;
  googleDriveUrl: string | null;
  googleDriveId: string | null;
  isHot: boolean;
  isFree: boolean;
  downloads: number;
  rating: number;
  category: {
    name: string;
  } | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
}

interface Testimonial {
  id: string;
  name: string;
  avatar: string | null;
  comment: string;
  rating: number;
}

interface Broker {
  id: string;
  name: string;
  description: string;
  link: string;
  logoUrl: string | null;
  features: string | null;
  bonus: string | null;
  rating: number;
  isRecommended: boolean;
  clicks: number;
}

interface Tutorial {
  id: string;
  title: string;
  description: string | null;
  type: string;
  content: string;
  thumbnail: string | null;
  order: number;
  isActive: boolean;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Chart line decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M0,600 Q360,400 720,500 T1440,300"
          fill="none"
          stroke="#00FFB2"
          strokeWidth="2"
          className="chart-animate"
          style={{ strokeDasharray: 1000 }}
        />
        <path
          d="M0,650 Q360,450 720,550 T1440,350"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2"
          className="chart-animate"
          style={{ strokeDasharray: 1000 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              100% Gratis Tanpa Biaya Tersembunyi
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Download EA & Indicator{" "}
            <span className="text-primary text-glow-green">MT4/MT5</span>
            <br />
            Gratis Tanpa Batas
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Auto trading, no ribet. Tinggal pakai, gas cuan 🚀
            <br />
            Tingkatkan profit trading lo dengan tools terbaik — tanpa biaya
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green text-lg px-8 py-6 rounded-xl group"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-xl"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Koleksi EA
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground text-sm">EA & Indicator</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground text-sm">Active Traders</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Product Card
function ProductCard({ product, onDownload }: { product: Product; onDownload?: (id: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(`/api/download/${product.id}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${product.name.replace(/\s+/g, "-")}.ex4`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        onDownload?.(product.id);
        toast.success("Download berhasil!");
        // Show testimonial modal after successful download
        setTimeout(() => setShowTestimonial(true), 500);
      }
    } catch (error) {
      console.error("Error downloading:", error);
      toast.error("Gagal download file");
    } finally {
      setDownloading(false);
    }
  };

  const handleSubmitTestimonial = async () => {
    if (!testimonialForm.name || !testimonialForm.comment) {
      toast.error("Isi nama dan komentar dulu ya!");
      return;
    }
    
    setSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      });

      if (res.ok) {
        toast.success("Terima kasih atas testimoni nya! 🙏");
        setShowTestimonial(false);
        setTestimonialForm({ name: "", comment: "", rating: 5 });
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.error("Gagal mengirim testimoni");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`bg-card border-border overflow-hidden transition-all duration-300 ${isHovered ? 'glow-green-sm border-primary/50' : ''}`}>
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Bot className="w-16 h-16 text-primary/50" />
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {product.isHot && (
                <Badge className="bg-red-500 text-white border-0">
                  🔥 HOT
                </Badge>
              )}
              {product.isFree && (
                <Badge className="bg-primary text-primary-foreground border-0">
                  FREE
                </Badge>
              )}
            </div>

            {/* Platform badge */}
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-background/80 border-border">
                {product.platform.toUpperCase()}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            {/* Title */}
            <h3 className="font-bold text-lg text-foreground line-clamp-1">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.strategy && (
                <Badge variant="secondary" className="text-xs">
                  {product.strategy}
                </Badge>
              )}
              <Badge variant="secondary" className="text-xs">
                {product.type === "ea" ? "EA" : "Indicator"}
              </Badge>
              {product.category && (
                <Badge variant="secondary" className="text-xs">
                  {product.category.name}
                </Badge>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{product.downloads.toLocaleString()}</span>
              </div>
            </div>

            {/* Download Button */}
            <Button
              className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={handleDownload}
              disabled={downloading}
            >
              <Download className={`mr-2 h-4 w-4 ${downloading ? 'animate-pulse' : ''}`} />
              {downloading ? "Downloading..." : "Download Gratis"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial Modal */}
      {showTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Kasih Testimoni Yuk! 🙏
              </h3>
              <button 
                onClick={() => setShowTestimonial(false)} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              Download berhasil! Mau kasih testimoni biar makin semangat develop EA lainnya?
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nama</label>
                <Input
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  placeholder="Nama lo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Testimoni</label>
                <Textarea
                  value={testimonialForm.comment}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, comment: e.target.value })}
                  placeholder="EA nya bagus, profit konsisten..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setTestimonialForm({ ...testimonialForm, rating: star })}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= testimonialForm.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-500"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowTestimonial(false)}
                >
                  Nanti Saja
                </Button>
                <Button
                  className="flex-1 bg-primary text-primary-foreground"
                  onClick={handleSubmitTestimonial}
                  disabled={submitting}
                >
                  {submitting ? "Mengirim..." : "Kirim Testimoni"}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

// Products Section
function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
        ]);
        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDownloadComplete = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, downloads: p.downloads + 1 } : p
      )
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.category?.name === selectedCategory;
    const matchesType =
      selectedType === "all" || product.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <section id="products" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">EA & Indicator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Koleksi EA dan indicator terbaik untuk meningkatkan profit trading lo
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Cari EA atau Indicator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48 bg-background border-border">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full sm:w-40 bg-background border-border">
              <SelectValue placeholder="Tipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Tipe</SelectItem>
              <SelectItem value="ea">EA</SelectItem>
              <SelectItem value="indicator">Indicator</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-0">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onDownload={handleDownloadComplete} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <Bot className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Tidak ada EA atau Indicator ditemukan
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection() {
  const categories = [
    {
      icon: Zap,
      name: "Scalping EA",
      description: "EA untuk strategi scalping cepat",
      slug: "scalping",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Bot,
      name: "Auto Trading",
      description: "EA otomatis full autopilot",
      slug: "auto-trading",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BarChart3,
      name: "Indicator",
      description: "Indicator analisis teknikal",
      slug: "indicator",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Settings,
      name: "Tools Trading",
      description: "Utility dan tools pendukung",
      slug: "tools",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kategori <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih kategori sesuai kebutuhan trading lo
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.slug}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Gratis",
      description: "Download tanpa biaya apapun, tanpa hidden charge",
      color: "text-primary",
    },
    {
      icon: RefreshCw,
      title: "Update Rutin",
      description: "EA dan indicator selalu di-update mengikuti market",
      color: "text-accent",
    },
    {
      icon: Download,
      title: "Unlimited Download",
      description: "Download sebanyak apapun tanpa batasan",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Support Semua Trader",
      description: "Cocok untuk pemula sampai profesional",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Tanpa Login",
      description: "Download langsung tanpa perlu registrasi",
      color: "text-red-500",
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kenapa Pilih <span className="text-primary">Kami?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Platform terbaik untuk download EA dan indicator gratis
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 glow-green-sm`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Tutorial Section
function TutorialSection() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "photo" | "video">("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTutorials() {
      try {
        const res = await fetch("/api/tutorials");
        const data = await res.json();
        setTutorials(data);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTutorials();
  }, []);

  const filteredTutorials = tutorials.filter((t) => 
    activeTab === "all" || t.type === activeTab
  );

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s?]+)/);
    return match ? match[1] : null;
  };

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (tutorials.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Tutorial
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Cara <span className="text-primary">Pakai</span> EA & Indicator
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tutorial lengkap cara install dan menggunakan EA serta indicator di MT4/MT5
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            className={activeTab === "all" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("all")}
          >
            Semua
          </Button>
          <Button
            variant={activeTab === "photo" ? "default" : "outline"}
            className={activeTab === "photo" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("photo")}
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Foto
          </Button>
          <Button
            variant={activeTab === "video" ? "default" : "outline"}
            className={activeTab === "video" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("video")}
          >
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
        </div>

        {/* Tutorial Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTutorials.map((tutorial) => {
            const youtubeId = tutorial.type === "video" ? getYouTubeId(tutorial.content) : null;
            
            return (
              <motion.div key={tutorial.id} variants={fadeInUp}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Media */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                      {tutorial.type === "photo" ? (
                        <img
                          src={tutorial.content}
                          alt={tutorial.title}
                          className="w-full h-full object-cover"
                        />
                      ) : youtubeId ? (
                        <div className="relative w-full h-full">
                          <img
                            src={tutorial.thumbnail || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                            alt={tutorial.title}
                            className="w-full h-full object-cover"
                          />
                          <div 
                            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group-hover:bg-black/40 transition-colors"
                            onClick={() => setSelectedVideo(youtubeId)}
                          >
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-16 h-16 text-primary/50" />
                        </div>
                      )}
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={tutorial.type === "video" ? "bg-red-500 text-white border-0" : "bg-primary text-primary-foreground border-0"}>
                          {tutorial.type === "video" ? (
                            <>
                              <Video className="w-3 h-3 mr-1" />
                              Video
                            </>
                          ) : (
                            <>
                              <ImageIcon className="w-3 h-3 mr-1" />
                              Foto
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {tutorial.title}
                      </h3>
                      {tutorial.description && (
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {tutorial.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="w-full max-w-4xl mx-4 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-48" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kata <span className="text-primary">Trader</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Testimoni dari trader yang sudah download di sini
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-foreground mb-4 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Punya pertanyaan atau butuh bantuan? Kirim pesan ke kami!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama lo"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subjek</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subjek pesan"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan lo di sini..."
                    rows={5}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={sending}
                >
                  {sending ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Donation Section
function DonationSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center space-y-8"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center glow-green-sm">
              <Coffee className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold"
          >
            Support <span className="text-yellow-500">Developer</span> ☕
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Semua EA dan indikator di sini gratis 100% — no ribet, no bayar.
            Kalau ngebantu buat trading lo dan mau support biar terus update, boleh banget traktir kopi lewat Saweria 🙏☕
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://saweria.co/dewakupas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <Coffee className="w-6 h-6 group-hover:animate-bounce" />
              <span>Traktir Kopi via Saweria</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-4"
          >
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Dukungan lo berarti banget!</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
              <Gift className="w-4 h-4 text-primary" />
              <span>Nominal berapapun diterima</span>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-sm italic pt-4"
          >
            "Dengan dukungan lo, kita bisa terus provide EA dan indicator berkualitas secara gratis!" 💪
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Broker Section
function BrokerSection() {
  // Hardcoded default broker (Exness)
  const defaultBrokers: Broker[] = [
    {
      id: "default-exness",
      name: "Exness",
      description: "Broker terpercaya dengan spread rendah dan eksekusi cepat. Cocok untuk EA scalping dan auto trading. Deposit dan withdrawal instant!",
      link: "https://one.exnessonelink.com/a/whvtydd8u3?source=app",
      logoUrl: null,
      features: JSON.stringify([
        "Spread mulai 0.0 pips",
        "Leverage hingga 1:Unlimited",
        "Deposit/Withdrawal Instant",
        "No Swap Option",
        "MT4 & MT5 Support",
      ]),
      bonus: "Bonus Deposit Tersedia",
      rating: 5,
      isRecommended: true,
      clicks: 0,
    },
  ];

  const [brokers, setBrokers] = useState<Broker[]>(defaultBrokers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrokers() {
      try {
        const res = await fetch("/api/brokers");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) {
            setBrokers(data);
          }
        }
      } catch (error) {
        console.error("Error fetching brokers:", error);
        // Keep using default brokers
      } finally {
        setLoading(false);
      }
    }
    fetchBrokers();
  }, []);

  const handleClick = async (broker: Broker) => {
    // Track click
    try {
      await fetch(`/api/brokers/click/${broker.id}`);
    } catch (error) {
      console.error("Error tracking click:", error);
    }
    // Open link
    window.open(broker.link, "_blank");
  };

  if (loading) {
    return (
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
        </div>
      </section>
    );
  }

  if (brokers.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Badge className="bg-accent/10 text-accent border-accent/30 px-4 py-2 text-sm mb-4">
            <Award className="w-4 h-4 mr-2" />
            Rekomendasi Broker
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Broker <span className="text-primary">Terpercaya</span> 🏆
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Broker pilihan dengan spread rendah, eksekusi cepat, dan withdrawal instant. 
            Cocok untuk EA dan indicator di platform ini!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {brokers.map((broker) => {
            const features = broker.features ? JSON.parse(broker.features) : [];
            
            return (
              <motion.div key={broker.id} variants={fadeInUp}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6">
                      {broker.isRecommended && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground border-0">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            Recommended
                          </Badge>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center border border-border">
                          {broker.logoUrl ? (
                            <img src={broker.logoUrl} alt={broker.name} className="w-12 h-12 object-contain" />
                          ) : (
                            <Building2 className="w-8 h-8 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{broker.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(broker.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`}
                              />
                            ))}
                            <span className="text-sm text-muted-foreground ml-1">{broker.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      
                      {broker.bonus && (
                        <div className="mt-4">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            🎁 {broker.bonus}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground">
                        {broker.description}
                      </p>

                      {features.length > 0 && (
                        <div className="space-y-2">
                          {features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-end pt-4 border-t border-border">
                        <Button
                          className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                          onClick={() => handleClick(broker)}
                        >
                          Daftar Sekarang
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Siap <span className="text-primary">Gas Profit?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground"
          >
            Download EA dan indicator gratis sekarang, mulai trading autopilot!
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green text-xl px-12 py-8 rounded-xl group"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Download EA Gratis Sekarang
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              100% Gratis
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Tanpa Registrasi
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Support MT4 & MT5
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl">EA Platform</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Platform download EA dan indicator MT4/MT5 gratis terbaik untuk trader Indonesia.
              Auto trading, no ribet, gas cuan! 🚀
            </p>
            {/* Donation Link in Footer */}
            <a
              href="https://saweria.co/dewakupas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              <Coffee className="w-4 h-4" />
              <span>Traktir Kopi ☕</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">EA</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Indicator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Kategori</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Scalping EA</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Auto Trading</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Indicator</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Tools Trading</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              ⚠️ <span className="text-yellow-500">Disclaimer:</span> Trading memiliki risiko tinggi. Gunakan EA dengan bijak dan lakukan manajemen risiko yang baik.
            </p>
            <p className="text-muted-foreground text-sm">
              © 2024 EA Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Header
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">EA Platform</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              EA
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              Indicator
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                EA
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                Indicator
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

// Admin Login Modal
function AdminLoginModal({
  open,
  onClose,
  onLogin,
}: {
  open: boolean;
  onClose: () => void;
  onLogin: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      if (res.ok) {
        onLogin();
        onClose();
        toast.success("Login berhasil!");
      } else {
        setError("Username atau password salah");
      }
    } catch {
      setError("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-6 w-full max-w-md mx-4"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Admin Login</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

// Admin Panel
function AdminPanel({ onClose }: { onClose: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<"upload" | "manage" | "testimonials" | "brokers" | "tutorials">("upload");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "ea",
    platform: "mt4",
    strategy: "",
    categoryId: "",
    isHot: false,
    isFree: true,
  });
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [uploadMethod, setUploadMethod] = useState<"file" | "gdrive">("gdrive");
  const [googleDriveUrl, setGoogleDriveUrl] = useState("");
  const [fileName, setFileName] = useState("");

  // Testimonial form state
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [editingTestimonial, setEditingTestimonial] = useState<string | null>(null);

  // Broker state
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [brokerForm, setBrokerForm] = useState({
    name: "",
    description: "",
    link: "",
    logoUrl: "",
    features: "",
    bonus: "",
    rating: 5,
    isRecommended: true,
  });
  const [editingBroker, setEditingBroker] = useState<string | null>(null);

  // Tutorial state
  const [tutorialForm, setTutorialForm] = useState({
    title: "",
    description: "",
    type: "photo",
    content: "",
    thumbnail: "",
    order: 0,
    isActive: true,
  });
  const [editingTutorial, setEditingTutorial] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes, testimonialsRes, brokersRes, tutorialsRes] = await Promise.all([
          fetch("/api/products"),
          fetch("/api/categories"),
          fetch("/api/testimonials"),
          fetch("/api/brokers"),
          fetch("/api/tutorials/admin"),
        ]);
        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
        const testimonialsData = await testimonialsRes.json();
        const brokersData = await brokersRes.json();
        const tutorialsData = await tutorialsRes.json();
        setProducts(productsData);
        setCategories(categoriesData);
        setTestimonials(testimonialsData);
        setBrokers(brokersData);
        setTutorials(tutorialsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate based on upload method
    if (uploadMethod === "file" && !file) {
      toast.error("Pilih file EA/Indicator terlebih dahulu");
      return;
    }
    
    if (uploadMethod === "gdrive" && !googleDriveUrl) {
      toast.error("Masukkan Google Drive URL");
      return;
    }

    setUploading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("platform", formData.platform);
      formDataToSend.append("strategy", formData.strategy);
      formDataToSend.append("categoryId", formData.categoryId);
      formDataToSend.append("isHot", String(formData.isHot));
      formDataToSend.append("isFree", String(formData.isFree));
      
      if (uploadMethod === "file" && file) {
        formDataToSend.append("file", file);
      } else if (uploadMethod === "gdrive") {
        formDataToSend.append("googleDriveUrl", googleDriveUrl);
        formDataToSend.append("fileName", fileName || formData.name);
      }
      
      if (image) formDataToSend.append("image", image);

      const res = await fetch("/api/products", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        const newProduct = await res.json();
        setProducts([newProduct, ...products]);
        setFormData({
          name: "",
          description: "",
          type: "ea",
          platform: "mt4",
          strategy: "",
          categoryId: "",
          isHot: false,
          isFree: true,
        });
        setFile(null);
        setImage(null);
        setGoogleDriveUrl("");
        setFileName("");
        toast.success("EA/Indicator berhasil diupload!");
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Gagal mengupload EA/Indicator");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error("Gagal mengupload EA/Indicator");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus EA/Indicator ini?")) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id));
        toast.success("EA/Indicator berhasil dihapus");
      }
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Gagal menghapus EA/Indicator");
    }
  };

  // Testimonial handlers
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      });

      if (res.ok) {
        const newTestimonial = await res.json();
        setTestimonials([...testimonials, newTestimonial]);
        setTestimonialForm({ name: "", comment: "", rating: 5 });
        toast.success("Testimonial berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Error adding testimonial:", error);
      toast.error("Gagal menambahkan testimonial");
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Yakin ingin menghapus testimonial ini?")) return;

    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTestimonials(testimonials.filter((t) => t.id !== id));
        toast.success("Testimonial berhasil dihapus");
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast.error("Gagal menghapus testimonial");
    }
  };

  // Broker handlers
  const handleAddBroker = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/brokers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...brokerForm,
          features: brokerForm.features.split("\n").filter(f => f.trim()),
        }),
      });

      if (res.ok) {
        const newBroker = await res.json();
        setBrokers([...brokers, newBroker]);
        setBrokerForm({
          name: "",
          description: "",
          link: "",
          logoUrl: "",
          features: "",
          bonus: "",
          rating: 5,
          isRecommended: true,
        });
        toast.success("Broker berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Error adding broker:", error);
      toast.error("Gagal menambahkan broker");
    }
  };

  const handleDeleteBroker = async (id: string) => {
    if (!confirm("Yakin ingin menghapus broker ini?")) return;

    try {
      const res = await fetch(`/api/brokers/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setBrokers(brokers.filter((b) => b.id !== id));
        toast.success("Broker berhasil dihapus");
      }
    } catch (error) {
      console.error("Error deleting broker:", error);
      toast.error("Gagal menghapus broker");
    }
  };

  // Tutorial handlers
  const handleAddTutorial = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/tutorials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tutorialForm),
      });

      if (res.ok) {
        const newTutorial = await res.json();
        setTutorials([...tutorials, newTutorial]);
        setTutorialForm({
          title: "",
          description: "",
          type: "photo",
          content: "",
          thumbnail: "",
          order: 0,
          isActive: true,
        });
        toast.success("Tutorial berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Error adding tutorial:", error);
      toast.error("Gagal menambahkan tutorial");
    }
  };

  const handleDeleteTutorial = async (id: string) => {
    if (!confirm("Yakin ingin menghapus tutorial ini?")) return;

    try {
      const res = await fetch(`/api/tutorials/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTutorials(tutorials.filter((t) => t.id !== id));
        toast.success("Tutorial berhasil dihapus");
      }
    } catch (error) {
      console.error("Error deleting tutorial:", error);
      toast.error("Gagal menghapus tutorial");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant={activeTab === "upload" ? "default" : "outline"}
            className={activeTab === "upload" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("upload")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Upload EA
          </Button>
          <Button
            variant={activeTab === "manage" ? "default" : "outline"}
            className={activeTab === "manage" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("manage")}
          >
            <Settings className="w-4 h-4 mr-2" />
            Manage EA ({products.length})
          </Button>
          <Button
            variant={activeTab === "testimonials" ? "default" : "outline"}
            className={activeTab === "testimonials" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("testimonials")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Testimonials ({testimonials.length})
          </Button>
          <Button
            variant={activeTab === "brokers" ? "default" : "outline"}
            className={activeTab === "brokers" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("brokers")}
          >
            <Building2 className="w-4 h-4 mr-2" />
            Brokers ({brokers.length})
          </Button>
          <Button
            variant={activeTab === "tutorials" ? "default" : "outline"}
            className={activeTab === "tutorials" ? "bg-primary text-primary-foreground" : ""}
            onClick={() => setActiveTab("tutorials")}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Tutorials ({tutorials.length})
          </Button>
        </div>

        {activeTab === "upload" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Upload EA / Indicator</h2>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama EA/Indicator *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama EA atau Indicator"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Deskripsi *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Deskripsi singkat tentang EA/Indicator"
                      className="w-full h-24 bg-background border border-border rounded-lg p-3 text-sm"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipe</label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ea">EA</SelectItem>
                          <SelectItem value="indicator">Indicator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Platform</label>
                      <Select
                        value={formData.platform}
                        onValueChange={(value) => setFormData({ ...formData, platform: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mt4">MT4</SelectItem>
                          <SelectItem value="mt5">MT5</SelectItem>
                          <SelectItem value="both">MT4 & MT5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Strategi</label>
                      <Select
                        value={formData.strategy}
                        onValueChange={(value) => setFormData({ ...formData, strategy: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih strategi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scalping">Scalping</SelectItem>
                          <SelectItem value="trend">Trend Following</SelectItem>
                          <SelectItem value="grid">Grid</SelectItem>
                          <SelectItem value="martingale">Martingale</SelectItem>
                          <SelectItem value="hedge">Hedging</SelectItem>
                          <SelectItem value="breakout">Breakout</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Kategori</label>
                      <Select
                        value={formData.categoryId}
                        onValueChange={(value) => setFormData({ ...formData, categoryId: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isHot}
                        onChange={(e) => setFormData({ ...formData, isHot: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">🔥 Hot EA</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isFree}
                        onChange={(e) => setFormData({ ...formData, isFree: e.target.checked })}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">🆓 Free</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sumber File *</label>
                    {/* Upload Method Toggle */}
                    <div className="flex gap-2 mb-4">
                      <Button
                        type="button"
                        variant={uploadMethod === "gdrive" ? "default" : "outline"}
                        className={`flex-1 ${uploadMethod === "gdrive" ? "bg-primary text-primary-foreground" : ""}`}
                        onClick={() => setUploadMethod("gdrive")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Google Drive
                      </Button>
                      <Button
                        type="button"
                        variant={uploadMethod === "file" ? "default" : "outline"}
                        className={`flex-1 ${uploadMethod === "file" ? "bg-primary text-primary-foreground" : ""}`}
                        onClick={() => setUploadMethod("file")}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Upload File
                      </Button>
                    </div>

                    {/* Google Drive URL Input */}
                    {uploadMethod === "gdrive" && (
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-border rounded-lg p-4 bg-primary/5">
                          <label className="block text-sm font-medium mb-2">Google Drive Link *</label>
                          <Input
                            type="url"
                            value={googleDriveUrl}
                            onChange={(e) => setGoogleDriveUrl(e.target.value)}
                            placeholder="https://drive.google.com/file/d/xxx/view"
                            className="bg-background"
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            Paste link Google Drive yang sudah di-share (public)
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Nama File (untuk download)</label>
                          <Input
                            type="text"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Nama EA.ex4"
                            className="bg-background"
                          />
                        </div>
                      </div>
                    )}

                    {/* Local File Upload */}
                    {uploadMethod === "file" && (
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        <input
                          type="file"
                          accept=".ex4,.ex5,.mq4,.mq5"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Format: .ex4, .ex5, .mq4, .mq5
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Gambar Preview (opsional)</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        className="w-full"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Format: JPG, PNG, GIF
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground"
                    disabled={uploading}
                  >
                    {uploading ? (
                      "Uploading..."
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Upload EA/Indicator
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Preview</h2>
                <div className="bg-background rounded-lg p-4">
                  {formData.name ? (
                    <div className="space-y-4">
                      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Bot className="w-16 h-16 text-primary/50" />
                        )}
                      </div>
                      <h3 className="font-bold text-lg">{formData.name || "Nama EA"}</h3>
                      <p className="text-muted-foreground text-sm">
                        {formData.description || "Deskripsi EA/Indicator"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {formData.strategy && (
                          <Badge variant="secondary">{formData.strategy}</Badge>
                        )}
                        <Badge variant="secondary">
                          {formData.type === "ea" ? "EA" : "Indicator"}
                        </Badge>
                        <Badge variant="outline">{formData.platform.toUpperCase()}</Badge>
                      </div>
                      {formData.isHot && (
                        <Badge className="bg-red-500 text-white">🔥 HOT</Badge>
                      )}
                      {formData.isFree && (
                        <Badge className="bg-primary text-primary-foreground">FREE</Badge>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Isi form untuk melihat preview</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "manage" && (
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Manage EA & Indicators</h2>
              {loading ? (
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : products.length > 0 ? (
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between bg-background rounded-lg p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Bot className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{product.name}</h3>
                            {product.googleDriveId ? (
                              <Badge className="bg-accent/20 text-accent text-xs">
                                <Globe className="w-3 h-3 mr-1" />
                                GDrive
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs">
                                <Download className="w-3 h-3 mr-1" />
                                Local
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2 text-sm text-muted-foreground">
                            <span>{product.type}</span>
                            <span>•</span>
                            <span>{product.platform}</span>
                            <span>•</span>
                            <span>{product.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Bot className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Belum ada EA atau Indicator</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Testimonial Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Tambah Testimonial</h2>
                <form onSubmit={handleAddTestimonial} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama</label>
                    <Input
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                      placeholder="Nama trader"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Komentar</label>
                    <textarea
                      value={testimonialForm.comment}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, comment: e.target.value })}
                      placeholder="Testimoni dari trader..."
                      className="w-full h-24 bg-background border border-border rounded-lg p-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <Select
                      value={String(testimonialForm.rating)}
                      onValueChange={(value) => setTestimonialForm({ ...testimonialForm, rating: parseInt(value) })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 4, 3, 2, 1].map((r) => (
                          <SelectItem key={r} value={String(r)}>
                            {r} Bintang {"⭐".repeat(r)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Testimonial
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Testimonials List */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Daftar Testimonials</h2>
                {testimonials.length > 0 ? (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex items-start justify-between bg-background rounded-lg p-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{testimonial.name}</span>
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic">
                            &quot;{testimonial.comment}&quot;
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-400"
                          onClick={() => handleDeleteTestimonial(testimonial.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Belum ada testimonial</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "brokers" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Broker Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Tambah Broker</h2>
                <form onSubmit={handleAddBroker} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Broker *</label>
                    <Input
                      value={brokerForm.name}
                      onChange={(e) => setBrokerForm({ ...brokerForm, name: e.target.value })}
                      placeholder="e.g., Exness"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Deskripsi *</label>
                    <textarea
                      value={brokerForm.description}
                      onChange={(e) => setBrokerForm({ ...brokerForm, description: e.target.value })}
                      placeholder="Deskripsi broker..."
                      className="w-full h-20 bg-background border border-border rounded-lg p-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Link Referral *</label>
                    <Input
                      value={brokerForm.link}
                      onChange={(e) => setBrokerForm({ ...brokerForm, link: e.target.value })}
                      placeholder="https://..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Logo URL (opsional)</label>
                    <Input
                      value={brokerForm.logoUrl}
                      onChange={(e) => setBrokerForm({ ...brokerForm, logoUrl: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Features (satu per baris)</label>
                    <textarea
                      value={brokerForm.features}
                      onChange={(e) => setBrokerForm({ ...brokerForm, features: e.target.value })}
                      placeholder="Spread mulai 0.0 pips&#10;Leverage hingga 1:Unlimited&#10;Deposit/Withdrawal Instant"
                      className="w-full h-24 bg-background border border-border rounded-lg p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bonus (opsional)</label>
                    <Input
                      value={brokerForm.bonus}
                      onChange={(e) => setBrokerForm({ ...brokerForm, bonus: e.target.value })}
                      placeholder="e.g., Bonus Deposit 100%"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <Select
                      value={String(brokerForm.rating)}
                      onValueChange={(value) => setBrokerForm({ ...brokerForm, rating: parseFloat(value) })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map((r) => (
                          <SelectItem key={r} value={String(r)}>
                            {r} Bintang
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={brokerForm.isRecommended}
                      onChange={(e) => setBrokerForm({ ...brokerForm, isRecommended: e.target.checked })}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm">⭐ Recommended</span>
                  </label>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Broker
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Brokers List */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Daftar Brokers</h2>
                {brokers.length > 0 ? (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {brokers.map((broker) => (
                      <div
                        key={broker.id}
                        className="flex items-start justify-between bg-background rounded-lg p-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{broker.name}</span>
                            {broker.isRecommended && (
                              <Badge className="bg-primary/20 text-primary text-xs">Recommended</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(broker.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-500"}`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground">{broker.rating.toFixed(1)}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{broker.description}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Globe className="w-3 h-3" />
                            <span>{broker.clicks} klik</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-400"
                          onClick={() => handleDeleteBroker(broker.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Belum ada broker</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "tutorials" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add Tutorial Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Tambah Tutorial</h2>
                <form onSubmit={handleAddTutorial} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Judul Tutorial *</label>
                    <Input
                      value={tutorialForm.title}
                      onChange={(e) => setTutorialForm({ ...tutorialForm, title: e.target.value })}
                      placeholder="e.g., Cara Install EA di MT4"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Deskripsi</label>
                    <textarea
                      value={tutorialForm.description}
                      onChange={(e) => setTutorialForm({ ...tutorialForm, description: e.target.value })}
                      placeholder="Deskripsi singkat..."
                      className="w-full h-20 bg-background border border-border rounded-lg p-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tipe *</label>
                    <Select
                      value={tutorialForm.type}
                      onValueChange={(value) => setTutorialForm({ ...tutorialForm, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photo">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" />
                            Foto
                          </div>
                        </SelectItem>
                        <SelectItem value="video">
                          <div className="flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            Video
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {tutorialForm.type === "photo" ? "URL Gambar *" : "URL Video (YouTube) *"}
                    </label>
                    <Input
                      value={tutorialForm.content}
                      onChange={(e) => setTutorialForm({ ...tutorialForm, content: e.target.value })}
                      placeholder={tutorialForm.type === "photo" ? "https://example.com/image.jpg" : "https://www.youtube.com/watch?v=xxx"}
                      required
                    />
                    {tutorialForm.type === "video" && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Paste link YouTube (support: youtube.com/watch, youtu.be, youtube.com/embed)
                      </p>
                    )}
                  </div>

                  {tutorialForm.type === "video" && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Thumbnail URL (opsional)</label>
                      <Input
                        value={tutorialForm.thumbnail}
                        onChange={(e) => setTutorialForm({ ...tutorialForm, thumbnail: e.target.value })}
                        placeholder="https://example.com/thumbnail.jpg"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Kosongkan untuk menggunakan thumbnail YouTube otomatis
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">Urutan</label>
                    <Input
                      type="number"
                      value={tutorialForm.order}
                      onChange={(e) => setTutorialForm({ ...tutorialForm, order: parseInt(e.target.value) || 0 })}
                      placeholder="0"
                    />
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={tutorialForm.isActive}
                      onChange={(e) => setTutorialForm({ ...tutorialForm, isActive: e.target.checked })}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-sm">✅ Aktif</span>
                  </label>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Tutorial
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Tutorials List */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Daftar Tutorials</h2>
                {tutorials.length > 0 ? (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {tutorials.map((tutorial) => (
                      <div
                        key={tutorial.id}
                        className="flex items-start justify-between bg-background rounded-lg p-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{tutorial.title}</span>
                            {tutorial.type === "video" ? (
                              <Badge className="bg-red-500/20 text-red-400 text-xs">
                                <Video className="w-3 h-3 mr-1" />
                                Video
                              </Badge>
                            ) : (
                              <Badge className="bg-primary/20 text-primary text-xs">
                                <ImageIcon className="w-3 h-3 mr-1" />
                                Foto
                              </Badge>
                            )}
                            {!tutorial.isActive && (
                              <Badge variant="secondary" className="text-xs">Nonaktif</Badge>
                            )}
                          </div>
                          {tutorial.description && (
                            <p className="text-sm text-muted-foreground mb-2">{tutorial.description}</p>
                          )}
                          <p className="text-xs text-muted-foreground truncate">{tutorial.content}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-400"
                          onClick={() => handleDeleteTutorial(tutorial.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Belum ada tutorial</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Main Page
export default function HomePage() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check if already logged in
  useEffect(() => {
    fetch("/api/admin/check")
      .then((res) => res.json())
      .then((data) => setIsAdmin(data.isAdmin))
      .catch(() => {});
  }, []);

  // 5 clicks on bottom left corner to open admin login
  const handleSecretClick = () => {
    clickCountRef.current += 1;

    // Clear previous timer
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    // Reset click count after 2 seconds
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2000);

    // Open admin login after 5 clicks
    if (clickCountRef.current >= 5) {
      setShowAdminLogin(true);
      clickCountRef.current = 0;
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        <HeroSection />
        <ProductsSection />
        <CategoriesSection />
        <FeaturesSection />
        <TutorialSection />
        <BrokerSection />
        <TestimonialsSection />
        <ContactSection />
        <DonationSection />
        <CTASection />
      </div>

      <Footer />

      {/* Admin Login Modal */}
      <AdminLoginModal
        open={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLogin={() => {
          setIsAdmin(true);
          setShowAdminPanel(true);
        }}
      />

      {/* Admin Panel */}
      {showAdminPanel && isAdmin && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}

      {/* Secret admin trigger area - bottom right corner (5 clicks) - hidden */}
      <div
        onClick={handleSecretClick}
        className="fixed bottom-0 right-0 w-20 h-20 z-40"
        style={{ opacity: 0, pointerEvents: 'auto' }}
      />

      {/* Floating Donation Button */}
      <motion.a
        href="https://saweria.co/dewakupas"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-30 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        title="Support Developer"
      >
        <Coffee className="w-5 h-5 group-hover:animate-bounce" />
      </motion.a>
    </main>
  );
}
// reload
