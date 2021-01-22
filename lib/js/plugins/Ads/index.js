import Ads from './Ads.js';
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
        <div class="ads">
        <img class="ads__img" src="${this.currentAd.imageUrl}" />
        <section>
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
            <div class="ads__info">
              <h5 class="ads__title">${this.currentAd.title}</h5>
              <p class="ads__body">${this.currentAd.body}</p>
            </div>
          </a>
        </section>
          
        </div>`;
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
export default AdsPlugin;
