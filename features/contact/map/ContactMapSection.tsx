import MapOverlay from "@/components/ui/overlay/MapOverlay"
import BuildingIcon from "@/components/ui/icons/BuildingIcon"

const sectionStyle =
  "relative w-full max-w-[1440px] min-h-[500px] bg-[#F2F3FF] bg-[url('/images/contact/contact-map.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center"

const overlayStyle = `
    absolute w-full max-w-[240px] min-h-[122px] h-auto bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center p-4
` 

export default function ContactMapSection() {
  return (
    <section className={sectionStyle}>
        <MapOverlay 
            className={overlayStyle} 
            locationTitle="Corporate Excellence HQ"
            icon={<BuildingIcon />}
        />
    </section>
  )
}