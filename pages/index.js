import Head from 'next/head'
import Image from 'next/image'
import { data } from '../data'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import Testimonial from '../components/Testimonial'

export default function Home({services}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Agency</title>
        <meta name="description" content="The Best Frontend Dev" />
      </Head>
      <Intro/>
      <Services services={services}/>
      <Testimonial/>
    </div>
  )
}
export const getStaticProps=async()=>{
const services=data
return{
  props:{services}
}
}
