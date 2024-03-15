import React from "react";
import Navbar from "./components/navbar";
import ImageCard from "./components/atraksi";
import Slider from "./components/slider";

function App() {
  return (
    <div className="bg-cream">
      <Navbar />
      <Slider/>
      <div className="container mx-auto">
        <div className="flex min-h-screen items-center justify-center bg-white m-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            <ImageCard
              title="Atraksi 1"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 2"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 3"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 4"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 5"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 6"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 7"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 8"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 9"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
            <ImageCard
              title="Atraksi 10"
              image="./images/mina agung.jpg"
              deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolore adipisci placeat."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
