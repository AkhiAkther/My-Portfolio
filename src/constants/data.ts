import {Facebook,Twitter, Linkedin, LayoutDashboard, SquareCode,SquareDashedBottomCode,FileJson,ShoppingBag,DatabaseZap} from 'lucide-react'
import { XYZImg,BrainStation,ollyoImg } from '@/assest/images'
import donationimg from '@/assest/portfolio/portfolio-2.png'
import worldcupImg from '@/assest/portfolio/portfolio-3.png'
import studylabImg from '@/assest/portfolio/portfolio-1.png'

export const navigation =[
    {title:"Home", href:"/"},
    {title:"Services", href:"/services"},
    {title:"Portfolio", href:"/portfolio"},
    {title:"Resume", href:"/resume.pdf" , target:"_blank"},
    {title:"Contact", href:"/contact"}
]
export const social =[
    {title:"Facebook", href:"https://www.facebook.com/profile.php?id=100064316097104", icon:Facebook},
    {title:"Twitter", href:"", icon:Twitter},
    {title:"Linkdin", href:"", icon:Linkedin},
    
   
]
export const serviceDetails =[
    {title:"Web Design",
    description:"I'm creating intuitive and visually appealing user interfaces and Experience to enhance user interaction and engagemen",
    icon:LayoutDashboard
},
    {title:"Full Stack Development",
    description:"My  full-stack development expertise ensures a seamless end-to-end solution. Custom website and web application development from front-end to back-end.",
    icon:SquareCode
},
    {title:"Front-end Development",
    description:" Creating interactive and responsive user interfaces using HTML, CSS, and JavaScript. i'm providing a  captivating user experience, driving engagement and conversions.",
    icon:SquareDashedBottomCode
},
    {title:"Back-end Development",
    description:"I'm creating efficient back-end development guarantees the stability and scalability of your web applications. Building robust server-side applications and databases.",
    icon:FileJson
},
    {title:"MERN Stack Development",
    description:"I'm providing dynamic web application using  React,Node.js ,Express.js and MongoDB to build user-friendly back-end.",
    icon:DatabaseZap
},
    {title:"E-Commerce Project",
    description:"I'm Creating interactive E-Commerce project ,Developing online stores with payment gateways and product management.",
    icon:ShoppingBag
},
]
export const experience =[
    {title:"Web Devloper",
    position:"Intern",
   company:"XYZ.com",
   duration:"January 2022-June 2022",
   logo:XYZImg,
   href:''

},
    {title:"Front-end Developer",
    position:"Intern",
   company:"Brain Station",
   duration:"July 2022-December 2022",
   logo:BrainStation,
   href:''

},
    {title:"Full-Stack Developer",
    position:"Intern",
   company:"ollyo",
   duration:"January2023-March-2023",
   logo:ollyoImg,
   href:""

},
]
export const typing =['Full-Stack Developer', 
'Front-end Developer', 
'MERN Stack Developer', 
'Web Designer']
export const portfolio =[
    {title:"Study-Lab Application", href:"https://study-lab-website.vercel.app/", img:studylabImg},
    {title:"Donation Website", href:"https://study-lab-website-d81w.vercel.app/", img:donationimg},
    {title:"World-Cup", href:"https://world-cup-beta.vercel.app/", img:worldcupImg},
    
   
]