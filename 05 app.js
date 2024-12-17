const ogrenci = {
    adisoyadi: 'Cansu Can',
    telefon:'05457778899',
   adres:'Beylikdüzü/İstanbul',
    resimUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    resimBoyut: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{ogrenci.adisoyadi}</h1>
       <h3>{ogrenci.telefon}</h3>
      <h3>{ogrenci.adres} </h3>
        <img
          className="avatar"
          src={ogrenci.resimUrl}
          alt={ ogrenci.adisoyadi+' Fotoğrafı'}
          style={{
            width: ogrenci.resimBoyut,
            height: ogrenci.resimBoyut
          }}
        />
      </>
    );
  }