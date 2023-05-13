import Background from '../assets/images/whisky.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`, height: 2000, marginTop: -1100 }} 
      className="flex flex-row justify-center mx-auto bg-cover"
      >
    </div>
  )
}

export default Home