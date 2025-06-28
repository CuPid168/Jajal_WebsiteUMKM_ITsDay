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

    for (let i = 0; i < 8; i++) {
      const love = document.createElement('span');
      love.className = 'love';
      const angle = (i / 8) * 2 * Math.PI;
      const tx = Math.cos(angle) * 300 + 'px'; 
      const ty = Math.sin(angle) * 300 + 'px';
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

function typeWriter(element, text, speed = 30, callback) {
  let i = 0;
  function typing() {
    if (i <= text.length) {
      element.innerHTML = text.slice(0, i) + '<span class="type-cursor">|</span>';
      i++;
      setTimeout(typing, speed);
    } else {
      element.innerHTML = text;
      if (callback) callback();
    }
  }
  typing();
}

const titleText = 'Dari Tangan <span class="hero-color">Terampil</span><br />Lahir Karya Penuh <span class="hero-color">Cerita</span>';
const descText = 'Temukan nilai tradisi dalam setiap produk kerajinan <br />kami, hasil karya pengrajin lokal yang menjaga warisan<br />budaya lewat sentuhan tangan.';

window.addEventListener('DOMContentLoaded', () => {
  const titleEl = document.getElementById('typewriter-title');
  const descEl = document.getElementById('typewriter-desc');
  const logoEl = document.getElementById('banner-logo');
  const shopBtn = document.getElementById('shop-btn');
  typeWriter(titleEl, titleText, 30, () => {
    setTimeout(() => {
      typeWriter(descEl, descText, 18, () => {
        if (logoEl) {
          logoEl.style.display = '';
          setTimeout(() => logoEl.classList.add('show'), 10);
        }
        if (shopBtn) {
          shopBtn.style.display = '';
          setTimeout(() => shopBtn.classList.add('show'), 10);
        }
      });
    }, 300);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const resellerBtn = document.querySelector('.reseller-btn');
  if (resellerBtn) {
    resellerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://t.me/+unQsOyE6mjc4OGRl', '_blank');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(
        'https://api.whatsapp.com/send?phone=6282219145422&text=Saya%20ingin%20custom%20rajut',
        '_blank'
      );
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'assets/testimoni1.png',
    'assets/testimoni2.png',
    'assets/testimoni3.png'
  ];
  let idx = 0;
  const img = document.getElementById('testimonial-img');

  setInterval(() => {
    img.classList.remove('slide'); 
    idx = (idx + 1) % images.length;
    img.src = images[idx];
    void img.offsetWidth; 
    img.classList.add('slide'); 
  }, 5000);
});

document.querySelectorAll('.social-item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', function () {
    const link = item.getAttribute('data-link');
    if (link) window.open(link, '_blank');
  });
});

document.getElementById('navMenuBtn').onclick = function() {
  document.getElementById('navLinks').classList.toggle('open');
};

