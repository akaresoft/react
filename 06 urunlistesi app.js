const urunler = [
    { urunadi: 'Lahana', fiyat:100 , id: 1 },
    { urunadi: 'Sarımsak', fiyat:200, id: 2 },
    { urunadi: 'Portakal', fiyat:300, id: 3 },
  ];
  
  export default function AlisVerisListesi() {
    const urunListesi = urunler.map(urun =>
      <li key={urun.id}>
          {urun.urunadi}=>{urun.fiyat}  TL
      </li>
    );
    return (
      <ul>{urunListesi}</ul>
    );
  }