import Head from 'next/head'
import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Cards from '../components/Homepage/Cards'
import Teachers from '../components/Homepage/Teachers'
import YogaSchedules from '../components/Homepage/YogaSchedules'
import BlogCard from '../components/Homepage/BlogCard'
import Gallerys from '../components/Homepage/Gallerys'
import Footer from '../components/Homepage/Footer'


export default function Home() {
  return (
      <div>
        <Hero/>
        <About/>
        <Cards/>
        <Teachers />
        <YogaSchedules />
        <BlogCard />
        <Gallerys />
        <Footer />
      </div>
  )
}
