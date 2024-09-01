import Featured from "./components/Featured"
import Offer from "./components/Offer"
import Slider from "./components/Slider"

function page() {
  return (
    <main>
      <div>
        <Slider />
        <Featured />
      </div>
      <Offer />
    </main>
  )
}

export default page
