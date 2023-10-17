import AboutMe from '@/components/AboutMe'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import MyExpriences from '@/components/MyExpriences'
import MyServices from '@/components/MyServices'
import Portfolio from '@/components/Portfolio'


export default function Home() {
  return (
   <main>
    <Banner/>
    <AboutMe/>
   
    <MyServices/>
    <Portfolio/>
    <MyExpriences/>
    <Contact/>
   </main>
  )
}
