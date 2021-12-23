(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/hammerjs/hammer.js":
/*!*****************************************!*\
  !*** ./node_modules/hammerjs/hammer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-responsive-toolbar color=\"secondary\"></app-responsive-toolbar> -->\n   \n   <router-outlet></router-outlet>\n\n   <ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"line-scale\" [fullScreen] = \"false\">\n    <!-- <p style=\"color: white\" > Loading... </p> -->\n</ngx-spinner>\n \n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assured/assured.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assured/assured.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-background\">\n    <div class=\"loader-content\">\n  \n      <img  style=\"width: 50;height:50\" src=\"/assets/logo/bbps_assured.png\" />\n  \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- change -->\n\n\n<div class=\"row\">\n  <h5 matRipple class=\"headerTitle\">Change Password</h5>\n  <div class=\"col-lg-12\">\n    <form [formGroup]=\"changePassword\">\n\n      <mat-form-field>\n\n        <input matRipple matInput placeholder=\"Old password\" [type]=\"hide1 ? 'password' : 'text'\"\n          formControlName=\"old_pass\">\n        <mat-icon matRipple matSuffix (click)=\"hide1 = !hide1\">{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\n        <mat-error *ngIf=\"changePassword.hasError('required', 'old_pass')\">\n          Please enter old password\n        </mat-error>\n      </mat-form-field>\n      &nbsp;\n      &nbsp;\n      &nbsp;\n      <mat-form-field>\n        <input matRipple matInput placeholder=\"New password\"  [(ngModel)]=\"new_pass\"\n          [type]=\"hide ? 'password' : 'text'\" formControlName=\"new_pass\" #name>\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        <mat-error *ngIf=\"changePassword.hasError('required', 'new_pass')\">\n          Please enter your new password\n        </mat-error>\n        <mat-error *ngIf=\"changePassword.controls['new_pass'].hasError('minlength')\">\n          Please enter minimum {{Response.Pwdvalidate.minLength}} characters\n        </mat-error>\n        <mat-error *ngIf=\"changePassword.controls['new_pass'].hasError('hasCapitalCase')\">\n          Please enter {{Response.Pwdvalidate.minUpperChar}} uppercase character\n        </mat-error>\n        <mat-error *ngIf=\"changePassword.controls['new_pass'].hasError('hasSmallCase')\">\n          Please enter {{Response.Pwdvalidate.minLowerChar}} lowercase character\n        </mat-error>\n        <mat-error *ngIf=\"changePassword.controls['new_pass'].hasError('hasSpecialCharacters')\">\n          Please enter {{Response.Pwdvalidate.minSplChar}} Special character\n        </mat-error>\n      </mat-form-field>\n      &nbsp;\n      &nbsp;\n      &nbsp;\n      <mat-form-field matRipple>\n\n        <input matInput placeholder=\"Confirm password\"  [type]=\"hide3 ? 'password' : 'text'\"\n          maxlength=\"20\"  formControlName=\"confirm_pass\" [disabled]=\"!new_pass\" >\n        <mat-icon matSuffix (click)=\"hide3 = !hide3\">{{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\n        <mat-error *ngIf=\"changePassword.hasError('notSame')\">\n          Passwords do not match\n        </mat-error>\n        <!-- <mat-error *ngIf=\"changePassword.hasError('required', 'confirm_pass')\">\n          Please confirm your new password\n        </mat-error> -->\n      </mat-form-field>\n\n\n    </form>\n    <div class=\"col-lg-12 txt_end\">\n      <div class=\"example-button-row\">\n        <button matRipple mat-raised-button color=\"primary\" class=\"mr-2\"\n          (click)=\"changePass(changePassword.value)\">Change</button>\n        <button matRipple mat-raised-button color=\"warn\" *ngIf=\"data.showCancelBtn\"\n          (click)=\"cancelModal()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/computegrid/computegrid.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/computegrid/computegrid.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <!-- [mat-dialog-close]=\"true\" -->\n\n  <button mat-icon-button class=\"close-button\" (click)=\"CloseCoputepage()\">\n    <mat-icon class=\"close-icon\" color=\"warn\">close</mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <div class=\"row\">\n    <h5 matRipple class=\"headerTitle\">Compute formula</h5>\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"computegridForm\">\n      <mat-form-field>\n        <input matInput placeholder=\"Comptag\" formControlName=\"Comptag\" required>\n        <div>\n      <mat-icon matRipple (click)=\"OpenHelp()\"  style=\"margin-right: 20pX;\">info</mat-icon>\n    </div>\n        </mat-form-field>\n      <mat-form-field>\n        <!-- <mat-icon aria-hidden=\"false\" aria-label=\"help\">help_outline</mat-icon> -->\n        <input matInput placeholder=\"TagFormula\" formControlName=\"TagFormula\" required>\n        </mat-form-field>\n    </form>\n   \n    <div class=\"col-lg-12 txt_end\">\n      \n      <div matRipple class=\"example-button-row\">\n    <button mat-raised-button color=\"primary\" class=\"mr-2\" type=\"button\" [disabled]=\"!computegridForm.valid\" (click)=\"AddCompute()\">Add</button>\n    <!-- <button mat-raised-button color=\"warn\"  (click)=\"cancelModal()\">Cancel</button> -->\n    </div>\n    </div>\n\n    </div>\n    <div class=\"col-lg-12\" *ngIf=\"ComputeLists.length > 0\">\n      <table id=\"tbl\" class=\"tbl_sm\" style=\"width: 100%;\">\n        <thead>\n          <tr>\n            <th matRipple>Tag</th>\n            <th matRipple>Formula </th>\n            <th matRipple>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let items of ComputeLists; let i = index\">\n            <td>{{items.Comptag}}</td>\n            <td>{{items.TagFormula}} </td>\n            <td><button (click)=\"delectedItem(i)\" type=\"button\" class=\"btn btn-danger\">Delete</button></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <button matRipple mat-raised-button color=\"primary\" style=\"margin: 15px;\" class=\"mr-2\" (click)=\"submit()\">Submit & Close</button>\n\n    </div>\n\n   </div>\n\n</mat-dialog-content>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmationreceipt/confirmationreceipt.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmationreceipt/confirmationreceipt.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n    <mat-card-content>\n\n<div class=\"table-holder\">\n\n    <div class=\"title-holder\" style=\"text-align: center;\">\n        <img src=\"/assets/logo/success.png\" height=\"50\"  style=\"text-align: center;\">\n      <h1 class=\"list-title\">Transaction Successful</h1>\n    </div>\n    <div style=\"text-align: center;\">\n        Transaction referance number : HGAP0456410001103\n    </div>\n    <div style=\"text-align: center;\">\n    <img  src=\"/assets/logo/bbps_assured.png\"  height=\"80\">\n    </div>\n    <table mat-table matSort [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"type\">\n        <th class=\"header type-column\" mat-header-cell *matHeaderCellDef>\n          <span>Particulars</span>\n         \n        </th>\n        <td mat-cell *matCellDef=\"let request\" style=\"text-align: left;\">{{request.type}}</td>\n      </ng-container>\n      <img src=\"/assets/logo/bbps_assured.png\" height=\"80\">\n\n      <app-assured></app-assured>\n      <ng-container matColumnDef=\"name\">\n        <th class=\"header name-column\" mat-header-cell *matHeaderCellDef>\n          <span>Value</span>\n        </th>\n        <td mat-cell *matCellDef=\"let request\" style=\"text-align: right;\">{{request.name}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"amount\">\n        <th class=\"header amount-column\" mat-header-cell *matHeaderCellDef>\n          <span>Amount</span>\n         \n        </th>\n        <td mat-cell *matCellDef=\"let request\">{{getAmount(request.amount)}}</td>\n      </ng-container>\n        \n      <ng-container matColumnDef=\"status\">\n        <th class=\"header status-column\" mat-header-cell *matHeaderCellDef>\n          <span>Status</span>\n        \n        </th>\n        <td mat-cell *matCellDef=\"let request\">{{request.status}}</td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"dateModified\">\n        <th class=\"header date-column\" mat-header-cell *matHeaderCellDef>\n          <span>Date Modified</span>\n         \n        </th>\n        <td mat-cell *matCellDef=\"let request\">{{request.dateModified | date: 'MM/dd/yyyy HH:mm:ss'}}</td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"state\">\n        <th class=\"header state-column\" mat-header-cell *matHeaderCellDef>\n          <span>State</span>\n        </th>\n        <!-- <td class=\"state-cell\" mat-cell *matCellDef=\"let request\">{{getStatusColor(request.status)}}</td> -->\n        <td class=\"state-cell\" mat-cell *matCellDef=\"let request\">\n          <svg height=\"14\" width=\"14\">\n            <circle cx=\"7\" cy=\"7\" r=\"7\" [ngClass]=\"getStateColor(request.status)\" />\n          </svg>\n        </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n      <tr mat-row *matRowDef=\"let request; columns: columnsToDisplay\"></tr>\n  \n    </table>\n\n  </div>\n  </mat-card-content>\n  </mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createdocument/createdocument.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/createdocument/createdocument.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form  [formGroup]=\"CreateDocForm\" novalidate  >\n    \n    <mat-card >\n        <mat-card-content>\n            <h5 matRipple class=\"headerTitle\"> Create Document</h5>\n            <div class=\"bounds\">\n                <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill fxLayoutGap=\"20px\">\n                    <div fxFlex=\"33.33\" class=\"sec1\">\n                       \n                        <mat-form-field matRipple>\n                            <input matInput placeholder=\"Document Name\" formControlName=\"documentName\" (keydown.space)=\"$event.preventDefault()\"  maxlength=\"50\" required>\n                            <mat-error *ngIf=\"errorHandling('documentName', 'required')\">Document name can not be blank</mat-error>\n                       \n                        </mat-form-field>\n                        \n                    </div>\n                    <div fxFlex=\"33.33\" class=\"sec2\">\n                        <mat-form-field matRipple>\n                            <input matInput placeholder=\"Version\" formControlName=\"documentVersion\" appNumberDirective  required maxlength=\"4\">\n                            <mat-error *ngIf=\"errorHandling('documentVersion', 'required')\">Document version can not be blank</mat-error>\n                        </mat-form-field>\n                      \n                    </div>\n                    <div fxFlex=\"33.33\" class=\"sec4\">\n                        <mat-form-field matRipple>\n                            <input matInput placeholder=\"Document Title\" formControlName=\"documentTitle\" maxlength=\"200\" required>\n                            <mat-error *ngIf=\"errorHandling('documentTitle', 'required')\">Document title can not be blank</mat-error>\n                        </mat-form-field>\n                       \n                    </div>\n                </div>\n               \n    \n             \n            </div>\n       <br>\n       <div></div>\n            <div class=\"example-button-row\">\n                <button matRipple mat-raised-button color=\"primary\" type=\"button\" (click)=\"CreatDocument()\" >Submit</button>\n                &nbsp; &nbsp; \n                <button matRipple mat-raised-button color=\"primary\" type=\"reset\" (click)=\"resetForm()\" >Reset</button>\n                </div>\n    \n        </mat-card-content>\n    </mat-card>\n    </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createpo/createpo.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/createpo/createpo.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"poCreation\">\n  <mat-card>\n      <mat-card-content>\n          <h5  matRipple class=\"headerTitle\"> Create PO </h5>\n          <div class=\"bounds\">\n              <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill fxLayoutGap=\"20px\">\n                  <div fxFlex=\"33.33\" class=\"sec1\">\n                         <mat-form-field matRipple>\n                          <input matRipple matInput placeholder=\"PO Number\" maxlength=\"10\" formControlName=\"po_number\">\n                          <mat-error *ngIf=\"errorHandling('po_number', 'required')\">PO number can not be blank</mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec2\">\n                      <mat-form-field matRipple>\n                          <mat-select placeholder=\"Department\"  formControlName=\"department\" (selectionChange)=\"getSiteList($event)\">\n                            <mat-option *ngFor=\"let item of DepartmentList\" [value]=\"item.DepartmentName\">{{item.DepartmentName}}</mat-option>\n                          </mat-select>\n                          <mat-error *ngIf=\"errorHandling('department', 'required')\">Department can not be blank</mat-error>\n                      </mat-form-field>\n  \n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec4\">\n                      <!-- <mat-form-field >\n                          <mat-select  placeholder=\"Document Name\"  formControlName=\"document_name\">\n                            <mat-option *ngFor=\"let item of DocumentList\" [value]=\"item.documentName\">{{item.documentName}}</mat-option>\n                          </mat-select>\n                        </mat-form-field> -->\n                        <mat-form-field matRipple>\n                          <mat-select [formControl]=\"bankCtrl\" placeholder=\"Document Name\" #singleSelect (selectionChange)=\"ShowversionbyDocName($event)\">\n                            <mat-option>\n                              <ngx-mat-select-search\n                               [formControl]=\"dropdown_search\"\n                               placeholderLabel=\"Search Document...\"\n                               noEntriesFoundLabel=\"'No Match Found'\">\n                              </ngx-mat-select-search>\n                            </mat-option>\n  \n                            <mat-option *ngFor=\"let item of document_list_data | async\" [value]=\"item.documentName\">\n                              {{item.documentName}}\n                            </mat-option>\n                          </mat-select>\n                          <!-- <mat-error *ngIf=\"errorHandling('department', 'required')\">Department can not be blank</mat-error> -->\n                        </mat-form-field>\n                  </div>\n              </div>\n              <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill fxLayoutGap=\"20px\">\n                  <div fxFlex=\"33.33\" class=\"sec1\">\n                      <!-- <mat-form-field>\n                          <input matInput placeholder=\"Document Version\" maxlength=\"10\"  formControlName=\"document_version\">\n                      </mat-form-field> -->\n  \n                      <mat-form-field matRipple >\n                          <mat-select  placeholder=\"Document Version\" formControlName=\"document_version\">\n                            <mat-option *ngFor=\"let item of DocVersionList\" [value]=\"item.documentVersion\">{{item.documentVersion}}</mat-option>\n                          </mat-select>\n                          <mat-error *ngIf=\"errorHandling('document_version', 'required')\">Document version can not be blank</mat-error>\n                        </mat-form-field>\n  \n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec2\">\n                      <mat-form-field matRipple >\n                          <mat-select  placeholder=\"Site\"  formControlName=\"site\">\n                            <mat-option *ngFor=\"let item of SiteList\" [value]=\"item.SiteName\">{{item.SiteName}}</mat-option>\n                           </mat-select>\n                           <mat-error *ngIf=\"errorHandling('site', 'required')\">Site can not be blank</mat-error>\n                        </mat-form-field>\n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec3\">\n                      <mat-form-field matRipple>\n                          <input matInput placeholder=\"Item Code\" maxlength=\"10\"   formControlName=\"item_code\">\n                          <mat-error *ngIf=\"errorHandling('item_code', 'required')\">Item code can not be blank</mat-error>\n                      </mat-form-field>\n  \n                  </div>\n  \n              </div>\n  \n              <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill fxLayoutGap=\"20px\">\n                  <div fxFlex=\"33.33\" class=\"sec1\">\n                      <mat-form-field matRipple>\n                          <input matInput placeholder=\"Item Name\" maxlength=\"40\" formControlName=\"item_name\">\n                          <mat-error *ngIf=\"errorHandling('item_name', 'required')\">Item name can not be blank</mat-error>\n                        </mat-form-field>\n  \n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec2\">\n                      <mat-form-field matRipple>\n                          <input matInput placeholder=\"Batch\" maxlength=\"10\"  formControlName=\"batch\">\n                          <mat-error *ngIf=\"errorHandling('batch', 'required')\">Batch can not be blank</mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex=\"33.33\" class=\"sec2\">\n  \n                  </div>\n              </div>\n  \n          </div>\n          <div class=\"example-button-row txt-end\">\n              <button matRipple mat-raised-button color=\"primary\" type=\"button\" (click)=\"createPO(poCreation.value)\">Submit</button>\n              &nbsp; &nbsp;\n              <button matRipple mat-raised-button color=\"primary\" type=\"reset\" (click)=\"resetForms()\" >Reset</button>\n              </div>\n  \n      </mat-card-content>\n  </mat-card>\n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/electricity/electricity.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/electricity/electricity.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>electricity works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-background\" *ngIf=\"isLoading\">\n    <div class=\"loader-content\">\n  \n      <img  style=\"width: 50;height:50\" src=\"/assets/logo/loader-onscreen.gif\" />\n  \n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logdetails/logdetails.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logdetails/logdetails.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\n  <!-- [mat-dialog-close]=\"true\" -->\n  <button matRipple mat-icon-button class=\"close-button\" (click)=\"CloseLogpage()\">\n    <mat-icon class=\"close-icon\" color=\"warn\">close</mat-icon>\n  </button>\n</div>\n<h5 matRipple *ngIf=\"LogType != 'ReviewStatus'\" class=\"headerTitle txt_center\" mat-dialog-title>{{LogType}} Log Details</h5>\n\n<mat-dialog-content class=\"mat-typography\">\n\n   <div class=\"container\" *ngIf=\"LogType == 'Access' || LogType == 'Review'\">\n    <div class=\"row\" style=\"height: 400px;width: 100%;\">\n    <div class=\"col-lg-12\">\n    <table class=\"tbl_sm\" style=\"width: 100%;\">\n      <thead>\n        <tr class=\"border_bottom\">\n          <th matRipple class=\"makebold w-15\">Userid</th>\n          <th matRipple class=\"makebold w-15\" (click)=\"onSortClick($event,'Date')\"><div class=\"Sorticon\"><mat-icon>{{ Date ? 'keyboard_arrow_up' :  'keyboard_arrow_down' }}</mat-icon><span>Date</span></div></th>\n          <!-- <th class=\"makebold w-15\">Date </th> -->\n          <th matRipple class=\"makebold\">Comment</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let items of LogsViewData\" class=\"border_bottomLight\">\n          <td>{{items.userid}}</td>\n          <td>{{items.datetime | date:'dd-MM-yy h:mm a'}} </td>\n          <td>{{items.chat}}</td>\n        </tr>\n      </tbody>\n    </table>\n     </div>\n   </div>\n  </div>\n\n\n\n  <div class=\"container\" *ngIf=\"LogType == 'Amedment'\">\n    <div class=\"row\" style=\"height: 400px;width: 100%;\">\n    <div class=\"col-lg-12\">\n    <table class=\"tbl_sm\" style=\"width: 100%;\">\n      <thead>\n        <tr class=\"border_bottom\">\n          <th matRipple class=\"makebold\">Userid</th>\n          <!-- <th class=\"makebold\">Date </th> -->\n          <th matRipple class=\"makebold w-15\" (click)=\"onSortClick($event,'Date')\"><div class=\"Sorticon\"><mat-icon>{{ Date ? 'keyboard_arrow_up' :  'keyboard_arrow_down' }}</mat-icon><span>Date</span></div></th>\n          <th matRipple class=\"makebold\">Tag name</th>\n          <th matRipple class=\"makebold\">New value</th>\n          <th matRipple class=\"makebold\">Prev datetime </th>\n          <th matRipple class=\"makebold\">Prev userid</th>\n          <th matRipple class=\"makebold\">Prev value</th>\n        </tr>\n      </thead>\n      <tbody>\n        <!-- | date:'dd-MM-yy h:mm a'  -->\n        <tr *ngFor=\"let items of LogsViewData\" class=\"border_bottomLight\">\n          <td>{{items.userid}}</td>\n          <td>{{items.datetime}} </td>\n          <td>{{items.tag_name}}</td>\n          <td>{{items.new_value}}</td>\n          <td>{{items.prev_datetime}}</td>\n          <td>{{items.prev_user_id}}</td>\n          <td>{{items.prev_value }}</td>\n        </tr>\n      </tbody>\n    </table>\n     </div>\n   </div>\n  </div>\n\n  <div class=\"container\" *ngIf=\"LogType == 'Exception'\">\n    <div class=\"row\" style=\"height: 400px;width: 100%;\">\n    <div class=\"col-lg-12\">\n    <table class=\"tbl_sm\" style=\"width: 100%;\">\n      <thead>\n        <tr class=\"border_bottom\">\n          <th matRipple class=\"makebold\">Userid</th>\n          <!-- <th class=\"makebold\">Date </th> -->\n          <th matRipple class=\"makebold w-15\" (click)=\"onSortClick($event,'Date')\"><div class=\"Sorticon\"><mat-icon>{{ Date ? 'keyboard_arrow_up' :  'keyboard_arrow_down' }}</mat-icon><span>Date</span></div></th>\n          <th matRipple class=\"makebold\">PO_NO name</th>\n          <th matRipple class=\"makebold\">Page</th>\n          <th matRipple class=\"makebold\">Comment</th>\n        </tr>\n      </thead>\n      <tbody>\n        <!-- | date:'dd-MM-yy h:mm a'  -->\n        <tr *ngFor=\"let items of LogsViewData\" class=\"border_bottomLight\">\n          <td>{{items.userid}}</td>\n          <td>{{items.datetime}} </td>\n          <td>{{items.PO_NO}}</td>\n          <td>{{items.Page}}</td>\n          <td>{{items.Response}}</td>\n        </tr>\n      </tbody>\n    </table>\n     </div>\n   </div>\n  </div>\n\n  <div class=\"container\" *ngIf=\"LogType == 'Uploaded Files'\">\n    <div class=\"row\" style=\"height: 400px;width: 100%;\">\n    <div class=\"col-lg-12\">\n    <table class=\"tbl_sm\" style=\"width: 100%;\">\n      <thead>\n        <tr class=\"border_bottom\">\n          <th matRipple class=\"makebold\">File Name</th>\n          <th matRipple class=\"makebold\">View</th>\n          <th matRipple class=\"makebold\">Download</th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <!-- | date:'dd-MM-yy h:mm a'  -->\n        <tr *ngFor=\"let items of LogsViewData;let i =index\" class=\"border_bottomLight\">\n          <td>{{items.blobName}}</td>\n          <td><a><mat-icon  matTooltip=\"View/Download\" class=\"greencolor\"  (click)=\"ViewFile(items.fileData,i)\" matTooltipPosition=\"above\">visibility</mat-icon></a></td>\n          <td><a><mat-icon  matTooltip=\"View/Download\" class=\"greencolor\"  (click)=\"DownloadFile(items.fileData,i)\" matTooltipPosition=\"above\">get_app</mat-icon></a></td>\n\n          <!-- <td><a [href]=\"fileUrl\" download=\"file.png\">DownloadFile</a> <a> <mat-icon  matTooltip=\"Download\" class=\"greencolor\"  (click)=\"DownloadFile()\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a></td> -->\n        </tr>\n      </tbody>\n    </table>\n     </div>\n   </div>\n  </div>\n  \n  \n \n</mat-dialog-content>\n\n<div  *ngIf=\"LogType == 'ReviewStatus'\">\n  <!-- <div class=\"row\" style=\"height: 400px;width: 100%;\">\n    <div class=\"col-lg-12\"> -->\n      <mat-card>\n    <div style=\"width: 400px;\">\n      <mat-form-field>\n        <mat-select matRipple placeholder=\"Review Status\"  (selectionChange)=\"changeStatus($event)\">\n          <mat-option matRipple value=\"NORMAL\">NORMAL</mat-option>\n          <mat-option matRipple value=\"ALERT\">ALERT</mat-option>\n          <mat-option matRipple value=\"ACTION\">ACTION</mat-option>\n          <!-- <mat-option *ngFor=\"let opt of reviewDrop\" [value]=\"opt.ReviewStatusName\">{{opt.ReviewStatusName}}</mat-option> -->\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </mat-card>\n    <!-- </div>\n  </div> -->\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <app-loader style=\"text-align: center;\"></app-loader>\n\n  <div class=\"authBox\" >\n    \n    <!-- <div class=\"authBox__col-left\">\n      <div matRipple class=\"center\">\n        <div matRipple class=\"lbl\">\n          <label>1 Pay</label>\n        </div>\n        <img class=\"logo_\" src=\"../assets/logo/footerwaves.png\" alt=\"BMR\" title=\"Serum\">\n      </div>\n    </div> -->\n    <div class=\"authBox__col-right\">\n      <div class=\"authBox__spacer\">\n        \n        <div matRipple class=\"authoBox__heading\">Login</div>\n\n        <!-- <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\"> -->\n        <form [formGroup]=\"loginForm\">\n\n          <mat-form-field class=\"example-full-width pt-20\">\n            <input matInput placeholder=\"User Name\" formControlName=\"username\" maxlength=\"10\">\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width pt-20\">\n            <input matRipple matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" maxlength=\"20\"\n              formControlName=\"password\">\n            <mat-icon matRipple matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </mat-form-field>\n          <div  class=\"right-align\">\n            <a (click)=\"ForgotPassword()\" class=\"authoBox__link\">Forgot Password?</a>\n          </div>\n          <div matRipple class=\"right-align\" [hidden]=\"!BacktoPrevLogin\">\n            <br><a class=\"authoBox__link\" style=\"text-decoration: underline;cursor: pointer\" (click)=\"PreviousLogin()\" >Back to previous login</a>\n          </div> <br>\n          <div class=\"row\" >\n            <div  class=\"col-md-6\">\n              \n              <button  matRipple  class=\"btn btn-submit\" (click)=\"onSubmitLogin()\">Login</button>&nbsp;\n              <!-- [hidden]=\"switch ? 'false':'true'\" -->\n              <!-- <button  id=\"switchs\" class=\"btn btn-submit\" mat-stroked-button color=\"primary\"\n                (click)=\"Cancelswitch()\">Cancel</button> -->\n            </div>\n\n            <script>\n             \n                  $(\"#switchs\").hide();\n    \n            </script>\n            <div  matRipple class=\"aligns col-md-6\">\n              <!-- <button  class=\"btn btn-submit\" routerLink=\"/video\">Face Login</button> -->\n              <button class=\"btn btn-submit\" [disabled]=\"EnableFacelogin\" (click)=\"Facelogin()\">Face Login</button>\n            </div>\n            \n          </div>\n\n          <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mobilerecharge/mobilerecharge.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mobilerecharge/mobilerecharge.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card > \n    <mat-card-content>\n\t<div class=\"container\">\n        <img src=\"/assets/logo/BBPS_Logo.png\" height=\"30\" style=\"text-align: right;\">\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center\"  > \n\t\t\t<form novalidate>\n\t\t\t\t<div fxLayout=\"column\" fxLayoutAlign=\"center\">\t\t\t\t\n                        <mat-card-title mat-card-title style=\"text-align: center;margin-top: 30;\">Mobile Recharge</mat-card-title>\n                       <mat-card style=\"border: 2px;border-width: 1;z-index: 10;;border-style: groove;\">\n                        <mat-card-content>\n\n                        <form class=\"basic-form\" >\n                            <div fxLayout=\"row wrap\">\n                                <!-- column -->\n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\n                                    <mat-form-field>\n                                        <input type=\"text\" matInput autocomplete=\"off\" placeholder=\"Mobile\" required/>\n                                    </mat-form-field>\n                                </div>\n                            \n        \n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <mat-form-field>\n                                        <mat-select placeholder=\"Operator\">\n                                            <mat-option value=\"Airtel\">Airtel</mat-option>\n                                            <mat-option value=\"V!\">V!</mat-option>\n                                            <mat-option value=\"Jio\">Jio</mat-option>\n                                            <mat-option value=\"BSNL\">BSNL</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                  \n                                </div>\n        \n                                <!-- column -->\n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <mat-form-field>\n                                        <mat-select placeholder=\"Circle\">\n                                            <mat-option value=\"Andhra Pradesh & Telangana\">Andhra Pradesh & Telangana</mat-option>\n                \n                                            <mat-option value=\"Assam\"> Assam</mat-option>\n                                                \n                                            <mat-option value=\"Bihar & Jharkhand\"> Bihar & Jharkhand</mat-option>\n                                                \n                                            <mat-option value=\"Chennai\"> Chennai</mat-option>\n                                                \n                                            <mat-option value=\"Delhi NCR\">  Delhi NCR</mat-option>\n                                                \n                                            <mat-option value=\"Gujarat\">   Gujarat</mat-option>\n                                                \n                                            <mat-option value=\"Haryana\">  Haryana</mat-option>\n                                                \n                                            <mat-option value=\"Himachal Pradesh\">    Himachal Pradesh</mat-option>\n                                                \n                                            <mat-option value=\"Jammu Kashmir\">   Jammu Kashmir</mat-option>\n                                                \n                                            <mat-option value=\"Karnataka\">   Karnataka</mat-option>\n                                                \n                                            <mat-option value=\"Kerala\">   Kerala</mat-option>\n                                                \n                                            <mat-option value=\"Kolkata\">    Kolkata</mat-option>\n                                                \n                                            <mat-option value=\"Madhya Pradesh & Chhattisgarh\">  Madhya Pradesh & Chhattisgarh</mat-option>\n                                                \n                                            <mat-option value=\"Maharashtra & Goa\"> Maharashtra & Goa</mat-option>\n                                                \n                                            <mat-option value=\"Mumbai\">    Mumbai</mat-option>\n                                                \n                                            <mat-option value=\"North East\">   North East</mat-option>\n                                                \n                                            <mat-option value=\"Odisha\">    Odisha</mat-option>\n                                                \n                                            <mat-option value=\"Punjab\">   Punjab</mat-option>\n                                                \n                                            <mat-option value=\"Rajasthan\">  Rajasthan</mat-option>\n                                                \n                                            <mat-option value=\"Tamilnadu\">  Tamilnadu</mat-option>\n                                                \n                                            <mat-option value=\"UP East\">    UP East</mat-option>\n                                                \n                                            <mat-option value=\" UP West & Uttarakhand\">  UP West & Uttarakhand</mat-option>\n                                                \n                                            <mat-option value=\"West Bengal & Andaman Nicobar\">  West Bengal & Andaman Nicobar</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n\n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <mat-form-field>\n                                        <input type=\"text\" matInput autocomplete=\"off\" placeholder=\"Amount\" required/>\n                                    </mat-form-field>\n                                </div>\n                                \n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <button style=\"margin-bottom: 30;\" mat-raised-button color=\"primary\" type=\"submit\" routerLink=\"/rechargeconfirmation\">\n                                    <span >Pay</span></button> \n                                </div>\n                            </div>\n                        </form>\n                    </mat-card-content>\n                        </mat-card>\n\n\t\t\t\t\t<br/>\n\t\t\t\t\t   \n\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagelist/pagelist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagelist/pagelist.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n  <mat-card-content>\n\n  <div class=\"row\" *ngIf=\"PageDetails\">\n    <div class=\"col-md-4 col-sm-4\">\n      <table id=\"tbl_1\">\n        <tr>\n          <th>Item-Id</th>\n          <td>:&nbsp;{{PageDetails.Item_Id}}</td>\n        </tr>\n        <tr>\n          <th>Site</th>\n          <td>:&nbsp;{{PageDetails.Site}}</td>\n        </tr>\n        <tr>\n          <th>Created On</th>\n         <td>:&nbsp;{{PageDetails.CreatedOn }}</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <table id=\"tbl_2\">\n        <tr>\n          <th>Name</th>\n          <td>:&nbsp;{{PageDetails.Name}}</td>\n        </tr>\n        <tr>\n          <th>Department</th>\n          <td>:&nbsp;{{PageDetails.Department}}</td>\n        </tr>\n        <tr>\n          <th>Released On</th>\n          <td>:&nbsp;{{PageDetails.ReleasedOn }}</td>\n        </tr>\n        <tr>\n          <th>Header Status</th>\n          <td>:&nbsp;{{PageDetails.HeaderStatus}}</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <table id=\"tbl_3\">\n        <tr>\n          <th>PO No.</th>\n          <td>:&nbsp;{{PageDetails.PO_No}}</td>\n        </tr>\n        <tr>\n          <th>Batch No.</th>\n          <td>:&nbsp;{{PageDetails.Batch}}</td>\n        </tr>\n        <tr>\n          <th>Document Name</th>\n          <td>:&nbsp;{{PageDetails.DocumentName}}</td>\n        </tr>\n        <tr>\n          <th>Version</th>\n          <td>:&nbsp;{{PageDetails.Version}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n\n<div id=\"sectiontwo\" style=\"overflow: auto;\" class=\"fixTableHead\">\n <table cell-spacing=\"50px\" mat-table *ngIf=\"PageList\"  [dataSource]=\"dataSource | paginate: {itemsPerPage: size, currentPage: p, totalItems:PageList.length}\"  class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n          <ng-container matColumnDef=\"PageNo\">\n            <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Page No </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Page}} </td>\n          </ng-container>\n\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Title\">\n            <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.PageTitle}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"Section\">\n            <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Section </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Section}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"LineStatus\">\n            <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Line Status </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.LineStatus}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Process\">\n              <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Process </th>\n              <!-- <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td> -->\n              \"OPEN\"\n              <td matRipple mat-cell *matCellDef=\"let element\" >\n                <a > <mat-icon style=\"font-size: 30px;font-weight: bold;color: #78e44e;\"  matTooltip=\"Process\" (click)=\"GotoSectionThree(element)\"  matTooltipPosition=\"above\">arrow_right_alt</mat-icon></a>\n                <!-- <a > <mat-icon style=\"font-size: 30px;font-weight: bold;\" [style.color]=\"element.LineStatus == 'OPEN' ? '#78e44e':'#e44e4e'\"   matTooltip=\"Process\" (click)=\"GotoSectionThree(element)\"  matTooltipPosition=\"above\">{{element.LineStatus == 'OPEN' ? 'arrow_right_alt' : 'close'}}</mat-icon></a> -->\n              </td>\n            </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef  id=\"matTool\"> Access</th>\n      <td matRipple mat-cell *matCellDef=\"let element\">\n        <a *ngIf=\"!element.AccessLog\" > <mat-icon  matTooltip=\"AccessLog\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n        <a *ngIf=\"element.AccessLog\" > <mat-icon  matTooltip=\"AccessLog\" class=\"greencolor\" (click)=\"AccesLogView(element.AccessLog,'Access')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n      </td>>\n    </ng-container>\n\n    <!--  -->\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Exception </th>\n      <td matRipple mat-cell *matCellDef=\"let element\"> \n        <a *ngIf=\"!element.Exception\" > <mat-icon  matTooltip=\"Exception\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n        <a *ngIf=\"element.Exception\" > <mat-icon  matTooltip=\"Exception\" class=\"greencolor\" (click)=\"AccesLogView(element.Exception,'Exception')\"  matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n      </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Amedment </th>\n      <td matRipple mat-cell *matCellDef=\"let element\"> \n        <a *ngIf=\"!element.Amedment\" > <mat-icon  matTooltip=\"Amedment\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n        <a *ngIf=\"element.Amedment\" > <mat-icon  matTooltip=\"Amedment\" class=\"greencolor\" (click)=\"AccesLogView(element.Amedment,'Amedment')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n      </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th matRipple mat-header-cell *matHeaderCellDef id=\"matTool\"> Review </th>\n      <!-- <td mat-cell *matCellDef=\"let element\"> {{element.Review}} </td> -->\n      <!-- <td mat-cell *matCellDef=\"let element\" *ngIf=\"!element.Review\" >\n        <a > <mat-icon  matTooltip=\"Review\"  matTooltipPosition=\"above\">arrow_right_alt</mat-icon></a>\n      </td> -->\n      \n      <td matRipple mat-cell *matCellDef=\"let element\"  >\n        <a *ngIf=\"!element.Review\" > <mat-icon  matTooltip=\"Review\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n        <a *ngIf=\"element.Review\" > <mat-icon  matTooltip=\"Review\" class=\"greencolor\"  (click)=\"AccesLogView(element.Review,'Review')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n     \n      </td>\n    </ng-container>\n\n    \n\n    <ng-container matColumnDef=\"ReviewStatus\">\n        <th mat-header-cell *matHeaderCellDef id=\"matTool\"> Review Status </th>\n        <td matRipple mat-cell *matCellDef=\"let element\"> \n          <!-- <a *ngIf=\"element.ReviewStatus == 'BLANK '\" > <span class=\"badge badge-secondary\">Success</span></a> -->\n        <a *ngIf=\"element.ReviewStatus == 'BLANK '\" > <span style=\"color: black;\" class=\"badge badge-light\">BLANK</span></a>\n        <a *ngIf=\"element.ReviewStatus == 'NORMAL'\" > <span class=\"badge badge-success\">NORMAL</span></a>\n        <a *ngIf=\"element.ReviewStatus == 'ALERT '\" > <span class=\"badge badge-warning\">ALERT</span></a>\n        <a *ngIf=\"element.ReviewStatus == 'ACTION'\" > <span class=\"badge badge-danger\">ACTION</span></a>\n      </td>\n      </ng-container>\n\n    <!-- Header row first group -->\n    <!-- [style.text-align]=\"center\" -->\n    <ng-container matColumnDef=\"header-row-first-group\">\n      <th mat-header-cell *matHeaderCellDef  [attr.colspan]=\"5\" id=\"matTool\">\n      </th>\n    </ng-container>\n\n    <!-- Header row second group -->\n    <ng-container matColumnDef=\"header-row-second-group\">\n      <th mat-header-cell style=\"font-weight: bolder; font-size: large;\" *matHeaderCellDef [attr.colspan]=\"4\" id=\"matTool\"> Logs </th>\n    </ng-container>\n\n    <ng-container matColumnDef=\"header-row-third-group\">\n      <th mat-header-cell *matHeaderCellDef [attr.colspan]=\"1\" id=\"matTool\">  </th>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"['header-row-first-group','header-row-second-group','header-row-third-group']\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;let i = index; let even = even; \"\n          [ngClass]=\"{ odd: odd, even: even }\"  >\n  </table>\n  </div>\n\n  <div class=\"row d-flex justify-content-end pt-4\">\n    <!-- <div class=\"p-3\">\n    Items per page:\n   <mat-select [(value)]=\"size\" (valueChange)=\"paginate(p)\" style=\"width: 50px;margin-left: 15px;text-align: right;\">\n    <mat-option [value]=\"5\">5</mat-option>\n    <mat-option [value]=\"10\">10</mat-option>\n    <mat-option [value]=\"15\">15</mat-option>\n    <mat-option [value]=\"20\">20</mat-option>\n   </mat-select>\n  </div> -->\n  <div class=\"p-2\">\n   <pagination-controls max-size=\"10\" (pageChange)=\"p = $event;paginate(p)\"></pagination-controls>\n  </div>\n  </div>\n\n\n\n</mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-upload/photo-upload.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-upload/photo-upload.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2  mat-dialog-title style=\"text-align: right;z-index: 0;\"><button matRipple mat-icon-button class=\"close-button\"\n  [mat-dialog-close]=\"true\">\n  <mat-icon mat-dialog-close class=\"close-icon\" color=\"warn\">close</mat-icon>\n</button>\n</h2>\n\n<div style =\"text-align:center\">\n<div><video #video id=\"video\" width=\"350\" height=\"350\" autoplay></video></div>\n        <div class=\"mt-3\" style=\"margin-right: 8em;\"><button id=\"snap\" (click)=\"capture()\" mat-raised-button color=\"primary\">{{imageSrc ? 'ReTake' :'Take Photo'}}</button></div> <br />\n        <canvas #canvas id=\"canvas\" width=\"700\" height=\"500\"></canvas>\n</div>\n<mat-card>\n  <mat-card-content>\n        <form  [formGroup]=\"UploadForm\">\n                <table id=\"tbl\" class=\"tbl_sm\" style=\"width: 100%;\">\n                  <thead>\n                    <tr>\n                      <th>No.</th>\n                      <th>Preview</th>\n                      <th>File name </th>\n                      <th>Delete</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let items of GetFiles; let i = index\">\n                      <td>{{i+1}}</td>\n                      <td matRipple>\n                       \n                              <img src=\"{{items.ShowImage}}\" height=\"150\" />\n        \n                        <canvas #canvas id=\"canvas\" width=\"500\" height=\"500\"></canvas>\n        \n                      </td>\n                      <td> \n                        {{items.FileName}} <br />\n                        <label>Name : </label><input type=\"text\" formControlName=\"rename\">\n                      </td> \n        \n                      <td matRipple><button (click)=\"delectedItem(i)\" type=\"button\" class=\"btn btn-danger\">Delete</button></td>\n                    </tr>\n                  </tbody>\n                </table>\n                <button mat-dialog-close matRipple class=\"btn btn-success\" mat-raised-button color=\"primary\" style=\"margin: 15px;\" class=\"mr-2\"\n                  (click)=\"uploadFilesClick()\">\n                  Submit\n                </button>\n        </form>\n      </mat-card-content>\n    </mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/polist/polist.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/polist/polist.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> Recharge</h6>\n    <div class=\"search-hero\">\n      <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"&#61442;  Start searching for a hero by id or name or country\">\n    </div>\n    <div *ngFor=\"let hero of heroes | filter:searchText\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div fxFlex class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n          <div fxFlex>\n          <img [src]=\"hero.country\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\"  fxFlex.md=\"66\"class=\"label\">{{hero.name}}</div>\n      </div>\n      </div>\n  \n      <!-- <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\">\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/toll-1538112.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">FASTag Recharge</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\" >\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/dth-1538152.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">DTH Recharge</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\" >\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/tv-1538122.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">Cable TV</div>\n      </div>\n  \n      </div> -->\n  </div>\n  </div>\n  </mat-card-content>\n</mat-card>\n\n\n\n\n\n<mat-card >\n  <mat-card-content >\n\n    <!-- <input [(ngModel)]=\"searchText\" placeholder=\"search text goes here\">\n    <ul>\n      <li *ngFor=\"let c of characters | filter: searchText\">\n        {{ c }} \n      </li>\n    </ul> -->\n    \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"search-hero\">\n          <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"&#61442;  Start searching for a hero by id or name or country\">\n        </div>\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th>Id</th>\n            <th>Hero Name</th>\n            <th>Country</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let hero of heroes | filter:searchText\">\n            \n            <td>{{hero.id}}</td>\n            <td>{{hero.name}}</td>\n            <td>{{hero.country}}</td>\n            <img [src]=\"images\" height=\"50\"> \n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div >\n      <!-- <ng-image-slider #nav [images]=\"imageObject\" [infinite]=\"true\" [autoSlide]=\"5\" [imageSize]=\"{width: '50%', height: 200}\" slideImage=\"1\"></ng-image-slider> -->\n      <!-- <ng-image-slider #nav\n        [images]=\"imageObject\"\n        [infinite]=\"false\"\n        [autoSlide]=\"1\"\n        [imageSize]=\"{width: '25%', height: 200}\"\n        slideImage=\"1\"></ng-image-slider> -->\n        <angular-image-slider  [autoRotate]=\"true\"\n        [autoRotateAfter]=\"5000\"\n        [autoRotateRight]=\"true\" [images]=\"imagesUrl\"></angular-image-slider>\n      </div>\n    <!-- <div class=\"carousel\"> -->\n      <!-- slides -->\n      <!-- <ul class=\"slides\">\n        <li class=\"slide\" *ngFor=\"let slide of slides; let i = index;\" [@slideState]=\"getAnimationSlideState(i)\" (@slideState.start)=\"animationStarted($event)\"\n            (@slideState.done)=\"animationDone($event)\">\n          <ng-container *ngTemplateOutlet=\"slideTemplateRef; context: { $implicit: slide }\"></ng-container>\n        </li>\n      </ul> -->\n      <!-- navigations & thumbnails -->\n      <!-- <div class=\"navigations\">\n        <button type=\"button\" (click)=\"select(activeSlides.previous)\" *ngIf=\"slides.length > 1 && isNavigationVisible\">\n            <span>left</span> \n        </button>\n        <div>\n          <ol class=\"thumbnails\" *ngIf=\"slides.length > 1 && isThumbnailsVisible\">\n            <li *ngFor=\"let slide of slides; let i = index;\" [class.is-active]=\"i === activeSlides.current\" (click)=\"select(i)\">\n              <ng-container *ngTemplateOutlet=\"thumbnailTemplateRef; context: { $implicit: slide }\"></ng-container>\n            </li>\n          </ol>\n        </div>\n        <button type=\"button\" (click)=\"select(activeSlides.next)\" *ngIf=\"slides.length > 1 && isNavigationVisible\">\n            <span>right</span> \n        </button>\n      </div>\n    </div> -->\n\n    </mat-card-content>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/previewhtmlpage/previewhtmlpage.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/previewhtmlpage/previewhtmlpage.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   \n  <div style=\"height: 50%;width: 50%;\">\n    <content-viewer [content]=\"content\" ></content-viewer>\n  </div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rechargeconfirmation/rechargeconfirmation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rechargeconfirmation/rechargeconfirmation.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\t<mat-card-content>\n\t\t<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"left\"  > \n\t\t\t<div fxLayout=\"column\">\n\n\t\t\t<div fxLayout=\"row\">\n\t\t\t\t<!-- <label><img src=\"/assets/logo/airtel.png\" height=\"50\"></label> -->\n\t\t\t\t<span><img src=\"/assets/logo/BBPS_Logo.png\"  height=\"50\"></span>\n\t\t\t</div>\n\n\t\t\t<br />\n\n\n\t\t\t<div fxLayout=\"row\">\n\n\t\t\t<table cell-spacing=\"50px\" mat-table *ngIf=\"PageList\"  [dataSource]=\"dataSource | paginate: {itemsPerPage: size, currentPage: p, totalItems:PageList.length}\"  class=\"mat-elevation-z8\">\n\n\t\t\t\n\t\t\t\t\t  <ng-container matColumnDef=\"PageNo\">\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef id=\"matTool\"> Mobile </th>\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\"> 9959683864 </td>\n\t\t\t\t\t  </ng-container>\n\t\t\t\n\t\t\t\n\t\t\t\t\t  <ng-container matColumnDef=\"Title\">\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef id=\"matTool\"> Customer Name </th>\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">Rajesh </td>\n\t\t\t\t\t  </ng-container>\n\t\t\t\n\t\t\t\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"['header-row-first-group','header-row-second-group','header-row-third-group']\"></tr>\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;let i = index; let even = even; \"\n\t\t\t\t\t  [ngClass]=\"{ odd: odd, even: even }\"  >\n\t\t\t  </table>\n\t\t\t<!-- <div fxLayout=\"column\">\n\t\t\t<label>Mobile</label>\n\t\t\t<label>9959683864</label>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"column\">\n\t\t\t<label>Customer Name</label>\n\t\t\t<label>Rajesh</label>\n\t\t\t</div> -->\n\t\t\t\n\n\t\t\t</div>\n\t\t\t<mat-card style=\"background-color: lightcyan;\">\n\t\t\t\t<div> <label>When to pay - Pay Later</label>\n\t\t\t\t\t<label>Schedule your Payment to a later date(but prior to atleast few working days beforedue date). Please note your account will be automatically debited on the next working day of scheduled date</label>\n\t\t\t\t</div>\n\t\t\t</mat-card>\n\t\t\t</div>\n\n\t\t\t</div>\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"right\"  > \n\t\t\t<form novalidate>\n\t\t\t\t<div fxLayout=\"column\">\t\t\t\t\n                    <mat-card-content>\n                        <mat-card-title mat-card-title style=\"text-align: center;margin-top: 30;\">Registration</mat-card-title>\n                        <form class=\"basic-form\">\n                            <div fxLayout=\"row wrap\">\n                                <!-- column -->\n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\n                                    <mat-form-field>\n                                        <input type=\"text\" matInput autocomplete=\"off\" placeholder=\"Mobile\" required/>\n                                    </mat-form-field>\n                                </div>\n                            \n        \n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <mat-form-field>\n                                        <mat-select placeholder=\"Operator\">\n                                            <mat-option value=\"Airtel\">Airtel</mat-option>\n                                            <mat-option value=\"V!\">V!</mat-option>\n                                            <mat-option value=\"Jio\">Jio</mat-option>\n                                            <mat-option value=\"BSNL\">BSNL</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                  \n                                </div>\n        \n                             \n\n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <mat-form-field>\n                                        <input type=\"text\" matInput autocomplete=\"off\" placeholder=\"Amount\" required/>\n                                    </mat-form-field>\n                                </div>\n                                \n                                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n                                    <button style=\"margin-bottom: 30;\" mat-raised-button color=\"primary\" type=\"submit\" routerLink=\"/confirmationreceipt\">\n                                    <span >Pay</span></button> \n                                </div>\n                            </div>\n                        </form>\n                    </mat-card-content>\n\n\t\t\t\t\t<br/>\n\t\t\t\t\t   \n\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t</div>\n</mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/record-face/record-face.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/record-face/record-face.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 [hidden]=\"true\" mat-dialog-title style=\"text-align: right;z-index: 0;\"><button matRipple mat-icon-button class=\"close-button\"\n  [mat-dialog-close]=\"true\">\n  <mat-icon mat-dialog-close class=\"close-icon\" color=\"warn\">close</mat-icon>\n</button>\n</h2>\n\n<mat-card>\n  <mat-card-content>\n    <div fxLayout=\"row\" >\n      <div fxFlex=\"60\" fxLayout=\"column\" fxLayoutGap=\"10\" class=\"txt_end\">\n        <div><video #video id=\"video\" width=\"350\" height=\"350\" autoplay></video></div>\n        <div class=\"mt-3\" style=\"margin-right: 8em;\"><button id=\"snap\" (click)=\"capture()\" mat-raised-button color=\"primary\">{{imageSrc ? 'ReTake' :'Take Photo'}}</button></div>\n       </div>\n\n       <div fxFlex=\"10\" fxLayout=\"column\">\n\n       </div>\n\n       <div fxFlex=\"30\" fxLayout=\"column\" class=\"txt_center\">\n        <div *ngIf=\"imageSrc\">\n          <img matRipple src=\"{{imageSrc}}\" height=\"150\" />\n          <!-- [mat-dialog-close]=\"true\" -->\n          <button   matRipple class=\"ml-3\" mat-raised-button color=\"primary\" (click)=\"uploadFaceData()\">Upload</button>\n        </div>\n      </div>\n    </div>\n    <canvas #canvas id=\"canvas\" width=\"700\" height=\"500\"></canvas>\n    <!-- <div class=\"col-lg-12 txt_center\">\n      <div><video #video id=\"video\" width=\"350\" height=\"350\" autoplay></video></div>\n      <div class=\"mt-3\"><button id=\"snap\" (click)=\"capture()\" mat-raised-button color=\"primary\">{{imageSrc ? 'ReTake' :'Take Photo'}}</button></div>\n      </div> -->\n      <!-- <canvas #canvas id=\"canvas\" width=\"700\" height=\"500\"></canvas>\n\n      <div class=\"col-lg-12 txt_center\">\n      <div *ngIf=\"imageSrc\">\n        <img  src=\"{{imageSrc}}\" height=\"150\" />\n\n        <button class=\"ml-3\" mat-raised-button color=\"primary\" (click)=\"uploadFaceData()\">Upload</button>\n      </div>\n      </div>\n\n    </div> -->\n<!-- <div id=\"app\">\n\n\n</div> -->\n</mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviewcomments/reviewcomments.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviewcomments/reviewcomments.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h3 style=\"text-align: center; color:purple;\">Review Comments</h3> -->\n<h5 style=\"text-align: center;\" class=\"headerTitle txt_center\" mat-dialog-title>Review Comments</h5>\n<h2 mat-dialog-title style=\"text-align: right;z-index: 0;\"><button mat-icon-button class=\"close-button\" [mat-dialog-close]=\"true\">\n    <mat-icon  class=\"close-icon\" color=\"warn\">close</mat-icon>\n  </button>\n</h2>\n<mat-dialog-content style=\"max-height: 45vh;\" class=\"mat-typography\">\n    <div _ngcontent-ifm-c316=\"\" fxflex.gt-sm=\"100%\" ng-reflect-fx-flex.gt-sm=\"100%\"\n    style=\"flex: 1 1 100%;  max-width: 100%;\">\n\n    <div fxLayout=\"row wrap\">\n        <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n            <table style=\"border: none; \" >\n                <ng-container *ngFor=\"let row of listReviews ;  even as isEven; odd as isOdd\">\n                    <div class=\"data\" style=\"text-align: left;\" #scrollMe>\n                        <th style=\"border-radius: 5px; \" ng-repeat=\"m in options\" style=\"border: none;\">\n                            <div fxFlex.gt-sm=\"100\" fxFlex=\"20\" >\n                                <b>\n                                    <span matRipple style=\" color: blueviolet;white-space: nowrap;\">\n                                        <mat-icon>person</mat-icon> <sup>{{row.userid}}</sup>\n                                    </span>&nbsp;\n                                </b>\n                                <sup><span matRipple style=\"text-align: right; color:blueviolet;white-space: nowrap;\">{{row.datetime | date:'EEEE dd-MMM-yy HH:mm'}}</span><br /></sup>\n                            </div>\n                        </th>\n                        <tr ng-repeat=\"m in options\"    \n                            [ngStyle]=\"{  background: isEven ? '#79BAEC' : '#D4D4F5' }\">\n                            <td style=\"border-radius: 5px; border: none;\">\n                                <div>\n                                    <!-- <span style=\"text-align: left;\">{{row.comment}}</span>&nbsp; -->\n                                    <span matRipple style=\"text-align: left;\">{{row.chat}}</span>&nbsp;&nbsp;&nbsp;&nbsp;\n                                </div>\n                            </td>\n                        </tr>\n                        \n                    </div>\n                </ng-container>\n            </table>\n        </div>\n    </div>\n</div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"position: absolute;bottom: 20%;width: 71%;padding-left: 2%;\">\n    <!-- <mat-card >\n        <mat-card-content style=\"z-index: 10;\"> -->\n\n            <div [formGroup]=\"chatForm\" style=\"width: 100%;\" fxLayout=\"row\" fxLayoutGap=\"8px\" fxLayoutAlign=\"center center\">\n                <mat-form-field fxFlex=\"calc(100%-56px-56px-16px-16px-8px-8px)\">\n                    <textarea matInput placeholder=\"Type a comment\" formControlName=\"message\"\n                        (keydown.enter)=\"submit()\"></textarea>\n                        <mat-error *ngIf=\"chatForm.controls['message'].hasError('required')\">Comments can not be blank</mat-error>\n                </mat-form-field>\n\n                <button mat-fab color=\"primary\" [disabled]=\"!chatForm.valid\" (click)=\"submit()\">\n                    <mat-icon>send</mat-icon>\n                </button>\n            </div>\n        <!-- </mat-card-content>\n    </mat-card> -->\n\n</mat-dialog-actions>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sectionthree/sectionthree.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sectionthree/sectionthree.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h3 class=\"headerTitle\"> Page list </h3> -->\n<!-- HTML from server: <br />\n    <textarea [value]=\"content\" (keyup)=\"content = $event.target.value\" rows=\"4\" cols=\"50\" ></textarea> <br />\n    Avilable Components: <br /> -->\n<!-- <div *ngFor=\"let selectors of selectors\">{{selectors}}</div> -->\n<!-- Output: <br /> -->\n\n<!-- <button (click)=\"toggle()\">Page Details</button> -->\n\n\n<mat-card>\n\n  <!-- <window matRipple *ngIf=\"showPortal\"> -->\n  \n    <!-- <h2>Hello world from amother window!!</h2> -->\n    <!-- <button (click)=\"this.showPortal = false\">Close me!</button>\n    \n\n    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<mat-card>\n  <div class=\"row\" fxLayout=\"row wrap\" style=\"margin-left: 4px; margin-top: -10px;\">\n  \n    <div fxFlex=\"100\" fxLayout=\"row wrap\" class=\"noPrint\">\n \n  \n      <div fxFlex=\"3\" fxFlex.sm=\"10\" fxFlex.xs=\"6\"  #PrintDivIt><b>Item</b></div>\n      <div class=\"overflowpage\" fxFlex=\"7\" fxFlex.sm=\"15\" fxFlex.xs=\"9\" #PrintDivIt1><label>{{PageDetails.Item_Id}}</label></div>\n      <div fxFlex=\"4\" fxFlex.sm=\"10\" fxFlex.xs=\"9\" #PrintDivPo><b>Po No</b></div>\n      <div class=\"overflowpage\" fxFlex=\"6\" fxFlex.sm=\"10\" fxFlex.xs=\"17\" #PrintDivPo1><label>{{PageDetails.PO_No}}</label></div>\n      <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivPg><b>Page No</b></div>\n      <div class=\"overflowpage\" fxFlex=\"3\" fxFlex.sm=\"10\" fxFlex.xs=\"2\" #PrintDivPg1><label>{{PageDetails.Page}}</label></div>\n      <div fxFlex=\"7\" fxFlex.sm=\"10\" fxFlex.xs=\"17\" #PrintDivLn><b>Line Status</b></div>\n      <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivLn1><label>{{PageDetails.LineStatus}}</label></div>\n      &nbsp;&nbsp;\n  \n    <div class=\"batch-align\" fxFlex=\"4\" fxFlex.sm=\"10\" fxFlex.xs=\"8\" #PrintDivBh><b>Batch</b></div>\n    <div class=\"overflowpage\" fxFlex=\"7\" fxFlex.sm=\"10\" fxFlex.xs=\"15\" #PrintDivBh1><label>{{PageDetails.Batch}}</label></div>\n    <div fxFlex=\"8\" fxFlex.sm=\"15\" fxFlex.xs=\"20\" #PrintDivHd><b>Header Status</b></div>\n    <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"9\" #PrintDivHd1><label>{{PageDetails.HeaderStatus}}</label></div>\n    <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivAl><b>Authlevel</b></div>\n    <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"5\" #PrintDivAl1><label>{{PageDetails.Authlevel}}</label></div>\n    <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"11\" #PrintDivSn><b>Section</b></div>\n    <div class=\"overflowpage\" style=\"overflow: hidden;\" fxFlex=\"6\" fxFlex.sm=\"10\" fxFlex.xs=\"6\" #PrintDivSn1><label>{{PageDetails.Section}}</label></div>\n  \n      <div class=\"Action noPrint\" fxFlex=\"3\" fxShow=\"true\" fxHide.lt-md fxFlex.sm=\"10\" fxFlex.xs=\"5\"><small>\n          <mat-icon matRipple [matRippleColor]=\"primary\" [matMenuTriggerFor]=\"animals\" color=\"primary\" (click)=\"toggle()\"\n            matTooltip=\"Action Center\" matTooltipPosition=\"above\">{{ show ? 'more_horiz' : 'more_vert' }}</mat-icon>\n        </small></div>\n    </div>\n  \n    <h6 style=\"text-align: center; margin-top: -20px;\" class=\"headerTitle txt_center\" mat-dialog-title>Action Center</h6>\n    <hr>\n    \n    <div matRipple (click)=\"SaveButton();this.showPortal = false\"  mat-menu-item class=\"outer-div save\"  onload=loadValue() [class.disabled]=\"!SAVE\" [ngClass]=\"{'disable':!SAVE}\">\n      <span>Save</span>\n     </div>\n  \n    \n      <div matRipple (click)=\"ValidateIconClick();this.showPortal = false\" style=\"margin-left: 38px;\"   mat-menu-item  class=\"outer-div validates\" [class.disabled]=\"!SAVE_VALIDATE\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\"> -->\n        <!-- [class.disabled]=\"!SAVE_VALIDATE\" -->\n\n        <!-- <mat-icon (click)=\"ValidateIconClick()\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\">price_check</mat-icon> -->\n        <!-- <span>Validate</span>\n\n\n      </div>\n      \n      <div matRipple (click)=\"COMPUTEClick();\"  mat-menu-item class=\"outer-div compute\" [class.disabled]=\"!COMPUTE\" [ngClass]=\"{'disable':!COMPUTE}\">\n        <span>Compute</span>\n      </div>\n\n\n  \n      <div matRipple (click)=\"PageLineSChangeClick('CLOSE','Close-Page');this.showPortal = false\"   mat-menu-item class=\"outer-div closeS\" [class.disabled]=\"!CLOSE_PAGE\" [ngClass]=\"{'disable':!CLOSE_PAGE}\" >\n  \n        <span>Close-Page</span>\n  \n      </div>\n      <hr>\n\n      \n      <div matRipple (click)=\"DataUploadClick()\"  mat-menu-item class=\"outer-div data\" [class.disabled]=\"!DATA_UPLOAD\" [ngClass]=\"{'disable':!DATA_UPLOAD}\">\n        <span>Data-Upload</span>\n      </div>\n         \n      <hr>\n   \n      <div matRipple (click)=\"PageLineSChangeClick('OPEN','Re-Open');this.showPortal = false\"  mat-menu-item class=\"outer-div reopen\" [class.disabled]=\"!REOPEN\" [ngClass]=\"{'disable':!REOPEN}\">\n        <span>Re-Open</span>\n      </div>\n     \n  \n    \n  </div>\n  <br />\n  </mat-card> \n-->\n    <!-- <div #hello>Please wait...Loading HTML File</div> -->\n    <!-- <style>\n      .test{\n        width:100%\n      }\n    </style>\n    <content-viewer [innerHTML]=\"content | safe: 'html'\" >\n      \n\n    </content-viewer>\n</window> -->\n\n</mat-card>\n<div [hidden]=\"true\" #logo>\n  <img src=\"http://192.168.160.94/assets/logo/serumlogoPoonawala.png\">\n\n</div>\n\n<mat-card>\n<div class=\"row\" fxLayout=\"row wrap\" style=\"margin-left: 4px; margin-top: -10px;\">\n\n  <div fxFlex=\"100\" fxLayout=\"row wrap\" class=\"noPrint\">\n    <div class=\"Action noPrint\" fxFlex=\"3\" fxFlex.sm=\"10\" fxFlex.xs=\"6\"><small>\n        <mat-icon matRipple [matRippleColor]=\"primary\" color=\"primary\" (click)=\"toggleHeader()\"\n          matTooltip=\"Toggle Header\" matTooltipPosition=\"above\">{{ showheder ? 'fullscreen_exit ' : 'fullscreen' }}\n        </mat-icon>\n      </small></div>\n\n    <div fxFlex=\"3\" fxFlex.sm=\"10\" fxFlex.xs=\"6\"  #PrintDivIt><b>Item</b></div>\n    <div class=\"overflowpage\" fxFlex=\"7\" fxFlex.sm=\"15\" fxFlex.xs=\"9\" #PrintDivIt1><label>{{PageDetails.Item_Id}}</label></div>\n    <div fxFlex=\"4\" fxFlex.sm=\"10\" fxFlex.xs=\"9\" #PrintDivPo><b>Po No</b></div>\n    <div class=\"overflowpage\" fxFlex=\"6\" fxFlex.sm=\"10\" fxFlex.xs=\"17\" #PrintDivPo1><label>{{PageDetails.PO_No}}</label></div>\n    <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivPg><b>Page No</b></div>\n    <div class=\"overflowpage\" fxFlex=\"3\" fxFlex.sm=\"10\" fxFlex.xs=\"2\" #PrintDivPg1><label>{{PageDetails.Page}}</label></div>\n    <div fxFlex=\"7\" fxFlex.sm=\"10\" fxFlex.xs=\"17\" #PrintDivLn><b>Line Status</b></div>\n    <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivLn1><label>{{PageDetails.LineStatus}}</label></div>\n\n    <div matRipple class=\"Action tab-action noPrint\" fxFlex=\"2\" fxShow=\"true\" fxHide.gt-md fxFlex.sm=\"5\" fxFlex.xs=\"6\"><small>\n      <mat-icon matRipple [matRippleColor]=\"primary\" [matMenuTriggerFor]=\"animals\" color=\"primary\" (click)=\"toggle()\"\n        matTooltip=\"Action Center\" matTooltipPosition=\"above\">{{ show ? 'more_horiz' : 'more_vert' }}</mat-icon>\n    </small></div>&nbsp;&nbsp;\n\n  <div class=\"batch-align\" fxFlex=\"4\" fxFlex.sm=\"10\" fxFlex.xs=\"8\" #PrintDivBh><b>Batch</b></div>\n  <div class=\"overflowpage\" fxFlex=\"7\" fxFlex.sm=\"10\" fxFlex.xs=\"15\" #PrintDivBh1><label>{{PageDetails.Batch}}</label></div>\n  <div fxFlex=\"8\" fxFlex.sm=\"15\" fxFlex.xs=\"20\" #PrintDivHd><b>Header Status</b></div>\n  <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"9\" #PrintDivHd1><label>{{PageDetails.HeaderStatus}}</label></div>\n  <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"12\" #PrintDivAl><b>Authlevel</b></div>\n  <div class=\"overflowpage\" fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"5\" #PrintDivAl1><label>{{PageDetails.Authlevel}}</label></div>\n  <div fxFlex=\"5\" fxFlex.sm=\"10\" fxFlex.xs=\"11\" #PrintDivSn><b>Section</b></div>\n  <div class=\"overflowpage\" style=\"overflow: hidden;\" fxFlex=\"6\" fxFlex.sm=\"10\" fxFlex.xs=\"6\" #PrintDivSn1><label>{{PageDetails.Section}}</label></div>\n\n    <div class=\"Action noPrint\" fxFlex=\"3\" fxShow=\"true\" fxHide.lt-md fxFlex.sm=\"10\" fxFlex.xs=\"5\"><small>\n        <mat-icon matRipple [matRippleColor]=\"primary\" [matMenuTriggerFor]=\"animals\" color=\"primary\" (click)=\"toggle()\"\n          matTooltip=\"Action Center\" matTooltipPosition=\"above\">{{ show ? 'more_horiz' : 'more_vert' }}</mat-icon>\n      </small></div>\n      <div matRipple (click)=\"SaveButton()\" mat-menu-item class=\"outer-div save\"  onload=loadValue() [class.disabled]=\"!SAVE\" [ngClass]=\"{'disable':!SAVE}\">\n        <mat-icon class=\"saves\">{{SAVE ? 'save' : ''}}</mat-icon>\n       </div>\n  </div>\n\n\n</div>\n</mat-card>\n\n<div style=\"font-size: 30px;\" fxShow=\"true\" fxHide.gt-md>\n\n\n  <mat-menu #animals=\"matMenu\">\n    <mat-icon matRipple style=\"text-align: right;\" (click)=\"menuTrigger.closeMenu()\" class=\"close-icon\" color=\"warn\">close</mat-icon>\n    <h6 style=\"text-align: center; margin-top: -20px;\" class=\"headerTitle txt_center\" mat-dialog-title>Action Center</h6>\n    <hr>\n    \n    <div matRipple (click)=\"SaveButton()\"  mat-menu-item class=\"outer-div save\"  onload=loadValue() [class.disabled]=\"!SAVE\" [ngClass]=\"{'disable':!SAVE}\">\n      <mat-icon>save</mat-icon>\n      <span>Save</span>\n     </div>\n  \n    \n      <div matRipple (click)=\"ValidateIconClick()\" style=\"margin-left: 38px;\"   mat-menu-item  class=\"outer-div validates\" [class.disabled]=\"!SAVE_VALIDATE\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\">\n        <!-- [class.disabled]=\"!SAVE_VALIDATE\" -->\n        <mat-icon>spellcheck</mat-icon>\n\n        <!-- <mat-icon (click)=\"ValidateIconClick()\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\">price_check</mat-icon> -->\n        <span>Validate</span>\n      </div>\n      \n      <div matRipple (click)=\"COMPUTEClick()\"  mat-menu-item class=\"outer-div compute\" [class.disabled]=\"!COMPUTE\" [ngClass]=\"{'disable':!COMPUTE}\">\n        <mat-icon  >calculate</mat-icon>\n        <span>Compute</span>\n      </div>\n  \n      <div matRipple (click)=\"PageLineSChangeClick('CLOSE','Close-Page')\"   mat-menu-item class=\"outer-div closeS\" [class.disabled]=\"!CLOSE_PAGE\" [ngClass]=\"{'disable':!CLOSE_PAGE}\" >\n  \n        <mat-icon  >description</mat-icon>\n        <span>Close-Page</span>\n  \n      </div>\n      <hr>\n      <div matRipple (click)=\"DataUploadClick()\"  mat-menu-item class=\"outer-div data\" [class.disabled]=\"!DATA_UPLOAD\" [ngClass]=\"{'disable':!DATA_UPLOAD}\">\n        <mat-icon   >upload_file</mat-icon>\n        <span>Data-Upload</span>\n      </div>\n     \n      <div matRipple (click)=\"FileUploadView()\"  mat-menu-item class=\"outer-div file\" [class.disabled]=\"!FILE_UPLOAD\" [ngClass]=\"{'disable':!FILE_UPLOAD}\">\n        <mat-icon    >file_upload</mat-icon>\n        <span>File-Upload</span>\n      </div>\n    \n      <!-- currentScreenSize==Large ? PhotoUploadView('','user') : PhotoUploadView('','environment')\" -->\n      <div matRipple (click)=\"PhotoUploadView()\"  mat-menu-item class=\"outer-div photo\" [class.disabled]=\"!PHOTO_UPLOAD\" [ngClass]=\"{'disable':!PHOTO_UPLOAD}\" >\n        <mat-icon  >add_a_photo</mat-icon>\n        <span>Photo-Upload</span>\n      </div>\n      <hr>\n      <div matRipple (click)=\"AccesCommentsView()\"  mat-menu-item class=\"outer-div review\" [class.disabled]=\"!REVIEW_COMMENTS\" [ngClass]=\"{'disable':!REVIEW_COMMENTS}\">\n        <mat-icon>question_answer</mat-icon>\n        <span>Review-Comments</span>\n      </div>\n      <div matRipple (click)=\"PageLineSChangeClick('OPEN','Re-Open')\"  mat-menu-item class=\"outer-div reopen\" [class.disabled]=\"!REOPEN\" [ngClass]=\"{'disable':!REOPEN}\">\n        <mat-icon >open_in_new</mat-icon>\n        <span>Re-Open</span>\n      </div>\n      <div matRipple  (click)=\"AccesLogView('','ReviewStatus')\"  mat-menu-item class=\"outer-div status\" [class.disabled]=\"!REVIEW_COMPLETE\"  [ngClass]=\"{'disable':!REVIEW_COMPLETE}\">\n        <!-- (click)=\"PageLineSChangeClick('REVIEW','Review-Complete')\" -->\n        <mat-icon>rate_review</mat-icon>\n        <span>Review-Complete</span>\n      </div>\n     \n      <hr>\n      <div matRipple (click)=\"PrintPage()\" mat-menu-item class=\"outer-div print\" [class.disabled]=\"!PRINT\" [ngClass]=\"{'disable':!PRINT}\">\n        <mat-icon   >print</mat-icon>\n        <span>Print</span>\n      </div>\n      <div matRipple (click)=\"ViewPageClick()\"  mat-menu-item class=\"outer-div view\" [class.disabled]=\"!VIEW\"  [ngClass]=\"{'disable':!VIEW}\">\n        <mat-icon  >visibility</mat-icon>\n        <span>View</span>\n      </div>\n    \n  </mat-menu>\n</div>\n<!-- <button mat-icon-button fxShow=\"true\" fxHide.gt-sm [matMenuTriggerFor]=\"animals\"><mat-icon style=\"color: white; font-size: 20px;\">Menu</mat-icon></button> -->\n\n\n<mat-card *ngIf=\"show\" @ngIfAnimation>\n  <div @easeInOut>\n\n\n    <!-- <mat-accordion class=\"example-headers-align\"  >\n     \n      <mat-expansion-panel>\n        <mat-expansion-panel-header >\n          <mat-panel-title>\n            Actions\n          </mat-panel-title>\n       </mat-expansion-panel-header> -->\n    <!-- [collapsedHeight]=\"customCollapsedHeight\" [expandedHeight]=\"customExpandedHeight\" -->\n    <!-- collapsedHeight=\"16px\" multi -->\n    <!-- <div fxLayout=\"row\">\n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\" (click)=\"LogEntry()\">\n                save\n            </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                price_check\n            </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                calculate\n            </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                print\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                check_circle\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                loop\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n    \n                </span>\n        </div>\n    \n    </div>\n    <hr>\n    <div fxLayout=\"row\">\n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                rate_review\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                visibility\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                file_upload\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                add_a_photo\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                reviews\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                open_in_new\n                </span>\n        </div>\n    \n        <div fxFlex=\"15\" fxLayout=\"column\">\n            <span class=\"material-icons\">\n                open_in_new\n                </span>\n        </div>\n    \n    \n    </div> -->\n\n    <div [hidden]=\"true\" fxShow=\"true\" fxHide.lt-md fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\"\n      fxLayoutAlign=\"space-evenly center\">\n\n      <div fxFlex=\"30\" class=\"border p-2  mb-1\" fxLayoutAlign=\"space-around center\">\n        <div class=\"outer-div\" onload=loadValue() [class.disabled]=\"!SAVE\">\n          <mat-icon (click)=\"SaveButton()\" [ngClass]=\"{'disable':!SAVE}\">save</mat-icon>\n          <span>save</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!SAVE_VALIDATE\">\n          <!-- [class.disabled]=\"!SAVE_VALIDATE\" -->\n          <mat-icon (click)=\"ValidateIconClick()\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\">price_check</mat-icon>\n          <!-- <mat-icon (click)=\"ValidateIconClick()\" [ngClass]=\"{'disable':!SAVE_VALIDATE}\">price_check</mat-icon> -->\n          <span>Validate</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!COMPUTE\">\n          <mat-icon (click)=\"COMPUTEClick()\" [ngClass]=\"{'disable':!COMPUTE}\">calculate</mat-icon>\n          <span>Compute</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!CLOSE_PAGE\">\n\n          <mat-icon (click)=\"PageLineSChangeClick('CLOSE','Close-Page')\" [ngClass]=\"{'disable':!CLOSE_PAGE}\">description\n          </mat-icon>\n          <span>Close-Page</span>\n\n        </div>\n      </div>\n\n\n\n\n      <div fxFlex=\"25\" class=\"border p-2 mb-1\" fxLayoutAlign=\"space-around center\">\n        <div class=\"outer-div\" [class.disabled]=\"!DATA_UPLOAD\">\n          <mat-icon (click)=\"DataUploadClick()\" [ngClass]=\"{'disable':!DATA_UPLOAD}\">upload_file</mat-icon>\n          <span>Data-Upload</span>\n        </div>\n\n        <div class=\"outer-div\" [class.disabled]=\"!FILE_UPLOAD\">\n          <mat-icon (click)=\"FileUploadView()\" [ngClass]=\"{'disable':!FILE_UPLOAD}\">file_upload</mat-icon>\n          <span>File-Upload</span>\n        </div>\n\n\n        <div class=\"outer-div\" [class.disabled]=\"!PHOTO_UPLOAD\">\n          <mat-icon (click)=\"PhotoUploadView()\" [ngClass]=\"{'disable':!PHOTO_UPLOAD}\">add_a_photo</mat-icon>\n          <span>Photo-Upload</span>\n        </div>\n      </div>\n\n\n      <div fxFlex=\"30\" class=\"border p-2 mb-1\" fxLayoutAlign=\"space-around center\">\n        <div class=\"outer-div\" [class.disabled]=\"!REVIEW_COMMENTS\">\n          <mat-icon (click)=\"AccesCommentsView()\" [ngClass]=\"{'disable':!REVIEW_COMMENTS}\">reviews</mat-icon>\n          <span>Review-Comments</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!REVIEW_COMPLETE\">\n          <!-- (click)=\"PageLineSChangeClick('REVIEW','Review-Complete')\" -->\n          <mat-icon (click)=\"AccesLogView('','ReviewStatus')\" [ngClass]=\"{'disable':!REVIEW_COMPLETE}\">rate_review\n          </mat-icon>\n          <span>Review-Complete</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!REOPEN\">\n          <mat-icon (click)=\"PageLineSChangeClick('OPEN','Re-Open')\" [ngClass]=\"{'disable':!REOPEN}\">open_in_new\n          </mat-icon>\n          <span>Re-Open</span>\n        </div>\n        <!-- <div class=\"outer-div\">\n        <mat-icon >rate_review</mat-icon>\n        <span>Review-Status</span>\n      </div> -->\n        <!-- <div class=\"outer-div\" [class.disabled]=\"!PRINT\">\n        <mat-icon>print</mat-icon>\n        <span>Print</span>\n      </div> -->\n      </div>\n\n      <div fxFlex=\"10\" class=\"border p-2 mb-1\" fxLayoutAlign=\"space-around center\">\n        <div class=\"outer-div\" [class.disabled]=\"!PRINT\">\n          <mat-icon [ngClass]=\"{'disable':!PRINT}\" (click)=\"PrintPage()\">print</mat-icon>\n          <span>Print</span>\n        </div>\n        <div class=\"outer-div\" [class.disabled]=\"!VIEW\">\n          <mat-icon (click)=\"ViewPageClick()\" [ngClass]=\"{'disable':!VIEW}\">visibility</mat-icon>\n          <span>View</span>\n        </div>\n      </div>\n\n    </div>\n\n\n\n    <!-- \n      </mat-expansion-panel>\n    </mat-accordion> -->\n\n\n  </div>\n  <!-- </mat-card-content> -->\n</mat-card>\n<mat-card style=\"margin-top: -10px; \">\n  <!-- <button matButton color=\"primary\" (click)=\"viewhtml()\">View Page</button> -->\n\n<div style=\"overflow:auto;display:flex \">\n\n  \n  <div #hello>Please wait...Loading HTML File\n  </div>\n \n    <!-- <div [innerHTML]=\"content | safe: 'html'\"></div> -->\n    <!-- <span #hello></span> -->\n\n    <!-- <iframe  width=\"100%\" height=\"100%\" >\n      <content-viewer [content]=\"iframeUrl\" ></content-viewer>\n    </iframe> -->\n    <!-- <content-viewer [content]=\"content\" ></content-viewer> -->\n    <!-- <div>{{hostElement}}</div> -->\n\n</div>\n<!-- <div [innerHtml]=\"userHtml | safeHtml\"></div> -->\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2  mat-dialog-title style=\"text-align: right;z-index: 0;\"><button matRipple mat-icon-button class=\"close-button\" [mat-dialog-close]=\"true\">\n  <mat-icon  class=\"close-icon\" color=\"warn\">close</mat-icon>\n</button>\n</h2>  \n\n<!-- <div *ngFor=\"let progressInfo of progressInfos\" class=\"mb-2\">\n    <span>{{ progressInfo.fileName }}</span>\n    <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\"\n            attr.aria-valuenow=\"{{ progressInfo.value }}\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n            [ngStyle]=\"{ width: progressInfo.value + '%' }\">\n            {{ progressInfo.value }}%\n        </div>\n    </div>\n</div> -->\n<label class=\"btn btn-default\">\n  <!-- multiple -->\n    <input matRipple type=\"file\" mat-dialog-title  (change)=\"onFileSelect($event)\" />\n    <!-- <input type=\"file\" mat-dialog-title  (change)=\"selectFiles($event)\" /> -->\n</label>\n<!-- \n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"AddFiles()\">\n    Add\n</button> -->\n<!-- <div class=\"alert alert-light\" role=\"alert\">{{ message }}</div> -->\n<mat-dialog-content mat-dialog-title color=\"accent\"><div class=\"card-header\" matRipple>List of Files</div></mat-dialog-content>\n <!-- <div>\n     [mat-dialog-close]=\"true\"\n    <button mat-icon-button class=\"close-button\" (click)=\"CloseCoputepage()\">\n      <mat-icon class=\"close-icon\" color=\"warn\">close</mat-icon>\n    </button>\n  </div>\n  <mat-dialog-content>\n    <div class=\"row\">\n      <!-- <h5 class=\"headerTitle\">Compute formula</h5> -->\n      <!-- <div class=\"col-lg-12\">\n       \n      <div class=\"col-lg-12 txt_end\">\n        <div class=\"example-button-row\">\n      <button mat-raised-button color=\"primary\" class=\"mr-2\" type=\"button\" [disabled]=\"!computegridForm.valid\" (click)=\"AddCompute()\">Add</button>\n<button mat-raised-button color=\"warn\"  (click)=\"cancelModal()\">Cancel</button> \n      </div>\n      </div> \n    </div> -->\n   <mat-dialog-content>\n      <div>\n      <div class=\"col-lg-12\" >\n        <table id=\"tbl\" class=\"tbl_sm\" style=\"width: 100%;\">\n          <thead>\n            <tr>\n              <th matRipple>No.</th>\n              <!-- <th>Preview</th> -->\n              <th matRipple>File name </th>\n              <th matRipple>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let items of GetFiles; let i = index\">\n                <td matRipple>{{i+1}}</td>\n                <!-- <td><img [src]=\"selectedFiles[i]\" width=\"50px\" height=\"30px\"></td> -->\n                <td matRipple>{{items.FileName}}</td>\n\n              <td><button (click)=\"delectedItem(i)\" type=\"button\" class=\"btn btn-danger\">Delete</button></td>\n            </tr>\n          </tbody>\n        </table>\n        <button matRipple class=\"btn btn-success\" mat-raised-button color=\"primary\" style=\"margin: 15px;\" class=\"mr-2\" [disabled]=\"GetFiles.length == 0 || GetFiles.length == null\" (click)=\"uploadFilesClick()\">\n            Submit\n        </button>\n  \n      </div>  \n     </div>\n\n  </mat-dialog-content>\n\n  <!-- <div class=\"card\">\n    <ul class=\"list-group list-group-flush\" *ngFor=\"let file of fileInfos | async\">\n        <li class=\"list-group-item\">\n            <a href=\"{{ file.url }}\">{{ file.name }}</a>\n        </li>\n    </ul>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadpage/uploadpage.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadpage/uploadpage.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n  <mat-card-content>\n    <h5 matRipple class=\"headerTitle\"> Upload Page In Document</h5>\n    <form [formGroup]=\"UploagePageForm\"  novalidate>\n     <div class=\"row\">\n       <div class=\"col-md-8\">\n         <div class=\"row\">\n          <div class=\"col-4\">\n            <mat-form-field>\n              <mat-select matRipple [formControl]=\"bankCtrl\" placeholder=\"Document Name\" #singleSelect (selectionChange)=\"ShowversionbyDocName($event)\">\n                <mat-option matRipple>\n                  <ngx-mat-select-search\n                   [formControl]=\"dropdown_search\"\n                   placeholderLabel=\"Search Document...\"\n                   noEntriesFoundLabel=\"'No Match Found'\">\n                  </ngx-mat-select-search>\n                </mat-option>\n                <mat-option matRipple *ngFor=\"let item of document_list_data | async\" [value]=\"item.documentName\">\n                  {{item.documentName}}\n                </mat-option>\n              </mat-select>\n              <!-- <mat-error *ngIf=\"errorHandling('documentName', 'required')\">Document name can not be blank</mat-error> -->\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-4\">\n            <mat-form-field>\n            <mat-select matRipple placeholder=\"Document Version\" formControlName=\"documentVersion\">\n              <mat-option matRipple *ngFor=\"let item of DocVersionList\" [value]=\"item.documentVersion\">{{item.documentVersion}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"errorHandling('documentVersion', 'required')\">Document version can not be blank</mat-error>\n          </mat-form-field>\n          </div>\n\n          <div class=\"col-4\">\n            <mat-form-field matRipple>\n              <input matInput placeholder=\"Page Number\" maxlength=\"100\"  required (keydown.space)=\"$event.preventDefault()\"  formControlName=\"page\">\n              <mat-error *ngIf=\"errorHandling('page', 'required')\">Page number can not be blank</mat-error>\n          </mat-form-field>\n          </div>\n\n         </div>\n\n         <div class=\"row\">\n           <div class=\"col-4\">\n            <mat-form-field matRipple>\n              <input matInput placeholder=\"Page Title\"  maxlength=\"100\" formControlName=\"pageTitle\"  required>\n              <mat-error *ngIf=\"errorHandling('pageTitle', 'required')\">Page title can not be blank</mat-error>\n          </mat-form-field>\n           </div>\n\n           <div class=\"col-4\">\n            <mat-form-field matRipple>\n              <mat-select  placeholder=\"Section\" formControlName=\"section\">\n                <mat-option *ngFor=\"let item of SectionList\"  [value]=\"item.section\">{{item.SectionName}}</mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"errorHandling('section', 'required')\">Section can not be blank</mat-error>\n            </mat-form-field>\n           </div>\n\n         </div>\n\n       </div>\n\n       <div class=\"col-md-4\">\n\n        <div class=\"row\">\n          <table>\n            <tr>\n              <td matRipple>Is Compute allowed </td>\n              <td class=\"txt_center\">\n                <mat-radio-group matRipple aria-label=\"Select an option\"  required formControlName=\"isComputeInHtml\" >\n                  <mat-radio-button value=\"true\" (click)=\"OpenComputepopup()\" >Yes &nbsp;</mat-radio-button>\n                   <mat-radio-button value=\"false\" (click)=\"ResetArray()\" >No</mat-radio-button>\n              </mat-radio-group>\n              </td>\n            </tr>\n\n            <tr>\n              <td matRipple>\n                File Upload Allowed\n              </td>\n              <td class=\"txt_center\">\n                <mat-radio-group matRipple aria-label=\"Select an option\"  required formControlName=\"isFileUploadAllowed\" >\n                  <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n                  <mat-radio-button value=\"false\" >No</mat-radio-button>\n              </mat-radio-group>\n              </td>\n            </tr>\n\n            <tr>\n              <td matRipple>\n                Photo Upload Allowed\n              </td>\n              <td class=\"txt_center\">\n                <mat-radio-group matRipple aria-label=\"Select an option\"  required formControlName=\"isPhotoUploadAllowed\" >\n                  <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n                  <mat-radio-button value=\"false\" >No</mat-radio-button>\n              </mat-radio-group>\n              </td>\n            </tr>\n\n            <tr>\n              <td matRipple>\n                Data Upload allowed\n              </td>\n              <td class=\"txt_center\">\n                <mat-radio-group matRipple aria-label=\"Select an option\"  required formControlName=\"isDataUploadAllowed\" >\n                  <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n                  <mat-radio-button value=\"false\" >No</mat-radio-button>\n              </mat-radio-group>\n              </td>\n            </tr>\n\n          </table>\n        </div>\n<!--\n         <div class=\"col\">\n          <label>Is Compute allowed : &nbsp;</label>\n          <mat-radio-group aria-label=\"Select an option\"  required formControlName=\"isComputeInHtml\" >\n              <mat-radio-button value=\"true\" (click)=\"OpenComputepopup()\" >Yes &nbsp;</mat-radio-button>\n              <mat-radio-button value=\"false\" >No</mat-radio-button>\n          </mat-radio-group>\n         </div>\n\n         <div class=\"col\">\n          <label>File Upload Allowed : &nbsp;</label>\n          <mat-radio-group aria-label=\"Select an option\"  required formControlName=\"isFileUploadAllowed\" >\n              <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n              <mat-radio-button value=\"false\" >No</mat-radio-button>\n          </mat-radio-group>\n         </div>\n\n         <div class=\"col\">\n          <label>Photo Upload Allowed : &nbsp;</label>\n          <mat-radio-group aria-label=\"Select an option\"  required formControlName=\"isPhotoUploadAllowed\" >\n              <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n              <mat-radio-button value=\"false\" >No</mat-radio-button>\n          </mat-radio-group>\n         </div>\n\n         <div class=\"col\">\n          <label>Data Upload allowed : &nbsp;</label>\n          <mat-radio-group aria-label=\"Select an option\"  required formControlName=\"isDataUploadAllowed\" >\n              <mat-radio-button value=\"true\" >Yes &nbsp;</mat-radio-button>\n              <mat-radio-button value=\"false\" >No</mat-radio-button>\n          </mat-radio-group>\n        </div> -->\n\n       </div>\n\n     </div>\n     <hr>\n\n     <div class=\"row\"  style=\"display:inline-block\"> \n      <div class=\"col\" style=\"display:inline-block\">\n      <label matRipple>Html file : &nbsp; &nbsp;</label>\n      <input matRipple type=\"file\" name=\"Doc\" (click)=resetFile()  (change)=\"onFileSelect($event)\" id=\"File1\" formControlName=\"Doc\" required/>\n      <button matRipple mat-raised-button id=\"preview\" type=\"button\" color=\"primary\" (click)=\"PreviewHTML()\">Preview html</button>\n      <mat-error *ngIf=\"errorHandling('Doc', 'required')\">Please select a file</mat-error>\n      <!-- <mat-error *ngIf=\"errorHandling('Doc', 'required')\">\n        Please choose file\n      </mat-error> -->\n      <!-- <p *ngIf=\"UploagePageForm.controls.Doc.errors?.required\" style=\"color: red\">This field is required!</p> -->\n      <!-- <button mat-raised-button color=\"primary\"(click)=\"PreviewHTML()\">Preview html</button> -->\n    \n <script>   \n\n//  $('#file1').click(function(){\n//   $('input:submit').attr('disabled',false);\n//       //Some code\n//  });\n\n  // $(document).ready(\n  //   function(){\n  //                   $('#File1').change(function(){\n  //                     $('#preview').attr('disabled', '');\n  //                   });           \n  //   });\n\n  //2\n  // $(document).ready(\n  //   function(){\n  //       $('input:file').change(\n  //           function(){\n  //               if ($(this).val()) {\n  //                  // $('input:submit').attr('disabled',false);\n  //                   // or, as has been pointed out elsewhere:\n  //                    $('input:submit').removeAttr('disabled'); \n  //               } \n  //           }\n  //           );\n  //   });\n\n  //3\n//   $('input:file').on(\"change\", function() {\n//     $('input:submit').prop('disabled', !$(this).val()); \n// });\n\n// $('#file1').change(function() {\n//       if($(this).val()) {\n//         $('#preview').attr('disabled', '');\n//       } else {\n//         $('#preview').attr('disabled', 'disabled');\n//       }\n//     });\n\n// $(document).ready(function(){\n//     var $submit = $('#preview');\n//     var $file = $('#file1');\n\n//     $file.change(\n//         function(){\n//             $submit.attr('disabled',($(this).val() ? false : true));\n//         }\n//     );\n// });  \n\n</script>\n\n    </div>\n     </div>\n  <hr>\n\n\n  <div class=\"col-lg-12\" *ngIf=\"ComputeLists?.length > 0\">\n    <table id=\"tbl\" class=\"tbl_sm\" style=\"width: 100%;\">\n      <thead>\n        <tr>\n          <th matRipple>Tag</th>\n          <th matRipple>Formula </th>\n          <!-- <th>Delete</th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let items of ComputeLists; let i = index\">\n          <td matRipple>{{items.Comptag}}</td>\n          <td matRipple>{{items.TagFormula}} </td>\n          <!-- <td><button (click)=\"delectedItem(i)\" type=\"button\" class=\"btn btn-danger\">Delete</button></td> -->\n        </tr>\n      </tbody>\n    </table>\n    <hr>\n  </div>\n\n<window matRipple *ngIf=\"showPortal\">\n  \n    <!-- <h2>Hello world from amother window!!</h2> -->\n    <button (click)=\"this.showPortal = false\">Close me!</button>\n    <!-- <div #hello>Please wait...Loading HTML File</div> -->\n    \n    <content-viewer [content]=\"pagepreview\" >\n      \n\n    </content-viewer>\n</window>\n\n<!-- <div class=\"row\" style=\"margin-top: 30px; justify-content: flex-end;\"> -->\n<div class=\"row\" style=\"margin-top: 30px\">\n    <button matRipple mat-raised-button color=\"primary\" [disabled]=\"content == undefined || content == null\" type=\"button\" (click)=\"UploadePageInDoc()\" >Submit</button>\n    &nbsp; &nbsp;\n    <button matRipple mat-raised-button color=\"primary\" type=\"reset\" (click)=\"resetForm()\" >Reset</button>\n    </div>\n\n\n\n  </form>\n  </mat-card-content>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/userprofile/userprofile.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/userprofile/userprofile.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let hero of heroes | filter:searchText\"> -->\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> Recharge</h6>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div fxFlex class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\" routerLink =\"/mobilerecharge\" (click)=\"mobilerecharge()\">\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/png-1024/mobile-recharge-1538140.png\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\"  fxFlex.md=\"66\"class=\"label\">Mobile Recharge</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\">\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/toll-1538112.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">FASTag Recharge</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\" >\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/dth-1538152.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">DTH Recharge</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"items\" >\n          <div fxFlex>\n          <img src=\"/assets/logo/e-wallet/svg/tv-1538122.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">Cable TV</div>\n      </div>\n  \n      </div>\n  </div>\n  </mat-card-content>\n</mat-card>\n<!-- <hr> -->\n<mat-card>\n  <mat-card-content  style=\"line-height: 6;margin: 20px;\">\n\n    <h6 matRipple class=\"headerTitle\"> Utilities</h6>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxFlex.xs=\"66\">\n          <img src=\"/assets/logo/e-wallet/svg/gas-cylinder-1538148.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">Book A Cylinder</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div fxFlex.xs=\"66\">\n          <img src=\"/assets/logo/e-wallet/svg/gas-pipeline-1538147.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div fxFlex.xs=\"66\" class=\"label\">Piped Gas</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/water-bill-1538120.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Water</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\" routerLink=\"/electricity\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/electricity-bill-1538115.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Electricity</div>\n      </div>\n  \n      </div>\n\n      </div>\n\n      \n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n      \n\n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/mobile-recharge-1538140.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Postpaid</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/broadband-1538159.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Broadband / Landline</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/contact-1538155.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Education</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/hotels-1538145.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Rent Payment</div>\n      </div>\n  \n      </div>\n  </div>\n\n\n  </mat-card-content>\n</mat-card>\n<!-- <hr> -->\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> FASTag Balance and Recharge</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/auto-pay-1538118.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">IDFC First Bank</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/processing-payment-1538134.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">ICICI Bank</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\" >\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/request-money-1538132.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Paytm Payments Bank</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/pending-payment-1538136.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">HDFC Bank</div>\n      </div>\n  \n      </div>\n  </div>\n  </mat-card-content>\n</mat-card>\n<!-- <hr> -->\n<mat-card>\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> Donations</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/transactions-1538111.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Donations</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/insurance-1538144.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Child Welfare</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/deals-1538116.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Help Visually Challenged</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/devotion-1538153.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Donate Meals</div>\n      </div>\n  \n      </div>\n  </div>\n\n\n  </mat-card-content>\n</mat-card>\n<!-- <hr> -->\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> Metro Recharge and QR Tickets</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/metro-1538141.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Delhi</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/Hyderabad_metro.png\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Hyderabad</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/Mumbai_Metro.png\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Mumbai</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/Namma.png\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Bangalore</div>\n      </div>\n  \n      </div>\n  </div>\n  </mat-card-content>\n</mat-card>\n<!-- <hr> -->\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> Purchases</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/gift-card-1538146.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Brand Vouchers</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/rewards-1538131.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Google Play</div>\n      </div>\n  \n      </div>\n\n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/movie-tickets-1538139.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Subscriptions</div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/Fastag.png\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Buy FASTag</div>\n      </div>\n      </div>\n  \n    \n  </div>\n  </mat-card-content>\n</mat-card>\n\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n         <h6 matRipple class=\"headerTitle\"> Financial Services and Taxes</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/add-money-1538119.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Credit card Bill</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/request-money-1538132.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Loan Repayment </div>\n      </div>\n  \n      </div>\n  \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/secure-payments-1538130.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">LIC / Insurance</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/municipal-services-1538113.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Municipal Tax</div>\n      </div>\n  \n      </div>\n  </div>\n  </mat-card-content>\n</mat-card>\n\n<mat-card >\n  <mat-card-content style=\"line-height: 6;margin: 20px;\">\n    <h6 matRipple class=\"headerTitle\"> More Services</h6>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" >\n       \n      <div fxFlex.gt-lg=\"66\" fxFlex.gt-md=\"66\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n  \n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/events-1538150.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Clubs and Associations</div>\n      </div>\n      </div>\n  \n      <div fxFlex.gt-lg=\"33\" fxFlex.gt-md=\"33\" fxFlex.gt-xs=\"66\" fxFlex=\"100\">\n        <div class=\"items\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div>\n          <img src=\"/assets/logo/e-wallet/svg/hotels-1538145.svg\" alt=\"logo\" height=\"40\"/></div>\n          <div class=\"label\">Apartments</div>\n      </div>\n  \n      </div>\n  \n    \n  \n     \n  </div>\n  </mat-card-content>\n</mat-card>\n<!-- </div> -->\n<!-- <div fxLayout=\"row\" fxLayoutGap=\"30px\">\n\n    <div fxFlex=\"49\">\n\n      <h5 class=\"headerTitle\" style=\"text-align: right;\"> User Auth Details  </h5>\n\n    <div *ngIf=\"showAuth\">\n          <table class=\"tbl_sm\" style=\"width: 100%;\">\n            <thead>\n              <tr>\n                <td>Site</td>\n                <td>Department </td>\n                <td>Section</td>\n                <td>Auth-Title</td>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let items of userAuths\">\n                <td>{{items.Site}}</td>\n                <td>{{items.Department}}</td>\n                <td>{{items.Section}} </td>\n                <td>{{items.AuthLevel}} </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n    </div>\n    <div fxFlex=\"2\">\n      <h5>/</h5>\n    </div>\n\n    <div fxFlex=\"49\">\n      <h5 class=\"headerTitle\">Last five logins &nbsp;  <a (click)=\"toggle1()\"><mat-icon class=\"icon_\">play_circle_outline</mat-icon></a> </h5>\n\n    <div *ngIf=\"showAuth\">\n         <table class=\"tbl_sm\" style=\"width: 100%;\">\n                <thead>\n                  <tr>\n                    <td>Date</td>\n                    <td>Day </td>\n                    <td>Time</td>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let items of lastLogin\">\n                    <td>{{items.Date | date:'dd-MM-yy'}}</td>\n                    <td>{{items.Date | date:'EEEE'}} </td>\n                    <td>{{items.Time}}</td>\n                  </tr>\n                </tbody>\n              </table>\n\n\n      </div>\n\n    </div>\n\n</div> -->\n\n<!-- <div class=\"panel panel-default\" [ngStyle]=\"{'background-image': getUrl()}\"> -->\n\n<footer class=\"page-footer font-small blue pt-4\">\n  <img src=\"/assets/logo/footerwaves.svg\">\n  <img src=\"/assets/logo/footerwave.svg\">\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewpagedetails/viewpagedetails.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewpagedetails/viewpagedetails.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title style=\"text-align: right;z-index: 0;\"><button mat-icon-button class=\"close-button\" [mat-dialog-close]=\"true\">\n    <mat-icon  class=\"close-icon\" color=\"warn\">close</mat-icon>\n  </button>\n  </h2>  \n\n<mat-dialog-content>\n    <div>\n        <div class=\"col-lg-12\">\n            <table id=\"tbl\" class=\"tbl_sm\" style=\"width: 100%;\">\n                <thead>\n                    <tr>\n                        <th>Access</th>\n                        <th>Exception</th>\n                        <th>Amendment </th>\n                        <th>Review</th>\n                        <th>Uploaded Files and Photos</th>\n                        <!-- <th>Uploaded Photos</th> -->\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let element of PageList; let i = index; let row of ImageList;\">\n                        <td >\n                            <!-- <button mat-raised-button (click)=\"AccesLogView(element.AccessLog,'Access')\" type=\"button\">View</button> -->\n                            <a *ngIf=\"!element.AccessLog\" > <mat-icon  matTooltip=\"AccessLog\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n                            <a *ngIf=\"element.AccessLog\" > <mat-icon  matTooltip=\"AccessLog\" class=\"greencolor\" (click)=\"AccesLogView(element.AccessLog,'Access')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n                        </td>\n                        <td >\n                             <a *ngIf=\"!element.Exception\" > <mat-icon  matTooltip=\"Exception\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n                            <a *ngIf=\"element.Exception\" > <mat-icon  matTooltip=\"Exception\" class=\"greencolor\" (click)=\"AccesLogView(element.Exception,'Exception')\"  matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n                        </td>\n\n                        <td>\n                            <a *ngIf=\"!element.Amedment\" > <mat-icon  matTooltip=\"Amedment\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n                            <a *ngIf=\"element.Amedment\" > <mat-icon  matTooltip=\"Amedment\" class=\"greencolor\" (click)=\"AccesLogView(element.Amedment,'Amedment')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n                       </td>\n\n                       <td>\n                        <a *ngIf=\"!element.Review\" > <mat-icon  matTooltip=\"Review\"  matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n                        <a *ngIf=\"element.Review\" > <mat-icon  matTooltip=\"Review\" class=\"greencolor\"  (click)=\"AccesLogView(element.Review,'Review')\" matTooltipPosition=\"above\">check_circle_outline</mat-icon></a>\n                       </td>\n\n\n                        <td> \n                            <a *ngIf=\"!ImageList.length\"> <mat-icon  matTooltip=\"View\" matTooltipPosition=\"above\">highlight_off</mat-icon></a>\n                            <a *ngIf=\"ImageList.length\"> <mat-icon  matTooltip=\"View\" class=\"greencolor\"  (click)=\"ImageLogView()\" matTooltipPosition=\"above\">check_circle_outline</mat-icon> </a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-component/image-component.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-component/image-component.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    :host {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin: 8px 0;\n    }\n\n    p {\n        margin: 0;\n    }\n\n    .spacer {\n        flex: 1;\n    }\n\n\n\n    .toolbar img {\n        margin: 0 16px;\n    }\n\n    .toolbar #twitter-logo {\n        height: 40px;\n        margin: 0 16px;\n    }\n\n    .toolbar #twitter-logo:hover {\n        opacity: 0.8;\n    }\n\n    .body {}\n\n    .content {\n        display: flex;\n        flex-flow: row wrap;\n        justify-content:center;\n        margin-top: 5%;\n    }\n\n    svg.material-icons {\n        height: 24px;\n        width: auto;\n    }\n\n    svg.material-icons:not(:last-child) {\n        margin-right: 8px;\n    }\n\n    .card svg.material-icons path {\n        fill: #888;\n    }\n\n    .card-container {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n\n    .card {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n\n    .card-container .card:not(:last-child) {\n        margin-right: 0;\n    }\n\n    .card.card-small {\n        height: 16px;\n        width: 168px;\n    }\n\n    .card-container .card:not(.highlight-card) {\n        cursor: pointer;\n    }\n\n    .card-container .card:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(black, 0.35);\n    }\n\n    .card-container .card:not(.highlight-card):hover .material-icons path {\n        fill: rgb(105, 103, 103);\n    }\n\n    .card.highlight-card {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n\n    .card.card.highlight-card span {\n        margin-left: 60px;\n    }\n\n    svg#rocket {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n\n    svg#rocket-smoke {\n        height: 100vh;\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n\n    a,\n    a:visited,\n    a:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n\n    a:hover {\n        color: #125699;\n    }\n\n    .terminal {\n        position: relative;\n        padding-top: 30px;\n        border-radius: 6px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n        width: 400px;\n        height: 300px;\n        margin-top: 5%;\n    }\n\n\n    /* resize images */\n    .terminal img {\n        width: 100%;\n        height: auto;\n    }\n\n    .terminal::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n\n    .terminal pre {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n\n    .circle-link {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n\n    .circle-link:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n\n    footer {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n\n    footer a {\n        display: flex;\n        align-items: center;\n    }\n\n    .github-star-badge {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n\n    .github-star-badge:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n\n    .github-star-badge .material-icons {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n\n    svg#clouds {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n\n    #overlay,\n    .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #facesContainer canvas {\n        margin: 10px;\n    }\n\n    .col-1 {\n\n\n        flex: 3;\n\n    }\n\n    .col-2 {\n        display: flex;\n        flex-direction: column;\n        flex: 5;\n    }\n\n    /* Responsive Styles */\n    @media screen and (max-width: 767px) {\n\n        .card-container>*:not(.circle-link),\n        .terminal {\n            width: 100%;\n        }\n\n        .card:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n\n        .card.highlight-card span {\n            margin-left: 72px;\n        }\n\n        svg#rocket-smoke {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n\n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke {\n            display: none;\n            visibility: hidden;\n        }\n    }\n    .uploader {\n  display: block;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 600px;\n  }\n  .uploader label {\n  float: left;\n  clear: both;\n  width: 100%;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  background: #fff;\n  border-radius: 7px;\n  border: 3px solid #eee;\n  transition: all .2s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  }\n  .uploader label:hover {\n  border-color: #454cad;\n  }\n  .uploader label.hover {\n  border: 3px solid #454cad;\n  box-shadow: inset 0 0 0 6px #eee;\n  }\n  .uploader label.hover #start i.fa {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.3;\n  }\n  .uploader #start {\n  float: left;\n  clear: both;\n  width: 100%;\n  }\n  .uploader #start.hidden {\n  display: none;\n  }\n  .uploader #start i.fa {\n  font-size: 50px;\n  margin-bottom: 1rem;\n  transition: all .2s ease-in-out;\n  }\n  .uploader #response {\n  float: left;\n  clear: both;\n  width: 100%;\n  }\n  .uploader #response.hidden {\n  display: none;\n  }\n  .uploader #response #messages {\n  margin-bottom: .5rem;\n  }\n  .uploader #file-image {\n  display: inline;\n  margin: 0 auto .5rem auto;\n  width: auto;\n  height: auto;\n  max-width: 180px;\n  }\n  .uploader #file-image.hidden {\n  display: none;\n  }\n  .uploader #notimage {\n  display: block;\n  float: left;\n  clear: both;\n  width: 100%;\n  }\n  .uploader #notimage.hidden {\n  display: none;\n  }\n  .uploader progress,\n  .uploader .progress {\n  display: inline;\n  clear: both;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 180px;\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  background-color: #eee;\n  overflow: hidden;\n  }\n  .uploader .progress[value]::-webkit-progress-bar {\n  border-radius: 4px;\n  background-color: #eee;\n  }\n  .uploader .progress[value]::-webkit-progress-value {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n  }\n  .uploader .progress[value]::-moz-progress-bar {\n  background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n  border-radius: 4px;\n  }\n  .uploader input[type=\"file\"] {\n  display: none;\n  }\n  .uploader div {\n  margin: 0 0 .5rem 0;\n  color: #5f6982;\n  }\n  .uploader .btn {\n  display: inline-block;\n  margin: .5rem .5rem 1rem .5rem;\n  clear: both;\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 14px;\n  text-decoration: none;\n  text-transform: initial;\n  border: none;\n  border-radius: .2rem;\n  outline: none;\n  padding: 0 1rem;\n  height: 36px;\n  line-height: 36px;\n  color: #fff;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n  background: #454cad;\n  border-color: #454cad;\n  cursor: pointer;\n  }\n  </style>\n<div fxLayout=\"column\"  fxLayoutGap=\"10px\" >\n    <mat-card >\n          <mat-card-header  class=\"content\" >\n              <mat-card-title><h1>Using an Image for Facial recogntion</h1></mat-card-title>\n          </mat-card-header>\n          <mat-card-content  >\n\n              <div class=\"content\" fxFlex>\n\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n\n\n                    <div class=\"terminal\">\n\n                        <img src=\"../assets/images/bigBang.jpeg\" id=\"inputImage\" />\n                        <canvas style=\"padding-top: 30px\" class=\"overlay\" id=\"overlayImage\"> </canvas>\n                    </div>\n                    <mat-progress-bar *ngIf=\"loading\" mode=\"query\"></mat-progress-bar>\n\n\n                  </div>\n                </div>\n\n          </mat-card-content>\n          <mat-card-actions>\n            <div class=\"content\">\n                <button mat-raised-button color=\"primary\" (click)=\"onDetectFaces('reco')\" [disabled]=\"loading\">Facial recognition</button>\n                <button mat-raised-button color=\"primary\" (click)=\"onDetectFaces('expression')\" [disabled]=\"loading\">Facial Expression</button>\n\n              </div>\n\n\n              <div style=\"float:left; padding:5px;\" *ngIf=\"loading\">\n                <mat-spinner [diameter]=\"30\" *ngIf=\"loading\"></mat-spinner>\n              </div>\n          </mat-card-actions>\n    </mat-card>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"show\" @ngIfAnimation>  -->\n<app-responsive-toolbar  color=\"secondary\"></app-responsive-toolbar>\n<!-- </div> -->\n\n<div class=\"container-scroller\">\n \n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\">\n\n        <mat-sidenav-content class=\"page-wrapper\">\n\n                <div >\n\n                    <!-- class=\"page-content\" -->\n                        <!-- <button (click)=\"toggle()\">Action</button> -->\n                        <router-outlet></router-outlet>\n\n                </div>\n\n        </mat-sidenav-content>\n\n    </mat-sidenav-container>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        \n<!-- ============================================================== -->\n<!-- Profile - style you can find in header.scss -->\n<!-- ============================================================== -->\n<!-- <a href=\"https://wrappixel.com/templates/materialpro-angular-dashboard/\" class=\" m-r-20 hidden-sm-up\" mat-raised-button color=\"warn\">Upgrade To Pro</a> -->\n<button  mat-icon-button class=\"m-r-5\" > <mat-icon>account_circle</mat-icon></button>\n\n<button [matMenuTriggerFor]=\"profile\" mat-icon-button class=\"m-r-5\"> <mat-icon>analytics</mat-icon></button>\n<mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\n    <button mat-menu-item>\n        <mat-icon>settings</mat-icon> Settings </button>\n    <button mat-menu-item>\n        <mat-icon>account_box</mat-icon> Profile </button>\n    <button mat-menu-item>\n        <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n    <button mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon> Sign Out </button>\n</mat-menu>\n\n<button  mat-icon-button class=\"m-r-5\"> <mat-icon>logout</mat-icon></button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- n<div class=\"user-profile\" style=\"background: url(assets/images/background/user-info.jpg) no-repeat;\">\n  n<div class=\"profile-img\"> <img src=\"assets/images/users/profile.png\" alt=\"user\"> </div>\nn <div class=\"profile-text\"><a [matMenuTriggerFor]=\"sdprofile\" class=\"\"> Markarn Doe <i class=\"ti-angle-down font-12 m-l-5\"></i></a></div>\n    <mat-menu #sdprofile=\"matMenu\" class=\"mymegamenu\">\n        <button mat-menu-item>ofile </button>\n        <button mat-menu-item>\n            <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n        <button mat-menu-item>\n            <mat-icon>exit_to_app</mat-icon> Sign Out\n            <mat-icon>settings</mat-icon> Settings </button>\n        <button mat-menu-item>\n            <mat-icon>account_box</mat-icon> Pr </button>\n    </mat-menu>\n    \n</div>\n<mat-nav-list appAccordion>\n    <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuItems.getMenuitem()\" routerLinkActive=\"selected\" group=\"{{menuitem.state}}\">\n        <a class=\"\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n            <mat-icon>{{ menuitem.icon }}</mat-icon> \n            <span>{{ menuitem.name }}</span> \n            <span fxFlex></span> \n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span> \n        </a>\n\n        \n    </mat-list-item>\n\n</mat-nav-list> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/responsivetoolbar/responsivetoolbar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/responsivetoolbar/responsivetoolbar.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-card>\n<button (click)=\"toggle()\">Collapse</button>\n</mat-card>\n<mat-card *ngIf=\"show\" @ngIfAnimation> \n  <div @easeInOut> -->\n    <div class=\"mat-exp\">\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"show\">\n        <!-- <mat-expansion-panel-header [collapsedHeight]=\"customCollapsedHeight\" [expandedHeight]=\"customExpandedHeight\">\n               </mat-expansion-panel-header> -->\n        <!-- <aside>\n              <button *ngIf=\"collapsed\" (click)=\"expand()\">Expand</button>\n              <button *ngIf=\"!collapsed\" (click)=\"collapse()\">Collapse</button>\n            </aside> -->\n        <!-- class=\"my-panel\"  -->\n        <!-- class=\"collapsible\" [@collapse]=\"collapsed\"  -->\n        <div class=\"combined\" style=\"margin-bottom: -22px;\">\n        <div color=\"secondary\" class=\"sticky \" class=\"my-panel\">\n          \n        </div>\n     \n       \n        <mat-toolbar color=\"secondary\" class=\"sticky \" class=\"my-panel\">\n          <!-- *ngIf=\"isLoggedIn$ | async as isLoggedIn\"  -->\n        \n         \n          <!-- <mat-toolbar-row [hidden]=\"currentScreenSize == XSmall? 'false':'true'\">\n                <div  fxShow=\"true\" fxHide.lt-md fxFlex=\"60\" style=\"text-align-last: end;\">\n                  <span style=\"color: white; font-size: 15px;\"> <b>ELECTRONIC BATCH RECORDS</b></span>\n                </div>\n                </mat-toolbar-row> -->\n    \n          <mat-toolbar-row class=\"header-start\">\n            <div  fxFlex=\"100\" flexLayoutAlign=\"left\">\n    \n              <div  fxFlex=\"10\" fxFlex.xs=\"20\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n                <button matRipple *ngIf=\"router.url.includes('sectionthree') || router.url.includes('pagelist')\" mat-button\n                color=\"secondary\" (click)=\"back()\">\n                <mat-icon class=\"mr\" matTooltip=\"Back\">arrow_back</mat-icon>\n              </button>\n                <button matRipple [routerLink]=\"['/polist']\" mat-button>\n                  <img class=\"mr\" src=\"/assets/logo/home.png\" height=\"25\" style=\"color: white;\">\n\n                  <!-- <mat-icon class=\"mr\"  matTooltip=\"Home\">home</mat-icon> -->\n                </button>\n              </div>\n              <div matRipple fxFlex=\"50\" fxFlex.xs=\"80\" fxShow=\"true\" fxHide.lt-md style=\"text-align-last: end;\">\n                <span style=\"color: white; font-size: 15px;\"> <b>Recharge and Bill Payments</b></span>\n              </div>\n              <div matRipple class=\"title\" fxFlex=\"50\" fxFlex.sm=\"90\" fxFlex.xs=\"80\" fxShow=\"true\" fxHide.gt-sm\n                style=\"text-align-last: center;\">\n                <span style=\"color: white; font-size: 10px;\"> <b>Recharge and Bill Payments</b></span>\n              </div>\n              <!-- <button mat-icon-button [matMenuTriggerFor]=\"menusmall\" (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\n                    <label style=\"color: white; font-size: 20px;\"> <b>E.B.R</b></label>\n                  </button> -->\n    \n    \n              <span fxflex=\"\" style=\"flex: 1 1 0%; box-sizing: border-box;\"></span>\n             <mat-menu #animals=\"matMenu\">\n                <div matRipple>\n                  <button [routerLink]=\"['/userprofile']\" mat-menu-item>\n                  </button>\n                </div>\n              </mat-menu> \n    \n              <!-- <mat-menu #vertebrates=\"matMenu\">\n          <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n        \n        \n        </mat-menu> -->\n    \n              <!-- <mat-menu #fish=\"matMenu\">\n          <button mat-menu-item>Baikal oilfish</button>\n        </mat-menu> -->\n    \n              <!-- <button [matMenuTriggerFor]=\"profile\" mat-icon-button class=\"m-r-5\"> <mat-icon>Menu</mat-icon></button>\n                    <mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\n                      <button mat-button><mat-icon class=\"mr\" [routerLink]=\"['/userprofile']\"  matTooltip=\"User Profile\">supervised_user_circle</mat-icon></button>\n                      <button mat-button [hidden]=\"HideMasterMenu\"><mat-icon class=\"mr\" [matMenuTriggerFor]=\"menu\"   matTooltip=\"Master\">library_books</mat-icon></button>\n                      <button mat-button><mat-icon class=\"mr\" matTooltip=\"Logout\" (click)=\"Logout()\">logout</mat-icon></button>\n            \n            \n                      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                        <div [hidden]=\"HideCreateDocument\">\n                        <button [routerLink]=\"['/createdoc']\" mat-menu-item >\n                          <mat-icon>dialpad</mat-icon>\n                          <span >Create New Document</span>\n                        </button>\n                      </div>\n                      <div [hidden]=\"HideisPageUpload\">\n                        <button [routerLink]=\"['/uploadpage']\" mat-menu-item >\n                          <mat-icon>voicemail</mat-icon>\n                          <span>Upload Page in  a Document</span>\n                        </button>\n                      </div>\n                      <div [hidden]=\"HideisCreatePO\">\n                        <button [routerLink]=\"['/createpo']\" mat-menu-item >\n                          <mat-icon>notifications_off</mat-icon>\n                          <span>Create New PO</span>\n                        </button>\n                      </div>\n                      </mat-menu>\n            \n            \n               \n                    </mat-menu> -->\n              <!-- <div class=\"back\" >\n                <button matRipple *ngIf=\"router.url.includes('sectionthree') || router.url.includes('pagelist')\" mat-button\n                  color=\"secondary\" (click)=\"back()\">\n                  <mat-icon class=\"mr\" matTooltip=\"Back\">arrow_back</mat-icon>\n                </button>\n              </div> -->\n    \n              <div  class=\"HeaderButtons\" fxFlex=\"40\" fxFlex.sm=\"3\" fxFlex.xs=\"3\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                <!-- <button mat-button *ngFor=\"let item of menuItems\" [fxShow]=\"item.showOnDesktop\" [fxShow.xs]=\"item.showOnMobile\"\n                          [fxShow.sm]=\"item.showOnTablet\">\n                          <mat-icon class=\"mr\" style=\"font-size:2.1vw;\">{{item.icon}}</mat-icon>\n            \n            \n                        </button> -->\n                        <script>\n                          debugger\n                           $('button[id=\"helper\"]').each(function ()\n                        {\n                          window.open('src/assets/HelpPages/page1.htm', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');\n                           \n                        })\n                        </script>\n\n    <!-- <div matRipple fxFlex=\"10\">\n      <button onload=loadValue()  [class.hidden]=\"!SAVE\" [ngClass]=\"{'hidden':!SAVE}\" matRipple (click)=\"SaveButton()\" fxShow=\"true\" fxHide.lt-md fxFlex=\"60\" mat-button>\n        <mat-icon  class=\"mr\"  matTooltip=\"Save\">save</mat-icon>\n      </button>\n    </div>\n     -->\n     <div>\n      <img  src=\"/assets/logo/bbp-view.png\" alt=\"logo\" height=\"35\"/> \n     </div>\n    <div matRipple fxFlex=\"10\">\n      <button (click)=\"helpMe()\" fxFlex=\"60\" mat-button>\n        <img class=\"mr\" src=\"/assets/logo/help.png\" height=\"30\" style=\"color: white;\">\n        <!-- <mat-icon  class=\"mr\"  matTooltip=\"Help\">help_outline</mat-icon> -->\n      </button>\n    </div>\n  \n                <!-- <div matRipple fxFlex=\"10\">\n                  <button [routerLink]=\"['/userprofile']\" fxShow=\"true\" fxHide.lt-md fxFlex=\"60\" mat-button>\n                    <mat-icon class=\"mr\"  matTooltip=\"User Profile\">supervised_user_circle\n                    </mat-icon>\n                  </button>\n                </div>\n                <div  fxFlex=\"10\">\n                  <button fxShow=\"true\" fxHide.lt-md fxFlex=\"60\" mat-button [hidden]=\"HideMasterMenu\">\n                    <mat-icon class=\"mr\" [matMenuTriggerFor]=\"vertebrates\" matTooltip=\"Master\">library_books</mat-icon>\n                  </button>\n                </div>\n                <div matRipple>\n                  <button (click)=\"Logout()\" fxShow=\"true\" fxHide.lt-md fxFlex=\"60\" mat-button>\n                    <mat-icon class=\"mr\" matTooltip=\"Logout\" >logout</mat-icon>\n                  </button>\n                </div> -->\n    \n    \n                <!-- <mat-menu #vertebrates=\"matMenu\" xPosition=\"before\">\n                  <div [hidden]=\"HideCreateDocument\">\n                    <button  [routerLink]=\"['/createdoc']\" mat-menu-item>\n                      <mat-icon>dialpad</mat-icon>\n                      <span>Create New Document</span>\n                    </button>\n                  </div>\n                  <div [hidden]=\"HideisPageUpload\">\n                    <button  [routerLink]=\"['/uploadpage']\" mat-menu-item>\n                      <mat-icon>voicemail</mat-icon>\n                      <span>Upload Page in a Document</span>\n                    </button>\n                  </div>\n                  <div [hidden]=\"HideisCreatePO\">\n                    <button  [routerLink]=\"['/createpo']\" mat-menu-item>\n                      <mat-icon>notifications_off</mat-icon>\n                      <span>Create New PO</span>\n                    </button>\n                  </div>\n                </mat-menu>\n     -->\n              </div>\n    \n              <!-- <div class=\"HeaderMenu\" fxFlex.xs=\"10\" fxShow=\"true\" fxHide.gt-sm fxLayout=\"row\" fxLayoutAlign=\"end center\">\n    \n                <button matRipple mat-icon-button [matMenuTriggerFor]=\"animals\">\n                  <mat-icon style=\"color: white; font-size: 20px;\">menu</mat-icon>\n                </button>\n    \n              </div> -->\n            </div>\n          </mat-toolbar-row>\n        </mat-toolbar>\n      </div>\n        <!-- </div>\n            </mat-card> -->\n        <!-- <button mat-button (click)=\"sidenav.toggle()\" [matMenuTriggerFor]=\"menu\">Menu</button>\n            <mat-menu #menu=\"matMenu\">\n              <button *ngIf=\"router.url.includes('sectionthree') || router.url.includes('pagelist')\" mat-button color=\"secondary\" (click)=\"back()\">\n                <mat-icon class=\"mr\" matTooltip=\"Back\">arrow_back</mat-icon>\n               </button>\n                  <button mat-button><mat-icon class=\"mr\" [routerLink]=\"['/userprofile']\"  matTooltip=\"User Profile\">supervised_user_circle</mat-icon></button>\n                  <button mat-button [hidden]=\"HideMasterMenu\"><mat-icon class=\"mr\" [matMenuTriggerFor]=\"menu\"   matTooltip=\"Master\">library_books</mat-icon></button>\n                  <button mat-button><mat-icon class=\"mr\" matTooltip=\"Logout\" (click)=\"Logout()\">logout</mat-icon></button>\n            \n            </mat-menu> -->\n    \n        <!-- <mat-sidenav-container fxFlexFill>\n              <mat-sidenav #sidenav>\n                <mat-nav-list>\n                  <button *ngIf=\"router.url.includes('sectionthree') || router.url.includes('pagelist')\" mat-button color=\"secondary\" (click)=\"back()\">\n                    <mat-icon class=\"mr\" matTooltip=\"Back\">arrow_back</mat-icon>\n                   </button>\n                      <button mat-button><mat-icon class=\"mr\" [routerLink]=\"['/userprofile']\"  matTooltip=\"User Profile\">supervised_user_circle</mat-icon></button>\n                      <button mat-button [hidden]=\"HideMasterMenu\"><mat-icon class=\"mr\" [matMenuTriggerFor]=\"menu\"   matTooltip=\"Master\">library_books</mat-icon></button>\n                      <button mat-button><mat-icon class=\"mr\" matTooltip=\"Logout\" (click)=\"Logout()\">logout</mat-icon></button>\n            \n            \n                      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n                        <div [hidden]=\"HideCreateDocument\">\n                        <button [routerLink]=\"['/createdoc']\" mat-menu-item >\n                          <mat-icon>dialpad</mat-icon>\n                          <span >Create New Document</span>\n                        </button>\n                      </div>\n                      <div [hidden]=\"HideisPageUpload\">\n                        <button [routerLink]=\"['/uploadpage']\" mat-menu-item >\n                          <mat-icon>voicemail</mat-icon>\n                          <span>Upload Page in  a Document</span>\n                        </button>\n                      </div>\n                      <div [hidden]=\"HideisCreatePO\">\n                        <button [routerLink]=\"['/createpo']\" mat-menu-item >\n                          <mat-icon>notifications_off</mat-icon>\n                          <span>Create New PO</span>\n                        </button>\n                      </div>\n                      </mat-menu>\n            \n                </mat-nav-list>\n              </mat-sidenav>\n              <mat-sidenav-content fxFlexFill></mat-sidenav-content>\n            </mat-sidenav-container> -->\n    \n    \n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n    <!-- <button mat-raised-button (click)=\"toggle()\">TOGGLE</button> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/barchart/barchart.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/barchart/barchart.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d3-chart\" #chart></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n<!-- Confirm Dialog -->\n<div *ngIf=\"data.header == 'Confirm'\">\n  <div class=\"fx_\"><mat-icon style=\"color: #10c0e0;padding-top: 4px;\">contact_support</mat-icon><h1 mat-dialog-title class=\"success\">{{data.header}}</h1></div>\n    <div mat-dialog-content>\n       <p>{{data.message}}</p>\n       </div>\n       <div mat-dialog-actions>\n\n    <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">YES</button>\n    <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\">NO</button>\n</div>\n  </div>\n\n\n<!-- Success Dialog -->\n  <div *ngIf=\"data.header == 'Success'\">\n    <div class=\"fx_\"><mat-icon style=\"color: #1faf1f;padding-top: 4px;\">check_circle</mat-icon><h1 mat-dialog-title class=\"success\">{{data.header}}</h1></div>\n    <div mat-dialog-content>{{data.message}}</div>\n\n    <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"true\">Ok</button>\n      </div>\n  </div>\n\n\n<!-- Error Dialog -->\n<div *ngIf=\"data.header == 'Error'\">\n    <div class=\"fx_\"><mat-icon style=\"color: #f70f0f;padding-top: 4px;\">error_outline</mat-icon><h1 mat-dialog-title class=\"error\">{{data.header}}</h1></div>\n     <div mat-dialog-content>\n        <p>{{data.message}}</p>\n        </div>\n     <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"true\">Ok</button>\n      </div>\n  </div>\n\n<!-- Alert Dialog -->\n  <div *ngIf=\"data.header == 'Alert'\">\n    <div class=\"fx_\"><mat-icon style=\"color: #f70f0f;\">warning</mat-icon><h1 mat-dialog-title class=\"alert\">{{data.header}}</h1></div>\n\n     <div mat-dialog-content>\n        <p>{{data.message}}</p>\n        </div>\n     <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"true\">Ok</button>\n      </div>\n  </div>\n\n  <div *ngIf=\"data.header == 'Help'\">\n    <div class=\"fx_\"><mat-icon (click)=\"OpenHelp()\" style=\"margin-right: 20px;color: #10c0e0;padding-top: 4px;\">info</mat-icon><h1 mat-dialog-title class=\"alert\">{{data.header}}</h1></div>\n\n     <div mat-dialog-content >\n        <p [innerHTML]=\"data.message | safe: 'html'\"></p>\n        </div>\n     <div mat-dialog-actions>\n        <button mat-button [mat-dialog-close]=\"true\">Ok</button>\n      </div>\n  </div>\n\n<!-- <div>\n  <div class=\"content-container\">\n    <mat-icon id=\"close-icon\" (click)=\"closeDialog()\">close</mat-icon>\n    <span class=\"content-span full-width\">{{data.message}}</span>\n  </div>\n  <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\">NO</button>\n  <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">YES</button>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/miserables/miserables.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/miserables/miserables.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg  width=\"960\" height=\"600\" class=\"d3-miserables\"></svg>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/takesnap/takesnap.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/takesnap/takesnap.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app\">\n    <div><video #video id=\"video\" width=\"400\" height=\"400\" autoplay></video></div>\n    <div><button id=\"snap\" (click)=\"capture()\" mat-raised-button color=\"primary\">take snap</button></div>\n    <canvas #canvas id=\"canvas\" width=\"640\" height=\"480\"></canvas>\n    <ul>\n        <li *ngFor=\"let c of captures\" class=\"container\">\n           \n            <img src=\"{{ c }}\" height=\"150\" />\n            <!-- <div class=\"overlay\"></div> -->\n            <div class=\"button\"> <a  id=\"dwnldLnk\" (click)=\"download(c)\"> download </a>\n        </div>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"authBox\">\n      <div class=\"authBox__col-left\"> \n          <div class=\"center\">\n            <img class=\"logo_\" src=\"../assets/logo/serumlogoPoonawala.png\" alt=\"BMR\" title=\"Serum\">\n          </div>\n          <div class=\"lbl\">\n            <label>Electronic Batch Record</label>\n          </div>\n      </div>\n      <div class=\"authBox__col-right\">\n          <div class=\"authBox__spacer\">\n              <!-- <div class=\"authoBox__heading\">Login</div> -->\n              <div class=\"\" *ngIf=\"showWebcam\"  fxLayoutGap=\"10px\">\n                <button  class=\"btn btn-submit\" routerLink=\"/login\">Back</button>\n                <!-- <mat-icon class=\"mr\" matTooltip=\"Back\" routerLink=\"/login\">arrow_back</mat-icon> -->\n                <div  class=\"terminal\" >\n                  <webcam [height]=\"500\" [width]=\"500\" id=\"webcam\" \n                      [imageQuality]=\"1\" [videoOptions]=\"videoOptions\" [allowCameraSwitch]=\"allowCameraSwitch\"\n                    (initError)=\"handleInitError($event)\"></webcam>\n                  <canvas style=\"padding-top: 30px\" class=\"overlay\" id=\"overlayVid\"> </canvas>\n                </div>\n\n                <!-- [allowCameraSwitch]=\"allowCameraSwitch\"\n                     (cameraSwitched)=\"cameraWasSwitched($event)\"\n                    [switchCamera]=\"nextWebcamObservable\"  -->\n\n                <!-- <div *ngIf=\"isExpression\"  class=\"terminal\" style=\"max-width: 400px;max-height:300px;justify-content: center;\">\n                  <h5 style=\"margin-left: 40px;\" >Facial expression frequency graph</h5>\n                  <div #chart id=\"chart\"></div>\n                </div> -->\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n\n<!-- \n<div fxLayout=\"column\"  >\n    <mat-card >\n          <mat-card-header  class=\"content\" >\n              <mat-card-title><h1>Face Login</h1></mat-card-title>\n          </mat-card-header>\n          <mat-card-content  >\n              <div class=\"content\" fxFlex>\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" >\n                    <div class=\"content\" *ngIf=\"showWebcam\"  fxLayoutGap=\"10px\">\n                        <div  class=\"terminal\" >\n                          <webcam [height]=\"500\" [width]=\"500\" id=\"webcam\" \n                             [allowCameraSwitch]=\"allowCameraSwitch\"\n                             (cameraSwitched)=\"cameraWasSwitched($event)\"\n                            [switchCamera]=\"nextWebcamObservable\"  [imageQuality]=\"1\"\n                            (initError)=\"handleInitError($event)\"></webcam>\n                          <canvas style=\"padding-top: 30px\" class=\"overlay\" id=\"overlayVid\"> </canvas>\n                        </div>\n                        <div *ngIf=\"isExpression\"  class=\"terminal\" style=\"max-width: 400px;max-height:300px;justify-content: center;\">\n                          <h5 style=\"margin-left: 40px;\" >Facial expression frequency graph</h5>\n                          <div #chart id=\"chart\"></div>\n                        </div>\n                      </div>\n                    <mat-progress-bar *ngIf=\"loading\" mode=\"query\"></mat-progress-bar>\n                  </div>\n                </div>\n          </mat-card-content>\n          <mat-card-actions>\n              <div style=\"float:left; padding:5px;\" *ngIf=\"loading\">\n                <mat-spinner [diameter]=\"30\" *ngIf=\"loading\"></mat-spinner>\n              </div>\n          </mat-card-actions>\n    </mat-card>\n</div> -->\n\n\n    ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Authentication/_helpers/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/Authentication/_helpers/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



// import { AuthenticationService } from '../jwt-authenticatio-service';
let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        debugger;
        // const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser) {debugger
        //     // logged in so return true
        //     return true;
        // }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //    this.router.navigate(['/login']);
        localStorage.clear();
        sessionStorage.clear();
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/Authentication/_helpers/error.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/Authentication/_helpers/error.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");




// import { AuthenticationService } from '../../_services';
// import { DialogService } from '../../_services/dialog.service';


// import { AuthenticationService } from '../jwt-authenticatio-service';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(spinner, router) {
        this.spinner = spinner;
        this.router = router;
    }
    //   private authenticationService: AuthenticationService,
    // private dialogService : DialogService,
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.spinner.hide();
            if (err.status === 401) {
                debugger;
                // auto logout if 401 response returned from api
                // this.dialogService.openDialog(err.error.error_description,'Error');
                // this.authenticationService.logout();
                location.reload();
                //  this.router.navigate(['/login'])
                // location.reload(true);
            }
            if (err.status === 400) {
                debugger;
                // auto logout if 401 response returned from api
                // this.dialogService.openDialog(err.error.error_description,'Error');
                // this.authenticationService.logout();
                this.router.navigate(['/login']);
            }
            if (err.status === 500) {
                debugger;
                // auto logout if 401 response returned from api
                // this.dialogService.openDialog(err.error.error_description,'Error');
                // this.authenticationService.logout();
                this.router.navigate(['/login']);
                //location.reload(true);
            }
            const error = err.error.error_description || err.statusText;
            // const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/Authentication/_helpers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/Authentication/_helpers/index.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/Authentication/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/Authentication/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/Authentication/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });




// export * from './fake-backend';



/***/ }),

/***/ "./src/app/Authentication/_helpers/jwt.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/Authentication/_helpers/jwt.interceptor.ts ***!
  \************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { AuthenticationService } from '../../_services';
// import { environment } from '@environments/environment';
// import { AuthenticationService } from '@app/_services';
let JwtInterceptor = class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        // this.authenticationService.currentUserValue;
        const currentUser = localStorage.getItem('token');
        //const isLoggedIn = currentUser && currentUser.access_token;
        //const isApiUrl = request.url.startsWith(environment.apiUrl);
        //if (currentUser && isApiUrl) {debugger
        if (currentUser) {
            debugger;
            request = request.clone({
                setHeaders: {
                    token: currentUser
                    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhYmMxQGdtYWlsLmNvbSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJ1c2VyX3JvbGVzIjpbIkNvcnBJRF8wIiwiUk9MRV9BRE1JTiIsIlJvbGVJRF82Il0sImV4cCI6MTU5NDgwMDAzMiwiYXV0aG9yaXRpZXMiOlsiUm9sZUlEXzYiLCJDb3JwSURfMCIsIlJPTEVfQURNSU4iXSwianRpIjoiMThlYmJlMTgtYzBkMi00ZDYwLWJiMTQtNGY4ZGU5YzVhNDk4IiwiY2xpZW50X2lkIjoicmVzdC1jbGllbnQifQ.Ggpkjxb3ZJ91GOLgXcHtcdOeAAeZGTNHvib-duEeEp4'
                    //Authorization: `Bearer ${currentUser}`
                    // "Content-Type": "application/json",
                    // "Accept": "application/json"
                }
            });
        }
        else {
            debugger;
            const pasdata = {
                username: 'rest-client',
                password: 'rest-client-secret'
            };
            //var checkbtoa = btoa(pasdata.username + ":" + pasdata.password)
            request = request.clone({
                setHeaders: {
                    Authorization: `basic ${btoa(pasdata.username + ":" + pasdata.password)}`
                    //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhYmMxQGdtYWlsLmNvbSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJ1c2VyX3JvbGVzIjpbIkNvcnBJRF8wIiwiUk9MRV9BRE1JTiIsIlJvbGVJRF82Il0sImV4cCI6MTU5NDgwMDAzMiwiYXV0aG9yaXRpZXMiOlsiUm9sZUlEXzYiLCJDb3JwSURfMCIsIlJPTEVfQURNSU4iXSwianRpIjoiMThlYmJlMTgtYzBkMi00ZDYwLWJiMTQtNGY4ZGU5YzVhNDk4IiwiY2xpZW50X2lkIjoicmVzdC1jbGllbnQifQ.Ggpkjxb3ZJ91GOLgXcHtcdOeAAeZGTNHvib-duEeEp4'
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/Directives/number-directive.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/Directives/number-directive.directive.ts ***!
  \**********************************************************/
/*! exports provided: NumberDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirectiveDirective", function() { return NumberDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberDirectiveDirective = class NumberDirectiveDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
};
NumberDirectiveDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
], NumberDirectiveDirective.prototype, "onInputChange", null);
NumberDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNumberDirective]'
    })
], NumberDirectiveDirective);



/***/ }),

/***/ "./src/app/Directives/restrict-input.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/Directives/restrict-input.directive.ts ***!
  \********************************************************/
/*! exports provided: RestrictInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictInputDirective", function() { return RestrictInputDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var RestrictInputDirective_1;



let RestrictInputDirective = RestrictInputDirective_1 = class RestrictInputDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.enableValidation = false;
        this.pattern = {
            test: value => false
        };
        this.patterns = {
            numberOnly: '^[a-zA-Z0-9]*$'
        };
        this._preValue = '';
        this.onChange = (_) => { };
        this.onTouch = () => { };
    }
    set setType(type) {
        if (this.patterns[type]) {
            debugger;
            this.pattern = new RegExp(this.patterns[type]);
        }
    }
    onInput(e) {
        this.writeValue(e.target.value);
    }
    onInputChange(e) {
        this.writeValue(e.target.value);
    }
    onBlur(e) {
        this.onTouch();
    }
    validateValue(value) {
        return this.pattern.test(value);
    }
    /** It writes the value in the input */
    writeValue(value) {
        console.log('value', value);
        if (this.enableValidation) {
            if (this.validateValue(value)) {
                this._preValue = value;
            }
            else {
                value = this._preValue;
            }
        }
        this.onChange(value);
        this.renderer2.setProperty(this.elementRef.nativeElement, 'value', value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
};
RestrictInputDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RestrictInputDirective.prototype, "enableValidation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('restrict-input')
], RestrictInputDirective.prototype, "setType", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
], RestrictInputDirective.prototype, "onInput", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event'])
], RestrictInputDirective.prototype, "onInputChange", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event'])
], RestrictInputDirective.prototype, "onBlur", null);
RestrictInputDirective = RestrictInputDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[restrict-input]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RestrictInputDirective_1),
                multi: true
            }
        ]
    })
], RestrictInputDirective);



/***/ }),

/***/ "./src/app/Directives/two-digit-decima-number.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Directives/two-digit-decima-number.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TwoDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function() { return TwoDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TwoDigitDecimaNumberDirective = class TwoDigitDecimaNumberDirective {
    constructor(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    onKeyDown(event) {
        debugger;
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        const next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
};
TwoDigitDecimaNumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], TwoDigitDecimaNumberDirective.prototype, "onKeyDown", null);
TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appTwoDigitDecimaNumber]'
    })
], TwoDigitDecimaNumberDirective);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _takesnap_takesnap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./takesnap/takesnap.component */ "./src/app/takesnap/takesnap.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _components_polist_polist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/polist/polist.component */ "./src/app/components/polist/polist.component.ts");
/* harmony import */ var _components_createpo_createpo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/createpo/createpo.component */ "./src/app/components/createpo/createpo.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/userprofile/userprofile.component */ "./src/app/components/userprofile/userprofile.component.ts");
/* harmony import */ var _components_pagelist_pagelist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pagelist/pagelist.component */ "./src/app/components/pagelist/pagelist.component.ts");
/* harmony import */ var _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sectionthree/sectionthree.component */ "./src/app/components/sectionthree/sectionthree.component.ts");
/* harmony import */ var _components_createdocument_createdocument_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/createdocument/createdocument.component */ "./src/app/components/createdocument/createdocument.component.ts");
/* harmony import */ var _components_uploadpage_uploadpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/uploadpage/uploadpage.component */ "./src/app/components/uploadpage/uploadpage.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_record_face_record_face_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/record-face/record-face.component */ "./src/app/components/record-face/record-face.component.ts");
/* harmony import */ var _components_mobilerecharge_mobilerecharge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mobilerecharge/mobilerecharge.component */ "./src/app/components/mobilerecharge/mobilerecharge.component.ts");
/* harmony import */ var _components_rechargeconfirmation_rechargeconfirmation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/rechargeconfirmation/rechargeconfirmation.component */ "./src/app/components/rechargeconfirmation/rechargeconfirmation.component.ts");
/* harmony import */ var _components_confirmationreceipt_confirmationreceipt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/confirmationreceipt/confirmationreceipt.component */ "./src/app/components/confirmationreceipt/confirmationreceipt.component.ts");
/* harmony import */ var _components_electricity_electricity_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/electricity/electricity.component */ "./src/app/components/electricity/electricity.component.ts");



















const routes = [
    { path: '', component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__["FullComponent"],
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'polist', component: _components_polist_polist_component__WEBPACK_IMPORTED_MODULE_6__["PolistComponent"] },
            { path: 'userprofile', component: _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__["UserprofileComponent"] },
            { path: 'pagelist/:Id', component: _components_pagelist_pagelist_component__WEBPACK_IMPORTED_MODULE_9__["PagelistComponent"] },
            { path: 'sectionthree/:Id/:Id2', component: _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_10__["SectionthreeComponent"] },
            { path: 'createpo', component: _components_createpo_createpo_component__WEBPACK_IMPORTED_MODULE_7__["CreatepoComponent"] },
            { path: 'createdoc', component: _components_createdocument_createdocument_component__WEBPACK_IMPORTED_MODULE_11__["CreatedocumentComponent"] },
            { path: 'uploadpage', component: _components_uploadpage_uploadpage_component__WEBPACK_IMPORTED_MODULE_12__["UploadpageComponent"] },
            { path: 'recordface', component: _components_record_face_record_face_component__WEBPACK_IMPORTED_MODULE_14__["RecordFaceComponent"] },
            { path: 'mobilerecharge', component: _components_mobilerecharge_mobilerecharge_component__WEBPACK_IMPORTED_MODULE_15__["MobilerechargeComponent"] },
            { path: 'rechargeconfirmation', component: _components_rechargeconfirmation_rechargeconfirmation_component__WEBPACK_IMPORTED_MODULE_16__["RechargeconfirmationComponent"] },
            { path: 'confirmationreceipt', component: _components_confirmationreceipt_confirmationreceipt_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmationreceiptComponent"] },
            { path: 'electricity', component: _components_electricity_electricity_component__WEBPACK_IMPORTED_MODULE_18__["ElectricityComponent"] }
        ]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"] },
    { path: 'snap', component: _takesnap_takesnap_component__WEBPACK_IMPORTED_MODULE_4__["TakesnapComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chart {\n    height: inherit;\n    width: inherit;\n\n    \n}\n.bar {\n    fill: steelblue;\n}\n.bar:hover {\n    fill: brown;\n}\n.axis--x path {\n    display: none;\n}\n.mat-card {\n    margin-bottom: 30px;\n    height: 250px;\n    color: #4B4F56;\n  }\n.toolbar {\n    position: sticky;\n    position: -webkit-sticky; /* For macOS/iOS Safari */\n    top: 0; /* Sets the sticky toolbar to be on top */\n    z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\n    cursor: default;\n}\n.toolbar-icon {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.toolbar-spacer {\n  flex: 1 1 auto;\n}\n.toolbar a {\n  color: #263238;\n}\n.main-container {\n  max-width: 1400px;\n  margin: 40px auto;\n  padding: 0 24px;\n  position: relative;\n}\n.mat-icon svg {\n  height: 24px;\n  width: 24px;\n}\n.toolbar {\n  height: 60px;\n\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\nsvg.material-icons {\nheight: 24px;\nwidth: auto;\n}\nsvg.material-icons:not(:last-child) {\nmargin-right: 8px;\n}\nsvg#rocket {\nwidth: 80px;\nposition: absolute;\nleft: -10px;\ntop: -24px;\n}\nsvg#rocket-smoke {\nheight: 100vh;\nposition: absolute;\ntop: 10px;\nright: 180px;\nz-index: -10;\n}\nsvg#clouds {\nposition: fixed;\nbottom: -160px;\nleft: -230px;\nz-index: -10;\nwidth: 1920px;\n}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n\n\nsvg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n}\n}\n@media screen and (max-width: 575px) {\nsvg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7OztBQUdsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQix3QkFBd0IsRUFBRSx5QkFBeUI7SUFDbkQsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxhQUFhLEVBQUUsK0RBQStEO0lBQzlFLGVBQWU7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUlBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBS0E7RUFDRSxZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1g7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUlBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBR0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLFlBQVk7QUFDWixZQUFZO0FBQ1osYUFBYTtBQUNiO0FBR0Esc0JBQXNCO0FBQ3RCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtBQUVBO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0EiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnQge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogaW5oZXJpdDtcblxuICAgIFxufVxuLmJhciB7XG4gICAgZmlsbDogc3RlZWxibHVlO1xufVxuXG4uYmFyOmhvdmVyIHtcbiAgICBmaWxsOiBicm93bjtcbn1cblxuLmF4aXMtLXggcGF0aCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgY29sb3I6ICM0QjRGNTY7XG4gIH1cbiAgLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnRvb2xiYXItaWNvbiB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cblxuXG4udG9vbGJhciBhIHtcbiAgY29sb3I6ICMyNjMyMzg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgcGFkZGluZzogMCAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtaWNvbiBzdmcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG5cblxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuaGVpZ2h0OiAyNHB4O1xud2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbm1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5cblxuc3ZnI3JvY2tldCB7XG53aWR0aDogODBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmxlZnQ6IC0xMHB4O1xudG9wOiAtMjRweDtcbn1cblxuc3ZnI3JvY2tldC1zbW9rZSB7XG5oZWlnaHQ6IDEwMHZoO1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAxMHB4O1xucmlnaHQ6IDE4MHB4O1xuei1pbmRleDogLTEwO1xufVxuXG5cbnN2ZyNjbG91ZHMge1xucG9zaXRpb246IGZpeGVkO1xuYm90dG9tOiAtMTYwcHg7XG5sZWZ0OiAtMjMwcHg7XG56LWluZGV4OiAtMTA7XG53aWR0aDogMTkyMHB4O1xufVxuXG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/fesm2015/ng-idle-core.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/fesm2015/ng-idle-keepalive.js");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal';
// import { ModalDirective } from 'ngx-bootstrap/modal';




let AppComponent = class AppComponent {
    // public modalRef: BsModalRef;
    // @ViewChild('childModal', { static: false }) childModal: ModalDirective;
    constructor(idle, keepalive, router, // private modalService: BsModalService,
    dialog, service, spinner, toastr) {
        this.idle = idle;
        this.keepalive = keepalive;
        this.router = router;
        this.dialog = dialog;
        this.service = service;
        this.spinner = spinner;
        this.toastr = toastr;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.title = 'angular-idle-timeout';
        debugger;
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(500);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(500);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_INTERRUPTSOURCES"]);
        idle.onIdleEnd.subscribe(() => {
            this.idleState = 'No longer idle.';
            console.log(this.idleState);
            this.reset();
        });
        idle.onTimeout.subscribe(() => {
            // this.childModal.hide();
            this.idleState = 'Timed out!';
            this.timedOut = true;
            console.log(this.idleState);
            // localStorage.clear();
            // sessionStorage.clear();
            // this.router.navigate(['/login']);
            // this.dialog.openDialog('You have been log-out because of Inactivity','Alert');
            // this.dialog.openDialog('Session timeout','Alert');
            this.Logout();
            location.reload();
        });
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!';
            console.log(this.idleState);
            // this.childModal.show();
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            // this.dialog.openDialog('You will time out in ' + countdown + ' seconds!','Alert');
            this.idleState = 'You will time out in ' + countdown + ' seconds!';
            console.log(this.idleState);
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        //        //this.reset();
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                // Navigation Ended Successfully.
                var url = event.url;
                url = url.toLowerCase();
                if (url == '/login') {
                    idle.stop();
                    this.idleState = 'Stopped.';
                }
                else {
                    idle.watch();
                    this.timedOut = false;
                    this.idleState = 'Started.';
                }
            }
        });
    }
    ngOnInit() {
        // this.loadModels();
    }
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
    hideChildModal() {
        // this.childModal.hide();
    }
    stay() {
        // this.childModal.hide();
        this.reset();
    }
    Logout() {
        this.passdata = {
            'UserId': localStorage.getItem("userId"),
            'Event': 'LOGOUT'
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I014",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.logout(data).subscribe((res) => {
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage = 'Success') {
                var msg = atob(data.data.content);
                // this.dialog.openDialog(msg,'Success');
                localStorage.removeItem('userId');
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
                this.dialog.openDialog('Session timeout', 'Alert');
            }
            else {
                this.dialog.openDialog(msg, 'Error');
            }
        });
    }
    loadModels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const MODEL_URL_1 = './assets/models/';
            const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights';
            // await faceapi.loadFaceLandmarkModel(MODEL_URL)
            // await faceapi.loadFaceRecognitionModel(MODEL_URL)
            // await faceapi.loadFaceExpressionModel(MODEL_URL)
            yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["loadMtcnnModel"](MODEL_URL_1),
                yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["nets"].ssdMobilenetv1.loadFromUri(MODEL_URL),
                yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["nets"].tinyFaceDetector.loadFromUri(MODEL_URL),
                yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["nets"].faceLandmark68Net.loadFromUri(MODEL_URL),
                yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["nets"].faceRecognitionNet.loadFromUri(MODEL_URL),
                yield face_api_js__WEBPACK_IMPORTED_MODULE_4__["nets"].faceExpressionNet.loadFromUri(MODEL_URL);
            // await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
            this.toastr.success('Models Loaded!');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_2__["Idle"] },
    { type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_3__["Keepalive"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__["FetchapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/barchart/barchart.component */ "./src/app/shared/barchart/barchart.component.ts");
/* harmony import */ var _shared_miserables_miserables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/miserables/miserables.component */ "./src/app/shared/miserables/miserables.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _image_component_image_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-component/image-component.component */ "./src/app/image-component/image-component.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm2015/mat-video.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _takesnap_takesnap_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./takesnap/takesnap.component */ "./src/app/takesnap/takesnap.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_responsivetoolbar_responsivetoolbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/responsivetoolbar/responsivetoolbar.component */ "./src/app/responsivetoolbar/responsivetoolbar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _components_uploadpage_uploadpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/uploadpage/uploadpage.component */ "./src/app/components/uploadpage/uploadpage.component.ts");
/* harmony import */ var _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sectionthree/sectionthree.component */ "./src/app/components/sectionthree/sectionthree.component.ts");
/* harmony import */ var _components_pagelist_pagelist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pagelist/pagelist.component */ "./src/app/components/pagelist/pagelist.component.ts");
/* harmony import */ var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/userprofile/userprofile.component */ "./src/app/components/userprofile/userprofile.component.ts");
/* harmony import */ var _components_polist_polist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/polist/polist.component */ "./src/app/components/polist/polist.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_createpo_createpo_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/createpo/createpo.component */ "./src/app/components/createpo/createpo.component.ts");
/* harmony import */ var _components_createdocument_createdocument_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/createdocument/createdocument.component */ "./src/app/components/createdocument/createdocument.component.ts");
/* harmony import */ var _shared_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _Authentication_helpers__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Authentication/_helpers */ "./src/app/Authentication/_helpers/index.ts");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _Directives_number_directive_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Directives/number-directive.directive */ "./src/app/Directives/number-directive.directive.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/fesm2015/ng-idle-keepalive.js");
/* harmony import */ var _components_record_face_record_face_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/record-face/record-face.component */ "./src/app/components/record-face/record-face.component.ts");
/* harmony import */ var _components_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/logdetails/logdetails.component */ "./src/app/components/logdetails/logdetails.component.ts");
/* harmony import */ var _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _components_sectionthree_dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/sectionthree/dynamic-content-viewer */ "./src/app/components/sectionthree/dynamic-content-viewer.ts");
/* harmony import */ var _components_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/previewhtmlpage/previewhtmlpage.component */ "./src/app/components/previewhtmlpage/previewhtmlpage.component.ts");
/* harmony import */ var _components_change_password_window_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/change-password/window.component */ "./src/app/components/change-password/window.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _Directives_two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Directives/two-digit-decima-number.directive */ "./src/app/Directives/two-digit-decima-number.directive.ts");
/* harmony import */ var _components_computegrid_computegrid_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/computegrid/computegrid.component */ "./src/app/components/computegrid/computegrid.component.ts");
/* harmony import */ var _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pipe/safe.pipe */ "./src/app/pipe/safe.pipe.ts");
/* harmony import */ var _Directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Directives/restrict-input.directive */ "./src/app/Directives/restrict-input.directive.ts");
/* harmony import */ var _components_reviewcomments_reviewcomments_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/reviewcomments/reviewcomments.component */ "./src/app/components/reviewcomments/reviewcomments.component.ts");
/* harmony import */ var _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/upload-files/upload-files.component */ "./src/app/components/upload-files/upload-files.component.ts");
/* harmony import */ var _components_viewpagedetails_viewpagedetails_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/viewpagedetails/viewpagedetails.component */ "./src/app/components/viewpagedetails/viewpagedetails.component.ts");
/* harmony import */ var _components_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/photo-upload/photo-upload.component */ "./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _hammer_config__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./hammer.config */ "./src/app/hammer.config.ts");
/* harmony import */ var _hammertime_directive__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./hammertime.directive */ "./src/app/hammertime.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm2015/angular-image-slider.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_mobilerecharge_mobilerecharge_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/mobilerecharge/mobilerecharge.component */ "./src/app/components/mobilerecharge/mobilerecharge.component.ts");
/* harmony import */ var _components_rechargeconfirmation_rechargeconfirmation_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/rechargeconfirmation/rechargeconfirmation.component */ "./src/app/components/rechargeconfirmation/rechargeconfirmation.component.ts");
/* harmony import */ var _components_confirmationreceipt_confirmationreceipt_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/confirmationreceipt/confirmationreceipt.component */ "./src/app/components/confirmationreceipt/confirmationreceipt.component.ts");
/* harmony import */ var _components_electricity_electricity_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/electricity/electricity.component */ "./src/app/components/electricity/electricity.component.ts");
/* harmony import */ var _components_assured_assured_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/assured/assured.component */ "./src/app/components/assured/assured.component.ts");








// import {ToastrService} from 'ngx-toastr'

//import * as firebase from 'firebase';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import {AngularFireDatabaseModule} from '@angular/fire/database'
// import { environment } from '../environments/environment';






// material















































// import { NgImageSliderModule } from 'ng-image-slider';








// import {mammoth} from ""
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_24__["SafeHtmlPipe"],
            _hammertime_directive__WEBPACK_IMPORTED_MODULE_58__["HammertimeDirective"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shared_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_10__["BarchartComponent"],
            _shared_miserables_miserables_component__WEBPACK_IMPORTED_MODULE_11__["MiserablesComponent"],
            _video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"],
            _image_component_image_component_component__WEBPACK_IMPORTED_MODULE_13__["ImageComponentComponent"],
            _takesnap_takesnap_component__WEBPACK_IMPORTED_MODULE_18__["TakesnapComponent"],
            _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_14__["FullComponent"],
            _shared_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_31__["MatConfirmDialogComponent"],
            _app_responsivetoolbar_responsivetoolbar_component__WEBPACK_IMPORTED_MODULE_20__["ResponsiveToolbarComponent"],
            _components_polist_polist_component__WEBPACK_IMPORTED_MODULE_27__["PolistComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
            _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_26__["UserprofileComponent"],
            _components_pagelist_pagelist_component__WEBPACK_IMPORTED_MODULE_25__["PagelistComponent"],
            _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_24__["SectionthreeComponent"],
            _components_createpo_createpo_component__WEBPACK_IMPORTED_MODULE_29__["CreatepoComponent"],
            _components_createdocument_createdocument_component__WEBPACK_IMPORTED_MODULE_30__["CreatedocumentComponent"],
            _components_uploadpage_uploadpage_component__WEBPACK_IMPORTED_MODULE_23__["UploadpageComponent"],
            _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_34__["AppHeaderComponent"],
            _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_35__["AppSidebarComponent"],
            _shared_spinner_component__WEBPACK_IMPORTED_MODULE_36__["SpinnerComponent"],
            _Directives_number_directive_directive__WEBPACK_IMPORTED_MODULE_37__["NumberDirectiveDirective"],
            _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__["ChangePasswordComponent"],
            _components_record_face_record_face_component__WEBPACK_IMPORTED_MODULE_41__["RecordFaceComponent"],
            _components_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_42__["LogdetailsComponent"],
            _components_sectionthree_dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_44__["embeddedComponents"],
            _components_sectionthree_dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_44__["ContentViewer"],
            _components_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_45__["PreviewhtmlpageComponent"],
            _components_change_password_window_component__WEBPACK_IMPORTED_MODULE_46__["WindowComponent"],
            _Directives_two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_48__["TwoDigitDecimaNumberDirective"],
            _Directives_restrict_input_directive__WEBPACK_IMPORTED_MODULE_51__["RestrictInputDirective"],
            _components_computegrid_computegrid_component__WEBPACK_IMPORTED_MODULE_49__["ComputegridComponent"],
            _components_reviewcomments_reviewcomments_component__WEBPACK_IMPORTED_MODULE_52__["ReviewcommentsComponent"],
            _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_53__["UploadFilesComponent"],
            _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_50__["SafePipe"],
            _components_viewpagedetails_viewpagedetails_component__WEBPACK_IMPORTED_MODULE_54__["ViewpagedetailsComponent"],
            _components_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_55__["PhotoUploadComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_62__["LoaderComponent"],
            _components_mobilerecharge_mobilerecharge_component__WEBPACK_IMPORTED_MODULE_63__["MobilerechargeComponent"],
            _components_rechargeconfirmation_rechargeconfirmation_component__WEBPACK_IMPORTED_MODULE_64__["RechargeconfirmationComponent"],
            _components_confirmationreceipt_confirmationreceipt_component__WEBPACK_IMPORTED_MODULE_65__["ConfirmationreceiptComponent"],
            _components_electricity_electricity_component__WEBPACK_IMPORTED_MODULE_66__["ElectricityComponent"],
            _components_assured_assured_component__WEBPACK_IMPORTED_MODULE_67__["AssuredComponent"]
        ],
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_61__["Ng2SearchPipeModule"],
            angular_image_slider__WEBPACK_IMPORTED_MODULE_60__["SliderModule"],
            // NgImageSliderModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_59__["OverlayModule"],
            // AngularFireModule.initializeApp(environment['firebase']),
            // AngularFireDatabaseModule,
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_47__["PortalModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            mat_video__WEBPACK_IMPORTED_MODULE_16__["MatVideoModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_40__["NgIdleKeepaliveModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_39__["NgxMatSelectSearchModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_32__["NgxPaginationModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_56__["AuthModule"].forRoot({
                domain: 'YOUR_DOMAIN',
                clientId: 'YOUR_CLIENT_ID'
            }),
        ],
        providers: [
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
                useClass: _hammer_config__WEBPACK_IMPORTED_MODULE_57__["HammerConfig"]
            },
            ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerService"],
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PathLocationStrategy"]
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: (setting) => function () { return setting.getSetting(); },
                deps: [_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_43__["FetchapiService"]],
                multi: true
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _Authentication_helpers__WEBPACK_IMPORTED_MODULE_33__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], useClass: _Authentication_helpers__WEBPACK_IMPORTED_MODULE_33__["ErrorInterceptor"], multi: true }, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_26__["UserprofileComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], _components_sectionthree_dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_44__["EmbeddedComponents"], _components_uploadpage_uploadpage_component__WEBPACK_IMPORTED_MODULE_23__["UploadpageComponent"],
            _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_24__["SectionthreeComponent"],
        ],
        entryComponents: [_shared_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_31__["MatConfirmDialogComponent"], _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_38__["ChangePasswordComponent"], _components_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_42__["LogdetailsComponent"], _components_sectionthree_dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_44__["embeddedComponents"], _components_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_45__["PreviewhtmlpageComponent"], _components_computegrid_computegrid_component__WEBPACK_IMPORTED_MODULE_49__["ComputegridComponent"], _components_reviewcomments_reviewcomments_component__WEBPACK_IMPORTED_MODULE_52__["ReviewcommentsComponent"], _components_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_53__["UploadFilesComponent"], _components_viewpagedetails_viewpagedetails_component__WEBPACK_IMPORTED_MODULE_54__["ViewpagedetailsComponent"], _components_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_55__["PhotoUploadComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/assured/assured.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/assured/assured.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-background{\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 20%;\r\n    z-index: 11111;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .loader-content{\r\n    width:50%;\r\n    height:50%;  \r\n    margin: auto; \r\n    margin-top: 10%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc3VyZWQvYXNzdXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtFQUNqQiIsImZpbGUiOiJhc3N1cmVkL2Fzc3VyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHotaW5kZXg6IDExMTExO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyLWNvbnRlbnR7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6NTAlOyAgXHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/assured/assured.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/assured/assured.component.ts ***!
  \*********************************************************/
/*! exports provided: AssuredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssuredComponent", function() { return AssuredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssuredComponent = class AssuredComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssuredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assured',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assured.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/assured/assured.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assured.component.css */ "./src/app/components/assured/assured.component.css")).default]
    })
], AssuredComponent);



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyErrorStateMatcher, ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../userprofile/userprofile.component */ "./src/app/components/userprofile/userprofile.component.ts");
var ChangePasswordComponent_1;




// import { minLength } from '@rxweb/reactive-form-validators';




class MyErrorStateMatcher {
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    }
}
let ChangePasswordComponent = ChangePasswordComponent_1 = class ChangePasswordComponent {
    constructor(formBuilder, dialog, spinner, service, modal, userProfile, data) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.spinner = spinner;
        this.service = service;
        this.modal = modal;
        this.userProfile = userProfile;
        this.data = data;
        this.matcher = new MyErrorStateMatcher();
        this.createForm();
    }
    ngOnInit() {
        this.validatePass();
    }
    validatePass() {
        debugger;
        var data = {
            "data": {
                "content": "",
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I017",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.ValidatePassword(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            this.Response = JSON.parse(atob(data.data.content));
            this.validationcase();
        });
    }
    validationcase() {
        debugger;
        let minimumlength = this.changePassword.get('new_pass').value;
        const validresult = this.Response.Pwdvalidate;
        const min = new RegExp(`(?=([^a-z]*[a-z])\{${validresult.minLowerChar},\})`);
        const cap = new RegExp(`(?=([^A-Z]*[A-Z])\{${validresult.minUpperChar},\})`);
        const spl = new RegExp(`(?=(\.\*[\$\@\$\!\%\*\?\&])\{${validresult.minSplChar},\})`);
        if (validresult.minLength && validresult.minLowerChar && validresult.minUpperChar && validresult.minSplChar) {
            this.changePassword.get('new_pass').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(validresult.minLength),
                    ChangePasswordComponent_1.patternValidator(min, { hasSmallCase: true }),
                    ChangePasswordComponent_1.patternValidator(cap, { hasCapitalCase: true }),
                    ChangePasswordComponent_1.patternValidator(spl, { hasSpecialCharacters: true }),
                ])]);
            this.changePassword.get('new_pass').updateValueAndValidity();
        }
    }
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    checkPasswords(group) {
        let pass = group.controls.new_pass.value;
        let confirmPass = group.controls.confirm_pass.value;
        return pass === confirmPass ? null : { notSame: true };
    }
    changePass(items) {
        debugger;
        if (!this.changePassword.valid) {
            return false;
        }
        var a = {
            'UserId': localStorage.getItem("userId"),
            'Pwd': items.new_pass,
            'OldPwd': items.old_pass
        };
        var enc = btoa(JSON.stringify(a));
        var data = {
            "data": {
                "content": enc,
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I016",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.ChangePassword(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            var R = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (JSON.parse(R).responseModel.status == true) {
                    this.modal.closeAll();
                    this.dialog.openDialog(JSON.parse(R).responseModel.msg, 'Success');
                    return true;
                }
                else {
                    this.dialog.openDialog(JSON.parse(R).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
        });
    }
    createForm() {
        debugger;
        this.changePassword = this.formBuilder.group({
            old_pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_pass: [''],
            confirm_pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, { validator: this.checkPasswords });
    }
    cancelModal() {
        this.modal.closeAll();
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__["FetchapiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_7__["UserprofileComponent"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
ChangePasswordComponent = ChangePasswordComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/components/change-password/window.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/change-password/window.component.ts ***!
  \****************************************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");



/**
 * This component template wrap the projected content
 * with a 'cdkPortal'.
 */
let WindowComponent = class WindowComponent {
    // STEP 3: Inject all the required dependencies for a PortalHost
    constructor(componentFactoryResolver, applicationRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        // STEP 2: save a reference to the window so we can close it
        this.externalWindow = null;
    }
    ngOnInit() {
        // STEP 4: create an external window
        this.externalWindow = window.open('', '', 'width=1000,height=700,left=200,top=200');
        // STEP 5: create a PortalHost with the body of the new window document    
        const host = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["DomPortalHost"](this.externalWindow.document.body, this.componentFactoryResolver, this.applicationRef, this.injector);
        // STEP 6: Attach the portal
        host.attach(this.portal);
    }
    ngOnDestroy() {
        // STEP 7: close the window when this component destroyed
        this.externalWindow.close();
    }
};
WindowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"], { static: true })
], WindowComponent.prototype, "portal", void 0);
WindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'window',
        template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
    })
], WindowComponent);



/***/ }),

/***/ "./src/app/components/computegrid/computegrid.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/computegrid/computegrid.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\r\n\tposition: absolute;\r\n\ttop: calc(50% - 12px);\r\n\tright: 0px;\r\n\tcursor: pointer;\r\n    color: #10c0e0;\r\n}\r\n\r\n.close-button{\r\n    float: right;\r\n    top:-24px;\r\n    /* right:-24px; */\r\n  }\r\n\r\n.close-icon {\r\n    transition: 1s ease-in-out;\r\n    right: 7px;\r\n  }\r\n\r\n.close-icon:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n::ng-deep .icon-outside .close-button{\r\n    float: right;\r\n    top:-52px;\r\n    right:-52px;\r\n  }\r\n\r\n::ng-deep .icon-outside .mat-dialog-container {\r\n   overflow: unset\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXB1dGVncmlkL2NvbXB1dGVncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixlQUFlO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVBO0dBQ0M7RUFDRCIsImZpbGUiOiJjb21wdXRlZ3JpZC9jb21wdXRlZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IGNhbGMoNTAlIC0gMTJweCk7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzEwYzBlMDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRvcDotMjRweDtcclxuICAgIC8qIHJpZ2h0Oi0yNHB4OyAqL1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtaWNvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5jbG9zZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6LTUycHg7XHJcbiAgICByaWdodDotNTJweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgb3ZlcmZsb3c6IHVuc2V0XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/computegrid/computegrid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/computegrid/computegrid.component.ts ***!
  \*****************************************************************/
/*! exports provided: ComputegridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputegridComponent", function() { return ComputegridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/computegrid/globalvar */ "./src/app/components/computegrid/globalvar.ts");








let ComputegridComponent = class ComputegridComponent {
    constructor(fb, spinner, dialog, service, modal, dialogRef, data) {
        this.fb = fb;
        this.spinner = spinner;
        this.dialog = dialog;
        this.service = service;
        this.modal = modal;
        this.dialogRef = dialogRef;
        this.data = data;
        debugger;
    }
    ngOnInit() {
        debugger;
        this.reactiveForm();
        this.ComputeLists = src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists;
    }
    reactiveForm() {
        this.computegridForm = this.fb.group({
            DocId: [0],
            Comptag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            TagFormula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    AddCompute() {
        debugger;
        var passdata = {
            'Comptag': this.computegridForm.value.Comptag,
            'TagFormula': this.computegridForm.value.TagFormula
        };
        src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists.push(passdata);
        this.ComputeLists = src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists;
        this.computegridForm.reset();
        //this.ComputeLists.push(passdata)
    }
    delectedItem(index) {
        debugger;
        //this.ComputeLists.splice(index, 1);
        src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists.splice(index, 1);
        this.ComputeLists = src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists;
    }
    submit() {
        debugger;
        //this.dialogRef.close(this.ComputeLists);
        this.dialogRef.close(src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists);
    }
    CloseCoputepage() {
        this.dialogRef.close(src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_7__["computeGlobal"].ComputeLists);
    }
    OpenHelp() {
        debugger;
        // this.dialog.openDialog('<div><span>Decimal formula : #d3-1_2$+#d3-1_5$+#d3-1_8$</span><br><span>DateTime formula : #dt_2$&#tm_2$-#dt_1$&#tm_1$</span><br><span>Time formula : #tm_2$-#tm_1$</span></div>','Help');
        this.dialog.openDialog('<div><div class="var"><h4>1)&nbsp;Decimal formula</h4><span>Ex: #d3-1_2$+#d3-1_5$+#d3-1_8$</span></div><br><div class="var"><h4>2)&nbsp;DateTime formula</h4><span>Ex: #dt_2$&#tm_2$-#dt_1$&#tm_1$</span></div><br><div class="var"><h4>3)&nbsp;Time formula</h4><span>Ex: #tm_2$-#tm_1$</span></div></div>', 'Help');
    }
};
ComputegridComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__["FetchapiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
ComputegridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-computegrid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./computegrid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/computegrid/computegrid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./computegrid.component.css */ "./src/app/components/computegrid/computegrid.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ComputegridComponent);



/***/ }),

/***/ "./src/app/components/computegrid/globalvar.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/computegrid/globalvar.ts ***!
  \*****************************************************/
/*! exports provided: computeGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeGlobal", function() { return computeGlobal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class computeGlobal {
}
computeGlobal.ComputeLists = [];


/***/ }),

/***/ "./src/app/components/confirmationreceipt/confirmationreceipt.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/confirmationreceipt/confirmationreceipt.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb25yZWNlaXB0L2NvbmZpcm1hdGlvbnJlY2VpcHQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/confirmationreceipt/confirmationreceipt.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmationreceipt/confirmationreceipt.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConfirmationreceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationreceiptComponent", function() { return ConfirmationreceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ConfirmationreceiptComponent = class ConfirmationreceiptComponent {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.REQUESTS = [
            { type: 'Amount', name: '3000', amount: 1000, status: 'Draft', dateModified: 1111112211111 },
            { type: 'Source Referance Number', name: '03245346534', amount: 5, status: 'Submitted', dateModified: 1111991111111 },
            { type: 'Payee Mobile Number', name: '9945434532', amount: 200, status: 'Submitted', dateModified: 1111111441111 },
            { type: 'Payment Channel', name: 'Mobile banking', amount: 0, status: 'Closed', dateModified: 1111111155111 },
            { type: 'Payment Method', name: 'Bank Account', amount: 0, status: 'Draft', dateModified: 1111111111111 },
            { type: 'Biller Status', name: 'Pending', amount: 2000, status: 'Closed', dateModified: 1122111111111 },
            { type: 'Biller ID', name: 'AIR0345325', amount: 2000, status: 'Closed', dateModified: 1122111111111 },
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.REQUESTS);
        this.columnsToDisplay = ['type', 'name'];
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        // Filter Icon
        this.matIconRegistry.addSvgIcon(`filterIcon`, this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/1159/1159641.svg`));
        // Sort Icon
        this.matIconRegistry.addSvgIcon(`sortIcon`, this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/25/25756.svg`));
        this.dataSource.data = this.REQUESTS;
    }
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
    // Dynamically set the SVG elements' class to change their color depending on the request status
    getStateColor(status) {
        switch (status) {
            case ('Submitted'):
            case ('Draft'):
                return 'green-svg';
                break;
            case ('Closed'):
                return 'gray-svg';
                break;
        }
    }
    // If a request amount is zero, display "FREE", else display the amount
    getAmount(amount) {
        return (amount === 0 ? 'FREE' : amount + " €");
    }
};
ConfirmationreceiptComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false })
], ConfirmationreceiptComponent.prototype, "sort", void 0);
ConfirmationreceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmationreceipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmationreceipt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/confirmationreceipt/confirmationreceipt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmationreceipt.component.css */ "./src/app/components/confirmationreceipt/confirmationreceipt.component.css")).default]
    })
], ConfirmationreceiptComponent);



/***/ }),

/***/ "./src/app/components/createdocument/createdocument.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/createdocument/createdocument.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGVkb2N1bWVudC9jcmVhdGVkb2N1bWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/createdocument/createdocument.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/createdocument/createdocument.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreatedocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedocumentComponent", function() { return CreatedocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");






let CreatedocumentComponent = class CreatedocumentComponent {
    constructor(fb, spinner, dialog, service) {
        this.fb = fb;
        this.spinner = spinner;
        this.dialog = dialog;
        this.service = service;
        this.errorHandling = (control, error) => {
            return this.CreateDocForm.controls[control].hasError(error);
        };
    }
    ngOnInit() {
        this.reactiveForm();
    }
    reactiveForm() {
        this.CreateDocForm = this.fb.group({
            DocId: [0],
            documentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentVersion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    CreatDocument() {
        debugger;
        if (this.CreateDocForm.valid) {
            this.spinner.show();
            var data = {
                "documentName": this.CreateDocForm.value.documentName,
                "documentVersion": this.CreateDocForm.value.documentVersion,
                "documentTitle": this.CreateDocForm.value.documentTitle,
                "userId": localStorage.getItem('userId')
            };
            this.passdata = {
                "data": {
                    "content": btoa(JSON.stringify(data)),
                    "encryptCode": "1"
                },
                "globalInfo": {
                    "latitude": "2.32.34.00",
                    "langitude": "12.232.12",
                    "deviceNo": "Hp",
                    "userName": localStorage.getItem("username"),
                    "requestTime": new Date(),
                    "interfaceCode": "I005",
                    "UserCategory": localStorage.getItem("userCategory"),
                    "userId": localStorage.getItem("userId")
                },
                "returnStateInfo": {
                    "returnMessage": "",
                    "returnCode": ""
                }
            };
            this.service.CreatDocument(this.passdata).subscribe((res) => {
                debugger;
                this.spinner.hide();
                var data = JSON.parse(res);
                if (data.returnStateInfo.returnMessage == 'Success') {
                    var msg = atob(data.data.content);
                    if (JSON.parse(msg).responseModel.status == true) {
                        this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                        // this.resetForm();
                    }
                    else {
                        this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                    }
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.returnMessage, 'Error');
                }
            });
        }
    }
    resetForm() {
        this.CreateDocForm.reset(); // Reset form data
        // this.formDirective.resetForm(); // Reset the ugly validators
        this.CreateDocForm.markAsPristine();
        this.CreateDocForm.markAsUntouched();
        //this.CreateDocForm.markAsPristine();
        // formDirective.resetForm();
        // this.CreateDocForm.setValue(
        //  {
        //     DocId:'',
        //     documentName: '',
        //     documentVersion:'',
        //     documentTitle:''
        //  }
        //  )    
    }
};
CreatedocumentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__["FetchapiService"] }
];
CreatedocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createdocument',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createdocument.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createdocument/createdocument.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createdocument.component.css */ "./src/app/components/createdocument/createdocument.component.css")).default]
    })
], CreatedocumentComponent);



/***/ }),

/***/ "./src/app/components/createpo/createpo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/createpo/createpo.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGVwby9jcmVhdGVwby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/createpo/createpo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/createpo/createpo.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepoComponent", function() { return CreatepoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _uploadpage_demo_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../uploadpage/demo-data */ "./src/app/components/uploadpage/demo-data.ts");









let CreatepoComponent = class CreatepoComponent {
    constructor(formBuilder, service, dialog, spinner) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.spinner = spinner;
        this.banks = _uploadpage_demo_data__WEBPACK_IMPORTED_MODULE_8__["BANKS"];
        // @Input() placeholderLabel = 'Search';
        /** control for the selected bank */
        this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** control for the MatSelect filter keyword */
        this.dropdown_search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of banks filtered by search keyword */
        this.document_list_data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.errorHandling = (control, error) => {
            return this.poCreation.controls[control].hasError(error);
        };
        this.createForm();
    }
    // convenience getter for easy access to form fields
    get f() { return this.poCreation.controls; }
    ngOnInit() {
        this.getDepartmentList();
        this.getDocumentList();
        // this.getSiteList();
        this.dropdown_search.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBanks();
        });
    }
    filterBanks() {
        debugger;
        if (!this.banks) {
            return;
        }
        // get the search keyword
        let search = this.dropdown_search.value;
        if (!search) {
            this.document_list_data.next(this.DocumentList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.document_list_data.next(this.DocumentList.filter(item => item.documentName.toLowerCase().indexOf(search) > -1));
    }
    createForm() {
        this.poCreation = this.formBuilder.group({
            po_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            document_name: [''],
            document_version: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            site: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            item_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            item_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            batch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    resetForm() {
        this.poCreation.reset();
        this.formDirective.resetForm();
    }
    getDepartmentList() {
        var data = {
            "data": {
                "content": btoa(JSON.stringify({ "userId": localStorage.getItem("userId") })),
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I009",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDepartmentList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.DepartmentList = JSON.parse(atob(data.data.content));
                this.DepartmentList = this.DepartmentList.Department_List;
            }
        });
    }
    ShowversionbyDocName(Name) {
        debugger;
        this.passDocName = {
            'documentName': Name.value
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passDocName)),
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I018",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDocumentList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.DocVersionList = JSON.parse(atob(data.data.content));
                this.DocVersionList = this.DocVersionList.documentVer_List;
            }
        });
    }
    getDocumentList() {
        var data = {
            "data": {
                "content": "",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I010",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDocumentList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.DocumentList = JSON.parse(atob(data.data.content));
                this.DocumentList = this.DocumentList.Document_List;
                this.document_list_data.next(this.DocumentList.slice());
            }
        });
    }
    getSiteList(deparmentt) {
        var data = {
            "data": {
                "content": btoa(JSON.stringify({ "userId": localStorage.getItem("userId"), "department": deparmentt.value })),
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I011",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getSiteList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.SiteList = JSON.parse(atob(data.data.content));
                this.SiteList = this.SiteList.Site_List;
            }
        });
    }
    createPO(formValues) {
        debugger;
        if (this.poCreation.valid) {
            this.spinner.show();
            var json = {
                'PO_No': formValues.po_number,
                'site': formValues.site,
                'department': formValues.department,
                //'headerStatus': formValues,
                'documentName': this.bankCtrl.value,
                'documentVersion': formValues.document_version,
                'itemCode': formValues.item_code,
                'itemName': formValues.item_name,
                'itemBatch': formValues.batch,
                'userId': localStorage.getItem("userId")
            };
            var enc = btoa(JSON.stringify(json));
            var data = {
                "data": {
                    "content": enc,
                    "encryptCode": "1"
                },
                "globalInfo": {
                    "latitude": "2.32.34.00",
                    "langitude": "12.232.12",
                    "deviceNo": "Hp",
                    "userName": localStorage.getItem("username"),
                    "requestTime": new Date(),
                    "interfaceCode": "I004",
                    "UserCategory": localStorage.getItem("userCategory"),
                    "userId": localStorage.getItem("userId")
                },
                "returnStateInfo": {
                    "returnMessage": "",
                    "returnCode": ""
                }
            };
            this.spinner.show();
            this.service.createPO(data).subscribe((res) => {
                debugger;
                this.spinner.hide();
                var data = JSON.parse(res);
                if (data.returnStateInfo.returnMessage == 'Success') {
                    var R = JSON.parse(atob(data.data.content));
                    if (R.responseModel.status == true) {
                        this.dialog.openDialog(R.responseModel.msg, 'Success');
                        this.resetForm();
                    }
                    else {
                        this.dialog.openDialog(R.responseModel.msg, 'Error');
                    }
                }
                else {
                    this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
                }
            });
        }
    }
};
CreatepoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__["FetchapiService"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { static: true })
], CreatepoComponent.prototype, "singleSelect", void 0);
CreatepoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createpo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createpo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/createpo/createpo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createpo.component.css */ "./src/app/components/createpo/createpo.component.css")).default]
    })
], CreatepoComponent);



/***/ }),

/***/ "./src/app/components/electricity/electricity.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/electricity/electricity.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbGVjdHJpY2l0eS9lbGVjdHJpY2l0eS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/electricity/electricity.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/electricity/electricity.component.ts ***!
  \*****************************************************************/
/*! exports provided: ElectricityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityComponent", function() { return ElectricityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElectricityComponent = class ElectricityComponent {
    constructor() { }
    ngOnInit() {
    }
};
ElectricityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-electricity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./electricity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/electricity/electricity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./electricity.component.css */ "./src/app/components/electricity/electricity.component.css")).default]
    })
], ElectricityComponent);



/***/ }),

/***/ "./src/app/components/loader/Loading.ts":
/*!**********************************************!*\
  !*** ./src/app/components/loader/Loading.ts ***!
  \**********************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class Loading {
    static show() {
        Loading.onChange.next(true);
    }
    static hide() {
        Loading.onChange.next(false);
    }
}
Loading.onChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();


/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/loader/loader.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader-background{\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 20%;\r\n    z-index: 11111;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .loader-content{\r\n    width:50%;\r\n    height:50%;  \r\n    margin: auto; \r\n    margin-top: 10%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoibG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci1iYWNrZ3JvdW5ke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgei1pbmRleDogMTExMTE7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXItY29udGVudHtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDo1MCU7ICBcclxuICAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./src/app/components/loader/Loading.ts");



let LoaderComponent = class LoaderComponent {
    constructor(changeDEtectorRef) {
        this.changeDEtectorRef = changeDEtectorRef;
        this.isLoading = false;
    }
    ngOnInit() {
        _Loading__WEBPACK_IMPORTED_MODULE_2__["Loading"].onChange.subscribe(isLoading => {
            this.isLoading = isLoading;
            this.changeDEtectorRef.detectChanges();
        });
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.css */ "./src/app/components/loader/loader.component.css")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/logdetails/logdetails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/logdetails/logdetails.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tbl_sm{\r\n    line-height: 1.6em !important;\r\n    font-size: smaller;\r\n  }\r\n\r\n  .makebold{\r\n    font-weight: 900;\r\n  }\r\n\r\n  .w-15\r\n  {\r\n    width: 15%;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 1000px;\r\n  }\r\n\r\n  .container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  tr.border_bottom td {\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  tr.border_bottomLight td {\r\n    border-bottom: 1px solid rgb(211, 208, 208);\r\n  }\r\n\r\n  .containerChatType {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n  }\r\n\r\n  .containerChatType::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n  .containerChatType img {\r\n    float: left;\r\n    max-width: 60px;\r\n    width: 100%;\r\n    margin-right: 20px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .containerChatType img.right {\r\n    float: right;\r\n    margin-left: 20px;\r\n    margin-right:0;\r\n  }\r\n\r\n  .time-right {\r\n    float: right;\r\n    color: #aaa;\r\n  }\r\n\r\n  .time-left {\r\n    float: left;\r\n    color: #999;\r\n  }\r\n\r\n  .close-button{\r\n    float: right;\r\n    top:-24px;\r\n    right:-24px;\r\n  }\r\n\r\n  .close-icon {\r\n    transition: 1s ease-in-out;\r\n  }\r\n\r\n  .close-icon:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  ::ng-deep .icon-outside .close-button{\r\n    float: right;\r\n    top:-52px;\r\n    right:-52px;\r\n  }\r\n\r\n  ::ng-deep .icon-outside .mat-dialog-container {\r\n   overflow: unset\r\n  }\r\n\r\n  thead th { position: -webkit-sticky; position: sticky; top: 0; background-color: rgb(231, 226, 226); }\r\n\r\n  .Sorticon{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2RldGFpbHMvbG9nZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLDJDQUEyQztFQUM3Qzs7RUFHQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7R0FDQztFQUNEOztFQUVBLFdBQVcsd0JBQWdCLEVBQWhCLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxvQ0FBb0MsRUFBRTs7RUFFM0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImxvZ2RldGFpbHMvbG9nZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRibF9zbXtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuXHJcbiAgLm1ha2Vib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcblxyXG4gIC53LTE1XHJcbiAge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmJvcmRlcl9ib3R0b20gdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgdHIuYm9yZGVyX2JvdHRvbUxpZ2h0IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjExLCAyMDgsIDIwOCk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuY29udGFpbmVyQ2hhdFR5cGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckNoYXRUeXBlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckNoYXRUeXBlIGltZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1heC13aWR0aDogNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyQ2hhdFR5cGUgaW1nLnJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gIH1cclxuICBcclxuICAudGltZS1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOi0yNHB4O1xyXG4gICAgcmlnaHQ6LTI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1pY29uIHtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmljb24tb3V0c2lkZSAuY2xvc2UtYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOi01MnB4O1xyXG4gICAgcmlnaHQ6LTUycHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgIG92ZXJmbG93OiB1bnNldFxyXG4gIH1cclxuXHJcbiAgdGhlYWQgdGggeyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyNiwgMjI2KTsgfVxyXG5cclxuICAuU29ydGljb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/logdetails/logdetails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/logdetails/logdetails.component.ts ***!
  \***************************************************************/
/*! exports provided: LogdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogdetailsComponent", function() { return LogdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");









const FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
let LogdetailsComponent = class LogdetailsComponent {
    constructor(data, dialogRef, service, router, route, spinner, sanitizer, datePipe, elementRef, dialog) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.service = service;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.selectedChoice = "NORMAL";
        this.sortDir = 1; //1= 'ASE' -1= DSC
        this.reviewDrop = [
            {
                'ReviewStatusName': 'Normal'
            },
            {
                'ReviewStatusName': 'ALERT'
            }
        ];
        debugger;
        this.LogType = data.Type;
        if (this.LogType == "Uploaded Files") {
            this.LogsViewData = data.data;
        }
        else {
            this.LogsViewData = data.data == "" ? "" : JSON.parse(data.data);
        }
    }
    ngOnInit() {
        debugger;
        // this.LogList.push(this.LogsViewData);
    }
    changeStatus(event) {
        this.ReviewStatus = event.value;
        this.dialogRef.close(this.ReviewStatus);
    }
    CloseLogpage() {
        if (this.LogType == "ReviewStatus") {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.close();
        }
    }
    onSortClick(event, column) {
        debugger;
        let target = event.currentTarget, classList = target.classList;
        if (column == "Date") {
            this.Date = !this.Date;
        }
        if (classList.contains('up')) {
            classList.remove('up');
            classList.add('down');
            this.sortDir = -1;
        }
        else {
            classList.add('up');
            classList.remove('down');
            this.sortDir = 1;
        }
        this.sortArr(column);
    }
    sortArr(colName) {
        // this.LogsViewData.sort((a,b)=>{
        //   a= a[colName].toLowerCase();
        //   b= b[colName].toLowerCase();
        //   return a.localeCompare(b) * this.sortDir;
        //   // const aDate = new Date(a.datetime)
        //   // const bDate = new Date(a.datetime)
        //   // return bDate.getTime() - aDate.getTime() 
        // });
        const sortedStudents = this.LogsViewData.slice().sort((a, b) => a.datetime > a.datetime ? 1 : -1);
        this.LogsViewData = sortedStudents;
    }
    ViewFile(data, index) {
        debugger;
        var Typemime = detectMimeType(data);
        //  var image1=encodeURI(data)
        //  var blob = b64toBlob(Typemime, image1);
        if (Typemime === "application/pdf") {
            let pdfWindow = window.open("");
            pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                encodeURI(data) + "'></iframe>");
            // const pdfUrl = 'data:application/pdf;base64, ' + encodeURI(data) + ' ';
            // const pdfName = this.LogsViewData[index].blobName;
            // FileSaver.saveAs(pdfUrl, pdfName);
            //  FileSaver.saveAs(blob);
        }
        if (Typemime === "image/png") {
            var image = new Image();
            image.src = "data:image/png;base64," + data;
            var w = window.open("");
            w.document.write(image.outerHTML);
            // const pdfUrl = 'data:image/png;base64, ' + data  ;
            // const pdfName = this.LogsViewData[index].blobName;
            // FileSaver.saveAs(pdfUrl, pdfName);
        }
        if (Typemime === undefined) {
            // let pdfWindow = window.open("")
            // pdfWindow.document.write(
            //   "<iframe width='100%' height='100%' src='data:undefined;base64, " +
            //   encodeURI(data) + "'></iframe>"
            // )
            const pdfUrl = 'data:undefined;base64,' + data + ' ';
            const pdfName = this.LogsViewData[index].blobName + '.docx';
            FileSaver.saveAs(pdfUrl, pdfName);
            //  FileSaver.saveAs(blob);
        }
    }
    DownloadFile(data, index) {
        debugger;
        var Typemime = detectMimeType(data);
        //  var image1=encodeURI(data)
        //  var blob = b64toBlob(Typemime, image1);
        if (Typemime === "application/pdf") {
            // let pdfWindow = window.open("")
            // pdfWindow.document.write(
            //   "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
            //   encodeURI(data) + "'></iframe>"
            // )
            const pdfUrl = 'data:application/pdf;base64, ' + encodeURI(data) + ' ';
            const pdfName = this.LogsViewData[index].blobName;
            FileSaver.saveAs(pdfUrl, pdfName);
            //  FileSaver.saveAs(blob);
        }
        if (Typemime === "image/png") {
            // var image = new Image();
            // image.src = "data:image/png;base64," + data;
            // var w = window.open("");
            // w.document.write(image.outerHTML);
            const pdfUrl = 'data:image/png;base64, ' + data;
            const pdfName = this.LogsViewData[index].blobName;
            FileSaver.saveAs(pdfUrl, pdfName);
        }
        if (Typemime === undefined) {
            // let pdfWindow = window.open("")
            // pdfWindow.document.write(
            //   "<iframe width='100%' height='100%' src='data:undefined;base64, " +
            //   encodeURI(data) + "'></iframe>"
            // )
            const pdfUrl = 'data:undefined;base64,' + data + ' ';
            const pdfName = this.LogsViewData[index].blobName + '.docx';
            FileSaver.saveAs(pdfUrl, pdfName);
            //  FileSaver.saveAs(blob);
        }
    }
    // DownloadFile(data: any) {
    //   debugger
    //   var Typemime = detectMimeType(data)
    //   if (Typemime === "application/pdf") {
    //     let pdfWindow = window.open("")
    //     pdfWindow.document.write(
    //       "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
    //       encodeURI(data) + "'></iframe>"
    //     )
    //   }
    //   else {
    //     var image = new Image();
    //     image.src = "data:application/pdf;base64," + data;
    //     var w = window.open("");
    //     w.document.write(image.outerHTML);
    //     // var blob = new Blob([data], { type: 'doc/docx' });
    //     // var url = window.URL.createObjectURL(blob);
    //     // window.open(url);
    //     // fileSaver.saveAs(blob, 'document.json');
    //     // window.location.href = "data:application/pdf;base64," + data;
    //     // var mammoth = require("mammoth");
    //     // mammoth.convertToHtml({path: "data:application/pdf;base64"})
    //     //     .then(function(result){
    //     //         var html = result.value; // The generated HTML
    //     //         var messages = result.messages; // Any messages, such as warnings during conversion
    //     //     })
    //     //     .done();
    //     //     var w = window.open("");
    //     // w.document.write(mammoth.outerHTML);
    //     //     var docx2html=require('docx2html')
    //     // docx2html('data:application/pdf;base64',{container:document.getElementById('a')}).then(function(html){
    //     // 	html.toString()
    //     // })
    //   }
    //   // if(Typemime === "application/pdf;base64"){
    //   //   var blob = new Blob([data], { type: 'doc/docx' });
    //   //   var url= window.URL.createObjectURL(blob);
    //   //   window.open(url);
    //   //   fileSaver.saveAs(blob, 'document.json');
    //   //   window.location.href = 'data:application/pdf;base64';
    //   // }
    // }
    saveAsBlob(data) {
    }
};
LogdetailsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__["FetchapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }
];
LogdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-logdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logdetails/logdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logdetails.component.css */ "./src/app/components/logdetails/logdetails.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LogdetailsComponent);

var signatures = {
    JVBERi0: "application/pdf",
    R0lGODdh: "image/gif",
    R0lGODlh: "image/gif",
    iVBORw0KGgo: "image/png"
};
function detectMimeType(b64) {
    for (var s in signatures) {
        if (b64.indexOf(s) === 0) {
            return signatures[s];
        }
    }
}
function stripEndQuotes(s) {
    var t = s.length;
    if (s.charAt(0) == '"')
        s = s.substring(1, t--);
    if (s.charAt(--t) == '"')
        s = s.substring(0, t);
    return s;
}


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo_\r\n{\r\n  height: 100%;\r\n  width: 90%;\r\n}\r\n.center\r\n{\r\n  text-align: center;\r\n}\r\n.vl {\r\n  border-left: 6px solid green;\r\n  height: 500px;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n  top: 0;\r\n}\r\n.col-md-6 div{\r\n  display: inline-block;\r\n}\r\n.lbl\r\n{\r\n  text-align: center;\r\n    font-size: small;\r\n    margin-top: 20px;\r\n    font-weight: 800;\r\n     letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n}\r\n.authBox{\r\n  background: #7449ad;\r\n  background: url(\"/assets/logo/footerwave.svg\");\r\n  background: url(\"/assets/logo/cyan-curve-top-bg.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n  background-position-x: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixNQUFNO0FBQ1I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGtCQUFrQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtLQUNmLG1CQUFtQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMscURBQXFEO0VBQ3JELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb19cclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5jZW50ZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZsIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTNweDtcclxuICB0b3A6IDA7XHJcbn1cclxuLmNvbC1tZC02IGRpdntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmxibFxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYXV0aEJveHtcclxuICBiYWNrZ3JvdW5kOiAjNzQ0OWFkO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvbG9nby9mb290ZXJ3YXZlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2xvZ28vY3lhbi1jdXJ2ZS10b3AtYmcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var src_app_services_getset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/getset */ "./src/app/services/getset.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loader_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loader/Loading */ "./src/app/components/loader/Loading.ts");












let LoginComponent = class LoginComponent {
    constructor(formBuilder, spinner, route, _Activatedroute, router, service, dialog, location) {
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.route = route;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        this.location = location;
        this.BacktoPrevLogin = false;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = '';
        this.error = '';
        this.faceDescriptor = [];
        this.hide = true;
        this.EnableFacelogin = true;
        this.BacktoPrevLogin = this.service.SwitchLogin.value.ISSwitchlogin;
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }
    get passwordInput() { return this.loginForm.get('password'); }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.id = this._Activatedroute.snapshot.paramMap.get("id");
        if (this.id) {
            $("#switchs").show();
        }
        ;
        this.loginGorm();
        //this.getFaceData();
        this.loadModels();
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    //   ngOnDestroy() {
    //     this.service.SwitchLogin.unsubscribe(); // <-------
    //  }
    loginGorm() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    loadModels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            const MODEL_URL = './assets/models/';
            const MODEL_URL_1 = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';
            //  const net1 = new faceapi.TinyFaceDetector()
            //  await net1.load('./assets/models/')
            const net = new face_api_js__WEBPACK_IMPORTED_MODULE_8__["SsdMobilenetv1"]();
            yield net.load(MODEL_URL_1);
            //  const net2 = new faceapi.FaceLandmark68Net()
            //  await net2.load('./assets/models/')
            //  const net3 = new faceapi.FaceRecognitionNet()
            //  await net3.load('./assets/models/')
            //  const net4 = new faceapi.FaceExpressionNet()
            //  await net4.load('./assets/models/')
            yield face_api_js__WEBPACK_IMPORTED_MODULE_8__["loadFaceRecognitionModel"](MODEL_URL_1);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_8__["loadFaceExpressionModel"](MODEL_URL_1);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_8__["loadTinyFaceDetectorModel"](MODEL_URL_1);
            // await faceapi.loadTinyYolov2Model(MODEL_URL)
            yield face_api_js__WEBPACK_IMPORTED_MODULE_8__["loadFaceLandmarkModel"](MODEL_URL_1);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_8__["loadMtcnnModel"](MODEL_URL_1),
                //  await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL),
                //  await faceapi.nets.tinyFaceDetector.loadFromWeightMap(weightMap),
                //  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                //  await  faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                //  await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
                // await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
                //this.toastr.success('Models Loaded!');
                this.getFaceData();
            this.EnableFacelogin = false;
        });
    }
    Facelogin() {
        debugger;
        // this.getFaceData();
        this.router.navigate(['/video']);
    }
    getFaceData() {
        debugger;
        var data = {
            "data": {
                "content": "",
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": "",
                "requestTime": new Date(),
                "interfaceCode": "I024",
                "UserCategory": "",
                "userId": ""
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].show();
        this.service.getFaceData(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var faceArray = JSON.parse(atob(data.data.content));
            faceArray = faceArray.records;
            //  alert(data.returnStateInfo.returnMessage)
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (faceArray.length > 0) {
                    for (var i = 0; i < faceArray.length; i++) {
                        var float32Array = new Float32Array(JSON.parse(faceArray[i].FaceArray));
                        var arr = [];
                        arr[0] = float32Array;
                        var labeledFaceDescriptor = new face_api_js__WEBPACK_IMPORTED_MODULE_8__["LabeledFaceDescriptors"](faceArray[i].UserId.trim(), arr);
                        this.faceDescriptor.push(labeledFaceDescriptor);
                    }
                }
            }
            else {
                this.dialog.openDialog('Not getting face detecrors list', 'Error');
            }
            _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].hide();
        });
        src_app_services_getset__WEBPACK_IMPORTED_MODULE_9__["getset"].faceData = this.faceDescriptor;
    }
    Cancelswitch() {
        this.location.back();
    }
    // Flag = 0
    onSubmitLogin() {
        debugger;
        // this.Flag = 1
        if (this.loginForm.invalid) {
            debugger;
            return;
            // this.Flag = 0
        }
        else {
            this.service.SwitchLogin.subscribe();
            this.service.SwitchLogin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe((res) => {
                debugger;
                this.switch = res.ISSwitchlogin;
                if (res.ISSwitchlogin == true) {
                    debugger;
                    // alert('Switchlogin')
                    this.CallApiTocheckAuthority(res.PO_No, res.Page);
                }
                else {
                    this.onSubmit();
                }
            });
        }
    }
    CallApiTocheckAuthority(PO_No, Page) {
        this.passdetails = {
            'PO_No': PO_No,
            'page': Page,
            'userId': this.f.username.value
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I031",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.SwitchLoginUserAuthority(data).subscribe((res) => {
            debugger;
            // Loading.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                if (JSON.parse(atob(data.data.content)) == true) {
                    this.onSubmit();
                }
                else {
                    this.dialog.openDialog('No authority site,department,section', 'Error');
                }
                //this.PageDetails = JSON.parse(atob(data.data.content)).page;
            }
        });
    }
    onSubmit() {
        debugger;
        //  if (this.loginForm.invalid) {
        //       return;
        //   }
        // this.service.SwitchLogin.subscribe((res: any) => {debugger
        //   if(res.ISSwitchlogin == true){debugger
        //     //CallApiTocheckAuthority()
        //     // this.AccessLogEntry(res.PO_No,res.Page,res.PrevUserId);
        //     // this.router.navigate(['/sectionthree',res.PO_No,res.Page]);
        //   }
        //   else
        //   {
        //     this.router.navigate(['/userprofile']);
        //   }
        // })
        // localStorage.removeItem('currentUser');
        // localStorage.removeItem('CorpId');
        // localStorage.removeItem('RoleId');
        // localStorage.removeItem('UserId');
        this.loading = true;
        _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].show();
        this.service.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            debugger;
            // Loading.hide();
            if (JSON.parse(atob(JSON.parse(data.body).data.content)).responseModel.status == true) {
                localStorage.setItem('userId', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.userId);
                // localStorage.setItem('token',data.headers.get('token'));
                localStorage.setItem('token', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.token);
                localStorage.setItem('userCategory', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.userCategory);
                localStorage.setItem('username', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.username);
                localStorage.setItem('isCreateDocument', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isCreateDocument);
                localStorage.setItem('isPageUpload', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isPageUpload);
                localStorage.setItem('isCreatePO', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isCreatePO);
                localStorage.setItem('isChangeStatusPO', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isChangeStatusPO);
                // this.loggedIn.next(true);
                this.service.SwitchLogin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe((res) => {
                    debugger;
                    if (res.ISSwitchlogin == true) {
                        debugger;
                        this.AccessLogEntry(res.PO_No, res.Page, res.PrevUserId);
                        this.router.navigate(['/sectionthree', res.PO_No, res.Page]);
                    }
                    else {
                        this.router.navigate(['/userprofile']);
                    }
                });
                // this.router.navigate(['/userprofile']);
            }
            else {
                this.error = JSON.parse(atob(JSON.parse(data.body).data.content)).responseModel.msg;
                localStorage.removeItem('userId');
                localStorage.removeItem('token');
                localStorage.removeItem('userCategory');
                localStorage.removeItem('username');
                localStorage.clear();
            }
            _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].hide();
        }, error => {
            debugger;
            //this.error = error;
            this.loading = false;
        });
    }
    ForgotPassword() {
        this.router.navigate(['/Forgotpassword']);
    }
    PreviousLogin() {
        this.service.SwitchLogin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe((res) => {
            debugger;
            if (res.ISSwitchlogin == true) {
                debugger;
                //this.AccessLogEntry(res.PO_No,res.Page,res.PrevUserId);
                this.router.navigate(['/sectionthree', res.PO_No, res.Page]);
            }
            else {
                this.router.navigate(['/userprofile']);
            }
        });
    }
    AccessLogEntry(PO_No, page, PrevUserId) {
        debugger;
        // var arr = {
        //   "userid": "UPD-A-M",
        //   "datetime": "2021-04-29 21:35:04.373",
        //   "chat": "Page-load-API-CALL"
        // }
        var log = {
            "userid": localStorage.getItem("userId"),
            "datetime": new Date(),
            "chat": "Switch Login - " + PrevUserId + '  --->  ' + localStorage.getItem("userId")
        };
        this.Logdata = {
            'PO_No': PO_No,
            'page': page,
            'Log': JSON.stringify(log)
        };
        // 'Log': '{"userid": localStorage.getItem("userId") ,"datetime": "2021-04-29 21:35:04.373","chat": "Page-load-API-CALL"}'
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.Logdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I022",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].show();
        this.service.updateLogStatus(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var msg = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (JSON.parse(msg).responseModel.status == true) {
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog('Access Log' + data.returnStateInfo.returnMessage, 'Error');
            }
            _loader_Loading__WEBPACK_IMPORTED_MODULE_11__["Loading"].hide();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__["FetchapiService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/mobilerecharge/mobilerecharge.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/mobilerecharge/mobilerecharge.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGVyZWNoYXJnZS9tb2JpbGVyZWNoYXJnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/mobilerecharge/mobilerecharge.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/mobilerecharge/mobilerecharge.component.ts ***!
  \***********************************************************************/
/*! exports provided: MobilerechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilerechargeComponent", function() { return MobilerechargeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MobilerechargeComponent = class MobilerechargeComponent {
    constructor() { }
    ngOnInit() {
    }
};
MobilerechargeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobilerecharge',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobilerecharge.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mobilerecharge/mobilerecharge.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobilerecharge.component.css */ "./src/app/components/mobilerecharge/mobilerecharge.component.css")).default]
    })
], MobilerechargeComponent);



/***/ }),

/***/ "./src/app/components/pagelist/pagelist.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pagelist/pagelist.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nth.mat-header-cell, td.mat-cell {\r\n    text-align: center;\r\n    border: 1px solid #CCC;\r\n    padding: 20 !important;\r\n}\r\n#matTool{\r\n  padding: 20px;\r\n}\r\ntd, th{\r\n  min-width: auto;\r\n  padding: 20 !important;\r\n  border-spacing: 10px;\r\n  \r\n}\r\n::-webkit-scrollbar {\r\n  width: 1em;\r\n  height: 1em\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n.sectiontwo{\r\n  overflow: auto;\r\n}\r\n.even {\r\n    background-color: rgb(212, 212, 245);\r\n  }\r\n#tbl_1 , #tbl_2, #tbl_3\r\n  {\r\n    font-size: small;\r\n  }\r\n.square {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: #555;\r\n  }\r\ntr.mat-header-row {\r\n    font-weight: bold;\r\n  }\r\n.greencolor{\r\n    color: rgb(58, 236, 58);\r\n  }\r\n.badge-light{\r\n    border:  1px solid #555;\r\n  }\r\n/* tr.mat-row { height: 20px; }\r\n\r\n\r\n\r\n  .fixTableHead {\r\n    overflow-y: auto;\r\n    height: 410px;\r\n  }\r\n  .fixTableHead thead th {\r\n    position: sticky;\r\n    top: 0;\r\n  }\r\n  table {\r\n    border-collapse: collapse;        \r\n    width: 100%;\r\n  } */\r\n/* th,\r\n  td {\r\n    padding: 8px 15px;\r\n    border: 2px solid #529432;\r\n  }\r\n  th {\r\n    background: #412D6C;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VsaXN0L3BhZ2VsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Y7QUFDRjtBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7RUFDdEM7QUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0FBR0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztLQWVHO0FBR0g7Ozs7Ozs7S0FPRyIsImZpbGUiOiJwYWdlbGlzdC9wYWdlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcclxuICAgIHBhZGRpbmc6IDIwICFpbXBvcnRhbnQ7XHJcbn1cclxuI21hdFRvb2x7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG50ZCwgdGh7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwcHg7XHJcbiAgXHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbVxyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbn1cclxuIFxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODsgXHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxufVxyXG5cclxuLnNlY3Rpb250d297XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmV2ZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyNDUpO1xyXG4gIH1cclxuXHJcbiAgI3RibF8xICwgI3RibF8yLCAjdGJsXzNcclxuICB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLnNxdWFyZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgfVxyXG5cclxuXHJcbiAgdHIubWF0LWhlYWRlci1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW5jb2xvcntcclxuICAgIGNvbG9yOiByZ2IoNTgsIDIzNiwgNTgpO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlLWxpZ2h0e1xyXG4gICAgYm9yZGVyOiAgMXB4IHNvbGlkICM1NTU7XHJcbiAgfVxyXG4gIC8qIHRyLm1hdC1yb3cgeyBoZWlnaHQ6IDIwcHg7IH1cclxuXHJcblxyXG5cclxuICAuZml4VGFibGVIZWFkIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQxMHB4O1xyXG4gIH1cclxuICAuZml4VGFibGVIZWFkIHRoZWFkIHRoIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7ICAgICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0gKi9cclxuXHJcbiAgXHJcbiAgLyogdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTI5NDMyO1xyXG4gIH1cclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDEyRDZDO1xyXG4gIH0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/components/pagelist/pagelist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pagelist/pagelist.component.ts ***!
  \***********************************************************/
/*! exports provided: PagelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagelistComponent", function() { return PagelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logdetails/logdetails.component */ "./src/app/components/logdetails/logdetails.component.ts");









let PagelistComponent = class PagelistComponent {
    // data: PeriodicElement[] = [
    //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    // ];
    constructor(service, router, route, spinner, modal, datePipe, dialog) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.modal = modal;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.show = false;
        // 'name',
        this.displayedColumns = ['PageNo', 'Title', 'Section', 'LineStatus', 'Process', 'position', 'name', 'weight', 'symbol', 'ReviewStatus'];
        this.p = 1;
        this.size = 10;
        this.pageIndex = 0;
    }
    ngOnInit() {
        debugger;
        this.show = false;
        this.service.SharingData.next(this.show);
        var param = this.route.snapshot.params.Id;
        // if(parseInt(param))
        if (param) {
            debugger;
            this.GetPageDetails(param);
            this.GetPageList(param);
        }
    }
    paginate(event) {
        this.pageIndex = event;
        this.dataSource = this.PageList.slice(event * this.size - this.size, event * this.size);
    }
    GetPageDetails(PoNo) {
        debugger;
        this.spinner.show();
        this.PoNo = {
            'PO_No': PoNo
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.PoNo)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I019",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getPageDetails(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.PageDetails = JSON.parse(atob(data.data.content)).page;
            }
        });
    }
    GetPageList(PoNo) {
        debugger;
        this.spinner.show();
        this.PoNo = {
            'PO_No': PoNo,
            'userId': localStorage.getItem("userId")
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.PoNo)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I020",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.GetPageList(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.PageList = JSON.parse(atob(data.data.content));
                this.PageList = this.PageList.grid;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.PageList);
                this.PageList.forEach((element, i) => {
                    element.Index = i + 1;
                });
                this.dataSource = this.PageList.slice(0, 10);
                this.dataSource.sort = this.sort;
            }
        });
    }
    GotoSectionThree(data) {
        debugger;
        // if(data.LineStatus == 'OPEN')
        // {
        //   // this.router.navigate(['/pagelist',data.PO_No]);
        //   this.router.navigate(['/sectionthree',this.PageDetails.PO_No,data.Page]);
        // }
        // else
        // {
        // }
        this.router.navigate(['/sectionthree', this.PageDetails.PO_No, data.Page]);
    }
    AccesLogView(data, Type) {
        const dialogRef = this.modal.open(_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_8__["LogdetailsComponent"], {
            // disableClose: true,
            // height: '77%',
            // width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
};
PagelistComponent.ctorParameters = () => [
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__["FetchapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], PagelistComponent.prototype, "sort", void 0);
PagelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pagelist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagelist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagelist/pagelist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagelist.component.css */ "./src/app/components/pagelist/pagelist.component.css")).default]
    })
], PagelistComponent);



/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/photo-upload/photo-upload.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-button{\r\n  float: right;\r\n  top:-34px;\r\n  right:-14px;\r\n}\r\n/* .close.mat-button {\r\n  position: inherit;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 2px;\r\n  line-height: 3px;\r\n  min-width: auto;\r\n} */\r\n.close-icon {\r\n  transition: 1s ease-in-out;\r\n}\r\n.close-icon:hover {\r\n  transform: rotate(180deg);\r\n}\r\n.actionBtn {\r\n  font-size: 4em;\r\n  cursor: pointer;\r\n}\r\n.snapshot {\r\n  text-align: center;\r\n  \r\n    max-width: 800px;\r\n    max-height: 800px;\r\n  \r\n}\r\n/* img: { */\r\nul.links {\r\n  padding-bottom: 20px;\r\n}\r\nbody {\r\n    background-color: #F0F0F0;\r\n  }\r\n#app {\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    /* margin-top: 60px; */\r\n  }\r\n#video {\r\n    background-color: #000000;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n     transform: scaleX(-1);\r\n  }\r\n#canvas {\r\n    display: none;\r\n  }\r\nli {\r\n    display: inline;\r\n    padding: 5px;\r\n  }\r\n.terminal {\r\n    position: relative;\r\n    padding-top: 30px;\r\n    border-radius: 6px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: #fafafa;\r\n    width: 400px;\r\n    height: 300px;\r\n    margin-top: 5%;\r\n  }\r\n.terminal img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n.terminal::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n.terminal pre {\r\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n@media screen and (max-width: 767px) {\r\n  \r\n    .card-container>*:not(.circle-link),\r\n    .terminal {\r\n        width: 100%;\r\n    }\r\n    .terminal{\r\n        max-width: 250px;\r\n    }\r\n  \r\n  \r\n  }\r\n/* /////// */\r\n/* .container {\r\n    /* position: relative;\r\n    margin-top: 50px;\r\n    width: 500px;\r\n    height: 300px;\r\n  } */\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0);\r\n    transition: background 0.5s ease;\r\n  }\r\n.container:hover .overlay {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .3);\r\n  }\r\n/* img {\r\n    position: absolute;\r\n    width: 500px;\r\n    height: 300px;\r\n    left: 0;\r\n  } */\r\n.title {\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 0;\r\n    top: 120px;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    z-index: 1;\r\n    transition: top .5s ease;\r\n  }\r\n.container:hover .title {\r\n    top: 90px;\r\n  }\r\n.button {\r\n    /* position: absolute;\r\n    width: 500px;\r\n    left:0;\r\n    top: 180px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .35s ease; */\r\n    position: relative;\r\n    top: -80px;\r\n     opacity: 0;\r\n  \r\n  }\r\n.button a {\r\n    width: 200px;\r\n    padding: 12px 48px;\r\n    text-align: center;\r\n    color: white;\r\n    border: solid 2px white;\r\n    z-index: 1;\r\n  }\r\n.container:hover .button {\r\n    opacity: 1;\r\n  }\r\nvideo {\r\n    transform: scaleX(-1);\r\n    \r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLXVwbG9hZC9waG90by11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBQ0E7Ozs7Ozs7R0FPRztBQUNIO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7O0lBRWhCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0EsV0FBVztBQUNYO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBR0E7SUFDSSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsb0JBQWlCO09BQWpCLGlCQUFpQjtLQUNoQixxQkFBcUI7RUFDeEI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBR0E7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0Usd0VBQXdFO0lBQ3hFLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztFQUNYO0FBR0E7O0lBRUU7O1FBRUksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7OztFQUdGO0FBS0EsWUFBWTtBQUdaOzs7OztLQUtHO0FBRUg7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7QUFFQTs7Ozs7S0FLRztBQUVIO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0UsU0FBUztFQUNYO0FBRUE7SUFDRTs7Ozs7O29DQU1nQztJQUNoQyxrQkFBa0I7SUFDbEIsVUFBVTtLQUNULFVBQVU7O0VBRWI7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFJQTtJQUVFLHFCQUFxQjs7RUFFdkIiLCJmaWxlIjoicGhvdG8tdXBsb2FkL3Bob3RvLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWJ1dHRvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdG9wOi0zNHB4O1xyXG4gIHJpZ2h0Oi0xNHB4O1xyXG59XHJcbi8qIC5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59ICovXHJcbi5jbG9zZS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLmFjdGlvbkJ0biB7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc25hcHNob3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcclxuICBcclxufVxyXG4vKiBpbWc6IHsgKi9cclxudWwubGlua3Mge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xyXG4gIH1cclxuICAjYXBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNjBweDsgKi9cclxuICB9XHJcbiAgI3ZpZGVvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgfVxyXG4gICNjYW52YXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnRlcm1pbmFsIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBcclxuICAgIC5jYXJkLWNvbnRhaW5lcj4qOm5vdCguY2lyY2xlLWxpbmspLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZXJtaW5hbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiAvLy8vLy8vICovXHJcbiAgXHJcbiAgXHJcbiAgLyogLmNvbnRhaW5lciB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9ICovXHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9ICovXHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIC41cyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyOmhvdmVyIC50aXRsZSB7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZTsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTgwcHg7XHJcbiAgICAgb3BhY2l0eTogMDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBhIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEycHggNDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcjpob3ZlciAuYnV0dG9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgdmlkZW8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/photo-upload/photo-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/photo-upload/photo-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: PhotoUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoUploadComponent", function() { return PhotoUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












let PhotoUploadComponent = class PhotoUploadComponent {
    constructor(dialog, router, service, spinner, data, breakpointObserver, fb, datePipe, dialogRef, modal) {
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.spinner = spinner;
        this.data = data;
        this.fb = fb;
        this.datePipe = datePipe;
        this.dialogRef = dialogRef;
        this.modal = modal;
        this.show = false;
        this.buttonName = 'Show';
        this.cameratype = 'user';
        this.GetFiles = [];
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.captures = [];
    }
    ngOnInit() { this.activeForm(); }
    activeForm() {
        this.UploadForm = this.fb.group({
            rename: ['']
        });
    }
    ngAfterViewInit() {
        debugger;
        var constraints = {
            audio: false,
            video: {
                width: { ideal: 1280 },
                height: { ideal: 1024 },
                facingMode: { exact: 'environment' }
                // facingMode: {exact : 'user'}
            }
        };
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            })
                .catch(err => {
                console.log("unhanled error: " + err);
                alert("unhanled error: " + err);
            });
        }
    }
    capture() {
        debugger;
        this.uploadfilename = this.datePipe.transform(new Date(), 'dd-MMM-yyyy h:mm:ss');
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        //this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        this.imageSrc = this.canvas.nativeElement.toDataURL("image/png"); // get base64
        this.GetFiles.push({
            "ShowImage": this.imageSrc,
            "Base64File": this.imageSrc.split(',')[1],
            "FileName": this.uploadfilename + " ",
            "FileType": 'F'
        });
    }
    // download(base64)
    // {debugger
    //     var a = document.createElement("a"); //Create <a>
    //     a.href = base64 //Image Base64 Goes here
    //     a.download = "Image.png"; //File name Here
    //     a.click(); //Downloaded file
    // }
    delectedItem(index) {
        debugger;
        this.GetFiles.splice(index, 1);
    }
    uploadFilesClick() {
        debugger;
        this.spinner.show();
        this.filename = this.UploadForm.value.rename;
        for (let i = 0; i < this.GetFiles.length; i++) {
            this.GetFiles[i].FileName += this.filename;
        }
        //this.progressInfos[idx] = { value: 0, fileName: file.name };
        var passdetails = {
            'PO_No': localStorage.getItem("PO_No"),
            'page': localStorage.getItem("Page"),
            'userId': localStorage.getItem("userId"),
            "GetFiles": this.GetFiles
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I038",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getFileUpload(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.response = JSON.parse(atob(data.data.content));
                if (this.response.responseModel.status == true) {
                    this.dialog.openDialog(this.response.responseModel.msg, 'Success');
                    this.GetFiles = null;
                    this.dialogRef.close();
                }
                else {
                    this.dialog.openDialog(this.response.responseModel.msg, 'Error');
                }
            }
        });
        // this.onStop() ;
        // this.video.nativeElement.pause();
        // (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
        // this.video.nativeElement.srcObject = null;
    }
};
PhotoUploadComponent.ctorParameters = () => [
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__["FetchapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", { static: false })
], PhotoUploadComponent.prototype, "video", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvas", { static: false })
], PhotoUploadComponent.prototype, "canvas", void 0);
PhotoUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/photo-upload/photo-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-upload.component.css */ "./src/app/components/photo-upload/photo-upload.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]))
], PhotoUploadComponent);



/***/ }),

/***/ "./src/app/components/polist/polist.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/polist/polist.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n#matTool{\r\ncolor: white;\r\nbackground-color: #034EA2;\r\nfont-weight: bold;\r\n\r\n}\r\ntd, th{\r\n  min-width: auto;\r\n}\r\nth.mat-header-cell, td.mat-cell {\r\n  text-align: center;\r\n  border: 1px solid #CCC;\r\n  padding: 15 !important;\r\n}\r\n::-webkit-scrollbar {\r\n  width: 1em;\r\n  height: 1em\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}\r\n#mat-header-cell\r\n{\r\n    color: white;\r\n    background-color: #034EA2\r\n}\r\n.even {\r\n                    background-color: rgb(212, 212, 245);\r\n                  }\r\nmat-sort-header-stem{\r\n                        color: white !important;\r\n                    }\r\n.table td {\r\n                      position: relative;\r\n                  }\r\n.table td:before {\r\n                      content: '&nbsp;';\r\n                      visibility: hidden;\r\n                  }\r\n.table td span{\r\n                       position: absolute;\r\n                    left: 0;\r\n                    right: 0;\r\n                    white-space: nowrap;\r\n                    overflow: hidden;\r\n                    text-overflow: ellipsis;\r\n                }\r\ntd,th{\r\n                    overflow: hidden;\r\n                    width: 100px;\r\n                    text-overflow: ellipsis;\r\n                  }\r\n.ellipsis {\r\n                    position: relative;\r\n                }\r\n.ellipsis:before {\r\n                    content: '&nbsp;';\r\n                    visibility: hidden;\r\n                }\r\n.ellipsis span {\r\n                    position: absolute;\r\n                    left: 0;\r\n                    right: 0;\r\n                    white-space: nowrap;\r\n                    overflow: hidden;\r\n                    text-overflow: ellipsis;\r\n                }\r\n.mat-cell {\r\n                    font-size: 14px;\r\n                    min-height: 48px;\r\n                    text-align: center;\r\n                    border-right: 1px solid black;\r\n                }\r\n.mat-header-cell{\r\n                    font-size: 14px;\r\n                    min-height: 48px;\r\n                    text-align: center;\r\n                    border-right: 1px solid black;\r\n                }\r\n::ng-deep .mat-sort-header-container {\r\n                    display:flex;\r\n                    justify-content:center;\r\n                  }\r\n.mat-row {\r\n                    height: auto;\r\n                  }\r\n.mat-cell {\r\n                    padding: 8px 8px 8px 8px;\r\n                  }\r\n::ng-deep .hide-arrow .mat-sort-header-arrow {\r\n                    color: #fff;\r\n                }\r\n::ng-deep .mat-sort-header-arrow {\r\n                    color: #fff;\r\n                }\r\n.mat-form-field-infix {\r\n                  /* padding: 0.5em 0; */\r\n                  /* border-top: 1.84375em solid transparent !important; */\r\n                  border-top: 0em solid transparent !important;\r\n                }\r\n/* \r\n                ::ng-deep .mat-icon {\r\n\r\n                  -size: 30px;\r\n                  font-weight: bold;\r\n\r\n                } */\r\n/* \r\n\r\n                .fixed-table-header {\r\n                  border-collapse: collapse;\r\n                  border: 1px solid #d4d5d5;\r\n                }\r\n                \r\n                .fixed-table-header tbody, .fixed-table-header thead {\r\n                  display: block;\r\n                }\r\n                \r\n                .fixed-table-header tbody {\r\n                  overflow: auto;\r\n                }\r\n                \r\n                .fixed-table-header th {\r\n                  text-align: left;\r\n                }\r\n                \r\n                .fixed-table-header th, .fixed-table-header td {\r\n                  padding: 8px;\r\n                  border-right: 1px solid #d4d5d5;\r\n                }\r\n                \r\n                .fixed-table-header tr {\r\n                  display: flex;\r\n                  align-items: stretch;\r\n                  cursor: pointer;\r\n                }\r\n                \r\n                .fixed-table-header th:last-child, .fixed-table-header td:last-child {\r\n                  flex: 1;\r\n                  display: inline-block;\r\n                  border-right: none;\r\n                }\r\n                \r\n                .fixed-table-header tr:last-child {\r\n                  border-bottom: 1px solid #d4d5d5;\r\n                }\r\n                \r\n                .fixed-table-header tbody tr:nth-child(odd) {\r\n                  background-color: #fffacd;\r\n                }\r\n                \r\n                .fixed-table-header input[type=text] {\r\n                  width: 95%;\r\n                  margin-top: 7px;\r\n                }\r\n                 */\r\nmat-card{\r\n                  line-height: 3;\r\n                  margin: 20px;\r\n                }\r\n.grid-layout-custom{\r\n                    width: 50vw;\r\n                    height: 100vh;\r\n                  }\r\n.itmes{\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                  }\r\n.label{\r\n                    /* margin-left: 10px; */\r\n                    all: unset;\r\n                    line-height:20px;\r\n                  }\r\nimg{\r\n                    \r\n                -webkit-filter: invert(51%) sepia(9%) saturate(1684%) hue-rotate(248deg) brightness(89%) contrast(84%);\r\n                    \r\n                        filter: invert(51%) sepia(9%) saturate(1684%) hue-rotate(248deg) brightness(89%) contrast(84%);\r\n                    }\r\nimg:hover{\r\n                      -webkit-filter: invert(35%) sepia(15%) saturate(2945%) hue-rotate(227deg) brightness(91%) contrast(89%);\r\n                              filter: invert(35%) sepia(15%) saturate(2945%) hue-rotate(227deg) brightness(91%) contrast(89%);\r\n                \r\n                      /* filter: invert(19%) sepia(99%) saturate(2201%) hue-rotate(253deg) brightness(86%) contrast(84%); */\r\n                    }\r\nhtml {\r\n                      overflow: scroll;\r\n                      overflow-x: hidden;\r\n                  }\r\n::-webkit-scrollbar {\r\n                      width: 0;  /* Remove scrollbar space */\r\n                      background: transparent;\r\n                  }\r\n.mall-slide {\r\n                    position: absolute;\r\n                    top: 155px;\r\n                    background-color: #f5f5f5;\r\n                    width: 100%;\r\n                    height: 430px;\r\n                    z-index: -1;\r\n                }\r\n.mall-slide .slid-content {\r\n                    width: 100%;\r\n                    height: 320px !important;\r\n                    overflow: hidden;\r\n                }\r\n.mall-slide .slid-content .mall-carousel-ind {\r\n                    position: absolute;\r\n                    top: 290px;\r\n                    width: 100%;\r\n                    line-height: 0!important;\r\n                    text-align: center;\r\n                    font-size: 0;\r\n                    z-index: 10;\r\n                }\r\n.mall-carousel-ind ul {\r\n                    display: inline-block;\r\n                    padding: 5px;\r\n                    background-color: rgba(0, 0, 0, .2);\r\n                    border-radius: 10px;\r\n                    transition-duration: .3s;\r\n                }\r\n.mall-carousel-ind li {\r\n                    display: inline-block;\r\n                    width: 10px;\r\n                    height: 10px;\r\n                    margin: 0 3px;\r\n                    font-size: 14px;\r\n                    background-color: #e2e2e2;\r\n                    background-color: rgba(255, 255, 255, .5);\r\n                    border-radius: 50%;\r\n                    cursor: pointer;\r\n                    transition-duration: .3s;\r\n                }\r\n.mall-carousel-ind li.mall-this {\r\n                      background-color: #fff;    \r\n                      filter: alpha(opacity=100);\r\n                      -moz-opacity: 1;\r\n                      opacity: 1;\r\n                      width: 30px;\r\n                      border-radius: 14px;\r\n                  }\r\n/* Fading animation */\r\n.fade {\r\n                    -webkit-animation-name: fade;\r\n                    -webkit-animation-duration: 1.5s;\r\n                    animation-name: fade;\r\n                    animation-duration: 1.5s;\r\n                  }\r\n@-webkit-keyframes fade {\r\n                    from {opacity: .4} \r\n                    to {opacity: 1}\r\n                  }\r\n@keyframes fade {\r\n                    from {opacity: .4} \r\n                    to {opacity: 1}\r\n                  }\r\n* {box-sizing: border-box;}\r\nbody {font-family: Verdana, sans-serif;}\r\n.mySlides {display: none;}\r\nimg {vertical-align: middle;}\r\n/* Slideshow container */\r\n.slideshow-container {\r\n  max-width: 1000px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n/* Caption text */\r\n.text {\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n/* Number text (1/3 etc) */\r\n.numbertext {\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n/* The dots/bullets/indicators */\r\n.dot {\r\n  height: 15px;\r\n  width: 15px;\r\n  margin: 0 2px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  transition: background-color 0.6s ease;\r\n}\r\n.active {\r\n  background-color: #717171;\r\n}\r\n/* Fading animation */\r\n.fade {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 1.5s;\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n@-webkit-keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}\r\n@keyframes fade {\r\n  from {opacity: .4} \r\n  to {opacity: 1}\r\n}\r\n/* On smaller screens, decrease text size */\r\n@media only screen and (max-width: 300px) {\r\n  .text {font-size: 11px}\r\n}\r\n.carousel {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: var(--min-height-carousel);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n}\r\n.slides {\r\n  position: relative;\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n  list-style: none;\r\n  margin: var(--unit-1);\r\n  border: 2px solid var(--color-brand-1);\r\n}\r\n.slide {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* navigation */\r\n.navigations {\r\n  display: flex;\r\n  padding: var(--unit-1);\r\n  border: 2px solid var(--color-brand-1);\r\n  margin: var(--unit-1);\r\n}\r\n.navigations > div {\r\n  flex: 1;\r\n}\r\n.navigations button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--color-brand-1);\r\n  flex-shrink: 0;\r\n  padding: 0 calc(var(--unit-1) * 2);\r\n  background-color: transparent;\r\n  margin: 0;\r\n  border-color: transparent;\r\n  font-weight: bold;\r\n  outline: none;\r\n  cursor: pointer;\r\n  width: calc(var(--unit-1) * 16);\r\n  text-align: center;\r\n  border: 2px solid var(--color-brand-1);\r\n}\r\n.thumbnails {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-grow: 1;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n.thumbnails li {\r\n  cursor: pointer;\r\n  padding: var(--unit-1);\r\n  border: 2px solid transparent;\r\n  width: calc(var(--unit-1) * 12);\r\n  height: calc(var(--unit-1) * 12);\r\n  opacity: 0.2;\r\n  transition: opacity var(--transition-duration) var(--transition-function);\r\n}\r\n.thumbnails li.is-active {\r\n  border-color: var(--color-brand-1);\r\n  opacity: 1;\r\n}\r\n.image-cropper{\r\nheight: 50;\r\nwidth: 40;\r\n}\r\n.ng-star-inserted{\r\n  height: 50;\r\n  width: 40;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGlzdC9wb2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixpQkFBaUI7O0FBRWpCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtFQUNWO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBLFdBQVc7QUFDWDtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztJQUVJLFlBQVk7SUFDWjtBQUNKO0FBRWlCO29CQUNHLG9DQUFvQztrQkFDdEM7QUFHRTt3QkFDSSx1QkFBdUI7b0JBQzNCO0FBRUY7c0JBQ0ksa0JBQWtCO2tCQUN0QjtBQUNBO3NCQUNJLGlCQUFpQjtzQkFDakIsa0JBQWtCO2tCQUN0QjtBQUNBO3VCQUNLLGtCQUFrQjtvQkFDckIsT0FBTztvQkFDUCxRQUFRO29CQUNSLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQix1QkFBdUI7Z0JBQzNCO0FBQ0U7b0JBQ0UsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLHVCQUF1QjtrQkFDekI7QUFHRjtvQkFDSSxrQkFBa0I7Z0JBQ3RCO0FBQ0E7b0JBQ0ksaUJBQWlCO29CQUNqQixrQkFBa0I7Z0JBQ3RCO0FBQ0E7b0JBQ0ksa0JBQWtCO29CQUNsQixPQUFPO29CQUNQLFFBQVE7b0JBQ1IsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtnQkFDM0I7QUFJQTtvQkFDSSxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQiw2QkFBNkI7Z0JBQ2pDO0FBRUE7b0JBQ0ksZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsNkJBQTZCO2dCQUNqQztBQUVBO29CQUNJLFlBQVk7b0JBQ1osc0JBQXNCO2tCQUN4QjtBQUdBO29CQUNFLFlBQVk7a0JBQ2Q7QUFFQTtvQkFDRSx3QkFBd0I7a0JBQzFCO0FBRUE7b0JBQ0UsV0FBVztnQkFDZjtBQUVBO29CQUNJLFdBQVc7Z0JBQ2Y7QUFFQTtrQkFDRSxzQkFBc0I7a0JBQ3RCLHdEQUF3RDtrQkFDeEQsNENBQTRDO2dCQUM5QztBQUVoQjs7Ozs7O21CQU1tQjtBQUduQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWdEa0I7QUFFRDtrQkFDQyxjQUFjO2tCQUNkLFlBQVk7Z0JBQ2Q7QUFDRTtvQkFDRSxXQUFXO29CQUNYLGFBQWE7a0JBQ2Y7QUFDQTtvQkFDRSxhQUFhO29CQUNiLHNCQUFzQjtrQkFDeEI7QUFDQTtvQkFDRSx1QkFBdUI7b0JBQ3ZCLFVBQVU7b0JBQ1YsZ0JBQWdCO2tCQUNsQjtBQUNBOztnQkFFRixzR0FBOEY7O3dCQUE5Riw4RkFBOEY7b0JBQzFGO0FBQ0E7c0JBQ0UsdUdBQStGOzhCQUEvRiwrRkFBK0Y7O3NCQUUvRixxR0FBcUc7b0JBQ3ZHO0FBRUE7c0JBQ0UsZ0JBQWdCO3NCQUNoQixrQkFBa0I7a0JBQ3RCO0FBQ0E7c0JBQ0ksUUFBUSxHQUFHLDJCQUEyQjtzQkFDdEMsdUJBQXVCO2tCQUMzQjtBQVNBO29CQUNFLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVix5QkFBeUI7b0JBQ3pCLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixXQUFXO2dCQUNmO0FBRUE7b0JBQ0ksV0FBVztvQkFDWCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtnQkFDcEI7QUFFQTtvQkFDSSxrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCx3QkFBd0I7b0JBQ3hCLGtCQUFrQjtvQkFDbEIsWUFBWTtvQkFDWixXQUFXO2dCQUNmO0FBRUE7b0JBQ0kscUJBQXFCO29CQUNyQixZQUFZO29CQUNaLG1DQUFtQztvQkFDbkMsbUJBQW1CO29CQUVuQix3QkFBd0I7Z0JBQzVCO0FBRUE7b0JBQ0kscUJBQXFCO29CQUNyQixXQUFXO29CQUNYLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLHlCQUF5QjtvQkFDekIseUNBQXlDO29CQUN6QyxrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBRWYsd0JBQXdCO2dCQUM1QjtBQUdFO3NCQUNJLHNCQUFzQjtzQkFDdEIsMEJBQTBCO3NCQUMxQixlQUFlO3NCQUNmLFVBQVU7c0JBQ1YsV0FBVztzQkFDWCxtQkFBbUI7a0JBQ3ZCO0FBRUEscUJBQXFCO0FBQ3JCO29CQUNFLDRCQUE0QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxvQkFBb0I7b0JBQ3BCLHdCQUF3QjtrQkFDMUI7QUFFQTtvQkFDRSxNQUFNLFdBQVc7b0JBQ2pCLElBQUksVUFBVTtrQkFDaEI7QUFFQTtvQkFDRSxNQUFNLFdBQVc7b0JBQ2pCLElBQUksVUFBVTtrQkFDaEI7QUFNQSxHQUFHLHNCQUFzQixDQUFDO0FBQzVDLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkMsV0FBVyxhQUFhLENBQUM7QUFDekIsS0FBSyxzQkFBc0IsQ0FBQztBQUU1Qix3QkFBd0I7QUFDeEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7QUFFQSxnQ0FBZ0M7QUFDaEM7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsTUFBTSxXQUFXO0VBQ2pCLElBQUksVUFBVTtBQUNoQjtBQUVBO0VBQ0UsTUFBTSxXQUFXO0VBQ2pCLElBQUksVUFBVTtBQUNoQjtBQUVBLDJDQUEyQztBQUMzQztFQUNFLE9BQU8sZUFBZTtBQUN4QjtBQVVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsT0FBTztBQUNUO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtDQUFrQztFQUNsQyw2QkFBNkI7RUFDN0IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLHlFQUF5RTtBQUMzRTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjtBQUdBO0FBQ0EsVUFBVTtBQUNWLFNBQVM7QUFDVDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWCIsImZpbGUiOiJwb2xpc3QvcG9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNtYXRUb29se1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwMzRFQTI7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG50ZCwgdGh7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xyXG4gIHBhZGRpbmc6IDE1ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbVxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG59XHJcbiBcclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM4ODg7IFxyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTsgXHJcbn1cclxuI21hdC1oZWFkZXItY2VsbFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0RUEyXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgLmV2ZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjQ1KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0LXNvcnQtaGVhZGVyLXN0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC50YWJsZSB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLnRhYmxlIHRkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJm5ic3A7JztcclxuICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAudGFibGUgdGQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRkLHRoe1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC5lbGxpcHNpcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmVsbGlwc2lzOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyZuYnNwOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmVsbGlwc2lzIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtY2VsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAubWF0LXJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAubWF0LWNlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5oaWRlLWFycm93IC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgICAgICAgICAgICAgICAvKiBwYWRkaW5nOiAwLjVlbSAwOyAqL1xyXG4gICAgICAgICAgICAgICAgICAvKiBib3JkZXItdG9wOiAxLjg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMGVtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4vKiBcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LWljb24ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgLXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcblxyXG4vKiBcclxuXHJcbiAgICAgICAgICAgICAgICAuZml4ZWQtdGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDVkNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZpeGVkLXRhYmxlLWhlYWRlciB0Ym9keSwgLmZpeGVkLXRhYmxlLWhlYWRlciB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZml4ZWQtdGFibGUtaGVhZGVyIHRib2R5IHtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5maXhlZC10YWJsZS1oZWFkZXIgdGgge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZml4ZWQtdGFibGUtaGVhZGVyIHRoLCAuZml4ZWQtdGFibGUtaGVhZGVyIHRkIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDRkNWQ1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZml4ZWQtdGFibGUtaGVhZGVyIHRyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZpeGVkLXRhYmxlLWhlYWRlciB0aDpsYXN0LWNoaWxkLCAuZml4ZWQtdGFibGUtaGVhZGVyIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZpeGVkLXRhYmxlLWhlYWRlciB0cjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ1ZDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5maXhlZC10YWJsZS1oZWFkZXIgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWNkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZml4ZWQtdGFibGUtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgbWF0LWNhcmR7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5ncmlkLWxheW91dC1jdXN0b217XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuaXRtZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5sYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cclxuICAgICAgICAgICAgICAgICAgICBhbGw6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTElKSBzZXBpYSg5JSkgc2F0dXJhdGUoMTY4NCUpIGh1ZS1yb3RhdGUoMjQ4ZGVnKSBicmlnaHRuZXNzKDg5JSkgY29udHJhc3QoODQlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMzUlKSBzZXBpYSgxNSUpIHNhdHVyYXRlKDI5NDUlKSBodWUtcm90YXRlKDIyN2RlZykgYnJpZ2h0bmVzcyg5MSUpIGNvbnRyYXN0KDg5JSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC8qIGZpbHRlcjogaW52ZXJ0KDE5JSkgc2VwaWEoOTklKSBzYXR1cmF0ZSgyMjAxJSkgaHVlLXJvdGF0ZSgyNTNkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg4NCUpOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwOyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH0gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5tYWxsLXNsaWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tYWxsLXNsaWRlIC5zbGlkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWFsbC1zbGlkZSAuc2xpZC1jb250ZW50IC5tYWxsLWNhcm91c2VsLWluZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tYWxsLWNhcm91c2VsLWluZCB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1hbGwtY2Fyb3VzZWwtaW5kIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAubWFsbC1jYXJvdXNlbC1pbmQgbGkubWFsbC10aGlzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAtbW96LW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xyXG4gICAgICAgICAgICAgICAgICAuZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogLjR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtvcGFjaXR5OiAxfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OiAuNH0gXHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge29wYWNpdHk6IDF9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuYm9keSB7Zm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7fVxyXG4ubXlTbGlkZXMge2Rpc3BsYXk6IG5vbmU7fVxyXG5pbWcge3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxyXG5cclxuLyogU2xpZGVzaG93IGNvbnRhaW5lciAqL1xyXG4uc2xpZGVzaG93LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogQ2FwdGlvbiB0ZXh0ICovXHJcbi50ZXh0IHtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTnVtYmVyIHRleHQgKDEvMyBldGMpICovXHJcbi5udW1iZXJ0ZXh0IHtcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLyogVGhlIGRvdHMvYnVsbGV0cy9pbmRpY2F0b3JzICovXHJcbi5kb3Qge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcclxufVxyXG5cclxuLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xyXG4uZmFkZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICBhbmltYXRpb24tbmFtZTogZmFkZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlIHtcclxuICBmcm9tIHtvcGFjaXR5OiAuNH0gXHJcbiAgdG8ge29wYWNpdHk6IDF9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgZnJvbSB7b3BhY2l0eTogLjR9IFxyXG4gIHRvIHtvcGFjaXR5OiAxfVxyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIGRlY3JlYXNlIHRleHQgc2l6ZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLnRleHQge2ZvbnQtc2l6ZTogMTFweH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0LWNhcm91c2VsKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5zbGlkZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogdmFyKC0tdW5pdC0xKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1icmFuZC0xKTtcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBuYXZpZ2F0aW9uICovXHJcbi5uYXZpZ2F0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiB2YXIoLS11bml0LTEpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJyYW5kLTEpO1xyXG4gIG1hcmdpbjogdmFyKC0tdW5pdC0xKTtcclxufVxyXG5cclxuLm5hdmlnYXRpb25zID4gZGl2IHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbnMgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTEpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS11bml0LTEpICogMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tdW5pdC0xKSAqIDE2KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYnJhbmQtMSk7XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tdW5pdC0xKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogY2FsYyh2YXIoLS11bml0LTEpICogMTIpO1xyXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0LTEpICogMTIpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLXRyYW5zaXRpb24tZnVuY3Rpb24pO1xyXG59XHJcbi50aHVtYm5haWxzIGxpLmlzLWFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1icmFuZC0xKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLmltYWdlLWNyb3BwZXJ7XHJcbmhlaWdodDogNTA7XHJcbndpZHRoOiA0MDtcclxufVxyXG4ubmctc3Rhci1pbnNlcnRlZHtcclxuICBoZWlnaHQ6IDUwO1xyXG4gIHdpZHRoOiA0MDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/polist/polist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/polist/polist.component.ts ***!
  \*******************************************************/
/*! exports provided: Direction, Animation, PolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolistComponent", function() { return PolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");










var Direction;
(function (Direction) {
    Direction[Direction["Next"] = 0] = "Next";
    Direction[Direction["Prev"] = 1] = "Prev";
})(Direction || (Direction = {}));
var Animation;
(function (Animation) {
    Animation["Fade"] = "fade";
    Animation["Slide"] = "slide";
})(Animation || (Animation = {}));
let PolistComponent = class PolistComponent {
    constructor(service, router, spinner, datePipe, dialog, cd, differs) {
        this.service = service;
        this.router = router;
        this.spinner = spinner;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.cd = cd;
        this.differs = differs;
        this.displayedColumns = ['position', 'PO_No', 'createdon', 'ReleasedOn', 'Item', 'Name', 'Batch', 'Site', 'Department', 'Documents', 'Version', 'Status', 'Process'];
        this.p = 1;
        this.size = 10;
        this.pageIndex = 0;
        this.isNavigationVisible = false;
        this.isThumbnailsVisible = false;
        this.animation = Animation.Fade;
        this.autoPlayDuration = 0;
        this._direction = Direction.Next;
        this.heroes = [
            { id: 11, name: 'Mobile Recharge', country: '/assets/logo/e-wallet/png-1024/mobile-recharge-1538140.png' },
            { id: 12, name: 'FASTag Recharge', country: '/assets/logo/e-wallet/svg/toll-1538112.svg' },
            { id: 13, name: 'DTH Recharge', country: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 14, name: 'Cable TV', country: '/assets/logo/e-wallet/svg/tv-1538122.svg' },
            { id: 15, name: 'Book A Cylinder', country: '/assets/logo/e-wallet/svg/gas-cylinder-1538148.svg' },
            { id: 16, name: 'Piped Gas', country: '/assets/logo/e-wallet/svg/gas-pipeline-1538147.svg' },
            { id: 17, name: 'Water', country: '/assets/logo/e-wallet/svg/water-bill-1538120.svg' },
            { id: 18, name: 'Electricity', country: '/assets/logo/e-wallet/svg/electricity-bill-1538115.svg' },
            { id: 19, name: 'Postpaid', country: '/assets/logo/e-wallet/svg/mobile-recharge-1538140.svg' },
            { id: 20, name: 'Broadband / Landline', country: '/assets/logo/e-wallet/svg/broadband-1538159.svg' }
        ];
        localStorage.setItem('ShowSwitch', 'true');
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }
    get activeSlides() {
        return this._activeSlides;
    }
    set activeSlides(activeSlides) {
        this._activeSlides = activeSlides;
    }
    ngOnInit() {
        debugger;
        this.imagesUrl = ['/assets/logo/e-wallet/Recharge.jpg', '/assets/logo/e-wallet/BBPS.jpg', '/assets/logo/e-wallet/bb.jpg'];
        this.images = '/assets/logo/e-wallet/Recharge.jpg';
        // this.dataSource = this.data.slice(0, 5);
        this.UserCat = localStorage.getItem("userCategory");
        this.isChangeStatusPO = localStorage.getItem("isChangeStatusPO");
        this.getPolist();
        this.Repeat();
        if (this.slides) {
            this.activeSlides = this.getPreviousCurrentNextIndexes(0);
            this.differ = this.differs.find(this.activeSlides).create();
            if (this.slides.length > 1 && this.autoPlayDuration > 0) {
                this.startTimer();
            }
        }
    }
    ngOnDestroy() {
        this.resetTimer();
        this.cd.detach();
    }
    select(index) {
        this.resetTimer();
        this.activeSlides = this.getPreviousCurrentNextIndexes(index);
        this.direction = this.getDirection(this.activeSlides.current, index);
        this.startTimer();
        if (this.differ.diff(this.activeSlides)) {
            this.cd.detectChanges();
        }
    }
    getDirection(oldIndex, newIndex) {
        const images = this.slides;
        if (oldIndex === images.length - 1 && newIndex === 0) {
            return Direction.Next;
        }
        else if (oldIndex === 0 && newIndex === images.length - 1) {
            return Direction.Prev;
        }
        return oldIndex < newIndex ? Direction.Next : Direction.Prev;
    }
    getPreviousCurrentNextIndexes(index) {
        const images = this.slides;
        return {
            previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
            current: index % images.length,
            next: (index === images.length - 1 ? 0 : index + 1) % images.length
        };
    }
    getAnimationSlideState(index) {
        return index === this.activeSlides.current ? 'current' : index === this.activeSlides.next ? 'next' : index === this.activeSlides.previous ? 'previous' : '';
    }
    startTimer() {
        this.resetTimer();
        if (this.autoPlayDuration > 0) {
            this.currentInterval = setInterval(() => this.select(this.activeSlides.next), this.autoPlayDuration);
        }
    }
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
        }
    }
    Repeat() {
        setTimeout(() => {
            this.__FunctionSlide();
            this.Repeat();
        }, 2000);
    }
    __FunctionSlide() {
        const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
        if (slides === []) {
            this.Repeat();
        }
        for (const x of slides) {
            const y = x;
            y.style.display = 'none';
        }
        if (this.startIndex > slides.length - 1) {
            this.startIndex = 0;
            const slide = slides[this.startIndex];
            slide.style.display = 'block';
            this.startIndex++;
        }
        else {
            const slide = slides[this.startIndex];
            slide.style.display = 'block';
            this.startIndex++;
        }
    }
    paginate(event) {
        debugger;
        this.pageIndex = event;
        this.dataSource = this.PoList.slice(event * this.size - this.size, event * this.size);
    }
    getPolist() {
        this.spinner.show();
        debugger;
        this.passuserid = {
            'userId': localStorage.getItem("userId")
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passuserid)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I013",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getPoList(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.PoList = JSON.parse(atob(data.data.content));
                this.PoList = this.PoList.PO_List;
                // this.dataSource  = this.PoList.PO_List;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.PoList);
                this.PoList.forEach((element, i) => {
                    element.Index = i + 1;
                });
                this.dataSource = this.PoList.slice(0, 10);
                this.dataSource.sort = this.sort;
            }
        });
    }
    changeStatus(event, po_no) {
        debugger;
        var value = event.value;
        var po_no = po_no;
        var a = {
            'userId': localStorage.getItem("userId"),
            'headerStatus': value,
            'PO_No': po_no
        };
        var enc = btoa(JSON.stringify(a));
        var data = {
            "data": {
                "content": enc,
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I015",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.updatePOStatus(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                var msg = atob(data.data.content);
                if (JSON.parse(msg).responseModel.status == true) {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                    this.getPolist();
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    // sortedData: []
    sortData(sort) {
        debugger;
        const data = this.PoList.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource = data;
            return;
        }
        this.dataSource = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'Index': return compare(a.Index, b.Index, isAsc);
                case 'PO_No': return compare(a.PO_No, b.PO_No, isAsc);
                case 'createdOn': return compare(a.createdOn, b.createdOn, isAsc);
                case 'releasedOn': return compare(a.releasedOn, b.releasedOn, isAsc);
                case 'itemCode': return compare(a.itemCode, b.itemCode, isAsc);
                case 'itemName': return compare(a.itemName, b.itemName, isAsc);
                case 'itemBatch': return compare(a.itemBatch, b.itemBatch, isAsc);
                default: return 0;
            }
        });
    }
    applyFilter(filterValue) {
        debugger;
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        //this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    GotoPagelist(data) {
        debugger;
        if (data.headerStatus == 'LOCKED' || data.headerStatus == 'TOSTART') {
        }
        else {
            this.router.navigate(['/pagelist', data.PO_No]);
        }
    }
};
PolistComponent.ctorParameters = () => [
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__["FetchapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], PolistComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "isNavigationVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "isThumbnailsVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "animation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "autoPlayDuration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "slideTemplateRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], PolistComponent.prototype, "thumbnailTemplateRef", void 0);
PolistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-polist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./polist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/polist/polist.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('slideState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    transform: 'translateX(0%)',
                    zIndex: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    transform: 'translateX(100%)',
                    zIndex: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    transform: 'translateX(-100%)',
                    zIndex: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('current => previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('next => current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('400ms ease-out')),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./polist.component.css */ "./src/app/components/polist/polist.component.css")).default]
    })
], PolistComponent);

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/previewhtmlpage/previewhtmlpage.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/previewhtmlpage/previewhtmlpage.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmV2aWV3aHRtbHBhZ2UvcHJldmlld2h0bWxwYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/previewhtmlpage/previewhtmlpage.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/previewhtmlpage/previewhtmlpage.component.ts ***!
  \*************************************************************************/
/*! exports provided: PreviewhtmlpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewhtmlpageComponent", function() { return PreviewhtmlpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");






let PreviewhtmlpageComponent = class PreviewhtmlpageComponent {
    constructor(data, http, sanitizer, service) {
        this.data = data;
        this.http = http;
        this.sanitizer = sanitizer;
        this.service = service;
        this.name = 'Kissht';
        debugger;
        const Pageurl = 'src/assets/HelpPages/page1.htm';
        // this.content = data.Htmlpage
        if (data.data == '/userprofile') {
            // window.open(Pageurl,'', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
            // window.open('src/assets/HelpPages/page1.htm',"_blank");
            //   let file = FileList[0];
            //   let fileReader: FileReader = new FileReader();
            //   // let self = this;
            //   // fileReader.onloadend = function(x) {
            //   //   self.fileContent = fileReader.result;
            //   // }
            //   fileReader.readAsText(file);
            // }
            var blob = new Blob(["assets/HelpPages/page1.htm"]);
            let fileReader = new FileReader();
            fileReader.onloadend = (e) => {
                // var contents = e.target.result;
                var z = fileReader.result;
            };
            var x = fileReader.readAsText(blob);
            var y = fileReader.readAsDataURL(blob);
            this.http.get('src/assets/HelpPages/page1').subscribe(dataS => {
                console.log(dataS);
            });
            //   this.http.get("/src/assets/HelpPages/page1.htm").subscribe(datax => {
            //     console.log(datax);
            // })
            // this.http.get(this.service.API_URL.split(":")+'/src/assets/HelpPages/page1.htm',{responseType:'text'}).subscribe(res=>{
            //   this.content = this.sanitizer.bypassSecurityTrustHtml(res);
            // })
            // this.content = 'assets/HelpPages/page1.htm'
            // }
        }
        if (data.data == '/polist') {
            this.http.get('https://kissht.com/', { responseType: 'text' }).subscribe(res => {
                this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res);
            });
            this.content == 'src/assets/HelpPages/page2.htm';
        }
        if (data.data == '/pagelist') {
            this.http.get('https://kissht.com/', { responseType: 'text' }).subscribe(res => {
                this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res);
            });
            this.content == 'src/assets/HelpPages/page3.htm';
        }
        if (data.data == '/sectionthree') {
            this.http.get('https://kissht.com/', { responseType: 'text' }).subscribe(res => {
                this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res);
            });
            this.content == 'src/assets/HelpPages/page4.htm';
        }
    }
    getJSON(file) {
        debugger;
        return this.http.get("./assets/configs/" + file + ".json");
    }
    getSetting() {
        debugger;
        // use setting here
        //this.getJson('setting').subscribe(url => this.somevariable = url)
        this.getJSON('setting').subscribe(url => {
            debugger;
            this.API_URL = url.API_URL;
        });
    }
    ngOnInit() {
    }
};
PreviewhtmlpageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__["FetchapiService"] }
];
PreviewhtmlpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-previewhtmlpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./previewhtmlpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/previewhtmlpage/previewhtmlpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./previewhtmlpage.component.css */ "./src/app/components/previewhtmlpage/previewhtmlpage.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PreviewhtmlpageComponent);



/***/ }),

/***/ "./src/app/components/rechargeconfirmation/rechargeconfirmation.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/rechargeconfirmation/rechargeconfirmation.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNoYXJnZWNvbmZpcm1hdGlvbi9yZWNoYXJnZWNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/rechargeconfirmation/rechargeconfirmation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/rechargeconfirmation/rechargeconfirmation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RechargeconfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargeconfirmationComponent", function() { return RechargeconfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RechargeconfirmationComponent = class RechargeconfirmationComponent {
    constructor() {
        this.displayedColumns = ['Mobile', 'Customer Name'];
        this.p = 1;
        this.size = 10;
        this.pageIndex = 0;
    }
    ngOnInit() {
    }
};
RechargeconfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rechargeconfirmation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rechargeconfirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rechargeconfirmation/rechargeconfirmation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rechargeconfirmation.component.css */ "./src/app/components/rechargeconfirmation/rechargeconfirmation.component.css")).default]
    })
], RechargeconfirmationComponent);



/***/ }),

/***/ "./src/app/components/record-face/record-face.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/record-face/record-face.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n  background-color: #F0F0F0;\r\n}\r\n#app {\r\n  text-align: center;\r\n  color: #2c3e50;\r\n  /* margin-top: 60px; */\r\n}\r\n#video {\r\n  background-color: #000000;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n   transform: scaleX(-1);\r\n}\r\n#canvas {\r\n  display: none;\r\n}\r\nli {\r\n  display: inline;\r\n  padding: 5px;\r\n}\r\n.terminal {\r\n  position: relative;\r\n  padding-top: 30px;\r\n  border-radius: 6px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: #fafafa;\r\n  width: 400px;\r\n  height: 300px;\r\n  margin-top: 5%;\r\n}\r\n.terminal img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.terminal::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n.terminal pre {\r\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container>*:not(.circle-link),\r\n  .terminal {\r\n      width: 100%;\r\n  }\r\n  .terminal{\r\n      max-width: 250px;\r\n  }\r\n\r\n\r\n}\r\n/* /////// */\r\n/* .container {\r\n  /* position: relative;\r\n  margin-top: 50px;\r\n  width: 500px;\r\n  height: 300px;\r\n} */\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0);\r\n  transition: background 0.5s ease;\r\n}\r\n.container:hover .overlay {\r\n  display: block;\r\n  background: rgba(0, 0, 0, .3);\r\n}\r\n/* img {\r\n  position: absolute;\r\n  width: 500px;\r\n  height: 300px;\r\n  left: 0;\r\n} */\r\n.title {\r\n  position: absolute;\r\n  width: 500px;\r\n  left: 0;\r\n  top: 120px;\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  z-index: 1;\r\n  transition: top .5s ease;\r\n}\r\n.container:hover .title {\r\n  top: 90px;\r\n}\r\n.button {\r\n  /* position: absolute;\r\n  width: 500px;\r\n  left:0;\r\n  top: 180px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  transition: opacity .35s ease; */\r\n  position: relative;\r\n  top: -80px;\r\n   opacity: 0;\r\n\r\n}\r\n.button a {\r\n  width: 200px;\r\n  padding: 12px 48px;\r\n  text-align: center;\r\n  color: white;\r\n  border: solid 2px white;\r\n  z-index: 1;\r\n}\r\n.container:hover .button {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC1mYWNlL3JlY29yZC1mYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0JBQWlCO0tBQWpCLGlCQUFpQjtHQUNoQixxQkFBcUI7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBR0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYO0FBR0E7O0VBRUU7O01BRUksV0FBVztFQUNmO0VBQ0E7TUFDSSxnQkFBZ0I7RUFDcEI7OztBQUdGO0FBS0EsWUFBWTtBQUdaOzs7OztHQUtHO0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTs7Ozs7R0FLRztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRTs7Ozs7O2tDQU1nQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtHQUNULFVBQVU7O0FBRWI7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoicmVjb3JkLWZhY2UvcmVjb3JkLWZhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbn1cclxuI2FwcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIC8qIG1hcmdpbi10b3A6IDYwcHg7ICovXHJcbn1cclxuI3ZpZGVvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuI2NhbnZhcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4udGVybWluYWwgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICB0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBtb25vc3BhY2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lcj4qOm5vdCguY2lyY2xlLWxpbmspLFxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGVybWluYWx7XHJcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIC8vLy8vLy8gKi9cclxuXHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufSAqL1xyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XHJcbn1cclxuXHJcbi8qIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbn0gKi9cclxuXHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMTIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC41cyBlYXNlO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIC50aXRsZSB7XHJcbiAgdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6IDE4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC04MHB4O1xyXG4gICBvcGFjaXR5OiAwO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbiBhIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMTJweCA0OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAuYnV0dG9uIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/record-face/record-face.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/record-face/record-face.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecordFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordFaceComponent", function() { return RecordFaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");







face_api_js__WEBPACK_IMPORTED_MODULE_3__["tf"].getBackend();
let RecordFaceComponent = class RecordFaceComponent {
    constructor(dialog, router, service, spinner) {
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.spinner = spinner;
        this.captures = [];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        debugger;
        var constraints = {
            audio: false,
            video: {
                width: { ideal: 1280 },
                height: { ideal: 1024 },
                facingMode: { exact: 'user' }
            }
        };
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia(constraints).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            })
                .catch(err => {
                console.log("unhanled error: " + err);
                alert("unhanled error: " + err);
            });
        }
    }
    capture() {
        debugger;
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        //this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
        this.imageSrc = this.canvas.nativeElement.toDataURL("image/png"); // get base64
    }
    // download(base64)
    // {debugger
    //     var a = document.createElement("a"); //Create <a>
    //     a.href = base64 //Image Base64 Goes here
    //     a.download = "Image.png"; //File name Here                            
    //     a.click(); //Downloaded file
    // }
    uploadFaceData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            this.spinner.show();
            const mtcnnParams = {
                // number of scaled versions of the input image passed through the CNN
                // of the first stage, lower numbers will result in lower inference time,
                // but will also be less accurate
                maxNumScales: 10,
                // scale factor used to calculate the scale steps of the image
                // pyramid used in stage 1
                scaleFactor: 0.709,
                // the score threshold values used to filter the bounding
                // boxes of stage 1, 2 and 3
                scoreThresholds: [0.6, 0.7, 0.7],
                // mininum face size to expect, the higher the faster processing will be,
                // but smaller faces won't be detected
                minFaceSize: 50
            };
            // const options = new faceapi.MtcnnOptions(mtcnnParams)
            const img = yield face_api_js__WEBPACK_IMPORTED_MODULE_3__["fetchImage"](this.imageSrc);
            const fullFaceDescription = yield face_api_js__WEBPACK_IMPORTED_MODULE_3__["detectSingleFace"](img, new face_api_js__WEBPACK_IMPORTED_MODULE_3__["TinyFaceDetectorOptions"]()).withFaceLandmarks().withFaceDescriptor();
            if (!fullFaceDescription) {
                this.spinner.hide();
                this.dialog.openDialog('Not Getting face data , Please Try Again', 'Error');
                //throw new Error(`no faces detected`);
                return false;
            }
            else {
                var faceDescriptors = [fullFaceDescription.descriptor];
                var str = '[' + faceDescriptors[0] + ']';
                var a = {
                    "userId": localStorage.getItem("userId"),
                    "FaceArray": str,
                    "Img": this.imageSrc.split(',')[1] // base64 Image
                };
                var enc = btoa(JSON.stringify(a));
                var data = {
                    "data": {
                        "content": enc,
                        "encryptCode": ""
                    },
                    "globalInfo": {
                        "latitude": "2.32.34.00",
                        "langitude": "12.232.12",
                        "deviceNo": "Hp",
                        "userName": localStorage.getItem("username"),
                        "requestTime": new Date(),
                        "interfaceCode": "I023",
                        "UserCategory": localStorage.getItem("userCategory"),
                        "userId": localStorage.getItem("userId")
                    },
                    "returnStateInfo": {
                        "returnMessage": "",
                        "returnCode": ""
                    }
                };
                this.service.recordFace(data).subscribe((res) => {
                    debugger;
                    var data = JSON.parse(res);
                    var R = JSON.parse(atob(data.data.content));
                    if (data.returnStateInfo.returnMessage == 'Success' && R.responseModel.status == true) {
                        this.dialog.openDialog(R.responseModel.msg, 'Success');
                        this.router.navigate(['/userprofile']);
                    }
                    else {
                        this.dialog.openDialog(R.responseModel.msg, 'Error');
                    }
                    this.spinner.hide();
                });
            }
        });
    }
};
RecordFaceComponent.ctorParameters = () => [
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__["FetchapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", { static: false })
], RecordFaceComponent.prototype, "video", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvas", { static: false })
], RecordFaceComponent.prototype, "canvas", void 0);
RecordFaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-record-face',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./record-face.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/record-face/record-face.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./record-face.component.css */ "./src/app/components/record-face/record-face.component.css")).default]
    })
], RecordFaceComponent);



/***/ }),

/***/ "./src/app/components/reviewcomments/reviewcomments.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/reviewcomments/reviewcomments.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* box.make-scrollable {\r\n    height: 60px; \r\n    overflow-y: scroll;\r\n} */\r\n\r\n.main_div {\r\n  text-align:center;\r\n  position: relative;\r\n  left: 100px;\r\n  height: 200px;\r\n  width: 500px;\r\n  background-color: green; \r\n}\r\n\r\n.close-button{\r\n  float: right;\r\n  top:-74px;\r\n  right:-14px;\r\n}\r\n\r\n/* .close.mat-button {\r\n  position: inherit;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 2px;\r\n  line-height: 3px;\r\n  min-width: auto;\r\n} */\r\n\r\n.close-icon {\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\n.close-icon:hover {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* .h2{\r\n  float: right;\r\n  top:-24px;\r\n  right:-24px;\r\n\r\n} */\r\n\r\n.mat-dialog-actions {\r\n  margin-bottom: -50px;\r\n}\r\n\r\n.mat-dialog-content{\r\n  display: list-item;\r\n  max-height: 35vh;\r\n  font: 1em sans-serif;\r\n  \r\n}\r\n\r\n.mat-dialog-container{\r\n  overflow: overlay;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font: 1em sans-serif;\r\n}\r\n\r\n.mat-list >  .mat-list-item:nth-child(2n+1) > .div{\r\n    text-align: left;\r\n    color:primary;\r\n    --mdc-shape-small : 10px;\r\n    border-radius: 1;\r\n  }\r\n\r\n.mat-list >  .mat-list-item:nth-child(2n) > .div{\r\n    color:\"warn\";\r\n    border-radius: 1;\r\n  }\r\n\r\nbutton.mat-button {\r\n    border-radius: 1;\r\n }\r\n\r\n.container{\r\n    width: 100%;\r\n  }\r\n\r\ntable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  border: none !important;\r\n\r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 10px;\r\n  width: 50%;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #dddddd;\r\n  text-align: left !important;\r\n  align-items : left;\r\n  align-self: auto;\r\n  align-content: flex-start;\r\n  align-tracks: initial;\r\n  -moz-text-align-last: left;\r\n       text-align-last: left;\r\n  \r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld2NvbW1lbnRzL3Jldmlld2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTs7Ozs7OztHQU9HOztBQUNIO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBOzs7OztHQUtHOztBQUNIO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7O0FBRXRCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdFQUF3RTtFQUN4RSxvQkFBb0I7QUFDdEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsZ0JBQWdCO0NBQ25COztBQUVDO0lBQ0UsV0FBVztFQUNiOztBQUVEO0VBQ0MsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDBCQUFxQjtPQUFyQixxQkFBcUI7OztBQUd2QiIsImZpbGUiOiJyZXZpZXdjb21tZW50cy9yZXZpZXdjb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm94Lm1ha2Utc2Nyb2xsYWJsZSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7IFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59ICovXHJcblxyXG4ubWFpbl9kaXYge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgXHJcbn1cclxuXHJcblxyXG5cclxuLmNsb3NlLWJ1dHRvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdG9wOi03NHB4O1xyXG4gIHJpZ2h0Oi0xNHB4O1xyXG59XHJcbi8qIC5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59ICovXHJcbi5jbG9zZS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuLyogLmgye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6LTI0cHg7XHJcbiAgcmlnaHQ6LTI0cHg7XHJcblxyXG59ICovXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50e1xyXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIGZvbnQ6IDFlbSBzYW5zLXNlcmlmO1xyXG4gIFxyXG59XHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICBvdmVyZmxvdzogb3ZlcmxheTtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udDogMWVtIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1hdC1saXN0ID4gIC5tYXQtbGlzdC1pdGVtOm50aC1jaGlsZCgybisxKSA+IC5kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6cHJpbWFyeTtcclxuICAgIC0tbWRjLXNoYXBlLXNtYWxsIDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE7XHJcbiAgfVxyXG4gIC5tYXQtbGlzdCA+ICAubWF0LWxpc3QtaXRlbTpudGgtY2hpbGQoMm4pID4gLmRpdntcclxuICAgIGNvbG9yOlwid2FyblwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5tYXQtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE7XHJcbiB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiB0YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgOiBsZWZ0O1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi10cmFja3M6IGluaXRpYWw7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xyXG4gIFxyXG5cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/reviewcomments/reviewcomments.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reviewcomments/reviewcomments.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReviewcommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewcommentsComponent", function() { return ReviewcommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ReviewcommentsComponent = class ReviewcommentsComponent {
    constructor(spinner, fb, service, datepipe, location) {
        this.spinner = spinner;
        this.fb = fb;
        this.service = service;
        this.datepipe = datepipe;
        this.location = location;
        this.index = null;
        this.result = Array();
        this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        // this.chatForm = this.fb.group({ message: this.messageControl });
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userId");
        this.chatForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.scrollBottom();
        this.scrollToBottom();
        this.reviewlist();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    scrollBottom() {
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
    }
    back() {
        this.location.back();
    }
    reviewlist() {
        debugger;
        // this.spinner.show();
        var newdata = {
            'userId': localStorage.getItem("userId"),
            "PO_No": localStorage.getItem("PO_No"),
            "Page": localStorage.getItem("Page"),
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(newdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I032",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.GetReviewList(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                var response = atob(data.data.content);
                if (response == '') {
                    // return alert("No Comments");
                }
                else {
                    this.listReviews = JSON.parse(response);
                    // this.date=this.listReviews.datetime[this.index]
                    // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
                }
            }
        });
    }
    submit() {
        debugger;
        this.spinner.show();
        var reviewdata = {
            'userId': localStorage.getItem("userId"),
            "PO_No": localStorage.getItem("PO_No"),
            "Page": localStorage.getItem("Page"),
            // "comment": this.chatForm.value.message.replace(/\n/g, ' '),
            "comment": this.chatForm.value.message.replace(/\n/g, ' '),
        };
        // "userid": localStorage.getItem("userId") ,
        // "datetime": new Date(),
        // "chat": Chat
        var data = {
            "data": {
                "content": btoa(JSON.stringify(reviewdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I033",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.clearMsg();
        this.service.AddReview(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.review = JSON.parse(atob(data.data.content));
                this.clearMsg();
                this.reviewlist();
                // alert(this.review.responseModel.msg);
            }
        });
        this.scrollBottom();
    }
    clearMsg() {
        //this.chatForm.value.message = "";
        this.chatForm.reset();
    }
};
ReviewcommentsComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_4__["FetchapiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: false })
], ReviewcommentsComponent.prototype, "myScrollContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReviewcommentsComponent.prototype, "chatId", void 0);
ReviewcommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviewcomments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviewcomments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reviewcomments/reviewcomments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviewcomments.component.css */ "./src/app/components/reviewcomments/reviewcomments.component.css")).default]
    })
], ReviewcommentsComponent);



/***/ }),

/***/ "./src/app/components/sectionthree/dynamic-content-viewer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sectionthree/dynamic-content-viewer.ts ***!
  \*******************************************************************/
/*! exports provided: embeddedComponents, EmbeddedComponents, ContentViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeddedComponents", function() { return embeddedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedComponents", function() { return EmbeddedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentViewer", function() { return ContentViewer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _embeddable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embeddable.component */ "./src/app/components/sectionthree/embeddable.component.ts");



const embeddedComponents = [
    _embeddable_component__WEBPACK_IMPORTED_MODULE_2__["EmbeddableComponent"]
];
class EmbeddedComponents {
    constructor() {
        this.components = embeddedComponents;
    }
}
let ContentViewer = class ContentViewer {
    constructor(componentFactoryResolver, elementRef, embeddedComponents, injector) {
        this.injector = injector;
        // private embeddedComponentFactories: Map<string, ComponentFactory<any>> = new Map();
        // private embeddedComponents: ComponentRef<any>[] = [];
        this.docRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hostElement = elementRef.nativeElement;
        // embeddedComponents.components.forEach(component =>{
        //   const factory = componentFactoryResolver.resolveComponentFactory(component);
        //   this.embeddedComponentFactories.set(factory.selector, factory);
        // })
        // console.log(this.embeddedComponentFactories)
    }
    set content(content) {
        this.ngOnDestroy();
        if (content) {
            this.build(content);
            //this.docRendered.emit();
        }
    }
    build(content) {
        this.hostElement.innerHTML = content || '';
        if (!content) {
            return;
        }
        // this.embeddedComponentFactories.forEach((factory, selector) => {
        //   const embeddedComponentElements = this.hostElement.querySelectorAll(selector);
        //   for (const element of embeddedComponentElements){ 
        //     //convert NodeList into an array, since Angular dosen't like having a NodeList passed
        //     //for projectableNodes
        //     const projectableNodes = [Array.prototype.slice.call(element.childNodes)]
        //     const embeddedComponent = factory.create(this.injector, projectableNodes, element)
        //     //apply inputs into the dynamic component
        //     //only static ones work here since this is the only time they're set
        //     for(const attr of (element as any).attributes){
        //       embeddedComponent.instance[attr.nodeName] = attr.nodeValue;
        //     }
        //     this.embeddedComponents.push(embeddedComponent);
        //   }
        // });
    }
    ngDoCheck() {
        //this.embeddedComponents.forEach(comp => comp.changeDetectorRef.detectChanges());
    }
    ngOnDestroy() {
        // destroy these components else there will be memory leaks
        //this.embeddedComponents.forEach(comp => comp.destroy());
        //this.embeddedComponents.length = 0;
    }
};
ContentViewer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: EmbeddedComponents },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContentViewer.prototype, "docRendered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentViewer.prototype, "content", null);
ContentViewer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'content-viewer',
        template: '',
    })
], ContentViewer);



/***/ }),

/***/ "./src/app/components/sectionthree/embeddable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sectionthree/embeddable.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmbeddableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddableComponent", function() { return EmbeddableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmbeddableComponent = class EmbeddableComponent {
    ngOnInit() {
        console.log(`EmbeddableComponent.OnInit name=`, this.name);
    }
};
EmbeddableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-component',
        template: `
  
  I am an existing component with name: {{name}} <br />
  projected content: <ng-content></ng-content>
  `,
    })
], EmbeddableComponent);



/***/ }),

/***/ "./src/app/components/sectionthree/sectionthree.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/sectionthree/sectionthree.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#tbl_1 , #tbl_2, #tbl_3\r\n  {\r\n    font-size: small;\r\n  }\r\ndiv#hello{\r\n  overflow: auto;\r\n}\r\nmat-icon  more_vert  {\r\n     \r\n      transform: 'rotate(45deg)'\r\n    }\r\nmat-icon   more_horiz{\r\n  \r\n      transform: ' rotate(-45deg)'\r\n    }\r\n.widthmax{\r\n  max-width: 0% !important;\r\n}\r\n/* .close.mat-button {\r\n  position: inherit;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 2px;\r\n  line-height: 3px;\r\n  min-width: auto;\r\n} */\r\n.close-icon {\r\n  transition: 1s ease-in-out;\r\n  /* float: right; */\r\n  margin-top: 8px;\r\n  margin-left: 245px;\r\n  \r\n}\r\n.close-icon:hover {\r\n  transform: rotate(180deg);\r\n}\r\n@media print\r\n{   \r\n  #PrintDiv{\r\n    @page { size: landscape; }\r\n  } \r\n    .Action\r\n    {\r\n        display: none !important;\r\n    }\r\n}\r\n@media print {\r\n  .noPrint{\r\n    display:none;\r\n  }\r\n}\r\nhr{\r\n  background: gray;\r\n}\r\n.row div{\r\n    /* display: inline-block;\r\n    row-gap: 5px;\r\n    padding-left: 5px; \r\n    text-align: center;\r\n    margin-top:-10px;\r\n    margin-bottom: -10px; */\r\n    padding: 3px;\r\n    white-space: nowrap;\r\n    margin-left: 2px;\r\n}\r\n.htmlData{\r\n  margin-top: -10px;\r\n  padding-top: -10px;\r\n}\r\n.threeSpread {\r\n\r\nmargin: 0 40px 40px 40px\r\n\r\n\r\n}\r\n/* \r\ndiv.inner, div.outer {\r\n    max-width: 30%;\r\n} */\r\n/* table{\r\n  width: 561.45pt;\r\n} */\r\nb{\r\n    font-weight: bold;\r\n    font-size: smaller;\r\n  }\r\nlabel{\r\n    font-size: smaller;\r\n    color: #827f7f;\r\n  }\r\ntable,td{\r\n    white-space: nowrap;\r\n    table-layout: fixed;\r\n    text-align: center;\r\n    border-collapse: collapse;\r\n    border-spacing:0 15px;\r\n  }\r\n#printable { display: none; }\r\n@media print\r\n  {\r\n      #non-printable { display: none; }\r\n      #printable { display: block; }\r\n  }\r\n@media only print {\r\n   #idOfYourDiv {\r\n     width: auto;\r\n     height: auto;\r\n     overflow: visible;\r\n   }\r\n}\r\n/*  expansion css */\r\n.example-action-buttons {\r\n    padding-bottom: 20px;\r\n  }\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n    flex-basis: 0;\r\n  }\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n.example-headers-align .mat-form-field + .mat-form-field {\r\n    margin-left: 8px;\r\n  }\r\n/*  ends */\r\n::ng-deep .mat-menu-content {\r\n    padding-top: 0px !important;\r\n    padding-bottom: 0px !important;\r\n  }\r\n.mat-menu-item{\r\n    line-height:20px;\r\n    height:50px;\r\n  }\r\n.outer-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    color:rgb(120, 228, 78);\r\n    display:inline-block;\r\n   \r\n  }\r\n.saves{\r\n    align-items: center;\r\n    cursor: pointer;\r\n    color:rgb(120, 228, 78);\r\n    display:inline-block;\r\n  }\r\n.outer-div > span {\r\n    font-size: 11px;\r\n  }\r\n.HTMLview{\r\n    overflow: auto;\r\n  }\r\n.disabled {\r\n    cursor: not-allowed;\r\n    color: grey;\r\n  }\r\ninput[type=\"date\" i] {\r\n    align-items: center;\r\n    display: -webkit-inline-flex;\r\n    font-family: monospace;\r\n    -webkit-padding-start: 1px;\r\n            padding-inline-start: 1px;\r\n    cursor: default;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n}\r\ninput[type=\"text\" i] {\r\n  align-items: center;\r\n  display: -webkit-inline-flex;\r\n  font-family: monospace;\r\n  -webkit-padding-start: 1px;\r\n          padding-inline-start: 1px;\r\n  cursor: default;\r\n  overflow: hidden;\r\n  padding: 0px;\r\n}\r\nform{ position:relative; }\r\nform.lock::before{\r\n  content:'';\r\n  position:absolute;\r\n  z-index:999;\r\n  top:0;\r\n  right:0;\r\n  bottom:0;\r\n  left:0;\r\n}\r\nbutton.on{ color:red; }\r\n.disable:hover{\r\n  cursor: not-allowed;\r\n  }\r\n.disable:active{\r\n  pointer-events: none;\r\n  }\r\n/*No css for HTML starts here*/\r\n/* You can add global styles to this file, and also import other style files */\r\n/* .mat-badge-content{font-weight:\"\"!important;font-size:\"\"!important;font-family:\"\"!important}\r\n.mat-badge-small .mat-badge-content{font-size:\"\"!important}\r\n.mat-badge-large .mat-badge-content{font-size:\"\"!important}\r\n.mat-h1,.mat-headline,.mat-typography h1{font:\"\"!important;margin:\"\"!important}\r\n.mat-h2,.mat-title,.mat-typography h2{font:\"\"!important;margin:\"\"!important}\r\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:\"\"!important;margin:\"\"!important}\r\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:\"\"!important;margin:\"\"!important}\r\n.mat-h5,.mat-typography h5{font:\"\"!important;margin:\"\"!important}\r\n.mat-h6,.mat-typography h6{font:\"\"!important;margin:\"\"!important}\r\n.mat-body-2,.mat-body-strong{font:\"\"!important}\r\n.mat-body,.mat-body-1,.mat-typography{font:\"\"!important}\r\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:\"\"!important}\r\n.mat-caption,.mat-small{font:\"\"!important}\r\n.mat-display-4,.mat-typography .mat-display-4{font:\"\"!important;letter-spacing:\"\"!important;margin:\"\"!important}\r\n.mat-display-3,.mat-typography .mat-display-3{font:\"\"!important;letter-spacing:\"\"!important;margin:\"\"!important}\r\n.mat-display-2,.mat-typography .mat-display-2{font:\"\"!important;letter-spacing:\"\"!important;margin:\"\"!important}\r\n.mat-display-1,.mat-typography .mat-display-1{font:\"\"!important;margin:\"\"!important}\r\n.mat-bottom-sheet-container{font:\"\"!important}\r\n.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:\"\"!important;font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-button-toggle{font-family:\"\"!important}\r\n.mat-card{font-family:\"\"!important}\r\n.mat-card-title{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-card-header .mat-card-title{font-size:\"\"!important}\r\n.mat-card-content,.mat-card-subtitle{font-size:\"\"!important}\r\n.mat-checkbox{font-family:\"\"!important}\r\n.mat-checkbox-layout .mat-checkbox-label{line-height:\"\"!important}\r\n.mat-chip{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:\"\"!important}\r\n.mat-table{font-family:\"\"!important}\r\n.mat-header-cell{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-cell,.mat-footer-cell{font-size:\"\"!important}\r\n.mat-calendar{font-family:\"\"!important}\r\n.mat-calendar-body{font-size:\"\"!important}\r\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-calendar-table-header th{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-dialog-title{font:\"\"!important}\r\n.mat-expansion-panel-header{font-family:\"\"!important;font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-expansion-panel-content{font:\"\"!important}\r\n.mat-form-field{font-size:inherit;font-weight:\"\"!important;line-height:\"\"!important;font-family:\"\"!important}\r\n.mat-form-field-wrapper{padding-bottom:\"\"!important}\r\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:\"\"!important;line-height:\"\"!important}\r\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:\"\"!important;width:\"\"!important}\r\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:\"\"!important;line-height:\"\"!important}\r\n.mat-form-field-infix{padding:\"\"!important;border-top:\"\"!important}\r\n.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-label-wrapper{top:\"\"!important;padding-top:\"\"!important}\r\n.mat-form-field-label{top:\"\"!important}\r\n.mat-form-field-underline{bottom:\"\"!important}\r\n.mat-form-field-subscript-wrapper{font-size:\"\"!important;margin-top:\"\"!important;top:\"\"!important}\r\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:\"\"!important}\r\n.mat-form-field-appearance-legacy .mat-form-field-infix{padding:\"\"!important}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:\"\"!important;-ms-transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important;-ms-transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important;-ms-transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-appearance-legacy .mat-form-field-label{top:\"\"!important}\r\n.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:\"\"!important}\r\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:\"\"!important;top:\"\"!important}\r\n@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:\"\"!important}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important}\r\n.mat-form-field-appearance-fill .mat-form-field-infix{padding:\"\"!important}\r\n.mat-form-field-appearance-fill .mat-form-field-label{top:\"\"!important;margin-top:\"\"!important}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.33333%}\r\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-appearance-outline .mat-form-field-infix{padding:\"\"!important}\r\n.mat-form-field-appearance-outline .mat-form-field-label{top:\"\"!important;margin-top:\"\"!important}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{transform:\"\"!important;width:\"\"!important}\r\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:\"\"!important;width:\"\"!important}\r\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:\"\"!important}\r\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:\"\"!important;overflow:\"\"!important;text-overflow:\"\"!important;display:\"\"!important;box-sizing:\"\"!important}\r\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:\"\"!important}\r\ninput.mat-input-element{margin-top:\"\"!important}\r\n.mat-menu-item{font-family:\"\"!important;font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:\"\"!important;font-size:\"\"!important}\r\n.mat-radio-button{font-family:\"\"!important}\r\n.mat-select{font-family:\"\"!important}\r\n.mat-select-trigger{height:\"\"!important}\r\n.mat-slide-toggle-content{font-family:\"\"!important}\r\n.mat-slider-thumb-label-text{font-family:\"\"!important;font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:\"\"!important}\r\n.mat-step-label{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-step-sub-label-error{font-weight:\"\"!important}\r\n.mat-step-label-error{font-size:\"\"!important}\r\n.mat-step-label-selected{font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-tab-group{font-family:\"\"!important}\r\n.mat-tab-label,.mat-tab-link{font-family:\"\"!important;font-size:\"\"!important;font-weight:\"\"!important}\r\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:\"\"!important;margin:\"\"!important}\r\n.mat-tooltip{font-family:\"\"!important;font-size:\"\"!important;padding-top:\"\"!important;padding-bottom:\"\"!important}\r\n.mat-tooltip-handset{font-size:\"\"!important;padding-top:\"\"!important;padding-bottom:\"\"!important}\r\n.mat-list-item{font-family:\"\"!important}\r\n.mat-list-option{font-family:\"\"!important}\r\n.mat-list-base .mat-list-item{font-size:\"\"!important}\r\n.mat-list-base .mat-list-item .mat-line{white-space:\"\"!important} */\r\n/*No css for HTML ends here*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb250aHJlZS9zZWN0aW9udGhyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7RUFDbEI7QUFDRjtFQUNFLGNBQWM7QUFDaEI7QUFFQTs7TUFFTTtJQUNGO0FBRUE7O01BRUU7SUFDRjtBQUdKO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7Ozs7Ozs7R0FPRztBQUNIO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUU7SUFDRSxRQUFRLGVBQWUsRUFBRTtFQUMzQjtJQUNFOztRQUVJLHdCQUF3QjtJQUM1QjtBQUNKO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDRTtJQUNFOzs7OzsyQkFLdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0dBR0c7QUFFSDs7R0FFRztBQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7QUFFQSxhQUFhLGFBQWEsRUFBRTtBQUU1Qjs7TUFFSSxpQkFBaUIsYUFBYSxFQUFFO01BQ2hDLGFBQWEsY0FBYyxFQUFFO0VBQ2pDO0FBQ0Y7R0FDRztLQUNFLFdBQVc7S0FDWCxZQUFZO0tBQ1osaUJBQWlCO0dBQ25CO0FBQ0g7QUFFRSxtQkFBbUI7QUFFbkI7SUFDRSxvQkFBb0I7RUFDdEI7QUFFQTs7SUFFRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBLFVBQVU7QUFFVjtJQUNFLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9COztFQUV0QjtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMEJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVFLE1BQU0saUJBQWlCLEVBQUU7QUFDM0I7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxLQUFLO0VBQ0wsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0FBQ1I7QUFFQSxXQUFXLFNBQVMsRUFBRTtBQUd0QjtFQUNFLG1CQUFtQjtFQUNuQjtBQUNBO0VBQ0Esb0JBQW9CO0VBQ3BCO0FBR0MsOEJBQThCO0FBQy9CLDhFQUE4RTtBQUNoRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUEyRm1FO0FBQ25FLDRCQUE0QiIsImZpbGUiOiJzZWN0aW9udGhyZWUvc2VjdGlvbnRocmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGJsXzEgLCAjdGJsXzIsICN0YmxfM1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5kaXYjaGVsbG97XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1pY29uICBtb3JlX3ZlcnQgIHtcclxuICAgICBcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcclxuICAgIH1cclxuICBcclxuICAgIG1hdC1pY29uICAgbW9yZV9ob3JpentcclxuICBcclxuICAgICAgdHJhbnNmb3JtOiAnIHJvdGF0ZSgtNDVkZWcpJ1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4ud2lkdGhtYXh7XHJcbiAgbWF4LXdpZHRoOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59ICovXHJcbi5jbG9zZS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxuICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNDVweDtcclxuICBcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludFxyXG57ICAgXHJcbiAgI1ByaW50RGl2e1xyXG4gICAgQHBhZ2UgeyBzaXplOiBsYW5kc2NhcGU7IH1cclxuICB9IFxyXG4gICAgLkFjdGlvblxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5ub1ByaW50e1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxufVxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcbiAgLnJvdyBkaXZ7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmh0bWxEYXRhe1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnRocmVlU3ByZWFkIHtcclxuXHJcbm1hcmdpbjogMCA0MHB4IDQwcHggNDBweFxyXG5cclxuXHJcbn1cclxuLyogXHJcbmRpdi5pbm5lciwgZGl2Lm91dGVyIHtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG59ICovXHJcblxyXG4vKiB0YWJsZXtcclxuICB3aWR0aDogNTYxLjQ1cHQ7XHJcbn0gKi9cclxuXHJcbiAgYntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjODI3ZjdmO1xyXG4gIH1cclxuICB0YWJsZSx0ZHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOjAgMTVweDtcclxuICB9XHJcblxyXG4gICNwcmludGFibGUgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4gIEBtZWRpYSBwcmludFxyXG4gIHtcclxuICAgICAgI25vbi1wcmludGFibGUgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAgICNwcmludGFibGUgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gIH1cclxuQG1lZGlhIG9ubHkgcHJpbnQge1xyXG4gICAjaWRPZllvdXJEaXYge1xyXG4gICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgfVxyXG59XHJcblxyXG4gIC8qICBleHBhbnNpb24gY3NzICovXHJcblxyXG4gIC5leGFtcGxlLWFjdGlvbi1idXR0b25zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuICAvKiAgZW5kcyAqL1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LW1lbnUtaXRlbXtcclxuICAgIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICB9XHJcblxyXG4gIC5vdXRlci1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6cmdiKDEyMCwgMjI4LCA3OCk7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgXHJcbiAgfVxyXG4gIC5zYXZlc3tcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoMTIwLCAyMjgsIDc4KTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAub3V0ZXItZGl2ID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5IVE1Mdmlld3tcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuIFxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiIGldIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcHg7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCIgaV0ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxcHg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4gIGZvcm17IHBvc2l0aW9uOnJlbGF0aXZlOyB9IFxyXG5mb3JtLmxvY2s6OmJlZm9yZXtcclxuICBjb250ZW50OicnO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHotaW5kZXg6OTk5O1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG59XHJcblxyXG5idXR0b24ub257IGNvbG9yOnJlZDsgfVxyXG5cclxuXHJcbi5kaXNhYmxlOmhvdmVye1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIC5kaXNhYmxlOmFjdGl2ZXtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICAgLypObyBjc3MgZm9yIEhUTUwgc3RhcnRzIGhlcmUqL1xyXG4gIC8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLyogLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OlwiXCIhaW1wb3J0YW50O2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtaDEsLm1hdC1oZWFkbGluZSwubWF0LXR5cG9ncmFwaHkgaDF7Zm9udDpcIlwiIWltcG9ydGFudDttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtaDIsLm1hdC10aXRsZSwubWF0LXR5cG9ncmFwaHkgaDJ7Zm9udDpcIlwiIWltcG9ydGFudDttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6XCJcIiFpbXBvcnRhbnQ7bWFyZ2luOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWg0LC5tYXQtc3ViaGVhZGluZy0xLC5tYXQtdHlwb2dyYXBoeSBoNHtmb250OlwiXCIhaW1wb3J0YW50O21hcmdpbjpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1oNSwubWF0LXR5cG9ncmFwaHkgaDV7Zm9udDpcIlwiIWltcG9ydGFudDttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6XCJcIiFpbXBvcnRhbnQ7bWFyZ2luOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWJvZHktMiwubWF0LWJvZHktc3Ryb25ne2ZvbnQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtYm9keSwubWF0LWJvZHktMSwubWF0LXR5cG9ncmFwaHl7Zm9udDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtY2FwdGlvbiwubWF0LXNtYWxse2ZvbnQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZGlzcGxheS00LC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNHtmb250OlwiXCIhaW1wb3J0YW50O2xldHRlci1zcGFjaW5nOlwiXCIhaW1wb3J0YW50O21hcmdpbjpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6XCJcIiFpbXBvcnRhbnQ7bGV0dGVyLXNwYWNpbmc6XCJcIiFpbXBvcnRhbnQ7bWFyZ2luOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDpcIlwiIWltcG9ydGFudDtsZXR0ZXItc3BhY2luZzpcIlwiIWltcG9ydGFudDttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZGlzcGxheS0xLC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMXtmb250OlwiXCIhaW1wb3J0YW50O21hcmdpbjpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtZmxhdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LW1pbmktZmFiLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2ZvbnQtZmFtaWx5OlwiXCIhaW1wb3J0YW50O2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1idXR0b24tdG9nZ2xle2ZvbnQtZmFtaWx5OlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWNhcmR7Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jYXJkLWNvbnRlbnQsLm1hdC1jYXJkLXN1YnRpdGxle2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jaGVja2JveHtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbHtsaW5lLWhlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jaGlwe2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29ue2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC10YWJsZXtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1oZWFkZXItY2VsbHtmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jYWxlbmRhcntmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoe2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1kaWFsb2ctdGl0bGV7Zm9udDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2ZvbnQtZmFtaWx5OlwiXCIhaW1wb3J0YW50O2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudHtmb250OlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6XCJcIiFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbntmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b257aGVpZ2h0OlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb257aGVpZ2h0OlwiXCIhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzpcIlwiIWltcG9ydGFudDtib3JkZXItdG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6XCJcIiFpbXBvcnRhbnQ7cGFkZGluZy10b3A6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7Ym90dG9tOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7Zm9udC1zaXplOlwiXCIhaW1wb3J0YW50O21hcmdpbi10b3A6XCJcIiFpbXBvcnRhbnQ7dG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7cGFkZGluZy1ib3R0b206XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTpcIlwiIWltcG9ydGFudDstbXMtdHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTpcIlwiIWltcG9ydGFudDstbXMtdHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50Oy1tcy10cmFuc2Zvcm06XCJcIiFpbXBvcnRhbnQ7d2lkdGg6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtib3R0b206XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7bWFyZ2luLXRvcDpcIlwiIWltcG9ydGFudDt0b3A6XCJcIiFpbXBvcnRhbnR9XHJcbkBtZWRpYSBwcmludHsubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDpcIlwiIWltcG9ydGFudDttYXJnaW4tdG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjU5Mzc1ZW0pIHNjYWxlKC43NSk7d2lkdGg6MTMzLjMzMzMzJX1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06XCJcIiFpbXBvcnRhbnQ7d2lkdGg6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDpcIlwiIWltcG9ydGFudDttYXJnaW4tdG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06XCJcIiFpbXBvcnRhbnQ7d2lkdGg6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOlwiXCIhaW1wb3J0YW50O3dpZHRoOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIsLm1hdC1ncmlkLXRpbGUtaGVhZGVye2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOlwiXCIhaW1wb3J0YW50O292ZXJmbG93OlwiXCIhaW1wb3J0YW50O3RleHQtb3ZlcmZsb3c6XCJcIiFpbXBvcnRhbnQ7ZGlzcGxheTpcIlwiIWltcG9ydGFudDtib3gtc2l6aW5nOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOlwiXCIhaW1wb3J0YW50fVxyXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudHttYXJnaW4tdG9wOlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LW1lbnUtaXRlbXtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudDtmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlwiXCIhaW1wb3J0YW50O2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1yYWRpby1idXR0b257Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LXNlbGVjdC10cmlnZ2Vye2hlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudDtmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvcntmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zdGVwLWxhYmVsLWVycm9ye2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtmb250LXdlaWdodDpcIlwiIWltcG9ydGFudH1cclxuLm1hdC10YWItZ3JvdXB7Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWxpbmt7Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnQ7Zm9udC1zaXplOlwiXCIhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OlwiXCIhaW1wb3J0YW50fVxyXG4ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDpcIlwiIWltcG9ydGFudDttYXJnaW46XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtdG9vbHRpcHtmb250LWZhbWlseTpcIlwiIWltcG9ydGFudDtmb250LXNpemU6XCJcIiFpbXBvcnRhbnQ7cGFkZGluZy10b3A6XCJcIiFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtdG9vbHRpcC1oYW5kc2V0e2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudDtwYWRkaW5nLXRvcDpcIlwiIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1saXN0LWl0ZW17Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6XCJcIiFpbXBvcnRhbnR9XHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2ZvbnQtc2l6ZTpcIlwiIWltcG9ydGFudH1cclxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOlwiXCIhaW1wb3J0YW50fSAqL1xyXG4vKk5vIGNzcyBmb3IgSFRNTCBlbmRzIGhlcmUqLyJdfQ== */");

/***/ }),

/***/ "./src/app/components/sectionthree/sectionthree.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sectionthree/sectionthree.component.ts ***!
  \*******************************************************************/
/*! exports provided: SafeHtmlPipe, SectionthreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionthreeComponent", function() { return SectionthreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../previewhtmlpage/previewhtmlpage.component */ "./src/app/components/previewhtmlpage/previewhtmlpage.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-content-viewer */ "./src/app/components/sectionthree/dynamic-content-viewer.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _reviewcomments_reviewcomments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reviewcomments/reviewcomments.component */ "./src/app/components/reviewcomments/reviewcomments.component.ts");
/* harmony import */ var _logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../logdetails/logdetails.component */ "./src/app/components/logdetails/logdetails.component.ts");
/* harmony import */ var _upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../upload-files/upload-files.component */ "./src/app/components/upload-files/upload-files.component.ts");
/* harmony import */ var _viewpagedetails_viewpagedetails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../viewpagedetails/viewpagedetails.component */ "./src/app/components/viewpagedetails/viewpagedetails.component.ts");
/* harmony import */ var _photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../photo-upload/photo-upload.component */ "./src/app/components/photo-upload/photo-upload.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






















let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: "safeHtml" })
], SafeHtmlPipe);

// import * as $ from 'jquery';
let SectionthreeComponent = class SectionthreeComponent {
    constructor(sanitized, breakpointObserver, 
    // private http: HttpClient,
    service, router, route, spinner, sanitizer, datePipe, elementRef, dialog, modal, embeddedComponents, componentFactoryResolver) {
        this.sanitized = sanitized;
        this.service = service;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.modal = modal;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].XLarge, 'XLarge'],
        ]);
        this.showPortal = false;
        this.customCollapsedHeight = '15px';
        this.customExpandedHeight = '10px';
        this.selectors = [];
        this.CLOSE_PAGE = false;
        this.COMPUTE = false;
        this.DATA_UPLOAD = false;
        this.FILE_UPLOAD = false;
        this.PHOTO_UPLOAD = false;
        this.PRINT = false;
        this.REOPEN = false;
        this.REVIEW_COMMENTS = false;
        this.REVIEW_COMPLETE = false;
        this.SAVE = false;
        this.SAVE_VALIDATE = false;
        this.VIEW = false;
        this.show = false;
        this.showheder = false;
        this.res = 0;
        this.DateTimeArray = [];
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["Breakpoints"].XLarge,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroyed)).subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query);
                }
            }
        });
        // this.hostElement = elementRef.nativeElement;
        // for (const component of embeddedComponents.components) {
        //   const factory = componentFactoryResolver.resolveComponentFactory(component);
        //   this.selectors.push(factory.selector)
        // }
        // this.service.SharingData.next(true);
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    //   public getJSON(file): Observable<any> {debugger
    //     return this.http.get("./assets/configs/" + file + ".json");
    //   }
    // LOGOPATH:any;
    // public getSetting(){debugger
    //   // use setting here
    //   //this.getJson('setting').subscribe(url => this.somevariable = url)
    //   this.getJSON('setting').subscribe(url => 
    //     {debugger
    //       this.LOGOPATH = url.LOGO_PATH
    //     }
    //   )
    // }
    toggle() {
        this.show = !this.show;
    }
    toggleHeader() {
        this.showheder = !this.showheder;
        this.service.SharingData.next(this.showheder);
    }
    ngOnInit() {
        debugger;
        var param = this.route.snapshot.params.Id;
        var PageNo = this.route.snapshot.params.Id2;
        localStorage.setItem('PO_No', param);
        localStorage.setItem('Page', PageNo);
        this.GetSectionThreeDetails(param, PageNo);
    }
    GetIconPermission() {
        this.spinner.show();
        // var passiconp = {
        //   "userId":"UPD-A-O",
        //   "documentName":"DOC-BMR-BFLCA",
        //   "documentVersion":"8",
        //   "page":"2",
        //   "site":"Hadapsar",
        //   "department":"BFLC",
        //   "section":"Thawing",
        //   "lineStatus":"OPEN"
        // }
        var passiconp = {
            "userId": localStorage.getItem("userId"),
            "documentName": this.PageDetails.DocumentName,
            "documentVersion": this.PageDetails.Version,
            "page": this.PageDetails.Page,
            "site": this.PageDetails.Site,
            "department": this.PageDetails.Department,
            "section": this.PageDetails.Section,
            "lineStatus": this.PageDetails.LineStatus,
        };
        var datav = {
            "data": {
                "content": btoa(JSON.stringify(passiconp)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I028",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.GetIconPermissionDetails(datav).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.GetIconPermissionData = JSON.parse(atob(data.data.content)).icon;
                this.CLOSE_PAGE = this.GetIconPermissionData.CLOSE_PAGE;
                this.COMPUTE = this.GetIconPermissionData.COMPUTE;
                this.DATA_UPLOAD = this.GetIconPermissionData.DATA_UPLOAD;
                this.FILE_UPLOAD = this.GetIconPermissionData.FILE_UPLOAD;
                this.PHOTO_UPLOAD = this.GetIconPermissionData.PHOTO_UPLOAD;
                this.PRINT = this.GetIconPermissionData.PRINT;
                this.REOPEN = this.GetIconPermissionData.REOPEN;
                this.REVIEW_COMMENTS = this.GetIconPermissionData.REVIEW_COMMENTS;
                this.REVIEW_COMPLETE = this.GetIconPermissionData.REVIEW_COMPLETE;
                this.SAVE = this.GetIconPermissionData.SAVE;
                this.SAVE_VALIDATE = this.GetIconPermissionData.SAVE_VALIDATE;
                this.VIEW = this.GetIconPermissionData.VIEW;
                if (this.SAVE == false || this.SAVE_VALIDATE == false) {
                    // this.PRINT  = true
                    this.DisableAllInputs();
                }
            }
        });
    }
    GetHTMLPage() {
        // this.spinner.show();
        this.showPortal = true;
        this.passhtmldetails = {
            "documentName": this.PageDetails.DocumentName,
            "documentVersion": this.PageDetails.Version,
            "page": this.PageDetails.Page,
            "PoNo": this.PageDetails.PO_No,
        };
        // this.passhtmldetails = {
        //   "documentName":"DOC-BMR-BFLCA",
        //   "documentVersion":"8",
        //   "page":"2"
        // }
        var datav = {
            "data": {
                "content": btoa(JSON.stringify(this.passhtmldetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I027",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getPageDetails(datav).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.content = JSON.parse(atob(data.data.content)).page.HtmlCode.replace('<head>', '<head><style>.test{width:100%}</style>');
                this.ComputeFormula = JSON.parse(atob(data.data.content)).page.ComputeFormula;
                this.HtmlSavedData = JSON.parse(atob(data.data.content)).page.HtmlSavedData;
                this.photoTagData = JSON.parse(atob(data.data.content)).page.photoTagData;
                this.userHtml = this.content.replace('Â', '&nbsp;').replace(/Â/g, '').replace(/â/g, '').replace(//g, '').replace(/Ã/g, '').replace(/\n/g, '').replace(/\r/g, '');
                this.AccessLogEntry('Page load');
                this.divHello.nativeElement.innerHTML = this.content.replace('Â', '&nbsp;').replace(/Â/g, '').replace(/â/g, '').replace(//g, '').replace(/Ã/g, '');
                // .replace('<label id="comp_1" class="test" readonly="readonly">','<label id="comp_1" class="test" readonly="readonly">comp_1').replace('<label id="comp_2" class="test" readonly="readonly">','<label id="comp_2" class="test" readonly="readonly">comp_2').replace('<label id="comp_3" class="test" readonly="readonly">','<label id="comp_3" class="test" readonly="readonly">comp_3').replace('<label id="comp_4" class="test" readonly="readonly">','<label id="comp_4" class="test" readonly="readonly">comp_4');
                this.showPortal = true;
                this.testMarkup = this.sanitized.bypassSecurityTrustHtml(this.divHello.nativeElement.innerHTML);
                this.iframeUrl =
                    this.sanitizer.bypassSecurityTrustHtml(this.content);
                this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.content);
                //Commented working dtepick
                $(function () {
                    $(".datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
                });
                setTimeout(function () {
                    $('input[type="textarea"]').each(function () {
                        debugger;
                        //var style = $(this).attr('style');
                        var id = $(this).attr('id');
                        var className = $(this).attr('class');
                        var placeholder = $(this).attr('placeholder');
                        var title = $(this).attr('title');
                        var maxlength = $(this).attr('maxlength');
                        var value = $(this).attr("value");
                        var disabled = $(this).attr("disabled"), 
                        // var value = $(this).attr('value'),
                        //textbox = $(document.createElement('textarea')).attr("value", value).attr('id', id).attr('placeholder', placeholder).attr('title', title).attr('maxlength', maxlength).attr('rows', 2).attr('cols', 40).attr('class', className);
                        textbox = $(document.createElement('textarea')).html(value).attr('id', id).attr('placeholder', placeholder).attr('title', title).attr('maxlength', maxlength).attr('rows', 2).attr('cols', 100).attr('class', className).attr('disabled', disabled);
                        // jQuery(id).val(value);
                        $(document.getElementById(id)).value = "value";
                        $(this).replaceWith(textbox);
                        textbox.val(value);
                        // $(this).textbox.val(value).replace(value)
                    });
                }, 100);
                if (this.SAVE == false || this.SAVE_VALIDATE == false) {
                    // this.PRINT  = true
                    this.DisableAllInputs();
                }
                if (this.photoTagData.length != 0) {
                    this.BindphotoTagData(this.photoTagData);
                }
                //  this.divHello.nativeElement.src = this.content
                //  if (this.content) {
                //   this.build(this.content);
                // }
                // this.bindata();
                //  setTimeout(function () {
                //   this.bindata();
                // }, 1000);
                //  this.HtmlSavedData.forEach((value, index) => {debugger
                //    let setvalue =  (<HTMLInputElement>document.getElementById(value.Tag))
                //    setvalue.value = value.Data
                //  });
                this.spinner.hide();
            }
        });
    }
    GetSectionThreeDetails(Podata, page) {
        debugger;
        this.spinner.show();
        this.passdetails = {
            'PO_No': Podata,
            'page': page,
            'userId': localStorage.getItem("userId")
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I021",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getPageDetails(data).subscribe((res) => {
            debugger;
            // this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.PageDetails = JSON.parse(atob(data.data.content)).page;
                //  if(IsPermission == true){
                //    //
                //  }
                //  else
                //  {
                //    //Alert No authority site,department,section
                //  }
                localStorage.setItem('Authlevel', this.PageDetails.Authlevel);
                this.GetHTMLPage();
                this.GetIconPermission();
            }
        });
    }
    AccessLogEntry(Chat) {
        debugger;
        // var arr = {
        //   "userid": "UPD-A-M",
        //   "datetime": "2021-04-29 21:35:04.373",
        //   "chat": "Page-load-API-CALL"
        // }
        var log = {
            "userid": localStorage.getItem("userId"),
            "datetime": new Date(),
            "chat": Chat
        };
        this.Logdata = {
            'PO_No': this.PageDetails.PO_No,
            'page': this.PageDetails.Page,
            'Log': JSON.stringify(log)
        };
        // 'Log': '{"userid": localStorage.getItem("userId") ,"datetime": "2021-04-29 21:35:04.373","chat": "Page-load-API-CALL"}'
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.Logdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I022",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.updateLogStatus(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var msg = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (JSON.parse(msg).responseModel.status == true) {
                    // this.dialog.openDialog(JSON.parse(msg).responseModel.msg,'Success');
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog('Access Log' + data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    COMPUTEClick() {
        debugger;
        this.AccessLogEntry('Button Click - COMPUTE');
        this.spinner.show();
        this.ComputeFormula.forEach((value, index) => {
            this.res = 0;
            this.DateTimeArray = [];
            var Comptag = this.ComputeFormula[index].Comptag.replace('#', '').replace('$', '').replace(/\s/g, "");
            if (this.ComputeFormula[index].TagFormula.indexOf('dt') > -1) {
                var aftersplit = this.ComputeFormula[index].TagFormula.split("-");
                aftersplit.forEach((value, index) => {
                    var arrray = value.split('&');
                    var valuarray = [];
                    arrray.forEach((value, index) => {
                        var valuofID = document.getElementById(value.replace('#', '').replace('$', '').replace(/\s/g, ""));
                        valuarray.push(valuofID.value);
                    });
                    //  valuarray.join(" ");
                    this.DateTimeArray.push({ Date: valuarray.join(" ") });
                });
                this.CalculateCompTime(this.DateTimeArray[0].Date, this.DateTimeArray[1].Date, Comptag);
            }
            else if (this.ComputeFormula[index].TagFormula.indexOf('comp') > -1) {
                var aftersplit = this.ComputeFormula[index].TagFormula.split("+");
                aftersplit.forEach((value, index) => {
                    this.checkvalue = document.getElementById(value.replace('#', '').replace('$', '').replace(/\s/g, ""));
                    if (this.checkvalue.innerHTML != "") {
                        this.res += parseFloat(this.checkvalue.innerHTML);
                    }
                });
                calculate(Comptag, this.res);
            }
            else if (this.ComputeFormula[index].TagFormula.indexOf('dt') == -1 && this.ComputeFormula[index].TagFormula.indexOf('tm') > -1) {
                var aftersplit = this.ComputeFormula[index].TagFormula.split("-");
                aftersplit.forEach((value, index) => {
                    debugger;
                    var arrray = value.split('&');
                    var valuarray = [];
                    arrray.forEach((value, index) => {
                        var valuofID = document.getElementById(value.replace('#', '').replace('$', '').replace(/\s/g, ""));
                        valuarray.push(valuofID.value);
                    });
                    //  valuarray.join(" ");
                    this.DateTimeArray.push({ Date: valuarray.join(" ") });
                });
                this.CalculateCompOnlyTime(this.DateTimeArray[0].Date, this.DateTimeArray[1].Date, Comptag);
            }
            else {
                var aftersplit = this.ComputeFormula[index].TagFormula.split("+");
                aftersplit.forEach((value, index) => {
                    this.checkvalue = document.getElementById(value.replace('#', '').replace('$', '').replace(/\s/g, ""));
                    if (this.checkvalue.value != "") {
                        this.res += parseFloat(this.checkvalue.value);
                    }
                });
                calculate(Comptag, this.res.toFixed(1));
            }
            function calculate(Comptag, resp) {
                debugger;
                document.getElementById(Comptag).innerHTML = resp;
            }
        });
        this.spinner.hide();
    }
    SignatureClick(SignId) {
        debugger;
        document.getElementById(SignId).innerHTML = "UserIdDte";
    }
    CalculateCompTime(FutureDate, currentdate, Comptag) {
        debugger;
        var inputJSON = {
            "created_date": currentdate.toLocaleString("en-IN"),
            "FutureDate": FutureDate.toLocaleString("en-IN")
        };
        function getDataDiff(startDate, endDate) {
            // var diff = endDate.getTime() - startDate.getTime();
            // var days = Math.floor(diff / (60 * 60 * 24 * 1000));
            // // var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
            // var hours = Math.floor(diff / (60 * 60 * 1000));
            // var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
            // var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
            // return { day: days, hour: hours, minute: minutes, second: seconds};
            var diff = (endDate - startDate) / 1000;
            diff = Math.floor(diff);
            var days = Math.floor(diff / (24 * 60 * 60));
            var leftSec = diff - days * 24 * 60 * 60;
            var hrs = Math.floor(leftSec / (60 * 60));
            var leftSec = leftSec - hrs * 60 * 60;
            var min = Math.floor(leftSec / (60));
            var leftSec = leftSec - min * 60;
            var hours = hrs + 24 * days;
            var mins = min + leftSec / 60;
            console.info("You have " + days + " days " + hrs + " hours " + min + " minutes and " + leftSec + " seconds");
            // return {
            //     d: days,
            //     h: hrs,
            //     i: min,
            //     s: leftSec
            // };
            return { hour: hours, min: mins };
        }
        // var createdate = inputJSON.created_date.getDate() + inputJSON.created_date.getMonth() + inputJSON.created_date.getFullYear()
        var initial = inputJSON.created_date.split(/\//);
        var created_dateFormated = [initial[1], initial[0], initial[2]].join('/');
        var initial2 = inputJSON.FutureDate.split(/\//);
        var FutureDateFormated = [initial2[1], initial2[0], initial2[2]].join('/');
        var diff = getDataDiff(new Date(created_dateFormated), new Date(FutureDateFormated));
        //var diff = getDataDiff(this.datePipe.transform(inputJSON.created_date, 'EEEE, MMMM d, y, h:mm:ss a zzzz'),this.datePipe.transform(inputJSON.current_time, 'EEEE, MMMM d, y, h:mm:ss a zzzz'));
        console.log(diff);
        if (diff.hour > 0) {
            document.getElementById(Comptag).innerHTML = diff.hour.toString() + "h:" + diff.min.toString() + "m";
        }
    }
    CalculateCompOnlyTime(FutureDate, currentdate, Comptag) {
        debugger;
        var inputJSON = {
            "created_date": currentdate,
            "current_time": FutureDate
        };
        function getDataDiff(startDate, endDate) {
            var timeStart = new Date("01/01/2007 " + startDate).getHours();
            var timeEnd = new Date("01/01/2007 " + endDate).getHours();
            var timeStartmin = new Date("01/01/2007 " + startDate).getMinutes();
            var timeEndmin = new Date("01/01/2007 " + endDate).getMinutes();
            var hourDiff = timeEnd - timeStart;
            var minDiff = timeEndmin - timeStartmin;
            var newhourDiff;
            var newminDiff;
            if (minDiff < 0) {
                newhourDiff = hourDiff - 1;
                newminDiff = 60 + minDiff;
            }
            return { hour: newhourDiff, min: newminDiff };
        }
        var diff = getDataDiff(inputJSON.created_date, inputJSON.current_time);
        console.log(diff);
        if (diff.hour > 0) {
            document.getElementById(Comptag).innerHTML = diff.hour.toString() + "h:" + diff.min.toString() + "m";
        }
    }
    SaveButton() {
        debugger;
        this.AccessLogEntry('Button Click - Save');
        var dynamarray = [];
        var arrayfind = this.HtmlSavedData;
        var test;
        $('.test').each(function () {
            var testId = $(this).attr('id');
            var flagBlank = 0;
            // if (testId == 'cb_1')
            // {
            //    alert('cb_1'+ $(this).val());
            // }
            // if (testId == 'cb_2')
            // {
            //    alert('cb_2'+ $(this).val());
            // }
            // if($(this).is(':checked') == true){
            //   test = 'Yes'
            // }
            // else
            // {
            //   test = 'No'
            // }
            var findidd = arrayfind.find(x => x.Tag === testId);
            if ($(this)[0].nodeName == 'LABEL' && testId != $(this).text()) {
                test = $(this).text();
            }
            else {
                if ($(this).val() != 'Select Option') {
                    if ($(this).attr('type') == 'checkbox') {
                        if (($(this).is(':checked')) == true) {
                            test = 'Yes';
                            // alert(testId+ $(this).is(':checked') + $(this).attr('type') + test);
                        }
                        else {
                            test = 'No';
                            //  alert(testId+ $(this).is(':checked') + $(this).attr('type') + test);
                        }
                    }
                    // else if($(this).attr('type') == 'date'){
                    //   test = $(this).val()
                    //   test = test.split('-')[2] +'-'+ test.split('-')[1] +'-'+ test.split('-')[0]
                    //   //test = moment().format('l');
                    // }
                    else {
                        if (testId.indexOf('c200') > -1) {
                            test = $(this).val().replace(/[^a-zA-Z0-9 ]/g, '');
                            ;
                        }
                        else {
                            test = $(this).val().replace(/\n/g, ' ');
                        }
                        // test = $(this).val().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                        // test = $(this).val().replace(/'\'/g, ' ');
                    }
                }
                else {
                    test = "";
                }
            }
            // var inputs = document.querySelectorAll('.test');   
            // for (var i = 0; i < inputs.length; i++) {   
            //   var ischecked= $(this).is(':checked');
            // } 
            // $("input:checkbox").change(function() {
            //               var ischecked= $(this).is(':checked');
            //               if(!ischecked)
            //                 alert('uncheckd ' + $(this).val());
            //           }); 
            //var formid = document.getElementById('hdnOp');
            if (findidd != undefined) {
                debugger;
                // findidd.data
                if (findidd.Data != "" && test == "") {
                    flagBlank = 1;
                }
            }
            if (test != "" || flagBlank == 1) {
                // if (test != "") {
                //debugger
                //alert(testId + " : " + test);
                var pssdata = {
                    // formid: formid,
                    Tag: testId,
                    DataElement: test
                };
                dynamarray.push(pssdata);
                //dynamarray += "<Tagdetails><formid>" + formid + "</formid><Tag>" + testId + "</Tag><data_element>" + tes + "</data_element></Tagdetails>";
            }
            else {
                test = "";
            }
        });
        if (dynamarray.length < 1) {
            this.dialog.openDialog("Please enter some value", 'Error');
        }
        else {
            var saveData = {
                "PONo": this.PageDetails.PO_No,
                "Page": this.PageDetails.Page,
                "IsValidate": "False",
                "userId": localStorage.getItem("userId"),
                "HtmlTags": dynamarray
            };
            var data = {
                "data": {
                    "content": btoa(JSON.stringify(saveData)),
                    "encryptCode": ""
                },
                "globalInfo": {
                    "latitude": "2.32.34.00",
                    "langitude": "12.232.12",
                    "deviceNo": "Hp",
                    "userName": localStorage.getItem("username"),
                    "requestTime": new Date(),
                    "interfaceCode": "I030",
                    "UserCategory": localStorage.getItem("userCategory"),
                    "userId": localStorage.getItem("userId")
                },
                "returnStateInfo": {
                    "returnMessage": "",
                    "returnCode": ""
                }
            };
            this.spinner.show();
            this.service.SaveBtnClick(data).subscribe((res) => {
                debugger;
                var data = JSON.parse(res);
                var msg = atob(data.data.content);
                if (data.returnStateInfo.returnMessage == 'Success') {
                    //    if(JSON.parse(msg).responseModel.status == true){
                    //     this.dialog.openDialog(JSON.parse(msg).responseModel.msg,'Success');
                    //    }
                    //    else
                    //  {
                    //    this.dialog.openDialog(JSON.parse(msg).responseModel.msg,'Error')
                    //  }
                    this.dialog.openDialog(msg, 'Success');
                    // this.divHello.nativeElement.setAttribute('readonly', true);
                    // this.divHello.nativeElement.readOnly = true;
                    // this.CloseAllbtninoneClick();
                    // this.DisableAllInputs();
                    this.router.navigate(['/pagelist', this.route.snapshot.params.Id]);
                }
                else {
                    this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
                }
                this.spinner.hide();
            });
        }
    }
    CloseAllbtninoneClick() {
        debugger;
        this.CLOSE_PAGE = false;
        this.COMPUTE = false;
        this.DATA_UPLOAD = false;
        this.FILE_UPLOAD = false;
        this.PHOTO_UPLOAD = false;
        //  this.PRINT = true;
        this.REOPEN = false;
        this.REVIEW_COMMENTS = false;
        this.REVIEW_COMPLETE = false;
        this.SAVE = false;
        //  this.SAVE_VALIDATE = this.GetIconPermissionData.SAVE_VALIDATE
    }
    BindphotoTagData(pData) {
        debugger;
        pData.forEach((value, index) => {
            debugger;
            let setvalue = document.getElementById('c' + value.Tag);
            // let BtnId =  (<HTMLInputElement>document.getElementById('B1'+value.Tag))
            // let OpenCamId =  (<HTMLInputElement>document.getElementById('C1'+value.Tag))
            // BtnId.disabled = true;
            // OpenCamId.disabled = true;
            //setvalue.value = value.Data
            $('label[id="' + 'c' + value.Tag + '"]').each(function () {
                debugger;
                var id = $(this).attr('id');
                var className = $(this).attr('class');
                var width = '400';
                var height = '300';
                canvas = $(document.createElement('canvas')).attr('id', id).attr('width', width).attr('height', height);
                $(this).replaceWith(canvas);
            });
            var canvas = document.getElementById('c' + value.Tag);
            var context = canvas.getContext('2d');
            // var context = canvas.getContext('2d');
            //var video = document.getElementById(TagId);
            // context.drawImage(value.Data, 0, 0, 624, 336)
            var image = new Image();
            image.onload = function () {
                context.drawImage(image, 0, 0);
            };
            image.src = "data:image/png;base64," + value.Data + "";
        });
    }
    bindata() {
        this.HtmlSavedData.forEach((value, index) => {
            debugger;
            let setvalue = document.getElementById(value.Tag);
            setvalue.value = value.Data;
        });
    }
    DisableAllInputs() {
        debugger;
        $('.test').each(function () {
            debugger;
            var testId = $(this).attr('id');
            $(this).attr('readonly', 'readonly');
            var dd = document.getElementById(testId);
            dd.disabled = true;
            document.getElementById(testId).setAttribute('disabled', 'disabled');
        });
        //              form = document.forms[0], // form element to be "readonly"
        //     btn1 = document.querySelectorAll('button')[0],
        //     btn2 = document.querySelectorAll('button')[1]
        // btn1.addEventListener('click', lockForm)
        // btn2.addEventListener('click', lockFormByCSS)
        // function lockForm(){
        //   btn1.classList.toggle('on');
        //   [].slice.call( form.elements ).forEach(function(item){
        //       item.disabled = !item.disabled;
        //   });
        // }
        // function lockFormByCSS(){
        //   btn2.classList.toggle('on');
        //   form.classList.toggle('lock');
        // }
        // this.divHello.nativeElement.setAttribute('readonly', true);
        // this.divHello.nativeElement.readOnly = true;
    }
    PageLineSChangeClick(LineStatus, btnName) {
        this.spinner.show();
        this.AccessLogEntry('Button Click -' + btnName);
        var CloseClickdata = {
            "po_no": this.PageDetails.PO_No,
            "page": this.PageDetails.Page,
            "line_status": LineStatus
            // "OPEN" or "CLOSE"  or "REVIEW" 
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(CloseClickdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I034",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.updateLogStatus(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var msg = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (JSON.parse(msg).responseModel.status == true) {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                    this.router.navigate(['/pagelist', this.route.snapshot.params.Id]);
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    AccesCommentsView(data, Type) {
        this.AccessLogEntry('Button Click - Review Comments');
        const dialogRef = this.modal.open(_reviewcomments_reviewcomments_component__WEBPACK_IMPORTED_MODULE_13__["ReviewcommentsComponent"], {
            // disableClose: true,
            height: '77%',
            width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
    ValidateIconClick() {
        debugger;
        //save before validate starts here
        var dynamarray = [];
        var test;
        $('.test').each(function () {
            var testId = $(this).attr('id');
            if ($(this)[0].nodeName == 'LABEL' && testId != $(this).text()) {
                test = $(this).text();
            }
            else {
                if ($(this).val() != 'Select Option') {
                    if ($(this).attr('type') == 'checkbox') {
                        if (($(this).is(':checked')) == true) {
                            test = 'Yes';
                            // alert(testId+ $(this).is(':checked') + $(this).attr('type') + test);
                        }
                        else {
                            test = 'No';
                            //  alert(testId+ $(this).is(':checked') + $(this).attr('type') + test);
                        }
                    }
                    else {
                        test = $(this).val().replace(/\n/g, ' ');
                    }
                }
                else {
                    test = "";
                }
            }
            if (test != "") {
                var pssdata = {
                    // formid: formid,
                    Tag: testId,
                    DataElement: test
                };
                dynamarray.push(pssdata);
                //dynamarray += "<Tagdetails><formid>" + formid + "</formid><Tag>" + testId + "</Tag><data_element>" + tes + "</data_element></Tagdetails>";
            }
        });
        if (dynamarray.length < 1) {
            this.dialog.openDialog("Please enter some value", 'Error');
        }
        else {
            var saveData = {
                "PONo": this.PageDetails.PO_No,
                "Page": this.PageDetails.Page,
                "IsValidate": "False",
                "userId": localStorage.getItem("userId"),
                "HtmlTags": dynamarray
            };
            var data = {
                "data": {
                    "content": btoa(JSON.stringify(saveData)),
                    "encryptCode": ""
                },
                "globalInfo": {
                    "latitude": "2.32.34.00",
                    "langitude": "12.232.12",
                    "deviceNo": "Hp",
                    "userName": localStorage.getItem("username"),
                    "requestTime": new Date(),
                    "interfaceCode": "I030",
                    "UserCategory": localStorage.getItem("userCategory"),
                    "userId": localStorage.getItem("userId")
                },
                "returnStateInfo": {
                    "returnMessage": "",
                    "returnCode": ""
                }
            };
            this.spinner.show();
            this.service.SaveBtnClick(data).subscribe((res) => {
                debugger;
                var data = JSON.parse(res);
                var msg = atob(data.data.content);
                if (data.returnStateInfo.returnMessage == 'Success') {
                    this.dialog.openDialog(msg, 'Success');
                    // this.router.navigate(['/pagelist', this.route.snapshot.params.Id]);
                }
                else {
                    this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
                }
                this.spinner.hide();
            });
        }
        //validate starts here
        this.spinner.show();
        this.AccessLogEntry('Button Click - Validate');
        this.passdetails = {
            'PO_No': this.PageDetails.PO_No,
            'page': this.PageDetails.Page,
            'userId': localStorage.getItem("userId"),
            //'usp_Name': 'sp_'+this.PageDetails.PO_No.trim() +'_'+ this.PageDetails.Page.trim() +'_'+ this.PageDetails.DocumentName.trim() +'_'+ this.PageDetails.Version,
            'usp_Name': 'sp_' + this.PageDetails.DocumentName.trim() + '_' + this.PageDetails.Version + '_' + this.PageDetails.Page.trim()
            // "documentName": this.PageDetails.DocumentName,
            // "documentVersion": this.PageDetails.Version,
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I036",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getvalidateiconclik(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                // this.dialog.openDialog(atob(data.data.content),'Success');
                //  this.PageDetails = atob(data.data.content);
                if (JSON.parse(atob(data.data.content)).responseModel.status == true) {
                    this.dialog.openDialog(JSON.parse(atob(data.data.content)).responseModel.msg, 'Success');
                }
                else {
                    this.dialog.openDialog(JSON.parse(atob(data.data.content)).responseModel.msg, 'Error');
                }
            }
        });
    }
    AccesLogView(data, Type) {
        this.AccessLogEntry('Button Click - Review Complete');
        const dialogRef = this.modal.open(_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_14__["LogdetailsComponent"], {
            // disableClose: true,
            // height: '77%',
            // width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            if (result != "" && result != undefined && result != null) {
                this.CallReviewStatusChange(result);
            }
        });
    }
    CallReviewStatusChange(result) {
        this.spinner.show();
        var CloseClickdata = {
            "PO_No": this.PageDetails.PO_No,
            "page": this.PageDetails.Page,
            "status": result
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(CloseClickdata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I037",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.updateLogStatus(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var msg = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                if (JSON.parse(msg).responseModel.status == true) {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                    this.router.navigate(['/pagelist', this.route.snapshot.params.Id]);
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    PrintPage() {
        debugger;
        var date = new Date();
        const printLogo = this.divLogo.nativeElement.innerHTML;
        const printContent = this.divHello.nativeElement.innerHTML;
        const PrintDivIt = this.PrintDivIt.nativeElement.innerHTML;
        const PrintDivIt1 = this.PrintDivIt1.nativeElement.innerHTML;
        const PrintDivPo = this.PrintDivPo.nativeElement.innerHTML;
        const PrintDivPo1 = this.PrintDivPo1.nativeElement.innerHTML;
        const PrintDivPg = this.PrintDivPg.nativeElement.innerHTML;
        const PrintDivPg1 = this.PrintDivPg1.nativeElement.innerHTML;
        const PrintDivLn = this.PrintDivLn.nativeElement.innerHTML;
        const PrintDivLn1 = this.PrintDivLn1.nativeElement.innerHTML;
        const PrintDivBh = this.PrintDivBh.nativeElement.innerHTML;
        const PrintDivBh1 = this.PrintDivBh1.nativeElement.innerHTML;
        const PrintDivHd = this.PrintDivHd.nativeElement.innerHTML;
        const PrintDivHd1 = this.PrintDivHd1.nativeElement.innerHTML;
        const PrintDivAl = this.PrintDivAl.nativeElement.innerHTML;
        const PrintDivAl1 = this.PrintDivAl1.nativeElement.innerHTML;
        const PrintDivSn = this.PrintDivSn.nativeElement.innerHTML;
        const PrintDivSn1 = this.PrintDivSn1.nativeElement.innerHTML;
        const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        var combined = document.createElement('div');
        // combined.innerHTML = printLogo + PrintDiv + printContent; // a little spacing
        document.title = 'Po_' + this.PageDetails.PO_No + '_' + 'Page_' + this.PageDetails.Page;
        WindowPrt.document.write(("<br /><br /><b>" + date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear() + ' ' + date.toLocaleTimeString() + "</b><br /><br /><br /><br />"));
        WindowPrt.document.write('<html><head><title>' + document.title + '</title>');
        WindowPrt.document.write(' <style> td{padding-right:10px;} .noPrint{display:inline-block;} .test{width:100%} body{display:inline-block;}@page { size: landscape;margin: 1cm 1cm 1cm 1cm; }</style>');
        WindowPrt.document.write('</head><body >');
        // WindowPrt.document.write(combined.innerHTML);
        WindowPrt.document.write(printLogo);
        WindowPrt.document.write('<br /><br /><table style="width: 100%; border-collapse: separate;"><tr><td>');
        WindowPrt.document.write(PrintDivIt.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td >');
        WindowPrt.document.write(PrintDivPo.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivPg.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivLn.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivBh.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivHd.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivAl.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivSn.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td></tr><tr><td>');
        WindowPrt.document.write(PrintDivIt1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivPo1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivPg1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivLn1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivBh1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivHd1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivAl1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td><td>');
        WindowPrt.document.write(PrintDivSn1.replace('max-width', 'xmax-width'));
        WindowPrt.document.write('</td></tr></table><br /><br />');
        WindowPrt.document.write(printContent);
        console.log(printContent);
        WindowPrt.document.write('</body></html>');
        // let content = "<html><head><title> + document.title + </title> <style>div#PrintDiv{display:inline-block;} body{display:inline-block;}@page { size: landscape;margin: 1cm 1cm 1cm 1cm; }</style> </head><body > combined.innerHTML </body></html>"
        // WindowPrt.document.write(("<br /><br /><b>" + date.getDate() + ' ' + date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear() + ' ' + date.toLocaleTimeString() + "</b><br /><br /><br /><br />"));
        WindowPrt.document.close();
        WindowPrt.focus();
        WindowPrt.print();
        WindowPrt.close();
    }
    FileUploadView() {
        debugger;
        this.AccessLogEntry('Button Click - File Upload');
        const dialogRef = this.modal.open(_upload_files_upload_files_component__WEBPACK_IMPORTED_MODULE_15__["UploadFilesComponent"], {
            // disableClose: true,
            height: '77%',
            width: '77%',
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
        });
    }
    DataUploadClick() {
        this.spinner.show();
        this.AccessLogEntry('Button Click - Data Upload');
        var DataUploaddata = {
            "PO_No": this.PageDetails.PO_No,
            "page": this.PageDetails.Page,
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(DataUploaddata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I039",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.DataUploadClick(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            var msg = atob(data.data.content);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                // JSON.parse(atob(data.data.content)).datas
                if (JSON.parse(msg).responseModel.status == true) {
                    debugger;
                    this.HtmlSavedData = JSON.parse(JSON.parse(msg).result).datas;
                    this.HtmlSavedData.forEach((value, index) => {
                        debugger;
                        if (value.Tag.trim().indexOf('cb') > -1) {
                            if (value.Data_element == "Yes") {
                                let setvalue = document.getElementById(value.Tag.trim());
                                setvalue.checked = true;
                            }
                        }
                        else {
                            let setvalue = document.getElementById(value.Tag.trim());
                            if (setvalue.value == "" || setvalue.value == "Select Option") {
                                setvalue.value = value.Data_element;
                            }
                        }
                    });
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                    // this.router.navigate(['/pagelist',this.route.snapshot.params.Id]);
                }
                else {
                    this.dialog.openDialog(JSON.parse(msg).responseModel.msg, 'Error');
                }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    ViewPageClick() {
        debugger;
        const dialogRef = this.modal.open(_viewpagedetails_viewpagedetails_component__WEBPACK_IMPORTED_MODULE_16__["ViewpagedetailsComponent"], {
            // disableClose: true,
            height: '77%',
            width: '77%',
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
        });
    }
    viewhtml() {
        const dialogRef = this.modal.open(_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_4__["PreviewhtmlpageComponent"], {
            height: '100%',
            width: '100%',
            data: {
                Htmlpage: this.content
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
        });
    }
    PhotoUploadView() {
        debugger;
        this.AccessLogEntry('Button Click - Photo Upload');
        const dialogRef = this.modal.open(_photo_upload_photo_upload_component__WEBPACK_IMPORTED_MODULE_17__["PhotoUploadComponent"], {
            // disableClose: true,
            height: '77%',
            width: '77%',
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
        });
    }
};
SectionthreeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["BreakpointObserver"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__["FetchapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: _dynamic_content_viewer__WEBPACK_IMPORTED_MODULE_10__["EmbeddedComponents"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("userHtml", { static: false })
], SectionthreeComponent.prototype, "userHtml", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], { static: false })
], SectionthreeComponent.prototype, "accordion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('logo', { static: false })
], SectionthreeComponent.prototype, "divLogo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('hello', { static: false })
], SectionthreeComponent.prototype, "divHello", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivIt', { static: false })
], SectionthreeComponent.prototype, "PrintDivIt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivIt1', { static: false })
], SectionthreeComponent.prototype, "PrintDivIt1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivPo', { static: false })
], SectionthreeComponent.prototype, "PrintDivPo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivPo1', { static: false })
], SectionthreeComponent.prototype, "PrintDivPo1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivPg', { static: false })
], SectionthreeComponent.prototype, "PrintDivPg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivPg1', { static: false })
], SectionthreeComponent.prototype, "PrintDivPg1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivLn', { static: false })
], SectionthreeComponent.prototype, "PrintDivLn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivLn1', { static: false })
], SectionthreeComponent.prototype, "PrintDivLn1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivBh', { static: false })
], SectionthreeComponent.prototype, "PrintDivBh", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivBh1', { static: false })
], SectionthreeComponent.prototype, "PrintDivBh1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivHd', { static: false })
], SectionthreeComponent.prototype, "PrintDivHd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivHd1', { static: false })
], SectionthreeComponent.prototype, "PrintDivHd1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivAl', { static: false })
], SectionthreeComponent.prototype, "PrintDivAl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivAl1', { static: false })
], SectionthreeComponent.prototype, "PrintDivAl1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivSn', { static: false })
], SectionthreeComponent.prototype, "PrintDivSn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('PrintDivSn1', { static: false })
], SectionthreeComponent.prototype, "PrintDivSn1", void 0);
SectionthreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sectionthree',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sectionthree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sectionthree/sectionthree.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('ngIfAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animateChild"])())
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('easeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
                        opacity: 0
                    }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sectionthree.component.css */ "./src/app/components/sectionthree/sectionthree.component.css")).default]
    })
], SectionthreeComponent);



/***/ }),

/***/ "./src/app/components/upload-files/upload-files.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/upload-files/upload-files.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-button{\r\n    float: right;\r\n    top:-34px;\r\n    right:-14px;\r\n  }\r\n  /* .close.mat-button {\r\n    position: inherit;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 2px;\r\n    line-height: 3px;\r\n    min-width: auto;\r\n  } */\r\n  .close-icon {\r\n    transition: 1s ease-in-out;\r\n  }\r\n  .close-icon:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1maWxlcy91cGxvYWQtZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7Ozs7Ozs7S0FPRztFQUNIO0lBQ0UsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoidXBsb2FkLWZpbGVzL3VwbG9hZC1maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWJ1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRvcDotMzRweDtcclxuICAgIHJpZ2h0Oi0xNHB4O1xyXG4gIH1cclxuICAvKiAuY2xvc2UubWF0LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDNweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9ICovXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/upload-files/upload-files.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-files/upload-files.component.ts ***!
  \*******************************************************************/
/*! exports provided: UploadFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesComponent", function() { return UploadFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





let UploadFilesComponent = class UploadFilesComponent {
    // selectedFiles: FileList;
    // progressInfos = [];
    // message = '';
    // fileInfos: Observable<any>;
    // FilesLists: any;
    // array :any 
    // file: File = null;
    // fileArray: File[];
    // cardImageBase64: any;
    // isImageSaved: boolean;
    // imageError: string;
    // response: any;
    constructor(service, dialogRef, dialog, modal) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.modal = modal;
        this.fileExtensionError = false;
        this.GetFiles = [];
    }
    ngOnInit() {
        debugger;
        // this.fileInfos = this.uploadService.getFiles();
    }
    onFileSelect(event) {
        debugger;
        if (event.target.files.length > 0) {
            var allowedExtensions = ["jpg", "jpeg", "png", "pdf", "docx", "JPG", "JPEG", "JFIF", "BMP", "SVG", "PDF", "DOCX"];
            var file = event.target.files[0];
            this.photoName = file.name;
            this.fileExtension = this.photoName.split('.').pop();
            if (this.isInArray(allowedExtensions, this.fileExtension)) {
                this.fileExtensionError = false;
            }
            else {
                this.dialog.openDialog("Only " + allowedExtensions + " files are allowed", 'Error');
                this.fileExtensionError = true;
                // let setvalue =  (<HTMLInputElement>document.getElementById('File1'))
                // setvalue.value = "";
                // file = null;
            }
            if (this.fileExtensionError == false) {
                if (file) {
                    debugger;
                    var reader = new FileReader();
                    reader.onloadend = (e) => {
                        debugger;
                        var contents = e.target.result;
                        this.photoContent = contents.split(',')[1];
                        this.GetFiles.push({
                            "Base64File": this.photoContent,
                            "FileName": this.photoName,
                            "FileType": 'F'
                        });
                    };
                    reader.readAsDataURL(file);
                    //  this.UploagePageForm.patchValue({    
                    //   "Doc":"Done",    
                    // });
                    //  this.UploagePageForm.get('Doc').setValue('Done');
                }
                else {
                    alert("Failed to load file");
                }
            }
        }
    }
    /*- checks if word exists in array -*/
    isInArray(array, word) {
        return array.indexOf(word.toLowerCase()) > -1;
    }
    delectedItem(index) {
        debugger;
        this.GetFiles.splice(index, 1);
    }
    uploadFilesClick() {
        debugger;
        //this.progressInfos[idx] = { value: 0, fileName: file.name };
        var passdetails = {
            'PO_No': localStorage.getItem("PO_No"),
            'page': localStorage.getItem("Page"),
            'userId': localStorage.getItem("userId"),
            "GetFiles": this.GetFiles
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I038",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getFileUpload(data).subscribe((res) => {
            debugger;
            //this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                this.response = JSON.parse(atob(data.data.content));
                if (this.response.responseModel.status == true) {
                    this.dialog.openDialog(this.response.responseModel.msg, 'Success');
                    this.GetFiles = null;
                    this.dialogRef.close();
                }
                else {
                    this.dialog.openDialog(this.response.responseModel.msg, 'Error');
                }
            }
        });
    }
};
UploadFilesComponent.ctorParameters = () => [
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_2__["FetchapiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
UploadFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-files',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload-files/upload-files.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-files.component.css */ "./src/app/components/upload-files/upload-files.component.css")).default]
    })
], UploadFilesComponent);



/***/ }),

/***/ "./src/app/components/uploadpage/demo-data.ts":
/*!****************************************************!*\
  !*** ./src/app/components/uploadpage/demo-data.ts ***!
  \****************************************************/
/*! exports provided: BANKS, BANKGROUPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANKS", function() { return BANKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANKGROUPS", function() { return BANKGROUPS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** list of banks */
const BANKS = [
    { name: 'Bank A (Switzerland)', id: 'A' },
    { name: 'Bank B (Switzerland)', id: 'B' },
    { name: 'Bank C (France)', id: 'C' },
    { name: 'Bank D (France)', id: 'D' },
    { name: 'Bank E (France)', id: 'E' },
    { name: 'Bank F (Italy)', id: 'F' },
    { name: 'Bank G (Italy)', id: 'G' },
    { name: 'Bank H (Italy)', id: 'H' },
    { name: 'Bank I (Italy)', id: 'I' },
    { name: 'Bank J (Italy)', id: 'J' },
    { name: 'Bank Kolombia (United States of America)', id: 'K' },
    { name: 'Bank L (Germany)', id: 'L' },
    { name: 'Bank M (Germany)', id: 'M' },
    { name: 'Bank N (Germany)', id: 'N' },
    { name: 'Bank O (Germany)', id: 'O' },
    { name: 'Bank P (Germany)', id: 'P' },
    { name: 'Bank Q (Germany)', id: 'Q' },
    { name: 'Bank R (Germany)', id: 'R' }
];
/** list of bank groups */
const BANKGROUPS = [
    {
        name: 'Switzerland',
        banks: [
            { name: 'Bank A', id: 'A' },
            { name: 'Bank B', id: 'B' }
        ]
    },
    {
        name: 'France',
        banks: [
            { name: 'Bank C', id: 'C' },
            { name: 'Bank D', id: 'D' },
            { name: 'Bank E', id: 'E' },
        ]
    },
    {
        name: 'Italy',
        banks: [
            { name: 'Bank F', id: 'F' },
            { name: 'Bank G', id: 'G' },
            { name: 'Bank H', id: 'H' },
            { name: 'Bank I', id: 'I' },
            { name: 'Bank J', id: 'J' },
        ]
    },
    {
        name: 'United States of America',
        banks: [
            { name: 'Bank Kolombia', id: 'K' },
        ]
    },
    {
        name: 'Germany',
        banks: [
            { name: 'Bank L', id: 'L' },
            { name: 'Bank M', id: 'M' },
            { name: 'Bank N', id: 'N' },
            { name: 'Bank O', id: 'O' },
            { name: 'Bank P', id: 'P' },
            { name: 'Bank Q', id: 'Q' },
            { name: 'Bank R', id: 'R' }
        ]
    }
];


/***/ }),

/***/ "./src/app/components/uploadpage/uploadpage.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/uploadpage/uploadpage.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test{\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZHBhZ2UvdXBsb2FkcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InVwbG9hZHBhZ2UvdXBsb2FkcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/uploadpage/uploadpage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/uploadpage/uploadpage.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadpageComponent", function() { return UploadpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo-data */ "./src/app/components/uploadpage/demo-data.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _computegrid_computegrid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../computegrid/computegrid.component */ "./src/app/components/computegrid/computegrid.component.ts");
/* harmony import */ var src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/computegrid/globalvar */ "./src/app/components/computegrid/globalvar.ts");













let UploadpageComponent = class UploadpageComponent {
    constructor(fb, spinner, dialog, service, modal, el, elementRef) {
        this.fb = fb;
        this.spinner = spinner;
        this.dialog = dialog;
        this.service = service;
        this.modal = modal;
        this.el = el;
        this.showPortal = false;
        this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_9__["BANKS"];
        // @Input() placeholderLabel = 'Search';
        /** control for the selected bank */
        this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** control for the MatSelect filter keyword */
        this.dropdown_search = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of banks filtered by search keyword */
        this.document_list_data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // obs: Observable<any>;
        this.fileExtensionError = false;
        this.errorHandling = (control, error) => {
            return this.UploagePageForm.controls[control].hasError(error);
        };
    }
    ngOnInit() {
        this.reactiveForm();
        this.getDocumentList();
        this.getSectionList();
        // listen for search field value changes
        this.dropdown_search.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBanks();
        });
    }
    filterBanks() {
        debugger;
        if (!this.banks) {
            return;
        }
        // get the search keyword
        let search = this.dropdown_search.value;
        if (!search) {
            this.document_list_data.next(this.DocumentList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.document_list_data.next(this.DocumentList.filter(item => item.documentName.toLowerCase().indexOf(search) > -1));
    }
    getSectionList() {
        var data = {
            "data": {
                "content": "",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I026",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getSectionList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.SectionList = JSON.parse(atob(data.data.content));
                this.SectionList = this.SectionList.section_List;
            }
        });
    }
    reactiveForm() {
        this.UploagePageForm = this.fb.group({
            UpPageId: [0],
            documentName: [''],
            documentVersion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            page: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pageTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            section: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isFileUploadAllowed: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isPhotoUploadAllowed: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isDataUploadAllowed: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isComputeInHtml: ['false', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: [''],
            Doc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            IsDuplicate: ['false'],
            ComputeLists: ['']
        });
    }
    getDocumentList() {
        var data = {
            "data": {
                "content": "",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I035",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDocumentAllList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.DocumentList = JSON.parse(atob(data.data.content));
                this.DocumentList = this.DocumentList.Document_List;
                // load the initial bank list
                this.document_list_data.next(this.DocumentList.slice());
            }
        });
    }
    ShowversionbyDocName(Name) {
        debugger;
        this.passDocName = {
            'documentName': Name.value
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passDocName)),
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I018",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDocumentList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.DocVersionList = JSON.parse(atob(data.data.content));
                this.DocVersionList = this.DocVersionList.documentVer_List;
            }
        });
    }
    UploadePageInDoc() {
        debugger;
        if (this.photoContent == "" || this.photoContent == undefined) {
            this.dialog.openDialog("Please choose file", 'Error');
        }
        else {
            if (this.UploagePageForm.valid) {
                this.spinner.show();
                var passuploadpagedata = {
                    'documentName': this.bankCtrl.value,
                    'documentVersion': this.UploagePageForm.value.documentVersion,
                    'page': this.UploagePageForm.value.page,
                    'pageTitle': this.UploagePageForm.value.pageTitle,
                    'section': this.UploagePageForm.value.section,
                    'isFileUploadAllowed': this.UploagePageForm.value.isFileUploadAllowed,
                    'isPhotoUploadAllowed': this.UploagePageForm.value.isPhotoUploadAllowed,
                    'isDataUploadAllowed': this.UploagePageForm.value.isDataUploadAllowed,
                    'isComputeInHtml': this.UploagePageForm.value.isComputeInHtml,
                    'userId': localStorage.getItem("userId"),
                    'htmlFile': this.photoContent,
                    "IsDuplicate": this.UploagePageForm.value.IsDuplicate,
                    "ComputeLists": this.UploagePageForm.value.ComputeLists,
                };
                // atob(this.photoContent)
                // var passuploadpagedata = {
                //   'documentName':'MaheshOnWay',
                //   'documentVersion':'5',
                //   'page':'0001',
                //   'pageTitle':'API',
                //   'section':'Lyopholization ',
                //   'isFileUploadAllowed':'True',
                //   'isPhotoUploadAllowed':'True',
                //   'isDataUploadAllowed':'True',
                //   'isComputeInHtml':'True',
                //   'userId':'Admin',
                //   'htmlFile':'Html Stringdsf'
                // }
                var data = {
                    "data": {
                        "content": btoa(JSON.stringify(passuploadpagedata)),
                        "encryptCode": "1"
                    },
                    "globalInfo": {
                        "latitude": "2.32.34.00",
                        "langitude": "12.232.12",
                        "deviceNo": "Hp",
                        "userName": localStorage.getItem("username"),
                        "requestTime": new Date(),
                        "interfaceCode": "I012",
                        "UserCategory": localStorage.getItem("userCategory"),
                        "userId": localStorage.getItem("userId")
                    },
                    "returnStateInfo": {
                        "returnMessage": "",
                        "returnCode": ""
                    }
                };
                this.service.UploadPageinDoc(data).subscribe((res) => {
                    debugger;
                    this.spinner.hide();
                    var data = JSON.parse(res);
                    if (data.returnStateInfo.returnMessage == 'Success') {
                        var showmsg = JSON.parse(atob(data.data.content));
                        if (showmsg.responseModel.status == true) {
                            this.dialog.openDialog(showmsg.responseModel.msg, 'Success');
                            this.resetForm();
                        }
                        else {
                            debugger;
                            // this.dialog.openDialog(showmsg.responseModel.msg,'Error')
                            if (showmsg.responseModel.msg == "Record already exists") {
                                this.dialog.openDialog("Record already exists do you want to update?", 'Confirm').afterClosed().subscribe(res => {
                                    debugger;
                                    if (res == true) {
                                        this.UploagePageForm.patchValue({
                                            IsDuplicate: true
                                        });
                                        this.UploadePageInDoc();
                                    }
                                    else { }
                                });
                            }
                        }
                    }
                    else {
                        this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
                    }
                });
            }
        }
    }
    onFileSelect(event) {
        debugger;
        this.Fileprop = event.target.files.length;
        if (event.target.files.length > 0) {
            // const file = event.target.files[0];
            // this.uploadDocForm.get('Doc').setValue(file);
            // var allowedExtensions = ["jpg","jpeg","png","pdf","docx","JPG","JPEG","JFIF","BMP","SVG","PDF","DOCX"];
            var allowedExtensions = ["htm", "html",];
            var file = event.target.files[0];
            this.photoName = file.name;
            this.fileExtension = this.photoName.split('.').pop();
            if (this.isInArray(allowedExtensions, this.fileExtension)) {
                this.fileExtensionError = false;
            }
            else {
                this.dialog.openDialog("Only " + allowedExtensions + " files are allowed", 'Error');
                this.fileExtensionError = true;
                //$("#File1").val('');
                let setvalue = document.getElementById('File1');
                setvalue.value = "";
                // this.UploagePageForm.controls['Doc'].setValidators([Validators.required])
                // this.UploagePageForm.controls['Doc'].updateValueAndValidity()
                file = null;
            }
            if (this.fileExtensionError == false) {
                if (file) {
                    debugger;
                    var reader = new FileReader();
                    reader.onloadend = (e) => {
                        debugger;
                        var contents = e.target.result;
                        this.photoContent = contents.split(',')[1];
                    };
                    reader.readAsDataURL(file);
                    this.UploagePageForm.patchValue({
                        "Doc": "Done",
                    });
                    //  this.UploagePageForm.get('Doc').setValue('Done');
                }
                else {
                    alert("Failed to load file");
                }
            }
        }
    }
    /*- checks if word exists in array -*/
    isInArray(array, word) {
        return array.indexOf(word.toLowerCase()) > -1;
    }
    resetForm() {
        debugger;
        this.ComputeLists = [];
        src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_12__["computeGlobal"].ComputeLists = [];
        this.UploagePageForm.reset(); // Reset form data
        // this.UploagePageForm.markAsPristine();
        // this.UploagePageForm.markAsUntouched();
        // this.formDirective.resetForm(); // Reset the ugly validators
        // (<FormGroupExtension>this.UploagePageForm).resetForm()
        // this.UploagePageForm.reset({
        //   documentName:''
        // });
        //   this.UploagePageForm.markAsPristine();
        // this.UploagePageForm.markAsUntouched();
        // "Doc":"Done", 
        this.UploagePageForm.patchValue({
            'isFileUploadAllowed': "false",
            'isPhotoUploadAllowed': "false",
            'isDataUploadAllowed': "false",
            'isComputeInHtml': "false",
            'IsDuplicate': "false"
        });
    }
    resetFile() {
        this.UploagePageForm.controls.Doc.reset();
    }
    PreviewHTML() {
        debugger;
        this.showPortal = false;
        this.spinner.show();
        var data = {
            "data": {
                "content": this.photoContent,
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I029",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getDemoHtml(data).subscribe((res) => {
            debugger;
            this.spinner.hide();
            var data = JSON.parse(res);
            if (this.Fileprop) {
                if (data.returnStateInfo.returnMessage == 'Success') {
                    this.content = JSON.parse(atob(data.data.content)).HtmlCode;
                    if (this.content == undefined || this.content == null) {
                        // this.dialog.openDialog("Html file format is not proper.",'Error')
                        this.dialog.openDialog(JSON.parse(atob(data.data.content)).responseModel.msg, 'Error');
                    }
                    else {
                        this.pagepreview = this.content.replace('Â', '&nbsp;').replace(/Â/g, '').replace(/â/g, '').replace(//g, '').replace(/Ã/g, '').replace('<head>', '<head><style>.test{width:100%} .WordSection1{ width: 90% !important;}  .MsoNormalTable{width: 90% !important;} .MsoNormal{ width: 90% !important; } .MsoTableGrid{width: 90% !important;} .signtest{ font-size: 9px; } </style>');
                        this.showPortal = true;
                    }
                    // this.divHello.nativeElement.innerHTML = this.content.replace('Â','&nbsp;').replace(/Â/g, '')
                    // var myString = this.pagepreview
                    // var element = $(myString); //convert string to JQuery element
                    // element.find("span").each(function(index) {
                    //     var text = $(this).text(); //get span content
                    //     if(text.indexOf(' ') >= 0)
                    //     {
                    //       text = text.replace(/\s/g, "&nbsp;").replace(/\Â/g, "&nbsp;");
                    //       //alert(text);
                    //   }
                    //   $(this).replaceWith(text); //replace all span with just content
                    // });
                    // var newString = element.html();
                    // this.pagepreview = newString
                    //.replace(/\>[\t ]+\</g, "><");
                    //.replace(/<span[^>]*>[/\>\s+\</g]+<\/span>/g,'');
                    //.replace(/&nbsp;/g, '').replace('Ã','').replace(/Ã/g, '');
                    //.replace('ÃÂ ','');
                    //.replace(/\n/g,' ');;
                    //Htmlpage.HtmlCode
                    //   const dialogRef = this.modal.open(PreviewhtmlpageComponent, {
                    //     data:{
                    //        Htmlpage : this.pagepreview
                    //     }
                    //     }
                    //    );
                    //  dialogRef.afterClosed().subscribe(result => { debugger
                    //  });
                }
            }
        });
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_10__('input[type="textarea"]').each(function () {
                debugger;
                var style = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('style');
                var id = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('id');
                var className = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('class');
                var placeholder = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('placeholder');
                var title = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('title');
                var maxlength = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr('maxlength');
                var value = jquery__WEBPACK_IMPORTED_MODULE_10__(this).attr("value"), 
                // var value = $(this).attr('value'),
                //textbox = $(document.createElement('textarea')).attr("value", value).attr('id', id).attr('placeholder', placeholder).attr('title', title).attr('maxlength', maxlength).attr('rows', 2).attr('cols', 40).attr('class', className);
                textbox = jquery__WEBPACK_IMPORTED_MODULE_10__(document.createElement('textarea')).html(value).attr('id', id).attr('placeholder', placeholder).attr('title', title).attr('maxlength', maxlength).attr('rows', 2).attr('cols', 100).attr('class', className);
                // jQuery(id).val(value);
                // $(document.getElementById(id)).value = "value";
                jquery__WEBPACK_IMPORTED_MODULE_10__(this).replaceWith(textbox);
                textbox.val(value);
                // $(this).textbox.val(value).replace(value)
            });
        }, 100);
    }
    OpenComputepopup() {
        const dialogRef = this.modal.open(_computegrid_computegrid_component__WEBPACK_IMPORTED_MODULE_11__["ComputegridComponent"], {
            disableClose: true
            // data:{
            //    Htmlpage : this.pagepreview
            // }
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            if (result.length == 0) {
                this.UploagePageForm.patchValue({
                    'isComputeInHtml': "false",
                });
            }
            else {
                this.UploagePageForm.patchValue({
                    'ComputeLists': result
                });
                this.ComputeLists = result;
            }
        });
    }
    ResetArray() {
        this.ComputeLists = [];
        src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_12__["computeGlobal"].ComputeLists = [];
    }
    delectedItem(index) {
        debugger;
        //this.ComputeLists.splice(index, 1);
        src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_12__["computeGlobal"].ComputeLists.splice(index, 1);
        this.ComputeLists = src_app_components_computegrid_globalvar__WEBPACK_IMPORTED_MODULE_12__["computeGlobal"].ComputeLists;
    }
};
UploadpageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_8__["FetchapiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hello', { static: false })
], UploadpageComponent.prototype, "divHello", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect', { static: true })
], UploadpageComponent.prototype, "singleSelect", void 0);
UploadpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploadpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploadpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/uploadpage/uploadpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploadpage.component.css */ "./src/app/components/uploadpage/uploadpage.component.css")).default]
    })
], UploadpageComponent);



/***/ }),

/***/ "./src/app/components/userprofile/keyframes.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/userprofile/keyframes.ts ***!
  \*****************************************************/
/*! exports provided: wobble, jello, swing, slideOutLeft, zoomOutRight, rotateOutUpRight, flipOutY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return wobble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return jello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeft", function() { return slideOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutRight", function() { return zoomOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRight", function() { return rotateOutUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutY", function() { return flipOutY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const wobble = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none', offset: 1 })
];
const jello = [
    // style({transform: 'none', offset: .111}),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: .111 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: .222 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: .333 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: .444 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: .555 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .666 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .777 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: .888 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none', offset: 1 })
];
const swing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none', offset: 1 })
];
const slideOutLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-150%, 0, 0)', opacity: 0, offset: 1 }),
];
const zoomOutRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(.1) translate3d(2000px, 0, 0)', 'transform-origin': 'right center', offset: 1 }),
];
const rotateOutUpRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 0, 0deg)', opacity: 1, 'transform-origin': 'right bottom', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate3d(0, 0, 1, 90deg)', opacity: 0, 'transform-origin': 'right bottom', offset: 1 }),
];
const flipOutY = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'perspective(400px)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.33 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 }),
];


/***/ }),

/***/ "./src/app/components/userprofile/userprofile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/userprofile/userprofile.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.table th, .table td {\r\n  vertical-align: middle !important;\r\n  font-size: small !important;\r\n  line-height: 0.9em !important;\r\n  padding: 0px !important;\r\n  white-space: nowrap !important;\r\n  border: none;\r\n}\r\n\r\nthead th { position: -webkit-sticky; position: sticky; top: 0;height: 30px; background-color:#034EA2; }\r\n\r\n.align2{\r\n  padding-left: 7px;\r\n}\r\n\r\n.headerTitle1{\r\n  padding-left: 10px;\r\n}\r\n\r\n.scrollable{\r\n  height: 175px;\r\n}\r\n\r\n.scroll{\r\n  height: 135px;\r\n  /* overflow-x: auto; */\r\n}\r\n\r\n.box {\r\n    border: 1px;;\r\n    border-color: red;\r\n    border-style: solid;\r\n  }\r\n\r\n.item {\r\n    width: 100px;\r\n    /* height: 50px; */\r\n    background-color: #FFDE49;\r\n    margin: 10px;\r\n    text-align: center;\r\n  }\r\n\r\ntable {\r\n    /* width: 100%; */\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n\r\n  }\r\n\r\n.example-container {\r\n    height: 200px;\r\n    overflow: auto;\r\n    /* width: max-content; */\r\n    width: 100%;\r\n  }\r\n\r\n.mat-table-sticky {\r\n    background: #034EA2;\r\n    opacity: 1;\r\n  }\r\n\r\n#matTool{\r\n    color: white;\r\n    background-color: #034EA2;\r\n    font-weight: bold;\r\n\r\n    }\r\n\r\n.mat-header-cell{\r\n    font-size: 14px;\r\n    min-height: 48px;\r\n    text-align: center;\r\n    border-right: 1px solid black;\r\n\r\n}\r\n\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding-right: 10px;\r\n}\r\n\r\n.mat-radio-button {padding-right: 10px;}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background:#034EA2;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #fff;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background:#fff;\r\n}\r\n\r\n/* .table th, .table td\r\n{\r\n  line-height: 0 !important;\r\n} */\r\n\r\n:host ::ng-deep .mat-radio-container{\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-outer-circle{\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-inner-circle{\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n\r\n:host ::ng-deep .mat-radio-button .mat-radio-ripple{\r\n  height: 20px; /*double of your required circle radius*/\r\n  width: 20px;  /*double of your required circle radius*/\r\n  left: calc(50% - 10px); /*'10px'-same as your required circle radius*/\r\n  top: calc(50% - 10px); /*'10px'-same as your required circle radius*/\r\n}\r\n\r\n/* .mat-radio-group\r\n {\r\n   display: flex;\r\n   flex-direction: column;\r\n } */\r\n\r\nlabel {\r\n  display: block;\r\n  color: #7d7d7d;\r\n}\r\n\r\n.floatBlock {\r\n  margin: 0 1.81em 0 0;\r\n}\r\n\r\n.labelish {\r\n\tcolor: black;\r\n    font-weight: 700;\r\n    margin-top: 2px;\r\n    margin-right: 10px;\r\n    font-size: small;\r\n}\r\n\r\n.radioClass {\r\n  border: none;\r\n  display: inherit;\r\n   white-space:nowrap ;\r\n   align-items: left;\r\n  /* flex-direction: row; */\r\n  /* justify-content: flex-start ; */\r\n  /* -moz-column-break-before: always; */\r\n  /* break-before: always; */\r\n  font-size: smaller;\r\n  /* margin: 5px; */\r\n}\r\n\r\n#purchaseOrder {\r\n\tmargin: 0 0 2em 0;\r\n}\r\n\r\n.divide\r\n{\r\n  margin-top: 4px;\r\n    border-right-style: groove;\r\n    height: 16px;\r\n border-color: #1b5eab;\r\n    margin-right: 10px;\r\n}\r\n\r\n.row1{\r\n  display: inline-block;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix{\r\n\r\n     padding: 0.4em !important;\r\n    border-top: 0.7em solid transparent !important;\r\n}\r\n\r\n::ng-deep  .mat-form-field-wrapper {\r\n  padding-bottom: 0.99em !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\r\n  margin: 0em !important;\r\n}\r\n\r\n.btn-link{\r\n  padding: 0px !important;\r\n  padding-left: 30px !important;\r\n}\r\n\r\n.wi\r\n{\r\n  width: 50px;\r\n}\r\n\r\n.vi\r\n{\r\n  padding: 0px;\r\n  height: 35px;\r\n}\r\n\r\n.icon_\r\n  {\r\nposition: absolute;\r\n/* margin-left: 15px; */\r\ntransform: rotate(\r\n90deg\r\n);\r\n  }\r\n\r\n.tbl_sm{\r\n    line-height: 1.6em !important;\r\n    font-size: smaller;\r\n    overflow: auto;\r\n  }\r\n\r\nthead {\r\n    background-color: #034da2;\r\n    /* font-weight: 800; */\r\n    color: white;\r\n  }\r\n\r\n/* th a,\r\n  td a { \r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  th.sort-by { \r\n    padding-right: 18px;\r\n    position: relative;\r\n  }\r\n  th.sort-by:before,\r\n  th.sort-by:after {\r\n    border: 4px solid transparent;\r\n    content: \"\";\r\n    display: block;\r\n    height: 0;\r\n    right: 5px;\r\n    top: 50%;\r\n    position: absolute;\r\n    width: 0;\r\n  }\r\n  th.sort-by:before {\r\n    border-bottom-color: #666;\r\n    margin-top: -9px;\r\n  }\r\n  a.sort-by:after {\r\n    border-top-color: #666;\r\n    margin-top: 1px;\r\n  } */\r\n\r\n/* .paging-nav {\r\n    text-align: right;\r\n    padding-top: 2px;\r\n  }\r\n  \r\n  .paging-nav a {\r\n    margin: auto 1px;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 1px 7px;\r\n    background: #91b9e6;\r\n    color: white;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .paging-nav .selected-page {\r\n    background: #187ed5;\r\n    font-weight: bold;\r\n  } */\r\n\r\n.Sorticon{\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.greencolor{\r\n    color: rgb(58, 236, 58);\r\n  }\r\n\r\n.Redcolor{\r\n    color: red\r\n  }\r\n\r\ntd.break {\r\n    float: left;\r\n    line-height: 22px;\r\n  }\r\n\r\n/* new PROJECT BILL */\r\n\r\n/* p {\r\n    font-family: Lato;\r\n  }\r\n  .card {\r\n    margin: 20px;\r\n  }\r\n  \r\n  .one {\r\n      background-color: #009688;\r\n  }\r\n  .one {\r\n      background-color: #fd7474;\r\n      background-color: #ffa1a1;\r\n  }\r\n  .one {\r\n      background-color: #e8fd74;\r\n      background-color: #f1fac0;\r\n  }\r\n  .one {\r\n      background-color: #74fd86;\r\n      background-color: #b5ffbf;\r\n  }\r\n  .two, div.colored>div:nth-child(10n+2) {\r\n      background-color: #3949ab;\r\n  } */\r\n\r\nmat-card{\r\n  line-height: 3;\r\n  margin: 20px;\r\n}\r\n\r\n.grid-layout-custom{\r\n    width: 50vw;\r\n    height: 100vh;\r\n  }\r\n\r\n.itmes{\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.label{\r\n    /* margin-left: 10px; */\r\n    all: unset;\r\n    line-height:9px;\r\n    \r\n  }\r\n\r\n@media only screen and  (max-device-width : 600px){\r\n    .label{\r\n      font-size: 8px\r\n    }\r\n  }\r\n\r\nmat-toolbar{\r\n    background: url(\"/assets/logo/footerwaves.png\");\r\n    background-image: url(\"/assets/logo/footerwaves.png\");\r\n\r\n  }\r\n\r\nimg{\r\n    \r\n\r\n\r\n-webkit-filter: invert(42%) sepia(41%) saturate(4611%) hue-rotate(324deg) brightness(101%) contrast(98%);\r\n    \r\n\r\n\r\n        filter: invert(42%) sepia(41%) saturate(4611%) hue-rotate(324deg) brightness(101%) contrast(98%);\r\n    /* filter: invert(35%) sepia(15%) saturate(2945%) hue-rotate(227deg) brightness(91%) contrast(89%); */\r\n\r\n    }\r\n\r\nimg:hover{\r\n      -webkit-filter: invert(20%) sepia(93%) saturate(3816%) hue-rotate(338deg) brightness(86%) contrast(102%);\r\n              filter: invert(20%) sepia(93%) saturate(3816%) hue-rotate(338deg) brightness(86%) contrast(102%);\r\n\r\n\r\n      /* filter: invert(19%) sepia(99%) saturate(2201%) hue-rotate(253deg) brightness(86%) contrast(84%); */\r\n    }\r\n\r\nhtml {\r\n      overflow: scroll;\r\n      overflow-x: hidden;\r\n  }\r\n\r\n::-webkit-scrollbar {\r\n      width: 0;  /* Remove scrollbar space */\r\n      background: transparent;\r\n  }\r\n\r\nbody{\r\nbackground-image: \"/assets/logo/footerwaves.png;\"\r\n  }\r\n\r\nimg{\r\n    font-family: 'Open Sans', sans-serif;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBLFdBQVcsd0JBQWdCLEVBQWhCLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUU7O0FBRTVFO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjs7RUFFcEI7O0FBQ0E7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7O0lBRWpCOztBQUNGO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCOztBQUVqQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQSxtQkFBbUIsbUJBQW1CLENBQUM7O0FBRXZDLFVBQVU7O0FBQ1Y7RUFDRSxVQUFVO0FBQ1o7O0FBQ0EsVUFBVTs7QUFDVjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxlQUFlO0FBQ2pCOztBQUdBOzs7R0FHRzs7QUFHSDtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVksRUFBRSx3Q0FBd0M7RUFDdEQsV0FBVyxHQUFHLHdDQUF3QztFQUN0RCxzQkFBc0IsRUFBRSw2Q0FBNkM7RUFDckUscUJBQXFCLEVBQUUsNkNBQTZDO0FBQ3RFOztBQUdDOzs7O0lBSUc7O0FBSUo7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFHQTtDQUNDLFlBQVk7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0dBQ2YsbUJBQW1CO0dBQ25CLGlCQUFpQjtFQUNsQix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0lBQ2IsMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZixxQkFBcUI7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUdBOztLQUVLLHlCQUF5QjtJQUMxQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVFOztBQUVGLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkI7O0NBQTRCO0VBQzFCOztBQUdBO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTJCRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0JHOztBQUNIO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFO0VBQ0Y7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztBQUdBLHFCQUFxQjs7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdCRzs7QUFDSDtFQUNBLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTs7RUFFakI7O0FBQ0E7SUFDRTtNQUNFO0lBQ0Y7RUFDRjs7QUFDQTtJQUNFLCtDQUErQztJQUMvQyxxREFBcUQ7O0VBRXZEOztBQUNBOzs7O0FBSUYsd0dBQWdHOzs7O1FBQWhHLGdHQUFnRztJQUM1RixxR0FBcUc7O0lBRXJHOztBQUNBO01BQ0Usd0dBQWdHO2NBQWhHLGdHQUFnRzs7O01BR2hHLHFHQUFxRztJQUN2Rzs7QUFFQTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7RUFDdEI7O0FBQ0E7TUFDSSxRQUFRLEdBQUcsMkJBQTJCO01BQ3RDLHVCQUF1QjtFQUMzQjs7QUFDQTtBQUNGO0VBQ0U7O0FBR0E7SUFDRSxvQ0FBb0M7RUFDdEMiLCJmaWxlIjoidXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxudGhlYWQgdGggeyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7aGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiMwMzRFQTI7IH1cclxuXHJcbi5hbGlnbjJ7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuLmhlYWRlclRpdGxlMXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxufVxyXG4uc2Nyb2xse1xyXG4gIGhlaWdodDogMTM1cHg7XHJcbiAgLyogb3ZlcmZsb3cteDogYXV0bzsgKi9cclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBib3JkZXI6IDFweDs7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAvKiBoZWlnaHQ6IDUwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERTQ5O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcblxyXG4gIH1cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLyogd2lkdGg6IG1heC1jb250ZW50OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMzRFQTI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgI21hdFRvb2x7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0RUEyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgfVxyXG4gIC5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcblxyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9uIHtwYWRkaW5nLXJpZ2h0OiAxMHB4O31cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDojMDM0RUEyO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIC50YWJsZSB0aCwgLnRhYmxlIHRkXHJcbntcclxuICBsaW5lLWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tY29udGFpbmVye1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmFkaW8tcmlwcGxle1xyXG4gIGhlaWdodDogMjBweDsgLypkb3VibGUgb2YgeW91ciByZXF1aXJlZCBjaXJjbGUgcmFkaXVzKi9cclxuICB3aWR0aDogMjBweDsgIC8qZG91YmxlIG9mIHlvdXIgcmVxdWlyZWQgY2lyY2xlIHJhZGl1cyovXHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTsgLyonMTBweCctc2FtZSBhcyB5b3VyIHJlcXVpcmVkIGNpcmNsZSByYWRpdXMqL1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTsgLyonMTBweCctc2FtZSBhcyB5b3VyIHJlcXVpcmVkIGNpcmNsZSByYWRpdXMqL1xyXG59XHJcblxyXG5cclxuIC8qIC5tYXQtcmFkaW8tZ3JvdXBcclxuIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIH0gKi9cclxuXHJcblxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjN2Q3ZDdkO1xyXG59XHJcblxyXG4uZmxvYXRCbG9jayB7XHJcbiAgbWFyZ2luOiAwIDEuODFlbSAwIDA7XHJcbn1cclxuXHJcblxyXG4ubGFiZWxpc2gge1xyXG5cdGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4ucmFkaW9DbGFzcyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgIHdoaXRlLXNwYWNlOm5vd3JhcCA7XHJcbiAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IDsgKi9cclxuICAvKiAtbW96LWNvbHVtbi1icmVhay1iZWZvcmU6IGFsd2F5czsgKi9cclxuICAvKiBicmVhay1iZWZvcmU6IGFsd2F5czsgKi9cclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgLyogbWFyZ2luOiA1cHg7ICovXHJcbn1cclxuXHJcbiNwdXJjaGFzZU9yZGVyIHtcclxuXHRtYXJnaW46IDAgMCAyZW0gMDtcclxufVxyXG5cclxuLmRpdmlkZVxyXG57XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBncm9vdmU7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiBib3JkZXItY29sb3I6ICMxYjVlYWI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnJvdzF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuXHJcbiAgICAgcGFkZGluZzogMC40ZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDAuN2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjk5ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bi1saW5re1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lcclxue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4udmlcclxue1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbiAgLmljb25fXHJcbiAge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8qIG1hcmdpbi1sZWZ0OiAxNXB4OyAqL1xyXG50cmFuc2Zvcm06IHJvdGF0ZShcclxuOTBkZWdcclxuKTtcclxuICB9XHJcblxyXG5cclxuICAudGJsX3Nte1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRkYTI7XHJcbiAgICAvKiBmb250LXdlaWdodDogODAwOyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLyogdGggYSxcclxuICB0ZCBhIHsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB0aC5zb3J0LWJ5IHsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICB0aC5zb3J0LWJ5OmJlZm9yZSxcclxuICB0aC5zb3J0LWJ5OmFmdGVyIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIHRoLnNvcnQtYnk6YmVmb3JlIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gIH1cclxuICBhLnNvcnQtYnk6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICB9ICovXHJcblxyXG4gIC8qIC5wYWdpbmctbmF2IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2luZy1uYXYgYSB7XHJcbiAgICBtYXJnaW46IGF1dG8gMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MWI5ZTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdpbmctbmF2IC5zZWxlY3RlZC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxODdlZDU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9ICovXHJcbiAgLlNvcnRpY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ3JlZW5jb2xvcntcclxuICAgIGNvbG9yOiByZ2IoNTgsIDIzNiwgNTgpO1xyXG4gIH1cclxuICBcclxuICAuUmVkY29sb3J7XHJcbiAgICBjb2xvcjogcmVkXHJcbiAgfVxyXG5cclxuICB0ZC5icmVhayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIG5ldyBQUk9KRUNUIEJJTEwgKi9cclxuICAvKiBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xyXG4gIH1cclxuICAub25lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNzQ3NDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTFhMTtcclxuICB9XHJcbiAgLm9uZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkNzQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWZhYzA7XHJcbiAgfVxyXG4gIC5vbmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzRmZDg2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVmZmJmO1xyXG4gIH1cclxuICAudHdvLCBkaXYuY29sb3JlZD5kaXY6bnRoLWNoaWxkKDEwbisyKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTQ5YWI7XHJcbiAgfSAqL1xyXG4gIG1hdC1jYXJke1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4gIC5ncmlkLWxheW91dC1jdXN0b217XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5pdG1lc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubGFiZWx7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICBsaW5lLWhlaWdodDo5cHg7XHJcbiAgICBcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1heC1kZXZpY2Utd2lkdGggOiA2MDBweCl7XHJcbiAgICAubGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9sb2dvL2Zvb3RlcndhdmVzLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9nby9mb290ZXJ3YXZlcy5wbmdcIik7XHJcblxyXG4gIH1cclxuICBpbWd7XHJcbiAgICBcclxuXHJcblxyXG5maWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDQxJSkgc2F0dXJhdGUoNDYxMSUpIGh1ZS1yb3RhdGUoMzI0ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDk4JSk7XHJcbiAgICAvKiBmaWx0ZXI6IGludmVydCgzNSUpIHNlcGlhKDE1JSkgc2F0dXJhdGUoMjk0NSUpIGh1ZS1yb3RhdGUoMjI3ZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODklKTsgKi9cclxuXHJcbiAgICB9XHJcbiAgICBpbWc6aG92ZXJ7XHJcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDIwJSkgc2VwaWEoOTMlKSBzYXR1cmF0ZSgzODE2JSkgaHVlLXJvdGF0ZSgzMzhkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCgxMDIlKTtcclxuXHJcblxyXG4gICAgICAvKiBmaWx0ZXI6IGludmVydCgxOSUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMjIwMSUpIGh1ZS1yb3RhdGUoMjUzZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoODQlKTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBodG1sIHtcclxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDA7ICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH0gIFxyXG4gIGJvZHl7XHJcbmJhY2tncm91bmQtaW1hZ2U6IFwiL2Fzc2V0cy9sb2dvL2Zvb3RlcndhdmVzLnBuZztcIlxyXG4gIH1cclxuXHJcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gIGltZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/userprofile/userprofile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/userprofile/userprofile.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./keyframes */ "./src/app/components/userprofile/keyframes.ts");
/* harmony import */ var _record_face_record_face_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../record-face/record-face.component */ "./src/app/components/record-face/record-face.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

















const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
let UserprofileComponent = class UserprofileComponent {
    constructor(service, router, sanitizer, dialog, spinner, modal, breakpointObserver, observableMedia) {
        this.service = service;
        this.router = router;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.spinner = spinner;
        this.modal = modal;
        this.breakpointObserver = breakpointObserver;
        this.observableMedia = observableMedia;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].XLarge, 'XLarge'],
        ]);
        this.p = 1;
        this.size = 5;
        this.pageIndex = 0;
        this.showUp = true;
        // protected banks: Bank[] = BANKS;
        // @Input() placeholderLabel = 'Search';
        /** control for the selected bank */
        // public bankCtrl: FormControl = new FormControl();
        /** control for the MatSelect filter keyword */
        this.dropdown_search1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.dropdown_search2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.dropdown_search3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteItem_search1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteItem_search2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteItem_search3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteBatch_search1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteBatch_search2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.FavouriteBatch_search3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        /** list of banks filtered by search keyword */
        this.document_polist_data1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.document_polist_data2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.document_polist_data3 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteItemlist1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteItemlist2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteItemlist3 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteBatchlist1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteBatchlist2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.FavouriteBatchlist3 = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        this.heroes = [
            { id: 11, name: 'Recharge', images: '/assets/logo/e-wallet/png-1024/mobile-recharge-1538140.png' },
            { id: 12, name: 'Narco', images: '/assets/logo/e-wallet/svg/toll-1538112.svg' },
            { id: 13, name: 'Bombasto', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 14, name: 'Celeritas', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 15, name: 'Magneta', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 16, name: 'RubberMan', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 17, name: 'Dynama', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 18, name: 'Dr IQ', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 19, name: 'Magma', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' },
            { id: 20, name: 'Tornado', images: '/assets/logo/e-wallet/svg/dth-1538152.svg' }
        ];
        this.gridByBreakpoint = {
            xl: 8,
            lg: 6,
            md: 4,
            sm: 2,
            xs: 1
        };
        this.name = 'Angular';
        this.imageObject = [{
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
                title: 'Hummingbirds are amazing creatures'
            }, {
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
            }, {
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
                title: 'Example with title.'
            }, {
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
                title: 'Hummingbirds are amazing creatures'
            }, {
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
            }, {
                image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
                thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
                title: 'Example two with title.'
            }];
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.sortDir = 1; //1= 'ASE' -1= DSC
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns1 = ['position', 'name', 'weight'];
        this.dataSource = ELEMENT_DATA;
        this.lastLogin = [];
        this.userAuths = [];
        this.userModel = {
            'open_po': '',
            'to_start_po': '',
            'to_locked_po': '',
            'closed_po': '',
            'review_po': '',
            'archived_po': '',
            'limit_pastday_po': '',
            'FavPO1': '',
            'FavPO2': '',
            'FavPO3': '',
            'Favitem1': '',
            'Favitem2': '',
            'Favitem3': '',
            'FavBatch1': '',
            'FavBatch2': '',
            'FavBatch3': '',
        };
        this.showAuth = false;
        this.tiles = [
            { text: 'One', color: 'lightblue' },
            { text: 'Two', color: 'lightgreen' },
            { text: 'Three', color: 'lightpink' },
            { text: 'Four', color: '#DDBDF1' },
            { text: 'Five', color: 'lightblue' },
            { text: 'Six', color: 'lightgreen' },
            { text: 'Seven', color: 'lightpink' },
        ];
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].XLarge,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroyed)).subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query);
                }
            }
        });
        // this.sortArr('Site','Department');
    }
    startAnimation(state) {
        console.log(state);
        if (!this.animationState) {
            this.animationState = state;
        }
    }
    resetAnimationState() {
        this.animationState = '';
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    mobilerecharge() {
        this.router.navigate(['/mobilerecharge']);
    }
    ngAfterContentInit() {
        //   this.observableMedia.asObservable().subscribe((change) => { 
        //     this.grid.cols = this.gridByBreakpoint[change.mqAlias];
        //   });
        // )
    }
    getUrl() {
        return "url('/assets/logo/footerwaves.png')";
    }
    ngOnInit() {
        this.imagesUrl = ['/assets/logo/e-wallet/christmas_offer.jpg', '/assets/logo/e-wallet/Jio-Holiday-Hungama.jpg', '/assets/logo/e-wallet/offer.png'];
        this.GetUserProfileDetails();
        this.getPOList();
        this.getBatchList();
        this.getItemList();
        // listen for search field value changes
        this.dropdown_search1.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBanks(this.dropdown_search1, this.document_polist_data1);
        });
        this.dropdown_search2.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBanks(this.dropdown_search2, this.document_polist_data2);
        });
        this.dropdown_search3.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBanks(this.dropdown_search3, this.document_polist_data3);
        });
        this.FavouriteItem_search1.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterItem(this.FavouriteItem_search1, this.FavouriteItemlist1);
        });
        this.FavouriteItem_search2.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterItem(this.FavouriteItem_search2, this.FavouriteItemlist2);
        });
        this.FavouriteItem_search3.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterItem(this.FavouriteItem_search3, this.FavouriteItemlist3);
        });
        this.FavouriteBatch_search1.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBatch(this.FavouriteBatch_search1, this.FavouriteBatchlist1);
        });
        this.FavouriteBatch_search2.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBatch(this.FavouriteBatch_search1, this.FavouriteBatchlist2);
        });
        this.FavouriteBatch_search3.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.filterBatch(this.FavouriteBatch_search1, this.FavouriteBatchlist3);
        });
        $(document).ready(function () {
            $('.tbl_sm').paging({ limit: 5 });
        });
    }
    filterBanks(dropvalue, listttt) {
        debugger;
        let search = dropvalue.value;
        if (!search) {
            listttt.next(this.POList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        listttt.next(this.POList.filter(item => item.PO_No.toLowerCase().indexOf(search) > -1));
    }
    filterItem(dropvalue, listttt) {
        debugger;
        let search = dropvalue.value;
        if (!search) {
            listttt.next(this.ItemList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        listttt.next(this.ItemList.filter(item => item.itemName.toLowerCase().indexOf(search) > -1));
    }
    filterBatch(dropvalue, listttt) {
        debugger;
        let search = dropvalue.value;
        if (!search) {
            listttt.next(this.BatchList.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        listttt.next(this.BatchList.filter(item => item.batchName.toLowerCase().indexOf(search) > -1));
    }
    GetUserProfileDetails() {
        this.service.GetUserProfileDetails().subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.UserData = JSON.parse(atob(data.data.content));
                //this.imagepath = this.sanitizer.bypassSecurityTrustUrl(this.UserData.user.ImgPath);
                this.imagepath = this.sanitizer.bypassSecurityTrustUrl('file:///D:/AnvitechSolutions/SerumBMR/Mahesh/3May2021PM3/BMR_03_05_2021/BMR/BMR_API/Document/UserImg/05032021011127PM_Admin.jpg');
                if (this.UserData.user.DaysLeftForPwdChange == 0) {
                    var showCancelBtn = false;
                    this.changePassword(showCancelBtn);
                }
                this.lastLogin = this.UserData.user.LastFiveLogin;
                this.userAuths = this.UserData.user.userAuths;
                this.userModel = {
                    open_po: this.UserData.user.OpenPO == true ? 'Yes' : 'No',
                    to_start_po: this.UserData.user.ToStartPO == true ? 'Yes' : 'No',
                    to_locked_po: this.UserData.user.LockedPO == true ? 'Yes' : 'No',
                    closed_po: this.UserData.user.ClosePO == true ? 'Yes' : 'No',
                    review_po: this.UserData.user.ReviewPO == true ? 'Yes' : 'No',
                    archived_po: this.UserData.user.ArchivedPO == true ? 'Yes' : 'No',
                    limit_pastday_po: this.UserData.user.LimitPastDaysPO,
                    FavPO1: this.UserData.user.FavPO1.trim(),
                    FavPO2: this.UserData.user.FavPO2.trim(),
                    FavPO3: this.UserData.user.FavPO3.trim(),
                    Favitem1: this.UserData.user.Favitem1.trim(),
                    Favitem2: this.UserData.user.Favitem2.trim(),
                    Favitem3: this.UserData.user.Favitem3.trim(),
                    FavBatch1: this.UserData.user.FavBatch1.trim(),
                    FavBatch2: this.UserData.user.FavBatch2.trim(),
                    FavBatch3: this.UserData.user.FavBatch3.trim(),
                };
            }
            if (this.userAuths.length > 0) {
                setTimeout(() => {
                    this.applyPagination();
                }, 2000);
            }
        });
    }
    getBatchList() {
        var data = {
            "data": {
                "content": "",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I008",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getBatchList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.BatchList = JSON.parse(atob(data.data.content));
                this.BatchList = this.BatchList.Batch_List;
                this.FavouriteBatchlist1.next(this.BatchList.slice());
                this.FavouriteBatchlist2.next(this.BatchList.slice());
                this.FavouriteBatchlist3.next(this.BatchList.slice());
            }
        });
    }
    getPOList() {
        this.passuserid = {
            'userId': localStorage.getItem("userId")
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passuserid)),
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I006",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getPOList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.POList = JSON.parse(atob(data.data.content));
                this.POList = this.POList.PO_List;
                this.document_polist_data1.next(this.POList.slice());
                this.document_polist_data2.next(this.POList.slice());
                this.document_polist_data3.next(this.POList.slice());
            }
        });
    }
    getItemList() {
        var data = {
            "data": {
                "content": "",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I007",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.getItemList(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                this.ItemList = JSON.parse(atob(data.data.content));
                this.ItemList = this.ItemList.Item_List;
                this.FavouriteItemlist1.next(this.ItemList.slice());
                this.FavouriteItemlist2.next(this.ItemList.slice());
                this.FavouriteItemlist3.next(this.ItemList.slice());
            }
        });
    }
    UpdateUserProfile(userData, UserModel) {
        debugger;
        if (UserModel.limit_pastday_po == "") {
            this.dialog.openDialog("Limit PO Past Days cannot be blank", 'Error');
        }
        else {
            var json = {
                'OpenPO': UserModel.open_po == 'Yes' ? true : false,
                'ClosePO': UserModel.closed_po == 'Yes' ? true : false,
                'ToStartPO': UserModel.to_start_po == 'Yes' ? true : false,
                'LockedPO': UserModel.to_locked_po == 'Yes' ? true : false,
                'ReviewPO': UserModel.review_po == 'Yes' ? true : false,
                'ArchivedPO': UserModel.archived_po == 'Yes' ? true : false,
                'LimitPastDaysPO': UserModel.limit_pastday_po,
                'FavPO1': UserModel.FavPO1,
                'FavPO2': UserModel.FavPO2,
                'FavPO3': UserModel.FavPO3,
                'Favitem1': UserModel.Favitem1,
                'Favitem2': UserModel.Favitem2,
                'Favitem3': UserModel.Favitem3,
                'FavBatch1': UserModel.FavBatch1,
                'FavBatch2': UserModel.FavBatch2,
                'FavBatch3': UserModel.FavBatch3,
                'UserId': userData.user.UserId,
            };
            var enc = btoa(JSON.stringify(json));
            var data = {
                "data": {
                    "content": enc,
                    "encryptCode": ""
                },
                "globalInfo": {
                    "latitude": "2.32.34.00",
                    "langitude": "12.232.12",
                    "deviceNo": "Hp",
                    "userName": localStorage.getItem("username"),
                    "requestTime": new Date(),
                    "interfaceCode": "I003",
                    "UserCategory": localStorage.getItem("userCategory"),
                    "userId": localStorage.getItem("userId")
                },
                "returnStateInfo": {
                    "returnMessage": "",
                    "returnCode": ""
                }
            };
            this.spinner.show();
            this.service.UpdateUserProfile(data).subscribe((res) => {
                debugger;
                var data = JSON.parse(res);
                var R = JSON.parse(atob(data.data.content));
                if (data.returnStateInfo.returnMessage == 'Success' && R.responseModel.status == true) {
                    this.dialog.openDialog(R.responseModel.msg, 'Success');
                    // this.ngOnInit();
                    this.router.navigate(['/polist']);
                }
                else {
                    this.dialog.openDialog(R.responseModel.msg, 'Error');
                }
                this.spinner.hide();
            });
        }
    }
    toggle1() {
        this.showAuth = !this.showAuth;
    }
    resetFavPO() {
        this.userModel.FavPO1 = '';
        this.userModel.FavPO2 = '';
        this.userModel.FavPO3 = '';
    }
    resetFavItem() {
        this.userModel.Favitem1 = '';
        this.userModel.Favitem2 = '';
        this.userModel.Favitem3 = '';
    }
    resetFavBatch() {
        this.userModel.FavBatch1 = '';
        this.userModel.FavBatch2 = '';
        this.userModel.FavBatch3 = '';
    }
    changePassword(showCancelBtn) {
        const dialogRef = this.modal.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"], {
            disableClose: true,
            data: {
                showCancelBtn: showCancelBtn
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            this.GetUserProfileDetails();
            // }
        });
    }
    RecordFaceView() {
        // var data = this.ImageList
        // var Type = 'Uploaded Files'
        const dialogRef = this.modal.open(_record_face_record_face_component__WEBPACK_IMPORTED_MODULE_15__["RecordFaceComponent"], {
            // disableClose: true,
            height: '77%',
            width: '77%',
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
    onSortClick(event, column) {
        debugger;
        let target = event.currentTarget, classList = target.classList;
        if (column == "Site") {
            this.Site = !this.Site;
        }
        else if (column == "Department") {
            this.Department = !this.Department;
        }
        else if (column == "Section") {
            this.Section = !this.Section;
        }
        else {
        }
        if (classList.contains('up')) {
            classList.remove('up');
            classList.add('down');
            this.sortDir = -1;
        }
        else {
            classList.add('up');
            classList.remove('down');
            this.sortDir = 1;
        }
        this.sortArr(column);
    }
    sortArr(colName) {
        this.userAuths.sort((a, b) => {
            a = a[colName].toLowerCase();
            b = b[colName].toLowerCase();
            return a.localeCompare(b) * this.sortDir;
        });
    }
    // paginate(event: any) {debugger
    //   this.pageIndex=event;
    //   this.userAuths = this.userAuths.slice(event * this.size - this.size, event * this.size);
    // }
    applyPagination() {
        debugger;
        debugger;
        $('#data').after('<div id="vi_paginator"></div>');
        var rowsShown = 5;
        //var rowsTotal = $('#data tbody tr').length;
        var rowsTotal = this.userAuths.length;
        var numPages = rowsTotal / rowsShown;
        for (var i = 0; i < numPages; i++) {
            var pageNum = i + 1;
            $('#vi_paginator').append('<a rel="' + i + '">' + pageNum + '</a> ');
        }
        $('#data tbody tr').hide();
        $('#data tbody tr').slice(0, rowsShown).show();
        $('#vi_paginator a:first').addClass('active');
        $('#vi_paginator a').bind('click', function () {
            $('#vi_paginator a').removeClass('active');
            $(this).addClass('active');
            var currPage = $(this).attr('rel');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $('#data tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                css('display', 'table-row').animate({ opacity: 1 }, 300);
        });
    }
};
UserprofileComponent.ctorParameters = () => [
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_6__["FetchapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["MediaObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect1', { static: true })
], UserprofileComponent.prototype, "singleSelect1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect2', { static: true })
], UserprofileComponent.prototype, "singleSelect2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleSelect3', { static: true })
], UserprofileComponent.prototype, "singleSelect3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteItem1', { static: true })
], UserprofileComponent.prototype, "FavouriteItem1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteItem2', { static: true })
], UserprofileComponent.prototype, "FavouriteItem2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteItem3', { static: true })
], UserprofileComponent.prototype, "FavouriteItem3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteBatch1', { static: true })
], UserprofileComponent.prototype, "FavouriteBatch1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteBatch2', { static: true })
], UserprofileComponent.prototype, "FavouriteBatch2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('FavouriteBatch3', { static: true })
], UserprofileComponent.prototype, "FavouriteBatch3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
], UserprofileComponent.prototype, "grid", void 0);
UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/userprofile/userprofile.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('cardAnimator', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => wobble', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["wobble"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["swing"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => jello', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["jello"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["zoomOutRight"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => slideOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["slideOutLeft"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => rotateOutUpRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["rotateOutUpRight"]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('* => flipOutY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_14__["flipOutY"]))),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userprofile.component.css */ "./src/app/components/userprofile/userprofile.component.css")).default]
    })
], UserprofileComponent);



/***/ }),

/***/ "./src/app/components/viewpagedetails/viewpagedetails.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/viewpagedetails/viewpagedetails.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-button{\r\n    float: right;\r\n    top:-34px;\r\n    right:-14px;\r\n  }\r\n  /* .close.mat-button {\r\n    position: inherit;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 2px;\r\n    line-height: 3px;\r\n    min-width: auto;\r\n  } */\r\n  .close-icon {\r\n    transition: 1s ease-in-out;\r\n  }\r\n  .close-icon:hover {\r\n    transform: rotate(180deg);\r\n  }\r\n  .greencolor{\r\n    color: rgb(58, 236, 58);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdwYWdlZGV0YWlscy92aWV3cGFnZWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiO0VBQ0E7Ozs7Ozs7S0FPRztFQUNIO0lBQ0UsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJ2aWV3cGFnZWRldGFpbHMvdmlld3BhZ2VkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOi0zNHB4O1xyXG4gICAgcmlnaHQ6LTE0cHg7XHJcbiAgfVxyXG4gIC8qIC5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogM3B4O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH0gKi9cclxuICAuY2xvc2UtaWNvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWljb246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIC5ncmVlbmNvbG9ye1xyXG4gICAgY29sb3I6IHJnYig1OCwgMjM2LCA1OCk7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/viewpagedetails/viewpagedetails.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/viewpagedetails/viewpagedetails.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewpagedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpagedetailsComponent", function() { return ViewpagedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var _logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logdetails/logdetails.component */ "./src/app/components/logdetails/logdetails.component.ts");







let ViewpagedetailsComponent = class ViewpagedetailsComponent {
    constructor(spinner, modal, service, dialog) {
        this.spinner = spinner;
        this.modal = modal;
        this.service = service;
        this.dialog = dialog;
        this.PageList = [];
        this.ImageList = [];
    }
    ngOnInit() {
        this.ViewdataClick();
    }
    ViewdataClick() {
        this.spinner.show();
        var DataUploaddata = {
            "PO_No": localStorage.getItem("PO_No"),
            "Page": localStorage.getItem("Page"),
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(DataUploaddata)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I040",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.spinner.show();
        this.service.DataUploadClick(data).subscribe((res) => {
            debugger;
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                var msg = atob(data.data.content);
                this.PageList = JSON.parse(msg).grid;
                this.ImageList = JSON.parse(msg).images;
                //    if(JSON.parse(msg).responseModel.status == true){debugger
                //     this.dialog.openDialog(JSON.parse(msg).responseModel.msg,'Success');
                //    }
                //    else
                //  {
                //    this.dialog.openDialog(JSON.parse(msg).responseModel.msg,'Error')
                //  }
            }
            else {
                this.dialog.openDialog(data.returnStateInfo.returnMessage, 'Error');
            }
            this.spinner.hide();
        });
    }
    AccesLogView(data, Type) {
        const dialogRef = this.modal.open(_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_6__["LogdetailsComponent"], {
            // disableClose: true,
            // height: '77%',
            // width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
    ImageLogView() {
        var data = this.ImageList;
        var Type = 'Uploaded Files';
        const dialogRef = this.modal.open(_logdetails_logdetails_component__WEBPACK_IMPORTED_MODULE_6__["LogdetailsComponent"], {
            // disableClose: true,
            // height: '77%',
            // width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
};
ViewpagedetailsComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_services_fetchapi_service__WEBPACK_IMPORTED_MODULE_5__["FetchapiService"] },
    { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
];
ViewpagedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewpagedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewpagedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewpagedetails/viewpagedetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewpagedetails.component.css */ "./src/app/components/viewpagedetails/viewpagedetails.component.css")).default]
    })
], ViewpagedetailsComponent);



/***/ }),

/***/ "./src/app/hammer.config.ts":
/*!**********************************!*\
  !*** ./src/app/hammer.config.ts ***!
  \**********************************/
/*! exports provided: HammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            // override hammerjs default configuration
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_ALL"] }
        };
    }
}


/***/ }),

/***/ "./src/app/hammertime.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/hammertime.directive.ts ***!
  \*****************************************/
/*! exports provided: HammertimeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammertimeDirective", function() { return HammertimeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HammertimeDirective = class HammertimeDirective {
    constructor() {
        this.doubleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tripleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onTap(e) {
        if (e.tapCount === 2) {
            this.doubleTap.emit(e);
        }
        if (e.tapCount === 3) {
            this.tripleTap.emit(e);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HammertimeDirective.prototype, "doubleTap", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HammertimeDirective.prototype, "tripleTap", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('tap', ['$event'])
], HammertimeDirective.prototype, "onTap", null);
HammertimeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[hammertime]'
    })
], HammertimeDirective);



/***/ }),

/***/ "./src/app/image-component/image-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/image-component/image-component.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n    .terminal {\n        position: relative;\n        padding-top: 30px;\n        border-radius: 6px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n        width: 400px;\n        height: 300px;\n        margin-top: 5%;\n    }\n  \n  \n    /* resize images */\n  \n  \n    .terminal img {\n        width: 100%;\n        height: auto;\n    }\n  \n  \n    .terminal::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n  \n  \n    .terminal pre {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n  \n  \n    /* Responsive Styles */\n  \n  \n    @media screen and (max-width: 767px) {\n  \n        .card-container>*:not(.circle-link),\n        .terminal {\n            width: 100%;\n        }\n  \n        .card:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n  \n        .card.highlight-card span {\n            margin-left: 72px;\n        }\n  \n        svg#rocket-smoke {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n  \n  \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke {\n            display: none;\n            visibility: hidden;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ltYWdlLWNvbXBvbmVudC9pbWFnZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7SUFDbEI7OztJQUdBLGtCQUFrQjs7O0lBQ2xCO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7OztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7OztJQUVBO1FBQ0ksd0VBQXdFO1FBQ3hFLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsU0FBUztJQUNiOzs7SUFDQyxzQkFBc0I7OztJQUN0Qjs7UUFFRzs7WUFFSSxXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxZQUFZO1lBQ1osYUFBYTtRQUNqQjs7UUFFQTtZQUNJLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLFlBQVk7WUFDWix3QkFBd0I7UUFDNUI7SUFDSjs7O0lBRUE7UUFDSTtZQUNJLGFBQWE7WUFDYixrQkFBa0I7UUFDdEI7SUFDSiIsImZpbGUiOiIuLi9pbWFnZS1jb21wb25lbnQvaW1hZ2UtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4gICAgLnRlcm1pbmFsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG4gIFxuICBcbiAgICAvKiByZXNpemUgaW1hZ2VzICovXG4gICAgLnRlcm1pbmFsIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICBcbiAgICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgICAgIGNvbG9yOiAjYzJjM2M0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMTRweCAwO1xuICAgICAgICB0ZXh0LWluZGVudDogNHB4O1xuICAgIH1cbiAgXG4gICAgLnRlcm1pbmFsIHByZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lcj4qOm5vdCguY2lyY2xlLWxpbmspLFxuICAgICAgICAudGVybWluYWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/image-component/image-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/image-component/image-component.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponentComponent", function() { return ImageComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! canvas */ "./node_modules/canvas/browser.js");
/* harmony import */ var canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






const ImageData = canvas__WEBPACK_IMPORTED_MODULE_3__["ImageData"];
face_api_js__WEBPACK_IMPORTED_MODULE_2__["env"].monkeyPatch({
    Canvas: HTMLCanvasElement,
    Image: HTMLImageElement,
    ImageData: ImageData,
    Video: HTMLVideoElement,
    createCanvasElement: () => document.createElement('canvas'),
    createImageElement: () => document.createElement('img')
});
let ImageComponentComponent = class ImageComponentComponent {
    constructor(document, toastr) {
        this.toastr = toastr;
        this.title = 'Facial recognition DEMO';
        this.inputSize = 512;
        this.scoreThreshold = 0.5;
        this.withFaceLandmarks = false; //disable face landmark detection
        this.withBoxes = true;
        this.doc = document;
        this.loading = false;
    }
    ngOnInit() {
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        setTimeout(() => {
            //load models
            console.log("start loading models");
            this.loadModels();
        }, 1000);
    }
    loadModels() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // load the models
            console.log("loading models");
            this.loading = true;
            const MODEL_URL = './assets/models/';
            yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["loadSsdMobilenetv1Model"](MODEL_URL);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["loadFaceLandmarkModel"](MODEL_URL);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["loadFaceRecognitionModel"](MODEL_URL);
            yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["loadFaceExpressionModel"](MODEL_URL);
            // await  faceapi.loadSsdMobilenetv1Model(MODEL_URL),
            // await faceapi.loadFaceLandmarkModel(MODEL_URL),
            // await  faceapi.loadFaceRecognitionModel(MODEL_URL)
            // await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
            // await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            // await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            // await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            // await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
            this.loading = false;
            this.toastr.success('Models Loaded!');
        });
    }
    onDetectFaces(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            let fullFaceDescriptions;
            this.loading = true;
            console.log(this.doc.getElementById("inputImage"));
            //detects faces
            this.htmlImageEl = this.doc.getElementById("inputImage");
            this.imageCanvas = this.doc.getElementById("overlayImage");
            console.log(this.htmlImageEl);
            fullFaceDescriptions = yield this.detectFaces(this.htmlImageEl, this.imageCanvas);
            yield this.faceRecognition(fullFaceDescriptions, this.imageCanvas, mode);
            this.loading = false;
            return fullFaceDescriptions;
        });
    }
    detectFaces(input, canvas) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            this.htmlImageEl = this.doc.getElementById("inputImage");
            let width = input['width'];
            let height = input['height'];
            const displaySize = { width: width, height: height };
            //resize the canvas to match the input image dimension
            face_api_js__WEBPACK_IMPORTED_MODULE_2__["matchDimensions"](canvas, displaySize);
            //var img = document.getElementById("inputImage");
            // let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
            let fullFaceDescriptions = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["detectAllFaces"](input);
            //let fullFaceDescriptions = await faceapi.detectSingleFace( this.htmlImageEl)
            //The returned bounding boxes and landmark positions are relative to the original image / media size. In case the displayed image size does not correspond to the original image size you can simply resize
            fullFaceDescriptions = face_api_js__WEBPACK_IMPORTED_MODULE_2__["resizeResults"](fullFaceDescriptions, input);
            console.log(fullFaceDescriptions);
            // faceapi.draw.drawDetections(canvas, fullFaceDescriptions)
            return fullFaceDescriptions;
        });
    }
    faceRecognition(fullFaceDescriptions, canvas, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            const labels = ['Barney', 'Lily', 'Marshall', 'Robin', 'Ted'];
            const labeledFaceDescriptors = yield Promise.all(labels.map((label) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                debugger;
                // fetch image data from urls and convert blob to HTMLImage element
                const imgUrl = '../assets/images/' + `${label}.jpeg`;
                const img = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["fetchImage"](imgUrl);
                // detect the face with the highest score in the image and compute it's landmarks and face descriptor
                const fullFaceDescription = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["detectSingleFace"](img).withFaceLandmarks().withFaceDescriptor();
                if (!fullFaceDescription) {
                    throw new Error(`no faces detected for ${label}`);
                }
                const faceDescriptors = [fullFaceDescription.descriptor];
                return new face_api_js__WEBPACK_IMPORTED_MODULE_2__["LabeledFaceDescriptors"](label, faceDescriptors);
            })));
            //match the face descriptors of the detected faces from our input image to our reference data
            // 0.6 is a good distance threshold value to judge
            // whether the descriptors match or not
            const maxDescriptorDistance = 0.6;
            console.log(labeledFaceDescriptors);
            console.log(fullFaceDescriptions);
            //match the face descriptors of the detected faces from our input image to our reference data
            const faceMatcher = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["FaceMatcher"](labeledFaceDescriptors, maxDescriptorDistance);
            console.log();
            const results = fullFaceDescriptions.map(function (fd) {
                console.log(fd);
                return { faceMatcher: faceMatcher.findBestMatch(fd['descriptor']), faceExpressions: fd['expressions'] };
            });
            results.forEach((bestMatch, i) => {
                debugger;
                console.log(bestMatch['faceExpressions']['angry']);
                let expressions = bestMatch['faceExpressions'];
                let recognize = bestMatch['faceMatcher'].toString().split(" ")[0];
                let max = Math.max.apply(null, Object.values(expressions));
                console.log(recognize);
                const box = fullFaceDescriptions[i]['detection']['box'];
                let text = "";
                if (mode === "expression") {
                    text = recognize + ":" + this.getKeyByValue((expressions), max);
                    this.toastr.success(this.getKeyByValue((expressions), max) + " " + recognize);
                }
                else {
                    text = recognize;
                }
                //draw the bounding boxes together with their labels into a canvas to display the results
                const drawBox = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["draw"].DrawBox(box, { label: text });
                drawBox.draw(canvas);
            });
        });
    }
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
};
ImageComponentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ImageComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/image-component/image-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-component.component.css */ "./src/app/image-component/image-component.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
], ImageComponentComponent);



/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





/** @title Responsive sidenav */
let FullComponent = class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.show = false;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    toggle() {
        this.show = !this.show;
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
};
FullComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] },
    { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }
];
FullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-full-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('ngIfAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])())
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('easeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0
                    }))
                ])
            ])
        ]
    })
], FullComponent);



/***/ }),

/***/ "./src/app/layouts/full/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppHeaderComponent = class AppHeaderComponent {
};
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html")).default
    })
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");




let AppSidebarComponent = class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
};
AppSidebarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
    { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }
];
AppSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html")).default
    })
], AppSidebarComponent);



/***/ }),

/***/ "./src/app/pipe/safe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/safe.pipe.ts ***!
  \***********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/responsivetoolbar/responsivetoolbar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/responsivetoolbar/responsivetoolbar.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mr {\n  margin-right: 0px;\n  color: white;\n  font-size: x-large;\n}\n\n.mat-toolbar-row {\n  background: #7449ad;\n  background-image: linear-gradient(to right, #4f2eb2, #6d24bb, #8b1eb7, #bb27af);\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n\n.mr {\n  -webkit-filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(80deg) brightness(98%) contrast(106%);\n          filter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(80deg) brightness(98%) contrast(106%);\n  height: 30;\n  size: 30;\n}\n\n.sticky {\n  z-index: 2;\n  position: -webkit-sticky;\n  position: fixed;\n}\n\n.mat-exp {\n  padding: 0 0px 0 px;\n}\n\n.mat-toolbar-row {\n  width: 100%;\n  height: 40px !important;\n}\n\n.user_ {\n  font-weight: 800;\n  font-size: 15px;\n  color: #034da2;\n}\n\n.icon {\n  font-size: 30px;\n  /* top: 14px; */\n  /* position: absolute; */\n  margin: 8px 15px;\n}\n\n.my-panel {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.collapsible {\n  overflow: hidden;\n}\n\nsection {\n  width: 360px;\n  background-color: lightgray;\n  font: 16px/20px sans-serif;\n  box-sizing: border-box;\n}\n\nsection.collapsible {\n  color: white;\n  background-color: coral;\n}\n\np {\n  margin: 0;\n  padding: 0px;\n}\n\naside {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Jlc3BvbnNpdmV0b29sYmFyL0Q6XFxQcm9qZWN0c1xcMiBPY3QgRmluYWwgcGF0Y2ggbGl2ZVxcc3JjXFxhcHBcXGNvbXBvbmVudHMvLi5cXHJlc3BvbnNpdmV0b29sYmFyXFxyZXNwb25zaXZldG9vbGJhci5jb21wb25lbnQuc2NzcyIsIi4uL3Jlc3BvbnNpdmV0b29sYmFyL3Jlc3BvbnNpdmV0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUVFLG1CQUFBO0VBRUEsK0VBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FDREY7O0FER0E7RUFDQSx1R0FBQTtVQUFBLCtGQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNBQTs7QURHQTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNBRjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxXQUFBO0VBQ0QsdUJBQUE7QUNGRDs7QURNQTtFQUVHLGdCQUFBO0VBQ0QsZUFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUVFLGVBQUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0xGOztBRFVBO0VBQ0UsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ1BGOztBRFVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNQSjs7QURlQztFQUNDLHFCQUFBO0FDWkYiLCJmaWxlIjoiLi4vcmVzcG9uc2l2ZXRvb2xiYXIvcmVzcG9uc2l2ZXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXIge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IHgtbGFyZ2Vcbn1cblxuLm1hdC10b29sYmFyLXJvd1xue1xuICBiYWNrZ3JvdW5kOiAjNzQ0OWFkO1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2xvZ28vZm9vdGVyd2F2ZXMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzRmMmViMiwjNmQyNGJiLCM4YjFlYjcsI2JiMjdhZik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5tcntcbmZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgyJSkgaHVlLXJvdGF0ZSg4MGRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwNiUpO1xuaGVpZ2h0OiAzMDtcbnNpemU6IDMwO1xufVxuXG4uc3RpY2t5IHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIFxufVxuXG4ubWF0LWV4cCB7XG4gIHBhZGRpbmc6IDAgMHB4IDAgIHB4O1xufVxuXG4ubWF0LXRvb2xiYXItcm93XG57XG4gIHdpZHRoOiAxMDAlO1xuIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5cbi51c2VyX1xue1xuICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAzNGRhMjtcbn1cblxuLmljb25cbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICAgIC8qIHRvcDogMTRweDsgKi9cbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgbWFyZ2luOiA4cHggMTVweDtcbn1cblxuLm15LXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG5cbi5jb2xsYXBzaWJsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnNlY3Rpb24ge1xuICB3aWR0aDogMzYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udDogMTZweC8yMHB4IHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnNlY3Rpb24uY29sbGFwc2libGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5hc2lkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4vLyBtYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQgPiAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbi8vICAgcGFkZGluZzogMCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4vLyAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDsgXG4vLyAgfVxuIDo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLy8gOmhvc3Qge1xuLy8gICA6Om5nLWRlZXAge1xuLy8gICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcge1xuLy8gICAgICAgbWFyZ2luOiAwcHggMCAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gYXBwLWluc3RydWN0aW9uIG1hdC1leHBhbnNpb24tcGFuZWwudHJpZ2dlci1wYW5lbCB7XG4vLyAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuLy8gICAgICAgcGFkZGluZzowO1xuLy8gICB9XG4vLyAgIH1cbi8vIGJ1dHRvbiB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMTVweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuIiwiLm1yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4ubWF0LXRvb2xiYXItcm93IHtcbiAgYmFja2dyb3VuZDogIzc0NDlhZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGYyZWIyLCAjNmQyNGJiLCAjOGIxZWI3LCAjYmIyN2FmKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4ubXIge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MiUpIGh1ZS1yb3RhdGUoODBkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDYlKTtcbiAgaGVpZ2h0OiAzMDtcbiAgc2l6ZTogMzA7XG59XG5cbi5zdGlja3kge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm1hdC1leHAge1xuICBwYWRkaW5nOiAwIDBweCAwIHB4O1xufVxuXG4ubWF0LXRvb2xiYXItcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4udXNlcl8ge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDM0ZGEyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgLyogdG9wOiAxNHB4OyAqL1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIG1hcmdpbjogOHB4IDE1cHg7XG59XG5cbi5teS1wYW5lbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb2xsYXBzaWJsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnNlY3Rpb24ge1xuICB3aWR0aDogMzYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udDogMTZweC8yMHB4IHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbnNlY3Rpb24uY29sbGFwc2libGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmFzaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/responsivetoolbar/responsivetoolbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/responsivetoolbar/responsivetoolbar.component.ts ***!
  \******************************************************************/
/*! exports provided: ResponsiveToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToolbarComponent", function() { return ResponsiveToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sectionthree/sectionthree.component */ "./src/app/components/sectionthree/sectionthree.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/previewhtmlpage/previewhtmlpage.component */ "./src/app/components/previewhtmlpage/previewhtmlpage.component.ts");















const DEFAULT_DURATION = 300;
let ResponsiveToolbarComponent = class ResponsiveToolbarComponent {
    // HideShowSwitch:any = true
    constructor(
    // private saveService: SectionthreeComponent,
    route, router, dialogService, dialog, modal, service, spinner, datePipe, location, breakpointObserver) {
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.modal = modal;
        this.service = service;
        this.spinner = spinner;
        this.datePipe = datePipe;
        this.location = location;
        this.breakpointObserver = breakpointObserver;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // Create a map to display breakpoint names for demonstration purposes.
        this.displayNameMap = new Map([
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall, 'XSmall'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small, 'Small'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium, 'Medium'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large, 'Large'],
            [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge, 'XLarge'],
        ]);
        // collapsed = false;
        this.show = false;
        this.customCollapsedHeight = '15px';
        this.customExpandedHeight = '10px';
        this.isSectionThree = 'false';
        // private isSectionThree: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.menuItems = [
            {
                label: 'User',
                icon: 'supervised_user_circle',
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true
            },
            {
                label: 'Book',
                icon: 'library_books',
                showOnMobile: false,
                showOnTablet: true,
                showOnDesktop: true
            },
            {
                label: 'Log Out',
                icon: 'login',
                showOnMobile: false,
                showOnTablet: true,
                showOnDesktop: true
            }
        ];
        this.HideCreateDocument = false;
        this.HideisCreatePO = false;
        this.HideisPageUpload = false;
        this.HideMasterMenu = false;
        debugger;
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Small,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Medium,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Large,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].XLarge,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed)).subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentScreenSize = this.displayNameMap.get(query);
                }
            }
        });
        this.userCategory = localStorage.getItem('userCategory');
        this.username = localStorage.getItem('username');
        this.isCreateDocument = localStorage.getItem('isCreateDocument');
        if (this.isCreateDocument == 'false') {
            debugger;
            this.HideCreateDocument = true;
        }
        this.isCreatePO = localStorage.getItem('isCreatePO');
        if (this.isCreatePO == 'false') {
            this.HideisCreatePO = true;
        }
        this.isPageUpload = localStorage.getItem('isPageUpload');
        if (this.isPageUpload == 'false') {
            this.HideisPageUpload = true;
        }
        if (this.isCreateDocument == 'false' && this.isCreatePO == 'false' && this.isPageUpload == 'false') {
            this.HideMasterMenu = true;
        }
        this.service.SharingData.subscribe((res) => {
            debugger;
            //this.isSectionThree = res;
            this.show = !res;
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    // toggle() {
    //   this.collapsed = !this.collapsed;
    // }
    toggle() {
        this.show = !this.show;
    }
    helpMe() {
        const pageurl = '/assets/HelpPages/page1.htm';
        // window.open('/assets/logo/page1.htm', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // window.open('assets/logo/page1.htm', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // window.open('src/assets/logo/page1.htm', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // window.open('/src/assets/logo/page1.htm', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // window.open(pageurl, '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        // window.open(pageurl.replace('/src', ''), '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
        var path = window.location.pathname;
        if (window.location.pathname == '/userprofile') {
            window.open('/assets/HelpPages/page1.htm', '', 'width=900,height=900,toolbar=0,scrollbars=0,status=0');
            // this.HelpLogView(path,'')
        }
        if (window.location.pathname == '/polist') {
            window.open('/assets/HelpPages/Page2.htm', '', 'width=900,height=900,toolbar=0,scrollbars=0,status=0');
            // this.HelpLogView(path,'')
        }
        if (this.router.url.indexOf('/pagelist') > -1) {
            window.open('/assets/HelpPages/page3.htm', '', 'width=900,height=900,toolbar=0,scrollbars=0,status=0');
            // this.HelpLogView(path,'')
        }
        if (this.router.url.indexOf('/sectionthree') > -1) {
            window.open('/assets/HelpPages/page4.htm', '', 'width=900,height=900,toolbar=0,scrollbars=0,status=0');
            // this.HelpLogView(path,'')
        }
    }
    HelpLogView(data, Type) {
        // var data = this.ImageList
        // var Type = 'Uploaded Files'
        const dialogRef = this.modal.open(_components_previewhtmlpage_previewhtmlpage_component__WEBPACK_IMPORTED_MODULE_13__["PreviewhtmlpageComponent"], {
            // disableClose: true,
            // height: '77%',
            // width: '77%',
            data: { data, Type },
        });
        dialogRef.afterClosed().subscribe(result => {
            debugger;
            // if(result == true){
            //  this.GetUserProfileDetails();
            // }
        });
    }
    get isLoggedIn() {
        debugger;
        return this.loggedIn.asObservable();
    }
    ngOnInit() {
        debugger;
        var param = this.route.snapshot.params.Id;
        var PageNo = this.route.snapshot.params.Id2;
        localStorage.setItem('PO_No', param);
        localStorage.setItem('Page', PageNo);
        // this.isLoggedIn$ = this.service.isLoggedIn;
    }
    back() {
        if (this.router.url.includes('sectionthree')) {
            this.router.navigate(['/pagelist/' + localStorage.getItem('PO_No')]);
        }
        else if (this.router.url.includes('pagelist')) {
            this.router.navigate(['/polist']);
        }
    }
    Logout() {
        debugger;
        this.dialogService.openDialog("Are you sure  want to logout ?", 'Confirm').afterClosed().subscribe(res => {
            debugger;
            if (res == true) {
                //this.router.navigate(['/login']);
                // localStorage.removeItem('userId');
                // localStorage.removeItem('token');
                this.passdata = {
                    'UserId': localStorage.getItem("userId"),
                    'Event': 'LOGOUT'
                };
                var data = {
                    "data": {
                        "content": btoa(JSON.stringify(this.passdata)),
                        "encryptCode": ""
                    },
                    "globalInfo": {
                        "latitude": "2.32.34.00",
                        "langitude": "12.232.12",
                        "deviceNo": "Hp",
                        "userName": localStorage.getItem("username"),
                        "requestTime": new Date(),
                        "interfaceCode": "I014",
                        "UserCategory": localStorage.getItem("userCategory"),
                        "userId": localStorage.getItem("userId")
                    },
                    "returnStateInfo": {
                        "returnMessage": "",
                        "returnCode": ""
                    }
                };
                this.service.logout(data).subscribe((res) => {
                    var data = JSON.parse(res);
                    if (data.returnStateInfo.returnMessage == 'Success') {
                        var msg = atob(data.data.content);
                        if (JSON.parse(msg).responseModel.status == true) {
                            this.dialogService.openDialog(JSON.parse(msg).responseModel.msg, 'Success');
                            localStorage.removeItem('userId');
                            localStorage.removeItem('token');
                            localStorage.clear();
                            this.loggedIn.next(false);
                            this.service.SwitchLogin.next({
                                PO_No: "",
                                Page: "",
                                ISSwitchlogin: false,
                                PrevUserId: ""
                            });
                            this.router.navigate(['/login']);
                        }
                        else {
                            this.dialogService.openDialog(JSON.parse(msg).responseModel.status.msg, 'Error');
                        }
                    }
                    else {
                        this.dialogService.openDialog(msg, 'Error');
                    }
                });
            }
            else {
                // this.spinner.hide();
            }
        });
    }
    GoToLogin() {
        debugger;
        this.service.SwitchLogin.next({
            PO_No: localStorage.getItem('PO_No'),
            Page: localStorage.getItem('Page'),
            ISSwitchlogin: true,
            PrevUserId: localStorage.getItem("userId")
        });
        this.router.navigate(['/login']);
    }
};
ResponsiveToolbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_7__["FetchapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_components_sectionthree_sectionthree_component__WEBPACK_IMPORTED_MODULE_10__["SectionthreeComponent"], { static: false })
], ResponsiveToolbarComponent.prototype, "child", void 0);
ResponsiveToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-responsive-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./responsivetoolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/responsivetoolbar/responsivetoolbar.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('ngIfAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':enter, :leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animateChild"])())
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('easeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                        opacity: 0
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                        opacity: 1
                    }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                        opacity: 1
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])("500ms ease-in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({
                        opacity: 0
                    }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./responsivetoolbar.component.scss */ "./src/app/responsivetoolbar/responsivetoolbar.component.scss")).default]
    })
], ResponsiveToolbarComponent);



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mat-confirm-dialog/mat-confirm-dialog.component */ "./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.ts");




// import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';
let DialogService = class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    // openDialog(msg,header){
    //  return this.dialog.open(MatConfirmDialogComponent,{
    //     width: '250px',
    //     panelClass: 'confirm-dialog-container',
    //     disableClose: true,
    //     position: { top: "50px" },
    //     data :{
    //       message : msg,
    //       header :  header
    //     }
    //   });
    //    }
    openDialog(msg, header) {
        debugger;
        return this.dialog.open(_shared_mat_confirm_dialog_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"], {
            data: {
                message: msg,
                header: header
            }
        });
    }
};
DialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DialogService);



/***/ }),

/***/ "./src/app/services/fetchapi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/fetchapi.service.ts ***!
  \**********************************************/
/*! exports provided: FetchapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchapiService", function() { return FetchapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FetchapiService = class FetchapiService {
    // API_URL:any = 'http://13.234.33.200:81/';
    // API_URL:any = 'http://localhost:57573/';
    constructor(http) {
        this.http = http;
        this.SharingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.SwitchLogin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            PO_No: "",
            Page: "",
            ISSwitchlogin: false,
            PrevUserId: ""
        });
    }
    getJSON(file) {
        debugger;
        return this.http.get("./assets/configs/" + file + ".json");
    }
    getSetting() {
        debugger;
        // use setting here
        //this.getJson('setting').subscribe(url => this.somevariable = url)
        this.getJSON('setting').subscribe(url => {
            debugger;
            this.API_URL = url.API_URL;
        });
    }
    login(username, password) {
        debugger;
        var encrytedstringify = {
            'UserName': username,
            'Pwd': password
        };
        var passdata = {
            "data": {
                "content": btoa(JSON.stringify(encrytedstringify)),
                "codeType": "0",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": "",
                "requestTime": new Date(),
                "interfaceCode": "I001",
                "UserCategory": "",
                "userId": ""
            },
            "returnStateInfo": {
                "returnCode": "",
                "returnMessage": ""
            }
        };
        // this.API_URL +
        return this.http.post(this.API_URL + 'api/GetInfo', passdata, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            debugger;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //   if(JSON.parse(user).res.status == true) {
            //       localStorage.setItem('currentUser',JSON.stringify(username));
            //       this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
            //      // localStorage.setItem('currentUser',JSON.parse(user).dt[0].UserName);
            //   }
            //  else
            //  {
            //   this.currentUserSubject.next(null);
            //   localStorage.removeItem('currentUser');
            //  }
            return user;
        }));
    }
    CreatDocument(passdata) {
        return this.http.post(this.API_URL + 'api/GetInfo', passdata);
    }
    GetUserProfileDetails() {
        debugger;
        this.passuserid = {
            'userId': localStorage.getItem("userId")
        };
        var passdata = {
            "data": {
                "content": btoa(JSON.stringify(this.passuserid)),
                "codeType": "0",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I002",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnCode": "",
                "returnMessage": ""
            }
        };
        return this.http.post(this.API_URL + 'api/GetInfo', passdata);
    }
    UpdateUserProfile(data) {
        debugger;
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getPOList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getBatchList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getItemList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    createPO(data) {
        debugger;
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getDepartmentList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getDocumentList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getDocumentAllList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    GetIconPermissionDetails(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    UploadPageinDoc(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getSiteList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getPoList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    GetPageList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getPageDetails(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getvalidateiconclik(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    updatePOStatus(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getFileUpload(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    ChangePassword(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    logout(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    recordFace(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    updateLogStatus(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    DataUploadClick(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    SaveBtnClick(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getFaceData(data) {
        // alert(this.API_URL)
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getSectionList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    getDemoHtml(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    SwitchLoginUserAuthority(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    GetReviewList(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    AddReview(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    ValidatePassword(data) {
        return this.http.post(this.API_URL + 'api/GetInfo', data);
    }
    faceLogin(username) {
        debugger;
        // var date = new Date();
        var encrytedstringify = {
            "userId": username
        };
        var passdata = {
            "data": {
                "content": btoa(JSON.stringify(encrytedstringify)),
                "codeType": "0",
                "encryptCode": "1"
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": "",
                "requestTime": new Date(),
                "interfaceCode": "I025",
                "UserCategory": "",
                "userId": ""
            },
            "returnStateInfo": {
                "returnCode": "",
                "returnMessage": ""
            }
        };
        return this.http.post(this.API_URL + 'api/GetInfo', passdata, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            debugger;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //   if(JSON.parse(user).res.status == true) {
            //       localStorage.setItem('currentUser',JSON.stringify(username));
            //       this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
            //      // localStorage.setItem('currentUser',JSON.parse(user).dt[0].UserName);
            //   }
            //  else
            //  {
            //   this.currentUserSubject.next(null);
            //   localStorage.removeItem('currentUser');
            //  }
            return user;
        }));
    }
};
FetchapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FetchapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FetchapiService);



/***/ }),

/***/ "./src/app/services/getset.ts":
/*!************************************!*\
  !*** ./src/app/services/getset.ts ***!
  \************************************/
/*! exports provided: getset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getset", function() { return getset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class getset {
    ;
}
getset.faceData = [];


/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AccordionDirective = class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .subscribe(e => this.checkOpenLinks());
    }
};
AccordionDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AccordionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordion]'
    })
], AccordionDirective);



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");



let AccordionAnchorDirective = class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
};
AccordionAnchorDirective.ctorParameters = () => [
    { type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]))
], AccordionAnchorDirective);



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");



let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
};
AccordionLinkDirective.ctorParameters = () => [
    { type: _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccordionLinkDirective.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selected'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AccordionLinkDirective.prototype, "selected", null);
AccordionLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]))
], AccordionLinkDirective);



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]; });







/***/ }),

/***/ "./src/app/shared/barchart/barchart.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/barchart/barchart.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d3-chart {\n  width: 100%;\n  height: 400px;\n}\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999;\n}\n\n.d3-chart .axis text {\n  fill: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9iYXJjaGFydC9iYXJjaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiLi4vc2hhcmVkL2JhcmNoYXJ0L2JhcmNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZDMtY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHBhdGgsXG4uZDMtY2hhcnQgLmF4aXMgbGluZSB7XG4gIHN0cm9rZTogIzk5OTtcbn1cblxuLmQzLWNoYXJ0IC5heGlzIHRleHQge1xuICBmaWxsOiAjOTk5O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/barchart/barchart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/barchart/barchart.component.ts ***!
  \*******************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



let BarchartComponent = class BarchartComponent {
    constructor() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
    }
    ngOnInit() {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    }
    ngOnChanges() {
        if (this.chart) {
            this.updateChart();
        }
    }
    createChart() {
        let element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        let svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // chart plot area
        this.chart = svg.append('g')
            .attr('class', 'bars')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
        // define X & Y domains
        let xDomain = this.data.map(d => d[0]);
        let yDomain = [0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.data, d => d[1])];
        // create scales
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(yDomain).range([this.height, 0]);
        // bar colors
        this.colors = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, this.data.length]).range(['red', 'blue']);
        // x & y axis
        this.xAxis = svg.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.xScale));
        this.yAxis = svg.append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.yScale));
    }
    updateChart() {
        // update scales & axis
        this.xScale.domain(this.data.map(d => d[0]));
        this.yScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.data, d => d[1])]);
        this.colors.domain([0, this.data.length]);
        this.xAxis.transition().call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.xScale));
        this.yAxis.transition().call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.yScale));
        let update = this.chart.selectAll('.bar')
            .data(this.data);
        // remove exiting bars
        update.exit().remove();
        // update existing bars
        this.chart.selectAll('.bar').transition()
            .attr('x', d => this.xScale(d[0]))
            .attr('y', d => this.yScale(d[1]))
            .attr('width', d => this.xScale.bandwidth())
            .attr('height', d => this.height - this.yScale(d[1]))
            .style('fill', (d, i) => this.colors(i));
        // add new bars
        update
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => this.xScale(d[0]))
            .attr('y', d => this.yScale(0))
            .attr('width', this.xScale.bandwidth())
            .attr('height', 0)
            .style('fill', (d, i) => this.colors(i))
            .transition()
            .delay((d, i) => i * 10)
            .attr('y', d => this.yScale(d[1]))
            .attr('height', d => this.height - this.yScale(d[1]));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: false })
], BarchartComponent.prototype, "chartContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BarchartComponent.prototype, "data", void 0);
BarchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-barchart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./barchart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/barchart/barchart.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./barchart.component.css */ "./src/app/shared/barchart/barchart.component.css")).default]
    })
], BarchartComponent);



/***/ }),

/***/ "./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-dialog-container {\r\n  background-color: #000;\r\n  width: 250px;\r\n  height: 250px\r\n}\r\n\r\n\r\n.mat-dialog-actions\r\n{\r\nfloat: right;\r\n\r\n}\r\n\r\n\r\n.alert .error .success\r\n{\r\ntext-transform: uppercase;\r\ncolor: #000;\r\n\r\n}\r\n\r\n\r\nh1{\r\nmargin-left: 15px;\r\ntop: -6px;\r\npadding: 0px !important;\r\n}\r\n\r\n\r\n.fx_\r\n{\r\ndisplay: flex;\r\nflex-direction: row;\r\n}\r\n\r\n\r\n.var {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.var span{\r\ncolor: grey;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9tYXQtY29uZmlybS1kaWFsb2cvbWF0LWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaO0FBQ0Y7OztBQUdBOztBQUVBLFlBQVk7O0FBRVo7OztBQUdBOztBQUVBLHlCQUF5QjtBQUN6QixXQUFXOztBQUVYOzs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCOzs7QUFHQTs7QUFFQSxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25COzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBQ0E7QUFDQSxXQUFXO0FBQ1giLCJmaWxlIjoiLi4vc2hhcmVkL21hdC1jb25maXJtLWRpYWxvZy9tYXQtY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4XHJcbn1cclxuXHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zXHJcbntcclxuZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuXHJcbi5hbGVydCAuZXJyb3IgLnN1Y2Nlc3Ncclxue1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5jb2xvcjogIzAwMDtcclxuXHJcbn1cclxuXHJcbmgxe1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxudG9wOiAtNnB4O1xyXG5wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5meF9cclxue1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4udmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi52YXIgc3BhbntcclxuY29sb3I6IGdyZXk7XHJcbn1cclxuICBcclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: MatConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatConfirmDialogComponent", function() { return MatConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MatConfirmDialogComponent = class MatConfirmDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialogRef.close(false);
    }
};
MatConfirmDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
MatConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mat-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-confirm-dialog.component.css */ "./src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MatConfirmDialogComponent);



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    {
        state: 'expansion',
        type: 'link',
        name: 'Expansion Panel',
        icon: 'vertical_align_center'
    },
    { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    {
        state: 'progress-snipper',
        type: 'link',
        name: 'Progress snipper',
        icon: 'border_horizontal'
    },
    {
        state: 'progress',
        type: 'link',
        name: 'Progress Bar',
        icon: 'blur_circular'
    },
    {
        state: 'dialog',
        type: 'link',
        name: 'Dialog',
        icon: 'assignment_turned_in'
    },
    { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    {
        state: 'slide-toggle',
        type: 'link',
        name: 'Slide Toggle',
        icon: 'all_inclusive'
    }
];
let MenuItems = class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
};
MenuItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MenuItems);



/***/ }),

/***/ "./src/app/shared/miserables/miserables.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/miserables/miserables.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d3-miserables {\n  width: 100%;\n  height: 400px;\n}\n\n.links line {\n  stroke: orangered;\n  stroke-opacity: 0.6;\n}\n\n.nodes circle {\n  stroke: #fff;\n  stroke-width: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlZC9taXNlcmFibGVzL21pc2VyYWJsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiIuLi9zaGFyZWQvbWlzZXJhYmxlcy9taXNlcmFibGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZDMtbWlzZXJhYmxlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4ubGlua3MgbGluZSB7XG4gIHN0cm9rZTogb3JhbmdlcmVkO1xuICBzdHJva2Utb3BhY2l0eTogMC42O1xufVxuXG4ubm9kZXMgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmZmO1xuICBzdHJva2Utd2lkdGg6IDVweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/shared/miserables/miserables.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/miserables/miserables.component.ts ***!
  \***********************************************************/
/*! exports provided: MiserablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiserablesComponent", function() { return MiserablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _miserables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miserables */ "./src/app/shared/miserables/miserables.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




let MiserablesComponent = class MiserablesComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("svg");
        var width = +this.svg.attr("width");
        var height = +this.svg.attr("height");
        this.color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_3__["schemeCategory10"]);
        this.simulation = d3__WEBPACK_IMPORTED_MODULE_3__["forceSimulation"]()
            // TODO - Fix below link
            .force("link", d3__WEBPACK_IMPORTED_MODULE_3__["forceLink"]().id(function (d) { return d['id']; }))
            .force("charge", d3__WEBPACK_IMPORTED_MODULE_3__["forceManyBody"]())
            .force("center", d3__WEBPACK_IMPORTED_MODULE_3__["forceCenter"](width / 2, height / 2));
        this.render(_miserables__WEBPACK_IMPORTED_MODULE_2__["miserables"]);
    }
    ticked() {
        this.link
            .attr("x1", function (d) {
            console.log(d['source']);
            return d['source'];
        })
            .attr("y1", function (d) { return d['source']['y']; })
            .attr("x2", function (d) { return d['target']['x']; })
            .attr('y2', function (d) { return d['target']['y']; });
        this.node
            .attr('cx', function (d) { return d['x']; })
            .attr('cy', function (d) { return d['y']; });
    }
    render(graph) {
        console.log(graph);
        this.link = this.svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(graph['links'])
            .enter().append('line')
            .attr('stroke-width', function (d) { return Math.sqrt(d.value); });
        this.node = this.svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(graph.nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', (d) => { return this.color(d.group); })
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["drag"]()
            .on('start', (d) => { return this.dragstarted(d); })
            .on('drag', (d) => { return this.dragged(d); })
            .on('end', (d) => { return this.dragended(d); }));
        this.node.append('title')
            .text(function (d) { return d.id; });
        this.simulation
            .nodes(graph.nodes)
            .on('tick', () => { return this.ticked(); });
        console.log(this.simulation.force('link'));
        this.simulation.force('link')
            .links(graph.links);
    }
    dragged(d) {
        d.fx = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
        d.fy = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
    }
    dragended(d) {
        if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active)
            this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
    dragstarted(d) {
        if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active)
            this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    ngOnDestroy() {
    }
};
MiserablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-miserables',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./miserables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/miserables/miserables.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./miserables.component.css */ "./src/app/shared/miserables/miserables.component.css")).default]
    })
], MiserablesComponent);



/***/ }),

/***/ "./src/app/shared/miserables/miserables.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/miserables/miserables.ts ***!
  \*************************************************/
/*! exports provided: miserables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miserables", function() { return miserables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var miserables = {
    "nodes": [
        { "id": "Myriel", "group": 1 },
        { "id": "Napoleon", "group": 1 },
        { "id": "Mlle.Baptistine", "group": 1 },
        { "id": "Mme.Magloire", "group": 1 },
        { "id": "CountessdeLo", "group": 1 },
        { "id": "Geborand", "group": 1 },
        { "id": "Champtercier", "group": 1 },
        { "id": "Cravatte", "group": 1 },
        { "id": "Count", "group": 1 },
        { "id": "OldMan", "group": 1 },
        { "id": "Labarre", "group": 2 },
        { "id": "Valjean", "group": 2 },
        { "id": "Marguerite", "group": 3 },
        { "id": "Mme.deR", "group": 2 },
        { "id": "Isabeau", "group": 2 },
        { "id": "Gervais", "group": 2 },
        { "id": "Tholomyes", "group": 3 },
        { "id": "Listolier", "group": 3 },
        { "id": "Fameuil", "group": 3 },
        { "id": "Blacheville", "group": 3 },
        { "id": "Favourite", "group": 3 },
        { "id": "Dahlia", "group": 3 },
        { "id": "Zephine", "group": 3 },
        { "id": "Fantine", "group": 3 },
        { "id": "Mme.Thenardier", "group": 4 },
        { "id": "Thenardier", "group": 4 },
        { "id": "Cosette", "group": 5 },
        { "id": "Javert", "group": 4 },
        { "id": "Fauchelevent", "group": 0 },
        { "id": "Bamatabois", "group": 2 },
        { "id": "Perpetue", "group": 3 },
        { "id": "Simplice", "group": 2 },
        { "id": "Scaufflaire", "group": 2 },
        { "id": "Woman1", "group": 2 },
        { "id": "Judge", "group": 2 },
        { "id": "Champmathieu", "group": 2 },
        { "id": "Brevet", "group": 2 },
        { "id": "Chenildieu", "group": 2 },
        { "id": "Cochepaille", "group": 2 },
        { "id": "Pontmercy", "group": 4 },
        { "id": "Boulatruelle", "group": 6 },
        { "id": "Eponine", "group": 4 },
        { "id": "Anzelma", "group": 4 },
        { "id": "Woman2", "group": 5 },
        { "id": "MotherInnocent", "group": 0 },
        { "id": "Gribier", "group": 0 },
        { "id": "Jondrette", "group": 7 },
        { "id": "Mme.Burgon", "group": 7 },
        { "id": "Gavroche", "group": 8 },
        { "id": "Gillenormand", "group": 5 },
        { "id": "Magnon", "group": 5 },
        { "id": "Mlle.Gillenormand", "group": 5 },
        { "id": "Mme.Pontmercy", "group": 5 },
        { "id": "Mlle.Vaubois", "group": 5 },
        { "id": "Lt.Gillenormand", "group": 5 },
        { "id": "Marius", "group": 8 },
        { "id": "BaronessT", "group": 5 },
        { "id": "Mabeuf", "group": 8 },
        { "id": "Enjolras", "group": 8 },
        { "id": "Combeferre", "group": 8 },
        { "id": "Prouvaire", "group": 8 },
        { "id": "Feuilly", "group": 8 },
        { "id": "Courfeyrac", "group": 8 },
        { "id": "Bahorel", "group": 8 },
        { "id": "Bossuet", "group": 8 },
        { "id": "Joly", "group": 8 },
        { "id": "Grantaire", "group": 8 },
        { "id": "MotherPlutarch", "group": 9 },
        { "id": "Gueulemer", "group": 4 },
        { "id": "Babet", "group": 4 },
        { "id": "Claquesous", "group": 4 },
        { "id": "Montparnasse", "group": 4 },
        { "id": "Toussaint", "group": 5 },
        { "id": "Child1", "group": 10 },
        { "id": "Child2", "group": 10 },
        { "id": "Brujon", "group": 4 },
        { "id": "Mme.Hucheloup", "group": 8 }
    ],
    "links": [
        { "source": "Napoleon", "target": "Myriel", "value": 1 },
        { "source": "Mlle.Baptistine", "target": "Myriel", "value": 8 },
        { "source": "Mme.Magloire", "target": "Myriel", "value": 10 },
        { "source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6 },
        { "source": "CountessdeLo", "target": "Myriel", "value": 1 },
        { "source": "Geborand", "target": "Myriel", "value": 1 },
        { "source": "Champtercier", "target": "Myriel", "value": 1 },
        { "source": "Cravatte", "target": "Myriel", "value": 1 },
        { "source": "Count", "target": "Myriel", "value": 2 },
        { "source": "OldMan", "target": "Myriel", "value": 1 },
        { "source": "Valjean", "target": "Labarre", "value": 1 },
        { "source": "Valjean", "target": "Mme.Magloire", "value": 3 },
        { "source": "Valjean", "target": "Mlle.Baptistine", "value": 3 },
        { "source": "Valjean", "target": "Myriel", "value": 5 },
        { "source": "Marguerite", "target": "Valjean", "value": 1 },
        { "source": "Mme.deR", "target": "Valjean", "value": 1 },
        { "source": "Isabeau", "target": "Valjean", "value": 1 },
        { "source": "Gervais", "target": "Valjean", "value": 1 },
        { "source": "Listolier", "target": "Tholomyes", "value": 4 },
        { "source": "Fameuil", "target": "Tholomyes", "value": 4 },
        { "source": "Fameuil", "target": "Listolier", "value": 4 },
        { "source": "Blacheville", "target": "Tholomyes", "value": 4 },
        { "source": "Blacheville", "target": "Listolier", "value": 4 },
        { "source": "Blacheville", "target": "Fameuil", "value": 4 },
        { "source": "Favourite", "target": "Tholomyes", "value": 3 },
        { "source": "Favourite", "target": "Listolier", "value": 3 },
        { "source": "Favourite", "target": "Fameuil", "value": 3 },
        { "source": "Favourite", "target": "Blacheville", "value": 4 },
        { "source": "Dahlia", "target": "Tholomyes", "value": 3 },
        { "source": "Dahlia", "target": "Listolier", "value": 3 },
        { "source": "Dahlia", "target": "Fameuil", "value": 3 },
        { "source": "Dahlia", "target": "Blacheville", "value": 3 },
        { "source": "Dahlia", "target": "Favourite", "value": 5 },
        { "source": "Zephine", "target": "Tholomyes", "value": 3 },
        { "source": "Zephine", "target": "Listolier", "value": 3 },
        { "source": "Zephine", "target": "Fameuil", "value": 3 },
        { "source": "Zephine", "target": "Blacheville", "value": 3 },
        { "source": "Zephine", "target": "Favourite", "value": 4 },
        { "source": "Zephine", "target": "Dahlia", "value": 4 },
        { "source": "Fantine", "target": "Tholomyes", "value": 3 },
        { "source": "Fantine", "target": "Listolier", "value": 3 },
        { "source": "Fantine", "target": "Fameuil", "value": 3 },
        { "source": "Fantine", "target": "Blacheville", "value": 3 },
        { "source": "Fantine", "target": "Favourite", "value": 4 },
        { "source": "Fantine", "target": "Dahlia", "value": 4 },
        { "source": "Fantine", "target": "Zephine", "value": 4 },
        { "source": "Fantine", "target": "Marguerite", "value": 2 },
        { "source": "Fantine", "target": "Valjean", "value": 9 },
        { "source": "Mme.Thenardier", "target": "Fantine", "value": 2 },
        { "source": "Mme.Thenardier", "target": "Valjean", "value": 7 },
        { "source": "Thenardier", "target": "Mme.Thenardier", "value": 13 },
        { "source": "Thenardier", "target": "Fantine", "value": 1 },
        { "source": "Thenardier", "target": "Valjean", "value": 12 },
        { "source": "Cosette", "target": "Mme.Thenardier", "value": 4 },
        { "source": "Cosette", "target": "Valjean", "value": 31 },
        { "source": "Cosette", "target": "Tholomyes", "value": 1 },
        { "source": "Cosette", "target": "Thenardier", "value": 1 },
        { "source": "Javert", "target": "Valjean", "value": 17 },
        { "source": "Javert", "target": "Fantine", "value": 5 },
        { "source": "Javert", "target": "Thenardier", "value": 5 },
        { "source": "Javert", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Javert", "target": "Cosette", "value": 1 },
        { "source": "Fauchelevent", "target": "Valjean", "value": 8 },
        { "source": "Fauchelevent", "target": "Javert", "value": 1 },
        { "source": "Bamatabois", "target": "Fantine", "value": 1 },
        { "source": "Bamatabois", "target": "Javert", "value": 1 },
        { "source": "Bamatabois", "target": "Valjean", "value": 2 },
        { "source": "Perpetue", "target": "Fantine", "value": 1 },
        { "source": "Simplice", "target": "Perpetue", "value": 2 },
        { "source": "Simplice", "target": "Valjean", "value": 3 },
        { "source": "Simplice", "target": "Fantine", "value": 2 },
        { "source": "Simplice", "target": "Javert", "value": 1 },
        { "source": "Scaufflaire", "target": "Valjean", "value": 1 },
        { "source": "Woman1", "target": "Valjean", "value": 2 },
        { "source": "Woman1", "target": "Javert", "value": 1 },
        { "source": "Judge", "target": "Valjean", "value": 3 },
        { "source": "Judge", "target": "Bamatabois", "value": 2 },
        { "source": "Champmathieu", "target": "Valjean", "value": 3 },
        { "source": "Champmathieu", "target": "Judge", "value": 3 },
        { "source": "Champmathieu", "target": "Bamatabois", "value": 2 },
        { "source": "Brevet", "target": "Judge", "value": 2 },
        { "source": "Brevet", "target": "Champmathieu", "value": 2 },
        { "source": "Brevet", "target": "Valjean", "value": 2 },
        { "source": "Brevet", "target": "Bamatabois", "value": 1 },
        { "source": "Chenildieu", "target": "Judge", "value": 2 },
        { "source": "Chenildieu", "target": "Champmathieu", "value": 2 },
        { "source": "Chenildieu", "target": "Brevet", "value": 2 },
        { "source": "Chenildieu", "target": "Valjean", "value": 2 },
        { "source": "Chenildieu", "target": "Bamatabois", "value": 1 },
        { "source": "Cochepaille", "target": "Judge", "value": 2 },
        { "source": "Cochepaille", "target": "Champmathieu", "value": 2 },
        { "source": "Cochepaille", "target": "Brevet", "value": 2 },
        { "source": "Cochepaille", "target": "Chenildieu", "value": 2 },
        { "source": "Cochepaille", "target": "Valjean", "value": 2 },
        { "source": "Cochepaille", "target": "Bamatabois", "value": 1 },
        { "source": "Pontmercy", "target": "Thenardier", "value": 1 },
        { "source": "Boulatruelle", "target": "Thenardier", "value": 1 },
        { "source": "Eponine", "target": "Mme.Thenardier", "value": 2 },
        { "source": "Eponine", "target": "Thenardier", "value": 3 },
        { "source": "Anzelma", "target": "Eponine", "value": 2 },
        { "source": "Anzelma", "target": "Thenardier", "value": 2 },
        { "source": "Anzelma", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Woman2", "target": "Valjean", "value": 3 },
        { "source": "Woman2", "target": "Cosette", "value": 1 },
        { "source": "Woman2", "target": "Javert", "value": 1 },
        { "source": "MotherInnocent", "target": "Fauchelevent", "value": 3 },
        { "source": "MotherInnocent", "target": "Valjean", "value": 1 },
        { "source": "Gribier", "target": "Fauchelevent", "value": 2 },
        { "source": "Mme.Burgon", "target": "Jondrette", "value": 1 },
        { "source": "Gavroche", "target": "Mme.Burgon", "value": 2 },
        { "source": "Gavroche", "target": "Thenardier", "value": 1 },
        { "source": "Gavroche", "target": "Javert", "value": 1 },
        { "source": "Gavroche", "target": "Valjean", "value": 1 },
        { "source": "Gillenormand", "target": "Cosette", "value": 3 },
        { "source": "Gillenormand", "target": "Valjean", "value": 2 },
        { "source": "Magnon", "target": "Gillenormand", "value": 1 },
        { "source": "Magnon", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Mlle.Gillenormand", "target": "Gillenormand", "value": 9 },
        { "source": "Mlle.Gillenormand", "target": "Cosette", "value": 2 },
        { "source": "Mlle.Gillenormand", "target": "Valjean", "value": 2 },
        { "source": "Mme.Pontmercy", "target": "Mlle.Gillenormand", "value": 1 },
        { "source": "Mme.Pontmercy", "target": "Pontmercy", "value": 1 },
        { "source": "Mlle.Vaubois", "target": "Mlle.Gillenormand", "value": 1 },
        { "source": "Lt.Gillenormand", "target": "Mlle.Gillenormand", "value": 2 },
        { "source": "Lt.Gillenormand", "target": "Gillenormand", "value": 1 },
        { "source": "Lt.Gillenormand", "target": "Cosette", "value": 1 },
        { "source": "Marius", "target": "Mlle.Gillenormand", "value": 6 },
        { "source": "Marius", "target": "Gillenormand", "value": 12 },
        { "source": "Marius", "target": "Pontmercy", "value": 1 },
        { "source": "Marius", "target": "Lt.Gillenormand", "value": 1 },
        { "source": "Marius", "target": "Cosette", "value": 21 },
        { "source": "Marius", "target": "Valjean", "value": 19 },
        { "source": "Marius", "target": "Tholomyes", "value": 1 },
        { "source": "Marius", "target": "Thenardier", "value": 2 },
        { "source": "Marius", "target": "Eponine", "value": 5 },
        { "source": "Marius", "target": "Gavroche", "value": 4 },
        { "source": "BaronessT", "target": "Gillenormand", "value": 1 },
        { "source": "BaronessT", "target": "Marius", "value": 1 },
        { "source": "Mabeuf", "target": "Marius", "value": 1 },
        { "source": "Mabeuf", "target": "Eponine", "value": 1 },
        { "source": "Mabeuf", "target": "Gavroche", "value": 1 },
        { "source": "Enjolras", "target": "Marius", "value": 7 },
        { "source": "Enjolras", "target": "Gavroche", "value": 7 },
        { "source": "Enjolras", "target": "Javert", "value": 6 },
        { "source": "Enjolras", "target": "Mabeuf", "value": 1 },
        { "source": "Enjolras", "target": "Valjean", "value": 4 },
        { "source": "Combeferre", "target": "Enjolras", "value": 15 },
        { "source": "Combeferre", "target": "Marius", "value": 5 },
        { "source": "Combeferre", "target": "Gavroche", "value": 6 },
        { "source": "Combeferre", "target": "Mabeuf", "value": 2 },
        { "source": "Prouvaire", "target": "Gavroche", "value": 1 },
        { "source": "Prouvaire", "target": "Enjolras", "value": 4 },
        { "source": "Prouvaire", "target": "Combeferre", "value": 2 },
        { "source": "Feuilly", "target": "Gavroche", "value": 2 },
        { "source": "Feuilly", "target": "Enjolras", "value": 6 },
        { "source": "Feuilly", "target": "Prouvaire", "value": 2 },
        { "source": "Feuilly", "target": "Combeferre", "value": 5 },
        { "source": "Feuilly", "target": "Mabeuf", "value": 1 },
        { "source": "Feuilly", "target": "Marius", "value": 1 },
        { "source": "Courfeyrac", "target": "Marius", "value": 9 },
        { "source": "Courfeyrac", "target": "Enjolras", "value": 17 },
        { "source": "Courfeyrac", "target": "Combeferre", "value": 13 },
        { "source": "Courfeyrac", "target": "Gavroche", "value": 7 },
        { "source": "Courfeyrac", "target": "Mabeuf", "value": 2 },
        { "source": "Courfeyrac", "target": "Eponine", "value": 1 },
        { "source": "Courfeyrac", "target": "Feuilly", "value": 6 },
        { "source": "Courfeyrac", "target": "Prouvaire", "value": 3 },
        { "source": "Bahorel", "target": "Combeferre", "value": 5 },
        { "source": "Bahorel", "target": "Gavroche", "value": 5 },
        { "source": "Bahorel", "target": "Courfeyrac", "value": 6 },
        { "source": "Bahorel", "target": "Mabeuf", "value": 2 },
        { "source": "Bahorel", "target": "Enjolras", "value": 4 },
        { "source": "Bahorel", "target": "Feuilly", "value": 3 },
        { "source": "Bahorel", "target": "Prouvaire", "value": 2 },
        { "source": "Bahorel", "target": "Marius", "value": 1 },
        { "source": "Bossuet", "target": "Marius", "value": 5 },
        { "source": "Bossuet", "target": "Courfeyrac", "value": 12 },
        { "source": "Bossuet", "target": "Gavroche", "value": 5 },
        { "source": "Bossuet", "target": "Bahorel", "value": 4 },
        { "source": "Bossuet", "target": "Enjolras", "value": 10 },
        { "source": "Bossuet", "target": "Feuilly", "value": 6 },
        { "source": "Bossuet", "target": "Prouvaire", "value": 2 },
        { "source": "Bossuet", "target": "Combeferre", "value": 9 },
        { "source": "Bossuet", "target": "Mabeuf", "value": 1 },
        { "source": "Bossuet", "target": "Valjean", "value": 1 },
        { "source": "Joly", "target": "Bahorel", "value": 5 },
        { "source": "Joly", "target": "Bossuet", "value": 7 },
        { "source": "Joly", "target": "Gavroche", "value": 3 },
        { "source": "Joly", "target": "Courfeyrac", "value": 5 },
        { "source": "Joly", "target": "Enjolras", "value": 5 },
        { "source": "Joly", "target": "Feuilly", "value": 5 },
        { "source": "Joly", "target": "Prouvaire", "value": 2 },
        { "source": "Joly", "target": "Combeferre", "value": 5 },
        { "source": "Joly", "target": "Mabeuf", "value": 1 },
        { "source": "Joly", "target": "Marius", "value": 2 },
        { "source": "Grantaire", "target": "Bossuet", "value": 3 },
        { "source": "Grantaire", "target": "Enjolras", "value": 3 },
        { "source": "Grantaire", "target": "Combeferre", "value": 1 },
        { "source": "Grantaire", "target": "Courfeyrac", "value": 2 },
        { "source": "Grantaire", "target": "Joly", "value": 2 },
        { "source": "Grantaire", "target": "Gavroche", "value": 1 },
        { "source": "Grantaire", "target": "Bahorel", "value": 1 },
        { "source": "Grantaire", "target": "Feuilly", "value": 1 },
        { "source": "Grantaire", "target": "Prouvaire", "value": 1 },
        { "source": "MotherPlutarch", "target": "Mabeuf", "value": 3 },
        { "source": "Gueulemer", "target": "Thenardier", "value": 5 },
        { "source": "Gueulemer", "target": "Valjean", "value": 1 },
        { "source": "Gueulemer", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Gueulemer", "target": "Javert", "value": 1 },
        { "source": "Gueulemer", "target": "Gavroche", "value": 1 },
        { "source": "Gueulemer", "target": "Eponine", "value": 1 },
        { "source": "Babet", "target": "Thenardier", "value": 6 },
        { "source": "Babet", "target": "Gueulemer", "value": 6 },
        { "source": "Babet", "target": "Valjean", "value": 1 },
        { "source": "Babet", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Babet", "target": "Javert", "value": 2 },
        { "source": "Babet", "target": "Gavroche", "value": 1 },
        { "source": "Babet", "target": "Eponine", "value": 1 },
        { "source": "Claquesous", "target": "Thenardier", "value": 4 },
        { "source": "Claquesous", "target": "Babet", "value": 4 },
        { "source": "Claquesous", "target": "Gueulemer", "value": 4 },
        { "source": "Claquesous", "target": "Valjean", "value": 1 },
        { "source": "Claquesous", "target": "Mme.Thenardier", "value": 1 },
        { "source": "Claquesous", "target": "Javert", "value": 1 },
        { "source": "Claquesous", "target": "Eponine", "value": 1 },
        { "source": "Claquesous", "target": "Enjolras", "value": 1 },
        { "source": "Montparnasse", "target": "Javert", "value": 1 },
        { "source": "Montparnasse", "target": "Babet", "value": 2 },
        { "source": "Montparnasse", "target": "Gueulemer", "value": 2 },
        { "source": "Montparnasse", "target": "Claquesous", "value": 2 },
        { "source": "Montparnasse", "target": "Valjean", "value": 1 },
        { "source": "Montparnasse", "target": "Gavroche", "value": 1 },
        { "source": "Montparnasse", "target": "Eponine", "value": 1 },
        { "source": "Montparnasse", "target": "Thenardier", "value": 1 },
        { "source": "Toussaint", "target": "Cosette", "value": 2 },
        { "source": "Toussaint", "target": "Javert", "value": 1 },
        { "source": "Toussaint", "target": "Valjean", "value": 1 },
        { "source": "Child1", "target": "Gavroche", "value": 2 },
        { "source": "Child2", "target": "Gavroche", "value": 2 },
        { "source": "Child2", "target": "Child1", "value": 3 },
        { "source": "Brujon", "target": "Babet", "value": 3 },
        { "source": "Brujon", "target": "Gueulemer", "value": 3 },
        { "source": "Brujon", "target": "Thenardier", "value": 3 },
        { "source": "Brujon", "target": "Gavroche", "value": 1 },
        { "source": "Brujon", "target": "Eponine", "value": 1 },
        { "source": "Brujon", "target": "Claquesous", "value": 1 },
        { "source": "Brujon", "target": "Montparnasse", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Bossuet", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Joly", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Grantaire", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Bahorel", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Courfeyrac", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Gavroche", "value": 1 },
        { "source": "Mme.Hucheloup", "target": "Enjolras", "value": 1 }
    ]
};


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]
        ],
        exports: [
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"]
        ],
        providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpinnerComponent.prototype, "backgroundColor", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], SpinnerComponent);



/***/ }),

/***/ "./src/app/takesnap/takesnap.component.css":
/*!*************************************************!*\
  !*** ./src/app/takesnap/takesnap.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #F0F0F0;\r\n}\r\n#app {\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    /* margin-top: 60px; */\r\n}\r\n#video {\r\n    background-color: #000000;\r\n}\r\n#canvas {\r\n    display: none;\r\n}\r\nli {\r\n    display: inline;\r\n    padding: 5px;\r\n}\r\n.terminal {\r\n    position: relative;\r\n    padding-top: 30px;\r\n    border-radius: 6px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: #fafafa;\r\n    width: 400px;\r\n    height: 300px;\r\n    margin-top: 5%;\r\n}\r\n.terminal img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.terminal::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n}\r\n.terminal pre {\r\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n}\r\n@media screen and (max-width: 767px) {\r\n\r\n    .card-container>*:not(.circle-link),\r\n    .terminal {\r\n        width: 100%;\r\n    }\r\n    .terminal{\r\n        max-width: 250px;\r\n    }\r\n\r\n   \r\n}\r\n/* /////// */\r\n/* .container {\r\n    /* position: relative;\r\n    margin-top: 50px;\r\n    width: 500px;\r\n    height: 300px; \r\n  } */\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0);\r\n    transition: background 0.5s ease;\r\n  }\r\n.container:hover .overlay {\r\n    display: block;\r\n    background: rgba(0, 0, 0, .3);\r\n  }\r\n/* img {\r\n    position: absolute;\r\n    width: 500px;\r\n    height: 300px;\r\n    left: 0;\r\n  } */\r\n.title {\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 0;\r\n    top: 120px;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    z-index: 1;\r\n    transition: top .5s ease;\r\n  }\r\n.container:hover .title {\r\n    top: 90px;\r\n  }\r\n.button {\r\n    /* position: absolute;\r\n    width: 500px;\r\n    left:0;\r\n    top: 180px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .35s ease; */\r\n    position: relative;\r\n    top: -80px;\r\n     opacity: 0;\r\n    \r\n  }\r\n.button a {\r\n    width: 200px;\r\n    padding: 12px 48px;\r\n    text-align: center;\r\n    color: white;\r\n    border: solid 2px white;\r\n    z-index: 1;\r\n  }\r\n.container:hover .button {\r\n    opacity: 1;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Rha2VzbmFwL3Rha2VzbmFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksd0VBQXdFO0lBQ3hFLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztBQUNiO0FBR0E7O0lBRUk7O1FBRUksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7OztBQUdKO0FBS0EsWUFBWTtBQUdaOzs7OztLQUtLO0FBRUg7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLGNBQWM7SUFDZCw2QkFBNkI7RUFDL0I7QUFFQTs7Ozs7S0FLRztBQUVIO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0UsU0FBUztFQUNYO0FBRUE7SUFDRTs7Ozs7O29DQU1nQztJQUNoQyxrQkFBa0I7SUFDbEIsVUFBVTtLQUNULFVBQVU7O0VBRWI7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaO0FBRUE7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoiLi4vdGFrZXNuYXAvdGFrZXNuYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxufVxyXG4jYXBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgLyogbWFyZ2luLXRvcDogNjBweDsgKi9cclxufVxyXG4jdmlkZW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4jY2FudmFzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5cclxuLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXI+Kjpub3QoLmNpcmNsZS1saW5rKSxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGVybWluYWx7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiAvLy8vLy8vICovXHJcblxyXG5cclxuLyogLmNvbnRhaW5lciB7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDsgXHJcbiAgfSAqL1xyXG4gIFxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIH1cclxuICBcclxuICAvKiBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAxMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IHRvcCAuNXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcjpob3ZlciAudGl0bGUge1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC04MHB4O1xyXG4gICAgIG9wYWNpdHk6IDA7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBhIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEycHggNDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcjpob3ZlciAuYnV0dG9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/takesnap/takesnap.component.ts":
/*!************************************************!*\
  !*** ./src/app/takesnap/takesnap.component.ts ***!
  \************************************************/
/*! exports provided: TakesnapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakesnapComponent", function() { return TakesnapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TakesnapComponent = class TakesnapComponent {
    constructor() {
        this.captures = [];
    }
    ngOnInit() { }
    ngAfterViewInit() {
        debugger;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'user' } } }).then(stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            })
                .catch(err => {
                console.log("unhanled error: " + err);
                alert("unhanled error: " + err);
            });
        }
    }
    capture() {
        debugger;
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    }
    download(base64) {
        debugger;
        var a = document.createElement("a"); //Create <a>
        a.href = base64; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", { static: false })
], TakesnapComponent.prototype, "video", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("canvas", { static: false })
], TakesnapComponent.prototype, "canvas", void 0);
TakesnapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-takesnap',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./takesnap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/takesnap/takesnap.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./takesnap.component.css */ "./src/app/takesnap/takesnap.component.css")).default]
    })
], TakesnapComponent);



/***/ }),

/***/ "./src/app/video/video.component.css":
/*!*******************************************!*\
  !*** ./src/app/video/video.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 8px 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.spacer {\r\n    flex: 1;\r\n}\r\n\r\n.toolbar img {\r\n    margin: 0 16px;\r\n}\r\n\r\n.toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n}\r\n\r\n.toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.body {}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content:center;\r\n    margin-top: 5%;\r\n}\r\n\r\nsvg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n}\r\n\r\nsvg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n}\r\n\r\n.card svg.material-icons path {\r\n    fill: #888;\r\n}\r\n\r\n.card-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n}\r\n\r\n.card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n}\r\n\r\n.card-container .card:not(:last-child) {\r\n    margin-right: 0;\r\n}\r\n\r\n.card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n}\r\n\r\n.card-container .card:not(.highlight-card) {\r\n    cursor: pointer;\r\n}\r\n\r\n.card-container .card:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(black, 0.35);\r\n}\r\n\r\n.card-container .card:not(.highlight-card):hover .material-icons path {\r\n    fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n}\r\n\r\n.card.card.highlight-card span {\r\n    margin-left: 60px;\r\n}\r\n\r\nsvg#rocket {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke {\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n}\r\n\r\na,\r\na:visited,\r\na:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    color: #125699;\r\n}\r\n\r\n.terminal {\r\n    position: relative;\r\n    padding-top: 30px;\r\n    border-radius: 6px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: #fafafa;\r\n    width: 400px;\r\n    height: 300px;\r\n    margin-top: 5%;\r\n}\r\n\r\n/* resize images */\r\n\r\n.terminal img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.terminal::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n}\r\n\r\n.terminal pre {\r\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n}\r\n\r\n.circle-link {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n}\r\n\r\n.circle-link:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n}\r\n\r\nfooter a {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.github-star-badge {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27, 31, 35, .2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge:hover {\r\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\r\n    border-color: rgba(27, 31, 35, .35);\r\n    background-position: -.5em;\r\n}\r\n\r\n.github-star-badge .material-icons {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n}\r\n\r\nsvg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n}\r\n\r\n#overlay,\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n#facesContainer canvas {\r\n    margin: 10px;\r\n}\r\n\r\n.col-1 {\r\n\r\n\r\n    flex: 3;\r\n\r\n}\r\n\r\n.col-2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 5;\r\n}\r\n\r\n/* Responsive Styles */\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n    .card-container>*:not(.circle-link),\r\n    .terminal {\r\n        width: 100%;\r\n    }\r\n    .terminal{\r\n        max-width: 250px;\r\n    }\r\n\r\n    .card:not(.highlight-card) {\r\n        height: 16px;\r\n        margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card span {\r\n        margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke {\r\n        right: 120px;\r\n        transform: rotate(-5deg);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n.uploader {\r\ndisplay: block;\r\nclear: both;\r\nmargin: 0 auto;\r\nwidth: 100%;\r\nmax-width: 600px;\r\n}\r\n\r\n.uploader label {\r\nfloat: left;\r\nclear: both;\r\nwidth: 100%;\r\npadding: 2rem 1.5rem;\r\ntext-align: center;\r\nbackground: #fff;\r\nborder-radius: 7px;\r\nborder: 3px solid #eee;\r\ntransition: all .2s ease;\r\n-webkit-user-select: none;\r\n -moz-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n}\r\n\r\n.uploader label:hover {\r\nborder-color: #454cad;\r\n}\r\n\r\n.uploader label.hover {\r\nborder: 3px solid #454cad;\r\nbox-shadow: inset 0 0 0 6px #eee;\r\n}\r\n\r\n.uploader label.hover #start i.fa {\r\ntransform: scale(0.8);\r\nopacity: 0.3;\r\n}\r\n\r\n.uploader #start {\r\nfloat: left;\r\nclear: both;\r\nwidth: 100%;\r\n}\r\n\r\n.uploader #start.hidden {\r\ndisplay: none;\r\n}\r\n\r\n.uploader #start i.fa {\r\nfont-size: 50px;\r\nmargin-bottom: 1rem;\r\ntransition: all .2s ease-in-out;\r\n}\r\n\r\n.uploader #response {\r\nfloat: left;\r\nclear: both;\r\nwidth: 100%;\r\n}\r\n\r\n.uploader #response.hidden {\r\ndisplay: none;\r\n}\r\n\r\n.uploader #response #messages {\r\nmargin-bottom: .5rem;\r\n}\r\n\r\n.uploader #file-image {\r\ndisplay: inline;\r\nmargin: 0 auto .5rem auto;\r\nwidth: auto;\r\nheight: auto;\r\nmax-width: 180px;\r\n}\r\n\r\n.uploader #file-image.hidden {\r\ndisplay: none;\r\n}\r\n\r\n.uploader #notimage {\r\ndisplay: block;\r\nfloat: left;\r\nclear: both;\r\nwidth: 100%;\r\n}\r\n\r\n.uploader #notimage.hidden {\r\ndisplay: none;\r\n}\r\n\r\n.uploader progress,\r\n.uploader .progress {\r\ndisplay: inline;\r\nclear: both;\r\nmargin: 0 auto;\r\nwidth: 100%;\r\nmax-width: 180px;\r\nheight: 8px;\r\nborder: 0;\r\nborder-radius: 4px;\r\nbackground-color: #eee;\r\noverflow: hidden;\r\n}\r\n\r\n.uploader .progress[value]::-webkit-progress-bar {\r\nborder-radius: 4px;\r\nbackground-color: #eee;\r\n}\r\n\r\n.uploader .progress[value]::-webkit-progress-value {\r\nbackground: linear-gradient(to right, #393f90 0%, #454cad 50%);\r\nborder-radius: 4px;\r\n}\r\n\r\n.uploader .progress[value]::-moz-progress-bar {\r\nbackground: linear-gradient(to right, #393f90 0%, #454cad 50%);\r\nborder-radius: 4px;\r\n}\r\n\r\n.uploader input[type=\"file\"] {\r\ndisplay: none;\r\n}\r\n\r\n.uploader div {\r\nmargin: 0 0 .5rem 0;\r\ncolor: #5f6982;\r\n}\r\n\r\n.uploader .btn {\r\ndisplay: inline-block;\r\nmargin: .5rem .5rem 1rem .5rem;\r\nclear: both;\r\nfont-family: inherit;\r\nfont-weight: 700;\r\nfont-size: 14px;\r\ntext-decoration: none;\r\ntext-transform: initial;\r\nborder: none;\r\nborder-radius: .2rem;\r\noutline: none;\r\npadding: 0 1rem;\r\nheight: 36px;\r\nline-height: 36px;\r\ncolor: #fff;\r\ntransition: all 0.2s ease-in-out;\r\nbox-sizing: border-box;\r\nbackground: #454cad;\r\nborder-color: #454cad;\r\ncursor: pointer;\r\n}\r\n\r\n/* login page css */\r\n\r\n.logo_\r\n{\r\n  height: 100%;\r\n  width: 90%;\r\n}\r\n\r\n.center\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.vl {\r\n  border-left: 6px solid green;\r\n  height: 500px;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-left: -3px;\r\n  top: 0;\r\n}\r\n\r\n.lbl\r\n{\r\n  text-align: center;\r\n    font-size: small;\r\n    margin-top: 20px;\r\n    font-weight: 800;\r\n     letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTs7Ozs7O0lBTUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFJQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsT0FBTzs7QUFFUDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBR0Esa0JBQWtCOztBQUNsQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0VBQXdFO0lBQ3hFLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGdFQUFnRTtJQUNoRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBJQUEwSTtBQUM5STs7QUFFQTtJQUNJLGdFQUFnRTtJQUNoRSxtQ0FBbUM7SUFDbkMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLE9BQU87O0FBRVg7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE9BQU87QUFDWDs7QUFFQSxzQkFBc0I7O0FBQ3RCOztJQUVJOztRQUVJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7QUFDSjs7QUFDQTtBQUNBLGNBQWM7QUFDZCxXQUFXO0FBQ1gsY0FBYztBQUNkLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4Qix5QkFBeUI7Q0FDeEIsc0JBQXNCO0VBQ3JCLHFCQUFxQjtNQUNqQixpQkFBaUI7QUFDdkI7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDOztBQUNBO0FBRU0scUJBQXFCO0FBQzNCLFlBQVk7QUFDWjs7QUFDQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUNBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0I7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWDs7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFDQTtBQUNBLGVBQWU7QUFDZix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEI7O0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBQ0E7QUFDQSxjQUFjO0FBQ2QsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1g7O0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBQ0E7O0FBRUEsZUFBZTtBQUNmLFdBQVc7QUFDWCxjQUFjO0FBQ2QsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsU0FBUztBQUNULGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qjs7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RCxrQkFBa0I7QUFDbEI7O0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQsa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZDs7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsV0FBVztBQUNYLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsZUFBZTtBQUNmLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsV0FBVztBQUNYLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7O0FBRUEsbUJBQW1COztBQUNuQjs7RUFFRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsTUFBTTtBQUNSOztBQUVBOztFQUVFLGtCQUFrQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtLQUNmLG1CQUFtQjtJQUNwQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiLi4vdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbi50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5ib2R5IHt9XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG4vKiByZXNpemUgaW1hZ2VzICovXHJcbi50ZXJtaW5hbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LCAzMSwgMzUsIC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG4jb3ZlcmxheSxcclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuI2ZhY2VzQ29udGFpbmVyIGNhbnZhcyB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jb2wtMSB7XHJcblxyXG5cclxuICAgIGZsZXg6IDM7XHJcblxyXG59XHJcblxyXG4uY29sLTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiA1O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lcj4qOm5vdCguY2lyY2xlLWxpbmspLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZXJtaW5hbHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZGVyIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbmNsZWFyOiBib3RoO1xyXG5tYXJnaW46IDAgYXV0bztcclxud2lkdGg6IDEwMCU7XHJcbm1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuLnVwbG9hZGVyIGxhYmVsIHtcclxuZmxvYXQ6IGxlZnQ7XHJcbmNsZWFyOiBib3RoO1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMnJlbSAxLjVyZW07XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYmFja2dyb3VuZDogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czogN3B4O1xyXG5ib3JkZXI6IDNweCBzb2xpZCAjZWVlO1xyXG50cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLnVwbG9hZGVyIGxhYmVsOmhvdmVyIHtcclxuYm9yZGVyLWNvbG9yOiAjNDU0Y2FkO1xyXG59XHJcbi51cGxvYWRlciBsYWJlbC5ob3ZlciB7XHJcbmJvcmRlcjogM3B4IHNvbGlkICM0NTRjYWQ7XHJcbmJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDZweCAjZWVlO1xyXG59XHJcbi51cGxvYWRlciBsYWJlbC5ob3ZlciAjc3RhcnQgaS5mYSB7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbm9wYWNpdHk6IDAuMztcclxufVxyXG4udXBsb2FkZXIgI3N0YXJ0IHtcclxuZmxvYXQ6IGxlZnQ7XHJcbmNsZWFyOiBib3RoO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG4udXBsb2FkZXIgI3N0YXJ0LmhpZGRlbiB7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnVwbG9hZGVyICNzdGFydCBpLmZhIHtcclxuZm9udC1zaXplOiA1MHB4O1xyXG5tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG50cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi51cGxvYWRlciAjcmVzcG9uc2Uge1xyXG5mbG9hdDogbGVmdDtcclxuY2xlYXI6IGJvdGg7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi51cGxvYWRlciAjcmVzcG9uc2UuaGlkZGVuIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG4udXBsb2FkZXIgI3Jlc3BvbnNlICNtZXNzYWdlcyB7XHJcbm1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcbi51cGxvYWRlciAjZmlsZS1pbWFnZSB7XHJcbmRpc3BsYXk6IGlubGluZTtcclxubWFyZ2luOiAwIGF1dG8gLjVyZW0gYXV0bztcclxud2lkdGg6IGF1dG87XHJcbmhlaWdodDogYXV0bztcclxubWF4LXdpZHRoOiAxODBweDtcclxufVxyXG4udXBsb2FkZXIgI2ZpbGUtaW1hZ2UuaGlkZGVuIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG4udXBsb2FkZXIgI25vdGltYWdlIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbmZsb2F0OiBsZWZ0O1xyXG5jbGVhcjogYm90aDtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuLnVwbG9hZGVyICNub3RpbWFnZS5oaWRkZW4ge1xyXG5kaXNwbGF5OiBub25lO1xyXG59XHJcbi51cGxvYWRlciBwcm9ncmVzcyxcclxuLnVwbG9hZGVyIC5wcm9ncmVzcyB7XHJcbmRpc3BsYXk6IGlubGluZTtcclxuY2xlYXI6IGJvdGg7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG53aWR0aDogMTAwJTtcclxubWF4LXdpZHRoOiAxODBweDtcclxuaGVpZ2h0OiA4cHg7XHJcbmJvcmRlcjogMDtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi51cGxvYWRlciAucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG4udXBsb2FkZXIgLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5M2Y5MCAwJSwgIzQ1NGNhZCA1MCUpO1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnVwbG9hZGVyIC5wcm9ncmVzc1t2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzZjkwIDAlLCAjNDU0Y2FkIDUwJSk7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4udXBsb2FkZXIgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG5kaXNwbGF5OiBub25lO1xyXG59XHJcbi51cGxvYWRlciBkaXYge1xyXG5tYXJnaW46IDAgMCAuNXJlbSAwO1xyXG5jb2xvcjogIzVmNjk4MjtcclxufVxyXG4udXBsb2FkZXIgLmJ0biB7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luOiAuNXJlbSAuNXJlbSAxcmVtIC41cmVtO1xyXG5jbGVhcjogYm90aDtcclxuZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG50ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuYm9yZGVyOiBub25lO1xyXG5ib3JkZXItcmFkaXVzOiAuMnJlbTtcclxub3V0bGluZTogbm9uZTtcclxucGFkZGluZzogMCAxcmVtO1xyXG5oZWlnaHQ6IDM2cHg7XHJcbmxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5jb2xvcjogI2ZmZjtcclxudHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmJhY2tncm91bmQ6ICM0NTRjYWQ7XHJcbmJvcmRlci1jb2xvcjogIzQ1NGNhZDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBsb2dpbiBwYWdlIGNzcyAqL1xyXG4ubG9nb19cclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5jZW50ZXJcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZsIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTNweDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5sYmxcclxue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_getset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/getset */ "./src/app/services/getset.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/fetchapi.service */ "./src/app/services/fetchapi.service.ts");













face_api_js__WEBPACK_IMPORTED_MODULE_2__["env"].monkeyPatch({
    Canvas: HTMLCanvasElement,
    Video: HTMLVideoElement,
    createCanvasElement: () => document.createElement('canvas')
});
face_api_js__WEBPACK_IMPORTED_MODULE_2__["tf"].getBackend();
let VideoComponent = class VideoComponent {
    constructor(toastr, document, formBuilder, spinner, route, router, service, dialog) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.service = service;
        this.dialog = dialog;
        //facingMode: string = 'environment'; Set rear camera 
        this.facingMode = 'user'; //Set front camera
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = false;
        this.multipleWebcamsAvailable = false;
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isExpression = false;
        this.title = 'Facial recognition';
        this.inputSize = 512;
        this.scoreThreshold = 0.5;
        this.withFaceLandmarks = false; //disable face landmark detection
        this.withBoxes = true;
        this.margin = { top: 20, right: 20, bottom: 20, left: 40 };
        this.doc = document;
        this.isStarted = false;
        this.chartData = [{
                expression: "neutral",
                frequency: 0
            }, {
                expression: "sad",
                frequency: 0
            }, {
                expression: "happy",
                frequency: 0
            }, {
                expression: "surprised",
                frequency: 0
            }];
    }
    get videoOptions() {
        const result = {};
        if (this.facingMode && this.facingMode !== '') {
            result.facingMode = { ideal: this.facingMode };
        }
        return result;
    }
    ngOnInit() {
        debugger;
        // WebcamUtil.getAvailableVideoInputs()
        // .then((mediaDevices: MediaDeviceInfo[]) => {
        //   this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        // });
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        // setTimeout(() => {
        //   //load models
        //   console.log("start loading models")
        //  // this.loadModels();
        // }, 1000);
        this.loadVideo('reco');
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    handleInitError(error) {
        if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
            console.warn("Camera access was not allowed by user!");
        }
    }
    loadVideo(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            var constraints = { audio: false, video: { width: 1280, height: 720, facingMode: { exact: 'user' } } };
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                //grab video element and the canvas element
                const videoEl = this.doc.getElementById("webcam");
                const canvas = this.doc.getElementById("overlayVid");
                let videoPlayer = videoEl.getElementsByTagName("video")[0];
                //attaching our webcam stream to the video element
                videoPlayer['srcObject'] = stream;
                videoPlayer.addEventListener('play', (videoEl) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(videoEl);
                    yield this.run(videoEl, canvas, mode);
                }));
            }).catch(err => {
                console.log("unhanled error: " + err);
                alert("unhanled error: " + err);
            });
        });
    }
    onDetectFaces(mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            console.log(mode);
            if (mode === "expression") {
                this.isExpression = true;
            }
            else {
                this.isExpression = false;
            }
            yield this.loadVideo(mode);
        });
    }
    videoFaceDetection(input, canvas, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            this.loading = true;
            let terminalbox = this.doc.getElementsByClassName("terminal")[0];
            console.log(terminalbox);
            let width = terminalbox.offsetWidth;
            let height = terminalbox.offsetHeight;
            console.log(width, height);
            input['width'] = 400;
            input['height'] = 300;
            const mtcnnParams = {
                // number of scaled versions of the input image passed through the CNN
                // of the first stage, lower numbers will result in lower inference time,
                // but will also be less accurate
                maxNumScales: 10,
                // scale factor used to calculate the scale steps of the image
                // pyramid used in stage 1
                scaleFactor: 0.709,
                // the score threshold values used to filter the bounding
                // boxes of stage 1, 2 and 3
                scoreThresholds: [0.6, 0.7, 0.7],
                // mininum face size to expect, the higher the faster processing will be,
                // but smaller faces won't be detected
                minFaceSize: 150
            };
            const options = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["MtcnnOptions"](mtcnnParams);
            const displaySize = { width: width, height: height };
            face_api_js__WEBPACK_IMPORTED_MODULE_2__["matchDimensions"](canvas, displaySize);
            //detects faces on a screen
            //let fullFaceDescriptions = await faceapi.detectAllFaces(input,  new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
            let fullFaceDescriptions = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["detectAllFaces"](input, new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]()).withFaceLandmarks().withFaceDescriptors().withFaceExpressions();
            console.log("face detected");
            console.log(fullFaceDescriptions);
            fullFaceDescriptions = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["resizeResults"](fullFaceDescriptions, input);
            console.log("face resized");
            console.log("face recognitions started");
            yield this.faceRecognition(fullFaceDescriptions, canvas, mode);
            console.log("face recongition ended");
            this.loading = false;
        });
    }
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    run(videoEl, canvas, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            // run face detection & recognition
            let modeLocal = mode;
            console.log(videoEl['srcElement']);
            yield this.videoFaceDetection(videoEl['srcElement'], canvas, modeLocal);
            yield setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return yield this.run(videoEl, canvas, modeLocal); }), 2000);
        });
    }
    faceRecognition(fullFaceDescriptions, canvas, mode) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            //match the face descriptors of the detected faces from our input image to our reference data
            // 0.6 is a good distance threshold value to judge
            // whether the descriptors match or not
            const maxDescriptorDistance = 0.6;
            console.log(this.labeledFaceDescriptors);
            console.log(fullFaceDescriptions);
            //match the face descriptors of the detected faces from our input image to our reference data
            // const faceMatcher = new faceapi.FaceMatcher(this.labeledFaceDescriptors, maxDescriptorDistance)
            var facedata = src_app_services_getset__WEBPACK_IMPORTED_MODULE_6__["getset"].faceData;
            const faceMatcher = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["FaceMatcher"](facedata, maxDescriptorDistance);
            const results = fullFaceDescriptions.map(function (fd) {
                console.log(fd);
                return { faceMatcher: faceMatcher.findBestMatch(fd['descriptor']), faceExpressions: fd['expressions'] };
            });
            if (results.length == 0) {
                debugger;
                this.toastr.error('Face not recognized..please try again');
            }
            results.forEach((bestMatch, i) => {
                let expressions = bestMatch['faceExpressions'];
                // let recognize = bestMatch['faceMatcher'].toString().split(" ")[0]
                // let distance = bestMatch['faceMatcher'].toString().split(" ")[1]
                let recognize = bestMatch['faceMatcher'].label;
                let distance = bestMatch['faceMatcher'].distance;
                let max = Math.max.apply(null, Object.values(expressions));
                const box = fullFaceDescriptions[i]['detection']['box'];
                //draw the bounding boxes together with their labels into a canvas to display the results
                const drawBox = new face_api_js__WEBPACK_IMPORTED_MODULE_2__["draw"].DrawBox(box, { label: recognize + '_(' + distance + ')' });
                drawBox.draw(canvas);
                if (recognize != 'unknown') {
                    //  alert(recognize)
                    this.toastr.success(recognize);
                    this.service.SwitchLogin.subscribe();
                    this.service.SwitchLogin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])()).subscribe((res) => {
                        debugger;
                        if (res.ISSwitchlogin == true) {
                            debugger;
                            // alert('Switchlogin')
                            this.CallApiTocheckAuthority(res.PO_No, res.Page, recognize);
                        }
                        else {
                            //  this.onSubmit();
                            this.loginUser(recognize);
                        }
                    });
                }
            });
        });
    }
    startVideoDetection() {
        console.log(this.htmlVideoEl);
    }
    CallApiTocheckAuthority(PO_No, Page, recognize) {
        this.passdetails = {
            'PO_No': PO_No,
            'page': Page,
            'userId': recognize
        };
        var data = {
            "data": {
                "content": btoa(JSON.stringify(this.passdetails)),
                "encryptCode": ""
            },
            "globalInfo": {
                "latitude": "2.32.34.00",
                "langitude": "12.232.12",
                "deviceNo": "Hp",
                "userName": localStorage.getItem("username"),
                "requestTime": new Date(),
                "interfaceCode": "I031",
                "UserCategory": localStorage.getItem("userCategory"),
                "userId": localStorage.getItem("userId")
            },
            "returnStateInfo": {
                "returnMessage": "",
                "returnCode": ""
            }
        };
        this.service.SwitchLoginUserAuthority(data).subscribe((res) => {
            debugger;
            // this.spinner.hide();
            var data = JSON.parse(res);
            if (data.returnStateInfo.returnMessage == 'Success') {
                debugger;
                if (JSON.parse(atob(data.data.content)) == true) {
                    this.loginUser(recognize);
                }
                else {
                    this.dialog.openDialog('No authority site,department,section', 'Error');
                }
                //this.PageDetails = JSON.parse(atob(data.data.content)).page;
            }
        });
    }
    loginUser(user) {
        // Idhar api call kar de 
        this.service.faceLogin(user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
            .subscribe(data => {
            debugger;
            // this.spinner.hide();
            if (JSON.parse(atob(JSON.parse(data.body).data.content)).responseModel.status == true) {
                localStorage.setItem('userId', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.userId);
                //  localStorage.setItem('token',data.headers.get('token'));
                localStorage.setItem('token', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.token);
                localStorage.setItem('userCategory', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.userCategory);
                localStorage.setItem('username', JSON.parse(atob(JSON.parse(data.body).data.content)).dataModel.username);
                localStorage.setItem('isCreateDocument', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isCreateDocument);
                localStorage.setItem('isPageUpload', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isPageUpload);
                localStorage.setItem('isCreatePO', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isCreatePO);
                localStorage.setItem('isChangeStatusPO', JSON.parse(atob(JSON.parse(data.body).data.content)).permissionModel.isChangeStatusPO);
                this.router.navigate(['/userprofile']);
            }
            else {
                alert('JSON.parse(atob(JSON.parse(data.body).data.content)).responseModel.msg');
                //this.error = JSON.parse(atob(JSON.parse(data.body).data.content)).responseModel.msg
                localStorage.removeItem('userId');
                localStorage.removeItem('token');
                localStorage.removeItem('userCategory');
                localStorage.removeItem('username');
            }
            this.spinner.hide();
        }, error => {
            debugger;
            //this.error = error;
            this.loading = false;
        });
    }
};
VideoComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_fetchapi_service__WEBPACK_IMPORTED_MODULE_12__["FetchapiService"] },
    { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', { static: false })
], VideoComponent.prototype, "matVideo", void 0);
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video/video.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
], VideoComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCjKtHBTLyojLvAb18__9ac2kWRXWgkkk8",
        authDomain: "shake-fed66.firebaseapp.com",
        databaseURL: "https://shake-fed66.firebaseio.com",
        projectId: "shake-fed66",
        storageBucket: "shake-fed66.appspot.com",
        messagingSenderId: "245514831143",
        appId: "1:245514831143:web:19c419e096c44d22c55502"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\2 Oct Final patch live\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map