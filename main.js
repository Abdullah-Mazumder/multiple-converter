window.onload = () => {
    main();
};

const  converter = {
    area: {
        name: 'Area',
        units: {
            squareKm: 'Square Kilometer',
            squareM: 'Square Meter',
            squareMile: 'Square Mile',
            squareYard: 'Square Yard',
            squareFoot: 'Square Foot'
        },
        variants: {
            'squareKm:squareM': {
                formula: 'multiply the area value by 1000000',
                calculation(n) {
                    return n * 1000000;
                }
            },
            'squareKm:squareMile': {
                formula: 'divide the area value by 2.59',
                calculation(n) {
                    return n / 2.59;
                }
            },
            'squareKm:squareYard': {
                formula: 'multiply the area value by 1196000',
                calculation(n) {
                    return n * 1196000;
                }
            },
            'squareKm:squareFoot': {
                formula: 'for an approximate result, multiply the area value by 10760000',
                calculation(n) {
                    return n * 10760000;
                }
            },


            'squareM:squareKm': {
                formula: 'divide the area value by 1000000',
                calculation(n) {
                    return n / 1000000;
                }
            },
            'squareM:squareMile': {
                formula: 'divide the area value by 2590000',
                calculation(n) {
                    return n / 2590000;
                }
            },
            'squareM:squareYard': {
                formula: 'multiply the area value by 1.196',
                calculation(n) {
                    return n * 1.196;
                }
            },
            'squareM:squareFoot': {
                formula: 'multiply the area value by 10.764',
                calculation(n) {
                    return n * 10.764;
                }
            },


            'squareMile:squareKm': {
                formula: 'multiply the area value by 2.59',
                calculation(n) {
                    return n * 2.59;
                }
            },
            'squareMile:squareM': {
                formula: 'multiply the area value by 2590000',
                calculation(n) {
                    return n * 2590000;
                }
            },
            'squareMile:squareYard': {
                formula: 'for an approximate result, multiply the area value by 3098000',
                calculation(n) {
                    return n * 3098000;
                }
            },
            'squareMile:squareFoot': {
                formula: 'for an approximate result, multiply the area value by 27880000',
                calculation(n) {
                    return n * 27880000;
                }
            },


            'squareYard:squareKm': {
                formula: 'divide the area value by 1196000',
                calculation(n) {
                    return n / 1196000;
                }
            },
            'squareYard:squareM': {
                formula: 'divide the area value by 1.196',
                calculation(n) {
                    return n / 1.196;
                }
            },
            'squareYard:squareMile': {
                formula: 'for an approximate result, divide the area value by 3098000',
                calculation(n) {
                    return n / 3098000;
                }
            },
            'squareYard:squareFoot': {
                formula: 'multiply the area value by 9',
                calculation(n) {
                    return n * 9;
                }
            },


            'squareFoot:squareKm': {
                formula: 'for an approximate result, divide the area value by 10760000',
                calculation(n) {
                    return n / 10760000;
                }
            },
            'squareFoot:squareM': {
                formula: 'divide the area value by 10.764',
                calculation(n) {
                    return n / 10.764;
                }
            },
            'squareFoot:squareMile': {
                formula: 'for an approximate result, divide the area value by 27880000',
                calculation(n) {
                    return n / 27880000;
                }
            },
            'squareFoot:squareYard': {
                formula: 'divide the area value by 9',
                calculation(n) {
                    return n / 9;
                }
            },
        }
    },
    mass: {
        name: 'Mass',
        units: {
            tone: 'Tone',
            kilogram: 'Killogram',
            gram: 'Gram',
            milligram: 'Milligram'
        },
        variants: {
            'tone:kilogram': {
                formula: 'multiply the mass value by 1000',
                calculation(n) {
                    return n * 1000;
                }
            },
            'tone:gram': {
                formula: 'multiply the mass value by 1000000',
                calculation(n) {
                    return n * 1000000;
                }
            },
            'tone:milligram': {
                formula: 'multiply the mass value by 1000000000',
                calculation(n) {
                    return n * 1000000000;
                }
            },


            'kilogram:tone': {
                formula: 'divide the mass value by 1000',
                calculation(n) {
                    return n / 1000;
                }
            },
            'kilogram:gram': {
                formula: 'multiply the mass value by 1000',
                calculation(n) {
                    return n * 1000;
                }
            },
            'kilogram:milligram': {
                formula: 'multiply the mass value by 1000000',
                calculation(n) {
                    return n * 1000000;
                }
            },


            'gram:tone': {
                formula: 'divide the mass value by 1000000',
                calculation(n) {
                    return n / 1000000;
                }
            },
            'gram:kilogram': {
                formula: 'divide the mass value by 1000',
                calculation(n) {
                    return n / 1000;
                }
            },
            'gram:milligram': {
                formula: 'multiply the mass value by 1000',
                calculation(n) {
                    return n * 1000;
                }
            },


            'milligram:tone': {
                formula: 'divide the mass value by 1000000000',
                calculation(n) {
                    return n / 1000000000;
                }
            },
            'milligram:kilogram': {
                formula: 'divide the mass value by 1000000',
                calculation(n) {
                    return n / 1000000;
                }
            },
            'milligram:gram': {
                formula: 'divide the mass value by 1000',
                calculation(n) {
                    return n / 1000;
                }
            },
        }
    },
    length: {
        name: 'Length',
        units: {
            kilometer: 'Killometer',
            meter: 'Meter',
            centimeter: 'Centimeter',
            milimeter: 'Millimeter'
        },
        variants: {
            'kilometer:meter': {
                formula: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000;
                }
            },
            'kilometer:centimeter': {
                formula: 'multiply the length value by 100000',
                calculation(n) {
                    return n * 100000;
                }
            },
            'kilometer:milimeter': {
                formula: 'multiply the length value by 1000000',
                calculation(n) {
                    return n * 1000000;
                }
            },


            'meter:kilometer': {
                formula: 'divide the length value by 1000',
                calculation(n) {
                    return n / 1000;
                }
            },
            'meter:centimeter': {
                formula: 'divide the length value by 100',
                calculation(n) {
                    return n / 100;
                }
            },
            'meter:milimeter': {
                formula: 'multiply the length value by 1000',
                calculation(n) {
                    return n * 1000;
                }
            },


            'centimeter:kilometer': {
                formula: 'divide the length value by 100000',
                calculation(n) {
                    return n / 100000;
                }
            },
            'centimeter:meter': {
                formula: 'divide the length value by 100',
                calculation(n) {
                    return n / 100;
                }
            },
            'centimeter:milimeter': {
                formula: 'multiply the length value by 10',
                calculation(n) {
                    return n * 10;
                }
            },


            'milimeter:kilometer': {
                formula: 'divide the length value by 1000000',
                calculation(n) {
                    return n / 1000000;
                }
            },
            'milimeter:meter': {
                formula: 'divide the length value by 1000',
                calculation(n) {
                    return n / 1000;
                }
            },
            'milimeter:centimeter': {
                formula: 'divide the length value by 10',
                calculation(n) {
                    return n / 10;
                }
            },
        }
    },
    time: {
        name: 'Time',
        units: {
            second: 'Second',
            minute: 'Minute',
            hour: 'Hour',
            day: 'Day'
        },
        variants: {
            'second:minute': {
                formula: 'divide the time value by 60',
                calculation(n) {
                    return n / 60;
                }
            },
            'second:hour': {
                formula: 'divide the time value by 3600',
                calculation(n) {
                    return n / 3600;
                }
            },
            'second:day': {
                formula: 'divide the time value by 86400',
                calculation(n) {
                    return n / 86400;
                }
            },


            'minute:second': {
                formula: 'multiply the time value by 60',
                calculation(n) {
                    return n * 60;
                }
            },
            'minute:hour': {
                formula: 'divide the time value by 60',
                calculation(n) {
                    return n / 60;
                }
            },
            'minute:day': {
                formula: 'divide the time value by 1440',
                calculation(n) {
                    return n / 1440;
                }
            },


            'hour:second': {
                formula: 'multiply the time value by 3600',
                calculation(n) {
                    return n * 3600;
                }
            },
            'hour:minute': {
                formula: 'multiply the time value by 60',
                calculation(n) {
                    return n * 60;
                }
            },
            'hour:day': {
                formula: 'divide the time value by 24',
                calculation(n) {
                    return n / 24;
                }
            },


            'day:second': {
                formula: 'multiply the time value by 86400',
                calculation(n) {
                    return n * 86400;
                }
            },
            'day:minute': {
                formula: 'multiply the time value by 1440',
                calculation(n) {
                    return n * 1440;
                }
            },
            'day:hour': {
                formula: 'multiply the time value by 24',
                calculation(n) {
                    return n * 24;
                }
            },
        }
    }
}

let lastLeftSelectedValue = '';
let lastRightSelectedValue = '';

const main = () => {
    const categorySelect = document.getElementById('category-select');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    const leftSelect = document.getElementById('left-select');
    const rightSelect = document.getElementById('right-select');
    const formulaText = document.getElementById('formula-text');
    const leftPTag = document.getElementById('left-p');
    const rightPTag = document.getElementById('right-p');

    const converterKeys = Object.keys(converter).sort();
    removeAllChild(categorySelect);
    converterKeys.forEach((item) => {
        addOption(categorySelect, {value: item, text: converter[item].name});
    });

    // set default category units
    updateCategoryChanges(categorySelect, leftSelect, rightSelect);

    const converterName = categorySelect.value;
    const variants = converter[converterName].variants;
    const variantKey = `${leftSelect.value}:${rightSelect.value}`;
    const variant = variants[variantKey];

    leftInput.value = 1;
    leftPTag.innerHTML = 1;
    rightInput.value = variant.calculation(+leftInput.value);
    rightPTag.innerHTML = scientificNumberGenerator(+rightInput.value);
    formulaText.innerText = variant.formula;

    categorySelect.addEventListener('change', function() {
        updateCategoryChanges(categorySelect, leftSelect, rightSelect);
    });

    leftSelect.addEventListener('change', function(event) {
        if (event.target.value === rightSelect.value) {
            const options = rightSelect.getElementsByTagName('option');
            for (let i = 0; i < options.length; i++) {
                if (lastLeftSelectedValue === options[i].value) {
                    options[i].selected = 'selected';
                    lastRightSelectedValue = options[i].value;
                    break;
                }
            }
        }
        lastLeftSelectedValue = event.target.value;
    });

    rightSelect.addEventListener('change', function(event) {
        if (event.target.value === leftSelect.value) {
            const options = leftSelect.getElementsByTagName('option');
            for (let i = 0; i < options.length; i++) {
                if (lastRightSelectedValue === options[i].value) {
                    options[i].selected = 'selected';
                    lastLeftSelectedValue = options[i].value;
                    break;
                }
            }
        }
        lastRightSelectedValue = event.target.value;
    });

    categorySelect.addEventListener('change', calculateValue({
        categorySelect,
        leftInput,
        rightInput,
        leftSelect,
        rightSelect,
        formulaText
    }));

    leftSelect.addEventListener('change', calculateValue({
        categorySelect,
        leftSelect,
        rightSelect,
        formulaText
    }));

    rightSelect.addEventListener('change', rightSelectCalculateValue({
        categorySelect,
        leftSelect,
        rightSelect,
        formulaText
    }));

    leftInput.addEventListener('keyup', rightSelectCalculateValue({
        categorySelect,
        leftSelect,
        rightSelect,
        formulaText
    }));

    rightInput.addEventListener('keyup', calculateValue({
        categorySelect,
        leftSelect,
        rightSelect,
        formulaText
    }));
};

const addOption = (parent, option) => {
    const opt = document.createElement('option');
    opt.setAttribute('value', option.value);
    opt.innerHTML = option.text;

    parent.appendChild(opt);
}

const removeAllChild = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

const updateCategoryChanges = (categorySelect, leftSelect, rightSelect) => {
    const converterName = categorySelect.value;
    const units = converter[converterName].units;
    const options = Object.keys(units);

    // handle left select
    removeAllChild(leftSelect);
    options.forEach((item) => {
        addOption(leftSelect, {value: item, text: units[item]});
    });
    lastLeftSelectedValue = leftSelect.value;

    // handle right select
    removeAllChild(rightSelect);
    options.forEach((item) => {
        addOption(rightSelect, {value: item, text: units[item]});
    });

    // set default options of right select
    rightSelect.getElementsByTagName('option')[1].selected = 'selected';
    lastRightSelectedValue = rightSelect.value;
}

const calculateValue = (obj) => {
    return () => {
        const leftPTag = document.getElementById('left-p');
        const rightPTag = document.getElementById('right-p');
        const leftInput = document.getElementById('left-inp');
        const rightInput = document.getElementById('right-inp');
        const variants = converter[obj.categorySelect.value].variants;
        const variantKey = `${obj.rightSelect.value}:${obj.leftSelect.value}`;
        const variant = variants[variantKey];
        
        let result = variant.calculation(+rightInput.value.trim());
        const resultLength = result.toString().length;

        if (resultLength >= 7) {
            result = result.toExponential(2);
            leftPTag.innerHTML = scientificNumberGenerator(+variant.calculation(+rightInput.value.trim()));
        } else {
            leftPTag.innerHTML = result;
        }

        const rightInputValue = rightInput.value.toString();
        if (rightInputValue.length >= 7) {
            rightPTag.innerHTML = scientificNumberGenerator(+(rightInput.value.trim()));
        } else {
            rightPTag.innerHTML = rightInput.value;
        }

        if (!result || result === NaN) {
            rightInput.style.border = '1px solid red';
            rightPTag.innerHTML = 0;
            leftPTag.innerHTML = 0;
        } else {
            rightInput.style.border = '1px solid gray';
        }

        if (!result || result === NaN) {
            result = 0;
        }

        leftInput.value = toFixed(result);
        obj.formulaText.innerText = variant.formula;
    }
}

const rightSelectCalculateValue = (obj) => {
    return () => {
        const leftPTag = document.getElementById('left-p');
        const rightPTag = document.getElementById('right-p');
        const leftInput = document.getElementById('left-inp');
        const rightInput = document.getElementById('right-inp');
        const variants = converter[obj.categorySelect.value].variants;
        const variantKey = `${obj.leftSelect.value}:${obj.rightSelect.value}`;
        const variant = variants[variantKey];

        let result = variant.calculation(+leftInput.value.trim());
        const resultLength = result.toString().length;

        if (resultLength >= 7) {
            result = result.toExponential(2);
            rightPTag.innerHTML = scientificNumberGenerator(variant.calculation(+leftInput.value.trim()));
        } else {
            rightPTag.innerHTML = result;
        }

        const leftInputValue = leftInput.value.toString();
        if (leftInputValue.length >= 7) {
            leftPTag.innerHTML = scientificNumberGenerator(+(leftInput.value));
        } else {
            leftPTag.innerHTML = leftInput.value;
        }

        if (!result || result === NaN) {
            leftInput.style.border = '1px solid red';
            rightPTag.innerHTML = 0;
            leftPTag.innerHTML = 0;
        } else {
            leftInput.style.border = '1px solid gray'
        }

        if (!result || result === NaN) {
            result = 0;
        }
        
        rightInput.value = toFixed(result);
        obj.formulaText.innerText = variant.formula;
    }
}

const scientificNumberGenerator = (n) => {
    const leftPTag = document.getElementById('left-p');
    const rightPTag = document.getElementById('right-p');
    const leftInput = document.getElementById('left-inp');
    const rightInput = document.getElementById('right-inp');
    if (n == NaN || !n) {
        return 0;
    }
    const number = (n);
    if (number.toExponential(2).toString() === 'Infinity' || number.toExponential(2).toString() === '-Infinity') {
        leftPTag.innerText = number.toExponential(2).toString();
        rightPTag.innerText = number.toExponential(2).toString();
        leftInput.style.border = '2px solid red';
        rightInput.style.border = '2px solid red';
        leftPTag.style.border = '2px solid red';
        rightPTag.style.border = '2px solid red';
        return number.toExponential(2).toString();
    } else {
        leftInput.style.border = '1px solid gray';
        rightInput.style.border = '1px solid gray';
        leftPTag.style.border = '1px solid gray';
        rightPTag.style.border = '1px solid gray';
    }
    const numberArray = number.toExponential(2).toString().split('e');
    let scientificNumber;
    let scientificNumberSecondPart = '';

    if (number.toExponential(2).toString().split('').indexOf('+') > -1) {
        const arr = numberArray[1].split('+');
        arr.forEach((i) => {
            scientificNumberSecondPart += i;
        });
        scientificNumber = `${numberArray[0]}&times;10<sup>${scientificNumberSecondPart}</sup>`;
    } else {
        console.log('hello2', number.toExponential(2).toString())
        const arr = numberArray[1].split('-');
        arr.forEach((i) => {
            scientificNumberSecondPart += i;
        });
        scientificNumber = `${numberArray[0]}&times;10<sup>-${scientificNumberSecondPart}</sup>`;
    }

    if (n == NaN || !n) {
        scientificNumber = 0;
    }

    return scientificNumber;
}

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
    }
    return x;
}
