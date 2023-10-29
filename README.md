# Калькулятор отличий.
Данная консольная утилита может работать с файлами трех типов JSON, YAML и YML. 
### Hexlet tests and linter status:
[![Actions Status](https://github.com/m1chendi/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/m1chendi/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/f2749a289ba383eaebbc/maintainability)](https://codeclimate.com/github/m1chendi/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/f2749a289ba383eaebbc/test_coverage)](https://codeclimate.com/github/m1chendi/frontend-project-46/test_coverage)

## Установка: 
```
git clone https://github.com/m1chendi/frontend-project-46.git
cd frontend-project-46
make install
```

## Как использовать:
```
gendiff [options] <filepath1> <filepath2>
```
К примеру:
```
gendiff file1.json file2.json
```
Также у утилиты имеется справка, вызываемая `gendiff -h`:
```
Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```
По умолчанию вывод различий стоит в формате `stylish`, но также это могут быть `plain` и `json`. Для вывода результата в опреденном формате используйте `-f [format]`.
```
gendiff -f plain file1.yaml file2.json
```
## Пример работы:
```
gendiff file1.json file2.json

{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```
## Пример вывода `stylish` формата:
![image](https://github.com/m1chendi/frontend-project-46/assets/113183708/77cb32f3-5570-4530-810e-3119eadca023)

## Пример вывода `plain` формата:
![image](https://github.com/m1chendi/frontend-project-46/assets/113183708/e5f355c4-a99c-4068-95ac-58771cb0c41f)

## Пример вывода `json` формата:
![image](https://github.com/m1chendi/frontend-project-46/assets/113183708/b0af587c-4d2a-434b-bc62-2e832f8648c0)

