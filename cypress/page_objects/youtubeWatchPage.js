class YoutubeWatchPage {
  verifyVideoDetails(expectedTitle, expectedChannel) {
    // 1. Verifikasi Judul Video
    cy.get('ytd-watch-metadata #title h1 yt-formatted-string', { timeout: 15000 })
      .should('be.visible')
      .invoke('text')
      .then((watchTitle) => {
        expect(watchTitle.trim()).to.equal(expectedTitle);
      });

    // 2. Verifikasi Nama Channel
    cy.get('ytd-watch-metadata #channel-name a', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((watchChannel) => {
        expect(watchChannel.trim()).to.equal(expectedChannel);
      });
  }
}

export default new YoutubeWatchPage();
