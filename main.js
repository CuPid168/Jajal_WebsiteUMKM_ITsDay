function selectCard(card) {
  const cards = document.querySelectorAll('.packet-card');
  cards.forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
}

document.querySelectorAll('.location-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(
      'https://maps.app.goo.gl/w8Y22uoBsEGKkV6b6?g_st=ipc',
      '_blank'
    );
  });
});

document.querySelectorAll('.packet-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(
      'https://api.whatsapp.com/send?phone=6281313527533&text=Hai%20ka%20mau%20informasi%20wisata%20binong',
      '_blank'
    );
  });
});

document.querySelectorAll('.shop-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(
      'https://shopee.co.id/merajutasakita?uls_trackid=326383a9bd08&utm_campaign=-&utm_content=product&utm_medium=affiliates&utm_source=an_11055180020&utm_term=d94dg6jemtdd',
      '_blank'
    );
  });
});





