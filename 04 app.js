const resim = {
    aciklama: 'İstanbul Manzarası',
    resimUrl: 'https://r.resimlink.com/7t35V.jpg',
    boyut: 90,
  };
  
  
  
  export default function Profile() {
    return (
      <>
        <h1>{resim.aciklama}</h1>
        <img
          className="avatar"
          src={resim.resimUrl}
          alt={'Photo of ' + resim.aciklama}
          style={{
            width: resim.boyut,
            height: resim.boyut
          }}
        />
      </>
    );
  }