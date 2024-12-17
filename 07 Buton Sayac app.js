import { useState } from 'react';
function BenimButon() {
  const [sayac, sayacArtir] = useState(0);

      function Tıkla() {
        sayacArtir(sayac + 1);
      }

  return (
    <button onClick={Tıkla}>
      {sayac} defa tıklandı
    </button>
  );
}
  
  export default function MyApp() {
    return (
      <div>
        <h1>Buton sayaç örneği</h1>
        <BenimButon />
      </div>
    );
  }

  



