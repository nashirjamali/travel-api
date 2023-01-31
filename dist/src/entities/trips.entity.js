"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Trip = class Trip {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Trip.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "destination_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "destination_city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "destination_region", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "destination_country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "minimum_person", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' })
], Trip.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', precision: 10, scale: 2, default: 0 })
], Trip.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255' })
], Trip.prototype, "photo_cover", void 0);
Trip = __decorate([
    (0, typeorm_1.Entity)()
], Trip);
exports.default = Trip;
