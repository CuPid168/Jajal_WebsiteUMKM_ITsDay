function selectCard(card) {
  const cards = document.querySelectorAll('.packet-card');
  cards.forEach(c => {
    c.classList.remove('selected');
    c.style.animation = 'none';
    void c.offsetWidth;
    c.style.animation = '';
  });
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

function animateCard(card) {
  card.style.transform = 'scale(1.05) rotateX(2deg)';
  setTimeout(() => {
    card.style.transform = '';
  }, 300);
}

document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let burst = btn.querySelector('.love-burst');
    if (!burst) {
      burst = document.createElement('span');
      burst.className = 'love-burst';
      btn.appendChild(burst);
    }
    burst.innerHTML = '';
    burst.style.display = 'block';
    for (let i = 0; i < 6; i++) {
      const love = document.createElement('span');
      love.className = 'love';
      const angle = (i / 6) * 2 * Math.PI;
      const tx = Math.cos(angle) * 180 + 'px'; 
      const ty = Math.sin(angle) * 180 + 'px';
      love.style.setProperty('--tx', tx);
      love.style.setProperty('--ty', ty);
      burst.appendChild(love);
    }

    setTimeout(() => {
      burst.style.display = 'none';
      burst.innerHTML = '';
    }, 900);
  });
});






