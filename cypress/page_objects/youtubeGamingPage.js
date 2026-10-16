class YoutubeGamingPage {
  navigate() {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    cy.wait(4000);
  }

  goToGamingCategory() {
    // Jalur pintas langsung ke halaman gaming yang stabil
    cy.visit('/gaming', {
      headers: {
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    cy.wait(4000);
  }

    viewAllTrendingVideos() {
    // Menembak langsung elemen tautan judul atau teks yang mengandung kata 'Trending' di halaman gaming
    cy.get('span, a', { timeout: 15000 })
      .contains('Trending')
      .first()
      .should('be.visible')
      .click({ force: true });
      
    // Berikan jeda 3 detik agar halaman daftar video trending termuat sempurna
    cy.wait(3000);
  }


      selectTrendingVideoNumberThree() {
    // Menggunakan pemisah koma agar Cypress mencari elemen grid video ataupun list video biasa
    cy.get('ytd-grid-video-renderer, ytd-video-renderer', { timeout: 15000 })
      .eq(2) // Mengambil indeks ke-2 (video urutan nomor 3)
      .within(() => {
        // Ekstraksi Judul Video
        cy.get('#video-title, a#video-title-link').first().invoke('text').then((titleText) => {
          cy.wrap(titleText.trim()).as('trendingTitle');
        });

        // SOLUSI KOKOH: Mengambil nama channel dari elemen teks tautan penampung informasi pembuat video
        cy.get('#channel-name a, #byline-container a, #byline a').first().invoke('text').then((channelText) => {
          cy.wrap(channelText.trim()).as('trendingChannel');
        });

        // Klik judul untuk memutar video tersebut
        cy.get('#video-title, a#video-title-link').first().click({ force: true });
      });
  }


}

// WAJIB ADA DI BARIS PALING BAWAH:
export default new YoutubeGamingPage();
