import { s as subscribe, e as set_store_value, d as compute_rest_props, f as compute_slots } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute, g as createEventDispatcher, s as setContext, i as add_classes, d as spread, f as escape_object, h as escape_attribute_value, j as getContext } from './ssr-10c5b872.js';
import 'copy-to-clipboard';
import { T as Text } from './Text-e3f4b18b.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { q as deleteGroupMember } from './index18-b03e5e10.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { P as PrimaryButton, V as VARIANTS, L as Loading$1 } from './index11-4ef8d5a0.js';
import { I as IconButton } from './index9-eea8802c.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { g as group, c as course } from './store4-ef39175f.js';
import { p as page } from './stores-793c1e19.js';
import { g as goto } from './navigation-cd282f65.js';
import { g as getDefaultExportFromCjs } from './_sentry-release-injection-file-6be6a010.js';
import require$$1$2 from 'fs';
import require$$0 from 'util';
import require$$1 from 'stream';
import require$$1$1 from 'zlib';
import require$$0$1 from 'assert';
import require$$3 from 'buffer';
import { toPng } from 'html-to-image';
import { M as Modal } from './index8-59a07edf.js';
import './config-8c22ba68.js';
import { k as ROLES, a as ROLE_LABEL, e as currentOrgDomain, c as currentOrg } from './org-8fc26a61.js';
import { d as getOrgTeam } from './index6-4a1599e3.js';
import { w as writable } from './index2-aea858a5.js';
import { g as getStudentInviteLink } from './course-a9172902.js';
import { t as t2 } from './translations-90190f83.js';
import { W as WarningFilled$1, a as WarningAltFilled$1 } from './WarningAltFilled-13a554ec.js';
import { C as Checkbox$1 } from './Checkbox-b33da6d1.js';
import { L as ListBox$1, a as ListBoxMenuIcon$1, b as ListBoxMenu$1, c as ListBoxMenuItem$1 } from './ListBoxMenuItem-e6ef2add.js';
import { C as Close$1 } from './Close-73e0af44.js';
import { P as Popover$1 } from './Popover-a92462a3.js';
import { p as profile } from './user-e923b6d4.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { S as StructuredList$1, a as StructuredListHead$1, b as StructuredListRow$1, c as StructuredListCell$1, d as StructuredListBody$1 } from './StructuredListRow-3dfbce79.js';
import { C as CopyButton$1 } from './CopyButton-ab4baaa4.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './function-efda068b.js';
import './FlashFilled-4a89bd75.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './index15-c5761f1e.js';
import './SkeletonText-d2851876.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './app-d638cf5d.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './index12-9c021b5e.js';
import './store2-dc811f17.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './ChevronDown-d5b93e8c.js';

var server = {};

var canPromise;
var hasRequiredCanPromise;

function requireCanPromise () {
	if (hasRequiredCanPromise) return canPromise;
	hasRequiredCanPromise = 1;
	// can-promise has a crash in some versions of react native that dont have
	// standard global objects
	// https://github.com/soldair/node-qrcode/issues/157

	canPromise = function () {
	  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
	};
	return canPromise;
}

var qrcode = {};

var utils$1 = {};

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	let toSJISFunction;
	const CODEWORDS_COUNT = [
	  0, // Not used
	  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
	  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
	  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
	  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
	];

	/**
	 * Returns the QR Code size for the specified version
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         size of QR code
	 */
	utils$1.getSymbolSize = function getSymbolSize (version) {
	  if (!version) throw new Error('"version" cannot be null or undefined')
	  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
	  return version * 4 + 17
	};

	/**
	 * Returns the total number of codewords used to store data and EC information.
	 *
	 * @param  {Number} version QR Code version
	 * @return {Number}         Data length in bits
	 */
	utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
	  return CODEWORDS_COUNT[version]
	};

	/**
	 * Encode data with Bose-Chaudhuri-Hocquenghem
	 *
	 * @param  {Number} data Value to encode
	 * @return {Number}      Encoded value
	 */
	utils$1.getBCHDigit = function (data) {
	  let digit = 0;

	  while (data !== 0) {
	    digit++;
	    data >>>= 1;
	  }

	  return digit
	};

	utils$1.setToSJISFunction = function setToSJISFunction (f) {
	  if (typeof f !== 'function') {
	    throw new Error('"toSJISFunc" is not a valid function.')
	  }

	  toSJISFunction = f;
	};

	utils$1.isKanjiModeEnabled = function () {
	  return typeof toSJISFunction !== 'undefined'
	};

	utils$1.toSJIS = function toSJIS (kanji) {
	  return toSJISFunction(kanji)
	};
	return utils$1;
}

var errorCorrectionLevel = {};

var hasRequiredErrorCorrectionLevel;

function requireErrorCorrectionLevel () {
	if (hasRequiredErrorCorrectionLevel) return errorCorrectionLevel;
	hasRequiredErrorCorrectionLevel = 1;
	(function (exports) {
		exports.L = { bit: 1 };
		exports.M = { bit: 0 };
		exports.Q = { bit: 3 };
		exports.H = { bit: 2 };

		function fromString (string) {
		  if (typeof string !== 'string') {
		    throw new Error('Param is not a string')
		  }

		  const lcStr = string.toLowerCase();

		  switch (lcStr) {
		    case 'l':
		    case 'low':
		      return exports.L

		    case 'm':
		    case 'medium':
		      return exports.M

		    case 'q':
		    case 'quartile':
		      return exports.Q

		    case 'h':
		    case 'high':
		      return exports.H

		    default:
		      throw new Error('Unknown EC Level: ' + string)
		  }
		}

		exports.isValid = function isValid (level) {
		  return level && typeof level.bit !== 'undefined' &&
		    level.bit >= 0 && level.bit < 4
		};

		exports.from = function from (value, defaultValue) {
		  if (exports.isValid(value)) {
		    return value
		  }

		  try {
		    return fromString(value)
		  } catch (e) {
		    return defaultValue
		  }
		}; 
	} (errorCorrectionLevel));
	return errorCorrectionLevel;
}

var bitBuffer;
var hasRequiredBitBuffer;

function requireBitBuffer () {
	if (hasRequiredBitBuffer) return bitBuffer;
	hasRequiredBitBuffer = 1;
	function BitBuffer () {
	  this.buffer = [];
	  this.length = 0;
	}

	BitBuffer.prototype = {

	  get: function (index) {
	    const bufIndex = Math.floor(index / 8);
	    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
	  },

	  put: function (num, length) {
	    for (let i = 0; i < length; i++) {
	      this.putBit(((num >>> (length - i - 1)) & 1) === 1);
	    }
	  },

	  getLengthInBits: function () {
	    return this.length
	  },

	  putBit: function (bit) {
	    const bufIndex = Math.floor(this.length / 8);
	    if (this.buffer.length <= bufIndex) {
	      this.buffer.push(0);
	    }

	    if (bit) {
	      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
	    }

	    this.length++;
	  }
	};

	bitBuffer = BitBuffer;
	return bitBuffer;
}

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */

var bitMatrix;
var hasRequiredBitMatrix;

function requireBitMatrix () {
	if (hasRequiredBitMatrix) return bitMatrix;
	hasRequiredBitMatrix = 1;
	function BitMatrix (size) {
	  if (!size || size < 1) {
	    throw new Error('BitMatrix size must be defined and greater than 0')
	  }

	  this.size = size;
	  this.data = new Uint8Array(size * size);
	  this.reservedBit = new Uint8Array(size * size);
	}

	/**
	 * Set bit value at specified location
	 * If reserved flag is set, this bit will be ignored during masking process
	 *
	 * @param {Number}  row
	 * @param {Number}  col
	 * @param {Boolean} value
	 * @param {Boolean} reserved
	 */
	BitMatrix.prototype.set = function (row, col, value, reserved) {
	  const index = row * this.size + col;
	  this.data[index] = value;
	  if (reserved) this.reservedBit[index] = true;
	};

	/**
	 * Returns bit value at specified location
	 *
	 * @param  {Number}  row
	 * @param  {Number}  col
	 * @return {Boolean}
	 */
	BitMatrix.prototype.get = function (row, col) {
	  return this.data[row * this.size + col]
	};

	/**
	 * Applies xor operator at specified location
	 * (used during masking process)
	 *
	 * @param {Number}  row
	 * @param {Number}  col
	 * @param {Boolean} value
	 */
	BitMatrix.prototype.xor = function (row, col, value) {
	  this.data[row * this.size + col] ^= value;
	};

	/**
	 * Check if bit at specified location is reserved
	 *
	 * @param {Number}   row
	 * @param {Number}   col
	 * @return {Boolean}
	 */
	BitMatrix.prototype.isReserved = function (row, col) {
	  return this.reservedBit[row * this.size + col]
	};

	bitMatrix = BitMatrix;
	return bitMatrix;
}

var alignmentPattern = {};

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var hasRequiredAlignmentPattern;

function requireAlignmentPattern () {
	if (hasRequiredAlignmentPattern) return alignmentPattern;
	hasRequiredAlignmentPattern = 1;
	(function (exports) {
		const getSymbolSize = requireUtils$1().getSymbolSize;

		/**
		 * Calculate the row/column coordinates of the center module of each alignment pattern
		 * for the specified QR Code version.
		 *
		 * The alignment patterns are positioned symmetrically on either side of the diagonal
		 * running from the top left corner of the symbol to the bottom right corner.
		 *
		 * Since positions are simmetrical only half of the coordinates are returned.
		 * Each item of the array will represent in turn the x and y coordinate.
		 * @see {@link getPositions}
		 *
		 * @param  {Number} version QR Code version
		 * @return {Array}          Array of coordinate
		 */
		exports.getRowColCoords = function getRowColCoords (version) {
		  if (version === 1) return []

		  const posCount = Math.floor(version / 7) + 2;
		  const size = getSymbolSize(version);
		  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
		  const positions = [size - 7]; // Last coord is always (size - 7)

		  for (let i = 1; i < posCount - 1; i++) {
		    positions[i] = positions[i - 1] - intervals;
		  }

		  positions.push(6); // First coord is always 6

		  return positions.reverse()
		};

		/**
		 * Returns an array containing the positions of each alignment pattern.
		 * Each array's element represent the center point of the pattern as (x, y) coordinates
		 *
		 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
		 * and filtering out the items that overlaps with finder pattern
		 *
		 * @example
		 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
		 * The alignment patterns, therefore, are to be centered on (row, column)
		 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
		 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
		 * and are not therefore used for alignment patterns.
		 *
		 * let pos = getPositions(7)
		 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
		 *
		 * @param  {Number} version QR Code version
		 * @return {Array}          Array of coordinates
		 */
		exports.getPositions = function getPositions (version) {
		  const coords = [];
		  const pos = exports.getRowColCoords(version);
		  const posLength = pos.length;

		  for (let i = 0; i < posLength; i++) {
		    for (let j = 0; j < posLength; j++) {
		      // Skip if position is occupied by finder patterns
		      if ((i === 0 && j === 0) || // top-left
		          (i === 0 && j === posLength - 1) || // bottom-left
		          (i === posLength - 1 && j === 0)) { // top-right
		        continue
		      }

		      coords.push([pos[i], pos[j]]);
		    }
		  }

		  return coords
		}; 
	} (alignmentPattern));
	return alignmentPattern;
}

var finderPattern = {};

var hasRequiredFinderPattern;

function requireFinderPattern () {
	if (hasRequiredFinderPattern) return finderPattern;
	hasRequiredFinderPattern = 1;
	const getSymbolSize = requireUtils$1().getSymbolSize;
	const FINDER_PATTERN_SIZE = 7;

	/**
	 * Returns an array containing the positions of each finder pattern.
	 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
	 *
	 * @param  {Number} version QR Code version
	 * @return {Array}          Array of coordinates
	 */
	finderPattern.getPositions = function getPositions (version) {
	  const size = getSymbolSize(version);

	  return [
	    // top-left
	    [0, 0],
	    // top-right
	    [size - FINDER_PATTERN_SIZE, 0],
	    // bottom-left
	    [0, size - FINDER_PATTERN_SIZE]
	  ]
	};
	return finderPattern;
}

var maskPattern = {};

/**
 * Data mask pattern reference
 * @type {Object}
 */

var hasRequiredMaskPattern;

function requireMaskPattern () {
	if (hasRequiredMaskPattern) return maskPattern;
	hasRequiredMaskPattern = 1;
	(function (exports) {
		exports.Patterns = {
		  PATTERN000: 0,
		  PATTERN001: 1,
		  PATTERN010: 2,
		  PATTERN011: 3,
		  PATTERN100: 4,
		  PATTERN101: 5,
		  PATTERN110: 6,
		  PATTERN111: 7
		};

		/**
		 * Weighted penalty scores for the undesirable features
		 * @type {Object}
		 */
		const PenaltyScores = {
		  N1: 3,
		  N2: 3,
		  N3: 40,
		  N4: 10
		};

		/**
		 * Check if mask pattern value is valid
		 *
		 * @param  {Number}  mask    Mask pattern
		 * @return {Boolean}         true if valid, false otherwise
		 */
		exports.isValid = function isValid (mask) {
		  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
		};

		/**
		 * Returns mask pattern from a value.
		 * If value is not valid, returns undefined
		 *
		 * @param  {Number|String} value        Mask pattern value
		 * @return {Number}                     Valid mask pattern or undefined
		 */
		exports.from = function from (value) {
		  return exports.isValid(value) ? parseInt(value, 10) : undefined
		};

		/**
		* Find adjacent modules in row/column with the same color
		* and assign a penalty value.
		*
		* Points: N1 + i
		* i is the amount by which the number of adjacent modules of the same color exceeds 5
		*/
		exports.getPenaltyN1 = function getPenaltyN1 (data) {
		  const size = data.size;
		  let points = 0;
		  let sameCountCol = 0;
		  let sameCountRow = 0;
		  let lastCol = null;
		  let lastRow = null;

		  for (let row = 0; row < size; row++) {
		    sameCountCol = sameCountRow = 0;
		    lastCol = lastRow = null;

		    for (let col = 0; col < size; col++) {
		      let module = data.get(row, col);
		      if (module === lastCol) {
		        sameCountCol++;
		      } else {
		        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
		        lastCol = module;
		        sameCountCol = 1;
		      }

		      module = data.get(col, row);
		      if (module === lastRow) {
		        sameCountRow++;
		      } else {
		        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		        lastRow = module;
		        sameCountRow = 1;
		      }
		    }

		    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
		    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		  }

		  return points
		};

		/**
		 * Find 2x2 blocks with the same color and assign a penalty value
		 *
		 * Points: N2 * (m - 1) * (n - 1)
		 */
		exports.getPenaltyN2 = function getPenaltyN2 (data) {
		  const size = data.size;
		  let points = 0;

		  for (let row = 0; row < size - 1; row++) {
		    for (let col = 0; col < size - 1; col++) {
		      const last = data.get(row, col) +
		        data.get(row, col + 1) +
		        data.get(row + 1, col) +
		        data.get(row + 1, col + 1);

		      if (last === 4 || last === 0) points++;
		    }
		  }

		  return points * PenaltyScores.N2
		};

		/**
		 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
		 * preceded or followed by light area 4 modules wide
		 *
		 * Points: N3 * number of pattern found
		 */
		exports.getPenaltyN3 = function getPenaltyN3 (data) {
		  const size = data.size;
		  let points = 0;
		  let bitsCol = 0;
		  let bitsRow = 0;

		  for (let row = 0; row < size; row++) {
		    bitsCol = bitsRow = 0;
		    for (let col = 0; col < size; col++) {
		      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
		      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;

		      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
		      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
		    }
		  }

		  return points * PenaltyScores.N3
		};

		/**
		 * Calculate proportion of dark modules in entire symbol
		 *
		 * Points: N4 * k
		 *
		 * k is the rating of the deviation of the proportion of dark modules
		 * in the symbol from 50% in steps of 5%
		 */
		exports.getPenaltyN4 = function getPenaltyN4 (data) {
		  let darkCount = 0;
		  const modulesCount = data.data.length;

		  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];

		  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);

		  return k * PenaltyScores.N4
		};

		/**
		 * Return mask value at given position
		 *
		 * @param  {Number} maskPattern Pattern reference value
		 * @param  {Number} i           Row
		 * @param  {Number} j           Column
		 * @return {Boolean}            Mask value
		 */
		function getMaskAt (maskPattern, i, j) {
		  switch (maskPattern) {
		    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
		    case exports.Patterns.PATTERN001: return i % 2 === 0
		    case exports.Patterns.PATTERN010: return j % 3 === 0
		    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
		    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
		    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
		    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
		    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

		    default: throw new Error('bad maskPattern:' + maskPattern)
		  }
		}

		/**
		 * Apply a mask pattern to a BitMatrix
		 *
		 * @param  {Number}    pattern Pattern reference number
		 * @param  {BitMatrix} data    BitMatrix data
		 */
		exports.applyMask = function applyMask (pattern, data) {
		  const size = data.size;

		  for (let col = 0; col < size; col++) {
		    for (let row = 0; row < size; row++) {
		      if (data.isReserved(row, col)) continue
		      data.xor(row, col, getMaskAt(pattern, row, col));
		    }
		  }
		};

		/**
		 * Returns the best mask pattern for data
		 *
		 * @param  {BitMatrix} data
		 * @return {Number} Mask pattern reference number
		 */
		exports.getBestMask = function getBestMask (data, setupFormatFunc) {
		  const numPatterns = Object.keys(exports.Patterns).length;
		  let bestPattern = 0;
		  let lowerPenalty = Infinity;

		  for (let p = 0; p < numPatterns; p++) {
		    setupFormatFunc(p);
		    exports.applyMask(p, data);

		    // Calculate penalty
		    const penalty =
		      exports.getPenaltyN1(data) +
		      exports.getPenaltyN2(data) +
		      exports.getPenaltyN3(data) +
		      exports.getPenaltyN4(data);

		    // Undo previously applied mask
		    exports.applyMask(p, data);

		    if (penalty < lowerPenalty) {
		      lowerPenalty = penalty;
		      bestPattern = p;
		    }
		  }

		  return bestPattern
		}; 
	} (maskPattern));
	return maskPattern;
}

var errorCorrectionCode = {};

var hasRequiredErrorCorrectionCode;

function requireErrorCorrectionCode () {
	if (hasRequiredErrorCorrectionCode) return errorCorrectionCode;
	hasRequiredErrorCorrectionCode = 1;
	const ECLevel = requireErrorCorrectionLevel();

	const EC_BLOCKS_TABLE = [
	// L  M  Q  H
	  1, 1, 1, 1,
	  1, 1, 1, 1,
	  1, 1, 2, 2,
	  1, 2, 2, 4,
	  1, 2, 4, 4,
	  2, 4, 4, 4,
	  2, 4, 6, 5,
	  2, 4, 6, 6,
	  2, 5, 8, 8,
	  4, 5, 8, 8,
	  4, 5, 8, 11,
	  4, 8, 10, 11,
	  4, 9, 12, 16,
	  4, 9, 16, 16,
	  6, 10, 12, 18,
	  6, 10, 17, 16,
	  6, 11, 16, 19,
	  6, 13, 18, 21,
	  7, 14, 21, 25,
	  8, 16, 20, 25,
	  8, 17, 23, 25,
	  9, 17, 23, 34,
	  9, 18, 25, 30,
	  10, 20, 27, 32,
	  12, 21, 29, 35,
	  12, 23, 34, 37,
	  12, 25, 34, 40,
	  13, 26, 35, 42,
	  14, 28, 38, 45,
	  15, 29, 40, 48,
	  16, 31, 43, 51,
	  17, 33, 45, 54,
	  18, 35, 48, 57,
	  19, 37, 51, 60,
	  19, 38, 53, 63,
	  20, 40, 56, 66,
	  21, 43, 59, 70,
	  22, 45, 62, 74,
	  24, 47, 65, 77,
	  25, 49, 68, 81
	];

	const EC_CODEWORDS_TABLE = [
	// L  M  Q  H
	  7, 10, 13, 17,
	  10, 16, 22, 28,
	  15, 26, 36, 44,
	  20, 36, 52, 64,
	  26, 48, 72, 88,
	  36, 64, 96, 112,
	  40, 72, 108, 130,
	  48, 88, 132, 156,
	  60, 110, 160, 192,
	  72, 130, 192, 224,
	  80, 150, 224, 264,
	  96, 176, 260, 308,
	  104, 198, 288, 352,
	  120, 216, 320, 384,
	  132, 240, 360, 432,
	  144, 280, 408, 480,
	  168, 308, 448, 532,
	  180, 338, 504, 588,
	  196, 364, 546, 650,
	  224, 416, 600, 700,
	  224, 442, 644, 750,
	  252, 476, 690, 816,
	  270, 504, 750, 900,
	  300, 560, 810, 960,
	  312, 588, 870, 1050,
	  336, 644, 952, 1110,
	  360, 700, 1020, 1200,
	  390, 728, 1050, 1260,
	  420, 784, 1140, 1350,
	  450, 812, 1200, 1440,
	  480, 868, 1290, 1530,
	  510, 924, 1350, 1620,
	  540, 980, 1440, 1710,
	  570, 1036, 1530, 1800,
	  570, 1064, 1590, 1890,
	  600, 1120, 1680, 1980,
	  630, 1204, 1770, 2100,
	  660, 1260, 1860, 2220,
	  720, 1316, 1950, 2310,
	  750, 1372, 2040, 2430
	];

	/**
	 * Returns the number of error correction block that the QR Code should contain
	 * for the specified version and error correction level.
	 *
	 * @param  {Number} version              QR Code version
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @return {Number}                      Number of error correction blocks
	 */
	errorCorrectionCode.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
	  switch (errorCorrectionLevel) {
	    case ECLevel.L:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
	    case ECLevel.M:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
	    case ECLevel.Q:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
	    case ECLevel.H:
	      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
	    default:
	      return undefined
	  }
	};

	/**
	 * Returns the number of error correction codewords to use for the specified
	 * version and error correction level.
	 *
	 * @param  {Number} version              QR Code version
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @return {Number}                      Number of error correction codewords
	 */
	errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
	  switch (errorCorrectionLevel) {
	    case ECLevel.L:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
	    case ECLevel.M:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
	    case ECLevel.Q:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
	    case ECLevel.H:
	      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
	    default:
	      return undefined
	  }
	};
	return errorCorrectionCode;
}

var polynomial = {};

var galoisField = {};

var hasRequiredGaloisField;

function requireGaloisField () {
	if (hasRequiredGaloisField) return galoisField;
	hasRequiredGaloisField = 1;
	const EXP_TABLE = new Uint8Array(512);
	const LOG_TABLE = new Uint8Array(256)
	/**
	 * Precompute the log and anti-log tables for faster computation later
	 *
	 * For each possible value in the galois field 2^8, we will pre-compute
	 * the logarithm and anti-logarithm (exponential) of this value
	 *
	 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
	 */
	;(function initTables () {
	  let x = 1;
	  for (let i = 0; i < 255; i++) {
	    EXP_TABLE[i] = x;
	    LOG_TABLE[x] = i;

	    x <<= 1; // multiply by 2

	    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
	    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
	    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
	      x ^= 0x11D;
	    }
	  }

	  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
	  // stay inside the bounds (because we will mainly use this table for the multiplication of
	  // two GF numbers, no more).
	  // @see {@link mul}
	  for (let i = 255; i < 512; i++) {
	    EXP_TABLE[i] = EXP_TABLE[i - 255];
	  }
	}());

	/**
	 * Returns log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */
	galoisField.log = function log (n) {
	  if (n < 1) throw new Error('log(' + n + ')')
	  return LOG_TABLE[n]
	};

	/**
	 * Returns anti-log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */
	galoisField.exp = function exp (n) {
	  return EXP_TABLE[n]
	};

	/**
	 * Multiplies two number inside Galois Field
	 *
	 * @param  {Number} x
	 * @param  {Number} y
	 * @return {Number}
	 */
	galoisField.mul = function mul (x, y) {
	  if (x === 0 || y === 0) return 0

	  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
	  // @see {@link initTables}
	  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
	};
	return galoisField;
}

var hasRequiredPolynomial;

function requirePolynomial () {
	if (hasRequiredPolynomial) return polynomial;
	hasRequiredPolynomial = 1;
	(function (exports) {
		const GF = requireGaloisField();

		/**
		 * Multiplies two polynomials inside Galois Field
		 *
		 * @param  {Uint8Array} p1 Polynomial
		 * @param  {Uint8Array} p2 Polynomial
		 * @return {Uint8Array}    Product of p1 and p2
		 */
		exports.mul = function mul (p1, p2) {
		  const coeff = new Uint8Array(p1.length + p2.length - 1);

		  for (let i = 0; i < p1.length; i++) {
		    for (let j = 0; j < p2.length; j++) {
		      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
		    }
		  }

		  return coeff
		};

		/**
		 * Calculate the remainder of polynomials division
		 *
		 * @param  {Uint8Array} divident Polynomial
		 * @param  {Uint8Array} divisor  Polynomial
		 * @return {Uint8Array}          Remainder
		 */
		exports.mod = function mod (divident, divisor) {
		  let result = new Uint8Array(divident);

		  while ((result.length - divisor.length) >= 0) {
		    const coeff = result[0];

		    for (let i = 0; i < divisor.length; i++) {
		      result[i] ^= GF.mul(divisor[i], coeff);
		    }

		    // remove all zeros from buffer head
		    let offset = 0;
		    while (offset < result.length && result[offset] === 0) offset++;
		    result = result.slice(offset);
		  }

		  return result
		};

		/**
		 * Generate an irreducible generator polynomial of specified degree
		 * (used by Reed-Solomon encoder)
		 *
		 * @param  {Number} degree Degree of the generator polynomial
		 * @return {Uint8Array}    Buffer containing polynomial coefficients
		 */
		exports.generateECPolynomial = function generateECPolynomial (degree) {
		  let poly = new Uint8Array([1]);
		  for (let i = 0; i < degree; i++) {
		    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
		  }

		  return poly
		}; 
	} (polynomial));
	return polynomial;
}

var reedSolomonEncoder;
var hasRequiredReedSolomonEncoder;

function requireReedSolomonEncoder () {
	if (hasRequiredReedSolomonEncoder) return reedSolomonEncoder;
	hasRequiredReedSolomonEncoder = 1;
	const Polynomial = requirePolynomial();

	function ReedSolomonEncoder (degree) {
	  this.genPoly = undefined;
	  this.degree = degree;

	  if (this.degree) this.initialize(this.degree);
	}

	/**
	 * Initialize the encoder.
	 * The input param should correspond to the number of error correction codewords.
	 *
	 * @param  {Number} degree
	 */
	ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
	  // create an irreducible generator polynomial
	  this.degree = degree;
	  this.genPoly = Polynomial.generateECPolynomial(this.degree);
	};

	/**
	 * Encodes a chunk of data
	 *
	 * @param  {Uint8Array} data Buffer containing input data
	 * @return {Uint8Array}      Buffer containing encoded data
	 */
	ReedSolomonEncoder.prototype.encode = function encode (data) {
	  if (!this.genPoly) {
	    throw new Error('Encoder not initialized')
	  }

	  // Calculate EC for this data block
	  // extends data size to data+genPoly size
	  const paddedData = new Uint8Array(data.length + this.degree);
	  paddedData.set(data);

	  // The error correction codewords are the remainder after dividing the data codewords
	  // by a generator polynomial
	  const remainder = Polynomial.mod(paddedData, this.genPoly);

	  // return EC data blocks (last n byte, where n is the degree of genPoly)
	  // If coefficients number in remainder are less than genPoly degree,
	  // pad with 0s to the left to reach the needed number of coefficients
	  const start = this.degree - remainder.length;
	  if (start > 0) {
	    const buff = new Uint8Array(this.degree);
	    buff.set(remainder, start);

	    return buff
	  }

	  return remainder
	};

	reedSolomonEncoder = ReedSolomonEncoder;
	return reedSolomonEncoder;
}

var version = {};

var mode = {};

var versionCheck = {};

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */

var hasRequiredVersionCheck;

function requireVersionCheck () {
	if (hasRequiredVersionCheck) return versionCheck;
	hasRequiredVersionCheck = 1;
	versionCheck.isValid = function isValid (version) {
	  return !isNaN(version) && version >= 1 && version <= 40
	};
	return versionCheck;
}

var regex = {};

var hasRequiredRegex;

function requireRegex () {
	if (hasRequiredRegex) return regex;
	hasRequiredRegex = 1;
	const numeric = '[0-9]+';
	const alphanumeric = '[A-Z $%*+\\-./:]+';
	let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
	  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
	  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
	  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
	kanji = kanji.replace(/u/g, '\\u');

	const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

	regex.KANJI = new RegExp(kanji, 'g');
	regex.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
	regex.BYTE = new RegExp(byte, 'g');
	regex.NUMERIC = new RegExp(numeric, 'g');
	regex.ALPHANUMERIC = new RegExp(alphanumeric, 'g');

	const TEST_KANJI = new RegExp('^' + kanji + '$');
	const TEST_NUMERIC = new RegExp('^' + numeric + '$');
	const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

	regex.testKanji = function testKanji (str) {
	  return TEST_KANJI.test(str)
	};

	regex.testNumeric = function testNumeric (str) {
	  return TEST_NUMERIC.test(str)
	};

	regex.testAlphanumeric = function testAlphanumeric (str) {
	  return TEST_ALPHANUMERIC.test(str)
	};
	return regex;
}

var hasRequiredMode;

function requireMode () {
	if (hasRequiredMode) return mode;
	hasRequiredMode = 1;
	(function (exports) {
		const VersionCheck = requireVersionCheck();
		const Regex = requireRegex();

		/**
		 * Numeric mode encodes data from the decimal digit set (0 - 9)
		 * (byte values 30HEX to 39HEX).
		 * Normally, 3 data characters are represented by 10 bits.
		 *
		 * @type {Object}
		 */
		exports.NUMERIC = {
		  id: 'Numeric',
		  bit: 1 << 0,
		  ccBits: [10, 12, 14]
		};

		/**
		 * Alphanumeric mode encodes data from a set of 45 characters,
		 * i.e. 10 numeric digits (0 - 9),
		 *      26 alphabetic characters (A - Z),
		 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
		 * Normally, two input characters are represented by 11 bits.
		 *
		 * @type {Object}
		 */
		exports.ALPHANUMERIC = {
		  id: 'Alphanumeric',
		  bit: 1 << 1,
		  ccBits: [9, 11, 13]
		};

		/**
		 * In byte mode, data is encoded at 8 bits per character.
		 *
		 * @type {Object}
		 */
		exports.BYTE = {
		  id: 'Byte',
		  bit: 1 << 2,
		  ccBits: [8, 16, 16]
		};

		/**
		 * The Kanji mode efficiently encodes Kanji characters in accordance with
		 * the Shift JIS system based on JIS X 0208.
		 * The Shift JIS values are shifted from the JIS X 0208 values.
		 * JIS X 0208 gives details of the shift coded representation.
		 * Each two-byte character value is compacted to a 13-bit binary codeword.
		 *
		 * @type {Object}
		 */
		exports.KANJI = {
		  id: 'Kanji',
		  bit: 1 << 3,
		  ccBits: [8, 10, 12]
		};

		/**
		 * Mixed mode will contain a sequences of data in a combination of any of
		 * the modes described above
		 *
		 * @type {Object}
		 */
		exports.MIXED = {
		  bit: -1
		};

		/**
		 * Returns the number of bits needed to store the data length
		 * according to QR Code specifications.
		 *
		 * @param  {Mode}   mode    Data mode
		 * @param  {Number} version QR Code version
		 * @return {Number}         Number of bits
		 */
		exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
		  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

		  if (!VersionCheck.isValid(version)) {
		    throw new Error('Invalid version: ' + version)
		  }

		  if (version >= 1 && version < 10) return mode.ccBits[0]
		  else if (version < 27) return mode.ccBits[1]
		  return mode.ccBits[2]
		};

		/**
		 * Returns the most efficient mode to store the specified data
		 *
		 * @param  {String} dataStr Input data string
		 * @return {Mode}           Best mode
		 */
		exports.getBestModeForData = function getBestModeForData (dataStr) {
		  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
		  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
		  else if (Regex.testKanji(dataStr)) return exports.KANJI
		  else return exports.BYTE
		};

		/**
		 * Return mode name as string
		 *
		 * @param {Mode} mode Mode object
		 * @returns {String}  Mode name
		 */
		exports.toString = function toString (mode) {
		  if (mode && mode.id) return mode.id
		  throw new Error('Invalid mode')
		};

		/**
		 * Check if input param is a valid mode object
		 *
		 * @param   {Mode}    mode Mode object
		 * @returns {Boolean} True if valid mode, false otherwise
		 */
		exports.isValid = function isValid (mode) {
		  return mode && mode.bit && mode.ccBits
		};

		/**
		 * Get mode object from its name
		 *
		 * @param   {String} string Mode name
		 * @returns {Mode}          Mode object
		 */
		function fromString (string) {
		  if (typeof string !== 'string') {
		    throw new Error('Param is not a string')
		  }

		  const lcStr = string.toLowerCase();

		  switch (lcStr) {
		    case 'numeric':
		      return exports.NUMERIC
		    case 'alphanumeric':
		      return exports.ALPHANUMERIC
		    case 'kanji':
		      return exports.KANJI
		    case 'byte':
		      return exports.BYTE
		    default:
		      throw new Error('Unknown mode: ' + string)
		  }
		}

		/**
		 * Returns mode from a value.
		 * If value is not a valid mode, returns defaultValue
		 *
		 * @param  {Mode|String} value        Encoding mode
		 * @param  {Mode}        defaultValue Fallback value
		 * @return {Mode}                     Encoding mode
		 */
		exports.from = function from (value, defaultValue) {
		  if (exports.isValid(value)) {
		    return value
		  }

		  try {
		    return fromString(value)
		  } catch (e) {
		    return defaultValue
		  }
		}; 
	} (mode));
	return mode;
}

var hasRequiredVersion;

function requireVersion () {
	if (hasRequiredVersion) return version;
	hasRequiredVersion = 1;
	(function (exports) {
		const Utils = requireUtils$1();
		const ECCode = requireErrorCorrectionCode();
		const ECLevel = requireErrorCorrectionLevel();
		const Mode = requireMode();
		const VersionCheck = requireVersionCheck();

		// Generator polynomial used to encode version information
		const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
		const G18_BCH = Utils.getBCHDigit(G18);

		function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
		  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
		    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
		      return currentVersion
		    }
		  }

		  return undefined
		}

		function getReservedBitsCount (mode, version) {
		  // Character count indicator + mode indicator bits
		  return Mode.getCharCountIndicator(mode, version) + 4
		}

		function getTotalBitsFromDataArray (segments, version) {
		  let totalBits = 0;

		  segments.forEach(function (data) {
		    const reservedBits = getReservedBitsCount(data.mode, version);
		    totalBits += reservedBits + data.getBitsLength();
		  });

		  return totalBits
		}

		function getBestVersionForMixedData (segments, errorCorrectionLevel) {
		  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
		    const length = getTotalBitsFromDataArray(segments, currentVersion);
		    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
		      return currentVersion
		    }
		  }

		  return undefined
		}

		/**
		 * Returns version number from a value.
		 * If value is not a valid version, returns defaultValue
		 *
		 * @param  {Number|String} value        QR Code version
		 * @param  {Number}        defaultValue Fallback value
		 * @return {Number}                     QR Code version number
		 */
		exports.from = function from (value, defaultValue) {
		  if (VersionCheck.isValid(value)) {
		    return parseInt(value, 10)
		  }

		  return defaultValue
		};

		/**
		 * Returns how much data can be stored with the specified QR code version
		 * and error correction level
		 *
		 * @param  {Number} version              QR Code version (1-40)
		 * @param  {Number} errorCorrectionLevel Error correction level
		 * @param  {Mode}   mode                 Data mode
		 * @return {Number}                      Quantity of storable data
		 */
		exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
		  if (!VersionCheck.isValid(version)) {
		    throw new Error('Invalid QR Code version')
		  }

		  // Use Byte mode as default
		  if (typeof mode === 'undefined') mode = Mode.BYTE;

		  // Total codewords for this QR code version (Data + Error correction)
		  const totalCodewords = Utils.getSymbolTotalCodewords(version);

		  // Total number of error correction codewords
		  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

		  // Total number of data codewords
		  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

		  if (mode === Mode.MIXED) return dataTotalCodewordsBits

		  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

		  // Return max number of storable codewords
		  switch (mode) {
		    case Mode.NUMERIC:
		      return Math.floor((usableBits / 10) * 3)

		    case Mode.ALPHANUMERIC:
		      return Math.floor((usableBits / 11) * 2)

		    case Mode.KANJI:
		      return Math.floor(usableBits / 13)

		    case Mode.BYTE:
		    default:
		      return Math.floor(usableBits / 8)
		  }
		};

		/**
		 * Returns the minimum version needed to contain the amount of data
		 *
		 * @param  {Segment} data                    Segment of data
		 * @param  {Number} [errorCorrectionLevel=H] Error correction level
		 * @param  {Mode} mode                       Data mode
		 * @return {Number}                          QR Code version
		 */
		exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
		  let seg;

		  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

		  if (Array.isArray(data)) {
		    if (data.length > 1) {
		      return getBestVersionForMixedData(data, ecl)
		    }

		    if (data.length === 0) {
		      return 1
		    }

		    seg = data[0];
		  } else {
		    seg = data;
		  }

		  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
		};

		/**
		 * Returns version information with relative error correction bits
		 *
		 * The version information is included in QR Code symbols of version 7 or larger.
		 * It consists of an 18-bit sequence containing 6 data bits,
		 * with 12 error correction bits calculated using the (18, 6) Golay code.
		 *
		 * @param  {Number} version QR Code version
		 * @return {Number}         Encoded version info bits
		 */
		exports.getEncodedBits = function getEncodedBits (version) {
		  if (!VersionCheck.isValid(version) || version < 7) {
		    throw new Error('Invalid QR Code version')
		  }

		  let d = version << 12;

		  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
		    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH));
		  }

		  return (version << 12) | d
		}; 
	} (version));
	return version;
}

var formatInfo = {};

var hasRequiredFormatInfo;

function requireFormatInfo () {
	if (hasRequiredFormatInfo) return formatInfo;
	hasRequiredFormatInfo = 1;
	const Utils = requireUtils$1();

	const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
	const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
	const G15_BCH = Utils.getBCHDigit(G15);

	/**
	 * Returns format information with relative error correction bits
	 *
	 * The format information is a 15-bit sequence containing 5 data bits,
	 * with 10 error correction bits calculated using the (15, 5) BCH code.
	 *
	 * @param  {Number} errorCorrectionLevel Error correction level
	 * @param  {Number} mask                 Mask pattern
	 * @return {Number}                      Encoded format information bits
	 */
	formatInfo.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
	  const data = ((errorCorrectionLevel.bit << 3) | mask);
	  let d = data << 10;

	  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
	    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH));
	  }

	  // xor final data with mask pattern in order to ensure that
	  // no combination of Error Correction Level and data mask pattern
	  // will result in an all-zero data string
	  return ((data << 10) | d) ^ G15_MASK
	};
	return formatInfo;
}

var segments = {};

var numericData;
var hasRequiredNumericData;

function requireNumericData () {
	if (hasRequiredNumericData) return numericData;
	hasRequiredNumericData = 1;
	const Mode = requireMode();

	function NumericData (data) {
	  this.mode = Mode.NUMERIC;
	  this.data = data.toString();
	}

	NumericData.getBitsLength = function getBitsLength (length) {
	  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
	};

	NumericData.prototype.getLength = function getLength () {
	  return this.data.length
	};

	NumericData.prototype.getBitsLength = function getBitsLength () {
	  return NumericData.getBitsLength(this.data.length)
	};

	NumericData.prototype.write = function write (bitBuffer) {
	  let i, group, value;

	  // The input data string is divided into groups of three digits,
	  // and each group is converted to its 10-bit binary equivalent.
	  for (i = 0; i + 3 <= this.data.length; i += 3) {
	    group = this.data.substr(i, 3);
	    value = parseInt(group, 10);

	    bitBuffer.put(value, 10);
	  }

	  // If the number of input digits is not an exact multiple of three,
	  // the final one or two digits are converted to 4 or 7 bits respectively.
	  const remainingNum = this.data.length - i;
	  if (remainingNum > 0) {
	    group = this.data.substr(i);
	    value = parseInt(group, 10);

	    bitBuffer.put(value, remainingNum * 3 + 1);
	  }
	};

	numericData = NumericData;
	return numericData;
}

var alphanumericData;
var hasRequiredAlphanumericData;

function requireAlphanumericData () {
	if (hasRequiredAlphanumericData) return alphanumericData;
	hasRequiredAlphanumericData = 1;
	const Mode = requireMode();

	/**
	 * Array of characters available in alphanumeric mode
	 *
	 * As per QR Code specification, to each character
	 * is assigned a value from 0 to 44 which in this case coincides
	 * with the array index
	 *
	 * @type {Array}
	 */
	const ALPHA_NUM_CHARS = [
	  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
	];

	function AlphanumericData (data) {
	  this.mode = Mode.ALPHANUMERIC;
	  this.data = data;
	}

	AlphanumericData.getBitsLength = function getBitsLength (length) {
	  return 11 * Math.floor(length / 2) + 6 * (length % 2)
	};

	AlphanumericData.prototype.getLength = function getLength () {
	  return this.data.length
	};

	AlphanumericData.prototype.getBitsLength = function getBitsLength () {
	  return AlphanumericData.getBitsLength(this.data.length)
	};

	AlphanumericData.prototype.write = function write (bitBuffer) {
	  let i;

	  // Input data characters are divided into groups of two characters
	  // and encoded as 11-bit binary codes.
	  for (i = 0; i + 2 <= this.data.length; i += 2) {
	    // The character value of the first character is multiplied by 45
	    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

	    // The character value of the second digit is added to the product
	    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

	    // The sum is then stored as 11-bit binary number
	    bitBuffer.put(value, 11);
	  }

	  // If the number of input data characters is not a multiple of two,
	  // the character value of the final character is encoded as a 6-bit binary number.
	  if (this.data.length % 2) {
	    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
	  }
	};

	alphanumericData = AlphanumericData;
	return alphanumericData;
}

var encodeUtf8;
var hasRequiredEncodeUtf8;

function requireEncodeUtf8 () {
	if (hasRequiredEncodeUtf8) return encodeUtf8;
	hasRequiredEncodeUtf8 = 1;

	encodeUtf8 = function encodeUtf8 (input) {
	  var result = [];
	  var size = input.length;

	  for (var index = 0; index < size; index++) {
	    var point = input.charCodeAt(index);

	    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
	      var second = input.charCodeAt(index + 1);

	      if (second >= 0xDC00 && second <= 0xDFFF) {
	        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	        index += 1;
	      }
	    }

	    // US-ASCII
	    if (point < 0x80) {
	      result.push(point);
	      continue
	    }

	    // 2-byte UTF-8
	    if (point < 0x800) {
	      result.push((point >> 6) | 192);
	      result.push((point & 63) | 128);
	      continue
	    }

	    // 3-byte UTF-8
	    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
	      result.push((point >> 12) | 224);
	      result.push(((point >> 6) & 63) | 128);
	      result.push((point & 63) | 128);
	      continue
	    }

	    // 4-byte UTF-8
	    if (point >= 0x10000 && point <= 0x10FFFF) {
	      result.push((point >> 18) | 240);
	      result.push(((point >> 12) & 63) | 128);
	      result.push(((point >> 6) & 63) | 128);
	      result.push((point & 63) | 128);
	      continue
	    }

	    // Invalid character
	    result.push(0xEF, 0xBF, 0xBD);
	  }

	  return new Uint8Array(result).buffer
	};
	return encodeUtf8;
}

var byteData;
var hasRequiredByteData;

function requireByteData () {
	if (hasRequiredByteData) return byteData;
	hasRequiredByteData = 1;
	const encodeUtf8 = requireEncodeUtf8();
	const Mode = requireMode();

	function ByteData (data) {
	  this.mode = Mode.BYTE;
	  if (typeof (data) === 'string') {
	    data = encodeUtf8(data);
	  }
	  this.data = new Uint8Array(data);
	}

	ByteData.getBitsLength = function getBitsLength (length) {
	  return length * 8
	};

	ByteData.prototype.getLength = function getLength () {
	  return this.data.length
	};

	ByteData.prototype.getBitsLength = function getBitsLength () {
	  return ByteData.getBitsLength(this.data.length)
	};

	ByteData.prototype.write = function (bitBuffer) {
	  for (let i = 0, l = this.data.length; i < l; i++) {
	    bitBuffer.put(this.data[i], 8);
	  }
	};

	byteData = ByteData;
	return byteData;
}

var kanjiData;
var hasRequiredKanjiData;

function requireKanjiData () {
	if (hasRequiredKanjiData) return kanjiData;
	hasRequiredKanjiData = 1;
	const Mode = requireMode();
	const Utils = requireUtils$1();

	function KanjiData (data) {
	  this.mode = Mode.KANJI;
	  this.data = data;
	}

	KanjiData.getBitsLength = function getBitsLength (length) {
	  return length * 13
	};

	KanjiData.prototype.getLength = function getLength () {
	  return this.data.length
	};

	KanjiData.prototype.getBitsLength = function getBitsLength () {
	  return KanjiData.getBitsLength(this.data.length)
	};

	KanjiData.prototype.write = function (bitBuffer) {
	  let i;

	  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
	  // These byte values are shifted from the JIS X 0208 values.
	  // JIS X 0208 gives details of the shift coded representation.
	  for (i = 0; i < this.data.length; i++) {
	    let value = Utils.toSJIS(this.data[i]);

	    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
	    if (value >= 0x8140 && value <= 0x9FFC) {
	      // Subtract 0x8140 from Shift JIS value
	      value -= 0x8140;

	    // For characters with Shift JIS values from 0xE040 to 0xEBBF
	    } else if (value >= 0xE040 && value <= 0xEBBF) {
	      // Subtract 0xC140 from Shift JIS value
	      value -= 0xC140;
	    } else {
	      throw new Error(
	        'Invalid SJIS character: ' + this.data[i] + '\n' +
	        'Make sure your charset is UTF-8')
	    }

	    // Multiply most significant byte of result by 0xC0
	    // and add least significant byte to product
	    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);

	    // Convert result to a 13-bit binary string
	    bitBuffer.put(value, 13);
	  }
	};

	kanjiData = KanjiData;
	return kanjiData;
}

var dijkstra = {exports: {}};

var hasRequiredDijkstra;

function requireDijkstra () {
	if (hasRequiredDijkstra) return dijkstra.exports;
	hasRequiredDijkstra = 1;
	(function (module) {

		/******************************************************************************
		 * Created 2008-08-19.
		 *
		 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
		 *
		 * Copyright (C) 2008
		 *   Wyatt Baldwin <self@wyattbaldwin.com>
		 *   All rights reserved
		 *
		 * Licensed under the MIT license.
		 *
		 *   http://www.opensource.org/licenses/mit-license.php
		 *
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		 * THE SOFTWARE.
		 *****************************************************************************/
		var dijkstra = {
		  single_source_shortest_paths: function(graph, s, d) {
		    // Predecessor map for each node that has been encountered.
		    // node ID => predecessor node ID
		    var predecessors = {};

		    // Costs of shortest paths from s to all nodes encountered.
		    // node ID => cost
		    var costs = {};
		    costs[s] = 0;

		    // Costs of shortest paths from s to all nodes encountered; differs from
		    // `costs` in that it provides easy access to the node that currently has
		    // the known shortest path from s.
		    // XXX: Do we actually need both `costs` and `open`?
		    var open = dijkstra.PriorityQueue.make();
		    open.push(s, 0);

		    var closest,
		        u, v,
		        cost_of_s_to_u,
		        adjacent_nodes,
		        cost_of_e,
		        cost_of_s_to_u_plus_cost_of_e,
		        cost_of_s_to_v,
		        first_visit;
		    while (!open.empty()) {
		      // In the nodes remaining in graph that have a known cost from s,
		      // find the node, u, that currently has the shortest path from s.
		      closest = open.pop();
		      u = closest.value;
		      cost_of_s_to_u = closest.cost;

		      // Get nodes adjacent to u...
		      adjacent_nodes = graph[u] || {};

		      // ...and explore the edges that connect u to those nodes, updating
		      // the cost of the shortest paths to any or all of those nodes as
		      // necessary. v is the node across the current edge from u.
		      for (v in adjacent_nodes) {
		        if (adjacent_nodes.hasOwnProperty(v)) {
		          // Get the cost of the edge running from u to v.
		          cost_of_e = adjacent_nodes[v];

		          // Cost of s to u plus the cost of u to v across e--this is *a*
		          // cost from s to v that may or may not be less than the current
		          // known cost to v.
		          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

		          // If we haven't visited v yet OR if the current known cost from s to
		          // v is greater than the new cost we just found (cost of s to u plus
		          // cost of u to v across e), update v's cost in the cost list and
		          // update v's predecessor in the predecessor list (it's now u).
		          cost_of_s_to_v = costs[v];
		          first_visit = (typeof costs[v] === 'undefined');
		          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
		            costs[v] = cost_of_s_to_u_plus_cost_of_e;
		            open.push(v, cost_of_s_to_u_plus_cost_of_e);
		            predecessors[v] = u;
		          }
		        }
		      }
		    }

		    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
		      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
		      throw new Error(msg);
		    }

		    return predecessors;
		  },

		  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
		    var nodes = [];
		    var u = d;
		    while (u) {
		      nodes.push(u);
		      predecessors[u];
		      u = predecessors[u];
		    }
		    nodes.reverse();
		    return nodes;
		  },

		  find_path: function(graph, s, d) {
		    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
		    return dijkstra.extract_shortest_path_from_predecessor_list(
		      predecessors, d);
		  },

		  /**
		   * A very naive priority queue implementation.
		   */
		  PriorityQueue: {
		    make: function (opts) {
		      var T = dijkstra.PriorityQueue,
		          t = {},
		          key;
		      opts = opts || {};
		      for (key in T) {
		        if (T.hasOwnProperty(key)) {
		          t[key] = T[key];
		        }
		      }
		      t.queue = [];
		      t.sorter = opts.sorter || T.default_sorter;
		      return t;
		    },

		    default_sorter: function (a, b) {
		      return a.cost - b.cost;
		    },

		    /**
		     * Add a new item to the queue and ensure the highest priority element
		     * is at the front of the queue.
		     */
		    push: function (value, cost) {
		      var item = {value: value, cost: cost};
		      this.queue.push(item);
		      this.queue.sort(this.sorter);
		    },

		    /**
		     * Return the highest priority element in the queue.
		     */
		    pop: function () {
		      return this.queue.shift();
		    },

		    empty: function () {
		      return this.queue.length === 0;
		    }
		  }
		};


		// node.js module exports
		{
		  module.exports = dijkstra;
		} 
	} (dijkstra));
	return dijkstra.exports;
}

var hasRequiredSegments;

function requireSegments () {
	if (hasRequiredSegments) return segments;
	hasRequiredSegments = 1;
	(function (exports) {
		const Mode = requireMode();
		const NumericData = requireNumericData();
		const AlphanumericData = requireAlphanumericData();
		const ByteData = requireByteData();
		const KanjiData = requireKanjiData();
		const Regex = requireRegex();
		const Utils = requireUtils$1();
		const dijkstra = requireDijkstra();

		/**
		 * Returns UTF8 byte length
		 *
		 * @param  {String} str Input string
		 * @return {Number}     Number of byte
		 */
		function getStringByteLength (str) {
		  return unescape(encodeURIComponent(str)).length
		}

		/**
		 * Get a list of segments of the specified mode
		 * from a string
		 *
		 * @param  {Mode}   mode Segment mode
		 * @param  {String} str  String to process
		 * @return {Array}       Array of object with segments data
		 */
		function getSegments (regex, mode, str) {
		  const segments = [];
		  let result;

		  while ((result = regex.exec(str)) !== null) {
		    segments.push({
		      data: result[0],
		      index: result.index,
		      mode: mode,
		      length: result[0].length
		    });
		  }

		  return segments
		}

		/**
		 * Extracts a series of segments with the appropriate
		 * modes from a string
		 *
		 * @param  {String} dataStr Input string
		 * @return {Array}          Array of object with segments data
		 */
		function getSegmentsFromString (dataStr) {
		  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
		  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
		  let byteSegs;
		  let kanjiSegs;

		  if (Utils.isKanjiModeEnabled()) {
		    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
		    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
		  } else {
		    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
		    kanjiSegs = [];
		  }

		  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

		  return segs
		    .sort(function (s1, s2) {
		      return s1.index - s2.index
		    })
		    .map(function (obj) {
		      return {
		        data: obj.data,
		        mode: obj.mode,
		        length: obj.length
		      }
		    })
		}

		/**
		 * Returns how many bits are needed to encode a string of
		 * specified length with the specified mode
		 *
		 * @param  {Number} length String length
		 * @param  {Mode} mode     Segment mode
		 * @return {Number}        Bit length
		 */
		function getSegmentBitsLength (length, mode) {
		  switch (mode) {
		    case Mode.NUMERIC:
		      return NumericData.getBitsLength(length)
		    case Mode.ALPHANUMERIC:
		      return AlphanumericData.getBitsLength(length)
		    case Mode.KANJI:
		      return KanjiData.getBitsLength(length)
		    case Mode.BYTE:
		      return ByteData.getBitsLength(length)
		  }
		}

		/**
		 * Merges adjacent segments which have the same mode
		 *
		 * @param  {Array} segs Array of object with segments data
		 * @return {Array}      Array of object with segments data
		 */
		function mergeSegments (segs) {
		  return segs.reduce(function (acc, curr) {
		    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
		    if (prevSeg && prevSeg.mode === curr.mode) {
		      acc[acc.length - 1].data += curr.data;
		      return acc
		    }

		    acc.push(curr);
		    return acc
		  }, [])
		}

		/**
		 * Generates a list of all possible nodes combination which
		 * will be used to build a segments graph.
		 *
		 * Nodes are divided by groups. Each group will contain a list of all the modes
		 * in which is possible to encode the given text.
		 *
		 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
		 * The group for '12345' will contain then 3 objects, one for each
		 * possible encoding mode.
		 *
		 * Each node represents a possible segment.
		 *
		 * @param  {Array} segs Array of object with segments data
		 * @return {Array}      Array of object with segments data
		 */
		function buildNodes (segs) {
		  const nodes = [];
		  for (let i = 0; i < segs.length; i++) {
		    const seg = segs[i];

		    switch (seg.mode) {
		      case Mode.NUMERIC:
		        nodes.push([seg,
		          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
		          { data: seg.data, mode: Mode.BYTE, length: seg.length }
		        ]);
		        break
		      case Mode.ALPHANUMERIC:
		        nodes.push([seg,
		          { data: seg.data, mode: Mode.BYTE, length: seg.length }
		        ]);
		        break
		      case Mode.KANJI:
		        nodes.push([seg,
		          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
		        ]);
		        break
		      case Mode.BYTE:
		        nodes.push([
		          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
		        ]);
		    }
		  }

		  return nodes
		}

		/**
		 * Builds a graph from a list of nodes.
		 * All segments in each node group will be connected with all the segments of
		 * the next group and so on.
		 *
		 * At each connection will be assigned a weight depending on the
		 * segment's byte length.
		 *
		 * @param  {Array} nodes    Array of object with segments data
		 * @param  {Number} version QR Code version
		 * @return {Object}         Graph of all possible segments
		 */
		function buildGraph (nodes, version) {
		  const table = {};
		  const graph = { start: {} };
		  let prevNodeIds = ['start'];

		  for (let i = 0; i < nodes.length; i++) {
		    const nodeGroup = nodes[i];
		    const currentNodeIds = [];

		    for (let j = 0; j < nodeGroup.length; j++) {
		      const node = nodeGroup[j];
		      const key = '' + i + j;

		      currentNodeIds.push(key);
		      table[key] = { node: node, lastCount: 0 };
		      graph[key] = {};

		      for (let n = 0; n < prevNodeIds.length; n++) {
		        const prevNodeId = prevNodeIds[n];

		        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
		          graph[prevNodeId][key] =
		            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
		            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

		          table[prevNodeId].lastCount += node.length;
		        } else {
		          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;

		          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
		            4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
		        }
		      }
		    }

		    prevNodeIds = currentNodeIds;
		  }

		  for (let n = 0; n < prevNodeIds.length; n++) {
		    graph[prevNodeIds[n]].end = 0;
		  }

		  return { map: graph, table: table }
		}

		/**
		 * Builds a segment from a specified data and mode.
		 * If a mode is not specified, the more suitable will be used.
		 *
		 * @param  {String} data             Input data
		 * @param  {Mode | String} modesHint Data mode
		 * @return {Segment}                 Segment
		 */
		function buildSingleSegment (data, modesHint) {
		  let mode;
		  const bestMode = Mode.getBestModeForData(data);

		  mode = Mode.from(modesHint, bestMode);

		  // Make sure data can be encoded
		  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
		    throw new Error('"' + data + '"' +
		      ' cannot be encoded with mode ' + Mode.toString(mode) +
		      '.\n Suggested mode is: ' + Mode.toString(bestMode))
		  }

		  // Use Mode.BYTE if Kanji support is disabled
		  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
		    mode = Mode.BYTE;
		  }

		  switch (mode) {
		    case Mode.NUMERIC:
		      return new NumericData(data)

		    case Mode.ALPHANUMERIC:
		      return new AlphanumericData(data)

		    case Mode.KANJI:
		      return new KanjiData(data)

		    case Mode.BYTE:
		      return new ByteData(data)
		  }
		}

		/**
		 * Builds a list of segments from an array.
		 * Array can contain Strings or Objects with segment's info.
		 *
		 * For each item which is a string, will be generated a segment with the given
		 * string and the more appropriate encoding mode.
		 *
		 * For each item which is an object, will be generated a segment with the given
		 * data and mode.
		 * Objects must contain at least the property "data".
		 * If property "mode" is not present, the more suitable mode will be used.
		 *
		 * @param  {Array} array Array of objects with segments data
		 * @return {Array}       Array of Segments
		 */
		exports.fromArray = function fromArray (array) {
		  return array.reduce(function (acc, seg) {
		    if (typeof seg === 'string') {
		      acc.push(buildSingleSegment(seg, null));
		    } else if (seg.data) {
		      acc.push(buildSingleSegment(seg.data, seg.mode));
		    }

		    return acc
		  }, [])
		};

		/**
		 * Builds an optimized sequence of segments from a string,
		 * which will produce the shortest possible bitstream.
		 *
		 * @param  {String} data    Input string
		 * @param  {Number} version QR Code version
		 * @return {Array}          Array of segments
		 */
		exports.fromString = function fromString (data, version) {
		  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());

		  const nodes = buildNodes(segs);
		  const graph = buildGraph(nodes, version);
		  const path = dijkstra.find_path(graph.map, 'start', 'end');

		  const optimizedSegs = [];
		  for (let i = 1; i < path.length - 1; i++) {
		    optimizedSegs.push(graph.table[path[i]].node);
		  }

		  return exports.fromArray(mergeSegments(optimizedSegs))
		};

		/**
		 * Splits a string in various segments with the modes which
		 * best represent their content.
		 * The produced segments are far from being optimized.
		 * The output of this function is only used to estimate a QR Code version
		 * which may contain the data.
		 *
		 * @param  {string} data Input string
		 * @return {Array}       Array of segments
		 */
		exports.rawSplit = function rawSplit (data) {
		  return exports.fromArray(
		    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
		  )
		}; 
	} (segments));
	return segments;
}

var hasRequiredQrcode;

function requireQrcode () {
	if (hasRequiredQrcode) return qrcode;
	hasRequiredQrcode = 1;
	const Utils = requireUtils$1();
	const ECLevel = requireErrorCorrectionLevel();
	const BitBuffer = requireBitBuffer();
	const BitMatrix = requireBitMatrix();
	const AlignmentPattern = requireAlignmentPattern();
	const FinderPattern = requireFinderPattern();
	const MaskPattern = requireMaskPattern();
	const ECCode = requireErrorCorrectionCode();
	const ReedSolomonEncoder = requireReedSolomonEncoder();
	const Version = requireVersion();
	const FormatInfo = requireFormatInfo();
	const Mode = requireMode();
	const Segments = requireSegments();

	/**
	 * QRCode for JavaScript
	 *
	 * modified by Ryan Day for nodejs support
	 * Copyright (c) 2011 Ryan Day
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	*/

	/**
	 * Add finder patterns bits to matrix
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */
	function setupFinderPattern (matrix, version) {
	  const size = matrix.size;
	  const pos = FinderPattern.getPositions(version);

	  for (let i = 0; i < pos.length; i++) {
	    const row = pos[i][0];
	    const col = pos[i][1];

	    for (let r = -1; r <= 7; r++) {
	      if (row + r <= -1 || size <= row + r) continue

	      for (let c = -1; c <= 7; c++) {
	        if (col + c <= -1 || size <= col + c) continue

	        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
	          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
	          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
	          matrix.set(row + r, col + c, true, true);
	        } else {
	          matrix.set(row + r, col + c, false, true);
	        }
	      }
	    }
	  }
	}

	/**
	 * Add timing pattern bits to matrix
	 *
	 * Note: this function must be called before {@link setupAlignmentPattern}
	 *
	 * @param  {BitMatrix} matrix Modules matrix
	 */
	function setupTimingPattern (matrix) {
	  const size = matrix.size;

	  for (let r = 8; r < size - 8; r++) {
	    const value = r % 2 === 0;
	    matrix.set(r, 6, value, true);
	    matrix.set(6, r, value, true);
	  }
	}

	/**
	 * Add alignment patterns bits to matrix
	 *
	 * Note: this function must be called after {@link setupTimingPattern}
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */
	function setupAlignmentPattern (matrix, version) {
	  const pos = AlignmentPattern.getPositions(version);

	  for (let i = 0; i < pos.length; i++) {
	    const row = pos[i][0];
	    const col = pos[i][1];

	    for (let r = -2; r <= 2; r++) {
	      for (let c = -2; c <= 2; c++) {
	        if (r === -2 || r === 2 || c === -2 || c === 2 ||
	          (r === 0 && c === 0)) {
	          matrix.set(row + r, col + c, true, true);
	        } else {
	          matrix.set(row + r, col + c, false, true);
	        }
	      }
	    }
	  }
	}

	/**
	 * Add version info bits to matrix
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */
	function setupVersionInfo (matrix, version) {
	  const size = matrix.size;
	  const bits = Version.getEncodedBits(version);
	  let row, col, mod;

	  for (let i = 0; i < 18; i++) {
	    row = Math.floor(i / 3);
	    col = i % 3 + size - 8 - 3;
	    mod = ((bits >> i) & 1) === 1;

	    matrix.set(row, col, mod, true);
	    matrix.set(col, row, mod, true);
	  }
	}

	/**
	 * Add format info bits to matrix
	 *
	 * @param  {BitMatrix} matrix               Modules matrix
	 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
	 * @param  {Number}    maskPattern          Mask pattern reference value
	 */
	function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
	  const size = matrix.size;
	  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
	  let i, mod;

	  for (i = 0; i < 15; i++) {
	    mod = ((bits >> i) & 1) === 1;

	    // vertical
	    if (i < 6) {
	      matrix.set(i, 8, mod, true);
	    } else if (i < 8) {
	      matrix.set(i + 1, 8, mod, true);
	    } else {
	      matrix.set(size - 15 + i, 8, mod, true);
	    }

	    // horizontal
	    if (i < 8) {
	      matrix.set(8, size - i - 1, mod, true);
	    } else if (i < 9) {
	      matrix.set(8, 15 - i - 1 + 1, mod, true);
	    } else {
	      matrix.set(8, 15 - i - 1, mod, true);
	    }
	  }

	  // fixed module
	  matrix.set(size - 8, 8, 1, true);
	}

	/**
	 * Add encoded data bits to matrix
	 *
	 * @param  {BitMatrix}  matrix Modules matrix
	 * @param  {Uint8Array} data   Data codewords
	 */
	function setupData (matrix, data) {
	  const size = matrix.size;
	  let inc = -1;
	  let row = size - 1;
	  let bitIndex = 7;
	  let byteIndex = 0;

	  for (let col = size - 1; col > 0; col -= 2) {
	    if (col === 6) col--;

	    while (true) {
	      for (let c = 0; c < 2; c++) {
	        if (!matrix.isReserved(row, col - c)) {
	          let dark = false;

	          if (byteIndex < data.length) {
	            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
	          }

	          matrix.set(row, col - c, dark);
	          bitIndex--;

	          if (bitIndex === -1) {
	            byteIndex++;
	            bitIndex = 7;
	          }
	        }
	      }

	      row += inc;

	      if (row < 0 || size <= row) {
	        row -= inc;
	        inc = -inc;
	        break
	      }
	    }
	  }
	}

	/**
	 * Create encoded codewords from data input
	 *
	 * @param  {Number}   version              QR Code version
	 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
	 * @param  {ByteData} data                 Data input
	 * @return {Uint8Array}                    Buffer containing encoded codewords
	 */
	function createData (version, errorCorrectionLevel, segments) {
	  // Prepare data buffer
	  const buffer = new BitBuffer();

	  segments.forEach(function (data) {
	    // prefix data with mode indicator (4 bits)
	    buffer.put(data.mode.bit, 4);

	    // Prefix data with character count indicator.
	    // The character count indicator is a string of bits that represents the
	    // number of characters that are being encoded.
	    // The character count indicator must be placed after the mode indicator
	    // and must be a certain number of bits long, depending on the QR version
	    // and data mode
	    // @see {@link Mode.getCharCountIndicator}.
	    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

	    // add binary data sequence to buffer
	    data.write(buffer);
	  });

	  // Calculate required number of bits
	  const totalCodewords = Utils.getSymbolTotalCodewords(version);
	  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
	  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

	  // Add a terminator.
	  // If the bit string is shorter than the total number of required bits,
	  // a terminator of up to four 0s must be added to the right side of the string.
	  // If the bit string is more than four bits shorter than the required number of bits,
	  // add four 0s to the end.
	  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
	    buffer.put(0, 4);
	  }

	  // If the bit string is fewer than four bits shorter, add only the number of 0s that
	  // are needed to reach the required number of bits.

	  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
	  // pad the string on the right with 0s to make the string's length a multiple of 8.
	  while (buffer.getLengthInBits() % 8 !== 0) {
	    buffer.putBit(0);
	  }

	  // Add pad bytes if the string is still shorter than the total number of required bits.
	  // Extend the buffer to fill the data capacity of the symbol corresponding to
	  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
	  // and 00010001 (0x11) alternately.
	  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
	  for (let i = 0; i < remainingByte; i++) {
	    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
	  }

	  return createCodewords(buffer, version, errorCorrectionLevel)
	}

	/**
	 * Encode input data with Reed-Solomon and return codewords with
	 * relative error correction bits
	 *
	 * @param  {BitBuffer} bitBuffer            Data to encode
	 * @param  {Number}    version              QR Code version
	 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
	 * @return {Uint8Array}                     Buffer containing encoded codewords
	 */
	function createCodewords (bitBuffer, version, errorCorrectionLevel) {
	  // Total codewords for this QR code version (Data + Error correction)
	  const totalCodewords = Utils.getSymbolTotalCodewords(version);

	  // Total number of error correction codewords
	  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

	  // Total number of data codewords
	  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

	  // Total number of blocks
	  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

	  // Calculate how many blocks each group should contain
	  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
	  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

	  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

	  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
	  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

	  // Number of EC codewords is the same for both groups
	  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

	  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
	  const rs = new ReedSolomonEncoder(ecCount);

	  let offset = 0;
	  const dcData = new Array(ecTotalBlocks);
	  const ecData = new Array(ecTotalBlocks);
	  let maxDataSize = 0;
	  const buffer = new Uint8Array(bitBuffer.buffer);

	  // Divide the buffer into the required number of blocks
	  for (let b = 0; b < ecTotalBlocks; b++) {
	    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

	    // extract a block of data from buffer
	    dcData[b] = buffer.slice(offset, offset + dataSize);

	    // Calculate EC codewords for this data block
	    ecData[b] = rs.encode(dcData[b]);

	    offset += dataSize;
	    maxDataSize = Math.max(maxDataSize, dataSize);
	  }

	  // Create final data
	  // Interleave the data and error correction codewords from each block
	  const data = new Uint8Array(totalCodewords);
	  let index = 0;
	  let i, r;

	  // Add data codewords
	  for (i = 0; i < maxDataSize; i++) {
	    for (r = 0; r < ecTotalBlocks; r++) {
	      if (i < dcData[r].length) {
	        data[index++] = dcData[r][i];
	      }
	    }
	  }

	  // Apped EC codewords
	  for (i = 0; i < ecCount; i++) {
	    for (r = 0; r < ecTotalBlocks; r++) {
	      data[index++] = ecData[r][i];
	    }
	  }

	  return data
	}

	/**
	 * Build QR Code symbol
	 *
	 * @param  {String} data                 Input string
	 * @param  {Number} version              QR Code version
	 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
	 * @param  {MaskPattern} maskPattern     Mask pattern
	 * @return {Object}                      Object containing symbol data
	 */
	function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
	  let segments;

	  if (Array.isArray(data)) {
	    segments = Segments.fromArray(data);
	  } else if (typeof data === 'string') {
	    let estimatedVersion = version;

	    if (!estimatedVersion) {
	      const rawSegments = Segments.rawSplit(data);

	      // Estimate best version that can contain raw splitted segments
	      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
	    }

	    // Build optimized segments
	    // If estimated version is undefined, try with the highest version
	    segments = Segments.fromString(data, estimatedVersion || 40);
	  } else {
	    throw new Error('Invalid data')
	  }

	  // Get the min version that can contain data
	  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

	  // If no version is found, data cannot be stored
	  if (!bestVersion) {
	    throw new Error('The amount of data is too big to be stored in a QR Code')
	  }

	  // If not specified, use min version as default
	  if (!version) {
	    version = bestVersion;

	  // Check if the specified version can contain the data
	  } else if (version < bestVersion) {
	    throw new Error('\n' +
	      'The chosen QR Code version cannot contain this amount of data.\n' +
	      'Minimum version required to store current data is: ' + bestVersion + '.\n'
	    )
	  }

	  const dataBits = createData(version, errorCorrectionLevel, segments);

	  // Allocate matrix buffer
	  const moduleCount = Utils.getSymbolSize(version);
	  const modules = new BitMatrix(moduleCount);

	  // Add function modules
	  setupFinderPattern(modules, version);
	  setupTimingPattern(modules);
	  setupAlignmentPattern(modules, version);

	  // Add temporary dummy bits for format info just to set them as reserved.
	  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
	  // since the masking operation must be performed only on the encoding region.
	  // These blocks will be replaced with correct values later in code.
	  setupFormatInfo(modules, errorCorrectionLevel, 0);

	  if (version >= 7) {
	    setupVersionInfo(modules, version);
	  }

	  // Add data codewords
	  setupData(modules, dataBits);

	  if (isNaN(maskPattern)) {
	    // Find best mask pattern
	    maskPattern = MaskPattern.getBestMask(modules,
	      setupFormatInfo.bind(null, modules, errorCorrectionLevel));
	  }

	  // Apply mask pattern
	  MaskPattern.applyMask(maskPattern, modules);

	  // Replace format info bits with correct values
	  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);

	  return {
	    modules: modules,
	    version: version,
	    errorCorrectionLevel: errorCorrectionLevel,
	    maskPattern: maskPattern,
	    segments: segments
	  }
	}

	/**
	 * QR Code
	 *
	 * @param {String | Array} data                 Input data
	 * @param {Object} options                      Optional configurations
	 * @param {Number} options.version              QR Code version
	 * @param {String} options.errorCorrectionLevel Error correction level
	 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
	 */
	qrcode.create = function create (data, options) {
	  if (typeof data === 'undefined' || data === '') {
	    throw new Error('No input text')
	  }

	  let errorCorrectionLevel = ECLevel.M;
	  let version;
	  let mask;

	  if (typeof options !== 'undefined') {
	    // Use higher error correction level as default
	    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
	    version = Version.from(options.version);
	    mask = MaskPattern.from(options.maskPattern);

	    if (options.toSJISFunc) {
	      Utils.setToSJISFunction(options.toSJISFunc);
	    }
	  }

	  return createSymbol(data, version, errorCorrectionLevel, mask)
	};
	return qrcode;
}

var png$1 = {};

var png = {};

var parserAsync = {exports: {}};

var chunkstream = {exports: {}};

var hasRequiredChunkstream;

function requireChunkstream () {
	if (hasRequiredChunkstream) return chunkstream.exports;
	hasRequiredChunkstream = 1;

	let util = require$$0;
	let Stream = require$$1;

	let ChunkStream = (chunkstream.exports = function () {
	  Stream.call(this);

	  this._buffers = [];
	  this._buffered = 0;

	  this._reads = [];
	  this._paused = false;

	  this._encoding = "utf8";
	  this.writable = true;
	});
	util.inherits(ChunkStream, Stream);

	ChunkStream.prototype.read = function (length, callback) {
	  this._reads.push({
	    length: Math.abs(length), // if length < 0 then at most this length
	    allowLess: length < 0,
	    func: callback,
	  });

	  process.nextTick(
	    function () {
	      this._process();

	      // its paused and there is not enought data then ask for more
	      if (this._paused && this._reads && this._reads.length > 0) {
	        this._paused = false;

	        this.emit("drain");
	      }
	    }.bind(this)
	  );
	};

	ChunkStream.prototype.write = function (data, encoding) {
	  if (!this.writable) {
	    this.emit("error", new Error("Stream not writable"));
	    return false;
	  }

	  let dataBuffer;
	  if (Buffer.isBuffer(data)) {
	    dataBuffer = data;
	  } else {
	    dataBuffer = Buffer.from(data, encoding || this._encoding);
	  }

	  this._buffers.push(dataBuffer);
	  this._buffered += dataBuffer.length;

	  this._process();

	  // ok if there are no more read requests
	  if (this._reads && this._reads.length === 0) {
	    this._paused = true;
	  }

	  return this.writable && !this._paused;
	};

	ChunkStream.prototype.end = function (data, encoding) {
	  if (data) {
	    this.write(data, encoding);
	  }

	  this.writable = false;

	  // already destroyed
	  if (!this._buffers) {
	    return;
	  }

	  // enqueue or handle end
	  if (this._buffers.length === 0) {
	    this._end();
	  } else {
	    this._buffers.push(null);
	    this._process();
	  }
	};

	ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;

	ChunkStream.prototype._end = function () {
	  if (this._reads.length > 0) {
	    this.emit("error", new Error("Unexpected end of input"));
	  }

	  this.destroy();
	};

	ChunkStream.prototype.destroy = function () {
	  if (!this._buffers) {
	    return;
	  }

	  this.writable = false;
	  this._reads = null;
	  this._buffers = null;

	  this.emit("close");
	};

	ChunkStream.prototype._processReadAllowingLess = function (read) {
	  // ok there is any data so that we can satisfy this request
	  this._reads.shift(); // == read

	  // first we need to peek into first buffer
	  let smallerBuf = this._buffers[0];

	  // ok there is more data than we need
	  if (smallerBuf.length > read.length) {
	    this._buffered -= read.length;
	    this._buffers[0] = smallerBuf.slice(read.length);

	    read.func.call(this, smallerBuf.slice(0, read.length));
	  } else {
	    // ok this is less than maximum length so use it all
	    this._buffered -= smallerBuf.length;
	    this._buffers.shift(); // == smallerBuf

	    read.func.call(this, smallerBuf);
	  }
	};

	ChunkStream.prototype._processRead = function (read) {
	  this._reads.shift(); // == read

	  let pos = 0;
	  let count = 0;
	  let data = Buffer.alloc(read.length);

	  // create buffer for all data
	  while (pos < read.length) {
	    let buf = this._buffers[count++];
	    let len = Math.min(buf.length, read.length - pos);

	    buf.copy(data, pos, 0, len);
	    pos += len;

	    // last buffer wasn't used all so just slice it and leave
	    if (len !== buf.length) {
	      this._buffers[--count] = buf.slice(len);
	    }
	  }

	  // remove all used buffers
	  if (count > 0) {
	    this._buffers.splice(0, count);
	  }

	  this._buffered -= read.length;

	  read.func.call(this, data);
	};

	ChunkStream.prototype._process = function () {
	  try {
	    // as long as there is any data and read requests
	    while (this._buffered > 0 && this._reads && this._reads.length > 0) {
	      let read = this._reads[0];

	      // read any data (but no more than length)
	      if (read.allowLess) {
	        this._processReadAllowingLess(read);
	      } else if (this._buffered >= read.length) {
	        // ok we can meet some expectations

	        this._processRead(read);
	      } else {
	        // not enought data to satisfy first request in queue
	        // so we need to wait for more
	        break;
	      }
	    }

	    if (this._buffers && !this.writable) {
	      this._end();
	    }
	  } catch (ex) {
	    this.emit("error", ex);
	  }
	};
	return chunkstream.exports;
}

var filterParseAsync = {exports: {}};

var filterParse = {exports: {}};

var interlace = {};

var hasRequiredInterlace;

function requireInterlace () {
	if (hasRequiredInterlace) return interlace;
	hasRequiredInterlace = 1;

	// Adam 7
	//   0 1 2 3 4 5 6 7
	// 0 x 6 4 6 x 6 4 6
	// 1 7 7 7 7 7 7 7 7
	// 2 5 6 5 6 5 6 5 6
	// 3 7 7 7 7 7 7 7 7
	// 4 3 6 4 6 3 6 4 6
	// 5 7 7 7 7 7 7 7 7
	// 6 5 6 5 6 5 6 5 6
	// 7 7 7 7 7 7 7 7 7

	let imagePasses = [
	  {
	    // pass 1 - 1px
	    x: [0],
	    y: [0],
	  },
	  {
	    // pass 2 - 1px
	    x: [4],
	    y: [0],
	  },
	  {
	    // pass 3 - 2px
	    x: [0, 4],
	    y: [4],
	  },
	  {
	    // pass 4 - 4px
	    x: [2, 6],
	    y: [0, 4],
	  },
	  {
	    // pass 5 - 8px
	    x: [0, 2, 4, 6],
	    y: [2, 6],
	  },
	  {
	    // pass 6 - 16px
	    x: [1, 3, 5, 7],
	    y: [0, 2, 4, 6],
	  },
	  {
	    // pass 7 - 32px
	    x: [0, 1, 2, 3, 4, 5, 6, 7],
	    y: [1, 3, 5, 7],
	  },
	];

	interlace.getImagePasses = function (width, height) {
	  let images = [];
	  let xLeftOver = width % 8;
	  let yLeftOver = height % 8;
	  let xRepeats = (width - xLeftOver) / 8;
	  let yRepeats = (height - yLeftOver) / 8;
	  for (let i = 0; i < imagePasses.length; i++) {
	    let pass = imagePasses[i];
	    let passWidth = xRepeats * pass.x.length;
	    let passHeight = yRepeats * pass.y.length;
	    for (let j = 0; j < pass.x.length; j++) {
	      if (pass.x[j] < xLeftOver) {
	        passWidth++;
	      } else {
	        break;
	      }
	    }
	    for (let j = 0; j < pass.y.length; j++) {
	      if (pass.y[j] < yLeftOver) {
	        passHeight++;
	      } else {
	        break;
	      }
	    }
	    if (passWidth > 0 && passHeight > 0) {
	      images.push({ width: passWidth, height: passHeight, index: i });
	    }
	  }
	  return images;
	};

	interlace.getInterlaceIterator = function (width) {
	  return function (x, y, pass) {
	    let outerXLeftOver = x % imagePasses[pass].x.length;
	    let outerX =
	      ((x - outerXLeftOver) / imagePasses[pass].x.length) * 8 +
	      imagePasses[pass].x[outerXLeftOver];
	    let outerYLeftOver = y % imagePasses[pass].y.length;
	    let outerY =
	      ((y - outerYLeftOver) / imagePasses[pass].y.length) * 8 +
	      imagePasses[pass].y[outerYLeftOver];
	    return outerX * 4 + outerY * width * 4;
	  };
	};
	return interlace;
}

var paethPredictor;
var hasRequiredPaethPredictor;

function requirePaethPredictor () {
	if (hasRequiredPaethPredictor) return paethPredictor;
	hasRequiredPaethPredictor = 1;

	paethPredictor = function paethPredictor(left, above, upLeft) {
	  let paeth = left + above - upLeft;
	  let pLeft = Math.abs(paeth - left);
	  let pAbove = Math.abs(paeth - above);
	  let pUpLeft = Math.abs(paeth - upLeft);

	  if (pLeft <= pAbove && pLeft <= pUpLeft) {
	    return left;
	  }
	  if (pAbove <= pUpLeft) {
	    return above;
	  }
	  return upLeft;
	};
	return paethPredictor;
}

var hasRequiredFilterParse;

function requireFilterParse () {
	if (hasRequiredFilterParse) return filterParse.exports;
	hasRequiredFilterParse = 1;

	let interlaceUtils = requireInterlace();
	let paethPredictor = requirePaethPredictor();

	function getByteWidth(width, bpp, depth) {
	  let byteWidth = width * bpp;
	  if (depth !== 8) {
	    byteWidth = Math.ceil(byteWidth / (8 / depth));
	  }
	  return byteWidth;
	}

	let Filter = (filterParse.exports = function (bitmapInfo, dependencies) {
	  let width = bitmapInfo.width;
	  let height = bitmapInfo.height;
	  let interlace = bitmapInfo.interlace;
	  let bpp = bitmapInfo.bpp;
	  let depth = bitmapInfo.depth;

	  this.read = dependencies.read;
	  this.write = dependencies.write;
	  this.complete = dependencies.complete;

	  this._imageIndex = 0;
	  this._images = [];
	  if (interlace) {
	    let passes = interlaceUtils.getImagePasses(width, height);
	    for (let i = 0; i < passes.length; i++) {
	      this._images.push({
	        byteWidth: getByteWidth(passes[i].width, bpp, depth),
	        height: passes[i].height,
	        lineIndex: 0,
	      });
	    }
	  } else {
	    this._images.push({
	      byteWidth: getByteWidth(width, bpp, depth),
	      height: height,
	      lineIndex: 0,
	    });
	  }

	  // when filtering the line we look at the pixel to the left
	  // the spec also says it is done on a byte level regardless of the number of pixels
	  // so if the depth is byte compatible (8 or 16) we subtract the bpp in order to compare back
	  // a pixel rather than just a different byte part. However if we are sub byte, we ignore.
	  if (depth === 8) {
	    this._xComparison = bpp;
	  } else if (depth === 16) {
	    this._xComparison = bpp * 2;
	  } else {
	    this._xComparison = 1;
	  }
	});

	Filter.prototype.start = function () {
	  this.read(
	    this._images[this._imageIndex].byteWidth + 1,
	    this._reverseFilterLine.bind(this)
	  );
	};

	Filter.prototype._unFilterType1 = function (
	  rawData,
	  unfilteredLine,
	  byteWidth
	) {
	  let xComparison = this._xComparison;
	  let xBiggerThan = xComparison - 1;

	  for (let x = 0; x < byteWidth; x++) {
	    let rawByte = rawData[1 + x];
	    let f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
	    unfilteredLine[x] = rawByte + f1Left;
	  }
	};

	Filter.prototype._unFilterType2 = function (
	  rawData,
	  unfilteredLine,
	  byteWidth
	) {
	  let lastLine = this._lastLine;

	  for (let x = 0; x < byteWidth; x++) {
	    let rawByte = rawData[1 + x];
	    let f2Up = lastLine ? lastLine[x] : 0;
	    unfilteredLine[x] = rawByte + f2Up;
	  }
	};

	Filter.prototype._unFilterType3 = function (
	  rawData,
	  unfilteredLine,
	  byteWidth
	) {
	  let xComparison = this._xComparison;
	  let xBiggerThan = xComparison - 1;
	  let lastLine = this._lastLine;

	  for (let x = 0; x < byteWidth; x++) {
	    let rawByte = rawData[1 + x];
	    let f3Up = lastLine ? lastLine[x] : 0;
	    let f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
	    let f3Add = Math.floor((f3Left + f3Up) / 2);
	    unfilteredLine[x] = rawByte + f3Add;
	  }
	};

	Filter.prototype._unFilterType4 = function (
	  rawData,
	  unfilteredLine,
	  byteWidth
	) {
	  let xComparison = this._xComparison;
	  let xBiggerThan = xComparison - 1;
	  let lastLine = this._lastLine;

	  for (let x = 0; x < byteWidth; x++) {
	    let rawByte = rawData[1 + x];
	    let f4Up = lastLine ? lastLine[x] : 0;
	    let f4Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
	    let f4UpLeft = x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0;
	    let f4Add = paethPredictor(f4Left, f4Up, f4UpLeft);
	    unfilteredLine[x] = rawByte + f4Add;
	  }
	};

	Filter.prototype._reverseFilterLine = function (rawData) {
	  let filter = rawData[0];
	  let unfilteredLine;
	  let currentImage = this._images[this._imageIndex];
	  let byteWidth = currentImage.byteWidth;

	  if (filter === 0) {
	    unfilteredLine = rawData.slice(1, byteWidth + 1);
	  } else {
	    unfilteredLine = Buffer.alloc(byteWidth);

	    switch (filter) {
	      case 1:
	        this._unFilterType1(rawData, unfilteredLine, byteWidth);
	        break;
	      case 2:
	        this._unFilterType2(rawData, unfilteredLine, byteWidth);
	        break;
	      case 3:
	        this._unFilterType3(rawData, unfilteredLine, byteWidth);
	        break;
	      case 4:
	        this._unFilterType4(rawData, unfilteredLine, byteWidth);
	        break;
	      default:
	        throw new Error("Unrecognised filter type - " + filter);
	    }
	  }

	  this.write(unfilteredLine);

	  currentImage.lineIndex++;
	  if (currentImage.lineIndex >= currentImage.height) {
	    this._lastLine = null;
	    this._imageIndex++;
	    currentImage = this._images[this._imageIndex];
	  } else {
	    this._lastLine = unfilteredLine;
	  }

	  if (currentImage) {
	    // read, using the byte width that may be from the new current image
	    this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
	  } else {
	    this._lastLine = null;
	    this.complete();
	  }
	};
	return filterParse.exports;
}

var hasRequiredFilterParseAsync;

function requireFilterParseAsync () {
	if (hasRequiredFilterParseAsync) return filterParseAsync.exports;
	hasRequiredFilterParseAsync = 1;

	let util = require$$0;
	let ChunkStream = requireChunkstream();
	let Filter = requireFilterParse();

	let FilterAsync = (filterParseAsync.exports = function (bitmapInfo) {
	  ChunkStream.call(this);

	  let buffers = [];
	  let that = this;
	  this._filter = new Filter(bitmapInfo, {
	    read: this.read.bind(this),
	    write: function (buffer) {
	      buffers.push(buffer);
	    },
	    complete: function () {
	      that.emit("complete", Buffer.concat(buffers));
	    },
	  });

	  this._filter.start();
	});
	util.inherits(FilterAsync, ChunkStream);
	return filterParseAsync.exports;
}

var parser = {exports: {}};

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	constants = {
	  PNG_SIGNATURE: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],

	  TYPE_IHDR: 0x49484452,
	  TYPE_IEND: 0x49454e44,
	  TYPE_IDAT: 0x49444154,
	  TYPE_PLTE: 0x504c5445,
	  TYPE_tRNS: 0x74524e53, // eslint-disable-line camelcase
	  TYPE_gAMA: 0x67414d41, // eslint-disable-line camelcase

	  // color-type bits
	  COLORTYPE_GRAYSCALE: 0,
	  COLORTYPE_PALETTE: 1,
	  COLORTYPE_COLOR: 2,
	  COLORTYPE_ALPHA: 4, // e.g. grayscale and alpha

	  // color-type combinations
	  COLORTYPE_PALETTE_COLOR: 3,
	  COLORTYPE_COLOR_ALPHA: 6,

	  COLORTYPE_TO_BPP_MAP: {
	    0: 1,
	    2: 3,
	    3: 1,
	    4: 2,
	    6: 4,
	  },

	  GAMMA_DIVISION: 100000,
	};
	return constants;
}

var crc = {exports: {}};

var hasRequiredCrc;

function requireCrc () {
	if (hasRequiredCrc) return crc.exports;
	hasRequiredCrc = 1;

	let crcTable = [];

	(function () {
	  for (let i = 0; i < 256; i++) {
	    let currentCrc = i;
	    for (let j = 0; j < 8; j++) {
	      if (currentCrc & 1) {
	        currentCrc = 0xedb88320 ^ (currentCrc >>> 1);
	      } else {
	        currentCrc = currentCrc >>> 1;
	      }
	    }
	    crcTable[i] = currentCrc;
	  }
	})();

	let CrcCalculator = (crc.exports = function () {
	  this._crc = -1;
	});

	CrcCalculator.prototype.write = function (data) {
	  for (let i = 0; i < data.length; i++) {
	    this._crc = crcTable[(this._crc ^ data[i]) & 0xff] ^ (this._crc >>> 8);
	  }
	  return true;
	};

	CrcCalculator.prototype.crc32 = function () {
	  return this._crc ^ -1;
	};

	CrcCalculator.crc32 = function (buf) {
	  let crc = -1;
	  for (let i = 0; i < buf.length; i++) {
	    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
	  }
	  return crc ^ -1;
	};
	return crc.exports;
}

var hasRequiredParser;

function requireParser () {
	if (hasRequiredParser) return parser.exports;
	hasRequiredParser = 1;

	let constants = requireConstants();
	let CrcCalculator = requireCrc();

	let Parser = (parser.exports = function (options, dependencies) {
	  this._options = options;
	  options.checkCRC = options.checkCRC !== false;

	  this._hasIHDR = false;
	  this._hasIEND = false;
	  this._emittedHeadersFinished = false;

	  // input flags/metadata
	  this._palette = [];
	  this._colorType = 0;

	  this._chunks = {};
	  this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
	  this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
	  this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
	  this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
	  this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
	  this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);

	  this.read = dependencies.read;
	  this.error = dependencies.error;
	  this.metadata = dependencies.metadata;
	  this.gamma = dependencies.gamma;
	  this.transColor = dependencies.transColor;
	  this.palette = dependencies.palette;
	  this.parsed = dependencies.parsed;
	  this.inflateData = dependencies.inflateData;
	  this.finished = dependencies.finished;
	  this.simpleTransparency = dependencies.simpleTransparency;
	  this.headersFinished = dependencies.headersFinished || function () {};
	});

	Parser.prototype.start = function () {
	  this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
	};

	Parser.prototype._parseSignature = function (data) {
	  let signature = constants.PNG_SIGNATURE;

	  for (let i = 0; i < signature.length; i++) {
	    if (data[i] !== signature[i]) {
	      this.error(new Error("Invalid file signature"));
	      return;
	    }
	  }
	  this.read(8, this._parseChunkBegin.bind(this));
	};

	Parser.prototype._parseChunkBegin = function (data) {
	  // chunk content length
	  let length = data.readUInt32BE(0);

	  // chunk type
	  let type = data.readUInt32BE(4);
	  let name = "";
	  for (let i = 4; i < 8; i++) {
	    name += String.fromCharCode(data[i]);
	  }

	  //console.log('chunk ', name, length);

	  // chunk flags
	  let ancillary = Boolean(data[4] & 0x20); // or critical
	  //    priv = Boolean(data[5] & 0x20), // or public
	  //    safeToCopy = Boolean(data[7] & 0x20); // or unsafe

	  if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
	    this.error(new Error("Expected IHDR on beggining"));
	    return;
	  }

	  this._crc = new CrcCalculator();
	  this._crc.write(Buffer.from(name));

	  if (this._chunks[type]) {
	    return this._chunks[type](length);
	  }

	  if (!ancillary) {
	    this.error(new Error("Unsupported critical chunk type " + name));
	    return;
	  }

	  this.read(length + 4, this._skipChunk.bind(this));
	};

	Parser.prototype._skipChunk = function (/*data*/) {
	  this.read(8, this._parseChunkBegin.bind(this));
	};

	Parser.prototype._handleChunkEnd = function () {
	  this.read(4, this._parseChunkEnd.bind(this));
	};

	Parser.prototype._parseChunkEnd = function (data) {
	  let fileCrc = data.readInt32BE(0);
	  let calcCrc = this._crc.crc32();

	  // check CRC
	  if (this._options.checkCRC && calcCrc !== fileCrc) {
	    this.error(new Error("Crc error - " + fileCrc + " - " + calcCrc));
	    return;
	  }

	  if (!this._hasIEND) {
	    this.read(8, this._parseChunkBegin.bind(this));
	  }
	};

	Parser.prototype._handleIHDR = function (length) {
	  this.read(length, this._parseIHDR.bind(this));
	};
	Parser.prototype._parseIHDR = function (data) {
	  this._crc.write(data);

	  let width = data.readUInt32BE(0);
	  let height = data.readUInt32BE(4);
	  let depth = data[8];
	  let colorType = data[9]; // bits: 1 palette, 2 color, 4 alpha
	  let compr = data[10];
	  let filter = data[11];
	  let interlace = data[12];

	  // console.log('    width', width, 'height', height,
	  //     'depth', depth, 'colorType', colorType,
	  //     'compr', compr, 'filter', filter, 'interlace', interlace
	  // );

	  if (
	    depth !== 8 &&
	    depth !== 4 &&
	    depth !== 2 &&
	    depth !== 1 &&
	    depth !== 16
	  ) {
	    this.error(new Error("Unsupported bit depth " + depth));
	    return;
	  }
	  if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
	    this.error(new Error("Unsupported color type"));
	    return;
	  }
	  if (compr !== 0) {
	    this.error(new Error("Unsupported compression method"));
	    return;
	  }
	  if (filter !== 0) {
	    this.error(new Error("Unsupported filter method"));
	    return;
	  }
	  if (interlace !== 0 && interlace !== 1) {
	    this.error(new Error("Unsupported interlace method"));
	    return;
	  }

	  this._colorType = colorType;

	  let bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];

	  this._hasIHDR = true;

	  this.metadata({
	    width: width,
	    height: height,
	    depth: depth,
	    interlace: Boolean(interlace),
	    palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
	    color: Boolean(colorType & constants.COLORTYPE_COLOR),
	    alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
	    bpp: bpp,
	    colorType: colorType,
	  });

	  this._handleChunkEnd();
	};

	Parser.prototype._handlePLTE = function (length) {
	  this.read(length, this._parsePLTE.bind(this));
	};
	Parser.prototype._parsePLTE = function (data) {
	  this._crc.write(data);

	  let entries = Math.floor(data.length / 3);
	  // console.log('Palette:', entries);

	  for (let i = 0; i < entries; i++) {
	    this._palette.push([data[i * 3], data[i * 3 + 1], data[i * 3 + 2], 0xff]);
	  }

	  this.palette(this._palette);

	  this._handleChunkEnd();
	};

	Parser.prototype._handleTRNS = function (length) {
	  this.simpleTransparency();
	  this.read(length, this._parseTRNS.bind(this));
	};
	Parser.prototype._parseTRNS = function (data) {
	  this._crc.write(data);

	  // palette
	  if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
	    if (this._palette.length === 0) {
	      this.error(new Error("Transparency chunk must be after palette"));
	      return;
	    }
	    if (data.length > this._palette.length) {
	      this.error(new Error("More transparent colors than palette size"));
	      return;
	    }
	    for (let i = 0; i < data.length; i++) {
	      this._palette[i][3] = data[i];
	    }
	    this.palette(this._palette);
	  }

	  // for colorType 0 (grayscale) and 2 (rgb)
	  // there might be one gray/color defined as transparent
	  if (this._colorType === constants.COLORTYPE_GRAYSCALE) {
	    // grey, 2 bytes
	    this.transColor([data.readUInt16BE(0)]);
	  }
	  if (this._colorType === constants.COLORTYPE_COLOR) {
	    this.transColor([
	      data.readUInt16BE(0),
	      data.readUInt16BE(2),
	      data.readUInt16BE(4),
	    ]);
	  }

	  this._handleChunkEnd();
	};

	Parser.prototype._handleGAMA = function (length) {
	  this.read(length, this._parseGAMA.bind(this));
	};
	Parser.prototype._parseGAMA = function (data) {
	  this._crc.write(data);
	  this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);

	  this._handleChunkEnd();
	};

	Parser.prototype._handleIDAT = function (length) {
	  if (!this._emittedHeadersFinished) {
	    this._emittedHeadersFinished = true;
	    this.headersFinished();
	  }
	  this.read(-length, this._parseIDAT.bind(this, length));
	};
	Parser.prototype._parseIDAT = function (length, data) {
	  this._crc.write(data);

	  if (
	    this._colorType === constants.COLORTYPE_PALETTE_COLOR &&
	    this._palette.length === 0
	  ) {
	    throw new Error("Expected palette not found");
	  }

	  this.inflateData(data);
	  let leftOverLength = length - data.length;

	  if (leftOverLength > 0) {
	    this._handleIDAT(leftOverLength);
	  } else {
	    this._handleChunkEnd();
	  }
	};

	Parser.prototype._handleIEND = function (length) {
	  this.read(length, this._parseIEND.bind(this));
	};
	Parser.prototype._parseIEND = function (data) {
	  this._crc.write(data);

	  this._hasIEND = true;
	  this._handleChunkEnd();

	  if (this.finished) {
	    this.finished();
	  }
	};
	return parser.exports;
}

var bitmapper = {};

var hasRequiredBitmapper;

function requireBitmapper () {
	if (hasRequiredBitmapper) return bitmapper;
	hasRequiredBitmapper = 1;

	let interlaceUtils = requireInterlace();

	let pixelBppMapper = [
	  // 0 - dummy entry
	  function () {},

	  // 1 - L
	  // 0: 0, 1: 0, 2: 0, 3: 0xff
	  function (pxData, data, pxPos, rawPos) {
	    if (rawPos === data.length) {
	      throw new Error("Ran out of data");
	    }

	    let pixel = data[rawPos];
	    pxData[pxPos] = pixel;
	    pxData[pxPos + 1] = pixel;
	    pxData[pxPos + 2] = pixel;
	    pxData[pxPos + 3] = 0xff;
	  },

	  // 2 - LA
	  // 0: 0, 1: 0, 2: 0, 3: 1
	  function (pxData, data, pxPos, rawPos) {
	    if (rawPos + 1 >= data.length) {
	      throw new Error("Ran out of data");
	    }

	    let pixel = data[rawPos];
	    pxData[pxPos] = pixel;
	    pxData[pxPos + 1] = pixel;
	    pxData[pxPos + 2] = pixel;
	    pxData[pxPos + 3] = data[rawPos + 1];
	  },

	  // 3 - RGB
	  // 0: 0, 1: 1, 2: 2, 3: 0xff
	  function (pxData, data, pxPos, rawPos) {
	    if (rawPos + 2 >= data.length) {
	      throw new Error("Ran out of data");
	    }

	    pxData[pxPos] = data[rawPos];
	    pxData[pxPos + 1] = data[rawPos + 1];
	    pxData[pxPos + 2] = data[rawPos + 2];
	    pxData[pxPos + 3] = 0xff;
	  },

	  // 4 - RGBA
	  // 0: 0, 1: 1, 2: 2, 3: 3
	  function (pxData, data, pxPos, rawPos) {
	    if (rawPos + 3 >= data.length) {
	      throw new Error("Ran out of data");
	    }

	    pxData[pxPos] = data[rawPos];
	    pxData[pxPos + 1] = data[rawPos + 1];
	    pxData[pxPos + 2] = data[rawPos + 2];
	    pxData[pxPos + 3] = data[rawPos + 3];
	  },
	];

	let pixelBppCustomMapper = [
	  // 0 - dummy entry
	  function () {},

	  // 1 - L
	  // 0: 0, 1: 0, 2: 0, 3: 0xff
	  function (pxData, pixelData, pxPos, maxBit) {
	    let pixel = pixelData[0];
	    pxData[pxPos] = pixel;
	    pxData[pxPos + 1] = pixel;
	    pxData[pxPos + 2] = pixel;
	    pxData[pxPos + 3] = maxBit;
	  },

	  // 2 - LA
	  // 0: 0, 1: 0, 2: 0, 3: 1
	  function (pxData, pixelData, pxPos) {
	    let pixel = pixelData[0];
	    pxData[pxPos] = pixel;
	    pxData[pxPos + 1] = pixel;
	    pxData[pxPos + 2] = pixel;
	    pxData[pxPos + 3] = pixelData[1];
	  },

	  // 3 - RGB
	  // 0: 0, 1: 1, 2: 2, 3: 0xff
	  function (pxData, pixelData, pxPos, maxBit) {
	    pxData[pxPos] = pixelData[0];
	    pxData[pxPos + 1] = pixelData[1];
	    pxData[pxPos + 2] = pixelData[2];
	    pxData[pxPos + 3] = maxBit;
	  },

	  // 4 - RGBA
	  // 0: 0, 1: 1, 2: 2, 3: 3
	  function (pxData, pixelData, pxPos) {
	    pxData[pxPos] = pixelData[0];
	    pxData[pxPos + 1] = pixelData[1];
	    pxData[pxPos + 2] = pixelData[2];
	    pxData[pxPos + 3] = pixelData[3];
	  },
	];

	function bitRetriever(data, depth) {
	  let leftOver = [];
	  let i = 0;

	  function split() {
	    if (i === data.length) {
	      throw new Error("Ran out of data");
	    }
	    let byte = data[i];
	    i++;
	    let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
	    switch (depth) {
	      default:
	        throw new Error("unrecognised depth");
	      case 16:
	        byte2 = data[i];
	        i++;
	        leftOver.push((byte << 8) + byte2);
	        break;
	      case 4:
	        byte2 = byte & 0x0f;
	        byte1 = byte >> 4;
	        leftOver.push(byte1, byte2);
	        break;
	      case 2:
	        byte4 = byte & 3;
	        byte3 = (byte >> 2) & 3;
	        byte2 = (byte >> 4) & 3;
	        byte1 = (byte >> 6) & 3;
	        leftOver.push(byte1, byte2, byte3, byte4);
	        break;
	      case 1:
	        byte8 = byte & 1;
	        byte7 = (byte >> 1) & 1;
	        byte6 = (byte >> 2) & 1;
	        byte5 = (byte >> 3) & 1;
	        byte4 = (byte >> 4) & 1;
	        byte3 = (byte >> 5) & 1;
	        byte2 = (byte >> 6) & 1;
	        byte1 = (byte >> 7) & 1;
	        leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
	        break;
	    }
	  }

	  return {
	    get: function (count) {
	      while (leftOver.length < count) {
	        split();
	      }
	      let returner = leftOver.slice(0, count);
	      leftOver = leftOver.slice(count);
	      return returner;
	    },
	    resetAfterLine: function () {
	      leftOver.length = 0;
	    },
	    end: function () {
	      if (i !== data.length) {
	        throw new Error("extra data found");
	      }
	    },
	  };
	}

	function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
	  // eslint-disable-line max-params
	  let imageWidth = image.width;
	  let imageHeight = image.height;
	  let imagePass = image.index;
	  for (let y = 0; y < imageHeight; y++) {
	    for (let x = 0; x < imageWidth; x++) {
	      let pxPos = getPxPos(x, y, imagePass);
	      pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
	      rawPos += bpp; //eslint-disable-line no-param-reassign
	    }
	  }
	  return rawPos;
	}

	function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
	  // eslint-disable-line max-params
	  let imageWidth = image.width;
	  let imageHeight = image.height;
	  let imagePass = image.index;
	  for (let y = 0; y < imageHeight; y++) {
	    for (let x = 0; x < imageWidth; x++) {
	      let pixelData = bits.get(bpp);
	      let pxPos = getPxPos(x, y, imagePass);
	      pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
	    }
	    bits.resetAfterLine();
	  }
	}

	bitmapper.dataToBitMap = function (data, bitmapInfo) {
	  let width = bitmapInfo.width;
	  let height = bitmapInfo.height;
	  let depth = bitmapInfo.depth;
	  let bpp = bitmapInfo.bpp;
	  let interlace = bitmapInfo.interlace;
	  let bits;

	  if (depth !== 8) {
	    bits = bitRetriever(data, depth);
	  }
	  let pxData;
	  if (depth <= 8) {
	    pxData = Buffer.alloc(width * height * 4);
	  } else {
	    pxData = new Uint16Array(width * height * 4);
	  }
	  let maxBit = Math.pow(2, depth) - 1;
	  let rawPos = 0;
	  let images;
	  let getPxPos;

	  if (interlace) {
	    images = interlaceUtils.getImagePasses(width, height);
	    getPxPos = interlaceUtils.getInterlaceIterator(width, height);
	  } else {
	    let nonInterlacedPxPos = 0;
	    getPxPos = function () {
	      let returner = nonInterlacedPxPos;
	      nonInterlacedPxPos += 4;
	      return returner;
	    };
	    images = [{ width: width, height: height }];
	  }

	  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
	    if (depth === 8) {
	      rawPos = mapImage8Bit(
	        images[imageIndex],
	        pxData,
	        getPxPos,
	        bpp,
	        data,
	        rawPos
	      );
	    } else {
	      mapImageCustomBit(
	        images[imageIndex],
	        pxData,
	        getPxPos,
	        bpp,
	        bits,
	        maxBit
	      );
	    }
	  }
	  if (depth === 8) {
	    if (rawPos !== data.length) {
	      throw new Error("extra data found");
	    }
	  } else {
	    bits.end();
	  }

	  return pxData;
	};
	return bitmapper;
}

var formatNormaliser;
var hasRequiredFormatNormaliser;

function requireFormatNormaliser () {
	if (hasRequiredFormatNormaliser) return formatNormaliser;
	hasRequiredFormatNormaliser = 1;

	function dePalette(indata, outdata, width, height, palette) {
	  let pxPos = 0;
	  // use values from palette
	  for (let y = 0; y < height; y++) {
	    for (let x = 0; x < width; x++) {
	      let color = palette[indata[pxPos]];

	      if (!color) {
	        throw new Error("index " + indata[pxPos] + " not in palette");
	      }

	      for (let i = 0; i < 4; i++) {
	        outdata[pxPos + i] = color[i];
	      }
	      pxPos += 4;
	    }
	  }
	}

	function replaceTransparentColor(indata, outdata, width, height, transColor) {
	  let pxPos = 0;
	  for (let y = 0; y < height; y++) {
	    for (let x = 0; x < width; x++) {
	      let makeTrans = false;

	      if (transColor.length === 1) {
	        if (transColor[0] === indata[pxPos]) {
	          makeTrans = true;
	        }
	      } else if (
	        transColor[0] === indata[pxPos] &&
	        transColor[1] === indata[pxPos + 1] &&
	        transColor[2] === indata[pxPos + 2]
	      ) {
	        makeTrans = true;
	      }
	      if (makeTrans) {
	        for (let i = 0; i < 4; i++) {
	          outdata[pxPos + i] = 0;
	        }
	      }
	      pxPos += 4;
	    }
	  }
	}

	function scaleDepth(indata, outdata, width, height, depth) {
	  let maxOutSample = 255;
	  let maxInSample = Math.pow(2, depth) - 1;
	  let pxPos = 0;

	  for (let y = 0; y < height; y++) {
	    for (let x = 0; x < width; x++) {
	      for (let i = 0; i < 4; i++) {
	        outdata[pxPos + i] = Math.floor(
	          (indata[pxPos + i] * maxOutSample) / maxInSample + 0.5
	        );
	      }
	      pxPos += 4;
	    }
	  }
	}

	formatNormaliser = function (indata, imageData) {
	  let depth = imageData.depth;
	  let width = imageData.width;
	  let height = imageData.height;
	  let colorType = imageData.colorType;
	  let transColor = imageData.transColor;
	  let palette = imageData.palette;

	  let outdata = indata; // only different for 16 bits

	  if (colorType === 3) {
	    // paletted
	    dePalette(indata, outdata, width, height, palette);
	  } else {
	    if (transColor) {
	      replaceTransparentColor(indata, outdata, width, height, transColor);
	    }
	    // if it needs scaling
	    if (depth !== 8) {
	      // if we need to change the buffer size
	      if (depth === 16) {
	        outdata = Buffer.alloc(width * height * 4);
	      }
	      scaleDepth(indata, outdata, width, height, depth);
	    }
	  }
	  return outdata;
	};
	return formatNormaliser;
}

var hasRequiredParserAsync;

function requireParserAsync () {
	if (hasRequiredParserAsync) return parserAsync.exports;
	hasRequiredParserAsync = 1;

	let util = require$$0;
	let zlib = require$$1$1;
	let ChunkStream = requireChunkstream();
	let FilterAsync = requireFilterParseAsync();
	let Parser = requireParser();
	let bitmapper = requireBitmapper();
	let formatNormaliser = requireFormatNormaliser();

	let ParserAsync = (parserAsync.exports = function (options) {
	  ChunkStream.call(this);

	  this._parser = new Parser(options, {
	    read: this.read.bind(this),
	    error: this._handleError.bind(this),
	    metadata: this._handleMetaData.bind(this),
	    gamma: this.emit.bind(this, "gamma"),
	    palette: this._handlePalette.bind(this),
	    transColor: this._handleTransColor.bind(this),
	    finished: this._finished.bind(this),
	    inflateData: this._inflateData.bind(this),
	    simpleTransparency: this._simpleTransparency.bind(this),
	    headersFinished: this._headersFinished.bind(this),
	  });
	  this._options = options;
	  this.writable = true;

	  this._parser.start();
	});
	util.inherits(ParserAsync, ChunkStream);

	ParserAsync.prototype._handleError = function (err) {
	  this.emit("error", err);

	  this.writable = false;

	  this.destroy();

	  if (this._inflate && this._inflate.destroy) {
	    this._inflate.destroy();
	  }

	  if (this._filter) {
	    this._filter.destroy();
	    // For backward compatibility with Node 7 and below.
	    // Suppress errors due to _inflate calling write() even after
	    // it's destroy()'ed.
	    this._filter.on("error", function () {});
	  }

	  this.errord = true;
	};

	ParserAsync.prototype._inflateData = function (data) {
	  if (!this._inflate) {
	    if (this._bitmapInfo.interlace) {
	      this._inflate = zlib.createInflate();

	      this._inflate.on("error", this.emit.bind(this, "error"));
	      this._filter.on("complete", this._complete.bind(this));

	      this._inflate.pipe(this._filter);
	    } else {
	      let rowSize =
	        ((this._bitmapInfo.width *
	          this._bitmapInfo.bpp *
	          this._bitmapInfo.depth +
	          7) >>
	          3) +
	        1;
	      let imageSize = rowSize * this._bitmapInfo.height;
	      let chunkSize = Math.max(imageSize, zlib.Z_MIN_CHUNK);

	      this._inflate = zlib.createInflate({ chunkSize: chunkSize });
	      let leftToInflate = imageSize;

	      let emitError = this.emit.bind(this, "error");
	      this._inflate.on("error", function (err) {
	        if (!leftToInflate) {
	          return;
	        }

	        emitError(err);
	      });
	      this._filter.on("complete", this._complete.bind(this));

	      let filterWrite = this._filter.write.bind(this._filter);
	      this._inflate.on("data", function (chunk) {
	        if (!leftToInflate) {
	          return;
	        }

	        if (chunk.length > leftToInflate) {
	          chunk = chunk.slice(0, leftToInflate);
	        }

	        leftToInflate -= chunk.length;

	        filterWrite(chunk);
	      });

	      this._inflate.on("end", this._filter.end.bind(this._filter));
	    }
	  }
	  this._inflate.write(data);
	};

	ParserAsync.prototype._handleMetaData = function (metaData) {
	  this._metaData = metaData;
	  this._bitmapInfo = Object.create(metaData);

	  this._filter = new FilterAsync(this._bitmapInfo);
	};

	ParserAsync.prototype._handleTransColor = function (transColor) {
	  this._bitmapInfo.transColor = transColor;
	};

	ParserAsync.prototype._handlePalette = function (palette) {
	  this._bitmapInfo.palette = palette;
	};

	ParserAsync.prototype._simpleTransparency = function () {
	  this._metaData.alpha = true;
	};

	ParserAsync.prototype._headersFinished = function () {
	  // Up until this point, we don't know if we have a tRNS chunk (alpha)
	  // so we can't emit metadata any earlier
	  this.emit("metadata", this._metaData);
	};

	ParserAsync.prototype._finished = function () {
	  if (this.errord) {
	    return;
	  }

	  if (!this._inflate) {
	    this.emit("error", "No Inflate block");
	  } else {
	    // no more data to inflate
	    this._inflate.end();
	  }
	};

	ParserAsync.prototype._complete = function (filteredData) {
	  if (this.errord) {
	    return;
	  }

	  let normalisedBitmapData;

	  try {
	    let bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);

	    normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
	    bitmapData = null;
	  } catch (ex) {
	    this._handleError(ex);
	    return;
	  }

	  this.emit("parsed", normalisedBitmapData);
	};
	return parserAsync.exports;
}

var packerAsync = {exports: {}};

var packer = {exports: {}};

var bitpacker;
var hasRequiredBitpacker;

function requireBitpacker () {
	if (hasRequiredBitpacker) return bitpacker;
	hasRequiredBitpacker = 1;

	let constants = requireConstants();

	bitpacker = function (dataIn, width, height, options) {
	  let outHasAlpha =
	    [constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(
	      options.colorType
	    ) !== -1;
	  if (options.colorType === options.inputColorType) {
	    let bigEndian = (function () {
	      let buffer = new ArrayBuffer(2);
	      new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
	      // Int16Array uses the platform's endianness.
	      return new Int16Array(buffer)[0] !== 256;
	    })();
	    // If no need to convert to grayscale and alpha is present/absent in both, take a fast route
	    if (options.bitDepth === 8 || (options.bitDepth === 16 && bigEndian)) {
	      return dataIn;
	    }
	  }

	  // map to a UInt16 array if data is 16bit, fix endianness below
	  let data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);

	  let maxValue = 255;
	  let inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];
	  if (inBpp === 4 && !options.inputHasAlpha) {
	    inBpp = 3;
	  }
	  let outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];
	  if (options.bitDepth === 16) {
	    maxValue = 65535;
	    outBpp *= 2;
	  }
	  let outData = Buffer.alloc(width * height * outBpp);

	  let inIndex = 0;
	  let outIndex = 0;

	  let bgColor = options.bgColor || {};
	  if (bgColor.red === undefined) {
	    bgColor.red = maxValue;
	  }
	  if (bgColor.green === undefined) {
	    bgColor.green = maxValue;
	  }
	  if (bgColor.blue === undefined) {
	    bgColor.blue = maxValue;
	  }

	  function getRGBA() {
	    let red;
	    let green;
	    let blue;
	    let alpha = maxValue;
	    switch (options.inputColorType) {
	      case constants.COLORTYPE_COLOR_ALPHA:
	        alpha = data[inIndex + 3];
	        red = data[inIndex];
	        green = data[inIndex + 1];
	        blue = data[inIndex + 2];
	        break;
	      case constants.COLORTYPE_COLOR:
	        red = data[inIndex];
	        green = data[inIndex + 1];
	        blue = data[inIndex + 2];
	        break;
	      case constants.COLORTYPE_ALPHA:
	        alpha = data[inIndex + 1];
	        red = data[inIndex];
	        green = red;
	        blue = red;
	        break;
	      case constants.COLORTYPE_GRAYSCALE:
	        red = data[inIndex];
	        green = red;
	        blue = red;
	        break;
	      default:
	        throw new Error(
	          "input color type:" +
	            options.inputColorType +
	            " is not supported at present"
	        );
	    }

	    if (options.inputHasAlpha) {
	      if (!outHasAlpha) {
	        alpha /= maxValue;
	        red = Math.min(
	          Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0),
	          maxValue
	        );
	        green = Math.min(
	          Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0),
	          maxValue
	        );
	        blue = Math.min(
	          Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0),
	          maxValue
	        );
	      }
	    }
	    return { red: red, green: green, blue: blue, alpha: alpha };
	  }

	  for (let y = 0; y < height; y++) {
	    for (let x = 0; x < width; x++) {
	      let rgba = getRGBA();

	      switch (options.colorType) {
	        case constants.COLORTYPE_COLOR_ALPHA:
	        case constants.COLORTYPE_COLOR:
	          if (options.bitDepth === 8) {
	            outData[outIndex] = rgba.red;
	            outData[outIndex + 1] = rgba.green;
	            outData[outIndex + 2] = rgba.blue;
	            if (outHasAlpha) {
	              outData[outIndex + 3] = rgba.alpha;
	            }
	          } else {
	            outData.writeUInt16BE(rgba.red, outIndex);
	            outData.writeUInt16BE(rgba.green, outIndex + 2);
	            outData.writeUInt16BE(rgba.blue, outIndex + 4);
	            if (outHasAlpha) {
	              outData.writeUInt16BE(rgba.alpha, outIndex + 6);
	            }
	          }
	          break;
	        case constants.COLORTYPE_ALPHA:
	        case constants.COLORTYPE_GRAYSCALE: {
	          // Convert to grayscale and alpha
	          let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
	          if (options.bitDepth === 8) {
	            outData[outIndex] = grayscale;
	            if (outHasAlpha) {
	              outData[outIndex + 1] = rgba.alpha;
	            }
	          } else {
	            outData.writeUInt16BE(grayscale, outIndex);
	            if (outHasAlpha) {
	              outData.writeUInt16BE(rgba.alpha, outIndex + 2);
	            }
	          }
	          break;
	        }
	        default:
	          throw new Error("unrecognised color Type " + options.colorType);
	      }

	      inIndex += inBpp;
	      outIndex += outBpp;
	    }
	  }

	  return outData;
	};
	return bitpacker;
}

var filterPack;
var hasRequiredFilterPack;

function requireFilterPack () {
	if (hasRequiredFilterPack) return filterPack;
	hasRequiredFilterPack = 1;

	let paethPredictor = requirePaethPredictor();

	function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
	  for (let x = 0; x < byteWidth; x++) {
	    rawData[rawPos + x] = pxData[pxPos + x];
	  }
	}

	function filterSumNone(pxData, pxPos, byteWidth) {
	  let sum = 0;
	  let length = pxPos + byteWidth;

	  for (let i = pxPos; i < length; i++) {
	    sum += Math.abs(pxData[i]);
	  }
	  return sum;
	}

	function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let val = pxData[pxPos + x] - left;

	    rawData[rawPos + x] = val;
	  }
	}

	function filterSumSub(pxData, pxPos, byteWidth, bpp) {
	  let sum = 0;
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let val = pxData[pxPos + x] - left;

	    sum += Math.abs(val);
	  }

	  return sum;
	}

	function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
	  for (let x = 0; x < byteWidth; x++) {
	    let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
	    let val = pxData[pxPos + x] - up;

	    rawData[rawPos + x] = val;
	  }
	}

	function filterSumUp(pxData, pxPos, byteWidth) {
	  let sum = 0;
	  let length = pxPos + byteWidth;
	  for (let x = pxPos; x < length; x++) {
	    let up = pxPos > 0 ? pxData[x - byteWidth] : 0;
	    let val = pxData[x] - up;

	    sum += Math.abs(val);
	  }

	  return sum;
	}

	function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
	    let val = pxData[pxPos + x] - ((left + up) >> 1);

	    rawData[rawPos + x] = val;
	  }
	}

	function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
	  let sum = 0;
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
	    let val = pxData[pxPos + x] - ((left + up) >> 1);

	    sum += Math.abs(val);
	  }

	  return sum;
	}

	function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
	    let upleft =
	      pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
	    let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);

	    rawData[rawPos + x] = val;
	  }
	}

	function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
	  let sum = 0;
	  for (let x = 0; x < byteWidth; x++) {
	    let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
	    let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
	    let upleft =
	      pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
	    let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);

	    sum += Math.abs(val);
	  }

	  return sum;
	}

	let filters = {
	  0: filterNone,
	  1: filterSub,
	  2: filterUp,
	  3: filterAvg,
	  4: filterPaeth,
	};

	let filterSums = {
	  0: filterSumNone,
	  1: filterSumSub,
	  2: filterSumUp,
	  3: filterSumAvg,
	  4: filterSumPaeth,
	};

	filterPack = function (pxData, width, height, options, bpp) {
	  let filterTypes;
	  if (!("filterType" in options) || options.filterType === -1) {
	    filterTypes = [0, 1, 2, 3, 4];
	  } else if (typeof options.filterType === "number") {
	    filterTypes = [options.filterType];
	  } else {
	    throw new Error("unrecognised filter types");
	  }

	  if (options.bitDepth === 16) {
	    bpp *= 2;
	  }
	  let byteWidth = width * bpp;
	  let rawPos = 0;
	  let pxPos = 0;
	  let rawData = Buffer.alloc((byteWidth + 1) * height);

	  let sel = filterTypes[0];

	  for (let y = 0; y < height; y++) {
	    if (filterTypes.length > 1) {
	      // find best filter for this line (with lowest sum of values)
	      let min = Infinity;

	      for (let i = 0; i < filterTypes.length; i++) {
	        let sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
	        if (sum < min) {
	          sel = filterTypes[i];
	          min = sum;
	        }
	      }
	    }

	    rawData[rawPos] = sel;
	    rawPos++;
	    filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
	    rawPos += byteWidth;
	    pxPos += byteWidth;
	  }
	  return rawData;
	};
	return filterPack;
}

var hasRequiredPacker;

function requirePacker () {
	if (hasRequiredPacker) return packer.exports;
	hasRequiredPacker = 1;

	let constants = requireConstants();
	let CrcStream = requireCrc();
	let bitPacker = requireBitpacker();
	let filter = requireFilterPack();
	let zlib = require$$1$1;

	let Packer = (packer.exports = function (options) {
	  this._options = options;

	  options.deflateChunkSize = options.deflateChunkSize || 32 * 1024;
	  options.deflateLevel =
	    options.deflateLevel != null ? options.deflateLevel : 9;
	  options.deflateStrategy =
	    options.deflateStrategy != null ? options.deflateStrategy : 3;
	  options.inputHasAlpha =
	    options.inputHasAlpha != null ? options.inputHasAlpha : true;
	  options.deflateFactory = options.deflateFactory || zlib.createDeflate;
	  options.bitDepth = options.bitDepth || 8;
	  // This is outputColorType
	  options.colorType =
	    typeof options.colorType === "number"
	      ? options.colorType
	      : constants.COLORTYPE_COLOR_ALPHA;
	  options.inputColorType =
	    typeof options.inputColorType === "number"
	      ? options.inputColorType
	      : constants.COLORTYPE_COLOR_ALPHA;

	  if (
	    [
	      constants.COLORTYPE_GRAYSCALE,
	      constants.COLORTYPE_COLOR,
	      constants.COLORTYPE_COLOR_ALPHA,
	      constants.COLORTYPE_ALPHA,
	    ].indexOf(options.colorType) === -1
	  ) {
	    throw new Error(
	      "option color type:" + options.colorType + " is not supported at present"
	    );
	  }
	  if (
	    [
	      constants.COLORTYPE_GRAYSCALE,
	      constants.COLORTYPE_COLOR,
	      constants.COLORTYPE_COLOR_ALPHA,
	      constants.COLORTYPE_ALPHA,
	    ].indexOf(options.inputColorType) === -1
	  ) {
	    throw new Error(
	      "option input color type:" +
	        options.inputColorType +
	        " is not supported at present"
	    );
	  }
	  if (options.bitDepth !== 8 && options.bitDepth !== 16) {
	    throw new Error(
	      "option bit depth:" + options.bitDepth + " is not supported at present"
	    );
	  }
	});

	Packer.prototype.getDeflateOptions = function () {
	  return {
	    chunkSize: this._options.deflateChunkSize,
	    level: this._options.deflateLevel,
	    strategy: this._options.deflateStrategy,
	  };
	};

	Packer.prototype.createDeflate = function () {
	  return this._options.deflateFactory(this.getDeflateOptions());
	};

	Packer.prototype.filterData = function (data, width, height) {
	  // convert to correct format for filtering (e.g. right bpp and bit depth)
	  let packedData = bitPacker(data, width, height, this._options);

	  // filter pixel data
	  let bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
	  let filteredData = filter(packedData, width, height, this._options, bpp);
	  return filteredData;
	};

	Packer.prototype._packChunk = function (type, data) {
	  let len = data ? data.length : 0;
	  let buf = Buffer.alloc(len + 12);

	  buf.writeUInt32BE(len, 0);
	  buf.writeUInt32BE(type, 4);

	  if (data) {
	    data.copy(buf, 8);
	  }

	  buf.writeInt32BE(
	    CrcStream.crc32(buf.slice(4, buf.length - 4)),
	    buf.length - 4
	  );
	  return buf;
	};

	Packer.prototype.packGAMA = function (gamma) {
	  let buf = Buffer.alloc(4);
	  buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
	  return this._packChunk(constants.TYPE_gAMA, buf);
	};

	Packer.prototype.packIHDR = function (width, height) {
	  let buf = Buffer.alloc(13);
	  buf.writeUInt32BE(width, 0);
	  buf.writeUInt32BE(height, 4);
	  buf[8] = this._options.bitDepth; // Bit depth
	  buf[9] = this._options.colorType; // colorType
	  buf[10] = 0; // compression
	  buf[11] = 0; // filter
	  buf[12] = 0; // interlace

	  return this._packChunk(constants.TYPE_IHDR, buf);
	};

	Packer.prototype.packIDAT = function (data) {
	  return this._packChunk(constants.TYPE_IDAT, data);
	};

	Packer.prototype.packIEND = function () {
	  return this._packChunk(constants.TYPE_IEND, null);
	};
	return packer.exports;
}

var hasRequiredPackerAsync;

function requirePackerAsync () {
	if (hasRequiredPackerAsync) return packerAsync.exports;
	hasRequiredPackerAsync = 1;

	let util = require$$0;
	let Stream = require$$1;
	let constants = requireConstants();
	let Packer = requirePacker();

	let PackerAsync = (packerAsync.exports = function (opt) {
	  Stream.call(this);

	  let options = opt || {};

	  this._packer = new Packer(options);
	  this._deflate = this._packer.createDeflate();

	  this.readable = true;
	});
	util.inherits(PackerAsync, Stream);

	PackerAsync.prototype.pack = function (data, width, height, gamma) {
	  // Signature
	  this.emit("data", Buffer.from(constants.PNG_SIGNATURE));
	  this.emit("data", this._packer.packIHDR(width, height));

	  if (gamma) {
	    this.emit("data", this._packer.packGAMA(gamma));
	  }

	  let filteredData = this._packer.filterData(data, width, height);

	  // compress it
	  this._deflate.on("error", this.emit.bind(this, "error"));

	  this._deflate.on(
	    "data",
	    function (compressedData) {
	      this.emit("data", this._packer.packIDAT(compressedData));
	    }.bind(this)
	  );

	  this._deflate.on(
	    "end",
	    function () {
	      this.emit("data", this._packer.packIEND());
	      this.emit("end");
	    }.bind(this)
	  );

	  this._deflate.end(filteredData);
	};
	return packerAsync.exports;
}

var pngSync = {};

var syncInflate = {exports: {}};

var hasRequiredSyncInflate;

function requireSyncInflate () {
	if (hasRequiredSyncInflate) return syncInflate.exports;
	hasRequiredSyncInflate = 1;
	(function (module, exports) {

		let assert = require$$0$1.ok;
		let zlib = require$$1$1;
		let util = require$$0;

		let kMaxLength = require$$3.kMaxLength;

		function Inflate(opts) {
		  if (!(this instanceof Inflate)) {
		    return new Inflate(opts);
		  }

		  if (opts && opts.chunkSize < zlib.Z_MIN_CHUNK) {
		    opts.chunkSize = zlib.Z_MIN_CHUNK;
		  }

		  zlib.Inflate.call(this, opts);

		  // Node 8 --> 9 compatibility check
		  this._offset = this._offset === undefined ? this._outOffset : this._offset;
		  this._buffer = this._buffer || this._outBuffer;

		  if (opts && opts.maxLength != null) {
		    this._maxLength = opts.maxLength;
		  }
		}

		function createInflate(opts) {
		  return new Inflate(opts);
		}

		function _close(engine, callback) {
		  if (callback) {
		    process.nextTick(callback);
		  }

		  // Caller may invoke .close after a zlib error (which will null _handle).
		  if (!engine._handle) {
		    return;
		  }

		  engine._handle.close();
		  engine._handle = null;
		}

		Inflate.prototype._processChunk = function (chunk, flushFlag, asyncCb) {
		  if (typeof asyncCb === "function") {
		    return zlib.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
		  }

		  let self = this;

		  let availInBefore = chunk && chunk.length;
		  let availOutBefore = this._chunkSize - this._offset;
		  let leftToInflate = this._maxLength;
		  let inOff = 0;

		  let buffers = [];
		  let nread = 0;

		  let error;
		  this.on("error", function (err) {
		    error = err;
		  });

		  function handleChunk(availInAfter, availOutAfter) {
		    if (self._hadError) {
		      return;
		    }

		    let have = availOutBefore - availOutAfter;
		    assert(have >= 0, "have should not go down");

		    if (have > 0) {
		      let out = self._buffer.slice(self._offset, self._offset + have);
		      self._offset += have;

		      if (out.length > leftToInflate) {
		        out = out.slice(0, leftToInflate);
		      }

		      buffers.push(out);
		      nread += out.length;
		      leftToInflate -= out.length;

		      if (leftToInflate === 0) {
		        return false;
		      }
		    }

		    if (availOutAfter === 0 || self._offset >= self._chunkSize) {
		      availOutBefore = self._chunkSize;
		      self._offset = 0;
		      self._buffer = Buffer.allocUnsafe(self._chunkSize);
		    }

		    if (availOutAfter === 0) {
		      inOff += availInBefore - availInAfter;
		      availInBefore = availInAfter;

		      return true;
		    }

		    return false;
		  }

		  assert(this._handle, "zlib binding closed");
		  let res;
		  do {
		    res = this._handle.writeSync(
		      flushFlag,
		      chunk, // in
		      inOff, // in_off
		      availInBefore, // in_len
		      this._buffer, // out
		      this._offset, //out_off
		      availOutBefore
		    ); // out_len
		    // Node 8 --> 9 compatibility check
		    res = res || this._writeState;
		  } while (!this._hadError && handleChunk(res[0], res[1]));

		  if (this._hadError) {
		    throw error;
		  }

		  if (nread >= kMaxLength) {
		    _close(this);
		    throw new RangeError(
		      "Cannot create final Buffer. It would be larger than 0x" +
		        kMaxLength.toString(16) +
		        " bytes"
		    );
		  }

		  let buf = Buffer.concat(buffers, nread);
		  _close(this);

		  return buf;
		};

		util.inherits(Inflate, zlib.Inflate);

		function zlibBufferSync(engine, buffer) {
		  if (typeof buffer === "string") {
		    buffer = Buffer.from(buffer);
		  }
		  if (!(buffer instanceof Buffer)) {
		    throw new TypeError("Not a string or buffer");
		  }

		  let flushFlag = engine._finishFlushFlag;
		  if (flushFlag == null) {
		    flushFlag = zlib.Z_FINISH;
		  }

		  return engine._processChunk(buffer, flushFlag);
		}

		function inflateSync(buffer, opts) {
		  return zlibBufferSync(new Inflate(opts), buffer);
		}

		module.exports = exports = inflateSync;
		exports.Inflate = Inflate;
		exports.createInflate = createInflate;
		exports.inflateSync = inflateSync; 
	} (syncInflate, syncInflate.exports));
	return syncInflate.exports;
}

var syncReader = {exports: {}};

var hasRequiredSyncReader;

function requireSyncReader () {
	if (hasRequiredSyncReader) return syncReader.exports;
	hasRequiredSyncReader = 1;

	let SyncReader = (syncReader.exports = function (buffer) {
	  this._buffer = buffer;
	  this._reads = [];
	});

	SyncReader.prototype.read = function (length, callback) {
	  this._reads.push({
	    length: Math.abs(length), // if length < 0 then at most this length
	    allowLess: length < 0,
	    func: callback,
	  });
	};

	SyncReader.prototype.process = function () {
	  // as long as there is any data and read requests
	  while (this._reads.length > 0 && this._buffer.length) {
	    let read = this._reads[0];

	    if (
	      this._buffer.length &&
	      (this._buffer.length >= read.length || read.allowLess)
	    ) {
	      // ok there is any data so that we can satisfy this request
	      this._reads.shift(); // == read

	      let buf = this._buffer;

	      this._buffer = buf.slice(read.length);

	      read.func.call(this, buf.slice(0, read.length));
	    } else {
	      break;
	    }
	  }

	  if (this._reads.length > 0) {
	    return new Error("There are some read requests waitng on finished stream");
	  }

	  if (this._buffer.length > 0) {
	    return new Error("unrecognised content at end of stream");
	  }
	};
	return syncReader.exports;
}

var filterParseSync = {};

var hasRequiredFilterParseSync;

function requireFilterParseSync () {
	if (hasRequiredFilterParseSync) return filterParseSync;
	hasRequiredFilterParseSync = 1;

	let SyncReader = requireSyncReader();
	let Filter = requireFilterParse();

	filterParseSync.process = function (inBuffer, bitmapInfo) {
	  let outBuffers = [];
	  let reader = new SyncReader(inBuffer);
	  let filter = new Filter(bitmapInfo, {
	    read: reader.read.bind(reader),
	    write: function (bufferPart) {
	      outBuffers.push(bufferPart);
	    },
	    complete: function () {},
	  });

	  filter.start();
	  reader.process();

	  return Buffer.concat(outBuffers);
	};
	return filterParseSync;
}

var parserSync;
var hasRequiredParserSync;

function requireParserSync () {
	if (hasRequiredParserSync) return parserSync;
	hasRequiredParserSync = 1;

	let hasSyncZlib = true;
	let zlib = require$$1$1;
	let inflateSync = requireSyncInflate();
	if (!zlib.deflateSync) {
	  hasSyncZlib = false;
	}
	let SyncReader = requireSyncReader();
	let FilterSync = requireFilterParseSync();
	let Parser = requireParser();
	let bitmapper = requireBitmapper();
	let formatNormaliser = requireFormatNormaliser();

	parserSync = function (buffer, options) {
	  if (!hasSyncZlib) {
	    throw new Error(
	      "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
	    );
	  }

	  let err;
	  function handleError(_err_) {
	    err = _err_;
	  }

	  let metaData;
	  function handleMetaData(_metaData_) {
	    metaData = _metaData_;
	  }

	  function handleTransColor(transColor) {
	    metaData.transColor = transColor;
	  }

	  function handlePalette(palette) {
	    metaData.palette = palette;
	  }

	  function handleSimpleTransparency() {
	    metaData.alpha = true;
	  }

	  let gamma;
	  function handleGamma(_gamma_) {
	    gamma = _gamma_;
	  }

	  let inflateDataList = [];
	  function handleInflateData(inflatedData) {
	    inflateDataList.push(inflatedData);
	  }

	  let reader = new SyncReader(buffer);

	  let parser = new Parser(options, {
	    read: reader.read.bind(reader),
	    error: handleError,
	    metadata: handleMetaData,
	    gamma: handleGamma,
	    palette: handlePalette,
	    transColor: handleTransColor,
	    inflateData: handleInflateData,
	    simpleTransparency: handleSimpleTransparency,
	  });

	  parser.start();
	  reader.process();

	  if (err) {
	    throw err;
	  }

	  //join together the inflate datas
	  let inflateData = Buffer.concat(inflateDataList);
	  inflateDataList.length = 0;

	  let inflatedData;
	  if (metaData.interlace) {
	    inflatedData = zlib.inflateSync(inflateData);
	  } else {
	    let rowSize =
	      ((metaData.width * metaData.bpp * metaData.depth + 7) >> 3) + 1;
	    let imageSize = rowSize * metaData.height;
	    inflatedData = inflateSync(inflateData, {
	      chunkSize: imageSize,
	      maxLength: imageSize,
	    });
	  }
	  inflateData = null;

	  if (!inflatedData || !inflatedData.length) {
	    throw new Error("bad png - invalid inflate data response");
	  }

	  let unfilteredData = FilterSync.process(inflatedData, metaData);
	  inflateData = null;

	  let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
	  unfilteredData = null;

	  let normalisedBitmapData = formatNormaliser(bitmapData, metaData);

	  metaData.data = normalisedBitmapData;
	  metaData.gamma = gamma || 0;

	  return metaData;
	};
	return parserSync;
}

var packerSync;
var hasRequiredPackerSync;

function requirePackerSync () {
	if (hasRequiredPackerSync) return packerSync;
	hasRequiredPackerSync = 1;

	let hasSyncZlib = true;
	let zlib = require$$1$1;
	if (!zlib.deflateSync) {
	  hasSyncZlib = false;
	}
	let constants = requireConstants();
	let Packer = requirePacker();

	packerSync = function (metaData, opt) {
	  if (!hasSyncZlib) {
	    throw new Error(
	      "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
	    );
	  }

	  let options = opt || {};

	  let packer = new Packer(options);

	  let chunks = [];

	  // Signature
	  chunks.push(Buffer.from(constants.PNG_SIGNATURE));

	  // Header
	  chunks.push(packer.packIHDR(metaData.width, metaData.height));

	  if (metaData.gamma) {
	    chunks.push(packer.packGAMA(metaData.gamma));
	  }

	  let filteredData = packer.filterData(
	    metaData.data,
	    metaData.width,
	    metaData.height
	  );

	  // compress it
	  let compressedData = zlib.deflateSync(
	    filteredData,
	    packer.getDeflateOptions()
	  );
	  filteredData = null;

	  if (!compressedData || !compressedData.length) {
	    throw new Error("bad png - invalid compressed data response");
	  }
	  chunks.push(packer.packIDAT(compressedData));

	  // End
	  chunks.push(packer.packIEND());

	  return Buffer.concat(chunks);
	};
	return packerSync;
}

var hasRequiredPngSync;

function requirePngSync () {
	if (hasRequiredPngSync) return pngSync;
	hasRequiredPngSync = 1;

	let parse = requireParserSync();
	let pack = requirePackerSync();

	pngSync.read = function (buffer, options) {
	  return parse(buffer, options || {});
	};

	pngSync.write = function (png, options) {
	  return pack(png, options);
	};
	return pngSync;
}

var hasRequiredPng$1;

function requirePng$1 () {
	if (hasRequiredPng$1) return png;
	hasRequiredPng$1 = 1;

	let util = require$$0;
	let Stream = require$$1;
	let Parser = requireParserAsync();
	let Packer = requirePackerAsync();
	let PNGSync = requirePngSync();

	let PNG = (png.PNG = function (options) {
	  Stream.call(this);

	  options = options || {}; // eslint-disable-line no-param-reassign

	  // coerce pixel dimensions to integers (also coerces undefined -> 0):
	  this.width = options.width | 0;
	  this.height = options.height | 0;

	  this.data =
	    this.width > 0 && this.height > 0
	      ? Buffer.alloc(4 * this.width * this.height)
	      : null;

	  if (options.fill && this.data) {
	    this.data.fill(0);
	  }

	  this.gamma = 0;
	  this.readable = this.writable = true;

	  this._parser = new Parser(options);

	  this._parser.on("error", this.emit.bind(this, "error"));
	  this._parser.on("close", this._handleClose.bind(this));
	  this._parser.on("metadata", this._metadata.bind(this));
	  this._parser.on("gamma", this._gamma.bind(this));
	  this._parser.on(
	    "parsed",
	    function (data) {
	      this.data = data;
	      this.emit("parsed", data);
	    }.bind(this)
	  );

	  this._packer = new Packer(options);
	  this._packer.on("data", this.emit.bind(this, "data"));
	  this._packer.on("end", this.emit.bind(this, "end"));
	  this._parser.on("close", this._handleClose.bind(this));
	  this._packer.on("error", this.emit.bind(this, "error"));
	});
	util.inherits(PNG, Stream);

	PNG.sync = PNGSync;

	PNG.prototype.pack = function () {
	  if (!this.data || !this.data.length) {
	    this.emit("error", "No data provided");
	    return this;
	  }

	  process.nextTick(
	    function () {
	      this._packer.pack(this.data, this.width, this.height, this.gamma);
	    }.bind(this)
	  );

	  return this;
	};

	PNG.prototype.parse = function (data, callback) {
	  if (callback) {
	    let onParsed, onError;

	    onParsed = function (parsedData) {
	      this.removeListener("error", onError);

	      this.data = parsedData;
	      callback(null, this);
	    }.bind(this);

	    onError = function (err) {
	      this.removeListener("parsed", onParsed);

	      callback(err, null);
	    }.bind(this);

	    this.once("parsed", onParsed);
	    this.once("error", onError);
	  }

	  this.end(data);
	  return this;
	};

	PNG.prototype.write = function (data) {
	  this._parser.write(data);
	  return true;
	};

	PNG.prototype.end = function (data) {
	  this._parser.end(data);
	};

	PNG.prototype._metadata = function (metadata) {
	  this.width = metadata.width;
	  this.height = metadata.height;

	  this.emit("metadata", metadata);
	};

	PNG.prototype._gamma = function (gamma) {
	  this.gamma = gamma;
	};

	PNG.prototype._handleClose = function () {
	  if (!this._parser.writable && !this._packer.readable) {
	    this.emit("close");
	  }
	};

	PNG.bitblt = function (src, dst, srcX, srcY, width, height, deltaX, deltaY) {
	  // eslint-disable-line max-params
	  // coerce pixel dimensions to integers (also coerces undefined -> 0):
	  /* eslint-disable no-param-reassign */
	  srcX |= 0;
	  srcY |= 0;
	  width |= 0;
	  height |= 0;
	  deltaX |= 0;
	  deltaY |= 0;
	  /* eslint-enable no-param-reassign */

	  if (
	    srcX > src.width ||
	    srcY > src.height ||
	    srcX + width > src.width ||
	    srcY + height > src.height
	  ) {
	    throw new Error("bitblt reading outside image");
	  }

	  if (
	    deltaX > dst.width ||
	    deltaY > dst.height ||
	    deltaX + width > dst.width ||
	    deltaY + height > dst.height
	  ) {
	    throw new Error("bitblt writing outside image");
	  }

	  for (let y = 0; y < height; y++) {
	    src.data.copy(
	      dst.data,
	      ((deltaY + y) * dst.width + deltaX) << 2,
	      ((srcY + y) * src.width + srcX) << 2,
	      ((srcY + y) * src.width + srcX + width) << 2
	    );
	  }
	};

	PNG.prototype.bitblt = function (
	  dst,
	  srcX,
	  srcY,
	  width,
	  height,
	  deltaX,
	  deltaY
	) {
	  // eslint-disable-line max-params

	  PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
	  return this;
	};

	PNG.adjustGamma = function (src) {
	  if (src.gamma) {
	    for (let y = 0; y < src.height; y++) {
	      for (let x = 0; x < src.width; x++) {
	        let idx = (src.width * y + x) << 2;

	        for (let i = 0; i < 3; i++) {
	          let sample = src.data[idx + i] / 255;
	          sample = Math.pow(sample, 1 / 2.2 / src.gamma);
	          src.data[idx + i] = Math.round(sample * 255);
	        }
	      }
	    }
	    src.gamma = 0;
	  }
	};

	PNG.prototype.adjustGamma = function () {
	  PNG.adjustGamma(this);
	};
	return png;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		function hex2rgba (hex) {
		  if (typeof hex === 'number') {
		    hex = hex.toString();
		  }

		  if (typeof hex !== 'string') {
		    throw new Error('Color should be defined as hex string')
		  }

		  let hexCode = hex.slice().replace('#', '').split('');
		  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
		    throw new Error('Invalid hex color: ' + hex)
		  }

		  // Convert from short to long form (fff -> ffffff)
		  if (hexCode.length === 3 || hexCode.length === 4) {
		    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
		      return [c, c]
		    }));
		  }

		  // Add default alpha value
		  if (hexCode.length === 6) hexCode.push('F', 'F');

		  const hexValue = parseInt(hexCode.join(''), 16);

		  return {
		    r: (hexValue >> 24) & 255,
		    g: (hexValue >> 16) & 255,
		    b: (hexValue >> 8) & 255,
		    a: hexValue & 255,
		    hex: '#' + hexCode.slice(0, 6).join('')
		  }
		}

		exports.getOptions = function getOptions (options) {
		  if (!options) options = {};
		  if (!options.color) options.color = {};

		  const margin = typeof options.margin === 'undefined' ||
		    options.margin === null ||
		    options.margin < 0
		    ? 4
		    : options.margin;

		  const width = options.width && options.width >= 21 ? options.width : undefined;
		  const scale = options.scale || 4;

		  return {
		    width: width,
		    scale: width ? 4 : scale,
		    margin: margin,
		    color: {
		      dark: hex2rgba(options.color.dark || '#000000ff'),
		      light: hex2rgba(options.color.light || '#ffffffff')
		    },
		    type: options.type,
		    rendererOpts: options.rendererOpts || {}
		  }
		};

		exports.getScale = function getScale (qrSize, opts) {
		  return opts.width && opts.width >= qrSize + opts.margin * 2
		    ? opts.width / (qrSize + opts.margin * 2)
		    : opts.scale
		};

		exports.getImageWidth = function getImageWidth (qrSize, opts) {
		  const scale = exports.getScale(qrSize, opts);
		  return Math.floor((qrSize + opts.margin * 2) * scale)
		};

		exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
		  const size = qr.modules.size;
		  const data = qr.modules.data;
		  const scale = exports.getScale(size, opts);
		  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
		  const scaledMargin = opts.margin * scale;
		  const palette = [opts.color.light, opts.color.dark];

		  for (let i = 0; i < symbolSize; i++) {
		    for (let j = 0; j < symbolSize; j++) {
		      let posDst = (i * symbolSize + j) * 4;
		      let pxColor = opts.color.light;

		      if (i >= scaledMargin && j >= scaledMargin &&
		        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
		        const iSrc = Math.floor((i - scaledMargin) / scale);
		        const jSrc = Math.floor((j - scaledMargin) / scale);
		        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
		      }

		      imgData[posDst++] = pxColor.r;
		      imgData[posDst++] = pxColor.g;
		      imgData[posDst++] = pxColor.b;
		      imgData[posDst] = pxColor.a;
		    }
		  }
		}; 
	} (utils));
	return utils;
}

var hasRequiredPng;

function requirePng () {
	if (hasRequiredPng) return png$1;
	hasRequiredPng = 1;
	(function (exports) {
		const fs = require$$1$2;
		const PNG = requirePng$1().PNG;
		const Utils = requireUtils();

		exports.render = function render (qrData, options) {
		  const opts = Utils.getOptions(options);
		  const pngOpts = opts.rendererOpts;
		  const size = Utils.getImageWidth(qrData.modules.size, opts);

		  pngOpts.width = size;
		  pngOpts.height = size;

		  const pngImage = new PNG(pngOpts);
		  Utils.qrToImageData(pngImage.data, qrData, opts);

		  return pngImage
		};

		exports.renderToDataURL = function renderToDataURL (qrData, options, cb) {
		  if (typeof cb === 'undefined') {
		    cb = options;
		    options = undefined;
		  }

		  exports.renderToBuffer(qrData, options, function (err, output) {
		    if (err) cb(err);
		    let url = 'data:image/png;base64,';
		    url += output.toString('base64');
		    cb(null, url);
		  });
		};

		exports.renderToBuffer = function renderToBuffer (qrData, options, cb) {
		  if (typeof cb === 'undefined') {
		    cb = options;
		    options = undefined;
		  }

		  const png = exports.render(qrData, options);
		  const buffer = [];

		  png.on('error', cb);

		  png.on('data', function (data) {
		    buffer.push(data);
		  });

		  png.on('end', function () {
		    cb(null, Buffer.concat(buffer));
		  });

		  png.pack();
		};

		exports.renderToFile = function renderToFile (path, qrData, options, cb) {
		  if (typeof cb === 'undefined') {
		    cb = options;
		    options = undefined;
		  }

		  let called = false;
		  const done = (...args) => {
		    if (called) return
		    called = true;
		    cb.apply(null, args);
		  };
		  const stream = fs.createWriteStream(path);

		  stream.on('error', done);
		  stream.on('close', done);

		  exports.renderToFileStream(stream, qrData, options);
		};

		exports.renderToFileStream = function renderToFileStream (stream, qrData, options) {
		  const png = exports.render(qrData, options);
		  png.pack().pipe(stream);
		}; 
	} (png$1));
	return png$1;
}

var utf8 = {};

var hasRequiredUtf8;

function requireUtf8 () {
	if (hasRequiredUtf8) return utf8;
	hasRequiredUtf8 = 1;
	(function (exports) {
		const Utils = requireUtils();

		const BLOCK_CHAR = {
		  WW: ' ',
		  WB: '▄',
		  BB: '█',
		  BW: '▀'
		};

		const INVERTED_BLOCK_CHAR = {
		  BB: ' ',
		  BW: '▄',
		  WW: '█',
		  WB: '▀'
		};

		function getBlockChar (top, bottom, blocks) {
		  if (top && bottom) return blocks.BB
		  if (top && !bottom) return blocks.BW
		  if (!top && bottom) return blocks.WB
		  return blocks.WW
		}

		exports.render = function (qrData, options, cb) {
		  const opts = Utils.getOptions(options);
		  let blocks = BLOCK_CHAR;
		  if (opts.color.dark.hex === '#ffffff' || opts.color.light.hex === '#000000') {
		    blocks = INVERTED_BLOCK_CHAR;
		  }

		  const size = qrData.modules.size;
		  const data = qrData.modules.data;

		  let output = '';
		  let hMargin = Array(size + (opts.margin * 2) + 1).join(blocks.WW);
		  hMargin = Array((opts.margin / 2) + 1).join(hMargin + '\n');

		  const vMargin = Array(opts.margin + 1).join(blocks.WW);

		  output += hMargin;
		  for (let i = 0; i < size; i += 2) {
		    output += vMargin;
		    for (let j = 0; j < size; j++) {
		      const topModule = data[i * size + j];
		      const bottomModule = data[(i + 1) * size + j];

		      output += getBlockChar(topModule, bottomModule, blocks);
		    }

		    output += vMargin + '\n';
		  }

		  output += hMargin.slice(0, -1);

		  if (typeof cb === 'function') {
		    cb(null, output);
		  }

		  return output
		};

		exports.renderToFile = function renderToFile (path, qrData, options, cb) {
		  if (typeof cb === 'undefined') {
		    cb = options;
		    options = undefined;
		  }

		  const fs = require$$1$2;
		  const utf8 = exports.render(qrData, options);
		  fs.writeFile(path, utf8, cb);
		}; 
	} (utf8));
	return utf8;
}

var terminal$1 = {};

var terminal = {};

var hasRequiredTerminal$1;

function requireTerminal$1 () {
	if (hasRequiredTerminal$1) return terminal;
	hasRequiredTerminal$1 = 1;
	// let Utils = require('./utils')

	terminal.render = function (qrData, options, cb) {
	  const size = qrData.modules.size;
	  const data = qrData.modules.data;

	  // let opts = Utils.getOptions(options)

	  // use same scheme as https://github.com/gtanner/qrcode-terminal because it actually works! =)
	  const black = '\x1b[40m  \x1b[0m';
	  const white = '\x1b[47m  \x1b[0m';

	  let output = '';
	  const hMargin = Array(size + 3).join(white);
	  const vMargin = Array(2).join(white);

	  output += hMargin + '\n';
	  for (let i = 0; i < size; ++i) {
	    output += white;
	    for (let j = 0; j < size; j++) {
	      // let topModule = data[i * size + j]
	      // let bottomModule = data[(i + 1) * size + j]

	      output += data[i * size + j] ? black : white;// getBlockChar(topModule, bottomModule)
	    }
	    // output += white+'\n'
	    output += vMargin + '\n';
	  }

	  output += hMargin + '\n';

	  if (typeof cb === 'function') {
	    cb(null, output);
	  }

	  return output
	};
	/*
	exports.renderToFile = function renderToFile (path, qrData, options, cb) {
	  if (typeof cb === 'undefined') {
	    cb = options
	    options = undefined
	  }

	  let fs = require('fs')
	  let utf8 = exports.render(qrData, options)
	  fs.writeFile(path, utf8, cb)
	}
	*/
	return terminal;
}

var terminalSmall = {};

var hasRequiredTerminalSmall;

function requireTerminalSmall () {
	if (hasRequiredTerminalSmall) return terminalSmall;
	hasRequiredTerminalSmall = 1;
	const backgroundWhite = '\x1b[47m';
	const backgroundBlack = '\x1b[40m';
	const foregroundWhite = '\x1b[37m';
	const foregroundBlack = '\x1b[30m';
	const reset = '\x1b[0m';
	const lineSetupNormal = backgroundWhite + foregroundBlack; // setup colors
	const lineSetupInverse = backgroundBlack + foregroundWhite; // setup colors

	const createPalette = function (lineSetup, foregroundWhite, foregroundBlack) {
	  return {
	    // 1 ... white, 2 ... black, 0 ... transparent (default)

	    '00': reset + ' ' + lineSetup,
	    '01': reset + foregroundWhite + '▄' + lineSetup,
	    '02': reset + foregroundBlack + '▄' + lineSetup,
	    10: reset + foregroundWhite + '▀' + lineSetup,
	    11: ' ',
	    12: '▄',
	    20: reset + foregroundBlack + '▀' + lineSetup,
	    21: '▀',
	    22: '█'
	  }
	};

	/**
	 * Returns code for QR pixel
	 * @param {boolean[][]} modules
	 * @param {number} size
	 * @param {number} x
	 * @param {number} y
	 * @return {'0' | '1' | '2'}
	 */
	const mkCodePixel = function (modules, size, x, y) {
	  const sizePlus = size + 1;
	  if ((x >= sizePlus) || (y >= sizePlus) || (y < -1) || (x < -1)) return '0'
	  if ((x >= size) || (y >= size) || (y < 0) || (x < 0)) return '1'
	  const idx = (y * size) + x;
	  return modules[idx] ? '2' : '1'
	};

	/**
	 * Returns code for four QR pixels. Suitable as key in palette.
	 * @param {boolean[][]} modules
	 * @param {number} size
	 * @param {number} x
	 * @param {number} y
	 * @return {keyof palette}
	 */
	const mkCode = function (modules, size, x, y) {
	  return (
	    mkCodePixel(modules, size, x, y) +
	    mkCodePixel(modules, size, x, y + 1)
	  )
	};

	terminalSmall.render = function (qrData, options, cb) {
	  const size = qrData.modules.size;
	  const data = qrData.modules.data;

	  const inverse = !!(options && options.inverse);
	  const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
	  const white = inverse ? foregroundBlack : foregroundWhite;
	  const black = inverse ? foregroundWhite : foregroundBlack;

	  const palette = createPalette(lineSetup, white, black);
	  const newLine = reset + '\n' + lineSetup;

	  let output = lineSetup; // setup colors

	  for (let y = -1; y < size + 1; y += 2) {
	    for (let x = -1; x < size; x++) {
	      output += palette[mkCode(data, size, x, y)];
	    }

	    output += palette[mkCode(data, size, size, y)] + newLine;
	  }

	  output += reset;

	  if (typeof cb === 'function') {
	    cb(null, output);
	  }

	  return output
	};
	return terminalSmall;
}

var hasRequiredTerminal;

function requireTerminal () {
	if (hasRequiredTerminal) return terminal$1;
	hasRequiredTerminal = 1;
	const big = requireTerminal$1();
	const small = requireTerminalSmall();

	terminal$1.render = function (qrData, options, cb) {
	  if (options && options.small) {
	    return small.render(qrData, options, cb)
	  }
	  return big.render(qrData, options, cb)
	};
	return terminal$1;
}

var svg = {};

var svgTag = {};

var hasRequiredSvgTag;

function requireSvgTag () {
	if (hasRequiredSvgTag) return svgTag;
	hasRequiredSvgTag = 1;
	const Utils = requireUtils();

	function getColorAttrib (color, attrib) {
	  const alpha = color.a / 255;
	  const str = attrib + '="' + color.hex + '"';

	  return alpha < 1
	    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
	    : str
	}

	function svgCmd (cmd, x, y) {
	  let str = cmd + x;
	  if (typeof y !== 'undefined') str += ' ' + y;

	  return str
	}

	function qrToPath (data, size, margin) {
	  let path = '';
	  let moveBy = 0;
	  let newRow = false;
	  let lineLength = 0;

	  for (let i = 0; i < data.length; i++) {
	    const col = Math.floor(i % size);
	    const row = Math.floor(i / size);

	    if (!col && !newRow) newRow = true;

	    if (data[i]) {
	      lineLength++;

	      if (!(i > 0 && col > 0 && data[i - 1])) {
	        path += newRow
	          ? svgCmd('M', col + margin, 0.5 + row + margin)
	          : svgCmd('m', moveBy, 0);

	        moveBy = 0;
	        newRow = false;
	      }

	      if (!(col + 1 < size && data[i + 1])) {
	        path += svgCmd('h', lineLength);
	        lineLength = 0;
	      }
	    } else {
	      moveBy++;
	    }
	  }

	  return path
	}

	svgTag.render = function render (qrData, options, cb) {
	  const opts = Utils.getOptions(options);
	  const size = qrData.modules.size;
	  const data = qrData.modules.data;
	  const qrcodesize = size + opts.margin * 2;

	  const bg = !opts.color.light.a
	    ? ''
	    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
	      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';

	  const path =
	    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
	    ' d="' + qrToPath(data, size, opts.margin) + '"/>';

	  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

	  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';

	  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

	  if (typeof cb === 'function') {
	    cb(null, svgTag);
	  }

	  return svgTag
	};
	return svgTag;
}

var hasRequiredSvg;

function requireSvg () {
	if (hasRequiredSvg) return svg;
	hasRequiredSvg = 1;
	(function (exports) {
		const svgTagRenderer = requireSvgTag();

		exports.render = svgTagRenderer.render;

		exports.renderToFile = function renderToFile (path, qrData, options, cb) {
		  if (typeof cb === 'undefined') {
		    cb = options;
		    options = undefined;
		  }

		  const fs = require$$1$2;
		  const svgTag = exports.render(qrData, options);

		  const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' +
		    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
		    svgTag;

		  fs.writeFile(path, xmlStr, cb);
		}; 
	} (svg));
	return svg;
}

var browser = {};

var canvas = {};

var hasRequiredCanvas;

function requireCanvas () {
	if (hasRequiredCanvas) return canvas;
	hasRequiredCanvas = 1;
	(function (exports) {
		const Utils = requireUtils();

		function clearCanvas (ctx, canvas, size) {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);

		  if (!canvas.style) canvas.style = {};
		  canvas.height = size;
		  canvas.width = size;
		  canvas.style.height = size + 'px';
		  canvas.style.width = size + 'px';
		}

		function getCanvasElement () {
		  try {
		    return document.createElement('canvas')
		  } catch (e) {
		    throw new Error('You need to specify a canvas element')
		  }
		}

		exports.render = function render (qrData, canvas, options) {
		  let opts = options;
		  let canvasEl = canvas;

		  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
		    opts = canvas;
		    canvas = undefined;
		  }

		  if (!canvas) {
		    canvasEl = getCanvasElement();
		  }

		  opts = Utils.getOptions(opts);
		  const size = Utils.getImageWidth(qrData.modules.size, opts);

		  const ctx = canvasEl.getContext('2d');
		  const image = ctx.createImageData(size, size);
		  Utils.qrToImageData(image.data, qrData, opts);

		  clearCanvas(ctx, canvasEl, size);
		  ctx.putImageData(image, 0, 0);

		  return canvasEl
		};

		exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
		  let opts = options;

		  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
		    opts = canvas;
		    canvas = undefined;
		  }

		  if (!opts) opts = {};

		  const canvasEl = exports.render(qrData, canvas, opts);

		  const type = opts.type || 'image/png';
		  const rendererOpts = opts.rendererOpts || {};

		  return canvasEl.toDataURL(type, rendererOpts.quality)
		}; 
	} (canvas));
	return canvas;
}

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser;
	hasRequiredBrowser = 1;
	const canPromise = requireCanPromise();

	const QRCode = requireQrcode();
	const CanvasRenderer = requireCanvas();
	const SvgRenderer = requireSvgTag();

	function renderCanvas (renderFunc, canvas, text, opts, cb) {
	  const args = [].slice.call(arguments, 1);
	  const argsNum = args.length;
	  const isLastArgCb = typeof args[argsNum - 1] === 'function';

	  if (!isLastArgCb && !canPromise()) {
	    throw new Error('Callback required as last argument')
	  }

	  if (isLastArgCb) {
	    if (argsNum < 2) {
	      throw new Error('Too few arguments provided')
	    }

	    if (argsNum === 2) {
	      cb = text;
	      text = canvas;
	      canvas = opts = undefined;
	    } else if (argsNum === 3) {
	      if (canvas.getContext && typeof cb === 'undefined') {
	        cb = opts;
	        opts = undefined;
	      } else {
	        cb = opts;
	        opts = text;
	        text = canvas;
	        canvas = undefined;
	      }
	    }
	  } else {
	    if (argsNum < 1) {
	      throw new Error('Too few arguments provided')
	    }

	    if (argsNum === 1) {
	      text = canvas;
	      canvas = opts = undefined;
	    } else if (argsNum === 2 && !canvas.getContext) {
	      opts = text;
	      text = canvas;
	      canvas = undefined;
	    }

	    return new Promise(function (resolve, reject) {
	      try {
	        const data = QRCode.create(text, opts);
	        resolve(renderFunc(data, canvas, opts));
	      } catch (e) {
	        reject(e);
	      }
	    })
	  }

	  try {
	    const data = QRCode.create(text, opts);
	    cb(null, renderFunc(data, canvas, opts));
	  } catch (e) {
	    cb(e);
	  }
	}

	browser.create = QRCode.create;
	browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
	browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

	// only svg for now.
	browser.toString = renderCanvas.bind(null, function (data, _, opts) {
	  return SvgRenderer.render(data, opts)
	});
	return browser;
}

var hasRequiredServer;

function requireServer () {
	if (hasRequiredServer) return server;
	hasRequiredServer = 1;
	const canPromise = requireCanPromise();
	const QRCode = requireQrcode();
	const PngRenderer = requirePng();
	const Utf8Renderer = requireUtf8();
	const TerminalRenderer = requireTerminal();
	const SvgRenderer = requireSvg();

	function checkParams (text, opts, cb) {
	  if (typeof text === 'undefined') {
	    throw new Error('String required as first argument')
	  }

	  if (typeof cb === 'undefined') {
	    cb = opts;
	    opts = {};
	  }

	  if (typeof cb !== 'function') {
	    if (!canPromise()) {
	      throw new Error('Callback required as last argument')
	    } else {
	      opts = cb || {};
	      cb = null;
	    }
	  }

	  return {
	    opts: opts,
	    cb: cb
	  }
	}

	function getTypeFromFilename (path) {
	  return path.slice((path.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase()
	}

	function getRendererFromType (type) {
	  switch (type) {
	    case 'svg':
	      return SvgRenderer

	    case 'txt':
	    case 'utf8':
	      return Utf8Renderer

	    case 'png':
	    case 'image/png':
	    default:
	      return PngRenderer
	  }
	}

	function getStringRendererFromType (type) {
	  switch (type) {
	    case 'svg':
	      return SvgRenderer

	    case 'terminal':
	      return TerminalRenderer

	    case 'utf8':
	    default:
	      return Utf8Renderer
	  }
	}

	function render (renderFunc, text, params) {
	  if (!params.cb) {
	    return new Promise(function (resolve, reject) {
	      try {
	        const data = QRCode.create(text, params.opts);
	        return renderFunc(data, params.opts, function (err, data) {
	          return err ? reject(err) : resolve(data)
	        })
	      } catch (e) {
	        reject(e);
	      }
	    })
	  }

	  try {
	    const data = QRCode.create(text, params.opts);
	    return renderFunc(data, params.opts, params.cb)
	  } catch (e) {
	    params.cb(e);
	  }
	}

	server.create = QRCode.create;

	server.toCanvas = requireBrowser().toCanvas;

	server.toString = function toString (text, opts, cb) {
	  const params = checkParams(text, opts, cb);
	  const type = params.opts ? params.opts.type : undefined;
	  const renderer = getStringRendererFromType(type);
	  return render(renderer.render, text, params)
	};

	server.toDataURL = function toDataURL (text, opts, cb) {
	  const params = checkParams(text, opts, cb);
	  const renderer = getRendererFromType(params.opts.type);
	  return render(renderer.renderToDataURL, text, params)
	};

	server.toBuffer = function toBuffer (text, opts, cb) {
	  const params = checkParams(text, opts, cb);
	  const renderer = getRendererFromType(params.opts.type);
	  return render(renderer.renderToBuffer, text, params)
	};

	server.toFile = function toFile (path, text, opts, cb) {
	  if (typeof path !== 'string' || !(typeof text === 'string' || typeof text === 'object')) {
	    throw new Error('Invalid argument')
	  }

	  if ((arguments.length < 3) && !canPromise()) {
	    throw new Error('Too few arguments provided')
	  }

	  const params = checkParams(text, opts, cb);
	  const type = params.opts.type || getTypeFromFilename(path);
	  const renderer = getRendererFromType(type);
	  const renderToFile = renderer.renderToFile.bind(null, path);

	  return render(renderToFile, text, params)
	};

	server.toFileStream = function toFileStream (stream, text, opts) {
	  if (arguments.length < 2) {
	    throw new Error('Too few arguments provided')
	  }

	  const params = checkParams(text, opts, stream.emit.bind(stream, 'error'));
	  const renderer = getRendererFromType('png'); // Only png support for now
	  const renderToFileStream = renderer.renderToFileStream.bind(null, stream);
	  render(renderToFileStream, text, params);
	};
	return server;
}

/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	lib = requireServer();
	return lib;
}

var libExports = requireLib();
var QRCode = /*@__PURE__*/getDefaultExportFromCjs(libExports);

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c8a8be57-ba05-4ac0-87ec-fc97d4ee6d72", e._sentryDebugIdIdentifier = "sentry-dbid-c8a8be57-ba05-4ac0-87ec-fc97d4ee6d72");
  } catch (e2) {
  }
}();
const ListBoxField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaExpanded;
  let menuId;
  let $$restProps = compute_rest_props($$props, ["disabled", "role", "tabindex", "translationIds", "translateWithId", "id", "ref"]);
  let { disabled = false } = $$props;
  let { role = "combobox" } = $$props;
  let { tabindex = "-1" } = $$props;
  const translationIds = { close: "close", open: "open" };
  let { translateWithId = (id2) => defaultTranslations[id2] } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.close]: "Close menu",
    [translationIds.open]: "Open menu"
  };
  const ctx = getContext("MultiSelect");
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "field", ref });
    }
  }
  ariaExpanded = $$props["aria-expanded"];
  menuId = `menu-${id}`;
  return ` <div${spread(
    [
      { role: escape_attribute_value(role) },
      {
        "aria-expanded": escape_attribute_value(ariaExpanded)
      },
      {
        "aria-owns": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-controls": escape_attribute_value(ariaExpanded && menuId || void 0)
      },
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      {
        "aria-label": escape_attribute_value(ariaExpanded ? translateWithId("close") : translateWithId("open"))
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__field"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ListBoxField$1 = ListBoxField;
const ListBoxSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let translationId;
  let description;
  let $$restProps = compute_rest_props($$props, ["selectionCount", "disabled", "translationIds", "translateWithId", "ref"]);
  let { selectionCount = void 0 } = $$props;
  let { disabled = false } = $$props;
  const translationIds = {
    clearAll: "clearAll",
    clearSelection: "clearSelection"
  };
  let { translateWithId = (id) => defaultTranslations[id] } = $$props;
  let { ref = null } = $$props;
  const defaultTranslations = {
    [translationIds.clearAll]: "Clear all selected items",
    [translationIds.clearSelection]: "Clear selected item"
  };
  createEventDispatcher();
  const ctx = getContext("MultiSelect");
  if ($$props.selectionCount === void 0 && $$bindings.selectionCount && selectionCount !== void 0)
    $$bindings.selectionCount(selectionCount);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.translationIds === void 0 && $$bindings.translationIds && translationIds !== void 0)
    $$bindings.translationIds(translationIds);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef({ key: "selection", ref });
    }
  }
  translationId = selectionCount ? translationIds.clearAll : translationIds.clearSelection;
  description = translateWithId?.(translationId) ?? defaultTranslations[translationId];
  return `${selectionCount !== void 0 ? `<div${add_classes(("bx--tag bx--tag--filter bx--tag--high-contrast " + (disabled ? "bx--tag--disabled" : "")).trim())}><span${add_attribute("title", selectionCount, 0)}${add_classes("bx--tag__label".trim())}>${escape(selectionCount)}</span> <div role="button"${add_attribute("tabindex", disabled ? -1 : 0, 0)} ${disabled ? "disabled" : ""}${add_attribute("aria-label", translationIds.clearAll, 0)}${add_attribute("title", description, 0)}${add_classes("bx--tag__close-icon".trim())}${add_attribute("this", ref, 0)}>${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</div></div>` : `<div${spread(
    [
      { role: "button" },
      {
        "aria-label": escape_attribute_value(description)
      },
      {
        title: escape_attribute_value(description)
      },
      {
        tabindex: escape_attribute_value(disabled ? "-1" : "0")
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--list-box__selection " + (selectionCount ? "bx--tag--filter" : "") + " " + (selectionCount ? "bx--list-box__selection--multi" : "")
    }
  )}${add_attribute("this", ref, 0)}>${selectionCount !== void 0 ? `${escape(selectionCount)}` : ``} ${validate_component(Close$1, "Close").$$render($$result, {}, {}, {})}</div>`}`;
});
const ListBoxSelection$1 = ListBoxSelection;
const MultiSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuId;
  let inline;
  let ariaLabel;
  let sortedItems;
  let checked;
  let filteredItems;
  let $$restProps = compute_rest_props($$props, [
    "items",
    "itemToString",
    "itemToInput",
    "selectedIds",
    "value",
    "size",
    "type",
    "direction",
    "selectionFeedback",
    "disabled",
    "filterable",
    "filterItem",
    "open",
    "light",
    "locale",
    "placeholder",
    "sortItem",
    "translateWithId",
    "translateWithIdSelection",
    "titleText",
    "useTitleInItem",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "id",
    "name",
    "inputRef",
    "multiSelectRef",
    "fieldRef",
    "selectionRef",
    "highlightedId"
  ]);
  let $$slots = compute_slots(slots);
  let { items = [] } = $$props;
  let { itemToString = (item) => item.text || item.id } = $$props;
  let { itemToInput = (item) => {
  } } = $$props;
  let { selectedIds = [] } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { type = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { selectionFeedback = "top-after-reopen" } = $$props;
  let { disabled = false } = $$props;
  let { filterable = false } = $$props;
  let { filterItem = (item, value2) => item.text.toLowerCase().includes(value2.trim().toLowerCase()) } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { locale = "en" } = $$props;
  let { placeholder = "" } = $$props;
  let { sortItem = (a, b) => a.text.localeCompare(b.text, locale, { numeric: true }) } = $$props;
  let { translateWithId = void 0 } = $$props;
  let { translateWithIdSelection = void 0 } = $$props;
  let { titleText = "" } = $$props;
  let { useTitleInItem = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { label = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { inputRef = null } = $$props;
  let { multiSelectRef = null } = $$props;
  let { fieldRef = null } = $$props;
  let { selectionRef = null } = $$props;
  let { highlightedId = null } = $$props;
  createEventDispatcher();
  let highlightedIndex = -1;
  setContext("MultiSelect", {
    declareRef: ({ key, ref }) => {
      switch (key) {
        case "field":
          fieldRef = ref;
          break;
        case "selection":
          selectionRef = ref;
          break;
      }
    }
  });
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemToString === void 0 && $$bindings.itemToString && itemToString !== void 0)
    $$bindings.itemToString(itemToString);
  if ($$props.itemToInput === void 0 && $$bindings.itemToInput && itemToInput !== void 0)
    $$bindings.itemToInput(itemToInput);
  if ($$props.selectedIds === void 0 && $$bindings.selectedIds && selectedIds !== void 0)
    $$bindings.selectedIds(selectedIds);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.selectionFeedback === void 0 && $$bindings.selectionFeedback && selectionFeedback !== void 0)
    $$bindings.selectionFeedback(selectionFeedback);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.filterable === void 0 && $$bindings.filterable && filterable !== void 0)
    $$bindings.filterable(filterable);
  if ($$props.filterItem === void 0 && $$bindings.filterItem && filterItem !== void 0)
    $$bindings.filterItem(filterItem);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.sortItem === void 0 && $$bindings.sortItem && sortItem !== void 0)
    $$bindings.sortItem(sortItem);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.translateWithIdSelection === void 0 && $$bindings.translateWithIdSelection && translateWithIdSelection !== void 0)
    $$bindings.translateWithIdSelection(translateWithIdSelection);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0)
    $$bindings.titleText(titleText);
  if ($$props.useTitleInItem === void 0 && $$bindings.useTitleInItem && useTitleInItem !== void 0)
    $$bindings.useTitleInItem(useTitleInItem);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputRef === void 0 && $$bindings.inputRef && inputRef !== void 0)
    $$bindings.inputRef(inputRef);
  if ($$props.multiSelectRef === void 0 && $$bindings.multiSelectRef && multiSelectRef !== void 0)
    $$bindings.multiSelectRef(multiSelectRef);
  if ($$props.fieldRef === void 0 && $$bindings.fieldRef && fieldRef !== void 0)
    $$bindings.fieldRef(fieldRef);
  if ($$props.selectionRef === void 0 && $$bindings.selectionRef && selectionRef !== void 0)
    $$bindings.selectionRef(selectionRef);
  if ($$props.highlightedId === void 0 && $$bindings.highlightedId && highlightedId !== void 0)
    $$bindings.highlightedId(highlightedId);
  menuId = `menu-${id}`;
  inline = type === "inline";
  ariaLabel = $$props["aria-label"] || "Choose an item";
  sortedItems = items.map((item) => ({
    ...item,
    checked: selectedIds.includes(item.id)
  }));
  checked = sortedItems.filter(({ checked: checked2 }) => checked2);
  sortedItems.filter(({ checked: checked2 }) => !checked2);
  filteredItems = sortedItems.filter((item) => filterItem(item, value));
  highlightedId = null;
  return ` <div${add_classes(("bx--multi-select__wrapper bx--list-box__wrapper " + (inline ? "bx--multi-select__wrapper--inline" : "") + " " + (inline ? "bx--list-box__wrapper--inline" : "") + " " + (inline && invalid ? "bx--multi-select__wrapper--inline--invalid" : "")).trim())}${add_attribute("this", multiSelectRef, 0)}>${titleText || $$slots.titleText ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "") + " " + (hideLabel ? "bx--visually-hidden" : "")).trim())}>${slots.titleText ? slots.titleText({}) : ` ${escape(titleText)} `}</label>` : ``} ${validate_component(ListBox$1, "ListBox").$$render(
    $$result,
    {
      role: void 0,
      disabled,
      invalid,
      invalidText,
      open,
      light,
      size,
      warn,
      warnText,
      class: "bx--multi-select " + (direction === "top" && "bx--list-box--up") + " " + (filterable && "bx--combo-box") + "\n      " + (filterable && "bx--multi-select--filterable") + "\n      " + (invalid && "bx--multi-select--invalid") + "\n      " + (inline && "bx--multi-select--inline") + "\n      " + (checked.length > 0 && "bx--multi-select--selected")
    },
    {},
    {
      default: () => {
        return `${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${!invalid && warn ? `${validate_component(WarningAltFilled$1, "WarningAltFilled").$$render(
          $$result,
          {
            class: "bx--list-box__invalid-icon bx--list-box__invalid-icon--warning"
          },
          {},
          {}
        )}` : ``} ${validate_component(ListBoxField$1, "ListBoxField").$$render(
          $$result,
          {
            role: "button",
            tabindex: "0",
            "aria-expanded": open,
            id,
            disabled,
            translateWithId
          },
          {},
          {
            default: () => {
              return `${checked.length > 0 ? `${validate_component(ListBoxSelection$1, "ListBoxSelection").$$render(
                $$result,
                {
                  selectionCount: checked.length,
                  translateWithId: translateWithIdSelection,
                  disabled
                },
                {},
                {}
              )}` : ``} ${filterable ? `<input${spread(
                [
                  escape_object($$restProps),
                  { role: "combobox" },
                  { tabindex: "0" },
                  { autocomplete: "off" },
                  { "aria-autocomplete": "list" },
                  {
                    "aria-expanded": escape_attribute_value(open)
                  },
                  {
                    "aria-activedescendant": escape_attribute_value(highlightedId)
                  },
                  {
                    "aria-disabled": escape_attribute_value(disabled)
                  },
                  {
                    "aria-controls": escape_attribute_value(menuId)
                  },
                  { disabled: disabled || null },
                  {
                    placeholder: escape_attribute_value(placeholder)
                  },
                  { id: escape_attribute_value(id) },
                  { name: escape_attribute_value(name) }
                ],
                {
                  classes: "bx--text-input " + (value === "" ? "bx--text-input--empty" : "") + " " + (light ? "bx--text-input--light" : "")
                }
              )}${add_attribute("this", inputRef, 0)}${add_attribute("value", value, 0)}> ${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--list-box__invalid-icon" }, {}, {})}` : ``} ${value ? `${validate_component(ListBoxSelection$1, "ListBoxSelection").$$render(
                $$result,
                {
                  translateWithId: translateWithIdSelection,
                  disabled,
                  open
                },
                {},
                {}
              )}` : ``} ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render(
                $$result,
                {
                  style: "pointer-events: " + (open ? "auto" : "none"),
                  translateWithId,
                  open
                },
                {},
                {}
              )}` : ``} ${!filterable ? `<span${add_classes("bx--list-box__label".trim())}>${escape(label)}</span> ${validate_component(ListBoxMenuIcon$1, "ListBoxMenuIcon").$$render($$result, { open, translateWithId }, {}, {})}` : ``}`;
            }
          }
        )} ${open ? `${validate_component(ListBoxMenu$1, "ListBoxMenu").$$render(
          $$result,
          {
            "aria-label": ariaLabel,
            id,
            "aria-multiselectable": "true"
          },
          {},
          {
            default: () => {
              return `${each(filterable ? filteredItems : sortedItems, (item, i) => {
                return `${validate_component(ListBoxMenuItem$1, "ListBoxMenuItem").$$render(
                  $$result,
                  {
                    id: item.id,
                    role: "option",
                    "aria-labelledby": "checkbox-" + item.id,
                    "aria-selected": item.checked,
                    active: item.checked,
                    highlighted: highlightedIndex === i,
                    disabled: item.disabled
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Checkbox$1, "Checkbox").$$render(
                        $$result,
                        Object.assign(
                          {},
                          { name: item.id },
                          {
                            title: useTitleInItem ? itemToString(item) : void 0
                          },
                          itemToInput(item),
                          { readonly: true },
                          { tabindex: "-1" },
                          { id: "checkbox-" + item.id },
                          { checked: item.checked },
                          { disabled: item.disabled }
                        ),
                        {},
                        {
                          labelText: () => {
                            return `${slots.default ? slots.default({ slot: "labelText", item, index: i }) : ` ${escape(itemToString(item))} `}`;
                          }
                        }
                      )} `;
                    }
                  }
                )}`;
              })}`;
            }
          }
        )}` : ``}`;
      }
    }
  )} ${!inline && !invalid && !warn && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>`;
});
const MultiSelect$1 = MultiSelect;
const css = {
  code: `select.customColor.svelte-15l70g9.svelte-15l70g9{font-weight:700;cursor:pointer;border-radius:4px;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' class='text-white' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")}select.customColor.svelte-15l70g9 option.svelte-15l70g9{background-color:#fff;color:#000}`,
  map: null
};
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { value } = $$props;
  let { options = [] } = $$props;
  let { labelKey = "label" } = $$props;
  let { isRequired = false } = $$props;
  let { className = "" } = $$props;
  let { selectClassName = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.isRequired === void 0 && $$bindings.isRequired && isRequired !== void 0)
    $$bindings.isRequired(isRequired);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.selectClassName === void 0 && $$bindings.selectClassName && selectClassName !== void 0)
    $$bindings.selectClassName(selectClassName);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  $$result.css.add(css);
  return `<label class="${"block " + escape(className, true)}">${label ? `<span class="text-gray-700 dark:text-white mr-2">${escape(label)}</span>` : ``} <select class="${[
    "form-select block w-auto mt-1 dark:bg-neutral-700 dark:text-white " + escape(selectClassName, true) + " svelte-15l70g9",
    !!selectClassName ? "customColor" : ""
  ].join(" ").trim()}" ${isRequired ? "required" : ""}>${each(options, (option) => {
    return `<option class="bg-white text-black svelte-15l70g9"${add_attribute("value", option, 0)}>${escape(option[labelKey])} </option>`;
  })}</select> </label>`;
});
const deleteMemberModal = writable({
  open: false
});
const qrInviteNodeStore = writable(null);
const ShareQRImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let node;
  let { qrImage } = $$props;
  let { currentOrg: currentOrg2 } = $$props;
  let { course: course2 } = $$props;
  if ($$props.qrImage === void 0 && $$bindings.qrImage && qrImage !== void 0)
    $$bindings.qrImage(qrImage);
  if ($$props.currentOrg === void 0 && $$bindings.currentOrg && currentOrg2 !== void 0)
    $$bindings.currentOrg(currentOrg2);
  if ($$props.course === void 0 && $$bindings.course && course2 !== void 0)
    $$bindings.course(course2);
  {
    qrInviteNodeStore.set(node);
  }
  return `<div id="qr-container" class="flex flex-col items-center justify-center h-[60rem] w-[40rem] bg-blue-900 rounded-xl p-10 pb-20"${add_attribute("this", node, 0)}><div class="bg-white pb-3 p-6 rounded-3xl text-center"><div class="font-bold text-xl p-2 bg-gray-100 my-4 rounded-xl" data-svelte-h="svelte-1l4jcmr">Scan QR</div> <img${add_attribute("src", qrImage, 0)} alt="qrcode"> <div class="pb-4 pt-1"><p class="mt-2 font-bold text-2xl text-primary-600">${escape(course2.title)}</p> <p class="mt-1 font-semibold text-lg text-black">${escape(currentOrg2.name)}</p></div></div> </div>`;
});
function notEmpty(value) {
  return value !== null && value !== void 0;
}
const InvitationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  let $page, $$unsubscribe_page;
  let $qrInviteNodeStore, $$unsubscribe_qrInviteNodeStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_qrInviteNodeStore = subscribe(qrInviteNodeStore, (value) => $qrInviteNodeStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let addPeopleParm;
  let tutors = [];
  let selectedIds = [];
  let isLoadingTutors = false;
  let copied = false;
  let qrImage = "";
  let isLoadingQRDownload = false;
  const formatSelected = (i) => i.length === 0 ? [] : i.map((id) => tutors.find((tutor) => tutor.id === id)).filter(notEmpty);
  function getTutors(team) {
    const existingTutors = $course.group?.tutors || [];
    return team.filter((teamMember) => teamMember.verified).filter((teamMember) => {
      return !existingTutors.some((t2) => t2.id === teamMember.profileId);
    }).map((teamMember) => ({
      id: teamMember.id,
      text: teamMember.fullname,
      profileId: teamMember.profileId,
      email: teamMember.email
    }));
  }
  async function setTutors(orgId) {
    if (!orgId)
      return;
    isLoadingTutors = true;
    const { team, error } = await getOrgTeam(orgId);
    if (error) {
      console.error("Error fetching teams", error);
      isLoadingTutors = false;
      return;
    }
    tutors = getTutors(team);
    isLoadingTutors = false;
  }
  function closeModal() {
    goto($page.url.pathname);
  }
  function handleQRDownload() {
    if (!$qrInviteNodeStore) {
      console.error("Node is not defined");
      return;
    }
    isLoadingQRDownload = true;
    setTimeout(
      () => {
        toPng($qrInviteNodeStore).then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `${$course.slug}-qr-code.png`;
          link.href = dataUrl;
          link.click();
        }).catch((error) => {
          isLoadingQRDownload = false;
          console.error("Oops, something went wrong!", error);
        }).finally(() => {
          isLoadingQRDownload = false;
        });
      },
      300
    );
  }
  async function generateQR(text) {
    try {
      qrImage = await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        formatSelected(selectedIds);
        const query = new URLSearchParams($page.url.search);
        addPeopleParm = query.get("add");
      }
    }
    {
      setTutors($currentOrg.id);
    }
    {
      generateQR(getStudentInviteLink($course, $currentOrg.siteName, $currentOrgDomain));
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => closeModal(),
        open: addPeopleParm === "true",
        width: "w-4/5 md:w-2/5",
        maxWidth: "max-w-lg",
        modalHeading: $t("course.navItem.people.invite_modal.title")
      },
      {},
      {
        default: () => {
          return `<form><div class="mb-8"><p class="text-base mb-1 font-semibold">${escape($t("course.navItem.people.invite_modal.invite"))}</p> ${validate_component(MultiSelect$1, "MultiSelect").$$render(
            $$result,
            {
              disabled: isLoadingTutors,
              label: $t("course.navItem.people.invite_modal.select"),
              items: tutors,
              selectedIds
            },
            {
              selectedIds: ($$value) => {
                selectedIds = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${isLoadingTutors ? `<span>${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: false, small: true }, {}, {})}</span>` : `<span>${escape($t("course.navItem.people.invite_modal.to_add"))} <a${add_attribute("href", `/org/${$currentOrg.siteName}/settings/teams`, 0)} class="underline text-primary-600">${escape($t("course.navItem.people.invite_modal.go_to"))}</a></span>`}</div> <div class="mb-8 w-full flex justify-between items-center"><div class="w-3/5"><p class="text-base mb-1 font-semibold">${escape($t("course.navItem.people.invite_modal.invite_students"))}</p> <p class="text-sm">${escape($t("course.navItem.people.invite_modal.via_link"))}</p></div> <div class="relative"><button type="button" class="underline text-primary-800 font-bold cursor-pointer capitalize">${escape($t("course.navItem.people.invite_modal.copy_link"))}</button> ${validate_component(Popover$1, "Popover").$$render($$result, { caret: true, open: copied, align: "left" }, {}, {
            default: () => {
              return `<div style="padding: 5px">${escape($t("course.navItem.people.invite_modal.success"))}</div>`;
            }
          })}</div></div> <div class="flex gap-5 flex-col-reverse md:flex-row justify-between items-center md:items-stretch p-4 w-full border rounded-md"><div class="flex flex-col gap-3 items-center md:items-start justify-between"><span class="font-medium text-sm">${escape($t("course.navItem.people.invite_modal.via_qr"))}</span> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              isLoading: isLoadingQRDownload,
              onClick: handleQRDownload,
              label: $t("course.navItem.people.invite_modal.download_qr"),
              className: "font-medium"
            },
            {},
            {}
          )}</div> <div class="w-full md:w-28 border-4 p-1 border-[#f7f7f7]"><img${add_attribute("src", qrImage, 0)} alt="link qrcode" class="w-full h-full"></div></div> <div class="absolute left-[-1000px] w-[40rem]">${validate_component(ShareQRImage, "ShareQrImage").$$render(
            $$result,
            {
              qrImage,
              course: $course,
              currentOrg: $currentOrg
            },
            {},
            {}
          )}</div> <div class="mt-5 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t("course.navItem.people.invite_modal.finish"),
              type: "submit"
            },
            {},
            {}
          )}</div></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  $$unsubscribe_page();
  $$unsubscribe_qrInviteNodeStore();
  $$unsubscribe_t();
  return $$rendered;
});
const DeleteConfirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteMemberModal, $$unsubscribe_deleteMemberModal;
  let $t, $$unsubscribe_t;
  $$unsubscribe_deleteMemberModal = subscribe(deleteMemberModal, (value) => $deleteMemberModal = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { email } = $$props;
  let { deletePerson = () => {
  } } = $$props;
  async function handleDelete() {
    deletePerson();
    set_store_value(deleteMemberModal, $deleteMemberModal.open = false, $deleteMemberModal);
  }
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.deletePerson === void 0 && $$bindings.deletePerson && deletePerson !== void 0)
    $$bindings.deletePerson(deletePerson);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $deleteMemberModal.open = false,
        width: "w-96",
        modalHeading: $t("course.navItem.people.delete_confirmation.title"),
        open: $deleteMemberModal.open
      },
      {
        open: ($$value) => {
          $deleteMemberModal.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><h1 class="dark:text-white text-lg">${escape($t("course.navItem.people.delete_confirmation.sure"))} <strong>${escape(email)}</strong>?</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t("course.navItem.people.delete_confirmation.no"),
              onClick: () => $deleteMemberModal.open = false
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t("course.navItem.people.delete_confirmation.yes"),
              onClick: handleDelete
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_deleteMemberModal();
  $$unsubscribe_t();
  return $$rendered;
});
function filterPeople(_query, people2) {
  const query = _query.toLowerCase();
  return people2.filter((person) => {
    const { profile: profile2, email } = person;
    return profile2?.fullname?.toLowerCase()?.includes(query) || email?.includes(query);
  });
}
function getEmail(person) {
  const { profile: profile2, email } = person;
  return profile2 ? profile2.email : email;
}
function obscureEmail(email) {
  const [username, domain] = email.split("@");
  const obscuredUsername = username.charAt(0) + "*".repeat(username.length - 2) + username.charAt(username.length - 1);
  return `${obscuredUsername}@${domain}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $group, $$unsubscribe_group;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $profile, $$unsubscribe_profile;
  let $deleteMemberModal, $$unsubscribe_deleteMemberModal;
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_deleteMemberModal = subscribe(deleteMemberModal, (value) => $deleteMemberModal = value);
  let { data } = $$props;
  let people = [];
  let member = {};
  let filterBy = ROLES[0];
  let searchValue = "";
  async function deletePerson() {
    set_store_value(group, $group.people = $group.people.filter((person) => person.id !== member.id), $group);
    set_store_value(group, $group.tutors = $group.tutors.filter((person) => person.memberId !== member.id), $group);
    await deleteGroupMember(member.id);
  }
  function sortAndFilterPeople(_people, filterBy2) {
    people = (_people || []).filter((person) => {
      if (filterBy2.value === "all")
        return true;
      return person.role_id === filterBy2.value;
    }).sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).sort((a, b) => a.role_id - b.role_id);
  }
  const handleClick = () => {
    const url = $page.url.href + "?add=true";
    goto(url);
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      sortAndFilterPeople($group.people, filterBy);
    }
    $$rendered = `${validate_component(InvitationModal, "InvitationModal").$$render($$result, {}, {}, {})} ${validate_component(DeleteConfirmation, "DeleteConfirmation").$$render(
      $$result,
      {
        email: member.email || member.profile && member.profile.email,
        deletePerson
      },
      {},
      {}
    )} ${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      { courseId: data.courseId },
      {
        courseId: ($$value) => {
          data.courseId = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(PageNav, "PageNav").$$render(
            $$result,
            {
              title: $t("course.navItem.people.title"),
              disableSticky: true
            },
            {},
            {
              widget: () => {
                return `<slot:fragment slot="widget">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                  default: () => {
                    return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        className: "mr-2",
                        label: $t("course.navItem.people.add"),
                        onClick: handleClick
                      },
                      {},
                      {}
                    )}`;
                  }
                })}</slot:fragment>`;
              }
            }
          )} ${validate_component(PageBody, "PageBody").$$render($$result, { width: "w-full max-w-6xl md:w-11/12" }, {}, {
            default: () => {
              return `<section class="my-5 mx-2 md:mx-9"><div class="flex flex-col md:flex-row flex-end gap-2 justify-end items-start md:items-center mb-7"><div class="max-w-[320px]">${validate_component(Search$1, "Search").$$render(
                $$result,
                {
                  class: "dark:text-slate-950 border-0 bg-zinc-100 w-full",
                  placeholder: $t("course.navItem.people.search"),
                  value: searchValue
                },
                {
                  value: ($$value) => {
                    searchValue = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="mb-3">${validate_component(Select, "Select").$$render(
                $$result,
                {
                  options: ROLES.map((role) => ({ label: $t(role.label), value: role.value })),
                  className: "dark:text-black mt-3 max-w-[80px]",
                  value: filterBy
                },
                {
                  value: ($$value) => {
                    filterBy = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} </div> ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                default: () => {
                  return `<p class="dark:text-white hidden lg:block text-lg w-20"></p>`;
                }
              })}</div> ${validate_component(StructuredList$1, "StructuredList").$$render($$result, { class: "m-0" }, {}, {
                default: () => {
                  return `${validate_component(StructuredListHead$1, "StructuredListHead").$$render(
                    $$result,
                    {
                      class: "bg-slate-100 dark:bg-neutral-800 dark:border-2 dark:border-neutral-800"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, { head: true, class: "mx-7" }, {}, {
                          default: () => {
                            return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render(
                              $$result,
                              {
                                head: true,
                                class: "text-primary-700 py-3 dark:text-white"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape($t("course.navItem.people.name"))}`;
                                }
                              }
                            )} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render(
                              $$result,
                              {
                                head: true,
                                class: "text-primary-700 py-3 dark:text-white"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape($t("course.navItem.people.role"))}`;
                                }
                              }
                            )} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render(
                              $$result,
                              {
                                head: true,
                                class: "text-primary-700 py-3 dark:text-white"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape($t("course.navItem.people.action"))}`;
                                }
                              }
                            )} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                              default: () => {
                                return `<p class="dark:text-white hidden lg:block text-lg w-20"></p>`;
                              }
                            })}`;
                          }
                        })}`;
                      }
                    }
                  )} ${each(filterPeople(searchValue, people), (person) => {
                    return `${validate_component(StructuredListBody$1, "StructuredListBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, { class: "relative" }, {}, {
                          default: () => {
                            return ` ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { class: "w-4/6 md:w-3/6" }, {}, {
                              default: () => {
                                return `${person.profile ? `<div class="flex items-start lg:items-center">${validate_component(Avatar, "Avatar").$$render(
                                  $$result,
                                  {
                                    src: person.profile.avatar_url,
                                    name: person.profile.fullname,
                                    width: "w-8",
                                    height: "h-8",
                                    className: "mr-3"
                                  },
                                  {},
                                  {}
                                )} <div class="flex flex-col lg:flex-row items-start lg:items-center"><div class="mr-2"><p class="dark:text-white text-base font-normal">${escape(person.profile.fullname)}</p> <p class="text-xs text-primary-600 line-clamp-1">${escape(obscureEmail(getEmail(person)))} </p></div> <div class="flex items-center">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                                  default: () => {
                                    return `${validate_component(CopyButton$1, "CopyButton").$$render(
                                      $$result,
                                      {
                                        text: getEmail(person),
                                        feedback: "Copied Email to clipboard"
                                      },
                                      {},
                                      {}
                                    )} `;
                                  }
                                })} ${person.profile_id == $profile.id ? `${validate_component(ComingSoon, "ComingSoon").$$render($$result, { label: $t("course.navItem.people.you") }, {}, {})}` : ``} </div></div> </div>` : `<div class="flex items-start lg:items-center w-2/4">${validate_component(Text, "TextChip").$$render(
                                  $$result,
                                  {
                                    value: person.email.substring(0, 2).toUpperCase(),
                                    className: "bg-primary-200 text-black font-semibold text-xs mr-3",
                                    shape: "rounded-full"
                                  },
                                  {},
                                  {}
                                )} <a href="${"mailto:" + escape(person.email, true)}" class="text-md text-primary-600 mr-2 dark:text-white">${escape(person.email)}</a> <div class="flex items-center justify-between">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                                  default: () => {
                                    return `${validate_component(CopyButton$1, "CopyButton").$$render(
                                      $$result,
                                      {
                                        text: getEmail(person),
                                        feedback: $t("course.navItem.people.feedback")
                                      },
                                      {},
                                      {}
                                    )} `;
                                  }
                                })} ${validate_component(Text, "TextChip").$$render(
                                  $$result,
                                  {
                                    value: $t("course.navItem.people.pending"),
                                    className: "text-xs bg-yellow-200 text-yellow-700 h-fit",
                                    size: "sm"
                                  },
                                  {},
                                  {}
                                )}</div> </div>`} `;
                              }
                            })}  ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { class: "w-1/4 px-3" }, {}, {
                              default: () => {
                                return `<p class="dark:text-white font-normal text-center text-base w-1/4">${escape($t(ROLE_LABEL[person.role_id]))}</p> `;
                              }
                            })}  ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { class: "p-0 w-1/4" }, {}, {
                              default: () => {
                                return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                                  default: () => {
                                    return `<div class="hidden sm:flex sm:justify-between sm:items-center w-20">${person.profile_id !== $profile.id ? `${validate_component(IconButton, "IconButton").$$render(
                                      $$result,
                                      {
                                        onClick: () => {
                                          member = person;
                                          $deleteMemberModal.open = true;
                                        }
                                      },
                                      {},
                                      {
                                        default: () => {
                                          return `${validate_component(TrashCan, "TrashCanIcon").$$render(
                                            $$result,
                                            {
                                              size: 16,
                                              class: "carbon-icon dark:text-white"
                                            },
                                            {},
                                            {}
                                          )} `;
                                        }
                                      }
                                    )}` : ``}</div> `;
                                  }
                                })} `;
                              }
                            })} `;
                          }
                        })} `;
                      }
                    })}`;
                  })}`;
                }
              })} </section>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_group();
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_profile();
  $$unsubscribe_deleteMemberModal();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-11b389d7.js.map
