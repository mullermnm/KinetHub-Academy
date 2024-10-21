import { s as subscribe, c as null_to_empty, e as set_store_value, d as compute_rest_props, f as compute_slots } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, d as spread, h as escape_attribute_value, f as escape_object, a as add_attribute, b as each, m as missing_component, g as createEventDispatcher, o as onDestroy, i as add_classes, s as setContext, j as getContext } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { g as getIsLessonComplete, C as CourseContainer, P as PageBody, L as ListChecked, t as toggleConfetti, a as Confetti } from './index25-9c55d031.js';
import { p as public_env } from './shared-server-e0f2abd3.js';
import { h as fetchLesson, i as createExerciseFromTemplate, j as createExercise, Q as QUESTION_TYPES, k as fetchLesssonLanguageHistory, l as QUESTION_TEMPLATE, m as QUESTION_TYPE, n as upsertExercise, o as isUUID, p as deleteExercise } from './index18-b03e5e10.js';
import { C as CheckmarkOutline } from './CheckmarkOutline-377cf09c.js';
import { C as CheckmarkFilled } from './CheckmarkFilled-36899326.js';
import { g as globalStore } from './app-d638cf5d.js';
import { S as SendAlt, D as DateTime } from './DateTime-aa1ef45b.js';
import { C as CourseIcon } from './CourseIcon-c2776210.js';
import { V as VARIANTS, P as PrimaryButton, L as Loading$1 } from './index11-4ef8d5a0.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { P as PageNav, B as Backdrop } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import isEmpty from 'lodash/isEmpty.js';
import { u as useCompletion, M as MagicWandFilled, T as TextArea } from './TextArea-9e2a2a4d.js';
import './_sentry-release-injection-file-6be6a010.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { I as IconButton } from './index9-eea8802c.js';
import { f as formatYoutubeVideo } from './formatYoutubeVideo-86462462.js';
import { M as Modal } from './index8-59a07edf.js';
import { L as List } from './List-6bb638c9.js';
import { T as Tabs, a as TabContent } from './index24-7fcbd4fe.js';
import { B as Box } from './index17-3166eaf0.js';
import { T as TextField } from './TextField-86164973.js';
import { l as lesson, c as course, a as lessonSections, b as lessons, i as lessonByTranslation, u as uploadCourseVideoStore, j as isLessonDirty, k as deleteLessonVideo, m as handleUpdateLessonMaterials, g as group } from './store4-ef39175f.js';
import { t as t2, l as lessonFallbackNote } from './translations-90190f83.js';
import { T as Tag$1 } from './Tag-37c50bfd.js';
import { C as CopyButton$1 } from './CopyButton-ab4baaa4.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { c as currentOrg, g as isFreePlan } from './org-8fc26a61.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import { F as FlashFilled } from './FlashFilled-4a89bd75.js';
import { T as TextEditor } from './index26-5db2dde8.js';
import { H as HTMLRender } from './HTMLRender-9a6e04f8.js';
import { i as isHtmlValueEmpty } from './toHtml-f85ea04f.js';
import { b as snackbar } from './store2-dc811f17.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { P as Popover$1 } from './Popover-a92462a3.js';
import { g as goto } from './navigation-cd282f65.js';
import { M as Moon } from './Moon-632bccb1.js';
import { w as writable } from './index2-aea858a5.js';
import { P as Preview, f as filterOutDeleted, S as STATUS, R as RadioQuestion, C as CheckboxQuestion, T as TextareaQuestion, a as RadioItem, b as Checkbox, c as fetchSubmission } from './index28-97d9d4c9.js';
import { c as getGroupMemberId, f as formatAnswers } from './function-efda068b.js';
import './config-8c22ba68.js';
import { p as profile } from './user-e923b6d4.js';
import { L as LOCALE, a as COURSE_VERSION, C as COURSE_TYPE } from './index15-c5761f1e.js';
import { R as RadioButtonChecked } from './RadioButtonChecked-49b8cfed.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';
import { area, select, line, scaleBand, brushX, pointer, scaleTime } from 'd3';
import 'd3-sankey';
import 'd3-cloud';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { f as formatDate } from './dashboard-f779ca70.js';
import { A as ArrowLeft } from './ArrowLeft-b60a107c.js';
import { D as Download } from './Download-43b21059.js';
import { a as apps } from './store3-2785033c.js';
import { b as browser } from './environment-b7cb3169.js';
import { L as LANGUAGES } from './translation-fd577170.js';
import { C as ChevronLeft } from './ChevronLeft-3be359ab.js';
import { C as ChevronRight } from './ChevronRight2-6f4a443c.js';
import { S as Save } from './Save-257b9640.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './Add-78ef4d23.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './index12-9c021b5e.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './Close-73e0af44.js';
import '@supabase/supabase-js';
import 'lodash/cloneDeep.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';
import 'dayjs';
import 'dayjs/plugin/isYesterday.js';
import 'dayjs/plugin/isToday.js';
import 'dayjs/plugin/isTomorrow.js';
import './prod-ssr-f02d8713.js';
import './ListBoxMenuItem-e6ef2add.js';

function Diff() {}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var _options$timeout;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath = void 0;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split('');
  },
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}

//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF

var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();

wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

var lineDiff = new Diff();

lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

var sentenceDiff = new Diff();

sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

var cssDiff = new Diff();

cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;

jsonDiff.castInput = function (value) {
  var _this$options = this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
    return typeof v === 'undefined' ? undefinedReplacement : v;
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
};
// object that is already on the "stack" of items being processed. Accepts an optional replacer

function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (_typeof(obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}

var arrayDiff = new Diff();

arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

!function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n2 = new Error().stack;
    n2 && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n2] = "057f28d0-810a-4225-89d5-9334c7c51205", e2._sentryDebugIdIdentifier = "sentry-dbid-057f28d0-810a-4225-89d5-9334c7c51205");
  } catch (e3) {
  }
}();
const BreadcrumbSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "count"]);
  let { noTrailingSlash = false } = $$props;
  let { count = 3 } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `  <div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")
  })}>${each(Array.from({ length: count }, (_2, i2) => i2), (item) => {
    return `<div${add_classes("bx--breadcrumb-item".trim())}><span${add_classes("bx--link".trim())} data-svelte-h="svelte-134o0jf"> </span> </div>`;
  })}</div>`;
});
const BreadcrumbSkeleton$1 = BreadcrumbSkeleton;
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "skeleton"]);
  let { noTrailingSlash = false } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  return ` ${skeleton ? `${validate_component(BreadcrumbSkeleton$1, "BreadcrumbSkeleton").$$render($$result, Object.assign({}, { noTrailingSlash }, $$restProps), {}, {})}` : ` <nav${spread([{ "aria-label": "Breadcrumb" }, escape_object($$restProps)], {})}><ol${add_classes(("bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")).trim())}>${slots.default ? slots.default({}) : ``}</ol></nav>`}`;
});
const Breadcrumb$1 = Breadcrumb;
const Link$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return ` ${disabled ? ` <p${spread([escape_object($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``} ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``}</p>` : `<a${spread(
    [
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``} ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : ` ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `}</div>` : ``}</a>`}`;
});
const Link$2 = Link$1;
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "isCurrentPage"]);
  let { href = void 0 } = $$props;
  let { isCurrentPage = false } = $$props;
  setContext("BreadcrumbItem", {});
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.isCurrentPage === void 0 && $$bindings.isCurrentPage && isCurrentPage !== void 0)
    $$bindings.isCurrentPage(isCurrentPage);
  return `  <li${spread([escape_object($$restProps)], {
    classes: "bx--breadcrumb-item " + (isCurrentPage && $$restProps["aria-current"] !== "page" ? "bx--breadcrumb-item--current" : "")
  })}>${href ? `${validate_component(Link$2, "Link").$$render(
    $$result,
    {
      href,
      "aria-current": $$restProps["aria-current"]
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}` : `${slots.default ? slots.default({
    props: {
      "aria-current": $$restProps["aria-current"],
      class: "bx--link"
    }
  }) : ``}`}</li>`;
});
const BreadcrumbItem$1 = BreadcrumbItem;
const ContentSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex;
  let switches;
  let $$restProps = compute_rest_props($$props, ["selectedIndex", "size"]);
  let { selectedIndex = 0 } = $$props;
  let { size = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const currentId = writable(null);
  setContext("ContentSwitcher", {
    currentId,
    add: ({ id, text, selected }) => {
      if (selected) {
        selectedIndex = switches.length;
      }
      switches = [...switches, { id, text, selected }];
    },
    update: (id) => {
      selectedIndex = switches.map(({ id: id2 }) => id2).indexOf(id);
    },
    change: (direction) => {
      let index = currentIndex + direction;
      if (index < 0) {
        index = switches.length - 1;
      } else if (index >= switches.length) {
        index = 0;
      }
      selectedIndex = index;
    }
  });
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0)
    $$bindings.selectedIndex(selectedIndex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  currentIndex = -1;
  switches = [];
  {
    if (switches[currentIndex]) {
      dispatch("change", currentIndex);
      currentId.set(switches[currentIndex].id);
    }
  }
  return `  <div${spread([{ role: "tablist" }, escape_object($$restProps)], {
    classes: "bx--content-switcher " + (size === "sm" ? "bx--content-switcher--sm" : "") + " " + (size === "xl" ? "bx--content-switcher--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ContentSwitcher$1 = ContentSwitcher;
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["text", "selected", "disabled", "id", "ref"]);
  let { text = "Provide text" } = $$props;
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ContentSwitcher");
  ctx.add({ id, text, selected });
  ctx.currentId.subscribe(($) => {
    selected = $ === id;
  });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return ` <button${spread(
    [
      { type: "button" },
      { role: "tab" },
      {
        tabindex: escape_attribute_value(selected ? "0" : "-1")
      },
      {
        "aria-selected": escape_attribute_value(selected)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--content-switcher-btn " + (selected ? "bx--content-switcher--selected" : "")
    }
  )}${add_attribute("this", ref, 0)}><span${add_classes("bx--content-switcher__label".trim())}>${slots.default ? slots.default({}) : `${escape(text)}`}</span></button>`;
});
const Switch$1 = Switch;
const AddAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14	S23.7,2,16,2z"></path><path d="M24 15L17 15 17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17z"></path></svg>`;
});
const AddFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2A14.1725,14.1725,0,0,0,2,16,14.1725,14.1725,0,0,0,16,30,14.1725,14.1725,0,0,0,30,16,14.1725,14.1725,0,0,0,16,2Zm8,15H17v7H15V17H8V15h7V8h2v7h7Z"></path><path fill="none" d="M24 17L17 17 17 24 15 24 15 17 8 17 8 15 15 15 15 8 17 8 17 15 24 15 24 17z" data-icon-path="inner-path"></path></svg>`;
});
const AlignBoxTopLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z"></path><path d="M9 7H20V9H9zM9 12H16V14H9z"></path></svg>`;
});
const CaretRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 8L22 16 12 24z"></path></svg>`;
});
const CheckboxCheckedFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z"></path><path fill="none" d="M14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z" data-icon-path="inner-path"></path></svg>`;
});
const DirectLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20.4131,14.584,12.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L1.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l3.2915,3.2915L3,22.5859,4.4141,24l1.8784-1.8784L9.584,25.4131a2.0016,2.0016,0,0,0,2.832,0l2.2559-2.2559-1.4156-1.4155L10.998,23.999,3.001,16.002l7.997-8.001,8.001,8.001L17.5,17.5l1.4146,1.4146,1.4985-1.4986a2.0016,2.0016,0,0,0,0-2.832Z"></path><path d="M30.4131,14.584l-3.2915-3.2915L29,9.4141,27.5859,8,25.7075,9.8784,22.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L17.3281,8.8428l1.4146,1.4145L20.998,8.001l8.001,8.001-8.001,7.997-7.997-7.997,1.5-1.501-1.4156-1.4156L11.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l7.9971,7.9971a2.0016,2.0016,0,0,0,2.832,0l7.9971-7.9971a2.0016,2.0016,0,0,0,0-2.832Z"></path></svg>`;
});
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"></path></svg>`;
});
const IbmWatsonKnowledgeStudio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 25H27V27H20zM22 29H25V31H22zM27 23h-2c0-1.1.4-2 1.2-2.8l.5-.5c.8-.8 1.3-2 1.3-3.2 0-2.5-2-4.5-4.5-4.5S19 14 19 16.5c0 1.2.5 2.3 1.3 3.2l.5.5C21.6 21 22 21.9 22 23h-2c0-.5-.2-1-.6-1.4l-.5-.5c-1.2-1.2-1.9-2.9-1.9-4.6 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5c0 1.7-.7 3.4-1.9 4.6l-.5.5C27.2 22 27 22.5 27 23zM6 22H14V24H6z"></path><circle cx="12" cy="19" r="1"></circle><path d="M6 18H9V20H6zM6 14H13V16H6zM10 10H17V12H10z"></path><circle cx="7" cy="11" r="1"></circle><path d="M16 6H20V8H16z"></path><circle cx="13" cy="7" r="1"></circle><path d="M6 6H10V8H6z"></path><path d="M18,28H4V4l18,0v4h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v24c0,1.1,0.9,2,2,2h14V28z"></path></svg>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M29.25,6.76a6,6,0,0,0-8.5,0l1.42,1.42a4,4,0,1,1,5.67,5.67l-8,8a4,4,0,1,1-5.67-5.66l1.41-1.42-1.41-1.42-1.42,1.42a6,6,0,0,0,0,8.5A6,6,0,0,0,17,25a6,6,0,0,0,4.27-1.76l8-8A6,6,0,0,0,29.25,6.76Z"></path><path d="M4.19,24.82a4,4,0,0,1,0-5.67l8-8a4,4,0,0,1,5.67,0A3.94,3.94,0,0,1,19,14a4,4,0,0,1-1.17,2.85L15.71,19l1.42,1.42,2.12-2.12a6,6,0,0,0-8.51-8.51l-8,8a6,6,0,0,0,0,8.51A6,6,0,0,0,7,28a6.07,6.07,0,0,0,4.28-1.76L9.86,24.82A4,4,0,0,1,4.19,24.82Z"></path></svg>`;
});
const Notebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M19 10H26V12H19zM19 15H26V17H19zM19 20H26V22H19z"></path><path d="M28,5H4A2.002,2.002,0,0,0,2,7V25a2.0023,2.0023,0,0,0,2,2H28a2.0027,2.0027,0,0,0,2-2V7A2.0023,2.0023,0,0,0,28,5ZM4,7H15V25H4ZM17,25V7H28l.002,18Z"></path></svg>`;
});
const OverflowMenuVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>`;
});
const PresentationFile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M15 10H17V18H15zM20 14H22V18H20zM10 12H12V18H10z"></path><path d="M25,4H17V2H15V4H7A2,2,0,0,0,5,6V20a2,2,0,0,0,2,2h8v6H11v2H21V28H17V22h8a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4Zm0,16H7V6H25Z"></path></svg>`;
});
const ResultOld = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M10 13H12V15H10zM14 13H22V15H14zM10 18H12V20H10zM10 23H12V25H10z"></path><path d="M7,28V7h3v3H22V7h3v8h2V7a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2h9V28ZM12,4h8V8H12Z"></path><path d="M18,19v2.4131A6.996,6.996,0,1,1,24,32V30a5,5,0,1,0-4.5762-7H22v2H16V19Z"></path></svg>`;
});
const TextAlignJustify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M6 6H26V8H6zM6 12H26V14H6zM6 18H26V20H6zM6 24H26V26H6z"></path></svg>`;
});
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M21,26H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H21a2,2,0,0,1,2,2v4.06l5.42-3.87A1,1,0,0,1,30,9V23a1,1,0,0,1-1.58.81L23,19.94V24A2,2,0,0,1,21,26ZM4,8V24H21V18a1,1,0,0,1,1.58-.81L28,21.06V10.94l-5.42,3.87A1,1,0,0,1,21,14V8Z"></path></svg>`;
});
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z"></path><path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path></svg>`;
});
const ViewFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<circle cx="16" cy="16" r="4"></circle><path d="M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,22.5A6.5,6.5,0,1,1,22.5,16,6.51,6.51,0,0,1,16,22.5Z"></path></svg>`;
});
const css$7 = {
  code: ".wrapper.svelte-7wj78d{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-7wj78d{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-7wj78d{animation:svelte-7wj78d-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-7wj78d{width:44px;height:44px;position:absolute}.ball.svelte-7wj78d{width:20px;height:20px;border-radius:50%;position:absolute;animation:svelte-7wj78d-ballOne var(--duration) infinite ease}.pause-animation.svelte-7wj78d{animation-play-state:paused}.ball-top-left.svelte-7wj78d{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-7wj78d{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-7wj78d{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-7wj78d{background-color:var(--ballBottomRightColor);top:24px;left:24px}@keyframes svelte-7wj78d-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-7wj78d-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}",
  map: null
};
const Circle3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { pause = false } = $$props;
  let { ballTopLeft = "#FF3E00" } = $$props;
  let { ballTopRight = "#F8B334" } = $$props;
  let { ballBottomLeft = "#40B3FF" } = $$props;
  let { ballBottomRight = "#676778" } = $$props;
  let { duration = "1.5s" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  if ($$props.ballTopLeft === void 0 && $$bindings.ballTopLeft && ballTopLeft !== void 0)
    $$bindings.ballTopLeft(ballTopLeft);
  if ($$props.ballTopRight === void 0 && $$bindings.ballTopRight && ballTopRight !== void 0)
    $$bindings.ballTopRight(ballTopRight);
  if ($$props.ballBottomLeft === void 0 && $$bindings.ballBottomLeft && ballBottomLeft !== void 0)
    $$bindings.ballBottomLeft(ballBottomLeft);
  if ($$props.ballBottomRight === void 0 && $$bindings.ballBottomRight && ballBottomRight !== void 0)
    $$bindings.ballBottomRight(ballBottomRight);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-7wj78d" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --floatSize: " + escape(size, true) + "; --ballTopLeftColor: " + escape(ballTopLeft, true) + "; --ballTopRightColor: " + escape(ballTopRight, true) + "; --ballBottomLeftColor: " + escape(ballBottomLeft, true) + "; --ballBottomRightColor: " + escape(ballBottomRight, true) + "; --duration: " + escape(duration, true) + ";"}"><div class="inner svelte-7wj78d"><div class="${["ball-container svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}"><div class="single-ball svelte-7wj78d"><div class="${["ball ball-top-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-srzctx"> </div></div> <div class="contener_mixte"><div class="${["ball ball-top-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-6iyjws"> </div></div> <div class="contener_mixte"><div class="${["ball ball-bottom-left svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-9h2qed"> </div></div> <div class="contener_mixte"><div class="${["ball ball-bottom-right svelte-7wj78d", pause ? "pause-animation" : ""].join(" ").trim()}" data-svelte-h="svelte-yk0z5u"> </div></div></div></div> </div>`;
});
const MODES = {
  edit: "edit",
  view: "view"
};
function getVideoUrls$1(urls = "") {
  return (urls || "").split(",").filter((url) => !!url.trim());
}
function isValidYouTubeLink(link = "") {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return youtubeRegex.test(link.trim());
}
const YoutubeVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $t2, $$unsubscribe_t;
  let $$unsubscribe_isLessonDirty;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_isLessonDirty = subscribe(isLessonDirty, (value) => value);
  let youtubeLinks = "";
  let error = "";
  function addVideo() {
    const links = getVideoUrls$1(youtubeLinks);
    const validLinks = links.filter(isValidYouTubeLink);
    if (validLinks.length === 0) {
      error = $t2("course.navItem.lessons.materials.tabs.video.add_video.invalid_youtube");
    } else {
      const existingLinks = $lesson?.materials?.videos || [];
      set_store_value(
        lesson,
        $lesson.materials.videos = [
          ...existingLinks,
          ...validLinks.map((link = "") => ({ type: "youtube", link, metadata: {} }))
        ],
        $lesson
      );
      youtubeLinks = "";
      error = "";
    }
  }
  function removeVideo(index = 0) {
    set_store_value(lesson, $lesson.materials.videos = $lesson.materials.videos.filter((v2, i2) => i2 !== index), $lesson);
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"w-full flex items-" + escape(error ? "center" : "end", true) + " justify-between gap-5"}">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: $t2("course.navItem.lessons.materials.tabs.video.add_video.youtube_link"),
        className: "flex-1 text-left ",
        inputClassName: "text-sm",
        onChange: () => true,
        placeholder: "https://www.youtube.com/watch?v=",
        errorMessage: error,
        value: youtubeLinks
      },
      {
        value: ($$value) => {
          youtubeLinks = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t2("course.navItem.lessons.materials.tabs.video.add_video.add_video"),
        className: "rounded-md",
        onClick: addVideo
      },
      {},
      {}
    )}</div> <p class="mt-4 pl-2 text-sm">${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.videos_added"))}:
  <strong>${escape($lesson?.materials?.videos.filter((v2) => v2.type === "youtube" && isValidYouTubeLink(v2.link)).length || 0)}</strong></p> <div class="">${each($lesson?.materials?.videos, (video, index) => {
      return `${video.type === "youtube" ? `<div class="flex items-center gap-1">${validate_component(Tag$1, "Tag").$$render($$result, { type: "blue" }, {}, {
        default: () => {
          return `${escape(video.link)} `;
        }
      })} ${validate_component(CopyButton$1, "CopyButton").$$render(
        $$result,
        {
          text: video.link,
          feedback: "Copied to clipboard"
        },
        {},
        {}
      )} ${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          value: "delete-video",
          onClick: () => removeVideo(index)
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
      )} </div>` : ``}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_t();
  $$unsubscribe_isLessonDirty();
  return $$rendered;
});
const LocalVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isFreePlan, $$unsubscribe_isFreePlan;
  let $lesson, $$unsubscribe_lesson;
  let $uploadCourseVideoStore, $$unsubscribe_uploadCourseVideoStore;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_uploadCourseVideoStore = subscribe(uploadCourseVideoStore, (value) => $uploadCourseVideoStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let isDisabled = false;
  let { lessonId = "" } = $$props;
  let formRes;
  let submit;
  let uploadedFileUrl = "";
  let uploadChannel;
  function isVideoAdded(link) {
    return $lesson.materials?.videos?.find((v2) => v2.link === link);
  }
  async function isDoneUploading(response) {
    uploadedFileUrl = response?.success && response?.url;
    if (uploadedFileUrl && !isVideoAdded(uploadedFileUrl)) {
      set_store_value(
        lesson,
        $lesson.materials.videos = [
          ...$lesson.materials.videos,
          {
            type: "muse",
            link: uploadedFileUrl,
            metadata: response?.metadata || {}
          }
        ],
        $lesson
      );
    }
  }
  onDestroy(() => {
    supabase.removeChannel(uploadChannel);
  });
  if ($$props.lessonId === void 0 && $$bindings.lessonId && lessonId !== void 0)
    $$bindings.lessonId(lessonId);
  {
    isDoneUploading(formRes);
  }
  isDisabled = !public_env.PUBLIC_SERVER_URL || $isFreePlan;
  $$unsubscribe_isFreePlan();
  $$unsubscribe_lesson();
  $$unsubscribe_uploadCourseVideoStore();
  $$unsubscribe_t();
  return `${validate_component(Banner, "UpgradeBanner").$$render(
    $$result,
    {
      className: "mb-3",
      onClick: () => $uploadCourseVideoStore.isModalOpen = false
    },
    {},
    {
      default: () => {
        return `${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.upgrade"))}`;
      }
    }
  )} ${`<button type="button" class="${"h-full w-full " + escape(isDisabled && "hover:cursor-not-allowed opacity-50", true)}" ${isDisabled ? "disabled" : ""}><form class="border-primary-300 flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed">${`<img src="/upload-video.svg" alt="upload"> <span class="pt-3"><h3 class="text-center text-xl font-normal dark:text-white">${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.upload_video"))}</h3> <p class="text-center text-sm font-normal">${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.select_file"))}</p> <p>${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.size"))}</p></span>`} <input style="display:none;" type="file" accept="video/*" name="videoFile"> <input type="text" name="lessonId"${add_attribute("value", lessonId, 0)} style="display: none;"> <input style="display:none;" type="submit"${add_attribute("this", submit, 0)}></form></button>`}`;
});
function getVideoUrls(urls = "") {
  return (urls || "").split(",").filter((url) => !!url.trim());
}
function isValidLink(link = "") {
  const linkRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z]+\.com\/)([a-zA-Z0-9_-]+)/;
  return linkRegex.test(link.trim());
}
const EmbedLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $t2, $$unsubscribe_t;
  let $$unsubscribe_isLessonDirty;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_isLessonDirty = subscribe(isLessonDirty, (value) => value);
  let genericLinks = "";
  let error = "";
  function addVideo() {
    const links = getVideoUrls(genericLinks);
    const validLinks = links.filter(isValidLink);
    if (validLinks.length === 0) {
      error = $t2("course.navItem.lessons.materials.tabs.video.add_video.invalid_link");
    } else {
      const existingLinks = $lesson?.materials?.videos || [];
      set_store_value(
        lesson,
        $lesson.materials.videos = [
          ...existingLinks,
          ...validLinks.map((link = "") => ({ type: "generic", link, metadata: {} }))
        ],
        $lesson
      );
      genericLinks = "";
      error = "";
    }
  }
  function removeVideo(index = 0) {
    set_store_value(lesson, $lesson.materials.videos = $lesson.materials.videos.filter((v2, i2) => i2 !== index), $lesson);
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"w-full flex items-" + escape(error ? "center" : "end", true) + " justify-between gap-5"}">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: $t2("course.navItem.lessons.materials.tabs.video.embed_link"),
        className: "flex-1 text-left ",
        inputClassName: "text-sm",
        onChange: () => true,
        placeholder: "https://www.videoplayer.com/",
        errorMessage: error,
        value: genericLinks
      },
      {
        value: ($$value) => {
          genericLinks = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t2("course.navItem.lessons.materials.tabs.video.add_video.add_video"),
        className: "rounded-md",
        onClick: addVideo
      },
      {},
      {}
    )}</div> <p class="mt-4 pl-2 text-sm">${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.videos_added"))}:
  <strong>${escape($lesson?.materials?.videos.filter((v2) => v2.type === "generic").length || 0)}</strong></p> <div class="">${each($lesson?.materials?.videos, (video, index) => {
      return `${video.type === "generic" ? `<div class="flex items-center gap-1">${validate_component(Tag$1, "Tag").$$render($$result, { type: "blue" }, {}, {
        default: () => {
          return `${escape(video.link)} `;
        }
      })} ${validate_component(CopyButton$1, "CopyButton").$$render(
        $$result,
        {
          text: video.link,
          feedback: "Copied to clipboard"
        },
        {},
        {}
      )} ${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          value: "delete-video",
          onClick: () => removeVideo(index)
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
      )} </div>` : ``}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_t();
  $$unsubscribe_isLessonDirty();
  return $$rendered;
});
const videoTabs = [
  {
    value: 1,
    title: "course.navItem.lessons.materials.tabs.video.add_video.youtube_link",
    icon: Link
  },
  {
    value: 2,
    title: "course.navItem.lessons.materials.tabs.video.embed_link",
    icon: DirectLink
  },
  {
    value: 3,
    title: "course.navItem.lessons.materials.tabs.video.upload",
    icon: Video
  }
];
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t2, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let { lessonId = "" } = $$props;
  let tabs2 = videoTabs;
  let currentTab = tabs2[0].value;
  if ($$props.lessonId === void 0 && $$bindings.lessonId && lessonId !== void 0)
    $$bindings.lessonId(lessonId);
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  return `<section class="w-full h-full flex flex-col md:flex-row items-start gap-3"><div class="flex flex-row md:flex-col gap-2 items-center"><p class="text-sm font-normal text-start text-[#4F4B4B] dark:text-[#b0a9a9] mb-3 w-full">${escape($t2("course.navItem.lessons.materials.tabs.video.add_video.add_by"))}</p> ${each(tabs2, (item) => {
    return `<button${add_attribute(
      "class",
      `w-full px-4 py-3 my-1 border ${currentTab === item.value ? "border border-[#0233BD] bg-[#F5F8FE] dark:text-black" : "border border-gray-200 dark:border-neutral-600"} rounded-md cursor-pointer flex flex-row items-center justify-start gap-2 whitespace-nowrap`,
      0
    )}>${$isFreePlan && item.value === 3 ? `${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 20, class: "text-blue-700" }, {}, {})}` : `${validate_component(item.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        size: 20,
        color: `${currentTab === item.value ? "dark:invert-0" : "dark:invert"}`
      },
      {},
      {}
    )}`} <p>${escape($t2(item.title))}</p> </button>`;
  })}</div> <main class="w-full h-full">${currentTab === 1 ? `${validate_component(YoutubeVideo, "YoutubeVideo").$$render($$result, {}, {}, {})}` : `${currentTab === 2 ? `${validate_component(EmbedLink, "EmbedLink").$$render($$result, {}, {}, {})}` : `${validate_component(LocalVideo, "LocalVideo").$$render($$result, { lessonId }, {}, {})}`}`}</main></section>`;
});
let tabs = [
  {
    label: "course.navItem.lessons.materials.tabs.note.title",
    icon: Notebook,
    value: 1,
    badgeValue: 0
  },
  {
    label: "course.navItem.lessons.materials.tabs.slide.title",
    icon: PresentationFile,
    value: 2,
    badgeValue: 0
  },
  {
    label: "course.navItem.lessons.materials.tabs.video.title",
    icon: Video,
    value: 3,
    badgeValue: 0
  }
];
function orderedTabs(tabs2, settingTabs) {
  if (!Array.isArray(settingTabs))
    return tabs2;
  const reorderedTabs = [];
  const tabMap = new Map(tabs2.map((tab) => [tab.value, tab]));
  settingTabs.forEach((settingTab, index) => {
    const tab = tabMap.get(settingTab.id);
    if (tab) {
      reorderedTabs[index] = tab;
    }
  });
  const filteredReorderedTabs = reorderedTabs.filter((tab) => tab !== void 0);
  return filteredReorderedTabs;
}
const ComponentNote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content2;
  let hasAtLeastOneTranslation;
  let $lessonByTranslation, $$unsubscribe_lessonByTranslation;
  let $lesson, $$unsubscribe_lesson;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_lessonByTranslation = subscribe(lessonByTranslation, (value) => $lessonByTranslation = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { lessonId } = $$props;
  if ($$props.lessonId === void 0 && $$bindings.lessonId && lessonId !== void 0)
    $$bindings.lessonId(lessonId);
  content2 = lessonFallbackNote($lesson.materials.note, $lessonByTranslation[lessonId], $lesson.locale);
  hasAtLeastOneTranslation = Object.values($lessonByTranslation[lessonId] || {}).some((c2) => !!c2.length);
  $$unsubscribe_lessonByTranslation();
  $$unsubscribe_lesson();
  $$unsubscribe_t();
  return `${!isHtmlValueEmpty(content2) ? `${validate_component(HTMLRender, "HtmlRender").$$render($$result, { className: "m-auto" }, {}, {
    content: () => {
      return `<div><!-- HTML_TAG_START -->${content2}<!-- HTML_TAG_END --></div>`;
    }
  })}` : `${hasAtLeastOneTranslation ? `<div class="flex items-center justify-center flex-col text-center"><h3 class="text-lg font-normal italic dark:text-white py-2">${escape($t2("course.navItem.lessons.materials.no_translation"))}</h3></div>` : ``}`}`;
});
function canvaHandler(_url) {
  if (_url.includes("?embed"))
    return _url;
  return `${_url}?embed`;
}
function getUrl(_url) {
  if (!_url)
    return;
  console.log({ _url });
  if (_url.includes("www.canva.com")) {
    return canvaHandler(_url);
  }
  return _url;
}
const ComponentSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  let url = "";
  url = getUrl($lesson.materials.slide_url);
  $$unsubscribe_lesson();
  return `${url ? `<iframe title="Embeded Slides"${add_attribute("src", url, 0)} frameborder="0" width="100%" height="569" class="iframe my-3" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>` : ``}`;
});
function initPlyr$1(_player, _video) {
  if (!_player)
    return;
  const players = Array.from(document.querySelectorAll(".plyr-video-trigger")).map((p2) => {
    return new Plyr(p2);
  });
  window.players = players;
}
const ComponentVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  let errors = {};
  let player = null;
  {
    initPlyr$1(player, $lesson.materials.videos);
  }
  $$unsubscribe_lesson();
  return `${$lesson.materials.videos.length ? `<div class="w-full">${each($lesson.materials.videos, (video) => {
    return `<div class="w-full overflow-hidden mb-5"><div class="mb-5">${video.type === "youtube" ? `<iframe class="iframe"${add_attribute("src", formatYoutubeVideo(video.link, errors), 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `${video.type === "generic" ? `<iframe width="100%" height="569" class="iframe"${add_attribute("src", video.link, 0)} title="Embeded Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `${video.metadata?.svid ? `<div style="position:relative;padding-bottom:51.416579%"><iframe src="${"https://muse.ai/embed/" + escape(video.metadata?.svid, true) + "?logo=https://app.classroomio.com/logo-512.png&subtitles=auto&cover_play_position=center"}" style="width:100%;height:100%;position:absolute;left:0;top:0" frameborder="0" allowfullscreen title="Muse AI Video Embed"></iframe> </div>` : `<video class="plyr-video-trigger" playsinline controls${add_attribute("this", player, 0)}><source${add_attribute("src", video.link, 0)} type="video/mp4"><track kind="captions"></video>`}`}`} </div> </div>`;
  })}</div>` : ``}`;
});
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width: 100%; height: 10rem;" }, {}, {})} <div class="my-3">${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 100%;" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 100%;" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 100%;" }, {}, {})}</div></div>`;
});
let aiButtonClass = "flex items-center px-5 py-2 border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md w-full mb-2";
function initPlyr(_player, _video) {
  if (!_player)
    return;
  const players = Array.from(document.querySelectorAll(".plyr-video-trigger")).map((p2) => {
    return new Plyr(p2);
  });
  window.players = players;
}
const Materials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let editorValue;
  let $lesson, $$unsubscribe_lesson;
  let $lessonByTranslation, $$unsubscribe_lessonByTranslation;
  let $completion, $$unsubscribe_completion;
  let $isLoading, $$unsubscribe_isLoading;
  let $uploadCourseVideoStore, $$unsubscribe_uploadCourseVideoStore;
  let $course, $$unsubscribe_course;
  let $$unsubscribe_input;
  let $$unsubscribe_lessons;
  let $t2, $$unsubscribe_t;
  let $$unsubscribe_isLessonDirty;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_lessonByTranslation = subscribe(lessonByTranslation, (value) => $lessonByTranslation = value);
  $$unsubscribe_uploadCourseVideoStore = subscribe(uploadCourseVideoStore, (value) => $uploadCourseVideoStore = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_isLessonDirty = subscribe(isLessonDirty, (value) => value);
  let { mode = MODES.view } = $$props;
  let { prevMode = "" } = $$props;
  let { lessonId = "" } = $$props;
  let { isSaving = false } = $$props;
  let { isStudent = false } = $$props;
  let { toggleMode = () => {
  } } = $$props;
  let localeExists = {};
  let lessonTitle = "";
  let prevContent = "";
  let initAutoSave = false;
  let timeoutId;
  let tabs$1 = tabs;
  let currentTab = tabs$1[0].value;
  let errors;
  let editorWindowRef;
  let aiButtonRef;
  let openPopover = false;
  let player;
  let componentsToRender = getComponentOrder(tabs$1);
  const onChange = (tab) => {
    return () => {
      currentTab = tab;
    };
  };
  const getValue = (label) => {
    const tabValue = tabs$1.find((tab) => tab.label === label)?.value;
    return tabValue;
  };
  async function saveOrUpdateTranslation(locale, lessonId2) {
    const content2 = $lessonByTranslation[lessonId2][locale];
    if (typeof localeExists[locale] === "undefined") {
      const { data } = await supabase.from("lesson_language").select(`id`).eq("lesson_id", lessonId2).eq("locale", locale).maybeSingle();
      localeExists[locale] = !!(data && data?.id);
    }
    if (localeExists[locale]) {
      const { error: updateError } = await supabase.from("lesson_language").update({ content: content2 }).eq("lesson_id", lessonId2).eq("locale", locale);
      if (updateError) {
        console.error("Error updating translation:", updateError.message);
        snackbar.error("snackbar.materials.update_translations");
      }
    } else {
      const { error: insertError } = await supabase.from("lesson_language").insert({ locale, lesson_id: lessonId2, content: content2 });
      if (insertError) {
        console.error("Error inserting translation:", insertError.message);
        snackbar.error("snackbar.materials.creating_new");
        return;
      }
      localeExists[locale] = true;
    }
  }
  async function saveLesson(materials) {
    const _lesson = !!materials ? { ...$lesson, materials } : $lesson;
    console.log("updating lesson");
    const [lessonRes] = await Promise.all([
      handleUpdateLessonMaterials(_lesson, lessonId),
      saveOrUpdateTranslation($lesson.locale, lessonId)
    ]);
    return lessonRes;
  }
  function isMaterialsEmpty(materials, translation) {
    const { slide_url, videos, note } = materials;
    return isHtmlValueEmpty(note) && !slide_url && isEmpty(videos) && Object.values(translation || {}).every((t2) => isHtmlValueEmpty(t2));
  }
  function handleSave(prevMode2) {
    if (prevMode2 === MODES.edit) {
      saveLesson();
    }
  }
  function addBadgeValueToTab(materials) {
    const { slide_url, videos, note } = materials;
    tabs$1 = tabs$1.map((tab) => {
      let badgeValue = 0;
      if (tab.value === 1 && !isHtmlValueEmpty(note)) {
        badgeValue = 1;
      } else if (tab.value === 2 && !!slide_url) {
        badgeValue = 1;
      } else if (tab.value === 3 && !isEmpty(videos)) {
        badgeValue = 1;
      }
      tab.badgeValue = badgeValue;
      return tab;
    });
  }
  const openAddVideoModal = () => {
    set_store_value(uploadCourseVideoStore, $uploadCourseVideoStore.isModalOpen = true, $uploadCourseVideoStore);
  };
  const { input, handleSubmit, completion, isLoading } = useCompletion({ api: "/api/completion" });
  $$unsubscribe_input = subscribe(input, (value) => value);
  $$unsubscribe_completion = subscribe(completion, (value) => $completion = value);
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  function updateNoteByCompletion(completion2) {
    if (!completion2)
      return;
    if ($lessonByTranslation[lessonId]) {
      set_store_value(lessonByTranslation, $lessonByTranslation[lessonId][$lesson.locale] = `${prevContent}${completion2}`, $lessonByTranslation);
    }
    autoSave($lesson.materials, $lessonByTranslation[lessonId]);
    if (editorWindowRef) {
      const tmceBody = editorWindowRef?.document?.querySelector("body");
      if (typeof tmceBody?.scrollHeight === "number") {
        editorWindowRef?.scrollTo(0, tmceBody.scrollHeight);
      }
    }
  }
  function autoSave(updatedMaterials, translation, _isLoading, lessonId2) {
    if (mode === MODES.view)
      return;
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!initAutoSave) {
      initAutoSave = true;
      return;
    }
    isSaving = true;
    timeoutId = setTimeout(
      async () => {
        const { error } = await saveLesson(updatedMaterials);
        if (error) {
          console.error("error saving lesson", error);
          snackbar.error("snackbar.materials.apology");
        }
        isSaving = false;
      },
      1e3
    );
  }
  async function onLessonIdChange(_lid) {
    initAutoSave = false;
    isSaving = false;
    tabs$1 = orderedTabs(tabs$1, $course.metadata?.lessonTabsOrder);
    currentTab = tabs$1[0].value;
    componentsToRender = getComponentOrder(tabs$1);
  }
  const onClose = () => {
    set_store_value(uploadCourseVideoStore, $uploadCourseVideoStore.isModalOpen = false, $uploadCourseVideoStore);
  };
  function getComponentOrder(tabs2 = tabs) {
    const componentMap = {
      "1": ComponentNote,
      "2": ComponentSlide,
      "3": ComponentVideo
    };
    const componentNames = tabs2.map((tab) => {
      const component = componentMap[tab.value];
      return component || null;
    }).filter(Boolean);
    return componentNames;
  }
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.prevMode === void 0 && $$bindings.prevMode && prevMode !== void 0)
    $$bindings.prevMode(prevMode);
  if ($$props.lessonId === void 0 && $$bindings.lessonId && lessonId !== void 0)
    $$bindings.lessonId(lessonId);
  if ($$props.isSaving === void 0 && $$bindings.isSaving && isSaving !== void 0)
    $$bindings.isSaving(isSaving);
  if ($$props.isStudent === void 0 && $$bindings.isStudent && isStudent !== void 0)
    $$bindings.isStudent(isStudent);
  if ($$props.toggleMode === void 0 && $$bindings.toggleMode && toggleMode !== void 0)
    $$bindings.toggleMode(toggleMode);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      autoSave($lesson.materials, $lessonByTranslation[lessonId]);
    }
    {
      onLessonIdChange();
    }
    {
      handleSave(prevMode);
    }
    {
      addBadgeValueToTab($lesson.materials);
    }
    {
      updateNoteByCompletion($completion);
    }
    {
      initPlyr(player, $lesson.materials.videos);
    }
    lessonTitle = $lesson.title;
    editorValue = lessonFallbackNote($lesson.materials.note, $lessonByTranslation[lessonId], $lesson.locale);
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose,
        width: "w-4/5 w-[90%] h-[80%] md:h-[566px]",
        modalHeading: $t2("course.navItem.lessons.materials.tabs.video.add_video.title"),
        open: $uploadCourseVideoStore.isModalOpen
      },
      {
        open: ($$value) => {
          $uploadCourseVideoStore.isModalOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Index, "VideoUploader").$$render($$result, { lessonId }, {}, {})}`;
        }
      }
    )} ${validate_component(HTMLRender, "HtmlRender").$$render($$result, { className: "m-auto text-center" }, {}, {
      content: () => {
        return `<h1 class="text-2xl md:text-4xl mt-0 capitalize">${escape(lessonTitle)}</h1>`;
      }
    })} ${$lesson.isFetching ? `${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}` : `${mode === MODES.edit ? `${validate_component(Tabs, "Tabs").$$render($$result, { tabs: tabs$1, currentTab, onChange }, {}, {
      content: () => {
        return `<slot:fragment slot="content">${validate_component(TabContent, "TabContent").$$render(
          $$result,
          {
            value: getValue("course.navItem.lessons.materials.tabs.note.title"),
            index: currentTab
          },
          {},
          {
            default: () => {
              return `<div class="flex gap-1 justify-end"><div class="flex flex-row-reverse"${add_attribute("this", aiButtonRef, 0)}>${validate_component(PrimaryButton, "PrimaryButton").$$render(
                $$result,
                {
                  className: "flex items-center relative",
                  onClick: () => {
                    openPopover = !openPopover;
                  },
                  isLoading: $isLoading,
                  isDisabled: $isLoading,
                  variant: VARIANTS.OUTLINED,
                  disableScale: true
                },
                {},
                {
                  default: () => {
                    return `${validate_component(MagicWandFilled, "MagicWandFilled").$$render($$result, { size: 20, class: "carbon-icon mr-3" }, {}, {})}
              AI
              ${validate_component(Popover$1, "Popover").$$render(
                      $$result,
                      {
                        caret: true,
                        align: "left",
                        open: openPopover
                      },
                      {
                        open: ($$value) => {
                          openPopover = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        default: () => {
                          return `<div class="p-2"><button${add_attribute("class", aiButtonClass, 0)}>${validate_component(List, "ListIcon").$$render($$result, { class: "carbon-icon mr-2" }, {}, {})} ${escape($t2("course.navItem.lessons.materials.tabs.note.ai.outline"))}</button> <button${add_attribute("class", aiButtonClass, 0)}>${validate_component(AlignBoxTopLeft, "AlignBoxTopLeftIcon").$$render($$result, { class: "carbon-icon mr-2" }, {}, {})} ${escape($t2("course.navItem.lessons.materials.tabs.note.ai.note"))}</button> <button${add_attribute("class", aiButtonClass, 0)}>${validate_component(IbmWatsonKnowledgeStudio, "IbmWatsonKnowledgeStudioIcon").$$render($$result, { class: "carbon-icon mr-2" }, {}, {})} ${escape($t2("course.navItem.lessons.materials.tabs.note.ai.activities"))}</button></div>`;
                        }
                      }
                    )}`;
                  }
                }
              )}</div></div> <div class="h-[60vh] mt-5">${validate_component(TextEditor, "TextEditor").$$render(
                $$result,
                {
                  id: lessonId,
                  value: editorValue,
                  onChange: (html) => {
                    if (mode === MODES.view)
                      return;
                    $lessonByTranslation[lessonId][$lesson.locale] = html;
                    try {
                      localStorage.setItem(`lesson-${lessonId}-${$lesson.locale}`, html);
                    } catch (error) {
                    }
                  },
                  placeholder: $t2("course.navItem.lessons.materials.tabs.note.placeholder"),
                  editorWindowRef
                },
                {
                  editorWindowRef: ($$value) => {
                    editorWindowRef = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          }
        )} ${validate_component(TabContent, "TabContent").$$render(
          $$result,
          {
            value: getValue("course.navItem.lessons.materials.tabs.slide.title"),
            index: currentTab
          },
          {},
          {
            default: () => {
              return `${mode === MODES.edit ? `${validate_component(TextField, "TextField").$$render(
                $$result,
                {
                  label: $t2("course.navItem.lessons.materials.tabs.slide.slide_link"),
                  onInputChange: () => true,
                  helperMessage: $t2("course.navItem.lessons.materials.tabs.slide.helper_message"),
                  value: $lesson.materials.slide_url
                },
                {
                  value: ($$value) => {
                    $lesson.materials.slide_url = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}` : ``}`;
            }
          }
        )} ${validate_component(TabContent, "TabContent").$$render(
          $$result,
          {
            value: getValue("course.navItem.lessons.materials.tabs.video.title"),
            index: currentTab
          },
          {},
          {
            default: () => {
              return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                $$result,
                {
                  label: $t2("course.navItem.lessons.materials.tabs.video.button"),
                  onClick: openAddVideoModal,
                  className: "mb-2"
                },
                {},
                {}
              )} ${$lesson.materials.videos.length ? `<div class="flex flex-col items-start w-full h-full">${each($lesson.materials.videos, (video, index) => {
                return `${mode === MODES.edit ? `<div class="ml-auto">${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    value: "delete-video",
                    contained: true,
                    onClick: () => deleteLessonVideo(index)
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(TrashCan, "TrashCanIcon").$$render(
                        $$result,
                        {
                          size: 20,
                          class: "carbon-icon dark:text-white"
                        },
                        {},
                        {}
                      )} `;
                    }
                  }
                )} </div>` : ``} <div class="w-full h-full flex flex-col gap-2 overflow-hidden"><div class="mb-5">${video.type === "youtube" ? `<iframe width="100%" height="569" class="iframe"${add_attribute("src", formatYoutubeVideo(video.link, errors), 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `${video.type === "generic" ? `<iframe width="100%" height="569" class="iframe"${add_attribute("src", video.link, 0)} title="Embeded Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : `${video.metadata?.svid ? `<div style="position:relative;padding-bottom:51.416579%"><iframe src="${"https://muse.ai/embed/" + escape(video.metadata?.svid, true) + "?logo=https://app.classroomio.com/logo-512.png&subtitles=auto&cover_play_position=center"}" style="width:100%;height:100%;position:absolute;left:0;top:0" frameborder="0" allowfullscreen title="Muse AI Video Embed"></iframe> </div>` : `<video class="plyr-video-trigger" playsinline controls${add_attribute("this", player, 0)}><source${add_attribute("src", video.link, 0)} type="video/mp4"><track kind="captions"></video>`}`}`} </div> </div>`;
              })}</div>` : ``}`;
            }
          }
        )}</slot:fragment>`;
      }
    })}` : `${!isMaterialsEmpty($lesson.materials, $lessonByTranslation[lessonId]) ? `<div class="w-full mb-20">${each(componentsToRender, (Component) => {
      return `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { lessonId }, {}, {})}`;
    })}</div>` : `${validate_component(Box, "Box").$$render($$result, { className: "text-center" }, {}, {
      default: () => {
        return `<img src="/no-video.svg" alt="Video not found"> <h3 class="text-xl font-normal dark:text-white py-2">${escape($t2("course.navItem.lessons.materials.body_heading"))}</h3> ${!isStudent ? `<p class="text-sm text-center font-normal py-2">${escape($t2("course.navItem.lessons.materials.body_content"))} <strong>${escape($t2("course.navItem.lessons.materials.get_started"))}</strong> ${escape($t2("course.navItem.lessons.materials.button"))}.</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
          $$result,
          {
            label: $t2("course.navItem.lessons.materials.get_started"),
            className: "rounded-md",
            onClick: toggleMode
          },
          {},
          {}
        )}` : ``}`;
      }
    })}`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_lessonByTranslation();
  $$unsubscribe_completion();
  $$unsubscribe_isLoading();
  $$unsubscribe_uploadCourseVideoStore();
  $$unsubscribe_course();
  $$unsubscribe_input();
  $$unsubscribe_lessons();
  $$unsubscribe_t();
  $$unsubscribe_isLessonDirty();
  return $$rendered;
});
const initAnswerState = {
  answers: {},
  scores: {},
  grades: {},
  totalPossibleGrade: 0,
  finalTotalGrade: 0,
  currentQuestionIndex: 0,
  isFinished: false,
  progressValue: 100,
  status: STATUS.PENDING,
  comment: ""
};
const questionnaireMetaData = writable(initAnswerState);
const isQuestionnaireFetching = writable(false);
const deleteConfirmation = writable({ open: false });
const questionnaireOrder = writable({ open: false });
const questionnaireValidation = writable({});
const questionnaire = writable({
  title: "",
  due_by: "",
  is_due_by_dirty: false,
  is_title_dirty: false,
  description: "",
  is_description_dirty: false,
  questions: [],
  totalSubmissions: 0
});
function reset() {
  questionnaireMetaData.update((metaData) => {
    metaData.answers = {};
    metaData.currentQuestionIndex = 0;
    metaData.isFinished = false;
    return metaData;
  });
}
function validateQuestionnaire(questions) {
  const errors = {};
  for (const question of questions) {
    if (question.question_type.id === QUESTION_TYPE.TEXTAREA || question.deleted_at) {
      continue;
    }
    const qErrors = errors[question.id] || {};
    if (question.question_type.id !== QUESTION_TYPE.TEXTAREA) {
      const hasEmptyOptionLabel = question.options.filter((option) => !option.deleted_at).some((option) => option.label.trim() === "");
      if (hasEmptyOptionLabel) {
        qErrors.option = "Please enter a label for all options";
        errors[question.id] = { ...qErrors };
      }
    }
    const hasAnswer = question.options.filter((o2) => !o2.deleted_at).some((option) => option.is_correct);
    if (!hasAnswer) {
      qErrors.option = "Please mark an option as the correct answer";
      errors[question.id] = { ...qErrors };
    }
  }
  questionnaireValidation.set(errors);
  return errors;
}
function handleAddQuestion() {
  questionnaire.update((q2) => {
    const { questions } = q2;
    return {
      ...q2,
      questions: [
        ...questions,
        {
          ...QUESTION_TEMPLATE,
          id: `${questions.length + 1}-form`,
          name: `${questions.length + 1}-form`,
          value: "",
          points: 0,
          order: questions.length,
          question_type: {
            id: QUESTION_TYPE.RADIO
          },
          options: [
            {
              id: "1-form",
              label: "",
              value: null,
              is_correct: false
            }
          ]
        }
      ]
    };
  });
}
function handleAddOption(questionId) {
  return () => {
    questionnaire.update((_questionnaire) => {
      const { questions } = _questionnaire;
      return {
        ..._questionnaire,
        questions: questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              options: [
                ...question.options,
                {
                  id: `${question.options.length + 1}-form`,
                  label: "",
                  value: "",
                  is_correct: false
                }
              ]
            };
          }
          return question;
        })
      };
    });
  };
}
function handleRemoveOption(questionId, optionId) {
  return () => {
    questionnaire.update((q2) => {
      const { questions } = q2;
      return {
        ...q2,
        questions: questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              options: question.options.map((option) => {
                if (option.id === optionId) {
                  option.deleted_at = /* @__PURE__ */ new Date();
                }
                return option;
              })
            };
          }
          return question;
        })
      };
    });
  };
}
function handleRemoveQuestion(questionId) {
  return () => {
    questionnaire.update((q2) => {
      const { questions } = q2;
      return {
        ...q2,
        questions: questions.map((q3) => {
          if (q3.id === questionId) {
            q3.deleted_at = /* @__PURE__ */ new Date();
          }
          return q3;
        })
      };
    });
  };
}
function handleCode(questionId, shouldAdd = true) {
  questionnaire.update((q2) => {
    const { questions } = q2;
    return {
      ...q2,
      questions: questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            code: shouldAdd ? question.code || "" : void 0
          };
        }
        return question;
      })
    };
  });
}
function handleAnswerSelect(questionId, optionId) {
  return () => {
    questionnaire.update((q2) => {
      const { questions } = q2;
      return {
        ...q2,
        questions: questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              options: question.options.map((option) => {
                if (option.id === optionId) {
                  option.is_correct = !option.is_correct;
                  option.is_dirty = true;
                }
                return option;
              })
            };
          }
          return question;
        })
      };
    });
  };
}
function addDynamicValue(questionId, optionId) {
  return (e2) => {
    questionnaire.update((q2) => {
      const { questions } = q2;
      return {
        ...q2,
        questions: questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              options: question.options.map((option) => {
                if (option.id === optionId) {
                  const label = e2.target.value;
                  if (!isUUID(option.value)) {
                    option.value = label.split(" ").join("-");
                  }
                  option.label = label;
                  option.is_dirty = true;
                }
                return option;
              })
            };
          }
          return question;
        })
      };
    });
  };
}
const css$6 = {
  code: ".progress.svelte-1cr3xt1{transition:width 1s linear}",
  map: null
};
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$6);
  return `<div class="w-full h-3 rounded-md bg-gray-300 relative"><span class="progress absolute top-0 left-0 rounded-md bg-primary-700 h-full svelte-1cr3xt1" style="${"width: " + escape(value, true) + "%;"}"></span> </div>`;
});
const css$5 = {
  code: ".status-text.svelte-1po5nv9{width:fit-content}",
  map: null
};
function getTotalPossibleGrade$1(questions) {
  return questions.reduce(
    (acc, question) => {
      acc += parseFloat(question.points, 10);
      return acc;
    },
    0
  );
}
const ViewMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  let $profile, $$unsubscribe_profile;
  let $group, $$unsubscribe_group;
  let $questionnaireMetaData, $$unsubscribe_questionnaireMetaData;
  let $questionnaire, $$unsubscribe_questionnaire;
  let $$unsubscribe_lesson;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_questionnaireMetaData = subscribe(questionnaireMetaData, (value) => $questionnaireMetaData = value);
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { preview = false } = $$props;
  let { exerciseId = "" } = $$props;
  let { isFetchingExercise = false } = $$props;
  let currentQuestion = {};
  let renderProps = {};
  let submission;
  let hasSubmission = false;
  function handleStart() {
    set_store_value(questionnaireMetaData, $questionnaireMetaData.currentQuestionIndex += 1, $questionnaireMetaData);
  }
  async function checkForSubmission(people, profileId, courseId) {
    if (!Array.isArray(people) || !profileId || !courseId || !!submission) {
      return;
    }
    if (hasSubmission)
      return;
    const args = {
      exerciseId,
      courseId,
      submittedBy: getGroupMemberId(people, profileId)
    };
    const { data } = await fetchSubmission(args);
    hasSubmission = true;
    if (Array.isArray(data) && data.length) {
      submission = data[0];
      set_store_value(
        questionnaireMetaData,
        $questionnaireMetaData.answers = formatAnswers({
          questions: $questionnaire.questions,
          answers: submission.answers
        }),
        $questionnaireMetaData
      );
      set_store_value(questionnaireMetaData, $questionnaireMetaData.totalPossibleGrade = getTotalPossibleGrade$1($questionnaire.questions), $questionnaireMetaData);
      set_store_value(questionnaireMetaData, $questionnaireMetaData.currentQuestionIndex = $questionnaire.questions.length, $questionnaireMetaData);
      set_store_value(questionnaireMetaData, $questionnaireMetaData.isFinished = true, $questionnaireMetaData);
      set_store_value(questionnaireMetaData, $questionnaireMetaData.status = submission.status_id, $questionnaireMetaData);
      set_store_value(questionnaireMetaData, $questionnaireMetaData.finalTotalGrade = 0, $questionnaireMetaData);
      set_store_value(questionnaireMetaData, $questionnaireMetaData.comment = submission.feedback, $questionnaireMetaData);
      set_store_value(
        questionnaireMetaData,
        $questionnaireMetaData.grades = submission.answers.reduce(
          (acc, answer) => {
            acc[answer.question_id] = answer.point;
            set_store_value(questionnaireMetaData, $questionnaireMetaData.finalTotalGrade += answer.point, $questionnaireMetaData);
            return acc;
          },
          {}
        ),
        $questionnaireMetaData
      );
    }
  }
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  if ($$props.exerciseId === void 0 && $$bindings.exerciseId && exerciseId !== void 0)
    $$bindings.exerciseId(exerciseId);
  if ($$props.isFetchingExercise === void 0 && $$bindings.isFetchingExercise && isFetchingExercise !== void 0)
    $$bindings.isFetchingExercise(isFetchingExercise);
  $$result.css.add(css$5);
  !isFetchingExercise && checkForSubmission($group.people, $profile.id, $course.id);
  $$unsubscribe_course();
  $$unsubscribe_profile();
  $$unsubscribe_group();
  $$unsubscribe_questionnaireMetaData();
  $$unsubscribe_questionnaire();
  $$unsubscribe_lesson();
  $$unsubscribe_t();
  return `${!preview && $questionnaire.questions.length && !$questionnaireMetaData.isFinished ? `${validate_component(Progress, "Progress").$$render(
    $$result,
    {
      value: $questionnaireMetaData.progressValue
    },
    {},
    {}
  )}` : ``} ${preview ? `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
    default: () => {
      return `${validate_component(Preview, "Preview").$$render(
        $$result,
        {
          questions: filterOutDeleted($questionnaire.questions),
          questionnaireMetaData: $questionnaireMetaData
        },
        {},
        {}
      )}`;
    }
  })}` : `${!$questionnaire.questions.length ? `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `<img src="/images/empty-exercise-icon.svg" alt="Exercise svg" class="my-2.5"> <h2 class="text-xl my-1.5" data-svelte-h="svelte-k7f5cm">No question added for this exercise</h2> <p class="text-sm text-center px-44">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
        default: () => {
          return `Click the <span class="text-primary-700" data-svelte-h="svelte-1qm82lx">Edit</span> button to add.`;
        }
      })}</p>`;
    }
  })}` : `${$questionnaireMetaData.currentQuestionIndex === 0 ? `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [3] }, {}, {
    default: () => {
      return `<div><h2 class="my-1">${escape($questionnaire.title)}</h2> <div class="flex items-center"><p class="dark:text-white mx-2"><strong>${escape($questionnaire.questions.length)}</strong> questions</p>
        |
        <p class="dark:text-white mx-2"><strong>${escape(getTotalPossibleGrade$1($questionnaire.questions))}</strong> points.</p>
        |
        <p class="dark:text-white mx-2" data-svelte-h="svelte-1wtuhq4">All required</p> ${$questionnaire.due_by ? `|
          <p class="dark:text-white mx-2"><strong data-svelte-h="svelte-7l4k2j">Due by:</strong> ${escape(new Date($questionnaire.due_by).toLocaleString())}</p>` : ``}</div> <article class="mt-3 preview prose prose-sm sm:prose p-2"><!-- HTML_TAG_START -->${$questionnaire.description || "No desription"}<!-- HTML_TAG_END --></article> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
        $$result,
        {
          onClick: handleStart,
          label: "Start",
          className: "my-5 float-right",
          type: "button"
        },
        {},
        {}
      )}</div>`;
    }
  })}` : `${$questionnaireMetaData.isFinished ? `${`<div class="flex items-center justify-between"><div class="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4 w-full"><h2 class="text-xl font-normal">${escape($questionnaire.title)}</h2> ${STATUS.GRADED === $questionnaireMetaData.status ? `<span class="status-text bg-green-700 text-white py-1 px-2 text-center svelte-1po5nv9"${add_attribute("title", $t2("course.navItem.lessons.exercises.all_exercises.view_mode.status_graded"), 0)}>${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.graded"))}</span>` : `${$course.type === COURSE_TYPE.SELF_PACED ? `<span class="status-text bg-green-700 text-white py-1 px-2 text-center svelte-1po5nv9"${add_attribute("title", $t2("course.navItem.lessons.exercises.all_exercises.view_mode.status_submitted"), 0)}>${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.submitted"))}</span>` : `<span class="status-text bg-yellow-600 text-white py-1 px-2 text-center svelte-1po5nv9"${add_attribute("title", $t2("course.navItem.lessons.exercises.all_exercises.view_mode.status_pending"), 0)}>${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.pending"))}</span>`}`}</div> ${STATUS.GRADED === $questionnaireMetaData.status && $course.type !== COURSE_TYPE.SELF_PACED ? `<span class="p-6 border-2 border-gray-300 bg-[#F5F8FE] rounded-full h-10 w-10 flex items-center justify-center text-[#2751DA] text-sm font-semibold"${add_attribute("title", $t2("course.navItem.lessons.exercises.all_exercises.view_mode.status_graded"), 0)}>${escape($questionnaireMetaData.finalTotalGrade)}/${escape($questionnaireMetaData.totalPossibleGrade)}</span>` : ``}</div> ${$questionnaireMetaData.status === STATUS.GRADED && $questionnaireMetaData.comment && $course.type !== COURSE_TYPE.SELF_PACED ? `<div class="flex items-center justify-between bg-primary-700 p-4 text-white rounded-sm mt-3"><span>${escape($questionnaireMetaData.comment)}</span></div>` : ``} ${validate_component(Preview, "Preview").$$render(
    $$result,
    {
      questions: $questionnaire.questions.sort((a2, b2) => a2.order - b2.order),
      questionnaireMetaData: $questionnaireMetaData,
      grades: $questionnaireMetaData.grades,
      disableGrading: true
    },
    {},
    {}
  )}`}` : `${currentQuestion && currentQuestion?.id ? ` <div id="question">${QUESTION_TYPE.RADIO === currentQuestion.question_type.id ? `${validate_component(RadioQuestion, "RadioQuestion").$$render($$result, Object.assign({}, renderProps, { key: currentQuestion.id }, { hideGrading: true }), {}, {})}` : `${QUESTION_TYPE.CHECKBOX === currentQuestion.question_type.id ? `${validate_component(CheckboxQuestion, "CheckboxQuestion").$$render($$result, Object.assign({}, renderProps, { key: currentQuestion.id }, { hideGrading: true }), {}, {})}` : `${QUESTION_TYPE.TEXTAREA === currentQuestion.question_type.id ? `${validate_component(TextareaQuestion, "TextareaQuestion").$$render($$result, Object.assign({}, renderProps, { key: currentQuestion.id }, { hideGrading: true }), {}, {})}` : ``}`}`}</div>` : ``}`}`}`}`}`;
});
const ErrorMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<p class="text-sm text-red-500">${escape(message)}</p>`;
});
const css$4 = {
  code: ".title.svelte-dnehjd{color:rgba(255, 255, 255, 1);border-top-left-radius:8px;border-top-right-radius:8px;height:10px;left:-1px;top:-1px;width:calc(100% + 2px)}",
  map: null
};
const QuestionContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t2, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { isTitle = false } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { scrollToQuestion = false } = $$props;
  let { points = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { onPointsChange = () => {
  } } = $$props;
  let ref;
  if ($$props.isTitle === void 0 && $$bindings.isTitle && isTitle !== void 0)
    $$bindings.isTitle(isTitle);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.scrollToQuestion === void 0 && $$bindings.scrollToQuestion && scrollToQuestion !== void 0)
    $$bindings.scrollToQuestion(scrollToQuestion);
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.onPointsChange === void 0 && $$bindings.onPointsChange && onPointsChange !== void 0)
    $$bindings.onPointsChange(onPointsChange);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"bg-white dark:bg-black border-2 " + escape(
      hasError ? "border-red-700" : "border-gray hover:border-primary-700",
      true
    ) + " rounded-md mb-6 relative root"}"${add_attribute("this", ref, 0)}>${isTitle ? `<div class="title absolute bg-primary-700 svelte-dnehjd"></div>` : ``} <div class="${"px-4 " + escape(isTitle ? "pt-4" : "pt-2", true) + " pb-3"}">${slots.default ? slots.default({}) : ``}</div> ${typeof points !== "undefined" ? `<div class="flex justify-between items-center border-gray border-t-2 border-r-0 border-b-0 border-l-0 p-2"><div class="flex items-center w-40"><p class="dark:text-white text-sm mr-2">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.points"))}:</p> ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: $t2("course.navItem.lessons.exercises.new_exercise_modal.points"),
        type: "number",
        onChange: onPointsChange,
        value: points
      },
      {
        value: ($$value) => {
          points = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${onClose && !isTitle ? `${validate_component(IconButton, "IconButton").$$render($$result, { onClick: onClose }, {}, {
      default: () => {
        return `${validate_component(TrashCan, "TrashCanIcon").$$render($$result, { size: 24 }, {}, {})}`;
      }
    })}` : ``}</div>` : ``} </div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const DeleteConfirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteConfirmation, $$unsubscribe_deleteConfirmation;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_deleteConfirmation = subscribe(deleteConfirmation, (value) => $deleteConfirmation = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { onDelete = () => {
  } } = $$props;
  let { onCancel = () => {
  } } = $$props;
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $deleteConfirmation.open = false,
        width: "w-96",
        modalHeading: $t2("course.navItem.lessons.exercises.all_exercises.delete_confirmation.title"),
        open: $deleteConfirmation.open
      },
      {
        open: ($$value) => {
          $deleteConfirmation.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><h1 class="dark:text-white text-lg">${escape($t2("course.navItem.lessons.exercises.all_exercises.delete_confirmation.sure"))}</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t2("course.navItem.lessons.exercises.all_exercises.delete_confirmation.no"),
              onClick: () => {
                $deleteConfirmation.open = false;
                onCancel();
              }
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.CONTAINED,
              label: $t2("course.navItem.lessons.exercises.all_exercises.delete_confirmation.yes"),
              onClick: () => {
                onDelete();
                $deleteConfirmation.open = false;
              }
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_deleteConfirmation();
  $$unsubscribe_t();
  return $$rendered;
});
const css$3 = {
  code: "section.svelte-695hv2{padding:0.3em;overflow:auto}div.svelte-695hv2{margin:0.5em 0}",
  map: null
};
const OrderModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $questionnaire, $$unsubscribe_questionnaire;
  let $questionnaireOrder, $$unsubscribe_questionnaireOrder;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  $$unsubscribe_questionnaireOrder = subscribe(questionnaireOrder, (value) => $questionnaireOrder = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let items = [];
  function handleClose() {
    items.forEach((item, index) => {
      const order = index + 1;
      $questionnaire.questions.some((q2) => {
        if (q2.id === item.id) {
          q2.is_dirty = true;
          q2.order = order;
          return true;
        }
      });
    });
    set_store_value(questionnaire, $questionnaire.questions = $questionnaire.questions.sort((a2, b2) => a2.order - b2.order), $questionnaire);
    set_store_value(questionnaireOrder, $questionnaireOrder.open = false, $questionnaireOrder);
  }
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    items = filterOutDeleted($questionnaire.questions).map((q2) => ({
      id: q2.id,
      name: q2.title,
      type: q2.question_type.id
    }));
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: handleClose,
        width: "w-96",
        modalHeading: $t2("course.navItem.lessons.exercises.all_exercises.order_questions"),
        open: $questionnaireOrder.open
      },
      {
        open: ($$value) => {
          $questionnaireOrder.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<section class="w-full svelte-695hv2">${each(items, (item) => {
            return `<div class="flex items-center rounded-md p-4 border border-primary-600 svelte-695hv2">${item.type === 1 ? `${validate_component(RadioButtonChecked, "RadioButtonCheckedIcon").$$render($$result, { size: 16, class: "carbon-icon active" }, {}, {})}` : `${item.type === 2 ? `${validate_component(CheckboxCheckedFilled, "CheckboxCheckedFilledIcon").$$render($$result, { size: 16, class: "carbon-icon active" }, {}, {})}` : `${validate_component(TextAlignJustify, "TextAlignJustifyIcon").$$render($$result, { size: 16, class: "carbon-icon active" }, {}, {})}`}`} ${escape(` ${item.name}`)} </div>`;
          })}</section>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_questionnaire();
  $$unsubscribe_questionnaireOrder();
  $$unsubscribe_t();
  return $$rendered;
});
const css$2 = {
  code: "#dnd-action-dragged-el div{z-index:100}select{background-image:none}",
  map: null
};
const EditMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $questionnaire, $$unsubscribe_questionnaire;
  let $questionnaireValidation, $$unsubscribe_questionnaireValidation;
  let $deleteConfirmation, $$unsubscribe_deleteConfirmation;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  $$unsubscribe_questionnaireValidation = subscribe(questionnaireValidation, (value) => $questionnaireValidation = value);
  $$unsubscribe_deleteConfirmation = subscribe(deleteConfirmation, (value) => $deleteConfirmation = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  const initialQuestionsLength = $questionnaire.questions.length;
  let { shouldDeleteExercise = false } = $$props;
  let { exerciseId } = $$props;
  let { goBack = () => {
  } } = $$props;
  let errors = {};
  let questionIdToDelete = null;
  let questions = [];
  let isDeleting = false;
  function shouldScrollToLast(questionId, questions2) {
    const [lastQuestion] = questions2.slice(-1);
    const currentQuestionsLength = questions2.length;
    const isLast = lastQuestion.id === questionId;
    return isLast && initialQuestionsLength !== currentQuestionsLength;
  }
  function onInitDeleteClicked(questionId) {
    return () => {
      questionIdToDelete = questionId;
      set_store_value(deleteConfirmation, $deleteConfirmation.open = true, $deleteConfirmation);
    };
  }
  function onFinalDeleteClicked() {
    handleRemoveQuestion(questionIdToDelete)();
  }
  function getQuestionErrorMsg(errors2, question, errorKey) {
    return errors2[question.id] ? errors2[question.id][errorKey] : null;
  }
  async function handleDelete() {
    console.log("delete");
    isDeleting = true;
    await deleteExercise(questions, exerciseId);
    lesson.update((_lesson) => ({
      ..._lesson,
      exercises: _lesson.exercises.filter((exercise) => exercise.id !== exerciseId)
    }));
    goBack();
  }
  if ($$props.shouldDeleteExercise === void 0 && $$bindings.shouldDeleteExercise && shouldDeleteExercise !== void 0)
    $$bindings.shouldDeleteExercise(shouldDeleteExercise);
  if ($$props.exerciseId === void 0 && $$bindings.exerciseId && exerciseId !== void 0)
    $$bindings.exerciseId(exerciseId);
  if ($$props.goBack === void 0 && $$bindings.goBack && goBack !== void 0)
    $$bindings.goBack(goBack);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    errors = $questionnaireValidation;
    questions = filterOutDeleted($questionnaire.questions);
    $$rendered = `${validate_component(DeleteConfirmation, "DeleteConfirmationModal").$$render(
      $$result,
      {
        onCancel: () => questionIdToDelete = null,
        onDelete: onFinalDeleteClicked
      },
      {},
      {}
    )} ${validate_component(OrderModal, "OrderModal").$$render($$result, {}, {}, {})} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => shouldDeleteExercise = false,
        width: "w-2/4",
        modalHeading: $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.delete_modal"),
        open: shouldDeleteExercise
      },
      {
        open: ($$value) => {
          shouldDeleteExercise = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form><h1 class="dark:text-white text-xl">${escape($t2("course.navItem.lessons.exercises.all_exercises.edit_mode.sure"))}</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.no"),
              type: "submit",
              onClick: () => shouldDeleteExercise = false
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.CONTAINED,
              label: isDeleting ? $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.deleting") : $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.yes"),
              isDisabled: isDeleting,
              onClick: handleDelete
            },
            {},
            {}
          )}</div></form>`;
        }
      }
    )} <div class="w-full mb-20">${Object.values(errors).length ? `<div class="w-full flex justify-center mb-4">${validate_component(ErrorMessage, "ErrorMessage").$$render(
      $$result,
      {
        message: $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.error")
      },
      {},
      {}
    )}</div>` : ``} <div class="questions pt-6 px-6">${each(questions, (question) => {
      return ` ${validate_component(QuestionContainer, "QuestionContainer").$$render(
        $$result,
        {
          onClose: onInitDeleteClicked(question.id),
          scrollToQuestion: shouldScrollToLast(question.id, $questionnaire.questions),
          hasError: !!errors[question.id],
          onPointsChange: () => {
            question.is_dirty = true;
          },
          points: question.points
        },
        {
          points: ($$value) => {
            question.points = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `<div class="flex justify-between items-center"><div class="mr-5 w-3/5">${validate_component(TextField, "TextField").$$render(
              $$result,
              {
                placeholder: $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.question"),
                isRequired: true,
                onChange: () => {
                  question.is_dirty = true;
                },
                value: question.title
              },
              {
                value: ($$value) => {
                  question.title = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> ${validate_component(Select$1, "Select").$$render(
              $$result,
              {
                size: "xl",
                class: "w-[50px]",
                selected: question.question_type.id
              },
              {
                selected: ($$value) => {
                  question.question_type.id = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${each(QUESTION_TYPES, (type) => {
                    return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: type.id, text: $t2(type.label) }, {}, {})}`;
                  })} `;
                }
              }
            )}</div> ${typeof question.code === "string" ? `<div class="flex justify-between items-center my-3 w-3/5">${validate_component(TextArea, "TextArea").$$render(
              $$result,
              {
                rows: 2,
                placeholder: $t2("course.navItem.lessons.exercises.all_exercises.edit_mode.write"),
                value: question.code
              },
              {
                value: ($$value) => {
                  question.code = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(IconButton, "IconButton").$$render(
              $$result,
              {
                value: "write-code",
                onClick: () => handleCode(question.id, false)
              },
              {},
              {
                default: () => {
                  return `${validate_component(TrashCan, "TrashCanIcon").$$render(
                    $$result,
                    {
                      size: 24,
                      class: "carbon-icon dark:text-white"
                    },
                    {},
                    {}
                  )} `;
                }
              }
            )} </div>` : ``} <div class="flex flex-col mt-2">${QUESTION_TYPE.RADIO === question.question_type.id ? `${each(filterOutDeleted(question.options), (option) => {
              return `${validate_component(RadioItem, "RadioItem").$$render(
                $$result,
                {
                  isEditable: true,
                  name: question.title || "radio-name",
                  onChange: addDynamicValue(question.id, option.id),
                  label: option.label
                },
                {
                  label: ($$value) => {
                    option.label = $$value;
                    $$settled = false;
                  }
                },
                {
                  iconbutton: () => {
                    return `<div slot="iconbutton" class="flex items-center">${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        value: option.id,
                        onClick: handleRemoveOption(question.id, option.id)
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TrashCan, "TrashCanIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )} `;
                        }
                      }
                    )} ${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        value: option.id,
                        onClick: handleAnswerSelect(question.id, option.id),
                        buttonClassName: option.is_correct && "success"
                      },
                      {},
                      {
                        default: () => {
                          return `${option.is_correct ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )}` : `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )}`} `;
                        }
                      }
                    )} </div>`;
                  }
                }
              )}`;
            })}` : ``} ${QUESTION_TYPE.CHECKBOX === question.question_type.id ? `${each(filterOutDeleted(question.options), (option) => {
              return `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  isEditable: true,
                  name: question || "checkbox-name",
                  onChange: addDynamicValue(question.id, option.id),
                  label: option.label
                },
                {
                  label: ($$value) => {
                    option.label = $$value;
                    $$settled = false;
                  }
                },
                {
                  iconbutton: () => {
                    return `<div slot="iconbutton" class="flex items-center">${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        value: option.id,
                        onClick: handleRemoveOption(question.id, option.id)
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TrashCan, "TrashCanIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )} `;
                        }
                      }
                    )} ${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        value: option.id,
                        onClick: handleAnswerSelect(question.id, option.id),
                        buttonClassName: option.is_correct && "success"
                      },
                      {},
                      {
                        default: () => {
                          return `${option.is_correct ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )}` : `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render(
                            $$result,
                            {
                              size: 24,
                              class: "carbon-icon dark:text-white"
                            },
                            {},
                            {}
                          )}`} `;
                        }
                      }
                    )} </div>`;
                  }
                }
              )}`;
            })}` : ``} ${QUESTION_TYPE.TEXTAREA === question.question_type.id ? `${validate_component(TextArea, "TextArea").$$render(
              $$result,
              { disabled: true, value: question.value },
              {
                value: ($$value) => {
                  question.value = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``} ${getQuestionErrorMsg(errors, question, "option") ? `${validate_component(ErrorMessage, "ErrorMessage").$$render(
              $$result,
              {
                message: getQuestionErrorMsg(errors, question, "option")
              },
              {},
              {}
            )}` : ``}</div> ${QUESTION_TYPE.TEXTAREA !== question.question_type.id ? `<div class="flex items-center mt-3">${validate_component(PrimaryButton, "PrimaryButton").$$render(
              $$result,
              {
                disablePadding: true,
                className: "p-2",
                variant: VARIANTS.OUTLINED,
                onClick: handleAddOption(question.id)
              },
              {},
              {
                default: () => {
                  return `${validate_component(AddFilled, "AddFilledIcon").$$render(
                    $$result,
                    {
                      size: 24,
                      class: "carbon-icon dark:text-white"
                    },
                    {},
                    {}
                  )} <p class="dark:text-white ml-2">${escape($t2("course.navItem.lessons.exercises.all_exercises.edit_mode.option"))}</p> `;
                }
              }
            )} </div>` : ``} `;
          }
        }
      )} `;
    })}</div> </div>`;
  } while (!$$settled);
  $$unsubscribe_questionnaire();
  $$unsubscribe_questionnaireValidation();
  $$unsubscribe_deleteConfirmation();
  $$unsubscribe_t();
  return $$rendered;
});
function getTotalPossibleGrade(questions) {
  return questions.reduce(
    (acc, question) => {
      acc += parseFloat(question.points, 10);
      return acc;
    },
    0
  );
}
const UpdateDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t2, $$unsubscribe_t;
  let $questionnaire, $$unsubscribe_questionnaire;
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  let { preview } = $$props;
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"mb-5 " + escape(!preview ? "px-6" : "px-2", true)}">${validate_component(QuestionContainer, "QuestionContainer").$$render($$result, { isTitle: true }, {}, {
      default: () => {
        return `${!preview ? `${validate_component(TextField, "TextField").$$render(
          $$result,
          {
            placeholder: $t2("course.navItem.lessons.exercises.all_exercises.description.title"),
            className: "mb-2",
            onChange: () => $questionnaire.is_title_dirty = true,
            value: $questionnaire.title
          },
          {
            value: ($$value) => {
              $questionnaire.title = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(DateTime, "DateTime").$$render(
          $$result,
          {
            label: $t2("course.navItem.lessons.exercises.all_exercises.view_mode.due"),
            className: "w-50",
            value: $questionnaire.due_by,
            onInput: (e2) => {
              $questionnaire.due_by = e2.target.value;
              $questionnaire.is_due_by_dirty = true;
            }
          },
          {},
          {}
        )} <div class="mt-3"><p class="mb-1">${escape($t2("course.navItem.lessons.exercises.all_exercises.description.heading"))}</p> ${validate_component(TextEditor, "TextEditor").$$render(
          $$result,
          {
            value: $questionnaire.description,
            onChange: (html) => {
              $questionnaire.is_description_dirty = true;
              $questionnaire.description = html;
            },
            placeholder: $t2("course.navItem.lessons.exercises.all_exercises.description.describe"),
            maxHeight: 300
          },
          {},
          {}
        )}</div>` : `${preview ? `<h2 class="my-1">${escape($questionnaire.title)}</h2> <div class="flex items-center"><p class="dark:text-white mx-2"><strong>${escape($questionnaire.questions.length)}</strong> ${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.questions"))}</p>
        |
        <p class="dark:text-white mx-2"><strong>${escape(getTotalPossibleGrade($questionnaire.questions))}</strong> ${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.points"))}.</p>
        |
        <p class="dark:text-white mx-2">${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.all"))}</p> ${$questionnaire.due_by ? `|
          <p class="dark:text-white mx-2"><strong>${escape($t2("course.navItem.lessons.exercises.all_exercises.view_mode.due"))}:</strong> ${escape(new Date($questionnaire.due_by).toLocaleString())}</p>` : ``}</div> <article class="mt-3 preview prose prose-sm sm:prose p-2"><!-- HTML_TAG_START -->${$questionnaire.description || $t2("course.navItem.lessons.exercises.all_exercises.description.no")}<!-- HTML_TAG_END --></article>` : ``}`}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_questionnaire();
  return $$rendered;
});
var r$1 = /* @__PURE__ */ ((E2) => (E2.RENDER_FINISHED = "render-finished", E2.RESIZE = "chart-resize", E2.MOUSEOVER = "chart-mouseover", E2.MOUSEOUT = "chart-mouseout", E2))(r$1 || {}), e = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-modal", E2.HIDE = "hide-modal", E2))(e || {}), O = /* @__PURE__ */ ((E2) => (E2.UPDATE = "model-update", E2))(O || {}), a = /* @__PURE__ */ ((E2) => (E2.SHOW_OVERFLOW_MENU = "show-toolbar-overflow-menu", E2.HIDE_OVERFLOW_MENU = "hide-toolbar-overflow-menu", E2.BUTTON_CLICK = "toolbar-button-click", E2))(a || {}), u = /* @__PURE__ */ ((E2) => (E2.UPDATE = "zoom-bar-update", E2.SELECTION_START = "zoom-bar-selection-start", E2.SELECTION_IN_PROGRESS = "zoom-bar-selection-in-progress", E2.SELECTION_END = "zoom-bar-selection-end", E2))(u || {}), o = /* @__PURE__ */ ((E2) => (E2.CHANGE = "zoom-domain-change", E2))(o || {}), _$1 = /* @__PURE__ */ ((E2) => (E2.CANVAS_ZOOM_IN = "canvas-zoom-in", E2.CANVAS_ZOOM_OUT = "canvas-zoom-out", E2))(_$1 || {}), t = /* @__PURE__ */ ((E2) => (E2.LABEL_MOUSEOVER = "axis-label-mouseover", E2.LABEL_MOUSEMOVE = "axis-label-mousemove", E2.LABEL_CLICK = "axis-label-click", E2.LABEL_MOUSEOUT = "axis-label-mouseout", E2.LABEL_FOCUS = "axis-label-focus", E2.LABEL_BLUR = "axis-label-blur", E2.RENDER_COMPLETE = "axis-render-complete", E2))(t || {}), R = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(R || {}), s = /* @__PURE__ */ ((E2) => (E2.WORD_MOUSEOVER = "wordcloud-word-mouseover", E2.WORD_MOUSEMOVE = "wordcloud-word-mousemove", E2.WORD_CLICK = "wordcloud-word-click", E2.WORD_MOUSEOUT = "wordcloud-word-mouseout", E2))(s || {}), M$2 = /* @__PURE__ */ ((E2) => (E2.SLICE_MOUSEOVER = "pie-slice-mouseover", E2.SLICE_MOUSEMOVE = "pie-slice-mousemove", E2.SLICE_CLICK = "pie-slice-click", E2.SLICE_MOUSEOUT = "pie-slice-mouseout", E2))(M$2 || {}), v$2 = /* @__PURE__ */ ((E2) => (E2.ARC_MOUSEOVER = "gauge-arc-mouseover", E2.ARC_MOUSEMOVE = "gauge-arc-mousemove", E2.ARC_CLICK = "gauge-arc-click", E2.ARC_MOUSEOUT = "gauge-arc-mouseout", E2))(v$2 || {}), U = /* @__PURE__ */ ((E2) => (E2.BAR_MOUSEOVER = "bar-mouseover", E2.BAR_MOUSEMOVE = "bar-mousemove", E2.BAR_CLICK = "bar-click", E2.BAR_MOUSEOUT = "bar-mouseout", E2))(U || {}), S$1 = /* @__PURE__ */ ((E2) => (E2.BOX_MOUSEOVER = "box-mouseover", E2.BOX_MOUSEMOVE = "box-mousemove", E2.BOX_CLICK = "box-click", E2.BOX_MOUSEOUT = "box-mouseout", E2.OUTLIER_MOUSEOVER = "outlier-mouseover", E2.OUTLIER_MOUSEMOVE = "outlier-mousemove", E2.OUTLIER_CLICK = "outlier-click", E2.OUTLIER_MOUSEOUT = "outlier-mouseout", E2))(S$1 || {}), I$1 = /* @__PURE__ */ ((E2) => (E2.SCATTER_MOUSEOVER = "scatter-mouseover", E2.SCATTER_MOUSEMOVE = "scatter-mousemove", E2.SCATTER_CLICK = "scatter-click", E2.SCATTER_MOUSEOUT = "scatter-mouseout", E2))(I$1 || {}), m = /* @__PURE__ */ ((E2) => (E2.POINT_MOUSEOVER = "scatter-mouseover", E2.POINT_MOUSEMOVE = "scatter-mousemove", E2.POINT_CLICK = "scatter-click", E2.POINT_MOUSEOUT = "scatter-mouseout", E2))(m || {}), l = /* @__PURE__ */ ((E2) => (E2.X_AXIS_MOUSEOVER = "radar-x-axis-mouseover", E2.X_AXIS_MOUSEMOVE = "radar-x-axis-mousemove", E2.X_AXIS_CLICK = "radar-x-axis-click", E2.X_AXIS_MOUSEOUT = "radar-x-axis-mouseout", E2))(l || {}), c = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "tree-node-mouseover", E2.NODE_CLICK = "tree-node-click", E2.NODE_MOUSEOUT = "tree-node-mouseout", E2))(c || {}), L$1 = /* @__PURE__ */ ((E2) => (E2.LEAF_MOUSEOVER = "leaf-mouseover", E2.LEAF_MOUSEMOVE = "leaf-mousemove", E2.LEAF_CLICK = "leaf-click", E2.LEAF_MOUSEOUT = "leaf-mouseout", E2))(L$1 || {}), N$1 = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-tooltip", E2.MOVE = "move-tooltip", E2.HIDE = "hide-tooltip", E2))(N$1 || {}), n = /* @__PURE__ */ ((E2) => (E2.SHOW = "show-threshold", E2.HIDE = "hide-threshold", E2))(n || {}), A$2 = /* @__PURE__ */ ((E2) => (E2.ITEM_HOVER = "legend-item-onhover", E2.ITEM_CLICK = "legend-item-onclick", E2.ITEM_MOUSEOUT = "legend-item-onmouseout", E2.ITEMS_UPDATE = "legend-items-update", E2))(A$2 || {}), C = /* @__PURE__ */ ((E2) => (E2.CIRCLE_MOUSEOVER = "circle-leaf-mouseover", E2.CIRCLE_CLICK = "circle-leaf-click", E2.CIRCLE_MOUSEOUT = "circle-leaf-mouseout", E2.CIRCLE_MOUSEMOVE = "circle-leaf-mousemove", E2))(C || {}), T = /* @__PURE__ */ ((E2) => (E2.NODE_MOUSEOVER = "alluvial-node-mouseover", E2.NODE_CLICK = "alluvial-node-click", E2.NODE_MOUSEOUT = "alluvial-node-mouseout", E2.NODE_MOUSEMOVE = "alluvial-node-mousemove", E2.LINE_MOUSEOVER = "alluvial-line-mouseover", E2.LINE_CLICK = "alluvial-line-click", E2.LINE_MOUSEOUT = "alluvial-line-mouseout", E2.LINE_MOUSEMOVE = "alluvial-line-mousemove", E2))(T || {}), V$1 = /* @__PURE__ */ ((E2) => (E2.METER_MOUSEOVER = "meter-mouseover", E2.METER_CLICK = "meter-click", E2.METER_MOUSEOUT = "meter-mouseout", E2.METER_MOUSEMOVE = "meter-mousemove", E2))(V$1 || {}), i$1 = /* @__PURE__ */ ((E2) => (E2.HEATMAP_MOUSEOVER = "heatmap-mouseover", E2.HEATMAP_CLICK = "heatmap-click", E2.HEATMAP_MOUSEOUT = "heatmap-mouseout", E2.HEATMAP_MOUSEMOVE = "hetmap-mousemove", E2))(i$1 || {}), d = /* @__PURE__ */ ((E2) => (E2.CHOROPLETH_MOUSEOVER = "choropleth-mouseover", E2.CHOROPLETH_CLICK = "choropleth-click", E2.CHOROPLETH_MOUSEOUT = "choropleth-mouseout", E2.CHOROPLETH_MOUSEMOVE = "choropleth-mousemove", E2))(d || {});
const H$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alluvial: T,
  Area: R,
  Axis: t,
  Bar: U,
  Boxplot: S$1,
  CanvasZoom: _$1,
  Chart: r$1,
  Choropleth: d,
  CirclePack: C,
  Gauge: v$2,
  Heatmap: i$1,
  Legend: A$2,
  Line: m,
  Meter: V$1,
  Modal: e,
  Model: O,
  Pie: M$2,
  Radar: l,
  Scatter: I$1,
  Threshold: n,
  Toolbar: a,
  Tooltip: N$1,
  Tree: c,
  Treemap: L$1,
  WordCloud: s,
  ZoomBar: u,
  ZoomDomain: o
}, Symbol.toStringTag, { value: "Module" })), oE = H$2;
var D$2 = /* @__PURE__ */ ((E2) => (E2.HTML = "html", E2.SVG = "svg", E2))(D$2 || {}), g$1 = /* @__PURE__ */ ((E2) => (E2.WHITE = "white", E2.G100 = "g100", E2.G90 = "g90", E2.G10 = "g10", E2))(g$1 || {}), b$1 = /* @__PURE__ */ ((E2) => (E2.BACKGROUND = "background", E2.FILL = "fill", E2.STROKE = "stroke", E2.TOOLTIP = "tooltip", E2))(b$1 || {}), K$1 = /* @__PURE__ */ ((E2) => (E2.GRAPH_VIEW = "graph_view", E2.SLIDER_VIEW = "slider_view", E2))(K$1 || {}), h$1 = /* @__PURE__ */ ((E2) => (E2.END_LINE = "end_line", E2.MID_LINE = "mid_line", E2.FRONT_LINE = "front_line", E2.NONE = "none", E2))(h$1 || {}), F$2 = /* @__PURE__ */ ((E2) => (E2.VERTICAL = "vertical", E2.HORIZONTAL = "horizontal", E2))(F$2 || {}), w = /* @__PURE__ */ ((E2) => (E2.TIME = "time", E2.LINEAR = "linear", E2.LOG = "log", E2.LABELS = "labels", E2.LABELS_RATIO = "labels-ratio", E2))(w || {}), P$1 = /* @__PURE__ */ ((E2) => (E2.RIGHT = "right", E2.LEFT = "left", E2.TOP = "top", E2.BOTTOM = "bottom", E2))(P$1 || {}), k$2 = /* @__PURE__ */ ((E2) => (E2.LEFT = "left", E2.CENTER = "center", E2.RIGHT = "right", E2))(k$2 || {}), X$2 = /* @__PURE__ */ ((E2) => (E2.TREE = "tree", E2.DENDROGRAM = "dendrogram", E2))(X$2 || {}), z$2 = /* @__PURE__ */ ((E2) => (E2.ROW = "row", E2.COLUMN = "column", E2.ROW_REVERSE = "row-reverse", E2.COLUMN_REVERSE = "column-reverse", E2))(z$2 || {}), W$1 = /* @__PURE__ */ ((E2) => (E2.FIXED = "fixed", E2.PREFERRED = "preferred", E2.STRETCH = "stretch", E2))(W$1 || {}), B$1 = /* @__PURE__ */ ((E2) => (E2.CENTER = "center", E2))(B$1 || {}), Q$2 = /* @__PURE__ */ ((E2) => (E2.SEMI = "semi", E2.FULL = "full", E2))(Q$2 || {}), p$1 = /* @__PURE__ */ ((E2) => (E2.SCATTER = "scatter", E2.LINE = "line", E2.SIMPLE_BAR = "simple-bar", E2.STACKED_BAR = "stacked-bar", E2.GROUPED_BAR = "grouped-bar", E2.AREA = "area", E2.STACKED_AREA = "stacked-area", E2))(p$1 || {}), y$1 = /* @__PURE__ */ ((E2) => (E2.EXPORT_CSV = "Export as CSV", E2.EXPORT_PNG = "Export as PNG", E2.EXPORT_JPG = "Export as JPG", E2.ZOOM_IN = "Zoom in", E2.ZOOM_OUT = "Zoom out", E2.RESET_ZOOM = "Reset zoom", E2.MAKE_FULLSCREEN = "Make fullscreen", E2.SHOW_AS_DATATABLE = "Show as data-table", E2.CUSTOM = "Custom", E2))(y$1 || {}), rE = /* @__PURE__ */ ((E2) => (E2.CHECKBOX = "checkbox", E2.RADIUS = "radius", E2.AREA = "area", E2.SIZE = "size", E2.LINE = "line", E2.QUARTILE = "quartile", E2.ZOOM = "zoom", E2))(rE || {}), OE = /* @__PURE__ */ ((E2) => (E2.ON = "on", E2.AUTO = "auto", E2.OFF = "off", E2))(OE || {}), uE = /* @__PURE__ */ ((E2) => (E2.geoEqualEarth = "geoEqualEarth", E2.geoAlbers = "geoAlbers", E2.geoConicEqualArea = "geoConicEqualArea", E2.geoConicEquidistant = "geoConicEquidistant", E2.geoEquirectangular = "geoEquirectangular", E2.geoMercator = "geoMercator", E2.geoNaturalEarth1 = "geoNaturalEarth1", E2))(uE || {});
function Be$2(e2) {
  return function() {
    var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r2 = t2.width ? String(t2.width) : e2.defaultWidth, n2 = e2.formats[r2] || e2.formats[e2.defaultWidth];
    return n2;
  };
}
function ue(e2) {
  return function(t2, r2) {
    var n2 = r2 != null && r2.context ? String(r2.context) : "standalone", a2;
    if (n2 === "formatting" && e2.formattingValues) {
      var i2 = e2.defaultFormattingWidth || e2.defaultWidth, o2 = r2 != null && r2.width ? String(r2.width) : i2;
      a2 = e2.formattingValues[o2] || e2.formattingValues[i2];
    } else {
      var s2 = e2.defaultWidth, u2 = r2 != null && r2.width ? String(r2.width) : e2.defaultWidth;
      a2 = e2.values[u2] || e2.values[s2];
    }
    var l2 = e2.argumentCallback ? e2.argumentCallback(t2) : t2;
    return a2[l2];
  };
}
function le$1(e2) {
  return function(t2) {
    var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = r2.width, a2 = n2 && e2.matchPatterns[n2] || e2.matchPatterns[e2.defaultMatchWidth], i2 = t2.match(a2);
    if (!i2)
      return null;
    var o2 = i2[0], s2 = n2 && e2.parsePatterns[n2] || e2.parsePatterns[e2.defaultParseWidth], u2 = Array.isArray(s2) ? fn(s2, function(c2) {
      return c2.test(o2);
    }) : cn(s2, function(c2) {
      return c2.test(o2);
    }), l2;
    l2 = e2.valueCallback ? e2.valueCallback(u2) : u2, l2 = r2.valueCallback ? r2.valueCallback(l2) : l2;
    var f = t2.slice(o2.length);
    return {
      value: l2,
      rest: f
    };
  };
}
function cn(e2, t2) {
  for (var r2 in e2)
    if (e2.hasOwnProperty(r2) && t2(e2[r2]))
      return r2;
}
function fn(e2, t2) {
  for (var r2 = 0; r2 < e2.length; r2++)
    if (t2(e2[r2]))
      return r2;
}
function dn(e2) {
  return function(t2) {
    var r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = t2.match(e2.matchPattern);
    if (!n2)
      return null;
    var a2 = n2[0], i2 = t2.match(e2.parsePattern);
    if (!i2)
      return null;
    var o2 = e2.valueCallback ? e2.valueCallback(i2[0]) : i2[0];
    o2 = r2.valueCallback ? r2.valueCallback(o2) : o2;
    var s2 = t2.slice(a2.length);
    return {
      value: o2,
      rest: s2
    };
  };
}
var Un = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Nn = function(t2, r2, n2) {
  var a2, i2 = Un[t2];
  return typeof i2 == "string" ? a2 = i2 : r2 === 1 ? a2 = i2.one : a2 = i2.other.replace("{{count}}", r2.toString()), n2 != null && n2.addSuffix ? n2.comparison && n2.comparison > 0 ? "in " + a2 : a2 + " ago" : a2;
};
const Wn = Nn;
var jn = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yn = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Gn = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Bn = {
  date: Be$2({
    formats: jn,
    defaultWidth: "full"
  }),
  time: Be$2({
    formats: Yn,
    defaultWidth: "full"
  }),
  dateTime: Be$2({
    formats: Gn,
    defaultWidth: "full"
  })
};
const Hn = Bn;
var qn = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zn = function(t2, r2, n2, a2) {
  return qn[t2];
};
const Qn = zn;
var Xn = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Kn = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Vn = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Zn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Jn = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ea = function(t2, r2) {
  var n2 = Number(t2), a2 = n2 % 100;
  if (a2 > 20 || a2 < 10)
    switch (a2 % 10) {
      case 1:
        return n2 + "st";
      case 2:
        return n2 + "nd";
      case 3:
        return n2 + "rd";
    }
  return n2 + "th";
}, ta = {
  ordinalNumber: ea,
  era: ue({
    values: Xn,
    defaultWidth: "wide"
  }),
  quarter: ue({
    values: kn,
    defaultWidth: "wide",
    argumentCallback: function(t2) {
      return t2 - 1;
    }
  }),
  month: ue({
    values: Kn,
    defaultWidth: "wide"
  }),
  day: ue({
    values: Vn,
    defaultWidth: "wide"
  }),
  dayPeriod: ue({
    values: Zn,
    defaultWidth: "wide",
    formattingValues: Jn,
    defaultFormattingWidth: "wide"
  })
};
const ra = ta;
var na = /^(\d+)(th|st|nd|rd)?/i, aa = /\d+/i, ia = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, oa = {
  any: [/^b/i, /^(a|c)/i]
}, sa = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ua = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, la = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ca = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, fa = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, da = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ha = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ga = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ma = {
  ordinalNumber: dn({
    matchPattern: na,
    parsePattern: aa,
    valueCallback: function(t2) {
      return parseInt(t2, 10);
    }
  }),
  era: le$1({
    matchPatterns: ia,
    defaultMatchWidth: "wide",
    parsePatterns: oa,
    defaultParseWidth: "any"
  }),
  quarter: le$1({
    matchPatterns: sa,
    defaultMatchWidth: "wide",
    parsePatterns: ua,
    defaultParseWidth: "any",
    valueCallback: function(t2) {
      return t2 + 1;
    }
  }),
  month: le$1({
    matchPatterns: la,
    defaultMatchWidth: "wide",
    parsePatterns: ca,
    defaultParseWidth: "any"
  }),
  day: le$1({
    matchPatterns: fa,
    defaultMatchWidth: "wide",
    parsePatterns: da,
    defaultParseWidth: "any"
  }),
  dayPeriod: le$1({
    matchPatterns: ha,
    defaultMatchWidth: "any",
    parsePatterns: ga,
    defaultParseWidth: "any"
  })
};
const pa = ma;
var va = {
  code: "en-US",
  formatDistance: Wn,
  formatLong: Hn,
  formatRelative: Qn,
  localize: ra,
  match: pa,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const nr = va;
var Sa = typeof global == "object" && global && global.Object === Object && global;
const ar = Sa;
var $a = typeof self == "object" && self && self.Object === Object && self, Pa = ar || $a || Function("return this")();
const D$1 = Pa;
var Ca = D$1.Symbol;
const P = Ca;
var ir = Object.prototype, Ma = ir.hasOwnProperty, xa = ir.toString, ce$1 = P ? P.toStringTag : void 0;
function Aa(e2) {
  var t2 = Ma.call(e2, ce$1), r2 = e2[ce$1];
  try {
    e2[ce$1] = void 0;
    var n2 = true;
  } catch {
  }
  var a2 = xa.call(e2);
  return n2 && (t2 ? e2[ce$1] = r2 : delete e2[ce$1]), a2;
}
var Ea = Object.prototype, Da = Ea.toString;
function Ia(e2) {
  return Da.call(e2);
}
var La = "[object Null]", Fa$1 = "[object Undefined]", $t = P ? P.toStringTag : void 0;
function z$1(e2) {
  return e2 == null ? e2 === void 0 ? Fa$1 : La : $t && $t in Object(e2) ? Aa(e2) : Ia(e2);
}
function A$1(e2) {
  return e2 != null && typeof e2 == "object";
}
var Ra = "[object Symbol]";
function nt$1(e2) {
  return typeof e2 == "symbol" || A$1(e2) && z$1(e2) == Ra;
}
function Ua$1(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length, a2 = Array(n2); ++r2 < n2; )
    a2[r2] = t2(e2[r2], r2, e2);
  return a2;
}
var Na$1 = Array.isArray;
const S = Na$1;
var Wa$1 = 1 / 0, Pt = P ? P.prototype : void 0, Ct$1 = Pt ? Pt.toString : void 0;
function or(e2) {
  if (typeof e2 == "string")
    return e2;
  if (S(e2))
    return Ua$1(e2, or) + "";
  if (nt$1(e2))
    return Ct$1 ? Ct$1.call(e2) : "";
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -Wa$1 ? "-0" : t2;
}
function I(e2) {
  var t2 = typeof e2;
  return e2 != null && (t2 == "object" || t2 == "function");
}
function at$1(e2) {
  return e2;
}
var ja$1 = "[object AsyncFunction]", Ya$1 = "[object Function]", Ga = "[object GeneratorFunction]", Ba = "[object Proxy]";
function it$1(e2) {
  if (!I(e2))
    return false;
  var t2 = z$1(e2);
  return t2 == Ya$1 || t2 == Ga || t2 == ja$1 || t2 == Ba;
}
var Ha$1 = D$1["__core-js_shared__"];
const He$1 = Ha$1;
var Mt$1 = function() {
  var e2 = /[^.]+$/.exec(He$1 && He$1.keys && He$1.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function qa$1(e2) {
  return !!Mt$1 && Mt$1 in e2;
}
var za$1 = Function.prototype, Qa$1 = za$1.toString;
function Q$1(e2) {
  if (e2 != null) {
    try {
      return Qa$1.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var Xa$1 = /[\\^$.*+?()[\]{}|]/g, ka = /^\[object .+?Constructor\]$/, Ka$1 = Function.prototype, Va = Object.prototype, Za$1 = Ka$1.toString, Ja$1 = Va.hasOwnProperty, ei$1 = RegExp(
  "^" + Za$1.call(Ja$1).replace(Xa$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ti$1(e2) {
  if (!I(e2) || qa$1(e2))
    return false;
  var t2 = it$1(e2) ? ei$1 : ka;
  return t2.test(Q$1(e2));
}
function ri$1(e2, t2) {
  return e2 == null ? void 0 : e2[t2];
}
function X$1(e2, t2) {
  var r2 = ri$1(e2, t2);
  return ti$1(r2) ? r2 : void 0;
}
var ni$1 = X$1(D$1, "WeakMap");
const Ke$2 = ni$1;
var xt$1 = Object.create, ai$1 = function() {
  function e2() {
  }
  return function(t2) {
    if (!I(t2))
      return {};
    if (xt$1)
      return xt$1(t2);
    e2.prototype = t2;
    var r2 = new e2();
    return e2.prototype = void 0, r2;
  };
}();
const ii$1 = ai$1;
function oi$1(e2, t2, r2) {
  switch (r2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, r2[0]);
    case 2:
      return e2.call(t2, r2[0], r2[1]);
    case 3:
      return e2.call(t2, r2[0], r2[1], r2[2]);
  }
  return e2.apply(t2, r2);
}
function si$1() {
}
function sr(e2, t2) {
  var r2 = -1, n2 = e2.length;
  for (t2 || (t2 = Array(n2)); ++r2 < n2; )
    t2[r2] = e2[r2];
  return t2;
}
var ui$1 = 800, li$1 = 16, ci$1 = Date.now;
function fi$1(e2) {
  var t2 = 0, r2 = 0;
  return function() {
    var n2 = ci$1(), a2 = li$1 - (n2 - r2);
    if (r2 = n2, a2 > 0) {
      if (++t2 >= ui$1)
        return arguments[0];
    } else
      t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function di$1(e2) {
  return function() {
    return e2;
  };
}
var hi$1 = function() {
  try {
    var e2 = X$1(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}();
const Ee$1 = hi$1;
var gi$1 = Ee$1 ? function(e2, t2) {
  return Ee$1(e2, "toString", {
    configurable: true,
    enumerable: false,
    value: di$1(t2),
    writable: true
  });
} : at$1;
const mi$1 = gi$1;
var pi$1 = fi$1(mi$1);
const vi$1 = pi$1;
function bi$1(e2, t2, r2, n2) {
  for (var a2 = e2.length, i2 = r2 + (n2 ? 1 : -1); n2 ? i2-- : ++i2 < a2; )
    if (t2(e2[i2], i2, e2))
      return i2;
  return -1;
}
function wi$1(e2) {
  return e2 !== e2;
}
function Ti$1(e2, t2, r2) {
  for (var n2 = r2 - 1, a2 = e2.length; ++n2 < a2; )
    if (e2[n2] === t2)
      return n2;
  return -1;
}
function _i$1(e2, t2, r2) {
  return t2 === t2 ? Ti$1(e2, t2, r2) : bi$1(e2, wi$1, r2);
}
function Oi$1(e2, t2) {
  var r2 = e2 == null ? 0 : e2.length;
  return !!r2 && _i$1(e2, t2, 0) > -1;
}
var Si$1 = 9007199254740991, $i$1 = /^(?:0|[1-9]\d*)$/;
function ot$1(e2, t2) {
  var r2 = typeof e2;
  return t2 = t2 ?? Si$1, !!t2 && (r2 == "number" || r2 != "symbol" && $i$1.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
}
function st$1(e2, t2, r2) {
  t2 == "__proto__" && Ee$1 ? Ee$1(e2, t2, {
    configurable: true,
    enumerable: true,
    value: r2,
    writable: true
  }) : e2[t2] = r2;
}
function pe$1(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
var Pi$1 = Object.prototype, Ci$1 = Pi$1.hasOwnProperty;
function ur(e2, t2, r2) {
  var n2 = e2[t2];
  (!(Ci$1.call(e2, t2) && pe$1(n2, r2)) || r2 === void 0 && !(t2 in e2)) && st$1(e2, t2, r2);
}
function ve$1(e2, t2, r2, n2) {
  var a2 = !r2;
  r2 || (r2 = {});
  for (var i2 = -1, o2 = t2.length; ++i2 < o2; ) {
    var s2 = t2[i2], u2 = n2 ? n2(r2[s2], e2[s2], s2, r2, e2) : void 0;
    u2 === void 0 && (u2 = e2[s2]), a2 ? st$1(r2, s2, u2) : ur(r2, s2, u2);
  }
  return r2;
}
var At$1 = Math.max;
function Mi$1(e2, t2, r2) {
  return t2 = At$1(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var n2 = arguments, a2 = -1, i2 = At$1(n2.length - t2, 0), o2 = Array(i2); ++a2 < i2; )
      o2[a2] = n2[t2 + a2];
    a2 = -1;
    for (var s2 = Array(t2 + 1); ++a2 < t2; )
      s2[a2] = n2[a2];
    return s2[t2] = r2(o2), oi$1(e2, this, s2);
  };
}
function lr(e2, t2) {
  return vi$1(Mi$1(e2, t2, at$1), e2 + "");
}
var xi$1 = 9007199254740991;
function ut$1(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= xi$1;
}
function ye$1(e2) {
  return e2 != null && ut$1(e2.length) && !it$1(e2);
}
function Ai$1(e2, t2, r2) {
  if (!I(r2))
    return false;
  var n2 = typeof t2;
  return (n2 == "number" ? ye$1(r2) && ot$1(t2, r2.length) : n2 == "string" && t2 in r2) ? pe$1(r2[t2], e2) : false;
}
function Ei$1(e2) {
  return lr(function(t2, r2) {
    var n2 = -1, a2 = r2.length, i2 = a2 > 1 ? r2[a2 - 1] : void 0, o2 = a2 > 2 ? r2[2] : void 0;
    for (i2 = e2.length > 3 && typeof i2 == "function" ? (a2--, i2) : void 0, o2 && Ai$1(r2[0], r2[1], o2) && (i2 = a2 < 3 ? void 0 : i2, a2 = 1), t2 = Object(t2); ++n2 < a2; ) {
      var s2 = r2[n2];
      s2 && e2(t2, s2, n2, i2);
    }
    return t2;
  });
}
var Di$1 = Object.prototype;
function Fe$1(e2) {
  var t2 = e2 && e2.constructor, r2 = typeof t2 == "function" && t2.prototype || Di$1;
  return e2 === r2;
}
function Ii$1(e2, t2) {
  for (var r2 = -1, n2 = Array(e2); ++r2 < e2; )
    n2[r2] = t2(r2);
  return n2;
}
var Li$1 = "[object Arguments]";
function Et$1(e2) {
  return A$1(e2) && z$1(e2) == Li$1;
}
var cr = Object.prototype, Fi$1 = cr.hasOwnProperty, Ri$1 = cr.propertyIsEnumerable, Ui$1 = Et$1(function() {
  return arguments;
}()) ? Et$1 : function(e2) {
  return A$1(e2) && Fi$1.call(e2, "callee") && !Ri$1.call(e2, "callee");
};
const ee$1 = Ui$1;
function Ni$1() {
  return false;
}
var fr = typeof exports == "object" && exports && !exports.nodeType && exports, Dt = fr && typeof module == "object" && module && !module.nodeType && module, Wi$1 = Dt && Dt.exports === fr, It = Wi$1 ? D$1.Buffer : void 0, ji$1 = It ? It.isBuffer : void 0, Yi$1 = ji$1 || Ni$1;
const te$1 = Yi$1;
var Gi$1 = "[object Arguments]", Bi$1 = "[object Array]", Hi$1 = "[object Boolean]", qi$1 = "[object Date]", zi$1 = "[object Error]", Qi$1 = "[object Function]", Xi$1 = "[object Map]", ki$1 = "[object Number]", Ki$1 = "[object Object]", Vi$1 = "[object RegExp]", Zi$1 = "[object Set]", Ji$1 = "[object String]", eo = "[object WeakMap]", to = "[object ArrayBuffer]", ro = "[object DataView]", no = "[object Float32Array]", ao = "[object Float64Array]", io = "[object Int8Array]", oo = "[object Int16Array]", so = "[object Int32Array]", uo = "[object Uint8Array]", lo = "[object Uint8ClampedArray]", co = "[object Uint16Array]", fo = "[object Uint32Array]", b = {};
b[no] = b[ao] = b[io] = b[oo] = b[so] = b[uo] = b[lo] = b[co] = b[fo] = true;
b[Gi$1] = b[Bi$1] = b[to] = b[Hi$1] = b[ro] = b[qi$1] = b[zi$1] = b[Qi$1] = b[Xi$1] = b[ki$1] = b[Ki$1] = b[Vi$1] = b[Zi$1] = b[Ji$1] = b[eo] = false;
function ho(e2) {
  return A$1(e2) && ut$1(e2.length) && !!b[z$1(e2)];
}
function lt$1(e2) {
  return function(t2) {
    return e2(t2);
  };
}
var dr = typeof exports == "object" && exports && !exports.nodeType && exports, de = dr && typeof module == "object" && module && !module.nodeType && module, go = de && de.exports === dr, qe$2 = go && ar.process, mo = function() {
  try {
    var e2 = de && de.require && de.require("util").types;
    return e2 || qe$2 && qe$2.binding && qe$2.binding("util");
  } catch {
  }
}();
const re$1 = mo;
var Lt$1 = re$1 && re$1.isTypedArray, po = Lt$1 ? lt$1(Lt$1) : ho;
const Re$1 = po;
var vo = Object.prototype, yo = vo.hasOwnProperty;
function hr(e2, t2) {
  var r2 = S(e2), n2 = !r2 && ee$1(e2), a2 = !r2 && !n2 && te$1(e2), i2 = !r2 && !n2 && !a2 && Re$1(e2), o2 = r2 || n2 || a2 || i2, s2 = o2 ? Ii$1(e2.length, String) : [], u2 = s2.length;
  for (var l2 in e2)
    (t2 || yo.call(e2, l2)) && !(o2 && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a2 && (l2 == "offset" || l2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i2 && (l2 == "buffer" || l2 == "byteLength" || l2 == "byteOffset") || // Skip index properties.
    ot$1(l2, u2))) && s2.push(l2);
  return s2;
}
function gr(e2, t2) {
  return function(r2) {
    return e2(t2(r2));
  };
}
var bo = gr(Object.keys, Object);
const wo = bo;
var To = Object.prototype, _o = To.hasOwnProperty;
function mr(e2) {
  if (!Fe$1(e2))
    return wo(e2);
  var t2 = [];
  for (var r2 in Object(e2))
    _o.call(e2, r2) && r2 != "constructor" && t2.push(r2);
  return t2;
}
function Ue$1(e2) {
  return ye$1(e2) ? hr(e2) : mr(e2);
}
function Oo(e2) {
  var t2 = [];
  if (e2 != null)
    for (var r2 in Object(e2))
      t2.push(r2);
  return t2;
}
var So = Object.prototype, $o = So.hasOwnProperty;
function Po(e2) {
  if (!I(e2))
    return Oo(e2);
  var t2 = Fe$1(e2), r2 = [];
  for (var n2 in e2)
    n2 == "constructor" && (t2 || !$o.call(e2, n2)) || r2.push(n2);
  return r2;
}
function be$1(e2) {
  return ye$1(e2) ? hr(e2, true) : Po(e2);
}
var Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mo = /^\w*$/;
function ct$1(e2, t2) {
  if (S(e2))
    return false;
  var r2 = typeof e2;
  return r2 == "number" || r2 == "symbol" || r2 == "boolean" || e2 == null || nt$1(e2) ? true : Mo.test(e2) || !Co.test(e2) || t2 != null && e2 in Object(t2);
}
var xo = X$1(Object, "create");
const he = xo;
function Ao() {
  this.__data__ = he ? he(null) : {}, this.size = 0;
}
function Eo(e2) {
  var t2 = this.has(e2) && delete this.__data__[e2];
  return this.size -= t2 ? 1 : 0, t2;
}
var Do = "__lodash_hash_undefined__", Io = Object.prototype, Lo = Io.hasOwnProperty;
function Fo(e2) {
  var t2 = this.__data__;
  if (he) {
    var r2 = t2[e2];
    return r2 === Do ? void 0 : r2;
  }
  return Lo.call(t2, e2) ? t2[e2] : void 0;
}
var Ro = Object.prototype, Uo = Ro.hasOwnProperty;
function No(e2) {
  var t2 = this.__data__;
  return he ? t2[e2] !== void 0 : Uo.call(t2, e2);
}
var Wo = "__lodash_hash_undefined__";
function jo(e2, t2) {
  var r2 = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, r2[e2] = he && t2 === void 0 ? Wo : t2, this;
}
function H$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
H$1.prototype.clear = Ao;
H$1.prototype.delete = Eo;
H$1.prototype.get = Fo;
H$1.prototype.has = No;
H$1.prototype.set = jo;
function Yo() {
  this.__data__ = [], this.size = 0;
}
function Ne$1(e2, t2) {
  for (var r2 = e2.length; r2--; )
    if (pe$1(e2[r2][0], t2))
      return r2;
  return -1;
}
var Go = Array.prototype, Bo = Go.splice;
function Ho(e2) {
  var t2 = this.__data__, r2 = Ne$1(t2, e2);
  if (r2 < 0)
    return false;
  var n2 = t2.length - 1;
  return r2 == n2 ? t2.pop() : Bo.call(t2, r2, 1), --this.size, true;
}
function qo(e2) {
  var t2 = this.__data__, r2 = Ne$1(t2, e2);
  return r2 < 0 ? void 0 : t2[r2][1];
}
function zo(e2) {
  return Ne$1(this.__data__, e2) > -1;
}
function Qo(e2, t2) {
  var r2 = this.__data__, n2 = Ne$1(r2, e2);
  return n2 < 0 ? (++this.size, r2.push([e2, t2])) : r2[n2][1] = t2, this;
}
function L(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
L.prototype.clear = Yo;
L.prototype.delete = Ho;
L.prototype.get = qo;
L.prototype.has = zo;
L.prototype.set = Qo;
var Xo = X$1(D$1, "Map");
const ge$1 = Xo;
function ko() {
  this.size = 0, this.__data__ = {
    hash: new H$1(),
    map: new (ge$1 || L)(),
    string: new H$1()
  };
}
function Ko(e2) {
  var t2 = typeof e2;
  return t2 == "string" || t2 == "number" || t2 == "symbol" || t2 == "boolean" ? e2 !== "__proto__" : e2 === null;
}
function We$2(e2, t2) {
  var r2 = e2.__data__;
  return Ko(t2) ? r2[typeof t2 == "string" ? "string" : "hash"] : r2.map;
}
function Vo(e2) {
  var t2 = We$2(this, e2).delete(e2);
  return this.size -= t2 ? 1 : 0, t2;
}
function Zo(e2) {
  return We$2(this, e2).get(e2);
}
function Jo(e2) {
  return We$2(this, e2).has(e2);
}
function es$1(e2, t2) {
  var r2 = We$2(this, e2), n2 = r2.size;
  return r2.set(e2, t2), this.size += r2.size == n2 ? 0 : 1, this;
}
function F$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < r2; ) {
    var n2 = e2[t2];
    this.set(n2[0], n2[1]);
  }
}
F$1.prototype.clear = ko;
F$1.prototype.delete = Vo;
F$1.prototype.get = Zo;
F$1.prototype.has = Jo;
F$1.prototype.set = es$1;
var ts$1 = "Expected a function";
function ft$2(e2, t2) {
  if (typeof e2 != "function" || t2 != null && typeof t2 != "function")
    throw new TypeError(ts$1);
  var r2 = function() {
    var n2 = arguments, a2 = t2 ? t2.apply(this, n2) : n2[0], i2 = r2.cache;
    if (i2.has(a2))
      return i2.get(a2);
    var o2 = e2.apply(this, n2);
    return r2.cache = i2.set(a2, o2) || i2, o2;
  };
  return r2.cache = new (ft$2.Cache || F$1)(), r2;
}
ft$2.Cache = F$1;
var rs$1 = 500;
function ns$1(e2) {
  var t2 = ft$2(e2, function(n2) {
    return r2.size === rs$1 && r2.clear(), n2;
  }), r2 = t2.cache;
  return t2;
}
var as$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, is$1 = /\\(\\)?/g, os$1 = ns$1(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(""), e2.replace(as$1, function(r2, n2, a2, i2) {
    t2.push(a2 ? i2.replace(is$1, "$1") : n2 || r2);
  }), t2;
});
const ss$1 = os$1;
function us(e2) {
  return e2 == null ? "" : or(e2);
}
function pr(e2, t2) {
  return S(e2) ? e2 : ct$1(e2, t2) ? [e2] : ss$1(us(e2));
}
var ls$1 = 1 / 0;
function je$1(e2) {
  if (typeof e2 == "string" || nt$1(e2))
    return e2;
  var t2 = e2 + "";
  return t2 == "0" && 1 / e2 == -ls$1 ? "-0" : t2;
}
function vr(e2, t2) {
  t2 = pr(t2, e2);
  for (var r2 = 0, n2 = t2.length; e2 != null && r2 < n2; )
    e2 = e2[je$1(t2[r2++])];
  return r2 && r2 == n2 ? e2 : void 0;
}
function cs$1(e2, t2, r2) {
  var n2 = e2 == null ? void 0 : vr(e2, t2);
  return n2 === void 0 ? r2 : n2;
}
function dt$1(e2, t2) {
  for (var r2 = -1, n2 = t2.length, a2 = e2.length; ++r2 < n2; )
    e2[a2 + r2] = t2[r2];
  return e2;
}
var Ft = P ? P.isConcatSpreadable : void 0;
function fs(e2) {
  return S(e2) || ee$1(e2) || !!(Ft && e2 && e2[Ft]);
}
function yr(e2, t2, r2, n2, a2) {
  var i2 = -1, o2 = e2.length;
  for (r2 || (r2 = fs), a2 || (a2 = []); ++i2 < o2; ) {
    var s2 = e2[i2];
    t2 > 0 && r2(s2) ? t2 > 1 ? yr(s2, t2 - 1, r2, n2, a2) : dt$1(a2, s2) : n2 || (a2[a2.length] = s2);
  }
  return a2;
}
var ds = gr(Object.getPrototypeOf, Object);
const ht$2 = ds;
var hs = "[object Object]", gs = Function.prototype, ms = Object.prototype, br = gs.toString, ps = ms.hasOwnProperty, vs = br.call(Object);
function ys(e2) {
  if (!A$1(e2) || z$1(e2) != hs)
    return false;
  var t2 = ht$2(e2);
  if (t2 === null)
    return true;
  var r2 = ps.call(t2, "constructor") && t2.constructor;
  return typeof r2 == "function" && r2 instanceof r2 && br.call(r2) == vs;
}
function bs() {
  this.__data__ = new L(), this.size = 0;
}
function ws(e2) {
  var t2 = this.__data__, r2 = t2.delete(e2);
  return this.size = t2.size, r2;
}
function Ts(e2) {
  return this.__data__.get(e2);
}
function _s(e2) {
  return this.__data__.has(e2);
}
var Os = 200;
function Ss(e2, t2) {
  var r2 = this.__data__;
  if (r2 instanceof L) {
    var n2 = r2.__data__;
    if (!ge$1 || n2.length < Os - 1)
      return n2.push([e2, t2]), this.size = ++r2.size, this;
    r2 = this.__data__ = new F$1(n2);
  }
  return r2.set(e2, t2), this.size = r2.size, this;
}
function M$1(e2) {
  var t2 = this.__data__ = new L(e2);
  this.size = t2.size;
}
M$1.prototype.clear = bs;
M$1.prototype.delete = ws;
M$1.prototype.get = Ts;
M$1.prototype.has = _s;
M$1.prototype.set = Ss;
var wr = typeof exports == "object" && exports && !exports.nodeType && exports, Rt = wr && typeof module == "object" && module && !module.nodeType && module, Cs = Rt && Rt.exports === wr, Ut = Cs ? D$1.Buffer : void 0, Nt = Ut ? Ut.allocUnsafe : void 0;
function Tr(e2, t2) {
  if (t2)
    return e2.slice();
  var r2 = e2.length, n2 = Nt ? Nt(r2) : new e2.constructor(r2);
  return e2.copy(n2), n2;
}
function Ms(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length, a2 = 0, i2 = []; ++r2 < n2; ) {
    var o2 = e2[r2];
    t2(o2, r2, e2) && (i2[a2++] = o2);
  }
  return i2;
}
function _r() {
  return [];
}
var xs = Object.prototype, As = xs.propertyIsEnumerable, Wt = Object.getOwnPropertySymbols, Es = Wt ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Ms(Wt(e2), function(t2) {
    return As.call(e2, t2);
  }));
} : _r;
const gt$1 = Es;
function Sr(e2, t2, r2) {
  var n2 = t2(e2);
  return S(e2) ? n2 : dt$1(n2, r2(e2));
}
function Ve$1(e2) {
  return Sr(e2, Ue$1, gt$1);
}
var Us$1 = X$1(D$1, "DataView");
const Ze$2 = Us$1;
var Ns$1 = X$1(D$1, "Promise");
const Je$1 = Ns$1;
var Ws$1 = X$1(D$1, "Set");
const J$1 = Ws$1;
var jt = "[object Map]", js$1 = "[object Object]", Yt = "[object Promise]", Gt$1 = "[object Set]", Bt$1 = "[object WeakMap]", Ht = "[object DataView]", Ys = Q$1(Ze$2), Gs$1 = Q$1(ge$1), Bs = Q$1(Je$1), Hs = Q$1(J$1), qs = Q$1(Ke$2), Y$1 = z$1;
(Ze$2 && Y$1(new Ze$2(new ArrayBuffer(1))) != Ht || ge$1 && Y$1(new ge$1()) != jt || Je$1 && Y$1(Je$1.resolve()) != Yt || J$1 && Y$1(new J$1()) != Gt$1 || Ke$2 && Y$1(new Ke$2()) != Bt$1) && (Y$1 = function(e2) {
  var t2 = z$1(e2), r2 = t2 == js$1 ? e2.constructor : void 0, n2 = r2 ? Q$1(r2) : "";
  if (n2)
    switch (n2) {
      case Ys:
        return Ht;
      case Gs$1:
        return jt;
      case Bs:
        return Yt;
      case Hs:
        return Gt$1;
      case qs:
        return Bt$1;
    }
  return t2;
});
const ne$2 = Y$1;
var ks = D$1.Uint8Array;
const De$2 = ks;
function mt$1(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new De$2(t2).set(new De$2(e2)), t2;
}
var qt = P ? P.prototype : void 0;
qt ? qt.valueOf : void 0;
function $r(e2, t2) {
  var r2 = t2 ? mt$1(e2.buffer) : e2.buffer;
  return new e2.constructor(r2, e2.byteOffset, e2.length);
}
function Pr(e2) {
  return typeof e2.constructor == "function" && !Fe$1(e2) ? ii$1(ht$2(e2)) : {};
}
re$1 && re$1.isMap;
re$1 && re$1.isSet;
var nl = "__lodash_hash_undefined__";
function al(e2) {
  return this.__data__.set(e2, nl), this;
}
function il(e2) {
  return this.__data__.has(e2);
}
function me$1(e2) {
  var t2 = -1, r2 = e2 == null ? 0 : e2.length;
  for (this.__data__ = new F$1(); ++t2 < r2; )
    this.add(e2[t2]);
}
me$1.prototype.add = me$1.prototype.push = al;
me$1.prototype.has = il;
function ol(e2, t2) {
  for (var r2 = -1, n2 = e2 == null ? 0 : e2.length; ++r2 < n2; )
    if (t2(e2[r2], r2, e2))
      return true;
  return false;
}
function Ar(e2, t2) {
  return e2.has(t2);
}
var sl = 1, ul = 2;
function Er(e2, t2, r2, n2, a2, i2) {
  var o2 = r2 & sl, s2 = e2.length, u2 = t2.length;
  if (s2 != u2 && !(o2 && u2 > s2))
    return false;
  var l2 = i2.get(e2), f = i2.get(t2);
  if (l2 && f)
    return l2 == t2 && f == e2;
  var c2 = -1, d2 = true, g2 = r2 & ul ? new me$1() : void 0;
  for (i2.set(e2, t2), i2.set(t2, e2); ++c2 < s2; ) {
    var m2 = e2[c2], T2 = t2[c2];
    if (n2)
      var y2 = o2 ? n2(T2, m2, c2, t2, e2, i2) : n2(m2, T2, c2, e2, t2, i2);
    if (y2 !== void 0) {
      if (y2)
        continue;
      d2 = false;
      break;
    }
    if (g2) {
      if (!ol(t2, function(w2, C2) {
        if (!Ar(g2, C2) && (m2 === w2 || a2(m2, w2, r2, n2, i2)))
          return g2.push(C2);
      })) {
        d2 = false;
        break;
      }
    } else if (!(m2 === T2 || a2(m2, T2, r2, n2, i2))) {
      d2 = false;
      break;
    }
  }
  return i2.delete(e2), i2.delete(t2), d2;
}
function ll(e2) {
  var t2 = -1, r2 = Array(e2.size);
  return e2.forEach(function(n2, a2) {
    r2[++t2] = [a2, n2];
  }), r2;
}
function pt$1(e2) {
  var t2 = -1, r2 = Array(e2.size);
  return e2.forEach(function(n2) {
    r2[++t2] = n2;
  }), r2;
}
var cl = 1, fl = 2, dl = "[object Boolean]", hl = "[object Date]", gl = "[object Error]", ml = "[object Map]", pl = "[object Number]", vl = "[object RegExp]", yl = "[object Set]", bl = "[object String]", wl = "[object Symbol]", Tl = "[object ArrayBuffer]", _l = "[object DataView]", kt$1 = P ? P.prototype : void 0, ze$1 = kt$1 ? kt$1.valueOf : void 0;
function Ol(e2, t2, r2, n2, a2, i2, o2) {
  switch (r2) {
    case _l:
      if (e2.byteLength != t2.byteLength || e2.byteOffset != t2.byteOffset)
        return false;
      e2 = e2.buffer, t2 = t2.buffer;
    case Tl:
      return !(e2.byteLength != t2.byteLength || !i2(new De$2(e2), new De$2(t2)));
    case dl:
    case hl:
    case pl:
      return pe$1(+e2, +t2);
    case gl:
      return e2.name == t2.name && e2.message == t2.message;
    case vl:
    case bl:
      return e2 == t2 + "";
    case ml:
      var s2 = ll;
    case yl:
      var u2 = n2 & cl;
      if (s2 || (s2 = pt$1), e2.size != t2.size && !u2)
        return false;
      var l2 = o2.get(e2);
      if (l2)
        return l2 == t2;
      n2 |= fl, o2.set(e2, t2);
      var f = Er(s2(e2), s2(t2), n2, a2, i2, o2);
      return o2.delete(e2), f;
    case wl:
      if (ze$1)
        return ze$1.call(e2) == ze$1.call(t2);
  }
  return false;
}
var Sl = 1, $l = Object.prototype, Pl = $l.hasOwnProperty;
function Cl(e2, t2, r2, n2, a2, i2) {
  var o2 = r2 & Sl, s2 = Ve$1(e2), u2 = s2.length, l2 = Ve$1(t2), f = l2.length;
  if (u2 != f && !o2)
    return false;
  for (var c2 = u2; c2--; ) {
    var d2 = s2[c2];
    if (!(o2 ? d2 in t2 : Pl.call(t2, d2)))
      return false;
  }
  var g2 = i2.get(e2), m2 = i2.get(t2);
  if (g2 && m2)
    return g2 == t2 && m2 == e2;
  var T2 = true;
  i2.set(e2, t2), i2.set(t2, e2);
  for (var y2 = o2; ++c2 < u2; ) {
    d2 = s2[c2];
    var w2 = e2[d2], C2 = t2[d2];
    if (n2)
      var k2 = o2 ? n2(C2, w2, d2, t2, e2, i2) : n2(w2, C2, d2, e2, t2, i2);
    if (!(k2 === void 0 ? w2 === C2 || a2(w2, C2, r2, n2, i2) : k2)) {
      T2 = false;
      break;
    }
    y2 || (y2 = d2 == "constructor");
  }
  if (T2 && !y2) {
    var R2 = e2.constructor, K2 = t2.constructor;
    R2 != K2 && "constructor" in e2 && "constructor" in t2 && !(typeof R2 == "function" && R2 instanceof R2 && typeof K2 == "function" && K2 instanceof K2) && (T2 = false);
  }
  return i2.delete(e2), i2.delete(t2), T2;
}
var Ml = 1, Kt = "[object Arguments]", Vt = "[object Array]", Se$1 = "[object Object]", xl = Object.prototype, Zt = xl.hasOwnProperty;
function Al(e2, t2, r2, n2, a2, i2) {
  var o2 = S(e2), s2 = S(t2), u2 = o2 ? Vt : ne$2(e2), l2 = s2 ? Vt : ne$2(t2);
  u2 = u2 == Kt ? Se$1 : u2, l2 = l2 == Kt ? Se$1 : l2;
  var f = u2 == Se$1, c2 = l2 == Se$1, d2 = u2 == l2;
  if (d2 && te$1(e2)) {
    if (!te$1(t2))
      return false;
    o2 = true, f = false;
  }
  if (d2 && !f)
    return i2 || (i2 = new M$1()), o2 || Re$1(e2) ? Er(e2, t2, r2, n2, a2, i2) : Ol(e2, t2, u2, r2, n2, a2, i2);
  if (!(r2 & Ml)) {
    var g2 = f && Zt.call(e2, "__wrapped__"), m2 = c2 && Zt.call(t2, "__wrapped__");
    if (g2 || m2) {
      var T2 = g2 ? e2.value() : e2, y2 = m2 ? t2.value() : t2;
      return i2 || (i2 = new M$1()), a2(T2, y2, r2, n2, i2);
    }
  }
  return d2 ? (i2 || (i2 = new M$1()), Cl(e2, t2, r2, n2, a2, i2)) : false;
}
function vt$1(e2, t2, r2, n2, a2) {
  return e2 === t2 ? true : e2 == null || t2 == null || !A$1(e2) && !A$1(t2) ? e2 !== e2 && t2 !== t2 : Al(e2, t2, r2, n2, vt$1, a2);
}
var El = 1, Dl = 2;
function Il(e2, t2, r2, n2) {
  var a2 = r2.length, i2 = a2, o2 = !n2;
  if (e2 == null)
    return !i2;
  for (e2 = Object(e2); a2--; ) {
    var s2 = r2[a2];
    if (o2 && s2[2] ? s2[1] !== e2[s2[0]] : !(s2[0] in e2))
      return false;
  }
  for (; ++a2 < i2; ) {
    s2 = r2[a2];
    var u2 = s2[0], l2 = e2[u2], f = s2[1];
    if (o2 && s2[2]) {
      if (l2 === void 0 && !(u2 in e2))
        return false;
    } else {
      var c2 = new M$1();
      if (n2)
        var d2 = n2(l2, f, u2, e2, t2, c2);
      if (!(d2 === void 0 ? vt$1(f, l2, El | Dl, n2, c2) : d2))
        return false;
    }
  }
  return true;
}
function Dr(e2) {
  return e2 === e2 && !I(e2);
}
function Ll(e2) {
  for (var t2 = Ue$1(e2), r2 = t2.length; r2--; ) {
    var n2 = t2[r2], a2 = e2[n2];
    t2[r2] = [n2, a2, Dr(a2)];
  }
  return t2;
}
function Ir(e2, t2) {
  return function(r2) {
    return r2 == null ? false : r2[e2] === t2 && (t2 !== void 0 || e2 in Object(r2));
  };
}
function Fl(e2) {
  var t2 = Ll(e2);
  return t2.length == 1 && t2[0][2] ? Ir(t2[0][0], t2[0][1]) : function(r2) {
    return r2 === e2 || Il(r2, e2, t2);
  };
}
function Rl(e2, t2) {
  return e2 != null && t2 in Object(e2);
}
function Ul(e2, t2, r2) {
  t2 = pr(t2, e2);
  for (var n2 = -1, a2 = t2.length, i2 = false; ++n2 < a2; ) {
    var o2 = je$1(t2[n2]);
    if (!(i2 = e2 != null && r2(e2, o2)))
      break;
    e2 = e2[o2];
  }
  return i2 || ++n2 != a2 ? i2 : (a2 = e2 == null ? 0 : e2.length, !!a2 && ut$1(a2) && ot$1(o2, a2) && (S(e2) || ee$1(e2)));
}
function Nl(e2, t2) {
  return e2 != null && Ul(e2, t2, Rl);
}
var Wl = 1, jl = 2;
function Yl(e2, t2) {
  return ct$1(e2) && Dr(t2) ? Ir(je$1(e2), t2) : function(r2) {
    var n2 = cs$1(r2, e2);
    return n2 === void 0 && n2 === t2 ? Nl(r2, e2) : vt$1(t2, n2, Wl | jl);
  };
}
function Gl(e2) {
  return function(t2) {
    return t2 == null ? void 0 : t2[e2];
  };
}
function Bl(e2) {
  return function(t2) {
    return vr(t2, e2);
  };
}
function Hl(e2) {
  return ct$1(e2) ? Gl(je$1(e2)) : Bl(e2);
}
function ql(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? at$1 : typeof e2 == "object" ? S(e2) ? Yl(e2[0], e2[1]) : Fl(e2) : Hl(e2);
}
function zl(e2) {
  return function(t2, r2, n2) {
    for (var a2 = -1, i2 = Object(t2), o2 = n2(t2), s2 = o2.length; s2--; ) {
      var u2 = o2[e2 ? s2 : ++a2];
      if (r2(i2[u2], u2, i2) === false)
        break;
    }
    return t2;
  };
}
var Ql = zl();
const Xl = Ql;
function et$2(e2, t2, r2) {
  (r2 !== void 0 && !pe$1(e2[t2], r2) || r2 === void 0 && !(t2 in e2)) && st$1(e2, t2, r2);
}
function tt$1(e2) {
  return A$1(e2) && ye$1(e2);
}
function rt$1(e2, t2) {
  if (!(t2 === "constructor" && typeof e2[t2] == "function") && t2 != "__proto__")
    return e2[t2];
}
function kl(e2) {
  return ve$1(e2, be$1(e2));
}
function Kl(e2, t2, r2, n2, a2, i2, o2) {
  var s2 = rt$1(e2, r2), u2 = rt$1(t2, r2), l2 = o2.get(u2);
  if (l2) {
    et$2(e2, r2, l2);
    return;
  }
  var f = i2 ? i2(s2, u2, r2 + "", e2, t2, o2) : void 0, c2 = f === void 0;
  if (c2) {
    var d2 = S(u2), g2 = !d2 && te$1(u2), m2 = !d2 && !g2 && Re$1(u2);
    f = u2, d2 || g2 || m2 ? S(s2) ? f = s2 : tt$1(s2) ? f = sr(s2) : g2 ? (c2 = false, f = Tr(u2, true)) : m2 ? (c2 = false, f = $r(u2, true)) : f = [] : ys(u2) || ee$1(u2) ? (f = s2, ee$1(s2) ? f = kl(s2) : (!I(s2) || it$1(s2)) && (f = Pr(u2))) : c2 = false;
  }
  c2 && (o2.set(u2, f), a2(f, u2, n2, i2, o2), o2.delete(u2)), et$2(e2, r2, f);
}
function Lr(e2, t2, r2, n2, a2) {
  e2 !== t2 && Xl(t2, function(i2, o2) {
    if (a2 || (a2 = new M$1()), I(i2))
      Kl(e2, t2, o2, r2, Lr, n2, a2);
    else {
      var s2 = n2 ? n2(rt$1(e2, o2), i2, o2 + "", e2, t2, a2) : void 0;
      s2 === void 0 && (s2 = i2), et$2(e2, o2, s2);
    }
  }, be$1);
}
function Vl(e2, t2, r2) {
  for (var n2 = -1, a2 = e2 == null ? 0 : e2.length; ++n2 < a2; )
    if (r2(t2, e2[n2]))
      return true;
  return false;
}
function Zl(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
var ac = Ei$1(function(e2, t2, r2) {
  Lr(e2, t2, r2);
});
const h = ac;
var ic = 1 / 0, oc = J$1 && 1 / pt$1(new J$1([, -0]))[1] == ic ? function(e2) {
  return new J$1(e2);
} : si$1;
const sc = oc;
var uc = 200;
function Fr(e2, t2, r2) {
  var n2 = -1, a2 = Oi$1, i2 = e2.length, o2 = true, s2 = [], u2 = s2;
  if (r2)
    o2 = false, a2 = Vl;
  else if (i2 >= uc) {
    var l2 = t2 ? null : sc(e2);
    if (l2)
      return pt$1(l2);
    o2 = false, a2 = Ar, u2 = new me$1();
  } else
    u2 = t2 ? [] : s2;
  e:
    for (; ++n2 < i2; ) {
      var f = e2[n2], c2 = t2 ? t2(f) : f;
      if (f = r2 || f !== 0 ? f : 0, o2 && c2 === c2) {
        for (var d2 = u2.length; d2--; )
          if (u2[d2] === c2)
            continue e;
        t2 && u2.push(c2), s2.push(f);
      } else
        a2(u2, c2, r2) || (u2 !== s2 && u2.push(c2), s2.push(f));
    }
  return s2;
}
lr(function(e2) {
  var t2 = Zl(e2);
  return tt$1(t2) && (t2 = void 0), Fr(yr(e2, 1, tt$1, true), ql(t2));
});
function lf(e2) {
  return e2 && e2.length ? Fr(e2) : [];
}
const fc$1 = "cds", dc = {
  opacity: {
    unselected: 0.05,
    selected: 0.4
  }
}, Rr = {
  circles: {
    fillOpacity: 0.3,
    hover: {
      stroke: "#FFF"
    }
  },
  padding: {
    mainGroup: 4,
    children: 2
  },
  hierarchyLevel: 2
}, bc$1 = {
  opacity: {
    unselected: 0.3,
    selected: 1
  },
  weight: {
    selected: 2,
    unselected: 1
  }
};
({
  height: {
    [K$1.GRAPH_VIEW]: 32,
    [K$1.SLIDER_VIEW]: 10
  },
  spacerHeight: 8,
  handleWidth: 5,
  handleBarWidth: 1,
  handleBarHeight: 12
});
[
  {
    type: rE.RADIUS,
    name: "Radius"
  },
  {
    type: rE.AREA,
    name: "Poor area"
  },
  {
    type: rE.AREA,
    name: "Satisfactory area"
  },
  {
    type: rE.AREA,
    name: "Great area"
  },
  {
    type: rE.QUARTILE,
    name: "Quartiles"
  }
];
const Z$1 = {
  type: h$1.END_LINE,
  threshold: 16,
  numCharacter: 14
}, Ac = {
  enabled: true,
  position: P$1.BOTTOM,
  clickable: true,
  truncation: Z$1,
  alignment: k$2.LEFT,
  order: null,
  additionalItems: []
}, Nr = {
  x: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 15,
    alignWithAxisTicks: false
  },
  y: {
    // set enable to false will not draw grid and stroke of grid backdrop
    enabled: true,
    numberOfTicks: 5,
    alignWithAxisTicks: false
  }
}, Wr = {
  // enable or disable ruler
  enabled: true
}, yt$2 = {
  enabled: true,
  showTotal: true,
  truncation: Z$1,
  groupLabel: "Group"
}, jr = {
  top: {
    visible: true,
    includeZero: true,
    truncation: Z$1
  },
  bottom: {
    visible: true,
    includeZero: true,
    truncation: Z$1
  },
  left: {
    visible: true,
    includeZero: true,
    truncation: Z$1
  },
  right: {
    visible: true,
    includeZero: true,
    truncation: Z$1
  }
}, we$1 = {
  addSpaceOnEdges: 1,
  showDayName: false,
  localeObject: nr,
  timeIntervalFormats: {
    "15seconds": { primary: "MMM d, pp", secondary: "pp" },
    minute: { primary: "MMM d, p", secondary: "p" },
    "30minutes": { primary: "MMM d, p", secondary: "p" },
    hourly: { primary: "MMM d, hh a", secondary: "hh a" },
    daily: { primary: "MMM d", secondary: "d" },
    weekly: { primary: "eee, MMM d", secondary: "eee" },
    monthly: { primary: "MMM yyyy", secondary: "MMM" },
    quarterly: { primary: "QQQ ''yy", secondary: "QQQ" },
    yearly: { primary: "yyyy", secondary: "yyyy" }
  }
}, Ec = typeof document < "u" && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled), _ = {
  width: null,
  height: null,
  resizable: true,
  theme: g$1.WHITE,
  tooltip: yt$2,
  legend: Ac,
  style: {
    prefix: "cc"
  },
  data: {
    groupMapsTo: "group",
    loading: false,
    selectedGroups: []
  },
  color: {
    scale: null,
    pairing: {
      numberOfVariants: null,
      option: 1
    },
    gradient: {
      enabled: false
    }
  },
  toolbar: {
    enabled: true,
    numberOfIcons: 3,
    controls: [
      {
        type: y$1.SHOW_AS_DATATABLE
      },
      ...Ec ? [
        {
          type: y$1.MAKE_FULLSCREEN
        }
      ] : [],
      {
        type: y$1.EXPORT_CSV
      },
      {
        type: y$1.EXPORT_PNG
      },
      {
        type: y$1.EXPORT_JPG
      }
    ]
  }
}, Yr = h({}, _, {
  thematic: {
    projection: uE.geoNaturalEarth1
  }
}), Te$1 = h({}, _, {
  axes: jr,
  timeScale: we$1,
  grid: Nr,
  ruler: Wr,
  zoomBar: {
    zoomRatio: 0.4,
    minZoomRatio: 0.01,
    top: {
      enabled: false,
      type: K$1.GRAPH_VIEW
    }
  }
}), q$1 = h({}, Te$1, {
  bars: {
    maxWidth: 16,
    spacingFactor: 0.25
  },
  timeScale: h(we$1, {
    addSpaceOnEdges: 1
  })
});
h({}, q$1, {});
h({}, q$1, {});
h({}, q$1, {
  bars: h({}, q$1.bars, {
    dividerSize: 1.5
  })
});
h({}, q$1, {});
const bt$1 = h({}, Te$1, {
  points: {
    // default point radius to 4
    radius: 4,
    fillOpacity: 0.3,
    filled: true,
    enabled: true
  }
}), Gr = h({}, bt$1, {
  points: {
    // default point radius to 3
    radius: 3,
    filled: false,
    enabled: true
  }
});
h({}, Gr, {
  timeScale: h(we$1, {
    addSpaceOnEdges: 0
  })
});
h({}, Te$1, {
  bubble: {
    radiusMapsTo: "radius",
    radiusLabel: "Radius",
    radiusRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 3 / 400, t2 * 25 / 400];
    },
    fillOpacity: 0.2,
    enabled: true
  },
  points: {
    filled: true
  },
  legend: {
    additionalItems: [
      {
        type: rE.RADIUS,
        name: "Radius"
      }
    ]
  }
});
h({}, Te$1, {
  bullet: {
    performanceAreaTitles: ["Poor", "Satisfactory", "Great"]
  },
  grid: {
    x: {
      enabled: false
    },
    y: {
      enabled: false
    }
  },
  legend: {
    additionalItems: [
      {
        type: rE.AREA,
        name: "Poor area"
      },
      {
        type: rE.AREA,
        name: "Satisfactory area"
      },
      {
        type: rE.AREA,
        name: "Great area"
      },
      {
        type: rE.QUARTILE,
        name: "Quartiles"
      }
    ]
  }
});
h({}, q$1, {
  bars: {
    dividerSize: 1.5
  },
  timeScale: h(we$1, {
    addSpaceOnEdges: 0
  })
});
h({}, _, {
  tooltip: h({}, yt$2, {
    wordLabel: "Word",
    valueLabel: "Value"
  }),
  wordCloud: {
    fontSizeMapsTo: "value",
    fontSizeRange: (e2) => {
      const t2 = Math.min(e2.width, e2.height);
      return [t2 * 20 / 400, t2 * 75 / 400];
    },
    wordMapsTo: "word"
  }
});
const Hr = h({}, _, {
  pie: {
    labels: {
      formatter: null,
      enabled: true
    },
    alignment: k$2.LEFT,
    sortFunction: null,
    valueMapsTo: "value"
  }
});
h({}, _, {
  legend: {
    enabled: false
  },
  gauge: {
    type: Q$2.SEMI,
    arcWidth: 16,
    deltaArrow: {
      size: (e2) => e2 / 8,
      enabled: true
    },
    showPercentageSymbol: true,
    status: null,
    numberSpacing: 10,
    deltaFontSize: (e2) => e2 / 8,
    valueFontSize: (e2) => e2 / 2.5,
    numberFormatter: (e2) => Number(e2.toFixed(2)) % 1 !== 0 ? e2.toFixed(2).toLocaleString() : e2.toFixed().toLocaleString(),
    alignment: k$2.LEFT
  }
});
h({}, Hr, {
  donut: {
    center: {
      numberFontSize: (e2) => `${Math.min(e2 / 100 * 24, 24)}px`,
      titleFontSize: (e2) => `${Math.min(e2 / 100 * 15, 15)}px`,
      titleYPosition: (e2) => Math.min(e2 / 80 * 20, 20),
      numberFormatter: (e2) => Math.floor(e2).toLocaleString()
    },
    alignment: k$2.LEFT
  }
});
const qr = h({}, _, {
  legend: {
    enabled: false,
    clickable: false
  },
  meter: {
    showLabels: true,
    proportional: null,
    statusBar: {
      percentageIndicator: {
        enabled: true
      }
    }
  }
});
h({}, qr, {
  legend: {
    enabled: true
  }
});
h({}, _, {
  radar: {
    axes: {
      angle: "key",
      value: "value"
    },
    alignment: k$2.LEFT
  },
  tooltip: {
    gridline: {
      enabled: true
    },
    valueFormatter: (e2) => e2 ?? "N/A"
  }
});
h({}, q$1, {
  comboChartTypes: []
});
h(
  {
    tree: {
      type: X$2.TREE
    }
  },
  _,
  {}
);
h({}, _, {
  data: h(_.data, {
    groupMapsTo: "name"
  })
});
h({}, _, Rr, {
  data: h(_.data, {
    groupMapsTo: "name"
  })
});
h({}, _, {
  alluvial: {
    data: h(_.data, {
      groupMapsTo: "source"
    }),
    nodeAlignment: k$2.CENTER,
    nodePadding: 24,
    monochrome: false,
    nodes: []
  }
});
h({}, _, {
  axes: jr,
  heatmap: {
    divider: {
      state: OE.AUTO
    },
    colorLegend: {
      type: "linear"
    }
  }
});
h({}, Yr, {
  choropleth: {
    colorLegend: {
      type: "linear"
    }
  }
});
function ff(e2, t2, r2) {
  let n2 = null;
  return function(...a2) {
    const i2 = this;
    i2.mousePosition = pointer(a2[0], r2), clearTimeout(n2), n2 = setTimeout(function() {
      e2.apply(i2, a2);
    }, t2);
  };
}
const G = (e2, ...t2) => {
  let r2 = e2;
  if (r2) {
    for (const n2 of t2)
      if (r2[n2] !== null && r2[n2] !== void 0)
        r2 = r2[n2];
      else
        return null;
    return r2;
  }
  return null;
}, tf = (e2, t2) => t2 === F$2.HORIZONTAL ? {
  y0: e2.x0,
  y1: e2.x1,
  x0: e2.y0,
  x1: e2.y1
} : e2, vf = (e2, t2) => {
  const { x0: r2, x1: n2, y0: a2, y1: i2 } = tf(e2, t2);
  return `M${r2},${a2}L${r2},${i2}L${n2},${i2}L${n2},${a2}L${r2},${a2}`;
};
function yf(e2, t2, r2) {
  return r2 === F$2.VERTICAL ? [e2, t2] : [t2, e2];
}
var r = /* @__PURE__ */ ((c2) => (c2.GRAPHICS_DOCUMENT = "graphics-document", c2.GRAPHICS_OBJECT = "graphics-object", c2.GRAPHICS_SYMBOL = "graphics-symbol", c2.GROUP = "group", c2.DOCUMENT = "document", c2.CHECKBOX = "checkbox", c2.BUTTON = "button", c2.MENU = "menu", c2.MENU_ITEM = "menuitem", c2.IMG = "img", c2))(r || {});
function i(a2, e2) {
  return a2 && Xl(a2, e2, Ue$1);
}
function k$1(a2, e2) {
  return function(r2, n2) {
    if (r2 == null)
      return r2;
    if (!ye$1(r2))
      return a2(r2, n2);
    for (var u2 = r2.length, s2 = e2 ? u2 : -1, b2 = Object(r2); (e2 ? s2-- : ++s2 < u2) && n2(b2[s2], s2, b2) !== false; )
      ;
    return r2;
  };
}
var E = k$1(i);
const v$1 = E;
var me = /\s/;
function ge(t2) {
  for (var e2 = t2.length; e2-- && me.test(t2.charAt(e2)); )
    ;
  return e2;
}
var pe = /^\s+/;
function ye(t2) {
  return t2 && t2.slice(0, ge(t2) + 1).replace(pe, "");
}
var q = 0 / 0, we = /^[-+]0x[0-9a-f]+$/i, Se = /^0b[01]+$/i, Ee = /^0o[0-7]+$/i, be = parseInt;
function j(t2) {
  if (typeof t2 == "number")
    return t2;
  if (nt$1(t2))
    return q;
  if (I(t2)) {
    var e2 = typeof t2.valueOf == "function" ? t2.valueOf() : t2;
    t2 = I(e2) ? e2 + "" : e2;
  }
  if (typeof t2 != "string")
    return t2 === 0 ? t2 : +t2;
  t2 = ye(t2);
  var n2 = Se.test(t2);
  return n2 || Ee.test(t2) ? be(t2.slice(2), n2 ? 2 : 8) : we.test(t2) ? q : +t2;
}
var xe = function() {
  return D$1.Date.now();
};
const M = xe;
var Re = "Expected a function", Ce = Math.max, Te = Math.min;
function Ie(t2, e2, n2) {
  var r2, i2, s2, a2, c2, o2, u2 = 0, f = false, d2 = false, h2 = true;
  if (typeof t2 != "function")
    throw new TypeError(Re);
  e2 = j(e2) || 0, I(n2) && (f = !!n2.leading, d2 = "maxWait" in n2, s2 = d2 ? Ce(j(n2.maxWait) || 0, e2) : s2, h2 = "trailing" in n2 ? !!n2.trailing : h2);
  function w2(l2) {
    var S2 = r2, C2 = i2;
    return r2 = i2 = void 0, u2 = l2, a2 = t2.apply(C2, S2), a2;
  }
  function R2(l2) {
    return u2 = l2, c2 = setTimeout(L2, e2), f ? w2(l2) : a2;
  }
  function I$12(l2) {
    var S2 = l2 - o2, C2 = l2 - u2, U2 = e2 - S2;
    return d2 ? Te(U2, s2 - C2) : U2;
  }
  function z2(l2) {
    var S2 = l2 - o2, C2 = l2 - u2;
    return o2 === void 0 || S2 >= e2 || S2 < 0 || d2 && C2 >= s2;
  }
  function L2() {
    var l2 = M();
    if (z2(l2))
      return G2(l2);
    c2 = setTimeout(L2, I$12(l2));
  }
  function G2(l2) {
    return c2 = void 0, h2 && r2 ? w2(l2) : (r2 = i2 = void 0, a2);
  }
  function ue2() {
    c2 !== void 0 && clearTimeout(c2), u2 = 0, r2 = o2 = i2 = c2 = void 0;
  }
  function he2() {
    return c2 === void 0 ? a2 : G2(M());
  }
  function $() {
    var l2 = M(), S2 = z2(l2);
    if (r2 = arguments, i2 = this, o2 = l2, S2) {
      if (c2 === void 0)
        return R2(o2);
      if (d2)
        return clearTimeout(c2), c2 = setTimeout(L2, e2), w2(o2);
    }
    return c2 === void 0 && (c2 = setTimeout(L2, e2)), a2;
  }
  return $.cancel = ue2, $.flush = he2, $;
}
function Le(t2, e2) {
  if (t2.match(/^[a-z]+:\/\//i))
    return t2;
  if (t2.match(/^\/\//))
    return window.location.protocol + t2;
  if (t2.match(/^[a-z]+:/i))
    return t2;
  const n2 = document.implementation.createHTMLDocument(), r2 = n2.createElement("base"), i2 = n2.createElement("a");
  return n2.head.appendChild(r2), n2.body.appendChild(i2), e2 && (r2.href = e2), i2.href = t2, i2.href;
}
const De$1 = (() => {
  let t2 = 0;
  const e2 = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t2 += 1, `u${e2()}${t2}`);
})();
function y(t2) {
  const e2 = [];
  for (let n2 = 0, r2 = t2.length; n2 < r2; n2++)
    e2.push(t2[n2]);
  return e2;
}
function v(t2, e2) {
  const r2 = (t2.ownerDocument.defaultView || window).getComputedStyle(t2).getPropertyValue(e2);
  return r2 ? parseFloat(r2.replace("px", "")) : 0;
}
function ve(t2) {
  const e2 = v(t2, "border-left-width"), n2 = v(t2, "border-right-width");
  return t2.clientWidth + e2 + n2;
}
function Ae(t2) {
  const e2 = v(t2, "border-top-width"), n2 = v(t2, "border-bottom-width");
  return t2.clientHeight + e2 + n2;
}
function ee(t2, e2 = {}) {
  const n2 = e2.width || ve(t2), r2 = e2.height || Ae(t2);
  return { width: n2, height: r2 };
}
function Fe() {
  let t2, e2;
  try {
    e2 = process;
  } catch {
  }
  const n2 = e2 && e2.env ? e2.env.devicePixelRatio : null;
  return n2 && (t2 = parseInt(n2, 10), Number.isNaN(t2) && (t2 = 1)), t2 || window.devicePixelRatio || 1;
}
const p = 16384;
function $e(t2) {
  (t2.width > p || t2.height > p) && (t2.width > p && t2.height > p ? t2.width > t2.height ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p) : t2.width > p ? (t2.height *= p / t2.width, t2.width = p) : (t2.width *= p / t2.height, t2.height = p));
}
function A(t2) {
  return new Promise((e2, n2) => {
    const r2 = new Image();
    r2.decode = () => e2(r2), r2.onload = () => e2(r2), r2.onerror = n2, r2.crossOrigin = "anonymous", r2.decoding = "async", r2.src = t2;
  });
}
async function Pe(t2) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t2)).then(encodeURIComponent).then((e2) => `data:image/svg+xml;charset=utf-8,${e2}`);
}
async function Me$1(t2, e2, n2) {
  const r2 = "http://www.w3.org/2000/svg", i2 = document.createElementNS(r2, "svg"), s2 = document.createElementNS(r2, "foreignObject");
  return i2.setAttribute("width", `${e2}`), i2.setAttribute("height", `${n2}`), i2.setAttribute("viewBox", `0 0 ${e2} ${n2}`), s2.setAttribute("width", "100%"), s2.setAttribute("height", "100%"), s2.setAttribute("x", "0"), s2.setAttribute("y", "0"), s2.setAttribute("externalResourcesRequired", "true"), i2.appendChild(s2), s2.appendChild(t2), Pe(i2);
}
const g = (t2, e2) => {
  if (t2 instanceof e2)
    return true;
  const n2 = Object.getPrototypeOf(t2);
  return n2 === null ? false : n2.constructor.name === e2.name || g(n2, e2);
};
function He(t2) {
  const e2 = t2.getPropertyValue("content");
  return `${t2.cssText} content: '${e2.replace(/'|"/g, "")}';`;
}
function Oe(t2) {
  return y(t2).map((e2) => {
    const n2 = t2.getPropertyValue(e2), r2 = t2.getPropertyPriority(e2);
    return `${e2}: ${n2}${r2 ? " !important" : ""};`;
  }).join(" ");
}
function Be$1(t2, e2, n2) {
  const r2 = `.${t2}:${e2}`, i2 = n2.cssText ? He(n2) : Oe(n2);
  return document.createTextNode(`${r2}{${i2}}`);
}
function N(t2, e2, n2) {
  const r2 = window.getComputedStyle(t2, n2), i2 = r2.getPropertyValue("content");
  if (i2 === "" || i2 === "none")
    return;
  const s2 = De$1();
  try {
    e2.className = `${e2.className} ${s2}`;
  } catch {
    return;
  }
  const a2 = document.createElement("style");
  a2.appendChild(Be$1(s2, n2, r2)), e2.appendChild(a2);
}
function ke(t2, e2) {
  N(t2, e2, ":before"), N(t2, e2, ":after");
}
const X = "application/font-woff", J = "image/jpeg", Ve = {
  woff: X,
  woff2: X,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: J,
  jpeg: J,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function We$1(t2) {
  const e2 = /\.([^./]*?)$/g.exec(t2);
  return e2 ? e2[1] : "";
}
function V(t2) {
  const e2 = We$1(t2).toLowerCase();
  return Ve[e2] || "";
}
function ze(t2) {
  return t2.split(/,/)[1];
}
function B(t2) {
  return t2.search(/^(data:)/) !== -1;
}
function te(t2, e2) {
  return `data:${e2};base64,${t2}`;
}
async function ne$1(t2, e2, n2) {
  const r2 = await fetch(t2, e2);
  if (r2.status === 404)
    throw new Error(`Resource "${r2.url}" not found`);
  const i2 = await r2.blob();
  return new Promise((s2, a2) => {
    const c2 = new FileReader();
    c2.onerror = a2, c2.onloadend = () => {
      try {
        s2(n2({ res: r2, result: c2.result }));
      } catch (o2) {
        a2(o2);
      }
    }, c2.readAsDataURL(i2);
  });
}
const H = {};
function Ge(t2, e2, n2) {
  let r2 = t2.replace(/\?.*/, "");
  return n2 && (r2 = t2), /ttf|otf|eot|woff2?/i.test(r2) && (r2 = r2.replace(/.*\//, "")), e2 ? `[${e2}]${r2}` : r2;
}
async function W(t2, e2, n2) {
  const r2 = Ge(t2, e2, n2.includeQueryParams);
  if (H[r2] != null)
    return H[r2];
  n2.cacheBust && (t2 += (/\?/.test(t2) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i2;
  try {
    const s2 = await ne$1(t2, n2.fetchRequestInit, ({ res: a2, result: c2 }) => (e2 || (e2 = a2.headers.get("Content-Type") || ""), ze(c2)));
    i2 = te(s2, e2);
  } catch (s2) {
    i2 = n2.imagePlaceholder || "";
    let a2 = `Failed to fetch resource: ${t2}`;
    s2 && (a2 = typeof s2 == "string" ? s2 : s2.message), a2 && console.warn(a2);
  }
  return H[r2] = i2, i2;
}
async function Ue(t2) {
  const e2 = t2.toDataURL();
  return e2 === "data:," ? t2.cloneNode(false) : A(e2);
}
async function _e(t2, e2) {
  if (t2.currentSrc) {
    const s2 = document.createElement("canvas"), a2 = s2.getContext("2d");
    s2.width = t2.clientWidth, s2.height = t2.clientHeight, a2 == null || a2.drawImage(t2, 0, 0, s2.width, s2.height);
    const c2 = s2.toDataURL();
    return A(c2);
  }
  const n2 = t2.poster, r2 = V(n2), i2 = await W(n2, r2, e2);
  return A(i2);
}
async function qe$1(t2) {
  var e2;
  try {
    if (!((e2 = t2 == null ? void 0 : t2.contentDocument) === null || e2 === void 0) && e2.body)
      return await F(t2.contentDocument.body, {}, true);
  } catch {
  }
  return t2.cloneNode(false);
}
async function je(t2, e2) {
  return g(t2, HTMLCanvasElement) ? Ue(t2) : g(t2, HTMLVideoElement) ? _e(t2, e2) : g(t2, HTMLIFrameElement) ? qe$1(t2) : t2.cloneNode(false);
}
const Ne = (t2) => t2.tagName != null && t2.tagName.toUpperCase() === "SLOT";
async function Xe$1(t2, e2, n2) {
  var r2, i2;
  let s2 = [];
  return Ne(t2) && t2.assignedNodes ? s2 = y(t2.assignedNodes()) : g(t2, HTMLIFrameElement) && (!((r2 = t2.contentDocument) === null || r2 === void 0) && r2.body) ? s2 = y(t2.contentDocument.body.childNodes) : s2 = y(((i2 = t2.shadowRoot) !== null && i2 !== void 0 ? i2 : t2).childNodes), s2.length === 0 || g(t2, HTMLVideoElement) || await s2.reduce((a2, c2) => a2.then(() => F(c2, n2)).then((o2) => {
    o2 && e2.appendChild(o2);
  }), Promise.resolve()), e2;
}
function Je(t2, e2) {
  const n2 = e2.style;
  if (!n2)
    return;
  const r2 = window.getComputedStyle(t2);
  r2.cssText ? (n2.cssText = r2.cssText, n2.transformOrigin = r2.transformOrigin) : y(r2).forEach((i2) => {
    let s2 = r2.getPropertyValue(i2);
    i2 === "font-size" && s2.endsWith("px") && (s2 = `${Math.floor(parseFloat(s2.substring(0, s2.length - 2))) - 0.1}px`), g(t2, HTMLIFrameElement) && i2 === "display" && s2 === "inline" && (s2 = "block"), i2 === "d" && e2.getAttribute("d") && (s2 = `path(${e2.getAttribute("d")})`), n2.setProperty(i2, s2, r2.getPropertyPriority(i2));
  });
}
function Qe(t2, e2) {
  g(t2, HTMLTextAreaElement) && (e2.innerHTML = t2.value), g(t2, HTMLInputElement) && e2.setAttribute("value", t2.value);
}
function Ye$1(t2, e2) {
  if (g(t2, HTMLSelectElement)) {
    const n2 = e2, r2 = Array.from(n2.children).find((i2) => t2.value === i2.getAttribute("value"));
    r2 && r2.setAttribute("selected", "");
  }
}
function Ze$1(t2, e2) {
  return g(e2, Element) && (Je(t2, e2), ke(t2, e2), Qe(t2, e2), Ye$1(t2, e2)), e2;
}
async function Ke$1(t2, e2) {
  const n2 = t2.querySelectorAll ? t2.querySelectorAll("use") : [];
  if (n2.length === 0)
    return t2;
  const r2 = {};
  for (let s2 = 0; s2 < n2.length; s2++) {
    const c2 = n2[s2].getAttribute("xlink:href");
    if (c2) {
      const o2 = t2.querySelector(c2), u2 = document.querySelector(c2);
      !o2 && u2 && !r2[c2] && (r2[c2] = await F(u2, e2, true));
    }
  }
  const i2 = Object.values(r2);
  if (i2.length) {
    const s2 = "http://www.w3.org/1999/xhtml", a2 = document.createElementNS(s2, "svg");
    a2.setAttribute("xmlns", s2), a2.style.position = "absolute", a2.style.width = "0", a2.style.height = "0", a2.style.overflow = "hidden", a2.style.display = "none";
    const c2 = document.createElementNS(s2, "defs");
    a2.appendChild(c2);
    for (let o2 = 0; o2 < i2.length; o2++)
      c2.appendChild(i2[o2]);
    t2.appendChild(a2);
  }
  return t2;
}
async function F(t2, e2, n2) {
  return !n2 && e2.filter && !e2.filter(t2) ? null : Promise.resolve(t2).then((r2) => je(r2, e2)).then((r2) => Xe$1(t2, r2, e2)).then((r2) => Ze$1(t2, r2)).then((r2) => Ke$1(r2, e2));
}
const re = /url\((['"]?)([^'"]+?)\1\)/g, et$1 = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, tt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function nt(t2) {
  const e2 = t2.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e2})(['"]?\\))`, "g");
}
function rt(t2) {
  const e2 = [];
  return t2.replace(re, (n2, r2, i2) => (e2.push(i2), n2)), e2.filter((n2) => !B(n2));
}
async function it(t2, e2, n2, r2, i2) {
  try {
    const s2 = n2 ? Le(e2, n2) : e2, a2 = V(e2);
    let c2;
    if (i2) {
      const o2 = await i2(s2);
      c2 = te(o2, a2);
    } else
      c2 = await W(s2, a2, r2);
    return t2.replace(nt(e2), `$1${c2}$3`);
  } catch {
  }
  return t2;
}
function st(t2, { preferredFontFormat: e2 }) {
  return e2 ? t2.replace(tt, (n2) => {
    for (; ; ) {
      const [r2, , i2] = et$1.exec(n2) || [];
      if (!i2)
        return "";
      if (i2 === e2)
        return `src: ${r2};`;
    }
  }) : t2;
}
function ie(t2) {
  return t2.search(re) !== -1;
}
async function se(t2, e2, n2) {
  if (!ie(t2))
    return t2;
  const r2 = st(t2, n2);
  return rt(r2).reduce((s2, a2) => s2.then((c2) => it(c2, a2, e2, n2)), Promise.resolve(r2));
}
async function D(t2, e2, n2) {
  var r2;
  const i2 = (r2 = e2.style) === null || r2 === void 0 ? void 0 : r2.getPropertyValue(t2);
  if (i2) {
    const s2 = await se(i2, null, n2);
    return e2.style.setProperty(t2, s2, e2.style.getPropertyPriority(t2)), true;
  }
  return false;
}
async function at(t2, e2) {
  await D("background", t2, e2) || await D("background-image", t2, e2), await D("mask", t2, e2) || await D("mask-image", t2, e2);
}
async function ct(t2, e2) {
  const n2 = g(t2, HTMLImageElement);
  if (!(n2 && !B(t2.src)) && !(g(t2, SVGImageElement) && !B(t2.href.baseVal)))
    return;
  const r2 = n2 ? t2.src : t2.href.baseVal, i2 = await W(r2, V(r2), e2);
  await new Promise((s2, a2) => {
    t2.onload = s2, t2.onerror = a2;
    const c2 = t2;
    c2.decode && (c2.decode = s2), c2.loading === "lazy" && (c2.loading = "eager"), n2 ? (t2.srcset = "", t2.src = i2) : t2.href.baseVal = i2;
  });
}
async function ot(t2, e2) {
  const r2 = y(t2.childNodes).map((i2) => ae(i2, e2));
  await Promise.all(r2).then(() => t2);
}
async function ae(t2, e2) {
  g(t2, Element) && (await at(t2, e2), await ct(t2, e2), await ot(t2, e2));
}
function lt(t2, e2) {
  const { style: n2 } = t2;
  e2.backgroundColor && (n2.backgroundColor = e2.backgroundColor), e2.width && (n2.width = `${e2.width}px`), e2.height && (n2.height = `${e2.height}px`);
  const r2 = e2.style;
  return r2 != null && Object.keys(r2).forEach((i2) => {
    n2[i2] = r2[i2];
  }), t2;
}
const Q = {};
async function Y(t2) {
  let e2 = Q[t2];
  if (e2 != null)
    return e2;
  const r2 = await (await fetch(t2)).text();
  return e2 = { url: t2, cssText: r2 }, Q[t2] = e2, e2;
}
async function Z(t2, e2) {
  let n2 = t2.cssText;
  const r2 = /url\(["']?([^"')]+)["']?\)/g, s2 = (n2.match(/url\([^)]+\)/g) || []).map(async (a2) => {
    let c2 = a2.replace(r2, "$1");
    return c2.startsWith("https://") || (c2 = new URL(c2, t2.url).href), ne$1(c2, e2.fetchRequestInit, ({ result: o2 }) => (n2 = n2.replace(a2, `url(${o2})`), [a2, o2]));
  });
  return Promise.all(s2).then(() => n2);
}
function K(t2) {
  if (t2 == null)
    return [];
  const e2 = [], n2 = /(\/\*[\s\S]*?\*\/)/gi;
  let r2 = t2.replace(n2, "");
  const i2 = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o2 = i2.exec(r2);
    if (o2 === null)
      break;
    e2.push(o2[0]);
  }
  r2 = r2.replace(i2, "");
  const s2 = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a2 = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", c2 = new RegExp(a2, "gi");
  for (; ; ) {
    let o2 = s2.exec(r2);
    if (o2 === null) {
      if (o2 = c2.exec(r2), o2 === null)
        break;
      s2.lastIndex = c2.lastIndex;
    } else
      c2.lastIndex = s2.lastIndex;
    e2.push(o2[0]);
  }
  return e2;
}
async function ut(t2, e2) {
  const n2 = [], r2 = [];
  return t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2, a2) => {
          if (s2.type === CSSRule.IMPORT_RULE) {
            let c2 = a2 + 1;
            const o2 = s2.href, u2 = Y(o2).then((f) => Z(f, e2)).then((f) => K(f).forEach((d2) => {
              try {
                i2.insertRule(d2, d2.startsWith("@import") ? c2 += 1 : i2.cssRules.length);
              } catch (h2) {
                console.error("Error inserting rule from remote css", {
                  rule: d2,
                  error: h2
                });
              }
            })).catch((f) => {
              console.error("Error loading remote css", f.toString());
            });
            r2.push(u2);
          }
        });
      } catch (s2) {
        const a2 = t2.find((c2) => c2.href == null) || document.styleSheets[0];
        i2.href != null && r2.push(Y(i2.href).then((c2) => Z(c2, e2)).then((c2) => K(c2).forEach((o2) => {
          a2.insertRule(o2, i2.cssRules.length);
        })).catch((c2) => {
          console.error("Error loading remote stylesheet", c2);
        })), console.error("Error inlining remote css file", s2);
      }
  }), Promise.all(r2).then(() => (t2.forEach((i2) => {
    if ("cssRules" in i2)
      try {
        y(i2.cssRules || []).forEach((s2) => {
          n2.push(s2);
        });
      } catch (s2) {
        console.error(`Error while reading CSS rules from ${i2.href}`, s2);
      }
  }), n2));
}
function ht$1(t2) {
  return t2.filter((e2) => e2.type === CSSRule.FONT_FACE_RULE).filter((e2) => ie(e2.style.getPropertyValue("src")));
}
async function ft$1(t2, e2) {
  if (t2.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n2 = y(t2.ownerDocument.styleSheets), r2 = await ut(n2, e2);
  return ht$1(r2);
}
async function dt(t2, e2) {
  const n2 = await ft$1(t2, e2);
  return (await Promise.all(n2.map((i2) => {
    const s2 = i2.parentStyleSheet ? i2.parentStyleSheet.href : null;
    return se(i2.cssText, s2, e2);
  }))).join(`
`);
}
async function mt(t2, e2) {
  const n2 = e2.fontEmbedCSS != null ? e2.fontEmbedCSS : e2.skipFonts ? null : await dt(t2, e2);
  if (n2) {
    const r2 = document.createElement("style"), i2 = document.createTextNode(n2);
    r2.appendChild(i2), t2.firstChild ? t2.insertBefore(r2, t2.firstChild) : t2.appendChild(r2);
  }
}
async function gt(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee(t2, e2), i2 = await F(t2, e2, true);
  return await mt(i2, e2), await ae(i2, e2), lt(i2, e2), await Me$1(i2, n2, r2);
}
async function ce(t2, e2 = {}) {
  const { width: n2, height: r2 } = ee(t2, e2), i2 = await gt(t2, e2), s2 = await A(i2), a2 = document.createElement("canvas"), c2 = a2.getContext("2d"), o2 = e2.pixelRatio || Fe(), u2 = e2.canvasWidth || n2, f = e2.canvasHeight || r2;
  return a2.width = u2 * o2, a2.height = f * o2, e2.skipAutoScale || $e(a2), a2.style.width = `${u2}`, a2.style.height = `${f}`, e2.backgroundColor && (c2.fillStyle = e2.backgroundColor, c2.fillRect(0, 0, a2.width, a2.height)), c2.drawImage(s2, 0, 0, a2.width, a2.height), a2;
}
async function pt(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL();
}
async function yt$1(t2, e2 = {}) {
  return (await ce(t2, e2)).toDataURL("image/jpeg", e2.quality || 1);
}
class oe {
  constructor(e2, n2) {
    this.model = e2, this.services = n2, this.init();
  }
  init() {
  }
  update() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down services to the components
  setServices(e2) {
    this.services = e2;
  }
}
const wt$1 = "DONT_STYLE_ME_css_styles_verifier";
class k extends oe {
  // initialized in initializeID() called by init()
  constructor(e2, n2) {
    super(e2, n2), this.chartID = "";
  }
  static getHTMLElementSize(e2) {
    return {
      width: e2.clientWidth,
      height: e2.clientHeight
    };
  }
  static getSVGElementSize(e2, n2 = {
    useAttrs: false,
    useClientDimensions: false,
    useBBox: false,
    useBoundingRect: false
  }) {
    e2.attr || (e2 = select(e2));
    const r2 = {
      width: 0,
      height: 0
    }, i2 = (h2) => {
      h2 && Object.keys(r2).forEach((w2) => {
        if (h2[w2]) {
          const R2 = h2[w2], I2 = parseFloat(R2);
          R2 && I2 > r2[w2] && ("" + R2).indexOf("%") === -1 && (r2[w2] = I2);
        }
      });
    }, s2 = {
      width: e2.attr("width"),
      height: e2.attr("height")
    }, a2 = e2.node();
    let c2, o2, u2, f;
    try {
      typeof a2.getBBox == "function" && (c2 = a2.getBBox(), o2 = {
        width: c2.width,
        height: c2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    try {
      typeof (a2 == null ? void 0 : a2.getBoundingClientRect) == "function" && (u2 = a2.getBoundingClientRect(), f = {
        width: u2.width,
        height: u2.height
      });
    } catch (h2) {
      console.error(h2);
    }
    let d2;
    if (a2 instanceof SVGSVGElement && (d2 = {
      width: a2.clientWidth,
      height: a2.clientHeight
    }), n2) {
      if (n2.useAttrs && (i2(s2), r2.width > 0 && r2.height > 0))
        return r2;
      if (n2.useClientDimensions && (i2(d2), r2.width > 0 && r2.height > 0))
        return d2;
      if (n2.useBBox && (i2(o2), r2.width > 0 && r2.height > 0))
        return o2;
      if (n2.useBoundingRect && (i2(f), r2.width > 0 && r2.height > 0))
        return f;
    }
    try {
      const h2 = {
        width: G(e2.node(), "width", "baseVal", "value"),
        height: G(e2.node(), "height", "baseVal", "value")
      };
      i2(h2);
    } catch {
      i2(d2), i2(o2), i2(s2);
    }
    return r2;
  }
  static appendOrSelect(e2, n2) {
    const r2 = e2.select(`${n2}`);
    if (r2.empty()) {
      let i2 = n2.split("#"), s2, a2;
      return i2.length === 2 ? (s2 = i2[0], i2 = i2[1].split("."), a2 = i2[0]) : (i2 = n2.split("."), s2 = i2[0]), e2.append(s2).attr("id", a2).attr("class", i2.slice(1).join(" "));
    }
    return r2;
  }
  init() {
    this.styleHolderElement(), this.initializeID(), this.addMainContainer(), this.model.getOptions().resizable && this.addResizeListener(), this.addHolderListeners(), this.handleFullscreenChange();
  }
  getChartID() {
    return this.chartID;
  }
  generateElementIDString(e2) {
    return `chart-${this.chartID}-${e2}`;
  }
  initializeID() {
    this.chartID = Math.floor((1 + Math.random()) * 281474976710656).toString(16);
  }
  addMainContainer() {
    const e2 = this.model.getOptions(), n2 = G(e2, "style", "prefix"), r2 = select(this.getHolder()).append("div").classed(`${fc$1}--${n2}--chart-wrapper`, true).attr("id", `chart-${this.getChartID()}`).style("height", "100%").style("width", "100%");
    r2.append("g").attr("class", wt$1), this.mainContainer = r2.node();
  }
  update() {
    this.styleHolderElement();
  }
  styleHolderElement() {
    const e2 = this.getHolder(), { width: n2, height: r2, theme: i2 } = this.model.getOptions();
    n2 !== this.width && (e2.style.width = n2, this.width = n2), r2 !== this.height && (e2.style.height = r2, this.height = r2), select(this.getHolder()).classed(`${fc$1}--chart-holder`, true).attr("data-carbon-theme", i2);
  }
  getHolder() {
    return this.model.get("holder");
  }
  exportToJPG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), yt$1(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G(
        n2,
        "fileDownload",
        "fileName"
      );
      typeof c2 == "function" ? a2 = c2("jpg") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.jpg`), i2.classed("filled", false);
    });
  }
  exportToPNG() {
    const e2 = this, n2 = this.model.getOptions(), r2 = this.getHolder(), i2 = select(r2);
    i2.classed("filled", true), pt(this.getMainContainer(), {
      quality: 1,
      // Remove toolbar
      filter: (s2) => !(s2.classList && s2.classList.contains("cds--cc--toolbar"))
    }).then(function(s2) {
      var o2;
      let a2 = "myChart";
      const c2 = G(
        n2,
        "fileDownload",
        "fileName"
      );
      typeof c2 == "function" ? a2 = c2("png") : typeof c2 == "string" && (a2 = c2), (o2 = e2.services.files) == null || o2.downloadImage(s2, `${a2}.png`), i2.classed("filled", false);
    }).catch(function(s2) {
      console.error("oops, something went wrong!", s2);
    });
  }
  toggleFullscreen() {
    const e2 = this.getHolder();
    select(e2).classed("fullscreen") && (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e2.requestFullscreen ? e2.requestFullscreen() : e2.webkitRequestFullscreen ? e2.webkitRequestFullscreen() : e2.mozRequestFullScreen ? e2.mozRequestFullScreen() : e2.msRequestFullscreen && e2.msRequestFullscreen();
  }
  handleFullscreenChange() {
    document.addEventListener("fullscreenchange", () => {
      const e2 = select(this.getHolder()), n2 = e2.classed("fullscreen");
      e2.classed("fullscreen", !n2);
    });
  }
  setSVGMaxHeight() {
    if (!this.model.getOptions().height) {
      const { height: e2 } = k.getSVGElementSize(
        select(this.mainContainer),
        {
          useBBox: true
        }
      ), n2 = select(this.mainContainer).attr("class"), r2 = select(this.mainContainer).selectAll(`.${n2} > svg`);
      let i2 = 0;
      r2.nodes().forEach(function(s2) {
        i2 += Number(
          k.getSVGElementSize(select(s2), {
            useBBox: true
          }).height
        );
      }), i2 <= e2 ? select(this.mainContainer).attr("height", i2) : select(this.mainContainer).attr("height", "100%");
    }
  }
  getMainContainer() {
    return this.mainContainer;
  }
  addHolderListeners() {
    const e2 = this.getHolder();
    e2 && select(e2).on("mouseover", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOVER);
    }).on("mouseout", () => {
      var n2;
      (n2 = this.services.events) == null || n2.dispatchEvent(oE.Chart.MOUSEOUT);
    });
  }
  addResizeListener() {
    const e2 = this.getHolder();
    if (!e2)
      return;
    let n2 = e2.clientWidth, r2 = e2.clientHeight;
    const i2 = Ie(() => {
      var a2;
      e2 && (Math.abs(n2 - e2.clientWidth) > 1 || Math.abs(r2 - e2.clientHeight) > 1) && (n2 = e2.clientWidth, r2 = e2.clientHeight, (a2 = this.services.events) == null || a2.dispatchEvent(oE.Chart.RESIZE));
    }, 12.5);
    new ResizeObserver(i2).observe(e2);
  }
}
class le extends oe {
  static appendOrUpdateLinearGradient(e2) {
    let n2 = e2.svg.select(`defs linearGradient#${e2.id}`);
    n2.empty() && (n2 = e2.svg.append("defs").append("linearGradient").attr("id", e2.id).attr("x1", e2.x1).attr("x2", e2.x2).attr("y1", e2.y1).attr("y2", e2.y2)), n2.selectAll("stop").remove(), n2.selectAll("stop").data(e2.stops).enter().append("stop").attr("offset", (r2) => r2.offset).style("stop-color", (r2) => r2.color).style("stop-opacity", (r2) => r2.opacity);
  }
  static getOffsetRatio(e2) {
    return (Math.abs(e2[1]) * 100 / Math.abs(e2[0] - e2[1])).toFixed(2) + "%";
  }
  static getStops(e2, n2) {
    const r2 = e2[0] < 0 && e2[1] > 0;
    let i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: "80%",
        color: n2,
        opacity: "0"
      }
    ];
    return r2 && (i2 = [
      {
        offset: "0%",
        color: n2,
        opacity: "0.6"
      },
      {
        offset: le.getOffsetRatio(e2),
        color: n2,
        opacity: "0"
      },
      {
        offset: "100%",
        color: n2,
        opacity: "0.6"
      }
    ]), i2;
  }
}
function Gs(o2, e2) {
  return vt$1(o2, e2);
}
function Na(o2, e2) {
  var t2;
  return v$1(o2, function(s2, n2, a2) {
    return t2 = e2(s2, n2, a2), !t2;
  }), !!t2;
}
function Ha(o2, e2, t2) {
  var s2 = S(o2) ? ol : Na;
  return t2 && Ai$1(o2, e2, t2) && (e2 = void 0), s2(o2, ql(e2));
}
class z {
  constructor(e2, t2, s2) {
    if (this.type = "", this.renderType = D$2.HTML, this.id = "", this.parent = void 0, this.configs = {}, this.model = e2, this.services = t2, s2 && (this.configs = s2, this.configs.id)) {
      const n2 = G(this.model.getOptions(), "style", "prefix");
      this.id = `${n2}--${this.configs.id}`;
    }
    this.parent || this.setParent(select(this.services.domUtils.getMainContainer()));
  }
  init() {
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    console.error("Error: Component did not provide the required render function.");
  }
  destroy() {
  }
  // Used to pass down information to the components
  setModel(e2) {
    this.model = e2;
  }
  // Used to pass down information to the components
  setServices(e2) {
    this.services = e2;
  }
  setParent(e2) {
    var s2;
    const t2 = this.parent;
    if (this.parent = e2, !(t2 && t2.node() === e2.node()) && this.type) {
      const n2 = G(this.model.getOptions(), "style", "prefix");
      (s2 = this.parent) == null || s2.classed(`${fc$1}--${n2}--${this.type}`, true), t2 && t2.classed(`${fc$1}--${n2}--${this.type}`, false);
    }
  }
  getParent() {
    return this.parent;
  }
  getComponentContainer(e2 = { withinChartClip: false }) {
    if (this.type) {
      const t2 = G(this.model.getOptions(), "style", "prefix"), s2 = this.id ? `#${this.id}` : "", n2 = k.appendOrSelect(
        this.parent,
        `${this.renderType === D$2.SVG ? "svg" : "div"}${s2}.${fc$1}--${t2}--${this.type}`
      );
      if (e2.withinChartClip) {
        const a2 = this.model.get("chartClipId");
        if (a2) {
          const r2 = select(`#${a2}`).select("rect");
          r2.size() !== 0 && parseFloat(r2.attr("height")) > 0 && n2.attr("clip-path", `url(#${a2})`);
        }
      }
      return n2.attr("width", "100%").attr("height", "100%");
    }
    return this.parent;
  }
  /**
   * graphs used in combo charts share a model with global options but can receive their own local options.
   * this function retrieves the global options and merges it with any options passed into this
   * component's config.options object.
   */
  getOptions() {
    return this.configs.options ? h({}, this.model.getOptions(), this.configs.options) : this.model.getOptions();
  }
}
const Ns = class Hs2 extends z {
  constructor() {
    super(...arguments), this.type = "toolbar", this.renderType = D$2.HTML;
  }
  init() {
    const e2 = () => this.updateOverflowMenu(false);
    this.services.events.addEventListener(oE.Toolbar.SHOW_OVERFLOW_MENU, () => {
      this.renderOverflowMenu(), document.body.addEventListener("click", e2);
    }), this.services.events.addEventListener(oE.Toolbar.HIDE_OVERFLOW_MENU, () => {
      document.body.removeEventListener("click", e2);
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.getComponentContainer().attr("role", "toolbar").attr("aria-label", `chart-${this.services.domUtils.getChartID()} toolbar`);
    if (G(this.getOptions(), "data", "loading"))
      t2.html(""), this.overflowMenu = null;
    else {
      this.overflowMenu || (this.overflowMenu = t2.append("div").attr(
        "class",
        "cds--overflow-menu-options cds--overflow-menu--flip cds--overflow-menu-options cds--overflow-menu--flip"
      ).attr("tabindex", -1).html("<ul role='menu'></ul>"));
      const { buttonList: n2, overflowMenuItemList: a2 } = this.getControlConfigs();
      a2 && n2.push(this.getOverflowButtonConfig());
      const i2 = t2.selectAll("div.toolbar-control").data(n2, (c2) => c2.id);
      i2.exit().remove();
      const r2 = i2.enter().append("div").attr("class", "toolbar-control cds--overflow-menu cds--overflow-menu").attr("role", "button"), l2 = this;
      r2.merge(i2).classed("disabled", (c2) => c2.shouldBeDisabled()).attr("aria-disabled", (c2) => c2.shouldBeDisabled()).attr("aria-label", (c2) => c2.title).html(
        (c2) => `
			<button
				class="cds--overflow-menu__trigger cds--overflow-menu__trigger"
				aria-haspopup="true" aria-expanded="false" id="${this.services.domUtils.generateElementIDString(
          `control-${c2.id}`
        )}" aria-label="${c2.title}">
				<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" class="cds--overflow-menu__icon cds--overflow-menu__icon" viewBox="0 0 32 32" aria-hidden="true">
					${c2.iconSVG.content}
				</svg>
			</button>`
      ).each(function(c2, d2) {
        select(this).select("svg").style("will-change", "transform").style("width", c2.iconSVG.width !== void 0 ? c2.iconSVG.width : "20px").style("height", c2.iconSVG.height !== void 0 ? c2.iconSVG.height : "20px"), select(this).select("button").on("click", (p2) => {
          c2.shouldBeDisabled() || l2.triggerFunctionAndEvent(c2, p2, this);
        }).on("keydown", (p2) => {
          p2.key && p2.key === "Enter" || p2.key === " " ? (p2.preventDefault(), l2.triggerFunctionAndEvent(c2, p2, this)) : p2.key && p2.key === "ArrowLeft" ? l2.focusOnPreviousEnabledToolbarItem(d2) : p2.key && p2.key === "ArrowRight" && l2.focusOnNextEnabledToolbarItem(d2);
        });
      }), this.overflowButton = this.getComponentContainer().select(
        `button.cds--overflow-menu__trigger#${this.services.domUtils.generateElementIDString(
          "control-toolbar-overflow-menu"
        )}`
      );
    }
  }
  renderOverflowMenu() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs(), t2 = this.overflowMenu.select("ul").selectAll("li.cds--overflow-menu-options__option").data(e2, (n2) => G(n2, "id"));
    t2.exit().remove();
    const s2 = t2.enter().append("li").attr("id", (n2) => this.services.domUtils.generateElementIDString(`control-${n2.id}`)).attr("class", "cds--overflow-menu-options__option cds--overflow-menu-options__option").attr("role", "menuitem").attr("tabindex", 1);
    s2.append("button").attr("class", "cds--overflow-menu-options__btn cds--overflow-menu-options__btn"), s2.merge(t2).classed("cds--overflow-menu-options__option--disabled", (n2) => n2.shouldBeDisabled()).classed("cds--overflow-menu-options__option--disabled", (n2) => n2.shouldBeDisabled()).attr("aria-disabled", (n2) => n2.shouldBeDisabled()).selectAll("button").text((n2) => n2.text);
  }
  isOverflowMenuOpen() {
    return this.overflowMenu.classed("is-open");
  }
  // show/hide overflow menu
  updateOverflowMenu(e2) {
    this.overflowMenu && (this.overflowMenu.classed("is-open", e2), this.overflowButton && (this.overflowButton.attr("aria-expanded", e2), select(this.overflowButton.node().parentNode).classed("cds--overflow-menu--open", e2).classed("cds--overflow-menu--open", e2)), e2 ? this.services.events.dispatchEvent(oE.Toolbar.SHOW_OVERFLOW_MENU) : this.services.events.dispatchEvent(oE.Toolbar.HIDE_OVERFLOW_MENU));
  }
  // Toolbar controllers
  focusOnPreviousEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let s2 = t2.length;
    for (let n2 = e2 - 1; n2 >= 0; n2--)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 < t2.length) {
      const n2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )}`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnNextEnabledToolbarItem(e2) {
    const t2 = this.getToolbarButtonItems();
    let s2 = -1;
    for (let n2 = e2 + 1; n2 < t2.length; n2++)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 > -1) {
      const n2 = select(
        `button#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )}`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnPreviousEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let s2 = t2.length;
    for (let n2 = e2 - 1; n2 >= 0; n2--)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 < t2.length) {
      const n2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )} button`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  focusOnNextEnabledMenuItem(e2) {
    const t2 = this.getOverflowMenuItems();
    let s2 = -1;
    for (let n2 = e2 + 1; n2 < t2.length; n2++)
      if (!t2[n2].shouldBeDisabled()) {
        s2 = n2;
        break;
      }
    if (s2 > -1) {
      const n2 = select(
        `#${this.services.domUtils.generateElementIDString(
          `control-${t2[s2].id}`
        )} button`
      ).node();
      "focus" in n2 && n2.focus();
    }
  }
  toggleOverflowMenu(e2) {
    if (this.isOverflowMenuOpen())
      this.updateOverflowMenu(false);
    else {
      this.updateOverflowMenu(true);
      const t2 = this;
      this.getOverflowMenuItems().forEach((n2, a2) => {
        const i2 = select(
          `#${this.services.domUtils.generateElementIDString(`control-${n2.id}`)}`
        );
        i2 !== null && (i2.on("click", () => {
          t2.triggerFunctionAndEvent(n2, e2, i2.node()), t2.updateOverflowMenu(false);
        }), i2.on("keydown", (r2) => {
          r2 && r2.key === "Enter" ? t2.triggerFunctionAndEvent(n2, e2, i2.node()) : r2 && r2.key === "ArrowUp" ? t2.focusOnPreviousEnabledMenuItem(a2) : r2 && r2.key === "ArrowDown" ? t2.focusOnNextEnabledMenuItem(a2) : r2 && r2.key === "Escape" && t2.updateOverflowMenu(false), r2.preventDefault();
        }));
      }), t2.focusOnNextEnabledMenuItem(-1);
    }
    e2 && e2.stopImmediatePropagation();
  }
  // Calls passed function && dispatches event
  triggerFunctionAndEvent(e2, t2, s2) {
    typeof e2.shouldBeDisabled == "function" && e2.shouldBeDisabled() || (typeof e2.clickFunction == "function" && e2.clickFunction(t2), this.services.events.dispatchEvent(oE.Toolbar.BUTTON_CLICK, {
      control: e2,
      event: t2,
      element: s2
    }));
  }
  getControlConfigs() {
    const e2 = G(this.getOptions(), "toolbar", "numberOfIcons") - 1, t2 = G(this.getOptions(), "toolbar", "controls"), s2 = [], n2 = [], a2 = [];
    return t2.forEach((i2) => {
      let r2 = null;
      i2.type === y$1.CUSTOM ? (G(i2, "id") === null && (i2.id = `toolbar-button-${Hs2.buttonID++}`), G(i2, "shouldBeDisabled") === null && (i2.shouldBeDisabled = () => false), r2 = i2) : r2 = this.getControlConfigByType(i2.type), r2 && (r2.text = i2.text ? i2.text : i2.type, r2.id.indexOf("toolbar-export") !== -1 ? s2.push(r2) : n2.length < e2 ? G(r2, "iconSVG", "content") === null ? a2.push(r2) : n2.push(r2) : a2.push(r2));
    }), a2.push(...s2), a2.length ? {
      buttonList: n2,
      overflowMenuItemList: a2
    } : {
      buttonList: n2
    };
  }
  getToolbarButtonItems() {
    const { buttonList: e2, overflowMenuItemList: t2 } = this.getControlConfigs();
    return t2 && e2.push(this.getOverflowButtonConfig()), e2 || [];
  }
  getOverflowMenuItems() {
    const { overflowMenuItemList: e2 } = this.getControlConfigs();
    return e2 || [];
  }
  // special button config for overflow button
  getOverflowButtonConfig() {
    return {
      id: "toolbar-overflow-menu",
      title: "More options",
      shouldBeDisabled: () => false,
      iconSVG: {
        content: `<circle cx="16" cy="8" r="2"></circle>
				<circle cx="16" cy="16" r="2"></circle>
				<circle cx="16" cy="24" r="2"></circle>`
      },
      clickFunction: (e2) => this.toggleOverflowMenu(e2)
    };
  }
  getControlConfigByType(e2) {
    const t2 = this.services.zoom && this.services.zoom.isZoomBarEnabled() && !this.services.zoom.isEmptyState(), s2 = this.model.getDisplayData();
    let n2;
    switch (e2) {
      case y$1.ZOOM_IN:
        t2 && (n2 = {
          id: "toolbar-zoomIn",
          title: "Zoom in",
          shouldBeDisabled: () => this.services.zoom.isMinZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomIn()
        });
        break;
      case y$1.ZOOM_OUT:
        t2 && (n2 = {
          id: "toolbar-zoomOut",
          title: "Zoom out",
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.zoomOut()
        });
        break;
      case y$1.RESET_ZOOM:
        t2 && (n2 = {
          id: "toolbar-resetZoom",
          title: "Reset zoom",
          shouldBeDisabled: () => this.services.zoom.isMaxZoomDomain(),
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.zoom.resetZoomDomain()
        });
        break;
      case y$1.MAKE_FULLSCREEN:
        n2 = {
          id: "toolbar-makefullscreen",
          iconSVG: {
            content: this.getControlIconByType(e2),
            width: "15px",
            height: "15px"
          },
          title: "Make fullscreen",
          shouldBeDisabled: () => false,
          clickFunction: () => {
            this.services.domUtils.toggleFullscreen();
          }
        };
        break;
      case y$1.SHOW_AS_DATATABLE:
        n2 = {
          id: "toolbar-showasdatatable",
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          title: "Show as table",
          shouldBeDisabled: () => s2.length === 0,
          clickFunction: () => this.services.events.dispatchEvent(oE.Modal.SHOW)
        };
        break;
      case y$1.EXPORT_CSV:
        n2 = {
          id: "toolbar-export-CSV",
          title: "Export as CSV",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.model.exportToCSV()
        };
        break;
      case y$1.EXPORT_PNG:
        n2 = {
          id: "toolbar-export-PNG",
          title: "Export as PNG",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToPNG()
        };
        break;
      case y$1.EXPORT_JPG:
        n2 = {
          id: "toolbar-export-JPG",
          title: "Export as JPG",
          shouldBeDisabled: () => false,
          iconSVG: {
            content: this.getControlIconByType(e2)
          },
          clickFunction: () => this.services.domUtils.exportToJPG()
        };
        break;
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
    return n2;
  }
  getControlIconByType(e2) {
    switch (e2) {
      case y$1.ZOOM_IN:
        return `<polygon points="19 13 15 13 15 9 13 9 13 13 9 13 9 15 13 15 13 19 15 19 15 15 19 15 19 13"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$1.ZOOM_OUT:
        return `<rect x="9" y="13" width="10" height="2"/>
						<path d="M22.45,21A10.87,10.87,0,0,0,25,14,11,11,0,1,0,14,25a10.87,10.87,0,0,0,7-2.55L28.59,30,30,28.59ZM14,23a9,9,0,1,1,9-9A9,9,0,0,1,14,23Z"/>`;
      case y$1.RESET_ZOOM:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.MAKE_FULLSCREEN:
        return '<polygon points="21 2 21 4 26.59 4 17 13.58 18.41 15 28 5.41 28 11 30 11 30 2 21 2"/><polygon points="15 18.42 13.59 17 4 26.59 4 21 2 21 2 30 11 30 11 28 5.41 28 15 18.42"/>';
      case y$1.SHOW_AS_DATATABLE:
        return '<rect x="4" y="6" width="18" height="2"/><rect x="4" y="12" width="18" height="2"/><rect x="4" y="18" width="18" height="2"/><rect x="4" y="24" width="18" height="2"/><rect x="26" y="6" width="2" height="2"/><rect x="26" y="12" width="2" height="2"/><rect x="26" y="18" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/>';
      case y$1.EXPORT_CSV:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.EXPORT_JPG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      case y$1.EXPORT_PNG:
        return '<path d="M22.4478,21A10.855,10.855,0,0,0,25,14,10.99,10.99,0,0,0,6,6.4658V2H4v8h8V8H7.332a8.9768,8.9768,0,1,1-2.1,8H3.1912A11.0118,11.0118,0,0,0,14,25a10.855,10.855,0,0,0,7-2.5522L28.5859,30,30,28.5859Z"/>';
      default:
        throw Error("Not supported toolbar control type: " + e2);
    }
  }
};
Ns.buttonID = 0;
const Us = class zs extends z {
  constructor(e2, t2, s2, n2) {
    super(e2, t2, n2), this.type = "layout", this.configs = n2, this.children = s2, this._instanceID = zs.instanceID++, this.init();
  }
  init() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => {
        t2.init();
      });
    });
  }
  getPreferedAndFixedSizeSum() {
    const e2 = this.parent;
    let t2 = 0;
    return e2.selectAll(`div.layout-child-${this._instanceID}`).filter((s2) => {
      const n2 = G(s2, "growth");
      return n2 === W$1.PREFERRED || n2 === W$1.FIXED;
    }).each(function(s2) {
      t2 += s2.size;
    }), t2;
  }
  getNumOfStretchChildren() {
    return this.parent.selectAll(`div.layout-child-${this._instanceID}`).filter((t2) => G(t2, "growth") === W$1.STRETCH).size();
  }
  render(e2 = true) {
    const t2 = this.parent, { width: s2, height: n2 } = k.getHTMLElementSize(t2.node()), a2 = this.configs.direction === z$2.ROW || this.configs.direction === z$2.ROW_REVERSE, i2 = G(this.model.getOptions(), "style", "prefix"), r2 = t2.classed(
      `${fc$1}--${i2}--layout-row`,
      this.configs.direction === z$2.ROW
    ).classed(
      `${fc$1}--${i2}--layout-row-reverse`,
      this.configs.direction === z$2.ROW_REVERSE
    ).classed(
      `${fc$1}--${i2}--layout-column`,
      this.configs.direction === z$2.COLUMN
    ).classed(
      `${fc$1}--${i2}--layout-column-reverse`,
      this.configs.direction === z$2.COLUMN_REVERSE
    ).classed(
      `${fc$1}--${i2}--layout-alignitems-center`,
      this.configs.alignItems === B$1.CENTER
    ).selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    r2.enter().append("div").merge(t2.selectAll(`div.layout-child-${this._instanceID}`)).attr("class", (d2) => `layout-child layout-child-${this._instanceID} ${d2.id}`).each(function(d2) {
      d2.components.forEach((p2) => {
        const h2 = select(this), g2 = G(d2, "renderType") === D$2.SVG;
        p2.setParent(
          g2 ? k.appendOrSelect(h2, "svg.layout-svg-wrapper").attr("width", "100%").attr("height", "100%") : h2
        );
        const m2 = G(d2, "growth");
        (m2 === W$1.PREFERRED || m2 === W$1.FIXED) && p2.render(e2);
      });
    }), t2.selectAll(`div.layout-child-${this._instanceID}`).style("height", null).style("width", null).each(function(d2) {
      const p2 = G(d2, "growth"), u2 = G(d2, "renderType") === D$2.SVG ? k.getSVGElementSize(select(this).select("svg.layout-svg-wrapper"), {
        useBBox: true
      }) : k.getHTMLElementSize(this);
      if (p2 === W$1.PREFERRED) {
        const g2 = a2 ? u2.width : u2.height, m2 = a2 ? s2 : n2;
        d2.size = g2 / m2 * 100;
      }
    }), r2.exit().remove(), this.children.filter((d2) => G(d2, "growth") === W$1.STRETCH).forEach((d2) => {
      d2.size = (100 - +this.getPreferedAndFixedSizeSum()) / +this.getNumOfStretchChildren();
    });
    const c2 = t2.selectAll(`div.layout-child-${this._instanceID}`).data(this.children, (d2) => d2.id);
    a2 ? c2.style("width", (d2) => `${d2.size / 100 * s2}px`).style("height", "100%") : c2.style("height", (d2) => `${d2.size / 100 * n2}px`).style("width", "100%"), c2.each(function(d2) {
      d2.components.forEach((p2) => {
        G(d2, "growth") === W$1.STRETCH && p2.render(e2);
      });
    });
  }
  // Pass on model to children as well
  setModel(e2) {
    super.setModel(e2), this.children.forEach((t2) => {
      t2.components.forEach((s2) => s2.setModel(e2));
    });
  }
  // Pass on essentials to children as well
  setServices(e2) {
    super.setServices(e2), this.children.forEach((t2) => {
      t2.components.forEach((s2) => s2.setServices(e2));
    });
  }
  destroy() {
    this.children.forEach((e2) => {
      e2.components.forEach((t2) => t2.destroy());
    });
  }
};
Us.instanceID = Math.floor(Math.random() * 99999999999);
var Ua = {
  prefix: "bx",
  selectorTabbable: `
    a[href], area[href], input:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]
  `,
  selectorFocusable: `
    a[href], area[href], input:not([disabled]),
    button:not([disabled]),select:not([disabled]),
    textarea:not([disabled]),
    iframe, object, embed, *[tabindex], *[contenteditable=true]
  `
}, ht = Ua;
function Qt(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function za(o2, e2, t2) {
  return e2 && Qt(o2.prototype, e2), t2 && Qt(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Fa(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function Wa(o2) {
  return Ya(o2) || Xa(o2) || Za(o2) || ja();
}
function ja() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Za(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return ft(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return ft(o2, e2);
  }
}
function Xa(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function Ya(o2) {
  if (Array.isArray(o2))
    return ft(o2);
}
function ft(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, s2 = new Array(e2); t2 < e2; t2++)
    s2[t2] = o2[t2];
  return s2;
}
function Fs(o2) {
  return o2.reduce(function(e2, t2) {
    return Array.isArray(t2) ? e2.push.apply(e2, Wa(Fs(t2))) : e2.push(t2), e2;
  }, []);
}
function qa() {
  for (var o2 = arguments.length, e2 = new Array(o2), t2 = 0; t2 < o2; t2++)
    e2[t2] = arguments[t2];
  return Fs(e2).reduce(function(s2, n2) {
    return n2(s2);
  }, /* @__PURE__ */ function() {
    function s2() {
      Fa(this, s2);
    }
    return za(s2);
  }());
}
function vt(o2) {
  "@babel/helpers - typeof";
  return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, vt(o2);
}
function Ka(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function es(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Ja(o2, e2, t2) {
  return e2 && es(o2.prototype, e2), t2 && es(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Qa(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && yt(o2, e2);
}
function yt(o2, e2) {
  return yt = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, yt(o2, e2);
}
function ei(o2) {
  var e2 = si();
  return function() {
    var s2 = Ze(o2), n2;
    if (e2) {
      var a2 = Ze(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ti(this, n2);
  };
}
function ti(o2, e2) {
  if (e2 && (vt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ws(o2);
}
function Ws(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function si() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ze(o2) {
  return Ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ze(o2);
}
function ni(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Qa(n2, t2);
    var s2 = ei(n2);
    function n2(a2) {
      var i2, r2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Ka(this, n2), i2 = s2.call(this, a2, r2), i2.children = [], !a2 || a2.nodeType !== Node.ELEMENT_NODE)
        throw new TypeError("DOM element should be given to initialize this widget.");
      return i2.element = a2, i2.options = Object.assign(Object.create(i2.constructor.options), r2), i2.constructor.components.set(i2.element, Ws(i2)), i2;
    }
    return Ja(n2, [{
      key: "release",
      value: (
        /**
         * Releases this component's instance from the associated element.
         */
        function() {
          for (var i2 = this.children.pop(); i2; i2 = this.children.pop())
            i2.release();
          return this.constructor.components.delete(this.element), null;
        }
      )
    }], [{
      key: "create",
      value: function(i2, r2) {
        return this.components.get(i2) || new this(i2, r2);
      }
    }]), n2;
  }(o2);
  return e2;
}
function bt(o2) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, bt(o2);
}
function ai(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ts(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function ii(o2, e2, t2) {
  return e2 && ts(o2.prototype, e2), t2 && ts(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function We() {
  return typeof Reflect < "u" && Reflect.get ? We = Reflect.get : We = function(e2, t2, s2) {
    var n2 = ri(e2, t2);
    if (n2) {
      var a2 = Object.getOwnPropertyDescriptor(n2, t2);
      return a2.get ? a2.get.call(arguments.length < 3 ? e2 : s2) : a2.value;
    }
  }, We.apply(this, arguments);
}
function ri(o2, e2) {
  for (; !Object.prototype.hasOwnProperty.call(o2, e2) && (o2 = De(o2), o2 !== null); )
    ;
  return o2;
}
function oi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Et(o2, e2);
}
function Et(o2, e2) {
  return Et = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, Et(o2, e2);
}
function li(o2) {
  var e2 = hi();
  return function() {
    var s2 = De(o2), n2;
    if (e2) {
      var a2 = De(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ci(this, n2);
  };
}
function ci(o2, e2) {
  if (e2 && (bt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return di(o2);
}
function di(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function hi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function De(o2) {
  return De = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, De(o2);
}
function ui(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    oi(n2, t2);
    var s2 = li(n2);
    function n2() {
      var a2;
      ai(this, n2);
      for (var i2 = arguments.length, r2 = new Array(i2), l2 = 0; l2 < i2; l2++)
        r2[l2] = arguments[l2];
      return a2 = s2.call.apply(s2, [this].concat(r2)), a2.handles = /* @__PURE__ */ new Set(), a2;
    }
    return ii(n2, [{
      key: "manage",
      value: (
        /**
         * Manages the given handle.
         * @param {Handle} handle The handle to manage.
         * @returns {Handle} The given handle.
         */
        function(i2) {
          return this.handles.add(i2), i2;
        }
      )
      /**
       * Stop managing the given handle.
       * @param {Handle} handle The handle to stop managing.
       * @returns {Handle} The given handle.
       */
    }, {
      key: "unmanage",
      value: function(i2) {
        return this.handles.delete(i2), i2;
      }
    }, {
      key: "release",
      value: function() {
        var i2 = this;
        return this.handles.forEach(function(r2) {
          r2.release(), i2.handles.delete(r2);
        }), We(De(n2.prototype), "release", this).call(this);
      }
    }]), n2;
  }(o2);
  return e2;
}
function Be(o2) {
  for (var e2 = arguments.length, t2 = new Array(e2 > 1 ? e2 - 1 : 0), s2 = 1; s2 < e2; s2++)
    t2[s2 - 1] = arguments[s2];
  return o2.addEventListener.apply(o2, t2), {
    release: function() {
      return o2.removeEventListener.apply(o2, t2), null;
    }
  };
}
function St(o2) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, St(o2);
}
function pi(o2) {
  return vi(o2) || fi(o2) || mi(o2) || gi();
}
function gi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mi(o2, e2) {
  if (o2) {
    if (typeof o2 == "string")
      return xt(o2, e2);
    var t2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (t2 === "Object" && o2.constructor && (t2 = o2.constructor.name), t2 === "Map" || t2 === "Set")
      return Array.from(o2);
    if (t2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2))
      return xt(o2, e2);
  }
}
function fi(o2) {
  if (typeof Symbol < "u" && o2[Symbol.iterator] != null || o2["@@iterator"] != null)
    return Array.from(o2);
}
function vi(o2) {
  if (Array.isArray(o2))
    return xt(o2);
}
function xt(o2, e2) {
  (e2 == null || e2 > o2.length) && (e2 = o2.length);
  for (var t2 = 0, s2 = new Array(e2); t2 < e2; t2++)
    s2[t2] = o2[t2];
  return s2;
}
function yi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ss(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function bi(o2, e2, t2) {
  return e2 && ss(o2.prototype, e2), t2 && ss(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Ei(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && Ot(o2, e2);
}
function Ot(o2, e2) {
  return Ot = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, Ot(o2, e2);
}
function Si(o2) {
  var e2 = Ti();
  return function() {
    var s2 = Xe(o2), n2;
    if (e2) {
      var a2 = Xe(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return xi(this, n2);
  };
}
function xi(o2, e2) {
  if (e2 && (St(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oi(o2);
}
function Oi(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Ti() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Xe(o2) {
  return Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Xe(o2);
}
function Li(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Ei(n2, t2);
    var s2 = Si(n2);
    function n2() {
      return yi(this, n2), s2.apply(this, arguments);
    }
    return bi(n2, [{
      key: "_changeState",
      value: (
        /* eslint-disable jsdoc/check-param-names */
        /**
         * The internal implementation for {@link EventedState#changeState `.changeState()`}, performing actual change in state.
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @param {EventedState~changeStateCallback} callback The callback called once changing state is finished or is canceled.
         * @private
         */
        function() {
          throw new Error("_changeState() should be overridden to perform actual change in state.");
        }
      )
      /**
       * Changes the state of this component.
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @param {EventedState~changeStateCallback} [callback] The callback called once changing state is finished or is canceled.
       */
    }, {
      key: "changeState",
      value: function() {
        for (var i2 = this, r2 = arguments.length, l2 = new Array(r2), c2 = 0; c2 < r2; c2++)
          l2[c2] = arguments[c2];
        var d2 = typeof l2[0] == "string" ? l2.shift() : void 0, p2 = Object(l2[0]) === l2[0] && typeof l2[0] != "function" ? l2.shift() : void 0, h2 = typeof l2[0] == "function" ? l2.shift() : void 0;
        if (typeof this.shouldStateBeChanged == "function" && !this.shouldStateBeChanged(d2, p2)) {
          h2 && h2(null, true);
          return;
        }
        var u2 = {
          group: p2 && p2.group,
          state: d2
        }, g2 = [u2.group, d2].filter(Boolean).join("-").split("-").map(function(M2) {
          return M2[0].toUpperCase() + M2.substr(1);
        }).join(""), m2 = new CustomEvent(this.options["eventBefore".concat(g2)], {
          bubbles: true,
          cancelable: true,
          detail: p2
        }), b2 = p2 && p2.delegatorNode || this.element, v2 = !b2.dispatchEvent(m2);
        if (v2) {
          if (h2) {
            var S2 = new Error("Changing state (".concat(JSON.stringify(u2), ") has been canceled."));
            S2.canceled = true, h2(S2);
          }
        } else {
          var T2 = [d2, p2].filter(Boolean);
          this._changeState.apply(this, pi(T2).concat([function() {
            b2.dispatchEvent(new CustomEvent(i2.options["eventAfter".concat(g2)], {
              bubbles: true,
              cancelable: true,
              detail: p2
            })), h2 && h2();
          }]));
        }
      }
      /* eslint-enable jsdoc/check-param-names */
      /**
       * Tests if change in state should happen or not.
       * Classes inheriting {@link EventedState `EventedState`} should override this function.
       * @function EventedState#shouldStateBeChanged
       * @param {string} [state] The new state. Can be an omitted, which means toggling.
       * @param {object} [detail]
       *   The object that should be put to event details that is fired before/after changing state.
       *   Can have a `group` property, which specifies what state to be changed.
       * @returns {boolean}
       *   `false` if change in state shouldn't happen, e.g. when the given new state is the same as the current one.
       */
    }]), n2;
  }(o2);
  return e2;
}
function Tt(o2, e2) {
  var t2 = o2.target, s2 = o2.currentTarget;
  if (typeof t2.matches == "function") {
    if (t2.matches(e2))
      return t2;
    if (t2.matches("".concat(e2, " *"))) {
      var n2 = t2.closest(e2);
      if ((s2.nodeType === Node.DOCUMENT_NODE ? s2.documentElement : s2).contains(n2))
        return n2;
    }
  }
}
function ns(o2) {
  if (!o2 || typeof o2 == "function")
    return {
      launchingElement: null,
      launchingEvent: null
    };
  var e2 = o2.delegateTarget || o2.currentTarget || o2, t2 = o2.currentTarget && o2;
  if (e2 && !e2.nodeType)
    throw new TypeError("DOM Node should be given for launching element.");
  if (t2 && !t2.type)
    throw new TypeError("DOM event should be given for launching event.");
  return {
    launchingElement: e2,
    launchingEvent: t2
  };
}
function Lt(o2) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Lt(o2);
}
function wi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function as(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Mi(o2, e2, t2) {
  return e2 && as(o2.prototype, e2), t2 && as(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Ai(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && wt(o2, e2);
}
function wt(o2, e2) {
  return wt = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, wt(o2, e2);
}
function Ci(o2) {
  var e2 = Ri();
  return function() {
    var s2 = Ye(o2), n2;
    if (e2) {
      var a2 = Ye(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return ki(this, n2);
  };
}
function ki(o2, e2) {
  if (e2 && (Lt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ii(o2);
}
function Ii(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Ri() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ye(o2) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ye(o2);
}
function Di(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Ai(n2, t2);
    var s2 = Ci(n2);
    function n2() {
      return wi(this, n2), s2.apply(this, arguments);
    }
    return Mi(n2, [{
      key: "show",
      value: (
        /**
         */
        /**
         * Switch to 'shown' state.
         * @param [evtOrElem] The launching event or element.
         * @param {EventedState~changeStateCallback} [callback] The callback.
         */
        function(i2, r2) {
          (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("shown", ns(i2), r2);
        }
      )
      /**
       * Switch to 'hidden' state.
       * @param [evtOrElem] The launching event or element.
       * @param {EventedState~changeStateCallback} [callback] The callback.
       */
    }, {
      key: "hide",
      value: function(i2, r2) {
        (!i2 || typeof i2 == "function") && (r2 = i2), this.changeState("hidden", ns(i2), r2);
      }
    }]), n2;
  }(o2);
  return e2;
}
var _i = [Li, Di];
const Pi = _i;
function Vi(o2) {
  return o2 && o2.__esModule && Object.prototype.hasOwnProperty.call(o2, "default") ? o2.default : o2;
}
var js = function() {
};
process.env.NODE_ENV !== "production" && (js = function(o2, e2, t2) {
  var s2 = arguments.length;
  t2 = new Array(s2 > 2 ? s2 - 2 : 0);
  for (var n2 = 2; n2 < s2; n2++)
    t2[n2 - 2] = arguments[n2];
  if (e2 === void 0)
    throw new Error(
      "`warning(condition, format, ...args)` requires a warning message argument"
    );
  if (e2.length < 10 || /^[s\W]*$/.test(e2))
    throw new Error(
      "The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + e2
    );
  if (!o2) {
    var a2 = 0, i2 = "Warning: " + e2.replace(/%s/g, function() {
      return t2[a2++];
    });
    typeof console < "u" && console.error(i2);
    try {
      throw new Error(i2);
    } catch {
    }
  }
});
var Bi = js;
const $i = /* @__PURE__ */ Vi(Bi);
function Mt(o2) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Mt(o2);
}
function Gi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function is(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Ni(o2, e2, t2) {
  return e2 && is(o2.prototype, e2), t2 && is(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Hi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && At(o2, e2);
}
function At(o2, e2) {
  return At = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, At(o2, e2);
}
function Ui(o2) {
  var e2 = Wi();
  return function() {
    var s2 = qe(o2), n2;
    if (e2) {
      var a2 = qe(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return zi(this, n2);
  };
}
function zi(o2, e2) {
  if (e2 && (Mt(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fi(o2);
}
function Fi(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Wi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function qe(o2) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, qe(o2);
}
function ji(o2) {
  var e2 = /* @__PURE__ */ function(t2) {
    Hi(n2, t2);
    var s2 = Ui(n2);
    function n2() {
      return Gi(this, n2), s2.apply(this, arguments);
    }
    return Ni(n2, null, [{
      key: "init",
      value: (
        /**
         * `true` suggests that this component is lazily initialized upon an action/event, etc.
         * @type {boolean}
         */
        /**
         * Instantiates this component in the given element.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates this component by clicking on launcher buttons
         * (buttons with attribute that `options.attribInitTarget` points to) of this component in the given node.
         * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {string} [options.selectorInit] The CSS selector to find this component.
         * @param {string} [options.attribInitTarget] The attribute name in the launcher buttons to find target component.
         * @returns {Handle} The handle to remove the event listener to handle clicking.
         */
        function() {
          var i2 = this, r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, l2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c2 = Object.assign(Object.create(this.options), l2);
          if (!r2 || r2.nodeType !== Node.ELEMENT_NODE && r2.nodeType !== Node.DOCUMENT_NODE)
            throw new TypeError("DOM document or DOM element should be given to search for and initialize this widget.");
          if (r2.nodeType === Node.ELEMENT_NODE && r2.matches(c2.selectorInit))
            this.create(r2, l2);
          else {
            var d2 = c2.initEventNames.map(function(p2) {
              return Be(r2, p2, function(h2) {
                var u2 = Tt(h2, "[".concat(c2.attribInitTarget, "]"));
                if (u2) {
                  h2.delegateTarget = u2;
                  var g2 = u2.ownerDocument.querySelectorAll(u2.getAttribute(c2.attribInitTarget));
                  if (g2.length > 1)
                    throw new Error("Target widget must be unique.");
                  if (g2.length === 1) {
                    u2.tagName === "A" && h2.preventDefault();
                    var m2 = i2.create(g2[0], l2);
                    typeof m2.createdByLauncher == "function" && m2.createdByLauncher(h2);
                  }
                }
              });
            });
            return {
              release: function() {
                for (var h2 = d2.pop(); h2; h2 = d2.pop())
                  h2.release();
              }
            };
          }
          return "";
        }
      )
    }]), n2.forLazyInit = true, n2;
  }(o2);
  return e2;
}
function Ct(o2) {
  "@babel/helpers - typeof";
  return Ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  }, Ct(o2);
}
function Zi(o2, e2) {
  if (!(o2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function rs(o2, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    var s2 = e2[t2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(o2, s2.key, s2);
  }
}
function Xi(o2, e2, t2) {
  return e2 && rs(o2.prototype, e2), t2 && rs(o2, t2), Object.defineProperty(o2, "prototype", {
    writable: false
  }), o2;
}
function Yi(o2, e2) {
  if (typeof e2 != "function" && e2 !== null)
    throw new TypeError("Super expression must either be null or a function");
  o2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: o2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(o2, "prototype", {
    writable: false
  }), e2 && kt(o2, e2);
}
function kt(o2, e2) {
  return kt = Object.setPrototypeOf || function(s2, n2) {
    return s2.__proto__ = n2, s2;
  }, kt(o2, e2);
}
function qi(o2) {
  var e2 = Qi();
  return function() {
    var s2 = Ke(o2), n2;
    if (e2) {
      var a2 = Ke(this).constructor;
      n2 = Reflect.construct(s2, arguments, a2);
    } else
      n2 = s2.apply(this, arguments);
    return Ki(this, n2);
  };
}
function Ki(o2, e2) {
  if (e2 && (Ct(e2) === "object" || typeof e2 == "function"))
    return e2;
  if (e2 !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ji(o2);
}
function Ji(o2) {
  if (o2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o2;
}
function Qi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ke(o2) {
  return Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, Ke(o2);
}
/* @__PURE__ */ (function(o2) {
  Yi(t2, o2);
  var e2 = qi(t2);
  function t2(s2, n2) {
    var a2;
    return Zi(this, t2), a2 = e2.call(this, s2, n2), a2._handleFocusinListener = void 0, a2._handleKeydownListener = void 0, a2._handleFocusin = function(i2) {
      var r2 = a2.element.querySelector(a2.options.selectorModalContainer) || a2.element;
      a2.element.classList.contains(a2.options.classVisible) && !r2.contains(i2.target) && a2.options.selectorsFloatingMenus.every(function(l2) {
        return !Tt(i2, l2);
      }) && a2.element.querySelector(ht.selectorTabbable).focus();
    }, a2._hookCloseActions(), a2;
  }
  return Xi(t2, [{
    key: "createdByLauncher",
    value: (
      /**
       * A method that runs when `.init()` is called from `initComponentByLauncher`.
       * @param {Event} evt The event fired on the launcher button.
       */
      function(n2) {
        this.show(n2);
      }
    )
    /**
     * Determines whether or not to emit events and callback function when `.changeState()` is called from `eventedState`.
     * @param {string} state The new state.
     * @returns {boolean} `true` if the given `state` is different from current state.
     */
  }, {
    key: "shouldStateBeChanged",
    value: function(n2) {
      return n2 === "shown" ? !this.element.classList.contains(this.options.classVisible) : this.element.classList.contains(this.options.classVisible);
    }
    /**
     * Changes the shown/hidden state.
     * @private
     * @param {string} state The new state.
     * @param {object} detail The detail data to be included in the event that will be fired.
     * @param {Function} callback Callback called when change in state completes.
     */
  }, {
    key: "_changeState",
    value: function(n2, a2, i2) {
      var r2 = this, l2, c2 = function() {
        if (l2 && (l2 = r2.unmanage(l2).release()), n2 === "shown" && r2.element.offsetWidth > 0 && r2.element.offsetHeight > 0) {
          r2.previouslyFocusedNode = r2.element.ownerDocument.activeElement;
          var u2 = r2.element.querySelector(r2.options.selectorPrimaryFocus) || r2.element.querySelector(ht.selectorTabbable);
          u2.focus(), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && $i(u2, "Modals need to contain a focusable element by either using " + "`".concat(r2.options.selectorPrimaryFocus, "` or settings.selectorTabbable."));
        }
        i2();
      };
      if (this._handleFocusinListener && (this._handleFocusinListener = this.unmanage(this._handleFocusinListener).release()), n2 === "shown") {
        var d2 = "onfocusin" in this.element.ownerDocument.defaultView, p2 = d2 ? "focusin" : "focus";
        this._handleFocusinListener = this.manage(Be(this.element.ownerDocument, p2, this._handleFocusin, !d2));
      }
      n2 === "hidden" ? (this.element.classList.toggle(this.options.classVisible, false), this.element.ownerDocument.body.classList.toggle(this.options.classBody, false), (this.options.selectorFocusOnClose || this.previouslyFocusedNode) && (this.element.ownerDocument.querySelector(this.options.selectorFocusOnClose) || this.previouslyFocusedNode).focus()) : n2 === "shown" && (this.element.classList.toggle(this.options.classVisible, true), this.element.ownerDocument.body.classList.toggle(this.options.classBody, true)), l2 = this.manage(Be(this.element, "transitionend", c2));
    }
  }, {
    key: "_hookCloseActions",
    value: function() {
      var n2 = this;
      this.manage(Be(this.element, "click", function(a2) {
        var i2 = Tt(a2, n2.options.selectorModalClose);
        i2 && (a2.delegateTarget = i2), (i2 || a2.target === n2.element) && n2.hide(a2);
      })), this._handleKeydownListener && (this._handleKeydownListener = this.unmanage(this._handleKeydownListener).release()), this._handleKeydownListener = this.manage(Be(this.element.ownerDocument.body, "keydown", function(a2) {
        a2.which === 27 && n2.shouldStateBeChanged("hidden") && (a2.stopPropagation(), n2.hide(a2));
      }));
    }
    /**
     * Handles `focusin` (or `focus` depending on browser support of `focusin`) event to do wrap-focus behavior.
     * @param {Event} evt The event.
     * @private
     */
  }], [{
    key: "options",
    get: (
      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Modal.create .create()}, or {@linkcode Modal.init .init()},
       * properties in this object are overridden for the instance being create and how {@linkcode Modal.init .init()} works.
       * @member Modal.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find modal dialogs.
       * @property {string} [selectorModalClose] The selector to find elements that close the modal.
       * @property {string} [selectorPrimaryFocus] The CSS selector to determine the element to put focus when modal gets open.
       * @property {string} [selectorFocusOnClose] The CSS selector to determine the element to put focus when modal closes.
       *   If undefined, focus returns to the previously focused element prior to the modal opening.
       * @property {string} [selectorModalContainer] The CSS selector for the content container of the modal for focus wrap feature.
       * @property {string} attribInitTarget The attribute name in the launcher buttons to find target modal dialogs.
       * @property {string[]} [selectorsFloatingMenu]
       *   The CSS selectors of floating menus.
       *   Used for detecting if focus-wrap behavior should be disabled temporarily.
       * @property {string} [classVisible] The CSS class for the visible state.
       * @property {string} [classBody] The CSS class for `<body>` with open modal.
       * @property {string} [classNoScroll] The CSS class for hiding scroll bar in body element while modal is shown.
       * @property {string} [eventBeforeShown]
       *   The name of the custom event fired before this modal is shown.
       *   Cancellation of this event stops showing the modal.
       * @property {string} [eventAfterShown]
       *   The name of the custom event telling that modal is sure shown
       *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
       * @property {string} [eventBeforeHidden]
       *   The name of the custom event fired before this modal is hidden.
       *   Cancellation of this event stops hiding the modal.
       * @property {string} [eventAfterHidden]
       *   The name of the custom event telling that modal is sure hidden
       *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
       */
      function() {
        var n2 = ht.prefix;
        return {
          selectorInit: "[data-modal]",
          selectorModalClose: "[data-modal-close]",
          selectorPrimaryFocus: "[data-modal-primary-focus]",
          selectorsFloatingMenus: [".".concat(n2, "--overflow-menu-options"), ".".concat(n2, "--tooltip"), ".flatpickr-calendar"],
          selectorModalContainer: ".".concat(n2, "--modal-container"),
          classVisible: "is-visible",
          classBody: "".concat(n2, "--body--with-modal-open"),
          attribInitTarget: "data-modal-target",
          initEventNames: ["click"],
          eventBeforeShown: "modal-beingshown",
          eventAfterShown: "modal-shown",
          eventBeforeHidden: "modal-beinghidden",
          eventAfterHidden: "modal-hidden"
        };
      }
    )
  }]), t2.components = /* @__PURE__ */ new WeakMap(), t2;
})(qa(ni, ji, Pi, ui));
var Me, ne;
(function(o2) {
  o2.LEFT = "left", o2.RIGHT = "right", o2.TOP = "top", o2.BOTTOM = "bottom";
})(ne || (ne = {}));
var os = (Me = {}, Me[ne.LEFT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left - e2.offsetWidth)
  };
}, Me[ne.RIGHT] = function(o2, e2, t2) {
  return {
    top: o2.top - Math.round(e2.offsetHeight / 2) + Math.round(t2.height / 2),
    left: Math.round(o2.left + t2.width)
  };
}, Me[ne.TOP] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top - e2.offsetHeight),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, Me[ne.BOTTOM] = function(o2, e2, t2) {
  return {
    top: Math.round(o2.top + t2.height),
    left: o2.left - Math.round(e2.offsetWidth / 2) + Math.round(t2.width / 2)
  };
}, Me), ls = typeof window < "u" ? window : {
  innerHeight: 0,
  scrollY: 0,
  innerWidth: 0,
  scrollX: 0
}, et = (
  /** @class */
  function() {
    function o2(e2) {
      e2 === void 0 && (e2 = {}), this.positions = os, this.positions = Object.assign({}, os, e2);
    }
    return o2.prototype.getRelativeOffset = function(e2) {
      for (var t2 = {
        left: e2.offsetLeft,
        top: e2.offsetTop
      }; e2.offsetParent && getComputedStyle(e2.offsetParent).position === "static"; )
        t2.left += e2.offsetLeft, t2.top += e2.offsetTop, e2 = e2.offsetParent;
      return t2;
    }, o2.prototype.getAbsoluteOffset = function(e2) {
      for (var t2 = e2, s2 = {
        top: 0,
        left: 0
      }; t2.offsetParent; ) {
        var n2 = getComputedStyle(t2.offsetParent);
        n2.position === "static" && n2.marginLeft && n2.marginTop && (parseInt(n2.marginTop, 10) && (s2.top += parseInt(n2.marginTop, 10)), parseInt(n2.marginLeft, 10) && (s2.left += parseInt(n2.marginLeft, 10))), t2 = t2.offsetParent;
      }
      var a2 = e2.getBoundingClientRect(), i2 = document.body.getBoundingClientRect();
      return {
        top: a2.top - i2.top + s2.top,
        left: a2.left - i2.left + s2.left
      };
    }, o2.prototype.findRelative = function(e2, t2, s2) {
      var n2 = this.getRelativeOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(n2, a2, t2, s2);
    }, o2.prototype.findAbsolute = function(e2, t2, s2) {
      var n2 = this.getAbsoluteOffset(e2), a2 = e2.getBoundingClientRect();
      return this.calculatePosition(n2, a2, t2, s2);
    }, o2.prototype.findPosition = function(e2, t2, s2, n2) {
      n2 === void 0 && (n2 = this.getAbsoluteOffset.bind(this));
      var a2 = n2(e2), i2 = e2.getBoundingClientRect();
      return this.calculatePosition(a2, i2, t2, s2);
    }, o2.prototype.findPositionAt = function(e2, t2, s2) {
      return this.calculatePosition(e2, { top: 0, left: 0, height: 0, width: 0 }, t2, s2);
    }, o2.prototype.getPlacementBox = function(e2, t2) {
      var s2 = e2.offsetHeight + t2.top, n2 = e2.offsetWidth + t2.left;
      return {
        top: t2.top,
        bottom: s2,
        left: t2.left,
        right: n2
      };
    }, o2.prototype.addOffset = function(e2, t2, s2) {
      return t2 === void 0 && (t2 = 0), s2 === void 0 && (s2 = 0), Object.assign({}, e2, {
        top: e2.top + t2,
        left: e2.left + s2
      });
    }, o2.prototype.setElement = function(e2, t2) {
      e2.style.top = t2.top + "px", e2.style.left = t2.left + "px";
    }, o2.prototype.findBestPlacement = function(e2, t2, s2, n2, a2) {
      var i2 = this;
      n2 === void 0 && (n2 = this.defaultContainerFunction.bind(this)), a2 === void 0 && (a2 = this.findPosition.bind(this));
      var r2 = s2.map(function(l2) {
        var c2 = a2(e2, t2, l2), d2 = i2.getPlacementBox(t2, c2), p2 = 0, h2 = 0, u2 = n2();
        d2.top < u2.top ? p2 = u2.top - d2.top : d2.bottom > u2.height && (p2 = d2.bottom - u2.height), d2.left < u2.left ? h2 = u2.left - d2.left : d2.right > u2.width && (h2 = d2.right - u2.width), p2 && !h2 ? h2 = 1 : h2 && !p2 && (p2 = 1);
        var g2 = t2.offsetHeight * t2.offsetWidth, m2 = p2 * h2, b2 = g2 - m2, v2 = b2 / g2;
        return {
          placement: l2,
          weight: v2
        };
      });
      return r2.sort(function(l2, c2) {
        return c2.weight - l2.weight;
      }), r2[0].placement;
    }, o2.prototype.findBestPlacementAt = function(e2, t2, s2, n2) {
      var a2 = this;
      n2 === void 0 && (n2 = this.defaultContainerFunction.bind(this));
      var i2 = function(r2, l2, c2) {
        return a2.findPositionAt(e2, l2, c2);
      };
      return this.findBestPlacement(null, t2, s2, n2, i2);
    }, o2.prototype.defaultContainerFunction = function() {
      return {
        // we go with window here, because that's going to be the simple/common case
        top: 0,
        left: 0,
        height: ls.innerHeight,
        width: ls.innerWidth
      };
    }, o2.prototype.calculatePosition = function(e2, t2, s2, n2) {
      return this.positions[n2] ? this.positions[n2](e2, s2, t2) : (console.error("No function found for placement, defaulting to 0,0"), { left: 0, top: 0 });
    }, o2;
  }()
);
new et();
const Zs = class je2 extends z {
  constructor() {
    super(...arguments), this.type = "grid-brush", this.renderType = D$2.SVG, this.selectionSelector = "rect.selection", this.frontSelectionSelector = "rect.frontSelection";
  }
  // needs to match the class name in _grid-brush.scss
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = true) {
    const t2 = this.parent, s2 = this.getComponentContainer();
    if (!t2)
      throw new Error("SVG was not defined");
    const n2 = k.appendOrSelect(t2, "svg.chart-grid-backdrop"), a2 = k.appendOrSelect(n2, `g.${this.type}`), i2 = k.appendOrSelect(a2, this.selectionSelector), { width: r2, height: l2 } = k.getSVGElementSize(n2, {
      useAttrs: true
    }), { cartesianScales: c2 } = this.services, d2 = c2.getMainXScaleType(), p2 = c2.getMainXScale(), [h2] = p2.range();
    s2.attr("transform", `translate(${h2},0)`);
    const u2 = k.appendOrSelect(s2, this.frontSelectionSelector);
    if (p2 && d2 === w.TIME) {
      let g2 = this.model.get("zoomDomain");
      g2 === void 0 && (g2 = this.services.zoom.getDefaultZoomBarDomain(), g2 && this.model.set({ zoomDomain: g2 }, { animate: false }));
      const m2 = (L2) => {
        const O2 = L2[1] - L2[0];
        let k2 = "0," + O2.toString();
        const I2 = Math.floor(l2 / je2.DASH_LENGTH), F2 = I2 * je2.DASH_LENGTH;
        for (let P2 = 0; P2 < I2; P2++)
          k2 += "," + je2.DASH_LENGTH;
        k2 += "," + (l2 - F2), I2 % 2 === 1 && (k2 += ",0"), k2 += "," + O2.toString(), k2 += "," + l2.toString(), u2.attr("stroke-dasharray", k2);
      }, b2 = (L2) => {
        const O2 = L2.selection;
        O2 === null || O2[0] === O2[1] || (u2.attr("x", parseFloat(i2.attr("x")) + parseFloat(n2.attr("x"))).attr("y", i2.attr("y")).attr("width", i2.attr("width")).attr("height", i2.attr("height")).style("cursor", "pointer").style("display", null), m2(O2));
      }, v2 = (L2, O2) => {
        const k2 = scaleTime().range([0, r2]).domain(g2);
        let I2 = [k2.invert(L2), k2.invert(O2)];
        I2[0].valueOf() === I2[1].valueOf() && (I2 = this.services.zoom.getDefaultZoomBarDomain()), (g2[0].valueOf() !== I2[0].valueOf() || g2[1].valueOf() !== I2[1].valueOf()) && this.services.zoom.handleDomainChange(I2);
      };
      let S2;
      const T2 = (L2) => {
        const O2 = L2.selection;
        O2 !== null && (v2(O2[0], O2[1]), a2.call(S2.move, null), u2.style("display", "none"));
      };
      l2 != 0 && r2 != 0 && (S2 = brushX().extent([
        [0, 0],
        [r2 - 1, l2]
      ]).on("start brush end", b2).on("end.brushed", T2), a2.call(S2));
      const M2 = this.services.zoom.getZoomRatio();
      n2.on("click", function(L2) {
        if (L2.shiftKey) {
          const O2 = this.services.domUtils.getHolder(), k2 = pointer(a2.node(), O2)[0];
          let I2 = k2 - r2 * M2 / 2;
          I2 < 0 && (I2 = 0);
          let F2 = k2 + r2 * M2 / 2;
          F2 > r2 && (F2 = r2), v2(I2, F2);
        }
      });
    }
  }
};
Zs.DASH_LENGTH = 4;
class mc extends z {
  constructor() {
    super(...arguments), this.type = "area", this.renderType = D$2.SVG, this.gradient_id = "gradient-id-" + Math.floor(Math.random() * 99999999999), this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (s2) => s2.name !== t2.datum().name ? dc.opacity.unselected : dc.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", dc.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions();
    let n2 = [0, 0];
    const { cartesianScales: a2 } = this.services, i2 = a2.getOrientation(), r2 = area().curve(this.services.curves.getD3Curve()).defined((L2) => {
      const O2 = a2.getRangeIdentifier(), k2 = L2[O2];
      return k2 != null;
    }), l2 = this.model.getGroupedData(this.configs.groups), c2 = G(s2, "bounds"), d2 = c2 && l2 && l2.length === 1;
    !d2 && c2 && console.warn(
      `Bounds can only be shown when having 1 single datagroup, you've supplied ${l2.length}`
    );
    let p2 = 0;
    const h2 = (L2, O2) => {
      G(s2, "axes", L2, "includeZero") === false && O2[0] > 0 && O2[1] > 0 && (p2 = O2[0]);
    }, u2 = (L2) => d2 ? a2.getBoundedScaledValues(L2)[0] : a2.getRangeValue(p2), g2 = (L2) => d2 ? a2.getBoundedScaledValues(L2)[1] : a2.getRangeValue(L2);
    i2 === F$2.VERTICAL ? (n2 = a2.getMainYScale().domain(), h2(a2.getMainYAxisPosition(), n2), r2.x((L2) => a2.getDomainValue(L2)).y0((L2) => u2(L2)).y1((L2) => g2(L2))) : (n2 = a2.getMainXScale().domain(), h2(a2.getMainXAxisPosition(), n2), r2.x0((L2) => u2(L2)).x1((L2) => g2(L2)).y((L2) => a2.getDomainValue(L2)));
    const m2 = G(s2, "color", "gradient", "enabled"), b2 = l2 && l2.length === 1 && m2;
    l2.length > 1 && m2 && console.error("Gradients can only be enabled when having 1 single dataset");
    const v2 = t2.selectAll("path.area").data(l2, (L2) => L2.name), S2 = select(this.services.domUtils.getMainContainer());
    if (v2.exit().attr("opacity", 0).remove(), !l2.length)
      return;
    if (b2) {
      const L2 = S2.select(
        `path.${this.model.getColorClassName({
          classNameTypes: [b$1.STROKE],
          dataGroupName: l2[0].name
        })}`
      ).node();
      let O2;
      if (L2)
        O2 = getComputedStyle(L2, null).getPropertyValue(
          "stroke"
        );
      else {
        const k2 = G(this.model.getOptions(), "color", "scale");
        if (k2 !== null) {
          const I2 = Object.keys(k2);
          O2 = k2[I2[0]];
        }
      }
      le.appendOrUpdateLinearGradient({
        svg: this.parent,
        id: this.services.domUtils.generateElementIDString(
          `${l2[0].name.replace(" ", "")}_${this.gradient_id}`
        ),
        x1: "0%",
        x2: "0%",
        y1: "0%",
        y2: "100%",
        stops: le.getStops(n2, O2)
      });
    } else
      this.parent.selectAll("defs linearGradient").empty() || this.parent.selectAll("defs linearGradient").each(function() {
        this.parentNode.remove();
      });
    const T2 = this, M2 = v2.enter().append("path");
    b2 ? M2.merge(v2).style(
      "fill",
      (L2) => `url(#${this.services.domUtils.generateElementIDString(
        `${L2.name.replace(" ", "")}_${this.gradient_id}`
      )})`
    ).attr("class", "area").attr(
      "class",
      (L2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: L2.name,
        originalClassName: "area"
      })
    ).attr("d", (L2) => {
      const { data: O2 } = L2;
      return r2(O2);
    }) : (M2.attr("opacity", 0).merge(v2).attr("class", "area").attr(
      "class",
      (L2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL, b$1.STROKE],
        dataGroupName: L2.name,
        originalClassName: "area"
      })
    ).style("fill", (L2) => T2.model.getFillColor(L2.name)).transition().call(
      (L2) => this.services.transitions.setupTransition({
        transition: L2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", d2 ? 1 : dc.opacity.selected).attr("d", (L2) => {
      const { data: O2 } = L2;
      return r2(O2);
    }), d2 && M2.attr("fill-opacity", dc.opacity.selected).style("stroke", (L2) => T2.model.getStrokeColor(L2.name)).style("stroke-dasharray", "2, 2").attr("stroke-width", 0.7 + "px"));
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class fc extends z {
  constructor() {
    super(...arguments), this.type = "line", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail;
      this.parent.selectAll("path.line").transition("legend-hover-line").call(
        (s2) => this.services.transitions.setupTransition({
          transition: s2,
          name: "legend-hover-line"
        })
      ).attr("opacity", (s2) => s2.name !== t2.datum().name ? bc$1.opacity.unselected : bc$1.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.line").transition("legend-mouseout-line").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-line"
        })
      ).attr("opacity", bc$1.opacity.selected);
    };
  }
  init() {
    const { events: e2 } = this.services;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), { cartesianScales: s2, curves: n2 } = this.services, a2 = (g2) => s2.getDomainValue(g2), i2 = (g2) => s2.getRangeValue(g2), [r$12, l2] = yf(
      a2,
      i2,
      s2.getOrientation()
    ), c2 = this.getOptions(), d2 = line().x(r$12).y(l2).curve(n2.getD3Curve()).defined((g2) => {
      const m2 = s2.getRangeIdentifier(g2), b2 = g2[m2];
      return b2 != null;
    });
    let p2 = [];
    if (this.configs.stacked) {
      const g2 = Object.keys(c2.axes).some((v2) => c2.axes[v2].percentage), { groupMapsTo: m2 } = c2.data;
      p2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: g2
      }).map((v2) => {
        const S2 = this.services.cartesianScales.getDomainIdentifier(v2), T2 = this.services.cartesianScales.getRangeIdentifier(v2);
        return {
          name: G(v2, 0, m2),
          data: v2.map((M2) => ({
            [S2]: M2.data.sharedStackKey,
            [m2]: M2[m2],
            [T2]: M2[1]
          })),
          hidden: !Ha(v2, (M2) => M2[0] !== M2[1])
        };
      });
    } else
      p2 = this.model.getGroupedData(this.configs.groups);
    const h2 = t2.selectAll("path.line").data(p2, (g2) => g2.name);
    h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").classed("line", true).attr("opacity", 0).merge(h2).data(p2, (g2) => g2.name).attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.STROKE],
        dataGroupName: g2.name,
        originalClassName: "line"
      })
    ).style("stroke", (g2) => this.model.getStrokeColor(g2.name)).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "line").attr("aria-label", (g2) => {
      const { data: m2 } = g2;
      return m2.map((b2) => {
        const v2 = this.services.cartesianScales.getRangeIdentifier(b2);
        return b2[v2];
      }).join(",");
    }).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "line-update-enter",
        animate: e2
      })
    ).attr("opacity", (g2) => g2.hidden ? 0 : 1).attr("d", (g2) => {
      const { data: m2 } = g2;
      return d2(m2);
    });
  }
  destroy() {
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
const cs = 5;
function rr(o2, e2) {
  return o2 > e2 - cs && o2 < e2 + cs;
}
class Xs extends z {
  constructor() {
    super(...arguments), this.type = "ruler", this.renderType = D$2.SVG, this.isXGridEnabled = G(this.getOptions(), "grid", "x", "enabled"), this.isYGridEnabled = G(this.getOptions(), "grid", "y", "enabled"), this.isEventListenerAdded = false;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(e2 = false) {
    const t2 = G(this.getOptions(), "ruler", "enabled");
    this.drawBackdrop(), t2 && !this.isEventListenerAdded ? this.addBackdropEventListeners() : !t2 && this.isEventListenerAdded && this.removeBackdropEventListeners();
  }
  removeBackdropEventListeners() {
    this.isEventListenerAdded = false, this.backdrop.on("mousemove mouseover mouseout", null);
  }
  formatTooltipData(e2) {
    return e2;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showRuler(e2, [t2, s2]) {
    const n2 = this.parent, a2 = this.services.cartesianScales.getOrientation(), i2 = this.model.getDisplayData(), r2 = this.services.cartesianScales.getRangeScale(), [l2, c2] = r2.range(), d2 = a2 === F$2.HORIZONTAL ? s2 : t2, p2 = k.appendOrSelect(n2, "g.ruler").attr("aria-label", "ruler"), h2 = k.appendOrSelect(p2, "line.ruler-line"), u2 = n2.selectAll("[role=graphics-symbol]"), g2 = i2.map((b2) => ({
      domainValue: this.services.cartesianScales.getDomainValue(b2),
      originalData: b2
    })).filter((b2) => rr(b2.domainValue, d2));
    if (this.pointsWithinLine && g2.length === this.pointsWithinLine.length && g2.map((b2) => b2.domainValue).join() === this.pointsWithinLine.map((b2) => b2.domainValue).join())
      return this.pointsWithinLine = g2, this.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        mousePosition: [t2, s2]
      });
    this.pointsWithinLine = g2;
    const m2 = this.pointsWithinLine.reduce((b2, v2) => {
      if (b2.length === 0)
        return b2.push(v2), b2;
      const S2 = b2[0].domainValue, T2 = Math.abs(d2 - v2.domainValue), M2 = Math.abs(d2 - S2);
      return T2 > M2 || (T2 < M2 ? b2 = [v2] : b2.push(v2)), b2;
    }, []);
    if (m2.length > 0) {
      const b2 = m2.map((M2) => M2.originalData).filter((M2) => {
        const L2 = this.services.cartesianScales.getRangeIdentifier(M2), O2 = M2[L2];
        return O2 != null;
      }), v2 = m2.map(
        (M2) => M2.domainValue
      ), S2 = u2.filter((M2) => {
        const L2 = this.services.cartesianScales.getDomainValue(M2);
        return v2.includes(L2);
      });
      this.elementsToHighlight && this.elementsToHighlight.size() > 0 && !Gs(this.elementsToHighlight, S2) && this.hideRuler(), S2.dispatch("mouseover"), this.elementsToHighlight = S2, this.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        mousePosition: [t2, s2],
        hoveredElement: h2,
        data: this.formatTooltipData(b2)
      }), p2.attr("opacity", 1);
      const T2 = m2[0];
      a2 === "horizontal" ? h2.attr("x1", c2).attr("x2", l2).attr("y1", T2.domainValue).attr("y2", T2.domainValue) : h2.attr("y1", c2).attr("y2", l2).attr("x1", T2.domainValue).attr("x2", T2.domainValue);
    } else
      this.hideRuler();
  }
  hideRuler() {
    const e2 = this.parent, t2 = k.appendOrSelect(e2, "g.ruler");
    e2.selectAll("[role=graphics-symbol]").dispatch("mouseout"), this.services.events.dispatchEvent(oE.Tooltip.HIDE), t2.attr("opacity", 0);
  }
  /**
   * Adds the listener on the X grid to trigger multiple point tooltips along the x axis.
   */
  addBackdropEventListeners() {
    this.isEventListenerAdded = true;
    const e2 = this, t2 = this.services.domUtils.getHolder(), s2 = this.model.getDisplayData();
    let n2 = function(a2) {
      const i2 = pointer(a2, e2.parent.node());
      e2.showRuler(a2, i2);
    };
    if (s2.length > 100) {
      const a2 = s2.length % 50 * 12.5;
      n2 = ff(
        function(i2) {
          const { mousePosition: r2 } = this;
          e2.showRuler(i2, r2);
        },
        a2,
        t2
      );
    }
    this.backdrop.on("mousemove mouseover", n2).on("mouseout", this.hideRuler.bind(this));
  }
  drawBackdrop() {
    const e2 = this.parent;
    this.backdrop = k.appendOrSelect(e2, "svg.chart-grid-backdrop");
  }
}
class Bt extends z {
  constructor() {
    super(...arguments), this.type = "scatter", this.renderType = D$2.SVG, this.handleChartHolderOnHover = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-hover-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-hover-scatter"
          });
        }
      ).attr("opacity", 1);
    }, this.handleChartHolderOnMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("chart-holder-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "chart-holder-mouseout-scatter"
          });
        }
      ).attr("opacity", 0);
    }, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-hover-scatter").call(
        (n2) => {
          var a2;
          return (a2 = this.services.transitions) == null ? void 0 : a2.setupTransition({
            transition: n2,
            name: "legend-hover-scatter"
          });
        }
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      if (!this.parent)
        throw new Error("Parent not defined");
      this.parent.selectAll("circle.dot").transition("legend-mouseout-scatter").call(
        (e2) => {
          var t2;
          return (t2 = this.services.transitions) == null ? void 0 : t2.setupTransition({
            transition: e2,
            name: "legend-mouseout-scatter"
          });
        }
      ).attr("opacity", 1);
    };
  }
  init() {
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events are undefined.");
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
    const { fadeInOnChartHolderMouseover: t2 } = this.configs;
    t2 && (e2.addEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.addEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut));
  }
  filterBasedOnZoomDomain(e2) {
    const { cartesianScales: t2 } = this.services;
    if (!t2)
      throw new Error("Services cartesianScales are undefined.");
    const s2 = t2.getDomainIdentifier(e2), n2 = this.model.get("zoomDomain");
    return n2 !== void 0 ? e2.filter(
      (a2) => a2[s2].getTime() >= n2[0].getTime() && a2[s2].getTime() <= n2[1].getTime()
    ) : e2;
  }
  getScatterData() {
    const e2 = this.getOptions(), { stacked: t2 } = this.configs;
    let s2;
    if (t2) {
      const n2 = Object.keys(e2.axes).some((a2) => e2.axes[a2].percentage);
      s2 = this.model.getStackedData({
        groups: this.configs.groups,
        percentage: n2
      });
    } else {
      const { cartesianScales: n2 } = this.services;
      if (!n2)
        throw new Error("Services cartesianScales are undefined.");
      s2 = this.model.getDisplayData(this.configs.groups).filter((a2) => {
        const i2 = n2.getRangeIdentifier(a2);
        return a2[i2] !== void 0 && a2[i2] !== null;
      });
    }
    return this.filterBasedOnZoomDomain(s2);
  }
  render(e2) {
    if (!(G(this.getOptions(), "points", "enabled") || G(this.getOptions(), "bubble", "enabled")))
      return;
    const s2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Services cartesianScales are undefined.");
    const r2 = i2.getDomainIdentifier(), l2 = s2.selectAll("circle.dot").data(
      this.getScatterData(),
      (p2) => `${p2[a2]}-${p2[r2]}`
    );
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(l2);
    this.styleCircles(d2, e2), this.addEventListeners();
  }
  // A value is an anomaly if is above all defined domain and range thresholds
  isDatapointThresholdAnomaly(e2) {
    const { handleThresholds: t2 } = this.configs;
    if (!t2)
      return false;
    const { cartesianScales: s2 } = this.services;
    if (!s2)
      throw new Error("Cartesian scales service is undefined");
    const n2 = s2.getOrientation(), [a2, i2] = yf(
      s2.getHighestDomainThreshold(),
      s2.getHighestRangeThreshold(),
      n2
    ), [r2, l2] = yf(
      (p2) => s2.getDomainValue(p2),
      (p2) => s2.getRangeValue(p2),
      n2
    ), c2 = r2(e2), d2 = l2(e2);
    return i2 && a2 ? d2 <= i2.scaleValue && c2 >= a2.scaleValue : i2 ? d2 <= i2.scaleValue : a2 ? c2 >= a2.scaleValue : false;
  }
  styleCircles(e2, t2) {
    const s2 = this.getOptions(), { filled: n2, fillOpacity: a2 } = s2.points, { cartesianScales: i2 } = this.services;
    if (!i2)
      throw new Error("Cartesian scales service is undefined");
    const { groupMapsTo: r$12 } = s2.data, l2 = (u2) => i2.getDomainValue(u2), c2 = (u2) => i2.getRangeValue(u2), [d2, p2] = yf(
      l2,
      c2,
      i2.getOrientation()
    ), { fadeInOnChartHolderMouseover: h2 } = this.configs;
    e2.raise().classed("dot", true).attr("class", (u2) => {
      const g2 = i2.getDomainIdentifier(u2), b2 = this.model.getIsFilled(u2[r$12], u2[g2], u2, n2) ? [b$1.FILL, b$1.STROKE] : [b$1.STROKE];
      return this.model.getColorClassName({
        classNameTypes: b2,
        dataGroupName: u2[r$12],
        originalClassName: "dot"
      }) || "";
    }).classed("threshold-anomaly", (u2) => this.isDatapointThresholdAnomaly(u2)).classed("filled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getIsFilled(u2[r$12], u2[g2], u2, n2);
    }).classed("unfilled", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return !this.model.getIsFilled(u2[r$12], u2[g2], u2, n2);
    }).transition().call(
      (u2) => {
        var g2;
        return (g2 = this.services.transitions) == null ? void 0 : g2.setupTransition({
          transition: u2,
          name: "scatter-update-enter",
          animate: t2
        });
      }
    ).attr("cx", d2).attr("cy", p2).attr("r", s2.points.radius).style("fill", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      if (this.model.getIsFilled(u2[r$12], u2[g2], u2, n2))
        return this.model.getFillColor(u2[r$12], u2[g2], u2);
    }).style("stroke", (u2) => {
      const g2 = i2.getDomainIdentifier(u2);
      return this.model.getStrokeColor(u2[r$12], u2[g2], u2);
    }).attr("fill-opacity", n2 ? a2 : 1).attr("opacity", h2 ? 0 : 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "point").attr("aria-label", (u2) => {
      const g2 = i2.getRangeIdentifier(u2);
      return u2[g2];
    }), this.addEventListeners();
  }
  // Extended in bubble graphs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTooltipAdditionalItems(e2) {
    return null;
  }
  addEventListeners() {
    const e2 = this, { groupMapsTo: t2 } = e2.getOptions().data;
    if (!this.parent)
      throw new Error("Parent not defined");
    this.parent.selectAll("circle").on("mouseover", function(s2, n2) {
      var i2, r2;
      const a2 = select(this);
      a2.classed("hovered", true).attr(
        "class",
        (l2) => e2.model.getColorClassName({
          classNameTypes: [b$1.FILL],
          dataGroupName: l2[t2],
          originalClassName: a2.attr("class")
        })
      ).style("fill", (l2) => {
        var d2;
        const c2 = (d2 = e2.services.cartesianScales) == null ? void 0 : d2.getDomainIdentifier(l2);
        return e2.model.getFillColor(l2[t2], l2[c2], l2);
      }).classed("unfilled", false), (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Tooltip.SHOW, {
        event: s2,
        hoveredElement: a2,
        data: [n2],
        additionalItems: e2.getTooltipAdditionalItems(n2)
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOVER, {
        event: s2,
        element: a2,
        datum: n2
      });
    }).on("mousemove", function(s2, n2) {
      var i2, r2;
      const a2 = select(this);
      (i2 = e2.services.events) == null || i2.dispatchEvent(oE.Scatter.SCATTER_MOUSEMOVE, {
        event: s2,
        element: a2,
        datum: n2
      }), (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Tooltip.MOVE, {
        event: s2
      });
    }).on("click", function(s2, n2) {
      var a2;
      (a2 = e2.services.events) == null || a2.dispatchEvent(oE.Scatter.SCATTER_CLICK, {
        event: s2,
        element: select(this),
        datum: n2
      });
    }).on("mouseout", function(s2, n2) {
      var i2, r2, l2;
      const a2 = select(this);
      if (a2.classed("hovered", false), !e2.configs.filled) {
        const { filled: c2 } = e2.getOptions().points, d2 = (i2 = e2.services.cartesianScales) == null ? void 0 : i2.getDomainIdentifier(n2), p2 = e2.model.getIsFilled(
          n2[t2],
          n2[d2],
          n2,
          c2
        );
        a2.classed("unfilled", !p2).style("fill", (h2) => p2 || c2 ? e2.model.getFillColor(h2[t2], h2[d2], h2) : null);
      }
      (r2 = e2.services.events) == null || r2.dispatchEvent(oE.Scatter.SCATTER_MOUSEOUT, {
        event: s2,
        element: a2,
        datum: n2
      }), (l2 = e2.services.events) == null || l2.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: a2
      });
    });
  }
  destroy() {
    var t2;
    (t2 = this.parent) == null || t2.selectAll("circle").on("mousemove", null).on("mouseout", null);
    const { events: e2 } = this.services;
    if (!e2)
      throw new Error("Services events undefined");
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut), e2.removeEventListener(oE.Chart.MOUSEOVER, this.handleChartHolderOnHover), e2.removeEventListener(oE.Chart.MOUSEOUT, this.handleChartHolderOnMouseOut);
  }
}
class bc extends z {
  constructor() {
    super(...arguments), this.type = "zero-line", this.renderType = D$2.SVG;
  }
  render(e2) {
    const t2 = this.services.cartesianScales.getRangeAxisPosition({
      groups: this.configs.groups
    }), s2 = this.services.cartesianScales.getScaleByPosition(t2), [n2, a2] = s2.domain(), i2 = n2 > 0 && a2 < 0 || n2 < 0 && a2 > 0, r2 = this.getComponentContainer();
    if (!i2) {
      r2.selectAll("line.domain").remove();
      return;
    }
    const [l2, c2] = this.services.cartesianScales.getDomainScale().range();
    let d2 = +s2(0) + 0.5;
    d2 || (d2 = s2.range()[0]);
    const p2 = tf(
      {
        x0: l2,
        x1: c2,
        y0: d2,
        y1: d2
      },
      this.services.cartesianScales.getOrientation()
    );
    k.appendOrSelect(r2, "line.domain").transition().call(
      (u2) => this.services.transitions.setupTransition({
        transition: u2,
        name: "zero-line-update",
        animate: e2
      })
    ).attr("y1", p2.y0).attr("y2", p2.y1).attr("x1", p2.x0).attr("x2", p2.x1);
  }
}
class Oc extends Xs {
  formatTooltipData(e2) {
    return e2.reverse();
  }
}
class Gt extends z {
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions();
    if (e2.bars.width)
      return e2.bars.width;
    const t2 = this.model.getDisplayData().length, s2 = this.services.cartesianScales.getMainXScale(), n2 = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width;
    if (!s2.step) {
      const a2 = G(e2, "bars", "spacingFactor");
      return Math.min(e2.bars.maxWidth, n2 * a2 / t2);
    }
    return Math.min(e2.bars.maxWidth, s2.step() / 2);
  }
  isOutsideZoomedDomain(e2, t2) {
    if (this.model.getDisplayData().length <= 1)
      return false;
    const n2 = this.model.get("zoomDomain");
    if (n2 !== void 0) {
      const a2 = this.services.cartesianScales.getDomainScale();
      return e2 < a2(n2[0]) || t2 > a2(n2[1]);
    }
    return false;
  }
}
class $c extends Gt {
  constructor() {
    super(...arguments), this.type = "grouped-bar", this.renderType = D$2.SVG, this.padding = 5, this.defaultStepFactor = 70, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.model.getDisplayData(this.configs.groups), s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data;
    this.setGroupScale();
    const a2 = this.getComponentContainer({ withinChartClip: true }), i2 = lf(
      t2.map((h2) => {
        const u2 = this.services.cartesianScales.getDomainIdentifier(h2);
        return h2[u2] && typeof h2[u2].toString == "function" ? h2[u2].toString() : h2[u2];
      })
    ), r$12 = a2.selectAll("g.bars").data(i2, (h2) => h2);
    r$12.exit().attr("opacity", 0).remove();
    const c2 = r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars").merge(r$12);
    c2.transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-group-update-enter",
        animate: e2
      })
    ).attr("transform", (h2) => {
      const g2 = this.services.cartesianScales.getDomainValue(h2) - this.getGroupWidth() / 2;
      return this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? `translate(${g2}, 0)` : `translate(0, ${g2})`;
    });
    const d2 = c2.selectAll("path.bar").data(
      (h2) => this.getDataCorrespondingToLabel(h2),
      (h2) => h2[n2]
    );
    d2.exit().attr("opacity", 0).remove(), d2.enter().append("path").attr("opacity", 0).merge(d2).classed("bar", true).transition().call(
      (h2) => this.services.transitions.setupTransition({
        transition: h2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (h2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: h2[n2],
        originalClassName: "bar"
      })
    ).style("fill", (h2) => this.model.getFillColor(h2[n2])).attr("d", (h2) => {
      const u2 = this.groupScale(h2[n2]), g2 = this.getBarWidth(), m2 = u2, b2 = u2 + g2, v2 = this.services.cartesianScales.getRangeAxisPosition({ datum: h2 }), S2 = this.services.cartesianScales.getValueThroughAxisPosition(v2, 0), T2 = this.services.cartesianScales.getRangeValue(h2), M2 = this.services.cartesianScales.getDomainValue(h2) - g2 / 2, L2 = M2 + g2;
      if (!this.isOutsideZoomedDomain(M2, L2))
        return vf(
          { x0: m2, x1: b2, y0: S2, y1: T2 },
          this.services.cartesianScales.getOrientation()
        );
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (h2) => h2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: n2,
        data: [s2]
      });
    }).on("mousemove", function(t2, s2) {
      const n2 = select(this);
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: n2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  getDataCorrespondingToLabel(e2) {
    return this.model.getDisplayData(this.configs.groups).filter((s2) => {
      const n2 = this.services.cartesianScales.getDomainIdentifier(s2);
      return s2[n2].toString() === e2;
    });
  }
  getGroupWidth() {
    const e2 = this.model.getGroupedData(this.configs.groups), t2 = this.getTotalGroupPadding();
    return this.getBarWidth() * e2.length + t2;
  }
  getDomainScaleStep() {
    const e2 = this.services.cartesianScales.getDomainScale(), t2 = this.model.getGroupedData(this.configs.groups);
    let s2 = this.defaultStepFactor;
    if (typeof e2.step == "function")
      s2 = e2.step();
    else if (t2.length > 0) {
      const n2 = t2.find((a2) => {
        var i2;
        return ((i2 = a2.data) == null ? void 0 : i2.length) > 1;
      });
      if (n2) {
        const a2 = this.services.cartesianScales.getDomainIdentifier(n2.data[0]);
        s2 = Math.abs(
          e2(n2.data[1][a2]) - e2(n2.data[0][a2])
        );
      }
    }
    return s2;
  }
  getTotalGroupPadding() {
    const e2 = this.model.getGroupedData(this.configs.groups);
    return e2.length === 1 ? 0 : Math.min(5, 5 * (this.getDomainScaleStep() / this.defaultStepFactor)) * (e2.length - 1);
  }
  // Gets the correct width for bars based on options & configurations
  getBarWidth() {
    const e2 = this.getOptions(), t2 = G(e2, "bars", "width"), s2 = G(e2, "bars", "maxWidth");
    if (t2 !== null && (s2 === null || t2 <= s2))
      return t2;
    const a2 = this.model.getGroupedData(this.configs.groups).length, i2 = this.getTotalGroupPadding();
    return Math.min(
      s2,
      (this.getDomainScaleStep() - i2) / a2
    );
  }
  setGroupScale() {
    const e2 = this.model.getActiveDataGroupNames(this.configs.groups);
    this.groupScale = scaleBand().domain(e2).rangeRound([0, this.getGroupWidth()]);
  }
}
class Fc extends Gt {
  constructor() {
    super(...arguments), this.type = "simple-bar", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-simple-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-simple-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-simple-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-simple-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getOptions(), { groupMapsTo: s2 } = t2.data, n2 = this.getComponentContainer({ withinChartClip: true }), a2 = this.model.getDisplayData(this.configs.groups), i2 = this.services.cartesianScales.getOrientation(), r$12 = n2.selectAll("path.bar").data(a2, (c2) => c2[s2]);
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("path").attr("opacity", 0).merge(r$12).classed("bar", true).attr("width", this.getBarWidth.bind(this)).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[s2],
        originalClassName: "bar"
      })
    ).style("fill", (c2) => this.model.getFillColor(c2[s2])).attr("d", (c2) => {
      const d2 = this.services.cartesianScales.getRangeIdentifier(), p2 = this.getBarWidth(), h2 = c2[d2], u2 = this.services.cartesianScales.getDomainValue(c2) - p2 / 2, g2 = u2 + p2;
      let m2, b2;
      if (Array.isArray(h2) && h2.length === 2)
        m2 = this.services.cartesianScales.getRangeValue(h2[0]), b2 = this.services.cartesianScales.getRangeValue(h2[1]);
      else {
        const T2 = this.services.cartesianScales.getRangeScale().domain()[0];
        m2 = this.services.cartesianScales.getRangeValue(Math.max(0, T2)), b2 = this.services.cartesianScales.getRangeValue(c2);
      }
      const v2 = Math.abs(b2 - m2);
      if (v2 !== 0 && v2 < 2 && (h2 > 0 && i2 === F$2.VERTICAL || h2 < 0 && i2 === F$2.HORIZONTAL ? b2 = m2 - 2 : b2 = m2 + 2), !this.isOutsideZoomedDomain(u2, g2))
        return vf({ x0: u2, x1: g2, y0: m2, y1: b2 }, i2);
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2.value), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", true), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: t2,
        hoveredElement: n2,
        data: [s2]
      });
    }).on("mousemove", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: t2,
        element: select(this),
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: t2
      });
    }).on("click", function(t2, s2) {
      e2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: t2,
        element: select(this),
        datum: s2
      });
    }).on("mouseout", function(t2, s2) {
      const n2 = select(this);
      n2.classed("hovered", false), e2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: t2,
        element: n2,
        datum: s2
      }), e2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: n2
      });
    });
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class jc extends z {
  constructor() {
    super(...arguments), this.type = "area-stacked", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data;
      this.parent.selectAll("path.area").transition("legend-hover-area").call(
        (a2) => this.services.transitions.setupTransition({
          transition: a2,
          name: "legend-hover-area"
        })
      ).attr("opacity", (a2) => G(a2, 0, n2) !== t2.datum().name ? dc.opacity.unselected : dc.opacity.selected);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.area").transition("legend-mouseout-area").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-area"
        })
      ).attr("opacity", dc.opacity.selected);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2 = true) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this, n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, i2 = Object.keys(n2.axes).some((g2) => n2.axes[g2].percentage), r$12 = this.model.getStackedData({
      percentage: i2,
      groups: this.configs.groups
    }), l2 = G(r$12, 0, 0), c2 = this.services.cartesianScales.getDomainAxisPosition({ datum: l2 }), d2 = this.services.cartesianScales.getRangeAxisPosition({ datum: l2 }), p2 = this.services.cartesianScales.getScaleByPosition(d2), h2 = t2.selectAll("path.area").data(r$12, (g2) => G(g2, 0, a2));
    this.areaGenerator = area().x(
      (g2) => this.services.cartesianScales.getValueThroughAxisPosition(
        c2,
        g2.data.sharedStackKey
      )
    ).y0((g2) => p2(g2[0])).y1((g2) => p2(g2[1])).curve(this.services.curves.getD3Curve()), h2.exit().attr("opacity", 0).remove(), h2.enter().append("path").attr("opacity", 0).merge(h2).data(r$12, (g2) => G(g2, 0, a2)).attr("class", "area").attr(
      "class",
      (g2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: G(g2, 0, a2),
        originalClassName: "area"
      })
    ).style("fill", (g2) => s2.model.getFillColor(G(g2, 0, a2))).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "area").attr("aria-label", (g2) => G(g2, 0, a2)).transition().call(
      (g2) => this.services.transitions.setupTransition({
        transition: g2,
        name: "area-update-enter",
        animate: e2
      })
    ).attr("opacity", dc.opacity.selected).attr("d", this.areaGenerator);
  }
}
class Zc extends Gt {
  constructor() {
    super(...arguments), this.type = "stacked-bar", this.renderType = D$2.SVG, this.handleLegendOnHover = (e2) => {
      const { hoveredElement: t2 } = e2.detail, { groupMapsTo: s2 } = this.model.getOptions().data;
      this.parent.selectAll("path.bar").transition("legend-hover-bar").call(
        (n2) => this.services.transitions.setupTransition({
          transition: n2,
          name: "legend-hover-bar"
        })
      ).attr("opacity", (n2) => n2[s2] !== t2.datum().name ? 0.3 : 1);
    }, this.handleLegendMouseOut = () => {
      this.parent.selectAll("path.bar").transition("legend-mouseout-bar").call(
        (e2) => this.services.transitions.setupTransition({
          transition: e2,
          name: "legend-mouseout-bar"
        })
      ).attr("opacity", 1);
    };
  }
  init() {
    const e2 = this.services.events;
    e2.addEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.addEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
  render(e2) {
    const t2 = this.getComponentContainer({ withinChartClip: true }), s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data, a2 = this.model.getStackedData({
      groups: this.configs.groups,
      divergent: true
    }), i2 = this.model.getActiveDataGroupNames(), r$12 = t2.selectAll("g.bars").data(a2, (c2) => G(c2, 0, n2));
    r$12.exit().attr("opacity", 0).remove(), r$12.enter().append("g").classed("bars", true).attr("role", r.GROUP).attr("data-name", "bars");
    const l2 = t2.selectAll("g.bars").selectAll("path.bar").data(
      (c2) => c2,
      (c2) => c2.data.sharedStackKey
    );
    l2.exit().remove(), l2.enter().append("path").merge(l2).classed("bar", true).transition().call(
      (c2) => this.services.transitions.setupTransition({
        transition: c2,
        name: "bar-update-enter",
        animate: e2
      })
    ).attr(
      "class",
      (c2) => this.model.getColorClassName({
        classNameTypes: [b$1.FILL],
        dataGroupName: c2[n2],
        originalClassName: "bar"
      })
    ).style("fill", (c2) => this.model.getFillColor(c2[n2])).attr("d", (c2) => {
      const d2 = c2.data.sharedStackKey, p2 = this.getBarWidth(), h2 = this.services.cartesianScales.getDomainValue(d2) - p2 / 2, u2 = h2 + p2, g2 = this.services.cartesianScales.getRangeValue(c2[0]);
      let m2 = this.services.cartesianScales.getRangeValue(c2[1]);
      if (!this.isOutsideZoomedDomain(h2, u2)) {
        if (Math.abs(m2 - g2) > 0 && Math.abs(m2 - g2) > s2.bars.dividerSize) {
          const b2 = c2[0] < 0 && c2[1] <= 0;
          b2 && i2.length > 1 ? this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += c2[1] === 0 ? 2 : 1 : m2 -= 1 : b2 || (this.services.cartesianScales.getOrientation() === F$2.VERTICAL ? m2 += 1 : m2 -= 1);
        }
        return vf(
          { x0: h2, x1: u2, y0: g2, y1: m2 },
          this.services.cartesianScales.getOrientation()
        );
      }
    }).attr("opacity", 1).attr("role", r.GRAPHICS_SYMBOL).attr("aria-roledescription", "bar").attr("aria-label", (c2) => c2[1] - c2[0]), this.addEventListeners();
  }
  addEventListeners() {
    const e2 = this.getOptions(), { groupMapsTo: t2 } = e2.data, s2 = this;
    this.parent.selectAll("path.bar").on("mouseover", function(n2, a2) {
      const i2 = select(this);
      i2.classed("hovered", true), s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOVER, {
        event: n2,
        element: i2,
        datum: a2
      });
      let l2 = s2.model.getDisplayData(s2.configs.groups).find((c2) => {
        const d2 = s2.services.cartesianScales.getDomainIdentifier(c2), p2 = s2.services.cartesianScales.getRangeIdentifier(c2);
        return c2[p2] === a2.data[a2[t2]] && c2[d2].toString() === a2.data.sharedStackKey && c2[t2] === a2[t2];
      });
      if (l2 === void 0) {
        const c2 = s2.services.cartesianScales.getDomainIdentifier(), d2 = s2.services.cartesianScales.getRangeIdentifier();
        l2 = {
          [c2]: a2.data.sharedStackKey,
          [d2]: a2.data[a2[t2]],
          [t2]: a2[t2]
        };
      }
      s2.services.events.dispatchEvent(oE.Tooltip.SHOW, {
        event: n2,
        hoveredElement: i2,
        data: [l2]
      });
    }).on("mousemove", function(n2, a2) {
      const i2 = select(this);
      s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEMOVE, {
        event: n2,
        element: i2,
        datum: a2
      }), s2.services.events.dispatchEvent(oE.Tooltip.MOVE, {
        event: n2
      });
    }).on("click", function(n2, a2) {
      s2.services.events.dispatchEvent(oE.Bar.BAR_CLICK, {
        event: n2,
        element: select(this),
        datum: a2
      });
    }).on("mouseout", function(n2, a2) {
      const i2 = select(this);
      i2.classed("hovered", false), s2.services.events.dispatchEvent(oE.Bar.BAR_MOUSEOUT, {
        event: n2,
        element: i2,
        datum: a2
      }), s2.services.events.dispatchEvent(oE.Tooltip.HIDE, {
        hoveredElement: i2
      });
    });
  }
  getBarWidth() {
    const e2 = this.getOptions();
    if (G(e2, "bars", "width"))
      return e2.bars.width;
    const t2 = this.services.cartesianScales.getMainXScale(), s2 = k.getSVGElementSize(this.parent, {
      useAttrs: true
    }).width, n2 = this.model.getStackKeys().length, a2 = G(e2, "bars", "spacingFactor");
    return t2.step ? Math.min(e2.bars.maxWidth, t2.step() / 2) : Math.min(e2.bars.maxWidth, s2 * a2 / n2);
  }
  destroy() {
    this.parent.selectAll("path.bar").on("mouseover", null).on("mousemove", null).on("mouseout", null);
    const e2 = this.services.events;
    e2.removeEventListener(oE.Legend.ITEM_HOVER, this.handleLegendOnHover), e2.removeEventListener(oE.Legend.ITEM_MOUSEOUT, this.handleLegendMouseOut);
  }
}
class Xc extends Bt {
  constructor() {
    super(...arguments), this.type = "scatter-stacked", this.renderType = D$2.SVG;
  }
  render(e2) {
    if (!G(this.getOptions(), "points", "enabled"))
      return;
    const s2 = this.getComponentContainer({ withinChartClip: true }), n2 = this.getOptions(), { groupMapsTo: a2 } = n2.data, i2 = Object.keys(n2.axes).some((u2) => n2.axes[u2].percentage), r$12 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: i2
    }), l2 = s2.selectAll("g.dots").data(r$12, (u2) => G(u2, 0, a2));
    l2.exit().attr("opacity", 0).remove();
    const d2 = l2.enter().append("g").classed("dots", true).attr("role", r.GROUP).merge(l2).selectAll("circle.dot").data((u2) => u2);
    d2.exit().attr("opacity", 0).remove();
    const h2 = d2.enter().append("circle").classed("dot", true).attr("opacity", 0).merge(d2).datum((u2) => {
      const g2 = u2[a2], m2 = this.services.cartesianScales.getDomainIdentifier(u2), b2 = this.services.cartesianScales.getRangeIdentifier(u2);
      return {
        [a2]: g2,
        [m2]: u2.data.sharedStackKey,
        [b2]: u2[1]
      };
    });
    this.styleCircles(h2, e2), this.addEventListeners();
  }
  getTooltipData(e2, t2) {
    const s2 = this.getOptions(), { groupMapsTo: n2 } = s2.data, a2 = Object.keys(s2.axes).some((l2) => s2.axes[l2].percentage), i2 = this.model.getStackedData({
      groups: this.configs.groups,
      percentage: a2
    }), r2 = [];
    return i2.forEach((l2, c2) => {
      l2.forEach((d2, p2) => {
        const h2 = d2[n2], u2 = d2.data.sharedStackKey;
        let g2 = d2.data[h2];
        const m2 = d2[1], b2 = this.services.cartesianScales.getDomainIdentifier(d2), v2 = this.services.cartesianScales.getRangeIdentifier(d2);
        g2 != null && e2 === this.services.cartesianScales.getDomainValue(u2) && t2 === this.services.cartesianScales.getRangeValue(m2) && (a2 && (g2 = this.model.getStackedData({
          groups: this.configs.groups
        })[c2][p2].data[h2]), g2 !== null && r2.push({
          [n2]: h2,
          [b2]: u2,
          [v2]: g2
        }));
      });
    }), this.model.getDisplayData(this.configs.groups).filter((l2) => {
      const c2 = this.services.cartesianScales.getDomainIdentifier(l2), d2 = this.services.cartesianScales.getRangeIdentifier(l2);
      return r2.find((p2) => p2[n2] == l2[n2] && p2[c2] == l2[c2] && p2[d2] == l2[d2]) !== void 0;
    });
  }
}
({
  [p$1.LINE]: [fc, Bt],
  [p$1.SCATTER]: [Bt],
  [p$1.AREA]: [mc, fc, Bt],
  [p$1.STACKED_AREA]: [jc, fc, Xc, Oc],
  [p$1.SIMPLE_BAR]: [Fc],
  [p$1.GROUPED_BAR]: [$c, bc],
  [p$1.STACKED_BAR]: [Zc, Oc]
});
({
  resizable: true,
  legend: {
    alignment: k$2.CENTER
  },
  pie: {
    alignment: k$2.CENTER
  },
  height: "400px"
});
({
  axes: {
    left: {
      mapsTo: "value"
    },
    bottom: {
      mapsTo: "group",
      scaleType: w["LABELS"]
    }
  },
  height: "400px"
});
function getChartOptions(isLoading) {
  const barOptions2 = {
    axes: {
      left: {
        mapsTo: "value"
      },
      bottom: {
        mapsTo: "group",
        scaleType: w["LABELS"]
      }
    },
    height: "400px"
  };
  const pieOptions2 = {
    resizable: true,
    legend: {
      alignment: k$2.CENTER
    },
    pie: {
      alignment: k$2.CENTER
    },
    height: "400px"
  };
  if (isLoading) {
    barOptions2.data = {
      loading: true
    };
    pieOptions2.data = {
      loading: true
    };
  }
  return {
    barOptions: barOptions2,
    pieOptions: pieOptions2
  };
}
const submissions = writable([]);
const Summary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_submissions;
  let $$unsubscribe_questionnaire;
  let $$unsubscribe_t;
  $$unsubscribe_submissions = subscribe(submissions, (value) => value);
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => value);
  let { isLoading = true } = $$props;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  {
    {
      let chartOptions = getChartOptions(isLoading);
      console.log({ chartOptions });
    }
  }
  $$unsubscribe_submissions();
  $$unsubscribe_questionnaire();
  $$unsubscribe_t();
  return `${isLoading ? `${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: true }, {}, {})}` : `${``}`}`;
});
const defaultImg = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyc3xlbnwwfHwwfHx8Mg%3D%3D";
const Individual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t2, $$unsubscribe_t;
  let $submissions, $$unsubscribe_submissions;
  let $questionnaire, $$unsubscribe_questionnaire;
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_submissions = subscribe(submissions, (value) => $submissions = value);
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  let { isLoading = false } = $$props;
  let studentSelected = 0;
  const isSelected = (student, option) => {
    if ($submissions) {
      let submittedAnswer = student?.answers;
      let filteredAnswer = submittedAnswer.filter((ans) => ans.question_id === option.question_id);
      if (filteredAnswer.map((ans) => ans.answers.length > 1)) {
        return filteredAnswer.some((ans) => ans.answers.includes(option.value));
      } else {
        return filteredAnswer.map((ans) => ans.answers) == option.value;
      }
    }
  };
  const isCorrect = (student, option) => {
    if (!isSelected(student, option))
      return;
    if (option.is_correct) {
      return "border-green-700";
    } else {
      return "border-red-700";
    }
  };
  const getOpenAnswer = (student, q2) => {
    let submittedAnswer = student?.answers;
    let filteredAnswer = submittedAnswer.filter((ans) => ans.question_id === q2.id);
    if (filteredAnswer.some((ans) => ans.open_answer == "")) {
      return $t2("course.navItem.lessons.exercises.all_exercises.analytics.individual.no");
    } else {
      return filteredAnswer.map((ans) => ans.open_answer);
    }
  };
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  $$unsubscribe_t();
  $$unsubscribe_submissions();
  $$unsubscribe_questionnaire();
  return `${isLoading ? `${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: true }, {}, {})}` : `${$submissions?.length ? `<div class="flex gap-1 w-full overflow-auto mt-2 mb-5">${each($submissions, (student, i2) => {
    return `<button class="flex flex-col items-center w-20"><div${add_attribute(
      "class",
      `flex items-center justify-center w-12 h-12 rounded-full ${studentSelected == i2 ? "border-[3px] border-primary-700" : ""}`,
      0
    )}><img${add_attribute(
      "src",
      student.submitted_by.profile.avatar_url ? student.submitted_by.profile.avatar_url : defaultImg,
      0
    )} alt="student"${add_attribute("class", `w-10 max-h-10 rounded-full bg-white m-1`, 0)}></div> <p class="line-clamp-2 w-20 whitespace-pre-wrap leading-4">${escape(student.submitted_by.profile.fullname)}</p> </button>`;
  })}</div> <p class="font-medium mb-2">${escape($submissions[studentSelected].submitted_by.profile.fullname)}&#39;s ${escape($t2("course.navItem.lessons.exercises.all_exercises.analytics.individual.answers"))}</p> ${$submissions[studentSelected] ? `${$questionnaire.questions ? `${each($questionnaire.questions, (q2, i2) => {
    return `<div class="pb-4"><h3 class="text-lg">${escape(i2 + 1)}. ${escape(q2.title)}</h3> ${q2.question_type_id !== 3 ? `${each(q2.options, (option, i3) => {
      return `<div${add_attribute("class", `flex gap-2 items-center my-2 border-2 border-gray-300 rounded-md p-2 ${isCorrect($submissions[studentSelected], option)}`, 0)}><input type="radio" name="" id="" class="form-radio" ${isSelected($submissions[studentSelected], option) ? "checked" : ""}> <span class="dark:text-white">${escape(option.label)}</span> </div>`;
    })}` : `<div class="rounded bg-slate-100 dark:bg-slate-300 p-2 my-1 w-full"><span class="text-base font-medium text-black">${escape(getOpenAnswer($submissions[studentSelected], q2))}</span> </div>`} </div>`;
  })}` : ``}` : ``}` : ``}`}`;
});
const Submissions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t2, $$unsubscribe_t;
  let $submissions, $$unsubscribe_submissions;
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_submissions = subscribe(submissions, (value) => $submissions = value);
  let { exerciseId } = $$props;
  const tabs2 = [
    {
      label: $t2("course.navItem.lessons.exercises.all_exercises.analytics.summary.heading"),
      value: "summary"
    },
    {
      label: $t2("course.navItem.lessons.exercises.all_exercises.analytics.individual.heading"),
      value: "individual"
    }
  ];
  let currentTab = tabs2[0].value;
  let isLoading = true;
  if ($$props.exerciseId === void 0 && $$bindings.exerciseId && exerciseId !== void 0)
    $$bindings.exerciseId(exerciseId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full flex flex-col"><div class="border rounded-md mb-2 px-4"><div class="mt-4"><p class="text-lg">${escape($submissions.length)} ${escape($t2("course.navItem.lessons.exercises.all_exercises.analytics.submissions"))}</p></div> <div class="flex items-center justify-center overflow-x-auto">${each(tabs2, (tab) => {
      return `<button class="${"relative " + escape(
        currentTab === tab.value ? "text-primary-700" : "dark:bg-gray-500 dark:text-white",
        true
      ) + " dark:bg-transparent font-semibold focus:outline-none w-fit mr-4 text-center py-3 px-2"}"><div class="flex items-center justify-center w-full text-center">${escape(tab.label)}</div> <span class="${"absolute bottom-0 left-0 h-[2px] bg-primary-700 transition-all ease-in-out duration-500 " + escape(currentTab === tab.value ? "w-full" : "w-0", true)}"></span> </button>`;
    })}</div></div> ${currentTab === tabs2[0].value ? `${validate_component(Summary, "Summary").$$render(
      $$result,
      { isLoading },
      {
        isLoading: ($$value) => {
          isLoading = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(Individual, "Individual").$$render(
      $$result,
      { isLoading },
      {
        isLoading: ($$value) => {
          isLoading = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_submissions();
  return $$rendered;
});
const Exercise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $questionnaire, $$unsubscribe_questionnaire;
  let $globalStore, $$unsubscribe_globalStore;
  let $t2, $$unsubscribe_t;
  let $$unsubscribe_questionnaireOrder;
  $$unsubscribe_questionnaire = subscribe(questionnaire, (value) => $questionnaire = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  $$unsubscribe_questionnaireOrder = subscribe(questionnaireOrder, (value) => value);
  let { exerciseId = "" } = $$props;
  let { path = "" } = $$props;
  let { goBack = () => {
  } } = $$props;
  let { isFetching = false } = $$props;
  let preview = false;
  let shouldDeleteExercise = false;
  let isSaving = false;
  let selectedIndex = 0;
  async function handleSave() {
    if ($globalStore.isStudent)
      return;
    const errors = validateQuestionnaire($questionnaire.questions);
    if (Object.values(errors).length > 0) {
      return;
    }
    isSaving = true;
    reset();
    try {
      const updatedQuestions = await upsertExercise($questionnaire, exerciseId);
      questionnaire.update((q2) => ({
        ...q2,
        is_title_dirty: false,
        is_description_dirty: false,
        // @ts-ignore
        questions: updatedQuestions
      }));
      snackbar.success("snackbar.exercise.success");
      goto(path);
    } catch (error) {
      console.error(error);
      snackbar.error();
    }
    isSaving = false;
  }
  onDestroy(() => {
    reset();
  });
  if ($$props.exerciseId === void 0 && $$bindings.exerciseId && exerciseId !== void 0)
    $$bindings.exerciseId(exerciseId);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.goBack === void 0 && $$bindings.goBack && goBack !== void 0)
    $$bindings.goBack(goBack);
  if ($$props.isFetching === void 0 && $$bindings.isFetching && isFetching !== void 0)
    $$bindings.isFetching(isFetching);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $questionnaire?.questions?.length < 1 && handleAddQuestion();
    $$rendered = `${validate_component(PageBody, "PageBody").$$render(
      $$result,
      {
        padding: "px-4 overflow-x-hidden",
        isPageNavHidden: $globalStore.isStudent
      },
      {
        isPageNavHidden: ($$value) => {
          $globalStore.isStudent = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="bg-gray-100 dark:bg-neutral-800 top-0 z-10 sticky p-2 mb-3">${validate_component(Breadcrumb$1, "Breadcrumb").$$render($$result, { noTrailingSlash: true }, {}, {
            default: () => {
              return `${validate_component(BreadcrumbItem$1, "BreadcrumbItem").$$render($$result, { href: path }, {}, {
                default: () => {
                  return `${escape($t2("course.navItem.lessons.exercises.all_exercises.heading"))}`;
                }
              })} ${validate_component(BreadcrumbItem$1, "BreadcrumbItem").$$render(
                $$result,
                {
                  href: `${path}${exerciseId}`,
                  isCurrentPage: true
                },
                {},
                {
                  default: () => {
                    return `${escape($questionnaire.title)}`;
                  }
                }
              )}`;
            }
          })} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
            default: () => {
              return `${validate_component(ContentSwitcher$1, "ContentSwitcher").$$render(
                $$result,
                { class: "mb-2", selectedIndex },
                {
                  selectedIndex: ($$value) => {
                    selectedIndex = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(Switch$1, "Switch").$$render(
                      $$result,
                      {
                        text: $t2("course.navItem.lessons.exercises.all_exercises.questions") + " (" + $questionnaire.questions.length + ")"
                      },
                      {},
                      {}
                    )} ${validate_component(Switch$1, "Switch").$$render(
                      $$result,
                      {
                        text: $t2("course.navItem.lessons.exercises.all_exercises.submissions") + " (" + $questionnaire.totalSubmissions + ")"
                      },
                      {},
                      {}
                    )}`;
                  }
                }
              )} ${selectedIndex === 0 ? `<div class="flex items-center justify-end right-0 w-full"><div class="flex items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                $$result,
                {
                  className: "mr-2",
                  variant: VARIANTS.CONTAINED,
                  label: $t2("course.navItem.lessons.exercises.all_exercises.save"),
                  onClick: handleSave,
                  isLoading: isSaving
                },
                {},
                {}
              )} ${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  onClick: () => preview = !preview,
                  contained: preview,
                  toolTipProps: {
                    title: $t2("course.navItem.lessons.exercises.all_exercises.preview"),
                    direction: "bottom",
                    hotkeys: []
                  }
                },
                {},
                {
                  default: () => {
                    return `${preview ? `${validate_component(ViewFilled, "ViewFilledIcon").$$render(
                      $$result,
                      {
                        size: 24,
                        class: "carbon-icon dark:text-white"
                      },
                      {},
                      {}
                    )}` : `${validate_component(View, "ViewIcon").$$render(
                      $$result,
                      {
                        size: 24,
                        class: "carbon-icon dark:text-white"
                      },
                      {},
                      {}
                    )}`}`;
                  }
                }
              )} ${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  onClick: () => handleAddQuestion(),
                  size: "small"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(AddAlt, "AddAltIcon").$$render(
                      $$result,
                      {
                        size: 24,
                        class: "carbon-icon dark:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                }
              )} ${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { flipped: true }, {}, {
                default: () => {
                  return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                    $$result,
                    {
                      text: $t2("course.navItem.lessons.exercises.all_exercises.reorder")
                    },
                    {},
                    {}
                  )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                    $$result,
                    {
                      danger: true,
                      text: $t2("course.navItem.lessons.exercises.all_exercises.delete_exercise")
                    },
                    {},
                    {}
                  )}`;
                }
              })}</div></div>` : ``}`;
            }
          })}</div> ${selectedIndex === 0 ? `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
            default: () => {
              return `${validate_component(UpdateDescription, "UpdateDescription").$$render($$result, { preview }, {}, {})}`;
            }
          })} ${!$globalStore.isStudent && !preview ? `${validate_component(EditMode, "EditMode").$$render(
            $$result,
            { exerciseId, goBack, shouldDeleteExercise },
            {
              shouldDeleteExercise: ($$value) => {
                shouldDeleteExercise = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `${validate_component(ViewMode, "ViewMode").$$render(
            $$result,
            {
              preview,
              exerciseId,
              isFetchingExercise: isFetching
            },
            {},
            {}
          )}`}` : `${selectedIndex === 1 ? `${validate_component(Submissions, "Analytics").$$render(
            $$result,
            { exerciseId },
            {
              exerciseId: ($$value) => {
                exerciseId = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_questionnaire();
  $$unsubscribe_globalStore();
  $$unsubscribe_t();
  $$unsubscribe_questionnaireOrder();
  return $$rendered;
});
const TAGS = {
  HTML: "HTML",
  CSS: "CSS",
  JS: "JS",
  Typescript: "Typescript",
  ReactJS: "ReactJS",
  VueJS: "VueJS",
  NodeJS: "NodeJS",
  Python: "Python",
  PHP: "PHP",
  GIT: "GIT"
};
const NewExerciseModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $lessonByTranslation, $$unsubscribe_lessonByTranslation;
  let $isLoading, $$unsubscribe_isLoading;
  let $input, $$unsubscribe_input;
  let $completion, $$unsubscribe_completion;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_lessonByTranslation = subscribe(lessonByTranslation, (value) => $lessonByTranslation = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { open = false } = $$props;
  let { handleAddExercise = () => {
  } } = $$props;
  let { handleCancelAddExercise = () => {
  } } = $$props;
  let { handleTemplateCreate } = $$props;
  let { title = "" } = $$props;
  var Type = /* @__PURE__ */ ((Type2) => {
    Type2[Type2["SCRATCH"] = 0] = "SCRATCH";
    Type2[Type2["TEMPLATE"] = 1] = "TEMPLATE";
    Type2[Type2["AI"] = 2] = "AI";
    return Type2;
  })(Type || {});
  let step = 0;
  let type = 0;
  let questionNumber = 5;
  let optionNumber = 5;
  let isLoading = writable(false);
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  let isAIStarted = false;
  let note = "";
  let allTemplates;
  const options = [
    {
      title: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.from_scratch"),
      subtitle: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.from_scratch_subtitle"),
      type: 0,
      /* SCRATCH */
      isDisabled: false
    },
    {
      title: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.use_template"),
      subtitle: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.use_template_subtitle"),
      type: 1,
      /* TEMPLATE */
      isDisabled: false
    },
    {
      title: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.use_ai"),
      subtitle: $t2("course.navItem.lessons.exercises.new_exercise_modal.options.use_ai_subtitle"),
      type: 2,
      /* AI */
      isDisabled: false
    }
  ];
  const tags = Object.values(TAGS);
  let selectedTag = tags[0];
  let selectedTemplateId = "";
  let isTemplateFinishedLoading = false;
  const { input, handleSubmit, completion } = useCompletion({
    api: "/api/completion/exerciseprompt",
    onFinish: async (prompt, completion2) => {
      if (!$lesson.id)
        return;
      toggleConfetti();
      const responseData = $completion.replace("```json", "").replace("```", "");
      const template = JSON.parse(responseData);
      await handleTemplateCreate(template);
      toggleConfetti();
      set_store_value(isLoading, $isLoading = false, $isLoading);
    }
  });
  $$unsubscribe_input = subscribe(input, (value) => $input = value);
  $$unsubscribe_completion = subscribe(completion, (value) => $completion = value);
  function handleNext() {
    step = step + 1;
  }
  function handleBack() {
    step = step - 1;
  }
  function callAI() {
    set_store_value(
      input,
      $input = JSON.stringify({
        questionNumber,
        optionNumber,
        lessonNote: note
      }),
      $input
    );
    setTimeout(
      () => {
        isAIStarted = true;
        set_store_value(isLoading, $isLoading = true, $isLoading);
        handleSubmit({
          preventDefault: () => {
          }
        });
      },
      500
    );
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.handleAddExercise === void 0 && $$bindings.handleAddExercise && handleAddExercise !== void 0)
    $$bindings.handleAddExercise(handleAddExercise);
  if ($$props.handleCancelAddExercise === void 0 && $$bindings.handleCancelAddExercise && handleCancelAddExercise !== void 0)
    $$bindings.handleCancelAddExercise(handleCancelAddExercise);
  if ($$props.handleTemplateCreate === void 0 && $$bindings.handleTemplateCreate && handleTemplateCreate !== void 0)
    $$bindings.handleTemplateCreate(handleTemplateCreate);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    lessonFallbackNote($lesson.materials.note, $lessonByTranslation[$lesson.id || ""], $lesson.locale);
    note = "";
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: handleCancelAddExercise,
        modalHeading: $t2("course.navItem.lessons.exercises.new_exercise_modal.heading"),
        maxWidth: "max-w-4xl",
        width: "w-4/5",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${!$isLoading && isAIStarted ? `${validate_component(Confetti, "Confetti").$$render($$result, {}, {}, {})}` : ``} ${step === 0 ? `<div><h2 class="text-2xl font-medium my-5">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.how"))}?</h2> <div class="flex gap-2 justify-between my-8">${each(options, (option) => {
            return `<button class="${"w-[261px] h-[240px] p-5 rounded-md dark:bg-neutral-700 border-2 " + escape(
              option.type === type ? "border-primary-400" : `border-gray-200 dark:border-neutral-600 ${!option.isDisabled && "hover:scale-95"}`,
              true
            ) + " flex flex-col " + escape(option.isDisabled && "cursor-not-allowed opacity-60", true) + " transition-all ease-in-out"}" type="button"><div class="w-full flex flex-row-reverse h-[70%]">${option.type === type ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
              $$result,
              {
                size: 16,
                class: "carbon-icon text-primary-600 dark:text-primary-200"
              },
              {},
              {}
            )}` : `${!option.isDisabled ? `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render($$result, { size: 16, class: "carbon-icon" }, {}, {})}` : ``}`}</div> <div><p class="font-bold text-start flex items-center"><span class="mr-2 text-sm">${escape(option.title)}</span> ${option.isDisabled ? `${validate_component(ComingSoon, "ComingSoon").$$render($$result, {}, {}, {})}` : ``}</p> <p class="text-xs font-light text-start">${escape(option.subtitle)}</p></div> </button>`;
          })}</div> <div class="mt-8 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.next"),
              onClick: handleNext
            },
            {},
            {}
          )}</div></div>` : `${step === 1 ? `${type === Type.SCRATCH ? `<div class="flex items-center justify-center w-96 m-auto min-h-[300px]"><div class="w-full"><h2 class="text-2xl font-medium my-5">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.title"))}</h2> ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              autoFocus: true,
              placeholder: $t2("course.navItem.lessons.exercises.new_exercise_modal.title_placeholder"),
              className: "my-4",
              value: title
            },
            {
              value: ($$value) => {
                title = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.back"),
              variant: VARIANTS.OUTLINED,
              onClick: handleBack
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.finish"),
              onClick: handleAddExercise
            },
            {},
            {}
          )}</div></div></div>` : `${type === Type.TEMPLATE ? `<div><h2 class="text-2xl font-medium mb-2 m-0">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.select_template"))}</h2> <div><div class="mb-5 flex items-center gap-2">${each(tags, (tag) => {
            return `${validate_component(Tag$1, "Tag").$$render(
              $$result,
              {
                type: selectedTag === tag ? "warm-gray" : "outline",
                class: selectedTag === tag ? "bg-primary-400" : "",
                interactive: true
              },
              {},
              {
                default: () => {
                  return `${escape(tag)}`;
                }
              }
            )}`;
          })}</div> <div class="flex flex-wrap items-start gap-2">${``}</div> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.back"),
              variant: VARIANTS.OUTLINED,
              onClick: handleBack
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              isDisabled: !selectedTemplateId,
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.finish"),
              isLoading: isTemplateFinishedLoading,
              onClick: async () => {
                isTemplateFinishedLoading = true;
                const template = allTemplates[selectedTag].find((t2) => t2.id === selectedTemplateId);
                if (!template)
                  return;
                console.log("Selected template", template);
                await handleTemplateCreate(template.data);
                isTemplateFinishedLoading = true;
              }
            },
            {},
            {}
          )}</div></div></div>` : `${type === Type.AI ? `<div><div class="flex flex-row justify-between max-h-[500px]"><div class="w-[60%] mr-1 border px-3 py-2 rounded-md">${note.length ? `<h3>${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.create_exercises"))}</h3> <p class="text-sm mb-4">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.choose_questions"))}</p> ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.how_many_questions"),
              type: "number",
              placeholder: "5",
              className: "mb-2",
              isRequired: true,
              value: questionNumber
            },
            {
              value: ($$value) => {
                questionNumber = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.how_many_options"),
              type: "number",
              placeholder: "5",
              isRequired: true,
              value: optionNumber
            },
            {
              value: ($$value) => {
                optionNumber = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : `<h3>${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.add_note"))}</h3>`} <div class="mt-5 flex items-center flex-row-reverse">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              onClick: callAI,
              isLoading: $isLoading,
              isDisabled: $isLoading || !note,
              variant: VARIANTS.OUTLINED
            },
            {},
            {
              default: () => {
                return `${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.generate"))}`;
              }
            }
          )}</div></div> <div class="w-[40%] px-5 py-3 border rounded-md overflow-y-auto flex justify-center items-center">${$isLoading ? `${validate_component(Circle3, "Circle3").$$render($$result, { size: "60", unit: "px", duration: "1s" }, {}, {})}` : `${isAIStarted ? `<p class="max-h-[200px] leading-7 text-sm">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.completion"))}</p>` : `<p class="max-h-[200px] leading-7 text-sm">${escape($t2("course.navItem.lessons.exercises.new_exercise_modal.click_generate"))}</p>`}`}</div></div> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.back"),
              variant: VARIANTS.TEXT,
              onClick: handleBack
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              isDisabled: $isLoading || !note,
              className: "px-6 py-3",
              label: $t2("course.navItem.lessons.exercises.new_exercise_modal.finish"),
              onClick: handleAddExercise
            },
            {},
            {}
          )}</div></div>` : ``}`}`}` : ``}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_lessonByTranslation();
  $$unsubscribe_isLoading();
  $$unsubscribe_input();
  $$unsubscribe_completion();
  $$unsubscribe_t();
  return $$rendered;
});
const Exercises = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $globalStore, $$unsubscribe_globalStore;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { path = "" } = $$props;
  let { exerciseId = "" } = $$props;
  let { lessonId = "" } = $$props;
  let open = false;
  let isFetching = false;
  let newExercise = { id: 1, title: "", description: "" };
  async function handleTemplateCreate(template) {
    const newExercise2 = await createExerciseFromTemplate(lessonId, template);
    console.log("newExercise", newExercise2);
    if (newExercise2) {
      lesson.update((_lesson) => ({
        ..._lesson,
        exercises: [..._lesson.exercises, newExercise2]
      }));
      handleCancelAddExercise();
      goto(path + "/" + newExercise2.id);
    }
  }
  async function handleAddExercise() {
    const { data, error } = await createExercise({
      title: newExercise.title,
      lesson_id: lessonId
    });
    console.log(`data, error `, data, error);
    lesson.update((_lesson) => ({
      ..._lesson,
      exercises: [..._lesson.exercises, data[0]]
    }));
    handleCancelAddExercise();
  }
  function handleCancelAddExercise() {
    open = false;
    newExercise = {
      id: /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(),
      title: "",
      description: ""
    };
  }
  async function getExercise(exerciseId2) {
    if (!exerciseId2)
      return;
    isFetching = true;
    isQuestionnaireFetching.update(() => true);
    let { data, error } = await supabase.from("exercise").select(`
        id, title, description, due_by,
        totalSubmissions:submission(count),
        questions:question(
          *,
          options:option(*),
          question_type:question_type_id(id, label)
        )
      `).eq("id", exerciseId2).single();
    if (error) {
      return;
    }
    if (data && Array.isArray(data.questions)) {
      data.questions.forEach((question) => {
        question.question_type = QUESTION_TYPES.find((type) => type.id === question.question_type.id);
        return question;
      });
      data.questions = data.questions.sort((a2, b2) => a2.order - b2.order);
    } else if (data) {
      data.questions = [];
    }
    questionnaire.set({
      ...data || {},
      is_title_dirty: false,
      is_description_dirty: false,
      is_due_by_dirty: false,
      questions: Array.isArray(data.questions) ? data.questions : [],
      totalSubmissions: data?.totalSubmissions?.[0]?.count || 0
    });
    isQuestionnaireFetching.update(() => false);
    isFetching = false;
  }
  function goBack() {
    goto(path);
  }
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.exerciseId === void 0 && $$bindings.exerciseId && exerciseId !== void 0)
    $$bindings.exerciseId(exerciseId);
  if ($$props.lessonId === void 0 && $$bindings.lessonId && lessonId !== void 0)
    $$bindings.lessonId(lessonId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      getExercise(exerciseId);
    }
    $$rendered = `${isFetching ? `${validate_component(Backdrop, "Backdrop").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Moon, "Moon").$$render(
          $$result,
          {
            size: "60",
            color: "#1d4ed8",
            unit: "px",
            duration: "1s"
          },
          {},
          {}
        )}`;
      }
    })}` : ``} ${exerciseId ? `${validate_component(Exercise, "Exercise").$$render(
      $$result,
      { exerciseId, goBack, isFetching, path },
      {
        path: ($$value) => {
          path = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(NewExerciseModal, "NewExerciseModal").$$render(
      $$result,
      {
        handleCancelAddExercise,
        handleAddExercise,
        handleTemplateCreate,
        open,
        title: newExercise.title
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        },
        title: ($$value) => {
          newExercise.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PageBody, "PageBody").$$render(
      $$result,
      { isPageNavHidden: $globalStore.isStudent },
      {
        isPageNavHidden: ($$value) => {
          $globalStore.isStudent = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<slot:fragment slot="header">${validate_component(Breadcrumb$1, "Breadcrumb").$$render($$result, { class: "my-2" }, {}, {
            default: () => {
              return `${validate_component(BreadcrumbItem$1, "BreadcrumbItem").$$render($$result, { href: path }, {}, {
                default: () => {
                  return `${escape($t2("course.navItem.lessons.exercises.heading"))}`;
                }
              })}`;
            }
          })} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
            default: () => {
              return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                $$result,
                {
                  className: "mr-2 my-2",
                  label: $t2("course.navItem.lessons.exercises.add_button"),
                  onClick: () => open = !open
                },
                {},
                {}
              )}`;
            }
          })}</slot:fragment>`;
        },
        default: () => {
          return `<div class="flex flex-wrap mt-5">${$lesson.exercises.length ? each($lesson.exercises, (exercise) => {
            return `<a class="w-52 bg-gray-100 dark:bg-neutral-800 px-4 py-7 mr-4 mb-4 rounded-lg" href="${escape(path, true) + "/" + escape(exercise.id, true)}"><h3 class="dark:text-white text-xl">${escape(exercise.title)}</h3> <p class="dark:text-white mt-4 text-sm">${escape(formatDate(exercise.created_at))}</p> </a>`;
          }) : `${validate_component(Box, "Box").$$render($$result, { className: "mt-3 text-center" }, {}, {
            default: () => {
              return `<div class="flex justify-between flex-col items-center w-[80%] md:w-96"><img src="/images/empty-exercise-icon.svg" alt="Exercise" class="my-2.5 mx-auto"> <h2 class="text-xl my-1.5 font-normal">${escape($t2("course.navItem.lessons.exercises.no_exercises"))}</h2> <p class="text-sm text-center text-slate-500">${$globalStore.isStudent ? `${escape($t2("course.navItem.lessons.exercises.no_assigned_exercises"))} <strong>${escape($t2("course.navItem.lessons.exercises.chill"))} :)</strong>` : `${escape($t2("course.navItem.lessons.exercises.add_exercise"))}`} </p></div> `;
            }
          })}`}</div>`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_globalStore();
  $$unsubscribe_t();
  return $$rendered;
});
const css$1 = {
  code: ".drawer.svelte-1tfmdrx.svelte-1tfmdrx{position:fixed;top:0;left:0;height:100%;width:100%;z-index:-1}.drawer.open.svelte-1tfmdrx.svelte-1tfmdrx{z-index:99}.panel.svelte-1tfmdrx.svelte-1tfmdrx{position:fixed;width:100%;height:100%;z-index:3;overflow:auto}.drawer.open.svelte-1tfmdrx .panel.svelte-1tfmdrx{transform:translate(0, 0)}",
  map: null
};
let content = "";
function formatTimestamp(timestamp) {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  const date = /* @__PURE__ */ new Date(timestamp + "Z");
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
function getMinutes(time) {
  return new Date(time).getMinutes();
}
function removeDuplicate(history) {
  return history.filter((obj1, i2, arr) => arr.findIndex((obj2) => getMinutes(obj2.timestamp) === getMinutes(obj1.timestamp)) === i2);
}
const LessonVersionHistory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $lessons, $$unsubscribe_lessons;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { open = false } = $$props;
  let lessonTitle = "";
  let lessonId = "";
  let lessonHistory = [];
  let selectedVersion = {
    new_content: "",
    old_content: "",
    timestamp: /* @__PURE__ */ new Date(),
    locale: LOCALE.EN,
    lesson_id: ""
  };
  let selectedVersionIndex = 0;
  let contentRestoreLoading = false;
  let versionsToFetch = 9;
  let isMoreHistoryLoading = false;
  const dispatch = createEventDispatcher();
  function handleDrawerClose() {
    dispatch("close");
  }
  async function fetchLessonHistory(lessonId2, locale, endRange) {
    try {
      isMoreHistoryLoading = true;
      const { data, error } = await fetchLesssonLanguageHistory(lessonId2, locale, endRange);
      if (!data) {
        throw error;
      }
      const existingTimestamps = new Set(lessonHistory.map((item) => new Date(item.timestamp).getMinutes()));
      const newEntries = data.filter((item) => !existingTimestamps.has(new Date(item.timestamp).getMinutes()));
      lessonHistory = removeDuplicate([...lessonHistory, ...newEntries]);
      updateContentVersion(lessonHistory[0], 0);
    } catch (error) {
      console.error(error);
      snackbar.error("Failed to fetch history");
    } finally {
      isMoreHistoryLoading = false;
    }
  }
  function updateContentVersion(content2, index) {
    selectedVersionIndex = index;
    selectedVersion = content2;
    const display = document.getElementById("display");
    display.innerHTML = "";
    const diff = diffLines(content2.old_content, content2.new_content);
    const fragment = document.createDocumentFragment();
    diff.forEach((part) => {
      const span = document.createElement("span");
      if (part.added) {
        span.classList.add("text-green-500");
      } else if (part.removed) {
        span.classList.add("text-red-500", "line-through");
      } else {
        span.classList.add("text-black", "dark:text-white");
      }
      span.innerHTML = part.value;
      fragment.appendChild(span);
    });
    display.appendChild(fragment);
  }
  async function restoreSelectedVersion() {
    try {
      contentRestoreLoading = true;
      await supabase.from("lesson_language").update({ content: selectedVersion.new_content }).eq("lesson_id", selectedVersion.lesson_id).eq("locale", selectedVersion.locale);
    } catch (error) {
      console.error(error);
      snackbar.error("Failed to restore");
    } finally {
      contentRestoreLoading = false;
      dispatch("restore");
    }
  }
  function loadMoreHistory() {
    versionsToFetch += 10;
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  lessonTitle = $lessons.find((les) => les.id === $lesson.id)?.title || "";
  lessonId = $lesson.id || "";
  {
    fetchLessonHistory(lessonId, $lesson.locale, versionsToFetch);
  }
  $$unsubscribe_lesson();
  $$unsubscribe_lessons();
  $$unsubscribe_t();
  return `<aside class="${["drawer bg-gray-100 dark:bg-neutral-800 svelte-1tfmdrx", open ? "open" : ""].join(" ").trim()}"><div class="panel bg-white dark:bg-black svelte-1tfmdrx"><div class="p-10 w-full pr-80"><div class="flex items-start gap-x-10">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      variant: VARIANTS.OUTLINED,
      onClick: handleDrawerClose
    },
    {},
    {
      default: () => {
        return `${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}`;
      }
    }
  )} ${selectedVersionIndex != 0 ? `<div class="">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      isLoading: contentRestoreLoading,
      onClick: restoreSelectedVersion
    },
    {},
    {
      default: () => {
        return `${escape($t2("course.navItem.lessons.version_history.restore_version"))}`;
      }
    }
  )}</div>` : ``}</div> <div class="w-full h-full flex flex-col items-start">${validate_component(HTMLRender, "HtmlRender").$$render(
    $$result,
    {
      className: "m-auto text-center mt-6 flex items-center justify-center"
    },
    {},
    {
      content: () => {
        return `<h1 class="text-2xl md:text-4xl mt-0 capitalize">${escape(lessonTitle)}</h1>`;
      }
    }
  )} ${validate_component(HTMLRender, "HtmlRender").$$render($$result, { id: "display", className: "m-auto" }, {}, {
    content: () => {
      return `<div class="amen"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div>`;
    }
  })}</div></div></div> <div id="scroll-container" class="w-80 fixed right-0 top-0 min-h-screen h-full z-10 overflow-x-auto overflow-y-scroll bg-gray-100 dark:bg-neutral-800 py-10 space-y-6"><p class="font-medium text-xl text-left flex items-start justify-start px-10">${escape($t2("course.navItem.lessons.version_history.title"))}</p> <div>${each(lessonHistory, (version, index) => {
    return `<button class="${"hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer p-4 w-full px-10 flex items-start " + escape(
      index == selectedVersionIndex ? "bg-gray-200 dark:bg-neutral-700" : "",
      true
    )}">${validate_component(CaretRight, "CaretRight").$$render($$result, { class: "mt-1" }, {}, {})} <div><span class="inline-block font-medium text-base">${escape(formatTimestamp(version.timestamp))}</span> ${index == 0 ? `<span class="block italic text-xs text-start">${escape($t2("course.navItem.lessons.version_history.current_version"))}</span>` : ``}</div> </button>`;
  })} <div class="flex items-center justify-start px-10 mt-2 h-10">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      className: "h-full",
      isLoading: isMoreHistoryLoading,
      onClick: loadMoreHistory
    },
    {},
    {
      default: () => {
        return `${escape($t2("course.navItem.lessons.version_history.fetch_more_versions"))}`;
      }
    }
  )}</div></div></div> </aside>`;
});
const css = {
  code: "@media screen and (min-width: 1023px){.tab.svelte-1df378g{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPrevDisabled;
  let isNextDisabled;
  let $profile, $$unsubscribe_profile;
  let $lesson, $$unsubscribe_lesson;
  let $page, $$unsubscribe_page;
  let $course, $$unsubscribe_course;
  let $globalStore, $$unsubscribe_globalStore;
  let $lessonSections, $$unsubscribe_lessonSections;
  let $lessons, $$unsubscribe_lessons;
  let $apps, $$unsubscribe_apps;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t2, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t2 = value);
  let { data } = $$props;
  let path = "";
  let mode = MODES.view;
  let prevMode = "";
  let isLoading = false;
  let isSaving = false;
  let isLessonComplete = false;
  let isVersionDrawerOpen = false;
  function getLessonOrder(id) {
    const index = $lessons.findIndex((lesson2) => lesson2.id === id);
    if (index < 10) {
      return "0" + (index + 1);
    } else {
      return index + 1;
    }
  }
  async function fetchReqData(lessonId = "", isMaterialsTabActive) {
    const timeout = setTimeout(
      () => {
        set_store_value(lesson, $lesson.isFetching = true, $lesson);
      },
      1e3
    );
    let lessonData;
    if (isMaterialsTabActive) {
      const lesson2 = await fetchLesson(lessonId);
      lessonData = lesson2.data;
      clearTimeout(timeout);
    }
    console.log({ lessonData });
    const totalExercises = lessonData?.totalExercises?.[0] && lessonData.totalExercises[0].count;
    const totalComments = lessonData?.totalComments?.[0] && lessonData.totalComments[0].count;
    setLesson(lessonData, totalExercises || 0, totalComments || 0);
    set_store_value(lesson, $lesson.isFetching = false, $lesson);
  }
  const downloadLesson = async () => {
    const currentLesson = $lessons.find((l2) => l2.id === $lesson?.id);
    if (!currentLesson) {
      return;
    }
    isLoading = true;
    try {
      const lessonVideo = $lesson.materials.videos.map((video) => video.link);
      const lessonNumber = getLessonOrder(currentLesson.id);
      const slideUrl = $lesson.materials.slide_url || "";
      const response = await fetch(public_env.PUBLIC_SERVER_URL + "/downloadLesson", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: currentLesson.title,
          number: lessonNumber,
          orgName: $currentOrg.name,
          note: $lesson.materials.note,
          slideUrl,
          video: lessonVideo,
          courseTitle: $course.title
        })
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const data2 = await response.blob();
      console.log(data2);
      const file = new Blob([data2], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      let a2 = document.createElement("a");
      document.body.append(a2);
      a2.download = $course.title + " - Lesson " + lessonNumber;
      a2.href = fileURL;
      a2.click();
      a2.remove();
      snackbar.success("snackbar.lessons.success.complete_download");
    } catch (error) {
      console.log("error downloading lesson", error);
      snackbar.error("snackbar.lessons.error.try_later");
    }
    isLoading = false;
  };
  function setLesson(lessonData, totalExercises, totalComments) {
    if (!lessonData)
      return;
    let lesson_completion = [];
    if (Array.isArray(lessonData.lesson_completion)) {
      lesson_completion = [...lessonData.lesson_completion];
    }
    lesson.update((l2) => ({
      ...l2,
      id: data.lessonId,
      title: lessonData.title,
      totalExercises,
      totalComments,
      materials: {
        videos: lessonData.videos,
        note: lessonData.note,
        slide_url: lessonData.slide_url
      },
      lesson_completion,
      exercises: [],
      locale: $profile.locale
    }));
    if (Array.isArray(lessonData.lesson_language)) {
      lessonByTranslation.update((lessLocales) => {
        return {
          ...lessLocales,
          [data.lessonId]: lessonData.lesson_language.reduce(
            (acc, cur) => {
              acc[cur.locale] = cur.content;
              return acc;
            },
            { en: "" }
          )
        };
      });
    }
  }
  const toggleApps = () => {
    set_store_value(apps, $apps.open = !$apps.open, $apps);
  };
  function toggleMode() {
    prevMode = mode;
    mode = mode === MODES.edit ? MODES.view : MODES.edit;
  }
  const getLessons = () => {
    if ($course.version === COURSE_VERSION.V1) {
      return $lessons;
    } else {
      const _lessons = [];
      $lessonSections.forEach((section) => {
        _lessons.push(...section.lessons);
      });
      return _lessons;
    }
  };
  const isNextOrPrevDisabled = (lessonId, isPrev) => {
    const _lessons = getLessons();
    const index = _lessons.findIndex((lesson2) => lesson2.id === lessonId);
    return isPrev ? !_lessons[index - 1] : !_lessons[index + 1];
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    path = $page.url?.pathname?.replace(/\/exercises[\/ 0-9 a-z -]*/, "");
    {
      if (data.courseId && browser) {
        mode = MODES.view;
        fetchReqData(data.lessonId, data.isMaterialsTabActive);
      }
    }
    isLessonComplete = getIsLessonComplete($lesson.lesson_completion, $profile.id);
    isPrevDisabled = isNextOrPrevDisabled(data.lessonId, true);
    isNextDisabled = isNextOrPrevDisabled(data.lessonId, false);
    $$rendered = `${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      {
        path,
        isExercisePage: !data.isMaterialsTabActive && !!data.exerciseId,
        containerClass: "relative",
        courseId: data.courseId
      },
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
              navItems: [
                {
                  label: $t2("course.navItem.lessons.lesson_nav.materials"),
                  isActive: data.isMaterialsTabActive,
                  href: path
                },
                {
                  label: $t2("course.navItem.lessons.lesson_nav.exercises"),
                  badgeValue: data.isMaterialsTabActive ? $lesson.totalExercises : $lesson.exercises.length,
                  isActive: !data.isMaterialsTabActive,
                  href: `${path}/exercises`
                }
              ],
              hideOnMobile: $globalStore.isStudent
            },
            {
              hideOnMobile: ($$value) => {
                $globalStore.isStudent = $$value;
                $$settled = false;
              }
            },
            {
              widget: () => {
                return `<div class="flex items-center gap-1">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                  default: () => {
                    return `${data.isMaterialsTabActive ? ` ${mode === MODES.edit && window.innerWidth >= 1024 ? `${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        onClick: () => isVersionDrawerOpen = true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(ResultOld, "ResultOld").$$render($$result, { size: 24 }, {}, {})}`;
                        }
                      }
                    )}` : ``} <div class="tab svelte-1df378g">${validate_component(IconButton, "IconButton").$$render($$result, { onClick: toggleApps, buttonClassName: "" }, {}, {
                      default: () => {
                        return `${validate_component(OverflowMenuVertical, "OverflowMenuVertical").$$render($$result, { size: 24 }, {}, {})}`;
                      }
                    })}</div> <div class="${escape(
                      null_to_empty(`flex-row ${$apps.dropdown && $apps.open ? "absolute lg:relative top-[85px] lg:top-0 right-14 lg:right-0 z-40 rounded-md bg-gray-100 dark:bg-neutral-800 p-3 lg:p-0" : "hidden"} lg:flex items-center`),
                      true
                    ) + " svelte-1df378g"}">${validate_component(IconButton, "IconButton").$$render(
                      $$result,
                      {
                        onClick: () => {
                          $apps.dropdown = false;
                          toggleMode();
                        },
                        disabled: isSaving
                      },
                      {},
                      {
                        default: () => {
                          return `${mode === MODES.edit ? `${validate_component(Save, "Save").$$render($$result, { size: 24 }, {}, {})}` : `${validate_component(Edit, "Edit").$$render($$result, { size: 24 }, {}, {})}`}`;
                        }
                      }
                    )} ${$course.metadata.lessonDownload && !!public_env.PUBLIC_SERVER_URL ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        className: "mr-",
                        variant: VARIANTS.OUTLINED,
                        onClick: downloadLesson,
                        isLoading
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Download, "Download").$$render($$result, { size: 16 }, {}, {})}`;
                        }
                      }
                    )}` : ``}</div> ${validate_component(Dropdown$1, "Dropdown").$$render(
                      $$result,
                      {
                        items: LANGUAGES,
                        class: "h-full",
                        selectedId: $lesson.locale
                      },
                      {
                        selectedId: ($$value) => {
                          $lesson.locale = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}` : ``}`;
                  }
                })}</div>`;
              }
            }
          )} ${!data.isMaterialsTabActive ? `${validate_component(Exercises, "Exercises").$$render(
            $$result,
            {
              lessonId: data.lessonId,
              exerciseId: data.exerciseId,
              path: `${path}/exercises`
            },
            {},
            {}
          )}` : `${!!data.lessonId ? `${validate_component(PageBody, "PageBody").$$render(
            $$result,
            {
              onClick: () => {
                $apps.open = false;
                $apps.dropdown = false;
              },
              width: "lg:w-full xl:w-11/12",
              className: "overflow-x-hidden",
              isPageNavHidden: $globalStore.isStudent
            },
            {
              isPageNavHidden: ($$value) => {
                $globalStore.isStudent = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return ` ${validate_component(Materials, "Materials").$$render(
                  $$result,
                  {
                    lessonId: data.lessonId,
                    mode,
                    prevMode,
                    toggleMode,
                    isStudent: $globalStore.isStudent,
                    isSaving
                  },
                  {
                    isSaving: ($$value) => {
                      isSaving = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            }
          )}` : ``}`}  <div class="absolute w-full bottom-5 flex items-center justify-center"><div class="flex items-center gap-2 w-fit rounded-full shadow-xl bg-gray-100 dark:bg-neutral-700 px-5 py-1"><button ${isPrevDisabled ? "disabled" : ""} class="${escape(null_to_empty(`px-2 my-2 pr-4 border-t-0 border-b-0 border-l-0 border border-gray-300 flex items-center ${isPrevDisabled && "opacity-25 cursor-not-allowed"}`), true) + " svelte-1df378g"}">${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { size: 24 }, {}, {})} <span class="hidden md:block">${escape($t2("course.navItem.lessons.prev"))}</span></button> ${data.isMaterialsTabActive ? `<button class="px-2 my-2 pr-4 border-t-0 border-b-0 border-l-0 border border-gray-300 flex items-center">${validate_component(ListChecked, "ListChecked").$$render($$result, { size: 24, class: "carbon-icon" }, {}, {})} <span class="ml-1">${escape($lesson.totalExercises)}</span></button>` : `<button class="px-2 my-2 pr-4 border-t-0 border-b-0 border-l-0 border border-gray-300 flex items-center">${validate_component(CourseIcon, "CourseIcon").$$render($$result, {}, {}, {})}</button>`} <button class="px-2 my-2 pr-4 border-t-0 border-b-0 border-l-0 border border-gray-300 flex items-center disabled:opacity-10 disabled:cursor-not-allowed" ${$globalStore.isStudent && !$currentOrg.customization.apps.comments ? "disabled" : ""}>${validate_component(SendAlt, "SendAlt").$$render($$result, { size: 24, class: "carbon-icon" }, {}, {})} <span class="ml-1">${escape($lesson.totalComments)}</span></button> <button class="px-2 my-2 pr-4 border-t-0 border-b-0 border-l-0 border border-gray-300 flex items-center" ${""}>${isLessonComplete ? `${validate_component(CheckmarkFilled, "CheckmarkFilledIcon").$$render(
            $$result,
            {
              size: 24,
              class: "carbon-icon text-primary-600"
            },
            {},
            {}
          )}` : `${validate_component(CheckmarkOutline, "CheckmarkOutlineIcon").$$render($$result, { size: 24, class: "carbon-icon" }, {}, {})}`}</button> <button ${isNextDisabled ? "disabled" : ""} class="${escape(null_to_empty(`px-2 my-2 flex items-center ${isNextDisabled && "opacity-25 cursor-not-allowed"}`), true) + " svelte-1df378g"}"><span class="hidden md:block">${escape($t2("course.navItem.lessons.next"))}</span> ${validate_component(ChevronRight, "ChevronRight").$$render($$result, { size: 24 }, {}, {})}</button></div></div>  ${isVersionDrawerOpen && window.innerWidth >= 1024 ? `${validate_component(LessonVersionHistory, "LessonVersionHistory").$$render($$result, { open: isVersionDrawerOpen }, {}, {})}` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_lesson();
  $$unsubscribe_page();
  $$unsubscribe_course();
  $$unsubscribe_globalStore();
  $$unsubscribe_lessonSections();
  $$unsubscribe_lessons();
  $$unsubscribe_apps();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-06e06fd7.js.map
