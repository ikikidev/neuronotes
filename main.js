"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tsparticles-engine/cjs/Core/Utils/Constants.js
var require_Constants = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.errorPrefix = exports2.visibilityChangeEvent = exports2.resizeEvent = exports2.touchCancelEvent = exports2.touchMoveEvent = exports2.touchEndEvent = exports2.touchStartEvent = exports2.mouseMoveEvent = exports2.mouseOutEvent = exports2.mouseLeaveEvent = exports2.mouseUpEvent = exports2.mouseDownEvent = exports2.generatedAttribute = void 0;
    exports2.generatedAttribute = "generated";
    exports2.mouseDownEvent = "pointerdown";
    exports2.mouseUpEvent = "pointerup";
    exports2.mouseLeaveEvent = "pointerleave";
    exports2.mouseOutEvent = "pointerout";
    exports2.mouseMoveEvent = "pointermove";
    exports2.touchStartEvent = "touchstart";
    exports2.touchEndEvent = "touchend";
    exports2.touchMoveEvent = "touchmove";
    exports2.touchCancelEvent = "touchcancel";
    exports2.resizeEvent = "resize";
    exports2.visibilityChangeEvent = "visibilitychange";
    exports2.errorPrefix = "tsParticles - Error";
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Vector3d.js
var require_Vector3d = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Vector3d.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Vector3d = void 0;
    var Constants_1 = require_Constants();
    var Utils_1 = require_Utils();
    var Vector3d2 = class _Vector3d {
      constructor(xOrCoords, y, z) {
        this._updateFromAngle = (angle, length) => {
          this.x = Math.cos(angle) * length;
          this.y = Math.sin(angle) * length;
        };
        if (!(0, Utils_1.isNumber)(xOrCoords) && xOrCoords) {
          this.x = xOrCoords.x;
          this.y = xOrCoords.y;
          const coords3d = xOrCoords;
          this.z = coords3d.z ? coords3d.z : 0;
        } else if (xOrCoords !== void 0 && y !== void 0) {
          this.x = xOrCoords;
          this.y = y;
          this.z = z ?? 0;
        } else {
          throw new Error(`${Constants_1.errorPrefix} Vector3d not initialized correctly`);
        }
      }
      static get origin() {
        return _Vector3d.create(0, 0, 0);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(angle) {
        this._updateFromAngle(angle, this.length);
      }
      get length() {
        return Math.sqrt(this.getLengthSq());
      }
      set length(length) {
        this._updateFromAngle(this.angle, length);
      }
      static clone(source) {
        return _Vector3d.create(source.x, source.y, source.z);
      }
      static create(x, y, z) {
        return new _Vector3d(x, y, z);
      }
      add(v) {
        return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
      }
      addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
      }
      copy() {
        return _Vector3d.clone(this);
      }
      distanceTo(v) {
        return this.sub(v).length;
      }
      distanceToSq(v) {
        return this.sub(v).getLengthSq();
      }
      div(n) {
        return _Vector3d.create(this.x / n, this.y / n, this.z / n);
      }
      divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
      }
      getLengthSq() {
        return this.x ** 2 + this.y ** 2;
      }
      mult(n) {
        return _Vector3d.create(this.x * n, this.y * n, this.z * n);
      }
      multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
      }
      normalize() {
        const length = this.length;
        if (length != 0) {
          this.multTo(1 / length);
        }
      }
      rotate(angle) {
        return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
      }
      setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : 0;
      }
      sub(v) {
        return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
      }
      subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
      }
    };
    exports2.Vector3d = Vector3d2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Vector.js
var require_Vector = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Vector.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Vector = void 0;
    var Vector3d_1 = require_Vector3d();
    var Vector2 = class _Vector extends Vector3d_1.Vector3d {
      constructor(xOrCoords, y) {
        super(xOrCoords, y, 0);
      }
      static get origin() {
        return _Vector.create(0, 0);
      }
      static clone(source) {
        return _Vector.create(source.x, source.y);
      }
      static create(x, y) {
        return new _Vector(x, y);
      }
    };
    exports2.Vector = Vector2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/NumberUtils.js
var require_NumberUtils = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/NumberUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parseAlpha = exports2.calcExactPositionOrRandomFromSizeRanged = exports2.calcExactPositionOrRandomFromSize = exports2.calcPositionOrRandomFromSizeRanged = exports2.calcPositionOrRandomFromSize = exports2.calcPositionFromSize = exports2.collisionVelocity = exports2.getParticleBaseVelocity = exports2.getParticleDirectionAngle = exports2.getDistance = exports2.getDistances = exports2.getValue = exports2.setRangeValue = exports2.getRangeMax = exports2.getRangeMin = exports2.getRangeValue = exports2.randomInRange = exports2.mix = exports2.clamp = exports2.getRandom = exports2.setRandom = exports2.getEasing = exports2.addEasing = void 0;
    var Utils_1 = require_Utils();
    var Vector_1 = require_Vector();
    var _random2 = Math.random;
    var easings = /* @__PURE__ */ new Map();
    function addEasing(name, easing) {
      if (easings.get(name)) {
        return;
      }
      easings.set(name, easing);
    }
    exports2.addEasing = addEasing;
    function getEasing(name) {
      return easings.get(name) || ((value) => value);
    }
    exports2.getEasing = getEasing;
    function setRandom(rnd = Math.random) {
      _random2 = rnd;
    }
    exports2.setRandom = setRandom;
    function getRandom2() {
      return clamp2(_random2(), 0, 1 - 1e-16);
    }
    exports2.getRandom = getRandom2;
    function clamp2(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    exports2.clamp = clamp2;
    function mix2(comp1, comp2, weight1, weight2) {
      return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    }
    exports2.mix = mix2;
    function randomInRange2(r) {
      const max = getRangeMax2(r);
      let min = getRangeMin2(r);
      if (max === min) {
        min = 0;
      }
      return getRandom2() * (max - min) + min;
    }
    exports2.randomInRange = randomInRange2;
    function getRangeValue2(value) {
      return (0, Utils_1.isNumber)(value) ? value : randomInRange2(value);
    }
    exports2.getRangeValue = getRangeValue2;
    function getRangeMin2(value) {
      return (0, Utils_1.isNumber)(value) ? value : value.min;
    }
    exports2.getRangeMin = getRangeMin2;
    function getRangeMax2(value) {
      return (0, Utils_1.isNumber)(value) ? value : value.max;
    }
    exports2.getRangeMax = getRangeMax2;
    function setRangeValue2(source, value) {
      if (source === value || value === void 0 && (0, Utils_1.isNumber)(source)) {
        return source;
      }
      const min = getRangeMin2(source), max = getRangeMax2(source);
      return value !== void 0 ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
      } : setRangeValue2(min, max);
    }
    exports2.setRangeValue = setRangeValue2;
    function getValue2(options) {
      const random = options.random, { enable, minimumValue } = (0, Utils_1.isBoolean)(random) ? {
        enable: random,
        minimumValue: 0
      } : random;
      return enable ? getRangeValue2(setRangeValue2(options.value, minimumValue)) : getRangeValue2(options.value);
    }
    exports2.getValue = getValue2;
    function getDistances2(pointA, pointB) {
      const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
      return { dx, dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
    }
    exports2.getDistances = getDistances2;
    function getDistance2(pointA, pointB) {
      return getDistances2(pointA, pointB).distance;
    }
    exports2.getDistance = getDistance2;
    function getParticleDirectionAngle2(direction, position, center) {
      if ((0, Utils_1.isNumber)(direction)) {
        return direction * Math.PI / 180;
      }
      switch (direction) {
        case "top":
          return -Math.PI / 2;
        case "top-right":
          return -Math.PI / 4;
        case "right":
          return 0;
        case "bottom-right":
          return Math.PI / 4;
        case "bottom":
          return Math.PI / 2;
        case "bottom-left":
          return 3 * Math.PI / 4;
        case "left":
          return Math.PI;
        case "top-left":
          return -3 * Math.PI / 4;
        case "inside":
          return Math.atan2(center.y - position.y, center.x - position.x);
        case "outside":
          return Math.atan2(position.y - center.y, position.x - center.x);
        default:
          return getRandom2() * Math.PI * 2;
      }
    }
    exports2.getParticleDirectionAngle = getParticleDirectionAngle2;
    function getParticleBaseVelocity2(direction) {
      const baseVelocity = Vector_1.Vector.origin;
      baseVelocity.length = 1;
      baseVelocity.angle = direction;
      return baseVelocity;
    }
    exports2.getParticleBaseVelocity = getParticleBaseVelocity2;
    function collisionVelocity2(v1, v2, m1, m2) {
      return Vector_1.Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * 2 * m2 / (m1 + m2), v1.y);
    }
    exports2.collisionVelocity = collisionVelocity2;
    function calcPositionFromSize(data) {
      return data.position && data.position.x !== void 0 && data.position.y !== void 0 ? {
        x: data.position.x * data.size.width / 100,
        y: data.position.y * data.size.height / 100
      } : void 0;
    }
    exports2.calcPositionFromSize = calcPositionFromSize;
    function calcPositionOrRandomFromSize(data) {
      return {
        x: (data.position?.x ?? getRandom2() * 100) * data.size.width / 100,
        y: (data.position?.y ?? getRandom2() * 100) * data.size.height / 100
      };
    }
    exports2.calcPositionOrRandomFromSize = calcPositionOrRandomFromSize;
    function calcPositionOrRandomFromSizeRanged(data) {
      const position = {
        x: data.position?.x !== void 0 ? getRangeValue2(data.position.x) : void 0,
        y: data.position?.y !== void 0 ? getRangeValue2(data.position.y) : void 0
      };
      return calcPositionOrRandomFromSize({ size: data.size, position });
    }
    exports2.calcPositionOrRandomFromSizeRanged = calcPositionOrRandomFromSizeRanged;
    function calcExactPositionOrRandomFromSize2(data) {
      return {
        x: data.position?.x ?? getRandom2() * data.size.width,
        y: data.position?.y ?? getRandom2() * data.size.height
      };
    }
    exports2.calcExactPositionOrRandomFromSize = calcExactPositionOrRandomFromSize2;
    function calcExactPositionOrRandomFromSizeRanged(data) {
      const position = {
        x: data.position?.x !== void 0 ? getRangeValue2(data.position.x) : void 0,
        y: data.position?.y !== void 0 ? getRangeValue2(data.position.y) : void 0
      };
      return calcExactPositionOrRandomFromSize2({ size: data.size, position });
    }
    exports2.calcExactPositionOrRandomFromSizeRanged = calcExactPositionOrRandomFromSizeRanged;
    function parseAlpha2(input) {
      return input ? input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input) : 1;
    }
    exports2.parseAlpha = parseAlpha2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/Utils.js
var require_Utils = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isArray = exports2.isObject = exports2.isFunction = exports2.isNumber = exports2.isString = exports2.isBoolean = exports2.getSize = exports2.getPosition = exports2.initParticleNumericAnimationValue = exports2.findItemFromSingleOrMultiple = exports2.itemFromSingleOrMultiple = exports2.executeOnSingleOrMultiple = exports2.rectBounce = exports2.circleBounce = exports2.circleBounceDataFromParticle = exports2.divMode = exports2.singleDivModeExecute = exports2.divModeExecute = exports2.isDivModeEnabled = exports2.deepExtend = exports2.calculateBounds = exports2.areBoundsInside = exports2.isPointInside = exports2.itemFromArray = exports2.arrayRandomIndex = exports2.loadFont = exports2.isInArray = exports2.safeMutationObserver = exports2.safeMatchMedia = exports2.hasMatchMedia = exports2.isSsr = exports2.getLogger = exports2.setLogger = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var Vector_1 = require_Vector();
    var _logger2 = {
      debug: console.debug,
      error: console.error,
      info: console.info,
      log: console.log,
      verbose: console.log,
      warning: console.warn
    };
    function setLogger(logger) {
      _logger2.debug = logger.debug || _logger2.debug;
      _logger2.error = logger.error || _logger2.error;
      _logger2.info = logger.info || _logger2.info;
      _logger2.log = logger.log || _logger2.log;
      _logger2.verbose = logger.verbose || _logger2.verbose;
      _logger2.warning = logger.warning || _logger2.warning;
    }
    exports2.setLogger = setLogger;
    function getLogger2() {
      return _logger2;
    }
    exports2.getLogger = getLogger2;
    function rectSideBounce(data) {
      const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data;
      if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
        return res;
      }
      if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0 || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0) {
        res.velocity = velocity * -factor;
        res.bounced = true;
      }
      return res;
    }
    function checkSelector(element, selectors) {
      const res = executeOnSingleOrMultiple2(selectors, (selector) => {
        return element.matches(selector);
      });
      return isArray2(res) ? res.some((t) => t) : res;
    }
    function isSsr2() {
      return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
    }
    exports2.isSsr = isSsr2;
    function hasMatchMedia2() {
      return !isSsr2() && typeof matchMedia !== "undefined";
    }
    exports2.hasMatchMedia = hasMatchMedia2;
    function safeMatchMedia2(query) {
      if (!hasMatchMedia2()) {
        return;
      }
      return matchMedia(query);
    }
    exports2.safeMatchMedia = safeMatchMedia2;
    function safeMutationObserver2(callback) {
      if (isSsr2() || typeof MutationObserver === "undefined") {
        return;
      }
      return new MutationObserver(callback);
    }
    exports2.safeMutationObserver = safeMutationObserver2;
    function isInArray2(value, array) {
      return value === array || isArray2(array) && array.indexOf(value) > -1;
    }
    exports2.isInArray = isInArray2;
    async function loadFont(font, weight) {
      try {
        await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
      } catch {
      }
    }
    exports2.loadFont = loadFont;
    function arrayRandomIndex2(array) {
      return Math.floor((0, NumberUtils_1.getRandom)() * array.length);
    }
    exports2.arrayRandomIndex = arrayRandomIndex2;
    function itemFromArray2(array, index, useIndex = true) {
      return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex2(array)];
    }
    exports2.itemFromArray = itemFromArray2;
    function isPointInside(point, size, offset, radius, direction) {
      return areBoundsInside(calculateBounds(point, radius ?? 0), size, offset, direction);
    }
    exports2.isPointInside = isPointInside;
    function areBoundsInside(bounds, size, offset, direction) {
      let inside = true;
      if (!direction || direction === "bottom") {
        inside = bounds.top < size.height + offset.x;
      }
      if (inside && (!direction || direction === "left")) {
        inside = bounds.right > offset.x;
      }
      if (inside && (!direction || direction === "right")) {
        inside = bounds.left < size.width + offset.y;
      }
      if (inside && (!direction || direction === "top")) {
        inside = bounds.bottom > offset.y;
      }
      return inside;
    }
    exports2.areBoundsInside = areBoundsInside;
    function calculateBounds(point, radius) {
      return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
      };
    }
    exports2.calculateBounds = calculateBounds;
    function deepExtend2(destination, ...sources) {
      for (const source of sources) {
        if (source === void 0 || source === null) {
          continue;
        }
        if (!isObject2(source)) {
          destination = source;
          continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (isObject2(destination) || !destination || !Array.isArray(destination))) {
          destination = [];
        } else if (!sourceIsArray && (isObject2(destination) || !destination || Array.isArray(destination))) {
          destination = {};
        }
        for (const key in source) {
          if (key === "__proto__") {
            continue;
          }
          const sourceDict = source, value = sourceDict[key], destDict = destination;
          destDict[key] = isObject2(value) && Array.isArray(value) ? value.map((v) => deepExtend2(destDict[key], v)) : deepExtend2(destDict[key], value);
        }
      }
      return destination;
    }
    exports2.deepExtend = deepExtend2;
    function isDivModeEnabled(mode, divs) {
      return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray2(mode, t.mode));
    }
    exports2.isDivModeEnabled = isDivModeEnabled;
    function divModeExecute(mode, divs, callback) {
      executeOnSingleOrMultiple2(divs, (div) => {
        const divMode2 = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray2(mode, divMode2)) {
          singleDivModeExecute(div, callback);
        }
      });
    }
    exports2.divModeExecute = divModeExecute;
    function singleDivModeExecute(div, callback) {
      const selectors = div.selectors;
      executeOnSingleOrMultiple2(selectors, (selector) => {
        callback(selector, div);
      });
    }
    exports2.singleDivModeExecute = singleDivModeExecute;
    function divMode(divs, element) {
      if (!element || !divs) {
        return;
      }
      return findItemFromSingleOrMultiple(divs, (div) => {
        return checkSelector(element, div.selectors);
      });
    }
    exports2.divMode = divMode;
    function circleBounceDataFromParticle(p) {
      return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: Vector_1.Vector.create((0, NumberUtils_1.getValue)(p.options.bounce.horizontal), (0, NumberUtils_1.getValue)(p.options.bounce.vertical))
      };
    }
    exports2.circleBounceDataFromParticle = circleBounceDataFromParticle;
    function circleBounce(p1, p2) {
      const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = (0, NumberUtils_1.getDistances)(pos2, pos1);
      if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
        return;
      }
      const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = (0, NumberUtils_1.collisionVelocity)(u1, u2, m1, m2), v2 = (0, NumberUtils_1.collisionVelocity)(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
      p1.velocity.x = vFinal1.x * p1.factor.x;
      p1.velocity.y = vFinal1.y * p1.factor.y;
      p2.velocity.x = vFinal2.x * p2.factor.x;
      p2.velocity.y = vFinal2.y * p2.factor.y;
    }
    exports2.circleBounce = circleBounce;
    function rectBounce(particle, divBounds) {
      const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), resH = rectSideBounce({
        pSide: {
          min: bounds.left,
          max: bounds.right
        },
        pOtherSide: {
          min: bounds.top,
          max: bounds.bottom
        },
        rectSide: {
          min: divBounds.left,
          max: divBounds.right
        },
        rectOtherSide: {
          min: divBounds.top,
          max: divBounds.bottom
        },
        velocity: particle.velocity.x,
        factor: (0, NumberUtils_1.getValue)(particle.options.bounce.horizontal)
      });
      if (resH.bounced) {
        if (resH.velocity !== void 0) {
          particle.velocity.x = resH.velocity;
        }
        if (resH.position !== void 0) {
          particle.position.x = resH.position;
        }
      }
      const resV = rectSideBounce({
        pSide: {
          min: bounds.top,
          max: bounds.bottom
        },
        pOtherSide: {
          min: bounds.left,
          max: bounds.right
        },
        rectSide: {
          min: divBounds.top,
          max: divBounds.bottom
        },
        rectOtherSide: {
          min: divBounds.left,
          max: divBounds.right
        },
        velocity: particle.velocity.y,
        factor: (0, NumberUtils_1.getValue)(particle.options.bounce.vertical)
      });
      if (resV.bounced) {
        if (resV.velocity !== void 0) {
          particle.velocity.y = resV.velocity;
        }
        if (resV.position !== void 0) {
          particle.position.y = resV.position;
        }
      }
    }
    exports2.rectBounce = rectBounce;
    function executeOnSingleOrMultiple2(obj, callback) {
      return isArray2(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
    }
    exports2.executeOnSingleOrMultiple = executeOnSingleOrMultiple2;
    function itemFromSingleOrMultiple2(obj, index, useIndex) {
      return isArray2(obj) ? itemFromArray2(obj, index, useIndex) : obj;
    }
    exports2.itemFromSingleOrMultiple = itemFromSingleOrMultiple2;
    function findItemFromSingleOrMultiple(obj, callback) {
      return isArray2(obj) ? obj.find((t, index) => callback(t, index)) : callback(obj, 0) ? obj : void 0;
    }
    exports2.findItemFromSingleOrMultiple = findItemFromSingleOrMultiple;
    function initParticleNumericAnimationValue2(options, pxRatio) {
      const valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: (0, NumberUtils_1.getRangeValue)(animationOptions.delay) * 1e3,
        enable: animationOptions.enable,
        value: (0, NumberUtils_1.getRangeValue)(options.value) * pxRatio,
        max: (0, NumberUtils_1.getRangeMax)(valueRange) * pxRatio,
        min: (0, NumberUtils_1.getRangeMin)(valueRange) * pxRatio,
        loops: 0,
        maxLoops: (0, NumberUtils_1.getRangeValue)(animationOptions.count),
        time: 0
      };
      if (animationOptions.enable) {
        res.decay = 1 - (0, NumberUtils_1.getRangeValue)(animationOptions.decay);
        switch (animationOptions.mode) {
          case "increase":
            res.status = "increasing";
            break;
          case "decrease":
            res.status = "decreasing";
            break;
          case "random":
            res.status = (0, NumberUtils_1.getRandom)() >= 0.5 ? "increasing" : "decreasing";
            break;
        }
        const autoStatus = animationOptions.mode === "auto";
        switch (animationOptions.startValue) {
          case "min":
            res.value = res.min;
            if (autoStatus) {
              res.status = "increasing";
            }
            break;
          case "max":
            res.value = res.max;
            if (autoStatus) {
              res.status = "decreasing";
            }
            break;
          case "random":
          default:
            res.value = (0, NumberUtils_1.randomInRange)(res);
            if (autoStatus) {
              res.status = (0, NumberUtils_1.getRandom)() >= 0.5 ? "increasing" : "decreasing";
            }
            break;
        }
      }
      res.initialValue = res.value;
      return res;
    }
    exports2.initParticleNumericAnimationValue = initParticleNumericAnimationValue2;
    function getPositionOrSize2(positionOrSize, canvasSize) {
      const isPercent = positionOrSize.mode === "percent";
      if (!isPercent) {
        const { mode: _, ...rest } = positionOrSize;
        return rest;
      }
      const isPosition = "x" in positionOrSize;
      if (isPosition) {
        return {
          x: positionOrSize.x / 100 * canvasSize.width,
          y: positionOrSize.y / 100 * canvasSize.height
        };
      } else {
        return {
          width: positionOrSize.width / 100 * canvasSize.width,
          height: positionOrSize.height / 100 * canvasSize.height
        };
      }
    }
    function getPosition2(position, canvasSize) {
      return getPositionOrSize2(position, canvasSize);
    }
    exports2.getPosition = getPosition2;
    function getSize(size, canvasSize) {
      return getPositionOrSize2(size, canvasSize);
    }
    exports2.getSize = getSize;
    function isBoolean2(arg) {
      return typeof arg === "boolean";
    }
    exports2.isBoolean = isBoolean2;
    function isString2(arg) {
      return typeof arg === "string";
    }
    exports2.isString = isString2;
    function isNumber2(arg) {
      return typeof arg === "number";
    }
    exports2.isNumber = isNumber2;
    function isFunction2(arg) {
      return typeof arg === "function";
    }
    exports2.isFunction = isFunction2;
    function isObject2(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports2.isObject = isObject2;
    function isArray2(arg) {
      return Array.isArray(arg);
    }
    exports2.isArray = isArray2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/ColorUtils.js
var require_ColorUtils = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/ColorUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getHslAnimationFromHsl = exports2.getHslFromAnimation = exports2.getLinkRandomColor = exports2.getLinkColor = exports2.colorMix = exports2.getStyleFromHsl = exports2.getStyleFromRgb = exports2.getRandomRgbColor = exports2.hslaToRgba = exports2.hslToRgb = exports2.stringToRgb = exports2.stringToAlpha = exports2.rgbToHsl = exports2.rangeColorToHsl = exports2.colorToHsl = exports2.colorToRgb = exports2.rangeColorToRgb = exports2.addColorManager = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var Utils_1 = require_Utils();
    var randomColorValue2 = "random";
    var midColorValue = "mid";
    var colorManagers2 = /* @__PURE__ */ new Map();
    function addColorManager2(manager) {
      colorManagers2.set(manager.key, manager);
    }
    exports2.addColorManager = addColorManager2;
    function hue2rgb2(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    }
    function stringToRgba2(input) {
      for (const [, manager] of colorManagers2) {
        if (input.startsWith(manager.stringPrefix)) {
          return manager.parseString(input);
        }
      }
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
      }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
      return result ? {
        a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16)
      } : void 0;
    }
    function rangeColorToRgb2(input, index, useIndex = true) {
      if (!input) {
        return;
      }
      const color = (0, Utils_1.isString)(input) ? { value: input } : input;
      if ((0, Utils_1.isString)(color.value)) {
        return colorToRgb2(color.value, index, useIndex);
      }
      if ((0, Utils_1.isArray)(color.value)) {
        return rangeColorToRgb2({
          value: (0, Utils_1.itemFromArray)(color.value, index, useIndex)
        });
      }
      for (const [, manager] of colorManagers2) {
        const res = manager.handleRangeColor(color);
        if (res) {
          return res;
        }
      }
    }
    exports2.rangeColorToRgb = rangeColorToRgb2;
    function colorToRgb2(input, index, useIndex = true) {
      if (!input) {
        return;
      }
      const color = (0, Utils_1.isString)(input) ? { value: input } : input;
      if ((0, Utils_1.isString)(color.value)) {
        return color.value === randomColorValue2 ? getRandomRgbColor2() : stringToRgb2(color.value);
      }
      if ((0, Utils_1.isArray)(color.value)) {
        return colorToRgb2({
          value: (0, Utils_1.itemFromArray)(color.value, index, useIndex)
        });
      }
      for (const [, manager] of colorManagers2) {
        const res = manager.handleColor(color);
        if (res) {
          return res;
        }
      }
    }
    exports2.colorToRgb = colorToRgb2;
    function colorToHsl(color, index, useIndex = true) {
      const rgb = colorToRgb2(color, index, useIndex);
      return rgb ? rgbToHsl2(rgb) : void 0;
    }
    exports2.colorToHsl = colorToHsl;
    function rangeColorToHsl2(color, index, useIndex = true) {
      const rgb = rangeColorToRgb2(color, index, useIndex);
      return rgb ? rgbToHsl2(rgb) : void 0;
    }
    exports2.rangeColorToHsl = rangeColorToHsl2;
    function rgbToHsl2(color) {
      const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: 0,
        l: (max + min) / 2,
        s: 0
      };
      if (max !== min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
      }
      res.l *= 100;
      res.s *= 100;
      res.h *= 60;
      if (res.h < 0) {
        res.h += 360;
      }
      if (res.h >= 360) {
        res.h -= 360;
      }
      return res;
    }
    exports2.rgbToHsl = rgbToHsl2;
    function stringToAlpha(input) {
      return stringToRgba2(input)?.a;
    }
    exports2.stringToAlpha = stringToAlpha;
    function stringToRgb2(input) {
      return stringToRgba2(input);
    }
    exports2.stringToRgb = stringToRgb2;
    function hslToRgb2(hsl) {
      const result = { b: 0, g: 0, r: 0 }, hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100
      };
      if (!hslPercent.s) {
        result.r = result.g = result.b = hslPercent.l;
      } else {
        const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
        result.r = hue2rgb2(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb2(p, q, hslPercent.h);
        result.b = hue2rgb2(p, q, hslPercent.h - 1 / 3);
      }
      result.r = Math.floor(result.r * 255);
      result.g = Math.floor(result.g * 255);
      result.b = Math.floor(result.b * 255);
      return result;
    }
    exports2.hslToRgb = hslToRgb2;
    function hslaToRgba2(hsla) {
      const rgbResult = hslToRgb2(hsla);
      return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
      };
    }
    exports2.hslaToRgba = hslaToRgba2;
    function getRandomRgbColor2(min) {
      const fixedMin = min ?? 0;
      return {
        b: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        g: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        r: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256)))
      };
    }
    exports2.getRandomRgbColor = getRandomRgbColor2;
    function getStyleFromRgb2(color, opacity) {
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? 1})`;
    }
    exports2.getStyleFromRgb = getStyleFromRgb2;
    function getStyleFromHsl2(color, opacity) {
      return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? 1})`;
    }
    exports2.getStyleFromHsl = getStyleFromHsl2;
    function colorMix(color1, color2, size1, size2) {
      let rgb1 = color1, rgb2 = color2;
      if (rgb1.r === void 0) {
        rgb1 = hslToRgb2(color1);
      }
      if (rgb2.r === void 0) {
        rgb2 = hslToRgb2(color2);
      }
      return {
        b: (0, NumberUtils_1.mix)(rgb1.b, rgb2.b, size1, size2),
        g: (0, NumberUtils_1.mix)(rgb1.g, rgb2.g, size1, size2),
        r: (0, NumberUtils_1.mix)(rgb1.r, rgb2.r, size1, size2)
      };
    }
    exports2.colorMix = colorMix;
    function getLinkColor(p1, p2, linkColor) {
      if (linkColor === randomColorValue2) {
        return getRandomRgbColor2();
      } else if (linkColor === midColorValue) {
        const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
        if (sourceColor && destColor && p2) {
          return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        } else {
          const hslColor = sourceColor ?? destColor;
          if (hslColor) {
            return hslToRgb2(hslColor);
          }
        }
      } else {
        return linkColor;
      }
    }
    exports2.getLinkColor = getLinkColor;
    function getLinkRandomColor(optColor, blink, consent) {
      const color = (0, Utils_1.isString)(optColor) ? optColor : optColor.value;
      if (color === randomColorValue2) {
        if (consent) {
          return rangeColorToRgb2({
            value: color
          });
        }
        if (blink) {
          return randomColorValue2;
        }
        return midColorValue;
      } else if (color === midColorValue) {
        return midColorValue;
      } else {
        return rangeColorToRgb2({
          value: color
        });
      }
    }
    exports2.getLinkRandomColor = getLinkRandomColor;
    function getHslFromAnimation2(animation) {
      return animation !== void 0 ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
      } : void 0;
    }
    exports2.getHslFromAnimation = getHslFromAnimation2;
    function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
      const resColor = {
        h: {
          enable: false,
          value: hsl.h
        },
        s: {
          enable: false,
          value: hsl.s
        },
        l: {
          enable: false,
          value: hsl.l
        }
      };
      if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
      }
      return resColor;
    }
    exports2.getHslAnimationFromHsl = getHslAnimationFromHsl;
    function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
      colorValue.enable = colorAnimation.enable;
      if (colorValue.enable) {
        colorValue.velocity = (0, NumberUtils_1.getRangeValue)(colorAnimation.speed) / 100 * reduceFactor;
        colorValue.decay = 1 - (0, NumberUtils_1.getRangeValue)(colorAnimation.decay);
        colorValue.status = "increasing";
        colorValue.loops = 0;
        colorValue.maxLoops = (0, NumberUtils_1.getRangeValue)(colorAnimation.count);
        colorValue.time = 0;
        colorValue.delayTime = (0, NumberUtils_1.getRangeValue)(colorAnimation.delay) * 1e3;
        if (!colorAnimation.sync) {
          colorValue.velocity *= (0, NumberUtils_1.getRandom)();
          colorValue.value *= (0, NumberUtils_1.getRandom)();
        }
        colorValue.initialValue = colorValue.value;
      } else {
        colorValue.velocity = 0;
      }
    }
  }
});

// node_modules/tsparticles-engine/cjs/Utils/CanvasUtils.js
var require_CanvasUtils = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/CanvasUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.alterHsl = exports2.drawParticlePlugin = exports2.drawPlugin = exports2.drawShapeAfterEffect = exports2.drawShape = exports2.drawParticle = exports2.clear = exports2.paintImage = exports2.paintBase = exports2.drawTriangle = exports2.drawLine = void 0;
    var ColorUtils_1 = require_ColorUtils();
    function drawLine(context, begin, end) {
      context.beginPath();
      context.moveTo(begin.x, begin.y);
      context.lineTo(end.x, end.y);
      context.closePath();
    }
    exports2.drawLine = drawLine;
    function drawTriangle(context, p1, p2, p3) {
      context.beginPath();
      context.moveTo(p1.x, p1.y);
      context.lineTo(p2.x, p2.y);
      context.lineTo(p3.x, p3.y);
      context.closePath();
    }
    exports2.drawTriangle = drawTriangle;
    function paintBase2(context, dimension, baseColor) {
      context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
      context.fillRect(0, 0, dimension.width, dimension.height);
    }
    exports2.paintBase = paintBase2;
    function paintImage2(context, dimension, image, opacity) {
      if (!image) {
        return;
      }
      context.globalAlpha = opacity;
      context.drawImage(image, 0, 0, dimension.width, dimension.height);
      context.globalAlpha = 1;
    }
    exports2.paintImage = paintImage2;
    function clear2(context, dimension) {
      context.clearRect(0, 0, dimension.width, dimension.height);
    }
    exports2.clear = clear2;
    function drawParticle2(data) {
      const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data;
      const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle)
      }, transformData = {
        a: rotateData.cos * (transform.a ?? 1),
        b: rotateData.sin * (transform.b ?? 1),
        c: -rotateData.sin * (transform.c ?? 1),
        d: rotateData.cos * (transform.d ?? 1)
      };
      context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
      context.beginPath();
      if (backgroundMask) {
        context.globalCompositeOperation = composite;
      }
      const shadowColor = particle.shadowColor;
      if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
      }
      if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
      }
      const strokeWidth = particle.strokeWidth ?? 0;
      context.lineWidth = strokeWidth;
      if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
      }
      drawShape2(container, context, particle, radius, opacity, delta);
      if (strokeWidth > 0) {
        context.stroke();
      }
      if (particle.close) {
        context.closePath();
      }
      if (particle.fill) {
        context.fill();
      }
      drawShapeAfterEffect2(container, context, particle, radius, opacity, delta);
      context.globalCompositeOperation = "source-over";
      context.setTransform(1, 0, 0, 1, 0, 0);
    }
    exports2.drawParticle = drawParticle2;
    function drawShape2(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }
      const drawer = container.drawers.get(particle.shape);
      if (!drawer) {
        return;
      }
      drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    exports2.drawShape = drawShape2;
    function drawShapeAfterEffect2(container, context, particle, radius, opacity, delta) {
      if (!particle.shape) {
        return;
      }
      const drawer = container.drawers.get(particle.shape);
      if (!drawer || !drawer.afterEffect) {
        return;
      }
      drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
    }
    exports2.drawShapeAfterEffect = drawShapeAfterEffect2;
    function drawPlugin2(context, plugin, delta) {
      if (!plugin.draw) {
        return;
      }
      plugin.draw(context, delta);
    }
    exports2.drawPlugin = drawPlugin2;
    function drawParticlePlugin2(context, plugin, particle, delta) {
      if (!plugin.drawParticle) {
        return;
      }
      plugin.drawParticle(context, particle, delta);
    }
    exports2.drawParticlePlugin = drawParticlePlugin2;
    function alterHsl2(color, type, value) {
      return {
        h: color.h,
        s: color.s,
        l: color.l + (type === "darken" ? -1 : 1) * value
      };
    }
    exports2.alterHsl = alterHsl2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Canvas.js
var require_Canvas = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Canvas.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Canvas = void 0;
    var CanvasUtils_1 = require_CanvasUtils();
    var Utils_1 = require_Utils();
    var ColorUtils_1 = require_ColorUtils();
    var Constants_1 = require_Constants();
    function setTransformValue2(factor, newFactor, key) {
      const newValue = newFactor[key];
      if (newValue !== void 0) {
        factor[key] = (factor[key] ?? 1) * newValue;
      }
    }
    var Canvas2 = class {
      constructor(container) {
        this.container = container;
        this._applyPostDrawUpdaters = (particle) => {
          for (const updater of this._postDrawUpdaters) {
            updater.afterDraw && updater.afterDraw(particle);
          }
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
          for (const updater of this._preDrawUpdaters) {
            if (updater.getColorStyles) {
              const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
              if (fill) {
                colorStyles.fill = fill;
              }
              if (stroke) {
                colorStyles.stroke = stroke;
              }
            }
            if (updater.getTransformValues) {
              const updaterTransform = updater.getTransformValues(particle);
              for (const key in updaterTransform) {
                setTransformValue2(transform, updaterTransform, key);
              }
            }
            updater.beforeDraw && updater.beforeDraw(particle);
          }
        };
        this._applyResizePlugins = () => {
          for (const plugin of this._resizePlugins) {
            plugin.resize && plugin.resize();
          }
        };
        this._getPluginParticleColors = (particle) => {
          let fColor, sColor;
          for (const plugin of this._colorPlugins) {
            if (!fColor && plugin.particleFillColor) {
              fColor = (0, ColorUtils_1.rangeColorToHsl)(plugin.particleFillColor(particle));
            }
            if (!sColor && plugin.particleStrokeColor) {
              sColor = (0, ColorUtils_1.rangeColorToHsl)(plugin.particleStrokeColor(particle));
            }
            if (fColor && sColor) {
              break;
            }
          }
          return [fColor, sColor];
        };
        this._initCover = () => {
          const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = (0, ColorUtils_1.rangeColorToRgb)(color);
          if (coverRgb) {
            const coverColor = {
              ...coverRgb,
              a: cover.opacity
            };
            this._coverColorStyle = (0, ColorUtils_1.getStyleFromRgb)(coverColor, coverColor.a);
          }
        };
        this._initStyle = () => {
          const element = this.element, options = this.container.actualOptions;
          if (!element) {
            return;
          }
          if (this._fullScreen) {
            this._originalStyle = (0, Utils_1.deepExtend)({}, element.style);
            this._setFullScreenStyle();
          } else {
            this._resetOriginalStyle();
          }
          for (const key in options.style) {
            if (!key || !options.style) {
              continue;
            }
            const value = options.style[key];
            if (!value) {
              continue;
            }
            element.style.setProperty(key, value, "important");
          }
        };
        this._initTrail = async () => {
          const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
          if (!trail.enable) {
            return;
          }
          if (trailFill.color) {
            const fillColor = (0, ColorUtils_1.rangeColorToRgb)(trailFill.color);
            if (!fillColor) {
              return;
            }
            const trail2 = options.particles.move.trail;
            this._trailFill = {
              color: {
                ...fillColor
              },
              opacity: 1 / trail2.length
            };
          } else {
            await new Promise((resolve, reject) => {
              if (!trailFill.image) {
                return;
              }
              const img = document.createElement("img");
              img.addEventListener("load", () => {
                this._trailFill = {
                  image: img,
                  opacity: 1 / trail.length
                };
                resolve();
              });
              img.addEventListener("error", (evt) => {
                reject(evt.error);
              });
              img.src = trailFill.image;
            });
          }
        };
        this._paintBase = (baseColor) => {
          this.draw((ctx) => (0, CanvasUtils_1.paintBase)(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity) => {
          this.draw((ctx) => (0, CanvasUtils_1.paintImage)(ctx, this.size, image, opacity));
        };
        this._repairStyle = () => {
          const element = this.element;
          if (!element) {
            return;
          }
          this._safeMutationObserver((observer) => observer.disconnect());
          this._initStyle();
          this.initBackground();
          this._safeMutationObserver((observer) => observer.observe(element, { attributes: true }));
        };
        this._resetOriginalStyle = () => {
          const element = this.element, originalStyle = this._originalStyle;
          if (!(element && originalStyle)) {
            return;
          }
          const style = element.style;
          style.position = originalStyle.position;
          style.zIndex = originalStyle.zIndex;
          style.top = originalStyle.top;
          style.left = originalStyle.left;
          style.width = originalStyle.width;
          style.height = originalStyle.height;
        };
        this._safeMutationObserver = (callback) => {
          if (!this._mutationObserver) {
            return;
          }
          callback(this._mutationObserver);
        };
        this._setFullScreenStyle = () => {
          const element = this.element;
          if (!element) {
            return;
          }
          const priority = "important", style = element.style;
          style.setProperty("position", "fixed", priority);
          style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
          style.setProperty("top", "0", priority);
          style.setProperty("left", "0", priority);
          style.setProperty("width", "100%", priority);
          style.setProperty("height", "100%", priority);
        };
        this.size = {
          height: 0,
          width: 0
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
      }
      get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
      }
      clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
        if (options.backgroundMask.enable) {
          this.paint();
        } else if (trail.enable && trail.length > 0 && trailFill) {
          if (trailFill.color) {
            this._paintBase((0, ColorUtils_1.getStyleFromRgb)(trailFill.color, trailFill.opacity));
          } else if (trailFill.image) {
            this._paintImage(trailFill.image, trailFill.opacity);
          }
        } else {
          this.draw((ctx) => {
            (0, CanvasUtils_1.clear)(ctx, this.size);
          });
        }
      }
      destroy() {
        this.stop();
        if (this._generated) {
          const element = this.element;
          element && element.remove();
        } else {
          this._resetOriginalStyle();
        }
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
      }
      draw(cb) {
        const ctx = this._context;
        if (!ctx) {
          return;
        }
        return cb(ctx);
      }
      drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) {
          return;
        }
        const radius = particle.getRadius();
        if (radius <= 0) {
          return;
        }
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) {
          fColor = pfColor;
        }
        if (!sColor) {
          sColor = psColor;
        }
        if (!fColor && !sColor) {
          return;
        }
        this.draw((ctx) => {
          const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? 1, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
            fill: fColor ? (0, ColorUtils_1.getStyleFromHsl)(fColor, zOpacity) : void 0
          };
          colorStyles.stroke = sColor ? (0, ColorUtils_1.getStyleFromHsl)(sColor, zStrokeOpacity) : colorStyles.fill;
          this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
          (0, CanvasUtils_1.drawParticle)({
            container,
            context: ctx,
            particle,
            delta,
            colorStyles,
            backgroundMask: options.backgroundMask.enable,
            composite: options.backgroundMask.composite,
            radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
            opacity: zOpacity,
            shadow: particle.options.shadow,
            transform
          });
          this._applyPostDrawUpdaters(particle);
        });
      }
      drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx) => (0, CanvasUtils_1.drawParticlePlugin)(ctx, plugin, particle, delta));
      }
      drawPlugin(plugin, delta) {
        this.draw((ctx) => (0, CanvasUtils_1.drawPlugin)(ctx, plugin, delta));
      }
      async init() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = (0, Utils_1.safeMutationObserver)((records) => {
          for (const record of records) {
            if (record.type === "attributes" && record.attributeName === "style") {
              this._repairStyle();
            }
          }
        });
        this.resize();
        this._initStyle();
        this._initCover();
        try {
          await this._initTrail();
        } catch (e) {
          (0, Utils_1.getLogger)().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs) => {
          if (!this.element) {
            return;
          }
          obs.observe(this.element, { attributes: true });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
      }
      initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) {
          return;
        }
        const elementStyle = element.style;
        if (!elementStyle) {
          return;
        }
        if (background.color) {
          const color = (0, ColorUtils_1.rangeColorToRgb)(background.color);
          elementStyle.backgroundColor = color ? (0, ColorUtils_1.getStyleFromRgb)(color, background.opacity) : "";
        } else {
          elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
      }
      initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins) {
          if (plugin.resize) {
            this._resizePlugins.push(plugin);
          }
          if (plugin.particleFillColor || plugin.particleStrokeColor) {
            this._colorPlugins.push(plugin);
          }
        }
      }
      initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters) {
          if (updater.afterDraw) {
            this._postDrawUpdaters.push(updater);
          }
          if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
            this._preDrawUpdaters.push(updater);
          }
        }
      }
      loadCanvas(canvas) {
        if (this._generated && this.element) {
          this.element.remove();
        }
        this._generated = canvas.dataset && Constants_1.generatedAttribute in canvas.dataset ? canvas.dataset[Constants_1.generatedAttribute] === "true" : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = (0, Utils_1.deepExtend)({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs) => {
          if (!this.element) {
            return;
          }
          obs.observe(this.element, { attributes: true });
        });
        this.container.retina.init();
        this.initBackground();
      }
      paint() {
        const options = this.container.actualOptions;
        this.draw((ctx) => {
          if (options.backgroundMask.enable && options.backgroundMask.cover) {
            (0, CanvasUtils_1.clear)(ctx, this.size);
            this._paintBase(this._coverColorStyle);
          } else {
            this._paintBase();
          }
        });
      }
      resize() {
        if (!this.element) {
          return false;
        }
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
          width: this.element.offsetWidth * pxRatio,
          height: this.element.offsetHeight * pxRatio
        };
        if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
          return false;
        }
        const oldSize = { ...size };
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) {
          this.resizeFactor = {
            width: size.width / oldSize.width,
            height: size.height / oldSize.height
          };
        }
        return true;
      }
      stop() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = void 0;
        this.draw((ctx) => (0, CanvasUtils_1.clear)(ctx, this.size));
      }
      async windowResize() {
        if (!this.element || !this.resize()) {
          return;
        }
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) {
          await container.refresh();
        }
      }
    };
    exports2.Canvas = Canvas2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/EventListeners.js
var require_EventListeners = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/EventListeners.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventListeners = void 0;
    var Utils_1 = require_Utils();
    var Constants_1 = require_Constants();
    function manageListener2(element, event, handler, add, options) {
      if (add) {
        let addOptions = { passive: true };
        if ((0, Utils_1.isBoolean)(options)) {
          addOptions.capture = options;
        } else if (options !== void 0) {
          addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
      } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
      }
    }
    var EventListeners2 = class {
      constructor(container) {
        this.container = container;
        this._doMouseTouchClick = (e) => {
          const container2 = this.container, options = container2.actualOptions;
          if (this._canPush) {
            const mouseInteractivity = container2.interactivity.mouse, mousePos = mouseInteractivity.position;
            if (!mousePos) {
              return;
            }
            mouseInteractivity.clickPosition = { ...mousePos };
            mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
            const onClick = options.interactivity.events.onClick;
            (0, Utils_1.executeOnSingleOrMultiple)(onClick.mode, (mode) => this.container.handleClickMode(mode));
          }
          if (e.type === "touchend") {
            setTimeout(() => this._mouseTouchFinish(), 500);
          }
        };
        this._handleThemeChange = (e) => {
          const mediaEvent = e, container2 = this.container, options = container2.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
          if (theme && theme.default.auto) {
            container2.loadTheme(themeName);
          }
        };
        this._handleVisibilityChange = () => {
          const container2 = this.container, options = container2.actualOptions;
          this._mouseTouchFinish();
          if (!options.pauseOnBlur) {
            return;
          }
          if (document && document.hidden) {
            container2.pageHidden = true;
            container2.pause();
          } else {
            container2.pageHidden = false;
            if (container2.getAnimationStatus()) {
              container2.play(true);
            } else {
              container2.draw(true);
            }
          }
        };
        this._handleWindowResize = async () => {
          if (this._resizeTimeout) {
            clearTimeout(this._resizeTimeout);
            delete this._resizeTimeout;
          }
          this._resizeTimeout = setTimeout(async () => {
            const canvas = this.container.canvas;
            canvas && await canvas.windowResize();
          }, this.container.actualOptions.interactivity.events.resize.delay * 1e3);
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
          const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
          const interactivityEl = container2.interactivity.element;
          if (!interactivityEl) {
            return;
          }
          const html = interactivityEl, canvasEl = container2.canvas.element;
          if (canvasEl) {
            canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
          }
          if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
            return;
          }
          manageListener2(interactivityEl, Constants_1.mouseMoveEvent, handlers.mouseMove, add);
          manageListener2(interactivityEl, Constants_1.touchStartEvent, handlers.touchStart, add);
          manageListener2(interactivityEl, Constants_1.touchMoveEvent, handlers.touchMove, add);
          if (!options.interactivity.events.onClick.enable) {
            manageListener2(interactivityEl, Constants_1.touchEndEvent, handlers.touchEnd, add);
          } else {
            manageListener2(interactivityEl, Constants_1.touchEndEvent, handlers.touchEndClick, add);
            manageListener2(interactivityEl, Constants_1.mouseUpEvent, handlers.mouseUp, add);
            manageListener2(interactivityEl, Constants_1.mouseDownEvent, handlers.mouseDown, add);
          }
          manageListener2(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
          manageListener2(interactivityEl, Constants_1.touchCancelEvent, handlers.touchCancel, add);
        };
        this._manageListeners = (add) => {
          const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container2.canvas.element;
          let mouseLeaveTmpEvent = Constants_1.mouseLeaveEvent;
          if (detectType === "window") {
            container2.interactivity.element = window;
            mouseLeaveTmpEvent = Constants_1.mouseOutEvent;
          } else if (detectType === "parent" && canvasEl) {
            container2.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
          } else {
            container2.interactivity.element = canvasEl;
          }
          this._manageMediaMatch(add);
          this._manageResize(add);
          this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
          if (document) {
            manageListener2(document, Constants_1.visibilityChangeEvent, handlers.visibilityChange, add, false);
          }
        };
        this._manageMediaMatch = (add) => {
          const handlers = this._handlers, mediaMatch = (0, Utils_1.safeMatchMedia)("(prefers-color-scheme: dark)");
          if (!mediaMatch) {
            return;
          }
          if (mediaMatch.addEventListener !== void 0) {
            manageListener2(mediaMatch, "change", handlers.themeChange, add);
            return;
          }
          if (mediaMatch.addListener === void 0) {
            return;
          }
          if (add) {
            mediaMatch.addListener(handlers.oldThemeChange);
          } else {
            mediaMatch.removeListener(handlers.oldThemeChange);
          }
        };
        this._manageResize = (add) => {
          const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
          if (!options.interactivity.events.resize) {
            return;
          }
          if (typeof ResizeObserver === "undefined") {
            manageListener2(window, Constants_1.resizeEvent, handlers.resize, add);
            return;
          }
          const canvasEl = container2.canvas.element;
          if (this._resizeObserver && !add) {
            if (canvasEl) {
              this._resizeObserver.unobserve(canvasEl);
            }
            this._resizeObserver.disconnect();
            delete this._resizeObserver;
          } else if (!this._resizeObserver && add && canvasEl) {
            this._resizeObserver = new ResizeObserver(async (entries) => {
              const entry = entries.find((e) => e.target === canvasEl);
              if (!entry) {
                return;
              }
              await this._handleWindowResize();
            });
            this._resizeObserver.observe(canvasEl);
          }
        };
        this._mouseDown = () => {
          const { interactivity } = this.container;
          if (!interactivity) {
            return;
          }
          const { mouse } = interactivity;
          mouse.clicking = true;
          mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e) => {
          const container2 = this.container, options = container2.actualOptions, { mouse } = container2.interactivity;
          mouse.inside = true;
          let handled = false;
          const mousePosition = mouse.position;
          if (!mousePosition || !options.interactivity.events.onClick.enable) {
            return;
          }
          for (const [, plugin] of container2.plugins) {
            if (!plugin.clickPositionValid) {
              continue;
            }
            handled = plugin.clickPositionValid(mousePosition);
            if (handled) {
              break;
            }
          }
          if (!handled) {
            this._doMouseTouchClick(e);
          }
          mouse.clicking = false;
        };
        this._mouseTouchFinish = () => {
          const interactivity = this.container.interactivity;
          if (!interactivity) {
            return;
          }
          const mouse = interactivity.mouse;
          delete mouse.position;
          delete mouse.clickPosition;
          delete mouse.downPosition;
          interactivity.status = Constants_1.mouseLeaveEvent;
          mouse.inside = false;
          mouse.clicking = false;
        };
        this._mouseTouchMove = (e) => {
          const container2 = this.container, options = container2.actualOptions, interactivity = container2.interactivity, canvasEl = container2.canvas.element;
          if (!interactivity || !interactivity.element) {
            return;
          }
          interactivity.mouse.inside = true;
          let pos;
          if (e.type.startsWith("pointer")) {
            this._canPush = true;
            const mouseEvent = e;
            if (interactivity.element === window) {
              if (canvasEl) {
                const clientRect = canvasEl.getBoundingClientRect();
                pos = {
                  x: mouseEvent.clientX - clientRect.left,
                  y: mouseEvent.clientY - clientRect.top
                };
              }
            } else if (options.interactivity.detectsOn === "parent") {
              const source = mouseEvent.target, target = mouseEvent.currentTarget;
              if (source && target && canvasEl) {
                const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                pos = {
                  x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                  y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
                };
              } else {
                pos = {
                  x: mouseEvent.offsetX ?? mouseEvent.clientX,
                  y: mouseEvent.offsetY ?? mouseEvent.clientY
                };
              }
            } else if (mouseEvent.target === canvasEl) {
              pos = {
                x: mouseEvent.offsetX ?? mouseEvent.clientX,
                y: mouseEvent.offsetY ?? mouseEvent.clientY
              };
            }
          } else {
            this._canPush = e.type !== "touchmove";
            if (canvasEl) {
              const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvasEl.getBoundingClientRect();
              pos = {
                x: lastTouch.clientX - (canvasRect.left ?? 0),
                y: lastTouch.clientY - (canvasRect.top ?? 0)
              };
            }
          }
          const pxRatio = container2.retina.pixelRatio;
          if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
          }
          interactivity.mouse.position = pos;
          interactivity.status = Constants_1.mouseMoveEvent;
        };
        this._touchEnd = (e) => {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this._touches.delete(touch.identifier);
          }
          this._mouseTouchFinish();
        };
        this._touchEndClick = (e) => {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this._touches.delete(touch.identifier);
          }
          this._mouseTouchClick(e);
        };
        this._touchStart = (e) => {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this._touches.set(touch.identifier, performance.now());
          }
          this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = /* @__PURE__ */ new Map();
        this._handlers = {
          mouseDown: () => this._mouseDown(),
          mouseLeave: () => this._mouseTouchFinish(),
          mouseMove: (e) => this._mouseTouchMove(e),
          mouseUp: (e) => this._mouseTouchClick(e),
          touchStart: (e) => this._touchStart(e),
          touchMove: (e) => this._mouseTouchMove(e),
          touchEnd: (e) => this._touchEnd(e),
          touchCancel: (e) => this._touchEnd(e),
          touchEndClick: (e) => this._touchEndClick(e),
          visibilityChange: () => this._handleVisibilityChange(),
          themeChange: (e) => this._handleThemeChange(e),
          oldThemeChange: (e) => this._handleThemeChange(e),
          resize: () => {
            this._handleWindowResize();
          }
        };
      }
      addListeners() {
        this._manageListeners(true);
      }
      removeListeners() {
        this._manageListeners(false);
      }
    };
    exports2.EventListeners = EventListeners2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/OptionsColor.js
var require_OptionsColor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/OptionsColor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OptionsColor = void 0;
    var Utils_1 = require_Utils();
    var OptionsColor2 = class _OptionsColor {
      constructor() {
        this.value = "";
      }
      static create(source, data) {
        const color = new _OptionsColor();
        color.load(source);
        if (data !== void 0) {
          if ((0, Utils_1.isString)(data) || (0, Utils_1.isArray)(data)) {
            color.load({ value: data });
          } else {
            color.load(data);
          }
        }
        return color;
      }
      load(data) {
        if (data?.value === void 0) {
          return;
        }
        this.value = data.value;
      }
    };
    exports2.OptionsColor = OptionsColor2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Background/Background.js
var require_Background = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Background/Background.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Background = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Background2 = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== void 0) {
          this.image = data.image;
        }
        if (data.position !== void 0) {
          this.position = data.position;
        }
        if (data.repeat !== void 0) {
          this.repeat = data.repeat;
        }
        if (data.size !== void 0) {
          this.size = data.size;
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports2.Background = Background2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/BackgroundMask/BackgroundMaskCover.js
var require_BackgroundMaskCover = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/BackgroundMask/BackgroundMaskCover.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundMaskCover = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var BackgroundMaskCover2 = class {
      constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#fff";
        this.opacity = 1;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== void 0) {
          this.opacity = data.opacity;
        }
      }
    };
    exports2.BackgroundMaskCover = BackgroundMaskCover2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/BackgroundMask/BackgroundMask.js
var require_BackgroundMask = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/BackgroundMask/BackgroundMask.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackgroundMask = void 0;
    var BackgroundMaskCover_1 = require_BackgroundMaskCover();
    var Utils_1 = require_Utils();
    var BackgroundMask2 = class {
      constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.composite !== void 0) {
          this.composite = data.composite;
        }
        if (data.cover !== void 0) {
          const cover = data.cover;
          const color = (0, Utils_1.isString)(data.cover) ? { color: data.cover } : data.cover;
          this.cover.load(cover.color !== void 0 ? cover : { color });
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports2.BackgroundMask = BackgroundMask2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/FullScreen/FullScreen.js
var require_FullScreen = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/FullScreen/FullScreen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FullScreen = void 0;
    var FullScreen2 = class {
      constructor() {
        this.enable = true;
        this.zIndex = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.zIndex !== void 0) {
          this.zIndex = data.zIndex;
        }
      }
    };
    exports2.FullScreen = FullScreen2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/ClickEvent.js
var require_ClickEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/ClickEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClickEvent = void 0;
    var ClickEvent2 = class {
      constructor() {
        this.enable = false;
        this.mode = [];
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
      }
    };
    exports2.ClickEvent = ClickEvent2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/DivEvent.js
var require_DivEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/DivEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DivEvent = void 0;
    var Utils_1 = require_Utils();
    var DivEvent2 = class {
      constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = "circle";
      }
      get el() {
        return this.elementId;
      }
      set el(value) {
        this.elementId = value;
      }
      get elementId() {
        return this.ids;
      }
      set elementId(value) {
        this.ids = value;
      }
      get ids() {
        return (0, Utils_1.executeOnSingleOrMultiple)(this.selectors, (t) => t.replace("#", ""));
      }
      set ids(value) {
        this.selectors = (0, Utils_1.executeOnSingleOrMultiple)(value, (t) => `#${t}`);
      }
      load(data) {
        if (!data) {
          return;
        }
        const ids = data.ids ?? data.elementId ?? data.el;
        if (ids !== void 0) {
          this.ids = ids;
        }
        if (data.selectors !== void 0) {
          this.selectors = data.selectors;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.type !== void 0) {
          this.type = data.type;
        }
      }
    };
    exports2.DivEvent = DivEvent2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/Parallax.js
var require_Parallax = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/Parallax.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Parallax = void 0;
    var Parallax2 = class {
      constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.force !== void 0) {
          this.force = data.force;
        }
        if (data.smooth !== void 0) {
          this.smooth = data.smooth;
        }
      }
    };
    exports2.Parallax = Parallax2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/HoverEvent.js
var require_HoverEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/HoverEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HoverEvent = void 0;
    var Parallax_1 = require_Parallax();
    var HoverEvent2 = class {
      constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
      }
    };
    exports2.HoverEvent = HoverEvent2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/ResizeEvent.js
var require_ResizeEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/ResizeEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResizeEvent = void 0;
    var ResizeEvent2 = class {
      constructor() {
        this.delay = 0.5;
        this.enable = true;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.delay !== void 0) {
          this.delay = data.delay;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports2.ResizeEvent = ResizeEvent2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/Events.js
var require_Events = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Events/Events.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Events = void 0;
    var Utils_1 = require_Utils();
    var ClickEvent_1 = require_ClickEvent();
    var DivEvent_1 = require_DivEvent();
    var HoverEvent_1 = require_HoverEvent();
    var ResizeEvent_1 = require_ResizeEvent();
    var Events2 = class {
      constructor() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = new ResizeEvent_1.ResizeEvent();
      }
      get onclick() {
        return this.onClick;
      }
      set onclick(value) {
        this.onClick = value;
      }
      get ondiv() {
        return this.onDiv;
      }
      set ondiv(value) {
        this.onDiv = value;
      }
      get onhover() {
        return this.onHover;
      }
      set onhover(value) {
        this.onHover = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        this.onClick.load(data.onClick ?? data.onclick);
        const onDiv = data.onDiv ?? data.ondiv;
        if (onDiv !== void 0) {
          this.onDiv = (0, Utils_1.executeOnSingleOrMultiple)(onDiv, (t) => {
            const tmp = new DivEvent_1.DivEvent();
            tmp.load(t);
            return tmp;
          });
        }
        this.onHover.load(data.onHover ?? data.onhover);
        if ((0, Utils_1.isBoolean)(data.resize)) {
          this.resize.enable = data.resize;
        } else {
          this.resize.load(data.resize);
        }
      }
    };
    exports2.Events = Events2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Modes/Modes.js
var require_Modes = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Modes/Modes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Modes = void 0;
    var Modes2 = class {
      constructor(engine, container) {
        this._engine = engine;
        this._container = container;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (!this._container) {
          return;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (!interactors) {
          return;
        }
        for (const interactor of interactors) {
          if (!interactor.loadModeOptions) {
            continue;
          }
          interactor.loadModeOptions(this, data);
        }
      }
    };
    exports2.Modes = Modes2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Interactivity.js
var require_Interactivity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Interactivity/Interactivity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Interactivity = void 0;
    var Events_1 = require_Events();
    var Modes_1 = require_Modes();
    var Interactivity2 = class {
      constructor(engine, container) {
        this.detectsOn = "window";
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes(engine, container);
      }
      get detect_on() {
        return this.detectsOn;
      }
      set detect_on(value) {
        this.detectsOn = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        const detectsOn = data.detectsOn ?? data.detect_on;
        if (detectsOn !== void 0) {
          this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
      }
    };
    exports2.Interactivity = Interactivity2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/ManualParticle.js
var require_ManualParticle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/ManualParticle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ManualParticle = void 0;
    var Utils_1 = require_Utils();
    var ManualParticle2 = class {
      load(data) {
        if (!data) {
          return;
        }
        if (data.position) {
          this.position = {
            x: data.position.x ?? 50,
            y: data.position.y ?? 50,
            mode: data.position.mode ?? "percent"
          };
        }
        if (data.options) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports2.ManualParticle = ManualParticle2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Responsive.js
var require_Responsive = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Responsive.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Responsive = void 0;
    var Utils_1 = require_Utils();
    var Responsive2 = class {
      constructor() {
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = "canvas";
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.maxWidth !== void 0) {
          this.maxWidth = data.maxWidth;
        }
        if (data.mode !== void 0) {
          if (data.mode === "screen") {
            this.mode = "screen";
          } else {
            this.mode = "canvas";
          }
        }
        if (data.options !== void 0) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports2.Responsive = Responsive2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Theme/ThemeDefault.js
var require_ThemeDefault = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Theme/ThemeDefault.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ThemeDefault = void 0;
    var ThemeDefault2 = class {
      constructor() {
        this.auto = false;
        this.mode = "any";
        this.value = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.auto !== void 0) {
          this.auto = data.auto;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports2.ThemeDefault = ThemeDefault2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Theme/Theme.js
var require_Theme = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Theme/Theme.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Theme = void 0;
    var ThemeDefault_1 = require_ThemeDefault();
    var Utils_1 = require_Utils();
    var Theme2 = class {
      constructor() {
        this.name = "";
        this.default = new ThemeDefault_1.ThemeDefault();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.name !== void 0) {
          this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== void 0) {
          this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
      }
    };
    exports2.Theme = Theme2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/ColorAnimation.js
var require_ColorAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/ColorAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorAnimation = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var ColorAnimation2 = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.delay = 0;
        this.decay = 0;
        this.sync = true;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = (0, NumberUtils_1.setRangeValue)(data.count);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.offset !== void 0) {
          this.offset = (0, NumberUtils_1.setRangeValue)(data.offset);
        }
        if (data.speed !== void 0) {
          this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        if (data.decay !== void 0) {
          this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.delay !== void 0) {
          this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.ColorAnimation = ColorAnimation2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/HslAnimation.js
var require_HslAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/HslAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HslAnimation = void 0;
    var ColorAnimation_1 = require_ColorAnimation();
    var HslAnimation2 = class {
      constructor() {
        this.h = new ColorAnimation_1.ColorAnimation();
        this.s = new ColorAnimation_1.ColorAnimation();
        this.l = new ColorAnimation_1.ColorAnimation();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
      }
    };
    exports2.HslAnimation = HslAnimation2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/AnimatableColor.js
var require_AnimatableColor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/AnimatableColor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AnimatableColor = void 0;
    var Utils_1 = require_Utils();
    var HslAnimation_1 = require_HslAnimation();
    var OptionsColor_1 = require_OptionsColor();
    var AnimatableColor2 = class _AnimatableColor extends OptionsColor_1.OptionsColor {
      constructor() {
        super();
        this.animation = new HslAnimation_1.HslAnimation();
      }
      static create(source, data) {
        const color = new _AnimatableColor();
        color.load(source);
        if (data !== void 0) {
          if ((0, Utils_1.isString)(data) || (0, Utils_1.isArray)(data)) {
            color.load({ value: data });
          } else {
            color.load(data);
          }
        }
        return color;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== void 0) {
          if (colorAnimation.enable !== void 0) {
            this.animation.h.load(colorAnimation);
          } else {
            this.animation.load(data.animation);
          }
        }
      }
    };
    exports2.AnimatableColor = AnimatableColor2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/CollisionsAbsorb.js
var require_CollisionsAbsorb = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/CollisionsAbsorb.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CollisionsAbsorb = void 0;
    var CollisionsAbsorb2 = class {
      constructor() {
        this.speed = 2;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.speed !== void 0) {
          this.speed = data.speed;
        }
      }
    };
    exports2.CollisionsAbsorb = CollisionsAbsorb2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/CollisionsOverlap.js
var require_CollisionsOverlap = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/CollisionsOverlap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CollisionsOverlap = void 0;
    var CollisionsOverlap2 = class {
      constructor() {
        this.enable = true;
        this.retries = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.retries !== void 0) {
          this.retries = data.retries;
        }
      }
    };
    exports2.CollisionsOverlap = CollisionsOverlap2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/AnimationOptions.js
var require_AnimationOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/AnimationOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RangedAnimationOptions = exports2.AnimationOptions = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var AnimationOptions2 = class {
      constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = (0, NumberUtils_1.setRangeValue)(data.count);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        if (data.decay !== void 0) {
          this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.delay !== void 0) {
          this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.AnimationOptions = AnimationOptions2;
    var RangedAnimationOptions2 = class extends AnimationOptions2 {
      constructor() {
        super();
        this.mode = "auto";
        this.startValue = "random";
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        if (data.minimumValue !== void 0) {
          this.minimumValue = data.minimumValue;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.startValue !== void 0) {
          this.startValue = data.startValue;
        }
      }
    };
    exports2.RangedAnimationOptions = RangedAnimationOptions2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Random.js
var require_Random = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Random.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Random = void 0;
    var Random2 = class {
      constructor() {
        this.enable = false;
        this.minimumValue = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.minimumValue !== void 0) {
          this.minimumValue = data.minimumValue;
        }
      }
    };
    exports2.Random = Random2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/ValueWithRandom.js
var require_ValueWithRandom = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/ValueWithRandom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RangedAnimationValueWithRandom = exports2.AnimationValueWithRandom = exports2.ValueWithRandom = void 0;
    var AnimationOptions_1 = require_AnimationOptions();
    var Random_1 = require_Random();
    var Utils_1 = require_Utils();
    var NumberUtils_1 = require_NumberUtils();
    var ValueWithRandom2 = class {
      constructor() {
        this.random = new Random_1.Random();
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if ((0, Utils_1.isBoolean)(data.random)) {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
        if (data.value !== void 0) {
          this.value = (0, NumberUtils_1.setRangeValue)(data.value, this.random.enable ? this.random.minimumValue : void 0);
        }
      }
    };
    exports2.ValueWithRandom = ValueWithRandom2;
    var AnimationValueWithRandom = class extends ValueWithRandom2 {
      constructor() {
        super();
        this.animation = new AnimationOptions_1.AnimationOptions();
      }
      get anim() {
        return this.animation;
      }
      set anim(value) {
        this.animation = value;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== void 0) {
          this.animation.load(animation);
        }
      }
    };
    exports2.AnimationValueWithRandom = AnimationValueWithRandom;
    var RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
      constructor() {
        super();
        this.animation = new AnimationOptions_1.RangedAnimationOptions();
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== void 0) {
          this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
        }
      }
    };
    exports2.RangedAnimationValueWithRandom = RangedAnimationValueWithRandom;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var require_ParticlesBounceFactor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesBounceFactor = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var ParticlesBounceFactor2 = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
      }
    };
    exports2.ParticlesBounceFactor = ParticlesBounceFactor2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Bounce/ParticlesBounce.js
var require_ParticlesBounce = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Bounce/ParticlesBounce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesBounce = void 0;
    var ParticlesBounceFactor_1 = require_ParticlesBounceFactor();
    var ParticlesBounce2 = class {
      constructor() {
        this.horizontal = new ParticlesBounceFactor_1.ParticlesBounceFactor();
        this.vertical = new ParticlesBounceFactor_1.ParticlesBounceFactor();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
      }
    };
    exports2.ParticlesBounce = ParticlesBounce2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/Collisions.js
var require_Collisions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Collisions/Collisions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Collisions = void 0;
    var CollisionsAbsorb_1 = require_CollisionsAbsorb();
    var CollisionsOverlap_1 = require_CollisionsOverlap();
    var ParticlesBounce_1 = require_ParticlesBounce();
    var NumberUtils_1 = require_NumberUtils();
    var Collisions2 = class {
      constructor() {
        this.absorb = new CollisionsAbsorb_1.CollisionsAbsorb();
        this.bounce = new ParticlesBounce_1.ParticlesBounce();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = "bounce";
        this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.maxSpeed !== void 0) {
          this.maxSpeed = (0, NumberUtils_1.setRangeValue)(data.maxSpeed);
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
      }
    };
    exports2.Collisions = Collisions2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveAngle.js
var require_MoveAngle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveAngle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveAngle = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var MoveAngle2 = class {
      constructor() {
        this.offset = 0;
        this.value = 90;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.offset !== void 0) {
          this.offset = (0, NumberUtils_1.setRangeValue)(data.offset);
        }
        if (data.value !== void 0) {
          this.value = (0, NumberUtils_1.setRangeValue)(data.value);
        }
      }
    };
    exports2.MoveAngle = MoveAngle2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveAttract.js
var require_MoveAttract = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveAttract.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveAttract = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var MoveAttract2 = class {
      constructor() {
        this.distance = 200;
        this.enable = false;
        this.rotate = {
          x: 3e3,
          y: 3e3
        };
      }
      get rotateX() {
        return this.rotate.x;
      }
      set rotateX(value) {
        this.rotate.x = value;
      }
      get rotateY() {
        return this.rotate.y;
      }
      set rotateY(value) {
        this.rotate.y = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = (0, NumberUtils_1.setRangeValue)(data.distance);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        const rotateX = data.rotate?.x ?? data.rotateX;
        if (rotateX !== void 0) {
          this.rotate.x = rotateX;
        }
        const rotateY = data.rotate?.y ?? data.rotateY;
        if (rotateY !== void 0) {
          this.rotate.y = rotateY;
        }
      }
    };
    exports2.MoveAttract = MoveAttract2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveCenter.js
var require_MoveCenter = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveCenter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveCenter = void 0;
    var MoveCenter2 = class {
      constructor() {
        this.x = 50;
        this.y = 50;
        this.mode = "percent";
        this.radius = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.x !== void 0) {
          this.x = data.x;
        }
        if (data.y !== void 0) {
          this.y = data.y;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.radius !== void 0) {
          this.radius = data.radius;
        }
      }
    };
    exports2.MoveCenter = MoveCenter2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveGravity.js
var require_MoveGravity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveGravity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveGravity = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var MoveGravity2 = class {
      constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.acceleration !== void 0) {
          this.acceleration = (0, NumberUtils_1.setRangeValue)(data.acceleration);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.inverse !== void 0) {
          this.inverse = data.inverse;
        }
        if (data.maxSpeed !== void 0) {
          this.maxSpeed = (0, NumberUtils_1.setRangeValue)(data.maxSpeed);
        }
      }
    };
    exports2.MoveGravity = MoveGravity2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Path/MovePath.js
var require_MovePath = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Path/MovePath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MovePath = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var Utils_1 = require_Utils();
    var MovePath2 = class {
      constructor() {
        this.clamp = true;
        this.delay = new ValueWithRandom_1.ValueWithRandom();
        this.enable = false;
        this.options = {};
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.clamp !== void 0) {
          this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
          this.options = (0, Utils_1.deepExtend)(this.options, data.options);
        }
      }
    };
    exports2.MovePath = MovePath2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveTrailFill.js
var require_MoveTrailFill = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveTrailFill.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveTrailFill = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var MoveTrailFill2 = class {
      load(data) {
        if (!data) {
          return;
        }
        if (data.color !== void 0) {
          this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== void 0) {
          this.image = data.image;
        }
      }
    };
    exports2.MoveTrailFill = MoveTrailFill2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveTrail.js
var require_MoveTrail = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/MoveTrail.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MoveTrail = void 0;
    var MoveTrailFill_1 = require_MoveTrailFill();
    var MoveTrail2 = class {
      constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill_1.MoveTrailFill();
      }
      get fillColor() {
        return this.fill.color;
      }
      set fillColor(value) {
        this.fill.load({ color: value });
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.fill !== void 0 || data.fillColor !== void 0) {
          this.fill.load(data.fill || { color: data.fillColor });
        }
        if (data.length !== void 0) {
          this.length = data.length;
        }
      }
    };
    exports2.MoveTrail = MoveTrail2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/OutModes.js
var require_OutModes = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/OutModes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OutModes = void 0;
    var OutModes2 = class {
      constructor() {
        this.default = "out";
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.default !== void 0) {
          this.default = data.default;
        }
        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
      }
    };
    exports2.OutModes = OutModes2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Spin.js
var require_Spin = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Spin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Spin = void 0;
    var Utils_1 = require_Utils();
    var NumberUtils_1 = require_NumberUtils();
    var Spin2 = class {
      constructor() {
        this.acceleration = 0;
        this.enable = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.acceleration !== void 0) {
          this.acceleration = (0, NumberUtils_1.setRangeValue)(data.acceleration);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.position) {
          this.position = (0, Utils_1.deepExtend)({}, data.position);
        }
      }
    };
    exports2.Spin = Spin2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Move.js
var require_Move = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Move/Move.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Move = void 0;
    var Utils_1 = require_Utils();
    var MoveAngle_1 = require_MoveAngle();
    var MoveAttract_1 = require_MoveAttract();
    var MoveCenter_1 = require_MoveCenter();
    var MoveGravity_1 = require_MoveGravity();
    var MovePath_1 = require_MovePath();
    var MoveTrail_1 = require_MoveTrail();
    var OutModes_1 = require_OutModes();
    var Spin_1 = require_Spin();
    var NumberUtils_1 = require_NumberUtils();
    var Move2 = class {
      constructor() {
        this.angle = new MoveAngle_1.MoveAngle();
        this.attract = new MoveAttract_1.MoveAttract();
        this.center = new MoveCenter_1.MoveCenter();
        this.decay = 0;
        this.distance = {};
        this.direction = "none";
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity_1.MoveGravity();
        this.path = new MovePath_1.MovePath();
        this.outModes = new OutModes_1.OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin_1.Spin();
        this.straight = false;
        this.trail = new MoveTrail_1.MoveTrail();
        this.vibrate = false;
        this.warp = false;
      }
      get bounce() {
        return this.collisions;
      }
      set bounce(value) {
        this.collisions = value;
      }
      get collisions() {
        return false;
      }
      set collisions(_) {
      }
      get noise() {
        return this.path;
      }
      set noise(value) {
        this.path = value;
      }
      get outMode() {
        return this.outModes.default;
      }
      set outMode(value) {
        this.outModes.default = value;
      }
      get out_mode() {
        return this.outMode;
      }
      set out_mode(value) {
        this.outMode = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        this.angle.load((0, Utils_1.isNumber)(data.angle) ? { value: data.angle } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== void 0) {
          this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        if (data.distance !== void 0) {
          this.distance = (0, Utils_1.isNumber)(data.distance) ? {
            horizontal: data.distance,
            vertical: data.distance
          } : { ...data.distance };
        }
        if (data.drift !== void 0) {
          this.drift = (0, NumberUtils_1.setRangeValue)(data.drift);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outModes = data.outModes ?? data.outMode ?? data.out_mode;
        if (outModes !== void 0) {
          if ((0, Utils_1.isObject)(outModes)) {
            this.outModes.load(outModes);
          } else {
            this.outModes.load({
              default: outModes
            });
          }
        }
        this.path.load(data.path ?? data.noise);
        if (data.random !== void 0) {
          this.random = data.random;
        }
        if (data.size !== void 0) {
          this.size = data.size;
        }
        if (data.speed !== void 0) {
          this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== void 0) {
          this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== void 0) {
          this.vibrate = data.vibrate;
        }
        if (data.warp !== void 0) {
          this.warp = data.warp;
        }
      }
    };
    exports2.Move = Move2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Opacity/OpacityAnimation.js
var require_OpacityAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Opacity/OpacityAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OpacityAnimation = void 0;
    var AnimationOptions_1 = require_AnimationOptions();
    var OpacityAnimation2 = class extends AnimationOptions_1.RangedAnimationOptions {
      constructor() {
        super();
        this.destroy = "none";
        this.speed = 2;
      }
      get opacity_min() {
        return this.minimumValue;
      }
      set opacity_min(value) {
        this.minimumValue = value;
      }
      load(data) {
        if (data?.opacity_min !== void 0 && data.minimumValue === void 0) {
          data.minimumValue = data.opacity_min;
        }
        super.load(data);
        if (!data) {
          return;
        }
        if (data.destroy !== void 0) {
          this.destroy = data.destroy;
        }
      }
    };
    exports2.OpacityAnimation = OpacityAnimation2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Opacity/Opacity.js
var require_Opacity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Opacity/Opacity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Opacity = void 0;
    var OpacityAnimation_1 = require_OpacityAnimation();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var NumberUtils_1 = require_NumberUtils();
    var Opacity2 = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
      }
      get anim() {
        return this.animation;
      }
      set anim(value) {
        this.animation = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        const animation = data.animation ?? data.anim;
        if (animation !== void 0) {
          this.animation.load(animation);
          this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
        }
      }
    };
    exports2.Opacity = Opacity2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Number/ParticlesDensity.js
var require_ParticlesDensity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Number/ParticlesDensity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesDensity = void 0;
    var ParticlesDensity2 = class {
      constructor() {
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
      }
      get area() {
        return this.width;
      }
      set area(value) {
        this.width = value;
      }
      get factor() {
        return this.height;
      }
      set factor(value) {
        this.height = value;
      }
      get value_area() {
        return this.area;
      }
      set value_area(value) {
        this.area = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        const width = data.width ?? data.area ?? data.value_area;
        if (width !== void 0) {
          this.width = width;
        }
        const height = data.height ?? data.factor;
        if (height !== void 0) {
          this.height = height;
        }
      }
    };
    exports2.ParticlesDensity = ParticlesDensity2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Number/ParticlesNumber.js
var require_ParticlesNumber = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Number/ParticlesNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesNumber = void 0;
    var ParticlesDensity_1 = require_ParticlesDensity();
    var ParticlesNumber2 = class {
      constructor() {
        this.density = new ParticlesDensity_1.ParticlesDensity();
        this.limit = 0;
        this.value = 0;
      }
      get max() {
        return this.limit;
      }
      set max(value) {
        this.limit = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        this.density.load(data.density);
        const limit = data.limit ?? data.max;
        if (limit !== void 0) {
          this.limit = limit;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports2.ParticlesNumber = ParticlesNumber2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Shadow.js
var require_Shadow = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Shadow.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Shadow = void 0;
    var OptionsColor_1 = require_OptionsColor();
    var Shadow2 = class {
      constructor() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
          x: 0,
          y: 0
        };
        this.color.value = "#000";
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.blur !== void 0) {
          this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.offset === void 0) {
          return;
        }
        if (data.offset.x !== void 0) {
          this.offset.x = data.offset.x;
        }
        if (data.offset.y !== void 0) {
          this.offset.y = data.offset.y;
        }
      }
    };
    exports2.Shadow = Shadow2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Shape/Shape.js
var require_Shape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Shape/Shape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Shape = void 0;
    var Utils_1 = require_Utils();
    var charKey2 = "character";
    var charAltKey2 = "char";
    var imageKey2 = "image";
    var imageAltKey2 = "images";
    var polygonKey2 = "polygon";
    var polygonAltKey2 = "star";
    var Shape2 = class {
      constructor() {
        this.loadShape = (item, mainKey, altKey, altOverride) => {
          if (!item) {
            return;
          }
          const itemIsArray = (0, Utils_1.isArray)(item), emptyValue = itemIsArray ? [] : {}, mainDifferentValues = itemIsArray !== (0, Utils_1.isArray)(this.options[mainKey]), altDifferentValues = itemIsArray !== (0, Utils_1.isArray)(this.options[altKey]);
          if (mainDifferentValues) {
            this.options[mainKey] = emptyValue;
          }
          if (altDifferentValues && altOverride) {
            this.options[altKey] = emptyValue;
          }
          this.options[mainKey] = (0, Utils_1.deepExtend)(this.options[mainKey] ?? emptyValue, item);
          if (!this.options[altKey] || altOverride) {
            this.options[altKey] = (0, Utils_1.deepExtend)(this.options[altKey] ?? emptyValue, item);
          }
        };
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
      }
      get character() {
        return this.options[charKey2] ?? this.options[charAltKey2];
      }
      set character(value) {
        this.options[charAltKey2] = this.options[charKey2] = value;
      }
      get custom() {
        return this.options;
      }
      set custom(value) {
        this.options = value;
      }
      get image() {
        return this.options[imageKey2] ?? this.options[imageAltKey2];
      }
      set image(value) {
        this.options[imageAltKey2] = this.options[imageKey2] = value;
      }
      get images() {
        return this.image;
      }
      set images(value) {
        this.image = value;
      }
      get polygon() {
        return this.options[polygonKey2] ?? this.options[polygonAltKey2];
      }
      set polygon(value) {
        this.options[polygonAltKey2] = this.options[polygonKey2] = value;
      }
      get stroke() {
        return [];
      }
      set stroke(_value) {
      }
      load(data) {
        if (!data) {
          return;
        }
        const options = data.options ?? data.custom;
        if (options !== void 0) {
          for (const shape in options) {
            const item = options[shape];
            if (item) {
              this.options[shape] = (0, Utils_1.deepExtend)(this.options[shape] ?? {}, item);
            }
          }
        }
        this.loadShape(data.character, charKey2, charAltKey2, true);
        this.loadShape(data.polygon, polygonKey2, polygonAltKey2, false);
        this.loadShape(data.image ?? data.images, imageKey2, imageAltKey2, true);
        if (data.close !== void 0) {
          this.close = data.close;
        }
        if (data.fill !== void 0) {
          this.fill = data.fill;
        }
        if (data.type !== void 0) {
          this.type = data.type;
        }
      }
    };
    exports2.Shape = Shape2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Size/SizeAnimation.js
var require_SizeAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Size/SizeAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SizeAnimation = void 0;
    var AnimationOptions_1 = require_AnimationOptions();
    var SizeAnimation2 = class extends AnimationOptions_1.RangedAnimationOptions {
      constructor() {
        super();
        this.destroy = "none";
        this.speed = 5;
      }
      get size_min() {
        return this.minimumValue;
      }
      set size_min(value) {
        this.minimumValue = value;
      }
      load(data) {
        if (data?.size_min !== void 0 && data.minimumValue === void 0) {
          data.minimumValue = data.size_min;
        }
        super.load(data);
        if (!data) {
          return;
        }
        if (data.destroy !== void 0) {
          this.destroy = data.destroy;
        }
      }
    };
    exports2.SizeAnimation = SizeAnimation2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Size/Size.js
var require_Size = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Size/Size.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Size = void 0;
    var SizeAnimation_1 = require_SizeAnimation();
    var ValueWithRandom_1 = require_ValueWithRandom();
    var NumberUtils_1 = require_NumberUtils();
    var Size2 = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
      }
      get anim() {
        return this.animation;
      }
      set anim(value) {
        this.animation = value;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== void 0) {
          this.animation.load(animation);
          this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
        }
      }
    };
    exports2.Size = Size2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Stroke.js
var require_Stroke = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/Stroke.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Stroke = void 0;
    var AnimatableColor_1 = require_AnimatableColor();
    var NumberUtils_1 = require_NumberUtils();
    var Stroke2 = class {
      constructor() {
        this.width = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.color !== void 0) {
          this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== void 0) {
          this.width = (0, NumberUtils_1.setRangeValue)(data.width);
        }
        if (data.opacity !== void 0) {
          this.opacity = (0, NumberUtils_1.setRangeValue)(data.opacity);
        }
      }
    };
    exports2.Stroke = Stroke2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/ZIndex/ZIndex.js
var require_ZIndex = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/ZIndex/ZIndex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZIndex = void 0;
    var ValueWithRandom_1 = require_ValueWithRandom();
    var ZIndex2 = class extends ValueWithRandom_1.ValueWithRandom {
      constructor() {
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        if (data.opacityRate !== void 0) {
          this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== void 0) {
          this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== void 0) {
          this.velocityRate = data.velocityRate;
        }
      }
    };
    exports2.ZIndex = ZIndex2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Particles/ParticlesOptions.js
var require_ParticlesOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Particles/ParticlesOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesOptions = void 0;
    var Utils_1 = require_Utils();
    var AnimatableColor_1 = require_AnimatableColor();
    var Collisions_1 = require_Collisions();
    var Move_1 = require_Move();
    var Opacity_1 = require_Opacity();
    var ParticlesBounce_1 = require_ParticlesBounce();
    var ParticlesNumber_1 = require_ParticlesNumber();
    var Shadow_1 = require_Shadow();
    var Shape_1 = require_Shape();
    var Size_1 = require_Size();
    var Stroke_1 = require_Stroke();
    var ZIndex_1 = require_ZIndex();
    var ParticlesOptions2 = class {
      constructor(engine, container) {
        this._engine = engine;
        this._container = container;
        this.bounce = new ParticlesBounce_1.ParticlesBounce();
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.color.value = "#fff";
        this.groups = {};
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.reduceDuplicates = false;
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.zIndex = new ZIndex_1.ZIndex();
      }
      load(data) {
        if (!data) {
          return;
        }
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor_1.AnimatableColor.create(this.color, data.color));
        if (data.groups !== void 0) {
          for (const group in data.groups) {
            const item = data.groups[group];
            if (item !== void 0) {
              this.groups[group] = (0, Utils_1.deepExtend)(this.groups[group] ?? {}, item);
            }
          }
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        if (data.reduceDuplicates !== void 0) {
          this.reduceDuplicates = data.reduceDuplicates;
        }
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        const collisions = data.move?.collisions ?? data.move?.bounce;
        if (collisions !== void 0) {
          this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        if (data.interactivity !== void 0) {
          this.interactivity = (0, Utils_1.deepExtend)({}, data.interactivity);
        }
        const strokeToLoad = data.stroke ?? data.shape?.stroke;
        if (strokeToLoad) {
          this.stroke = (0, Utils_1.executeOnSingleOrMultiple)(strokeToLoad, (t) => {
            const tmp = new Stroke_1.Stroke();
            tmp.load(t);
            return tmp;
          });
        }
        if (this._container) {
          const updaters = this._engine.plugins.updaters.get(this._container);
          if (updaters) {
            for (const updater of updaters) {
              if (updater.loadOptions) {
                updater.loadOptions(this, data);
              }
            }
          }
          const interactors = this._engine.plugins.interactors.get(this._container);
          if (interactors) {
            for (const interactor of interactors) {
              if (interactor.loadParticlesOptions) {
                interactor.loadParticlesOptions(this, data);
              }
            }
          }
        }
      }
    };
    exports2.ParticlesOptions = ParticlesOptions2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/OptionsUtils.js
var require_OptionsUtils = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/OptionsUtils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadParticlesOptions = exports2.loadOptions = void 0;
    var ParticlesOptions_1 = require_ParticlesOptions();
    function loadOptions2(options, ...sourceOptionsArr) {
      for (const sourceOptions of sourceOptionsArr) {
        options.load(sourceOptions);
      }
    }
    exports2.loadOptions = loadOptions2;
    function loadParticlesOptions2(engine, container, ...sourceOptionsArr) {
      const options = new ParticlesOptions_1.ParticlesOptions(engine, container);
      loadOptions2(options, ...sourceOptionsArr);
      return options;
    }
    exports2.loadParticlesOptions = loadParticlesOptions2;
  }
});

// node_modules/tsparticles-engine/cjs/Options/Classes/Options.js
var require_Options = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Classes/Options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Options = void 0;
    var Utils_1 = require_Utils();
    var Background_1 = require_Background();
    var BackgroundMask_1 = require_BackgroundMask();
    var FullScreen_1 = require_FullScreen();
    var Interactivity_1 = require_Interactivity();
    var ManualParticle_1 = require_ManualParticle();
    var Responsive_1 = require_Responsive();
    var Theme_1 = require_Theme();
    var OptionsUtils_1 = require_OptionsUtils();
    var NumberUtils_1 = require_NumberUtils();
    var Options2 = class {
      constructor(engine, container) {
        this._findDefaultTheme = (mode) => {
          return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === "any");
        };
        this._importPreset = (preset) => {
          this.load(this._engine.plugins.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new FullScreen_1.FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new Interactivity_1.Interactivity(engine, container);
        this.manualParticles = [];
        this.particles = (0, OptionsUtils_1.loadParticlesOptions)(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
      }
      get backgroundMode() {
        return this.fullScreen;
      }
      set backgroundMode(value) {
        this.fullScreen.load(value);
      }
      get fps_limit() {
        return this.fpsLimit;
      }
      set fps_limit(value) {
        this.fpsLimit = value;
      }
      get retina_detect() {
        return this.detectRetina;
      }
      set retina_detect(value) {
        this.detectRetina = value;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.preset !== void 0) {
          (0, Utils_1.executeOnSingleOrMultiple)(data.preset, (preset) => this._importPreset(preset));
        }
        if (data.autoPlay !== void 0) {
          this.autoPlay = data.autoPlay;
        }
        if (data.delay !== void 0) {
          this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        const detectRetina = data.detectRetina ?? data.retina_detect;
        if (detectRetina !== void 0) {
          this.detectRetina = detectRetina;
        }
        if (data.duration !== void 0) {
          this.duration = (0, NumberUtils_1.setRangeValue)(data.duration);
        }
        const fpsLimit = data.fpsLimit ?? data.fps_limit;
        if (fpsLimit !== void 0) {
          this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== void 0) {
          this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== void 0) {
          this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== void 0) {
          this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = data.fullScreen ?? data.backgroundMode;
        if ((0, Utils_1.isBoolean)(fullScreen)) {
          this.fullScreen.enable = fullScreen;
        } else {
          this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles) {
          this.manualParticles = data.manualParticles.map((t) => {
            const tmp = new ManualParticle_1.ManualParticle();
            tmp.load(t);
            return tmp;
          });
        }
        this.particles.load(data.particles);
        this.style = (0, Utils_1.deepExtend)(this.style, data.style);
        this._engine.plugins.loadOptions(this, data);
        if (data.smooth !== void 0) {
          this.smooth = data.smooth;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (interactors) {
          for (const interactor of interactors) {
            if (interactor.loadOptions) {
              interactor.loadOptions(this, data);
            }
          }
        }
        if (data.responsive !== void 0) {
          for (const responsive of data.responsive) {
            const optResponsive = new Responsive_1.Responsive();
            optResponsive.load(responsive);
            this.responsive.push(optResponsive);
          }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== void 0) {
          for (const theme of data.themes) {
            const existingTheme = this.themes.find((t) => t.name === theme.name);
            if (!existingTheme) {
              const optTheme = new Theme_1.Theme();
              optTheme.load(theme);
              this.themes.push(optTheme);
            } else {
              existingTheme.load(theme);
            }
          }
        }
        this.defaultThemes.dark = this._findDefaultTheme("dark")?.name;
        this.defaultThemes.light = this._findDefaultTheme("light")?.name;
      }
      setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions?.options);
        return responsiveOptions?.maxWidth;
      }
      setTheme(name) {
        if (name) {
          const chosenTheme = this.themes.find((theme) => theme.name === name);
          if (chosenTheme) {
            this.load(chosenTheme.options);
          }
        } else {
          const mediaMatch = (0, Utils_1.safeMatchMedia)("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
          if (defaultTheme) {
            this.load(defaultTheme.options);
          }
        }
      }
    };
    exports2.Options = Options2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/InteractionManager.js
var require_InteractionManager = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/InteractionManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InteractionManager = void 0;
    var InteractionManager2 = class {
      constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this._interactors = engine.plugins.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
      }
      async externalInteract(delta) {
        for (const interactor of this._externalInteractors) {
          interactor.isEnabled() && await interactor.interact(delta);
        }
      }
      handleClickMode(mode) {
        for (const interactor of this._externalInteractors) {
          interactor.handleClickMode && interactor.handleClickMode(mode);
        }
      }
      init() {
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors) {
          switch (interactor.type) {
            case "external":
              this._externalInteractors.push(interactor);
              break;
            case "particles":
              this._particleInteractors.push(interactor);
              break;
          }
          interactor.init();
        }
      }
      async particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors) {
          interactor.clear(particle, delta);
        }
        for (const interactor of this._particleInteractors) {
          interactor.isEnabled(particle) && await interactor.interact(particle, delta);
        }
      }
      async reset(particle) {
        for (const interactor of this._externalInteractors) {
          interactor.isEnabled() && interactor.reset(particle);
        }
        for (const interactor of this._particleInteractors) {
          interactor.isEnabled(particle) && interactor.reset(particle);
        }
      }
    };
    exports2.InteractionManager = InteractionManager2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Particle.js
var require_Particle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Particle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Particle = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var Utils_1 = require_Utils();
    var ColorUtils_1 = require_ColorUtils();
    var Interactivity_1 = require_Interactivity();
    var Vector_1 = require_Vector();
    var Vector3d_1 = require_Vector3d();
    var CanvasUtils_1 = require_CanvasUtils();
    var Constants_1 = require_Constants();
    var OptionsUtils_1 = require_OptionsUtils();
    var fixOutMode2 = (data) => {
      if (!(0, Utils_1.isInArray)(data.outMode, data.checkModes)) {
        return;
      }
      const diameter = data.radius * 2;
      if (data.coord > data.maxCoord - diameter) {
        data.setCb(-data.radius);
      } else if (data.coord < diameter) {
        data.setCb(data.radius);
      }
    };
    var Particle2 = class {
      constructor(engine, id, container, position, overrideOptions, group) {
        this.container = container;
        this._calcPosition = (container2, position2, zIndex, tryCount = 0) => {
          for (const [, plugin] of container2.plugins) {
            const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position2, this) : void 0;
            if (pluginPos) {
              return Vector3d_1.Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
            }
          }
          const canvasSize = container2.canvas.size, exactPosition = (0, NumberUtils_1.calcExactPositionOrRandomFromSize)({
            size: canvasSize,
            position: position2
          }), pos = Vector3d_1.Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
            fixOutMode2({
              outMode,
              checkModes: ["bounce", "bounce-horizontal"],
              coord: pos.x,
              maxCoord: container2.canvas.size.width,
              setCb: (value) => pos.x += value,
              radius
            });
          }, fixVertical = (outMode) => {
            fixOutMode2({
              outMode,
              checkModes: ["bounce", "bounce-vertical"],
              coord: pos.y,
              maxCoord: container2.canvas.size.height,
              setCb: (value) => pos.y += value,
              radius
            });
          };
          fixHorizontal(outModes.left ?? outModes.default);
          fixHorizontal(outModes.right ?? outModes.default);
          fixVertical(outModes.top ?? outModes.default);
          fixVertical(outModes.bottom ?? outModes.default);
          if (this._checkOverlap(pos, tryCount)) {
            return this._calcPosition(container2, void 0, zIndex, tryCount + 1);
          }
          return pos;
        };
        this._calculateVelocity = () => {
          const baseVelocity = (0, NumberUtils_1.getParticleBaseVelocity)(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
          if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
            return res;
          }
          const rad = Math.PI / 180 * (0, NumberUtils_1.getRangeValue)(moveOptions.angle.value), radOffset = Math.PI / 180 * (0, NumberUtils_1.getRangeValue)(moveOptions.angle.offset), range = {
            left: radOffset - rad / 2,
            right: radOffset + rad / 2
          };
          if (!moveOptions.straight) {
            res.angle += (0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(range.left, range.right));
          }
          if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= (0, NumberUtils_1.getRandom)();
          }
          return res;
        };
        this._checkOverlap = (pos, tryCount = 0) => {
          const collisionsOptions = this.options.collisions, radius = this.getRadius();
          if (!collisionsOptions.enable) {
            return false;
          }
          const overlapOptions = collisionsOptions.overlap;
          if (overlapOptions.enable) {
            return false;
          }
          const retries = overlapOptions.retries;
          if (retries >= 0 && tryCount > retries) {
            throw new Error(`${Constants_1.errorPrefix} particle is overlapping and can't be placed`);
          }
          return !!this.container.particles.find((particle) => (0, NumberUtils_1.getDistance)(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color) => {
          if (!color || !this.roll || !this.backColor && !this.roll.alter) {
            return color;
          }
          const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor(((this.roll.angle ?? 0) + backSum) / (Math.PI / backFactor)) % 2;
          if (!rolled) {
            return color;
          }
          if (this.backColor) {
            return this.backColor;
          }
          if (this.roll.alter) {
            return (0, CanvasUtils_1.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
          }
          return color;
        };
        this._initPosition = (position2) => {
          const container2 = this.container, zIndexValue = (0, NumberUtils_1.getRangeValue)(this.options.zIndex.value);
          this.position = this._calcPosition(container2, position2, (0, NumberUtils_1.clamp)(zIndexValue, 0, container2.zLayers));
          this.initialPosition = this.position.copy();
          const canvasSize = container2.canvas.size;
          this.moveCenter = {
            ...(0, Utils_1.getPosition)(this.options.move.center, canvasSize),
            radius: this.options.move.center.radius ?? 0,
            mode: this.options.move.center.mode ?? "percent"
          };
          this.direction = (0, NumberUtils_1.getParticleDirectionAngle)(this.options.move.direction, this.position, this.moveCenter);
          switch (this.options.move.direction) {
            case "inside":
              this.outType = "inside";
              break;
            case "outside":
              this.outType = "outside";
              break;
          }
          this.offset = Vector_1.Vector.origin;
        };
        this._loadShapeData = (shapeOptions, reduceDuplicates) => {
          const shapeData = shapeOptions.options[this.shape];
          if (!shapeData) {
            return;
          }
          return (0, Utils_1.deepExtend)({
            close: shapeOptions.close,
            fill: shapeOptions.fill
          }, (0, Utils_1.itemFromSingleOrMultiple)(shapeData, this.id, reduceDuplicates));
        };
        this._engine = engine;
        this.init(id, position, overrideOptions, group);
      }
      destroy(override) {
        if (this.unbreakable || this.destroyed) {
          return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator;
        for (const [, plugin] of container.plugins) {
          if (plugin.particleDestroyed) {
            plugin.particleDestroyed(this, override);
          }
        }
        for (const updater of container.particles.updaters) {
          if (updater.particleDestroyed) {
            updater.particleDestroyed(this, override);
          }
        }
        if (pathGenerator) {
          pathGenerator.reset(this);
        }
      }
      draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
          container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
      }
      getFillColor() {
        return this._getRollColor(this.bubble.color ?? (0, ColorUtils_1.getHslFromAnimation)(this.color));
      }
      getMass() {
        return this.getRadius() ** 2 * Math.PI / 2;
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z
        };
      }
      getRadius() {
        return this.bubble.radius ?? this.size.value;
      }
      getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? (0, ColorUtils_1.getHslFromAnimation)(this.strokeColor));
      }
      init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.fill = true;
        this.pathRotation = false;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
          maxDistance: {}
        };
        this.outType = "normal";
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, OptionsUtils_1.loadParticlesOptions)(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
        this.shape = (0, Utils_1.itemFromSingleOrMultiple)(shapeType, this.id, reduceDuplicates);
        const shapeOptions = particlesOptions.shape;
        if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
          const overrideShapeType = overrideOptions.shape.type, shape = (0, Utils_1.itemFromSingleOrMultiple)(overrideShapeType, this.id, reduceDuplicates);
          if (shape) {
            this.shape = shape;
            shapeOptions.load(overrideOptions.shape);
          }
        }
        this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const shapeData = this.shapeData;
        if (shapeData) {
          particlesOptions.load(shapeData.particles);
        }
        const interactivity = new Interactivity_1.Interactivity(engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.fill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.close = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = (0, NumberUtils_1.getValue)(pathOptions.delay) * 1e3;
        if (pathOptions.generator) {
          this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
          if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
            this.pathGenerator.init(container);
          }
        }
        container.retina.initParticle(this);
        this.size = (0, Utils_1.initParticleNumericAnimationValue)(this.options.size, pxRatio);
        this.bubble = {
          inRange: false
        };
        this.slow = {
          inRange: false,
          factor: 1
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - (0, NumberUtils_1.getRangeValue)(this.options.move.decay);
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
          drawer = this._engine.plugins.getShapeDrawer(this.shape);
          if (drawer) {
            container.drawers.set(this.shape, drawer);
          }
        }
        if (drawer && drawer.loadShape) {
          drawer.loadShape(this);
        }
        const sideCountFunc = drawer?.getSidesCount;
        if (sideCountFunc) {
          this.sides = sideCountFunc(this);
        }
        this.spawning = false;
        this.shadowColor = (0, ColorUtils_1.rangeColorToRgb)(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
          updater.init(this);
        }
        for (const mover of container.particles.movers) {
          mover.init && mover.init(this);
        }
        if (drawer && drawer.particleInit) {
          drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
          plugin.particleCreated && plugin.particleCreated(this);
        }
      }
      isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      reset() {
        for (const updater of this.container.particles.updaters) {
          updater.reset && updater.reset(this);
        }
      }
    };
    exports2.Particle = Particle2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Point.js
var require_Point = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Point.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Point = void 0;
    var Point2 = class {
      constructor(position, particle) {
        this.position = position;
        this.particle = particle;
      }
    };
    exports2.Point = Point2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Range.js
var require_Range = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Range.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Range = void 0;
    var Range2 = class {
      constructor(x, y) {
        this.position = {
          x,
          y
        };
      }
    };
    exports2.Range = Range2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Rectangle.js
var require_Rectangle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Rectangle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Rectangle = void 0;
    var Circle_1 = require_Circle();
    var Range_1 = require_Range();
    var Rectangle2 = class _Rectangle extends Range_1.Range {
      constructor(x, y, width, height) {
        super(x, y);
        this.size = {
          height,
          width
        };
      }
      contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
      }
      intersects(range) {
        if (range instanceof Circle_1.Circle) {
          range.intersects(this);
        }
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof _Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
      }
    };
    exports2.Rectangle = Rectangle2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Circle.js
var require_Circle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Circle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Circle = void 0;
    var Range_1 = require_Range();
    var Rectangle_1 = require_Rectangle();
    var NumberUtils_1 = require_NumberUtils();
    var Circle2 = class _Circle extends Range_1.Range {
      constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
      }
      contains(point) {
        return (0, NumberUtils_1.getDistance)(point, this.position) <= this.radius;
      }
      intersects(range) {
        const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
        if (range instanceof _Circle) {
          const rSum = r + range.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
          return rSum > dist;
        } else if (range instanceof Rectangle_1.Rectangle) {
          const { width, height } = range.size, edges = Math.pow(distPos.x - width, 2) + Math.pow(distPos.y - height, 2);
          return edges <= r ** 2 || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
        }
        return false;
      }
    };
    exports2.Circle = Circle2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/QuadTree.js
var require_QuadTree = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/QuadTree.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QuadTree = void 0;
    var Circle_1 = require_Circle();
    var Rectangle_1 = require_Rectangle();
    var NumberUtils_1 = require_NumberUtils();
    var QuadTree2 = class _QuadTree {
      constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = () => {
          const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity: capacity2 } = this;
          for (let i = 0; i < 4; i++) {
            this._subs.push(new _QuadTree(new Rectangle_1.Rectangle(x + width / 2 * (i % 2), y + height / 2 * (Math.round(i / 2) - i % 2), width / 2, height / 2), capacity2));
          }
          this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
      }
      insert(point) {
        if (!this.rectangle.contains(point.position)) {
          return false;
        }
        if (this._points.length < this.capacity) {
          this._points.push(point);
          return true;
        }
        if (!this._divided) {
          this._subdivide();
        }
        return this._subs.some((sub) => sub.insert(point));
      }
      query(range, check, found) {
        const res = found || [];
        if (!range.intersects(this.rectangle)) {
          return [];
        }
        for (const p of this._points) {
          if (!range.contains(p.position) && (0, NumberUtils_1.getDistance)(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
            continue;
          }
          res.push(p.particle);
        }
        if (this._divided) {
          for (const sub of this._subs) {
            sub.query(range, check, res);
          }
        }
        return res;
      }
      queryCircle(position, radius, check) {
        return this.query(new Circle_1.Circle(position.x, position.y, radius), check);
      }
      queryRectangle(position, size, check) {
        return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height), check);
      }
    };
    exports2.QuadTree = QuadTree2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Particles.js
var require_Particles = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Particles.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Particles = void 0;
    var Utils_1 = require_Utils();
    var InteractionManager_1 = require_InteractionManager();
    var Particle_1 = require_Particle();
    var Point_1 = require_Point();
    var QuadTree_1 = require_QuadTree();
    var Rectangle_1 = require_Rectangle();
    var Constants_1 = require_Constants();
    var qTreeCapacity2 = 4;
    var qTreeRectangle2 = (canvasSize) => {
      return new Rectangle_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2);
    };
    var Particles2 = class {
      constructor(engine, container) {
        this._applyDensity = (options, manualCount, group) => {
          if (!options.number.density?.enable) {
            return;
          }
          const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
          this.limit = numberOptions.limit * densityFactor;
          if (particlesCount < particlesNumber) {
            this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
          } else if (particlesCount > particlesNumber) {
            this.removeQuantity(particlesCount - particlesNumber, group);
          }
        };
        this._initDensityFactor = (densityOptions) => {
          const container2 = this._container;
          if (!container2.canvas.element || !densityOptions.enable) {
            return 1;
          }
          const canvas = container2.canvas.element, pxRatio = container2.retina.pixelRatio;
          return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
        };
        this._pushParticle = (position, overrideOptions, group, initializer) => {
          try {
            let particle = this.pool.pop();
            if (particle) {
              particle.init(this._nextId, position, overrideOptions, group);
            } else {
              particle = new Particle_1.Particle(this._engine, this._nextId, this._container, position, overrideOptions, group);
            }
            let canAdd = true;
            if (initializer) {
              canAdd = initializer(particle);
            }
            if (!canAdd) {
              return;
            }
            this._array.push(particle);
            this._zArray.push(particle);
            this._nextId++;
            this._engine.dispatchEvent("particleAdded", {
              container: this._container,
              data: {
                particle
              }
            });
            return particle;
          } catch (e) {
            (0, Utils_1.getLogger)().warning(`${Constants_1.errorPrefix} adding particle: ${e}`);
            return;
          }
        };
        this._removeParticle = (index, group, override) => {
          const particle = this._array[index];
          if (!particle || particle.group !== group) {
            return false;
          }
          particle.destroy(override);
          const zIdx = this._zArray.indexOf(particle);
          this._array.splice(index, 1);
          this._zArray.splice(zIdx, 1);
          this.pool.push(particle);
          this._engine.dispatchEvent("particleRemoved", {
            container: this._container,
            data: {
              particle
            }
          });
          return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this.pool = [];
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this._interactionManager = new InteractionManager_1.InteractionManager(engine, container);
        const canvasSize = container.canvas.size;
        this.quadTree = new QuadTree_1.QuadTree(qTreeRectangle2(canvasSize), qTreeCapacity2);
        this.movers = this._engine.plugins.getMovers(container, true);
        this.updaters = this._engine.plugins.getUpdaters(container, true);
      }
      get count() {
        return this._array.length;
      }
      addManualParticles() {
        const container = this._container, options = container.actualOptions;
        for (const particle of options.manualParticles) {
          this.addParticle(particle.position ? (0, Utils_1.getPosition)(particle.position, container.canvas.size) : void 0, particle.options);
        }
      }
      addParticle(position, overrideOptions, group, initializer) {
        const container = this._container, options = container.actualOptions, limit = options.particles.number.limit;
        if (limit > 0) {
          const countToRemove = this.count + 1 - limit;
          if (countToRemove > 0) {
            this.removeQuantity(countToRemove);
          }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
      }
      clear() {
        this._array = [];
        this._zArray = [];
      }
      destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
      }
      async draw(delta) {
        const container = this._container;
        container.canvas.clear();
        await this.update(delta);
        for (const [, plugin] of container.plugins) {
          container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this._zArray) {
          p.draw(delta);
        }
      }
      filter(condition) {
        return this._array.filter(condition);
      }
      find(condition) {
        return this._array.find(condition);
      }
      handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
      }
      init() {
        const container = this._container, options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        let handled = false;
        this.updaters = this._engine.plugins.getUpdaters(container, true);
        this._interactionManager.init();
        for (const [, plugin] of container.plugins) {
          if (plugin.particlesInitialization !== void 0) {
            handled = plugin.particlesInitialization();
          }
          if (handled) {
            break;
          }
        }
        this._interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators) {
          pathGenerator.init(container);
        }
        this.addManualParticles();
        if (!handled) {
          for (const group in options.particles.groups) {
            const groupOptions = options.particles.groups[group];
            for (let i = this.count, j = 0; j < groupOptions.number?.value && i < options.particles.number.value; i++, j++) {
              this.addParticle(void 0, groupOptions, group);
            }
          }
          for (let i = this.count; i < options.particles.number.value; i++) {
            this.addParticle();
          }
        }
      }
      push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for (let i = 0; i < nb; i++) {
          this.addParticle(mouse?.position, overrideOptions, group);
        }
        this.pushing = false;
      }
      async redraw() {
        this.clear();
        this.init();
        await this.draw({ value: 0, factor: 0 });
      }
      remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), void 0, group, override);
      }
      removeAt(index, quantity = 1, group, override) {
        if (index < 0 || index > this.count) {
          return;
        }
        let deleted = 0;
        for (let i = index; deleted < quantity && i < this.count; i++) {
          this._removeParticle(i--, group, override) && deleted++;
        }
      }
      removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
      }
      setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups;
        for (const group in groups) {
          this._applyDensity(groups[group], 0, group);
        }
        this._applyDensity(options.particles, options.manualParticles.length);
      }
      async update(delta) {
        const container = this._container, particlesToDelete = /* @__PURE__ */ new Set();
        this.quadTree = new QuadTree_1.QuadTree(qTreeRectangle2(container.canvas.size), qTreeCapacity2);
        for (const [, pathGenerator] of container.pathGenerators) {
          pathGenerator.update();
        }
        for (const [, plugin] of container.plugins) {
          plugin.update && plugin.update(delta);
        }
        for (const particle of this._array) {
          const resizeFactor = container.canvas.resizeFactor;
          if (resizeFactor && !particle.ignoresResizeRatio) {
            particle.position.x *= resizeFactor.width;
            particle.position.y *= resizeFactor.height;
            particle.initialPosition.x *= resizeFactor.width;
            particle.initialPosition.y *= resizeFactor.height;
          }
          particle.ignoresResizeRatio = false;
          await this._interactionManager.reset(particle);
          for (const [, plugin] of this._container.plugins) {
            if (particle.destroyed) {
              break;
            }
            if (plugin.particleUpdate) {
              plugin.particleUpdate(particle, delta);
            }
          }
          for (const mover of this.movers) {
            mover.isEnabled(particle) && mover.move(particle, delta);
          }
          if (particle.destroyed) {
            particlesToDelete.add(particle);
            continue;
          }
          this.quadTree.insert(new Point_1.Point(particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
          const checkDelete = (p) => !particlesToDelete.has(p);
          this._array = this.filter(checkDelete);
          this._zArray = this._zArray.filter(checkDelete);
          this.pool.push(...particlesToDelete);
        }
        await this._interactionManager.externalInteract(delta);
        for (const particle of this._array) {
          for (const updater of this.updaters) {
            updater.update(particle, delta);
          }
          if (!particle.destroyed && !particle.spawning) {
            await this._interactionManager.particlesInteract(particle, delta);
          }
        }
        delete container.canvas.resizeFactor;
        if (this.needsSort) {
          const zArray = this._zArray;
          zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
          this.lastZIndex = zArray[zArray.length - 1].position.z;
          this.needsSort = false;
        }
      }
    };
    exports2.Particles = Particles2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Retina.js
var require_Retina = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Retina.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Retina = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var Utils_1 = require_Utils();
    var Retina2 = class {
      constructor(container) {
        this.container = container;
        this.pixelRatio = 1;
        this.reduceFactor = 1;
      }
      init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, Utils_1.isSsr)() ? 1 : window.devicePixelRatio;
        this.reduceFactor = 1;
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
          const element = container.canvas.element;
          container.canvas.size.width = element.offsetWidth * ratio;
          container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.attractDistance = (0, NumberUtils_1.getRangeValue)(moveOptions.attract.distance) * ratio;
        this.maxSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = (0, NumberUtils_1.getRangeValue)(particles.size.animation.speed) * ratio;
      }
      initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.attractDistance = (0, NumberUtils_1.getRangeValue)(moveOptions.attract.distance) * ratio;
        props.moveDrift = (0, NumberUtils_1.getRangeValue)(moveOptions.drift) * ratio;
        props.moveSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = (0, NumberUtils_1.getRangeValue)(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
        maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
        props.maxSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
      }
    };
    exports2.Retina = Retina2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Container.js
var require_Container = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Container.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Container = void 0;
    var Utils_1 = require_Utils();
    var Canvas_1 = require_Canvas();
    var EventListeners_1 = require_EventListeners();
    var Options_1 = require_Options();
    var Particles_1 = require_Particles();
    var Retina_1 = require_Retina();
    var Constants_1 = require_Constants();
    var NumberUtils_1 = require_NumberUtils();
    var OptionsUtils_1 = require_OptionsUtils();
    function guardCheck2(container) {
      return container && !container.destroyed;
    }
    function initDelta2(value, fpsLimit = 60, smooth = false) {
      return {
        value,
        factor: smooth ? 60 / fpsLimit : 60 * value / 1e3
      };
    }
    function loadContainerOptions2(engine, container, ...sourceOptionsArr) {
      const options = new Options_1.Options(engine, container);
      (0, OptionsUtils_1.loadOptions)(options, ...sourceOptionsArr);
      return options;
    }
    var defaultPathGeneratorKey2 = "default";
    var defaultPathGenerator2 = {
      generate: (p) => p.velocity,
      init: () => {
      },
      update: () => {
      },
      reset: () => {
      }
    };
    var Container2 = class {
      constructor(engine, id, sourceOptions) {
        this.id = id;
        this._intersectionManager = (entries) => {
          if (!guardCheck2(this) || !this.actualOptions.pauseOnOutsideViewport) {
            return;
          }
          for (const entry of entries) {
            if (entry.target !== this.interactivity.element) {
              continue;
            }
            (entry.isIntersecting ? this.play : this.pause)();
          }
        };
        this._nextFrame = async (timestamp) => {
          try {
            if (!this.smooth && this.lastFrameTime !== void 0 && timestamp < this.lastFrameTime + 1e3 / this.fpsLimit) {
              this.draw(false);
              return;
            }
            this.lastFrameTime ?? (this.lastFrameTime = timestamp);
            const delta = initDelta2(timestamp - this.lastFrameTime, this.fpsLimit, this.smooth);
            this.addLifeTime(delta.value);
            this.lastFrameTime = timestamp;
            if (delta.value > 1e3) {
              this.draw(false);
              return;
            }
            await this.particles.draw(delta);
            if (!this.alive()) {
              this.destroy();
              return;
            }
            if (this.getAnimationStatus()) {
              this.draw(false);
            }
          } catch (e) {
            (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} in animation loop`, e);
          }
        };
        this._engine = engine;
        this.fpsLimit = 120;
        this.smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this._engine, this);
        this.pathGenerators = /* @__PURE__ */ new Map();
        this.interactivity = {
          mouse: {
            clicking: false,
            inside: false
          }
        };
        this.plugins = /* @__PURE__ */ new Map();
        this.drawers = /* @__PURE__ */ new Map();
        this._options = loadContainerOptions2(this._engine, this);
        this.actualOptions = loadContainerOptions2(this._engine, this);
        this._eventListeners = new EventListeners_1.EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
          this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
        }
        this._engine.dispatchEvent("containerBuilt", { container: this });
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      addClickHandler(callback) {
        if (!guardCheck2(this)) {
          return;
        }
        const el = this.interactivity.element;
        if (!el) {
          return;
        }
        const clickOrTouchHandler = (e, pos, radius) => {
          if (!guardCheck2(this)) {
            return;
          }
          const pxRatio = this.retina.pixelRatio, posRetina = {
            x: pos.x * pxRatio,
            y: pos.y * pxRatio
          }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
          callback(e, particles);
        };
        const clickHandler = (e) => {
          if (!guardCheck2(this)) {
            return;
          }
          const mouseEvent = e, pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
          clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = () => {
          if (!guardCheck2(this)) {
            return;
          }
          touched = true;
          touchMoved = false;
        };
        const touchMoveHandler = () => {
          if (!guardCheck2(this)) {
            return;
          }
          touchMoved = true;
        };
        const touchEndHandler = (e) => {
          if (!guardCheck2(this)) {
            return;
          }
          if (touched && !touchMoved) {
            const touchEvent = e;
            let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            if (!lastTouch) {
              lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
              if (!lastTouch) {
                return;
              }
            }
            const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, pos = {
              x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
              y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0)
            };
            clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
          }
          touched = false;
          touchMoved = false;
        };
        const touchCancelHandler = () => {
          if (!guardCheck2(this)) {
            return;
          }
          touched = false;
          touchMoved = false;
        };
        let touched = false, touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
      }
      addLifeTime(value) {
        this._lifeTime += value;
      }
      addPath(key, generator, override = false) {
        if (!guardCheck2(this) || !override && this.pathGenerators.has(key)) {
          return false;
        }
        this.pathGenerators.set(key, generator ?? defaultPathGenerator2);
        return true;
      }
      alive() {
        return !this._duration || this._lifeTime <= this._duration;
      }
      destroy() {
        if (!guardCheck2(this)) {
          return;
        }
        this.stop();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
          drawer.destroy && drawer.destroy(this);
        }
        for (const key of this.drawers.keys()) {
          this.drawers.delete(key);
        }
        this._engine.plugins.destroy(this);
        this.destroyed = true;
        const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
        if (idx >= 0) {
          mainArr.splice(idx, 1);
        }
        this._engine.dispatchEvent("containerDestroyed", { container: this });
      }
      draw(force) {
        if (!guardCheck2(this)) {
          return;
        }
        let refreshTime = force;
        this._drawAnimationFrame = requestAnimationFrame(async (timestamp) => {
          if (refreshTime) {
            this.lastFrameTime = void 0;
            refreshTime = false;
          }
          await this._nextFrame(timestamp);
        });
      }
      async export(type, options = {}) {
        for (const [, plugin] of this.plugins) {
          if (!plugin.export) {
            continue;
          }
          const res = await plugin.export(type, options);
          if (!res.supported) {
            continue;
          }
          return res.blob;
        }
        (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} - Export plugin with type ${type} not found`);
      }
      getAnimationStatus() {
        return !this._paused && !this.pageHidden && guardCheck2(this);
      }
      handleClickMode(mode) {
        if (!guardCheck2(this)) {
          return;
        }
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins) {
          plugin.handleClickMode && plugin.handleClickMode(mode);
        }
      }
      async init() {
        if (!guardCheck2(this)) {
          return;
        }
        const shapes = this._engine.plugins.getSupportedShapes();
        for (const type of shapes) {
          const drawer = this._engine.plugins.getShapeDrawer(type);
          if (drawer) {
            this.drawers.set(type, drawer);
          }
        }
        this._options = loadContainerOptions2(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions2(this._engine, this, this._options);
        const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins) {
          this.plugins.set(id, plugin);
        }
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this._duration = (0, NumberUtils_1.getRangeValue)(this.actualOptions.duration) * 1e3;
        this._delay = (0, NumberUtils_1.getRangeValue)(this.actualOptions.delay) * 1e3;
        this._lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
        this.smooth = this.actualOptions.smooth;
        for (const [, drawer] of this.drawers) {
          drawer.init && await drawer.init(this);
        }
        for (const [, plugin] of this.plugins) {
          plugin.init && await plugin.init();
        }
        this._engine.dispatchEvent("containerInit", { container: this });
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins) {
          plugin.particlesSetup && plugin.particlesSetup();
        }
        this._engine.dispatchEvent("particlesSetup", { container: this });
      }
      async loadTheme(name) {
        if (!guardCheck2(this)) {
          return;
        }
        this._currentTheme = name;
        await this.refresh();
      }
      pause() {
        if (!guardCheck2(this)) {
          return;
        }
        if (this._drawAnimationFrame !== void 0) {
          cancelAnimationFrame(this._drawAnimationFrame);
          delete this._drawAnimationFrame;
        }
        if (this._paused) {
          return;
        }
        for (const [, plugin] of this.plugins) {
          plugin.pause && plugin.pause();
        }
        if (!this.pageHidden) {
          this._paused = true;
        }
        this._engine.dispatchEvent("containerPaused", { container: this });
      }
      play(force) {
        if (!guardCheck2(this)) {
          return;
        }
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
          this._firstStart = false;
          return;
        }
        if (this._paused) {
          this._paused = false;
        }
        if (needsUpdate) {
          for (const [, plugin] of this.plugins) {
            if (plugin.play) {
              plugin.play();
            }
          }
        }
        this._engine.dispatchEvent("containerPlay", { container: this });
        this.draw(needsUpdate || false);
      }
      async refresh() {
        if (!guardCheck2(this)) {
          return;
        }
        this.stop();
        return this.start();
      }
      async reset() {
        if (!guardCheck2(this)) {
          return;
        }
        this._initialSourceOptions = void 0;
        this._options = loadContainerOptions2(this._engine, this);
        this.actualOptions = loadContainerOptions2(this._engine, this, this._options);
        return this.refresh();
      }
      setNoise(noiseOrGenerator, init2, update) {
        if (!guardCheck2(this)) {
          return;
        }
        this.setPath(noiseOrGenerator, init2, update);
      }
      setPath(pathOrGenerator, init2, update) {
        if (!pathOrGenerator || !guardCheck2(this)) {
          return;
        }
        const pathGenerator = { ...defaultPathGenerator2 };
        if ((0, Utils_1.isFunction)(pathOrGenerator)) {
          pathGenerator.generate = pathOrGenerator;
          if (init2) {
            pathGenerator.init = init2;
          }
          if (update) {
            pathGenerator.update = update;
          }
        } else {
          const oldGenerator = pathGenerator;
          pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
          pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
          pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
        }
        this.addPath(defaultPathGeneratorKey2, pathGenerator, true);
      }
      async start() {
        if (!guardCheck2(this) || this.started) {
          return;
        }
        await this.init();
        this.started = true;
        await new Promise((resolve) => {
          this._delayTimeout = setTimeout(async () => {
            this._eventListeners.addListeners();
            if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
              this._intersectionObserver.observe(this.interactivity.element);
            }
            for (const [, plugin] of this.plugins) {
              plugin.start && await plugin.start();
            }
            this._engine.dispatchEvent("containerStarted", { container: this });
            this.play();
            resolve();
          }, this._delay);
        });
      }
      stop() {
        if (!guardCheck2(this) || !this.started) {
          return;
        }
        if (this._delayTimeout) {
          clearTimeout(this._delayTimeout);
          delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
          this._intersectionObserver.unobserve(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
          plugin.stop && plugin.stop();
        }
        for (const key of this.plugins.keys()) {
          this.plugins.delete(key);
        }
        this._sourceOptions = this._options;
        this._engine.dispatchEvent("containerStopped", { container: this });
      }
      updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this.responsiveMaxWidth === newMaxWidth) {
          return false;
        }
        this.responsiveMaxWidth = newMaxWidth;
        return true;
      }
    };
    exports2.Container = Container2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/EventDispatcher.js
var require_EventDispatcher = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/EventDispatcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventDispatcher = void 0;
    var EventDispatcher2 = class {
      constructor() {
        this._listeners = /* @__PURE__ */ new Map();
      }
      addEventListener(type, listener) {
        this.removeEventListener(type, listener);
        let arr = this._listeners.get(type);
        if (!arr) {
          arr = [];
          this._listeners.set(type, arr);
        }
        arr.push(listener);
      }
      dispatchEvent(type, args) {
        const listeners = this._listeners.get(type);
        listeners && listeners.forEach((handler) => handler(args));
      }
      hasEventListener(type) {
        return !!this._listeners.get(type);
      }
      removeAllEventListeners(type) {
        if (!type) {
          this._listeners = /* @__PURE__ */ new Map();
        } else {
          this._listeners.delete(type);
        }
      }
      removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) {
          return;
        }
        const length = arr.length, idx = arr.indexOf(listener);
        if (idx < 0) {
          return;
        }
        if (length === 1) {
          this._listeners.delete(type);
        } else {
          arr.splice(idx, 1);
        }
      }
    };
    exports2.EventDispatcher = EventDispatcher2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/Plugins.js
var require_Plugins = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/Plugins.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Plugins = void 0;
    var Utils_1 = require_Utils();
    function getItemsFromInitializer2(container, map, initializers, force = false) {
      let res = map.get(container);
      if (!res || force) {
        res = [...initializers.values()].map((t) => t(container));
        map.set(container, res);
      }
      return res;
    }
    var Plugins2 = class {
      constructor(engine) {
        this._engine = engine;
        this.plugins = [];
        this._initializers = {
          interactors: /* @__PURE__ */ new Map(),
          movers: /* @__PURE__ */ new Map(),
          updaters: /* @__PURE__ */ new Map()
        };
        this.interactors = /* @__PURE__ */ new Map();
        this.movers = /* @__PURE__ */ new Map();
        this.updaters = /* @__PURE__ */ new Map();
        this.presets = /* @__PURE__ */ new Map();
        this.drawers = /* @__PURE__ */ new Map();
        this.pathGenerators = /* @__PURE__ */ new Map();
      }
      addInteractor(name, initInteractor) {
        this._initializers.interactors.set(name, initInteractor);
      }
      addParticleMover(name, initMover) {
        this._initializers.movers.set(name, initMover);
      }
      addParticleUpdater(name, initUpdater) {
        this._initializers.updaters.set(name, initUpdater);
      }
      addPathGenerator(type, pathGenerator) {
        !this.getPathGenerator(type) && this.pathGenerators.set(type, pathGenerator);
      }
      addPlugin(plugin) {
        !this.getPlugin(plugin.id) && this.plugins.push(plugin);
      }
      addPreset(presetKey, options, override = false) {
        (override || !this.getPreset(presetKey)) && this.presets.set(presetKey, options);
      }
      addShapeDrawer(types, drawer) {
        (0, Utils_1.executeOnSingleOrMultiple)(types, (type) => {
          !this.getShapeDrawer(type) && this.drawers.set(type, drawer);
        });
      }
      destroy(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
      }
      getAvailablePlugins(container) {
        const res = /* @__PURE__ */ new Map();
        for (const plugin of this.plugins) {
          plugin.needsPlugin(container.actualOptions) && res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
      }
      getInteractors(container, force = false) {
        return getItemsFromInitializer2(container, this.interactors, this._initializers.interactors, force);
      }
      getMovers(container, force = false) {
        return getItemsFromInitializer2(container, this.movers, this._initializers.movers, force);
      }
      getPathGenerator(type) {
        return this.pathGenerators.get(type);
      }
      getPlugin(plugin) {
        return this.plugins.find((t) => t.id === plugin);
      }
      getPreset(preset) {
        return this.presets.get(preset);
      }
      getShapeDrawer(type) {
        return this.drawers.get(type);
      }
      getSupportedShapes() {
        return this.drawers.keys();
      }
      getUpdaters(container, force = false) {
        return getItemsFromInitializer2(container, this.updaters, this._initializers.updaters, force);
      }
      loadOptions(options, sourceOptions) {
        for (const plugin of this.plugins) {
          plugin.loadOptions(options, sourceOptions);
        }
      }
      loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) {
          return;
        }
        for (const updater of updaters) {
          updater.loadOptions && updater.loadOptions(options, ...sourceOptions);
        }
      }
    };
    exports2.Plugins = Plugins2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Engine.js
var require_Engine = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Engine.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Engine = void 0;
    var Constants_1 = require_Constants();
    var Utils_1 = require_Utils();
    var Container_1 = require_Container();
    var EventDispatcher_1 = require_EventDispatcher();
    var Plugins_1 = require_Plugins();
    var NumberUtils_1 = require_NumberUtils();
    async function getDataFromUrl2(data) {
      const url = (0, Utils_1.itemFromSingleOrMultiple)(data.url, data.index);
      if (!url) {
        return data.fallback;
      }
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }
      (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} ${response.status} while retrieving config file`);
      return data.fallback;
    }
    function isParamsEmpty2(params) {
      return !params.id && !params.element && !params.url && !params.options;
    }
    function isParams2(obj) {
      return !isParamsEmpty2(obj);
    }
    var Engine2 = class {
      constructor() {
        this._configs = /* @__PURE__ */ new Map();
        this._domArray = [];
        this._eventDispatcher = new EventDispatcher_1.EventDispatcher();
        this._initialized = false;
        this.plugins = new Plugins_1.Plugins(this);
      }
      get configs() {
        const res = {};
        for (const [name, config] of this._configs) {
          res[name] = config;
        }
        return res;
      }
      get version() {
        return "2.12.0";
      }
      addConfig(nameOrConfig, config) {
        if ((0, Utils_1.isString)(nameOrConfig)) {
          if (config) {
            config.name = nameOrConfig;
            this._configs.set(nameOrConfig, config);
          }
        } else {
          this._configs.set(nameOrConfig.name ?? "default", nameOrConfig);
        }
      }
      addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
      }
      async addInteractor(name, interactorInitializer, refresh = true) {
        this.plugins.addInteractor(name, interactorInitializer);
        await this.refresh(refresh);
      }
      async addMover(name, moverInitializer, refresh = true) {
        this.plugins.addParticleMover(name, moverInitializer);
        await this.refresh(refresh);
      }
      async addParticleUpdater(name, updaterInitializer, refresh = true) {
        this.plugins.addParticleUpdater(name, updaterInitializer);
        await this.refresh(refresh);
      }
      async addPathGenerator(name, generator, refresh = true) {
        this.plugins.addPathGenerator(name, generator);
        await this.refresh(refresh);
      }
      async addPlugin(plugin, refresh = true) {
        this.plugins.addPlugin(plugin);
        await this.refresh(refresh);
      }
      async addPreset(preset, options, override = false, refresh = true) {
        this.plugins.addPreset(preset, options, override);
        await this.refresh(refresh);
      }
      async addShape(shape, drawer, initOrRefresh, afterEffectOrRefresh, destroyOrRefresh, refresh = true) {
        let customDrawer;
        let realRefresh = refresh, realInit, realAfterEffect, realDestroy;
        if ((0, Utils_1.isBoolean)(initOrRefresh)) {
          realRefresh = initOrRefresh;
          realInit = void 0;
        } else {
          realInit = initOrRefresh;
        }
        if ((0, Utils_1.isBoolean)(afterEffectOrRefresh)) {
          realRefresh = afterEffectOrRefresh;
          realAfterEffect = void 0;
        } else {
          realAfterEffect = afterEffectOrRefresh;
        }
        if ((0, Utils_1.isBoolean)(destroyOrRefresh)) {
          realRefresh = destroyOrRefresh;
          realDestroy = void 0;
        } else {
          realDestroy = destroyOrRefresh;
        }
        if ((0, Utils_1.isFunction)(drawer)) {
          customDrawer = {
            afterEffect: realAfterEffect,
            destroy: realDestroy,
            draw: drawer,
            init: realInit
          };
        } else {
          customDrawer = drawer;
        }
        this.plugins.addShapeDrawer(shape, customDrawer);
        await this.refresh(realRefresh);
      }
      dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
      }
      dom() {
        return this._domArray;
      }
      domItem(index) {
        const dom = this.dom(), item = dom[index];
        if (!item || item.destroyed) {
          dom.splice(index, 1);
          return;
        }
        return item;
      }
      init() {
        if (this._initialized) {
          return;
        }
        this._initialized = true;
      }
      async load(tagIdOrOptionsOrParams, options) {
        return this.loadFromArray(tagIdOrOptionsOrParams, options);
      }
      async loadFromArray(tagIdOrOptionsOrParams, optionsOrIndex, index) {
        let params;
        if (!isParams2(tagIdOrOptionsOrParams)) {
          params = {};
          if ((0, Utils_1.isString)(tagIdOrOptionsOrParams)) {
            params.id = tagIdOrOptionsOrParams;
          } else {
            params.options = tagIdOrOptionsOrParams;
          }
          if ((0, Utils_1.isNumber)(optionsOrIndex)) {
            params.index = optionsOrIndex;
          } else {
            params.options = optionsOrIndex ?? params.options;
          }
          params.index = index ?? params.index;
        } else {
          params = tagIdOrOptionsOrParams;
        }
        return this._loadParams(params);
      }
      async loadJSON(tagId, pathConfigJson, index) {
        let url, id;
        if ((0, Utils_1.isNumber)(pathConfigJson) || pathConfigJson === void 0) {
          url = tagId;
        } else {
          id = tagId;
          url = pathConfigJson;
        }
        return this._loadParams({ id, url, index });
      }
      async refresh(refresh = true) {
        if (!refresh) {
          return;
        }
        this.dom().forEach((t) => t.refresh());
      }
      removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
      }
      async set(id, element, options, index) {
        const params = { index };
        if ((0, Utils_1.isString)(id)) {
          params.id = id;
        } else {
          params.element = id;
        }
        if (element instanceof HTMLElement) {
          params.element = element;
        } else {
          params.options = element;
        }
        if ((0, Utils_1.isNumber)(options)) {
          params.index = options;
        } else {
          params.options = options ?? params.options;
        }
        return this._loadParams(params);
      }
      async setJSON(id, element, pathConfigJson, index) {
        const params = {};
        if (id instanceof HTMLElement) {
          params.element = id;
          params.url = element;
          params.index = pathConfigJson;
        } else {
          params.id = id;
          params.element = element;
          params.url = pathConfigJson;
          params.index = index;
        }
        return this._loadParams(params);
      }
      setOnClickHandler(callback) {
        const dom = this.dom();
        if (!dom.length) {
          throw new Error(`${Constants_1.errorPrefix} can only set click handlers after calling tsParticles.load()`);
        }
        for (const domItem of dom) {
          domItem.addClickHandler(callback);
        }
      }
      async _loadParams(params) {
        const id = params.id ?? `tsparticles${Math.floor((0, NumberUtils_1.getRandom)() * 1e4)}`, { index, url } = params, options = url ? await getDataFromUrl2({ fallback: params.options, url, index }) : params.options;
        let domContainer = params.element ?? document.getElementById(id);
        if (!domContainer) {
          domContainer = document.createElement("div");
          domContainer.id = id;
          document.body.append(domContainer);
        }
        const currentOptions = (0, Utils_1.itemFromSingleOrMultiple)(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id === id);
        if (oldIndex >= 0) {
          const old = this.domItem(oldIndex);
          if (old && !old.destroyed) {
            old.destroy();
            dom.splice(oldIndex, 1);
          }
        }
        let canvasEl;
        if (domContainer.tagName.toLowerCase() === "canvas") {
          canvasEl = domContainer;
          canvasEl.dataset[Constants_1.generatedAttribute] = "false";
        } else {
          const existingCanvases = domContainer.getElementsByTagName("canvas");
          if (existingCanvases.length) {
            canvasEl = existingCanvases[0];
            canvasEl.dataset[Constants_1.generatedAttribute] = "false";
          } else {
            canvasEl = document.createElement("canvas");
            canvasEl.dataset[Constants_1.generatedAttribute] = "true";
            domContainer.appendChild(canvasEl);
          }
        }
        if (!canvasEl.style.width) {
          canvasEl.style.width = "100%";
        }
        if (!canvasEl.style.height) {
          canvasEl.style.height = "100%";
        }
        const newItem = new Container_1.Container(this, id, currentOptions);
        if (oldIndex >= 0) {
          dom.splice(oldIndex, 0, newItem);
        } else {
          dom.push(newItem);
        }
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
      }
    };
    exports2.Engine = Engine2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/HslColorManager.js
var require_HslColorManager = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/HslColorManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HslColorManager = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var ColorUtils_1 = require_ColorUtils();
    var HslColorManager2 = class {
      constructor() {
        this.key = "hsl";
        this.stringPrefix = "hsl";
      }
      handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
          return (0, ColorUtils_1.hslToRgb)(hslColor);
        }
      }
      handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== void 0 && hslColor.l !== void 0) {
          return (0, ColorUtils_1.hslToRgb)({
            h: (0, NumberUtils_1.getRangeValue)(hslColor.h),
            l: (0, NumberUtils_1.getRangeValue)(hslColor.l),
            s: (0, NumberUtils_1.getRangeValue)(hslColor.s)
          });
        }
      }
      parseString(input) {
        if (!input.startsWith("hsl")) {
          return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result ? (0, ColorUtils_1.hslaToRgba)({
          a: result.length > 4 ? (0, NumberUtils_1.parseAlpha)(result[5]) : 1,
          h: parseInt(result[1], 10),
          l: parseInt(result[3], 10),
          s: parseInt(result[2], 10)
        }) : void 0;
      }
    };
    exports2.HslColorManager = HslColorManager2;
  }
});

// node_modules/tsparticles-engine/cjs/Utils/RgbColorManager.js
var require_RgbColorManager = __commonJS({
  "node_modules/tsparticles-engine/cjs/Utils/RgbColorManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RgbColorManager = void 0;
    var NumberUtils_1 = require_NumberUtils();
    var RgbColorManager2 = class {
      constructor() {
        this.key = "rgb";
        this.stringPrefix = "rgb";
      }
      handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== void 0) {
          return rgbColor;
        }
      }
      handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== void 0) {
          return {
            r: (0, NumberUtils_1.getRangeValue)(rgbColor.r),
            g: (0, NumberUtils_1.getRangeValue)(rgbColor.g),
            b: (0, NumberUtils_1.getRangeValue)(rgbColor.b)
          };
        }
      }
      parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
          return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result ? {
          a: result.length > 4 ? (0, NumberUtils_1.parseAlpha)(result[5]) : 1,
          b: parseInt(result[3], 10),
          g: parseInt(result[2], 10),
          r: parseInt(result[1], 10)
        } : void 0;
      }
    };
    exports2.RgbColorManager = RgbColorManager2;
  }
});

// node_modules/tsparticles-engine/cjs/init.js
var require_init = __commonJS({
  "node_modules/tsparticles-engine/cjs/init.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.init = void 0;
    var Engine_1 = require_Engine();
    var HslColorManager_1 = require_HslColorManager();
    var RgbColorManager_1 = require_RgbColorManager();
    var ColorUtils_1 = require_ColorUtils();
    function init2() {
      const rgbColorManager = new RgbColorManager_1.RgbColorManager(), hslColorManager = new HslColorManager_1.HslColorManager();
      (0, ColorUtils_1.addColorManager)(rgbColorManager);
      (0, ColorUtils_1.addColorManager)(hslColorManager);
      const engine = new Engine_1.Engine();
      engine.init();
      return engine;
    }
    exports2.init = init2;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/ExternalInteractorBase.js
var require_ExternalInteractorBase = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/ExternalInteractorBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExternalInteractorBase = void 0;
    var ExternalInteractorBase = class {
      constructor(container) {
        this.container = container;
        this.type = "external";
      }
    };
    exports2.ExternalInteractorBase = ExternalInteractorBase;
  }
});

// node_modules/tsparticles-engine/cjs/Core/Utils/ParticlesInteractorBase.js
var require_ParticlesInteractorBase = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Utils/ParticlesInteractorBase.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ParticlesInteractorBase = void 0;
    var ParticlesInteractorBase = class {
      constructor(container) {
        this.container = container;
        this.type = "particles";
      }
    };
    exports2.ParticlesInteractorBase = ParticlesInteractorBase;
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Directions/MoveDirection.js
var require_MoveDirection = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Directions/MoveDirection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Directions/RotateDirection.js
var require_RotateDirection = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Directions/RotateDirection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Directions/OutModeDirection.js
var require_OutModeDirection = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Directions/OutModeDirection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/AnimationMode.js
var require_AnimationMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/AnimationMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/ClickMode.js
var require_ClickMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/ClickMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/DivMode.js
var require_DivMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/DivMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/HoverMode.js
var require_HoverMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/HoverMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/CollisionMode.js
var require_CollisionMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/CollisionMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/OutMode.js
var require_OutMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/OutMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/PixelMode.js
var require_PixelMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/PixelMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/ThemeMode.js
var require_ThemeMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/ThemeMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Modes/ResponsiveMode.js
var require_ResponsiveMode = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Modes/ResponsiveMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/AlterType.js
var require_AlterType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/AlterType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/DestroyType.js
var require_DestroyType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/DestroyType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/GradientType.js
var require_GradientType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/GradientType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/InteractorType.js
var require_InteractorType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/InteractorType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/ParticleOutType.js
var require_ParticleOutType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/ParticleOutType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/StartValueType.js
var require_StartValueType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/StartValueType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/DivType.js
var require_DivType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/DivType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/EasingType.js
var require_EasingType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/EasingType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/Types/EventType.js
var require_EventType = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/Types/EventType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/AnimationStatus.js
var require_AnimationStatus = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/AnimationStatus.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Enums/InteractivityDetect.js
var require_InteractivityDetect = __commonJS({
  "node_modules/tsparticles-engine/cjs/Enums/InteractivityDetect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/exports.js
var require_exports = __commonJS({
  "node_modules/tsparticles-engine/cjs/exports.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_Circle(), exports2);
    __exportStar(require_Constants(), exports2);
    __exportStar(require_ExternalInteractorBase(), exports2);
    __exportStar(require_ParticlesInteractorBase(), exports2);
    __exportStar(require_Point(), exports2);
    __exportStar(require_Range(), exports2);
    __exportStar(require_Rectangle(), exports2);
    __exportStar(require_Vector(), exports2);
    __exportStar(require_Vector3d(), exports2);
    __exportStar(require_MoveDirection(), exports2);
    __exportStar(require_RotateDirection(), exports2);
    __exportStar(require_OutModeDirection(), exports2);
    __exportStar(require_AnimationMode(), exports2);
    __exportStar(require_ClickMode(), exports2);
    __exportStar(require_DivMode(), exports2);
    __exportStar(require_HoverMode(), exports2);
    __exportStar(require_CollisionMode(), exports2);
    __exportStar(require_OutMode(), exports2);
    __exportStar(require_PixelMode(), exports2);
    __exportStar(require_ThemeMode(), exports2);
    __exportStar(require_ResponsiveMode(), exports2);
    __exportStar(require_AlterType(), exports2);
    __exportStar(require_DestroyType(), exports2);
    __exportStar(require_GradientType(), exports2);
    __exportStar(require_InteractorType(), exports2);
    __exportStar(require_ParticleOutType(), exports2);
    __exportStar(require_StartValueType(), exports2);
    __exportStar(require_DivType(), exports2);
    __exportStar(require_EasingType(), exports2);
    __exportStar(require_EventType(), exports2);
    __exportStar(require_AnimationStatus(), exports2);
    __exportStar(require_InteractivityDetect(), exports2);
    __exportStar(require_AnimatableColor(), exports2);
    __exportStar(require_AnimationOptions(), exports2);
    __exportStar(require_Background(), exports2);
    __exportStar(require_BackgroundMask(), exports2);
    __exportStar(require_BackgroundMaskCover(), exports2);
    __exportStar(require_ColorAnimation(), exports2);
    __exportStar(require_FullScreen(), exports2);
    __exportStar(require_HslAnimation(), exports2);
    __exportStar(require_ClickEvent(), exports2);
    __exportStar(require_DivEvent(), exports2);
    __exportStar(require_ClickEvent(), exports2);
    __exportStar(require_DivEvent(), exports2);
    __exportStar(require_Events(), exports2);
    __exportStar(require_HoverEvent(), exports2);
    __exportStar(require_Parallax(), exports2);
    __exportStar(require_ResizeEvent(), exports2);
    __exportStar(require_Interactivity(), exports2);
    __exportStar(require_Modes(), exports2);
    __exportStar(require_ManualParticle(), exports2);
    __exportStar(require_Options(), exports2);
    __exportStar(require_OptionsColor(), exports2);
    __exportStar(require_ParticlesBounce(), exports2);
    __exportStar(require_ParticlesBounceFactor(), exports2);
    __exportStar(require_Collisions(), exports2);
    __exportStar(require_CollisionsAbsorb(), exports2);
    __exportStar(require_CollisionsOverlap(), exports2);
    __exportStar(require_ParticlesOptions(), exports2);
    __exportStar(require_Shadow(), exports2);
    __exportStar(require_Stroke(), exports2);
    __exportStar(require_MoveAttract(), exports2);
    __exportStar(require_Move(), exports2);
    __exportStar(require_MoveAngle(), exports2);
    __exportStar(require_MoveCenter(), exports2);
    __exportStar(require_MoveGravity(), exports2);
    __exportStar(require_OutModes(), exports2);
    __exportStar(require_MovePath(), exports2);
    __exportStar(require_Spin(), exports2);
    __exportStar(require_MoveTrail(), exports2);
    __exportStar(require_ParticlesNumber(), exports2);
    __exportStar(require_ParticlesDensity(), exports2);
    __exportStar(require_Opacity(), exports2);
    __exportStar(require_OpacityAnimation(), exports2);
    __exportStar(require_Shape(), exports2);
    __exportStar(require_Size(), exports2);
    __exportStar(require_SizeAnimation(), exports2);
    __exportStar(require_ZIndex(), exports2);
    __exportStar(require_Responsive(), exports2);
    __exportStar(require_Theme(), exports2);
    __exportStar(require_ThemeDefault(), exports2);
    __exportStar(require_ValueWithRandom(), exports2);
    __exportStar(require_CanvasUtils(), exports2);
    __exportStar(require_ColorUtils(), exports2);
    __exportStar(require_HslColorManager(), exports2);
    __exportStar(require_NumberUtils(), exports2);
    __exportStar(require_OptionsUtils(), exports2);
    __exportStar(require_RgbColorManager(), exports2);
    __exportStar(require_Utils(), exports2);
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/Colors.js
var require_Colors = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/Colors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IBounds.js
var require_IBounds = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IBounds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IBubbleParticleData.js
var require_IBubbleParticleData = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IBubbleParticleData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/ICircleBouncer.js
var require_ICircleBouncer = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/ICircleBouncer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IColorManager.js
var require_IColorManager = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IColorManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IContainerInteractivity.js
var require_IContainerInteractivity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IContainerInteractivity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IContainerPlugin.js
var require_IContainerPlugin = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IContainerPlugin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/ICoordinates.js
var require_ICoordinates = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/ICoordinates.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IDelta.js
var require_IDelta = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IDelta.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IDimension.js
var require_IDimension = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IDimension.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IDistance.js
var require_IDistance = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IDistance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IDrawParticleParams.js
var require_IDrawParticleParams = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IDrawParticleParams.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IExternalInteractor.js
var require_IExternalInteractor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IExternalInteractor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IInteractor.js
var require_IInteractor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IInteractor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/ILoadParams.js
var require_ILoadParams = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/ILoadParams.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IMouseData.js
var require_IMouseData = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IMouseData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IMovePathGenerator.js
var require_IMovePathGenerator = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IMovePathGenerator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticle.js
var require_IParticle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleColorStyle.js
var require_IParticleColorStyle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleColorStyle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleHslAnimation.js
var require_IParticleHslAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleHslAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleLife.js
var require_IParticleLife = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleLife.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleMover.js
var require_IParticleMover = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleMover.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleRetinaProps.js
var require_IParticleRetinaProps = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleRetinaProps.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleRoll.js
var require_IParticleRoll = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleRoll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleTransformValues.js
var require_IParticleTransformValues = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleTransformValues.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleUpdater.js
var require_IParticleUpdater = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleValueAnimation.js
var require_IParticleValueAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticleValueAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticlesInteractor.js
var require_IParticlesInteractor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IParticlesInteractor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IPlugin.js
var require_IPlugin = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IPlugin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IPositionFromSizeParams.js
var require_IPositionFromSizeParams = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IPositionFromSizeParams.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IRangeValue.js
var require_IRangeValue = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IRangeValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IRectSideResult.js
var require_IRectSideResult = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IRectSideResult.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IShapeDrawer.js
var require_IShapeDrawer = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IShapeDrawer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/IShapeValues.js
var require_IShapeValues = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/IShapeValues.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/ISlowParticleData.js
var require_ISlowParticleData = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/ISlowParticleData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Core/Interfaces/ITrailFillData.js
var require_ITrailFillData = __commonJS({
  "node_modules/tsparticles-engine/cjs/Core/Interfaces/ITrailFillData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Background/IBackground.js
var require_IBackground = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Background/IBackground.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/BackgroundMask/IBackgroundMask.js
var require_IBackgroundMask = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/BackgroundMask/IBackgroundMask.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js
var require_IBackgroundMaskCover = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/FullScreen/IFullScreen.js
var require_IFullScreen = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/FullScreen/IFullScreen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimatable.js
var require_IAnimatable = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimatable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimatableColor.js
var require_IAnimatableColor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimatableColor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimation.js
var require_IAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IColorAnimation.js
var require_IColorAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IColorAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IHslAnimation.js
var require_IHslAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IHslAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IManualParticle.js
var require_IManualParticle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IManualParticle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptionLoader.js
var require_IOptionLoader = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptionLoader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptions.js
var require_IOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptionsColor.js
var require_IOptionsColor = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IOptionsColor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IResponsive.js
var require_IResponsive = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IResponsive.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/IValueWithRandom.js
var require_IValueWithRandom = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/IValueWithRandom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IClickEvent.js
var require_IClickEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IClickEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IDivEvent.js
var require_IDivEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IDivEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IEvents.js
var require_IEvents = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IEvents.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IHoverEvent.js
var require_IHoverEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IHoverEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IParallax.js
var require_IParallax = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IParallax.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IResizeEvent.js
var require_IResizeEvent = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Events/IResizeEvent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Modes/IModeDiv.js
var require_IModeDiv = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Modes/IModeDiv.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Modes/IModes.js
var require_IModes = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/Modes/IModes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/IInteractivity.js
var require_IInteractivity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Interactivity/IInteractivity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Bounce/IParticlesBounce.js
var require_IParticlesBounce = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Bounce/IParticlesBounce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisions.js
var require_ICollisions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js
var require_ICollisionsAbsorb = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js
var require_ICollisionsOverlap = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IParticlesOptions.js
var require_IParticlesOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IParticlesOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IShadow.js
var require_IShadow = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IShadow.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IStroke.js
var require_IStroke = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/IStroke.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveAttract.js
var require_IMoveAttract = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveAttract.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMove.js
var require_IMove = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMove.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveAngle.js
var require_IMoveAngle = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveAngle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveCenter.js
var require_IMoveCenter = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveCenter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveGravity.js
var require_IMoveGravity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveGravity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/Path/IMovePath.js
var require_IMovePath = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/Path/IMovePath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IOutModes.js
var require_IOutModes = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IOutModes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/ISpin.js
var require_ISpin = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/ISpin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveTrail.js
var require_IMoveTrail = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Move/IMoveTrail.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Number/IParticlesDensity.js
var require_IParticlesDensity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Number/IParticlesDensity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Number/IParticlesNumber.js
var require_IParticlesNumber = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Number/IParticlesNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Opacity/IOpacity.js
var require_IOpacity = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Opacity/IOpacity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js
var require_IOpacityAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Opacity/IOpacityAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/ICharacterShape.js
var require_ICharacterShape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/ICharacterShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IImageShape.js
var require_IImageShape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IImageShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IPolygonShape.js
var require_IPolygonShape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IPolygonShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IShape.js
var require_IShape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IShapeValues.js
var require_IShapeValues2 = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IShapeValues.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_IShapeValues(), exports2);
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IStarShape.js
var require_IStarShape = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Shape/IStarShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Size/ISize.js
var require_ISize = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Size/ISize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Size/ISizeAnimation.js
var require_ISizeAnimation = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/Size/ISizeAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/ZIndex/IZIndex.js
var require_IZIndex = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Particles/ZIndex/IZIndex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Theme/ITheme.js
var require_ITheme = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Theme/ITheme.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Options/Interfaces/Theme/IThemeDefault.js
var require_IThemeDefault = __commonJS({
  "node_modules/tsparticles-engine/cjs/Options/Interfaces/Theme/IThemeDefault.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/CustomEventArgs.js
var require_CustomEventArgs = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/CustomEventArgs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/CustomEventListener.js
var require_CustomEventListener = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/CustomEventListener.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/ExportResult.js
var require_ExportResult = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/ExportResult.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/ISourceOptions.js
var require_ISourceOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/ISourceOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/ParticlesGroups.js
var require_ParticlesGroups = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/ParticlesGroups.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/PathOptions.js
var require_PathOptions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/PathOptions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/RangeValue.js
var require_RangeValue = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/RangeValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/RecursivePartial.js
var require_RecursivePartial = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/RecursivePartial.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/ShapeData.js
var require_ShapeData = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/ShapeData.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/ShapeDrawerFunctions.js
var require_ShapeDrawerFunctions = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/ShapeDrawerFunctions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/Types/SingleOrMultiple.js
var require_SingleOrMultiple = __commonJS({
  "node_modules/tsparticles-engine/cjs/Types/SingleOrMultiple.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-engine/cjs/export-types.js
var require_export_types = __commonJS({
  "node_modules/tsparticles-engine/cjs/export-types.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_Colors(), exports2);
    __exportStar(require_IBounds(), exports2);
    __exportStar(require_IBubbleParticleData(), exports2);
    __exportStar(require_ICircleBouncer(), exports2);
    __exportStar(require_IColorManager(), exports2);
    __exportStar(require_IContainerInteractivity(), exports2);
    __exportStar(require_IContainerPlugin(), exports2);
    __exportStar(require_ICoordinates(), exports2);
    __exportStar(require_IDelta(), exports2);
    __exportStar(require_IDimension(), exports2);
    __exportStar(require_IDistance(), exports2);
    __exportStar(require_IDrawParticleParams(), exports2);
    __exportStar(require_IExternalInteractor(), exports2);
    __exportStar(require_IInteractor(), exports2);
    __exportStar(require_ILoadParams(), exports2);
    __exportStar(require_IMouseData(), exports2);
    __exportStar(require_IMovePathGenerator(), exports2);
    __exportStar(require_IParticle(), exports2);
    __exportStar(require_IParticleColorStyle(), exports2);
    __exportStar(require_IParticleHslAnimation(), exports2);
    __exportStar(require_IParticleLife(), exports2);
    __exportStar(require_IParticleMover(), exports2);
    __exportStar(require_IParticleRetinaProps(), exports2);
    __exportStar(require_IParticleRoll(), exports2);
    __exportStar(require_IParticleTransformValues(), exports2);
    __exportStar(require_IParticleUpdater(), exports2);
    __exportStar(require_IParticleValueAnimation(), exports2);
    __exportStar(require_IParticlesInteractor(), exports2);
    __exportStar(require_IPlugin(), exports2);
    __exportStar(require_IPositionFromSizeParams(), exports2);
    __exportStar(require_IRangeValue(), exports2);
    __exportStar(require_IRectSideResult(), exports2);
    __exportStar(require_IShapeDrawer(), exports2);
    __exportStar(require_IShapeValues(), exports2);
    __exportStar(require_ISlowParticleData(), exports2);
    __exportStar(require_ITrailFillData(), exports2);
    __exportStar(require_IBackground(), exports2);
    __exportStar(require_IBackgroundMask(), exports2);
    __exportStar(require_IBackgroundMaskCover(), exports2);
    __exportStar(require_IFullScreen(), exports2);
    __exportStar(require_IAnimatable(), exports2);
    __exportStar(require_IAnimatableColor(), exports2);
    __exportStar(require_IAnimation(), exports2);
    __exportStar(require_IColorAnimation(), exports2);
    __exportStar(require_IHslAnimation(), exports2);
    __exportStar(require_IManualParticle(), exports2);
    __exportStar(require_IOptionLoader(), exports2);
    __exportStar(require_IOptions(), exports2);
    __exportStar(require_IOptionsColor(), exports2);
    __exportStar(require_IResponsive(), exports2);
    __exportStar(require_IValueWithRandom(), exports2);
    __exportStar(require_IClickEvent(), exports2);
    __exportStar(require_IDivEvent(), exports2);
    __exportStar(require_IEvents(), exports2);
    __exportStar(require_IHoverEvent(), exports2);
    __exportStar(require_IParallax(), exports2);
    __exportStar(require_IResizeEvent(), exports2);
    __exportStar(require_IModeDiv(), exports2);
    __exportStar(require_IModes(), exports2);
    __exportStar(require_IInteractivity(), exports2);
    __exportStar(require_IParticlesBounce(), exports2);
    __exportStar(require_ICollisions(), exports2);
    __exportStar(require_ICollisionsAbsorb(), exports2);
    __exportStar(require_ICollisionsOverlap(), exports2);
    __exportStar(require_IParticlesOptions(), exports2);
    __exportStar(require_IShadow(), exports2);
    __exportStar(require_IStroke(), exports2);
    __exportStar(require_IMoveAttract(), exports2);
    __exportStar(require_IMove(), exports2);
    __exportStar(require_IMoveAngle(), exports2);
    __exportStar(require_IMoveCenter(), exports2);
    __exportStar(require_IMoveGravity(), exports2);
    __exportStar(require_IMovePath(), exports2);
    __exportStar(require_IOutModes(), exports2);
    __exportStar(require_ISpin(), exports2);
    __exportStar(require_IMoveTrail(), exports2);
    __exportStar(require_IParticlesDensity(), exports2);
    __exportStar(require_IParticlesNumber(), exports2);
    __exportStar(require_IOpacity(), exports2);
    __exportStar(require_IOpacityAnimation(), exports2);
    __exportStar(require_ICharacterShape(), exports2);
    __exportStar(require_IImageShape(), exports2);
    __exportStar(require_IPolygonShape(), exports2);
    __exportStar(require_IShape(), exports2);
    __exportStar(require_IShapeValues2(), exports2);
    __exportStar(require_IStarShape(), exports2);
    __exportStar(require_ISize(), exports2);
    __exportStar(require_ISizeAnimation(), exports2);
    __exportStar(require_IZIndex(), exports2);
    __exportStar(require_ITheme(), exports2);
    __exportStar(require_IThemeDefault(), exports2);
    __exportStar(require_CustomEventArgs(), exports2);
    __exportStar(require_CustomEventListener(), exports2);
    __exportStar(require_ExportResult(), exports2);
    __exportStar(require_ISourceOptions(), exports2);
    __exportStar(require_ParticlesGroups(), exports2);
    __exportStar(require_PathOptions(), exports2);
    __exportStar(require_RangeValue(), exports2);
    __exportStar(require_RecursivePartial(), exports2);
    __exportStar(require_ShapeData(), exports2);
    __exportStar(require_ShapeDrawerFunctions(), exports2);
    __exportStar(require_SingleOrMultiple(), exports2);
  }
});

// node_modules/tsparticles-engine/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/tsparticles-engine/cjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.tsParticles = void 0;
    var init_1 = require_init();
    var Utils_1 = require_Utils();
    var tsParticles2 = (0, init_1.init)();
    exports2.tsParticles = tsParticles2;
    if (!(0, Utils_1.isSsr)()) {
      window.tsParticles = tsParticles2;
    }
    __exportStar(require_exports(), exports2);
    __exportStar(require_export_types(), exports2);
  }
});

// node_modules/tsparticles-move-base/cjs/Utils.js
var require_Utils2 = __commonJS({
  "node_modules/tsparticles-move-base/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getProximitySpeedFactor = exports2.applyPath = exports2.spin = exports2.move = exports2.applyDistance = void 0;
    var tsparticles_engine_1 = require_cjs();
    function applyDistance(particle) {
      const initialPosition = particle.initialPosition, { dx, dy } = (0, tsparticles_engine_1.getDistances)(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
      if (!hDistance && !vDistance) {
        return;
      }
      if ((hDistance && dxFixed >= hDistance || vDistance && dyFixed >= vDistance) && !particle.misplaced) {
        particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
        if (hDistance) {
          particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }
        if (vDistance) {
          particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
      } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
      } else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && (pos.x < initialPosition.x && vel.x < 0 || pos.x > initialPosition.x && vel.x > 0)) {
          vel.x *= -(0, tsparticles_engine_1.getRandom)();
        }
        if (vDistance && (pos.y < initialPosition.y && vel.y < 0 || pos.y > initialPosition.y && vel.y > 0)) {
          vel.y *= -(0, tsparticles_engine_1.getRandom)();
        }
      }
    }
    exports2.applyDistance = applyDistance;
    function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
      applyPath(particle, delta);
      const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -1 : 1;
      if (moveDrift && moveSpeed) {
        particle.velocity.x += moveDrift * delta.factor / (60 * moveSpeed);
      }
      if (gravityOptions?.enable && moveSpeed) {
        particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (60 * moveSpeed);
      }
      const decay = particle.moveDecay;
      particle.velocity.multTo(decay);
      const velocity = particle.velocity.mult(moveSpeed);
      if (gravityOptions?.enable && maxSpeed > 0 && (!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed)) {
        velocity.y = gravityFactor * maxSpeed;
        if (moveSpeed) {
          particle.velocity.y = velocity.y / moveSpeed;
        }
      }
      const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
      velocity.multTo(zVelocityFactor);
      const { position } = particle;
      position.addTo(velocity);
      if (moveOptions.vibrate) {
        position.x += Math.sin(position.x * Math.cos(position.y));
        position.y += Math.cos(position.y * Math.sin(position.x));
      }
    }
    exports2.move = move;
    function spin(particle, moveSpeed) {
      const container = particle.container;
      if (!particle.spin) {
        return;
      }
      const updateFunc = {
        x: particle.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: particle.spin.direction === "clockwise" ? Math.sin : Math.cos
      };
      particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
      particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
      particle.spin.radius += particle.spin.acceleration;
      const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
      if (particle.spin.radius > maxCanvasSize / 2) {
        particle.spin.radius = maxCanvasSize / 2;
        particle.spin.acceleration *= -1;
      } else if (particle.spin.radius < 0) {
        particle.spin.radius = 0;
        particle.spin.acceleration *= -1;
      }
      particle.spin.angle += moveSpeed / 100 * (1 - particle.spin.radius / maxCanvasSize);
    }
    exports2.spin = spin;
    function applyPath(particle, delta) {
      const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
      if (!pathEnabled) {
        return;
      }
      if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;
        return;
      }
      const path = particle.pathGenerator?.generate(particle, delta);
      if (path) {
        particle.velocity.addTo(path);
      }
      if (pathOptions.clamp) {
        particle.velocity.x = (0, tsparticles_engine_1.clamp)(particle.velocity.x, -1, 1);
        particle.velocity.y = (0, tsparticles_engine_1.clamp)(particle.velocity.y, -1, 1);
      }
      particle.lastPathTime -= particle.pathDelay;
    }
    exports2.applyPath = applyPath;
    function getProximitySpeedFactor(particle) {
      return particle.slow.inRange ? particle.slow.factor : 1;
    }
    exports2.getProximitySpeedFactor = getProximitySpeedFactor;
  }
});

// node_modules/tsparticles-move-base/cjs/BaseMover.js
var require_BaseMover = __commonJS({
  "node_modules/tsparticles-move-base/cjs/BaseMover.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseMover = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Utils_1 = require_Utils2();
    var diffFactor = 2;
    var BaseMover = class {
      constructor() {
        this._initSpin = (particle) => {
          const container = particle.container, options = particle.options, spinOptions = options.move.spin;
          if (!spinOptions.enable) {
            return;
          }
          const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinCenter = {
            x: spinPos.x / 100 * container.canvas.size.width,
            y: spinPos.y / 100 * container.canvas.size.height
          }, pos = particle.getPosition(), distance = (0, tsparticles_engine_1.getDistance)(pos, spinCenter), spinAcceleration = (0, tsparticles_engine_1.getRangeValue)(spinOptions.acceleration);
          particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
          particle.spin = {
            center: spinCenter,
            direction: particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
            angle: particle.velocity.angle,
            radius: distance,
            acceleration: particle.retina.spinAcceleration
          };
        };
      }
      init(particle) {
        const options = particle.options, gravityOptions = options.move.gravity;
        particle.gravity = {
          enable: gravityOptions.enable,
          acceleration: (0, tsparticles_engine_1.getRangeValue)(gravityOptions.acceleration),
          inverse: gravityOptions.inverse
        };
        this._initSpin(particle);
      }
      isEnabled(particle) {
        return !particle.destroyed && particle.options.move.enable;
      }
      move(particle, delta) {
        var _a, _b;
        const particleOptions = particle.options, moveOptions = particleOptions.move;
        if (!moveOptions.enable) {
          return;
        }
        const container = particle.container, pxRatio = container.retina.pixelRatio, slowFactor = (0, Utils_1.getProximitySpeedFactor)(particle), baseSpeed = ((_a = particle.retina).moveSpeed ?? (_a.moveSpeed = (0, tsparticles_engine_1.getRangeValue)(moveOptions.speed) * pxRatio)) * container.retina.reduceFactor, moveDrift = (_b = particle.retina).moveDrift ?? (_b.moveDrift = (0, tsparticles_engine_1.getRangeValue)(particle.options.move.drift) * pxRatio), maxSize = (0, tsparticles_engine_1.getRangeMax)(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, moveSpeed = baseSpeed * sizeFactor * slowFactor * (delta.factor || 1) / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
        if (moveOptions.spin.enable) {
          (0, Utils_1.spin)(particle, moveSpeed);
        } else {
          (0, Utils_1.move)(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
        }
        (0, Utils_1.applyDistance)(particle);
      }
    };
    exports2.BaseMover = BaseMover;
  }
});

// node_modules/tsparticles-move-base/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/tsparticles-move-base/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadBaseMover = void 0;
    var BaseMover_1 = require_BaseMover();
    async function loadBaseMover(engine, refresh = true) {
      await engine.addMover("base", () => new BaseMover_1.BaseMover(), refresh);
    }
    exports2.loadBaseMover = loadBaseMover;
  }
});

// node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js
var require_CircleDrawer = __commonJS({
  "node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CircleDrawer = void 0;
    var tsparticles_engine_1 = require_cjs();
    var CircleDrawer = class {
      draw(context, particle, radius) {
        if (!particle.circleRange) {
          particle.circleRange = { min: 0, max: Math.PI * 2 };
        }
        const circleRange = particle.circleRange;
        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);
      }
      getSidesCount() {
        return 12;
      }
      particleInit(container, particle) {
        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
          max: 360,
          min: 0
        };
        particle.circleRange = !(0, tsparticles_engine_1.isObject)(angle) ? {
          min: 0,
          max: angle * Math.PI / 180
        } : { min: angle.min * Math.PI / 180, max: angle.max * Math.PI / 180 };
      }
    };
    exports2.CircleDrawer = CircleDrawer;
  }
});

// node_modules/tsparticles-shape-circle/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/tsparticles-shape-circle/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadCircleShape = void 0;
    var CircleDrawer_1 = require_CircleDrawer();
    async function loadCircleShape(engine, refresh = true) {
      await engine.addShape("circle", new CircleDrawer_1.CircleDrawer(), refresh);
    }
    exports2.loadCircleShape = loadCircleShape;
  }
});

// node_modules/tsparticles-updater-color/cjs/Utils.js
var require_Utils3 = __commonJS({
  "node_modules/tsparticles-updater-color/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateColor = void 0;
    var tsparticles_engine_1 = require_cjs();
    function updateColorValue(delta, colorValue, valueAnimation, max, decrease) {
      if (!colorValue || !valueAnimation.enable || (colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0)) {
        return;
      }
      if (!colorValue.time) {
        colorValue.time = 0;
      }
      if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        colorValue.time += delta.value;
      }
      if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        return;
      }
      const offset = (0, tsparticles_engine_1.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;
      if (!decrease || colorValue.status === "increasing") {
        colorValue.value += velocity;
        if (colorValue.value > max) {
          if (!colorValue.loops) {
            colorValue.loops = 0;
          }
          colorValue.loops++;
          if (decrease) {
            colorValue.status = "decreasing";
            colorValue.value -= colorValue.value % max;
          }
        }
      } else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
          if (!colorValue.loops) {
            colorValue.loops = 0;
          }
          colorValue.loops++;
          colorValue.status = "increasing";
          colorValue.value += colorValue.value;
        }
      }
      if (colorValue.velocity && decay !== 1) {
        colorValue.velocity *= decay;
      }
      if (colorValue.value > max) {
        colorValue.value %= max;
      }
    }
    function updateColor(particle, delta) {
      const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
      if (!color) {
        return;
      }
      const { h, s, l } = color;
      if (h) {
        updateColorValue(delta, h, hAnimation, 360, false);
      }
      if (s) {
        updateColorValue(delta, s, sAnimation, 100, true);
      }
      if (l) {
        updateColorValue(delta, l, lAnimation, 100, true);
      }
    }
    exports2.updateColor = updateColor;
  }
});

// node_modules/tsparticles-updater-color/cjs/ColorUpdater.js
var require_ColorUpdater = __commonJS({
  "node_modules/tsparticles-updater-color/cjs/ColorUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Utils_1 = require_Utils3();
    var ColorUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const hslColor = (0, tsparticles_engine_1.rangeColorToHsl)(particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) {
          particle.color = (0, tsparticles_engine_1.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
        }
      }
      isEnabled(particle) {
        const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
        return !particle.destroyed && !particle.spawning && (color?.h.value !== void 0 && hAnimation.enable || color?.s.value !== void 0 && sAnimation.enable || color?.l.value !== void 0 && lAnimation.enable);
      }
      update(particle, delta) {
        (0, Utils_1.updateColor)(particle, delta);
      }
    };
    exports2.ColorUpdater = ColorUpdater;
  }
});

// node_modules/tsparticles-updater-color/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/tsparticles-updater-color/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadColorUpdater = void 0;
    var ColorUpdater_1 = require_ColorUpdater();
    async function loadColorUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("color", (container) => new ColorUpdater_1.ColorUpdater(container), refresh);
    }
    exports2.loadColorUpdater = loadColorUpdater;
  }
});

// node_modules/tsparticles-updater-opacity/cjs/Utils.js
var require_Utils4 = __commonJS({
  "node_modules/tsparticles-updater-opacity/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateOpacity = void 0;
    var tsparticles_engine_1 = require_cjs();
    function checkDestroy(particle, value, minValue, maxValue) {
      switch (particle.options.opacity.animation.destroy) {
        case "max":
          if (value >= maxValue) {
            particle.destroy();
          }
          break;
        case "min":
          if (value <= minValue) {
            particle.destroy();
          }
          break;
      }
    }
    function updateOpacity(particle, delta) {
      const data = particle.opacity;
      if (particle.destroyed || !data?.enable || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {
        return;
      }
      const minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
      if (!data.time) {
        data.time = 0;
      }
      if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        data.time += delta.value;
      }
      if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        return;
      }
      switch (data.status) {
        case "increasing":
          if (data.value >= maxValue) {
            data.status = "decreasing";
            if (!data.loops) {
              data.loops = 0;
            }
            data.loops++;
          } else {
            data.value += (data.velocity ?? 0) * delta.factor;
          }
          break;
        case "decreasing":
          if (data.value <= minValue) {
            data.status = "increasing";
            if (!data.loops) {
              data.loops = 0;
            }
            data.loops++;
          } else {
            data.value -= (data.velocity ?? 0) * delta.factor;
          }
          break;
      }
      if (data.velocity && data.decay !== 1) {
        data.velocity *= decay;
      }
      checkDestroy(particle, data.value, minValue, maxValue);
      if (!particle.destroyed) {
        data.value = (0, tsparticles_engine_1.clamp)(data.value, minValue, maxValue);
      }
    }
    exports2.updateOpacity = updateOpacity;
  }
});

// node_modules/tsparticles-updater-opacity/cjs/OpacityUpdater.js
var require_OpacityUpdater = __commonJS({
  "node_modules/tsparticles-updater-opacity/cjs/OpacityUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OpacityUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Utils_1 = require_Utils4();
    var OpacityUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const opacityOptions = particle.options.opacity;
        particle.opacity = (0, tsparticles_engine_1.initParticleNumericAnimationValue)(opacityOptions, 1);
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
          particle.opacity.velocity = (0, tsparticles_engine_1.getRangeValue)(opacityAnimation.speed) / 100 * this.container.retina.reduceFactor;
          if (!opacityAnimation.sync) {
            particle.opacity.velocity *= (0, tsparticles_engine_1.getRandom)();
          }
        }
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? 0) <= 0 || (particle.opacity.maxLoops ?? 0) > 0 && (particle.opacity.loops ?? 0) < (particle.opacity.maxLoops ?? 0));
      }
      reset(particle) {
        if (particle.opacity) {
          particle.opacity.time = 0;
          particle.opacity.loops = 0;
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        (0, Utils_1.updateOpacity)(particle, delta);
      }
    };
    exports2.OpacityUpdater = OpacityUpdater;
  }
});

// node_modules/tsparticles-updater-opacity/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/tsparticles-updater-opacity/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadOpacityUpdater = void 0;
    var OpacityUpdater_1 = require_OpacityUpdater();
    async function loadOpacityUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater_1.OpacityUpdater(container), refresh);
    }
    exports2.loadOpacityUpdater = loadOpacityUpdater;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/Utils.js
var require_Utils5 = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bounceVertical = exports2.bounceHorizontal = void 0;
    var tsparticles_engine_1 = require_cjs();
    function bounceHorizontal(data) {
      if (data.outMode !== "bounce" && data.outMode !== "bounce-horizontal" && data.outMode !== "bounceHorizontal" && data.outMode !== "split" || data.direction !== "left" && data.direction !== "right") {
        return;
      }
      if (data.bounds.right < 0 && data.direction === "left") {
        data.particle.position.x = data.size + data.offset.x;
      } else if (data.bounds.left > data.canvasSize.width && data.direction === "right") {
        data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
      }
      const velocity = data.particle.velocity.x;
      let bounced = false;
      if (data.direction === "right" && data.bounds.right >= data.canvasSize.width && velocity > 0 || data.direction === "left" && data.bounds.left <= 0 && velocity < 0) {
        const newVelocity = (0, tsparticles_engine_1.getValue)(data.particle.options.bounce.horizontal);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
      }
      if (!bounced) {
        return;
      }
      const minPos = data.offset.x + data.size;
      if (data.bounds.right >= data.canvasSize.width && data.direction === "right") {
        data.particle.position.x = data.canvasSize.width - minPos;
      } else if (data.bounds.left <= 0 && data.direction === "left") {
        data.particle.position.x = minPos;
      }
      if (data.outMode === "split") {
        data.particle.destroy();
      }
    }
    exports2.bounceHorizontal = bounceHorizontal;
    function bounceVertical(data) {
      if (data.outMode !== "bounce" && data.outMode !== "bounce-vertical" && data.outMode !== "bounceVertical" && data.outMode !== "split" || data.direction !== "bottom" && data.direction !== "top") {
        return;
      }
      if (data.bounds.bottom < 0 && data.direction === "top") {
        data.particle.position.y = data.size + data.offset.y;
      } else if (data.bounds.top > data.canvasSize.height && data.direction === "bottom") {
        data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
      }
      const velocity = data.particle.velocity.y;
      let bounced = false;
      if (data.direction === "bottom" && data.bounds.bottom >= data.canvasSize.height && velocity > 0 || data.direction === "top" && data.bounds.top <= 0 && velocity < 0) {
        const newVelocity = (0, tsparticles_engine_1.getValue)(data.particle.options.bounce.vertical);
        data.particle.velocity.y *= -newVelocity;
        bounced = true;
      }
      if (!bounced) {
        return;
      }
      const minPos = data.offset.y + data.size;
      if (data.bounds.bottom >= data.canvasSize.height && data.direction === "bottom") {
        data.particle.position.y = data.canvasSize.height - minPos;
      } else if (data.bounds.top <= 0 && data.direction === "top") {
        data.particle.position.y = minPos;
      }
      if (data.outMode === "split") {
        data.particle.destroy();
      }
    }
    exports2.bounceVertical = bounceVertical;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/BounceOutMode.js
var require_BounceOutMode = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/BounceOutMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BounceOutMode = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Utils_1 = require_Utils5();
    var BounceOutMode = class {
      constructor(container) {
        this.container = container;
        this.modes = [
          "bounce",
          "bounce-vertical",
          "bounce-horizontal",
          "bounceVertical",
          "bounceHorizontal",
          "split"
        ];
      }
      update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
          return;
        }
        const container = this.container;
        let handled = false;
        for (const [, plugin] of container.plugins) {
          if (plugin.particleBounce !== void 0) {
            handled = plugin.particleBounce(particle, delta, direction);
          }
          if (handled) {
            break;
          }
        }
        if (handled) {
          return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = (0, tsparticles_engine_1.calculateBounds)(pos, size), canvasSize = container.canvas.size;
        (0, Utils_1.bounceHorizontal)({ particle, outMode, direction, bounds, canvasSize, offset, size });
        (0, Utils_1.bounceVertical)({ particle, outMode, direction, bounds, canvasSize, offset, size });
      }
    };
    exports2.BounceOutMode = BounceOutMode;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/DestroyOutMode.js
var require_DestroyOutMode = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/DestroyOutMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DestroyOutMode = void 0;
    var tsparticles_engine_1 = require_cjs();
    var DestroyOutMode = class {
      constructor(container) {
        this.container = container;
        this.modes = ["destroy"];
      }
      update(particle, direction, _delta, outMode) {
        if (!this.modes.includes(outMode)) {
          return;
        }
        const container = this.container;
        switch (particle.outType) {
          case "normal":
          case "outside":
            if ((0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, particle.getRadius(), direction)) {
              return;
            }
            break;
          case "inside": {
            const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
            const { x: vx, y: vy } = particle.velocity;
            if (vx < 0 && dx > particle.moveCenter.radius || vy < 0 && dy > particle.moveCenter.radius || vx >= 0 && dx < -particle.moveCenter.radius || vy >= 0 && dy < -particle.moveCenter.radius) {
              return;
            }
            break;
          }
        }
        container.particles.remove(particle, void 0, true);
      }
    };
    exports2.DestroyOutMode = DestroyOutMode;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/NoneOutMode.js
var require_NoneOutMode = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/NoneOutMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NoneOutMode = void 0;
    var tsparticles_engine_1 = require_cjs();
    var NoneOutMode = class {
      constructor(container) {
        this.container = container;
        this.modes = ["none"];
      }
      update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
          return;
        }
        if (particle.options.move.distance.horizontal && (direction === "left" || direction === "right") || particle.options.move.distance.vertical && (direction === "top" || direction === "bottom")) {
          return;
        }
        const gravityOptions = particle.options.move.gravity, container = this.container;
        const canvasSize = container.canvas.size;
        const pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
          if (particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < 0 && particle.position.y >= -pRadius || particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < 0 && particle.position.x >= -pRadius) {
            return;
          }
          if (!(0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, pRadius, direction)) {
            container.particles.remove(particle);
          }
        } else {
          const position = particle.position;
          if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === "bottom" || gravityOptions.inverse && position.y < -pRadius && direction === "top") {
            container.particles.remove(particle);
          }
        }
      }
    };
    exports2.NoneOutMode = NoneOutMode;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/OutOutMode.js
var require_OutOutMode = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/OutOutMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OutOutMode = void 0;
    var tsparticles_engine_1 = require_cjs();
    var OutOutMode = class {
      constructor(container) {
        this.container = container;
        this.modes = ["out"];
      }
      update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
          return;
        }
        const container = this.container;
        switch (particle.outType) {
          case "inside": {
            const { x: vx, y: vy } = particle.velocity;
            const circVec = tsparticles_engine_1.Vector.origin;
            circVec.length = particle.moveCenter.radius;
            circVec.angle = particle.velocity.angle + Math.PI;
            circVec.addTo(tsparticles_engine_1.Vector.create(particle.moveCenter));
            const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, circVec);
            if (vx <= 0 && dx >= 0 || vy <= 0 && dy >= 0 || vx >= 0 && dx <= 0 || vy >= 0 && dy <= 0) {
              return;
            }
            particle.position.x = Math.floor((0, tsparticles_engine_1.randomInRange)({
              min: 0,
              max: container.canvas.size.width
            }));
            particle.position.y = Math.floor((0, tsparticles_engine_1.randomInRange)({
              min: 0,
              max: container.canvas.size.height
            }));
            const { dx: newDx, dy: newDy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
            particle.direction = Math.atan2(-newDy, -newDx);
            particle.velocity.angle = particle.direction;
            break;
          }
          default: {
            if ((0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, particle.getRadius(), direction)) {
              return;
            }
            switch (particle.outType) {
              case "outside": {
                particle.position.x = Math.floor((0, tsparticles_engine_1.randomInRange)({
                  min: -particle.moveCenter.radius,
                  max: particle.moveCenter.radius
                })) + particle.moveCenter.x;
                particle.position.y = Math.floor((0, tsparticles_engine_1.randomInRange)({
                  min: -particle.moveCenter.radius,
                  max: particle.moveCenter.radius
                })) + particle.moveCenter.y;
                const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
                if (particle.moveCenter.radius) {
                  particle.direction = Math.atan2(dy, dx);
                  particle.velocity.angle = particle.direction;
                }
                break;
              }
              case "normal": {
                const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
                  bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                  left: -particle.getRadius() - particle.offset.x,
                  right: canvasSize.width + particle.getRadius() + particle.offset.x,
                  top: -particle.getRadius() - particle.offset.y
                }, sizeValue = particle.getRadius(), nextBounds = (0, tsparticles_engine_1.calculateBounds)(particle.position, sizeValue);
                if (direction === "right" && nextBounds.left > canvasSize.width + particle.offset.x) {
                  particle.position.x = newPos.left;
                  particle.initialPosition.x = particle.position.x;
                  if (!wrap) {
                    particle.position.y = (0, tsparticles_engine_1.getRandom)() * canvasSize.height;
                    particle.initialPosition.y = particle.position.y;
                  }
                } else if (direction === "left" && nextBounds.right < -particle.offset.x) {
                  particle.position.x = newPos.right;
                  particle.initialPosition.x = particle.position.x;
                  if (!wrap) {
                    particle.position.y = (0, tsparticles_engine_1.getRandom)() * canvasSize.height;
                    particle.initialPosition.y = particle.position.y;
                  }
                }
                if (direction === "bottom" && nextBounds.top > canvasSize.height + particle.offset.y) {
                  if (!wrap) {
                    particle.position.x = (0, tsparticles_engine_1.getRandom)() * canvasSize.width;
                    particle.initialPosition.x = particle.position.x;
                  }
                  particle.position.y = newPos.top;
                  particle.initialPosition.y = particle.position.y;
                } else if (direction === "top" && nextBounds.bottom < -particle.offset.y) {
                  if (!wrap) {
                    particle.position.x = (0, tsparticles_engine_1.getRandom)() * canvasSize.width;
                    particle.initialPosition.x = particle.position.x;
                  }
                  particle.position.y = newPos.bottom;
                  particle.initialPosition.y = particle.position.y;
                }
                break;
              }
            }
            break;
          }
        }
      }
    };
    exports2.OutOutMode = OutOutMode;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/OutOfCanvasUpdater.js
var require_OutOfCanvasUpdater = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/OutOfCanvasUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OutOfCanvasUpdater = void 0;
    var BounceOutMode_1 = require_BounceOutMode();
    var DestroyOutMode_1 = require_DestroyOutMode();
    var NoneOutMode_1 = require_NoneOutMode();
    var OutOutMode_1 = require_OutOutMode();
    var OutOfCanvasUpdater = class {
      constructor(container) {
        this.container = container;
        this._updateOutMode = (particle, delta, outMode, direction) => {
          for (const updater of this.updaters) {
            updater.update(particle, direction, delta, outMode);
          }
        };
        this.updaters = [
          new BounceOutMode_1.BounceOutMode(container),
          new DestroyOutMode_1.DestroyOutMode(container),
          new OutOutMode_1.OutOutMode(container),
          new NoneOutMode_1.NoneOutMode(container)
        ];
      }
      init() {
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
      }
      update(particle, delta) {
        const outModes = particle.options.move.outModes;
        this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, "bottom");
        this._updateOutMode(particle, delta, outModes.left ?? outModes.default, "left");
        this._updateOutMode(particle, delta, outModes.right ?? outModes.default, "right");
        this._updateOutMode(particle, delta, outModes.top ?? outModes.default, "top");
      }
    };
    exports2.OutOfCanvasUpdater = OutOfCanvasUpdater;
  }
});

// node_modules/tsparticles-updater-out-modes/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/tsparticles-updater-out-modes/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadOutModesUpdater = void 0;
    var OutOfCanvasUpdater_1 = require_OutOfCanvasUpdater();
    async function loadOutModesUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater_1.OutOfCanvasUpdater(container), refresh);
    }
    exports2.loadOutModesUpdater = loadOutModesUpdater;
  }
});

// node_modules/tsparticles-updater-size/cjs/Utils.js
var require_Utils6 = __commonJS({
  "node_modules/tsparticles-updater-size/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateSize = void 0;
    var tsparticles_engine_1 = require_cjs();
    function checkDestroy(particle, value, minValue, maxValue) {
      switch (particle.options.size.animation.destroy) {
        case "max":
          if (value >= maxValue) {
            particle.destroy();
          }
          break;
        case "min":
          if (value <= minValue) {
            particle.destroy();
          }
          break;
      }
    }
    function updateSize(particle, delta) {
      const data = particle.size;
      if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0)) {
        return;
      }
      const sizeVelocity = (data.velocity ?? 0) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
      if (!data.time) {
        data.time = 0;
      }
      if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        data.time += delta.value;
      }
      if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        return;
      }
      switch (data.status) {
        case "increasing":
          if (data.value >= maxValue) {
            data.status = "decreasing";
            if (!data.loops) {
              data.loops = 0;
            }
            data.loops++;
          } else {
            data.value += sizeVelocity;
          }
          break;
        case "decreasing":
          if (data.value <= minValue) {
            data.status = "increasing";
            if (!data.loops) {
              data.loops = 0;
            }
            data.loops++;
          } else {
            data.value -= sizeVelocity;
          }
      }
      if (data.velocity && decay !== 1) {
        data.velocity *= decay;
      }
      checkDestroy(particle, data.value, minValue, maxValue);
      if (!particle.destroyed) {
        data.value = (0, tsparticles_engine_1.clamp)(data.value, minValue, maxValue);
      }
    }
    exports2.updateSize = updateSize;
  }
});

// node_modules/tsparticles-updater-size/cjs/SizeUpdater.js
var require_SizeUpdater = __commonJS({
  "node_modules/tsparticles-updater-size/cjs/SizeUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SizeUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Utils_1 = require_Utils6();
    var SizeUpdater = class {
      init(particle) {
        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
          particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / 100 * container.retina.reduceFactor;
          if (!sizeAnimation.sync) {
            particle.size.velocity *= (0, tsparticles_engine_1.getRandom)();
          }
        }
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? 0) <= 0 || (particle.size.maxLoops ?? 0) > 0 && (particle.size.loops ?? 0) < (particle.size.maxLoops ?? 0));
      }
      reset(particle) {
        particle.size.loops = 0;
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        (0, Utils_1.updateSize)(particle, delta);
      }
    };
    exports2.SizeUpdater = SizeUpdater;
  }
});

// node_modules/tsparticles-updater-size/cjs/index.js
var require_cjs7 = __commonJS({
  "node_modules/tsparticles-updater-size/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadSizeUpdater = void 0;
    var SizeUpdater_1 = require_SizeUpdater();
    async function loadSizeUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("size", () => new SizeUpdater_1.SizeUpdater(), refresh);
    }
    exports2.loadSizeUpdater = loadSizeUpdater;
  }
});

// node_modules/tsparticles-basic/cjs/index.js
var require_cjs8 = __commonJS({
  "node_modules/tsparticles-basic/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadBasic = void 0;
    var tsparticles_move_base_1 = require_cjs2();
    var tsparticles_shape_circle_1 = require_cjs3();
    var tsparticles_updater_color_1 = require_cjs4();
    var tsparticles_updater_opacity_1 = require_cjs5();
    var tsparticles_updater_out_modes_1 = require_cjs6();
    var tsparticles_updater_size_1 = require_cjs7();
    async function loadBasic(engine, refresh = true) {
      await (0, tsparticles_move_base_1.loadBaseMover)(engine, false);
      await (0, tsparticles_shape_circle_1.loadCircleShape)(engine, false);
      await (0, tsparticles_updater_color_1.loadColorUpdater)(engine, false);
      await (0, tsparticles_updater_opacity_1.loadOpacityUpdater)(engine, false);
      await (0, tsparticles_updater_out_modes_1.loadOutModesUpdater)(engine, false);
      await (0, tsparticles_updater_size_1.loadSizeUpdater)(engine, false);
      await engine.refresh(refresh);
    }
    exports2.loadBasic = loadBasic;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Shapes/Circle/CircleShape.js
var require_CircleShape = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Shapes/Circle/CircleShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CircleShape = void 0;
    var tsparticles_engine_1 = require_cjs();
    var CircleShape = class {
      randomPosition(position, size, fill) {
        const generateTheta = (x, y) => {
          const u = (0, tsparticles_engine_1.getRandom)() / 4, theta = Math.atan(y / x * Math.tan(2 * Math.PI * u)), v = (0, tsparticles_engine_1.getRandom)();
          if (v < 0.25) {
            return theta;
          } else if (v < 0.5) {
            return Math.PI - theta;
          } else if (v < 0.75) {
            return Math.PI + theta;
          } else {
            return -theta;
          }
        }, radius = (x, y, theta) => x * y / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2), [a, b] = [size.width / 2, size.height / 2], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt((0, tsparticles_engine_1.getRandom)()) : maxRadius;
        return {
          x: position.x + randomRadius * Math.cos(randomTheta),
          y: position.y + randomRadius * Math.sin(randomTheta)
        };
      }
    };
    exports2.CircleShape = CircleShape;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterLife.js
var require_EmitterLife = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterLife.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmitterLife = void 0;
    var tsparticles_engine_1 = require_cjs();
    var EmitterLife = class {
      constructor() {
        this.wait = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        if (data.delay !== void 0) {
          this.delay = (0, tsparticles_engine_1.setRangeValue)(data.delay);
        }
        if (data.duration !== void 0) {
          this.duration = (0, tsparticles_engine_1.setRangeValue)(data.duration);
        }
        if (data.wait !== void 0) {
          this.wait = data.wait;
        }
      }
    };
    exports2.EmitterLife = EmitterLife;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterRate.js
var require_EmitterRate = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterRate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmitterRate = void 0;
    var tsparticles_engine_1 = require_cjs();
    var EmitterRate = class {
      constructor() {
        this.quantity = 1;
        this.delay = 0.1;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.quantity !== void 0) {
          this.quantity = (0, tsparticles_engine_1.setRangeValue)(data.quantity);
        }
        if (data.delay !== void 0) {
          this.delay = (0, tsparticles_engine_1.setRangeValue)(data.delay);
        }
      }
    };
    exports2.EmitterRate = EmitterRate;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterSize.js
var require_EmitterSize = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/EmitterSize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmitterSize = void 0;
    var EmitterSize = class {
      constructor() {
        this.mode = "percent";
        this.height = 0;
        this.width = 0;
      }
      load(data) {
        if (data === void 0) {
          return;
        }
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.height !== void 0) {
          this.height = data.height;
        }
        if (data.width !== void 0) {
          this.width = data.width;
        }
      }
    };
    exports2.EmitterSize = EmitterSize;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/Emitter.js
var require_Emitter = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Options/Classes/Emitter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = void 0;
    var tsparticles_engine_1 = require_cjs();
    var EmitterLife_1 = require_EmitterLife();
    var EmitterRate_1 = require_EmitterRate();
    var EmitterSize_1 = require_EmitterSize();
    var Emitter = class {
      constructor() {
        this.autoPlay = true;
        this.fill = true;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
        this.shape = "square";
        this.startCount = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.autoPlay !== void 0) {
          this.autoPlay = data.autoPlay;
        }
        if (data.size !== void 0) {
          if (!this.size) {
            this.size = new EmitterSize_1.EmitterSize();
          }
          this.size.load(data.size);
        }
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        this.domId = data.domId;
        if (data.fill !== void 0) {
          this.fill = data.fill;
        }
        this.life.load(data.life);
        this.name = data.name;
        this.particles = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.particles, (particles) => {
          return (0, tsparticles_engine_1.deepExtend)({}, particles);
        });
        this.rate.load(data.rate);
        if (data.shape !== void 0) {
          this.shape = data.shape;
        }
        if (data.position !== void 0) {
          this.position = {};
          if (data.position.x !== void 0) {
            this.position.x = (0, tsparticles_engine_1.setRangeValue)(data.position.x);
          }
          if (data.position.y !== void 0) {
            this.position.y = (0, tsparticles_engine_1.setRangeValue)(data.position.y);
          }
        }
        if (data.spawnColor !== void 0) {
          if (this.spawnColor === void 0) {
            this.spawnColor = new tsparticles_engine_1.AnimatableColor();
          }
          this.spawnColor.load(data.spawnColor);
        }
        if (data.startCount !== void 0) {
          this.startCount = data.startCount;
        }
      }
    };
    exports2.Emitter = Emitter;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/EmitterInstance.js
var require_EmitterInstance = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/EmitterInstance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmitterInstance = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Emitter_1 = require_Emitter();
    var EmitterSize_1 = require_EmitterSize();
    var EmitterInstance = class {
      constructor(engine, emitters, container, options, position) {
        var _a;
        this.emitters = emitters;
        this.container = container;
        this._calcPosition = () => {
          return (0, tsparticles_engine_1.calcPositionOrRandomFromSizeRanged)({
            size: this.container.canvas.size,
            position: this.options.position
          });
        };
        this._destroy = () => {
          this.emitters.removeEmitter(this);
          this._engine.dispatchEvent("emitterDestroyed", {
            container: this.container,
            data: {
              emitter: this
            }
          });
        };
        this._emit = () => {
          if (this._paused) {
            return;
          }
          const quantity = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.quantity);
          this._emitParticles(quantity);
        };
        this._emitParticles = (quantity) => {
          const position2 = this.getPosition(), size = this.getSize(), singleParticlesOptions = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(this._particlesOptions);
          for (let i = 0; i < quantity; i++) {
            const particlesOptions2 = (0, tsparticles_engine_1.deepExtend)({}, singleParticlesOptions);
            if (this.spawnColor) {
              const hslAnimation = this.options.spawnColor?.animation;
              if (hslAnimation) {
                this.spawnColor.h = this._setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                this.spawnColor.s = this._setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                this.spawnColor.l = this._setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
              }
              if (!particlesOptions2.color) {
                particlesOptions2.color = {
                  value: this.spawnColor
                };
              } else {
                particlesOptions2.color.value = this.spawnColor;
              }
            }
            if (!position2) {
              return;
            }
            const pPosition = this._shape?.randomPosition(position2, size, this.fill) ?? position2;
            this.container.particles.addParticle(pPosition, particlesOptions2);
          }
        };
        this._prepareToDie = () => {
          if (this._paused) {
            return;
          }
          const duration = this.options.life?.duration !== void 0 ? (0, tsparticles_engine_1.getRangeValue)(this.options.life.duration) : void 0;
          if (this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && duration !== void 0 && duration > 0) {
            this._duration = duration * 1e3;
          }
        };
        this._setColorAnimation = (animation, initValue, maxValue) => {
          const container2 = this.container;
          if (!animation.enable) {
            return initValue;
          }
          const colorOffset = (0, tsparticles_engine_1.randomInRange)(animation.offset), delay = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.delay), emitFactor = 1e3 * delay / container2.retina.reduceFactor, colorSpeed = (0, tsparticles_engine_1.getRangeValue)(animation.speed ?? 0);
          return (initValue + colorSpeed * container2.fpsLimit / emitFactor + colorOffset * 3.6) % maxValue;
        };
        this._engine = engine;
        this._currentDuration = 0;
        this._currentEmitDelay = 0;
        this._currentSpawnDelay = 0;
        this._initialPosition = position;
        if (options instanceof Emitter_1.Emitter) {
          this.options = options;
        } else {
          this.options = new Emitter_1.Emitter();
          this.options.load(options);
        }
        this._spawnDelay = (0, tsparticles_engine_1.getRangeValue)(this.options.life.delay ?? 0) * 1e3 / this.container.retina.reduceFactor;
        this.position = this._initialPosition ?? this._calcPosition();
        this.name = this.options.name;
        this._shape = this._engine.emitterShapeManager?.getShape(this.options.shape);
        this.fill = this.options.fill;
        this._firstSpawn = !this.options.life.wait;
        this._startParticlesAdded = false;
        let particlesOptions = (0, tsparticles_engine_1.deepExtend)({}, this.options.particles);
        particlesOptions ?? (particlesOptions = {});
        particlesOptions.move ?? (particlesOptions.move = {});
        (_a = particlesOptions.move).direction ?? (_a.direction = this.options.direction);
        if (this.options.spawnColor) {
          this.spawnColor = (0, tsparticles_engine_1.rangeColorToHsl)(this.options.spawnColor);
        }
        this._paused = !this.options.autoPlay;
        this._particlesOptions = particlesOptions;
        this.size = this.options.size ?? (() => {
          const size = new EmitterSize_1.EmitterSize();
          size.load({
            height: 0,
            mode: "percent",
            width: 0
          });
          return size;
        })();
        this._lifeCount = this.options.life.count ?? -1;
        this._immortal = this._lifeCount <= 0;
        this._engine.dispatchEvent("emitterCreated", {
          container,
          data: {
            emitter: this
          }
        });
        this.play();
      }
      externalPause() {
        this._paused = true;
        this.pause();
      }
      externalPlay() {
        this._paused = false;
        this.play();
      }
      getPosition() {
        if (this.options.domId) {
          const container = this.container, element = document.getElementById(this.options.domId);
          if (element) {
            const elRect = element.getBoundingClientRect();
            return {
              x: (elRect.x + elRect.width / 2) * container.retina.pixelRatio,
              y: (elRect.y + elRect.height / 2) * container.retina.pixelRatio
            };
          }
        }
        return this.position;
      }
      getSize() {
        const container = this.container;
        if (this.options.domId) {
          const element = document.getElementById(this.options.domId);
          if (element) {
            const elRect = element.getBoundingClientRect();
            return {
              width: elRect.width * container.retina.pixelRatio,
              height: elRect.height * container.retina.pixelRatio
            };
          }
        }
        return (0, tsparticles_engine_1.getSize)(this.size, container.canvas.size);
      }
      pause() {
        if (this._paused) {
          return;
        }
        delete this._emitDelay;
      }
      play() {
        if (this._paused) {
          return;
        }
        if (!(this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0)))) {
          return;
        }
        if (this._emitDelay === void 0) {
          const delay = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.delay);
          this._emitDelay = 1e3 * delay / this.container.retina.reduceFactor;
        }
        if (this._lifeCount > 0 || this._immortal) {
          this._prepareToDie();
        }
      }
      resize() {
        const initialPosition = this._initialPosition;
        this.position = initialPosition && (0, tsparticles_engine_1.isPointInside)(initialPosition, this.container.canvas.size, tsparticles_engine_1.Vector.origin) ? initialPosition : this._calcPosition();
      }
      update(delta) {
        if (this._paused) {
          return;
        }
        if (this._firstSpawn) {
          this._firstSpawn = false;
          this._currentSpawnDelay = this._spawnDelay ?? 0;
          this._currentEmitDelay = this._emitDelay ?? 0;
        }
        if (!this._startParticlesAdded) {
          this._startParticlesAdded = true;
          this._emitParticles(this.options.startCount);
        }
        if (this._duration !== void 0) {
          this._currentDuration += delta.value;
          if (this._currentDuration >= this._duration) {
            this.pause();
            if (this._spawnDelay !== void 0) {
              delete this._spawnDelay;
            }
            if (!this._immortal) {
              this._lifeCount--;
            }
            if (this._lifeCount > 0 || this._immortal) {
              this.position = this._calcPosition();
              this._spawnDelay = (0, tsparticles_engine_1.getRangeValue)(this.options.life.delay ?? 0) * 1e3 / this.container.retina.reduceFactor;
            } else {
              this._destroy();
            }
            this._currentDuration -= this._duration;
            delete this._duration;
          }
        }
        if (this._spawnDelay !== void 0) {
          this._currentSpawnDelay += delta.value;
          if (this._currentSpawnDelay >= this._spawnDelay) {
            this._engine.dispatchEvent("emitterPlay", {
              container: this.container
            });
            this.play();
            this._currentSpawnDelay -= this._currentSpawnDelay;
            delete this._spawnDelay;
          }
        }
        if (this._emitDelay !== void 0) {
          this._currentEmitDelay += delta.value;
          if (this._currentEmitDelay >= this._emitDelay) {
            this._emit();
            this._currentEmitDelay -= this._emitDelay;
          }
        }
      }
    };
    exports2.EmitterInstance = EmitterInstance;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Emitters.js
var require_Emitters = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Emitters.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitters = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Emitter_1 = require_Emitter();
    var EmitterInstance_1 = require_EmitterInstance();
    var Emitters = class {
      constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = {
          random: {
            count: 1,
            enable: false
          },
          value: []
        };
        container.getEmitter = (idxOrName) => idxOrName === void 0 || (0, tsparticles_engine_1.isNumber)(idxOrName) ? this.array[idxOrName || 0] : this.array.find((t) => t.name === idxOrName);
        container.addEmitter = (options, position) => this.addEmitter(options, position);
        container.removeEmitter = (idxOrName) => {
          const emitter = container.getEmitter(idxOrName);
          if (emitter) {
            this.removeEmitter(emitter);
          }
        };
        container.playEmitter = (idxOrName) => {
          const emitter = container.getEmitter(idxOrName);
          if (emitter) {
            emitter.externalPlay();
          }
        };
        container.pauseEmitter = (idxOrName) => {
          const emitter = container.getEmitter(idxOrName);
          if (emitter) {
            emitter.externalPause();
          }
        };
      }
      addEmitter(options, position) {
        const emitterOptions = new Emitter_1.Emitter();
        emitterOptions.load(options);
        const emitter = new EmitterInstance_1.EmitterInstance(this._engine, this, this.container, emitterOptions, position);
        this.array.push(emitter);
        return emitter;
      }
      handleClickMode(mode) {
        const emitterOptions = this.emitters, modeEmitters = this.interactivityEmitters;
        if (mode !== "emitter") {
          return;
        }
        let emittersModeOptions;
        if (modeEmitters && (0, tsparticles_engine_1.isArray)(modeEmitters.value)) {
          if (modeEmitters.value.length > 0 && modeEmitters.random.enable) {
            emittersModeOptions = [];
            const usedIndexes = [];
            for (let i = 0; i < modeEmitters.random.count; i++) {
              const idx = (0, tsparticles_engine_1.arrayRandomIndex)(modeEmitters.value);
              if (usedIndexes.includes(idx) && usedIndexes.length < modeEmitters.value.length) {
                i--;
                continue;
              }
              usedIndexes.push(idx);
              emittersModeOptions.push((0, tsparticles_engine_1.itemFromArray)(modeEmitters.value, idx));
            }
          } else {
            emittersModeOptions = modeEmitters.value;
          }
        } else {
          emittersModeOptions = modeEmitters?.value;
        }
        const emittersOptions = emittersModeOptions ?? emitterOptions, ePosition = this.container.interactivity.mouse.clickPosition;
        (0, tsparticles_engine_1.executeOnSingleOrMultiple)(emittersOptions, (emitter) => {
          this.addEmitter(emitter, ePosition);
        });
      }
      async init() {
        this.emitters = this.container.actualOptions.emitters;
        this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters;
        if (!this.emitters) {
          return;
        }
        if ((0, tsparticles_engine_1.isArray)(this.emitters)) {
          for (const emitterOptions of this.emitters) {
            this.addEmitter(emitterOptions);
          }
        } else {
          this.addEmitter(this.emitters);
        }
      }
      pause() {
        for (const emitter of this.array) {
          emitter.pause();
        }
      }
      play() {
        for (const emitter of this.array) {
          emitter.play();
        }
      }
      removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
          this.array.splice(index, 1);
        }
      }
      resize() {
        for (const emitter of this.array) {
          emitter.resize();
        }
      }
      stop() {
        this.array = [];
      }
      update(delta) {
        for (const emitter of this.array) {
          emitter.update(delta);
        }
      }
    };
    exports2.Emitters = Emitters;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/ShapeManager.js
var require_ShapeManager = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/ShapeManager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShapeManager = void 0;
    var shapes = /* @__PURE__ */ new Map();
    var ShapeManager = class {
      constructor(engine) {
        this._engine = engine;
      }
      addShape(name, drawer) {
        if (!this.getShape(name)) {
          shapes.set(name, drawer);
        }
      }
      getShape(name) {
        return shapes.get(name);
      }
      getSupportedShapes() {
        return shapes.keys();
      }
    };
    exports2.ShapeManager = ShapeManager;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Shapes/Square/SquareShape.js
var require_SquareShape = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Shapes/Square/SquareShape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SquareShape = void 0;
    var tsparticles_engine_1 = require_cjs();
    function randomSquareCoordinate(position, offset) {
      return position + offset * ((0, tsparticles_engine_1.getRandom)() - 0.5);
    }
    var SquareShape = class {
      randomPosition(position, size, fill) {
        if (fill) {
          return {
            x: randomSquareCoordinate(position.x, size.width),
            y: randomSquareCoordinate(position.y, size.height)
          };
        } else {
          const halfW = size.width / 2, halfH = size.height / 2, side = Math.floor((0, tsparticles_engine_1.getRandom)() * 4), v = ((0, tsparticles_engine_1.getRandom)() - 0.5) * 2;
          switch (side) {
            case 0:
              return {
                x: position.x + v * halfW,
                y: position.y - halfH
              };
            case 1:
              return {
                x: position.x - halfW,
                y: position.y + v * halfH
              };
            case 2:
              return {
                x: position.x + v * halfW,
                y: position.y + halfH
              };
            case 3:
            default:
              return {
                x: position.x + halfW,
                y: position.y + v * halfH
              };
          }
        }
      }
    };
    exports2.SquareShape = SquareShape;
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/EmitterContainer.js
var require_EmitterContainer = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/EmitterContainer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/EmittersEngine.js
var require_EmittersEngine = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/EmittersEngine.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Enums/EmitterClickMode.js
var require_EmitterClickMode = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Enums/EmitterClickMode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/Enums/EmitterShapeType.js
var require_EmitterShapeType = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/Enums/EmitterShapeType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/tsparticles-plugin-emitters/cjs/index.js
var require_cjs9 = __commonJS({
  "node_modules/tsparticles-plugin-emitters/cjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadEmittersPlugin = void 0;
    var tsparticles_engine_1 = require_cjs();
    var CircleShape_1 = require_CircleShape();
    var Emitter_1 = require_Emitter();
    var Emitters_1 = require_Emitters();
    var ShapeManager_1 = require_ShapeManager();
    var SquareShape_1 = require_SquareShape();
    var EmittersPlugin = class {
      constructor(engine) {
        this._engine = engine;
        this.id = "emitters";
      }
      getPlugin(container) {
        return new Emitters_1.Emitters(this._engine, container);
      }
      loadOptions(options, source) {
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
          return;
        }
        if (source?.emitters) {
          options.emitters = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(source.emitters, (emitter) => {
            const tmp = new Emitter_1.Emitter();
            tmp.load(emitter);
            return tmp;
          });
        }
        const interactivityEmitters = source?.interactivity?.modes?.emitters;
        if (interactivityEmitters) {
          if ((0, tsparticles_engine_1.isArray)(interactivityEmitters)) {
            options.interactivity.modes.emitters = {
              random: {
                count: 1,
                enable: true
              },
              value: interactivityEmitters.map((s) => {
                const tmp = new Emitter_1.Emitter();
                tmp.load(s);
                return tmp;
              })
            };
          } else {
            const emitterMode = interactivityEmitters;
            if (emitterMode.value !== void 0) {
              if ((0, tsparticles_engine_1.isArray)(emitterMode.value)) {
                options.interactivity.modes.emitters = {
                  random: {
                    count: emitterMode.random.count ?? 1,
                    enable: emitterMode.random.enable ?? false
                  },
                  value: emitterMode.value.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                  })
                };
              } else {
                const tmp = new Emitter_1.Emitter();
                tmp.load(emitterMode.value);
                options.interactivity.modes.emitters = {
                  random: {
                    count: emitterMode.random.count ?? 1,
                    enable: emitterMode.random.enable ?? false
                  },
                  value: tmp
                };
              }
            } else {
              const emitterOptions = options.interactivity.modes.emitters = {
                random: {
                  count: 1,
                  enable: false
                },
                value: new Emitter_1.Emitter()
              };
              emitterOptions.value.load(interactivityEmitters);
            }
          }
        }
      }
      needsPlugin(options) {
        if (!options) {
          return false;
        }
        const emitters = options.emitters;
        return (0, tsparticles_engine_1.isArray)(emitters) && !!emitters.length || emitters !== void 0 || !!options.interactivity?.events?.onClick?.mode && (0, tsparticles_engine_1.isInArray)("emitter", options.interactivity.events.onClick.mode);
      }
    };
    async function loadEmittersPlugin(engine, refresh = true) {
      if (!engine.emitterShapeManager) {
        engine.emitterShapeManager = new ShapeManager_1.ShapeManager(engine);
      }
      if (!engine.addEmitterShape) {
        engine.addEmitterShape = (name, shape) => {
          engine.emitterShapeManager?.addShape(name, shape);
        };
      }
      const plugin = new EmittersPlugin(engine);
      await engine.addPlugin(plugin, refresh);
      engine.addEmitterShape("circle", new CircleShape_1.CircleShape());
      engine.addEmitterShape("square", new SquareShape_1.SquareShape());
    }
    exports2.loadEmittersPlugin = loadEmittersPlugin;
    __exportStar(require_EmitterContainer(), exports2);
    __exportStar(require_EmittersEngine(), exports2);
    __exportStar(require_EmitterClickMode(), exports2);
    __exportStar(require_EmitterShapeType(), exports2);
  }
});

// node_modules/tsparticles-updater-life/cjs/Options/Classes/LifeDelay.js
var require_LifeDelay = __commonJS({
  "node_modules/tsparticles-updater-life/cjs/Options/Classes/LifeDelay.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LifeDelay = void 0;
    var tsparticles_engine_1 = require_cjs();
    var LifeDelay = class extends tsparticles_engine_1.ValueWithRandom {
      constructor() {
        super();
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.LifeDelay = LifeDelay;
  }
});

// node_modules/tsparticles-updater-life/cjs/Options/Classes/LifeDuration.js
var require_LifeDuration = __commonJS({
  "node_modules/tsparticles-updater-life/cjs/Options/Classes/LifeDuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LifeDuration = void 0;
    var tsparticles_engine_1 = require_cjs();
    var LifeDuration = class extends tsparticles_engine_1.ValueWithRandom {
      constructor() {
        super();
        this.random.minimumValue = 1e-4;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.LifeDuration = LifeDuration;
  }
});

// node_modules/tsparticles-updater-life/cjs/Options/Classes/Life.js
var require_Life = __commonJS({
  "node_modules/tsparticles-updater-life/cjs/Options/Classes/Life.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Life = void 0;
    var LifeDelay_1 = require_LifeDelay();
    var LifeDuration_1 = require_LifeDuration();
    var Life = class {
      constructor() {
        this.count = 0;
        this.delay = new LifeDelay_1.LifeDelay();
        this.duration = new LifeDuration_1.LifeDuration();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.count !== void 0) {
          this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
      }
    };
    exports2.Life = Life;
  }
});

// node_modules/tsparticles-updater-life/cjs/LifeUpdater.js
var require_LifeUpdater = __commonJS({
  "node_modules/tsparticles-updater-life/cjs/LifeUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LifeUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Life_1 = require_Life();
    var LifeUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
        if (!lifeOptions) {
          return;
        }
        particle.life = {
          delay: container.retina.reduceFactor ? (0, tsparticles_engine_1.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : (0, tsparticles_engine_1.getRandom)()) / container.retina.reduceFactor * 1e3 : 0,
          delayTime: 0,
          duration: container.retina.reduceFactor ? (0, tsparticles_engine_1.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : (0, tsparticles_engine_1.getRandom)()) / container.retina.reduceFactor * 1e3 : 0,
          time: 0,
          count: lifeOptions.count
        };
        if (particle.life.duration <= 0) {
          particle.life.duration = -1;
        }
        if (particle.life.count <= 0) {
          particle.life.count = -1;
        }
        if (particle.life) {
          particle.spawning = particle.life.delay > 0;
        }
      }
      isEnabled(particle) {
        return !particle.destroyed;
      }
      loadOptions(options, ...sources) {
        if (!options.life) {
          options.life = new Life_1.Life();
        }
        for (const source of sources) {
          options.life.load(source?.life);
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.life) {
          return;
        }
        const life = particle.life;
        let justSpawned = false;
        if (particle.spawning) {
          life.delayTime += delta.value;
          if (life.delayTime >= particle.life.delay) {
            justSpawned = true;
            particle.spawning = false;
            life.delayTime = 0;
            life.time = 0;
          } else {
            return;
          }
        }
        if (life.duration === -1) {
          return;
        }
        if (particle.spawning) {
          return;
        }
        if (justSpawned) {
          life.time = 0;
        } else {
          life.time += delta.value;
        }
        if (life.time < life.duration) {
          return;
        }
        life.time = 0;
        if (particle.life.count > 0) {
          particle.life.count--;
        }
        if (particle.life.count === 0) {
          particle.destroy();
          return;
        }
        const canvasSize = this.container.canvas.size, widthRange = (0, tsparticles_engine_1.setRangeValue)(0, canvasSize.width), heightRange = (0, tsparticles_engine_1.setRangeValue)(0, canvasSize.width);
        particle.position.x = (0, tsparticles_engine_1.randomInRange)(widthRange);
        particle.position.y = (0, tsparticles_engine_1.randomInRange)(heightRange);
        particle.spawning = true;
        life.delayTime = 0;
        life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        if (lifeOptions) {
          life.delay = (0, tsparticles_engine_1.getRangeValue)(lifeOptions.delay.value) * 1e3;
          life.duration = (0, tsparticles_engine_1.getRangeValue)(lifeOptions.duration.value) * 1e3;
        }
      }
    };
    exports2.LifeUpdater = LifeUpdater;
  }
});

// node_modules/tsparticles-updater-life/cjs/index.js
var require_cjs10 = __commonJS({
  "node_modules/tsparticles-updater-life/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadLifeUpdater = void 0;
    var LifeUpdater_1 = require_LifeUpdater();
    async function loadLifeUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("life", (container) => new LifeUpdater_1.LifeUpdater(container), refresh);
    }
    exports2.loadLifeUpdater = loadLifeUpdater;
  }
});

// node_modules/tsparticles-plugin-motion/cjs/Options/Classes/MotionReduce.js
var require_MotionReduce = __commonJS({
  "node_modules/tsparticles-plugin-motion/cjs/Options/Classes/MotionReduce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MotionReduce = void 0;
    var MotionReduce = class {
      constructor() {
        this.factor = 4;
        this.value = true;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.factor !== void 0) {
          this.factor = data.factor;
        }
        if (data.value !== void 0) {
          this.value = data.value;
        }
      }
    };
    exports2.MotionReduce = MotionReduce;
  }
});

// node_modules/tsparticles-plugin-motion/cjs/Options/Classes/Motion.js
var require_Motion = __commonJS({
  "node_modules/tsparticles-plugin-motion/cjs/Options/Classes/Motion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Motion = void 0;
    var MotionReduce_1 = require_MotionReduce();
    var Motion = class {
      constructor() {
        this.disable = false;
        this.reduce = new MotionReduce_1.MotionReduce();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.disable !== void 0) {
          this.disable = data.disable;
        }
        this.reduce.load(data.reduce);
      }
    };
    exports2.Motion = Motion;
  }
});

// node_modules/tsparticles-plugin-motion/cjs/MotionInstance.js
var require_MotionInstance = __commonJS({
  "node_modules/tsparticles-plugin-motion/cjs/MotionInstance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MotionInstance = void 0;
    var tsparticles_engine_1 = require_cjs();
    var MotionInstance = class {
      constructor(container, engine) {
        this._handleMotionChange = (mediaQuery) => {
          const container2 = this._container, motion = container2.actualOptions.motion;
          if (!motion) {
            return;
          }
          container2.retina.reduceFactor = mediaQuery.matches ? motion.disable ? 0 : motion.reduce.value ? 1 / motion.reduce.factor : 1 : 1;
        };
        this._container = container;
        this._engine = engine;
      }
      async init() {
        const container = this._container, options = container.actualOptions.motion;
        if (!(options && (options.disable || options.reduce.value))) {
          container.retina.reduceFactor = 1;
          return;
        }
        const mediaQuery = (0, tsparticles_engine_1.safeMatchMedia)("(prefers-reduced-motion: reduce)");
        if (!mediaQuery) {
          container.retina.reduceFactor = 1;
          return;
        }
        this._handleMotionChange(mediaQuery);
        const handleChange = async () => {
          this._handleMotionChange(mediaQuery);
          try {
            await container.refresh();
          } catch {
          }
        };
        if (mediaQuery.addEventListener !== void 0) {
          mediaQuery.addEventListener("change", handleChange);
        } else if (mediaQuery.addListener !== void 0) {
          mediaQuery.addListener(handleChange);
        }
      }
    };
    exports2.MotionInstance = MotionInstance;
  }
});

// node_modules/tsparticles-plugin-motion/cjs/index.js
var require_cjs11 = __commonJS({
  "node_modules/tsparticles-plugin-motion/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadMotionPlugin = void 0;
    var Motion_1 = require_Motion();
    var MotionInstance_1 = require_MotionInstance();
    var MotionPlugin = class {
      constructor(engine) {
        this.id = "motion";
        this._engine = engine;
      }
      getPlugin(container) {
        return new MotionInstance_1.MotionInstance(container, this._engine);
      }
      loadOptions(options, source) {
        if (!this.needsPlugin()) {
          return;
        }
        let motionOptions = options.motion;
        if (!motionOptions?.load) {
          options.motion = motionOptions = new Motion_1.Motion();
        }
        motionOptions.load(source?.motion);
      }
      needsPlugin() {
        return true;
      }
    };
    async function loadMotionPlugin(engine, refresh = true) {
      await engine.addPlugin(new MotionPlugin(engine), refresh);
    }
    exports2.loadMotionPlugin = loadMotionPlugin;
  }
});

// node_modules/tsparticles-updater-roll/cjs/Utils.js
var require_Utils7 = __commonJS({
  "node_modules/tsparticles-updater-roll/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateRoll = exports2.initParticle = void 0;
    var tsparticles_engine_1 = require_cjs();
    function initParticle(particle) {
      const rollOpt = particle.options.roll;
      if (!rollOpt?.enable) {
        particle.roll = {
          enable: false,
          horizontal: false,
          vertical: false,
          angle: 0,
          speed: 0
        };
        return;
      }
      particle.roll = {
        enable: rollOpt.enable,
        horizontal: rollOpt.mode === "horizontal" || rollOpt.mode === "both",
        vertical: rollOpt.mode === "vertical" || rollOpt.mode === "both",
        angle: (0, tsparticles_engine_1.getRandom)() * Math.PI * 2,
        speed: (0, tsparticles_engine_1.getRangeValue)(rollOpt.speed) / 360
      };
      if (rollOpt.backColor) {
        particle.backColor = (0, tsparticles_engine_1.rangeColorToHsl)(rollOpt.backColor);
      } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
        const alterType = (0, tsparticles_engine_1.getRandom)() >= 0.5 ? "darken" : "enlighten";
        particle.roll.alter = {
          type: alterType,
          value: (0, tsparticles_engine_1.getRangeValue)(alterType === "darken" ? rollOpt.darken.value : rollOpt.enlighten.value)
        };
      } else if (rollOpt.darken.enable) {
        particle.roll.alter = {
          type: "darken",
          value: (0, tsparticles_engine_1.getRangeValue)(rollOpt.darken.value)
        };
      } else if (rollOpt.enlighten.enable) {
        particle.roll.alter = {
          type: "enlighten",
          value: (0, tsparticles_engine_1.getRangeValue)(rollOpt.enlighten.value)
        };
      }
    }
    exports2.initParticle = initParticle;
    function updateRoll(particle, delta) {
      const roll = particle.options.roll, data = particle.roll;
      if (!data || !roll?.enable) {
        return;
      }
      const speed = data.speed * delta.factor, max = 2 * Math.PI;
      data.angle += speed;
      if (data.angle > max) {
        data.angle -= max;
      }
    }
    exports2.updateRoll = updateRoll;
  }
});

// node_modules/tsparticles-updater-roll/cjs/Options/Classes/RollLight.js
var require_RollLight = __commonJS({
  "node_modules/tsparticles-updater-roll/cjs/Options/Classes/RollLight.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RollLight = void 0;
    var tsparticles_engine_1 = require_cjs();
    var RollLight = class {
      constructor() {
        this.enable = false;
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.value !== void 0) {
          this.value = (0, tsparticles_engine_1.setRangeValue)(data.value);
        }
      }
    };
    exports2.RollLight = RollLight;
  }
});

// node_modules/tsparticles-updater-roll/cjs/Options/Classes/Roll.js
var require_Roll = __commonJS({
  "node_modules/tsparticles-updater-roll/cjs/Options/Classes/Roll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Roll = void 0;
    var tsparticles_engine_1 = require_cjs();
    var RollLight_1 = require_RollLight();
    var Roll = class {
      constructor() {
        this.darken = new RollLight_1.RollLight();
        this.enable = false;
        this.enlighten = new RollLight_1.RollLight();
        this.mode = "vertical";
        this.speed = 25;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.backColor !== void 0) {
          this.backColor = tsparticles_engine_1.OptionsColor.create(this.backColor, data.backColor);
        }
        this.darken.load(data.darken);
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        this.enlighten.load(data.enlighten);
        if (data.mode !== void 0) {
          this.mode = data.mode;
        }
        if (data.speed !== void 0) {
          this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
      }
    };
    exports2.Roll = Roll;
  }
});

// node_modules/tsparticles-updater-roll/cjs/RollUpdater.js
var require_RollUpdater = __commonJS({
  "node_modules/tsparticles-updater-roll/cjs/RollUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RollUpdater = void 0;
    var Utils_1 = require_Utils7();
    var Roll_1 = require_Roll();
    var RollUpdater = class {
      getTransformValues(particle) {
        const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
        return {
          a: rollHorizontal ? Math.cos(roll.angle) : void 0,
          d: rollVertical ? Math.sin(roll.angle) : void 0
        };
      }
      init(particle) {
        (0, Utils_1.initParticle)(particle);
      }
      isEnabled(particle) {
        const roll = particle.options.roll;
        return !particle.destroyed && !particle.spawning && !!roll?.enable;
      }
      loadOptions(options, ...sources) {
        if (!options.roll) {
          options.roll = new Roll_1.Roll();
        }
        for (const source of sources) {
          options.roll.load(source?.roll);
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        (0, Utils_1.updateRoll)(particle, delta);
      }
    };
    exports2.RollUpdater = RollUpdater;
  }
});

// node_modules/tsparticles-updater-roll/cjs/index.js
var require_cjs12 = __commonJS({
  "node_modules/tsparticles-updater-roll/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadRollUpdater = void 0;
    var RollUpdater_1 = require_RollUpdater();
    async function loadRollUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("roll", () => new RollUpdater_1.RollUpdater(), refresh);
    }
    exports2.loadRollUpdater = loadRollUpdater;
  }
});

// node_modules/tsparticles-updater-rotate/cjs/Options/Classes/RotateAnimation.js
var require_RotateAnimation = __commonJS({
  "node_modules/tsparticles-updater-rotate/cjs/Options/Classes/RotateAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RotateAnimation = void 0;
    var tsparticles_engine_1 = require_cjs();
    var RotateAnimation = class {
      constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
        if (data.decay !== void 0) {
          this.decay = (0, tsparticles_engine_1.setRangeValue)(data.decay);
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.RotateAnimation = RotateAnimation;
  }
});

// node_modules/tsparticles-updater-rotate/cjs/Options/Classes/Rotate.js
var require_Rotate = __commonJS({
  "node_modules/tsparticles-updater-rotate/cjs/Options/Classes/Rotate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Rotate = void 0;
    var tsparticles_engine_1 = require_cjs();
    var RotateAnimation_1 = require_RotateAnimation();
    var Rotate = class extends tsparticles_engine_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = "clockwise";
        this.path = false;
        this.value = 0;
      }
      load(data) {
        if (!data) {
          return;
        }
        super.load(data);
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== void 0) {
          this.path = data.path;
        }
      }
    };
    exports2.Rotate = Rotate;
  }
});

// node_modules/tsparticles-updater-rotate/cjs/RotateUpdater.js
var require_RotateUpdater = __commonJS({
  "node_modules/tsparticles-updater-rotate/cjs/RotateUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RotateUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Rotate_1 = require_Rotate();
    function updateRotate(particle, delta) {
      const rotate = particle.rotate, rotateOptions = particle.options.rotate;
      if (!rotate || !rotateOptions) {
        return;
      }
      const rotateAnimation = rotateOptions.animation, speed = (rotate.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = rotate.decay ?? 1;
      if (!rotateAnimation.enable) {
        return;
      }
      switch (rotate.status) {
        case "increasing":
          rotate.value += speed;
          if (rotate.value > max) {
            rotate.value -= max;
          }
          break;
        case "decreasing":
        default:
          rotate.value -= speed;
          if (rotate.value < 0) {
            rotate.value += max;
          }
          break;
      }
      if (rotate.velocity && decay !== 1) {
        rotate.velocity *= decay;
      }
    }
    var RotateUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const rotateOptions = particle.options.rotate;
        if (!rotateOptions) {
          return;
        }
        particle.rotate = {
          enable: rotateOptions.animation.enable,
          value: (0, tsparticles_engine_1.getRangeValue)(rotateOptions.value) * Math.PI / 180
        };
        particle.pathRotation = rotateOptions.path;
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === "random") {
          const index = Math.floor((0, tsparticles_engine_1.getRandom)() * 2);
          rotateDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (rotateDirection) {
          case "counter-clockwise":
          case "counterClockwise":
            particle.rotate.status = "decreasing";
            break;
          case "clockwise":
            particle.rotate.status = "increasing";
            break;
        }
        const rotateAnimation = rotateOptions.animation;
        if (rotateAnimation.enable) {
          particle.rotate.decay = 1 - (0, tsparticles_engine_1.getRangeValue)(rotateAnimation.decay);
          particle.rotate.velocity = (0, tsparticles_engine_1.getRangeValue)(rotateAnimation.speed) / 360 * this.container.retina.reduceFactor;
          if (!rotateAnimation.sync) {
            particle.rotate.velocity *= (0, tsparticles_engine_1.getRandom)();
          }
        }
        particle.rotation = particle.rotate.value;
      }
      isEnabled(particle) {
        const rotate = particle.options.rotate;
        if (!rotate) {
          return false;
        }
        return !particle.destroyed && !particle.spawning && rotate.animation.enable && !rotate.path;
      }
      loadOptions(options, ...sources) {
        if (!options.rotate) {
          options.rotate = new Rotate_1.Rotate();
        }
        for (const source of sources) {
          options.rotate.load(source?.rotate);
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        updateRotate(particle, delta);
        particle.rotation = particle.rotate?.value ?? 0;
      }
    };
    exports2.RotateUpdater = RotateUpdater;
  }
});

// node_modules/tsparticles-updater-rotate/cjs/index.js
var require_cjs13 = __commonJS({
  "node_modules/tsparticles-updater-rotate/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadRotateUpdater = void 0;
    var RotateUpdater_1 = require_RotateUpdater();
    async function loadRotateUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("rotate", (container) => new RotateUpdater_1.RotateUpdater(container), refresh);
    }
    exports2.loadRotateUpdater = loadRotateUpdater;
  }
});

// node_modules/tsparticles-shape-square/cjs/SquareDrawer.js
var require_SquareDrawer = __commonJS({
  "node_modules/tsparticles-shape-square/cjs/SquareDrawer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SquareDrawer = void 0;
    var fixFactor = Math.sqrt(2);
    var SquareDrawer = class {
      draw(context, particle, radius) {
        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;
        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
      }
      getSidesCount() {
        return 4;
      }
    };
    exports2.SquareDrawer = SquareDrawer;
  }
});

// node_modules/tsparticles-shape-square/cjs/index.js
var require_cjs14 = __commonJS({
  "node_modules/tsparticles-shape-square/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadSquareShape = void 0;
    var SquareDrawer_1 = require_SquareDrawer();
    async function loadSquareShape(engine, refresh = true) {
      await engine.addShape(["edge", "square"], new SquareDrawer_1.SquareDrawer(), refresh);
    }
    exports2.loadSquareShape = loadSquareShape;
  }
});

// node_modules/tsparticles-updater-tilt/cjs/Options/Classes/TiltAnimation.js
var require_TiltAnimation = __commonJS({
  "node_modules/tsparticles-updater-tilt/cjs/Options/Classes/TiltAnimation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TiltAnimation = void 0;
    var tsparticles_engine_1 = require_cjs();
    var TiltAnimation = class {
      constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
        if (data.decay !== void 0) {
          this.decay = (0, tsparticles_engine_1.setRangeValue)(data.decay);
        }
        if (data.sync !== void 0) {
          this.sync = data.sync;
        }
      }
    };
    exports2.TiltAnimation = TiltAnimation;
  }
});

// node_modules/tsparticles-updater-tilt/cjs/Options/Classes/Tilt.js
var require_Tilt = __commonJS({
  "node_modules/tsparticles-updater-tilt/cjs/Options/Classes/Tilt.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Tilt = void 0;
    var tsparticles_engine_1 = require_cjs();
    var TiltAnimation_1 = require_TiltAnimation();
    var Tilt = class extends tsparticles_engine_1.ValueWithRandom {
      constructor() {
        super();
        this.animation = new TiltAnimation_1.TiltAnimation();
        this.direction = "clockwise";
        this.enable = false;
        this.value = 0;
      }
      load(data) {
        super.load(data);
        if (!data) {
          return;
        }
        this.animation.load(data.animation);
        if (data.direction !== void 0) {
          this.direction = data.direction;
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
      }
    };
    exports2.Tilt = Tilt;
  }
});

// node_modules/tsparticles-updater-tilt/cjs/Utils.js
var require_Utils8 = __commonJS({
  "node_modules/tsparticles-updater-tilt/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateTilt = void 0;
    function updateTilt(particle, delta) {
      if (!particle.tilt || !particle.options.tilt) {
        return;
      }
      const tilt = particle.options.tilt, tiltAnimation = tilt.animation, speed = (particle.tilt.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = particle.tilt.decay ?? 1;
      if (!tiltAnimation.enable) {
        return;
      }
      switch (particle.tilt.status) {
        case "increasing":
          particle.tilt.value += speed;
          if (particle.tilt.value > max) {
            particle.tilt.value -= max;
          }
          break;
        case "decreasing":
        default:
          particle.tilt.value -= speed;
          if (particle.tilt.value < 0) {
            particle.tilt.value += max;
          }
          break;
      }
      if (particle.tilt.velocity && decay !== 1) {
        particle.tilt.velocity *= decay;
      }
    }
    exports2.updateTilt = updateTilt;
  }
});

// node_modules/tsparticles-updater-tilt/cjs/TiltUpdater.js
var require_TiltUpdater = __commonJS({
  "node_modules/tsparticles-updater-tilt/cjs/TiltUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TiltUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Tilt_1 = require_Tilt();
    var Utils_1 = require_Utils8();
    var TiltUpdater = class {
      constructor(container) {
        this.container = container;
      }
      getTransformValues(particle) {
        const tilt = particle.tilt?.enable && particle.tilt;
        return {
          b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : void 0,
          c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : void 0
        };
      }
      init(particle) {
        const tiltOptions = particle.options.tilt;
        if (!tiltOptions) {
          return;
        }
        particle.tilt = {
          enable: tiltOptions.enable,
          value: (0, tsparticles_engine_1.getRangeValue)(tiltOptions.value) * Math.PI / 180,
          sinDirection: (0, tsparticles_engine_1.getRandom)() >= 0.5 ? 1 : -1,
          cosDirection: (0, tsparticles_engine_1.getRandom)() >= 0.5 ? 1 : -1
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === "random") {
          const index = Math.floor((0, tsparticles_engine_1.getRandom)() * 2);
          tiltDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (tiltDirection) {
          case "counter-clockwise":
          case "counterClockwise":
            particle.tilt.status = "decreasing";
            break;
          case "clockwise":
            particle.tilt.status = "increasing";
            break;
        }
        const tiltAnimation = particle.options.tilt?.animation;
        if (tiltAnimation?.enable) {
          particle.tilt.decay = 1 - (0, tsparticles_engine_1.getRangeValue)(tiltAnimation.decay);
          particle.tilt.velocity = (0, tsparticles_engine_1.getRangeValue)(tiltAnimation.speed) / 360 * this.container.retina.reduceFactor;
          if (!tiltAnimation.sync) {
            particle.tilt.velocity *= (0, tsparticles_engine_1.getRandom)();
          }
        }
      }
      isEnabled(particle) {
        const tiltAnimation = particle.options.tilt?.animation;
        return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
      }
      loadOptions(options, ...sources) {
        if (!options.tilt) {
          options.tilt = new Tilt_1.Tilt();
        }
        for (const source of sources) {
          options.tilt.load(source?.tilt);
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        (0, Utils_1.updateTilt)(particle, delta);
      }
    };
    exports2.TiltUpdater = TiltUpdater;
  }
});

// node_modules/tsparticles-updater-tilt/cjs/index.js
var require_cjs15 = __commonJS({
  "node_modules/tsparticles-updater-tilt/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadTiltUpdater = void 0;
    var TiltUpdater_1 = require_TiltUpdater();
    async function loadTiltUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("tilt", (container) => new TiltUpdater_1.TiltUpdater(container), refresh);
    }
    exports2.loadTiltUpdater = loadTiltUpdater;
  }
});

// node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js
var require_WobbleSpeed = __commonJS({
  "node_modules/tsparticles-updater-wobble/cjs/Options/Classes/WobbleSpeed.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WobbleSpeed = void 0;
    var tsparticles_engine_1 = require_cjs();
    var WobbleSpeed = class {
      constructor() {
        this.angle = 50;
        this.move = 10;
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.angle !== void 0) {
          this.angle = (0, tsparticles_engine_1.setRangeValue)(data.angle);
        }
        if (data.move !== void 0) {
          this.move = (0, tsparticles_engine_1.setRangeValue)(data.move);
        }
      }
    };
    exports2.WobbleSpeed = WobbleSpeed;
  }
});

// node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js
var require_Wobble = __commonJS({
  "node_modules/tsparticles-updater-wobble/cjs/Options/Classes/Wobble.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Wobble = void 0;
    var tsparticles_engine_1 = require_cjs();
    var WobbleSpeed_1 = require_WobbleSpeed();
    var Wobble = class {
      constructor() {
        this.distance = 5;
        this.enable = false;
        this.speed = new WobbleSpeed_1.WobbleSpeed();
      }
      load(data) {
        if (!data) {
          return;
        }
        if (data.distance !== void 0) {
          this.distance = (0, tsparticles_engine_1.setRangeValue)(data.distance);
        }
        if (data.enable !== void 0) {
          this.enable = data.enable;
        }
        if (data.speed !== void 0) {
          if ((0, tsparticles_engine_1.isNumber)(data.speed)) {
            this.speed.load({ angle: data.speed });
          } else {
            const rangeSpeed = data.speed;
            if (rangeSpeed.min !== void 0) {
              this.speed.load({ angle: rangeSpeed });
            } else {
              this.speed.load(data.speed);
            }
          }
        }
      }
    };
    exports2.Wobble = Wobble;
  }
});

// node_modules/tsparticles-updater-wobble/cjs/Utils.js
var require_Utils9 = __commonJS({
  "node_modules/tsparticles-updater-wobble/cjs/Utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateWobble = void 0;
    function updateWobble(particle, delta) {
      const { wobble: wobbleOptions } = particle.options, { wobble } = particle;
      if (!wobbleOptions?.enable || !wobble) {
        return;
      }
      const angleSpeed = wobble.angleSpeed * delta.factor, moveSpeed = wobble.moveSpeed * delta.factor, distance = moveSpeed * ((particle.retina.wobbleDistance ?? 0) * delta.factor) / (1e3 / 60), max = 2 * Math.PI, { position } = particle;
      wobble.angle += angleSpeed;
      if (wobble.angle > max) {
        wobble.angle -= max;
      }
      position.x += distance * Math.cos(wobble.angle);
      position.y += distance * Math.abs(Math.sin(wobble.angle));
    }
    exports2.updateWobble = updateWobble;
  }
});

// node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js
var require_WobbleUpdater = __commonJS({
  "node_modules/tsparticles-updater-wobble/cjs/WobbleUpdater.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WobbleUpdater = void 0;
    var tsparticles_engine_1 = require_cjs();
    var Wobble_1 = require_Wobble();
    var Utils_1 = require_Utils9();
    var WobbleUpdater = class {
      constructor(container) {
        this.container = container;
      }
      init(particle) {
        const wobbleOpt = particle.options.wobble;
        if (wobbleOpt?.enable) {
          particle.wobble = {
            angle: (0, tsparticles_engine_1.getRandom)() * Math.PI * 2,
            angleSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.angle) / 360,
            moveSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.move) / 10
          };
        } else {
          particle.wobble = {
            angle: 0,
            angleSpeed: 0,
            moveSpeed: 0
          };
        }
        particle.retina.wobbleDistance = (0, tsparticles_engine_1.getRangeValue)(wobbleOpt?.distance ?? 0) * this.container.retina.pixelRatio;
      }
      isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
      }
      loadOptions(options, ...sources) {
        if (!options.wobble) {
          options.wobble = new Wobble_1.Wobble();
        }
        for (const source of sources) {
          options.wobble.load(source?.wobble);
        }
      }
      update(particle, delta) {
        if (!this.isEnabled(particle)) {
          return;
        }
        (0, Utils_1.updateWobble)(particle, delta);
      }
    };
    exports2.WobbleUpdater = WobbleUpdater;
  }
});

// node_modules/tsparticles-updater-wobble/cjs/index.js
var require_cjs16 = __commonJS({
  "node_modules/tsparticles-updater-wobble/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadWobbleUpdater = void 0;
    var WobbleUpdater_1 = require_WobbleUpdater();
    async function loadWobbleUpdater(engine, refresh = true) {
      await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater_1.WobbleUpdater(container), refresh);
    }
    exports2.loadWobbleUpdater = loadWobbleUpdater;
  }
});

// node_modules/tsparticles-preset-confetti/cjs/options.js
var require_options = __commonJS({
  "node_modules/tsparticles-preset-confetti/cjs/options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.options = void 0;
    exports2.options = {
      fullScreen: {
        enable: true,
        zIndex: 100
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 0
        },
        color: {
          value: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"]
        },
        shape: {
          type: ["square", "circle"]
        },
        opacity: {
          value: { min: 0, max: 1 },
          animation: {
            enable: true,
            speed: 0.5,
            startValue: "max",
            destroy: "min"
          }
        },
        size: {
          value: 5
        },
        links: {
          enable: false
        },
        life: {
          duration: {
            sync: true,
            value: 20 / 6
          },
          count: 1
        },
        move: {
          angle: {
            value: 45,
            offset: 0
          },
          drift: 0,
          enable: true,
          gravity: {
            enable: true,
            acceleration: 9.81
          },
          speed: 45,
          decay: 0.1,
          direction: -90,
          random: true,
          straight: false,
          outModes: {
            default: "none",
            bottom: "destroy"
          }
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: true,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -15,
            max: 15
          }
        }
      },
      detectRetina: true,
      motion: {
        disable: true
      },
      emitters: {
        name: "confetti",
        startCount: 50,
        position: {
          x: 50,
          y: 50
        },
        size: {
          width: 0,
          height: 0
        },
        rate: {
          delay: 0,
          quantity: 0
        },
        life: {
          duration: 0.1,
          count: 1
        }
      }
    };
  }
});

// node_modules/tsparticles-preset-confetti/cjs/index.js
var require_cjs17 = __commonJS({
  "node_modules/tsparticles-preset-confetti/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadConfettiPreset = void 0;
    var tsparticles_basic_1 = require_cjs8();
    var tsparticles_plugin_emitters_1 = require_cjs9();
    var tsparticles_updater_life_1 = require_cjs10();
    var tsparticles_plugin_motion_1 = require_cjs11();
    var tsparticles_updater_roll_1 = require_cjs12();
    var tsparticles_updater_rotate_1 = require_cjs13();
    var tsparticles_shape_square_1 = require_cjs14();
    var tsparticles_updater_tilt_1 = require_cjs15();
    var tsparticles_updater_wobble_1 = require_cjs16();
    var options_1 = require_options();
    async function loadPreset(engine, refresh = true) {
      await (0, tsparticles_basic_1.loadBasic)(engine, false);
      await (0, tsparticles_shape_square_1.loadSquareShape)(engine, false);
      await (0, tsparticles_plugin_emitters_1.loadEmittersPlugin)(engine, false);
      await (0, tsparticles_plugin_motion_1.loadMotionPlugin)(engine, false);
      await (0, tsparticles_updater_wobble_1.loadWobbleUpdater)(engine, false);
      await (0, tsparticles_updater_roll_1.loadRollUpdater)(engine, false);
      await (0, tsparticles_updater_rotate_1.loadRotateUpdater)(engine, false);
      await (0, tsparticles_updater_tilt_1.loadTiltUpdater)(engine, false);
      await (0, tsparticles_updater_life_1.loadLifeUpdater)(engine, false);
      await engine.addPreset("confetti", options_1.options, refresh);
    }
    async function loadConfettiPreset2(engine) {
      await loadPreset(engine);
    }
    exports2.loadConfettiPreset = loadConfettiPreset2;
  }
});

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NeuronotesPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_tsparticles_preset_confetti = __toESM(require_cjs17());

// node_modules/tsparticles-engine/esm/Core/Utils/Constants.js
var generatedAttribute = "generated";
var mouseDownEvent = "pointerdown";
var mouseUpEvent = "pointerup";
var mouseLeaveEvent = "pointerleave";
var mouseOutEvent = "pointerout";
var mouseMoveEvent = "pointermove";
var touchStartEvent = "touchstart";
var touchEndEvent = "touchend";
var touchMoveEvent = "touchmove";
var touchCancelEvent = "touchcancel";
var resizeEvent = "resize";
var visibilityChangeEvent = "visibilitychange";
var errorPrefix = "tsParticles - Error";

// node_modules/tsparticles-engine/esm/Core/Utils/Vector3d.js
var Vector3d = class _Vector3d {
  constructor(xOrCoords, y, z) {
    this._updateFromAngle = (angle, length) => {
      this.x = Math.cos(angle) * length;
      this.y = Math.sin(angle) * length;
    };
    if (!isNumber(xOrCoords) && xOrCoords) {
      this.x = xOrCoords.x;
      this.y = xOrCoords.y;
      const coords3d = xOrCoords;
      this.z = coords3d.z ? coords3d.z : 0;
    } else if (xOrCoords !== void 0 && y !== void 0) {
      this.x = xOrCoords;
      this.y = y;
      this.z = z ?? 0;
    } else {
      throw new Error(`${errorPrefix} Vector3d not initialized correctly`);
    }
  }
  static get origin() {
    return _Vector3d.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(angle) {
    this._updateFromAngle(angle, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(length) {
    this._updateFromAngle(this.angle, length);
  }
  static clone(source) {
    return _Vector3d.create(source.x, source.y, source.z);
  }
  static create(x, y, z) {
    return new _Vector3d(x, y, z);
  }
  add(v) {
    return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  addTo(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }
  copy() {
    return _Vector3d.clone(this);
  }
  distanceTo(v) {
    return this.sub(v).length;
  }
  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }
  div(n) {
    return _Vector3d.create(this.x / n, this.y / n, this.z / n);
  }
  divTo(n) {
    this.x /= n;
    this.y /= n;
    this.z /= n;
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(n) {
    return _Vector3d.create(this.x * n, this.y * n, this.z * n);
  }
  multTo(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }
  normalize() {
    const length = this.length;
    if (length != 0) {
      this.multTo(1 / length);
    }
  }
  rotate(angle) {
    return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
  }
  setTo(c) {
    this.x = c.x;
    this.y = c.y;
    const v3d = c;
    this.z = v3d.z ? v3d.z : 0;
  }
  sub(v) {
    return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Vector.js
var Vector = class _Vector extends Vector3d {
  constructor(xOrCoords, y) {
    super(xOrCoords, y, 0);
  }
  static get origin() {
    return _Vector.create(0, 0);
  }
  static clone(source) {
    return _Vector.create(source.x, source.y);
  }
  static create(x, y) {
    return new _Vector(x, y);
  }
};

// node_modules/tsparticles-engine/esm/Utils/NumberUtils.js
var _random = Math.random;
function getRandom() {
  return clamp(_random(), 0, 1 - 1e-16);
}
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function randomInRange(r) {
  const max = getRangeMax(r);
  let min = getRangeMin(r);
  if (max === min) {
    min = 0;
  }
  return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
  return isNumber(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
  return isNumber(value) ? value : value.min;
}
function getRangeMax(value) {
  return isNumber(value) ? value : value.max;
}
function setRangeValue(source, value) {
  if (source === value || value === void 0 && isNumber(source)) {
    return source;
  }
  const min = getRangeMin(source), max = getRangeMax(source);
  return value !== void 0 ? {
    min: Math.min(min, value),
    max: Math.max(max, value)
  } : setRangeValue(min, max);
}
function getValue(options) {
  const random = options.random, { enable, minimumValue } = isBoolean(random) ? {
    enable: random,
    minimumValue: 0
  } : random;
  return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
function getDistances(pointA, pointB) {
  const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
  return { dx, dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
}
function getDistance(pointA, pointB) {
  return getDistances(pointA, pointB).distance;
}
function getParticleDirectionAngle(direction, position, center) {
  if (isNumber(direction)) {
    return direction * Math.PI / 180;
  }
  switch (direction) {
    case "top":
      return -Math.PI / 2;
    case "top-right":
      return -Math.PI / 4;
    case "right":
      return 0;
    case "bottom-right":
      return Math.PI / 4;
    case "bottom":
      return Math.PI / 2;
    case "bottom-left":
      return 3 * Math.PI / 4;
    case "left":
      return Math.PI;
    case "top-left":
      return -3 * Math.PI / 4;
    case "inside":
      return Math.atan2(center.y - position.y, center.x - position.x);
    case "outside":
      return Math.atan2(position.y - center.y, position.x - center.x);
    default:
      return getRandom() * Math.PI * 2;
  }
}
function getParticleBaseVelocity(direction) {
  const baseVelocity = Vector.origin;
  baseVelocity.length = 1;
  baseVelocity.angle = direction;
  return baseVelocity;
}
function calcExactPositionOrRandomFromSize(data) {
  return {
    x: data.position?.x ?? getRandom() * data.size.width,
    y: data.position?.y ?? getRandom() * data.size.height
  };
}
function parseAlpha(input) {
  return input ? input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input) : 1;
}

// node_modules/tsparticles-engine/esm/Utils/Utils.js
var _logger = {
  debug: console.debug,
  error: console.error,
  info: console.info,
  log: console.log,
  verbose: console.log,
  warning: console.warn
};
function getLogger() {
  return _logger;
}
function isSsr() {
  return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
  return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
  if (!hasMatchMedia()) {
    return;
  }
  return matchMedia(query);
}
function safeMutationObserver(callback) {
  if (isSsr() || typeof MutationObserver === "undefined") {
    return;
  }
  return new MutationObserver(callback);
}
function isInArray(value, array) {
  return value === array || isArray(array) && array.indexOf(value) > -1;
}
function arrayRandomIndex(array) {
  return Math.floor(getRandom() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
  return array[index !== void 0 && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function deepExtend(destination, ...sources) {
  for (const source of sources) {
    if (source === void 0 || source === null) {
      continue;
    }
    if (!isObject(source)) {
      destination = source;
      continue;
    }
    const sourceIsArray = Array.isArray(source);
    if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
      destination = [];
    } else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
      destination = {};
    }
    for (const key in source) {
      if (key === "__proto__") {
        continue;
      }
      const sourceDict = source, value = sourceDict[key], destDict = destination;
      destDict[key] = isObject(value) && Array.isArray(value) ? value.map((v) => deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
    }
  }
  return destination;
}
function executeOnSingleOrMultiple(obj, callback) {
  return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
  return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function initParticleNumericAnimationValue(options, pxRatio) {
  const valueRange = options.value, animationOptions = options.animation, res = {
    delayTime: getRangeValue(animationOptions.delay) * 1e3,
    enable: animationOptions.enable,
    value: getRangeValue(options.value) * pxRatio,
    max: getRangeMax(valueRange) * pxRatio,
    min: getRangeMin(valueRange) * pxRatio,
    loops: 0,
    maxLoops: getRangeValue(animationOptions.count),
    time: 0
  };
  if (animationOptions.enable) {
    res.decay = 1 - getRangeValue(animationOptions.decay);
    switch (animationOptions.mode) {
      case "increase":
        res.status = "increasing";
        break;
      case "decrease":
        res.status = "decreasing";
        break;
      case "random":
        res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
        break;
    }
    const autoStatus = animationOptions.mode === "auto";
    switch (animationOptions.startValue) {
      case "min":
        res.value = res.min;
        if (autoStatus) {
          res.status = "increasing";
        }
        break;
      case "max":
        res.value = res.max;
        if (autoStatus) {
          res.status = "decreasing";
        }
        break;
      case "random":
      default:
        res.value = randomInRange(res);
        if (autoStatus) {
          res.status = getRandom() >= 0.5 ? "increasing" : "decreasing";
        }
        break;
    }
  }
  res.initialValue = res.value;
  return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
  const isPercent = positionOrSize.mode === "percent";
  if (!isPercent) {
    const { mode: _, ...rest } = positionOrSize;
    return rest;
  }
  const isPosition = "x" in positionOrSize;
  if (isPosition) {
    return {
      x: positionOrSize.x / 100 * canvasSize.width,
      y: positionOrSize.y / 100 * canvasSize.height
    };
  } else {
    return {
      width: positionOrSize.width / 100 * canvasSize.width,
      height: positionOrSize.height / 100 * canvasSize.height
    };
  }
}
function getPosition(position, canvasSize) {
  return getPositionOrSize(position, canvasSize);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isString(arg) {
  return typeof arg === "string";
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isObject(arg) {
  return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
  return Array.isArray(arg);
}

// node_modules/tsparticles-engine/esm/Utils/ColorUtils.js
var randomColorValue = "random";
var colorManagers = /* @__PURE__ */ new Map();
function addColorManager(manager) {
  colorManagers.set(manager.key, manager);
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function stringToRgba(input) {
  for (const [, manager] of colorManagers) {
    if (input.startsWith(manager.stringPrefix)) {
      return manager.parseString(input);
    }
  }
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
    return r + r + g + g + b + b + (a !== void 0 ? a + a : "");
  }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
  return result ? {
    a: result[4] !== void 0 ? parseInt(result[4], 16) / 255 : 1,
    b: parseInt(result[3], 16),
    g: parseInt(result[2], 16),
    r: parseInt(result[1], 16)
  } : void 0;
}
function rangeColorToRgb(input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return colorToRgb(color.value, index, useIndex);
  }
  if (isArray(color.value)) {
    return rangeColorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const [, manager] of colorManagers) {
    const res = manager.handleRangeColor(color);
    if (res) {
      return res;
    }
  }
}
function colorToRgb(input, index, useIndex = true) {
  if (!input) {
    return;
  }
  const color = isString(input) ? { value: input } : input;
  if (isString(color.value)) {
    return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
  }
  if (isArray(color.value)) {
    return colorToRgb({
      value: itemFromArray(color.value, index, useIndex)
    });
  }
  for (const [, manager] of colorManagers) {
    const res = manager.handleColor(color);
    if (res) {
      return res;
    }
  }
}
function rangeColorToHsl(color, index, useIndex = true) {
  const rgb = rangeColorToRgb(color, index, useIndex);
  return rgb ? rgbToHsl(rgb) : void 0;
}
function rgbToHsl(color) {
  const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
    h: 0,
    l: (max + min) / 2,
    s: 0
  };
  if (max !== min) {
    res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? 2 + (b1 - r1) / (max - min) : 4 + (r1 - g1) / (max - min);
  }
  res.l *= 100;
  res.s *= 100;
  res.h *= 60;
  if (res.h < 0) {
    res.h += 360;
  }
  if (res.h >= 360) {
    res.h -= 360;
  }
  return res;
}
function stringToRgb(input) {
  return stringToRgba(input);
}
function hslToRgb(hsl) {
  const result = { b: 0, g: 0, r: 0 }, hslPercent = {
    h: hsl.h / 360,
    l: hsl.l / 100,
    s: hsl.s / 100
  };
  if (!hslPercent.s) {
    result.r = result.g = result.b = hslPercent.l;
  } else {
    const q = hslPercent.l < 0.5 ? hslPercent.l * (1 + hslPercent.s) : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
    result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
    result.g = hue2rgb(p, q, hslPercent.h);
    result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
  }
  result.r = Math.floor(result.r * 255);
  result.g = Math.floor(result.g * 255);
  result.b = Math.floor(result.b * 255);
  return result;
}
function hslaToRgba(hsla) {
  const rgbResult = hslToRgb(hsla);
  return {
    a: hsla.a,
    b: rgbResult.b,
    g: rgbResult.g,
    r: rgbResult.r
  };
}
function getRandomRgbColor(min) {
  const fixedMin = min ?? 0;
  return {
    b: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    g: Math.floor(randomInRange(setRangeValue(fixedMin, 256))),
    r: Math.floor(randomInRange(setRangeValue(fixedMin, 256)))
  };
}
function getStyleFromRgb(color, opacity) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? 1})`;
}
function getStyleFromHsl(color, opacity) {
  return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? 1})`;
}
function getHslFromAnimation(animation) {
  return animation !== void 0 ? {
    h: animation.h.value,
    s: animation.s.value,
    l: animation.l.value
  } : void 0;
}

// node_modules/tsparticles-engine/esm/Utils/CanvasUtils.js
function paintBase(context, dimension, baseColor) {
  context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
  context.fillRect(0, 0, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
  if (!image) {
    return;
  }
  context.globalAlpha = opacity;
  context.drawImage(image, 0, 0, dimension.width, dimension.height);
  context.globalAlpha = 1;
}
function clear(context, dimension) {
  context.clearRect(0, 0, dimension.width, dimension.height);
}
function drawParticle(data) {
  const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data;
  const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
    sin: Math.sin(angle),
    cos: Math.cos(angle)
  }, transformData = {
    a: rotateData.cos * (transform.a ?? 1),
    b: rotateData.sin * (transform.b ?? 1),
    c: -rotateData.sin * (transform.c ?? 1),
    d: rotateData.cos * (transform.d ?? 1)
  };
  context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
  context.beginPath();
  if (backgroundMask) {
    context.globalCompositeOperation = composite;
  }
  const shadowColor = particle.shadowColor;
  if (shadow.enable && shadowColor) {
    context.shadowBlur = shadow.blur;
    context.shadowColor = getStyleFromRgb(shadowColor);
    context.shadowOffsetX = shadow.offset.x;
    context.shadowOffsetY = shadow.offset.y;
  }
  if (colorStyles.fill) {
    context.fillStyle = colorStyles.fill;
  }
  const strokeWidth = particle.strokeWidth ?? 0;
  context.lineWidth = strokeWidth;
  if (colorStyles.stroke) {
    context.strokeStyle = colorStyles.stroke;
  }
  drawShape(container, context, particle, radius, opacity, delta);
  if (strokeWidth > 0) {
    context.stroke();
  }
  if (particle.close) {
    context.closePath();
  }
  if (particle.fill) {
    context.fill();
  }
  drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
  context.globalCompositeOperation = "source-over";
  context.setTransform(1, 0, 0, 1, 0, 0);
}
function drawShape(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!drawer) {
    return;
  }
  drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
  if (!particle.shape) {
    return;
  }
  const drawer = container.drawers.get(particle.shape);
  if (!drawer || !drawer.afterEffect) {
    return;
  }
  drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
function drawPlugin(context, plugin, delta) {
  if (!plugin.draw) {
    return;
  }
  plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
  if (!plugin.drawParticle) {
    return;
  }
  plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
  return {
    h: color.h,
    s: color.s,
    l: color.l + (type === "darken" ? -1 : 1) * value
  };
}

// node_modules/tsparticles-engine/esm/Core/Canvas.js
function setTransformValue(factor, newFactor, key) {
  const newValue = newFactor[key];
  if (newValue !== void 0) {
    factor[key] = (factor[key] ?? 1) * newValue;
  }
}
var Canvas = class {
  constructor(container) {
    this.container = container;
    this._applyPostDrawUpdaters = (particle) => {
      for (const updater of this._postDrawUpdaters) {
        updater.afterDraw && updater.afterDraw(particle);
      }
    };
    this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
      for (const updater of this._preDrawUpdaters) {
        if (updater.getColorStyles) {
          const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
          if (fill) {
            colorStyles.fill = fill;
          }
          if (stroke) {
            colorStyles.stroke = stroke;
          }
        }
        if (updater.getTransformValues) {
          const updaterTransform = updater.getTransformValues(particle);
          for (const key in updaterTransform) {
            setTransformValue(transform, updaterTransform, key);
          }
        }
        updater.beforeDraw && updater.beforeDraw(particle);
      }
    };
    this._applyResizePlugins = () => {
      for (const plugin of this._resizePlugins) {
        plugin.resize && plugin.resize();
      }
    };
    this._getPluginParticleColors = (particle) => {
      let fColor, sColor;
      for (const plugin of this._colorPlugins) {
        if (!fColor && plugin.particleFillColor) {
          fColor = rangeColorToHsl(plugin.particleFillColor(particle));
        }
        if (!sColor && plugin.particleStrokeColor) {
          sColor = rangeColorToHsl(plugin.particleStrokeColor(particle));
        }
        if (fColor && sColor) {
          break;
        }
      }
      return [fColor, sColor];
    };
    this._initCover = () => {
      const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = rangeColorToRgb(color);
      if (coverRgb) {
        const coverColor = {
          ...coverRgb,
          a: cover.opacity
        };
        this._coverColorStyle = getStyleFromRgb(coverColor, coverColor.a);
      }
    };
    this._initStyle = () => {
      const element = this.element, options = this.container.actualOptions;
      if (!element) {
        return;
      }
      if (this._fullScreen) {
        this._originalStyle = deepExtend({}, element.style);
        this._setFullScreenStyle();
      } else {
        this._resetOriginalStyle();
      }
      for (const key in options.style) {
        if (!key || !options.style) {
          continue;
        }
        const value = options.style[key];
        if (!value) {
          continue;
        }
        element.style.setProperty(key, value, "important");
      }
    };
    this._initTrail = async () => {
      const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
      if (!trail.enable) {
        return;
      }
      if (trailFill.color) {
        const fillColor = rangeColorToRgb(trailFill.color);
        if (!fillColor) {
          return;
        }
        const trail2 = options.particles.move.trail;
        this._trailFill = {
          color: {
            ...fillColor
          },
          opacity: 1 / trail2.length
        };
      } else {
        await new Promise((resolve, reject) => {
          if (!trailFill.image) {
            return;
          }
          const img = document.createElement("img");
          img.addEventListener("load", () => {
            this._trailFill = {
              image: img,
              opacity: 1 / trail.length
            };
            resolve();
          });
          img.addEventListener("error", (evt) => {
            reject(evt.error);
          });
          img.src = trailFill.image;
        });
      }
    };
    this._paintBase = (baseColor) => {
      this.draw((ctx) => paintBase(ctx, this.size, baseColor));
    };
    this._paintImage = (image, opacity) => {
      this.draw((ctx) => paintImage(ctx, this.size, image, opacity));
    };
    this._repairStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      this._safeMutationObserver((observer) => observer.disconnect());
      this._initStyle();
      this.initBackground();
      this._safeMutationObserver((observer) => observer.observe(element, { attributes: true }));
    };
    this._resetOriginalStyle = () => {
      const element = this.element, originalStyle = this._originalStyle;
      if (!(element && originalStyle)) {
        return;
      }
      const style = element.style;
      style.position = originalStyle.position;
      style.zIndex = originalStyle.zIndex;
      style.top = originalStyle.top;
      style.left = originalStyle.left;
      style.width = originalStyle.width;
      style.height = originalStyle.height;
    };
    this._safeMutationObserver = (callback) => {
      if (!this._mutationObserver) {
        return;
      }
      callback(this._mutationObserver);
    };
    this._setFullScreenStyle = () => {
      const element = this.element;
      if (!element) {
        return;
      }
      const priority = "important", style = element.style;
      style.setProperty("position", "fixed", priority);
      style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
      style.setProperty("top", "0", priority);
      style.setProperty("left", "0", priority);
      style.setProperty("width", "100%", priority);
      style.setProperty("height", "100%", priority);
    };
    this.size = {
      height: 0,
      width: 0
    };
    this._context = null;
    this._generated = false;
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && trailFill) {
      if (trailFill.color) {
        this._paintBase(getStyleFromRgb(trailFill.color, trailFill.opacity));
      } else if (trailFill.image) {
        this._paintImage(trailFill.image, trailFill.opacity);
      }
    } else {
      this.draw((ctx) => {
        clear(ctx, this.size);
      });
    }
  }
  destroy() {
    this.stop();
    if (this._generated) {
      const element = this.element;
      element && element.remove();
    } else {
      this._resetOriginalStyle();
    }
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    this._resizePlugins = [];
    this._colorPlugins = [];
  }
  draw(cb) {
    const ctx = this._context;
    if (!ctx) {
      return;
    }
    return cb(ctx);
  }
  drawParticle(particle, delta) {
    if (particle.spawning || particle.destroyed) {
      return;
    }
    const radius = particle.getRadius();
    if (radius <= 0) {
      return;
    }
    const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
    let [fColor, sColor] = this._getPluginParticleColors(particle);
    if (!fColor) {
      fColor = pfColor;
    }
    if (!sColor) {
      sColor = psColor;
    }
    if (!fColor && !sColor) {
      return;
    }
    this.draw((ctx) => {
      const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? 1, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
        fill: fColor ? getStyleFromHsl(fColor, zOpacity) : void 0
      };
      colorStyles.stroke = sColor ? getStyleFromHsl(sColor, zStrokeOpacity) : colorStyles.fill;
      this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
      drawParticle({
        container,
        context: ctx,
        particle,
        delta,
        colorStyles,
        backgroundMask: options.backgroundMask.enable,
        composite: options.backgroundMask.composite,
        radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
        opacity: zOpacity,
        shadow: particle.options.shadow,
        transform
      });
      this._applyPostDrawUpdaters(particle);
    });
  }
  drawParticlePlugin(plugin, particle, delta) {
    this.draw((ctx) => drawParticlePlugin(ctx, plugin, particle, delta));
  }
  drawPlugin(plugin, delta) {
    this.draw((ctx) => drawPlugin(ctx, plugin, delta));
  }
  async init() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = safeMutationObserver((records) => {
      for (const record of records) {
        if (record.type === "attributes" && record.attributeName === "style") {
          this._repairStyle();
        }
      }
    });
    this.resize();
    this._initStyle();
    this._initCover();
    try {
      await this._initTrail();
    } catch (e) {
      getLogger().error(e);
    }
    this.initBackground();
    this._safeMutationObserver((obs) => {
      if (!this.element) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.initUpdaters();
    this.initPlugins();
    this.paint();
  }
  initBackground() {
    const options = this.container.actualOptions, background = options.background, element = this.element;
    if (!element) {
      return;
    }
    const elementStyle = element.style;
    if (!elementStyle) {
      return;
    }
    if (background.color) {
      const color = rangeColorToRgb(background.color);
      elementStyle.backgroundColor = color ? getStyleFromRgb(color, background.opacity) : "";
    } else {
      elementStyle.backgroundColor = "";
    }
    elementStyle.backgroundImage = background.image || "";
    elementStyle.backgroundPosition = background.position || "";
    elementStyle.backgroundRepeat = background.repeat || "";
    elementStyle.backgroundSize = background.size || "";
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, plugin] of this.container.plugins) {
      if (plugin.resize) {
        this._resizePlugins.push(plugin);
      }
      if (plugin.particleFillColor || plugin.particleStrokeColor) {
        this._colorPlugins.push(plugin);
      }
    }
  }
  initUpdaters() {
    this._preDrawUpdaters = [];
    this._postDrawUpdaters = [];
    for (const updater of this.container.particles.updaters) {
      if (updater.afterDraw) {
        this._postDrawUpdaters.push(updater);
      }
      if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
        this._preDrawUpdaters.push(updater);
      }
    }
  }
  loadCanvas(canvas) {
    if (this._generated && this.element) {
      this.element.remove();
    }
    this._generated = canvas.dataset && generatedAttribute in canvas.dataset ? canvas.dataset[generatedAttribute] === "true" : this._generated;
    this.element = canvas;
    this.element.ariaHidden = "true";
    this._originalStyle = deepExtend({}, this.element.style);
    this.size.height = canvas.offsetHeight;
    this.size.width = canvas.offsetWidth;
    this._context = this.element.getContext("2d");
    this._safeMutationObserver((obs) => {
      if (!this.element) {
        return;
      }
      obs.observe(this.element, { attributes: true });
    });
    this.container.retina.init();
    this.initBackground();
  }
  paint() {
    const options = this.container.actualOptions;
    this.draw((ctx) => {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        clear(ctx, this.size);
        this._paintBase(this._coverColorStyle);
      } else {
        this._paintBase();
      }
    });
  }
  resize() {
    if (!this.element) {
      return false;
    }
    const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
      width: this.element.offsetWidth * pxRatio,
      height: this.element.offsetHeight * pxRatio
    };
    if (newSize.height === size.height && newSize.width === size.width && newSize.height === this.element.height && newSize.width === this.element.width) {
      return false;
    }
    const oldSize = { ...size };
    this.element.width = size.width = this.element.offsetWidth * pxRatio;
    this.element.height = size.height = this.element.offsetHeight * pxRatio;
    if (this.container.started) {
      this.resizeFactor = {
        width: size.width / oldSize.width,
        height: size.height / oldSize.height
      };
    }
    return true;
  }
  stop() {
    this._safeMutationObserver((obs) => obs.disconnect());
    this._mutationObserver = void 0;
    this.draw((ctx) => clear(ctx, this.size));
  }
  async windowResize() {
    if (!this.element || !this.resize()) {
      return;
    }
    const container = this.container, needsRefresh = container.updateActualOptions();
    container.particles.setDensity();
    this._applyResizePlugins();
    if (needsRefresh) {
      await container.refresh();
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/EventListeners.js
function manageListener(element, event, handler, add, options) {
  if (add) {
    let addOptions = { passive: true };
    if (isBoolean(options)) {
      addOptions.capture = options;
    } else if (options !== void 0) {
      addOptions = options;
    }
    element.addEventListener(event, handler, addOptions);
  } else {
    const removeOptions = options;
    element.removeEventListener(event, handler, removeOptions);
  }
}
var EventListeners = class {
  constructor(container) {
    this.container = container;
    this._doMouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions;
      if (this._canPush) {
        const mouseInteractivity = container2.interactivity.mouse, mousePos = mouseInteractivity.position;
        if (!mousePos) {
          return;
        }
        mouseInteractivity.clickPosition = { ...mousePos };
        mouseInteractivity.clickTime = (/* @__PURE__ */ new Date()).getTime();
        const onClick = options.interactivity.events.onClick;
        executeOnSingleOrMultiple(onClick.mode, (mode) => this.container.handleClickMode(mode));
      }
      if (e.type === "touchend") {
        setTimeout(() => this._mouseTouchFinish(), 500);
      }
    };
    this._handleThemeChange = (e) => {
      const mediaEvent = e, container2 = this.container, options = container2.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme2) => theme2.name === themeName);
      if (theme && theme.default.auto) {
        container2.loadTheme(themeName);
      }
    };
    this._handleVisibilityChange = () => {
      const container2 = this.container, options = container2.actualOptions;
      this._mouseTouchFinish();
      if (!options.pauseOnBlur) {
        return;
      }
      if (document && document.hidden) {
        container2.pageHidden = true;
        container2.pause();
      } else {
        container2.pageHidden = false;
        if (container2.getAnimationStatus()) {
          container2.play(true);
        } else {
          container2.draw(true);
        }
      }
    };
    this._handleWindowResize = async () => {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
        delete this._resizeTimeout;
      }
      this._resizeTimeout = setTimeout(async () => {
        const canvas = this.container.canvas;
        canvas && await canvas.windowResize();
      }, this.container.actualOptions.interactivity.events.resize.delay * 1e3);
    };
    this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      const interactivityEl = container2.interactivity.element;
      if (!interactivityEl) {
        return;
      }
      const html = interactivityEl, canvasEl = container2.canvas.element;
      if (canvasEl) {
        canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
      }
      if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
        return;
      }
      manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
      manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
      manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
      if (!options.interactivity.events.onClick.enable) {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add);
      } else {
        manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add);
        manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
        manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
      }
      manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
      manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
    };
    this._manageListeners = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container2.canvas.element;
      let mouseLeaveTmpEvent = mouseLeaveEvent;
      if (detectType === "window") {
        container2.interactivity.element = window;
        mouseLeaveTmpEvent = mouseOutEvent;
      } else if (detectType === "parent" && canvasEl) {
        container2.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
      } else {
        container2.interactivity.element = canvasEl;
      }
      this._manageMediaMatch(add);
      this._manageResize(add);
      this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
      if (document) {
        manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
      }
    };
    this._manageMediaMatch = (add) => {
      const handlers = this._handlers, mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)");
      if (!mediaMatch) {
        return;
      }
      if (mediaMatch.addEventListener !== void 0) {
        manageListener(mediaMatch, "change", handlers.themeChange, add);
        return;
      }
      if (mediaMatch.addListener === void 0) {
        return;
      }
      if (add) {
        mediaMatch.addListener(handlers.oldThemeChange);
      } else {
        mediaMatch.removeListener(handlers.oldThemeChange);
      }
    };
    this._manageResize = (add) => {
      const handlers = this._handlers, container2 = this.container, options = container2.actualOptions;
      if (!options.interactivity.events.resize) {
        return;
      }
      if (typeof ResizeObserver === "undefined") {
        manageListener(window, resizeEvent, handlers.resize, add);
        return;
      }
      const canvasEl = container2.canvas.element;
      if (this._resizeObserver && !add) {
        if (canvasEl) {
          this._resizeObserver.unobserve(canvasEl);
        }
        this._resizeObserver.disconnect();
        delete this._resizeObserver;
      } else if (!this._resizeObserver && add && canvasEl) {
        this._resizeObserver = new ResizeObserver(async (entries) => {
          const entry = entries.find((e) => e.target === canvasEl);
          if (!entry) {
            return;
          }
          await this._handleWindowResize();
        });
        this._resizeObserver.observe(canvasEl);
      }
    };
    this._mouseDown = () => {
      const { interactivity } = this.container;
      if (!interactivity) {
        return;
      }
      const { mouse } = interactivity;
      mouse.clicking = true;
      mouse.downPosition = mouse.position;
    };
    this._mouseTouchClick = (e) => {
      const container2 = this.container, options = container2.actualOptions, { mouse } = container2.interactivity;
      mouse.inside = true;
      let handled = false;
      const mousePosition = mouse.position;
      if (!mousePosition || !options.interactivity.events.onClick.enable) {
        return;
      }
      for (const [, plugin] of container2.plugins) {
        if (!plugin.clickPositionValid) {
          continue;
        }
        handled = plugin.clickPositionValid(mousePosition);
        if (handled) {
          break;
        }
      }
      if (!handled) {
        this._doMouseTouchClick(e);
      }
      mouse.clicking = false;
    };
    this._mouseTouchFinish = () => {
      const interactivity = this.container.interactivity;
      if (!interactivity) {
        return;
      }
      const mouse = interactivity.mouse;
      delete mouse.position;
      delete mouse.clickPosition;
      delete mouse.downPosition;
      interactivity.status = mouseLeaveEvent;
      mouse.inside = false;
      mouse.clicking = false;
    };
    this._mouseTouchMove = (e) => {
      const container2 = this.container, options = container2.actualOptions, interactivity = container2.interactivity, canvasEl = container2.canvas.element;
      if (!interactivity || !interactivity.element) {
        return;
      }
      interactivity.mouse.inside = true;
      let pos;
      if (e.type.startsWith("pointer")) {
        this._canPush = true;
        const mouseEvent = e;
        if (interactivity.element === window) {
          if (canvasEl) {
            const clientRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.clientX - clientRect.left,
              y: mouseEvent.clientY - clientRect.top
            };
          }
        } else if (options.interactivity.detectsOn === "parent") {
          const source = mouseEvent.target, target = mouseEvent.currentTarget;
          if (source && target && canvasEl) {
            const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
              y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top)
            };
          } else {
            pos = {
              x: mouseEvent.offsetX ?? mouseEvent.clientX,
              y: mouseEvent.offsetY ?? mouseEvent.clientY
            };
          }
        } else if (mouseEvent.target === canvasEl) {
          pos = {
            x: mouseEvent.offsetX ?? mouseEvent.clientX,
            y: mouseEvent.offsetY ?? mouseEvent.clientY
          };
        }
      } else {
        this._canPush = e.type !== "touchmove";
        if (canvasEl) {
          const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvasEl.getBoundingClientRect();
          pos = {
            x: lastTouch.clientX - (canvasRect.left ?? 0),
            y: lastTouch.clientY - (canvasRect.top ?? 0)
          };
        }
      }
      const pxRatio = container2.retina.pixelRatio;
      if (pos) {
        pos.x *= pxRatio;
        pos.y *= pxRatio;
      }
      interactivity.mouse.position = pos;
      interactivity.status = mouseMoveEvent;
    };
    this._touchEnd = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchFinish();
    };
    this._touchEndClick = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.delete(touch.identifier);
      }
      this._mouseTouchClick(e);
    };
    this._touchStart = (e) => {
      const evt = e, touches = Array.from(evt.changedTouches);
      for (const touch of touches) {
        this._touches.set(touch.identifier, performance.now());
      }
      this._mouseTouchMove(e);
    };
    this._canPush = true;
    this._touches = /* @__PURE__ */ new Map();
    this._handlers = {
      mouseDown: () => this._mouseDown(),
      mouseLeave: () => this._mouseTouchFinish(),
      mouseMove: (e) => this._mouseTouchMove(e),
      mouseUp: (e) => this._mouseTouchClick(e),
      touchStart: (e) => this._touchStart(e),
      touchMove: (e) => this._mouseTouchMove(e),
      touchEnd: (e) => this._touchEnd(e),
      touchCancel: (e) => this._touchEnd(e),
      touchEndClick: (e) => this._touchEndClick(e),
      visibilityChange: () => this._handleVisibilityChange(),
      themeChange: (e) => this._handleThemeChange(e),
      oldThemeChange: (e) => this._handleThemeChange(e),
      resize: () => {
        this._handleWindowResize();
      }
    };
  }
  addListeners() {
    this._manageListeners(true);
  }
  removeListeners() {
    this._manageListeners(false);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/OptionsColor.js
var OptionsColor = class _OptionsColor {
  constructor() {
    this.value = "";
  }
  static create(source, data) {
    const color = new _OptionsColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    if (data?.value === void 0) {
      return;
    }
    this.value = data.value;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Background/Background.js
var Background = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "";
    this.image = "";
    this.position = "";
    this.repeat = "";
    this.size = "";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
    if (data.position !== void 0) {
      this.position = data.position;
    }
    if (data.repeat !== void 0) {
      this.repeat = data.repeat;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMaskCover.js
var BackgroundMaskCover = class {
  constructor() {
    this.color = new OptionsColor();
    this.color.value = "#fff";
    this.opacity = 1;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.opacity !== void 0) {
      this.opacity = data.opacity;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/BackgroundMask/BackgroundMask.js
var BackgroundMask = class {
  constructor() {
    this.composite = "destination-out";
    this.cover = new BackgroundMaskCover();
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.composite !== void 0) {
      this.composite = data.composite;
    }
    if (data.cover !== void 0) {
      const cover = data.cover;
      const color = isString(data.cover) ? { color: data.cover } : data.cover;
      this.cover.load(cover.color !== void 0 ? cover : { color });
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/FullScreen/FullScreen.js
var FullScreen = class {
  constructor() {
    this.enable = true;
    this.zIndex = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.zIndex !== void 0) {
      this.zIndex = data.zIndex;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/ClickEvent.js
var ClickEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/DivEvent.js
var DivEvent = class {
  constructor() {
    this.selectors = [];
    this.enable = false;
    this.mode = [];
    this.type = "circle";
  }
  get el() {
    return this.elementId;
  }
  set el(value) {
    this.elementId = value;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(value) {
    this.ids = value;
  }
  get ids() {
    return executeOnSingleOrMultiple(this.selectors, (t) => t.replace("#", ""));
  }
  set ids(value) {
    this.selectors = executeOnSingleOrMultiple(value, (t) => `#${t}`);
  }
  load(data) {
    if (!data) {
      return;
    }
    const ids = data.ids ?? data.elementId ?? data.el;
    if (ids !== void 0) {
      this.ids = ids;
    }
    if (data.selectors !== void 0) {
      this.selectors = data.selectors;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Parallax.js
var Parallax = class {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.force !== void 0) {
      this.force = data.force;
    }
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/HoverEvent.js
var HoverEvent = class {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.parallax.load(data.parallax);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/ResizeEvent.js
var ResizeEvent = class {
  constructor() {
    this.delay = 0.5;
    this.enable = true;
  }
  load(data) {
    if (data === void 0) {
      return;
    }
    if (data.delay !== void 0) {
      this.delay = data.delay;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Events/Events.js
var Events = class {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent();
    this.resize = new ResizeEvent();
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(value) {
    this.onClick = value;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(value) {
    this.onDiv = value;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(value) {
    this.onHover = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.onClick.load(data.onClick ?? data.onclick);
    const onDiv = data.onDiv ?? data.ondiv;
    if (onDiv !== void 0) {
      this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
        const tmp = new DivEvent();
        tmp.load(t);
        return tmp;
      });
    }
    this.onHover.load(data.onHover ?? data.onhover);
    if (isBoolean(data.resize)) {
      this.resize.enable = data.resize;
    } else {
      this.resize.load(data.resize);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Modes/Modes.js
var Modes = class {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (!this._container) {
      return;
    }
    const interactors = this._engine.plugins.interactors.get(this._container);
    if (!interactors) {
      return;
    }
    for (const interactor of interactors) {
      if (!interactor.loadModeOptions) {
        continue;
      }
      interactor.loadModeOptions(this, data);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Interactivity/Interactivity.js
var Interactivity = class {
  constructor(engine, container) {
    this.detectsOn = "window";
    this.events = new Events();
    this.modes = new Modes(engine, container);
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(value) {
    this.detectsOn = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    const detectsOn = data.detectsOn ?? data.detect_on;
    if (detectsOn !== void 0) {
      this.detectsOn = detectsOn;
    }
    this.events.load(data.events);
    this.modes.load(data.modes);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/ManualParticle.js
var ManualParticle = class {
  load(data) {
    if (!data) {
      return;
    }
    if (data.position) {
      this.position = {
        x: data.position.x ?? 50,
        y: data.position.y ?? 50,
        mode: data.position.mode ?? "percent"
      };
    }
    if (data.options) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Responsive.js
var Responsive = class {
  constructor() {
    this.maxWidth = Infinity;
    this.options = {};
    this.mode = "canvas";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.maxWidth !== void 0) {
      this.maxWidth = data.maxWidth;
    }
    if (data.mode !== void 0) {
      if (data.mode === "screen") {
        this.mode = "screen";
      } else {
        this.mode = "canvas";
      }
    }
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Theme/ThemeDefault.js
var ThemeDefault = class {
  constructor() {
    this.auto = false;
    this.mode = "any";
    this.value = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.auto !== void 0) {
      this.auto = data.auto;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Theme/Theme.js
var Theme = class {
  constructor() {
    this.name = "";
    this.default = new ThemeDefault();
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.name !== void 0) {
      this.name = data.name;
    }
    this.default.load(data.default);
    if (data.options !== void 0) {
      this.options = deepExtend({}, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/ColorAnimation.js
var ColorAnimation = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.offset = 0;
    this.speed = 1;
    this.delay = 0;
    this.decay = 0;
    this.sync = true;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/HslAnimation.js
var HslAnimation = class {
  constructor() {
    this.h = new ColorAnimation();
    this.s = new ColorAnimation();
    this.l = new ColorAnimation();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.h.load(data.h);
    this.s.load(data.s);
    this.l.load(data.l);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/AnimatableColor.js
var AnimatableColor = class _AnimatableColor extends OptionsColor {
  constructor() {
    super();
    this.animation = new HslAnimation();
  }
  static create(source, data) {
    const color = new _AnimatableColor();
    color.load(source);
    if (data !== void 0) {
      if (isString(data) || isArray(data)) {
        color.load({ value: data });
      } else {
        color.load(data);
      }
    }
    return color;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const colorAnimation = data.animation;
    if (colorAnimation !== void 0) {
      if (colorAnimation.enable !== void 0) {
        this.animation.h.load(colorAnimation);
      } else {
        this.animation.load(data.animation);
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/CollisionsAbsorb.js
var CollisionsAbsorb = class {
  constructor() {
    this.speed = 2;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.speed !== void 0) {
      this.speed = data.speed;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/CollisionsOverlap.js
var CollisionsOverlap = class {
  constructor() {
    this.enable = true;
    this.retries = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.retries !== void 0) {
      this.retries = data.retries;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/AnimationOptions.js
var AnimationOptions = class {
  constructor() {
    this.count = 0;
    this.enable = false;
    this.speed = 1;
    this.decay = 0;
    this.delay = 0;
    this.sync = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.count !== void 0) {
      this.count = setRangeValue(data.count);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    if (data.sync !== void 0) {
      this.sync = data.sync;
    }
  }
};
var RangedAnimationOptions = class extends AnimationOptions {
  constructor() {
    super();
    this.mode = "auto";
    this.startValue = "random";
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.startValue !== void 0) {
      this.startValue = data.startValue;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Random.js
var Random = class {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.minimumValue !== void 0) {
      this.minimumValue = data.minimumValue;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/ValueWithRandom.js
var ValueWithRandom = class {
  constructor() {
    this.random = new Random();
    this.value = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (isBoolean(data.random)) {
      this.random.enable = data.random;
    } else {
      this.random.load(data.random);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value, this.random.enable ? this.random.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
var ParticlesBounceFactor = class extends ValueWithRandom {
  constructor() {
    super();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Bounce/ParticlesBounce.js
var ParticlesBounce = class {
  constructor() {
    this.horizontal = new ParticlesBounceFactor();
    this.vertical = new ParticlesBounceFactor();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.horizontal.load(data.horizontal);
    this.vertical.load(data.vertical);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Collisions/Collisions.js
var Collisions = class {
  constructor() {
    this.absorb = new CollisionsAbsorb();
    this.bounce = new ParticlesBounce();
    this.enable = false;
    this.maxSpeed = 50;
    this.mode = "bounce";
    this.overlap = new CollisionsOverlap();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.absorb.load(data.absorb);
    this.bounce.load(data.bounce);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    this.overlap.load(data.overlap);
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAngle.js
var MoveAngle = class {
  constructor() {
    this.offset = 0;
    this.value = 90;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.offset !== void 0) {
      this.offset = setRangeValue(data.offset);
    }
    if (data.value !== void 0) {
      this.value = setRangeValue(data.value);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveAttract.js
var MoveAttract = class {
  constructor() {
    this.distance = 200;
    this.enable = false;
    this.rotate = {
      x: 3e3,
      y: 3e3
    };
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(value) {
    this.rotate.x = value;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(value) {
    this.rotate.y = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.distance !== void 0) {
      this.distance = setRangeValue(data.distance);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const rotateX = data.rotate?.x ?? data.rotateX;
    if (rotateX !== void 0) {
      this.rotate.x = rotateX;
    }
    const rotateY = data.rotate?.y ?? data.rotateY;
    if (rotateY !== void 0) {
      this.rotate.y = rotateY;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveCenter.js
var MoveCenter = class {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.mode = "percent";
    this.radius = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.x !== void 0) {
      this.x = data.x;
    }
    if (data.y !== void 0) {
      this.y = data.y;
    }
    if (data.mode !== void 0) {
      this.mode = data.mode;
    }
    if (data.radius !== void 0) {
      this.radius = data.radius;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveGravity.js
var MoveGravity = class {
  constructor() {
    this.acceleration = 9.81;
    this.enable = false;
    this.inverse = false;
    this.maxSpeed = 50;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.inverse !== void 0) {
      this.inverse = data.inverse;
    }
    if (data.maxSpeed !== void 0) {
      this.maxSpeed = setRangeValue(data.maxSpeed);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Path/MovePath.js
var MovePath = class {
  constructor() {
    this.clamp = true;
    this.delay = new ValueWithRandom();
    this.enable = false;
    this.options = {};
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.clamp !== void 0) {
      this.clamp = data.clamp;
    }
    this.delay.load(data.delay);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.generator = data.generator;
    if (data.options) {
      this.options = deepExtend(this.options, data.options);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveTrailFill.js
var MoveTrailFill = class {
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = OptionsColor.create(this.color, data.color);
    }
    if (data.image !== void 0) {
      this.image = data.image;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/MoveTrail.js
var MoveTrail = class {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fill = new MoveTrailFill();
  }
  get fillColor() {
    return this.fill.color;
  }
  set fillColor(value) {
    this.fill.load({ color: value });
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.fill !== void 0 || data.fillColor !== void 0) {
      this.fill.load(data.fill || { color: data.fillColor });
    }
    if (data.length !== void 0) {
      this.length = data.length;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/OutModes.js
var OutModes = class {
  constructor() {
    this.default = "out";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.default !== void 0) {
      this.default = data.default;
    }
    this.bottom = data.bottom ?? data.default;
    this.left = data.left ?? data.default;
    this.right = data.right ?? data.default;
    this.top = data.top ?? data.default;
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Spin.js
var Spin = class {
  constructor() {
    this.acceleration = 0;
    this.enable = false;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.acceleration !== void 0) {
      this.acceleration = setRangeValue(data.acceleration);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.position) {
      this.position = deepExtend({}, data.position);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Move/Move.js
var Move = class {
  constructor() {
    this.angle = new MoveAngle();
    this.attract = new MoveAttract();
    this.center = new MoveCenter();
    this.decay = 0;
    this.distance = {};
    this.direction = "none";
    this.drift = 0;
    this.enable = false;
    this.gravity = new MoveGravity();
    this.path = new MovePath();
    this.outModes = new OutModes();
    this.random = false;
    this.size = false;
    this.speed = 2;
    this.spin = new Spin();
    this.straight = false;
    this.trail = new MoveTrail();
    this.vibrate = false;
    this.warp = false;
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(value) {
    this.collisions = value;
  }
  get collisions() {
    return false;
  }
  set collisions(_) {
  }
  get noise() {
    return this.path;
  }
  set noise(value) {
    this.path = value;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(value) {
    this.outModes.default = value;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(value) {
    this.outMode = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
    this.attract.load(data.attract);
    this.center.load(data.center);
    if (data.decay !== void 0) {
      this.decay = setRangeValue(data.decay);
    }
    if (data.direction !== void 0) {
      this.direction = data.direction;
    }
    if (data.distance !== void 0) {
      this.distance = isNumber(data.distance) ? {
        horizontal: data.distance,
        vertical: data.distance
      } : { ...data.distance };
    }
    if (data.drift !== void 0) {
      this.drift = setRangeValue(data.drift);
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    this.gravity.load(data.gravity);
    const outModes = data.outModes ?? data.outMode ?? data.out_mode;
    if (outModes !== void 0) {
      if (isObject(outModes)) {
        this.outModes.load(outModes);
      } else {
        this.outModes.load({
          default: outModes
        });
      }
    }
    this.path.load(data.path ?? data.noise);
    if (data.random !== void 0) {
      this.random = data.random;
    }
    if (data.size !== void 0) {
      this.size = data.size;
    }
    if (data.speed !== void 0) {
      this.speed = setRangeValue(data.speed);
    }
    this.spin.load(data.spin);
    if (data.straight !== void 0) {
      this.straight = data.straight;
    }
    this.trail.load(data.trail);
    if (data.vibrate !== void 0) {
      this.vibrate = data.vibrate;
    }
    if (data.warp !== void 0) {
      this.warp = data.warp;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/OpacityAnimation.js
var OpacityAnimation = class extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.speed = 2;
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    if (data?.opacity_min !== void 0 && data.minimumValue === void 0) {
      data.minimumValue = data.opacity_min;
    }
    super.load(data);
    if (!data) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Opacity/Opacity.js
var Opacity = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new OpacityAnimation();
    this.random.minimumValue = 0.1;
    this.value = 1;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    super.load(data);
    const animation = data.animation ?? data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesDensity.js
var ParticlesDensity = class {
  constructor() {
    this.enable = false;
    this.width = 1920;
    this.height = 1080;
  }
  get area() {
    return this.width;
  }
  set area(value) {
    this.width = value;
  }
  get factor() {
    return this.height;
  }
  set factor(value) {
    this.height = value;
  }
  get value_area() {
    return this.area;
  }
  set value_area(value) {
    this.area = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    const width = data.width ?? data.area ?? data.value_area;
    if (width !== void 0) {
      this.width = width;
    }
    const height = data.height ?? data.factor;
    if (height !== void 0) {
      this.height = height;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Number/ParticlesNumber.js
var ParticlesNumber = class {
  constructor() {
    this.density = new ParticlesDensity();
    this.limit = 0;
    this.value = 0;
  }
  get max() {
    return this.limit;
  }
  set max(value) {
    this.limit = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    this.density.load(data.density);
    const limit = data.limit ?? data.max;
    if (limit !== void 0) {
      this.limit = limit;
    }
    if (data.value !== void 0) {
      this.value = data.value;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shadow.js
var Shadow = class {
  constructor() {
    this.blur = 0;
    this.color = new OptionsColor();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000";
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.blur !== void 0) {
      this.blur = data.blur;
    }
    this.color = OptionsColor.create(this.color, data.color);
    if (data.enable !== void 0) {
      this.enable = data.enable;
    }
    if (data.offset === void 0) {
      return;
    }
    if (data.offset.x !== void 0) {
      this.offset.x = data.offset.x;
    }
    if (data.offset.y !== void 0) {
      this.offset.y = data.offset.y;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Shape/Shape.js
var charKey = "character";
var charAltKey = "char";
var imageKey = "image";
var imageAltKey = "images";
var polygonKey = "polygon";
var polygonAltKey = "star";
var Shape = class {
  constructor() {
    this.loadShape = (item, mainKey, altKey, altOverride) => {
      if (!item) {
        return;
      }
      const itemIsArray = isArray(item), emptyValue = itemIsArray ? [] : {}, mainDifferentValues = itemIsArray !== isArray(this.options[mainKey]), altDifferentValues = itemIsArray !== isArray(this.options[altKey]);
      if (mainDifferentValues) {
        this.options[mainKey] = emptyValue;
      }
      if (altDifferentValues && altOverride) {
        this.options[altKey] = emptyValue;
      }
      this.options[mainKey] = deepExtend(this.options[mainKey] ?? emptyValue, item);
      if (!this.options[altKey] || altOverride) {
        this.options[altKey] = deepExtend(this.options[altKey] ?? emptyValue, item);
      }
    };
    this.close = true;
    this.fill = true;
    this.options = {};
    this.type = "circle";
  }
  get character() {
    return this.options[charKey] ?? this.options[charAltKey];
  }
  set character(value) {
    this.options[charAltKey] = this.options[charKey] = value;
  }
  get custom() {
    return this.options;
  }
  set custom(value) {
    this.options = value;
  }
  get image() {
    return this.options[imageKey] ?? this.options[imageAltKey];
  }
  set image(value) {
    this.options[imageAltKey] = this.options[imageKey] = value;
  }
  get images() {
    return this.image;
  }
  set images(value) {
    this.image = value;
  }
  get polygon() {
    return this.options[polygonKey] ?? this.options[polygonAltKey];
  }
  set polygon(value) {
    this.options[polygonAltKey] = this.options[polygonKey] = value;
  }
  get stroke() {
    return [];
  }
  set stroke(_value) {
  }
  load(data) {
    if (!data) {
      return;
    }
    const options = data.options ?? data.custom;
    if (options !== void 0) {
      for (const shape in options) {
        const item = options[shape];
        if (item) {
          this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
        }
      }
    }
    this.loadShape(data.character, charKey, charAltKey, true);
    this.loadShape(data.polygon, polygonKey, polygonAltKey, false);
    this.loadShape(data.image ?? data.images, imageKey, imageAltKey, true);
    if (data.close !== void 0) {
      this.close = data.close;
    }
    if (data.fill !== void 0) {
      this.fill = data.fill;
    }
    if (data.type !== void 0) {
      this.type = data.type;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/SizeAnimation.js
var SizeAnimation = class extends RangedAnimationOptions {
  constructor() {
    super();
    this.destroy = "none";
    this.speed = 5;
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(value) {
    this.minimumValue = value;
  }
  load(data) {
    if (data?.size_min !== void 0 && data.minimumValue === void 0) {
      data.minimumValue = data.size_min;
    }
    super.load(data);
    if (!data) {
      return;
    }
    if (data.destroy !== void 0) {
      this.destroy = data.destroy;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Size/Size.js
var Size = class extends ValueWithRandom {
  constructor() {
    super();
    this.animation = new SizeAnimation();
    this.random.minimumValue = 1;
    this.value = 3;
  }
  get anim() {
    return this.animation;
  }
  set anim(value) {
    this.animation = value;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    const animation = data.animation ?? data.anim;
    if (animation !== void 0) {
      this.animation.load(animation);
      this.value = setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/Stroke.js
var Stroke = class {
  constructor() {
    this.width = 0;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.color !== void 0) {
      this.color = AnimatableColor.create(this.color, data.color);
    }
    if (data.width !== void 0) {
      this.width = setRangeValue(data.width);
    }
    if (data.opacity !== void 0) {
      this.opacity = setRangeValue(data.opacity);
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/ZIndex/ZIndex.js
var ZIndex = class extends ValueWithRandom {
  constructor() {
    super();
    this.opacityRate = 1;
    this.sizeRate = 1;
    this.velocityRate = 1;
  }
  load(data) {
    super.load(data);
    if (!data) {
      return;
    }
    if (data.opacityRate !== void 0) {
      this.opacityRate = data.opacityRate;
    }
    if (data.sizeRate !== void 0) {
      this.sizeRate = data.sizeRate;
    }
    if (data.velocityRate !== void 0) {
      this.velocityRate = data.velocityRate;
    }
  }
};

// node_modules/tsparticles-engine/esm/Options/Classes/Particles/ParticlesOptions.js
var ParticlesOptions = class {
  constructor(engine, container) {
    this._engine = engine;
    this._container = container;
    this.bounce = new ParticlesBounce();
    this.collisions = new Collisions();
    this.color = new AnimatableColor();
    this.color.value = "#fff";
    this.groups = {};
    this.move = new Move();
    this.number = new ParticlesNumber();
    this.opacity = new Opacity();
    this.reduceDuplicates = false;
    this.shadow = new Shadow();
    this.shape = new Shape();
    this.size = new Size();
    this.stroke = new Stroke();
    this.zIndex = new ZIndex();
  }
  load(data) {
    if (!data) {
      return;
    }
    this.bounce.load(data.bounce);
    this.color.load(AnimatableColor.create(this.color, data.color));
    if (data.groups !== void 0) {
      for (const group in data.groups) {
        const item = data.groups[group];
        if (item !== void 0) {
          this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
        }
      }
    }
    this.move.load(data.move);
    this.number.load(data.number);
    this.opacity.load(data.opacity);
    if (data.reduceDuplicates !== void 0) {
      this.reduceDuplicates = data.reduceDuplicates;
    }
    this.shape.load(data.shape);
    this.size.load(data.size);
    this.shadow.load(data.shadow);
    this.zIndex.load(data.zIndex);
    const collisions = data.move?.collisions ?? data.move?.bounce;
    if (collisions !== void 0) {
      this.collisions.enable = collisions;
    }
    this.collisions.load(data.collisions);
    if (data.interactivity !== void 0) {
      this.interactivity = deepExtend({}, data.interactivity);
    }
    const strokeToLoad = data.stroke ?? data.shape?.stroke;
    if (strokeToLoad) {
      this.stroke = executeOnSingleOrMultiple(strokeToLoad, (t) => {
        const tmp = new Stroke();
        tmp.load(t);
        return tmp;
      });
    }
    if (this._container) {
      const updaters = this._engine.plugins.updaters.get(this._container);
      if (updaters) {
        for (const updater of updaters) {
          if (updater.loadOptions) {
            updater.loadOptions(this, data);
          }
        }
      }
      const interactors = this._engine.plugins.interactors.get(this._container);
      if (interactors) {
        for (const interactor of interactors) {
          if (interactor.loadParticlesOptions) {
            interactor.loadParticlesOptions(this, data);
          }
        }
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Utils/OptionsUtils.js
function loadOptions(options, ...sourceOptionsArr) {
  for (const sourceOptions of sourceOptionsArr) {
    options.load(sourceOptions);
  }
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
  const options = new ParticlesOptions(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}

// node_modules/tsparticles-engine/esm/Options/Classes/Options.js
var Options = class {
  constructor(engine, container) {
    this._findDefaultTheme = (mode) => {
      return this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme) => theme.default.value && theme.default.mode === "any");
    };
    this._importPreset = (preset) => {
      this.load(this._engine.plugins.getPreset(preset));
    };
    this._engine = engine;
    this._container = container;
    this.autoPlay = true;
    this.background = new Background();
    this.backgroundMask = new BackgroundMask();
    this.defaultThemes = {};
    this.delay = 0;
    this.fullScreen = new FullScreen();
    this.detectRetina = true;
    this.duration = 0;
    this.fpsLimit = 120;
    this.interactivity = new Interactivity(engine, container);
    this.manualParticles = [];
    this.particles = loadParticlesOptions(this._engine, this._container);
    this.pauseOnBlur = true;
    this.pauseOnOutsideViewport = true;
    this.responsive = [];
    this.smooth = false;
    this.style = {};
    this.themes = [];
    this.zLayers = 100;
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(value) {
    this.fullScreen.load(value);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(value) {
    this.fpsLimit = value;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(value) {
    this.detectRetina = value;
  }
  load(data) {
    if (!data) {
      return;
    }
    if (data.preset !== void 0) {
      executeOnSingleOrMultiple(data.preset, (preset) => this._importPreset(preset));
    }
    if (data.autoPlay !== void 0) {
      this.autoPlay = data.autoPlay;
    }
    if (data.delay !== void 0) {
      this.delay = setRangeValue(data.delay);
    }
    const detectRetina = data.detectRetina ?? data.retina_detect;
    if (detectRetina !== void 0) {
      this.detectRetina = detectRetina;
    }
    if (data.duration !== void 0) {
      this.duration = setRangeValue(data.duration);
    }
    const fpsLimit = data.fpsLimit ?? data.fps_limit;
    if (fpsLimit !== void 0) {
      this.fpsLimit = fpsLimit;
    }
    if (data.pauseOnBlur !== void 0) {
      this.pauseOnBlur = data.pauseOnBlur;
    }
    if (data.pauseOnOutsideViewport !== void 0) {
      this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
    }
    if (data.zLayers !== void 0) {
      this.zLayers = data.zLayers;
    }
    this.background.load(data.background);
    const fullScreen = data.fullScreen ?? data.backgroundMode;
    if (isBoolean(fullScreen)) {
      this.fullScreen.enable = fullScreen;
    } else {
      this.fullScreen.load(fullScreen);
    }
    this.backgroundMask.load(data.backgroundMask);
    this.interactivity.load(data.interactivity);
    if (data.manualParticles) {
      this.manualParticles = data.manualParticles.map((t) => {
        const tmp = new ManualParticle();
        tmp.load(t);
        return tmp;
      });
    }
    this.particles.load(data.particles);
    this.style = deepExtend(this.style, data.style);
    this._engine.plugins.loadOptions(this, data);
    if (data.smooth !== void 0) {
      this.smooth = data.smooth;
    }
    const interactors = this._engine.plugins.interactors.get(this._container);
    if (interactors) {
      for (const interactor of interactors) {
        if (interactor.loadOptions) {
          interactor.loadOptions(this, data);
        }
      }
    }
    if (data.responsive !== void 0) {
      for (const responsive of data.responsive) {
        const optResponsive = new Responsive();
        optResponsive.load(responsive);
        this.responsive.push(optResponsive);
      }
    }
    this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
    if (data.themes !== void 0) {
      for (const theme of data.themes) {
        const existingTheme = this.themes.find((t) => t.name === theme.name);
        if (!existingTheme) {
          const optTheme = new Theme();
          optTheme.load(theme);
          this.themes.push(optTheme);
        } else {
          existingTheme.load(theme);
        }
      }
    }
    this.defaultThemes.dark = this._findDefaultTheme("dark")?.name;
    this.defaultThemes.light = this._findDefaultTheme("light")?.name;
  }
  setResponsive(width, pxRatio, defaultOptions) {
    this.load(defaultOptions);
    const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
    this.load(responsiveOptions?.options);
    return responsiveOptions?.maxWidth;
  }
  setTheme(name) {
    if (name) {
      const chosenTheme = this.themes.find((theme) => theme.name === name);
      if (chosenTheme) {
        this.load(chosenTheme.options);
      }
    } else {
      const mediaMatch = safeMatchMedia("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
      if (defaultTheme) {
        this.load(defaultTheme.options);
      }
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/InteractionManager.js
var InteractionManager = class {
  constructor(engine, container) {
    this.container = container;
    this._engine = engine;
    this._interactors = engine.plugins.getInteractors(this.container, true);
    this._externalInteractors = [];
    this._particleInteractors = [];
  }
  async externalInteract(delta) {
    for (const interactor of this._externalInteractors) {
      interactor.isEnabled() && await interactor.interact(delta);
    }
  }
  handleClickMode(mode) {
    for (const interactor of this._externalInteractors) {
      interactor.handleClickMode && interactor.handleClickMode(mode);
    }
  }
  init() {
    this._externalInteractors = [];
    this._particleInteractors = [];
    for (const interactor of this._interactors) {
      switch (interactor.type) {
        case "external":
          this._externalInteractors.push(interactor);
          break;
        case "particles":
          this._particleInteractors.push(interactor);
          break;
      }
      interactor.init();
    }
  }
  async particlesInteract(particle, delta) {
    for (const interactor of this._externalInteractors) {
      interactor.clear(particle, delta);
    }
    for (const interactor of this._particleInteractors) {
      interactor.isEnabled(particle) && await interactor.interact(particle, delta);
    }
  }
  async reset(particle) {
    for (const interactor of this._externalInteractors) {
      interactor.isEnabled() && interactor.reset(particle);
    }
    for (const interactor of this._particleInteractors) {
      interactor.isEnabled(particle) && interactor.reset(particle);
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Particle.js
var fixOutMode = (data) => {
  if (!isInArray(data.outMode, data.checkModes)) {
    return;
  }
  const diameter = data.radius * 2;
  if (data.coord > data.maxCoord - diameter) {
    data.setCb(-data.radius);
  } else if (data.coord < diameter) {
    data.setCb(data.radius);
  }
};
var Particle = class {
  constructor(engine, id, container, position, overrideOptions, group) {
    this.container = container;
    this._calcPosition = (container2, position2, zIndex, tryCount = 0) => {
      for (const [, plugin] of container2.plugins) {
        const pluginPos = plugin.particlePosition !== void 0 ? plugin.particlePosition(position2, this) : void 0;
        if (pluginPos) {
          return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
        }
      }
      const canvasSize = container2.canvas.size, exactPosition = calcExactPositionOrRandomFromSize({
        size: canvasSize,
        position: position2
      }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: ["bounce", "bounce-horizontal"],
          coord: pos.x,
          maxCoord: container2.canvas.size.width,
          setCb: (value) => pos.x += value,
          radius
        });
      }, fixVertical = (outMode) => {
        fixOutMode({
          outMode,
          checkModes: ["bounce", "bounce-vertical"],
          coord: pos.y,
          maxCoord: container2.canvas.size.height,
          setCb: (value) => pos.y += value,
          radius
        });
      };
      fixHorizontal(outModes.left ?? outModes.default);
      fixHorizontal(outModes.right ?? outModes.default);
      fixVertical(outModes.top ?? outModes.default);
      fixVertical(outModes.bottom ?? outModes.default);
      if (this._checkOverlap(pos, tryCount)) {
        return this._calcPosition(container2, void 0, zIndex, tryCount + 1);
      }
      return pos;
    };
    this._calculateVelocity = () => {
      const baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
      if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
        return res;
      }
      const rad = Math.PI / 180 * getRangeValue(moveOptions.angle.value), radOffset = Math.PI / 180 * getRangeValue(moveOptions.angle.offset), range = {
        left: radOffset - rad / 2,
        right: radOffset + rad / 2
      };
      if (!moveOptions.straight) {
        res.angle += randomInRange(setRangeValue(range.left, range.right));
      }
      if (moveOptions.random && typeof moveOptions.speed === "number") {
        res.length *= getRandom();
      }
      return res;
    };
    this._checkOverlap = (pos, tryCount = 0) => {
      const collisionsOptions = this.options.collisions, radius = this.getRadius();
      if (!collisionsOptions.enable) {
        return false;
      }
      const overlapOptions = collisionsOptions.overlap;
      if (overlapOptions.enable) {
        return false;
      }
      const retries = overlapOptions.retries;
      if (retries >= 0 && tryCount > retries) {
        throw new Error(`${errorPrefix} particle is overlapping and can't be placed`);
      }
      return !!this.container.particles.find((particle) => getDistance(pos, particle.position) < radius + particle.getRadius());
    };
    this._getRollColor = (color) => {
      if (!color || !this.roll || !this.backColor && !this.roll.alter) {
        return color;
      }
      const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor(((this.roll.angle ?? 0) + backSum) / (Math.PI / backFactor)) % 2;
      if (!rolled) {
        return color;
      }
      if (this.backColor) {
        return this.backColor;
      }
      if (this.roll.alter) {
        return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
      }
      return color;
    };
    this._initPosition = (position2) => {
      const container2 = this.container, zIndexValue = getRangeValue(this.options.zIndex.value);
      this.position = this._calcPosition(container2, position2, clamp(zIndexValue, 0, container2.zLayers));
      this.initialPosition = this.position.copy();
      const canvasSize = container2.canvas.size;
      this.moveCenter = {
        ...getPosition(this.options.move.center, canvasSize),
        radius: this.options.move.center.radius ?? 0,
        mode: this.options.move.center.mode ?? "percent"
      };
      this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
      switch (this.options.move.direction) {
        case "inside":
          this.outType = "inside";
          break;
        case "outside":
          this.outType = "outside";
          break;
      }
      this.offset = Vector.origin;
    };
    this._loadShapeData = (shapeOptions, reduceDuplicates) => {
      const shapeData = shapeOptions.options[this.shape];
      if (!shapeData) {
        return;
      }
      return deepExtend({
        close: shapeOptions.close,
        fill: shapeOptions.fill
      }, itemFromSingleOrMultiple(shapeData, this.id, reduceDuplicates));
    };
    this._engine = engine;
    this.init(id, position, overrideOptions, group);
  }
  destroy(override) {
    if (this.unbreakable || this.destroyed) {
      return;
    }
    this.destroyed = true;
    this.bubble.inRange = false;
    this.slow.inRange = false;
    const container = this.container, pathGenerator = this.pathGenerator;
    for (const [, plugin] of container.plugins) {
      if (plugin.particleDestroyed) {
        plugin.particleDestroyed(this, override);
      }
    }
    for (const updater of container.particles.updaters) {
      if (updater.particleDestroyed) {
        updater.particleDestroyed(this, override);
      }
    }
    if (pathGenerator) {
      pathGenerator.reset(this);
    }
  }
  draw(delta) {
    const container = this.container;
    for (const [, plugin] of container.plugins) {
      container.canvas.drawParticlePlugin(plugin, this, delta);
    }
    container.canvas.drawParticle(this, delta);
  }
  getFillColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.color));
  }
  getMass() {
    return this.getRadius() ** 2 * Math.PI / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z
    };
  }
  getRadius() {
    return this.bubble.radius ?? this.size.value;
  }
  getStrokeColor() {
    return this._getRollColor(this.bubble.color ?? getHslFromAnimation(this.strokeColor));
  }
  init(id, position, overrideOptions, group) {
    const container = this.container, engine = this._engine;
    this.id = id;
    this.group = group;
    this.fill = true;
    this.pathRotation = false;
    this.close = true;
    this.lastPathTime = 0;
    this.destroyed = false;
    this.unbreakable = false;
    this.rotation = 0;
    this.misplaced = false;
    this.retina = {
      maxDistance: {}
    };
    this.outType = "normal";
    this.ignoresResizeRatio = true;
    const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
    this.shape = itemFromSingleOrMultiple(shapeType, this.id, reduceDuplicates);
    const shapeOptions = particlesOptions.shape;
    if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
      const overrideShapeType = overrideOptions.shape.type, shape = itemFromSingleOrMultiple(overrideShapeType, this.id, reduceDuplicates);
      if (shape) {
        this.shape = shape;
        shapeOptions.load(overrideOptions.shape);
      }
    }
    this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
    particlesOptions.load(overrideOptions);
    const shapeData = this.shapeData;
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    const interactivity = new Interactivity(engine, container);
    interactivity.load(container.actualOptions.interactivity);
    interactivity.load(particlesOptions.interactivity);
    this.interactivity = interactivity;
    this.fill = shapeData?.fill ?? particlesOptions.shape.fill;
    this.close = shapeData?.close ?? particlesOptions.shape.close;
    this.options = particlesOptions;
    const pathOptions = this.options.move.path;
    this.pathDelay = getValue(pathOptions.delay) * 1e3;
    if (pathOptions.generator) {
      this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
      if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
        this.pathGenerator.init(container);
      }
    }
    container.retina.initParticle(this);
    this.size = initParticleNumericAnimationValue(this.options.size, pxRatio);
    this.bubble = {
      inRange: false
    };
    this.slow = {
      inRange: false,
      factor: 1
    };
    this._initPosition(position);
    this.initialVelocity = this._calculateVelocity();
    this.velocity = this.initialVelocity.copy();
    this.moveDecay = 1 - getRangeValue(this.options.move.decay);
    const particles = container.particles;
    particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
    particles.lastZIndex = this.position.z;
    this.zIndexFactor = this.position.z / container.zLayers;
    this.sides = 24;
    let drawer = container.drawers.get(this.shape);
    if (!drawer) {
      drawer = this._engine.plugins.getShapeDrawer(this.shape);
      if (drawer) {
        container.drawers.set(this.shape, drawer);
      }
    }
    if (drawer && drawer.loadShape) {
      drawer.loadShape(this);
    }
    const sideCountFunc = drawer?.getSidesCount;
    if (sideCountFunc) {
      this.sides = sideCountFunc(this);
    }
    this.spawning = false;
    this.shadowColor = rangeColorToRgb(this.options.shadow.color);
    for (const updater of container.particles.updaters) {
      updater.init(this);
    }
    for (const mover of container.particles.movers) {
      mover.init && mover.init(this);
    }
    if (drawer && drawer.particleInit) {
      drawer.particleInit(container, this);
    }
    for (const [, plugin] of container.plugins) {
      plugin.particleCreated && plugin.particleCreated(this);
    }
  }
  isInsideCanvas() {
    const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
    return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    for (const updater of this.container.particles.updaters) {
      updater.reset && updater.reset(this);
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Point.js
var Point = class {
  constructor(position, particle) {
    this.position = position;
    this.particle = particle;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Range.js
var Range = class {
  constructor(x, y) {
    this.position = {
      x,
      y
    };
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Rectangle.js
var Rectangle = class _Rectangle extends Range {
  constructor(x, y, width, height) {
    super(x, y);
    this.size = {
      height,
      width
    };
  }
  contains(point) {
    const w = this.size.width, h = this.size.height, pos = this.position;
    return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
  }
  intersects(range) {
    if (range instanceof Circle) {
      range.intersects(this);
    }
    const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof _Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
    return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Circle.js
var Circle = class _Circle extends Range {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  contains(point) {
    return getDistance(point, this.position) <= this.radius;
  }
  intersects(range) {
    const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
    if (range instanceof _Circle) {
      const rSum = r + range.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
      return rSum > dist;
    } else if (range instanceof Rectangle) {
      const { width, height } = range.size, edges = Math.pow(distPos.x - width, 2) + Math.pow(distPos.y - height, 2);
      return edges <= r ** 2 || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
    }
    return false;
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/QuadTree.js
var QuadTree = class _QuadTree {
  constructor(rectangle, capacity) {
    this.rectangle = rectangle;
    this.capacity = capacity;
    this._subdivide = () => {
      const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity: capacity2 } = this;
      for (let i = 0; i < 4; i++) {
        this._subs.push(new _QuadTree(new Rectangle(x + width / 2 * (i % 2), y + height / 2 * (Math.round(i / 2) - i % 2), width / 2, height / 2), capacity2));
      }
      this._divided = true;
    };
    this._points = [];
    this._divided = false;
    this._subs = [];
  }
  insert(point) {
    if (!this.rectangle.contains(point.position)) {
      return false;
    }
    if (this._points.length < this.capacity) {
      this._points.push(point);
      return true;
    }
    if (!this._divided) {
      this._subdivide();
    }
    return this._subs.some((sub) => sub.insert(point));
  }
  query(range, check, found) {
    const res = found || [];
    if (!range.intersects(this.rectangle)) {
      return [];
    }
    for (const p of this._points) {
      if (!range.contains(p.position) && getDistance(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) {
        continue;
      }
      res.push(p.particle);
    }
    if (this._divided) {
      for (const sub of this._subs) {
        sub.query(range, check, res);
      }
    }
    return res;
  }
  queryCircle(position, radius, check) {
    return this.query(new Circle(position.x, position.y, radius), check);
  }
  queryRectangle(position, size, check) {
    return this.query(new Rectangle(position.x, position.y, size.width, size.height), check);
  }
};

// node_modules/tsparticles-engine/esm/Core/Particles.js
var qTreeCapacity = 4;
var qTreeRectangle = (canvasSize) => {
  return new Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, canvasSize.width * 3 / 2, canvasSize.height * 3 / 2);
};
var Particles = class {
  constructor(engine, container) {
    this._applyDensity = (options, manualCount, group) => {
      if (!options.number.density?.enable) {
        return;
      }
      const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
      this.limit = numberOptions.limit * densityFactor;
      if (particlesCount < particlesNumber) {
        this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
      } else if (particlesCount > particlesNumber) {
        this.removeQuantity(particlesCount - particlesNumber, group);
      }
    };
    this._initDensityFactor = (densityOptions) => {
      const container2 = this._container;
      if (!container2.canvas.element || !densityOptions.enable) {
        return 1;
      }
      const canvas = container2.canvas.element, pxRatio = container2.retina.pixelRatio;
      return canvas.width * canvas.height / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
    };
    this._pushParticle = (position, overrideOptions, group, initializer) => {
      try {
        let particle = this.pool.pop();
        if (particle) {
          particle.init(this._nextId, position, overrideOptions, group);
        } else {
          particle = new Particle(this._engine, this._nextId, this._container, position, overrideOptions, group);
        }
        let canAdd = true;
        if (initializer) {
          canAdd = initializer(particle);
        }
        if (!canAdd) {
          return;
        }
        this._array.push(particle);
        this._zArray.push(particle);
        this._nextId++;
        this._engine.dispatchEvent("particleAdded", {
          container: this._container,
          data: {
            particle
          }
        });
        return particle;
      } catch (e) {
        getLogger().warning(`${errorPrefix} adding particle: ${e}`);
        return;
      }
    };
    this._removeParticle = (index, group, override) => {
      const particle = this._array[index];
      if (!particle || particle.group !== group) {
        return false;
      }
      particle.destroy(override);
      const zIdx = this._zArray.indexOf(particle);
      this._array.splice(index, 1);
      this._zArray.splice(zIdx, 1);
      this.pool.push(particle);
      this._engine.dispatchEvent("particleRemoved", {
        container: this._container,
        data: {
          particle
        }
      });
      return true;
    };
    this._engine = engine;
    this._container = container;
    this._nextId = 0;
    this._array = [];
    this._zArray = [];
    this.pool = [];
    this.limit = 0;
    this.needsSort = false;
    this.lastZIndex = 0;
    this._interactionManager = new InteractionManager(engine, container);
    const canvasSize = container.canvas.size;
    this.quadTree = new QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
    this.movers = this._engine.plugins.getMovers(container, true);
    this.updaters = this._engine.plugins.getUpdaters(container, true);
  }
  get count() {
    return this._array.length;
  }
  addManualParticles() {
    const container = this._container, options = container.actualOptions;
    for (const particle of options.manualParticles) {
      this.addParticle(particle.position ? getPosition(particle.position, container.canvas.size) : void 0, particle.options);
    }
  }
  addParticle(position, overrideOptions, group, initializer) {
    const container = this._container, options = container.actualOptions, limit = options.particles.number.limit;
    if (limit > 0) {
      const countToRemove = this.count + 1 - limit;
      if (countToRemove > 0) {
        this.removeQuantity(countToRemove);
      }
    }
    return this._pushParticle(position, overrideOptions, group, initializer);
  }
  clear() {
    this._array = [];
    this._zArray = [];
  }
  destroy() {
    this._array = [];
    this._zArray = [];
    this.movers = [];
    this.updaters = [];
  }
  async draw(delta) {
    const container = this._container;
    container.canvas.clear();
    await this.update(delta);
    for (const [, plugin] of container.plugins) {
      container.canvas.drawPlugin(plugin, delta);
    }
    for (const p of this._zArray) {
      p.draw(delta);
    }
  }
  filter(condition) {
    return this._array.filter(condition);
  }
  find(condition) {
    return this._array.find(condition);
  }
  handleClickMode(mode) {
    this._interactionManager.handleClickMode(mode);
  }
  init() {
    const container = this._container, options = container.actualOptions;
    this.lastZIndex = 0;
    this.needsSort = false;
    let handled = false;
    this.updaters = this._engine.plugins.getUpdaters(container, true);
    this._interactionManager.init();
    for (const [, plugin] of container.plugins) {
      if (plugin.particlesInitialization !== void 0) {
        handled = plugin.particlesInitialization();
      }
      if (handled) {
        break;
      }
    }
    this._interactionManager.init();
    for (const [, pathGenerator] of container.pathGenerators) {
      pathGenerator.init(container);
    }
    this.addManualParticles();
    if (!handled) {
      for (const group in options.particles.groups) {
        const groupOptions = options.particles.groups[group];
        for (let i = this.count, j = 0; j < groupOptions.number?.value && i < options.particles.number.value; i++, j++) {
          this.addParticle(void 0, groupOptions, group);
        }
      }
      for (let i = this.count; i < options.particles.number.value; i++) {
        this.addParticle();
      }
    }
  }
  push(nb, mouse, overrideOptions, group) {
    this.pushing = true;
    for (let i = 0; i < nb; i++) {
      this.addParticle(mouse?.position, overrideOptions, group);
    }
    this.pushing = false;
  }
  async redraw() {
    this.clear();
    this.init();
    await this.draw({ value: 0, factor: 0 });
  }
  remove(particle, group, override) {
    this.removeAt(this._array.indexOf(particle), void 0, group, override);
  }
  removeAt(index, quantity = 1, group, override) {
    if (index < 0 || index > this.count) {
      return;
    }
    let deleted = 0;
    for (let i = index; deleted < quantity && i < this.count; i++) {
      this._removeParticle(i--, group, override) && deleted++;
    }
  }
  removeQuantity(quantity, group) {
    this.removeAt(0, quantity, group);
  }
  setDensity() {
    const options = this._container.actualOptions, groups = options.particles.groups;
    for (const group in groups) {
      this._applyDensity(groups[group], 0, group);
    }
    this._applyDensity(options.particles, options.manualParticles.length);
  }
  async update(delta) {
    const container = this._container, particlesToDelete = /* @__PURE__ */ new Set();
    this.quadTree = new QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
    for (const [, pathGenerator] of container.pathGenerators) {
      pathGenerator.update();
    }
    for (const [, plugin] of container.plugins) {
      plugin.update && plugin.update(delta);
    }
    for (const particle of this._array) {
      const resizeFactor = container.canvas.resizeFactor;
      if (resizeFactor && !particle.ignoresResizeRatio) {
        particle.position.x *= resizeFactor.width;
        particle.position.y *= resizeFactor.height;
        particle.initialPosition.x *= resizeFactor.width;
        particle.initialPosition.y *= resizeFactor.height;
      }
      particle.ignoresResizeRatio = false;
      await this._interactionManager.reset(particle);
      for (const [, plugin] of this._container.plugins) {
        if (particle.destroyed) {
          break;
        }
        if (plugin.particleUpdate) {
          plugin.particleUpdate(particle, delta);
        }
      }
      for (const mover of this.movers) {
        mover.isEnabled(particle) && mover.move(particle, delta);
      }
      if (particle.destroyed) {
        particlesToDelete.add(particle);
        continue;
      }
      this.quadTree.insert(new Point(particle.getPosition(), particle));
    }
    if (particlesToDelete.size) {
      const checkDelete = (p) => !particlesToDelete.has(p);
      this._array = this.filter(checkDelete);
      this._zArray = this._zArray.filter(checkDelete);
      this.pool.push(...particlesToDelete);
    }
    await this._interactionManager.externalInteract(delta);
    for (const particle of this._array) {
      for (const updater of this.updaters) {
        updater.update(particle, delta);
      }
      if (!particle.destroyed && !particle.spawning) {
        await this._interactionManager.particlesInteract(particle, delta);
      }
    }
    delete container.canvas.resizeFactor;
    if (this.needsSort) {
      const zArray = this._zArray;
      zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
      this.lastZIndex = zArray[zArray.length - 1].position.z;
      this.needsSort = false;
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Retina.js
var Retina = class {
  constructor(container) {
    this.container = container;
    this.pixelRatio = 1;
    this.reduceFactor = 1;
  }
  init() {
    const container = this.container, options = container.actualOptions;
    this.pixelRatio = !options.detectRetina || isSsr() ? 1 : window.devicePixelRatio;
    this.reduceFactor = 1;
    const ratio = this.pixelRatio;
    if (container.canvas.element) {
      const element = container.canvas.element;
      container.canvas.size.width = element.offsetWidth * ratio;
      container.canvas.size.height = element.offsetHeight * ratio;
    }
    const particles = options.particles, moveOptions = particles.move;
    this.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
    this.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
    this.sizeAnimationSpeed = getRangeValue(particles.size.animation.speed) * ratio;
  }
  initParticle(particle) {
    const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
    props.attractDistance = getRangeValue(moveOptions.attract.distance) * ratio;
    props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
    props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
    props.sizeAnimationSpeed = getRangeValue(options.size.animation.speed) * ratio;
    const maxDistance = props.maxDistance;
    maxDistance.horizontal = moveDistance.horizontal !== void 0 ? moveDistance.horizontal * ratio : void 0;
    maxDistance.vertical = moveDistance.vertical !== void 0 ? moveDistance.vertical * ratio : void 0;
    props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
  }
};

// node_modules/tsparticles-engine/esm/Core/Container.js
function guardCheck(container) {
  return container && !container.destroyed;
}
function initDelta(value, fpsLimit = 60, smooth = false) {
  return {
    value,
    factor: smooth ? 60 / fpsLimit : 60 * value / 1e3
  };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
  const options = new Options(engine, container);
  loadOptions(options, ...sourceOptionsArr);
  return options;
}
var defaultPathGeneratorKey = "default";
var defaultPathGenerator = {
  generate: (p) => p.velocity,
  init: () => {
  },
  update: () => {
  },
  reset: () => {
  }
};
var Container = class {
  constructor(engine, id, sourceOptions) {
    this.id = id;
    this._intersectionManager = (entries) => {
      if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
        return;
      }
      for (const entry of entries) {
        if (entry.target !== this.interactivity.element) {
          continue;
        }
        (entry.isIntersecting ? this.play : this.pause)();
      }
    };
    this._nextFrame = async (timestamp) => {
      try {
        if (!this.smooth && this.lastFrameTime !== void 0 && timestamp < this.lastFrameTime + 1e3 / this.fpsLimit) {
          this.draw(false);
          return;
        }
        this.lastFrameTime ?? (this.lastFrameTime = timestamp);
        const delta = initDelta(timestamp - this.lastFrameTime, this.fpsLimit, this.smooth);
        this.addLifeTime(delta.value);
        this.lastFrameTime = timestamp;
        if (delta.value > 1e3) {
          this.draw(false);
          return;
        }
        await this.particles.draw(delta);
        if (!this.alive()) {
          this.destroy();
          return;
        }
        if (this.getAnimationStatus()) {
          this.draw(false);
        }
      } catch (e) {
        getLogger().error(`${errorPrefix} in animation loop`, e);
      }
    };
    this._engine = engine;
    this.fpsLimit = 120;
    this.smooth = false;
    this._delay = 0;
    this._duration = 0;
    this._lifeTime = 0;
    this._firstStart = true;
    this.started = false;
    this.destroyed = false;
    this._paused = true;
    this.lastFrameTime = 0;
    this.zLayers = 100;
    this.pageHidden = false;
    this._sourceOptions = sourceOptions;
    this._initialSourceOptions = sourceOptions;
    this.retina = new Retina(this);
    this.canvas = new Canvas(this);
    this.particles = new Particles(this._engine, this);
    this.pathGenerators = /* @__PURE__ */ new Map();
    this.interactivity = {
      mouse: {
        clicking: false,
        inside: false
      }
    };
    this.plugins = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this);
    this._eventListeners = new EventListeners(this);
    if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
      this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
    }
    this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(callback) {
    if (!guardCheck(this)) {
      return;
    }
    const el = this.interactivity.element;
    if (!el) {
      return;
    }
    const clickOrTouchHandler = (e, pos, radius) => {
      if (!guardCheck(this)) {
        return;
      }
      const pxRatio = this.retina.pixelRatio, posRetina = {
        x: pos.x * pxRatio,
        y: pos.y * pxRatio
      }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
      callback(e, particles);
    };
    const clickHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      const mouseEvent = e, pos = {
        x: mouseEvent.offsetX || mouseEvent.clientX,
        y: mouseEvent.offsetY || mouseEvent.clientY
      };
      clickOrTouchHandler(e, pos, 1);
    };
    const touchStartHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = true;
      touchMoved = false;
    };
    const touchMoveHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touchMoved = true;
    };
    const touchEndHandler = (e) => {
      if (!guardCheck(this)) {
        return;
      }
      if (touched && !touchMoved) {
        const touchEvent = e;
        let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
        if (!lastTouch) {
          lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
          if (!lastTouch) {
            return;
          }
        }
        const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : void 0, pos = {
          x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
          y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0)
        };
        clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
      }
      touched = false;
      touchMoved = false;
    };
    const touchCancelHandler = () => {
      if (!guardCheck(this)) {
        return;
      }
      touched = false;
      touchMoved = false;
    };
    let touched = false, touchMoved = false;
    el.addEventListener("click", clickHandler);
    el.addEventListener("touchstart", touchStartHandler);
    el.addEventListener("touchmove", touchMoveHandler);
    el.addEventListener("touchend", touchEndHandler);
    el.addEventListener("touchcancel", touchCancelHandler);
  }
  addLifeTime(value) {
    this._lifeTime += value;
  }
  addPath(key, generator, override = false) {
    if (!guardCheck(this) || !override && this.pathGenerators.has(key)) {
      return false;
    }
    this.pathGenerators.set(key, generator ?? defaultPathGenerator);
    return true;
  }
  alive() {
    return !this._duration || this._lifeTime <= this._duration;
  }
  destroy() {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    this.particles.destroy();
    this.canvas.destroy();
    for (const [, drawer] of this.drawers) {
      drawer.destroy && drawer.destroy(this);
    }
    for (const key of this.drawers.keys()) {
      this.drawers.delete(key);
    }
    this._engine.plugins.destroy(this);
    this.destroyed = true;
    const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
    if (idx >= 0) {
      mainArr.splice(idx, 1);
    }
    this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(force) {
    if (!guardCheck(this)) {
      return;
    }
    let refreshTime = force;
    this._drawAnimationFrame = requestAnimationFrame(async (timestamp) => {
      if (refreshTime) {
        this.lastFrameTime = void 0;
        refreshTime = false;
      }
      await this._nextFrame(timestamp);
    });
  }
  async export(type, options = {}) {
    for (const [, plugin] of this.plugins) {
      if (!plugin.export) {
        continue;
      }
      const res = await plugin.export(type, options);
      if (!res.supported) {
        continue;
      }
      return res.blob;
    }
    getLogger().error(`${errorPrefix} - Export plugin with type ${type} not found`);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && guardCheck(this);
  }
  handleClickMode(mode) {
    if (!guardCheck(this)) {
      return;
    }
    this.particles.handleClickMode(mode);
    for (const [, plugin] of this.plugins) {
      plugin.handleClickMode && plugin.handleClickMode(mode);
    }
  }
  async init() {
    if (!guardCheck(this)) {
      return;
    }
    const shapes = this._engine.plugins.getSupportedShapes();
    for (const type of shapes) {
      const drawer = this._engine.plugins.getShapeDrawer(type);
      if (drawer) {
        this.drawers.set(type, drawer);
      }
    }
    this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
    for (const [id, plugin] of availablePlugins) {
      this.plugins.set(id, plugin);
    }
    this.retina.init();
    await this.canvas.init();
    this.updateActualOptions();
    this.canvas.initBackground();
    this.canvas.resize();
    this.zLayers = this.actualOptions.zLayers;
    this._duration = getRangeValue(this.actualOptions.duration) * 1e3;
    this._delay = getRangeValue(this.actualOptions.delay) * 1e3;
    this._lifeTime = 0;
    this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
    this.smooth = this.actualOptions.smooth;
    for (const [, drawer] of this.drawers) {
      drawer.init && await drawer.init(this);
    }
    for (const [, plugin] of this.plugins) {
      plugin.init && await plugin.init();
    }
    this._engine.dispatchEvent("containerInit", { container: this });
    this.particles.init();
    this.particles.setDensity();
    for (const [, plugin] of this.plugins) {
      plugin.particlesSetup && plugin.particlesSetup();
    }
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(name) {
    if (!guardCheck(this)) {
      return;
    }
    this._currentTheme = name;
    await this.refresh();
  }
  pause() {
    if (!guardCheck(this)) {
      return;
    }
    if (this._drawAnimationFrame !== void 0) {
      cancelAnimationFrame(this._drawAnimationFrame);
      delete this._drawAnimationFrame;
    }
    if (this._paused) {
      return;
    }
    for (const [, plugin] of this.plugins) {
      plugin.pause && plugin.pause();
    }
    if (!this.pageHidden) {
      this._paused = true;
    }
    this._engine.dispatchEvent("containerPaused", { container: this });
  }
  play(force) {
    if (!guardCheck(this)) {
      return;
    }
    const needsUpdate = this._paused || force;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = false;
      return;
    }
    if (this._paused) {
      this._paused = false;
    }
    if (needsUpdate) {
      for (const [, plugin] of this.plugins) {
        if (plugin.play) {
          plugin.play();
        }
      }
    }
    this._engine.dispatchEvent("containerPlay", { container: this });
    this.draw(needsUpdate || false);
  }
  async refresh() {
    if (!guardCheck(this)) {
      return;
    }
    this.stop();
    return this.start();
  }
  async reset() {
    if (!guardCheck(this)) {
      return;
    }
    this._initialSourceOptions = void 0;
    this._options = loadContainerOptions(this._engine, this);
    this.actualOptions = loadContainerOptions(this._engine, this, this._options);
    return this.refresh();
  }
  setNoise(noiseOrGenerator, init2, update) {
    if (!guardCheck(this)) {
      return;
    }
    this.setPath(noiseOrGenerator, init2, update);
  }
  setPath(pathOrGenerator, init2, update) {
    if (!pathOrGenerator || !guardCheck(this)) {
      return;
    }
    const pathGenerator = { ...defaultPathGenerator };
    if (isFunction(pathOrGenerator)) {
      pathGenerator.generate = pathOrGenerator;
      if (init2) {
        pathGenerator.init = init2;
      }
      if (update) {
        pathGenerator.update = update;
      }
    } else {
      const oldGenerator = pathGenerator;
      pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
      pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
      pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
    }
    this.addPath(defaultPathGeneratorKey, pathGenerator, true);
  }
  async start() {
    if (!guardCheck(this) || this.started) {
      return;
    }
    await this.init();
    this.started = true;
    await new Promise((resolve) => {
      this._delayTimeout = setTimeout(async () => {
        this._eventListeners.addListeners();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
          this._intersectionObserver.observe(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
          plugin.start && await plugin.start();
        }
        this._engine.dispatchEvent("containerStarted", { container: this });
        this.play();
        resolve();
      }, this._delay);
    });
  }
  stop() {
    if (!guardCheck(this) || !this.started) {
      return;
    }
    if (this._delayTimeout) {
      clearTimeout(this._delayTimeout);
      delete this._delayTimeout;
    }
    this._firstStart = true;
    this.started = false;
    this._eventListeners.removeListeners();
    this.pause();
    this.particles.clear();
    this.canvas.stop();
    if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
      this._intersectionObserver.unobserve(this.interactivity.element);
    }
    for (const [, plugin] of this.plugins) {
      plugin.stop && plugin.stop();
    }
    for (const key of this.plugins.keys()) {
      this.plugins.delete(key);
    }
    this._sourceOptions = this._options;
    this._engine.dispatchEvent("containerStopped", { container: this });
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
    this.actualOptions.setTheme(this._currentTheme);
    if (this.responsiveMaxWidth === newMaxWidth) {
      return false;
    }
    this.responsiveMaxWidth = newMaxWidth;
    return true;
  }
};

// node_modules/tsparticles-engine/esm/Utils/EventDispatcher.js
var EventDispatcher = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  addEventListener(type, listener) {
    this.removeEventListener(type, listener);
    let arr = this._listeners.get(type);
    if (!arr) {
      arr = [];
      this._listeners.set(type, arr);
    }
    arr.push(listener);
  }
  dispatchEvent(type, args) {
    const listeners = this._listeners.get(type);
    listeners && listeners.forEach((handler) => handler(args));
  }
  hasEventListener(type) {
    return !!this._listeners.get(type);
  }
  removeAllEventListeners(type) {
    if (!type) {
      this._listeners = /* @__PURE__ */ new Map();
    } else {
      this._listeners.delete(type);
    }
  }
  removeEventListener(type, listener) {
    const arr = this._listeners.get(type);
    if (!arr) {
      return;
    }
    const length = arr.length, idx = arr.indexOf(listener);
    if (idx < 0) {
      return;
    }
    if (length === 1) {
      this._listeners.delete(type);
    } else {
      arr.splice(idx, 1);
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Utils/Plugins.js
function getItemsFromInitializer(container, map, initializers, force = false) {
  let res = map.get(container);
  if (!res || force) {
    res = [...initializers.values()].map((t) => t(container));
    map.set(container, res);
  }
  return res;
}
var Plugins = class {
  constructor(engine) {
    this._engine = engine;
    this.plugins = [];
    this._initializers = {
      interactors: /* @__PURE__ */ new Map(),
      movers: /* @__PURE__ */ new Map(),
      updaters: /* @__PURE__ */ new Map()
    };
    this.interactors = /* @__PURE__ */ new Map();
    this.movers = /* @__PURE__ */ new Map();
    this.updaters = /* @__PURE__ */ new Map();
    this.presets = /* @__PURE__ */ new Map();
    this.drawers = /* @__PURE__ */ new Map();
    this.pathGenerators = /* @__PURE__ */ new Map();
  }
  addInteractor(name, initInteractor) {
    this._initializers.interactors.set(name, initInteractor);
  }
  addParticleMover(name, initMover) {
    this._initializers.movers.set(name, initMover);
  }
  addParticleUpdater(name, initUpdater) {
    this._initializers.updaters.set(name, initUpdater);
  }
  addPathGenerator(type, pathGenerator) {
    !this.getPathGenerator(type) && this.pathGenerators.set(type, pathGenerator);
  }
  addPlugin(plugin) {
    !this.getPlugin(plugin.id) && this.plugins.push(plugin);
  }
  addPreset(presetKey, options, override = false) {
    (override || !this.getPreset(presetKey)) && this.presets.set(presetKey, options);
  }
  addShapeDrawer(types, drawer) {
    executeOnSingleOrMultiple(types, (type) => {
      !this.getShapeDrawer(type) && this.drawers.set(type, drawer);
    });
  }
  destroy(container) {
    this.updaters.delete(container);
    this.movers.delete(container);
    this.interactors.delete(container);
  }
  getAvailablePlugins(container) {
    const res = /* @__PURE__ */ new Map();
    for (const plugin of this.plugins) {
      plugin.needsPlugin(container.actualOptions) && res.set(plugin.id, plugin.getPlugin(container));
    }
    return res;
  }
  getInteractors(container, force = false) {
    return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
  }
  getMovers(container, force = false) {
    return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
  }
  getPathGenerator(type) {
    return this.pathGenerators.get(type);
  }
  getPlugin(plugin) {
    return this.plugins.find((t) => t.id === plugin);
  }
  getPreset(preset) {
    return this.presets.get(preset);
  }
  getShapeDrawer(type) {
    return this.drawers.get(type);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(container, force = false) {
    return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
  }
  loadOptions(options, sourceOptions) {
    for (const plugin of this.plugins) {
      plugin.loadOptions(options, sourceOptions);
    }
  }
  loadParticlesOptions(container, options, ...sourceOptions) {
    const updaters = this.updaters.get(container);
    if (!updaters) {
      return;
    }
    for (const updater of updaters) {
      updater.loadOptions && updater.loadOptions(options, ...sourceOptions);
    }
  }
};

// node_modules/tsparticles-engine/esm/Core/Engine.js
async function getDataFromUrl(data) {
  const url = itemFromSingleOrMultiple(data.url, data.index);
  if (!url) {
    return data.fallback;
  }
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  getLogger().error(`${errorPrefix} ${response.status} while retrieving config file`);
  return data.fallback;
}
function isParamsEmpty(params) {
  return !params.id && !params.element && !params.url && !params.options;
}
function isParams(obj) {
  return !isParamsEmpty(obj);
}
var Engine = class {
  constructor() {
    this._configs = /* @__PURE__ */ new Map();
    this._domArray = [];
    this._eventDispatcher = new EventDispatcher();
    this._initialized = false;
    this.plugins = new Plugins(this);
  }
  get configs() {
    const res = {};
    for (const [name, config] of this._configs) {
      res[name] = config;
    }
    return res;
  }
  get version() {
    return "2.12.0";
  }
  addConfig(nameOrConfig, config) {
    if (isString(nameOrConfig)) {
      if (config) {
        config.name = nameOrConfig;
        this._configs.set(nameOrConfig, config);
      }
    } else {
      this._configs.set(nameOrConfig.name ?? "default", nameOrConfig);
    }
  }
  addEventListener(type, listener) {
    this._eventDispatcher.addEventListener(type, listener);
  }
  async addInteractor(name, interactorInitializer, refresh = true) {
    this.plugins.addInteractor(name, interactorInitializer);
    await this.refresh(refresh);
  }
  async addMover(name, moverInitializer, refresh = true) {
    this.plugins.addParticleMover(name, moverInitializer);
    await this.refresh(refresh);
  }
  async addParticleUpdater(name, updaterInitializer, refresh = true) {
    this.plugins.addParticleUpdater(name, updaterInitializer);
    await this.refresh(refresh);
  }
  async addPathGenerator(name, generator, refresh = true) {
    this.plugins.addPathGenerator(name, generator);
    await this.refresh(refresh);
  }
  async addPlugin(plugin, refresh = true) {
    this.plugins.addPlugin(plugin);
    await this.refresh(refresh);
  }
  async addPreset(preset, options, override = false, refresh = true) {
    this.plugins.addPreset(preset, options, override);
    await this.refresh(refresh);
  }
  async addShape(shape, drawer, initOrRefresh, afterEffectOrRefresh, destroyOrRefresh, refresh = true) {
    let customDrawer;
    let realRefresh = refresh, realInit, realAfterEffect, realDestroy;
    if (isBoolean(initOrRefresh)) {
      realRefresh = initOrRefresh;
      realInit = void 0;
    } else {
      realInit = initOrRefresh;
    }
    if (isBoolean(afterEffectOrRefresh)) {
      realRefresh = afterEffectOrRefresh;
      realAfterEffect = void 0;
    } else {
      realAfterEffect = afterEffectOrRefresh;
    }
    if (isBoolean(destroyOrRefresh)) {
      realRefresh = destroyOrRefresh;
      realDestroy = void 0;
    } else {
      realDestroy = destroyOrRefresh;
    }
    if (isFunction(drawer)) {
      customDrawer = {
        afterEffect: realAfterEffect,
        destroy: realDestroy,
        draw: drawer,
        init: realInit
      };
    } else {
      customDrawer = drawer;
    }
    this.plugins.addShapeDrawer(shape, customDrawer);
    await this.refresh(realRefresh);
  }
  dispatchEvent(type, args) {
    this._eventDispatcher.dispatchEvent(type, args);
  }
  dom() {
    return this._domArray;
  }
  domItem(index) {
    const dom = this.dom(), item = dom[index];
    if (!item || item.destroyed) {
      dom.splice(index, 1);
      return;
    }
    return item;
  }
  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
  }
  async load(tagIdOrOptionsOrParams, options) {
    return this.loadFromArray(tagIdOrOptionsOrParams, options);
  }
  async loadFromArray(tagIdOrOptionsOrParams, optionsOrIndex, index) {
    let params;
    if (!isParams(tagIdOrOptionsOrParams)) {
      params = {};
      if (isString(tagIdOrOptionsOrParams)) {
        params.id = tagIdOrOptionsOrParams;
      } else {
        params.options = tagIdOrOptionsOrParams;
      }
      if (isNumber(optionsOrIndex)) {
        params.index = optionsOrIndex;
      } else {
        params.options = optionsOrIndex ?? params.options;
      }
      params.index = index ?? params.index;
    } else {
      params = tagIdOrOptionsOrParams;
    }
    return this._loadParams(params);
  }
  async loadJSON(tagId, pathConfigJson, index) {
    let url, id;
    if (isNumber(pathConfigJson) || pathConfigJson === void 0) {
      url = tagId;
    } else {
      id = tagId;
      url = pathConfigJson;
    }
    return this._loadParams({ id, url, index });
  }
  async refresh(refresh = true) {
    if (!refresh) {
      return;
    }
    this.dom().forEach((t) => t.refresh());
  }
  removeEventListener(type, listener) {
    this._eventDispatcher.removeEventListener(type, listener);
  }
  async set(id, element, options, index) {
    const params = { index };
    if (isString(id)) {
      params.id = id;
    } else {
      params.element = id;
    }
    if (element instanceof HTMLElement) {
      params.element = element;
    } else {
      params.options = element;
    }
    if (isNumber(options)) {
      params.index = options;
    } else {
      params.options = options ?? params.options;
    }
    return this._loadParams(params);
  }
  async setJSON(id, element, pathConfigJson, index) {
    const params = {};
    if (id instanceof HTMLElement) {
      params.element = id;
      params.url = element;
      params.index = pathConfigJson;
    } else {
      params.id = id;
      params.element = element;
      params.url = pathConfigJson;
      params.index = index;
    }
    return this._loadParams(params);
  }
  setOnClickHandler(callback) {
    const dom = this.dom();
    if (!dom.length) {
      throw new Error(`${errorPrefix} can only set click handlers after calling tsParticles.load()`);
    }
    for (const domItem of dom) {
      domItem.addClickHandler(callback);
    }
  }
  async _loadParams(params) {
    const id = params.id ?? `tsparticles${Math.floor(getRandom() * 1e4)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
    let domContainer = params.element ?? document.getElementById(id);
    if (!domContainer) {
      domContainer = document.createElement("div");
      domContainer.id = id;
      document.body.append(domContainer);
    }
    const currentOptions = itemFromSingleOrMultiple(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id === id);
    if (oldIndex >= 0) {
      const old = this.domItem(oldIndex);
      if (old && !old.destroyed) {
        old.destroy();
        dom.splice(oldIndex, 1);
      }
    }
    let canvasEl;
    if (domContainer.tagName.toLowerCase() === "canvas") {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] = "false";
    } else {
      const existingCanvases = domContainer.getElementsByTagName("canvas");
      if (existingCanvases.length) {
        canvasEl = existingCanvases[0];
        canvasEl.dataset[generatedAttribute] = "false";
      } else {
        canvasEl = document.createElement("canvas");
        canvasEl.dataset[generatedAttribute] = "true";
        domContainer.appendChild(canvasEl);
      }
    }
    if (!canvasEl.style.width) {
      canvasEl.style.width = "100%";
    }
    if (!canvasEl.style.height) {
      canvasEl.style.height = "100%";
    }
    const newItem = new Container(this, id, currentOptions);
    if (oldIndex >= 0) {
      dom.splice(oldIndex, 0, newItem);
    } else {
      dom.push(newItem);
    }
    newItem.canvas.loadCanvas(canvasEl);
    await newItem.start();
    return newItem;
  }
};

// node_modules/tsparticles-engine/esm/Utils/HslColorManager.js
var HslColorManager = class {
  constructor() {
    this.key = "hsl";
    this.stringPrefix = "hsl";
  }
  handleColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.s !== void 0 && hslColor.l !== void 0) {
      return hslToRgb(hslColor);
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
    if (hslColor.h !== void 0 && hslColor.l !== void 0) {
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
  }
  parseString(input) {
    if (!input.startsWith("hsl")) {
      return;
    }
    const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
    return result ? hslaToRgba({
      a: result.length > 4 ? parseAlpha(result[5]) : 1,
      h: parseInt(result[1], 10),
      l: parseInt(result[3], 10),
      s: parseInt(result[2], 10)
    }) : void 0;
  }
};

// node_modules/tsparticles-engine/esm/Utils/RgbColorManager.js
var RgbColorManager = class {
  constructor() {
    this.key = "rgb";
    this.stringPrefix = "rgb";
  }
  handleColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return rgbColor;
    }
  }
  handleRangeColor(color) {
    const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
    if (rgbColor.r !== void 0) {
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
  }
  parseString(input) {
    if (!input.startsWith(this.stringPrefix)) {
      return;
    }
    const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
    return result ? {
      a: result.length > 4 ? parseAlpha(result[5]) : 1,
      b: parseInt(result[3], 10),
      g: parseInt(result[2], 10),
      r: parseInt(result[1], 10)
    } : void 0;
  }
};

// node_modules/tsparticles-engine/esm/init.js
function init() {
  const rgbColorManager = new RgbColorManager(), hslColorManager = new HslColorManager();
  addColorManager(rgbColorManager);
  addColorManager(hslColorManager);
  const engine = new Engine();
  engine.init();
  return engine;
}

// node_modules/tsparticles-engine/esm/index.js
var tsParticles = init();
if (!isSsr()) {
  window.tsParticles = tsParticles;
}

// main.ts
var NeuronotesPlugin = class extends import_obsidian.Plugin {
  async onload() {
    console.log("\u{1F9E0} Neuronotes ha sido activado");
    await (0, import_tsparticles_preset_confetti.loadConfettiPreset)(tsParticles);
    this.addCommand({
      id: "neuronotes-scan-note",
      name: "Revisar flashcards (Neuronotes)",
      callback: () => this.scanCurrentNote()
    });
  }
  onunload() {
    console.log("\u{1F9E0} Neuronotes ha sido desactivado");
  }
  async scanCurrentNote() {
    const file = this.app.workspace.getActiveFile();
    if (!file) {
      new import_obsidian.Notice("No hay ninguna nota abierta");
      return;
    }
    const content = await this.app.vault.read(file);
    const flashcards = this.extractFlashcards(content);
    if (flashcards.length === 0) {
      new import_obsidian.Notice("No se encontraron flashcards.");
      return;
    }
    new FlashcardModal(this.app, flashcards).open();
  }
  extractFlashcards(content) {
    const cards = [];
    const rawCards = content.split("%%");
    for (let raw of rawCards) {
      if (raw.includes("card")) {
        const qMatch = raw.match(/Q:([\s\S]*?)A:/);
        const aMatch = raw.match(/A:([\s\S]*)/);
        const qRaw = qMatch?.[1]?.trim();
        const a = aMatch?.[1]?.trim();
        if (qRaw && a) {
          const isMultipleChoice = /\bA\.\b|\bB\.\b|\bC\.\b|\bD\.\b/.test(qRaw) && qRaw.includes("\n");
          let qFormatted = qRaw;
          if (isMultipleChoice) {
            const lines = qRaw.split(/\r?\n/);
            const questionLine = lines[0];
            const options = lines.slice(1).map((line) => line.trim()).filter(Boolean);
            qFormatted = questionLine + "\n" + options.join("\n");
          }
          cards.push({ q: qFormatted, a });
        }
      }
    }
    return cards;
  }
  launchConfetti(container) {
    const existing = document.getElementById("confetti-container");
    if (existing) {
      tsParticles.dom().forEach((instance) => instance.destroy());
      existing.remove();
    }
    const confettiEl = document.createElement("div");
    confettiEl.id = "confetti-container";
    confettiEl.style.position = "fixed";
    confettiEl.style.top = "0";
    confettiEl.style.left = "0";
    confettiEl.style.width = "100%";
    confettiEl.style.height = "100%";
    confettiEl.style.pointerEvents = "none";
    confettiEl.style.zIndex = "9999";
    container.appendChild(confettiEl);
    const palettes = [
      ["#FFD1DC", "#A0E7E5", "#B4F8C8", "#FFB5E8", "#FBE7C6"],
      // pastel
      ["#FF9CEE", "#B28DFF", "#AFF8DB", "#FFFFD1", "#FFA8A8"],
      // cybercute neón pastel
      ["#F6A6FF", "#A6E1FA", "#FCE38A", "#EAFFD0", "#C7CEEA"]
      // arcoíris suave
    ];
    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
    const angles = [90, 120, 270, 360];
    const gravities = [1, 2, 0.8];
    const spread = [60, 90, 120, 180];
    const velocity = [20, 30, 40];
    tsParticles.load("confetti-container", {
      preset: "confetti",
      background: { color: "transparent" },
      particles: {
        color: { value: randomPalette }
      },
      confetti: {
        angle: angles[Math.floor(Math.random() * angles.length)],
        gravity: gravities[Math.floor(Math.random() * gravities.length)],
        spread: spread[Math.floor(Math.random() * spread.length)],
        startVelocity: velocity[Math.floor(Math.random() * velocity.length)]
      }
    });
  }
};
var FlashcardModal = class extends import_obsidian.Modal {
  constructor(app, flashcards) {
    super(app);
    this.current = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.flashcards = flashcards;
  }
  onOpen() {
    this.modalEl.classList.add("wide-modal");
    this.showCard();
  }
  updateStats() {
    const total = this.correctCount + this.incorrectCount;
    const pct = total > 0 ? Math.round(this.correctCount / total * 100) : 0;
    this.statsEl.setText(
      `\u2705 ${this.correctCount} \u274C ${this.incorrectCount}  (${pct}%)`
    );
  }
  showCard() {
    const { contentEl } = this;
    contentEl.empty();
    if (this.current >= this.flashcards.length) {
      const done = contentEl.createDiv({ cls: "card-modal" });
      done.createEl("div", { text: "\u{1F389}", cls: "celebration" });
      const plugin = this.app.plugins.getPlugin(
        "neuronotes"
      );
      if (plugin?.launchConfetti) {
        plugin.launchConfetti(done);
      }
      done.createEl("div", {
        text: "\xA1Has terminado el repaso!",
        cls: "done-message"
      });
      const total = this.correctCount + this.incorrectCount;
      const pct = total > 0 ? Math.round(this.correctCount / total * 100) : 0;
      done.createEl("div", {
        text: `Resultado final: \u2705 ${this.correctCount} \u274C ${this.incorrectCount} (${pct}%)`,
        cls: "stats"
      });
      const celebrateBtn = done.createEl("button", {
        text: "\u{1F38A} \xA1Celebrar otra vez!",
        cls: "celebrate-again"
      });
      celebrateBtn.onclick = () => {
        const plugin2 = this.app.plugins.getPlugin(
          "neuronotes"
        );
        if (plugin2?.launchConfetti) {
          plugin2.launchConfetti(done);
        }
      };
      setTimeout(() => this.close(), 5e3);
      return;
    }
    const card = this.flashcards[this.current];
    const isMultipleChoice = /A\..*?B\..*?C\..*?D\./s.test(card.q);
    const cardTypeClass = isMultipleChoice ? "card-modal test-card" : "card-modal";
    const container = contentEl.createDiv({ cls: cardTypeClass });
    container.createEl("div", {
      text: `Tarjeta ${this.current + 1} de ${this.flashcards.length}`,
      cls: "counter"
    });
    this.statsEl = container.createDiv({ cls: "stats" });
    this.updateStats();
    const question = container.createDiv({ cls: "question" });
    if (isMultipleChoice) {
      let lines = [];
      if (card.q.includes("\n")) {
        lines = card.q.split("\n");
      } else {
        const matches = card.q.match(/[^A-D]*|[A-D]\..*?(?=\s[A-D]\.|$)/gs);
        if (matches) lines = matches.map((line) => line.trim());
      }
      if (!lines || lines.length < 2) {
        question.textContent = card.q;
        return;
      }
      const questionText = document.createElement("div");
      questionText.textContent = lines[0];
      questionText.classList.add("question-title");
      question.appendChild(questionText);
      for (let i = 1; i < lines.length; i++) {
        const option = document.createElement("div");
        option.textContent = lines[i];
        option.classList.add("option-line");
        question.appendChild(option);
      }
    } else {
      const questionText = document.createElement("div");
      questionText.textContent = card.q;
      questionText.classList.add("question-title");
      question.appendChild(questionText);
    }
    const answer = container.createEl("div", {
      text: card.a,
      cls: "answer"
    });
    answer.style.display = "none";
    const showBtn = container.createEl("button", { text: "Mostrar respuesta" });
    const nextBtn = container.createEl("button", { text: "Siguiente" });
    const correctBtn = container.createEl("button", { text: "\u2705 Acierto" });
    const incorrectBtn = container.createEl("button", { text: "\u274C Fallo" });
    const controls = container.createDiv({ cls: "controls" });
    controls.append(showBtn, nextBtn, correctBtn, incorrectBtn);
    showBtn.classList.add("show-answer");
    nextBtn.classList.add("next");
    correctBtn.classList.add("correct");
    incorrectBtn.classList.add("incorrect");
    showBtn.onclick = () => {
      answer.style.display = "block";
      showBtn.style.display = "none";
    };
    nextBtn.onclick = () => {
      this.current++;
      this.updateStats();
      this.showCard();
    };
    correctBtn.onclick = () => {
      this.correctCount++;
      this.updateStats();
      nextBtn.click();
    };
    incorrectBtn.onclick = () => {
      this.incorrectCount++;
      this.updateStats();
      nextBtn.click();
    };
  }
  onClose() {
    tsParticles.dom().forEach((instance) => instance.destroy());
    const confetti = document.getElementById("confetti-container");
    if (confetti) confetti.remove();
  }
};
