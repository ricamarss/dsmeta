import Header from "./components/Header"
import SaleCard from "./components/SaleCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SaleCard />

          </div>
        </section>
      </main>
    </>
  )
}

export default App
