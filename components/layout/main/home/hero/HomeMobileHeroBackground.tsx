import Image from "next/image"


export default function HomeMobileHeroBackground() {
    return (
        <div className="w-full min-h-[288px] h-auto rounded-lg">
            <Image 
                src="../../../../../images/hero/hero-home-moblie-background.svg" 
                alt="home-moblie-background" 
                width={342} 
                height={256} 
                className="w-full h-auto object-cover rounded-lg"
            />
        </div>
    )
}