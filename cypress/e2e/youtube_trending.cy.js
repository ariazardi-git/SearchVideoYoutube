import youtubeGamingPage from '../page_objects/youtubeGamingPage';
import youtubeWatchPage from '../page_objects/youtubeWatchPage';

describe('Final Project Bootcamp Cypress AfterOffice Batch #1 - YouTube Flow', () => {

  it('Harus sukses navigasi ke kategori gaming, buka trending nomor 3 dan verifikasi detail video', function() {
    
    youtubeGamingPage.navigate();
    youtubeGamingPage.goToGamingCategory();
    youtubeGamingPage.viewAllTrendingVideos();
    youtubeGamingPage.selectTrendingVideoNumberThree();

    cy.then(() => {
      youtubeWatchPage.verifyVideoDetails(this.trendingTitle, this.trendingChannel);
    });

  });
});
