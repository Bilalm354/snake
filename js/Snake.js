"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
var Snake = /** @class */ (function () {
    function Snake() {
        this.positions = [{
                x: 5,
                y: 5
            }];
        this.direction = "right" /* Direction.RIGHT */;
    }
    Snake.prototype.setNewPosition = function (position, divisions) {
        if (position.x <= divisions && position.y <= divisions && position.x >= 1 && position.y >= 1) {
            this.positions[0] = position;
        }
    };
    Snake.prototype.addTail = function () {
        // positions.push({ x: 1, })
    };
    return Snake;
}());
exports.Snake = Snake;
