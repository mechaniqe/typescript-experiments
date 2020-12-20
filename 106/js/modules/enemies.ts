namespace Enemies {
    export class Sprite {
        constructor (public path: string, public priority: number) {

        }
    }

    export class CoreEnemy {
        initialHealth: number;
        health: number;
        speed: number;
        sprites: Sprite[];
        isDead: boolean;

        constructor (initialHealth: number, speed: number) {
            this.initialHealth = initialHealth;
            this.health = this.initialHealth;
            this.speed = speed;

            this.sprites = [];
            this.isDead = false;
        }

        addSprites (...sprites: Sprite[]) {
            sprites.forEach(element => {
                this.sprites.push (element);
            });
        }

        damage (value: number) {
            this.health -= value;
            this.isDead = this.health > 0;
        }
    }

    export class RunnerEnemy extends CoreEnemy {
        isActivated: boolean;

        constructor (initialHealth: number, speed: number) {
            super (initialHealth, speed);

            this.isActivated = false;
        }

        activate (callback: (health: number) => void) {
            this.isActivated = true;

            window.setTimeout (() => {
                callback (this.health);
            }, 1000);
        }

        deActivate (callback: (health: number) => void) {
            this.isActivated = false;

            window.setTimeout (() => {
                callback (this.health);
            }, 1000);
        }
    }
}

window.onload = function () {
    const runnerEnemy = new Enemies.RunnerEnemy (10, 5);
    runnerEnemy.damage (3);
    runnerEnemy.activate ((health: number) => {
        toastr.info ("Current Health: " + health);
        // console.log ("Current Health: " + health);
    });
}