import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/Comps/Main'
import Categories from '@/Comps/Categories'
import Music_experience from '@/Comps/Music_experience'
import Our_products from '@/Comps/Our_products'
import Feedback from '@/Comps/Feedback'
import Most_sold from '@/Comps/Most_sold'
import Poster from '@/Comps/Poster'
import Footer from '@/Comps/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
      <Categories />
      <Music_experience />
      <Our_products />
      <Feedback />
      <Most_sold />
      <Poster />
      <Footer />
    </>
  )
}
