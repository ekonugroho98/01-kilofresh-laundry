// ============================================================
// Tipe data bersama untuk semua website UMKM.
// Komponen UI digerakkan sepenuhnya dari objek `site` di bawah.
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FeaturePoint {
  icon: string; // nama ikon (lihat Icon.tsx)
  title: string;
  desc: string;
}

export interface Service {
  icon: string;
  name: string;
  desc: string;
  price?: string;
}

export interface Plan {
  name: string;
  price: string;
  unit?: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number; // 1-5
  avatar?: string;
}

export interface SiteData {
  brand: string;
  logoMark: string; // inisial untuk logo
  tagline: string;
  whatsapp: string; // format internasional tanpa +, mis. 6281234567801
  phone: string;
  email: string;
  address: string;
  hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    stats: Stat[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: FeaturePoint[];
    image: string;
  };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'KiloFresh',
  logoMark: 'KF',
  tagline: 'Laundry kiloan & dry clean antar-jemput',
  whatsapp: '6281234567801',
  phone: '0812-3456-7801',
  email: 'halo@kilofresh.id',
  address: 'Jl. Melati Raya No. 12, Bogor, Jawa Barat',
  hours: 'Setiap hari 07.00 – 21.00',
  social: { instagram: '@kilofresh.id', facebook: 'KiloFresh Laundry', tiktok: '@kilofresh' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Antar-jemput gratis se-Bogor',
    title: 'Cucian bersih wangi,',
    highlight: 'selesai dalam 24 jam',
    subtitle:
      'KiloFresh menjemput, mencuci, dan mengantar pakaian Anda kembali rapi tanpa Anda perlu keluar rumah. Detergen ramah lingkungan, hasil rapi setrika.',
    ctaPrimary: 'Pesan Antar-Jemput',
    ctaSecondary: 'Lihat Harga',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '24 Jam', label: 'Selesai cepat' },
      { value: '5.000+', label: 'Pelanggan puas' },
      { value: '4.9/5', label: 'Rating Google' },
    ],
  },
  about: {
    eyebrow: 'Tentang KiloFresh',
    title: 'Laundry yang mengerti sibuknya hari Anda',
    paragraphs: [
      'KiloFresh hadir sejak 2019 untuk keluarga dan pekerja sibuk yang tak punya waktu mengurus cucian. Cukup pesan lewat WhatsApp, kurir kami menjemput, dan pakaian kembali bersih wangi tepat waktu.',
      'Kami memakai mesin higienis dengan pemisahan warna, detergen ramah kulit & lingkungan, serta proses setrika rapi untuk hasil yang siap pakai.',
    ],
    points: [
      { icon: 'truck', title: 'Antar-Jemput Gratis', desc: 'Gratis pickup & delivery untuk area Bogor kota.' },
      { icon: 'clock', title: 'Express 24 Jam', desc: 'Layanan kilat tersedia, selesai dalam sehari.' },
      { icon: 'leaf', title: 'Ramah Lingkungan', desc: 'Detergen biodegradable, aman untuk kulit sensitif.' },
      { icon: 'shield', title: 'Garansi Bersih', desc: 'Tidak bersih? Kami cuci ulang tanpa biaya.' },
    ],
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Layanan Kami',
    title: 'Apa saja yang bisa kami cuci',
    subtitle: 'Dari cucian harian sampai jas dan sepatu kesayangan Anda.',
    items: [
      { icon: 'washer', name: 'Cuci Kiloan', desc: 'Cuci, kering, lipat per kilogram. Paling hemat untuk harian.', price: 'mulai Rp7.000/kg' },
      { icon: 'shirt', name: 'Cuci Satuan', desc: 'Pakaian khusus dihitung per potong, penanganan ekstra hati-hati.', price: 'mulai Rp5.000/pcs' },
      { icon: 'suit', name: 'Dry Clean', desc: 'Jas, gaun, dan bahan halus dengan teknik dry cleaning.', price: 'mulai Rp35.000' },
      { icon: 'iron', name: 'Setrika Saja', desc: 'Sudah cuci sendiri? Kami bantu setrika rapi siap pakai.', price: 'mulai Rp5.000/kg' },
      { icon: 'shoe', name: 'Cuci Sepatu', desc: 'Sneakers & sepatu kulit dibersihkan menyeluruh.', price: 'mulai Rp35.000/pasang' },
      { icon: 'bed', name: 'Bed Cover & Selimut', desc: 'Cucian besar seperti bed cover, gorden, dan boneka.', price: 'mulai Rp25.000' },
    ],
  },
  pricing: {
    eyebrow: 'Paket Harga',
    title: 'Pilih paket yang pas',
    subtitle: 'Harga transparan, tanpa biaya tersembunyi. Antar-jemput sudah termasuk.',
    plans: [
      {
        name: 'Reguler',
        price: 'Rp7.000',
        unit: '/kg',
        desc: 'Selesai dalam 2–3 hari',
        features: ['Cuci + kering + lipat', 'Detergen standar', 'Antar-jemput gratis', 'Min. 3 kg'],
        cta: 'Pesan Reguler',
      },
      {
        name: 'Express',
        price: 'Rp12.000',
        unit: '/kg',
        desc: 'Selesai dalam 24 jam',
        features: ['Semua fitur Reguler', 'Prioritas pengerjaan', 'Setrika rapi', 'Wangi premium'],
        featured: true,
        cta: 'Pesan Express',
      },
      {
        name: 'Satuan',
        price: 'Rp5.000',
        unit: '/pcs',
        desc: 'Untuk pakaian khusus',
        features: ['Dihitung per potong', 'Penanganan hati-hati', 'Cocok bahan halus', 'Bisa dry clean'],
        cta: 'Tanya Detail',
      },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Lihat hasil & suasana kami',
    subtitle: 'Outlet bersih, proses rapi, dan hasil yang bikin tenang.',
    images: [
      { url: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop', alt: 'Tumpukan handuk bersih terlipat rapi' },
      { url: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=800&auto=format&fit=crop', alt: 'Mesin cuci di outlet laundry' },
      { url: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800&auto=format&fit=crop', alt: 'Pakaian tergantung rapi setelah dicuci' },
      { url: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=800&auto=format&fit=crop', alt: 'Proses melipat pakaian' },
      { url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop', alt: 'Keranjang laundry berisi pakaian' },
      { url: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop', alt: 'Setrika pakaian rapi' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pelanggan KiloFresh',
    subtitle: 'Ribuan keluarga di Bogor mempercayakan cuciannya pada kami.',
    items: [
      { name: 'Dewi Lestari', role: 'Ibu rumah tangga', rating: 5, quote: 'Antar-jemputnya benar-benar bantu banget. Cucian wangi dan dilipat rapi. Langganan tetap!' },
      { name: 'Andi Pratama', role: 'Karyawan swasta', rating: 5, quote: 'Express 24 jam beneran tepat waktu. Kemeja kerja saya selalu rapi tiap pagi.' },
      { name: 'Siti Rahma', role: 'Mahasiswi', rating: 5, quote: 'Harga mahasiswa banget, hasilnya rapi. Sepatu sneakers saya juga jadi kayak baru.' },
    ],
  },
  contact: {
    eyebrow: 'Hubungi Kami',
    title: 'Pesan antar-jemput sekarang',
    subtitle: 'Isi form atau langsung chat WhatsApp kami. Kurir siap menjemput cucian Anda hari ini.',
  },
};
