'use client';
import Image from "next/image"
import Link from "next/link"
import { Instagram, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { sicakIcecekler, sogukIcecekler, kruvasanlar, anaTatlilar, cookieler } from "@/data/menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF8F3]">
      <header className="sticky top-0 z-40 border-b bg-[#FDF8F3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDF8F3]/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png" 
              alt="Lunqa Coffee Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-semibold tracking-tight text-[#5D4037]">Lunqa Coffee & Tea House</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#hakkimizda" className="text-sm font-medium transition-colors hover:text-[#C8553D]">
              Hakkımızda
            </Link>
            <Link href="#menu" className="text-sm font-medium transition-colors hover:text-[#C8553D]">
              Menü
            </Link>
            <Link href="#galeri" className="text-sm font-medium transition-colors hover:text-[#C8553D]">
              Galeri
            </Link>
            <Link href="#iletisim" className="text-sm font-medium transition-colors hover:text-[#C8553D]">
              İletişim
            </Link>
          </nav>
          <Link href="https://www.instagram.com/lunqa.coffe/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex border-[#C8553D] text-[#C8553D] hover:bg-[#C8553D] hover:text-white"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="md:hidden border-[#C8553D] text-[#C8553D]">
            Menü
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/karsilama.png" 
              alt="Lunqa Coffee iç mekan"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center text-white md:py-32 lg:py-40">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Lunqa Coffee & Tea House
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              Özel kahve ve çay deneyimi için sizi bekliyoruz
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#C8553D] text-white hover:bg-[#A33D2A] border-none">
                Menüyü Gör
              </Button>
            </div>
          </div>
        </section>

        <section id="hakkimizda" className="py-16 md:py-24 bg-[#FDF8F3]">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-[#F3E5D8] px-3 py-1 text-sm text-[#5D4037]">Hikayemiz</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">
                  Her Fincan Kahveyle Anlar Yaratıyoruz
                </h2>
                <p className="text-[#7D5A50] md:text-lg">
                  Lunqa Coffee & Tea House, kaliteli kahve ve çay tutkunları için özel bir mekan olarak doğdu. Kahve
                  çekirdeklerimizi dünyanın dört bir yanındaki sürdürülebilir çiftliklerden temin ederek hem kaliteyi
                  hem de etik uygulamaları gözetiyoruz.
                </p>
                <p className="text-[#7D5A50] md:text-lg">
                  Yetenekli baristalarımız, her fincanı bir sanat eserine dönüştürerek kahve yapma sanatına kendilerini
                  adamışlardır. İster sabah kahveniz için uğrayın, ister arkadaşlarınızla buluşun, ister çalışmak için
                  rahat bir yer arıyor olun, Lunqa Coffee & Tea House mükemmel atmosferi sunuyor.
                </p>
                <div className="pt-4">
                  <Button className="group bg-[#C8553D] hover:bg-[#A33D2A] text-white border-none">
                    Daha Fazla Bilgi{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/karsilama-2.png" 
                  height={600}
                  width={600}
                  alt="Kahve hazırlanırken"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 md:py-24 bg-[#F3E5D8]">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">Menümüz</h2>
              <p className="mt-4 text-[#7D5A50] md:text-lg">
                Özenle hazırlanmış kahve, çay, kruvasan ve tatlı seçeneklerimizi keşfedin.
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="icecekler" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#E6D2C0]">
                  <TabsTrigger
                    value="icecekler"
                    className="data-[state=active]:bg-[#C8553D] data-[state=active]:text-white"
                  >
                    İçecekler
                  </TabsTrigger>
                  <TabsTrigger
                    value="kruvasanlar"
                    className="data-[state=active]:bg-[#C8553D] data-[state=active]:text-white"
                  >
                    Kruvasanlar
                  </TabsTrigger>
                  <TabsTrigger
                    value="tatlilar"
                    className="data-[state=active]:bg-[#C8553D] data-[state=active]:text-white"
                  >
                    Tatlılar
                  </TabsTrigger>
                </TabsList>

                {/* İÇECEKLER BÖLÜMÜ */}
                <TabsContent value="icecekler" className="mt-6">
                  <Card className="border-[#E6D2C0] bg-[#FDF8F3]">
                    <CardContent className="p-6">
                      {/* Sıcak İçecekler Alt Başlığı */}
                      <h3 className="text-2xl font-bold mb-6 text-[#5D4037] border-b border-[#E6D2C0] pb-2">
                        Sıcak İçecekler
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {sicakIcecekler.map((item, index) => (
                          <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                            {/* Arka plan resmi */}
                            <Image
                              src={item.image || "/placeholder.svg?height=400&width=300&text=Sıcak+İçecek"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />

                            {/* Yarı saydam katman */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <h4 className="text-xl font-bold text-white">{item.name}</h4>
                              <p className="text-white/80 mt-2">{item.description}</p>
                              <p className="mt-2 font-medium text-[#F3E5D8]">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Soğuk İçecekler Alt Başlığı */}
                      <h3 className="text-2xl font-bold mb-6 text-[#5D4037] border-b border-[#E6D2C0] pb-2">
                        Soğuk İçecekler
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sogukIcecekler.map((item, index) => (
                          <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                            {/* Arka plan resmi */}
                            <Image
                              src={item.image || "/placeholder.svg?height=400&width=300&text=Soğuk+İçecek"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />

                            {/* Yarı saydam katman */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <h4 className="text-xl font-bold text-white">{item.name}</h4>
                              <p className="text-white/80 mt-2">{item.description}</p>
                              <p className="mt-2 font-medium text-[#F3E5D8]">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* KRUVASANLAR BÖLÜMÜ */}
                <TabsContent value="kruvasanlar" className="mt-6">
                  <Card className="border-[#E6D2C0] bg-[#FDF8F3]">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-6 text-[#5D4037] border-b border-[#E6D2C0] pb-2">
                        Kruvasanlar
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {kruvasanlar.map((item, index) => (
                          <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                            {/* Arka plan resmi */}
                            <Image
                              src={item.image || "/placeholder.svg?height=400&width=300&text=Kruvasan"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />

                            {/* Yarı saydam katman */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <h4 className="text-xl font-bold text-white">{item.name}</h4>
                              <p className="text-white/80 mt-2">{item.description}</p>
                              <p className="mt-2 font-medium text-[#F3E5D8]">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* TATLILAR BÖLÜMÜ */}
                <TabsContent value="tatlilar" className="mt-6">
                  <Card className="border-[#E6D2C0] bg-[#FDF8F3]">
                    <CardContent className="p-6">
                      {/* Ana Tatlılar Alt Başlığı */}
                      <h3 className="text-2xl font-bold mb-6 text-[#5D4037] border-b border-[#E6D2C0] pb-2">
                        Tatlılar
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {anaTatlilar.map((item, index) => (
                          <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                            {/* Arka plan resmi */}
                            <Image
                              src={item.image || "/placeholder.svg?height=400&width=300&text=Tatlı"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />

                            {/* Yarı saydam katman */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <h4 className="text-xl font-bold text-white">{item.name}</h4>
                              <p className="text-white/80 mt-2">{item.description}</p>
                              <p className="mt-2 font-medium text-[#F3E5D8]">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Cookieler Alt Başlığı */}
                      <h3 className="text-2xl font-bold mb-6 text-[#5D4037] border-b border-[#E6D2C0] pb-2">
                        Cookieler
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {cookieler.map((item, index) => (
                          <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                            {/* Arka plan resmi */}
                            <Image
                              src={item.image || "/placeholder.svg?height=400&width=300&text=Cookie"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />

                            {/* Yarı saydam katman */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <h4 className="text-xl font-bold text-white">{item.name}</h4>
                              <p className="text-white/80 mt-2">{item.description}</p>
                              <p className="mt-2 font-medium text-[#F3E5D8]">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="galeri" className="py-16 md:py-24 bg-[#FDF8F3]">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5D4037]">Galeri</h2>
              <p className="mt-4 text-[#7D5A50] md:text-lg">
                Kafemizin içine göz atın ve Lunqa Coffee & Tea House'u özel kılan şeyi görün.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="overflow-hidden rounded-lg border border-[#E6D2C0]">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Galeri+${i}`}
                    alt={`Galeri görsel ${i}`}
                    width={300}
                    height={300}
                    className="aspect-square object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="py-16 md:py-24 bg-[#F3E5D8]">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5D4037]">Bizi Ziyaret Edin</h2>
                <p className="mt-4 text-[#7D5A50] md:text-lg">
                  Sizi Lunqa Coffee & Tea House'da görmekten mutluluk duyarız. Bir fincan kahve için uğrayın veya
                  bizimle iletişime geçin.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-[#C8553D]" />
                    <div>
                      <h3 className="font-medium text-[#5D4037]">Adres</h3>
                      <p className="mt-1 text-[#7D5A50]">Kavakpınar mah. Abdi ipekçi cad. no:137B, Pendik - İstanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-[#C8553D]" />
                    <div>
                      <h3 className="font-medium text-[#5D4037]">Telefon</h3>
                      <p className="mt-1 text-[#7D5A50]">(0212) 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-[#C8553D]" />
                    <div>
                      <h3 className="font-medium text-[#5D4037]">E-posta</h3>
                      <p className="mt-1 text-[#7D5A50]">lunqacoffee@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 text-[#C8553D]" />
                    <div>
                      <h3 className="font-medium text-[#5D4037]">Çalışma Saatleri</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-[#7D5A50]">
                        <div>Pazartesi - Cuma</div>
                        <div>09:00 - 24:00</div>
                        <div>Cumartesi</div>
                        <div>09:00 - 24:00</div>
                        <div>Pazar</div>
                        <div>09:00 - 24:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://www.instagram.com/lunqa.coffe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#C8553D] text-white hover:bg-[#A33D2A] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram'da Bizi Takip Edin</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border border-[#E6D2C0] bg-white p-6">
                <h3 className="text-xl font-bold text-[#5D4037]">Bize Mesaj Gönderin</h3>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#5D4037]">
                      İsim
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-[#E6D2C0] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#7D5A50]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8553D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#5D4037]">
                      E-posta
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-[#E6D2C0] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#7D5A50]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8553D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#5D4037]">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-[#E6D2C0] bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-[#7D5A50]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8553D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Mesajınız"
                    />
                  </div>
                  <Button className="w-full bg-[#C8553D] hover:bg-[#A33D2A] text-white border-none">
                    Mesaj Gönder
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#E6D2C0] py-6 md:py-8 bg-[#FDF8F3]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Lunqa Coffee Logo"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-[#5D4037]">Lunqa Coffee & Tea House</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#7D5A50]">
            <Link href="#" className="hover:text-[#5D4037]">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-[#5D4037]">
              Kullanım Şartları
            </Link>
          </div>
          <div className="text-sm text-[#7D5A50]">
            © {new Date().getFullYear()} Lunqa Coffee & Tea House. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  )
}
