
export default function MobileApp() {
  return (
    <div className="bg-primary-brand-color bg-mobile-app flex flex-col md:flex-row rounded-none justify-between items-center mt-7 sm:rounded-lg text-white">
      <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin</h3>
        <p className="font-semibold ">isediginiz urunleri dakikalar icinde kapiniza<br/> getirelim.</p>
        <nav className="mt-5 flex  flex-wrap md:flex-nowrap justify-center gap-2">
          <a href="#" className="transition-all transform  hover:scale-105">
            <img
              src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fappstorees_3e5b4c3264.svg&w=256&q=75" />
          </a>
          <a href="#" className="transition-all transform  hover:scale-105">
            <img
              src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fplaystorees_82f027bb11.svg&w=256&q=75" />
          </a>
        </nav>
      </div>
      <picture className="pt-8 px-2">
					<img src="https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fcta_phone_def0b92214.png&w=384&q=75"/>
      </picture>
    </div>
  )
}