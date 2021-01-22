let AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        let observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    };
    AutoPause.prototype.handleIntersection = function (entries) {
        let entry = entries[0];
        let isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    AutoPause.prototype.handleVisibilityChange = function () {
        let isVisible = document.visibilityState === 'visible';
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
export default AutoPause;
