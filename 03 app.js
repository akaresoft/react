function HakkimdaSayfa() {
    return (
      <>
        <h1>Hakkımda</h1>
        <p>Bilgisayar Mühendisiiyim<br />
        Adres: Beylikdüzü İstanbul</p>
      </>
    )
}

function AnaSayfa() {
    return (
      <>
        <h1>Ana Sayfa</h1>
        <p>Ana sayfaya hoş geldiniz</p>
      </>
    )
}
  
  export default function MyApp() {
    return (
      <div>
        <h1>Merhaba React Uygulaması</h1>
         <HakkimdaSayfa/>
          <AnaSayfa/>
      </div>
    );
  }
