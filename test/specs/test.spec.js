describe('Twitch Homepage', () => {
    it('should display the correct homepage title', () => {
        browser.url('https://www.gmail.com/');
        const title = browser.getTitle();
       // console.log(title);
        
        assert.equal(title, 'Gmail');
    });


});