import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);

  const toggleBook = (id: string) => {
    setExpandedBook(expandedBook === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Seren Fuller</h1>
          <div className="flex gap-6">
            <a href="#books" className="text-sm hover:text-accent transition-colors">
              Books
            </a>
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/hero-background-USG8eJW5R9nRo2ucZ5RZg2.webp')",
          }}
        />
        <div className="relative container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Author & Storyteller
              </span>
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Seren Fuller
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Swiss-Australian author exploring the intersection of science, storytelling, and authentic locations. 
              Currently writing from Mauritius Island.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore Books
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Published Works
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Books</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Each work combines rigorous scientific accuracy with compelling narratives, 
              enhanced by professional illustrations.
            </p>
          </div>

          {/* Altered by Design Series */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">The Altered by Design Series</h3>
            <p className="slogan mb-8">Real science, real locations. Illustrated.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Book 1 */}
              <div className="book-card overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/altered-by-design-visual-izJjVU8dmXg9tj8i68BTBf.webp"
                    alt="Altered by Design Book 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Without Consent</h4>
                  <p className="text-sm text-muted-foreground mb-4">Book 1 • Genetic Thriller</p>
                  <p className="text-base leading-relaxed mb-4">
                    A fast-paced genetic thriller set in Australia, featuring real locations and scientific accuracy 
                    with illustrations showcasing the geographical settings.
                  </p>
                  <Button variant="ghost" className="w-full justify-start">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Book 2 */}
              <div className="book-card overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/altered-by-design-visual-izJjVU8dmXg9tj8i68BTBf.webp"
                    alt="Altered by Design Book 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Designed Futures</h4>
                  <p className="text-sm text-muted-foreground mb-4">Book 2 • Genetic Thriller</p>
                  <p className="text-base leading-relaxed mb-4">
                    Another fast-paced genetic thriller with real locations and real science, set in Switzerland. 
                    Features illustrations of the story's geographical settings.
                  </p>
                  <Button variant="ghost" className="w-full justify-start">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <p className="text-base text-foreground">
                <strong>Book 3 in Development:</strong> The third installment of the Altered by Design series is currently in progress, 
                continuing the genetic thriller narrative with the same commitment to real science and authentic locations.
              </p>
            </div>
          </div>

          {/* Solar Trilogy */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">The Solar Trilogy</h3>
            <p className="slogan mb-8">One story, two languages, real science. Illustrated.</p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Book 1 */}
              <div className="book-card overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/solar-trilogy-visual-6TZepMRbRZscH6U9jNdkuh.webp"
                    alt="The Solar Trilogy - The Sun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">The Sun</h4>
                  <p className="text-sm text-muted-foreground mb-4">Book 1 • Bilingual Science Adventure</p>
                  <p className="text-base leading-relaxed mb-4">
                    An adventure exploring the science of our sun. Written in parallel English and German on one page, 
                    perfect for young readers and adult language learners.
                  </p>
                  <Button variant="ghost" className="w-full justify-start">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Book 2 */}
              <div className="book-card overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/solar-trilogy-visual-6TZepMRbRZscH6U9jNdkuh.webp"
                    alt="The Solar Trilogy - The Moon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">The Moon</h4>
                  <p className="text-sm text-muted-foreground mb-4">Book 2 • Bilingual Science Adventure</p>
                  <p className="text-base leading-relaxed mb-4">
                    An adventure exploring the science of the moon. Written in parallel English and German, 
                    featuring beautiful scientific illustrations.
                  </p>
                  <Button variant="ghost" className="w-full justify-start">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Book 3 */}
              <div className="book-card overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/solar-trilogy-visual-6TZepMRbRZscH6U9jNdkuh.webp"
                    alt="The Solar Trilogy - The Stars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">The Stars</h4>
                  <p className="text-sm text-muted-foreground mb-4">Book 3 • Bilingual Science Adventure</p>
                  <p className="text-base leading-relaxed mb-4">
                    An adventure exploring the science of stars. The final book in The Solar Trilogy, 
                    continuing the bilingual parallel format with scientific accuracy.
                  </p>
                  <Button variant="ghost" className="w-full justify-start">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Target Audience:</strong> Young readers (ages 8-17) and adult language learners. 
                Each book explores real astrophysics through engaging narratives with professional scientific illustrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Coming Soon
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Upcoming Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Altered by Design Book 3 */}
            <div className="book-card overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                <div className="text-center text-white">
                  <p className="text-lg font-light">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Altered by Design - Book 3</h4>
                <p className="text-sm text-muted-foreground mb-4">Genetic Thriller • In Development</p>
                <p className="text-base leading-relaxed">
                  The third installment in the Altered by Design series, continuing the exploration of genetic science 
                  with real locations and authentic storytelling.
                </p>
              </div>
            </div>

            {/* Mauritius Historical Drama */}
            <div className="book-card overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663484232609/2onLFkMMh7RAiJzshXXkGo/mauritius-historical-visual-M3YhKvKi4Pp8hDPRJKLAeF.webp"
                  alt="Historical Drama - Mauritius"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Historical Drama Novel</h4>
                <p className="text-sm text-muted-foreground mb-4">Historical Fiction • In Development</p>
                <p className="text-base leading-relaxed mb-4">
                  A historical drama set on Mauritius Island, drawing on the author's current residence and deep knowledge 
                  of this beautiful location.
                </p>
                <p className="slogan">Real history, real locations. Illustrated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="accent-line" />
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  About the Author
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Seren Fuller</h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <p>
                  Seren Fuller is a Swiss-Australian author who spent over sixteen years in Australia, 
                  living in South Australia and the Northern Territory. Currently writing from Mauritius Island, 
                  she brings authentic geographical knowledge to every story.
                </p>
                <p>
                  Her work seamlessly integrates rigorous scientific accuracy with compelling narratives. 
                  Whether exploring genetic science in fast-paced thrillers or astrophysics through bilingual 
                  educational adventures, Seren's books are enhanced by professional illustrations that showcase 
                  real locations or illuminate scientific concepts.
                </p>
                <p>
                  All of Seren's books are beautifully illustrated, combining entertainment with education 
                  for diverse audiences—from young readers discovering science and language to adults seeking 
                  intellectually engaging thrillers.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-lg font-light">Author Photo</p>
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-muted/20">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="accent-line" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Get in Touch
              </span>
              <div className="accent-line" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect with Seren</h2>
            <p className="text-lg text-muted-foreground">
              Follow Seren's work and stay updated on new releases and projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="https://www.amazon.com/author/seren_fuller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              Amazon Author Page
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@serenfullerauthor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              TikTok
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Seren Fuller. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
