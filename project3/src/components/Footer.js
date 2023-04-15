import Menu from "./ui/Menu"
import {FaFacebook} from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { BiGlobe } from 'react-icons/bi';



export default function HeroSection() {

  const menus = [
    {
      title: 'Getir\i Kesfedin',
      items: [
        {
          title: 'Hakkimizda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Iletisim'
        },
        {
          title: 'Covid-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Yardima mi ihtiyaciniz var?',
      items: [
        {
          title: 'Hakkimizda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Iletisim'
        },
        {
          title: 'Covid-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Is ortagimiz olun',
      items: [
        {
          title: 'Hakkimizda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'Iletisim'
        },
        {
          title: 'Covid-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    }
  ]



  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid  md:grid-cols-2 gap-y-6 lg:grid-cols-4 pt-5 md:pt-10 i ">
          <section>
            <nav className="grid gap-y-2">
              <h6 className="text-primary-brand-color text-md">Getir'i indirin!</h6>
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-tr.svg" />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fplaystorees_82f027bb11.svg&w=256&q=75" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => <Menu key={index} {...menu} />)}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a href="#" className="text-primary-brand-color hover:underline">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a href="#" className="w-8 h-8 rounded-md text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="w-8 h-8 rounded-md text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="w-8 h-8 rounded-md text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="flex  transition-colors  hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent h-8 items-center px-2 text-sm gap-x-2 rounded text-gray-500  border border-gray-100">
              <BiGlobe size={20} />
              Turkce (TR)
            </a>


          </nav>
        </div>

      </div>
    </div>
  )
}