import React, { useState } from 'react';

function UrunFiyatiToplamaAraci() {
  // State değerlerini tanımlayın
  const [toplamFiyat, setToplamFiyat] = useState(0);

  // Butonlara tıklandığında fiyatları toplayın
  const topla = (fiyat) => {
    setToplamFiyat(toplamFiyat + fiyat);
  };

  return (
    <div style={{border:'1px solid black',
     borderRadius:'15px',
     backgroundColor:'#eceff1',
     padding:'10px',
     margin:'10px',
     border:'none',
    }}>
     
     
      {/* Başlık */}
      
      <h3 style={{float:'left'}}>CASH </h3>
      
      
      <div >
      <h3 style={{
      float:'left',
       marginLeft:'115px'}}>Rp</h3>

      <input  style={{
      float:'right',
      backgroundColor:'white',
      width:'40%',
      height:'28px',
      border:'none',
      borderRadius:'5px'}} value={toplamFiyat}></input>
      </div>
      

      {/* Butonlar */}
      <div   style={{marginTop:'50px'}}>
        <div>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}}  onClick={() => topla(10)}>
            +10 TL
          </button>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}}  onClick={() => topla(20)}>
            +20 TL
          </button>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}} onClick={() => topla(30)}>
            +30 TL
          </button>
        </div>
        <div>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}}  onClick={() => topla(50)}>
            +50 TL
          </button>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}}  onClick={() => topla(100)}>
            +100 TL
          </button>
          <button style={{margin:'5px',width:'90px',height:'25px',borderRadius:'5px',backgroundColor:'white',border:'none'}}  onClick={() => topla(200)}>
            +200 TL
          </button>
        </div>
      </div>

      {/* Toplam fiyatı gösteren alan */}
      <div>
       
      </div>
    </div>
  );
}

export default UrunFiyatiToplamaAraci;