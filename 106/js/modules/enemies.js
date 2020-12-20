var Enemies;
(function (Enemies) {
    class Sprite {
        constructor(path, priority) {
            this.path = path;
            this.priority = priority;
        }
    }
    Enemies.Sprite = Sprite;
    class CoreEnemy {
        constructor(initialHealth, speed) {
            this.initialHealth = initialHealth;
            this.health = this.initialHealth;
            this.speed = speed;
            this.sprites = [];
            this.isDead = false;
        }
        addSprites(...sprites) {
            sprites.forEach(element => {
                this.sprites.push(element);
            });
        }
        damage(value) {
            this.health -= value;
            this.isDead = this.health > 0;
        }
    }
    Enemies.CoreEnemy = CoreEnemy;
    class RunnerEnemy extends CoreEnemy {
        constructor(initialHealth, speed) {
            super(initialHealth, speed);
            this.isActivated = false;
        }
        activate(callback) {
            this.isActivated = true;
            window.setTimeout(() => {
                callback(this.health);
            }, 1000);
        }
        deActivate(callback) {
            this.isActivated = false;
            window.setTimeout(() => {
                callback(this.health);
            }, 1000);
        }
    }
    Enemies.RunnerEnemy = RunnerEnemy;
})(Enemies || (Enemies = {}));
window.onload = function () {
    const runnerEnemy = new Enemies.RunnerEnemy(10, 5);
    runnerEnemy.damage(3);
    runnerEnemy.activate((health) => {
        toastr.info("Current Health: " + health);
        // console.log ("Current Health: " + health);
    });
};
//# sourceMappingURL=enemies.js.map