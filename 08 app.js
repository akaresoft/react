import { useState } from 'react';
function ButonTek() {
  const [sayac, sayacArtir] = useState(1);

      function Tıkla() {
        sayacArtir(sayac + 2);
      }

  return (
    <button onClick={Tıkla}>
      {sayac} defa tıklandı
    </button>
  );
}

/* Çift buton*/
function ButonCift() {
  const [sayac2, sayacArtir2] = useState(0);

      function Tıkla2() {
        sayacArtir2(sayac2 + 2);
      }

  return (
    <button onClick={Tıkla2}>
      {sayac2} defa tıklandı
    </button>
  );
}
  
  export default function MyApp() {
    return (
      <div>
        <h1>Buton sayaç örneği</h1>
              <h3>Teker teker sayan buton</h3>
                <ButonTek /> <br/> <br/>
          
              <h3>Çifter çifter sayan buton</h3>
            <ButonCift />
      </div>
    );
  }